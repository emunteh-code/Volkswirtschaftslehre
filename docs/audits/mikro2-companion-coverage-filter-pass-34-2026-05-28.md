# Mikro2 Companion Coverage Filter Pass 34

Date: 2026-05-28  
Scope: Mikro2 official-material companion document list

## Finding

The selected-document verdict made coverage honesty visible after a source was selected, but students still had to scan the full source list manually to find corpus-only gaps, reference-only documents, or page-anchored partial reconstructions.

## Change

- Added document coverage filters for:
  - all sources
  - `Page-anchored partial`
  - `Reference-only`
  - `Corpus-only`
- Filter counts are computed from existing provenance and registry metadata.
- The document list now shows each document's verdict label next to the source kind.
- Selecting a filter chooses the first document in that filtered set and clears stale anchor/open state.

## Source-Faithfulness Boundary

This pass adds no source mappings, formulas, tasks, or academic claims. It only exposes existing coverage verdicts as a navigation control.

## Files Changed

- `mikro2/js/features/sourceCompanion.js`
- `assets/css/premium-refinement.css`
- `docs/audits/mikro2-companion-coverage-filter-pass-34-2026-05-28.md`

## Remaining Gaps

- Filter counts reflect current mapping state, not final source parity.
- `Page-anchored partial` still means incomplete reconstruction.
- Mikro2 still lacks official task-source ingestion for exercises, solutions, tutorials, Probeklausuren, and old exams.
