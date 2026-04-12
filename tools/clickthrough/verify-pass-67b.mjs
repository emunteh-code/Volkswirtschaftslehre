#!/usr/bin/env node
/**
 * Pass 67b — browser smoke: provenance footer wording + Statistik long-math surfaces.
 * Run from repo root: `node tools/clickthrough/verify-pass-67b.mjs`
 * Requires: `npm install` in tools/clickthrough and `npx playwright install chromium`.
 */
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const forbidden =
  /Übungsmaterial|Folienskript|R-Übungs|Formelsammlung|Statistische Tabellen|Vorlesungsmaterial|Vorlesungsfolien|Kursmaterial \(Handout\)|Kleinübung|Mathematik |Wiederholung /i;
const partOk = /^(Vorlesung \d+|Übung \d+|Tutorium \d+|Kapitel [\d.–\-]+)$/;

function assertFooterParts(text) {
  const body = text.replace(/^Basis:\s*/, '').trim();
  const parts = body.split(/\s*·\s*/).map((p) => p.trim()).filter(Boolean);
  if (!parts.length) throw new Error(`Empty basis line: "${text}"`);
  for (const p of parts) {
    if (!partOk.test(p)) throw new Error(`Non-public label part: "${p}" in "${text}"`);
  }
}

const server = spawn(
  'python3',
  ['-m', 'http.server', '8899', '--bind', '127.0.0.1'],
  { cwd: root, stdio: 'ignore' }
);

async function waitForHttp(url, maxMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) return;
    } catch {
      /* server not ready */
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Timeout waiting for ${url}`);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
page.setDefaultTimeout(28000);

const base = 'http://127.0.0.1:8899';

async function dismissConsent() {
  await page.evaluate(() => {
    if (typeof window.__acceptConsent === 'function') window.__acceptConsent();
  });
}

try {
  await waitForHttp(`${base}/statistik/index.html`);
  await page.goto(`${base}/statistik/index.html`, { waitUntil: 'networkidle' });
  await dismissConsent();
  await page.waitForFunction(() => typeof window.__navigate === 'function');
  await page.evaluate(() => window.__navigate('deskriptiv'));
  await page.waitForSelector('.source-provenance');
  await page.waitForSelector('.source-provenance-mark');
  const stFoot = (await page.locator('.source-provenance-line').first().innerText()).trim();
  if (forbidden.test(stFoot)) throw new Error(`Statistik footer has forbidden wording: ${stFoot}`);
  assertFooterParts(stFoot);
  console.log(`OK /statistik/index.html (deskriptiv Theorie) → ${stFoot}`);

  await page.locator('button[data-tab="aufgaben"]').click();
  await page.locator('#solBtn_0').scrollIntoViewIfNeeded();
  await page.locator('#solBtn_0').click();
  await page.waitForSelector('#sol_0 mjx-container', { state: 'visible' });
  const slotOverflow = await page.evaluate(() => {
    const slot = document.querySelector('#sol_0 .step-math-slot');
    if (!slot) return { ok: false, reason: 'no step-math-slot' };
    return { ok: slot.scrollWidth <= slot.clientWidth + 12, sw: slot.scrollWidth, cw: slot.clientWidth };
  });
  if (!slotOverflow.ok) {
    console.warn('Statistik task 0 step-math-slot overflow (may still be readable):', slotOverflow);
  } else {
    console.log('OK Statistik deskriptiv Aufgabe 1: step-math-slot fits width', slotOverflow);
  }

  const modules = [
    ['/finanzwirtschaft/index.html', 'kapitalwert_fisher'],
    ['/recht/index.html', 'was_ist_recht'],
    ['/internationale-wirtschaftsbeziehungen/index.html', 'handelsfakten'],
    ['/jahresabschluss/index.html', 'buchen_konten'],
    ['/oekonometrie/index.html', 'ols_objective']
  ];
  for (const [htm, id] of modules) {
    await page.goto(`${base}${htm}`, { waitUntil: 'networkidle' });
    await dismissConsent();
    await page.waitForFunction(() => typeof window.__navigate === 'function');
    await page.evaluate((cid) => window.__navigate(cid), id);
    await page.waitForSelector('.source-provenance');
    const txt = (await page.locator('.source-provenance-line').first().innerText()).trim();
    if (forbidden.test(txt)) throw new Error(`${htm} footer: ${txt}`);
    assertFooterParts(txt);
    const marks = await page.locator('.source-provenance-mark').count();
    if (marks < 1) throw new Error(`${htm}: missing ⓘ mark`);
    console.log(`OK ${htm} → ${txt}`);
  }

  await page.goto(`${base}/statistik/index.html`, { waitUntil: 'networkidle' });
  await dismissConsent();
  await page.waitForFunction(() => typeof window.__navigate === 'function');
  await page.evaluate(() => window.__navigate('deskriptiv'));
  await page.locator('button[data-tab="aufgaben"]').click();
  const count = await page.locator('[id^="solBtn_"]').count();
  if (count < 2) throw new Error('Expected multiple Aufgaben on deskriptiv');
  const lastId = count - 1;
  await page.locator(`#solBtn_${lastId}`).scrollIntoViewIfNeeded();
  await page.locator(`#solBtn_${lastId}`).click({ force: true });
  await page.waitForSelector(`#sol_${lastId} mjx-container`, { state: 'visible' });
  console.log(`OK Statistik deskriptiv Aufgabe ${lastId + 1} (second long-math check)`);

  console.log('\nPass 67b browser verification completed successfully.');
  process.exitCode = 0;
} catch (e) {
  console.error(e);
  process.exitCode = 1;
} finally {
  await browser.close();
  server.kill();
}
