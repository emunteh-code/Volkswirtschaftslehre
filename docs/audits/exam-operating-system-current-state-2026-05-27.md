# Exam Operating System Current-State Audit — 2026-05-27

> **Update after Module.zip ingest:** The original audit began when only Mikro II was present locally. After staging `/Users/enowmunteh/Documents/Lernportal/Module.zip`, `source-materials/` now contains 692 source files across the curated modules, and the generated audit reports `missingSourceFiles: 0` for every curated module manifest. Use `docs/audits/exam-operating-system-current-state.generated.md` / `.json` as the live machine-readable snapshot.

## Executive Judgment

The portal is an excellent learning cockpit, but it is not yet an all-encompassing exam operating system. The strongest current benchmark remains `mikro1`: high concept granularity, dense formula/theory coverage, custom graph and exam-transfer surfaces, mistake review, mastery checklists, full-exam mode, and curated concept-level file provenance.

The main blocker is not visual polish. The blocker is source completeness, task exhaustiveness, precise provenance, and module equality:

- `source-materials/` now contains local source corpora for the curated modules after the `Module.zip` ingest.
- All curated module manifests now resolve their referenced source filenames locally; the remaining work is page/slide/task-level extraction, official task-bank exhaustiveness, and human/agent review.
- Most modules have file-level provenance and platform-authored drills; few have page/slide/task-level anchors.
- Full exams are mostly platform-authored mock exams, not exhaustive official exam archives.
- Mastery exists as checklists and derived dashboard metrics, but not yet as a diagnostic/adaptive learner model across recognition, calculation, derivation, and transfer.

## Modules In Scope

Curated course modules from `assets/js/modules.js`:

| Module | Status | Trusted core? | Concepts | Formula blocks | Portal task blocks | Step drills | Mock exams | Mastery items | Concepts with source refs | Local source files present? |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| `mikro1` | live | yes | 33 | 480 | 109 | 39 | 2 | 132 | 32/33 | no |
| `mikro2` | hidden | no | 13 | 73 | 37 | 28 | 1 | 52 | 10/13 | yes |
| `makro1` | live | no | 14 | 158 | 49 | 36 | 3 | 56 | 14/14 | no |
| `makro2` | live | no | 30 | 234 | 78 | 64 | 3 | 132 | 30/30 | no |
| `oekonometrie` | live | yes | 32 | 175 | 40 | 70 | 3 | 128 | 32/32 | no |
| `statistik` | live | yes | 14 | 201 | 65 | 32 | 3 | 56 | 14/14 | no |
| `finanzwirtschaft` | live | no | 19 | 236 | 64 | 56 | 3 | 57 | 19/19 | no |
| `mathematik` | live | no | 14 | 332 | 33 | 28 | 3 | 56 | 14/14 | no |
| `jahresabschluss` | live | no | 15 | 108 | 42 | 35 | 3 | 45 | 15/15 | no |
| `recht` | live | yes | 14 | 284 | 48 | 39 | 3 | 51 | 14/14 | no |
| `internationale-wirtschaftsbeziehungen` | live | no | 16 | 132 | 41 | 32 | 3 | 48 | 16/16 | no |

Generated routes `r/` and `politisches-system-brd/` are present but are not curated module-stack equals. They should remain outside Mikro1-level equality scoring unless promoted into the curated module model.

## Source Corpus Inventory

### Present Locally

Generated source-tree inventory after `Module.zip` ingest:

| Top-level source folder | Files |
|---|---:|
| `Finanzwirtschaft` | 12 |
| `Internationale Wirtschaftsbeziehungen` | 20 |
| `Jahresabschluss` | 34 |
| `Makroökonomik I` | 49 |
| `Makroökonomik II` | 32 |
| `Mathematik` | 52 |
| `Mikroökonomik I` | 54 |
| `Mikroökonomik II` | 31 |
| `Ökonometrie` | 70 |
| `Politikwissenschaft` | 14 |
| `Politisches System BRD` | 27 |
| `R` | 30 |
| `Recht` | 30 |
| `Statistik` | 237 |

### Referenced Source Resolution

The following counts compare each `contentManifest.js` source reference against the local `source-materials/` tree by Unicode-normalized basename.

