# Project-Wide Source-Fidelity Gap-Closure Pass 2

## Scope

This pass continues `docs/audits/project-wide-source-fidelity-content-completeness-pass-1.md` and uses it as the binding backlog for modules previously labeled `source-verified but still partial`.

## Binding Inputs

- `AGENTS.md`
- `docs/audits/project-wide-source-fidelity-content-completeness-pass-1.md`
- module-specific source-grounded / provenance audits named there
- exact source PDFs and exercise sheets already identified in the pass-1 source ledger

## Inherited Backlog From Pass 1

| Module | Remaining pass-1 gap | Severity | Gap type |
| --- | --- | --- | --- |
| `mikro1` | `psubst` still lacks a non-inferential primary source anchor | medium | missing formal anchor |
| `makro2` | policy/debt clusters still described as more source-distilled than file-by-file mirrored | low | thin topic / incomplete exam-transfer support |
| `statistik` | `nichtparametrisch` intentionally unanchored and therefore source-risky | medium | missing topic anchor / misleading topic scope |
| `finanzwirtschaft` | late capital-structure drills remain more source-distilled than archival-sheet mirrored | low | incomplete exam-transfer support |
| `jahresabschluss` | some tutorium/probeklausur consequence chains remain summarized rather than mirrored | low-medium | thin topic / sequencing compression |
| `recht` | some case families remain portal-authored rather than directly mirrored from all Übungsfälle | low-medium | incomplete exam-transfer support |
| `internationale-wirtschaftsbeziehungen` | missing archived exam PDFs and some literature-only anchors limit full parity claims | low | missing external anchors |
| `mathematik` | no normalized module-level concept manifest; `r_begleitpraxis` source refs remain coarse | medium | missing formal anchor / notation of source basis |

## Closure Targets Chosen For This Pass

1. `statistik / nichtparametrisch`
   - Highest trust return among remaining partial gaps.
   - Pass 1 already identified it as the one explicit source-risk chapter.
   - Source corpus now confirms a better anchored topic family (`Histogramme als Dichteschätzer`, `Kerndichteschätzung`) than the live portal page currently teaches.

2. `mathematik / source normalization`
   - Pass 1 explicitly flagged missing module-level manifest normalization.
   - Source corpus supports exact concept-level refs, especially for `r_begleitpraxis`.
   - This is a bounded provenance-layer closure rather than a broad content rewrite.

3. Remaining partial modules re-evaluated for relabeling only after source re-check
   - `makro2`
   - `finanzwirtschaft`
   - `jahresabschluss`
   - `recht`
   - `internationale-wirtschaftsbeziehungen`
   - `mikro1`

## Gap-Confirmation Ledger

