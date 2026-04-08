# Ökonometrie Provenance Curation — Pass 1

## Scope

- **Only** `OEKONOMETRIE_CONCEPT_PRIMARY_REFS` in `oekonometrie/js/data/contentManifest.js` (via `buildProvenanceByConceptFromPrimaryRefs`).
- No portal theory/drill changes; `FULL_EXAM_PROVENANCE` unchanged.
- File-level anchors only (no slide/page indices inside `Einf_WiSe2024.pdf`).

## Path convention (canonical)

Paths are **relative to**:

`source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/`

(Equivalent convenience symlink at repo root: `oekonometrie-src` → inner course folder.)

## Exact files inspected

| Path | Use |
|------|-----|
| `docs/audits/oekonometrie-source-grounded-audit-pass-1.md` | Confirms master deck + Formelsammlung + Übung/Tutorium/Probeklausur as corpus |
| `assets/js/module-content.js` (`oekonometrie.roadmap`) | Maps thematic blocks to `Lecture_…/Einf_WiSe2024.pdf`, `Exercises_…/R/*.R`, `Tutorial_…/R/*.R` |
| `oekonometrie/js/data/curriculum.js` | `rBlock.script` strings tie many concepts to **named** `.R` files |
| `oekonometrie/js/data/chapters.js` | Re-exports `CHAPTERS` from curriculum (**32** ids) |
| `oekonometrie/js/data/contentManifest.js` | Target manifest |
| `Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf`, `Formelsammlung.pdf`, `Statistical_Tables.pdf`, `Syllabus.pdf` | Existence check |
| `Exercises_Einführung_in_die_Ökonometrie_Übung/R/*.R` | Listing; **byte-level** check for corrupted umlauts in several filenames |
| `Tutorial_Einführung_in_die_Ökonometrie_Tutorium/R/Tutorium_3.R`, `Tutorium_7.R`, `Tutorium_10.R` | Roadmap + curriculum references |

## Technical note: R filenames with U+F704

Several exercise R files on disk use the Unicode private-use character **U+EF84** where a German umlaut would normally appear (artifact of the archived corpus). The manifest encodes this as `'\uEF84'` inside path strings so `fs.existsSync` matches the repository copy. This is documented—not a content invention.

## Exact files changed

1. `oekonometrie/js/data/contentManifest.js` — `OEKONOMETRIE_PRIMARY_REFS_CURATED`, merge into `OEKONOMETRIE_CONCEPT_PRIMARY_REFS`, `NOTES_THEORY` pointer.
2. `docs/audits/oekonometrie-provenance-curation-pass-1.md` — this report.

## Exact concept ids now anchored (32 / 32)

Every `CHAPTERS[].id` has a non-empty `source_refs` list after `buildProvenanceByConceptFromPrimaryRefs`. Below, paths are **relative** to the inner course folder (see convention above).

