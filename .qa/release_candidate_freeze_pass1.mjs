import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const outDir = new URL('./release-candidate-freeze-pass-1/', import.meta.url);
const outDirPath = fileURLToPath(outDir);

async function ensureDir() {
  await fs.mkdir(outDirPath, { recursive: true });
}

async function waitForPortal(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__renderHome === 'function',
    { timeout: 30000 }
  );
}

async function saveShot(page, name) {
  await page.screenshot({ path: path.join(outDirPath, name), fullPage: true });
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
        attempt_id: 'math-rc-a1',
        module_slug: 'mathematik',
        context: 'concept_schnelltest',
        target_id: 'algebra_mengen',
        started_at: t - 500000,
        submitted_at: t - 495000,
        responses: { q1: { correct: false }, q2: { correct: true } },
        score: { earned: 6, max: 10 },
        meta: { finish_reason: 'submitted' }
      },
      {
        attempt_id: 'math-rc-a2',
        module_slug: 'mathematik',
        context: 'full_exam',
        target_id: 'probeklausur_1',
        started_at: t - 120000,
        submitted_at: t - 100000,
        score: { earned: 22, max: 40 },
        meta: { finish_reason: 'submitted', exam_title: 'Probeklausur 1' }
      }
    ],
    mistakes: [
      {
        entry_id: 'm_math_rc_1',
        module_slug: 'mathematik',
        concept_id: 'algebra_mengen',
        source: 'practice',
        timestamp: t - 200000,
        wrong_answer: 'Vorzeichen falsch'
      },
      {
        entry_id: 'm_math_rc_2',
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

async function openFresh(browser, pathName) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(String(error.message || error)));
  const url = `${baseUrl}${pathName}${pathName.includes('?') ? '&' : '?'}qa=1`;
  await page.goto(url, { waitUntil: 'networkidle' });
  return { context, page, errors };
}

async function landingCheck(browser) {
  const { context, page, errors } = await openFresh(browser, '/index.html');
  const summary = await page.evaluate(() => ({
    moduleCount: document.querySelectorAll('.lp-tile').length,
    shelfNote: document.querySelector('.lp-shelf-note')?.textContent?.trim() || '',
    mikro2Note: document.querySelector('.lp-tile[data-slug="mikro2"] .lp-tile-note')?.textContent?.trim() || ''
  }));
  await saveShot(page, 'landing.png');
  await context.close();
  return { ...summary, errors };
}

async function mikro1Check(browser) {
  const { context, page, errors } = await openFresh(browser, '/mikro1/index.html');
  await page.evaluate(() => localStorage.setItem('mikro_consent_v1', '1'));
  await page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(page);

  await page.evaluate(() => window.__navigate('kmm'));
  await page.waitForTimeout(700);
  const theory = await page.evaluate(() => ({
    title: document.querySelector('#content h1')?.textContent?.trim() || '',
    sectionBlocks: document.querySelectorAll('#content .section-block').length,
    formulaCards: document.querySelectorAll('#content .formula-card').length,
    problemCards: document.querySelectorAll('#content .problem-card').length
  }));
  await saveShot(page, 'mikro1-kmm.png');

  await page.evaluate(() => window.__startFullExam('probeklausur_1'));
  await page.waitForTimeout(900);
  const exam = await page.evaluate(() => ({
    heading: document.querySelector('#content h2, #content h1')?.textContent?.trim() || '',
    questionCount: document.querySelectorAll('#content .fe-question').length,
    hasTimerOrMeta: /Minuten|Punkte|Klausur/.test(document.querySelector('#content')?.textContent || '')
  }));
  await saveShot(page, 'mikro1-full-exam.png');

  await context.close();
  return { theory, exam, errors };
}

