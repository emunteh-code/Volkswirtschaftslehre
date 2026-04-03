import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';
import { CURRICULUM } from '../oekonometrie/js/data/curriculum.js';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4179';
const tabs = ['theorie', 'formeln', 'aufgaben', 'intuition'];

async function waitForApp(page) {
  await page.waitForFunction(() => window.__jsLoaded && typeof window.__renderHome === 'function' && typeof window.__navigate === 'function', { timeout: 20000 });
}

async function openModulePage(browser, path, consentKey) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });
  await page.goto(`${baseUrl}${path}?qa=1`, { waitUntil: 'networkidle' });
  await page.evaluate((key) => localStorage.setItem(key, '1'), consentKey);
  await page.reload({ waitUntil: 'networkidle' });
  await waitForApp(page);
  return page;
}

async function collectSummary(page, { concept = 'home', tab = 'theorie' } = {}) {
  return page.evaluate(({ concept, tab }) => {
    const visibleText = document.body.textContent || '';
    const rBlocks = [...document.querySelectorAll('#content [data-r-practice-root]')];
    return {
      concept,
      tab,
      pageTitle: (document.querySelector('#content h1, #content h2')?.textContent || '').trim(),
      sectionBlocks: document.querySelectorAll('#content .section-block').length,
      formulaCards: document.querySelectorAll('#content .formula-card').length,
      problemCards: document.querySelectorAll('#content .problem-card').length,
      graphCanvas: !!document.getElementById('graph_canvas'),
      rBlocks: document.querySelectorAll('#content .r-application-block').length,
      rPracticeBlocks: rBlocks.length,
      rLiveBlocks: rBlocks.filter((block) => block.dataset.runtimeMode === 'live').length,
      rGuidedBlocks: rBlocks.filter((block) => block.dataset.runtimeMode === 'guided').length,
      rRuntimeStatuses: rBlocks.map((block) => block.querySelector('[data-r-runtime-status]')?.textContent?.trim()).filter(Boolean),
      rOutputPreview: (document.querySelector('#content [data-r-output]')?.textContent || '').trim().slice(0, 280),
      mathError: visibleText.includes('Math input error'),
      rawDelimiters: visibleText.includes('$$'),
      entityLeak: /&gt;|&lt;|&amp;/.test(visibleText),
      markupLeak: /<span|<\/span|<div|<\/div|<mjx/.test(visibleText)
    };
  }, { concept, tab });
}

async function navigateConcept(page, conceptId, tab = 'theorie') {
  await page.evaluate((id) => window.__navigate(id), conceptId);
  await page.waitForTimeout(800);
  if (tab !== 'theorie') {
    await page.locator(`#tabRow [data-tab="${tab}"]`).click();
    await page.waitForTimeout(700);
  }
}

async function runFirstRBlock(page) {
  const runButton = page.locator('#content [data-r-action="run"]:not([disabled])').first();
  if (await runButton.count()) {
    await runButton.click();
    await page.waitForFunction(() => {
      const status = document.querySelector('#content [data-r-runtime-status]')?.textContent || '';
      const output = document.querySelector('#content [data-r-output]')?.textContent || '';
      return status.includes('WebR aktiv') || status.includes('Fallback') || output.includes('Live-Runtime nicht verfügbar');
    }, { timeout: 30000 });
    await page.waitForTimeout(500);
  }
}

async function verifyEconometrics(browser) {
  const page = await openModulePage(browser, '/oekonometrie/index.html', 'oekonometrie_consent_v2');
  const failures = [];
  const sampleSurfaces = [];

  for (const concept of CURRICULUM) {
    for (const tab of tabs) {
      await navigateConcept(page, concept.id, tab);
      const summary = await collectSummary(page, { concept: concept.id, tab });
      sampleSurfaces.push({
        concept: concept.id,
        tab,
        title: summary.pageTitle,
        sectionBlocks: summary.sectionBlocks,
        formulaCards: summary.formulaCards,
        problemCards: summary.problemCards,
        rPracticeBlocks: summary.rPracticeBlocks
      });

      if (summary.mathError || summary.rawDelimiters || summary.entityLeak || summary.markupLeak) {
        failures.push({ concept: concept.id, tab, type: 'renderLeak', summary });
      }
      if (tab === 'theorie' && summary.sectionBlocks < 2) {
        failures.push({ concept: concept.id, tab, type: 'thinTheory', summary });
      }
      if (tab === 'formeln' && summary.formulaCards < 1) {
        failures.push({ concept: concept.id, tab, type: 'missingFormulas', summary });
      }
      if (tab === 'aufgaben' && summary.problemCards < 1) {
        failures.push({ concept: concept.id, tab, type: 'missingTasks', summary });
      }
      if (tab === 'intuition' && summary.sectionBlocks < 1) {
        failures.push({ concept: concept.id, tab, type: 'missingIntuition', summary });
      }
    }
  }

  await navigateConcept(page, 'matrix_notation', 'theorie');
  await runFirstRBlock(page);
  const liveSummary = await collectSummary(page, { concept: 'matrix_notation', tab: 'theorie' });

  await navigateConcept(page, 'robust_gls', 'theorie');
  const guidedSummary = await collectSummary(page, { concept: 'robust_gls', tab: 'theorie' });

  await page.close();
  return {
    checkedConcepts: CURRICULUM.length,
    checkedSurfaces: sampleSurfaces.length,
    failureCount: failures.length,
    failures: failures.slice(0, 30),
    sampleSurfaces: sampleSurfaces.slice(0, 20),
    liveSummary,
    guidedSummary
  };
}

async function verifyStatistics(browser) {
  const page = await openModulePage(browser, '/statistik/index.html', 'statistik_consent_v1');
  await navigateConcept(page, 'rlab', 'theorie');
  await runFirstRBlock(page);
  const summary = await collectSummary(page, { concept: 'rlab', tab: 'theorie' });
  await page.close();
  return summary;
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

try {
  const econometrics = await verifyEconometrics(browser);
  const statistics = await verifyStatistics(browser);

  console.log(JSON.stringify({
    econometrics,
    statistics
  }, null, 2));
} finally {
  await browser.close();
}
