import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const outDir = path.resolve('.qa/shared-r-exam-surface-polish-pass-1');

async function ensureDir() {
  await fs.mkdir(outDir, { recursive: true });
}

async function openModule(browser, slug, consentKey) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 2000 } });
  const page = await context.newPage();
  await page.goto(`${baseUrl}/${slug}/index.html?qa=1`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__jsLoaded);
  await page.evaluate((key) => {
    localStorage.setItem(key, '1');
    window.__acceptConsent?.();
  }, consentKey);
  await page.waitForTimeout(500);
  return { context, page };
}

async function openRTab(page, conceptId) {
  await page.waitForFunction(() => typeof window.__navigate === 'function');
  await page.evaluate((id) => window.__navigate(id), conceptId);
  await page.waitForTimeout(900);
  await page.locator('#tabRow [data-tab="r-anwendung"]').click();
  await page.waitForTimeout(900);
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

await ensureDir();

const findings = [];

try {
  const mathe = await openModule(browser, 'mathematik', 'mathematik_consent_v1');
  await openRTab(mathe.page, 'summen_logik_beweise');
  const matheR = await mathe.page.evaluate(() => ({
    runtimeNote: document.querySelector('.r-runtime-note')?.textContent?.trim() || '',
    runtimePill: document.querySelector('.r-runtime-pill')?.textContent?.trim() || '',
    outputTitle: document.querySelector('.r-tab-output-card .r-practice-toolbar-title')?.textContent?.trim() || '',
    outputPlaceholder: document.querySelector('[data-r-output]')?.textContent?.trim() || '',
    firstAction: document.querySelector('.r-orient-first-action')?.textContent?.trim() || ''
  }));
  if (/WebAssembly|Live-Modus/u.test(matheR.runtimeNote)) findings.push('mathematik R note still feels runtime-first');
  if (matheR.runtimePill !== 'Interaktiv im Browser') findings.push('mathematik R runtime pill not updated');
  if (matheR.outputTitle !== 'Output lesen und belegen') findings.push('mathematik R output title not updated');
  await mathe.page.screenshot({ path: path.join(outDir, 'mathematik-r-summen.png'), fullPage: true });
  await mathe.context.close();

  const oek = await openModule(browser, 'oekonometrie', 'oekonometrie_consent_v2');
  await openRTab(oek.page, 'matrix_notation');
  const oekR = await oek.page.evaluate(() => ({
    runtimeNote: document.querySelector('.r-runtime-note')?.textContent?.trim() || '',
    runtimePill: document.querySelector('.r-runtime-pill')?.textContent?.trim() || '',
    outputTitle: document.querySelector('.r-tab-output-card .r-practice-toolbar-title')?.textContent?.trim() || '',
    outputPlaceholder: document.querySelector('[data-r-output]')?.textContent?.trim() || ''
  }));
  if (/WebAssembly|Live-Modus/u.test(oekR.runtimeNote)) findings.push('oekonometrie R note still feels runtime-first');
  if (oekR.runtimePill !== 'Interaktiv im Browser') findings.push('oekonometrie R runtime pill not updated');
  await oek.page.screenshot({ path: path.join(outDir, 'oekonometrie-r-matrix.png'), fullPage: true });
  await oek.context.close();

  const stat = await openModule(browser, 'statistik', 'statistik_consent_v1');
  await openRTab(stat.page, 'regression_diagnostik_prognose');
  const statR = await stat.page.evaluate(() => ({
    runtimeNote: document.querySelector('.r-runtime-note')?.textContent?.trim() || '',
    runtimePill: document.querySelector('.r-runtime-pill')?.textContent?.trim() || '',
    outputTitle: document.querySelector('.r-tab-output-card .r-practice-toolbar-title')?.textContent?.trim() || '',
    outputPlaceholder: document.querySelector('[data-r-output]')?.textContent?.trim() || ''
  }));
  if (/WebAssembly|Live-Modus/u.test(statR.runtimeNote)) findings.push('statistik R note still feels runtime-first');
  if (statR.runtimePill !== 'Interaktiv im Browser') findings.push('statistik R runtime pill not updated');
  await stat.page.screenshot({ path: path.join(outDir, 'statistik-r-regression.png'), fullPage: true });
  await stat.context.close();

  const mikroFullSelect = await openModule(browser, 'mikro1', 'mikro_consent_v1');
  await mikroFullSelect.page.evaluate(() => window.__showFullExamSelect?.());
  await mikroFullSelect.page.waitForTimeout(900);
  const mikroSelect = await mikroFullSelect.page.evaluate(() => ({
    intro: document.querySelector('.fe-context-block')?.textContent?.trim() || '',
    title: document.querySelector('h2')?.textContent?.trim() || '',
    firstDesc: Array.from(document.querySelectorAll('.hac-desc')).slice(0, 2).map((n) => n.textContent.trim())
  }));
  if (!/Wähle eine vollständige Probeklausur/u.test(mikroSelect.intro)) findings.push('full exam selector intro missing');
  if (mikroSelect.firstDesc.length < 2) findings.push('full exam selector missing subtitle/metrics split');
  await mikroFullSelect.page.screenshot({ path: path.join(outDir, 'mikro1-full-exam-select.png'), fullPage: true });
  await mikroFullSelect.context.close();

  const mikroQuick = await openModule(browser, 'mikro1', 'mikro_consent_v1');
  await mikroQuick.page.evaluate(() => window.__startExam?.());
  await mikroQuick.page.waitForTimeout(900);
  const quick = await mikroQuick.page.evaluate(() => ({
    title: document.querySelector('.exam-title')?.textContent?.trim() || '',
    ctx: document.querySelector('.exam-q-ctx')?.textContent?.trim() || '',
    button: document.querySelector('.exam-actions .btn')?.textContent?.trim() || '',
    placeholder: document.querySelector('#examInput')?.getAttribute('placeholder') || ''
  }));
  if (quick.title !== 'Schnelltest unter Zeitdruck') findings.push('quick exam title not updated');
  if (/Exam-Drill/u.test(quick.ctx)) findings.push('quick exam still exposes internal Exam-Drill label');
  if (quick.button !== 'Antwort prüfen') findings.push('quick exam primary button not updated');
  await mikroQuick.page.screenshot({ path: path.join(outDir, 'mikro1-quick-exam.png'), fullPage: true });
  await mikroQuick.context.close();

  const mikroFull = await openModule(browser, 'mikro1', 'mikro_consent_v1');
  await mikroFull.page.evaluate(() => window.__startFullExam?.('probeklausur_1'));
  await mikroFull.page.waitForTimeout(1000);
  const mikroOpen = await mikroFull.page.evaluate(() => ({
    intro: document.querySelector('.fe-context-block')?.textContent?.trim() || '',
    meta: Array.from(document.querySelectorAll('.full-exam-meta span')).map((n) => n.textContent.trim()),
    buttons: Array.from(document.querySelectorAll('.btn')).slice(0, 4).map((n) => n.textContent.trim())
  }));
  if (!/Arbeitsweise/u.test(mikroOpen.intro)) findings.push('full exam intro guidance missing');
  if (!mikroOpen.meta.some((entry) => /geprüft/u.test(entry))) findings.push('full exam live score wording not updated');
  if (!mikroOpen.buttons.includes('Antwort prüfen')) findings.push('full exam check button not updated');
  if (!mikroOpen.buttons.includes('Musterlösung öffnen')) findings.push('full exam reveal button not updated');
  await mikroFull.page.screenshot({ path: path.join(outDir, 'mikro1-full-exam-open.png'), fullPage: true });
  await mikroFull.context.close();

  const finanzFull = await openModule(browser, 'finanzwirtschaft', 'finanzwirtschaft_consent_v1');
  await finanzFull.page.evaluate(() => window.__startFullExam?.('probeklausur_1'));
  await finanzFull.page.waitForTimeout(1000);
  const finanzOpen = await finanzFull.page.evaluate(() => ({
    intro: document.querySelector('.fe-context-block')?.textContent?.trim() || '',
    meta: Array.from(document.querySelectorAll('.full-exam-meta span')).map((n) => n.textContent.trim()),
    buttons: Array.from(document.querySelectorAll('.btn')).slice(0, 4).map((n) => n.textContent.trim())
  }));
  if (!/Arbeitsweise/u.test(finanzOpen.intro)) findings.push('finance full exam intro guidance missing');
  if (!finanzOpen.meta.some((entry) => /geprüft/u.test(entry))) findings.push('finance full exam live score wording not updated');
  await finanzFull.page.screenshot({ path: path.join(outDir, 'finanz-full-exam-open.png'), fullPage: true });
  await finanzFull.context.close();

  console.log(JSON.stringify({
    results: {
      matheR,
      oekR,
      statR,
      mikroSelect,
      quick,
      mikroOpen,
      finanzOpen
    },
    findings
  }, null, 2));
} finally {
  await browser.close();
}
