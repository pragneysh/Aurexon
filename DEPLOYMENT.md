# Aurexon International LLP — AWS Production Deployment Guide

This document describes the production hosting architecture, security model, and automated deployment pipelines for the Aurexon International LLP web application.

---

## Architecture Overview

```
                                      +------------------------------------+
                                      |         End Users / Browsers       |
                                      +------------------------------------+
                                                         |
                                                    HTTPS (443)
                                                         v
                                      +------------------------------------+
                                      |     AWS CloudFront Distribution    |
                                      |     - Origin Access Control (OAC)  |
                                      |     - PriceClass_200               |
                                      |     - HTTP/2 & HTTP/3 enabled      |
                                      |     - SPA Routing (403/404 -> 200) |
                                      +------------------------------------+
                                                         |
                                                Signed SigV4 Requests
                                                         v
                                      +------------------------------------+
                                      |        AWS S3 Bucket (Private)     |
                                      |     - aurexon-website-prod         |
                                      |     - Region: ap-south-1           |
                                      |     - Block Public Access: ENABLED |
                                      |     - Bucket Policy: CloudFront only
                                      +------------------------------------+
```

1. **Origin Storage**: Static website assets compiled with Vite are stored in an Amazon S3 bucket (`aurexon-website-prod`) in `ap-south-1` (Mumbai).
2. **Access Security**: All direct public access to the S3 bucket is blocked. The bucket policy permits read operations (`s3:GetObject`) exclusively to the CloudFront service principal via Origin Access Control (OAC).
3. **Edge Delivery**: CloudFront distributes content globally over HTTPS with TLS 1.2/1.3, HTTP/2, HTTP/3, and automatic compression (gzip/brotli).
4. **Client-Side Routing**: Custom error response rules map HTTP 403 and 404 status codes back to `/index.html` with HTTP 200, enabling React Router single-page navigation without server-side routing failures.

---

## 1. Initial CloudFront & OAC Setup

An automated setup script is provided in the repository:

```bash
./setup-cloudfront.sh
```

*(On Windows, execute via Git Bash).*

### What `setup-cloudfront.sh` Executes:
1. Validates AWS CLI credentials (`aws sts get-caller-identity`).
2. Confirms existence and region of `aurexon-website-prod`.
3. Checks whether a CloudFront distribution already targets `aurexon-website-prod` (preventing accidental duplicate resource creation).
4. Configures Origin Access Control (`aurexon-website-prod-oac`) with `sigv4` and `always` signing behavior.
5. Deploys a CloudFront distribution with:
   - S3 REST origin endpoint (`aurexon-website-prod.s3.ap-south-1.amazonaws.com`).
   - Default root object: `index.html`.
   - Viewer Protocol Policy: `redirect-to-https`.
   - HTTP/2 and HTTP/3 support.
   - Price class: `PriceClass_200` (North America, Europe, Asia, Middle East, Africa).
   - IPv6 enabled.
   - Managed Cache Policy: `658327ea-f89d-4fab-a63d-7e88639e58f6` (CachingOptimized).
6. Configures custom error responses for Single Page Application (SPA) fallback:
   - Error 403 $\rightarrow$ `/index.html` (HTTP 200, Error Caching Min TTL: 0)
   - Error 404 $\rightarrow$ `/index.html` (HTTP 200, Error Caching Min TTL: 0)
7. Applies a locked-down bucket policy granting `s3:GetObject` only to the new CloudFront distribution ARN.
8. Enables S3 Block Public Access (`BlockPublicAcls`, `IgnorePublicAcls`, `BlockPublicPolicy`, `RestrictPublicBuckets` all set to `true`).

---

## 2. Private S3 Bucket Policy & Permissions

