import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4181';

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
  await page.waitForTimeout(1000);
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
    return {
      label: name,
      title: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      sectionBlocks: content?.querySelectorAll('.section-block').length || 0,
      formulaCards: content?.querySelectorAll('.formula-card').length || 0,
      problemCards: content?.querySelectorAll('.problem-card').length || 0,
      masteryItems: content?.querySelectorAll('.mastery-item, .mastery-list li').length || 0,
      rightPanelLinks: document.querySelectorAll('#panelRight .rp-conn').length,
      rightPanelCards: document.querySelectorAll('#panelRight .rp-card, #panelRight .panel-card, #panelRight .side-card').length,
      warnBoxes: content?.querySelectorAll('.warn-box').length || 0,
      rawLeak: /\$\$|&gt;|&lt;|&amp;|<span|<\/span|<div|<\/div/.test(document.body.innerText || '')
    };
  }, label);
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

try {
  const mikro = await openModule(browser, 'mikro1', 'mikro_consent_v1');
  const recht = await openModule(browser, 'recht', 'recht_consent_v1');
  const outDir = '.qa/recht-benchmark-reconstruction-pass-1';

  const failures = [];
  const results = {};

  await navigate(mikro, 'kmm', 'theorie');
  results.mikro1_kmm_theory = await summary(mikro, 'mikro1/kmm/theorie');
  await mikro.screenshot({ path: `${outDir}/mikro1-kmm-benchmark.png`, fullPage: true });

  await navigate(mikro, 'hausopt', 'aufgaben');
  results.mikro1_hausopt_tasks = await summary(mikro, 'mikro1/hausopt/aufgaben');
  await mikro.screenshot({ path: `${outDir}/mikro1-hausopt-aufgaben.png`, fullPage: true });

  await navigate(recht, 'methodik', 'theorie');
  results.recht_methodik_theory = await summary(recht, 'recht/methodik/theorie');
  await recht.screenshot({ path: `${outDir}/recht-methodik-theory.png`, fullPage: true });

  await navigate(recht, 'dissens', 'theorie');
  results.recht_dissens_theory = await summary(recht, 'recht/dissens/theorie');
  const dissensHtml = await recht.locator('#content').innerHTML();
  await recht.screenshot({ path: `${outDir}/recht-dissens-theory.png`, fullPage: true });

  await navigate(recht, 'anfechtung', 'theorie');
  results.recht_anfechtung_theory = await summary(recht, 'recht/anfechtung/theorie');
  const anfechtungHtml = await recht.locator('#content').innerHTML();
  await recht.screenshot({ path: `${outDir}/recht-anfechtung-theory.png`, fullPage: true });

  await navigate(recht, 'stellvertretung', 'aufgaben');
  results.recht_stellvertretung_tasks = await summary(recht, 'recht/stellvertretung/aufgaben');
  await recht.screenshot({ path: `${outDir}/recht-stellvertretung-aufgaben.png`, fullPage: true });

  await navigate(recht, 'agb', 'theorie');
  results.recht_agb_theory = await summary(recht, 'recht/agb/theorie');
  await recht.screenshot({ path: `${outDir}/recht-agb-theory.png`, fullPage: true });

  await navigate(recht, 'schadensersatz', 'theorie');
  results.recht_schadensersatz_theory = await summary(recht, 'recht/schadensersatz/theorie');
  await recht.screenshot({ path: `${outDir}/recht-schadensersatz-theory.png`, fullPage: true });

  await navigate(recht, 'ruecktritt', 'theorie');
  results.recht_ruecktritt_theory = await summary(recht, 'recht/ruecktritt/theorie');
  const ruecktrittHtml = await recht.locator('#content').innerHTML();
  await recht.screenshot({ path: `${outDir}/recht-ruecktritt-theory.png`, fullPage: true });

  await navigate(recht, 'verbraucherwiderruf', 'theorie');
  results.recht_verbraucherwiderruf_theory = await summary(recht, 'recht/verbraucherwiderruf/theorie');
  const widerrufHtml = await recht.locator('#content').innerHTML();
  await recht.screenshot({ path: `${outDir}/recht-verbraucherwiderruf-theory.png`, fullPage: true });

  await recht.evaluate(() => window.__showFullExamSelect());
  await recht.waitForTimeout(1000);
  results.recht_exam_overview = await recht.evaluate(() => ({
    examCards: document.querySelectorAll('#content .home-action-card').length,
    title: (document.querySelector('#content h2')?.textContent || '').trim()
  }));
  await recht.screenshot({ path: `${outDir}/recht-exam-overview.png`, fullPage: true });

  if (results.recht_methodik_theory.sectionBlocks < 4) failures.push('methodik theory still thin');
  if (results.recht_dissens_theory.sectionBlocks < 4) failures.push('dissens theory still thin');
  if (results.recht_anfechtung_theory.sectionBlocks < 4) failures.push('anfechtung theory still thin');
  if (results.recht_agb_theory.sectionBlocks < 4) failures.push('agb theory still thin');
  if (results.recht_schadensersatz_theory.sectionBlocks < 4) failures.push('schadensersatz theory still thin');
  if (results.recht_stellvertretung_tasks.problemCards < 4) failures.push('stellvertretung tasks still weak');
  if (results.recht_ruecktritt_theory.formulaCards < 4) failures.push('ruecktritt right rail still sparse');
  if (results.recht_verbraucherwiderruf_theory.formulaCards < 4) failures.push('verbraucherwiderruf right rail still sparse');
  if (results.recht_exam_overview.examCards < 3) failures.push('exam overview too thin');
  if (dissensHtml === anfechtungHtml) failures.push('dissens and anfechtung still render identically');
  if (ruecktrittHtml === widerrufHtml) failures.push('ruecktritt and verbraucherwiderruf still render identically');

  console.log(JSON.stringify({ results, failures }, null, 2));

  await mikro.close();
  await recht.close();
} finally {
  await browser.close();
}
