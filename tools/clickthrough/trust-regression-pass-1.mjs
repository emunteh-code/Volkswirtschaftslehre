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

/** --- Provenance footer (expects strip for listed concepts) --- */
const PROVENANCE_EXPECT = [
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget', expectCoverage: 'refs' },
  { route: '/mikro1/index.html', id: 'psubst', label: 'mikro1/psubst', expectCoverage: 'manifest-only' },
  { route: '/statistik/index.html', id: 'deskriptiv', label: 'statistik/deskriptiv', expectCoverage: 'refs' },
  { route: '/makro1/index.html', id: 'islm', label: 'makro1/islm', expectCoverage: 'refs' },
  { route: '/makro2/index.html', id: 'mundell_fleming', label: 'makro2/mundell_fleming', expectCoverage: 'refs' },
  { route: '/finanzwirtschaft/index.html', id: 'liquiditaetsplanung', label: 'finanz/liquiditaetsplanung', expectCoverage: 'refs' },
  { route: '/jahresabschluss/index.html', id: 'buchen_konten', label: 'jahresabschluss/buchen_konten', expectCoverage: 'refs' },
  { route: '/recht/index.html', id: 'was_ist_recht', label: 'recht/was_ist_recht', expectCoverage: 'refs' },
  { route: '/internationale-wirtschaftsbeziehungen/index.html', id: 'ricardo', label: 'iwb/ricardo', expectCoverage: 'refs' },
  { route: '/mathematik/index.html', id: 'algebra_mengen', label: 'mathematik/algebra_mengen', expectCoverage: 'refs' },
  { route: '/oekonometrie/index.html', id: 'matrix_notation', label: 'oeko/matrix_notation', expectCoverage: 'refs' },
  { route: '/mikro2/index.html', id: 'spieltheorie_statisch', label: 'mikro2/spieltheorie_statisch', expectCoverage: 'manifest-only' }
];

/** Provenance strip must survive non-theorie tabs (same createRenderer path). */
const PROVENANCE_TAB_EXTRA = [
  { route: '/mikro1/index.html', id: 'budget', tab: 'aufgaben', label: 'mikro1/budget/aufgaben' },
  { route: '/statistik/index.html', id: 'bivariat', tab: 'graph', label: 'statistik/bivariat/graph' },
  { route: '/oekonometrie/index.html', id: 'matrix_notation', tab: 'r-anwendung', label: 'oeko/matrix_notation/r-anwendung' }
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

/** --- Graph shell integrity --- */
const GRAPH_CASES = [
  { route: '/mikro1/index.html', id: 'budget', label: 'mikro1/budget/graph' },
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
      const r = canvas?.getBoundingClientRect();
      return {
        hasCanvas: !!canvas,
        cw: r?.width || 0,
        ch: r?.height || 0,
        titleLen: (title?.textContent || '').trim().length,
        errText: (err?.textContent || '').trim()
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
  const okInt = await clickTab(page, 'intuition');
  if (!okInt) {
    fail({
      system: 'interaction-pruefungstransfer',
      route: 'mikro1/budget/intuition',
      surface: 'intuition',
      viewport: '1280',
      type: 'tab-missing',
      why: 'Intuition tab missing for drill scan.'
    });
    return;
  }
  await page.waitForTimeout(500);
  const drillBtn = page.locator('[id^="examDrillBtn_"]').first();
  if ((await drillBtn.count()) === 0) {
    /* Not all concepts expose drills on intuition — skip without failure */
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
      route: 'mikro1/budget/intuition',
      surface: 'intuition',
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

await waitForHttp(`${base}/statistik/index.html`);
const browser = await chromium.launch();

try {
  const page = await browser.newPage();
  page.setDefaultTimeout(32000);

  await runMathLeak(page);
  await runProvenance(page);
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