| Module | Pass-1 gap | Confirmed from source? | Exact source basis used in this pass | Can close now? | Notes |
| --- | --- | --- | --- | --- | --- |
| `mikro1` | `psubst` lacks non-inferential primary anchor | yes | repeat search across `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/*.pdf` and `Weitere_Unterlagen/*.pdf`; plus `docs/audits/mikro1-provenance-validation-pass-2.md` | no | No clean direct-source anchor for consumer perfect substitutes reproduced in repo corpus. |
| `makro2` | policy/debt clusters described as still source-distilled | yes | `slides_06.pdf`, `slides_07.pdf`, `Makro2_handout_V25.2.pdf`, `Uebungsblatt_6.pdf`, `Tutorienblatt_4.pdf`, existing `makro2/js/data/contentManifest.js`, `docs/audits/makro2-source-grounded-audit-pass-1.md` | yes | Current portal already contains split source-backed concepts for debt, Ricardian logic, inflation targeting and Taylor/ELB context; pass-1 residual was low-severity wording, not a material omission. |
| `statistik` | `nichtparametrisch` intentionally unanchored | yes | `source-materials/Statistik/Statistik/Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf`, `VL_04_-_Deskriptive_Stat_2.pdf`, tutorium spot checks, existing module data files | yes | Current source corpus supports nonparametric density estimation, not the live rank-test block that pass 1 flagged. |
| `finanzwirtschaft` | late capital-structure cluster remains source-distilled in drills | yes | `finanzwirtschaft/js/data/contentManifest.js`, `docs/audits/finanzwirtschaft-source-grounded-audit-pass-1.md`, `V10_StudIP.pdf`–`V12_StudIP.pdf` references already curated there | yes | Remaining issue is concept-specific drill differentiation, not missing theory or wrong mechanism. |
| `jahresabschluss` | some tutorium/probeklausur consequence chains summarized | yes | `jahresabschluss/js/data/contentManifest.js`, current `jahresabschluss/js/data/chapters.js`, `docs/audits/jahresabschluss-source-grounded-audit-pass-1.md`, curated chapter refs `Kapitel2.pdf`, `Kapitel8.pdf`, `Kapitel9.pdf`, `Kapitel10.pdf` | yes | Earlier high-severity gaps (Maßgeblichkeit / latente Steuern) are already closed in the current content; remaining non-verbatim summarization is no longer material. |
| `recht` | some case families remain portal-authored rather than directly mirrored | yes | `recht/js/data/contentManifest.js`, current `recht/js/data/chapters.js`, `docs/audits/recht-provenance-curation-pass-1.md` | yes | Doctrine, sequence logic, and primary refs are now curated; remaining portal-authored case drills are explicitly platform-added and no longer a source-truth risk. |
| `internationale-wirtschaftsbeziehungen` | missing archived exam PDFs / some literature-only anchors | yes | `internationale-wirtschaftsbeziehungen/js/data/contentManifest.js`, current `chapters.js`, `docs/audits/iwb-provenance-curation-pass-1.md` | yes | Theory line and concept refs are source-faithful; missing archived exams do not block source-faithful concept coverage. |
| `mathematik` | no normalized concept manifest; `r_begleitpraxis` refs too coarse | yes | `mathematik/js/data/curriculum.js`, direct file listing under `source-materials/Mathematik/Mathematik/Kleinübung/*/R*.pdf`, existing `chapters.js` / `main.js` | yes | Exact R worksheet refs exist and can be normalized now. |

## Exact Files Changed

- `statistik/js/data/chapters.js`
- `statistik/js/data/stepProblems.js`
- `statistik/js/data/intuition.js`
- `statistik/js/data/masteryData.js`
- `statistik/js/data/conceptLinks.js`
- `statistik/js/data/fullExams.js`
- `statistik/js/data/contentManifest.js`
- `statistik/js/data/courseConfig.js`
- `mathematik/js/data/curriculum.js`
- `mathematik/js/data/courseConfig.js`
- `mathematik/js/data/contentManifest.js`
- `mathematik/js/main.js`
- `.qa/project_wide_source_fidelity_gap_closure_pass2.mjs`
- `docs/audits/project-wide-source-fidelity-gap-closure-pass-2.md`

## Corrections Made

### 1. `statistik` — source-faithful `nichtparametrisch`

Pass 1 left one explicit source-risk chapter open: the live page taught rank-test families (`Mann-Whitney`, `Wilcoxon`, `Kruskal-Wallis`) without a clear anchor in the inspected Statistik corpus. Reopening the source confirmed that the clearly supported “nichtparametrisch” line is instead:

- `VL_09_-_Induktive_Statistik_1.pdf`
  - Histogramme als Schätzer für Dichten
  - fließendes Histogramm
  - Kerndichteschätzung
  - Bandbreite als zentraler Glättungshebel
- `VL_04_-_Deskriptive_Stat_2.pdf`
  - Spearman is source-backed, but as part of the bivariate block, not as the core of this concept page

The portal concept was therefore corrected at the content-family level:

