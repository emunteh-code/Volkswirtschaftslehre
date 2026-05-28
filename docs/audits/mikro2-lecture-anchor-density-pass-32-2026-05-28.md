# Mikro2 Lecture Anchor Density Pass 32

Date: 2026-05-28  
Scope: Mikro2 official-material companion coverage matrix

## Finding

The lecture coverage matrix marked documents as having page anchors once any reviewed anchor existed. That was technically true, but too easy to misread as full lecture reconstruction. For source-parity work, the UI needs to separate "some reviewed anchors exist" from "every relevant lecture page has been reconstructed."

## Change

- Added a reviewed-anchor density signal to each lecture row.
- Each row now shows reviewed anchor count against the document page count where available.
- The matrix summary now includes total reviewed anchors across lecture PDFs.
- Rows explicitly keep the caveat `page-level Rekonstruktion offen` when anchors exist.
- Rows with no anchors remain labeled as a mapping gap.

## Source-Faithfulness Boundary

This pass adds no new academic source mapping. It only makes existing reviewed-anchor coverage more honest by showing that partial page anchoring is not full source parity.

## Files Changed

- `mikro2/js/features/sourceCompanion.js`
- `assets/css/premium-refinement.css`
- `docs/audits/mikro2-lecture-anchor-density-pass-32-2026-05-28.md`

## Remaining Gaps

- Anchor density is a transparency signal, not a completeness metric.
- Mikro2 still needs page-by-page reconstruction for every lecture PDF.
- Official exercise, solution, tutorial, Probeklausur, and old-exam task sources are still absent from the registered Mikro2 corpus.
