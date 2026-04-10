import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const outDir = path.resolve('.qa/flagship-density-equalization-pass-1');

async function ensureDir() {
  await fs.mkdir(outDir, { recursive: true });
}

async function waitForApp(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__navigate === 'function',
    { timeout: 30000 }
  );
}

async function openModule(browser, slug, consentKey) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 } });
  const page = await context.newPage();
  page.on('dialog', async (dialog) => dialog.dismiss());
  await page.addInitScript((key) => localStorage.setItem(key, '1'), consentKey);
  await page.goto(`${baseUrl}/${slug}/index.html?qa=1`, { waitUntil: 'networkidle' });
  await waitForApp(page);
  await page.waitForTimeout(900);
  return { context, page };
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
      title: (content?.querySelector('h1, h2')?.textContent || '').trim(),
      sectionBlocks: content?.querySelectorAll('.section-block').length || 0,
      formulaCards: content?.querySelectorAll('.formula-card').length || 0,
      problemCards: content?.querySelectorAll('.problem-card').length || 0,
      warnBoxes: content?.querySelectorAll('.warn-box').length || 0,
      masteryItems: content?.querySelectorAll('.mastery-item, .mastery-list li').length || 0,
      rightPanelLinks: document.querySelectorAll('#panelRight .rp-conn').length,
      rightPanelCards: document.querySelectorAll('#panelRight .rp-card, #panelRight .panel-card, #panelRight .side-card').length,
      rawLeak: /\$\$|&gt;|&lt;|&amp;|<span|<\/span|<div|<\/div/.test(document.body.innerText || '')
    };
  }, label);
}

async function inspectConcept(page, slug, conceptId, screenshotStem) {
  const theory = await (async () => {
    await navigate(page, conceptId, 'theorie');
    const result = await summary(page, `${slug}/${conceptId}/theorie`);
    await page.screenshot({ path: path.join(outDir, `${screenshotStem}-theory.png`), fullPage: true });
    return result;
  })();

  const formeln = await (async () => {
    await navigate(page, conceptId, 'formeln');
    const result = await summary(page, `${slug}/${conceptId}/formeln`);
    await page.screenshot({ path: path.join(outDir, `${screenshotStem}-formeln.png`), fullPage: true });
    return result;
  })();

  const aufgaben = await (async () => {
    await navigate(page, conceptId, 'aufgaben');
    const result = await summary(page, `${slug}/${conceptId}/aufgaben`);
    await page.screenshot({ path: path.join(outDir, `${screenshotStem}-aufgaben.png`), fullPage: true });
    return result;
  })();

  return { theory, formeln, aufgaben };
}

await ensureDir();

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

const results = {};
const failures = [];