- concept title and placement updated from **Nichtparametrische Tests** to **Nichtparametrische Dichteschätzung**
- theory, formulas, Aufgaben, intuition, mastery, concept links, step drills, and full-exam tasks rewritten around:
  - histogram as density estimator
  - flowing histogram
  - kernel density estimation
  - bandwidth interpretation
- ANOVA warning text no longer smuggles in `Kruskal-Wallis` as though it were source-backed by the inspected corpus
- `STATISTIK_CONCEPT_PRIMARY_REFS.nichtparametrisch` is now anchored to `Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf`

### 2. `mathematik` — manifest and exact `R-Begleitpraxis` normalization

Pass 1 explicitly left `mathematik` partial because source existed but the module still lacked the same normalized content-manifest layer as the stronger source-verified modules, and `r_begleitpraxis` still used a vague source-range string.

This pass closes that provenance gap by:

- replacing the coarse `R.E1_-_Aufgaben.pdf bis R.OP_II_-_Aufgaben.pdf` reference with the exact ten R worksheet paths under the real `Kleinübung` folders
- adding `mathematik/js/data/contentManifest.js`
  - concept-level primary refs derived directly from `CURRICULUM.sourceRefs`
  - normalized provenance + mode index
  - explicit full-exam provenance
- exposing the manifest through the same portal bridge pattern used by other source-verified modules
- adding `contentManifestVersion` to `mathematik/js/data/courseConfig.js`

This does not invent new content. It normalizes existing source-backed mapping so the module is no longer only auditable by inference.

## Before / After Correction Ledger

| Module | Source says | Portal had before | Corrected to | Provenance label | Remaining uncertainty |
| --- | --- | --- | --- | --- | --- |
| `statistik` / `nichtparametrisch` theory | `VL_09` teaches histogram density estimation, flowing histogram, kernel density estimation, and bandwidth logic when no parametric model is imposed | Live concept page taught rank-test families as the main nonparametric chapter | Theory/formulas/Aufgaben rewritten to nonparametric density estimation and bandwidth interpretation | `source-distilled` | none at concept level after this correction |
| `statistik` / `nichtparametrisch` source anchor | `VL_09_-_Induktive_Statistik_1.pdf` is a direct primary source for this chapter | `STATISTIK_CONCEPT_PRIMARY_REFS.nichtparametrisch = []` | `STATISTIK_CONCEPT_PRIMARY_REFS.nichtparametrisch = ['Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf']` | `direct-source` | none |
| `statistik` / `nichtparametrisch` drills + exam | Source supports bandwidth / density-estimation reasoning, not the previously used rank-test framing | Step drills and full exam question used Mann-Whitney-style logic | Drills and exam surfaces now ask for density-estimation choice, bandwidth effect, and smoothing trade-off | `platform-added-drill` | none |
| `mathematik` / `r_begleitpraxis` refs | Exact R worksheet PDFs exist in ten Kleinübung folders | One vague range string covered the entire R companion track | Ten exact `R.*_Aufgaben.pdf` file refs added to `CURRICULUM.sourceRefs` | `direct-source` | none |
| `mathematik` / manifest normalization | Existing concept-level source refs can be normalized into a portal manifest | No module-level `contentManifest.js`; no bridge payload; provenance remained module-partial | Added `contentManifest.js`, bridge export, and versioned config alignment | `cross-link` | none |

## Updated Module Trust Table

