# 2026-05-28 — Workstream 2: Mikro1 page-anchor pilot (pass 4)

## Scope
Complete page-level anchors for all Mikro I concepts with curated VL primary refs (32/33).

## Audit-first
`pdftotext` on VL 1–4, 6, 8–12. Fifteen concepts added in this pass: `kmm`, `indiff`, `ordinal`, `grs`, `cobbd`, `ces_u`, `homothet`, `hausopt`, `shephard`, `indnutzen`, `lambda`, `anfang`, `pkomp`, `skalener`, `grts`.

## Implementation
- `mikro1/js/data/sourceAnchors.js` — +45 anchors (15 concepts × 3).
- Cumulative: **96 anchors** across **32 concepts** with file-level refs.
- `psubst` remains manifest-only (no non-ambiguous VL mapping in curation pass 1).

## Integrity
- Slide titles from official PDFs only; no portal content edits.

## Remaining gap
- Per-page inventory of every VL slide (not just pilot concepts).
- Official task-family mapping from `Probeklausur/` artefacts.
- `anchorComplete` still false until full slide coverage is reviewed.
