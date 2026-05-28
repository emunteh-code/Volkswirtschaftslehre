# Mikro2 Source-Parity Actions Pass 35

Date: 2026-05-28  
Scope: Mikro2 official-material companion selected-document detail

## Finding

The companion now labels each selected document as corpus-only, reference-only, or page-anchored partial. It still did not translate those verdicts into the concrete source-parity work needed next, which made the status informative but not yet operational.

## Change

- Added a `Source-Parity Next Steps` panel to the selected-document detail.
- The checklist is generated from the document's existing coverage verdict.
- Lecture PDFs with fewer reviewed anchors than pages also show the remaining unanchored-page count as a prioritization signal.
- The panel explicitly preserves uncertainty: the page count signal is not treated as an automatic academic coverage error.

## Source-Faithfulness Boundary

This pass adds workflow guidance only. It does not create source mappings, formulas, tasks, or course claims, and it does not upgrade any document to source-complete status.

## Files Changed

- `mikro2/js/features/sourceCompanion.js`
- `assets/css/premium-refinement.css`
- `docs/audits/mikro2-source-parity-actions-pass-35-2026-05-28.md`

## Remaining Gaps

- The checklists are operational guidance; the actual page-by-page reconstruction is still pending.
- Mikro2 still needs official exercise, solution, tutorial, Probeklausur, and old-exam task sources for exam-bank completeness.
- Existing page anchors remain partial and must be expanded before Mikro2 can reach source parity.
