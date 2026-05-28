# 2026-05-28 — Workstream 3 Slice 9: Statistik page-anchor pass 2

## Scope
- Extend reviewed page-level anchors to `wahrscheinlichkeit`, `verteilungen`, `schaetzen_verfahren`.

## Audit-first (source materials)
- Inspected with `pdftotext` on official VL PDFs under `source-materials/Statistik/Vorlesungen/`:
  - `VL_05_-_Grundlagen_2.pdf` — G2.1 content (p6), Experimente (p11), Bedingte Wahrscheinlichkeit (p42)
  - `VL_06_-_Grundlagen_3.1-3.pdf.pdf` — Diskrete ZV (p11), Wahrscheinlichkeitsfunktion diskreter ZV (p14)
  - `VL_08_-_Grundlagen_3.3.5-3.3.6.pdf` — Dichtefunktion (p15)
  - `VL_09_-_Induktive_Statistik_1.pdf` — IS1.1 Punktschätzung (p8), IS1.2 Methode der Momente (p12), IS1.3 Methode der kleinsten Quadrate (p25)
- Registry source IDs: `statistik-vorlesungen-vl-05` … `vl-09` in `docs/audits/source-corpus-registry.generated.json`.

## Implementation
- `statistik/js/data/sourceAnchors.js` — +9 anchors (3 concepts × 3 each).
- `tools/clickthrough/trust-regression-pass-1.mjs` — page-anchors expectations for the three concepts.

## Integrity
- Section labels taken from official slide titles / outlines only.
- `nichtparametrisch` still deferred (no defensible VL anchor per curation pass 1).

## Remaining gap
- 9 Statistik concepts still file-level only; formula cards, official task-family mapping, `exam-bank-complete`.
