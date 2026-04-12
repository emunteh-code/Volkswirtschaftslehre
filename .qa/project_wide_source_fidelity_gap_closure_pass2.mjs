import fs from 'node:fs/promises';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4181';
const outDir = '.qa/project-wide-source-fidelity-gap-closure-pass-2';

async function ensureDir(path) {
  await fs.mkdir(path, { recursive: true });
}

async function waitForApp(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__navigate === 'function',
    { timeout: 20000 }
  );
}

async function openModule(browser, slug, consentKey, errors) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });
  page.on('pageerror', (err) => errors.push(`${slug}:pageerror:${err.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`${slug}:console:${msg.text()}`);
  });
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

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

await ensureDir(outDir);

const findings = [];
const errors = [];
const results = {};

try {
  const statistik = await openModule(browser, 'statistik', 'statistik_consent_v1', errors);
  const mathematik = await openModule(browser, 'mathematik', 'mathematik_consent_v1', errors);

  await navigate(statistik, 'nichtparametrisch', 'theorie');
  results.statistikTheory = await statistik.evaluate(() => {
    const text = document.querySelector('#content')?.innerText || '';
    return {
      title: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      sectionBlocks: document.querySelectorAll('#content .section-block').length,
      text
    };
  });
  results.statistikRefs = await statistik.evaluate(async () => {
    const mod = await import('/statistik/js/data/contentManifest.js');
    return mod.STATISTIK_CONCEPT_PRIMARY_REFS?.nichtparametrisch || [];
  });
  await statistik.screenshot({ path: `${outDir}/statistik-nichtparametrisch-theory.png`, fullPage: true });

  await statistik.evaluate(() => window.__startFullExam('klausur_2024'));
  await statistik.waitForTimeout(1200);
  results.statistikExam = await statistik.evaluate(() => ({
    title: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
    body: document.querySelector('#content')?.innerText || ''
  }));
  await statistik.screenshot({ path: `${outDir}/statistik-probeklausur-1.png`, fullPage: true });

  await navigate(mathematik, 'r_begleitpraxis', 'theorie');
  results.mathematikTheory = await mathematik.evaluate(() => {
    const manifest = window.__mathematikContentManifest || null;
    return {
      title: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      sectionBlocks: document.querySelectorAll('#content .section-block').length,
      manifestVersion: manifest?.version || null,
      courseManifestVersion: manifest?.courseConfigManifestVersion || null,
      hasModeIndex: Boolean(manifest?.modeIndex?.r_begleitpraxis)
    };
  });
  results.mathematikRefs = await mathematik.evaluate(async () => {
    const mod = await import('/mathematik/js/data/contentManifest.js');
    return mod.MATHEMATIK_CONCEPT_PRIMARY_REFS?.r_begleitpraxis || [];
  });
  await mathematik.screenshot({ path: `${outDir}/mathematik-r-begleitpraxis-theory.png`, fullPage: true });

  if (!/Nichtparametrische Dichteschätzung/.test(results.statistikTheory.title)) {
    findings.push('statistik theory title did not update to source-faithful density-estimation scope');
  }
  if (results.statistikTheory.sectionBlocks < 4) {
    findings.push('statistik nichtparametrisch still too thin after source-backed rewrite');
  }
  if (!results.statistikRefs.some((ref) => ref.includes('VL_09_-_Induktive_Statistik_1.pdf'))) {
    findings.push('statistik nichtparametrisch provenance does not expose VL_09 anchor');
  }
  if (/Mann-Whitney|Wilcoxon|Kruskal-Wallis/.test(results.statistikTheory.text)) {
    findings.push('unsupported rank-test language still leaks on statistik nichtparametrisch theory page');
  }
  if (!/Kerndichteschätzung/.test(results.statistikExam.body)) {
    findings.push('updated statistik exam surface does not expose kerndichte wording');
  }
  if (/Mann-Whitney|Wilcoxon|Kruskal-Wallis/.test(results.statistikExam.body)) {
    findings.push('unsupported rank-test language still leaks on statistik exam surface');
  }

  if (!/R-Begleitpraxis/.test(results.mathematikTheory.title)) {
    findings.push('mathematik r_begleitpraxis page did not render');
  }
  if (!results.mathematikTheory.hasModeIndex) {
    findings.push('mathematik content manifest bridge did not expose modeIndex for r_begleitpraxis');
  }
  if (results.mathematikTheory.manifestVersion !== '2026.2') {
    findings.push('mathematik bridge manifest version mismatch');
  }
  if (results.mathematikTheory.courseManifestVersion !== '2026.2') {
    findings.push('mathematik course config manifest version mismatch');
  }
  if (results.mathematikRefs.length < 10) {
    findings.push('mathematik r_begleitpraxis refs are still not fully normalized');
  }
  if (!results.mathematikRefs.some((ref) => ref.includes('R.OP_II_-_Aufgaben.pdf'))) {
    findings.push('mathematik r_begleitpraxis missing OP II R reference');
  }

  if (errors.length) findings.push(...errors);

  console.log(JSON.stringify({ results, findings }, null, 2));

  await statistik.close();
  await mathematik.close();
} finally {
  await browser.close();
}
