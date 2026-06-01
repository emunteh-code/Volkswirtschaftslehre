#!/usr/bin/env node
/**
 * Trust-critical regression protection — Pass 1
 * Run from repo: cd tools/clickthrough && npm ci && npx playwright install chromium && node trust-regression-pass-1.mjs
 * Serves repo root on TRUST_REGRESSION_PORT (default 8900).
 */
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const PORT = Number(process.env.TRUST_REGRESSION_PORT || 8900);
const base = `http://127.0.0.1:${PORT}`;

const failures = [];

function fail(row) {
  failures.push(row);
  console.error('FAIL:', JSON.stringify(row, null, 2));
}

const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], {
  cwd: root,
  stdio: 'ignore'
});

async function waitForHttp(url, maxMs = 25000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) return;
    } catch {
      /* */
    }
    await new Promise((r) => setTimeout(r, 280));
  }
  throw new Error(`Timeout waiting for ${url}`);
}

async function dismissConsent(page) {
  await page.evaluate(() => {
    if (typeof window.__acceptConsent === 'function') window.__acceptConsent();
  });
  const consentBtn = page.locator('.consent-btn-primary').first();
  if ((await consentBtn.count()) && (await consentBtn.isVisible())) {
    await consentBtn.click({ timeout: 2000 }).catch(() => {});
  }
}

async function gotoConcept(page, urlPath, conceptId) {
  await page.goto(`${base}${urlPath}`, { waitUntil: 'networkidle' });
  await dismissConsent(page);
  await page.waitForFunction(() => typeof window.__navigate === 'function');
  await page.evaluate((id) => window.__navigate(id), conceptId);
}

async function clickTab(page, tab) {
  if (tab === 'theorie') return;
  const btn = page.locator(`button[data-tab="${tab}"]`);
  if ((await btn.count()) === 0 || (await btn.isHidden())) return false;
  await btn.click();
  await page.waitForTimeout(400);
  return true;
}

/** --- Math leak: raw TeX / markup in visible #content text --- */
const MATH_LEAK_PATTERNS = ['$$', '\\[', '\\]', '\\begin{', '\\texttt{', 'legal-schema__'];

/** Secondary public non-core modules — stabilization pass 1 (math + interactions + responsive spot checks). */
const SECONDARY_STABILITY = [
  { route: '/makro1/index.html', id: 'islm', label: 'makro1/islm' },
  { route: '/makro2/index.html', id: 'mundell_fleming', label: 'makro2/mundell_fleming' },
  { route: '/finanzwirtschaft/index.html', id: 'liquiditaetsplanung', label: 'finanz/liquiditaetsplanung' },
  { route: '/jahresabschluss/index.html', id: 'buchen_konten', label: 'jahresabschluss/buchen_konten' },
  { route: '/internationale-wirtschaftsbeziehungen/index.html', id: 'ricardo', label: 'iwb/ricardo' },
  { route: '/mathematik/index.html', id: 'algebra_mengen', label: 'mathematik/algebra_mengen' }
];

async function runMathLeak(page) {
  const targets = [
    { route: '/statistik/index.html', id: 'deskriptiv', tab: 'theorie', label: 'statistik/deskriptiv/theorie' },
    { route: '/mikro1/index.html', id: 'budget', tab: 'theorie', label: 'mikro1/budget/theorie' },
    { route: '/statistik/index.html', id: 'deskriptiv', tab: 'formeln', label: 'statistik/deskriptiv/formeln' },
    { route: '/recht/index.html', id: 'was_ist_recht', tab: 'theorie', label: 'recht/was_ist_recht/theorie' },
    { route: '/recht/index.html', id: 'was_ist_recht', tab: 'formeln', label: 'recht/was_ist_recht/formeln' },
    { route: '/oekonometrie/index.html', id: 't_test', tab: 'formeln', label: 'oeko/t_test/formeln' },
    { route: '/mikro1/index.html', id: 'lagrange', tab: 'formeln', label: 'mikro1/lagrange/formeln' },
    ...SECONDARY_STABILITY.map((m) => ({
      route: m.route,
      id: m.id,
      tab: 'formeln',
      label: `${m.label}/formeln`
    }))
  ];

  await page.setViewportSize({ width: 1280, height: 900 });
  for (const t of targets) {
    await gotoConcept(page, t.route, t.id);
    if (t.tab !== 'theorie') {
      const opened = await clickTab(page, t.tab);
      if (!opened) {
        fail({
          system: 'math-rendering',
          route: t.label,
          surface: t.tab,
          viewport: '1280',
          type: 'tab-missing',
          why: 'Cannot open tab for math leak scan.'
        });
        continue;
      }
      await page.waitForTimeout(900);
    }
    const text = await page.evaluate(() => {
      const root = document.querySelector('#content .panel.active') || document.getElementById('content');
      return root ? root.innerText : '';
    });
    for (const pat of MATH_LEAK_PATTERNS) {
      if (text.includes(pat)) {
        fail({
          system: 'math-rendering',
          route: t.label,
          surface: t.tab,
          viewport: '1280',
          type: 'raw-math-or-markup-leak',
          why: `Visible #content text still contains forbidden fragment "${pat}" (MathJax / HTML leak risk).`
        });
      }
    }
  }
}

/** --- Theory body: KaTeX only — no .math-semantic fragmentation in section blocks --- */
const THEORY_BODY_MATH_CASES = [
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget/theorie' },
  { route: '/internationale-wirtschaftsbeziehungen/index.html', id: 'gravitation', label: 'iwb/gravitation/theorie' },
  { route: '/oekonometrie/index.html', id: 'ols_objective', label: 'oeko/ols_objective/theorie' }
];

/** Heuristic garble signatures from letter-splitting (e.g. X1pX11, M1y, ô X21). */
const THEORY_GARBLE_PATTERN = '(?:ô\\s+[A-Z]\\d|X\\d+[a-z]X\\d+|\\bM\\d+[a-z]\\b\\s+[A-Z]\\d)';

async function runTheoryBodyMathIntegrity(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const t of THEORY_BODY_MATH_CASES) {
    await gotoConcept(page, t.route, t.id);
    await page.waitForTimeout(1400);
    const snap = await page.evaluate((garblePattern) => {
      const blocks = [...document.querySelectorAll('#content .section-block')];
      const fragmented = blocks.some((block) => Boolean(block.querySelector('.math-semantic')));
      const text = blocks.map((block) => block.innerText || '').join('\n');
      let garbled = false;
      try {
        garbled = new RegExp(garblePattern, 'u').test(text);
      } catch {
        garbled = false;
      }
      return { fragmented, garbled, snippet: text.slice(0, 200) };
    }, THEORY_GARBLE_PATTERN);
    if (snap.fragmented) {
      fail({
        system: 'theory-body-math',
        route: t.label,
        surface: 'theorie',
        viewport: '1280',
        type: 'section-block-fragmented',
        why: 'Theory .section-block still contains .math-semantic spans — use KaTeX/typesetMath only.'
      });
    }
    if (snap.garbled) {
      fail({
        system: 'theory-body-math',
        route: t.label,
        surface: 'theorie',
        viewport: '1280',
        type: 'garbled-math-text',
        why: `Theory text matches garble heuristic: "${snap.snippet}"`
      });
    }
  }
}

