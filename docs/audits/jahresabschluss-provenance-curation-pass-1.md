# Jahresabschluss Provenance Curation — Pass 1

## Scope

- **Only** `JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS` in `jahresabschluss/js/data/contentManifest.js` (via `buildProvenanceByConceptFromPrimaryRefs`).
- No portal content, drill, or `FULL_EXAM_PROVENANCE` changes.
- File-level anchors only (no page/slide numbers).

## Path convention (canonical)

Paths are **relative to the inner course folder**:

`source-materials/Jahresabschluss/Jahresabschluss/`

## Exact files inspected

| Path | Use |
|------|-----|
| `docs/audits/jahresabschluss-source-grounded-audit-pass-1.md` | Concept ↔ Kapitel-PDF matrix (§1–§10) and explicit notes on Tutorium/Probeklausur |
| `jahresabschluss/js/data/chapters.js` | Canonical `CHAPTERS[].id` list |
| `jahresabschluss/js/data/contentManifest.js` | Target for curated primary refs |
| `assets/js/module-content.js` (`jahresabschluss` roadmap) | Cross-check: roadmap sources align with same Kapitel files |
| `assets/js/portal-core/data/provenance.js`, `learningObjectNormalize.js` | Mechanism: paths → `source_refs` on layers |
| `source-materials/Jahresabschluss/Jahresabschluss/Orga+Kapitel1.pdf`, `Kapitel2.pdf` … `Kapitel10.pdf`, `Kapitel6.1-6.5.pdf`, `Kapitel6.6-6.7.pdf` | Existence verified (`ls`); names match audit |
| `source-materials/Jahresabschluss/Jahresabschluss/Tutorium/Tutorium_Kapitel2.pdf` | Existence verified; audit names it for **Maßgeblichkeit** / **latente Steuern** (exam-relevant alongside Kapitel 2) |

**Not** used as per-concept primary refs in this pass: `Zusammenfassungen/*.pdf` (not mapped 1:1 in the audit table), `Probeklausur/*` (cross-topic exam pack), `JA - empty.pdf` (companion schema, not a chapter).

## Exact files changed

1. `jahresabschluss/js/data/contentManifest.js` — `JAHRESABSCHLUSS_PRIMARY_REFS_CURATED` + merge into `JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS`.
2. `docs/audits/jahresabschluss-provenance-curation-pass-1.md` — this report.

## Exact concept ids now anchored (15 / 15)

Every `CHAPTERS[].id` has at least one path. Layer `source_status` defaults are unchanged; non-empty **`source_refs`** are attached to motivation/theory/formulas/tasks (and intuition/stepProblems where those layers exist), per shared builder behavior.

| Concept id | Primary source file(s) | Grounding |
|------------|-------------------------|-----------|
| `rechnungswesen_intro` | `Orga+Kapitel1.pdf` | Audit: §1 / Einführung; roadmap Kapitel 1 |
| `gob_rechtsgrundlagen` | `Kapitel2.pdf`, `Tutorium/Tutorium_Kapitel2.pdf` | Audit: §2.1 / GoB-Rechtsrahmen in Kapitel 2 VL; audit **explicitly** cites Tutorium Kapitel 2 for Maßgeblichkeit/latente Steuern (exam material not fully mirrored on VL outline alone) |
| `inventur_inventar_bilanzansatz` | `Kapitel2.pdf` | Audit: §2.2–2.3 |
| `buchen_konten` | `Kapitel3.pdf` | Audit: §3 |
| `buchfuehrung_orga` | `Kapitel4.pdf` | Audit: §4 |
| `anlagevermoegen` | `Kapitel5.pdf` | Audit: §5 |
| `umlauf_bewertung_verfahren` | `Kapitel6.1-6.5.pdf` | Audit: §6.1–6.2 (same PDF bundle as 6.3–6.5 per course file split) |
| `werkstoffe_erzeugnisse_buchungen` | `Kapitel6.1-6.5.pdf` | Audit: §6.3–6.5 |
| `umlauf_waren_ust` | `Kapitel6.6-6.7.pdf` | Audit: §6.6–6.7 |
| `eigenkapital_kapitalgesellschaften` | `Kapitel7.pdf` | Audit: §7.2 (shared VL file with §7.3) |
| `eigenkapital_personengesellschaften` | `Kapitel7.pdf` | Audit: §7.3 |
| `verbindlichkeiten` | `Kapitel8.pdf` | Audit: §8.2 |
| `rueckstellungen` | `Kapitel8.pdf` | Audit: §8.3 |
| `rechnungsabgrenzung` | `Kapitel9.pdf` | Audit: §9 |
| `erfolgsrechnung` | `Kapitel10.pdf` | Audit: §10 |

## Exact unresolved provenance gaps

| Gap | Why it stays empty / out of scope |
|-----|-----------------------------------|
| **Per-concept `Zusammenfassungen/*.pdf`** | Roadmap lists them per chapter, but the **audit Pass-1 matrix** anchors concepts to **Kapitel-PDFs** only; adding VL9/VL10 summary paths for every id without the same line-by-line audit coverage would mix evidence levels. **Deferred** to a pass that maps summaries explicitly. |
| **`Probeklausur/*.pdf` on concepts** | Single document spans Aufgaben 1–10 across topics; **not** a defensible one-to-one primary anchor for a single `conceptId`. `FULL_EXAM_PROVENANCE` remains the honest drill note. |
| **`JA - empty.pdf`** | Companion workbook per audit; **not** chapter substance — not used as primary. |
| **Folio / slide / §-subsection IDs** | Not encoded; would require manual index — **not inferred**. |
| **Finer split inside `Kapitel6.1-6.5.pdf`** | Portal splits **UV I** vs **UV II** (Werkstoffe/Erzeugnisse); the course ships **one** PDF for 6.1–6.5 — both concepts correctly share the **same file**; no fake sub-file split. |
| **Same PDF for paired concepts** | `gob_rechtsgrundlagen` vs `inventur_inventar_bilanzansatz` (both `Kapitel2.pdf`); KG vs PG Eigenkapital (both `Kapitel7.pdf`); Verbindlichkeiten vs Rückstellungen (both `Kapitel8.pdf`) — reflects **VL structure**, not missing anchors. |
| **Concepts with empty refs** | **None** among current `CHAPTERS`; any **future** chapter id without a curated row still receives `[]` via the merge pattern in `contentManifest.js`. |

## Outcome

- All **15** Jahresabschluss portal concepts carry **audit-aligned**, **file-level** primary references to the **official Kapitel VL PDFs** (and **one** Tutorium file where the audit singles it out for `gob_rechtsgrundlagen`).
- No paths were invented: every file string exists under the inner `Jahresabschluss/` folder and matches names in `jahresabschluss-source-grounded-audit-pass-1.md`.
