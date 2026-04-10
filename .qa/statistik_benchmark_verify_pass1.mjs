import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4181';
const outDir = '.qa/statistik-benchmark-reconstruction-pass-1';

async function waitForApp(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__navigate === 'function',
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

async function navigate(page, conceptId, tab = 'theorie') {
  await page.evaluate((id) => window.__navigate(id), conceptId);
  await page.waitForTimeout(900);
  if (tab !== 'theorie') {
    await page.locator(`#tabRow [data-tab="${tab}"]`).click();
    await page.waitForTimeout(700);
  }
}

async function summary(page, label) {
  return page.evaluate((name) => {
    const content = document.querySelector('#content');
    const rButton = document.querySelector('#tabRow [data-tab="r-anwendung"]');
    const graphButton = document.querySelector('#tabRow [data-tab="graph"]');
    const styleVisible = (el) => !!el && getComputedStyle(el).display !== 'none' && getComputedStyle(el).visibility !== 'hidden';
    return {
      label: name,
      title: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      sectionBlocks: document.querySelectorAll('#content .section-block').length,
      formulaCards: document.querySelectorAll('.formula-card, .rp-formula').length,
      problemCards: document.querySelectorAll('#content .problem-card').length,
      warnBoxes: document.querySelectorAll('#content .warn-box').length,
      giRows: document.querySelectorAll('#content .gi-row, #content .graph-info-row').length,
      graphCanvas: document.querySelectorAll('#content canvas').length,
      masteryItems: document.querySelectorAll('#panelRight .mastery-item, #panelRight .mastery-list li').length,
      linkButtons: document.querySelectorAll('#panelRight .cl-tag').length,
      rTabVisible: styleVisible(rButton),
      graphTabVisible: styleVisible(graphButton),
      codeEditors: document.querySelectorAll('#content textarea.r-editor, #content textarea').length,
      rawLeak: /\\text\{|\\Rightarrow|\\frac|<div|<\/div|<span|<\/span/.test(document.querySelector('#content')?.innerText || '')
    };
  }, label);
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

try {
  const mikro = await openModule(browser, 'mikro1', 'mikro_consent_v1');
  const statistik = await openModule(browser, 'statistik', 'statistik_consent_v1');
  const results = {};
  const failures = [];

  await navigate(mikro, 'kmm', 'theorie');
  results.mikro1_kmm_theory = await summary(mikro, 'mikro1/kmm/theorie');
  await mikro.screenshot({ path: `${outDir}/mikro1-kmm-benchmark.png`, fullPage: true });

  await navigate(mikro, 'hausopt', 'aufgaben');
  results.mikro1_hausopt_tasks = await summary(mikro, 'mikro1/hausopt/aufgaben');
  await mikro.screenshot({ path: `${outDir}/mikro1-hausopt-aufgaben.png`, fullPage: true });

  await navigate(statistik, 'deskriptiv', 'theorie');
  results.statistik_deskriptiv_theory = await summary(statistik, 'statistik/deskriptiv/theorie');
  await statistik.screenshot({ path: `${outDir}/statistik-deskriptiv-theory.png`, fullPage: true });

  await navigate(statistik, 'bivariat', 'theorie');
  results.statistik_bivariat_theory = await summary(statistik, 'statistik/bivariat/theorie');
  const bivariatTheoryHtml = await statistik.locator('#content').innerHTML();
  await statistik.screenshot({ path: `${outDir}/statistik-bivariat-theory.png`, fullPage: true });

  await navigate(statistik, 'bivariat', 'graph');
  results.statistik_bivariat_graph = await summary(statistik, 'statistik/bivariat/graph');
  await statistik.screenshot({ path: `${outDir}/statistik-bivariat-graph.png`, fullPage: true });

  await navigate(statistik, 'schaetzen_verfahren', 'theorie');
  results.statistik_schaetzen_verfahren_theory = await summary(statistik, 'statistik/schaetzen_verfahren/theorie');
  const schaetzenVerfahrenHtml = await statistik.locator('#content').innerHTML();
  await statistik.screenshot({ path: `${outDir}/statistik-schaetzen-verfahren-theory.png`, fullPage: true });

  await navigate(statistik, 'schaetzen_eigenschaften_intervalle', 'theorie');
  results.statistik_schaetzen_intervalle_theory = await summary(statistik, 'statistik/schaetzen_eigenschaften_intervalle/theorie');
  const schaetzenIntervalleHtml = await statistik.locator('#content').innerHTML();
  await statistik.screenshot({ path: `${outDir}/statistik-schaetzen-intervalle-theory.png`, fullPage: true });

  await navigate(statistik, 'testen', 'aufgaben');
  results.statistik_testen_tasks = await summary(statistik, 'statistik/testen/aufgaben');
  await statistik.screenshot({ path: `${outDir}/statistik-testen-aufgaben.png`, fullPage: true });

  await navigate(statistik, 'regression_schaetzung_inferenz', 'theorie');
  results.statistik_reg_si_theory = await summary(statistik, 'statistik/regression_schaetzung_inferenz/theorie');
  const regSiHtml = await statistik.locator('#content').innerHTML();
  await statistik.screenshot({ path: `${outDir}/statistik-reg-si-theory.png`, fullPage: true });

  await navigate(statistik, 'regression_diagnostik_prognose', 'theorie');
  results.statistik_reg_dp_theory = await summary(statistik, 'statistik/regression_diagnostik_prognose/theorie');
  const regDpHtml = await statistik.locator('#content').innerHTML();
  await statistik.screenshot({ path: `${outDir}/statistik-reg-dp-theory.png`, fullPage: true });

  await navigate(statistik, 'regression_diagnostik_prognose', 'r-anwendung');
  results.statistik_reg_dp_r = await summary(statistik, 'statistik/regression_diagnostik_prognose/r-anwendung');
  await statistik.screenshot({ path: `${outDir}/statistik-reg-dp-r.png`, fullPage: true });

  await navigate(statistik, 'varianzanalyse', 'theorie');
  results.statistik_anova_theory = await summary(statistik, 'statistik/varianzanalyse/theorie');
  await statistik.screenshot({ path: `${outDir}/statistik-anova-theory.png`, fullPage: true });

  await navigate(statistik, 'nichtparametrisch', 'theorie');
  results.statistik_nichtparam_theory = await summary(statistik, 'statistik/nichtparametrisch/theorie');
  await statistik.screenshot({ path: `${outDir}/statistik-nichtparam-theory.png`, fullPage: true });

  await statistik.evaluate(() => window.__showFullExamSelect());
  await statistik.waitForTimeout(1000);
  results.statistik_exam_overview = await statistik.evaluate(() => ({
    title: (document.querySelector('#content h2')?.textContent || '').trim(),
    examCards: document.querySelectorAll('#content .home-action-card').length
  }));
  await statistik.screenshot({ path: `${outDir}/statistik-exam-overview.png`, fullPage: true });

  if (results.statistik_deskriptiv_theory.sectionBlocks < 5) failures.push('deskriptiv theory still thin');
  if (results.statistik_deskriptiv_theory.formulaCards < 4) failures.push('deskriptiv formula support still thin');
  if (results.statistik_bivariat_theory.sectionBlocks < 5) failures.push('bivariat theory still thin');
  if (results.statistik_bivariat_theory.formulaCards < 3) failures.push('bivariat formula support still thin');
  if (!results.statistik_bivariat_graph.graphTabVisible || results.statistik_bivariat_graph.graphCanvas < 1 || results.statistik_bivariat_graph.giRows < 2) failures.push('bivariat graph interpretation still weak');
  if (schaetzenVerfahrenHtml === schaetzenIntervalleHtml) failures.push('split estimation pages still render identically');
  if (regSiHtml === regDpHtml) failures.push('split regression pages still render identically');
  if (results.statistik_schaetzen_verfahren_theory.sectionBlocks < 5) failures.push('schaetzen_verfahren still thin');
  if (results.statistik_schaetzen_intervalle_theory.sectionBlocks < 5) failures.push('schaetzen_eigenschaften_intervalle still thin');
  if (results.statistik_reg_si_theory.formulaCards < 3) failures.push('regression schätzung/inferenz formula layer too thin');
  if (results.statistik_reg_dp_theory.formulaCards < 3) failures.push('regression diagnostik/prognose formula layer too thin');
  if (!results.statistik_reg_dp_r.rTabVisible || results.statistik_reg_dp_r.codeEditors < 1) failures.push('regression diagnostik R support not visible');
  if (results.statistik_testen_tasks.problemCards < 16) failures.push('testen tasks/exam transfer still weak');
  if (results.statistik_anova_theory.formulaCards < 3) failures.push('anova formula layer too thin');
  if (results.statistik_exam_overview.examCards < 3) failures.push('exam overview still too thin');
  if (Object.values(results).some((entry) => entry?.rawLeak)) failures.push('raw render leak detected');

  console.log(JSON.stringify({ results, failures }, null, 2));

  await mikro.close();
  await statistik.close();
} finally {
  await browser.close();
}
