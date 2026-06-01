# Garbled math fix pass — 2026-05-31

## Root cause

**Garbled symbols** (e.g. `ô X21 M1y`, `X1pX11X1q1`) came from `decorateSemanticMath` / `semanticizeMarkupString` wrapping isolated Latin letters (`x`, `M`, `p`, …) in `.math-semantic` spans with `aria-hidden="true"`. That ran **after** theory HTML and MathJax were in the DOM, fragmenting Unicode subscripts (`x₁`, `M₁`) and inline `$…$` math.

Contributing factors:

1. Blanket `decorateSemanticMath(document.getElementById('content'))` plus explicit passes on `.section-block p/li/h3`.
2. Aggressive range patterns matching single-letter tokens inside words and subscript clusters (`semanticMathSurfaces.js` lines 92–93).
3. `prepareSemanticMathData` calling `semanticizeMarkupString` on **array** strings in module `CONTENT` at load time.

Theory panels use authored HTML + `typesetMath`; they must **not** receive per-letter decoration. `formatMathInTitle.js` / `renderMathTitle` remain header-only.

## Fixes

### 1. Semantic math scope (`semanticMathSurfaces.js`)

- Extended `SEMANTIC_MATH_SKIP_SELECTOR` to `#content`, `.content-area`, `.theorie`, `.theorie-panel`, `.section-block`, `.formula-card`, `.math-block`, `.warn-box`, `.merksatz`, `.f-body`, etc.
- Removed `#content .section-block h3/p/li` targets and blanket `#content` DOM walk.
- `decorateSemanticMathSurfaces` now only targets safe chrome (guided tasks, graph info, right panel) — all `#content` nodes skip via `shouldSkipSemanticMath`.
- `prepareSemanticMathData`: array strings use `formalizeMarkupString` only (no load-time `.math-semantic` injection).

### 2. Formeln always visible (`renderer.js`)

- Removed `formula-section-accordion` wrapper when Klausurmethodik is present; formula grid is always inline.
- Klausurmethodik `<details>` accordions unchanged.

### 3. Aufgaben tab (`renderer.js`)

- Removed `practice-klausur-link` jump to Formeln tab from `renderPracticePanel`.

### 4. Content notation (`mikro1/js/data/chapters.js`)

- CD / GRS formula variable hints: Unicode subscripts in `desc` / `variables` → `$…$` LaTeX for MathJax.

### 5. Trust regression (`tools/clickthrough/trust-regression-pass-1.mjs`)

- `runTheoryBodyMathIntegrity` — no `.math-semantic` in `.section-block`; garble heuristic on mikro1 budget, IWB gravitation, oeko OLS.
- `runFormelnAlwaysVisible` — no formula accordion; visible `.formula-card`.
- `runAufgabenPracticeOnly` — zero `.practice-klausur-link`.

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | Skip `#content`; no array semanticize; drop theory DOM pass |
| `assets/js/portal-core/ui/renderer.js` | Always-visible formulas; remove Aufgaben jump |
| `assets/css/premium-refinement.css` | Remove dead accordion/jump styles (f53d533) |
| `mikro1/js/data/chapters.js` | LaTeX in formula variable hints |
| `tools/clickthrough/trust-regression-pass-1.mjs` | Garble / formeln / aufgaben checks |
| `docs/audits/2026-05-31-garbled-math-fix-pass.md` | This note |

Related: `docs/audits/2026-05-31-garbled-math-and-ui-simplify-pass.md` (first closure note).

## Remaining risks

- `renderSemanticPlainText` still semanticizes short strings at HTML generation for drills/intuition/klausurmethodik — acceptable outside `#content` skip zones; generated markup should prefer `$…$`.
- Fleet theory with Unicode subscripts in `desc` prose (not yet migrated) should be converted when touched; primary `theorie` HTML already prefers `$x_1$`.

## Validation

```bash
cd tools/clickthrough && npm run trust:pass1
```

**2026-06-01:** Garbled-math / formeln / aufgaben trust slices pass (theory `.math-semantic` absent, garble heuristic clean on mikro1 budget, IWB gravitation, oeko OLS; formula accordion absent; no `practice-klausur-link`). Full `trust:pass1` may require `npx playwright install chromium` locally; unrelated `runMikro1SourceCompanion` timeout observed in CI agent environment after math checks.

**Manual smoke URLs**

| Module | URL |
|--------|-----|
| mikro1 budget Theorie | `/mikro1/index.html#budget` |
| mikro1 budget Formeln | `/mikro1/index.html#budget/formeln` |
| mikro1 budget Aufgaben | `/mikro1/index.html#budget/aufgaben` |
| IWB gravitation Formeln | `/internationale-wirtschaftsbeziehungen/index.html#gravitation/formeln` |
| Ökonometrie OLS Theorie | `/oekonometrie/index.html#ols_objective/theorie` |

Expect: intact subscripts in theory; Formeln grid visible without accordion; no Aufgaben→Formeln link.
