import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const outDir = path.resolve('.qa/project-wide-source-fidelity-content-completeness-pass-1');

async function ensureDir() {
  await fs.mkdir(outDir, { recursive: true });
}

async function waitForPortal(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__navigate === 'function',
    { timeout: 30000 }
  );
}

async function openModule(browser, urlPath, consentKey) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(String(error.message || error)));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`console:${msg.text()}`);
  });
  await page.goto(`${baseUrl}${urlPath}?qa=1`, { waitUntil: 'networkidle' });
  if (consentKey) {
    await page.evaluate((key) => localStorage.setItem(key, '1'), consentKey);
    await page.reload({ waitUntil: 'networkidle' });
  }
  await waitForPortal(page);
  return { context, page, errors };
}

async function screenshot(page, name) {
  await page.screenshot({ path: path.join(outDir, name), fullPage: true });
}

await ensureDir();

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

const findings = [];
const results = {};

try {
  const mk1 = await openModule(browser, '/makro1/index.html', 'makro1_consent_v1');

  await mk1.page.evaluate(() => window.__navigate('realzins_fisher_erwartungen'));
  await mk1.page.waitForTimeout(700);
  results.realzinsFisher = await mk1.page.evaluate(() => {
    const text = document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim() || '';
    return {
      title: document.querySelector('#content h1')?.textContent?.trim() || '',
      hasExAnte: text.includes('Ex ante'),
      hasELB: text.includes('effektive Zinsuntergrenze') || text.includes('Zinsuntergrenze'),
      hasRiskSpread: text.includes('TED-Spread')
    };
  });
  await screenshot(mk1.page, 'makro1-realzins-fisher.png');
  if (!results.realzinsFisher.hasExAnte || !results.realzinsFisher.hasELB) {
    findings.push('realzins_fisher_erwartungen still lacks source-central Fisher / ELB framing');
  }
  if (results.realzinsFisher.hasRiskSpread) {
    findings.push('realzins_fisher_erwartungen still leaks crisis-spread content');
  }

  await mk1.page.evaluate(() => window.__navigate('realzins_risikopraemie_krisenkanal'));
  await mk1.page.waitForTimeout(700);
  results.realzinsRisk = await mk1.page.evaluate(() => {
    const text = document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim() || '';
    return {
      title: document.querySelector('#content h1')?.textContent?.trim() || '',
      hasTED: text.includes('TED-Spread'),
      hasKreditzins: text.includes('Kreditzins'),
      hasExAnte: text.includes('Ex ante vs. ex post')
    };
  });
  await screenshot(mk1.page, 'makro1-realzins-risikopraemie.png');
  if (!results.realzinsRisk.hasTED || !results.realzinsRisk.hasKreditzins) {
    findings.push('realzins_risikopraemie_krisenkanal still lacks spread / credit-channel wording');
  }
  if (results.realzinsRisk.hasExAnte) {
    findings.push('realzins_risikopraemie_krisenkanal still carries Fisher-only ex-ante block verbatim');
  }

  await mk1.page.evaluate(() => window.__navigate('phillips'));
  await mk1.page.waitForTimeout(700);
  results.phillipsTheory = await mk1.page.evaluate(() => {
    const text = document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim() || '';
    return {
      title: document.querySelector('#content h1')?.textContent?.trim() || '',
      hasSupplyShock: text.includes('Angebotsschock'),
      hasDeflation: text.includes('Deflation'),
      hasIndexation: text.includes('indexiert') || text.includes('Lohnindexierung')
    };
  });
  await screenshot(mk1.page, 'makro1-phillips-theory.png');
  if (!results.phillipsTheory.hasSupplyShock || !results.phillipsTheory.hasDeflation || !results.phillipsTheory.hasIndexation) {
    findings.push('phillips theory still omits source-central shock / deflation / indexation cases');
  }

  await mk1.page.locator('#tabRow [data-tab="graph"]').click();
  await mk1.page.waitForTimeout(900);
  results.phillipsGraph = await mk1.page.evaluate(() => {
    const info = document.querySelector('#graph_info')?.textContent?.replace(/\s+/g, ' ').trim() || '';
    return {
      hasCanvas: !!document.querySelector('#graph_canvas'),
      infoText: info,
      hasShockNote: info.includes('Schocks und Grenzen'),
      hasDeflationCaveat: info.includes('Deflationsdynamik')
    };
  });
  await screenshot(mk1.page, 'makro1-phillips-graph.png');
  if (!results.phillipsGraph.hasCanvas || !results.phillipsGraph.hasShockNote || !results.phillipsGraph.hasDeflationCaveat) {
    findings.push('phillips graph/info still not aligned with source caveats');
  }

  if (mk1.errors.length) findings.push(`makro1 page errors: ${mk1.errors.join(' | ')}`);
  await mk1.context.close();

  console.log(JSON.stringify({ results, findings }, null, 2));
} finally {
  await browser.close();
}