| Module | Unique referenced source files | Present locally | Missing locally | Next gate |
|---|---:|---:|---:|---|
| `mikro1` | 19 | 19 | 0 | Page/slide/task anchors |
| `mikro2` | 18 | 18 | 0 | Full 20-lecture reconstruction |
| `makro1` | 21 | 21 | 0 | Page/slide/task anchors |
| `makro2` | 25 | 25 | 0 | Page/slide/task anchors |
| `oekonometrie` | 19 | 19 | 0 | Script/task/dataset anchors |
| `statistik` | 18 | 18 | 0 | Page/task anchors |
| `finanzwirtschaft` | 12 | 12 | 0 | Page/task anchors |
| `mathematik` | 30 | 30 | 0 | Page/task anchors |
| `jahresabschluss` | 12 | 12 | 0 | Section/task/legal anchors |
| `recht` | 17 | 17 | 0 | Section/case/rule anchors |
| `internationale-wirtschaftsbeziehungen` | 14 | 14 | 0 | Page/task anchors |

## Module-by-Module Coverage Report

### `mikro1`

Strengths: benchmark density, 33 concepts, highest formula/task density, custom graph surface, full exam mode, mistake review, mastery checklists, source manifest, strong right-rail support.

Gaps:

- One concept lacks refs in the current manifest.
- Referenced local source files are now present, so source verification can proceed.
- Current provenance is file-level, not slide/page/task-level.
- Mock exams are platform-authored benchmark drills, not exhaustive official archived exams.

Status: Mikro1-depth achieved as a learning cockpit; not source-complete in this workspace until official files and page/task anchors are present.

### `mikro2`

Strengths: official source corpus now present locally, all portal features exist, and 10/13 current concepts have primary refs.

Gaps:

- Hidden module, not public.
- Current content has only 13 concepts versus a 20-lecture official sequence.
- `externa_pigou`, `externa_institutionen`, and `public_goods` are platform-added/unanchored relative to the supplied Mikro II corpus.
- Underrepresented official blocks: monopoly and price discrimination, intertemporal consumption, uncertainty/insurance, production-side general equilibrium, full adverse-selection/signalling sequence, manager compensation.
- Only one mock exam; no exhaustive official exercise/tutorial/exam archive.
- Source mapping is file-level, not page/slide/task-level.

Status: source corpus present; partial source-backed module; not Mikro1-depth.

### `makro1`

Strengths: live module, all concepts have manifest refs, full exam mode, step drills, mastery, mistake review, dashboard and right rail.

Gaps:

- Referenced official files are now local.
- Needs direct lecture/exercise/exam ingestion beyond file-level manifest claims.
- Needs formula cards, task-family taxonomy, and official exam archive mapping.

Status: strong cockpit module; not exam-OS complete.

### `makro2`

Strengths: 30 concepts, 64 step drills, 132 mastery items, 3 mock exams, broad source-ref coverage in manifest.

Gaps:

- Referenced official files are now local.
- Provenance is file-level only.
- Platform mock exams are not a complete official exam bank.
- Needs page-level source anchors and task-to-source reconciliation.

Status: near benchmark on concept breadth; blocked on source corpus verification and task exhaustiveness.

### `oekonometrie`

Strengths: trusted core, 32 concepts, 70 step drills, R-focused structure, 3 mock exams, strong portal stack.

Gaps:

- Referenced lecture/R/formula files are now local.
- Needs official R script/task linkage, dataset lineage, command-output rubrics, and exam task families.
- Needs direct distinction between code-recognition, model-derivation, inference interpretation, and transfer.

Status: strong core module; not source-auditable in this checkout.

### `statistik`

Strengths: trusted core, graph checks, 201 formula blocks, 3 mock exams, source manifest, full shared portal stack.

Gaps:

- Referenced official files are now local.
- Formula and task coverage must be mapped to official sheets/tutorials/exams.
- Needs exhaustive probability/distribution/inference task taxonomy and grading rubrics.

Status: strong cockpit module; not exam-bank complete.

### `finanzwirtschaft`

Strengths: high formula density, 56 step drills, 3 mock exams, source manifest.

Gaps:

- Referenced source files are now local.
- Needs official solution-route and points-rubric capture for NPV, annuities, bonds, portfolios, CAPM, financing decisions.
- Needs direct source anchors for formula variants and assumptions.

Status: content-rich; not source-complete or grading-complete.

### `mathematik`

Strengths: very high formula density, 3 mock exams, source manifest, full portal stack.

Gaps:

- Referenced source files are now local.
- Needs proof/derivation cards and official notation normalization across algebra, linear algebra, calculus, optimization.
- Needs generated variants tied to exact official task families.

Status: formula-heavy; not provenance-complete.

### `jahresabschluss`

Strengths: live module with right rail, mastery, mistake review, mock exams, and HGB-oriented source manifest.

Gaps:

- Referenced source files are now local.
- Provenance notes explicitly state no folio/slide anchors.
- Needs official booking/bilanzierung task archive, legal-section anchors, and solution-key point allocation.

Status: useful cockpit; needs legal/source precision and exhaustive task mapping.

