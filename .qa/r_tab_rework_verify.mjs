import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const context = await browser.newContext({ viewport: { width: 1440, height: 1200 } });
const page = await context.newPage();
const base = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';

async function acceptConsent() {
  await page.evaluate(() => {
    try {
      localStorage.setItem('cookieConsentChoice', 'accepted');
    } catch {}
    if (typeof window.__acceptConsent === 'function') {
      window.__acceptConsent();
    }
  });
}

async function openConcept(modulePath, conceptId, tab = 'theorie') {
  await page.goto(`${base}/${modulePath}/`, { waitUntil: 'domcontentloaded' });
  await acceptConsent();
  await page.waitForSelector(`.nav-item[data-id="${conceptId}"], #nav-${conceptId}`, { timeout: 15000 });
  await page.click(`.nav-item[data-id="${conceptId}"], #nav-${conceptId}`);
  await page.waitForTimeout(350);
  if (tab !== 'theorie') {
    const tabSelector = `.tab-btn[data-tab="${tab}"]`;
    await page.waitForFunction((selector) => {
      const el = document.querySelector(selector);
      return el && getComputedStyle(el).display !== 'none';
    }, tabSelector, { timeout: 15000 });
    await page.click(tabSelector);
    await page.waitForTimeout(350);
  }
}

const result = { math: {}, oek: {}, stats: {} };

await openConcept('mathematik', 'funktionen_gleichungen', 'r-anwendung');
await page.waitForSelector('[data-r-practice-root]');
result.math.blockId1 = await page.locator('[data-r-practice-root]').first().getAttribute('data-block-id');
result.math.briefs1 = await page.locator('.r-orient-panel-kicker').allTextContents();
const mathEditor1 = page.locator('[data-r-editor]').first();
const mathStarter1 = await mathEditor1.inputValue();
await mathEditor1.fill(`${mathStarter1}\n# TEMP MARKER`);
await page.waitForTimeout(150);
await page.screenshot({ path: '.qa/r-rework-math-algebra.png', fullPage: true });

await openConcept('mathematik', 'summen_logik_beweise', 'r-anwendung');
await page.waitForSelector('[data-r-practice-root]');
result.math.blockId2 = await page.locator('[data-r-practice-root]').first().getAttribute('data-block-id');
const mathEditor2 = page.locator('[data-r-editor]').first();
const mathStarter2 = await mathEditor2.inputValue();
result.math.refreshClosed = !mathStarter2.includes('TEMP MARKER');
await page.locator('[data-r-action="toggle-solution"]').first().click();
await page.waitForTimeout(120);
result.math.solutionCodeVisible = await page.locator('.r-solution-code').count();
await page.screenshot({ path: '.qa/r-rework-math-exp-log.png', fullPage: true });

await openConcept('oekonometrie', 'matrix_notation', 'r-anwendung');
await page.waitForSelector('[data-r-practice-root]');
result.oek.editBlockId = await page.locator('[data-r-practice-root]').first().getAttribute('data-block-id');
await page.locator('[data-r-action="toggle-solution"]').first().click();
await page.waitForTimeout(120);
result.oek.editHasCode = await page.locator('.r-solution-code').count() > 0;
await page.screenshot({ path: '.qa/r-rework-oek-matrix.png', fullPage: true });

await openConcept('oekonometrie', 'model_objects', 'r-anwendung');
await page.waitForSelector('[data-r-practice-root]');
result.oek.interpretBlockId = await page.locator('[data-r-practice-root]').first().getAttribute('data-block-id');
await page.locator('[data-r-action="toggle-solution"]').first().click();
await page.waitForTimeout(120);
result.oek.interpretNote = await page.locator('.r-solution-note').first().textContent().catch(() => '');
await page.screenshot({ path: '.qa/r-rework-oek-model-objects.png', fullPage: true });

await openConcept('statistik', 'deskriptiv', 'r-anwendung');
await page.waitForSelector('[data-r-practice-root]');
result.stats.blockId1 = await page.locator('[data-r-practice-root]').first().getAttribute('data-block-id');
result.stats.briefs = await page.locator('.r-orient-panel-kicker').allTextContents();
result.stats.firstCodeLine1 = (await page.locator('[data-r-editor]').first().inputValue()).split('\n')[0];
await page.screenshot({ path: '.qa/r-rework-statistik-deskriptiv.png', fullPage: true });

await openConcept('statistik', 'regression_schaetzung_inferenz', 'r-anwendung');
await page.waitForSelector('[data-r-practice-root]');
result.stats.blockId2 = await page.locator('[data-r-practice-root]').first().getAttribute('data-block-id');
result.stats.firstCodeLine2 = (await page.locator('[data-r-editor]').first().inputValue()).split('\n')[0];
await page.locator('[data-r-action="toggle-solution"]').first().evaluate((el) => el.click());
await page.waitForTimeout(120);
result.stats.solutionCodeVisible = await page.locator('.r-solution-code').count();
await page.screenshot({ path: '.qa/r-rework-statistik-regression.png', fullPage: true });

console.log(JSON.stringify(result, null, 2));
await browser.close();
