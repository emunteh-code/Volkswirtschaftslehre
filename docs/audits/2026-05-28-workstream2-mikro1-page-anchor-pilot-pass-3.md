# 2026-05-28 — Workstream 2: Mikro1 page-anchor pilot (pass 3)

## Scope
Consumer-theory tail (VL 5–10) plus short-run cost structure (`gk_dk`, VL 15).

## Audit-first (source materials)
`pdftotext` on official PDFs under `source-materials/Mikroökonomik I/Vorlesungsfolien/`:

| Concept | PDFs | Anchor themes |
|---------|------|----------------|
| `elast` | VL 5, VL 5 Empirie | Preis-/Kreuzpreiselastizität, empirische Preiselastizitäten |
| `normal` | VL 5 | Einkommenselastizität, Engelkurven (Luxus/essentiell) |
| `hicks` | VL 6 | Hickssche Nachfrage, indirekte Nutzenfunktion/Roy |
| `ausgaben` | VL 6 | Ausgabenminimierung, Äquivalenz, Ausgabenfunktion |
| `cv_ev` | VL 10 | CV, EV, Vergleich CV/EV/∆KR |
| `arbeit` | VL 9 | Arbeitsangebot, Lohnänderung |
| `gk_dk` | VL 15 | GK vs DK, kurz-/langfristige Kosten |

## Implementation
- `mikro1/js/data/sourceAnchors.js` — +21 anchors (7 concepts × 3).
- `tools/clickthrough/trust-regression-pass-1.mjs` — page-anchors for seven concepts.

## Integrity
- Slide titles from official PDFs only; portal content unchanged.

## Remaining gap
- 16 concepts still without page anchors (e.g. `cobbd`, `ces_u`, `shephard`, `skalener`, `grts`, `anfang`, `pkomp`, `kmm`, `psubst`).
- Full VL page inventory and official task bank still open.