### `recht`

Strengths: trusted core, doctrinal structure, 3 mock exams, mistake review, mastery, source manifest.

Gaps:

- Referenced source files are now local.
- Needs exact paragraph/source anchors, case/task family taxonomy, Gutachtenstil grading checklist, and official solution-key phrasing.

Status: trusted core for learning; not yet complete exam operating system.

### `internationale-wirtschaftsbeziehungen`

Strengths: source manifest, full shared portal features, mixed quant/verbal topic spread.

Gaps:

- Referenced source files are now local.
- Needs official graph conventions, trade model derivation cards, policy/trap phrasing, and old-exam task archive.

Status: useful cockpit; source and exam archive incomplete.

## Gap Matrix Against Mikro1

Legend: `A` = benchmark/near benchmark, `B` = strong but incomplete, `C` = partial, `D` = blocked.

| Module | Concept granularity | Formula depth | Task depth | Source files local | Provenance precision | Mock/exam coverage | Adaptive mastery | Mikro1-depth status |
|---|---|---|---|---|---|---|---|---|
| `mikro1` | A | A | A | D | B | B | B | benchmark cockpit, not source-complete locally |
| `mikro2` | C | C | C | A | C | C | B | not achieved |
| `makro1` | B | B | B | D | C | B | B | not achieved |
| `makro2` | A | B | B | D | C | B | B | near, blocked by sources |
| `oekonometrie` | A | B | B | D | C | B | B | near, blocked by sources and R-task provenance |
| `statistik` | B | A | B | D | C | B | B | near, blocked by sources/exam archive |
| `finanzwirtschaft` | B | A | B | D | C | B | B | not achieved |
| `mathematik` | B | A | C | D | C | B | B | not achieved |
| `jahresabschluss` | B | B | B | D | C | B | B | not achieved |
| `recht` | B | A | B | D | C | B | B | near, blocked by sources/rubrics |
| `internationale-wirtschaftsbeziehungen` | B | B | B | D | C | B | B | not achieved |

## Source-Distilled Claims Needing Hardening

These are not necessarily wrong, but they are not sufficient for an exam operating system:

- Any manifest layer using `source-distilled` with only file-level refs must be upgraded to `direct-source` or precise `source-distilled` records with page/slide/task anchors once the official file is local.
- All curated module manifests now resolve local source files. The claims are structurally useful and verifiable at file level, but still need page/slide/task anchor review before they can become exam-OS-grade provenance.
- Platform-authored mock exams must remain `platform-added-drill` unless a task is copied or structurally mapped to an official exam/probeklausur task.
- Graph panels should remain `platform-added-explanation` unless the exact figure is traceable to an official source.

## Prioritized Source Work

P0, required before module equality can be claimed:

1. Build source-document registries from the now-local source corpora.
2. Build page/slide/task extraction indexes for all PDF/R/script sources.
3. Separate official exercises, tutorial sheets, solution keys, Probeklausuren, old exams, and platform-added drills in the task bank.

P1:

1. Mikro2 page/slide/task extraction index from the newly supplied official corpus.
2. Mikro2 full reconstruction against all 20 lectures.
3. Old Mikro2 exercises/tutorials/exams if they exist outside the supplied folders.

P2:

1. Professor/course style guides per module.
2. Trap-phrase libraries and grading rubrics.
3. Companion-mode PDF navigation assets.

## Release Readiness Scorecard

| Module | Source-complete | Exam-bank-complete | Provenance-complete | Adaptive-ready | Mikro1-depth achieved |
|---|---|---|---|---|---|
| `mikro1` | local refs resolved; not anchor-complete | no | no, file-level | partial | learning depth yes; exam-OS no |
| `mikro2` | partial | no | no | partial | no |
| `makro1` | no | no | no | partial | no |
| `makro2` | no | no | no | partial | no |
| `oekonometrie` | no | no | no | partial | no |
| `statistik` | no | no | no | partial | no |
| `finanzwirtschaft` | no | no | no | partial | no |
| `mathematik` | no | no | no | partial | no |
| `jahresabschluss` | no | no | no | partial | no |
| `recht` | no | no | no | partial | no |
| `internationale-wirtschaftsbeziehungen` | no | no | no | partial | no |

## Acceptance Gate

No module should be labeled all-encompassing until all five are true:

1. Complete official source corpus is local and indexed.
2. Every source item is mapped to concepts/tasks/formulas or explicitly marked uncovered.
3. Every portal item has item-level provenance.
4. Every major official task family has timed exam practice, solution routes, common wrong paths, and grading rubrics.
5. Adaptive mastery distinguishes recognition, calculation, derivation, and transfer.
