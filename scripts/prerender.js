// ==============================================================================
// Aurexon International LLP — Post-Build SEO Prerender Script
// ==============================================================================
// Generates static route-specific HTML files in dist/ so that search engine
// crawlers and social media bots (WhatsApp, LinkedIn, Twitter/X, Facebook)
// receive immediate, crawlable metadata without relying on client-side JS.
// Compatible with standard S3 + CloudFront static website hosting.
// ==============================================================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');
const indexHtmlPath = path.resolve(distDir, 'index.html');

const PRODUCTION_ORIGIN = 'https://aurexoninternational.com';

const routes = [
  {
    path: '/about',
    title: 'About Us | Aurexon International LLP - Metal Scrap Trading',
    description:
      'Learn about Aurexon International LLP, a global metal scrap trading, sourcing, and recycling business with operations in Ahmedabad, India and Darıca, Turkey.',
    canonical: `${PRODUCTION_ORIGIN}/about`,
  },
  {
    path: '/products',
    title: 'Metal Scrap Catalogue & Specifications | Aurexon International',
    description:
      'Explore our industrial metal scrap catalogue with technical specifications, ISRI codes, and chemical grades across aluminium, copper, brass, and steel.',
    canonical: `${PRODUCTION_ORIGIN}/products`,
  },
  {
    path: '/contact',
    title: 'Contact Us | Aurexon International LLP - India & Turkey Offices',
    description:
      'Get in touch with Aurexon International LLP for metal scrap sourcing, trading quotes, and partnership inquiries. Offices in Ahmedabad, India and Darıca, Turkey.',
    canonical: `${PRODUCTION_ORIGIN}/contact`,
  },
];

function prerender() {
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`Error: Base template ${indexHtmlPath} not found. Run vite build first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  console.log('[SEO Prerender] Generating static HTML snapshots for public routes...');

  routes.forEach((route) => {
    let html = baseHtml;

    // 1. Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // 2. Replace Meta Description
    html = html.replace(
      /<meta\s+name=["']description["'][^>]*content=["'][^"']*["'][^>]*>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // 3. Replace Canonical Link
    html = html.replace(
      /<link\s+rel=["']canonical["'][^>]*href=["'][^"']*["'][^>]*>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 4. Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property=["']og:title["'][^>]*content=["'][^"']*["'][^>]*>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["'][^>]*content=["'][^"']*["'][^>]*>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["'][^>]*content=["'][^"']*["'][^>]*>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // 5. Replace Twitter Card Tags
    html = html.replace(
      /<meta\s+name=["']twitter:title["'][^>]*content=["'][^"']*["'][^>]*>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["'][^>]*content=["'][^"']*["'][^>]*>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:url["'][^>]*content=["'][^"']*["'][^>]*>/i,
      `<meta name="twitter:url" content="${route.canonical}" />`
    );

    // Create target directory (e.g. dist/about/)
    const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`  ✓ Generated: dist${route.path}/index.html (${route.title.substring(0, 45)}...)`);
  });

  console.log('[SEO Prerender] Successfully generated all static route snapshots.');
}

prerender();
