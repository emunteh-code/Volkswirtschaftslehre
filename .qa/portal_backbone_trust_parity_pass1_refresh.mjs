import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const outDir = path.resolve('.qa/portal-backbone-trust-parity-pass-1-refresh');

async function ensureDir() {
  await fs.mkdir(outDir, { recursive: true });
}

async function waitForPortal(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__renderHome === 'function',
    { timeout: 30000 }
  );
}

function mathSeed() {
  const t = Date.now();
  return {
    consentKey: 'mathematik_consent_v1',
    keys: {
      progress: 'mathe_progress_v1',
      srs: 'mathe_srs_v1',
      attempts: 'mathe_attempts_v1',
      mistakes: 'mathe_mistakes_v1',
      review: 'mathe_mistake_review_v1'
    },
    progress: {
      algebra_mengen: { views: 2, solved: 1, correct: 1, wrong: 1, lastSeen: t - 20000 },
      funktionen_gleichungen: { views: 3, solved: 2, correct: 4, wrong: 2, lastSeen: t - 10000 }
    },
    srs: {
      algebra_mengen: { interval: 3, ease: 2.1, due: t - 3600_000, reviews: 2 }
    },
    attempts: [
      {
        attempt_id: 'math-bt-1',
        module_slug: 'mathematik',
        context: 'concept_schnelltest',
        target_id: 'algebra_mengen',
        started_at: t - 500000,
        submitted_at: t - 495000,
        responses: { q1: { correct: false }, q2: { correct: true } },
        score: { earned: 6, max: 10 },
        meta: { finish_reason: 'submitted' }
      }
    ],
    mistakes: [
      {
        entry_id: 'm_math_bt_1',
        module_slug: 'mathematik',
        concept_id: 'algebra_mengen',
        source: 'practice',
        timestamp: t - 200000,
        wrong_answer: 'Vorzeichen falsch'
      }
    ],
    reviewed: { reviewed: {} }
  };
}

