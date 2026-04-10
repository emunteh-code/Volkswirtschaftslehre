import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const outDir = new URL('./portal-backbone-trust-parity-pass-1/', import.meta.url);
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
      algebra_mengen: { interval: 3, ease: 2.1, due: t - 3600_000, reviews: 2 },
      funktionen_gleichungen: { interval: 5, ease: 2.5, due: t + 86_400_000, reviews: 1 }
    },
    attempts: [
      {
        attempt_id: 'math-a1',
        module_slug: 'mathematik',
        context: 'concept_schnelltest',
        target_id: 'algebra_mengen',
        started_at: t - 500000,
        submitted_at: t - 495000,
        responses: {
          q1: { correct: false },
          q2: { correct: true },
          q3: { correct: true }
        },
        score: { earned: 6, max: 10 },
        meta: { finish_reason: 'submitted' }
      },
      {
        attempt_id: 'math-a2',
        module_slug: 'mathematik',
        context: 'concept_schnelltest',
        target_id: 'funktionen_gleichungen',
        started_at: t - 300000,
        submitted_at: t - 292000,
        responses: {
          q1: { correct: true },
          q2: { correct: true },
          q4: { correct: false }
        },
        score: { earned: 8, max: 10 },
        meta: { finish_reason: 'submitted' }
      },
      {
        attempt_id: 'math-a3',
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
        entry_id: 'm_math_1',
        module_slug: 'mathematik',
        concept_id: 'algebra_mengen',
        source: 'practice',
        timestamp: t - 200000,
        wrong_answer: 'Vorzeichen falsch'
      },
      {
        entry_id: 'm_math_2',
        module_slug: 'mathematik',
        concept_id: 'funktionen_gleichungen',
        source: 'full_exam',
        timestamp: t - 180000,
        wrong_answer: 'Quadratiksignal übersehen'
      },
      {
        entry_id: 'm_math_3',
        module_slug: 'mathematik',
        concept_id: 'funktionen_gleichungen',
        source: 'full_exam',
        timestamp: t - 160000,
        wrong_answer: 'Scheitelpunkt falsch gelesen'
      }
    ],
    reviewed: {
      reviewed: {
        m_math_1: t - 150000
      }
    }
  };
}

function mikro2Seed() {
  const t = now();
  return {
    consentKey: 'mikro2_consent_v1',
    keys: {
      progress: 'mikro2_progress_v1',
      srs: 'mikro2_srs_v1',
      attempts: 'mikro2_attempts_v1',
      mistakes: 'mikro2_mistakes_v1',
      review: 'mikro2_mistake_review_v1'
    },
    progress: {
      spieltheorie_statisch: { views: 2, solved: 1, correct: 2, wrong: 1, lastSeen: t - 30000 },
      oligopol_cournot_bertrand: { views: 2, solved: 1, correct: 1, wrong: 1, lastSeen: t - 12000 }
    },
    srs: {
      spieltheorie_statisch: { interval: 2, ease: 2.2, due: t - 7200_000, reviews: 3 }
    },
    attempts: [
      {
        attempt_id: 'm2-a1',
        module_slug: 'mikro2',
        context: 'concept_schnelltest',
        target_id: 'spieltheorie_statisch',
        started_at: t - 240000,
        submitted_at: t - 235000,
        responses: { q1: { correct: true }, q2: { correct: false } },
        score: { earned: 7, max: 10 },
        meta: { finish_reason: 'submitted' }
      },
      {
        attempt_id: 'm2-a2',
        module_slug: 'mikro2',
        context: 'full_exam',
        target_id: 'probeklausur_1',
        started_at: t - 140000,
        submitted_at: t - 120000,
        score: { earned: 18, max: 30 },
        meta: { finish_reason: 'submitted', exam_title: 'Probeklausur 1' }
      }
    ],
    mistakes: [
      {
        entry_id: 'm_m2_1',
        module_slug: 'mikro2',
        concept_id: 'oligopol_cournot_bertrand',
        source: 'full_exam',
        timestamp: t - 110000,
        wrong_answer: 'Cournot/Bertrand verwechselt'
      },
      {
        entry_id: 'm_m2_2',
        module_slug: 'mikro2',
        concept_id: 'spieltheorie_statisch',
        source: 'practice',
        timestamp: t - 90000,
        wrong_answer: 'Best Response falsch'
      }
    ],
    reviewed: {
      reviewed: {
        m_m2_2: t - 80000
      }
    }
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

async function openFresh(browser, path) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(String(error.message || error)));
  const url = `${baseUrl}${path}${path.includes('?') ? '&' : '?'}qa=1`;
  await page.goto(url, { waitUntil: 'networkidle' });
  return { context, page, errors };
}

