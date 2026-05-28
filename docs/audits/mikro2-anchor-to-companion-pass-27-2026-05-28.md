# Mikro2 Anchor To Companion Pass 27

Date: 2026-05-28

## Audit Finding

Pass 26 made reviewed concept anchors locally openable. The same anchor rows also carry `sourceId`, which matches the generated source-corpus registry used by the Mikro2 companion browser. Before this pass, students could open the PDF from a concept anchor but could not jump from that same anchor to the companion view showing the whole document's portal coverage and gaps.

## Plan

- Keep local PDF opening as the direct source action.
- Add a second source-inspector action that opens the official-material companion focused on the anchor's source document.
- Preserve existing companion defaults when opened normally from dashboard/home flows.
- Avoid new academic claims or source mappings.

## Implementation

- `assets/js/portal-core/app.js`
  - lets `window.__showSourceCompanion` forward optional selection arguments to the module companion

- `mikro2/js/features/sourceCompanion.js`
  - accepts `showSourceCompanion({ sourceId })`
  - preselects the requested registry document before or after registry load

- `assets/js/portal-core/ui/sourceProvenanceUi.js`
  - renders a `Browser` action for anchor rows with `sourceId`
  - calls the companion with that source id

- `assets/css/premium-refinement.css`
  - styles the compact provenance row action group

## Source-Fidelity Decision

No content, formulas, anchors, confidence scores, or task mappings changed. This pass only connects existing anchor metadata to the official-material companion workflow.

## Remaining Gaps

- The companion still works at document level, not at a specific page-highlight level.
- This depends on the module providing a source companion and matching registry ids.
- Mikro2 still lacks official exercise, tutorial, solution, and exam source documents.