/** --- Formeln: formula grid always visible (no collapsed formula-section accordion) --- */
async function runFormelnAlwaysVisible(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const c of FORMELN_KLAUSURMETHODIK) {
    await gotoConcept(page, c.route, c.id);
    const opened = await clickTab(page, 'formeln');
    if (!opened) continue;
    await page.waitForTimeout(500);
    const snap = await page.evaluate(() => ({
      accordionCount: document.querySelectorAll('#content .formula-section-accordion').length,
      closedAccordion: document.querySelectorAll('#content .formula-section-accordion:not([open])').length,
      visibleCards: [...document.querySelectorAll('#content .formula-card')].filter((card) => {
        const r = card.getBoundingClientRect();
        return r.width > 1 && r.height > 1;
      }).length
    }));
    if (snap.accordionCount > 0 || snap.closedAccordion > 0) {
      fail({
        system: 'formeln-always-visible',
        route: c.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'formula-accordion-present',
        why: 'Formeln & Merksätze must not use formula-section-accordion when Klausurmethodik is present.'
      });
    }
    if (snap.visibleCards < 1) {
      fail({
        system: 'formeln-always-visible',
        route: c.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'formula-cards-hidden',
        why: 'Expected visible .formula-card elements without expanding an accordion.'
      });
    }
  }
}

/** --- Formula card bodies: no MathJax error text (e.g. misplaced &) --- */
const FORMULA_EQ_INTEGRITY = [
  { route: '/mikro1/index.html', id: 'grs', label: 'mikro1/grs/formeln', cardLabel: 'GRS Definition' },
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget/formeln', cardLabel: 'Budgetgerade' }
];

async function runFormulaEquationIntegrity(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const t of FORMULA_EQ_INTEGRITY) {
    await gotoConcept(page, t.route, t.id);
    const opened = await clickTab(page, 'formeln');
    if (!opened) {
      fail({
        system: 'formula-eq-integrity',
        route: t.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'tab-missing',
        why: 'Cannot open Formeln tab for formula equation integrity scan.'
      });
      continue;
    }
    await page.waitForTimeout(1600);
    const snap = await page.evaluate((cardLabel) => {
      const cards = [...document.querySelectorAll('#content .formula-card')];
      const card = cards.find((el) => (el.querySelector('.f-label')?.textContent || '').includes(cardLabel));
      if (!card) return { missingCard: true };
      const eq = card.querySelector('.f-eq');
      const text = (eq?.textContent || '').trim();
      return {
        missingCard: false,
        missingEq: !eq,
        text: text.slice(0, 240),
        misplaced: /misplaced\s*&/i.test(text),
        typeset: Boolean(eq?.querySelector('mjx-container')),
        hasGrs: /GRS/i.test(text),
        hasFrac: /dx|∂|∣|‖/i.test(text) || Boolean(eq?.querySelector('mjx-container mjx-mfrac'))
      };
    }, t.cardLabel);
    if (snap.missingCard) {
      fail({
        system: 'formula-eq-integrity',
        route: t.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'formula-card-missing',
        why: `Expected formula card with label containing "${t.cardLabel}".`
      });
      continue;
    }
    if (snap.missingEq) {
      fail({
        system: 'formula-eq-integrity',
        route: t.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'formula-eq-missing',
        why: 'Formula card has no .f-eq block.'
      });
      continue;
    }
    if (snap.misplaced) {
      fail({
        system: 'formula-eq-integrity',
        route: t.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'formula-eq-mathjax-error',
        why: `Formula equation shows MathJax error text: "${snap.text}"`
      });
    }
    if (!snap.typeset) {
      fail({
        system: 'formula-eq-integrity',
        route: t.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'formula-eq-not-typeset',
        why: `Expected MathJax typesetting in .f-eq; got "${snap.text}"`
      });
    }
    if (t.id === 'grs' && (!snap.hasGrs || snap.text.length < 8)) {
      fail({
        system: 'formula-eq-integrity',
        route: t.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'formula-eq-truncated',
        why: `GRS Definition equation looks truncated: "${snap.text}"`
      });
    }
  }
}

/** --- Header math: no semantic fragmentation; unicode titles should typeset --- */
const HEADER_MATH_CASES = [
  { route: '/mikro1/index.html', id: 'lambda', tab: 'theorie', label: 'mikro1/lambda/theorie' },
  { route: '/mikro1/index.html', id: 'cobbd', tab: 'formeln', label: 'mikro1/cobbd/formeln' },
  { route: '/oekonometrie/index.html', id: 'matrix_notation', tab: 'theorie', label: 'oeko/matrix_notation/theorie' },
  { route: '/internationale-wirtschaftsbeziehungen/index.html', id: 'gravitation', tab: 'formeln', label: 'iwb/gravitation/formeln' }
];

async function runHeaderMathIntegrity(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const t of HEADER_MATH_CASES) {
    await gotoConcept(page, t.route, t.id);
    if (t.tab !== 'theorie') {
      const opened = await clickTab(page, t.tab);
      if (!opened) {
        fail({
          system: 'header-math',
          route: t.label,
          surface: t.tab,
          viewport: '1280',
          type: 'tab-missing',
          why: 'Cannot open tab for header math integrity scan.'
        });
        continue;
      }
    }
    await page.waitForTimeout(1400);
    const snap = await page.evaluate(() => {
      const inspect = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return { missing: true };
        return {
          fragmented: !!el.querySelector('.math-semantic'),
          typeset: !!el.querySelector('mjx-container'),
          text: (el.textContent || '').trim().slice(0, 100)
        };
      };
      return {
        conceptTitle: inspect('#content .concept-title'),
        formulaLabels: [...document.querySelectorAll('#content .f-label')].slice(0, 6).map((el, index) => ({
          index,
          fragmented: !!el.querySelector('.math-semantic'),
          typeset: !!el.querySelector('mjx-container'),
          html: el.innerHTML.slice(0, 160),
          text: (el.textContent || '').trim().slice(0, 80)
        }))
      };
    });

    if (snap.conceptTitle.missing) {
      fail({
        system: 'header-math',
        route: t.label,
        surface: t.tab,
        viewport: '1280',
        type: 'concept-title-missing',
        why: 'Expected .concept-title in #content.'
      });
    } else if (snap.conceptTitle.fragmented) {
      fail({
        system: 'header-math',
        route: t.label,
        surface: t.tab,
        viewport: '1280',
        type: 'concept-title-fragmented',
        why: `Concept title still has .math-semantic spans: "${snap.conceptTitle.text}"`
      });
    }

    if (t.tab === 'formeln') {
      const badLabel = snap.formulaLabels.find((row) => row.fragmented);
      if (badLabel) {
        fail({
          system: 'header-math',
          route: t.label,
          surface: t.tab,
          viewport: '1280',
          type: 'formula-label-fragmented',
          why: `Formula card label #${badLabel.index} has .math-semantic spans: "${badLabel.text}"`
        });
      }
      const needsTypeset = snap.formulaLabels.find((row) => /\$[^$]+\$/.test(row.html) && !row.typeset);
      if (needsTypeset) {
        fail({
          system: 'header-math',
          route: t.label,
          surface: t.tab,
          viewport: '1280',
          type: 'formula-label-not-typeset',
          why: `Formula card label #${needsTypeset.index} looks math-heavy but lacks mjx-container: "${needsTypeset.text}"`
        });
      }
    }

    if (t.id === 'lambda' && snap.conceptTitle.typeset !== true) {
      fail({
        system: 'header-math',
        route: t.label,
        surface: t.tab,
        viewport: '1280',
        type: 'concept-title-not-typeset',
        why: `Expected MathJax typesetting in concept title for λ concept; got "${snap.conceptTitle.text}"`
      });
    }

    if (t.id === 'gravitation' && t.tab === 'formeln') {
      const gdpLabel = snap.formulaLabels.find((row) => /GDP|Dist_\{/i.test(row.text));
      if (gdpLabel?.fragmented) {
        fail({
          system: 'header-math',
          route: t.label,
          surface: t.tab,
          viewport: '1280',
          type: 'iwb-gravitation-label-fragmented',
          why: `IWB gravitation proof label has .math-semantic spans: "${gdpLabel.text}"`
        });
      }
      if (gdpLabel && !gdpLabel.typeset) {
        fail({
          system: 'header-math',
          route: t.label,
          surface: t.tab,
          viewport: '1280',
          type: 'iwb-gravitation-label-not-typeset',
          why: `Expected MathJax typesetting for GDP/Dist proof-card label; got "${gdpLabel.text}"`
        });
      }
    }
  }
}

