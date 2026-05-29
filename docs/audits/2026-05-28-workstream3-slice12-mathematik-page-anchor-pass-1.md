# 2026-05-28 — Workstream 3 Slice 12: Mathematik page-anchor pass 1

## Scope
- First reviewed page-level anchors for all 14 Mathematik concepts (14/14).

## Audit-first (`pdftotext`)
- Lecture PDFs under `source-materials/Mathematik/Vorlesung_Folien_+_R-Skripte_Lehrvideos/` (E1–AN3, OP1–OP2).
- `r_begleitpraxis`: official R Kleinübung sheets (`R.E1`, `R.AN1`, `R.OP2` Aufgaben-PDFs).
- Registry source IDs: `mathematik-lecture-slide-*` and `mathematik-exercise-*` in `source-corpus-registry.generated.json`.

## Implementation
- `mathematik/js/data/sourceAnchors.js` — 42 anchors (14 concepts × 3).
- `mathematik/js/data/contentManifest.js` — `anchorsByConceptId`, `getConceptSourceSummary`.
- `mathematik/js/ui/renderer.js` — `sourceMaterialBaseUrl`, source summary bridge.
- `mathematik/js/features/sourceCompanion.js` — page-anchor metadata + unanchored panel.
- `tools/clickthrough/trust-regression-pass-1.mjs` — page-anchors expectations for five concepts.

## Integrity
- Section labels from official slide titles / Kleinübung headers only.
- Some E2/E3 pages use outline bullets where content slides repeat block titles; pilot pass, not full slide inventory.

## Remaining gap
- Per-slide inventory for all 129+ page decks; official task-family mapping; formula cards; `anchorComplete` still false.
