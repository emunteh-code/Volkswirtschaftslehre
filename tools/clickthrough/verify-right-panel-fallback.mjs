#!/usr/bin/env node
/**
 * Browser closure: right-panel main-column fallback visibility & duplication.
 * Run: cd tools/clickthrough && node verify-right-panel-fallback.mjs
 */
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const server = spawn(
  'python3',
  ['-m', 'http.server', '8898', '--bind', '127.0.0.1'],
  { cwd: root, stdio: 'ignore' }
);

async function waitForHttp(url, maxMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) return;
    } catch {
      /* */
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Timeout ${url}`);
}

async function dismissConsent(page) {
  await page.evaluate(() => {
    if (typeof window.__acceptConsent === 'function') window.__acceptConsent();
  });
}

async function layoutSnapshot(page) {
  return page.evaluate(() => {
    const rp = document.getElementById('rightPanel');
    const mirC = document.querySelector('#content .content-fallback--connections');
    const mirM = document.querySelector('#content .content-fallback--mistakes');
    const rpConn = document.querySelector('#rightPanel #rpConnections');
    const rpMist = document.querySelector('#rightPanel #rpMistakes');
    const v = (el) => {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 1 && r.height > 1;
    };
    return {
      vw: window.innerWidth,
      rightPanelDisplay: rp ? getComputedStyle(rp).display : null,
      rightPanelVisible: v(rp),
      rpConnVisible: v(rpConn),
      rpMistHasContent: (rpMist?.textContent || '').trim().length > 0,
      mirrorConnDisplay: mirC ? getComputedStyle(mirC).display : null,
      mirrorConnVisible: v(mirC),
      mirrorMistDisplay: mirM ? getComputedStyle(mirM).display : null,
      mirrorMistVisible: v(mirM)
    };
  });
}

await waitForHttp('http://127.0.0.1:8898/statistik/index.html');
const browser = await chromium.launch();
const results = [];
const base = 'http://127.0.0.1:8898';

try {
  const viewports = [
    ['desktop-wide', 1400, 900],
    ['edge-1201', 1201, 900],
    ['edge-1200', 1200, 900],
    ['edge-1199', 1199, 900],
    ['tablet-768', 768, 900],
    ['tablet-820', 820, 900],
    ['mobile-390', 390, 844],
    ['mobile-428', 428, 926]
  ];

  async function testPage(label, urlPath, conceptId, tabs) {
    const page = await browser.newPage();
    page.setDefaultTimeout(28000);
    const row = { label, urlPath, conceptId, tabs: {} };

    for (const [vpName, w, h] of viewports) {
      await page.setViewportSize({ width: w, height: h });
      await page.goto(`${base}${urlPath}`, { waitUntil: 'networkidle' });
      await dismissConsent(page);
      await page.waitForFunction(() => typeof window.__navigate === 'function');
      await page.evaluate((id) => window.__navigate(id), conceptId);

      for (const tab of tabs) {
        if (tab !== 'theorie') {
          const btn = page.locator(`button[data-tab="${tab}"]`);
          if ((await btn.count()) === 0 || (await btn.isHidden())) {
            row.tabs[`${vpName}:${tab}`] = { skip: true, reason: 'tab missing or hidden' };
            continue;
          }
          await btn.click();
          await page.waitForTimeout(250);
        }
        const snap = await layoutSnapshot(page);
        const expectNarrow = w <= 1200;
        const dupConn = snap.rpConnVisible && snap.mirrorConnVisible;
        row.tabs[`${vpName}:${tab}`] = { ...snap, expectNarrow, dupConn };
      }
    }

    await page.close();
    return row;
  }

  results.push(
    await testPage('statistik-deskriptiv', '/statistik/index.html', 'deskriptiv', [
      'theorie',
      'aufgaben',
      'formeln',
      'intuition'
    ])
  );
  results.push(
    await testPage('statistik-bivariat-graph', '/statistik/index.html', 'bivariat', ['theorie', 'graph'])
  );

  results.push(await testPage('recht', '/recht/index.html', 'was_ist_recht', ['theorie', 'formeln', 'aufgaben']));

  results.push(
    await testPage('jahresabschluss', '/jahresabschluss/index.html', 'buchen_konten', ['theorie', 'aufgaben'])
  );

  results.push(
    await testPage('mikro1', '/mikro1/index.html', 'budget', ['theorie', 'graph', 'aufgaben', 'formeln'])
  );

  const p = await browser.newPage();
  p.setViewportSize({ width: 1199, height: 900 });
  await p.goto(`${base}/oekonometrie/index.html`, { waitUntil: 'networkidle' });
  await dismissConsent(p);
  await p.waitForFunction(() => typeof window.__navigate === 'function');
  await p.evaluate(() => window.__navigate('matrix_notation'));
  const rBtn = p.locator('button[data-tab="r-anwendung"]');
  let rTab = { skip: true };
  if ((await rBtn.count()) && !(await rBtn.isHidden())) {
    await rBtn.click();
    await p.waitForTimeout(400);
    rTab = { ...(await layoutSnapshot(p)), note: 'oeko matrix_notation r-anwendung' };
  }
  await p.close();
  results.push({ label: 'oekonometrie-r-tab', rTab });

  const pf = await browser.newPage();
  pf.setViewportSize({ width: 1400, height: 900 });
  await pf.goto(`${base}/statistik/index.html`, { waitUntil: 'networkidle' });
  await dismissConsent(pf);
  await pf.waitForFunction(() => typeof window.__navigate === 'function');
  await pf.evaluate(() => window.__navigate('deskriptiv'));
  await pf.evaluate(() => document.body.classList.add('focus-mode'));
  results.push({
    label: 'statistik-focus-1400',
    focusSnapshot: await layoutSnapshot(pf)
  });
  await pf.close();

  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
  server.kill();
}