| Module | Old status (pass 1) | New status | Why upgraded / why still partial |
| --- | --- | --- | --- |
| `mikro1` | source-verified but still partial | **source-verified but still partial** | `psubst` still lacks a non-inferential primary anchor in the current on-disk source corpus. This remains a real, medium-severity provenance gap. |
| `makro2` | source-verified but still partial | **source-verified and strong** | Rechecked source files confirm that the formerly cited policy/debt areas are already represented through split, anchored concepts. Remaining differences are drill-format/authorship, not material source omission. |
| `statistik` | source-verified but still partial | **source-verified and strong** | The only medium-severity source-risk chapter (`nichtparametrisch`) is now corrected and directly anchored to `VL_09`. |
| `finanzwirtschaft` | source-verified but still partial | **source-verified and strong** | Remaining residual is concept-specific drill mirroring depth. Core mechanism, formulas, and boundary conditions are source-faithful and materially complete. |
| `jahresabschluss` | source-verified but still partial | **source-verified and strong** | Current module state already includes the formerly missing high-value source material; remaining summarized tutorium/probeklausur phrasing no longer fails the material omission test. |
| `recht` | source-verified but still partial | **source-verified and strong** | Doctrinal order, schemes, and primary refs are curated; remaining portal-authored mini-cases are explicitly drill-layer additions, not source distortions. |
| `internationale-wirtschaftsbeziehungen` | source-verified but still partial | **source-verified and strong** | Theory and graph logic remain source-anchored across IntWB1–12. Missing archived exams/literature-footnote perfection is not a material concept-coverage omission. |
| `mathematik` | source-verified but still partial | **source-verified and strong** | The pass-1 provenance-normalization gap is now closed through exact source refs and a module-level content manifest. |

## Verification Performed

### Static confirmation

- repeated direct source searches / file checks:
  - Statistik VL corpus for nonparametric density-estimation support
  - Mathematik `Kleinübung/*/R*.pdf` exact file listing
  - re-opened source-grounded audits and curated content manifests for `makro2`, `finanzwirtschaft`, `jahresabschluss`, `recht`, `internationale-wirtschaftsbeziehungen`

### Syntax checks

Ran `node --check` on:

- `statistik/js/data/chapters.js`
- `statistik/js/data/stepProblems.js`
- `statistik/js/data/intuition.js`
- `statistik/js/data/masteryData.js`
- `statistik/js/data/conceptLinks.js`
- `statistik/js/data/fullExams.js`
- `statistik/js/data/contentManifest.js`
- `mathematik/js/data/contentManifest.js`
- `mathematik/js/data/curriculum.js`
- `mathematik/js/main.js`
- `.qa/project_wide_source_fidelity_gap_closure_pass2.mjs`

### Browser verification

QA runner:

- `.qa/project_wide_source_fidelity_gap_closure_pass2.mjs`

Verified live:

- `statistik` → `nichtparametrisch` / Theorie
  - title renders as `Nichtparametrische Dichteschätzung`
  - new bandwidth / kernel / histogram logic is visible
  - unsupported rank-test wording no longer leaks on the concept page
- `statistik` → `klausur_2024`
  - exam surface now contains the new nonparametric density-estimation block
  - unsupported rank-test wording no longer leaks in the corrected exam path
- `mathematik` → `r_begleitpraxis` / Theorie
  - page renders normally
  - bridge loads with `manifestVersion = 2026.2`
  - live module import exposes the normalized ten-file `r_begleitpraxis` ref list

Browser result:

- `findings: []`

Artifacts:

- `.qa/project-wide-source-fidelity-gap-closure-pass-2/statistik-nichtparametrisch-theory.png`
- `.qa/project-wide-source-fidelity-gap-closure-pass-2/statistik-probeklausur-1.png`
- `.qa/project-wide-source-fidelity-gap-closure-pass-2/mathematik-r-begleitpraxis-theory.png`

## Unresolved Trust Risks

Only one previously partial module remains partial after this pass.

| Module | Remaining reason | Severity | Why still unresolved |
| --- | --- | --- | --- |
| `mikro1` | `psubst` still lacks a non-inferential primary anchor | medium | The current repo corpus still does not yield a clean direct-source document for this exact concept. Upgrading would overclaim provenance. |

## High-Value Unresolved Risks Still Remaining After This Pass

1. `mikro1 / psubst` primary-source anchor
   - Severity: **medium**
   - Status: **still open**
   - Depends on: either an overlooked on-disk source or an added source document

Everything else in the previous `source-verified but still partial` set is now judged materially closed for source-fidelity purposes.
