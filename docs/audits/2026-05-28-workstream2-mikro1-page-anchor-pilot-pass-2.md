# 2026-05-28 — Workstream 2: Mikro1 page-anchor pilot (pass 2)

## Scope
Production and market block: `produktion`, `kosten`, `gewinn`, `markt`, `monopol`.

## Audit-first (source materials)
`pdftotext` on `source-materials/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_11.pdf` … `VL_18.pdf`:

| Concept | PDFs | Anchors (page · section) |
|---------|------|---------------------------|
| `produktion` | VL 11 | 4 Produktionstechnologie · 7 Isoquanten · 10 Skalenerträge |
| `kosten` | VL 12 | 3 Kostenminimierung · 11 Shephards Lemma · 16 Die Kostenfunktion |
| `gewinn` | VL 13–14 | 13/2 Gewinnmaximierung · 13/4 mit Kostenfunktion · 14/10 kurzfristig |
| `markt` | VL 16 | 9 Angebot/Nachfrage · 12 Marktgleichgewicht · 14 Wohlfahrt |
| `monopol` | VL 17 | 3 Das Monopol · 6 Gewinnmax Monopolist · 11 Wohlfahrtswirkung |

Registry IDs: `mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-11` … `vl-17`.

## Implementation
- `mikro1/js/data/sourceAnchors.js` — +15 anchors (5 concepts × 3).
- `tools/clickthrough/trust-regression-pass-1.mjs` — page-anchors expectations for five concepts.

## Integrity
- Slide titles only from official PDFs; no academic content edits.
- `gk_dk`, `skalener`, `grts` remain file-level until a dedicated pass.

## Remaining gap
- 23 Mikro1 concepts without page anchors; VL 15 (`gk_dk`) and consumer-theory tail (VL 5–10) still open.
