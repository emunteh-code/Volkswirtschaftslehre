# Garbled math & UI simplify pass — 2026-05-31

## Root cause

**Garbled theory symbols** (`ô X21 M1y`, `X1pX11`, …) came from `decorateSemanticMath` running on `#content` after KaTeX/MathJax typesetting. The semantic-math walker matched single-letter tokens (`x`, `M`, `p`, …) inside prose and Unicode subscripts, wrapping fragments in `.math-semantic` spans with `aria-hidden="true"` — which breaks reading order and visually splits variables.

Contributing paths:

1. `semanticMathSurfaces.js` — blanket `decorateSemanticMath(#content)` plus explicit selectors on `.section-block p/li/h3`.
2. Aggressive range patterns (line 92–93) matching isolated `x`, `p`, `M`, etc. inside words and subscript clusters.
3. **Not** the shared `createRenderer` path for theory HTML (theorie is injected as authored markup + `typesetMath`).

`formatMathInTitle.js` / `renderMathTitle` remain scoped to headers and formula labels; no change required there.

## Fixes

### 1. Semantic math scope

- Extended `SEMANTIC_MATH_SKIP_SELECTOR` to skip `.content-area`, `.theorie`, `.section-block`, `.formula-card`, `.math-block`, `.warn-box`, and related surfaces.
- Removed `.section-block h3/p/li` from `decorateSemanticMathSurfaces` target list.
- Stopped blanket `decorateSemanticMath(document.getElementById('content'))`; right-panel targets unchanged.

Theory and formula body text now rely on `$…$` / `typesetMath` only.

### 2. Formeln always visible

- Removed `formula-section-accordion` wrapper when Klausurmethodik is present — formula grid renders inline always.
- Klausurmethodik `<details>` accordions **unchanged** (student request).

### 3. Aufgaben tab

- Removed `practice-klausur-link` jump to Formeln tab from `renderPracticePanel`.

### 4. Trust regression (`trust:pass1`)

- `runTheoryBodyMathIntegrity` — no `.math-semantic` in `.section-block`; garble heuristic on mikro1 budget, IWB gravitation, oeko OLS objective theory.
- `runFormelnAlwaysVisible` — no formula accordion; visible `.formula-card` on budget/deskriptiv formeln.
- `runAufgabenPracticeOnly` — asserts zero `.practice-klausur-link`.

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | Skip zones; drop theory DOM pass |
| `assets/js/portal-core/ui/renderer.js` | Always-visible formulas; remove Aufgaben jump |
| `assets/css/premium-refinement.css` | Remove dead accordion/jump styles |
| `tools/clickthrough/trust-regression-pass-1.mjs` | New integrity checks |
| `docs/audits/2026-05-31-garbled-math-and-ui-simplify-pass.md` | This note |

## Source audit (unicode subscripts)

Fleet theory in `mikro1` / shared modules already prefers `$x_1$`, `$M_1$` in primary CONTENT. Residual unicode in chapter expansions should be migrated to `$…$` when touched; no fleet-wide data rewrite in this pass.

## Remaining risks

- `renderSemanticPlainText` in **mikro1** / **oekonometrie** module renderers still semanticizes strings at HTML generation time for drills/intuition — acceptable for short copy, not used for full theory panels.
- Garble heuristic in trust pass is conservative; rare false positives possible on legitimate prose.

## Validation

```bash
npm run trust:pass1
```

Manual: mikro1 budget Theorie/Formeln, IWB gravitation Formeln, oekonometrie OLS — symbols intact; Formeln not collapsed; Aufgaben has no Formeln-Tab link.
