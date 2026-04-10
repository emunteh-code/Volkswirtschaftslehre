import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';
import { CHAPTERS } from '../internationale-wirtschaftsbeziehungen/js/data/chapters.js';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4181';
const consentKey = 'iwb_consent_v1';
const tabs = ['theorie', 'formeln', 'aufgaben', 'intuition'];
const graphConcepts = new Set([
  'ricardo',
  'tarifmodell',
  'zinsparitaet',
  'monetaerer_ansatz',
  'overshooting',
  'trilemma'
]);

async function waitForApp(page) {
  await page.waitForFunction(() => window.__jsLoaded && typeof window.__renderHome === 'function' && typeof window.__navigate === 'function', { timeout: 20000 });
}

async function openModulePage(browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });
  await page.addInitScript((key) => localStorage.setItem(key, '1'), consentKey);
  await page.goto(`${baseUrl}/internationale-wirtschaftsbeziehungen/index.html?qa=1`, { waitUntil: 'domcontentloaded' });
  await waitForApp(page);
  await page.waitForTimeout(900);
  return page;
}

async function navigateConcept(page, conceptId, tab = 'theorie') {
  await page.evaluate((id) => window.__navigate(id), conceptId);
  await page.waitForTimeout(800);
  if (tab !== 'theorie') {
    await page.locator(`#tabRow [data-tab="${tab}"]`).click();
    await page.waitForTimeout(600);
  }
}

async function collectSummary(page, { concept = 'home', tab = 'theorie' } = {}) {
  return page.evaluate(({ concept, tab, graphConcepts }) => {
    const text = document.body.innerText || '';
    return {
      concept,
      tab,
      navCount: document.querySelectorAll('#navList .nav-item').length,
      pageTitle: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      sectionBlocks: document.querySelectorAll('#content .section-block').length,
      formulaCards: document.querySelectorAll('#content .formula-card').length,
      problemCards: document.querySelectorAll('#content .problem-card').length,
      graphCanvas: !!document.getElementById('graph_canvas'),
      homeCards: document.querySelectorAll('#content .home-card, #content .home-action-card').length,
      rawDelimiters: text.includes('$$'),
      entityLeak: /&gt;|&lt;|&amp;/.test(text),
      markupLeak: /<span|<\/span|spanclass|<div|<\/div/.test(text),
      mathError: text.includes('Math input error'),
      graphExpected: graphConcepts.includes(concept)
    };
  }, { concept, tab, graphConcepts: [...graphConcepts] });
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

try {
  const page = await openModulePage(browser);
  const failures = [];
  const surfaces = [];

  const homeSummary = await collectSummary(page);
  await page.screenshot({ path: '.qa/iwb-home.png', fullPage: true });

  if (homeSummary.navCount !== CHAPTERS.length) {
    failures.push(`navCount ${homeSummary.navCount} != ${CHAPTERS.length}`);
  }

  for (const chapter of CHAPTERS) {
    for (const tab of tabs) {
      await navigateConcept(page, chapter.id, tab);
      const summary = await collectSummary(page, { concept: chapter.id, tab });
      surfaces.push({
        concept: chapter.id,
        tab,
        title: summary.pageTitle,
        sectionBlocks: summary.sectionBlocks,
        formulaCards: summary.formulaCards,
        problemCards: summary.problemCards,
        graphCanvas: summary.graphCanvas
      });

      if (summary.pageTitle !== chapter.title) {
        failures.push(`${chapter.id}/${tab}: title mismatch (${summary.pageTitle})`);
      }
      if (summary.rawDelimiters || summary.entityLeak || summary.markupLeak || summary.mathError) {
        failures.push(`${chapter.id}/${tab}: visible render leak`);
      }
      if (tab === 'theorie' && summary.sectionBlocks < 3) {
        failures.push(`${chapter.id}/${tab}: thin theory (${summary.sectionBlocks})`);
      }
      if (tab === 'formeln' && summary.formulaCards < 1) {
        failures.push(`${chapter.id}/${tab}: missing formulas`);
      }
      if (tab === 'aufgaben' && summary.problemCards < 2) {
        failures.push(`${chapter.id}/${tab}: weak tasks (${summary.problemCards})`);
      }
      if (tab === 'intuition' && summary.sectionBlocks < 1) {
        failures.push(`${chapter.id}/${tab}: missing intuition`);
      }
    }

    if (graphConcepts.has(chapter.id)) {
      await navigateConcept(page, chapter.id, 'graph');
      const graphSummary = await collectSummary(page, { concept: chapter.id, tab: 'graph' });
      surfaces.push({
        concept: chapter.id,
        tab: 'graph',
        title: graphSummary.pageTitle,
        sectionBlocks: graphSummary.sectionBlocks,
        formulaCards: graphSummary.formulaCards,
        problemCards: graphSummary.problemCards,
        graphCanvas: graphSummary.graphCanvas
      });
      if (!graphSummary.graphCanvas) {
        failures.push(`${chapter.id}/graph: expected graph missing`);
      }
      if (graphSummary.rawDelimiters || graphSummary.entityLeak || graphSummary.markupLeak || graphSummary.mathError) {
        failures.push(`${chapter.id}/graph: visible render leak`);
      }
    }
  }

  await navigateConcept(page, 'zinsparitaet', 'graph');
  await page.screenshot({ path: '.qa/iwb-zinsparitaet.png', fullPage: true });
  await navigateConcept(page, 'overshooting', 'graph');
  await page.screenshot({ path: '.qa/iwb-overshooting.png', fullPage: true });

  await page.evaluate(() => window.__showFullExamSelect());
  await page.waitForTimeout(900);
  await page.screenshot({ path: '.qa/iwb-exams.png', fullPage: true });
  const examOverview = await page.evaluate(() => ({
    title: (document.querySelector('#content h2')?.textContent || '').trim(),
    examCards: document.querySelectorAll('#content .home-action-card').length
  }));

  if (examOverview.examCards < 3) {
    failures.push(`full exam overview has only ${examOverview.examCards} cards`);
  }

  await page.evaluate(() => window.__startFullExam('probeklausur_1'));
  await page.waitForTimeout(900);
  await page.screenshot({ path: '.qa/iwb-full-exam-1.png', fullPage: true });
  const examSummary = await page.evaluate(() => ({
    title: (document.querySelector('.full-exam h2')?.textContent || '').trim(),
    questionCount: document.querySelectorAll('.fe-question').length,
    rawLeak: /\$\$|&gt;|&lt;|&amp;|<span|<\/span/.test(document.body.innerText || '')
  }));

  if (examSummary.questionCount < 9) {
    failures.push(`full exam question count too low (${examSummary.questionCount})`);
  }
  if (examSummary.rawLeak) {
    failures.push('full exam has visible raw leak');
  }

  console.log(JSON.stringify({
    homeSummary,
    examOverview,
    examSummary,
    checkedConcepts: CHAPTERS.length,
    checkedSurfaces: surfaces.length,
    surfaces: surfaces.slice(0, 24),
    failures
  }, null, 2));

  await page.close();
} finally {
  await browser.close();
}
