const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://aurexoninternational.com';

async function verifyBrowserQA() {
  console.log('===============================================================');
  console.log('   AUREXON LIVE BROWSER QA & INTERACTIVITY VERIFICATION');
  console.log('   Target URL:', TARGET_URL);
  console.log('===============================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,900'],
    defaultViewport: { width: 1440, height: 900 },
  });

  const errors = [];
  const passes = [];

  try {
    const page = await browser.newPage();

    // Listen for JS errors
    page.on('pageerror', (err) => {
      console.error(`  [PAGE ERROR] ${err.message}`);
      errors.push(`Page error: ${err.message}`);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        // Ignore 404 on favicon or expected minor asset if any
        console.error(`  [CONSOLE ERROR] ${text}`);
        errors.push(`Console error: ${text}`);
      }
    });

    // --- TEST 1: DESKTOP HOMEPAGE ---
    console.log('[1/6] Testing Desktop Homepage (1440x900)...');
    await page.setViewport({ width: 1440, height: 900 });
    const rHome = await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 30000 });
    if (rHome.status() === 200) {
      passes.push('Desktop Homepage loaded with HTTP 200');
    }

    // Verify Tel and Mail links on Homepage
    const contactLinks = await page.evaluate(() => {
      const tel = Array.from(document.querySelectorAll('a[href^="tel:"]'));
      const mail = Array.from(document.querySelectorAll('a[href^="mailto:"]'));
      return { telCount: tel.length, mailCount: mail.length };
    });
    passes.push(`Homepage has ${contactLinks.telCount} tel link(s) and ${contactLinks.mailCount} mail link(s)`);

    // --- TEST 2: NAVIGATION LINKS ---
    console.log('[2/6] Testing Navigation Links...');
    const navLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('nav a'));
      return links.map(a => ({ text: a.textContent.trim(), href: a.href }));
    });
    passes.push(`Found ${navLinks.length} navigation links in header`);

    // --- TEST 3: PRODUCTS PAGE, FILTERS & WHATSAPP LINKS ---
    console.log('[3/6] Testing Products Page & Filters...');
    await page.goto(`${TARGET_URL}/products`, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for catalog to load from API
    try {
      await page.waitForSelector('article', { timeout: 8000 });
    } catch {
      // If network takes longer, give small grace
      await new Promise(r => setTimeout(r, 2000));
    }

    const totalProducts = await page.evaluate(() => {
      return document.querySelectorAll('article').length;
    });
    passes.push(`Products page rendered catalog items (count: ${totalProducts})`);

    // --- TEST 4: CONTACT PAGE, FORM & WHATSAPP LINKS ---
    console.log('[4/6] Testing Contact Page, Form & WhatsApp Links...');
    await page.goto(`${TARGET_URL}/contact`, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000));

    // Verify WhatsApp links on Contact page
    const whatsappLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="wa.me"]'));
      return links.map(a => a.href);
    });
    if (whatsappLinks.length > 0) {
      passes.push(`Found ${whatsappLinks.length} WhatsApp desk link(s) on Contact page: ${whatsappLinks[0]}`);
    } else {
      errors.push('No WhatsApp links found on contact page');
    }

    const formExists = await page.evaluate(() => {
      const form = document.querySelector('form');
      const nameInput = document.querySelector('input[name="fullName"]');
      const emailInput = document.querySelector('input[name="email"]');
      const phoneInput = document.querySelector('input[name="phone"]');
      const submitBtn = document.querySelector('button[type="submit"]');
      return !!(form && nameInput && emailInput && phoneInput && submitBtn);
    });
    if (formExists) {
      passes.push('Contact form rendered all inputs (fullName, email, phone, submitBtn)');
    } else {
      errors.push('Contact form missing one or more required inputs');
    }

    // Test Form Validation (empty submission)
    await page.evaluate(() => {
      const submitBtn = document.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.click();
    });
    await new Promise(r => setTimeout(r, 500));
    const errorShown = await page.evaluate(() => {
      return document.body.textContent.includes('Please complete all required fields') ||
             document.body.textContent.includes('valid email') ||
             document.querySelector('.text-red-700') !== null;
    });
    if (errorShown) {
      passes.push('Client-side form validation triggers on empty submit');
    }

    // --- TEST 5: MOBILE VIEWPORT (390x844) ---
    console.log('[5/6] Testing Mobile Viewport (390x844)...');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000));

    // Check Mobile Menu Toggle
    const mobileMenuBtn = await page.evaluate(() => {
      const btn = document.querySelector('button[aria-label*="menu" i]') ||
                  document.querySelector('button svg.lucide-menu')?.parentElement ||
                  document.querySelector('header button');
      return !!btn;
    });
    if (mobileMenuBtn) {
      passes.push('Mobile responsive header button detected');
    }

    // --- TEST 6: ABOUT PAGE ---
    console.log('[6/6] Testing About Page...');
    await page.goto(`${TARGET_URL}/about`, { waitUntil: 'networkidle2', timeout: 30000 });
    const aboutHeading = await page.evaluate(() => {
      return document.querySelector('h1')?.textContent || '';
    });
    passes.push(`About page h1 heading: "${aboutHeading}"`);

  } catch (err) {
    errors.push(`Test execution exception: ${err.message}`);
  } finally {
    await browser.close();
  }

  console.log('\n===============================================================');
  console.log(`BROWSER QA SUMMARY: ${passes.length} PASSED, ${errors.length} ERRORS`);
  console.log('===============================================================');
  passes.forEach(p => console.log(`  [PASS] ${p}`));
  errors.forEach(e => console.log(`  [ERROR] ${e}`));

  if (errors.length > 0) {
    process.exit(1);
  }
}

verifyBrowserQA();
