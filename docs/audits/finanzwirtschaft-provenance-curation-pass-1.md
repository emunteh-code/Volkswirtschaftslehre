# Finanzwirtschaft Provenance Curation — Pass 1

## Scope

- **Only** concept-level primary source paths in `finanzwirtschaft/js/data/contentManifest.js` (`FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS` → `buildProvenanceByConceptFromPrimaryRefs`).
- No portal theory or drill rewrites; no slide/page anchors; no invented PDFs.

## Path convention (canonical)

All strings in `FINANZWIRTSCHAFT_PRIMARY_REFS_CURATED` are **relative to the inner course folder**:

`source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/`

Example on disk: `…/V7_StudIP.pdf`.

## Exact files inspected

| Path | Role |
|------|------|
| `docs/audits/finanzwirtschaft-source-grounded-audit-pass-1.md` | Concept ↔ VL (V1–V12) grouping used as the main defensibility baseline |
| `assets/js/module-content.js` (`finanzwirtschaft.roadmap` + `sourceGroups`) | Cross-check: roadmap step titles ↔ `Vn_StudIP.pdf` labels already maintained for this course |
| `finanzwirtschaft/js/data/chapters.js` | Authoritative list of `CHAPTERS[].id` (16 concepts) |
| `finanzwirtschaft/js/data/contentManifest.js` | Target for `FINANZWIRTSCHAFT_PRIMARY_REFS_CURATED` |
| `assets/js/portal-core/data/provenance.js`, `learningObjectNormalize.js` | How paths become `source_refs` on each layer |
| `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V1_StudIP.pdf` … `V12_StudIP.pdf` | Existence + naming verification (`ls`); **no** full-text read of every deck |
| `V9_StudIP.pdf` (extracted text via `pdftotext`) | Spot check: headings include **„Entscheidungen unter Unsicherheit“** and Kapitel-5 uncertainty structure — supports anchoring `unsicherheit` to this file without inferring page numbers |
| `V8_StudIP.pdf` (`pdftotext` + `grep`) | Spot check: **„Kapitalwertfunktion“** / **„Interner Zinsfuß“** — supports `izf_kapitalwertfunktion` |
| `V10_StudIP.pdf` (`pdftotext` + `grep`) | Spot check: Kapitalerhöhung context; **not** used as primary for `fremdkapitalkosten` (FK/Skonto teaching is concentrated in V11 per roadmap + audit) |

## Exact files changed

1. `finanzwirtschaft/js/data/contentManifest.js` — populated `FINANZWIRTSCHAFT_PRIMARY_REFS_CURATED` and merged over `CHAPTERS` into `FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS`.
2. `docs/audits/finanzwirtschaft-provenance-curation-pass-1.md` — this report.

## Exact concept ids now anchored

Every `CHAPTERS[].id` receives at least one PDF path (see table below; **16** concepts). Layer `source_status` values are **unchanged** from defaults (`source-distilled` for theory/formulas, etc.); only **`source_refs`** on those layers gain non-empty arrays.

