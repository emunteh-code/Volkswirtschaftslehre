# Raw formula leakage eradication — Pass 57

**Priority:** Trust-critical, student-visible, project-wide.  
**Goal:** No raw LaTeX / undelimited formula source in live UI where math is intended; graph interpretation matches other surfaces.

---

## Root cause (primary failure class)

**Symptom:** Graph interpretation showed strings like `\bar{x} \pm 1.96 \cdot \frac{s}{\sqrt{n}}` as plain text.

**Mechanism:** `buildGraphInfo` / `renderStructuredGraphInfo` inserted the `equation` string into HTML **without MathJax delimiters** (`$…$`, `$$…$$`, `\(...\)`, `\[...\]`). `innerHTML` was set correctly, and `renderMath` ran, but **MathJax only typesets delimited TeX**. Undelimited backslash-commands are left as text nodes → visible “raw LaTeX”.

This is **not** an escaping bug (`textContent` was not used for those blocks) and **not** fixed by styling.

**Contrast:** Modules that already wrapped equations (e.g. earlier `renderInfo` using `\(`…`\)` around bare LaTeX, or content using `$…$` / `$$…$$`) did not show this failure for those strings.

---

## Failure paths addressed

| Path | Before | After |
| --- | --- | --- |
| **Statistik** `graphs.js` → `buildGraphInfo` → `.gi-eq` | Bare `String.raw`… in `equation` | `ensureMathJaxEquationHtml(equation)` |
| **Mikro II** `graphs.js` → `buildGraphInfo` | Bare LaTeX in `equation` | Same helper |
| **Mathematik** `graphs.js` → `buildGraphInfo` | Already `$$…$$`; idempotent | Same helper |
| **Ökonometrie** `graphs.js` → `buildGraphInfo` | Mostly `$…$`; idempotent | Same helper (+ survives `formalizeMarkupString` when wrapped) |
| **Mikro I** `graphs.js` → `buildGraphInfo` | Usually `$…$` from call sites | Same helper |
| **Makro I / II, Finanzwirtschaft, IWB** `renderInfo` | Manual `\(` + bare + `\)` | Single pipeline: `ensureMathJaxEquationHtml` (bare → `$$…$$`; already delimited unchanged) |
| **Generated portal** `main.js` → `renderStructuredGraphInfo` | Raw `equation` in `.graph-equation` | `ensureMathJaxEquationHtml(equation)` |

---

## Shared fix

**New:** `assets/js/portal-core/ui/mathDelimiters.js`

- Imports `isDelimitedMath` from `semanticContent.js`.
- **`ensureMathJaxEquationHtml(value)`:**  
  - If empty → `''`.  
  - If whole string is already delimited (`isDelimitedMath`) → unchanged.  
  - If string contains `$` (inline), `\(`, or `\[` (MathJax should scan inside) → unchanged.  
  - Else → wrap as **`$$` + trimmed + `$$`** so MathJax typesets and **mikro1/oekonometrie `formalizeMarkupString`** still treats the segment as TeX (segments starting with `$` pass through unchanged).

---

## Files changed

| File | Change |
| --- | --- |
| `assets/js/portal-core/ui/mathDelimiters.js` | **New** — shared delimiter normalizer |
| `statistik/js/ui/graphs.js` | Import + `.gi-eq` uses helper |
| `mikro2/js/ui/graphs.js` | Import + `.gi-eq` uses helper |
| `mathematik/js/ui/graphs.js` | Import + `.gi-eq` uses helper |
| `oekonometrie/js/ui/graphs.js` | Import + `.gi-eq` uses helper |
| `mikro1/js/ui/graphs.js` | Import + `.gi-eq` in `buildGraphInfo` uses helper |
| `makro1/js/ui/graphs.js` | Import + `renderInfo` uses helper (replaces manual `\(`…`\)` wrap) |
| `makro2/js/ui/graphs.js` | Import + `renderInfo` uses helper |
| `finanzwirtschaft/js/ui/graphs.js` | Import + `renderInfo` uses helper |
| `internationale-wirtschaftsbeziehungen/js/ui/graphs.js` | Import + `renderInfo` uses helper |
| `assets/js/generated-portal/main.js` | Import + `.graph-equation` uses helper |

**Module-local only:** none beyond wiring the shared helper into each module’s graph bundle.

**Not changed:** `recht` / `jahresabschluss` graph stubs (no formula interpretation panels). Theorie / Formeln / right panel already go through semantic/math pipelines elsewhere.

---

## Contexts checked (audit scope)

- **Graph interpretation:** all modules with real `buildGraphInfo` / `renderInfo` / `renderStructuredGraphInfo` (table above).
- **Shared math path:** `createRenderer` still calls `renderMath(content)` after tab switch; graph paths additionally call `renderMath` on `#graph_info` — unchanged, still required after `innerHTML` updates.
- **Ökonometrie + Mikro I:** `formalizeMarkupString` compatibility verified by using **`$$`** for newly wrapped bare LaTeX (same rule as existing `formalizeMarkupString` HTML split logic).

---

## Browser verification notes

**Not executed in this agent session** (no headed browser). Recommended checks:

1. **Statistik** → Konzept `schaetzen_eigenschaften_intervalle` → **Graph** tab → confirm CI headline is typeset math, not `\bar{x} \pm …` raw string.
2. **Mikro II** → any graph with bare `equation` (e.g. game matrix) → equation line typeset.
3. **Mathematik** → graph with `$$` equation → unchanged behaviour.
4. **Ökonometrie** → regression graph → equation still typeset.
5. **Makro I** → Phillips / IS-LM style panel using `renderInfo` → equation still typeset (may appear as display `$$` block where previously strictly inline `\(`…`\)`; acceptable trade for correctness).
6. **Generated portal** (e.g. bundled Statistik-like graphs) → structured graph equation row.

**Explicit checks:** no visible backslash-commands in `.gi-eq` / `.graph-equation`; MathJax output present; insight rows that already use `\(`…`\)` unchanged.

---

## Honest outliers / follow-ups

1. **`renderStructuredGraphInfo` insight `text`:** still inserted raw; current generated strings use `\(`…`\)` where needed. If a future insight string adds bare LaTeX without delimiters, it could still leak — fix would be a second helper for “mixed prose + math” or authoring discipline.
2. **Konfidenzintervall notation** in generated portal (`\\([a,b]\\)`) uses `\[` as TeX delimiter in some strings — if MathJax ever mis-parses numeric intervals, that is a **separate** TeX-delimiter design issue, not undelimited leakage.
3. **Project-wide exhaustive scan** for `textContent =` + LaTeX was not automated; this pass targeted the **proven graph-equation** pipeline and aligned **all** graph equation entry points found by grep.

---

## Completion criterion

**Met** for: every identified **graph equation** insertion path now normalizes delimiters before MathJax.  
**Verify in browser** before declaring zero leakage across the entire portal (insight rows, legacy HTML in chapters, etc.).