/** --- Provenance footer (expects strip for listed concepts) --- */
const PROVENANCE_EXPECT = [
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'lagrange', label: 'mikro1/lagrange', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'slutsky', label: 'mikro1/slutsky', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'praeferenz', label: 'mikro1/praeferenz', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'marshall', label: 'mikro1/marshall', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'produktion', label: 'mikro1/produktion', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'kosten', label: 'mikro1/kosten', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'gewinn', label: 'mikro1/gewinn', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'markt', label: 'mikro1/markt', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'monopol', label: 'mikro1/monopol', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'elast', label: 'mikro1/elast', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'normal', label: 'mikro1/normal', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'hicks', label: 'mikro1/hicks', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'ausgaben', label: 'mikro1/ausgaben', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'cv_ev', label: 'mikro1/cv_ev', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'arbeit', label: 'mikro1/arbeit', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'gk_dk', label: 'mikro1/gk_dk', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'kmm', label: 'mikro1/kmm', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'indiff', label: 'mikro1/indiff', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'cobbd', label: 'mikro1/cobbd', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'ces_u', label: 'mikro1/ces_u', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'hausopt', label: 'mikro1/hausopt', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'skalener', label: 'mikro1/skalener', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'grts', label: 'mikro1/grts', expectCoverage: 'page-anchors' },
  { route: '/mikro1/index.html', id: 'psubst', label: 'mikro1/psubst', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'deskriptiv', label: 'statistik/deskriptiv', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'bivariat', label: 'statistik/bivariat', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'wahrscheinlichkeit', label: 'statistik/wahrscheinlichkeit', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'verteilungen', label: 'statistik/verteilungen', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'schaetzen_verfahren', label: 'statistik/schaetzen_verfahren', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'schaetzen_eigenschaften_intervalle', label: 'statistik/schaetzen_eigenschaften_intervalle', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'testen', label: 'statistik/testen', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'nichtparametrisch', label: 'statistik/nichtparametrisch', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'regression_schaetzung_inferenz', label: 'statistik/regression_schaetzung_inferenz', expectCoverage: 'page-anchors' },
  { route: '/statistik/index.html', id: 'varianzanalyse', label: 'statistik/varianzanalyse', expectCoverage: 'page-anchors' },
  { route: '/makro1/index.html', id: 'islm', label: 'makro1/islm', expectCoverage: 'page-anchors' },
  { route: '/makro2/index.html', id: 'mundell_fleming', label: 'makro2/mundell_fleming', expectCoverage: 'page-anchors' },
  { route: '/finanzwirtschaft/index.html', id: 'liquiditaetsplanung', label: 'finanz/liquiditaetsplanung', expectCoverage: 'page-anchors' },
  { route: '/jahresabschluss/index.html', id: 'buchen_konten', label: 'jahresabschluss/buchen_konten', expectCoverage: 'page-anchors' },
  { route: '/recht/index.html', id: 'was_ist_recht', label: 'recht/was_ist_recht', expectCoverage: 'page-anchors' },
  { route: '/internationale-wirtschaftsbeziehungen/index.html', id: 'ricardo', label: 'iwb/ricardo', expectCoverage: 'page-anchors' },
  { route: '/mathematik/index.html', id: 'algebra_mengen', label: 'mathematik/algebra_mengen', expectCoverage: 'page-anchors' },
  { route: '/mathematik/index.html', id: 'lagrange', label: 'mathematik/lagrange', expectCoverage: 'page-anchors' },
  { route: '/mathematik/index.html', id: 'analysis_ableitung_grundlagen', label: 'mathematik/analysis_ableitung_grundlagen', expectCoverage: 'page-anchors' },
  { route: '/mathematik/index.html', id: 'integralrechnung', label: 'mathematik/integralrechnung', expectCoverage: 'page-anchors' },
  { route: '/mathematik/index.html', id: 'lineare_algebra_grundlagen', label: 'mathematik/lineare_algebra_grundlagen', expectCoverage: 'page-anchors' },
  { route: '/oekonometrie/index.html', id: 'matrix_notation', label: 'oeko/matrix_notation', expectCoverage: 'page-anchors' },
  { route: '/mikro2/index.html', id: 'spieltheorie_statisch', label: 'mikro2/spieltheorie_statisch', expectCoverage: 'page-anchors' }
];

/** Provenance strip must survive non-theorie tabs (same createRenderer path). Aufgaben is practice-only — no strip. */
const PROVENANCE_TAB_EXTRA = [
  { route: '/statistik/index.html', id: 'bivariat', tab: 'graph', label: 'statistik/bivariat/graph' },
  { route: '/oekonometrie/index.html', id: 'matrix_notation', tab: 'r-anwendung', label: 'oeko/matrix_notation/r-anwendung' }
];

/** Aufgaben tab must stay practice-only: no provenance strip, no task-family layer, no practice-source notice. */
const AUFGABEN_PRACTICE_ONLY = [
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget/aufgaben' },
  { route: '/statistik/index.html', id: 'deskriptiv', label: 'statistik/deskriptiv/aufgaben' }
];

/** Klausurmethodik (task families) live on Formeln tab when data exists. */
const FORMELN_KLAUSURMETHODIK = [
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget/formeln' },
  { route: '/statistik/index.html', id: 'deskriptiv', label: 'statistik/deskriptiv/formeln' }
];

async function runProvenance(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const p of PROVENANCE_EXPECT) {
    await gotoConcept(page, p.route, p.id);
    await clickTab(page, 'theorie');
    const snap = await page.evaluate(() => {
      const foot = document.querySelector('#content footer.source-provenance');
      const mark = document.querySelector('#content footer.source-provenance .source-provenance-mark');
      const line = document.querySelector('#content footer.source-provenance .source-provenance-line');
      return {
        footCount: document.querySelectorAll('#content footer.source-provenance').length,
        hasMark: !!mark,
        lineLen: (line?.textContent || '').trim().length,
        coverage: foot?.getAttribute('data-provenance-coverage') || '',
        lineSnippet: (line?.textContent || '').trim().slice(0, 120)
      };
    });
    if (snap.footCount !== 1) {
      fail({
        system: 'provenance-footer',
        route: p.label,
        surface: 'theorie',
        viewport: '1280',
        type: 'footer-count',
        why: `Expected exactly one #content footer.source-provenance, found ${snap.footCount}.`
      });
    }
    if (!snap.hasMark) {
      fail({
        system: 'provenance-footer',
        route: p.label,
        surface: 'theorie',
        viewport: '1280',
        type: 'missing-mark',
        why: 'source-provenance-mark (ⓘ) missing — parity / trust signal regression.'
      });
    }
    if (snap.lineLen < 8) {
      fail({
        system: 'provenance-footer',
        route: p.label,
        surface: 'theorie',
        viewport: '1280',
        type: 'empty-summary-line',
        why: 'source-provenance-line too short or empty.'
      });
    }
    if (p.expectCoverage && snap.coverage !== p.expectCoverage) {
      fail({
        system: 'provenance-footer',
        route: p.label,
        surface: 'theorie',
        viewport: '1280',
        type: 'provenance-coverage-mismatch',
        why: `Expected data-provenance-coverage="${p.expectCoverage}", got "${snap.coverage}". Line: ${snap.lineSnippet}`
      });
    }
    if (p.expectCoverage === 'manifest-only' && !/Primäranker|Primärdatei/i.test(snap.lineSnippet)) {
      fail({
        system: 'provenance-footer',
        route: p.label,
        surface: 'theorie',
        viewport: '1280',
        type: 'manifest-only-wording',
        why: `Manifest-only footer should mention missing primary anchors; got: ${snap.lineSnippet}`
      });
    }
  }

  for (const p of PROVENANCE_TAB_EXTRA) {
    await gotoConcept(page, p.route, p.id);
    const opened = await clickTab(page, p.tab);
    if (!opened) {
      fail({
        system: 'provenance-footer-tabs',
        route: p.label,
        surface: p.tab,
        viewport: '1280',
        type: 'tab-missing',
        why: `Tab ${p.tab} missing for provenance spot check.`
      });
      continue;
    }
    await page.waitForTimeout(500);
    const snap = await page.evaluate(() => {
      const foot = document.querySelector('#content footer.source-provenance');
      const mark = document.querySelector('#content footer.source-provenance .source-provenance-mark');
      const line = document.querySelector('#content footer.source-provenance .source-provenance-line');
      return {
        footCount: document.querySelectorAll('#content footer.source-provenance').length,
        hasMark: !!mark,
        lineLen: (line?.textContent || '').trim().length
      };
    });
    if (snap.footCount !== 1 || !snap.hasMark || snap.lineLen < 8) {
      fail({
        system: 'provenance-footer-tabs',
        route: p.label,
        surface: p.tab,
        viewport: '1280',
        type: 'footer-regression',
        why: `Provenance strip missing or weak on tab (foot=${snap.footCount}, mark=${snap.hasMark}, len=${snap.lineLen}).`
      });
    }
  }
}