try {
  const mikro = await openModule(browser, 'mikro1', 'mikro_consent_v1');
  results.mikro1_kmm = await inspectConcept(mikro.page, 'mikro1', 'kmm', 'mikro1-kmm');
  results.mikro1_hausopt = await inspectConcept(mikro.page, 'mikro1', 'hausopt', 'mikro1-hausopt');

  const makro1 = await openModule(browser, 'makro1', 'makro1_consent_v1');
  results.makro1_islm = await inspectConcept(makro1.page, 'makro1', 'islm', 'makro1-islm');
  results.makro1_islmpc = await inspectConcept(makro1.page, 'makro1', 'islmpc', 'makro1-islmpc');

  const jahres = await openModule(browser, 'jahresabschluss', 'jahresabschluss_consent_v1');
  results.jahres_rueckstellungen = await inspectConcept(jahres.page, 'jahresabschluss', 'rueckstellungen', 'jahres-rueckstellungen');
  results.jahres_rechnungsabgrenzung = await inspectConcept(jahres.page, 'jahresabschluss', 'rechnungsabgrenzung', 'jahres-rechnungsabgrenzung');
  results.jahres_erfolgsrechnung = await inspectConcept(jahres.page, 'jahresabschluss', 'erfolgsrechnung', 'jahres-erfolgsrechnung');

  const finanz = await openModule(browser, 'finanzwirtschaft', 'finanzwirtschaft_consent_v1');
  results.finanz_wacc = await inspectConcept(finanz.page, 'finanzwirtschaft', 'wacc', 'finanz-wacc');
  results.finanz_wacc_leverage = await inspectConcept(finanz.page, 'finanzwirtschaft', 'wacc_leverage', 'finanz-wacc-leverage');
  results.finanz_modigliani_miller = await inspectConcept(finanz.page, 'finanzwirtschaft', 'modigliani_miller', 'finanz-modigliani-miller');

  const mathematik = await openModule(browser, 'mathematik', 'mathematik_consent_v1');
  results.mathe_exp_log_inverse = await inspectConcept(mathematik.page, 'mathematik', 'exp_log_inverse', 'mathe-exp-log-inverse');
  results.mathe_univariate_optimierung = await inspectConcept(mathematik.page, 'mathematik', 'univariate_optimierung', 'mathe-univariate-optimierung');
  results.mathe_analysis_multivariat = await inspectConcept(mathematik.page, 'mathematik', 'analysis_multivariat', 'mathe-analysis-multivariat');

  const theoryChecks = [
    results.makro1_islm.theory,
    results.makro1_islmpc.theory,
    results.jahres_rueckstellungen.theory,
    results.jahres_rechnungsabgrenzung.theory,
    results.jahres_erfolgsrechnung.theory,
    results.finanz_wacc.theory,
    results.finanz_wacc_leverage.theory,
    results.finanz_modigliani_miller.theory,
    results.mathe_exp_log_inverse.theory,
    results.mathe_univariate_optimierung.theory,
    results.mathe_analysis_multivariat.theory
  ];

  for (const check of theoryChecks) {
    if (check.sectionBlocks < 4) failures.push(`${check.label} still below flagship theory density`);
    if (check.rawLeak) failures.push(`${check.label} has raw rendering leak`);
  }

  const formulaChecks = [
    results.makro1_islm.formeln,
    results.makro1_islmpc.formeln,
    results.jahres_rueckstellungen.formeln,
    results.jahres_rechnungsabgrenzung.formeln,
    results.jahres_erfolgsrechnung.formeln,
    results.finanz_wacc.formeln,
    results.finanz_wacc_leverage.formeln,
    results.finanz_modigliani_miller.formeln,
    results.mathe_exp_log_inverse.formeln,
    results.mathe_univariate_optimierung.formeln,
    results.mathe_analysis_multivariat.formeln
  ];

  for (const check of formulaChecks) {
    if (check.formulaCards < 3) failures.push(`${check.label} still has weak formula support`);
    if (check.rawLeak) failures.push(`${check.label} has raw rendering leak`);
  }

  const taskChecks = [
    results.makro1_islm.aufgaben,
    results.makro1_islmpc.aufgaben,
    results.jahres_rueckstellungen.aufgaben,
    results.jahres_rechnungsabgrenzung.aufgaben,
    results.jahres_erfolgsrechnung.aufgaben,
    results.finanz_wacc.aufgaben,
    results.finanz_wacc_leverage.aufgaben,
    results.finanz_modigliani_miller.aufgaben,
    results.mathe_exp_log_inverse.aufgaben,
    results.mathe_univariate_optimierung.aufgaben,
    results.mathe_analysis_multivariat.aufgaben
  ];

  for (const check of taskChecks) {
    if (check.problemCards < 4) failures.push(`${check.label} still has thin task surface`);
    if (check.rawLeak) failures.push(`${check.label} has raw rendering leak`);
  }

  console.log(JSON.stringify({ results, failures }, null, 2));

  await mikro.context.close();
  await makro1.context.close();
  await jahres.context.close();
  await finanz.context.close();
  await mathematik.context.close();
} finally {
  await browser.close();
}
