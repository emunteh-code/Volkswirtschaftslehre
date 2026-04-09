import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';
import { writeFile } from 'node:fs/promises';
import { CHAPTERS } from '../finanzwirtschaft/js/data/chapters.js';
import { GRAPH_CONCEPTS } from '../finanzwirtschaft/js/ui/graphPanel.js';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4181';
const outDir = new URL('./finanzwirtschaft-benchmark-reconstruction-pass-1/', import.meta.url).pathname;
const baseTabs = ['theorie', 'formeln', 'aufgaben', 'intuition'];

async function waitForApp(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__renderHome === 'function' && typeof window.__navigate === 'function',
    { timeout: 20000 }
  );
}

async function openModule(browser, slug, consentKey) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });
  await page.addInitScript((key) => localStorage.setItem(key, '1'), consentKey);
  await page.goto(`${baseUrl}/${slug}/index.html?qa=1`, { waitUntil: 'domcontentloaded' });
  await waitForApp(page);
  await page.waitForTimeout(900);
  return page;
}

async function navigateConcept(page, conceptId, tab = 'theorie') {
  await page.evaluate((id) => window.__navigate(id), conceptId);
  await page.waitForTimeout(700);
  if (tab !== 'theorie') {
    await page.locator(`#tabRow [data-tab="${tab}"]`).click();
    await page.waitForTimeout(700);
  }
}