async function runAufgabenPracticeOnly(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const c of AUFGABEN_PRACTICE_ONLY) {
    await gotoConcept(page, c.route, c.id);
    const opened = await clickTab(page, 'aufgaben');
    if (!opened) {
      fail({
        system: 'aufgaben-practice-only',
        route: c.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'tab-missing',
        why: 'Aufgaben tab missing for practice-only spot check.'
      });
      continue;
    }
    await page.waitForTimeout(400);
    const snap = await page.evaluate(() => ({
      provenanceFooters: document.querySelectorAll('#content footer.source-provenance').length,
      taskFamilyLayers: document.querySelectorAll('#content .task-family-layer').length,
      practiceSourceNotices: document.querySelectorAll('#content .practice-source-notice').length,
      klausurJumpLinks: document.querySelectorAll('#content .practice-klausur-link').length,
      klausurfamilienHeadings: [...document.querySelectorAll('#content h3')].filter(
        (node) => /Klausurfamilien/i.test(node.textContent || '')
      ).length
    }));
    if (snap.provenanceFooters !== 0) {
      fail({
        system: 'aufgaben-practice-only',
        route: c.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'provenance-on-aufgaben',
        why: `Expected no source-provenance footer on Aufgaben tab, found ${snap.provenanceFooters}.`
      });
    }
    if (snap.taskFamilyLayers !== 0 || snap.klausurfamilienHeadings !== 0) {
      fail({
        system: 'aufgaben-practice-only',
        route: c.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'task-family-on-aufgaben',
        why: `Task-family content must not appear on Aufgaben (layers=${snap.taskFamilyLayers}, headings=${snap.klausurfamilienHeadings}).`
      });
    }
    if (snap.practiceSourceNotices !== 0) {
      fail({
        system: 'aufgaben-practice-only',
        route: c.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'practice-source-notice',
        why: `Expected no practice-source-notice on Aufgaben tab, found ${snap.practiceSourceNotices}.`
      });
    }
    if (snap.klausurJumpLinks !== 0) {
      fail({
        system: 'aufgaben-practice-only',
        route: c.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'klausur-formeln-jump',
        why: `Expected no Aufgaben → Formeln Klausurmethode jump link, found ${snap.klausurJumpLinks}.`
      });
    }
  }
}

async function runFormelnKlausurmethodik(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const c of FORMELN_KLAUSURMETHODIK) {
    await gotoConcept(page, c.route, c.id);
    const opened = await clickTab(page, 'formeln');
    if (!opened) {
      fail({
        system: 'formeln-klausurmethodik',
        route: c.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'tab-missing',
        why: 'Formeln tab missing for Klausurmethodik spot check.'
      });
      continue;
    }
    await page.waitForTimeout(400);
    const snap = await page.evaluate(() => ({
      methodikSections: document.querySelectorAll('#content .formula-klausurmethodik').length,
      taskFamilyCards: document.querySelectorAll('#content .formula-klausurmethodik .task-family-card').length
    }));
    if (snap.methodikSections !== 1) {
      fail({
        system: 'formeln-klausurmethodik',
        route: c.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'methodik-section-missing',
        why: `Expected exactly one .formula-klausurmethodik section on Formeln tab, found ${snap.methodikSections}.`
      });
    }
    if (snap.taskFamilyCards < 1) {
      fail({
        system: 'formeln-klausurmethodik',
        route: c.label,
        surface: 'formeln',
        viewport: '1280',
        type: 'task-family-cards-missing',
        why: 'Expected at least one task-family-card under Klausurmethodik on Formeln tab.'
      });
    }
  }
}

/** Provenance strip on Formeln tab (secondary layer must not lose trust signal on notation-heavy surface). */
async function runProvenanceFormelnSecondary(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const p of SECONDARY_STABILITY) {
    await gotoConcept(page, p.route, p.id);
    const opened = await clickTab(page, 'formeln');
    if (!opened) {
      fail({
        system: 'provenance-footer-formeln',
        route: `${p.label}/formeln`,
        surface: 'formeln',
        viewport: '1280',
        type: 'tab-missing',
        why: 'Formeln tab missing for provenance check.'
      });
      continue;
    }
    await page.waitForTimeout(400);
    const snap = await page.evaluate(() => {
      const foot = document.querySelector('#content footer.source-provenance');
      const mark = document.querySelector('#content footer.source-provenance .source-provenance-mark');
      const line = document.querySelector('#content footer.source-provenance .source-provenance-line');
      return {
        footCount: document.querySelectorAll('#content footer.source-provenance').length,
        hasMark: !!mark,
        lineLen: (line?.textContent || '').trim().length
      };
    });
    if (snap.footCount !== 1) {
      fail({
        system: 'provenance-footer-formeln',
        route: `${p.label}/formeln`,
        surface: 'formeln',
        viewport: '1280',
        type: 'footer-count',
        why: `Expected exactly one #content footer.source-provenance on Formeln tab, found ${snap.footCount}.`
      });
    }
    if (!snap.hasMark) {
      fail({
        system: 'provenance-footer-formeln',
        route: `${p.label}/formeln`,
        surface: 'formeln',
        viewport: '1280',
        type: 'missing-mark',
        why: 'source-provenance-mark (ⓘ) missing on Formeln tab.'
      });
    }
    if (snap.lineLen < 8) {
      fail({
        system: 'provenance-footer-formeln',
        route: `${p.label}/formeln`,
        surface: 'formeln',
        viewport: '1280',
        type: 'empty-summary-line',
        why: 'source-provenance-line too short or empty on Formeln tab.'
      });
    }
  }
}

