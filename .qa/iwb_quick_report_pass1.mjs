import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';
import { CHAPTERS } from '../internationale-wirtschaftsbeziehungen/js/data/chapters.js';

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
});

const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });
await page.addInitScript(() => localStorage.setItem('iwb_consent_v1', '1'));
await page.goto('http://127.0.0.1:4181/internationale-wirtschaftsbeziehungen/index.html?qa=1', { waitUntil: 'domcontentloaded' });
await page.waitForFunction(() => window.__jsLoaded && typeof window.__navigate === 'function', { timeout: 20000 });
await page.waitForTimeout(900);

const targets = [
  ['handelsfakten', 'theorie'],
  ['verteilung_handel', 'theorie'],
  ['gravitation', 'theorie'],
  ['tarifmodell', 'graph'],
  ['tarifmodell', 'aufgaben'],
  ['wto_integration', 'theorie'],
  ['zinsparitaet', 'graph'],
  ['kaufkraftparitaet', 'theorie'],
  ['overshooting', 'graph'],
  ['balassa_samuelson', 'theorie']
];

const samples = [];
for (const [concept, tab] of targets) {
  await page.evaluate((id) => window.__navigate(id), concept);
  await page.waitForTimeout(700);
  if (tab !== 'theorie') {
    await page.locator(`#tabRow [data-tab="${tab}"]`).click();
    await page.waitForTimeout(700);
  }
  samples.push(await page.evaluate(({ concept, tab }) => {
    const text = document.body.innerText || '';
    return {
      concept,
      tab,
      title: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      sectionBlocks: document.querySelectorAll('#content .section-block').length,
      formulaCards: document.querySelectorAll('#content .formula-card').length,
      problemCards: document.querySelectorAll('#content .problem-card').length,
      masteryItems: document.querySelectorAll('#content .mastery-item').length,
      graphCanvas: document.querySelectorAll('#content #graph_canvas').length,
      giRows: document.querySelectorAll('#content .gi-row').length,
      rightFormulaCards: document.querySelectorAll('#rightPanel .rp-formula').length,
      rightMistakes: document.querySelectorAll('#rightPanel .rp-mistake').length,
      rawLeak: /\$\$|&gt;|&lt;|&amp;|<span|<div/.test(text)
    };
  }, { concept, tab }));
}

await page.evaluate(() => window.__showFullExamSelect());
await page.waitForTimeout(900);
const examOverview = await page.evaluate(() => ({
  cards: document.querySelectorAll('#content .home-action-card').length,
  title: (document.querySelector('#content h2')?.textContent || '').trim()
}));

await page.evaluate(() => window.__startFullExam('probeklausur_1'));
await page.waitForTimeout(900);
const examDetail = await page.evaluate(() => ({
  title: (document.querySelector('.full-exam h2')?.textContent || '').trim(),
  questions: document.querySelectorAll('.fe-question').length,
  rawLeak: /\$\$|&gt;|&lt;|&amp;|<span|<div/.test(document.body.innerText || '')
}));

const report = {
  chapterCount: CHAPTERS.length,
  navCount: await page.evaluate(() => document.querySelectorAll('#navList .nav-item').length),
  samples,
  examOverview,
  examDetail
};

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
process.exit(0);
