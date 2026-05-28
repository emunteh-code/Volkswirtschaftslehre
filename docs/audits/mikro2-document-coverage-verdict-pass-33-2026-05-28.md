# Mikro2 Document Coverage Verdict Pass 33

Date: 2026-05-28  
Scope: Mikro2 official-material companion selected-document detail

## Finding

The selected-document detail showed source metadata, page anchors, mapped concepts, and portal layers, but it did not give a clear top-level coverage verdict. A student could still confuse "document exists in the corpus" with "document is reconstructed in the portal."

## Change

- Added a selected-document coverage verdict panel.
- The verdict uses only existing provenance and registry metadata.
- Verdict states are:
  - `Corpus-only`: official file exists but no direct portal mapping is registered.
  - `Reference-only`: portal content references the document, but no page-level anchor exists.
  - `Page-anchored partial`: reviewed page anchors exist, but full reconstruction is not certified.
- Added compact fact chips showing concept, layer, and anchor counts.

## Source-Faithfulness Boundary

This pass adds no formulas, tasks, mappings, or course claims. It is an honesty layer over existing source metadata and explicitly avoids treating partial anchors as source-complete coverage.

## Files Changed

- `mikro2/js/features/sourceCompanion.js`
- `assets/css/premium-refinement.css`
- `docs/audits/mikro2-document-coverage-verdict-pass-33-2026-05-28.md`

## Remaining Gaps

- The verdict is still based on current portal mappings, not page-by-page lecture reconstruction.
- Mikro2 still needs full source parity for all lecture PDFs.
- Official exercises, solutions, tutorials, Probeklausuren, and old exams remain missing from the Mikro2 task corpus.
