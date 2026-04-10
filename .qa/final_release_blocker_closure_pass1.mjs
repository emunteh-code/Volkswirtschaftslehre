import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const outDir = path.resolve('.qa/final-release-blocker-closure-pass-1');

async function ensureDir() {
  await fs.mkdir(outDir, { recursive: true });
}

async function waitForPortal(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__navigate === 'function',
    { timeout: 30000 }
  );
}

function now() {
  return Date.now();
}

function mathSeed() {
  const t = now();
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
        attempt_id: 'math-final-a1',
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
        entry_id: 'm_math_final_1',
        module_slug: 'mathematik',
        concept_id: 'algebra_mengen',
        source: 'practice',
        timestamp: t - 200000,
        wrong_answer: 'Vorzeichen falsch'
      },
      {
        entry_id: 'm_math_final_2',
        module_slug: 'mathematik',
        concept_id: 'funktionen_gleichungen',
        source: 'full_exam',
        timestamp: t - 180000,
        wrong_answer: 'Quadratiksignal übersehen'
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
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`console:${msg.text()}`);
  });
  await page.goto(`${baseUrl}${urlPath}${urlPath.includes('?') ? '&' : '?'}qa=1`, { waitUntil: 'networkidle' });
  return { context, page, errors };
}

async function applySeed(page, seed) {
  await page.evaluate((payload) => {
    localStorage.clear();
    localStorage.setItem(payload.consentKey, '1');
    localStorage.setItem(payload.keys.progress, JSON.stringify(payload.progress));
    localStorage.setItem(payload.keys.srs, JSON.stringify(payload.srs));
    localStorage.setItem(payload.keys.attempts, JSON.stringify(payload.attempts));
    localStorage.setItem(payload.keys.mistakes, JSON.stringify(payload.mistakes));
    localStorage.setItem(payload.keys.review, JSON.stringify(payload.reviewed));
  }, seed);
  await page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(page);
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
    moduleCount: document.querySelectorAll('.lp-tile').length,
    shelfNote: document.querySelector('.lp-shelf-note')?.textContent?.trim() || '',
    mikro2Note: document.querySelector('.lp-tile[data-slug="mikro2"] .lp-tile-note')?.textContent?.trim() || ''
  }));
  await screenshot(landing.page, 'landing.png');
  if (results.landing.moduleCount < 10) findings.push('landing module count unexpectedly low');
  if (!results.landing.shelfNote.includes('öffentlich freigegebene Live-Module')) findings.push('landing shelf note missing or regressed');
  if (!results.landing.mikro2Note.includes('Sonderstatus')) findings.push('mikro2 landing special-status note missing');
  if (landing.errors.length) findings.push(`landing page errors: ${landing.errors.join(' | ')}`);
  await landing.context.close();

  const mikro1 = await openPage(browser, '/mikro1/index.html');
  await mikro1.page.evaluate(() => localStorage.setItem('mikro_consent_v1', '1'));
  await mikro1.page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(mikro1.page);
  await mikro1.page.evaluate(() => window.__navigate('kmm'));
  await mikro1.page.waitForTimeout(800);
  results.mikro1Theory = await mikro1.page.evaluate(() => ({
    title: document.querySelector('#content h1')?.textContent?.trim() || '',
    sectionBlocks: document.querySelectorAll('#content .section-block').length,
    formulaCards: document.querySelectorAll('#content .formula-card').length
  }));
  await screenshot(mikro1.page, 'mikro1-kmm.png');
  await mikro1.page.evaluate(() => window.__startFullExam('probeklausur_1'));
  await mikro1.page.waitForTimeout(1000);
  results.mikro1Exam = await mikro1.page.evaluate(() => ({
    heading: document.querySelector('#content h2, #content h1')?.textContent?.trim() || '',
    questionCount: document.querySelectorAll('#content .fe-question').length,
    text: document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim() || ''
  }));
  await screenshot(mikro1.page, 'mikro1-full-exam.png');
  if (results.mikro1Theory.sectionBlocks < 5) findings.push('mikro1 flagship concept page regressed');
  if (results.mikro1Exam.questionCount < 8) findings.push('mikro1 full exam looks underbuilt');
  if (!/Arbeitsweise|Musterlösung|Klausur/.test(results.mikro1Exam.text)) findings.push('mikro1 exam surface missing serious framing');
  if (mikro1.errors.length) findings.push(`mikro1 page errors: ${mikro1.errors.join(' | ')}`);
  await mikro1.context.close();

  const mathematik = await openPage(browser, '/mathematik/index.html');
  await applySeed(mathematik.page, mathSeed());
  await mathematik.page.evaluate(() => window.__showDashboard());
  await mathematik.page.waitForTimeout(600);
  results.mathematikDashboard = await mathematik.page.evaluate(() => ({
    title: document.querySelector('.dash-honest-pilot-title')?.textContent?.trim() || '',
    nextStep: document.querySelector('.dhp-status')?.textContent?.trim() || '',
    hasMistakeButton: !!Array.from(document.querySelectorAll('button')).find((btn) => btn.textContent?.includes('Fehlerprotokoll öffnen'))
  }));
  await screenshot(mathematik.page, 'mathematik-dashboard.png');
  await mathematik.page.evaluate(() => window.__showMistakeReview());
  await mathematik.page.waitForTimeout(600);
  results.mathematikMistakeReview = await mathematik.page.evaluate(() => ({
    subtitle: document.querySelector('.mr-sub')?.textContent?.trim() || '',
    sections: Array.from(document.querySelectorAll('.mr-h3')).map((el) => el.textContent?.trim()),
    actionLabel: document.querySelector('.mr-mark')?.textContent?.trim() || '',
    footerLabel: document.querySelector('.mr-footer button')?.textContent?.trim() || ''
  }));
  await screenshot(mathematik.page, 'mathematik-mistake-review.png');
  if (results.mathematikDashboard.title !== 'Lernprotokoll und nächste Schritte') findings.push('mathematik dashboard still feels like pilot tooling');
  if (!results.mathematikDashboard.hasMistakeButton) findings.push('mathematik dashboard still lacks direct mistake-review CTA');
  if (!results.mathematikMistakeReview.actionLabel.includes('Als geklärt markieren')) findings.push('mistake review action label regressed');
  if (!results.mathematikMistakeReview.footerLabel.includes('Zurück zum Lern-Dashboard')) findings.push('mistake review footer CTA regressed');
  if (mathematik.errors.length) findings.push(`mathematik page errors: ${mathematik.errors.join(' | ')}`);
  await mathematik.context.close();

  const finanz = await openPage(browser, '/finanzwirtschaft/index.html');
  await finanz.page.evaluate(() => localStorage.setItem('finanzwirtschaft_consent_v1', '1'));
  await finanz.page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(finanz.page);
  await finanz.page.evaluate(() => window.__navigate('bezugsrecht'));
  await finanz.page.waitForTimeout(800);
  results.finanzBezugsrecht = await finanz.page.evaluate(() => ({
    title: document.querySelector('#content h1')?.textContent?.trim() || '',
    sectionBlocks: document.querySelectorAll('#content .section-block').length
  }));
  await screenshot(finanz.page, 'finanzwirtschaft-bezugsrecht.png');
  if (results.finanzBezugsrecht.sectionBlocks < 5) findings.push('previously weak finanzwirtschaft page still feels too compact');
  if (finanz.errors.length) findings.push(`finanzwirtschaft page errors: ${finanz.errors.join(' | ')}`);
  await finanz.context.close();

  const mikro2 = await openPage(browser, '/mikro2/index.html');
  await mikro2.page.evaluate(() => localStorage.setItem('mikro2_consent_v1', '1'));
  await mikro2.page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(mikro2.page);
  results.mikro2Home = await mikro2.page.evaluate(() => ({
    hasSpecialStatus: document.body.textContent.includes('Sonderstatus'),
    text: document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim() || ''
  }));
  await screenshot(mikro2.page, 'mikro2-home.png');
  if (!results.mikro2Home.hasSpecialStatus) findings.push('mikro2 source-status honesty regressed');
  if (mikro2.errors.length) findings.push(`mikro2 page errors: ${mikro2.errors.join(' | ')}`);
  await mikro2.context.close();

  const oek = await openPage(browser, '/oekonometrie/index.html');
  await oek.page.evaluate(() => localStorage.setItem('oekonometrie_consent_v2', '1'));
  await oek.page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(oek.page);
  await oek.page.evaluate(() => window.__navigate('matrix_notation'));
  await oek.page.waitForTimeout(700);
  await oek.page.locator('#tabRow [data-tab="r-anwendung"]').click();
  await oek.page.waitForTimeout(1000);
  results.oekR = await oek.page.evaluate(() => {
    const text = document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim() || '';
    return {
      hasInteraktiv: text.includes('Interaktiv im Browser'),
      hasPruefungsregel: text.includes('Prüfungsregel'),
      hasRuntime: text.includes('Runtime:'),
      hasMiniTransfer: text.includes('Mini-Transfer:')
    };
  });
  await screenshot(oek.page, 'oekonometrie-r.png');
  if (!results.oekR.hasInteraktiv || !results.oekR.hasPruefungsregel || results.oekR.hasRuntime || results.oekR.hasMiniTransfer) {
    findings.push('shared R surface still feels too tool-first');
  }
  if (oek.errors.length) findings.push(`oekonometrie page errors: ${oek.errors.join(' | ')}`);
  await oek.context.close();

  console.log(JSON.stringify({ results, findings }, null, 2));
} finally {
  await browser.close();
}
