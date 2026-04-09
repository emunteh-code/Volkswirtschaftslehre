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
  });
}

async function openConcept(conceptId, tab = 'theorie') {
  await page.goto(`${base}/statistik/`, { waitUntil: 'domcontentloaded' });
  await acceptConsent();
  const navSelector = `.nav-item[data-id="${conceptId}"], #nav-${conceptId}`;
  await page.waitForSelector(navSelector, { timeout: 15000 });
  await page.locator(navSelector).first().evaluate((el) => el.click());
  await page.waitForTimeout(350);
  if (tab !== 'theorie') {
    const tabSelector = `.tab-btn[data-tab="${tab}"]`;
    await page.waitForFunction((selector) => {
      const el = document.querySelector(selector);
      return el && getComputedStyle(el).display !== 'none';
    }, tabSelector, { timeout: 15000 });
    await page.locator(tabSelector).first().evaluate((el) => el.click());
    await page.waitForTimeout(350);
  }
}

async function tabVisible(tab = 'r-anwendung') {
  return page.evaluate((name) => {
    const el = document.querySelector(`.tab-btn[data-tab="${name}"]`);
    return Boolean(el && getComputedStyle(el).display !== 'none');
  }, tab);
}

const conceptsWithR = [
  'deskriptiv',
  'bivariat',
  'schaetzen_eigenschaften_intervalle',
  'testen',
  'regression_schaetzung_inferenz',
  'regression_diagnostik_prognose',
  'varianzanalyse'
];

const result = { concepts: {}, rlab: {} };

for (const conceptId of conceptsWithR) {
  await openConcept(conceptId, 'r-anwendung');
  await page.waitForSelector('[data-r-practice-root]', { timeout: 15000 });
  const firstBlock = page.locator('[data-r-practice-root]').first();
  result.concepts[conceptId] = {
    blockId: await firstBlock.getAttribute('data-block-id'),
    title: await page.locator('.r-orient-title').first().textContent(),
    firstCodeLine: ((await page.locator('[data-r-editor]').first().inputValue()).split('\n')[0] || '').trim(),
    solutionCodeBlocks: await page.locator('.r-solution-code').count()
  };
}

await openConcept('deskriptiv', 'r-anwendung');
await page.screenshot({ path: '.qa/statistik-rtab-deskriptiv.png', fullPage: true });

await openConcept('bivariat', 'r-anwendung');
await page.screenshot({ path: '.qa/statistik-rtab-bivariat.png', fullPage: true });

await openConcept('regression_schaetzung_inferenz', 'r-anwendung');
await page.locator('[data-r-action="toggle-solution"]').first().evaluate((el) => el.click());
await page.waitForTimeout(150);
result.concepts.regression_schaetzung_inferenz.solutionCodeBlocks = await page.locator('.r-solution-code').count();
await page.screenshot({ path: '.qa/statistik-rtab-regression.png', fullPage: true });

await openConcept('varianzanalyse', 'r-anwendung');
await page.screenshot({ path: '.qa/statistik-rtab-anova.png', fullPage: true });

await openConcept('rlab', 'theorie');
result.rlab.rTabVisible = await tabVisible('r-anwendung');
result.rlab.theoryHasPracticeBlocks = await page.locator('[data-r-practice-root]').count();
await page.screenshot({ path: '.qa/statistik-rlab-overview.png', fullPage: true });

console.log(JSON.stringify(result, null, 2));
await browser.close();
