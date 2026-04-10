import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { CHAPTERS } from '../internationale-wirtschaftsbeziehungen/js/data/chapters.js';
import { GRAPH_CONCEPTS } from '../internationale-wirtschaftsbeziehungen/js/ui/graphPanel.js';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4181';
const outDir = fileURLToPath(new URL('./iwb-benchmark-reconstruction-pass-1/', import.meta.url));

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
  await mkdir(outDir, { recursive: true });

  const failures = [];
  const samples = [];
  const representativeTargets = [
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

  const iwbPage = await openModule(browser, 'internationale-wirtschaftsbeziehungen', 'iwb_consent_v1');
  const homeSummary = await collectSummary(iwbPage, 'home', 'theorie');
  await iwbPage.screenshot({ path: `${outDir}iwb-home.png`, fullPage: true });

  if (homeSummary.navCount !== CHAPTERS.length) {
    failures.push(`navCount ${homeSummary.navCount} != ${CHAPTERS.length}`);
  }

  for (const [concept, tab] of representativeTargets) {
    const chapter = CHAPTERS.find((item) => item.id === concept);
    await navigateConcept(iwbPage, concept, tab);
    const summary = await collectSummary(iwbPage, concept, tab);
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
    ['handelsfakten', 'theorie', 'iwb-handelsfakten-theory.png'],
    ['verteilung_handel', 'theorie', 'iwb-verteilung-theory.png'],
    ['gravitation', 'theorie', 'iwb-gravitation-theory.png'],
    ['tarifmodell', 'graph', 'iwb-tarif-graph.png'],
    ['zinsparitaet', 'graph', 'iwb-zinsparitaet-graph.png'],
    ['kaufkraftparitaet', 'theorie', 'iwb-kkp-theory.png'],
    ['overshooting', 'graph', 'iwb-overshooting-graph.png'],
    ['balassa_samuelson', 'theorie', 'iwb-balassa-theory.png']
  ];

  for (const [concept, tab, filename] of screenshotTargets) {
    await navigateConcept(iwbPage, concept, tab);
    await iwbPage.screenshot({ path: `${outDir}${filename}`, fullPage: true });
  }

  await iwbPage.evaluate(() => window.__showFullExamSelect());
  await iwbPage.waitForTimeout(900);
  await iwbPage.screenshot({ path: `${outDir}iwb-probeklausuren.png`, fullPage: true });
  const examOverview = await iwbPage.evaluate(() => ({
    title: (document.querySelector('#content h2')?.textContent || '').trim(),
    cards: document.querySelectorAll('#content .home-action-card').length
  }));

  if (examOverview.cards < 3) {
    failures.push(`exam overview cards too low (${examOverview.cards})`);
  }

  await iwbPage.evaluate(() => window.__startFullExam('probeklausur_1'));
  await iwbPage.waitForTimeout(900);
  await iwbPage.screenshot({ path: `${outDir}iwb-full-exam-1.png`, fullPage: true });
  const examDetail = await iwbPage.evaluate(() => ({
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
  await navigateConcept(mikroPage, 'markt', 'graph');
  await mikroPage.screenshot({ path: `${outDir}mikro1-markt-graph-benchmark.png`, fullPage: true });
  await mikroPage.close();

  const report = {
    chapterCount: CHAPTERS.length,
    graphConceptCount: GRAPH_CONCEPTS.size,
    homeSummary,
    examOverview,
    examDetail,
    samples,
    failures
  };

  await writeFile(`${outDir}report.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));

  await iwbPage.close();
} finally {
  const forcedExit = setTimeout(() => process.exit(0), 1500);
  forcedExit.unref();
  await browser.close();
}
