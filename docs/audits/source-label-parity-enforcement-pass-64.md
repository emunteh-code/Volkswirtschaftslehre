# Source-label parity enforcement — Pass 64

**Date:** 2026-04-12  
**Scope:** Project-wide visibility of the shared concept provenance footer (`source-provenance`), with **Mathematik** as the explicit gap.

## What “missing” meant for Mathematik

### Ruled out (not the root cause)

1. **Metadata missing** — `mathematik/js/data/contentManifest.js` builds `PROVENANCE_BY_CONCEPT` via `buildProvenanceByConceptFromPrimaryRefs` from `CURRICULUM` `sourceRefs`; `mathematik/js/ui/renderer.js` passes `getConceptProvenance` into `createRenderer` like other modules.

2. **Separate template bypassing provenance** — Concept rendering uses the same `assets/js/portal-core/ui/renderer.js` `renderContent` path that appends `buildConceptProvenanceStripHtml` when a summary exists.

3. **Wrong conditional suppression** — The strip is omitted only when `buildConceptProvenanceStripHtml` returns an empty string (or after a render error).

### Actual root cause (exact failure path)

`buildConceptProvenanceStripHtml` (`assets/js/portal-core/ui/sourceProvenanceUi.js`) only emits HTML when `buildSummary(layers)` is non-empty.

`buildSummary` uses `collectAllRefLabels` → `labelsFromRefs` → **`pathToHumanLabel(path)`**.

Mathematik primary paths look like:

- `01Mathe_E1_AlgebraUndMengenlehre.pdf`
- `Kleinübung/E_1_-_Algebra_und_Mengenlehre/E1_-_Aufgaben.pdf`
- `04Mathe_LA1_LineareAlgebra1.pdf`

None of these matched the **existing** `pathToHumanLabel` heuristics (Mikro VL naming, `Uebungsblatt_`, `VL_`, etc.), so **`pathToHumanLabel` returned `null` for every ref**, **`collectAllRefLabels` was empty**, **`buildSummary` was empty**, and **the footer was never inserted**.

So: **metadata existed and the renderer was wired; humanization failed → UI stayed blank.**

## Fixes (shared layer)

**File:** `assets/js/portal-core/ui/sourceProvenanceUi.js`

1. **Mathematik VL PDFs:** `^\d+Mathe_((E|LA|AN|OP)\d+)` → label `Mathematik E1`, `Mathematik LA1`, etc.

2. **Mathematik Kleinübung folders:** `Kleinübung/<folder>/…` with `E_n`, `LA_n`, `AN_n`, `OP_n` prefixes (flexible `_-` after the number for paths like `OP_2_-__…`) → `Kleinübung E1`, …; unknown subfolder → `Kleinübung`.

3. **IWB sharpening:** `IntWBn.pdf` → `Vorlesung n` (instead of only the generic “Vorlesungsfolien” match).

4. **Summary length cap:** concepts with many primary refs (e.g. R-Begleitpraxis) can produce long label lists; the **one-line summary** now shows at most **7** labels plus `· …` (full refs remain in the expandable breakdown when applicable).

5. **`rankLabel`:** sort order extended for `Mathematik …` and `Kleinübung …` alongside existing Vorlesung/Übung tiers.

## Module-local changes

**None required for Mathematik wiring** — it already supplied `getConceptProvenance`. Parity was restored by fixing the **shared** label mapper.

## Other modules / surfaces

| Module | Notes |
|--------|--------|
| mikro1, makro1, makro2, statistik, oekonometrie, finanzwirtschaft, jahresabschluss, recht, IWB | Already pass `getConceptProvenance`; paths mostly matched earlier rules or benefit from `IntWB` / shared improvements. |
| mikro2 | Uses manifest + `getConceptProvenance`; label quality depends on stored paths (see mikro2 provenance audits). |
| Concepts with **empty** `sourceRefs` | Still **no** footer — correct: do not fake a basis line. |

Surfaces (Theorie, Formeln, Aufgaben, …) share the same **bottom-of-`#content`** strip per `renderContent` tab; no per-tab divergence in this pass.

## Browser verification (manual)

Not run here. Suggested:

1. Mathematik — e.g. `algebra_mengen` or `lineare_algebra_grundlagen`: footer with `ⓘ` and `Basis: Mathematik … · Kleinübung …`.
2. Statistik / Ökonometrie / Makro1 — one concept each: footer still present and consistent.
3. Recht or Jahresabschluss — one concept: same pattern.

Check: muted row, `ⓘ`, one-line summary, expand control only when multiple distinct basis lines exist.

## Intentionally non-source-backed

- **No primary refs** for a concept → empty summary → **no** strip (by design).
- **mikro2** remains **not** `direct-source`-anchored to PDFs per repo policy; manifest may still expose `source-distilled` / platform statuses where curated.

## Files changed

- `assets/js/portal-core/ui/sourceProvenanceUi.js` — `pathToHumanLabel`, `rankLabel`, `buildSummary` cap.
- `docs/audits/source-label-parity-enforcement-pass-64.md` — this document.