async function mathematikCheck(browser) {
  const { context, page, errors } = await openFresh(browser, '/mathematik/index.html');
  await applySeed(page, mathSeed());

  await page.evaluate(() => window.__navigate('funktionen_gleichungen'));
  await page.waitForTimeout(700);
  const theory = await page.evaluate(() => ({
    title: document.querySelector('#content h1')?.textContent?.trim() || '',
    sectionBlocks: document.querySelectorAll('#content .section-block').length,
    formulaCards: document.querySelectorAll('#content .formula-card').length,
    problemCards: document.querySelectorAll('#content .problem-card').length
  }));
  await saveShot(page, 'mathematik-funktionen.png');

  await page.evaluate(() => window.__showDashboard());
  await page.waitForTimeout(500);
  const dashboard = await page.evaluate(() => ({
    title: document.querySelector('.dash-honest-pilot-title')?.textContent?.trim() || '',
    nextStep: document.querySelector('.dash-honest-pilot .dhp-status')?.textContent?.trim() || '',
    hasMistakeButton: !!Array.from(document.querySelectorAll('button')).find((btn) => btn.textContent?.includes('Fehlerprotokoll öffnen'))
  }));
  await saveShot(page, 'mathematik-dashboard.png');

  await context.close();
  return { theory, dashboard, errors };
}

async function mikro2Check(browser) {
  const { context, page, errors } = await openFresh(browser, '/mikro2/index.html');
  await page.evaluate(() => localStorage.setItem('mikro2_consent_v1', '1'));
  await page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(page);
  const home = await page.evaluate(() => ({
    title: document.querySelector('#content h1')?.textContent?.trim() || '',
    hasSpecialStatus: document.body.textContent.includes('Sonderstatus'),
    intro: document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim().slice(0, 300) || ''
  }));
  await saveShot(page, 'mikro2-home.png');
  await context.close();
  return { home, errors };
}

async function rCheck(browser) {
  const { context, page, errors } = await openFresh(browser, '/oekonometrie/index.html');
  await page.evaluate(() => localStorage.setItem('oekonometrie_consent_v2', '1'));
  await page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(page);
  await page.evaluate(() => window.__navigate('matrix_notation'));
  await page.waitForTimeout(700);
  await page.locator('#tabRow [data-tab="r-anwendung"]').click();
  await page.waitForTimeout(1000);
  const r = await page.evaluate(() => {
    const text = document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim() || '';
    return {
      hasLiveR: text.includes('Live-R'),
      hasPruefungsregel: text.includes('Prüfungsregel:'),
      hasRuntimePrefix: text.includes('Runtime:'),
      hasMiniTransfer: text.includes('Mini-Transfer:')
    };
  });
  await saveShot(page, 'oekonometrie-r.png');
  await context.close();
  return { r, errors };
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

try {
  await ensureDir();
  const landing = await landingCheck(browser);
  const mikro1 = await mikro1Check(browser);
  const mathematik = await mathematikCheck(browser);
  const mikro2 = await mikro2Check(browser);
  const oekonometrie = await rCheck(browser);

  const failures = [];
  if (landing.moduleCount < 10) failures.push('landing:module-count');
  if (!landing.shelfNote.includes('öffentlich freigegebene Live-Module')) failures.push('landing:shelf-note');
  if (!landing.mikro2Note.includes('Sonderstatus')) failures.push('landing:mikro2-note');
  if (mikro1.theory.sectionBlocks < 4) failures.push('mikro1:thin-theory');
  if (mikro1.exam.questionCount < 8) failures.push('mikro1:exam-thin');
  if (mathematik.dashboard.title !== 'Lernprotokoll und nächste Schritte') failures.push('mathematik:dashboard-title');
  if (!mathematik.dashboard.hasMistakeButton) failures.push('mathematik:dashboard-mistake-entry');
  if (!mikro2.home.hasSpecialStatus) failures.push('mikro2:special-status');
  if (!oekonometrie.r.hasLiveR || !oekonometrie.r.hasPruefungsregel || oekonometrie.r.hasRuntimePrefix || oekonometrie.r.hasMiniTransfer) failures.push('r-surface:tone');
  if (landing.errors.length || mikro1.errors.length || mathematik.errors.length || mikro2.errors.length || oekonometrie.errors.length) failures.push('page-errors');

  console.log(JSON.stringify({
    baseUrl,
    landing,
    mikro1,
    mathematik,
    mikro2,
    oekonometrie,
    failures
  }, null, 2));
} finally {
  await browser.close();
}
