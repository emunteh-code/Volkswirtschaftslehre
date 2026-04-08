# Statistik Provenance Curation — Pass 1

## Scope

- **Only** `STATISTIK_CONCEPT_PRIMARY_REFS` in `statistik/js/data/contentManifest.js` (via `buildProvenanceByConceptFromPrimaryRefs`).
- No portal theory/drill edits; `FULL_EXAM_PROVENANCE` unchanged.
- File-level anchors only (no slide/page indices).

## Path convention (canonical)

Paths are **relative to**:

`source-materials/Statistik/Statistik/`

## Exact files inspected

| Path | Use |
|------|-----|
| `docs/audits/statistik-source-grounded-audit-pass-1.md` | Prior audit (note: older concept id names; used for high-level source presence, not as sole mapping) |
| `assets/js/module-content.js` (`statistik.roadmap`) | **Primary** defensibility: each roadmap step lists `Vorlesungen/...` sources aligned to the SoSe 25 sequence |
| `statistik/js/data/chapters.js` | Current `CHAPTERS[].id` list (**14** concepts) |
| `statistik/js/data/contentManifest.js` | Target manifest |
| `source-materials/Statistik/Statistik/Vorlesungen/*.pdf` | Directory listing; existence checks for every path string wired into the manifest |
| `VL_09_-_Induktive_Statistik_1.pdf` | `pdftotext` title/outline: IS1.2–IS1.5 (Verfahren), IS1.6 (Eigenschaften) |
| `VL_10_-_Induktive_Statistik_2.pdf` | `pdftotext`: „Konfidenzintervalle“ (Kapitel 7) |
| `VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf` | `pdftotext` + `grep`: **ANOVA** string present (supports `varianzanalyse` alongside roadmap) |
| `source-materials/Statistik/Statistik/Vorlesungen/*.pdf` (batch) | `grep` for „nichtparametr|Wilcoxon|Mann-Whitney|Vorzeichen“: only incidental hits in VL_09/VL_10 (no deck titled for nichtparametrische **Tests**) |
| `Tutorien/Tutorium_11/Tutorium11.pdf` | Exists; named in `module-content.js` roadmap next to Zwei-Stichproben/ANOVA block |

## Exact files changed

1. `statistik/js/data/contentManifest.js` — `STATISTIK_PRIMARY_REFS_CURATED`, merge into `STATISTIK_CONCEPT_PRIMARY_REFS`, `NOTES_THEORY` pointer.
2. `docs/audits/statistik-provenance-curation-pass-1.md` — this report.

## Exact concept ids now anchored (13 / 14)

| Concept id | Primary source file(s) |
|------------|-------------------------|
| `deskriptiv` | `Vorlesungen/VL_02_-_Deskriptive_Stat_1.1-1.2.pdf`, `Vorlesungen/VL_03_-_Deskriptive_Stat_1.3-1.6.pdf` |
| `bivariat` | `Vorlesungen/VL_04_-_Deskriptive_Stat_2.pdf` |
| `wahrscheinlichkeit` | `Vorlesungen/VL_05_-_Grundlagen_2.pdf` |
| `verteilungen` | `Vorlesungen/VL_06_-_Grundlagen_3.1-3.pdf.pdf`, `Vorlesungen/VL_07_-_Grundlagen_3.3.0-3.3.4.pdf`, `Vorlesungen/VL_07_VL_08_Einschub.pdf`, `Vorlesungen/VL_08_-_Grundlagen_3.3.5-3.3.6.pdf` |
| `schaetzen_verfahren` | `Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf` |
| `schaetzen_eigenschaften_intervalle` | `Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf`, `Vorlesungen/VL_10_-_Induktive_Statistik_2.pdf` |
| `testen` | `Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf`, `Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf` |
| `regression_schaetzung_inferenz` | `Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf`, `Vorlesungen/VL_13_-_Stat_Modellierung_1.5-1.8.pdf`, `Vorlesungen/VL_14_-_Stat_Modellierung_2.pdf` |
| `regression_diagnostik_prognose` | `Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf`, `Vorlesungen/VL_13_-_Stat_Modellierung_1.5-1.8.pdf`, `Vorlesungen/VL_14_-_Stat_Modellierung_2.pdf` |
| `rlab` | `R-Vorkurs.pdf` |
| `z_test` | `Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf`, `Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf` |
| `zwei_stichproben` | `Vorlesungen/VL_11_-_Zwei-SP_t-Test.pdf`, `Tutorien/Tutorium_11/Tutorium11.pdf` |
| `varianzanalyse` | `Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf`, `Tutorien/Tutorium_11/Tutorium11.pdf` |

**Note:** `z_test` and `testen` intentionally share the **same** two VL files: the roadmap groups z-/Normal-basierte Logik under the Hypothesentest sequence without a separate filename for „nur z-Test“.

**Note:** Both regression concepts share **VL_12–VL_14**: extracted text from VL_12 was not reliable enough to assign Diagnostik/Prognose to a single deck without guessing; filenames + roadmap describe one modelling arc through three PDFs.

## Exact unresolved concepts (empty primary refs)

| Concept id | Reason `STATISTIK_CONCEPT_PRIMARY_REFS[id]` remains `[]` |
|------------|----------------------------------------------------------|
| `nichtparametrisch` | No roadmap row titles this portal chapter to a specific `Vorlesungen/VL_*.pdf`. Full-text scan of all VL PDFs for typical nichtparametrische Test keywords did **not** surface a clear, dedicated lecture anchor (only sparse/incidental hits). Per pass rules, **no file was assigned** to avoid fake precision. A future pass may anchor Tutorium/other PDFs **after** explicit source mapping. |

## Exact unresolved provenance gaps (cross-cutting)

| Gap | Why |
|-----|-----|
| **`Vorlesungen/00Stat-EinführungsfolienSoSe25.pdf`** | Course intro/orientation deck; **no** matching standalone `CHAPTERS` id (first portal chapter is `deskriptiv` at VL_02+). Not forced onto `deskriptiv` to avoid overstating scope. |
| **Zusammenfassungen, Übungen, Großübung, Klausur-PDFs** | Not attached per concept here; roadmap + pass rules prioritize **VL** anchors. Summaries could be added in a pass 2 with the same rigor as `module-content` practice rows. |
| **`FULL_EXAM_PROVENANCE` (`klausur_2024`)** | Still `platform-added-drill` with empty `source_refs` — honest until an archived paper path is curated deliberately. |
| **Slide/page anchors** | Not in scope. |
| **`VL_06_*` filename typo** | On-disk name is `VL_06_-_Grundlagen_3.1-3.pdf.pdf` (double extension) — manifest uses the **actual** filesystem string. |

## Verification

- `node --check statistik/js/data/contentManifest.js` passes.
- Every non-empty path was checked with `fs.existsSync` under `source-materials/Statistik/Statistik/` (all found).

## Outcome

Thirteen concepts receive **roadmap-backed** (and where noted, outline-/grep-backed) primary PDF paths; **`nichtparametrisch`** stays **empty** pending a defensible file-level mapping.
