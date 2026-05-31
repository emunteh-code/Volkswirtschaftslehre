# OCR / weak-page backlog

Generated from page index.

| Module | Weak pages | Total pages | % weak |
|---|---:|---:|---:|
| `finanzwirtschaft` | 0 | 223 | 0% |
| `internationale-wirtschaftsbeziehungen` | 4 | 562 | 1% |
| `jahresabschluss` | 0 | 366 | 0% |
| `makro1` | 6 | 701 | 1% |
| `makro2` | 1 | 408 | 0% |
| `mathematik` | 0 | 1093 | 0% |
| `mikro1` | 4 | 381 | 1% |
| `mikro2` | 13 | 348 | 4% |
| `oekonometrie` | 180 | 1280 | 14% |
| `politikwissenschaft` | 8 | 178 | 4% |
| `politisches-system-brd` | 1 | 637 | 0% |
| `recht` | 2 | 477 | 0% |
| `statistik` | 132 | 2040 | 6% |

**Fleet total:** 351 weak / 8694 indexed pages.

## Policy

- No `official-task-source` families until page text is extracted and human-reviewed.
- Mikro1 Probeklausur JPGs remain blocked (`MIKRO1_PROBEKLAUSUR_REVIEW_STATUS`).

## Next implementation

1. Tesseract or cloud OCR batch on `weak-or-image-only` pages.

2. Store extracted text outside git; link via `quoteFingerprint` + review log.

3. Promote document-registry families to item-level `official-task-source` after review.

## Status (2026-05-30 closure pass)

- **Automation run:** `ocr-weak-pages.mjs --write` refreshed counts from `source-page-index.generated.json` (report-only; no Tesseract batch executed).

- **official-task-source:** fleet count remains **0** — no item promoted without OCR text + human review evidence.

- **Highest-yield backlog (weak %):** `oekonometrie` (14%), `statistik` (6%), `mikro2` (4%) — prioritize Probeklausur/Übung PDFs when OCR pipeline is wired.

- **Blocked:** Mikro1 Probeklausur JPGs (`MIKRO1_PROBEKLAUSUR_REVIEW_STATUS`); finanz/jahresabschluss/makro2 have low weak-page rates but still need human mapping for any exam-item promotion.

