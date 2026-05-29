# 2026-05-28 — Workstream 3 Slice 14: Mikro1 formula cards, task families, psubst anchors, Probeklausur policy

## Scope
- Extend Mikro1 exam-OS depth: formula cards, VL task families, `psubst` page anchors, Probeklausur ingest guardrails.

## Source-first audit (`source-materials/Mikroökonomik I/`, syllabus, prior provenance audits)
- **Formula cards + task families:** grounded in `mikro1/js/data/chapters.js` `formeln`/theory and existing `sourceAnchors.js` (VL 1–17).
- **`psubst`:** No explicit German phrase “perfekte Substitute” in extracted VL PDFs (reconfirmed `pdftotext` on `Mikro_1_VL_*.pdf`; see `docs/audits/mikro1-provenance-validation-pass-2.md`). Anchors use VL 3 slides on IK curvature (σ→∞) and CES σ = 1/(1−ρ) as **reviewed limit-case** locators (confidence 0.85–0.86); portal chapter $u=ax_1+bx_2$ remains source-distilled with cross-link to VL limit.
- **Probeklausur:** 17 JPGs + 1 template PDF (`Klausur_Mikro1_ohneechtentext.pdf`, Lorem ipsum). **No** `official-task-source` families added.

## Implementation
### Formula cards (`mikro1/js/data/formulaCards.js`) — +5 → **13** total
| Card | Concept |
|------|---------|
| `kmm_definition` | kmm |
| `indifference_curve_slope` | indiff |
| `grs_from_marginal_utility` | grs |
| `perfect_substitutes_corner_solution` | psubst |
| `price_elasticity_definition` | elast |

### Task families (`mikro1/js/data/taskFamilies.js`) — +8 VL-grounded → **17** total (9 prior + 8 new; +1 ingestion placeholder on `kmm`)
| Family | Concept |
|--------|---------|
| `kmm-budget-distinction` | kmm |
| `indifference-curve-properties` | indiff |
| `grs-tangential-optimum` | grs |
| `elasticity-calculation` | elast |
| `perfect-substitutes-corner` | psubst |
| `praeferenz-rationality` | praeferenz |
| `marshall-demand-derivation` | marshall |
| `cv-ev-welfare` | cv_ev |
| `leontief-complements` | pkomp |

### Page anchors pass 5 (`mikro1/js/data/sourceAnchors.js`)
- Added `psubst` block (2 anchors on `Mikro_1_VL_3.pdf`).
- `contentManifest.js`: primary ref `Vorlesungsfolien/Mikro_1_VL_3.pdf` for `psubst`.
- Trust: `mikro1/psubst` → `expectCoverage: page-anchors`.

### Probeklausur policy (`officialTaskIngestion.js`, `sourceCompanion.js`)
- `MIKRO1_PROBEKLAUSUR_REVIEW_STATUS` — explicit OCR/mapping false, `officialTaskSourceAllowed: false`.
- `assertMikro1OfficialTaskSourcePolicy()` — throws if `official-task-source` is set without review.
- Companion panel lists blockers + review flags.

## Integrity
- No Probeklausur item text invented; no `official-task-source` task families.
- `psubst` anchors document VL limit-case linkage; lower confidence where wording is implicit.

## Remaining gap
- Formula cards for remaining concepts (ordinal, hicks, shephard, gk_dk, …).
- More task families for anchored concepts without families (e.g. `normal`, `hicks`, `shephard`, `arbeit`).
- Probeklausur OCR → concept-level `official-task-source` mapping.

## Source files used
- `source-materials/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_1.pdf` … `Mikro_1_VL_17.pdf` (via `sourceAnchors.js`, `pdftotext` spot checks)
- `docs/audits/source-syllabus/mikro1.generated.json`
- `mikro1/js/data/chapters.js`
