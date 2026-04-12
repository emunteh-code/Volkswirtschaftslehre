# Graph-label raw code / LaTeX leakage eradication — Pass 61

**Date:** 2026-04-12  
**Priority:** Critical — student-visible canvas labels cannot render TeX.

---

## Failure class

**Symptom:** Regression and statistics graphs showed raw LaTeX on the canvas (e.g. `\hat{y}=\hat{\beta}_0+\hat{\beta}_1x`, `\bar{x}`), because `ctx.fillText` was fed TeX source while MathJax only runs on HTML in `#content` / `graph_info`, not on 2D canvas text.

**Root cause:** Mixed pipeline — formula strings from Aufgaben/theory were reused as on-canvas tags, or TeX was typed directly into `drawTag` / legend / axis helpers with no normalization.

---

## Strategy

1. **Shared sanitizer** — `sanitizeGraphCanvasLabel()` in `assets/js/portal-core/utils/graphLabels.js`:
   - Strips wrapping `$…$`.
   - Maps known regression-line shapes to **`OLS-Gerade`**.
   - Maps `\bar{x}` / `\bar x` to **`Mittelwert`**.
   - Fallback: light TeX stripping (Greek, `\frac`, `\text`, etc.) to readable Unicode-ish text, capped length; empty junk → **`Beschriftung`**.
2. **Call sites** — Every module `drawTag` / `drawLabel` / legend `fillText` / duplicated `GraphEngine` label paths wrap dynamic strings with the sanitizer.
3. **Data fix** — Statistik regression tag string replaced explicitly with **`OLS-Gerade`**; CI point label **`Mittelwert`** (aligned with pedagogy and legend “geschätzte Gerade”).

**Not changed:** `graph_info` / `buildGraphInfo` / `equation` rows still use `ensureMathJaxEquationHtml` + `renderMath` — formulas belong there, not on the canvas.

---

## Files changed

| Area | Files |
|------|--------|
| **Shared util (new)** | `assets/js/portal-core/utils/graphLabels.js` |
| **Graph engines (all duplicates)** | `mikro1`, `mikro2`, `makro1`, `makro2`, `statistik`, `oekonometrie`, `finanzwirtschaft`, `internationale-wirtschaftsbeziehungen`, `recht`, `jahresabschluss`, `mathematik` → `js/ui/graphEngine.js` — import sanitizer; `fillText(label|entry.label)`; axis `xLabel`/`yLabel`; `measureText(e.label)` for legend width |
| **Module graphs** | `statistik/js/ui/graphs.js`, `oekonometrie/js/ui/graphs.js`, `makro1`, `makro2`, `finanzwirtschaft`, `internationale-wirtschaftsbeziehungen`, `mikro2`, `mikro1`, `mathematik/js/ui/graphs.js` — `drawTag` / `drawLegend` / `drawLabel` / axis labels where applicable |

**Shared vs local:** Core logic is **shared** (`graphLabels.js` + identical `graphEngine` patches). Per-module `graphs.js` only adds imports and calls at local helpers (`drawTag`, `buildPlot`, etc.).

---

## Before / after (examples)

| Location | Before | After |
|----------|--------|--------|
| Statistik regression canvas tag | `\hat{y}=\hat{\beta}_0+\hat{\beta}_1x` | `OLS-Gerade` |
| Statistik KI point | `\bar{x}` | `Mittelwert` |
| Any future TeX in legend/tag | Raw `\frac…` | Mapped or stripped to readable short text |

---

## Browser verification notes

Not run in this pass. Suggested checks:

1. Statistik → Regression Schätzung/Inferenz graph: on-canvas tag reads **OLS-Gerade**; interpretation block still shows proper math.
2. Ökonometrie OLS graph: labels unchanged English/plain where already safe; no TeX on canvas.
3. Mikro/Makro graph with legend: legend text remains correct, no backslash leakage.
4. Mathematik graph with `drawLabelTag` / legend: multi-line tags sanitized per line.

---

## Outliers / limits

- **Heuristic fallback** — Unusual TeX not matching known patterns becomes a shortened stripped string or **`Beschriftung`**; extend `graphLabels.js` if a specific graph still looks odd.
- **recht/jahresabschluss** — Patched `graphEngine.js` for parity; local `graphs.js` has no canvas text in this repo snapshot.
- **HTML graph titles** (e.g. `graph-panel-title` with `$…$`) are outside Pass 61; they are typeset by MathJax in the DOM, not canvas.