async function saveShot(page, name) {
  const shotPath = path.join(outDirPath, name);
  await page.screenshot({ path: shotPath, fullPage: true });
}

async function landingCheck(browser) {
  const { context, page, errors } = await openFresh(browser, '/index.html');
  const summary = await page.evaluate(() => ({
    shelfNote: document.querySelector('.lp-shelf-note')?.textContent?.trim() || '',
    mikro2TileNote: document.querySelector('.lp-tile[data-slug="mikro2"] .lp-tile-note')?.textContent?.trim() || '',
    visibleModules: document.querySelectorAll('.lp-tile').length
  }));
  await saveShot(page, 'landing.png');
  await context.close();
  return { ...summary, errors };
}

async function mathematikCheck(browser) {
  const { context, page, errors } = await openFresh(browser, '/mathematik/index.html');
  await applySeed(page, mathSeed());

  const home = await page.evaluate(() => ({
    homeTitle: document.querySelector('#content h1')?.textContent?.trim() || '',
    hasDashboardEntry: document.body.textContent.includes('Lern-Dashboard'),
    hasMistakeEntry: document.body.textContent.includes('Fehlerprotokoll')
  }));

  await page.evaluate(() => window.__showDashboard());
  await page.waitForTimeout(500);
  const dashboard = await page.evaluate(() => ({
    derivedTitle: document.querySelector('.dash-honest-pilot-title')?.textContent?.trim() || '',
    nextStep: document.querySelector('.dash-honest-pilot .dhp-section .dhp-status')?.textContent?.trim() || '',
    mistakeCounts: Array.from(document.querySelectorAll('.dhp-muted')).map((el) => el.textContent?.trim() || '').find((text) => text.includes('Fehlerprotokoll (lokal markiert):')) || '',
    hasMistakeButton: !!Array.from(document.querySelectorAll('button')).find((btn) => btn.textContent?.includes('Fehlerprotokoll öffnen'))
  }));
  await saveShot(page, 'mathematik-dashboard.png');

  await page.evaluate(() => window.__showMistakeReview());
  await page.waitForTimeout(500);
  const reviewBefore = await page.evaluate(() => ({
    subtitle: document.querySelector('.mr-sub')?.textContent?.trim() || '',
    sections: Array.from(document.querySelectorAll('.mr-h3')).map((el) => el.textContent?.trim()),
    actionLabel: document.querySelector('.mr-mark')?.textContent?.trim() || '',
    footerLabel: document.querySelector('.mr-footer button')?.textContent?.trim() || ''
  }));
  await saveShot(page, 'mathematik-mistake-review.png');

  await page.locator('.mr-mark').first().click();
  await page.waitForTimeout(300);
  const reviewAfter = await page.evaluate(() => ({
    subtitle: document.querySelector('.mr-sub')?.textContent?.trim() || '',
    openSections: Array.from(document.querySelectorAll('.mr-section h3')).map((el) => el.textContent?.trim())
  }));

  const resetState = await page.evaluate(() => {
    window.confirm = () => true;
    window.__resetData();
    return {
      attemptsCleared: localStorage.getItem('mathe_attempts_v1') === null,
      mistakesCleared: localStorage.getItem('mathe_mistakes_v1') === null,
      reviewCleared: localStorage.getItem('mathe_mistake_review_v1') === null
    };
  });

  await context.close();
  return { home, dashboard, reviewBefore, reviewAfter, resetState, errors };
}

