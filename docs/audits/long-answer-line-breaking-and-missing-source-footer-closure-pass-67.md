# Long-answer line-breaking and missing source-footer closure — pass 67

## Issue A — Long math / result lines (clipping)

### Failure class

Chained equalities in **revealed steps**, **Prüfungstransfer** math slots, **formulas**, and similar surfaces were emitted as a **single TeX line** inside `$$…$$`. MathJax CHTML then rendered one wide display row; with `overflow-x: auto` / narrow viewports this read as a clipped “ribbon” rather than a readable derivation.

### Rule adopted

- **≥ 3 segments** split on spaced ASCII ` = ` (at least two equals in the chain).
- **Break** when `segments ≥ 4`, or when `segments === 3` and the full string length is **≥ 22** (keeps very short `a = b = c` on one line; breaks typical Statistik / Ökonometrie two-step rows).
- **Skip** if the inner TeX already contains `\begin{` (cases, matrices, user-built `aligned`, etc.).
- **Format:** wrap in `\begin{aligned} … \end{aligned}` with `&=` continuations so each equality step is its **own row** (deliberate line breaks, not browser word-wrap).

### Implementation (shared)

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/mathDerivationFormat.js` | **New** — `formatChainedEqualitiesForDisplay(innerLatex)` |
| `assets/js/portal-core/ui/semanticContent.js` | `renderSemanticBlock` math branch: strip delimiters → format → re-wrap as `$$…$$` |

All modules using `renderSemanticBlock` for `step.eq`, formulas, etc. inherit this without per-module copies.

### Example cases fixed (representative)

- Statistik-style squared-deviation chain: `(2-4)^2 + … = 4 + 0 + 4 = 8` → two-row `aligned`.
- Short mean chain: `\bar{x} = (2+4+6)/3 = 4` → two-row `aligned` (length ≥ 22).

### CSS / containment

Existing project rules in `assets/css/premium-refinement.css` already set `max-width: 100%` and overflow on `#content .math-block` and display `mjx-container`. Pass 67 relies on **narrower math** from `aligned` first; horizontal scroll remains a last-resort fallback.

### Outliers (honest)

- **Single** `=` with a very long LHS/RHS is **not** split (no safe semantic split without TeX-aware parsing).
- **`\approx`** / Unicode `≈` chains are **not** split in this pass (only spaced ` = `).
- **`$…$` inline math** inside `renderTeachingProse` (e.g. some result sentences) is **unchanged** — formatting applies to **semantic math blocks** via `renderSemanticBlock`.

---

## Issue B — Missing source footers (provenance strip)

### Root cause

`buildConceptProvenanceStripHtml` only renders when `buildSummary(layers)` is non-empty. `buildSummary` uses `pathToHumanLabel(path)` on each `source_refs[].path`. For several **source-backed** modules, primary paths use filenames **not** covered by the original mapper (e.g. `Kapitel3.pdf`, `§_4_…-K.pdf`, Ökonometrie `.R` scripts). **`pathToHumanLabel` returned `null`** → **no labels** → **empty summary** → **no footer at all**.

Renderer wiring (`getConceptProvenance` passed into `createRenderer`) was already correct for:

- `finanzwirtschaft`
- `recht`
- `internationale-wirtschaftsbeziehungen`
- `jahresabschluss`
- `oekonometrie`

### Implementation (shared)

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/sourceProvenanceUi.js` | Extended `pathToHumanLabel` for Jahresabschluss `Kapitel…pdf`, Recht `§_N_…`, Recht/Übungen `Einheit_n`, Ökonometrie lecture PDFs + `NN_*.R` + `Tutorium_n.R` + Wiederholung scripts; generic `Übungsmaterial` for other Übungen PDFs; **moved** generic `Vorlesungsmaterial` **after** specific `Vorlesungen/§_…` handling. Updated `rankLabel` for new label families. Expand control: **visible/ARIA wording** unified to **“Basis nach Bereichen”** (no “Quellen …” on the control). |

Summary line prefix remains **`Basis: `** (`BASIS_PREFIX`) everywhere.

### Modules that were effectively missing labels (now covered)

| Module | Example path patterns now labeled |
|--------|-------------------------------------|
| Jahresabschluss | `Kapitel2.pdf`, `Kapitel6.1-6.5.pdf`, `Orga+Kapitel1.pdf`, `Tutorium_Kapitel2.pdf` |
| Recht | `§_N_…-K.pdf`, `…Einheit_3…` under Übungen, remaining Übungen PDFs → `Übungsmaterial` |
| Ökonometrie | `Einf_WiSe….pdf`, `Formelsammlung.pdf`, `Statistical_Tables.pdf`, `01_….R`, `Tutorium_3.R`, Wiederholung scripts |
| Finanzwirtschaft / IWB | Already matched `V*_StudIP.pdf` / `IntWB*.pdf`; unchanged, footers were already possible when refs exist |

### Outliers

- Some Übungs-PDFs without `Einheit_n` in the filename collapse to the generic **`Übungsmaterial`** (still one consistent “Basis:” line).
- Paths that match **no** rule anywhere still produce **no** footer (no invented provenance).

---

## Browser verification (recommended)

**Math**

1. Statistik Aufgabe with long squared-deviation and mean steps — multi-row aligned, no clipping.
2. Another long chained equality in Statistik or Ökonometrie.
3. Result row with chained `=` in a semantic math block.
4. Short `a = b = c` — still one display line.

**Footer**

5.–9. Open one concept each in Finanzwirtschaft, Recht, IWB, Jahresabschluss, Ökonometrie — footer visible, ⓘ + single muted **Basis:** line, expand button uses **Basis nach Bereichen**.

---

## Files changed (pass 67)

- `assets/js/portal-core/ui/mathDerivationFormat.js` *(new)*
- `assets/js/portal-core/ui/semanticContent.js`
- `assets/js/portal-core/ui/sourceProvenanceUi.js`
- `docs/audits/long-answer-line-breaking-and-missing-source-footer-closure-pass-67.md` *(this file)*

**Shared vs local:** fixes are **shared** in portal-core UI; **no** per-module renderer changes required for pass 67.

---

## Pass 67b follow-up (closure)

**Student-facing label vocabulary** is normalized in `toPublicProvenanceLabel` (see `docs/audits/pass-67b-provenance-wording-normalization-and-browser-closure.md`). **Browser verification** is automated via `tools/clickthrough/verify-pass-67b.mjs` with recorded output in that audit.
