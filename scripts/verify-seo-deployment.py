import sys
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

BASE_DOMAIN = "https://aurexoninternational.com"
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
}

results = {
    "passed": [],
    "failed": [],
    "observations": []
}

def log_pass(msg):
    print(f"  [PASS] {msg}")
    results["passed"].append(msg)

def log_fail(msg):
    print(f"  [FAIL] {msg}")
    results["failed"].append(msg)

def log_obs(msg):
    print(f"  [INFO] {msg}")
    results["observations"].append(msg)

def fetch_url(url, follow_redirects=True):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            body = resp.read().decode('utf-8', errors='replace')
            return {
                "status": resp.status,
                "headers": dict(resp.headers),
                "url": resp.url,
                "body": body
            }
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8', errors='replace') if e.fp else ""
        return {
            "status": e.code,
            "headers": dict(e.headers),
            "url": e.url,
            "body": body
        }
    except Exception as e:
        return {
            "status": None,
            "error": str(e),
            "headers": {},
            "url": url,
            "body": ""
        }

print("==========================================================")
print(" LIVE PRODUCTION SEO VERIFICATION — AUREXON INTERNATIONAL")
print(f" Target: {BASE_DOMAIN}")
print("==========================================================")

# 1. robots.txt
print("\n--- 1. Testing robots.txt ---")
r_robots = fetch_url(f"{BASE_DOMAIN}/robots.txt")
if r_robots["status"] == 200:
    log_pass("robots.txt returned HTTP 200")
    if "User-agent: *" in r_robots["body"] and "Allow: /" in r_robots["body"]:
        log_pass("robots.txt allows all crawlers (User-agent: *, Allow: /)")
    else:
        log_fail("robots.txt missing crawler directives")
    
    if "Sitemap: https://aurexoninternational.com/sitemap.xml" in r_robots["body"]:
        log_pass("robots.txt correctly points to official sitemap.xml")
    else:
        log_fail("robots.txt does not point to official sitemap.xml")
    
    ct = r_robots["headers"].get("Content-Type", "")
    log_obs(f"robots.txt Content-Type: {ct}")
else:
    log_fail(f"robots.txt returned HTTP {r_robots['status']}")

