# 2026-05-28 — Workstream 2: Mikro1 page-anchor pilot (pass 1)

## Scope
First reviewed page-level anchors for five Mikro I consumer-theory concepts (pilot).

## Audit-first (source materials)
Inspected with `pdftotext` on official VL PDFs under `source-materials/Mikroökonomik I/Vorlesungsfolien/`:

| Concept | PDFs | Anchored sections (page) |
|---------|------|---------------------------|
| `budget` | `Mikro_1_VL_1.pdf` | Budgetmenge (16), Budgetmenge und Budgetgerade (18), Budgetgerade: Diskussion (19) |
| `praeferenz` | `Mikro_1_VL_2.pdf` | Präferenzen (2), Indifferenzkurven (7), Grenzrate der Substitution (12) |
| `lagrange` | VL_2, VL_4 | Nebenbedingung (17, 20), Haushaltsoptimum analytisch (4) |
| `marshall` | `Mikro_1_VL_4.pdf` | Haushaltsoptimum (4), Marshall CD (9), Marshall CES (10) |
| `slutsky` | VL_7, VL_8 | Einkommens-/Substitutionseffekt (7/2), Slutsky-Gleichung (7/4), Sonderfälle (8/2) |

Registry IDs: `mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-*` in `docs/audits/source-corpus-registry.generated.json`.

## Implementation
- `mikro1/js/data/sourceAnchors.js` — 15 reviewed anchors (5 concepts × 3).
- `mikro1/js/data/contentManifest.js` — `anchorsByConceptId: MIKRO1_SOURCE_ANCHORS`.
- `tools/clickthrough/trust-regression-pass-1.mjs` — five concepts expect `page-anchors`; companion smoke prefers page-anchor bridge on `budget`.

## Integrity
- Section labels from official slide titles only; no invented theory or tasks.
- Portal academic content unchanged.
- Remaining 28 Mikro1 concepts stay file-level or manifest-only until individually reviewed.

## Remaining gap
- Full VL sequence coverage, formula-card anchors, official task-family mapping, `exam-bank-complete`, adaptive mastery evidence.