async function mikro2Check(browser) {
  const { context, page, errors } = await openFresh(browser, '/mikro2/index.html');
  await applySeed(page, mikro2Seed());

  const home = await page.evaluate(() => ({
    homeTitle: document.querySelector('#content h1')?.textContent?.trim() || '',
    introHasSpecialStatus: document.body.textContent.includes('Sonderstatus'),
    introText: document.querySelector('#content .lead, #content p')?.textContent?.trim() || ''
  }));

  await page.evaluate(() => window.__showDashboard());
  await page.waitForTimeout(500);
  const dashboard = await page.evaluate(() => ({
    sourceSection: Array.from(document.querySelectorAll('.dash-section h3')).find((el) => el.textContent?.trim() === 'Quellenstatus')?.textContent?.trim() || '',
    sourceText: Array.from(document.querySelectorAll('.dash-section')).find((el) => el.textContent?.includes('offizielle Mikro-II-Quellenkorpus'))?.textContent?.replace(/\s+/g, ' ').trim() || '',
    derivedTitle: document.querySelector('.dash-honest-pilot-title')?.textContent?.trim() || ''
  }));
  await saveShot(page, 'mikro2-dashboard.png');

  await page.evaluate(() => window.__showMistakeReview());
  await page.waitForTimeout(500);
  const review = await page.evaluate(() => ({
    subtitle: document.querySelector('.mr-sub')?.textContent?.trim() || '',
    hint: document.querySelector('.mr-header .mr-hint')?.textContent?.trim() || '',
    footerLabel: document.querySelector('.mr-footer button')?.textContent?.trim() || ''
  }));
  await saveShot(page, 'mikro2-mistake-review.png');

  await context.close();
  return { home, dashboard, review, errors };
}

async function rCheck(browser) {
  const { context, page, errors } = await openFresh(browser, '/oekonometrie/index.html');
  await page.evaluate(() => localStorage.setItem('oekonometrie_consent_v2', '1'));
  await page.reload({ waitUntil: 'networkidle' });
  await waitForPortal(page);

  await page.evaluate(() => window.__navigate('matrix_notation'));
  await page.waitForTimeout(700);
  await page.locator('#tabRow [data-tab="r-anwendung"]').click();
  await page.waitForTimeout(1200);

  const summary = await page.evaluate(() => {
    const text = document.querySelector('#content')?.textContent?.replace(/\s+/g, ' ').trim() || '';
    const pillTexts = Array.from(document.querySelectorAll('.r-practice-pill, .r-runtime-badge, .r-runtime-chip')).map((el) => el.textContent?.trim() || '').filter(Boolean);
    return {
      hasLiveRLabel: text.includes('Live-R'),
      hasRuntimeLabel: text.includes('Runtime:'),
      hasPruefungsregel: text.includes('Prüfungsregel:'),
      hasMiniTransfer: text.includes('Mini-Transfer:'),
      pills: pillTexts
    };
  });
  await saveShot(page, 'oekonometrie-r-surface.png');
  await context.close();
  return { ...summary, errors };
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true
});

try {
  await ensureDir();
  const landing = await landingCheck(browser);
  const mathematik = await mathematikCheck(browser);
  const mikro2 = await mikro2Check(browser);
  const rSurface = await rCheck(browser);

  const failures = [];
  if (!landing.shelfNote.includes('nur öffentlich freigegebene Live-Module')) failures.push('landing:shelf-note-missing');
  if (!landing.mikro2TileNote.includes('Sonderstatus')) failures.push('landing:mikro2-note-missing');
  if (mathematik.dashboard.derivedTitle !== 'Lernprotokoll und nächste Schritte') failures.push('mathematik:dashboard-title');
  if (!mathematik.reviewBefore.subtitle.includes('offen')) failures.push('mathematik:review-subtitle');
  if (mathematik.reviewBefore.actionLabel !== 'Als geklärt markieren') failures.push('mathematik:review-action-label');
  if (!mathematik.resetState.reviewCleared) failures.push('mathematik:reset-did-not-clear-review');
  if (mikro2.dashboard.sourceSection !== 'Quellenstatus') failures.push('mikro2:source-section-missing');
  if (!mikro2.dashboard.sourceText.includes('offizielle Mikro-II-Quellenkorpus')) failures.push('mikro2:source-text-missing');
  if (!rSurface.hasLiveRLabel || rSurface.hasRuntimeLabel || !rSurface.hasPruefungsregel || rSurface.hasMiniTransfer) failures.push('shared-r-tone');
  if (landing.errors.length || mathematik.errors.length || mikro2.errors.length || rSurface.errors.length) failures.push('page-errors');

  console.log(JSON.stringify({
    baseUrl,
    landing,
    mathematik,
    mikro2,
    rSurface,
    failures
  }, null, 2));
} finally {
  await browser.close();
}
