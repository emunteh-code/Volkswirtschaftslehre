import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';

const MODULES = [
  {
    module: 'mikro1',
    consentKey: 'mikro_consent_v1',
    concept: 'markt',
    screenshot: '.qa/project-wide-graph-visual-parity-pass-1/mikro1-markt.png'
  },
  {
    module: 'makro1',
    consentKey: 'makro1_consent_v1',
    concept: 'islm',
    screenshot: '.qa/project-wide-graph-visual-parity-pass-1/makro1-islm.png'
  },
  {
    module: 'makro2',
    consentKey: 'makro2_consent_v1',
    concept: 'mundell_fleming',
    screenshot: '.qa/project-wide-graph-visual-parity-pass-1/makro2-mundell-fleming.png'
  },
  {
    module: 'mikro2',
    consentKey: 'mikro2_consent_v1',
    concept: 'spieltheorie_statisch',
    screenshot: '.qa/project-wide-graph-visual-parity-pass-1/mikro2-spieltheorie-statisch.png'
  },
  {
    module: 'finanzwirtschaft',
    consentKey: 'finanzwirtschaft_consent_v1',
    concept: 'wacc_leverage',
    screenshot: '.qa/project-wide-graph-visual-parity-pass-1/finanzwirtschaft-wacc-leverage.png'
  },
  {
    module: 'internationale-wirtschaftsbeziehungen',
    consentKey: 'iwb_consent_v1',
    concept: 'zinsparitaet',
    screenshot: '.qa/project-wide-graph-visual-parity-pass-1/iwb-zinsparitaet.png'
  },
  {
    module: 'oekonometrie',
    consentKey: 'oekonometrie_consent_v2',
    concept: 'prediction_intervals',
    screenshot: '.qa/project-wide-graph-visual-parity-pass-1/oekonometrie-conf-pred.png'
  },
  {
    module: 'mathematik',
    consentKey: 'mathematik_consent_v1',
    concept: 'lagrange',
    screenshot: '.qa/project-wide-graph-visual-parity-pass-1/mathematik-lagrange.png'
  }
];

async function waitForApp(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__navigate === 'function',
    { timeout: 20000 }
  );
}

async function openModule(browser, { module, consentKey }) {
  const page = await browser.newPage({ viewport: { width: 1520, height: 1800 } });
  await page.addInitScript((key) => localStorage.setItem(key, '1'), consentKey);
  await page.goto(`${baseUrl}/${module}/index.html?qa=1`, { waitUntil: 'domcontentloaded' });
  await waitForApp(page);
  const consentButton = page.locator('#consentNotice .consent-btn-primary');
  if (await consentButton.count()) {
    if (await consentButton.isVisible().catch(() => false)) {
      await consentButton.click();
      await page.waitForTimeout(250);
    }
  }
  await page.waitForTimeout(900);
  return page;
}

async function openGraphTab(page, concept) {
  await page.evaluate((id) => window.__navigate(id), concept);
  await page.waitForTimeout(800);
  const graphTab = page.locator('#tabRow [data-tab="graph"]');
  if (await graphTab.count()) {
    await graphTab.click();
    await page.waitForTimeout(900);
  }
}

async function collectSummary(page, { module, concept }) {
  return page.evaluate(({ module, concept }) => {
    const text = document.body.innerText || '';
    const graphInfo = document.querySelector('#graph_info, .graph-info');
    const legendText = graphInfo ? graphInfo.innerText : '';
    return {
      module,
      concept,
      title: (document.querySelector('#content h1, #content h2, .graph-panel-title')?.textContent || '').trim(),
      graphCanvas: !!document.getElementById('graph_canvas'),
      ctrlGroups: document.querySelectorAll('.graph-controls .ctrl-group').length,
      giRows: document.querySelectorAll('.graph-info .gi-row').length,
      legacyInsightRows: document.querySelectorAll('.graph-insight-row, .graph-interpretation-row').length,
      legacyReadingHint: document.querySelectorAll('.graph-reading-hint').length,
      graphContainer: document.querySelectorAll('.graph-container').length,
      infoLabel: (graphInfo?.querySelector('.gi-label')?.textContent || '').trim(),
      legendText,
      rawLeak: /\$\$|&gt;|&lt;|&amp;|<span|<\/span|Math input error/.test(text)
    };
  }, { module, concept });
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

const results = [];

try {
  for (const entry of MODULES) {
    const page = await openModule(browser, entry);
    await openGraphTab(page, entry.concept);
    const summary = await collectSummary(page, entry);
    await page.screenshot({ path: entry.screenshot, fullPage: true });
    results.push(summary);
    await page.close();
  }

  console.log(JSON.stringify({ baseUrl, results }, null, 2));
} finally {
  await browser.close();
}