async function collectSummary(page, concept, tab) {
  return page.evaluate(({ concept, tab }) => {
    const text = document.body.innerText || '';
    return {
      concept,
      tab,
      title: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      navCount: document.querySelectorAll('#navList .nav-item').length,
      sectionBlocks: document.querySelectorAll('#content .section-block').length,
      formulaCards: document.querySelectorAll('#content .formula-card').length,
      problemCards: document.querySelectorAll('#content .problem-card').length,
      masteryItems: document.querySelectorAll('#content .mastery-item').length,
      graphCanvas: document.querySelectorAll('#content #graph_canvas').length,
      giRows: document.querySelectorAll('#content .gi-row').length,
      rightFormulaCards: document.querySelectorAll('#rightPanel .rp-formula').length,
      rightMistakes: document.querySelectorAll('#rightPanel .rp-mistake').length,
      rawDelimiters: text.includes('$$'),
      entityLeak: /&gt;|&lt;|&amp;/.test(text),
      markupLeak: /<span|<\/span|<div|<\/div/.test(text),
      mathError: text.includes('Math input error')
    };
  }, { concept, tab });
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

try {
  const financePage = await openModule(browser, 'finanzwirtschaft', 'finanzwirtschaft_consent_v1');
  const failures = [];
  const samples = [];
  const representativeTargets = [
    ['institutionen_marktunvollkommenheit', 'theorie'],
    ['kapitalwert_fisher', 'theorie'],
    ['annuitaeten_finanzplan', 'theorie'],
    ['annuitaeten_finanzplan', 'aufgaben'],
    ['risikoadjustierter_kapitalwert', 'theorie'],
    ['fremdkapitalkosten', 'theorie'],
    ['wacc', 'theorie'],
    ['wacc_leverage', 'graph'],
    ['modigliani_miller', 'theorie']
  ];

  const homeSummary = await collectSummary(financePage, 'home', 'theorie');
  await financePage.screenshot({ path: `${outDir}finanz-home.png`, fullPage: true });

  if (homeSummary.navCount !== CHAPTERS.length) {
    failures.push(`navCount ${homeSummary.navCount} != ${CHAPTERS.length}`);
  }

  for (const [concept, tab] of representativeTargets) {
    const chapter = CHAPTERS.find((item) => item.id === concept);
    await navigateConcept(financePage, concept, tab);
    const summary = await collectSummary(financePage, concept, tab);
    samples.push(summary);

    if (summary.title !== chapter.title) {
      failures.push(`${concept}/${tab}: title mismatch (${summary.title})`);
    }
    if (summary.rawDelimiters || summary.entityLeak || summary.markupLeak || summary.mathError) {
      failures.push(`${concept}/${tab}: visible render leak`);
    }
    if (tab === 'theorie' && summary.sectionBlocks < 3) {
      failures.push(`${concept}/${tab}: thin theory (${summary.sectionBlocks})`);
    }
    if (tab === 'theorie' && summary.rightFormulaCards < 1) {
      failures.push(`${concept}/${tab}: sparse right formulas (${summary.rightFormulaCards})`);
    }
    if (tab === 'theorie' && summary.rightMistakes < 1) {
      failures.push(`${concept}/${tab}: sparse right mistakes (${summary.rightMistakes})`);
    }
    if (tab === 'aufgaben' && summary.problemCards < 2) {
      failures.push(`${concept}/${tab}: weak tasks (${summary.problemCards})`);
    }
    if (tab === 'aufgaben' && summary.masteryItems < 3) {
      failures.push(`${concept}/${tab}: weak mastery (${summary.masteryItems})`);
    }
    if (tab === 'graph') {
      if (summary.graphCanvas < 1) failures.push(`${concept}/${tab}: missing graph canvas`);
      if (summary.giRows < 3) failures.push(`${concept}/${tab}: weak graph interpretation (${summary.giRows})`);
    }
  }

  const screenshotTargets = [
    ['institutionen_marktunvollkommenheit', 'theorie', 'finanz-institutionen-theory.png'],
    ['annuitaeten_finanzplan', 'theorie', 'finanz-annuitaet-theory.png'],
    ['annuitaeten_finanzplan', 'aufgaben', 'finanz-annuitaet-aufgaben.png'],
    ['risikoadjustierter_kapitalwert', 'theorie', 'finanz-risiko-theory.png'],
    ['fremdkapitalkosten', 'theorie', 'finanz-fk-theory.png'],
    ['wacc', 'theorie', 'finanz-wacc-theory.png'],
    ['wacc_leverage', 'graph', 'finanz-leverage-graph.png']
  ];

  for (const [concept, tab, filename] of screenshotTargets) {
    await navigateConcept(financePage, concept, tab);
    await financePage.screenshot({ path: `${outDir}${filename}`, fullPage: true });
  }

  await financePage.evaluate(() => window.__showFullExamSelect());
  await financePage.waitForTimeout(900);
  await financePage.screenshot({ path: `${outDir}finanz-probeklausuren.png`, fullPage: true });
  const examOverview = await financePage.evaluate(() => ({
    title: (document.querySelector('#content h2')?.textContent || '').trim(),
    cards: document.querySelectorAll('#content .home-action-card').length
  }));

  if (examOverview.cards < 3) {
    failures.push(`exam overview cards too low (${examOverview.cards})`);
  }

  await financePage.evaluate(() => window.__startFullExam('probeklausur_1'));
  await financePage.waitForTimeout(900);
  await financePage.screenshot({ path: `${outDir}finanz-full-exam-1.png`, fullPage: true });
  const examDetail = await financePage.evaluate(() => ({
    title: (document.querySelector('.full-exam h2')?.textContent || '').trim(),
    questions: document.querySelectorAll('.fe-question').length,
    rawLeak: /\$\$|&gt;|&lt;|&amp;|<span|<\/span|<div|<\/div/.test(document.body.innerText || '')
  }));

  if (examDetail.questions < 9) {
    failures.push(`exam question count too low (${examDetail.questions})`);
  }
  if (examDetail.rawLeak) {
    failures.push('full exam has visible render leak');
  }

  const mikroPage = await openModule(browser, 'mikro1', 'mikro1_consent_v1');
  await navigateConcept(mikroPage, 'kmm', 'theorie');
  await mikroPage.screenshot({ path: `${outDir}mikro1-kmm-benchmark.png`, fullPage: true });
  await mikroPage.close();

  const report = {
    chapterCount: CHAPTERS.length,
    homeSummary,
    examOverview,
    examDetail,
    samples,
    failures
  };

  await writeFile(`${outDir}report.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));

  await financePage.close();
} finally {
  const forcedExit = setTimeout(() => process.exit(0), 1500);
  forcedExit.unref();
  await browser.close();
}
