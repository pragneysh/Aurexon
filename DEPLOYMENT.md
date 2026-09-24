# Aurexon AWS Deployment

This project deploys the built React + Vite static site from `dist/` to AWS S3 through GitHub Actions. CloudFront is optional for the first deployment, but the workflow is ready to invalidate a distribution when one is configured.

## 1. S3 Bucket Setup

Create an S3 bucket for the production website. Do not store source files in the bucket; only the production build output from `dist/` is deployed.

Recommended production architecture:

- S3 stores static files.
- CloudFront serves the site over HTTPS.
- A custom domain points to CloudFront.
- S3 public website hosting is optional if CloudFront uses an S3 website endpoint; for private S3 origins, configure CloudFront origin access according to your AWS setup.

Do not commit bucket names, AWS account IDs, credentials, or distribution IDs to the repository.

## 2. GitHub Repository Secrets

Add these required repository secrets in GitHub:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_S3_BUCKET`

Optional:

- `AWS_CLOUDFRONT_DISTRIBUTION_ID`

If `AWS_CLOUDFRONT_DISTRIBUTION_ID` is empty or not configured, the workflow still deploys to S3 and skips CloudFront invalidation.

## 3. IAM Requirements

Use the smallest practical IAM policy for the GitHub Actions deployment user or role. Replace placeholders with your real bucket name and, if used, your CloudFront distribution ARN.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListDeploymentBucket",
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME"
    },
    {
      "Sid": "ManageDeploymentObjects",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    },
    {
      "Sid": "InvalidateCloudFrontWhenEnabled",
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
    }
  ]
}
```

If CloudFront is not configured yet, omit the `InvalidateCloudFrontWhenEnabled` statement until you add a distribution.

## 4. How Automatic Deployment Works

The workflow file is `.github/workflows/deploy.yml`.

It runs on:

- Pushes to `main`
- Manual `workflow_dispatch`

Workflow steps:

1. Checkout repository.
2. Setup Node.js 22 with npm cache.
3. Run `npm ci`.
4. Run `npm run lint`.
5. Run `npm run build`.
6. Configure AWS credentials from GitHub Secrets.
7. Sync built assets from `dist/` to S3.
8. Delete old S3 files that no longer exist in `dist/`.
9. Invalidate CloudFront when `AWS_CLOUDFRONT_DISTRIBUTION_ID` is configured.

## 5. Manual Deployment Trigger

In GitHub:

1. Open the repository.
2. Go to **Actions**.
3. Select **Deploy Aurexon Website**.
4. Click **Run workflow**.
5. Choose the branch, then run it.

## 6. CloudFront Setup

Create a CloudFront distribution with the S3 bucket as the origin. Use an ACM certificate in `us-east-1` for HTTPS when attaching a custom domain.

After CloudFront is ready, add this optional GitHub secret:

- `AWS_CLOUDFRONT_DISTRIBUTION_ID`

The workflow will then run:

```bash
aws cloudfront create-invalidation --distribution-id "$AWS_CLOUDFRONT_DISTRIBUTION_ID" --paths "/*"
```

## 7. SPA Fallback Configuration

This site uses React Router routes such as:

- `/`
- `/about`
- `/products`
- `/gallery`
- `/contact`

Do not switch to hash routing for deployment.

For CloudFront production routing, configure custom error responses so direct visits and refreshes on nested routes still return the React entry point:

- 403 response: return `/index.html` with HTTP 200
- 404 response: return `/index.html` with HTTP 200

This allows direct navigation to `/products`, `/contact`, and `/gallery` to load the app correctly.

## 8. Cache Strategy

The workflow deploys Vite hashed assets separately:

```bash
aws s3 sync dist/assets/ "s3://$AWS_S3_BUCKET/assets/" \
  --delete \
  --cache-control "public,max-age=31536000,immutable"
```

Then it deploys HTML and other public files with no long-term caching:

```bash
aws s3 sync dist/ "s3://$AWS_S3_BUCKET/" \
  --delete \
  --exclude "assets/*" \
  --cache-control "no-cache,no-store,must-revalidate"
```

This keeps hashed assets cacheable while ensuring `index.html` updates quickly after each deployment.

## 9. Custom Domain and HTTPS Overview

For a production custom domain:

1. Request or import an ACM certificate in `us-east-1`.
2. Add the custom domain as a CloudFront alternate domain name.
3. Attach the ACM certificate to CloudFront.
4. Point DNS to CloudFront using an alias `A`/`AAAA` record or CNAME, depending on your DNS provider and domain type.
5. Keep S3 bucket access aligned with your chosen CloudFront origin model.

## 10. Troubleshooting

Common checks:

- Confirm all required GitHub Secrets are present.
- Confirm `AWS_REGION` matches the region where the S3 bucket exists.
- Confirm `AWS_S3_BUCKET` contains only the bucket name, not `s3://`.
- Confirm IAM allows `s3:ListBucket`, `s3:GetObject`, `s3:PutObject`, and `s3:DeleteObject`.
- If CloudFront invalidation fails, confirm `AWS_CLOUDFRONT_DISTRIBUTION_ID` is correct and IAM allows `cloudfront:CreateInvalidation`.
- If nested routes show S3 or CloudFront 403/404 pages, configure CloudFront custom error responses for 403 and 404 to return `/index.html` with HTTP 200.
- If users see an older build, confirm CloudFront invalidation completed and `index.html` is not cached with immutable headers.

## 11. What Is Not Deployed

The workflow deploys only the production build output in `dist/`.

It does not upload:

- `src/`
- `node_modules/`
- `.git/`
- `.env` files
- local development files
