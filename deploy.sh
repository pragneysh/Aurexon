#!/bin/bash
set -e

BUCKET="aurexon-website-prod"
REGION="ap-south-1"
WEBSITE_URL="http://${BUCKET}.s3-website.${REGION}.amazonaws.com"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: required command '$1' was not found. Install it before deploying." >&2
    exit 1
  fi
}

echo "Checking deployment prerequisites..."
require_command node
require_command npm
require_command aws

echo "Verifying AWS CLI authentication..."
aws sts get-caller-identity >/dev/null

echo "Verifying S3 bucket access: ${BUCKET}"
aws s3api head-bucket --bucket "$BUCKET" >/dev/null

echo "Building Aurexon production website..."
npm run build

if [ ! -f "dist/index.html" ]; then
  echo "Error: dist/index.html was not found after build. Deployment stopped." >&2
  exit 1
fi

echo "Configuring S3 static website hosting..."
aws s3 website "s3://${BUCKET}" \
  --index-document index.html \
  --error-document index.html

echo "Configuring bucket public access settings for direct S3 website hosting..."
aws s3api put-public-access-block \
  --bucket "$BUCKET" \
  --public-access-block-configuration \
  "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false"

BUCKET_POLICY=$(cat <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BUCKET/*"
    }
  ]
}
EOF
)

echo "Applying read-only public bucket policy for website objects..."
aws s3api put-bucket-policy \
  --bucket "$BUCKET" \
  --policy "$BUCKET_POLICY"

echo "Deploying immutable Vite assets..."
aws s3 sync dist/assets/ "s3://${BUCKET}/assets/" \
  --delete \
  --cache-control "public,max-age=31536000,immutable"

echo "Deploying HTML, logo, and other public files..."
aws s3 sync dist/ "s3://${BUCKET}/" \
  --delete \
  --exclude "assets/*" \
  --cache-control "no-cache,no-store,must-revalidate"

echo
echo "Public S3 website hosting is enabled for temporary direct testing."
echo "For final production, use CloudFront with HTTPS and a private S3 origin."
echo

if command -v curl >/dev/null 2>&1; then
  echo "Verifying website response with curl..."
  HTTP_STATUS="$(curl -I -L -s -o /dev/null -w "%{http_code}" "$WEBSITE_URL" || true)"
  if [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "301" ] || [ "$HTTP_STATUS" = "302" ]; then
    echo "Website verification: PASSED"
  else
    echo "Warning: Website verification returned HTTP status: ${HTTP_STATUS:-unavailable}"
  fi
else
  echo "curl not found. Skipping optional website verification."
fi

echo
echo "========================================"
echo " AUREXON DEPLOYMENT SUCCESSFUL"
echo "========================================"
echo
echo "Live Website:"
echo
echo "$WEBSITE_URL"
echo
echo "========================================"