The S3 bucket does not permit public reads. The bucket policy strictly limits access to the specific CloudFront distribution:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::aurexon-website-prod/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::882248517276:distribution/E1ZQHFKR1D7XNY"
        }
      }
    }
  ]
}
```

### S3 Block Public Access Configuration
All four flags are enabled:
* `BlockPublicAcls: true`
* `IgnorePublicAcls: true`
* `BlockPublicPolicy: true`
* `RestrictPublicBuckets: true`

---

## 3. React Router SPA Fallback Configuration

Because Aurexon uses client-side routing (`react-router-dom`), navigating directly to or refreshing pages such as:
* `/`
* `/about`
* `/products`
* `/contact`
* `/products?category=copper`

would result in an S3 `403 Access Denied` (or `404 NoSuchKey`) because no static object named `about` or `products` exists on S3.

CloudFront custom error responses intercept these errors and deliver `/index.html` with an HTTP 200 status code:
* **403 Forbidden** $\rightarrow$ Response Page Path: `/index.html`, Response Code: `200`, TTL: `0s`
* **404 Not Found** $\rightarrow$ Response Page Path: `/index.html`, Response Code: `200`, TTL: `0s`

The React application loads, mounts the client-side router, and renders the requested view without full-page reloads. The existing `/gallery` redirect to `/products` is handled inside the application bundle.

---

## 4. Cache & Asset Invalidation Strategy

Vite bundles assets using content-hashed filenames (e.g., `dist/assets/index-BgNCD6v4.js`).

### S3 Sync Strategy
1. **Hashed Assets (`dist/assets/`)**:
   ```bash
   aws s3 sync dist/assets/ s3://aurexon-website-prod/assets/ \
     --delete \
     --cache-control "public,max-age=31536000,immutable"
   ```
   These files are cached by CloudFront and client browsers for up to 1 year without revalidation because any code change generates a new filename.

2. **Entry Points & Public Files (`index.html`, `logo/*`, etc.)**:
   ```bash
   aws s3 sync dist/ s3://aurexon-website-prod/ \
     --delete \
     --exclude "assets/*" \
     --cache-control "no-cache,no-store,must-revalidate"
   ```
   `index.html` is never cached permanently. Browsers revalidate the file on each visit, guaranteeing users immediately receive new releases.

3. **CloudFront Invalidation**:
   After uploading new assets, an edge invalidation clears cached root objects:
   ```bash
   aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"
   ```

---

## 5. Deployment Pipelines

### Local CLI Deployment
To build and deploy from a local terminal:

```bash
npm run build
./deploy.sh
```

`deploy.sh` automatically checks for prerequisites, builds the bundle, uploads hashed assets with immutable caching, syncs entry files with revalidation headers, detects the CloudFront distribution, submits an edge invalidation, and prints the live HTTPS domain.

### GitHub Actions CI/CD Pipeline
The workflow in `.github/workflows/deploy.yml` triggers automatically on pushes to `main` and supports manual dispatch (`workflow_dispatch`).

#### Required GitHub Secrets:
Set the following secrets in **GitHub Repository Settings $\rightarrow$ Secrets and variables $\rightarrow$ Actions**:

| Secret Name | Value Example | Description |
| :--- | :--- | :--- |
| `AWS_ACCESS_KEY_ID` | `AKIA...` | IAM access key for CI/CD deployer |
| `AWS_SECRET_ACCESS_KEY` | `wJalrXUtn...` | IAM secret access key |
| `AWS_REGION` | `ap-south-1` | Target AWS region for S3 |
| `AWS_S3_BUCKET` | `aurexon-website-prod` | Destination S3 bucket |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | `E1ZQHFKR1D7XNY` | Active CloudFront Distribution ID for edge invalidations |

#### Least-Privilege IAM Policy for GitHub Actions
Attach this minimal IAM policy to the deployment user or role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3BucketList",
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::aurexon-website-prod"
    },
    {
      "Sid": "S3ObjectManagement",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::aurexon-website-prod/*"
    },
    {
      "Sid": "CloudFrontInvalidation",
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::882248517276:distribution/E1ZQHFKR1D7XNY"
    }
  ]
}
```

#### Optional: GitHub Actions OIDC Authentication (Keyless)
To eliminate long-lived IAM keys, configure AWS IAM OpenID Connect (OIDC) identity provider for GitHub:
1. Add `https://token.actions.githubusercontent.com` as an IAM Identity Provider in AWS.
2. Create an IAM Role with trust policy condition matching `repo:OWNER/Aurexon:ref:refs/heads/main`.
3. In `.github/workflows/deploy.yml`, uncomment `id-token: write` and provide `role-to-assume: arn:aws:iam::882248517276:role/AurexonGitHubDeployer`.

---

## 6. Future Custom Domain & SSL Setup

When ready to point a custom domain (e.g., `aurexon.com` or `www.aurexon.com`):

1. **Request ACM Certificate in `us-east-1` (Mandatory for CloudFront)**:
   * Open AWS Certificate Manager in region **US East (N. Virginia) `us-east-1`**.
   * Request a public certificate for `aurexon.com` and `*.aurexon.com`.
   * Add the required CNAME records in your DNS provider (e.g., Route 53, Cloudflare, GoDaddy) to validate ownership.
2. **Attach Certificate to CloudFront**:
   * Open the CloudFront distribution settings.
   * Add Alternate Domain Names (CNAMEs): `aurexon.com`, `www.aurexon.com`.
   * Select the validated ACM SSL/TLS certificate.
3. **Update DNS Records**:
   * **Apex Domain (`aurexon.com`)**: If using Route 53, create an `A` record with Alias targeting the CloudFront distribution domain. If using external DNS, use CNAME flattening or an `ALIAS`/`ANAME` record.
   * **Subdomain (`www.aurexon.com`)**: Create a `CNAME` pointing to `dxxxxxxxxxxxxx.cloudfront.net`.

---

## 7. Troubleshooting

* **Issue: 403 AccessDenied when navigating directly to `/products` or `/about`**:
  * *Resolution*: Ensure CloudFront custom error responses for 403 and 404 are configured with Response Page Path `/index.html` and HTTP 200.
* **Issue: JavaScript MIME Type Error ("Expected a JavaScript module script but the server responded with a MIME type of text/html")**:
  * *Resolution*: This occurs when a browser requests an old or non-existent JS chunk and the server returns `index.html`. Invalidate the CloudFront cache (`/*`) so the browser fetches the latest HTML referencing active chunks.
* **Issue: Direct S3 website endpoint is accessible without HTTPS**:
  * *Resolution*: Disable S3 Static Website Hosting and ensure S3 Block Public Access is active. S3 requests should only pass through CloudFront with OAC.
* **Issue: Deployment fails on S3 sync**:
  * *Resolution*: Verify that the IAM user or role has `s3:ListBucket` on the bucket ARN and `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject` on the bucket ARN with `/*`.
* **Issue: CloudFront Invalidation AccessDenied**:
  * *Resolution*: Confirm the IAM policy includes `cloudfront:CreateInvalidation` on the specific distribution ARN.
