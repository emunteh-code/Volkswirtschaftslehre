import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4179';

async function waitForApp(page) {
  await page.waitForFunction(() => window.__jsLoaded && typeof window.__renderHome === 'function' && typeof window.__navigate === 'function', { timeout: 20000 });
}

async function openMikro(browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });
  await page.goto(`${baseUrl}/mikro1/index.html?qa=1`, { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.setItem('mikro_consent_v1', '1'));
  await page.reload({ waitUntil: 'networkidle' });
  await waitForApp(page);
  return page;
}

async function collectSummary(page, { concept = 'home', tab = 'theorie' } = {}) {
  return page.evaluate(({ concept, tab }) => {
    const visibleText = document.body.textContent || '';
    const mathInk = getComputedStyle(document.body).getPropertyValue('--math-ink').trim();
    return {
      concept,
      tab,
      pageTitle: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      hasFullExamEntry: visibleText.includes('Probeklausuren'),
      sectionBlocks: document.querySelectorAll('#content .section-block').length,
      formulaCards: document.querySelectorAll('#content .formula-card').length,
      problemCards: document.querySelectorAll('#content .problem-card').length,
      fullExamQuestions: document.querySelectorAll('#content .fe-question').length,
      mathError: visibleText.includes('Math input error'),
      rawDelimiters: visibleText.includes('$$'),
      entityLeak: /&gt;|&lt;|&amp;/.test(visibleText),
      markupLeak: /<span|<\/span|<div|<\/div|<mjx/.test(visibleText),
      mathInk,
      contentText: (document.querySelector('#content')?.textContent || '').replace(/\s+/g, ' ').trim()
    };
  }, { concept, tab });
}

async function navigateConcept(page, conceptId, tab = 'theorie') {
  await page.evaluate((id) => window.__navigate(id), conceptId);
  await page.waitForTimeout(900);
  if (tab !== 'theorie') {
    await page.locator(`#tabRow [data-tab="${tab}"]`).click();
    await page.waitForTimeout(850);
  }
}

async function startExam(page, examId) {
  await page.evaluate((id) => window.__startFullExam(id), examId);
  await page.waitForTimeout(1000);
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

try {
  const page = await openMikro(browser);

  const home = await collectSummary(page, { concept: 'home', tab: 'theorie' });
  await navigateConcept(page, 'gk_dk', 'intuition');
  const gkdk = await collectSummary(page, { concept: 'gk_dk', tab: 'intuition' });
  await startExam(page, 'probeklausur_1');
  const exam = await collectSummary(page, { concept: 'probeklausur_1', tab: 'full-exam' });

  const failures = [home, gkdk, exam].filter((summary) => (
    summary.mathError ||
    summary.rawDelimiters ||
    summary.entityLeak ||
    summary.markupLeak
  ));

  console.log(JSON.stringify({
    home,
    gkdk,
    exam,
    failures
  }, null, 2));

  await page.close();
} finally {
  await browser.close();
}