/** --- Mikro1 source companion (Workstream 1 parity) --- */
async function runMikro1SourceCompanion(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${base}/mikro1/index.html`, { waitUntil: 'networkidle' });
  await dismissConsent(page);
  await page.waitForFunction(() => typeof window.__showSourceCompanion === 'function');
  await page.evaluate(() => window.__showSourceCompanion());
  await page.waitForSelector('.source-companion-header h2', { timeout: 20000 });
  const header = await page.locator('.source-companion-header h2').innerText();
  if (!/Mikro I/i.test(header)) {
    fail({
      system: 'source-companion',
      route: 'mikro1/quellenbrowser',
      surface: 'companion',
      viewport: '1280',
      type: 'header-missing',
      why: `Expected Mikro I Quellenbrowser title, got "${header}"`
    });
  }
  const filters = await page.locator('.source-companion-filters button').count();
  if (filters < 4) {
    fail({
      system: 'source-companion',
      route: 'mikro1/quellenbrowser',
      surface: 'companion',
      viewport: '1280',
      type: 'coverage-filters-missing',
      why: `Expected coverage filters, found ${filters} buttons`
    });
  }
  const matrix = await page.locator('.source-coverage-matrix').count();
  if (!matrix) {
    fail({
      system: 'source-companion',
      route: 'mikro1/quellenbrowser',
      surface: 'companion',
      viewport: '1280',
      type: 'coverage-matrix-missing',
      why: 'Lecture coverage matrix not rendered'
    });
  }
  const parityPlan = await page.locator('.source-companion-action-plan ol li').count();
  if (parityPlan < 1) {
    fail({
      system: 'source-companion',
      route: 'mikro1/quellenbrowser',
      surface: 'companion-detail',
      viewport: '1280',
      type: 'parity-checklist-missing',
      why: 'Source-parity next-step checklist missing on selected document'
    });
  }

  await gotoConcept(page, '/mikro1/index.html', 'budget');
  await clickTab(page, 'theorie');
  const expandBtn = page.locator('#content footer.source-provenance .source-provenance-expand').first();
  if ((await expandBtn.count()) > 0) {
    await expandBtn.click();
    await page.waitForTimeout(300);
  }
  const anchorBrowser = page.locator('.source-provenance-companion').first();
  const refBrowser = page.locator('.source-provenance-companion-path').first();
  const bridge = (await anchorBrowser.count()) > 0 ? anchorBrowser : refBrowser;
  if ((await bridge.count()) === 0) {
    fail({
      system: 'source-companion',
      route: 'mikro1/budget/theorie',
      surface: 'provenance-inspector',
      viewport: '1280',
      type: 'companion-bridge-missing',
      why: 'Page anchor or file-level ref should expose Quellenbrowser bridge button'
    });
    return;
  }
  await bridge.click();
  await page.waitForSelector('.source-companion-header h2', { timeout: 20000 });
  const ctx = await page.locator('.source-companion-anchor-context').count();
  if (!ctx) {
    fail({
      system: 'source-companion',
      route: 'mikro1/budget/theorie',
      surface: 'companion',
      viewport: '1280',
      type: 'anchor-context-missing',
      why: 'Opening companion from file-level ref should show anchor context panel'
    });
  }
}

/** --- Graph shell integrity --- */
const GRAPH_CASES = [
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget/graph' },
  { route: '/mikro2/index.html', id: 'spieltheorie_statisch', label: 'mikro2/spieltheorie_statisch/graph' },
  { route: '/makro1/index.html', id: 'islm', label: 'makro1/islm/graph' },
  { route: '/makro2/index.html', id: 'mundell_fleming', label: 'makro2/mundell_fleming/graph' },
  { route: '/statistik/index.html', id: 'bivariat', label: 'statistik/bivariat/graph' },
  { route: '/oekonometrie/index.html', id: 'ols_objective', label: 'oeko/ols_objective/graph' },
  { route: '/finanzwirtschaft/index.html', id: 'liquiditaetsplanung', label: 'finanz/liquiditaetsplanung/graph' },
  { route: '/internationale-wirtschaftsbeziehungen/index.html', id: 'ricardo', label: 'iwb/ricardo/graph' },
  { route: '/mathematik/index.html', id: 'funktionen_gleichungen', label: 'mathematik/funktionen_gleichungen/graph' }
];

async function runGraphIntegrity(page, w, h, vpLabel) {
  await page.setViewportSize({ width: w, height: h });
  for (const g of GRAPH_CASES) {
    await gotoConcept(page, g.route, g.id);
    const opened = await clickTab(page, 'graph');
    if (!opened) {
      fail({
        system: 'graph-integrity',
        route: g.label,
        surface: 'graph',
        viewport: vpLabel,
        type: 'graph-tab-missing',
        why: 'Graph tab not available — route may have regressed.'
      });
      continue;
    }
    await page.waitForTimeout(1200);
    const res = await page.evaluate(() => {
      const canvas = document.querySelector('#content #graph_canvas');
      const title = document.querySelector('#content .graph-panel-title');
      const err = document.querySelector('#content .empty-state-error');
      const pedagogy = document.querySelector('#content .graph-pedagogy-footer');
      const info = document.querySelector('#content #graph_info');
      const r = canvas?.getBoundingClientRect();
      return {
        hasCanvas: !!canvas,
        cw: r?.width || 0,
        ch: r?.height || 0,
        titleLen: (title?.textContent || '').trim().length,
        errText: (err?.textContent || '').trim(),
        hasPedagogyFooter: !!pedagogy,
        pedagogyLen: (pedagogy?.textContent || '').trim().length,
        hasGraphInfo: !!info,
        canvasAria: (canvas?.getAttribute('aria-label') || '').trim().length
      };
    });
    if (!res.hasCanvas || res.cw < 80 || res.ch < 80) {
      fail({
        system: 'graph-integrity',
        route: g.label,
        surface: 'graph',
        viewport: vpLabel,
        type: 'canvas-missing-or-collapsed',
        why: `Canvas missing or too small (${res.cw}x${res.ch}) — misleading / broken graph risk.`
      });
    }
    if (res.titleLen < 4) {
      fail({
        system: 'graph-integrity',
        route: g.label,
        surface: 'graph',
        viewport: vpLabel,
        type: 'graph-title-missing',
        why: 'graph-panel-title empty or stripped.'
      });
    }
    if (res.errText) {
      fail({
        system: 'graph-integrity',
        route: g.label,
        surface: 'graph',
        viewport: vpLabel,
        type: 'render-error-visible',
        why: `Empty-state error visible: ${res.errText}`
      });
    }
    if (!res.hasPedagogyFooter || res.pedagogyLen < 20) {
      fail({
        system: 'graph-integrity',
        route: g.label,
        surface: 'graph',
        viewport: vpLabel,
        type: 'graph-pedagogy-footer-missing',
        why: 'Fleet graph pedagogy footer (Vorhersage + Theorie-Link) missing or empty.'
      });
    }
    if (!res.hasGraphInfo) {
      fail({
        system: 'graph-integrity',
        route: g.label,
        surface: 'graph',
        viewport: vpLabel,
        type: 'graph-info-mount-missing',
        why: '#graph_info live interpretation mount missing.'
      });
    }
    if (res.canvasAria < 12) {
      fail({
        system: 'graph-integrity',
        route: g.label,
        surface: 'graph',
        viewport: vpLabel,
        type: 'canvas-aria-missing',
        why: 'Canvas aria-label too short for screen-reader graph description.'
      });
    }
  }
}

/** --- Aufgaben solution reveal (public-core modules) --- */
const SOLUTION_REVEAL_CASES = [
  { route: '/statistik/index.html', id: 'deskriptiv', label: 'statistik/deskriptiv/aufgaben' },
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget/aufgaben' },
  { route: '/recht/index.html', id: 'was_ist_recht', label: 'recht/was_ist_recht/aufgaben' },
  { route: '/oekonometrie/index.html', id: 'matrix_notation', label: 'oeko/matrix_notation/aufgaben' },
  ...SECONDARY_STABILITY.map((m) => ({
    route: m.route,
    id: m.id,
    label: `${m.label}/aufgaben`
  }))
];

async function runSolutionReveal(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const c of SOLUTION_REVEAL_CASES) {
    await gotoConcept(page, c.route, c.id);
    const ok = await clickTab(page, 'aufgaben');
    if (!ok) {
      fail({
        system: 'interaction-reveal',
        route: c.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'tab-missing',
        why: 'Aufgaben tab missing.'
      });
      continue;
    }
    await page.waitForTimeout(500);
    const btn = page.getByRole('button', { name: /Lösung anzeigen|Lösung zeigen/i }).first();
    if ((await btn.count()) === 0) {
      fail({
        system: 'interaction-reveal',
        route: c.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'no-reveal-button',
        why: 'No solution reveal button found — silent regression risk.'
      });
      continue;
    }
    await btn.click();
    await page.waitForTimeout(300);
    const shown = await page.evaluate(() => !!document.querySelector('#content .solution-block.show'));
    if (!shown) {
      fail({
        system: 'interaction-reveal',
        route: c.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'reveal-no-show-class',
        why: 'Clicked reveal but .solution-block.show not present — Prüfungstransfer/Aufgaben parity risk.'
      });
    }
  }
}

/** --- Prüfungstransfer / exam drill toggle --- */
async function runExamDrillToggle(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await gotoConcept(page, '/mikro1/index.html', 'budget');
  const okAufgaben = await clickTab(page, 'aufgaben');
  if (!okAufgaben) {
    fail({
      system: 'interaction-pruefungstransfer',
      route: 'mikro1/budget/aufgaben',
      surface: 'aufgaben',
      viewport: '1280',
      type: 'tab-missing',
      why: 'Aufgaben tab missing for exam drill scan.'
    });
    return;
  }
  await page.waitForTimeout(500);
  const drillBtn = page.locator('[id^="examDrillBtn_"]').first();
  if ((await drillBtn.count()) === 0) {
    /* Not all concepts expose drills on Aufgaben — skip without failure */
    return;
  }
  await drillBtn.click();
  await page.waitForTimeout(250);
  const expanded = await page.evaluate(() => {
    const sol = document.querySelector('[id^="examDrill_"]');
    return sol?.classList?.contains('show') || false;
  });
  if (!expanded) {
    fail({
      system: 'interaction-pruefungstransfer',
      route: 'mikro1/budget/aufgaben',
      surface: 'aufgaben',
      viewport: '1280',
      type: 'exam-drill-not-opening',
      why: 'examDrill toggle did not open solution — __toggleExamDrill / renderer parity risk.'
    });
  }
}

/** --- Right-panel fallback (narrow + dup + integrated mistakes) --- */
async function runRightPanelFallbackFor(page, route, conceptId, routeLabel) {
  const viewports = [
    ['edge-1199', 1199, 900],
    ['mobile-390', 390, 844]
  ];
  for (const [vpLabel, w, h] of viewports) {
    await page.setViewportSize({ width: w, height: h });
    await gotoConcept(page, route, conceptId);
    await clickTab(page, 'theorie');
    const snap = await page.evaluate(() => {
      const rp = document.getElementById('rightPanel');
      const mirM = document.querySelector('#content .content-fallback--mistakes');
      const mirC = document.querySelector('#content .content-fallback--connections');
      const rpConn = document.querySelector('#rightPanel #rpConnections');
      const v = (el) => {
        if (!el) return false;
        const s = getComputedStyle(el);
        if (s.display === 'none' || s.visibility === 'hidden') return false;
        const r = el.getBoundingClientRect();
        return r.width > 1 && r.height > 1;
      };
      const integrated =
        mirM && v(mirM)
          ? {
              supportCount: document.querySelectorAll('#content .theorie-fallback-support').length,
              legacyCardCount: document.querySelectorAll('#content .warning-card--theorie-fallback').length
            }
          : null;
      return {
        vw: window.innerWidth,
        rpVisible: v(rp),
        rpConnVisible: v(rpConn),
        mirrorConnVisible: v(mirC),
        mirrorMistVisible: v(mirM),
        dupConn: v(rpConn) && v(mirC),
        integrated
      };
    });
    if (snap.vw <= 1200) {
      if (snap.dupConn) {
        fail({
          system: 'right-panel-fallback',
          route: `${routeLabel}/theorie`,
          surface: 'theorie',
          viewport: vpLabel,
          type: 'duplicate-verbindungen',
          why: 'Rail and mirror Verbindungen both visible — trust / duplication regression.'
        });
      }
      if (snap.mirrorMistVisible && snap.integrated) {
        if (snap.integrated.supportCount !== 1 || snap.integrated.legacyCardCount > 0) {
          fail({
            system: 'right-panel-fallback',
            route: `${routeLabel}/theorie`,
            surface: 'theorie',
            viewport: vpLabel,
            type: 'integrated-mistakes-structure',
            why: `Expected one theorie-fallback-support and zero legacy cards; got support=${snap.integrated.supportCount}, legacy=${snap.integrated.legacyCardCount}.`
          });
        }
      }
    }
  }
}

async function runRightPanelFallback(page) {
  await runRightPanelFallbackFor(page, '/statistik/index.html', 'deskriptiv', 'statistik/deskriptiv');
}

async function runSecondaryRightPanelFallback(page) {
  for (const m of SECONDARY_STABILITY) {
    await runRightPanelFallbackFor(page, m.route, m.id, m.label);
  }
}

/** --- Focus mode parity --- */
async function runFocusModeParity(page) {
  await page.setViewportSize({ width: 1400, height: 900 });
  await gotoConcept(page, '/statistik/index.html', 'deskriptiv');
  await clickTab(page, 'theorie');
  await page.evaluate(() => document.body.classList.add('focus-mode'));
  await page.waitForTimeout(200);
  const snap = await page.evaluate(() => {
    const rp = document.getElementById('rightPanel');
    const mirM = document.querySelector('#content .content-fallback--mistakes');
    const v = (el) => {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 1 && r.height > 1;
    };
    return { rpHidden: rp ? getComputedStyle(rp).display === 'none' : true, mirrorMist: v(mirM) };
  });
  await page.evaluate(() => document.body.classList.remove('focus-mode'));
  if (!snap.rpHidden || !snap.mirrorMist) {
    fail({
      system: 'right-panel-fallback',
      route: 'statistik/deskriptiv/theorie',
      surface: 'theorie',
      viewport: '1400-focus',
      type: 'focus-mode-parity',
      why: `Focus mode: rail should hide and mistakes mirror show. rpHidden=${snap.rpHidden}, mirrorMist=${snap.mirrorMist}.`
    });
  }
}

/** --- R tab shell (structure + truth banner; no WebR execution) --- */
async function runRShellFor(page, route, conceptId, routeLabel, w, h, vpLabel) {
  await page.setViewportSize({ width: w, height: h });
  await gotoConcept(page, route, conceptId);
  const ok = await clickTab(page, 'r-anwendung');
  if (!ok) {
    fail({
      system: 'r-tab-shell',
      route: `${routeLabel}/r-anwendung`,
      surface: 'r-anwendung',
      viewport: vpLabel,
      type: 'tab-missing',
      why: 'R-Anwendung tab missing.'
    });
    return;
  }
  await page.waitForTimeout(800);
  const shell = await page.evaluate(() => {
    const v = (el) => {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 8 && r.height > 6;
    };
    const ed = document.querySelector('#content textarea[data-r-editor], #content .r-practice-editor');
    const out = document.querySelector('#content [data-r-output], #content .r-practice-output');
    const run = document.querySelector('#content [data-r-action="run"]');
    const reset = document.querySelector('#content [data-r-action="reset"]');
    const insert = document.querySelector('#content [data-r-action="insert-solution"]');
    const banner = document.querySelector('#content .r-practice-truth-banner');
    const toolbarKern = [...document.querySelectorAll('#content .r-practice-toolbar-title')].some((n) =>
      (n.textContent || '').includes('Kernzeile')
    );
    const kickerKern = [...document.querySelectorAll('#content .r-core-line-kicker')].some((n) =>
      (n.textContent || '').includes('Kernzeile')
    );
    const re = ed?.getBoundingClientRect();
    const ro = out?.getBoundingClientRect();
    return {
      hasEditor: !!ed && v(ed),
      hasOutput: !!out && v(out),
      hasRun: !!run && v(run),
      hasReset: !!reset && v(reset),
      hasInsert: !!insert && v(insert),
      hasTruthBanner: v(banner),
      kernzeileSurface: toolbarKern || kickerKern,
      ew: re?.width || 0,
      oh: ro?.height || 0
    };
  });
  if (!shell.hasEditor || shell.ew < 40) {
    fail({
      system: 'r-tab-shell',
      route: `${routeLabel}/r-anwendung`,
      surface: 'r-anwendung',
      viewport: vpLabel,
      type: 'editor-missing',
      why: 'R editor not visible or collapsed — embarrassing regression.'
    });
  }
  if (!shell.hasOutput || shell.oh < 20) {
    fail({
      system: 'r-tab-shell',
      route: `${routeLabel}/r-anwendung`,
      surface: 'r-anwendung',
      viewport: vpLabel,
      type: 'output-missing',
      why: 'R output region not visible.'
    });
  }
  if (!shell.hasRun) {
    fail({
      system: 'r-tab-shell',
      route: `${routeLabel}/r-anwendung`,
      surface: 'r-anwendung',
      viewport: vpLabel,
      type: 'run-control-missing',
      why: 'No run control in R practice block.'
    });
  }
  if (!shell.hasReset || !shell.hasInsert) {
    fail({
      system: 'r-tab-shell',
      route: `${routeLabel}/r-anwendung`,
      surface: 'r-anwendung',
      viewport: vpLabel,
      type: 'secondary-controls-missing',
      why: 'Reset or insert-solution control missing or not visible.'
    });
  }
  if (!shell.hasTruthBanner) {
    fail({
      system: 'r-tab-shell',
      route: `${routeLabel}/r-anwendung`,
      surface: 'r-anwendung',
      viewport: vpLabel,
      type: 'truth-banner-missing',
      why: 'Browser-R truth boundary banner missing or collapsed.'
    });
  }
  if (!shell.kernzeileSurface) {
    fail({
      system: 'r-tab-shell',
      route: `${routeLabel}/r-anwendung`,
      surface: 'r-anwendung',
      viewport: vpLabel,
      type: 'kernzeile-missing',
      why: 'No Kernzeile teaching surface (toolbar or kicker) in #content.'
    });
  }
}

async function runRShellMatrix(page, w, h, vpLabel) {
  await runRShellFor(page, '/oekonometrie/index.html', 'matrix_notation', 'oekonometrie/matrix_notation', w, h, vpLabel);
  await runRShellFor(page, '/statistik/index.html', 'deskriptiv', 'statistik/deskriptiv', w, h, vpLabel);
  await runRShellFor(page, '/mathematik/index.html', 'funktionen_gleichungen', 'mathematik/funktionen_gleichungen', w, h, vpLabel);
}

/** --- Horizontal overflow spot --- */
async function runOverflowFor(page, route, conceptId, routeLabel, w, h, vpLabel) {
  await page.setViewportSize({ width: w, height: h });
  await gotoConcept(page, route, conceptId);
  await clickTab(page, 'theorie');
  const bad = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 24);
  if (bad) {
    fail({
      system: 'responsive-trust',
      route: `${routeLabel}/theorie`,
      surface: 'theorie',
      viewport: vpLabel,
      type: 'horizontal-overflow',
      why: 'Document scrollWidth exceeds viewport — clipped trust content risk.'
    });
  }
}

async function runOverflow(page, w, h, vpLabel) {
  await runOverflowFor(page, '/statistik/index.html', 'deskriptiv', 'statistik/deskriptiv', w, h, vpLabel);
}

async function runSecondaryOverflow(page) {
  for (const m of SECONDARY_STABILITY) {
    await runOverflowFor(page, m.route, m.id, m.label, 390, 844, 'mobile-390');
    await runOverflowFor(page, m.route, m.id, m.label, 1200, 900, 'tablet-1200');
  }
}

/** --- Hash routing #concept/tab (shareable deep links) --- */
async function runMasteryLabels(page) {
  const targets = [
    { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget/aufgaben' },
    { route: '/statistik/index.html', id: 'deskriptiv', label: 'statistik/deskriptiv/aufgaben' }
  ];
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const t of targets) {
    await gotoConcept(page, t.route, t.id);
    const opened = await clickTab(page, 'aufgaben');
    if (!opened) {
      fail({
        system: 'mastery-labels',
        route: t.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'tab-missing',
        why: 'Aufgaben tab missing for mastery label check.'
      });
      continue;
    }
    await page.waitForTimeout(450);
    const bad = await page.evaluate(() => {
      const mastery = document.querySelector('#content .mastery-check');
      if (!mastery) return 'mastery-missing';
      const text = mastery.innerText || '';
      if (text.includes('[object Object]')) return text.slice(0, 240);
      return null;
    });
    if (bad === 'mastery-missing') {
      fail({
        system: 'mastery-labels',
        route: t.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'mastery-missing',
        why: 'Expected Beherrschungsziele checklist on Aufgaben tab.'
      });
    } else if (bad) {
      fail({
        system: 'mastery-labels',
        route: t.label,
        surface: 'aufgaben',
        viewport: '1280',
        type: 'object-object-label',
        why: `Mastery checklist contains [object Object]: ${bad}`
      });
    }
  }
}

/** --- Klausurmethodik: no OCR jargon or raw anchor IDs --- */
async function runKlausurmethodikStudentText(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await gotoConcept(page, '/mikro1/index.html', 'budget');
  const opened = await clickTab(page, 'formeln');
  if (!opened) {
    fail({
      system: 'klausurmethodik-student-text',
      route: 'mikro1/budget/formeln',
      surface: 'formeln',
      viewport: '1280',
      type: 'tab-missing',
      why: 'Formeln tab missing for Klausurmethodik scrub check.'
    });
    return;
  }
  await page.waitForTimeout(500);
  const bad = await page.evaluate(() => {
    const root =
      document.querySelector('#content .formula-klausurmethodik') ||
      document.querySelector('#content .panel.active') ||
      document.getElementById('content');
    const text = root?.innerText || '';
    if (/\bmikro1\.[a-z0-9_.-]+\b/i.test(text)) return 'raw-anchor-id';
    if (/OCR\/Review|item-level mapping blockiert|official-task-source|Nur Metadaten bis OCR/i.test(text)) {
      return 'dev-jargon';
    }
    return null;
  });
  if (bad) {
    fail({
      system: 'klausurmethodik-student-text',
      route: 'mikro1/budget/formeln',
      surface: 'formeln',
      viewport: '1280',
      type: bad,
      why: 'Klausurmethodik panel still exposes dev/registry strings to students.'
    });
  }
}

/** --- Aufgaben panel Plattform-Übung header on concept view --- */
async function runPracticePanelHeader(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await gotoConcept(page, '/mikro1/index.html', 'budget');
  const opened = await clickTab(page, 'aufgaben');
  if (!opened) {
    fail({
      system: 'practice-panel-header',
      route: 'mikro1/budget/aufgaben',
      surface: 'aufgaben',
      viewport: '1280',
      type: 'tab-missing',
      why: 'Aufgaben tab missing for practice panel header check.'
    });
    return;
  }
  await page.waitForTimeout(400);
  const hasHeader = await page.evaluate(() =>
    Boolean(document.querySelector('#content .practice-panel-header .practice-platform-badge'))
  );
  if (!hasHeader) {
    fail({
      system: 'practice-panel-header',
      route: 'mikro1/budget/aufgaben',
      surface: 'aufgaben',
      viewport: '1280',
      type: 'header-missing',
      why: 'Expected .practice-panel-header with Plattform-Übung badge on concept Aufgaben panel.'
    });
  }
}

/** --- jsError removed from DOM after successful load --- */
async function runJsErrorRemoved(page) {
  await page.goto(`${base}/mikro1/index.html`, { waitUntil: 'networkidle' });
  await dismissConsent(page);
  await page.waitForFunction(() => window.__jsLoaded === true, { timeout: 20000 }).catch(() => {});
  const exists = await page.evaluate(() => Boolean(document.getElementById('jsError')));
  if (exists) {
    fail({
      system: 'js-error-fallback',
      route: 'mikro1/index.html',
      surface: 'load',
      viewport: '1280',
      type: 'jsError-still-in-dom',
      why: '#jsError should be removed after successful module load (a11y ghost).'
    });
  }
}

/** --- ILIAS link wired when officialMaterialsUrl is set --- */
async function runOfficialMaterialsLink(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await gotoConcept(page, '/mikro1/index.html', 'budget');
  const opened = await clickTab(page, 'quellen');
  if (!opened) {
    fail({
      system: 'official-materials-link',
      route: 'mikro1/budget/quellen',
      surface: 'quellen',
      viewport: '1280',
      type: 'tab-missing',
      why: 'Quellen tab missing for ILIAS link check.'
    });
    return;
  }
  await page.waitForTimeout(400);
  const hasLink = await page.evaluate(() =>
    Boolean(document.querySelector('#content a[href*="elearning.uni-goettingen.de"]'))
  );
  if (!hasLink) {
    fail({
      system: 'official-materials-link',
      route: 'mikro1/budget/quellen',
      surface: 'quellen',
      viewport: '1280',
      type: 'ilias-link-missing',
      why: 'Expected ILIAS link from siteConfig.officialMaterialsUrl in Quellen panel.'
    });
  }
}

async function runHashRouting(page) {
  await page.goto(`${base}/mikro1/index.html#budget/aufgaben`, { waitUntil: 'networkidle' });
  await dismissConsent(page);
  await page.waitForFunction(() => typeof window.__navigate === 'function');
  await page.waitForTimeout(500);

  const loadState = await page.evaluate(() => {
    const aufgabenBtn = document.querySelector('#tabRow button[data-tab="aufgaben"]');
    const activeNav = document.querySelector('#sidebar .nav-item.active');
    return {
      hash: location.hash,
      aufgabenActive: aufgabenBtn?.classList.contains('active') ?? false,
      navBudget: activeNav?.dataset?.concept === 'budget' || activeNav?.textContent?.includes('Budget'),
      practiceVisible: Boolean(
        document.querySelector('#content .mikro1-practice, #content .practice-section-header, #content .problem-card')
      )
    };
  });

  if (!loadState.hash.includes('budget') || !loadState.hash.includes('aufgaben')) {
    fail({
      system: 'hash-routing',
      route: 'mikro1/index.html#budget/aufgaben',
      surface: 'load',
      viewport: '1280',
      type: 'hash-not-applied',
      why: `Expected #budget/aufgaben on load, got ${loadState.hash}`
    });
  }
  if (!loadState.aufgabenActive) {
    fail({
      system: 'hash-routing',
      route: 'mikro1/budget/aufgaben',
      surface: 'aufgaben-tab',
      viewport: '1280',
      type: 'tab-not-active',
      why: 'Hash load did not activate Aufgaben tab.'
    });
  }

  await page.locator('#tabRow button[data-tab="formeln"]').click();
  await page.waitForTimeout(350);
  const afterTab = await page.evaluate(() => location.hash);
  if (!afterTab.includes('formeln')) {
    fail({
      system: 'hash-routing',
      route: 'mikro1/budget/formeln',
      surface: 'tab-switch',
      viewport: '1280',
      type: 'hash-not-updated',
      why: `Tab switch should update hash to include formeln, got ${afterTab}`
    });
  }
}

