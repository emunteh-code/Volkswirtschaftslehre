# Mikro2 Document Anchor Inventory Pass 30

Date: 2026-05-28  
Scope: Mikro2 official-material companion

## Finding

The Mikro2 companion could select official documents, open local source files, and preserve a concept-origin anchor context. It still did not show all reviewed page-level anchors already mapped to the selected document. A student landing on `Mikro_2_2.pdf`, for example, could see mapped portal concepts but not the specific reviewed source pages available across that document.

## Change

- Added a document-level reviewed-anchor inventory derived from `PROVENANCE_BY_CONCEPT`.
- Grouped duplicate anchors across provenance layers by anchor id.
- Shows source label, page, section, concept, provenance layers, confidence, and review date.
- Added an explicit empty state for documents with no reviewed page anchors.
- Added a `Seitenanker` count to the selected document metadata.

## Source-Faithfulness Boundary

This pass adds no new academic claims, formulas, tasks, or source mappings. It only exposes existing reviewed anchors from `mikro2/js/data/sourceAnchors.js` through the companion UI. Documents without page anchors remain marked as mapping gaps rather than being treated as irrelevant or complete.

## Files Changed

- `mikro2/js/features/sourceCompanion.js`
- `assets/css/premium-refinement.css`
- `docs/audits/mikro2-document-anchor-inventory-pass-30-2026-05-28.md`

## Remaining Gaps

- The companion still reflects partial reviewed-anchor coverage, not full lecture-page parity.
- Several official lecture PDFs have source references but no reviewed page-level anchors.
- Mikro2 still has no registered official exercise, tutorial solution, Probeklausur, or old-exam task archive.
- The module remains source-grounded but not source-complete, exam-bank-complete, or Mikro1-depth complete.
