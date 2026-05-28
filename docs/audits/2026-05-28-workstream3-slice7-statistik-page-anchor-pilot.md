# 2026-05-28 — Workstream 3 Slice 7: Statistik page-anchor pilot

## Scope
- Priority D start: first reviewed page-level anchors for Statistik (pilot: two concepts).

## Audit-first (source materials)
- Inspected with `pdftotext` on official VL PDFs under `source-materials/Statistik/Vorlesungen/`:
  - `VL_02_-_Deskriptive_Stat_1.1-1.2.pdf` — DS1.1 (p6), DS1.2 (p23)
  - `VL_03_-_Deskriptive_Stat_1.3-1.6.pdf` — DS1.3 content (p10)
  - `VL_04_-_Deskriptive_Stat_2.pdf` — DS2.1 (p16), DS2.2 (p30), scatterplot block (p38)
- Registry source IDs from `docs/audits/source-corpus-registry.generated.json` (`statistik-vorlesungen-*`).

## Implementation
- `statistik/js/data/sourceAnchors.js` — 6 reviewed anchors (`deskriptiv` ×3, `bivariat` ×3).
- `statistik/js/data/contentManifest.js` — wires `anchorsByConceptId`; path comment corrected to `source-materials/Statistik/`.
- `tools/clickthrough/trust-regression-pass-1.mjs` — `deskriptiv` and `bivariat` expect `page-anchors`.

## Integrity
- Section labels taken from official slide outlines only; no invented theory or tasks.
- Remaining 12 Statistik concepts stay file-level refs only until individually reviewed.

## Remaining gap
- Full concept coverage, formula-card anchors, official task-family mapping, `exam-bank-complete`.