/** --- Mobile shell spot check (375px content width) --- */
async function runMobileShell375(page) {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(`${base}/mikro1/index.html#budget/theorie`, { waitUntil: 'networkidle' });
  await dismissConsent(page);
  await page.waitForFunction(() => typeof window.__navigate === 'function');
  await page.waitForTimeout(400);

  const shell = await page.evaluate(() => {
    const content = document.getElementById('content');
    const main = document.getElementById('main');
    const tabRow = document.getElementById('tabRow');
    const cs = content ? getComputedStyle(content) : null;
    const tr = tabRow ? getComputedStyle(tabRow) : null;
    return {
      contentWidth: content?.getBoundingClientRect().width ?? 0,
      viewport: window.innerWidth,
      mainMarginLeft: main ? getComputedStyle(main).marginLeft : null,
      tabSticky: tr?.position === 'sticky',
      sidebarHidden: getComputedStyle(document.getElementById('sidebar')).transform.includes('-105') ||
        getComputedStyle(document.getElementById('sidebar')).transform !== 'none',
      overflow: document.documentElement.scrollWidth > window.innerWidth + 24
    };
  });

  if (shell.overflow) {
    fail({
      system: 'mobile-shell',
      route: 'mikro1/budget/theorie',
      surface: '375px',
      viewport: 'mobile-375',
      type: 'horizontal-overflow',
      why: 'Content overflows at 375px viewport.'
    });
  }
  if (shell.contentWidth < shell.viewport * 0.88) {
    fail({
      system: 'mobile-shell',
      route: 'mikro1/budget/theorie',
      surface: '375px',
      viewport: 'mobile-375',
      type: 'content-squished',
      why: `#content width ${shell.contentWidth}px vs viewport ${shell.viewport}px — squished layout risk.`
    });
  }
}

