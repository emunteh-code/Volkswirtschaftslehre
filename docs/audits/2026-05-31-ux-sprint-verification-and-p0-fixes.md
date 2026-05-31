# UX sprint verification + P0 fixes — 2026-05-31

Generated: 2026-05-31  
Follows: `docs/audits/2026-05-30-ux-sprint-lf-unification-pass.md` (commit `c6099f5`), `docs/audits/2026-05-30-multi-domain-quality-inspection.md`.

## Executive summary

All six sprint checklist items from the L&F unification pass were **verified in codebase** — no structural gaps found. This pass adds **production-safe Quellen/PDF gating**, **semantic-math screen-reader fixes**, and **trivial landing CLS reserves** from the multi-domain audit P0 list.

**Trust:** `npm run trust:pass1` — see commit footer below.

---

## Sprint checklist verification (vs `c6099f5` claims)

| # | Item | Status | Evidence |
|---|------|--------|----------|
| 1 | CSS → `@import mikro1` + overrides | ✅ | All 10 non-canonical modules use 1–2 line `@import url('../../mikro1/css/styles.css')`; statistik/oekonometrie add `r-practice.css`. |
| 2 | Semantic math → portal-core | ✅ | `assets/js/portal-core/ui/semanticMathSurfaces.js`; mikro1/oekonometrie renderers delegate via `createSemanticMathSurfaces`. |
| 3 | Konzept-Check rollout (items only) | ✅ | Only `makro1/js/data/conceptSchnelltestItems.js` exists fleet-wide; home card via `KONCEPT_CHECK_HOME_ACTION_CARD_HTML` in portal-core renderer. No dead buttons elsewhere. |
| 4 | Source companion + Quellen (recht/jahresabschluss/finanzwirtschaft/iwb) | ✅ | All four ship `js/features/sourceCompanion.js` + `main.js` wiring; Quellen sidebar on all 11 modules with companion. |
| 5 | Unified jsError fallback | ✅ | `assets/js/portal-core/ui/jsErrorFallback.js` loaded on all 11 `*/index.html`; `app.js` sets `window.__jsLoaded` and hides overlay on success. |
| 6 | Provenance badge tooltip copy | ✅ | All 11 `contentManifest.js` import `getStandardConceptSourceSummary` from `sourceCompanionCore.js`. |

**Verdict:** Sprint checklist **complete** — no re-work required beyond P0 hardening below.

---

## P0 fixes (multi-domain audit)

### P0-1 — Quellen/PDF 404 on GitHub Pages ✅

**Root cause:** `.gitignore` excludes `source-materials/`; Pages deploy ships no PDF corpus.

**Fix:**

| File | Change |
|------|--------|
| `assets/js/portal-core/utils/deployEnvironment.js` | **New** — `isPublicStaticDeploy()`, HEAD probe, cached `getSourceMaterialsAvailability()`, honest user copy constants. |
| `assets/js/portal-core/features/sourceCompanionModule.js` | Probe on first Quellen open; deploy notice banner; disable `[data-open-source-path]` when PDFs unreachable. |
| `assets/js/portal-core/ui/sourceProvenanceUi.js` | Disabled “PDF nur lokal verfügbar” open buttons on Pages / failed probe; async guard in click handler. |
| `assets/js/portal-core/app.js` | Early probe when module has source companion. |
| `assets/css/premium-refinement.css` | Styles for `.source-companion-deploy-notice` and disabled PDF actions. |

**Behavior:** Public GitHub Pages users see concept-to-source mapping and Quellenbrowser navigation; PDF open buttons are disabled with explicit “local clone required” messaging — **no 404 promises**.

**Not in scope:** Shipping PDF subset to Pages (would need LFS / separate artifact policy).

### P0-2 — Semantic math screen-reader fragmentation ✅

**Root cause:** `decorateSemanticMathSurfaces()` ran on sidebar nav labels and UI chrome; single-letter variable regex matched inside words.

**Fix (`assets/js/portal-core/ui/semanticMathSurfaces.js`):**

- Removed sidebar from decoration targets and full-tree `decorateSemanticMath(#sidebar)`.
- Added `SEMANTIC_MATH_SKIP_SELECTOR` guard (buttons, nav, breadcrumbs, home cards, provenance UI).
- Filter `isSingleLetterInsideWord()` in `collectMathRanges()` to drop mid-word single-letter matches.

**Not changed:** Full aria-hidden on `.math-semantic` spans (would hide math from SR when text is split); fragmentation reduction preferred.

### P0-3 — Landing CLS (trivial) ✅

| File | Change |
|------|--------|
| `index.html` | Already uses Google Fonts `display=swap` — no change needed. |
| `assets/css/portal.css` | `min-height` reserves on `#trustedCoreGrid`, `#moduleGrid`, `#ueber-portal .lp-about-inner` before JS tile hydration. |

**Deferred:** Full landing perf sprint (dataFactory split, lazy module metadata) — out of scope.

### Related — jsError overlay a11y ✅

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/jsErrorFallback.js` | `aria-hidden` + `inert` when hidden; `role="alertdialog"` when shown. |
| `assets/js/portal-core/app.js` | Mirror hidden state on successful module load. |

---

## Out of scope (audit noted, not fixed this pass)

- Root-absolute favicon paths (`/assets/brand/...`) — R1-C2; separate hygiene pass.
- LICENSE / CONTRIBUTING / root package.json — repo governance, not UX sprint.
- Landing `dataFactory.js` weight — performance sprint.

---

## Files changed this pass

- `assets/js/portal-core/utils/deployEnvironment.js` (new)
- `assets/js/portal-core/features/sourceCompanionModule.js`
- `assets/js/portal-core/ui/sourceProvenanceUi.js`
- `assets/js/portal-core/ui/semanticMathSurfaces.js`
- `assets/js/portal-core/ui/jsErrorFallback.js`
- `assets/js/portal-core/app.js`
- `assets/css/portal.css`
- `assets/css/premium-refinement.css`
- `docs/audits/2026-05-31-ux-sprint-verification-and-p0-fixes.md` (this file)

---

## Validation

```bash
cd tools/clickthrough && npm run trust:pass1
```

**Result:** `trust-regression-pass-1: all checks passed.` (exit 0, 2026-05-31)
