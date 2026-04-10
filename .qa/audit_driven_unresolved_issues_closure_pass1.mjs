import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const outDir = path.resolve('.qa/audit-driven-unresolved-issues-closure-pass-1');

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

async function summarize(page, label) {
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
      rawLeak: /\$\$|&gt;|&lt;|&amp;|<span|<\/span|<div|<\/div/.test(document.body.innerText || '')
    };
  }, label);
}

async function inspectConcept(page, slug, conceptId, stem) {
  const theory = await (async () => {
    await navigate(page, conceptId, 'theorie');
    const result = await summarize(page, `${slug}/${conceptId}/theorie`);
    await page.screenshot({ path: path.join(outDir, `${stem}-theory.png`), fullPage: true });
    return result;
  })();

  const formeln = await (async () => {
    await navigate(page, conceptId, 'formeln');
    const result = await summarize(page, `${slug}/${conceptId}/formeln`);
    await page.screenshot({ path: path.join(outDir, `${stem}-formeln.png`), fullPage: true });
    return result;
  })();

  const aufgaben = await (async () => {
    await navigate(page, conceptId, 'aufgaben');
    const result = await summarize(page, `${slug}/${conceptId}/aufgaben`);
    await page.screenshot({ path: path.join(outDir, `${stem}-aufgaben.png`), fullPage: true });
    return result;
  })();

  return { theory, formeln, aufgaben };
}

await ensureDir();

const browser = await chromium.launch({ executablePath: chromePath, headless: true });
const findings = [];
const results = {};

try {
  const mathematik = await openModule(browser, 'mathematik', 'mathematik_consent_v1');
  results.mathematik_home = await (async () => {
    const card = mathematik.page.locator('[data-home-action="mistake-review"]');
    await card.waitFor({ state: 'visible', timeout: 10000 });
    const snapshot = await mathematik.page.evaluate(() => {
      const el = document.querySelector('[data-home-action="mistake-review"]');
      return {
        title: el?.querySelector('.hac-title')?.textContent?.trim() || '',
        desc: el?.querySelector('.hac-desc')?.textContent?.trim() || '',
        countInTitle: /\(\d+\)/.test(el?.querySelector('.hac-title')?.textContent || '')
      };
    });
    await mathematik.page.screenshot({ path: path.join(outDir, 'mathematik-home-fehlerprotokoll.png'), fullPage: true });
    return snapshot;
  })();

  const makro1 = await openModule(browser, 'makro1', 'makro1_consent_v1');
  results.makro1_politikmix = await inspectConcept(makro1.page, 'makro1', 'politikmix', 'makro1-politikmix');
  results.makro1_erwartungen = await inspectConcept(makro1.page, 'makro1', 'erwartungen', 'makro1-erwartungen');

  const jahres = await openModule(browser, 'jahresabschluss', 'jahresabschluss_consent_v1');
  results.jahres_inventur = await inspectConcept(jahres.page, 'jahresabschluss', 'inventur_inventar_bilanzansatz', 'jahres-inventur');
  results.jahres_verbindlichkeiten = await inspectConcept(jahres.page, 'jahresabschluss', 'verbindlichkeiten', 'jahres-verbindlichkeiten');

  const finanz = await openModule(browser, 'finanzwirtschaft', 'finanzwirtschaft_consent_v1');
  results.finanz_bezugsrecht = await inspectConcept(finanz.page, 'finanzwirtschaft', 'bezugsrecht', 'finanz-bezugsrecht');
  results.finanz_eigenkapitalkosten = await inspectConcept(finanz.page, 'finanzwirtschaft', 'eigenkapitalkosten', 'finanz-eigenkapitalkosten');

  const conceptChecks = [
    results.makro1_politikmix,
    results.makro1_erwartungen,
    results.jahres_inventur,
    results.jahres_verbindlichkeiten,
    results.finanz_bezugsrecht,
    results.finanz_eigenkapitalkosten
  ];

  for (const result of conceptChecks) {
    if (result.theory.sectionBlocks < 5) findings.push(`${result.theory.label} below target theory density`);
    if (result.formeln.formulaCards < 3) findings.push(`${result.formeln.label} below target formula support`);
    if (result.aufgaben.problemCards < 4) findings.push(`${result.aufgaben.label} below target task density`);
    if (result.theory.rawLeak || result.formeln.rawLeak || result.aufgaben.rawLeak) {
      findings.push(`${result.theory.label.replace('/theorie', '')} has raw rendering leak`);
    }
  }

  if (!results.mathematik_home.title.includes('Fehlerprotokoll')) {
    findings.push('mathematik home still lacks direct Fehlerprotokoll action');
  }

  console.log(JSON.stringify({ results, findings }, null, 2));

  await mathematik.context.close();
  await makro1.context.close();
  await jahres.context.close();
  await finanz.context.close();
} finally {
  await browser.close();
}