| Concept id | Primary source file(s) |
|------------|-------------------------|
| `matrix_notation` | `Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf`, `Exercises_…/R/Wiederholung_Lineare_Algebra.R`, `Exercises_…/R/01_Das_lineare_Modell.R` |
| `sample_moments` | `Einf_WiSe2024.pdf`, `Exercises_…/R/Wiederholung_Statistik.R` |
| `distributions_df` | `Einf_WiSe2024.pdf`, `Exercises_…/R/09_Intervallsch…Hypothesentests.R` (with PUA), `Formelsammlung.pdf`, `Statistical_Tables.pdf` |
| `model_objects` | `Einf_WiSe2024.pdf`, `01_Das_lineare_Modell.R` |
| `ols_objective` | `Einf_WiSe2024.pdf`, `01_Das_lineare_Modell.R` |
| `normal_equations` | `Einf_WiSe2024.pdf`, `01_Das_lineare_Modell.R` |
| `partial_effects` | `Einf_WiSe2024.pdf`, `01_Das_lineare_Modell.R` |
| `functional_forms` | `Einf_WiSe2024.pdf`, `01_Das_lineare_Modell.R` |
| `no_perfect_multicollinearity` | `Einf_WiSe2024.pdf`, `02_Annahmen.R` |
| `exogeneity` | `Einf_WiSe2024.pdf`, `02_Annahmen.R` |
| `endogeneity_ovb` | `Einf_WiSe2024.pdf`, `02_Annahmen.R` |
| `unbiasedness` | `Einf_WiSe2024.pdf`, `03_Eigenschaften.R` |
| `gauss_markov` | `Einf_WiSe2024.pdf`, `03_Eigenschaften.R` |
| `consistency` | `Einf_WiSe2024.pdf`, `03_Eigenschaften.R` |
| `error_variance` | `Einf_WiSe2024.pdf`, `04_Sch…tzen_der_Fehlervarianz.R` (with PUA) |
| `covariance_matrix` | `Einf_WiSe2024.pdf`, `04_…Fehlervarianz.R`, `Formelsammlung.pdf` |
| `prediction` | `Einf_WiSe2024.pdf`, `05_Vorhersage.R` |
| `prediction_intervals` | `Einf_WiSe2024.pdf`, `05_Vorhersage.R`, `Tutorial_…/R/Tutorium_3.R` |
| `r_squared` | `Einf_WiSe2024.pdf`, `06_Bestimmtheitsmass.R` |
| `t_test` | `Einf_WiSe2024.pdf`, `09_…Hypothesentests.R`, `Formelsammlung.pdf`, `Statistical_Tables.pdf` |
| `f_test` | same as `t_test` |
| `confidence_intervals` | same as `t_test` |
| `normal_linear_model_mle` | `Einf_WiSe2024.pdf`, `Formelsammlung.pdf` |
| `linear_restrictions_ur` | `Einf_WiSe2024.pdf`, `09_…Hypothesentests.R`, `Formelsammlung.pdf` |
| `asymptotic_normality` | `Einf_WiSe2024.pdf`, `10_Asymptotische_Eigenschaften.R` |
| `monte_carlo` | `Einf_WiSe2024.pdf`, `10_Asymptotische_Eigenschaften.R` |
| `vif_collinearity` | `Einf_WiSe2024.pdf`, `07_Multikollinearit….R` (with PUA) |
| `fwl_partial_regression` | `Einf_WiSe2024.pdf`, `07_…Multikollinearit….R`, `Tutorial_…/R/Tutorium_7.R` |
| `heteroskedasticity` | `Einf_WiSe2024.pdf`, `11_Heteroskedastizit….R` (with PUA), `Tutorial_…/R/Tutorium_10.R` |
| `robust_gls` | same as `heteroskedasticity` |
| `autocorrelation` | `Einf_WiSe2024.pdf`, `12_Autokorrelation.R` |
| `hac_newey_west` | `Einf_WiSe2024.pdf`, `11_…Heteroskedastizit….R`, `12_Autokorrelation.R` |

(“`Exercises_…`” = `Exercises_Einführung_in_die_Ökonometrie_Übung/R/`; “`Tutorial_…`” = `Tutorial_Einführung_in_die_Ökonometrie_Tutorium/R/`.)

## Exact unresolved concepts

- **None** among the current **32** `CHAPTERS` ids: each receives at least `Einf_WiSe2024.pdf` plus, where curriculum/roadmap gives a clearer hook, the matching **R** (and occasionally **Formelsammlung** / **Statistical_Tables** / **Tutorium** script).

## Exact unresolved provenance gaps (cross-cutting)

| Gap | Why |
|-----|-----|
| **`Syllabus.pdf`** | Course-frame document; not attached per concept (would duplicate the same file 32× without finer mapping). |
| **`Probeklausuren/*.pdf`** | Cross-topic exam packs; not used as **per-concept** primaries (same rationale as other modules). |
| **`FULL_EXAM_PROVENANCE`** | Still `platform-added-drill` with empty `source_refs` and the existing honest note. |
| **Slide/page anchors inside `Einf_WiSe2024.pdf`** | Not curated; the deck is one PDF for the whole course. |
| **Übungsblätter-PDF folder** | Some on-disk PDF names under `Exercises_…/Übungsblätter` use **corrupted encoding** in this mirror; this pass avoids those strings and relies on **R + Lecture PDFs** that are byte-stable. |
| **Shared anchors** | `t_test` / `f_test` / `confidence_intervals` share the same file set (joint inferenz block in materials). `heteroskedasticity` / `robust_gls` share `11_…` + `Tutorium_10.R` per roadmap. |

## Verification

- `node --check oekonometrie/js/data/contentManifest.js` passes.
- Every path in `OEKONOMETRIE_CONCEPT_PRIMARY_REFS` was checked with `path.join(innerCourseDir, ref)` and `fs.existsSync` — **no misses**.

## Outcome

All **32** Ökonometrie concepts carry **audit- and curriculum-defensible** primary references anchored on the **official lecture PDF**, the **formula/table PDFs** where inferenz quantiles matter, and the **numbered R spine** (plus **Tutorium** scripts where `module-content` / `curriculum.js` name them).