# 2. sitemap.xml
print("\n--- 2. Testing sitemap.xml ---")
r_sitemap = fetch_url(f"{BASE_DOMAIN}/sitemap.xml")
if r_sitemap["status"] == 200:
    log_pass("sitemap.xml returned HTTP 200")
    ct = r_sitemap["headers"].get("Content-Type", "")
    log_obs(f"sitemap.xml Content-Type: {ct}")
    
    try:
        root = ET.fromstring(r_sitemap["body"])
        urls = [elem.text.strip() for elem in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
        expected_urls = [
            f"{BASE_DOMAIN}/",
            f"{BASE_DOMAIN}/about",
            f"{BASE_DOMAIN}/products",
            f"{BASE_DOMAIN}/contact"
        ]
        log_pass(f"sitemap.xml is valid XML with {len(urls)} URLs")
        for exp in expected_urls:
            if exp in urls:
                log_pass(f"  Includes canonical URL: {exp}")
            else:
                log_fail(f"  Missing expected URL: {exp}")
    except Exception as e:
        log_fail(f"sitemap.xml XML parsing failed: {e}")
else:
    log_fail(f"sitemap.xml returned HTTP {r_sitemap['status']}")

# 3. Public Routes (Raw HTML Check for Googlebot)
print("\n--- 3. Testing Public Routes (Raw HTML Metadata) ---")
routes = [
    {
        "path": "/",
        "expected_title": "Aurexon International LLP | Global Metal Scrap Trading & Sourcing",
        "expected_desc_substr": "Aurexon International LLP provides global metal scrap sourcing and trading solutions",
        "expected_canonical": f"{BASE_DOMAIN}/",
        "check_jsonld": True
    },
    {
        "path": "/about",
        "expected_title": "About Us | Aurexon International LLP - Metal Scrap Trading",
        "expected_desc_substr": "Learn about Aurexon International LLP, a global metal scrap trading",
        "expected_canonical": f"{BASE_DOMAIN}/about",
        "check_jsonld": False
    },
    {
        "path": "/products",
        "expected_title": "Metal Scrap Catalogue & Specifications | Aurexon International",
        "expected_desc_substr": "Explore our industrial metal scrap catalogue with technical specifications",
        "expected_canonical": f"{BASE_DOMAIN}/products",
        "check_jsonld": False
    },
    {
        "path": "/contact",
        "expected_title": "Contact Us | Aurexon International LLP - India & Turkey Offices",
        "expected_desc_substr": "Get in touch with Aurexon International LLP for metal scrap sourcing",
        "expected_canonical": f"{BASE_DOMAIN}/contact",
        "check_jsonld": False
    }
]

for r in routes:
    full_url = f"{BASE_DOMAIN}{r['path']}"
    print(f"\nChecking route: {r['path']} ({full_url})")
    resp = fetch_url(full_url)
    
    if resp["status"] == 200:
        log_pass(f"{r['path']} returned HTTP 200")
    else:
        log_fail(f"{r['path']} returned HTTP {resp['status']}")
        continue
    
    body = resp["body"]
    
    # Check Title in raw HTML
    title_match = re.search(r'<title>(.*?)</title>', body, re.IGNORECASE | re.DOTALL)
    if title_match:
        actual_title = title_match.group(1).strip()
        if actual_title == r["expected_title"]:
            log_pass(f"  Title matches: '{actual_title}'")
        else:
            log_fail(f"  Title mismatch. Expected: '{r['expected_title']}', Got: '{actual_title}'")
    else:
        log_fail(f"  No <title> found in raw HTML for {r['path']}")
    
    # Check Meta Description
    desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']', body, re.IGNORECASE)
    if not desc_match:
        desc_match = re.search(r'<meta\s+content=["\']([^"\']+)["\']\s+name=["\']description["\']', body, re.IGNORECASE)
    if desc_match:
        actual_desc = desc_match.group(1).strip()
        if r["expected_desc_substr"] in actual_desc:
            log_pass(f"  Description contains expected substring: '{r['expected_desc_substr']}'")
        else:
            log_fail(f"  Description mismatch. Got: '{actual_desc}'")
    else:
        log_fail(f"  No meta description found in raw HTML for {r['path']}")
        
    # Check Canonical Link
    canon_match = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']', body, re.IGNORECASE)
    if not canon_match:
        canon_match = re.search(r'<link\s+href=["\']([^"\']+)["\']\s+rel=["\']canonical["\']', body, re.IGNORECASE)
    if canon_match:
        actual_canon = canon_match.group(1).strip()
        if actual_canon == r["expected_canonical"]:
            log_pass(f"  Canonical URL matches: '{actual_canon}'")
        else:
            log_fail(f"  Canonical URL mismatch. Expected: '{r['expected_canonical']}', Got: '{actual_canon}'")
    else:
        log_fail(f"  No canonical tag found in raw HTML for {r['path']}")
        
    # Check JSON-LD on homepage
    if r["check_jsonld"]:
        json_ld_matches = re.findall(r'<script\s+type=["\']application/ld\+json["\']>(.*?)</script>', body, re.DOTALL)
        if json_ld_matches:
            log_pass(f"  Found {len(json_ld_matches)} JSON-LD structured data block(s)")
            for idx, raw_json in enumerate(json_ld_matches, 1):
                try:
                    data = json.loads(raw_json)
                    types = [item.get("@type") for item in (data if isinstance(data, list) else [data])]
                    log_pass(f"    Block #{idx} parsed successfully: types={types}")
                    # Check that cloudfront domain is NOT in JSON-LD
                    if "cloudfront.net" in raw_json:
                        log_fail(f"    Block #{idx} still contains cloudfront.net!")
                    else:
                        log_pass(f"    Block #{idx} uses clean official domain (no cloudfront.net references)")
                except Exception as e:
                    log_fail(f"    Block #{idx} failed JSON parsing: {e}")
        else:
            log_fail(f"  No JSON-LD structured data blocks found in raw HTML for {r['path']}")

# 4. Trailing Slash and Unknown Route tests
print("\n--- 4. Testing Trailing Slash and Unknown Routes ---")
resp_trailing = fetch_url(f"{BASE_DOMAIN}/about/")
log_obs(f"GET /about/ returned HTTP {resp_trailing['status']}")
if resp_trailing["status"] == 200:
    log_pass("Trailing slash /about/ resolves successfully")

resp_404 = fetch_url(f"{BASE_DOMAIN}/unknown-seo-test-route-404")
log_obs(f"GET /unknown-seo-test-route-404 returned HTTP {resp_404['status']}")
if "noindex" in resp_404["body"].lower() or "not found" in resp_404["body"].lower() or resp_404["status"] in (200, 404):
    log_pass(f"Unknown route handled gracefully (HTTP {resp_404['status']})")

# 5. www vs non-www domain behavior
print("\n--- 5. Testing www.aurexoninternational.com Behavior ---")
resp_www = fetch_url("https://www.aurexoninternational.com/", follow_redirects=False)
log_obs(f"GET https://www.aurexoninternational.com/ returned HTTP {resp_www['status']}")
if resp_www["url"]:
    log_obs(f"Resolved URL: {resp_www['url']}")

print("\n==========================================================")
print(f"VERIFICATION SUMMARY: {len(results['passed'])} PASSED, {len(results['failed'])} FAILED")
print("==========================================================")

if results["failed"]:
    sys.exit(1)
else:
    sys.exit(0)