| Concept id | Primary source file(s) | Why this is supportable (no page/slide claims) |
|------------|-------------------------|-----------------------------------------------|
| `finanz_denkweise` | `V1_StudIP.pdf` | Audit: introduction / course framing in V1; roadmap „Einführung“ → V1 |
| `liquiditaetsplanung` | `V2_StudIP.pdf` | Audit: liquidity / golden rule / planning in V2; roadmap „Liquidität…“ → V2 |
| `kapitalmarkt_bewertung` | `V2_StudIP.pdf`, `V3_StudIP.pdf` | Audit: Kapitalmarktorientierung spans V2/V3; roadmap ties modern view to V3 and traditional bridge to V2 |
| `institutionen_marktunvollkommenheit` | `V2_StudIP.pdf`, `V3_StudIP.pdf` | Audit: institutions / asymmetry with V2/V3; same files as Kapitalmarkt block — course does not split into separate PDFs |
| `intertemporale_wahl` | `V3_StudIP.pdf`, `V4_StudIP.pdf` | Audit: intertemporal model V3/V4; roadmap „Intertemporale Wahl…“ → V4, preferences link → V3 |
| `kapitalwert_fisher` | `V5_StudIP.pdf` | Audit + roadmap: NPV / Fisher / imperfect market in V5 |
| `auf_abzinsen` | `V6_StudIP.pdf` | Roadmap „Aufzinsen, Abzinsen…“ → V6; audit bundles dynamic discounting V6/V7 — **single-file** anchor for this concept is V6 (before rent/annuity block V7) |
| `renten_endwert` | `V6_StudIP.pdf`, `V7_StudIP.pdf` | Audit: factors, complete plan, FV/NPV links V6/V7; roadmap Renten/vollständiger Finanzplan → V7, V6 for shared discounting machinery |
| `izf_kapitalwertfunktion` | `V8_StudIP.pdf`, `V9_StudIP.pdf` | Audit V8/V9; V8 text contains Kapitalwertfunktion/IZF core; V9 continues IZF interpretation (same thematic arc) |
| `izf_grenzen` | `V8_StudIP.pdf`, `V9_StudIP.pdf` | Audit: limits, reinvestment, scaling V8/V9; roadmap „Grenzen“ → V9 |
| `unsicherheit` | `V9_StudIP.pdf` | **Not** listed as its own row in audit pass 1; anchored via **extracted V9 headings** („Entscheidungen unter Unsicherheit“, Kap. 5) + roadmap „Entscheidungsprobleme unter Unsicherheit“ → V9 |
| `bezugsrecht` | `V10_StudIP.pdf` | Audit + roadmap: capital increase / rights in V10 |
| `eigenkapitalkosten` | `V10_StudIP.pdf`, `V11_StudIP.pdf` | Audit V10/V11: issuance mechanics (V10) and dividend-discount / EK cost line (V11) |
| `fremdkapitalkosten` | `V11_StudIP.pdf` | Audit groups V10/V11; roadmap places Skonto/FK cost line in V11; V10 grep shows no substantive FK-cost/Skonto block — **V11 only** to avoid overstating V10 |
| `wacc_leverage` | `V11_StudIP.pdf`, `V12_StudIP.pdf` | Roadmap „Kapitalstruktur, Gesamtkapitalkosten und Leverage“ → V11 + V12; audit WACC/leverage V12 with structural lead-in in capital-structure materials |
| `modigliani_miller` | `V12_StudIP.pdf` | Audit: MM / irrelevance benchmark V12 — **single-file** anchor (no extra file without a verified MM block in V11) |

## Exact unresolved provenance gaps

| Gap | Reason it remains empty / coarse |
|-----|----------------------------------|
| **Slide- or page-level anchors** | Not curated: would require a dedicated index or manual folio map; not inferred from filenames alone. |
| **`FULL_EXAM_PROVENANCE`** | Unchanged: full exams remain `platform-added-drill` with empty `source_refs` and the existing honest note (no Klausur-PDF anchors in repo). |
| **Per-layer differentiation** | `buildProvenanceByConceptFromPrimaryRefs` attaches the **same** `source_refs` to motivation/theory/formulas/tasks (and intuition/graph/stepProblems when present). **Not** split by layer in this pass. |
| **Finer split `kapitalmarkt_bewertung` vs `institutionen_marktunvollkommenheit`** | Both map to **the same two PDFs** because the course packs Kapitalmarkt- and Institutionenlogik across V2/V3 without separate files — not a missing anchor, but a **shared-file** limitation. |
| **`V9_StudIP.pdf` shared by three concepts** | `izf_kapitalwertfunktion`, `izf_grenzen`, and `unsicherheit` all list V9 where applicable: one deck, multiple chapters. No attempt to encode in-PDF section boundaries. |
| **Cross-module or supplementary materials** | Only the 12 `V*_StudIP.pdf` files under the inner folder were used; zip archives, other folders, or e-exam sheets were **not** wired. |

## Outcome

- **16 / 16** chapter concepts carry **defensible, file-level** `source_refs` through the manifest builder.
- **No** paths were added for files that were not listed in the audited material set.
- **`fremdkapitalkosten`** deliberately uses **only** `V11_StudIP.pdf` (narrower than the audit’s bundled „V10/V11“ line) because a quick V10 text check did not show the FK/Skonto teaching block.