await waitForHttp(`${base}/statistik/index.html`);
const browser = await chromium.launch();

try {
  const page = await browser.newPage();
  page.setDefaultTimeout(32000);

  await runMathLeak(page);
  await runTheoryBodyMathIntegrity(page);
  await runHeaderMathIntegrity(page);
  await runFormulaEquationIntegrity(page);
  await runProvenance(page);
  await runAufgabenPracticeOnly(page);
  await runFormelnKlausurmethodik(page);
  await runFormelnAlwaysVisible(page);
  await runMikro1SourceCompanion(page);
  await runProvenanceFormelnSecondary(page);
  await runGraphIntegrity(page, 1400, 900, 'desktop-1400');
  await runGraphIntegrity(page, 1199, 900, 'edge-1199');
  await runSolutionReveal(page);
  await runExamDrillToggle(page);
  await runRightPanelFallback(page);
  await runSecondaryRightPanelFallback(page);
  await runFocusModeParity(page);
  await runRShellMatrix(page, 1280, 900, 'desktop-1280');
  await runRShellMatrix(page, 1199, 900, 'tablet-1199');
  await runRShellMatrix(page, 390, 844, 'mobile-390');
  await runOverflow(page, 390, 844, 'mobile-390');
  await runOverflow(page, 1200, 900, 'tablet-1200');
  await runSecondaryOverflow(page);
  await runHashRouting(page);
  await runMobileShell375(page);
  await runMasteryLabels(page);
  await runKlausurmethodikStudentText(page);
  await runPracticePanelHeader(page);
  await runJsErrorRemoved(page);
  await runOfficialMaterialsLink(page);

  await page.close();

  if (failures.length) {
    console.error(`\n${failures.length} trust regression failure(s).`);
    process.exitCode = 1;
  } else {
    console.log('trust-regression-pass-1: all checks passed.');
  }
} finally {
  await browser.close();
  server.kill();
}
