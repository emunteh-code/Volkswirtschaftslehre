# Mikro2 Concept Anchor Local Open Pass 26

Date: 2026-05-28

## Audit Finding

Mikro2 concept pages already expose page-level anchor metadata in the provenance inspector: source file, lecture/page locator, section, confidence, and review date. However, those rows were still text-only. After pass 25 made document-level local opening available in the source companion, concept-level anchors still required the student to manually move from provenance text to the official file.

## Plan

- Extend the shared provenance inspector with an optional source-file base URL.
- Render local open buttons only when a module provides that base URL.
- Use the anchor's exact source path and page locator when constructing the open target.
- Keep modules without local source-opening configuration unchanged.

## Implementation

- `assets/js/portal-core/ui/sourceProvenanceUi.js`
  - adds source URL construction for anchor rows
  - renders `Öffnen` buttons in the source inspector when a source URL is available
  - checks local file availability with `HEAD` before opening
  - opens the PDF with `#page=` when the anchor has a page locator
  - shows a compact missing-local-source state if the file is unavailable

- `assets/js/portal-core/ui/renderer.js`
  - adds optional `sourceMaterialBaseUrl`
  - passes it into concept provenance rendering

- `mikro2/js/ui/renderer.js`
  - configures the Mikro2 source base as `../source-materials/Mikroökonomik II/`

- `assets/css/premium-refinement.css`
  - styles source-inspector open buttons and success/missing states

## Source-Fidelity Decision

No academic content, source mapping, answer logic, or formulas changed. The pass only makes existing page-level anchors actionable inside the local learning portal.

## Remaining Gaps

- Browser PDF page fragments depend on the browser/PDF viewer honoring `#page=`.
- Official source files remain local and git-ignored; deployment still needs a secure material-serving decision.
- This pass does not create new anchors for the three supplemental Mikro2 concepts without official source matches.
