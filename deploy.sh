#!/usr/bin/env bash
# ==============================================================================
# Aurexon International LLP — Production Deployment Script
# ==============================================================================
# Deploys production build from dist/ to private S3 bucket and invalidates
# CloudFront edge caches.
# ==============================================================================

set -euo pipefail

BUCKET="aurexon-website-prod"
REGION="ap-south-1"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: required command '$1' was not found. Install it before deploying." >&2
    exit 1
  fi
}

echo "=========================================================="
echo " AUREXON — SECURE CLOUDFRONT + S3 DEPLOYMENT"
echo "=========================================================="
echo

echo "[1/6] Checking deployment prerequisites..."
require_command node
require_command npm
require_command aws

echo "[2/6] Verifying AWS CLI authentication..."
CALLER_IDENTITY=$(aws sts get-caller-identity --output json)
ACCOUNT_ID=$(node -e "console.log(JSON.parse(process.argv[1]).Account);" "$CALLER_IDENTITY")
USER_ARN=$(node -e "console.log(JSON.parse(process.argv[1]).Arn);" "$CALLER_IDENTITY")
echo "  Authenticated as: $USER_ARN (Account: $ACCOUNT_ID)"

echo "[3/6] Verifying private S3 bucket access: ${BUCKET}..."
aws s3api head-bucket --bucket "$BUCKET" >/dev/null
echo "  S3 bucket '$BUCKET' confirmed accessible."

echo "[4/6] Building Aurexon production website..."
npm run build

if [ ! -f "dist/index.html" ]; then
  echo "Error: dist/index.html was not found after build. Deployment stopped." >&2
  exit 1
fi

echo "[5/6] Synchronizing production assets to S3..."
# Upload hashed immutable Vite assets with 1-year cache
echo "  Uploading hashed assets (immutable cache)..."
aws s3 sync dist/assets/ "s3://${BUCKET}/assets/" \
  --delete \
  --cache-control "public,max-age=31536000,immutable"

# Upload HTML, images, and public files with no-cache revalidation
echo "  Uploading HTML and public assets (no-cache revalidation)..."
aws s3 sync dist/ "s3://${BUCKET}/" \
  --delete \
  --exclude "assets/*" \
  --cache-control "no-cache,no-store,must-revalidate"

# Upload extensionless route keys so CloudFront serves prerendered HTML directly on clean URLs
echo "  Uploading clean extensionless route snapshots (/about, /products, /contact)..."
aws s3 cp dist/about/index.html "s3://${BUCKET}/about" \
  --content-type "text/html" \
  --cache-control "no-cache,no-store,must-revalidate"
aws s3 cp dist/products/index.html "s3://${BUCKET}/products" \
  --content-type "text/html" \
  --cache-control "no-cache,no-store,must-revalidate"
aws s3 cp dist/contact/index.html "s3://${BUCKET}/contact" \
  --content-type "text/html" \
  --cache-control "no-cache,no-store,must-revalidate"

echo "[6/6] Invalidating CloudFront cache..."
# Look up Distribution ID from environment variable or active distribution
DISTRIBUTION_ID="${AWS_CLOUDFRONT_DISTRIBUTION_ID:-E1ZQHFKR1D7XNY}"
DISTRIBUTION_DOMAIN=""

if [ -z "$DISTRIBUTION_ID" ]; then
  DIST_INFO=$(node -e "
    const { execSync } = require('child_process');
    try {
      const out = JSON.parse(execSync('aws cloudfront list-distributions --output json').toString());
      const items = out.DistributionList?.Items || [];
      const match = items.find(d => {
        const origins = d.Origins?.Items || [];
        return origins.some(o => o.DomainName.includes('$BUCKET.s3'));
      });
      if (match) {
        console.log(JSON.stringify({ id: match.Id, domain: match.DomainName }));
      } else {
        console.log(JSON.stringify({ id: '', domain: '' }));
      }
    } catch(e) {
      console.log(JSON.stringify({ id: '', domain: '' }));
    }
  ")
  DISTRIBUTION_ID=$(node -e "console.log(JSON.parse(process.argv[1]).id);" "$DIST_INFO")
  DISTRIBUTION_DOMAIN=$(node -e "console.log(JSON.parse(process.argv[1]).domain);" "$DIST_INFO")
fi

if [ -n "$DISTRIBUTION_ID" ]; then
  echo "  Creating invalidation for CloudFront distribution: $DISTRIBUTION_ID..."
  INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --query "Invalidation.Id" \
    --output text)
  echo "  Invalidation submitted: $INVALIDATION_ID"
  
  if [ -z "$DISTRIBUTION_DOMAIN" ]; then
    DISTRIBUTION_DOMAIN=$(aws cloudfront get-distribution --id "$DISTRIBUTION_ID" --query "Distribution.DomainName" --output text 2>/dev/null || echo "")
  fi
else
  echo "  Warning: No CloudFront distribution ID found for '$BUCKET'."
  echo "  Run './setup-cloudfront.sh' first to provision CloudFront with OAC."
fi

echo
echo "=========================================================="
echo " AUREXON DEPLOYMENT SUCCESSFUL"
echo "=========================================================="
if [ -n "$DISTRIBUTION_DOMAIN" ]; then
  echo
  echo "Live Secure Website:"
  echo "  https://${DISTRIBUTION_DOMAIN}"
  echo
fi
echo "=========================================================="
