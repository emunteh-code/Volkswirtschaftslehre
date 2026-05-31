# UX sprint — L&F unification pass — 2026-05-30

Generated: 2026-05-31  
Follows: `docs/audits/2026-05-29-platform-ux-consistency-audit.md` and commit `4f83b59`.

## Executive summary

This sprint closes the main structural gaps from the UX consistency audit: **all 11 curriculum modules now inherit the mikro1 CSS shell**, **semantic math rendering lives in portal-core**, **Quellen/source companion is wired fleet-wide where provenance exists**, **jsError fallback is unified**, and **provenance home-badge copy is standardized**. Konzept-Check remains **makro1-only** because no other module ships `conceptSchnelltestItems.js` yet.

**Trust:** `npm run trust:pass1` — **PASS** (post-sprint).

**L&F verdict:** **mostly consistent** (up from partial). Remaining drift is module-specific renderer depth (mikro1/oekonometrie exam drill panels) and optional home features, not shell chrome.

---

## 1. CSS migration (`@import mikro1`)

| Module | Before | After |
|--------|--------|-------|
| mikro2 | ~2974 LOC fork | `@import mikro1` |
| statistik | ~2828 LOC fork + r-practice | `@import mikro1` + `r-practice.css` |
| oekonometrie | ~3228 LOC fork + r-practice | `@import mikro1` + `r-practice.css` |
| recht | ~3149 LOC fork | `@import mikro1` |
| jahresabschluss | ~3161 LOC fork | `@import mikro1` |
| internationale-wirtschaftsbeziehungen | ~3256 LOC fork | `@import mikro1` |

**Already on import path (unchanged):** makro1, makro2, mathematik, finanzwirtschaft.  
**Canonical shell:** `mikro1/css/styles.css` + `assets/css/premium-refinement.css`.

---

## 2. Semantic math extraction

| Path | Role |
|------|------|
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | `createSemanticMathSurfaces({ formalizeMarkupString, extraRangePatterns, contentData, intuitionData })` — shared `.math-semantic` pass, DOM decoration, data prep |
| `mikro1/js/ui/renderer.js` | Thin delegate; `MIKRO1_EXTRA_MATH_RANGE_PATTERNS` (micro-specific tokens) |
| `oekonometrie/js/ui/renderer.js` | Thin delegate; `OEKONOMETRIE_EXTRA_MATH_RANGE_PATTERNS` (OLS/R²/β̂ etc.) |

Module-specific exam drill / intuition panel builders remain in module renderers (~500 LOC each); only the math surface layer moved to portal-core.

---

## 3. Konzept-Check rollout

| Module | Status | Reason |
|--------|--------|--------|
| makro1 | **Enabled** | `conceptSchnelltestItems.js` + home card via `KONCEPT_CHECK_HOME_ACTION_CARD_HTML` in portal-core |
| All other 10 | **Not enabled** | No `conceptSchnelltestItems.js` / trap-MCQ item bank — adding a dead home card would violate AGENTS.md |

Shared constant: `assets/js/portal-core/ui/renderer.js` → `KONCEPT_CHECK_HOME_ACTION_CARD_HTML`.

---

## 4. Source companion + Quellen

| Module | Companion | Quellen sidebar | Notes |
|--------|-----------|-----------------|-------|
| mikro1 | ✓ | ✓ | Full task-archive panel |
| mikro2 | ✓ | ✓ | |
| makro1 | ✓ | ✓ | |
| makro2 | ✓ | ✓ | |
| statistik | ✓ | ✓ | |
| oekonometrie | ✓ | ✓ | |
| mathematik | ✓ | ✓ | |
| **recht** | ✓ **new** | ✓ **new** | `PROVENANCE_BY_CONCEPT` + `sourceAnchors.js` |
| **jahresabschluss** | ✓ **new** | ✓ **new** | |
| **finanzwirtschaft** | ✓ **new** | ✓ **new** | |
| **internationale-wirtschaftsbeziehungen** | ✓ **new** | ✓ **new** | |

New files: `*/js/features/sourceCompanion.js` (4 modules) wired in `main.js` via `createSourceCompanionModule`.

---

## 5. Unified jsError fallback

| Path | Change |
|------|--------|
| `assets/js/portal-core/ui/jsErrorFallback.js` | Injects `#jsError` overlay + 2.5s timeout if `window.__jsLoaded` stays false |
| All 11 `*/index.html` | Load shared script before `js/main.js`; removed duplicate inline blocks |
| `assets/js/portal-core/app.js` | Still sets `__jsLoaded = true` and hides `#jsError` on success |

---

## 6. Provenance badge tooltips

All 11 `*/js/data/contentManifest.js` now use:

```js
import { getStandardConceptSourceSummary } from '../../../assets/js/portal-core/features/sourceCompanionCore.js';

export function getConceptSourceSummary(conceptId) {
  return getStandardConceptSourceSummary(getConceptProvenance(conceptId));
}
```

Unified labels: **Quelle** / **Referenz** / **Supplemental** / **Plattform** / **Quellenstatus offen** with shared aria titles from `buildConceptSourceSummaryFromProvenance` defaults.

---

## Files changed (summary)

- **CSS:** 6 module `styles.css` → import-only
- **Portal-core:** `semanticMathSurfaces.js`, `jsErrorFallback.js`, `sourceCompanionCore.js`, `renderer.js` (Konzept-Check constant)
- **Renderers:** `mikro1/js/ui/renderer.js`, `oekonometrie/js/ui/renderer.js` (semantic math delegate)
- **Companion:** 4× `sourceCompanion.js`, 4× `main.js`, 4× `index.html` (Quellen)
- **Manifests:** 11× `contentManifest.js` (standard summaries)
- **Index:** 11× `index.html` (jsErrorFallback script)

---

## Remaining backlog

1. Author `conceptSchnelltestItems.js` for statistik/mikro2 pilot modules before enabling Konzept-Check home card.
2. Optional: extract shared exam-drill panel builders from mikro1/oekonometrie renderers.
3. Confirm statistik `showConceptMotivationBanner: false` is intentional or re-enable for parity.

---

## L&F verdict

**Mostly consistent** — single CSS inheritance chain, unified boot/error handling, fleet-wide Quellen where provenance exists, shared provenance badge copy, shared semantic math core.