async function openPage(browser, urlPath) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(String(error.message || error)));
  await page.goto(`${baseUrl}${urlPath}${urlPath.includes('?') ? '&' : '?'}qa=1`, { waitUntil: 'networkidle' });
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
  const landing = await openPage(browser, '/index.html');
  results.landing = await landing.page.evaluate(() => ({
    shelfNote: document.querySelector('.lp-shelf-note')?.textContent?.trim() || '',
    mikro2Note: document.querySelector('.lp-tile[data-slug="mikro2"] .lp-tile-note')?.textContent?.trim() || ''
  }));
  await screenshot(landing.page, 'landing.png');
  if (!results.landing.shelfNote.includes('öffentlich freigegebene Live-Module')) findings.push('landing shelf note missing');
  if (!results.landing.mikro2Note.includes('Sonderstatus')) findings.push('landing mikro2 note missing');
  await landing.context.close();

  const mathematik = await openPage(browser, '/mathematik/index.html');
  await mathematik.page.evaluate((payload) => {
    localStorage.clear();
    localStorage.setItem(payload.consentKey, '1');
    localStorage.setItem(payload.keys.progress, JSON.stringify(payload.progress));
    localStorage.setItem(payload.keys.srs, JSON.stringify(payload.srs));
    localStorage.setItem(payload.keys.attempts, JSON.stringify(payload.attempts));
    localStorage.setItem(payload.keys.mistakes, JSON.stringify(payload.mistakes));
    localStorage.setItem(payload.keys.review, JSON.stringify(payload.reviewed));
  }, mathSeed());
  await mathematik.page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(mathematik.page);
  results.mathematikHome = await mathematik.page.evaluate(() => ({
    cardTitle: document.querySelector('#content .home-action-row [data-home-action="mistake-review"] .hac-title')?.textContent?.trim() || ''
  }));
  await screenshot(mathematik.page, 'mathematik-home.png');
  await mathematik.page.evaluate(() => window.__showDashboard());
  await mathematik.page.waitForTimeout(600);
  results.mathematikDashboard = await mathematik.page.evaluate(() => ({
    title: document.querySelector('.dash-honest-pilot-title')?.textContent?.trim() || '',
    intro: document.querySelector('.dhp-intro')?.textContent?.trim() || '',
    foot: document.querySelector('.dhp-foot')?.textContent?.trim() || ''
  }));
  await screenshot(mathematik.page, 'mathematik-dashboard.png');
  await mathematik.page.evaluate(() => window.__showMistakeReview());
  await mathematik.page.waitForTimeout(600);
  results.mathematikMistakeReview = await mathematik.page.evaluate(() => ({
    hint: document.querySelector('.mr-hint')?.textContent?.trim() || '',
    footer: document.querySelector('.mr-footer button')?.textContent?.trim() || ''
  }));
  await screenshot(mathematik.page, 'mathematik-mistake-review.png');
  if (!results.mathematikHome.cardTitle.includes('Fehlerprotokoll')) findings.push('mathematik home mistake card missing');
  if (!results.mathematikMistakeReview.footer.includes('Zurück zum Lern-Dashboard')) findings.push('mathematik mistake-review footer regressed');
  await mathematik.context.close();

  const mikro2 = await openPage(browser, '/mikro2/index.html');
  await mikro2.page.evaluate(() => localStorage.setItem('mikro2_consent_v1', '1'));
  await mikro2.page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(mikro2.page);
  results.mikro2Home = await mikro2.page.evaluate(() => ({
    special: document.body.textContent.includes('Sonderstatus')
  }));
  await screenshot(mikro2.page, 'mikro2-home.png');
  await mikro2.page.evaluate(() => window.__showDashboard?.());
  await mikro2.page.waitForTimeout(600);
  results.mikro2Dashboard = await mikro2.page.evaluate(() => ({
    hasQuellenstatus: document.body.textContent.includes('Quellenstatus'),
    helper: document.querySelector('.dashboard .dash-section p')?.textContent?.trim() || ''
  }));
  await screenshot(mikro2.page, 'mikro2-dashboard.png');
  if (!results.mikro2Home.special) findings.push('mikro2 special-status missing');
  if (!results.mikro2Dashboard.hasQuellenstatus) findings.push('mikro2 dashboard source-status block missing');
  await mikro2.context.close();

  const statistik = await openPage(browser, '/statistik/index.html');
  await statistik.page.evaluate(() => localStorage.setItem('statistik_consent_v1', '1'));
  await statistik.page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(statistik.page);
  results.statistikHome = await statistik.page.evaluate(() => ({
    dashboardNote: document.querySelector('.hac-pilot-note')?.textContent?.trim() || '',
    text: document.body.textContent || ''
  }));
  await screenshot(statistik.page, 'statistik-home.png');
  await statistik.page.evaluate(() => window.__showDashboard());
  await statistik.page.waitForTimeout(600);
  results.statistikDashboard = await statistik.page.evaluate(() => ({
    button: Array.from(document.querySelectorAll('button')).find((btn) => btn.textContent?.includes('Fehlerprotokoll'))?.textContent?.trim() || '',
    helper: document.querySelector('.dashboard .dash-section p')?.textContent?.trim() || '',
    intro: document.querySelector('.dhp-intro')?.textContent?.trim() || ''
  }));
  await screenshot(statistik.page, 'statistik-dashboard.png');
  if (results.statistikHome.dashboardNote !== 'Basiert auf Lernspuren aus diesem Browser.') findings.push('statistik home dashboard note not updated');
  if (results.statistikDashboard.button !== 'Fehlerprotokoll öffnen') findings.push('statistik dashboard button label not aligned');
  await statistik.context.close();

  console.log(JSON.stringify({ results, findings }, null, 2));
} finally {
  await browser.close();
}
