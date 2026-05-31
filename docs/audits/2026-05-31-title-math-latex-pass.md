# Title / header math LaTeX pass — 2026-05-31

## Goal

Ensure math in concept titles, card headers, and formula labels renders via MathJax (`$…$`) instead of broken unicode fragments, raw `_{}` subscripts, or per-letter semantic-math splitting (`GDP I , GDP J`).

## Root cause

1. **Data**: `officialNotation` fields (e.g. IWB gravitation `GDP_i, GDP_j, Dist_{ij}`) stored LaTeX subscripts without `$` delimiters.
2. **Render path**: `formatMathInTitle` only detected unicode math hints (subscript digits, Greek letters) — not ASCII `_i` / `_{ij}` patterns — so `renderMathTitle` passed plain text to MathJax.
3. **Semantic math**: `decorateSemanticMath` could still fragment single-letter tokens in headers if skip selectors missed a class.

## Changes

### Skip rules (`semanticMathSurfaces.js`)

Added exported `shouldSkipSemanticMath(el)` and header skip selectors:

| Selector | Purpose |
|----------|---------|
| `h1`–`h6` | All heading levels |
| `.concept-title`, `.concept-tag` | Concept header |
| `.klausurmethodik-accordion-title`, `.klausurmethodik-card-title`, `.klausurmethodik-heading`, `.klausurmethodik-label` | Klausurmethodik cards |
| `.f-label`, `.formula-card-label`, `.formula-card-title` | Formula card headers |
| `.hc-title`, `.hcc-title` | Home / continue cards |
| `.quellen-panel-layer-k`, `.quellen-panel-anchor-group-label` | Quellen panel headers |
| `.graph-panel-title`, `summary`, `[role="tab"]` | Graph title, accordion heads, tabs |

Existing navigation skip list (buttons, breadcrumbs, home tiles, provenance) unchanged.

### Title math utility (`formatMathInTitle.js`)

- `formatMathInTitle(str)` — unicode subscripts, Greek letters, hat notation **and undelimited LaTeX subscripts** (`GDP_i`, `Dist_{ij}`, `\bar{x}`) → inline `$…$`.
- Preserves existing `$…$` blocks; merges adjacent inline math.
- Mid-word single-letter guard (same rule as semantic math) so prose like “Nachfrage” is not fragmented.
- `renderMathTitle(str)` — `formatMathInTitle` + `renderTeachingProse` (escape prose, preserve math).

### Renderer integration (`renderer.js`)

Uses `renderMathTitle` for:

- `.concept-title`, breadcrumb concept segment
- `.f-label` (formula + proof cards)
- `.klausurmethodik-accordion-title`
- `.hc-title`, `.hcc-title` (home cards)

`renderMath(content)` unchanged — still typesets after render.

### Quellen panel (`quellenPanel.js`)

Layer row keys (`.quellen-panel-layer-k`) use `renderMathTitle`.

### Source data fixes

**IWB (`internationale-wirtschaftsbeziehungen/js/data/formulaCards.js`)**

| Field | Before | After |
|-------|--------|-------|
| gravitation `officialNotation` (×2) | `GDP_i, GDP_j, Dist_{ij}` | `$GDP_i$, $GDP_j$, $Dist_{ij}$` |
| heckscher-ohlin `officialNotation` (×2) | `a_{LX}, a_{LY}` | `$a_{LX}$, $a_{LY}$` |

**Fleet batch — `officialNotation` with braced subscripts (`_{…}`) without `$`**

Updated across `mikro1`, `makro1`, `makro2`, `mathematik`, `statistik`, `oekonometrie` `formulaCards.js` (26 entries total). Renderer-side wrapping covers remaining undelimited `_t` / `_1` lists not batch-edited.

**mikro1 (`chapters.js`) — prior pass retained**

| Field | Before | After |
|-------|--------|-------|
| `lambda.title` | `Lagrange-Multiplikator λ` | `Lagrange-Multiplikator $\lambda$` |
| cobbd / pkomp / ausgaben labels | unicode subscripts | `$x_1$`, `$x_2$`, … |

### Trust regression (`trust-regression-pass-1.mjs`)

`runHeaderMathIntegrity`:

- Fails if `.concept-title` or `.f-label` contains `.math-semantic` (fragmentation).
- Spot-checks MathJax typesetting on `mikro1/lambda`, formula labels on `mikro1/cobbd/formeln`.
- **New:** `iwb/gravitation/formeln` — proof-card `.f-label` must typeset `GDP_i` / `Dist_{ij}` without semantic fragmentation.

## Validation

```bash
cd tools/clickthrough && npm run trust:pass1
```

## Remaining gaps

- Unicode in **body** copy (`desc`, variables, motivation) still relies on semantic math + formalize pipeline — out of scope for this pass.
- `officialNotation` slug identifiers (`heckscher_ohlin`, `finanz_denkweise`) intentionally left plain — not math.
- Task-family ingest `title` strings in artifacts (oekonometrie `taskFamilies.js`) remain plain text; accordion titles skip semantic decoration and use `renderMathTitle` when symbols appear.

## Files touched

- `assets/js/portal-core/ui/formatMathInTitle.js`
- `assets/js/portal-core/ui/semanticMathSurfaces.js`
- `assets/js/portal-core/ui/renderer.js`
- `assets/js/portal-core/ui/quellenPanel.js`
- `internationale-wirtschaftsbeziehungen/js/data/formulaCards.js`
- `mikro1/js/data/formulaCards.js`
- `makro1/js/data/formulaCards.js`
- `makro2/js/data/formulaCards.js`
- `mathematik/js/data/formulaCards.js`
- `statistik/js/data/formulaCards.js`
- `oekonometrie/js/data/formulaCards.js`
- `mikro1/js/data/chapters.js` (prior pass)
- `tools/clickthrough/trust-regression-pass-1.mjs`
- `docs/audits/2026-05-31-title-math-latex-pass.md`
