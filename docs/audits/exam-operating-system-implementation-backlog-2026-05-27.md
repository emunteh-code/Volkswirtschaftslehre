# Exam Operating System Implementation Backlog — 2026-05-27

This backlog translates the current-state audit and architecture spec into execution tickets. It is intentionally source-first: no module can be declared all-encompassing before its official corpus, task bank, provenance, and adaptive mastery gates are complete.

## P0 — Corpus Recovery and Resolution

### EOS-P0-001 — Resolve Missing Official Corpora

Status after `Module.zip` ingest: **complete for manifest-referenced curated module files**. The generated audit now reports `missingSourceFiles: 0` for every curated module. Remaining source work moves to registry creation, page/slide/task extraction, and source-item coverage review.

Goal: make all referenced source files physically available or explicitly unavailable.

Acceptance:

- Every file referenced in `*/js/data/contentManifest.js` exists under `source-materials/` or is listed in a missing-source registry.
- `node tools/exam-os/audit-current-state.mjs --write` reports `missingSourceFiles: 0` for every module or a documented waiver.
- Source folders are organized by module and source kind: lectures, exercises, tutorials, solutions, exams, supplements, code, datasets.

Initial blockers from the pre-ingest generated audit are now resolved:

| Module | Missing referenced source files |
|---|---:|
| `mikro1` | 0 |
| `mikro2` | 0 |
| `makro1` | 0 |
| `makro2` | 0 |
| `oekonometrie` | 0 |
| `statistik` | 0 |
| `finanzwirtschaft` | 0 |
| `mathematik` | 0 |
| `jahresabschluss` | 0 |
| `recht` | 0 |
| `internationale-wirtschaftsbeziehungen` | 0 |

### EOS-P0-002 — Source Document Registry

Goal: create one registry per module using `docs/architecture/exam-operating-system-schema.json`.

Acceptance:

- Each source document has `id`, `module`, `kind`, `title`, `path`, hash, page count, and extraction status.
- Missing or ambiguous documents are represented as records, not oral knowledge.
- Registry generation is deterministic and can be checked in CI.

### EOS-P0-003 — Source Status Honesty Gate

Goal: prevent inflated trust claims.

Acceptance:

- No `direct-source` claim exists without a source anchor.
- No `source-distilled` claim exists without at least one local source file or an explicit missing-source warning.
- Platform-added drills remain visibly platform-added.

## P1 — Mikro2 Reconstruction from Supplied Corpus

### EOS-P1-101 — Build Mikro2 Source Index

Goal: index the supplied Mikro2 PDFs and CDFs at page/slide/task level.

Acceptance:

- `Mikro_2_1.pdf` through `Mikro2_20.pdf` are represented in the source document registry.
- Each lecture PDF has extracted page text, topic headings, formula candidates, graph candidates, and task/example candidates.
- CDF files are catalogued as interactive supplements.

### EOS-P1-102 — Rebuild Mikro2 Concept Map

Goal: replace the 13-concept partial module with a full lecture-sequence concept map.

Required official blocks:

- Monopoly pricing and welfare.
- First-, second-, and third-degree price discrimination.
- Stackelberg, Cournot, Bertrand, differentiated goods, collusion.
- Static and dynamic game theory.
- Intertemporal consumption.
- Expected utility, risk aversion, insurance.
- General equilibrium: Robinson Crusoe, exchange, production, welfare theorems.
- Asymmetric information: moral hazard, adverse selection, signalling, principal-agent, lemons, manager compensation.

Acceptance:

- Every lecture maps to one or more concepts.
- Every current unanchored concept is either removed, relabeled as platform-added support, or backed by a direct source.
- Mikro2 remains hidden until source/task/provenance gates pass.

### EOS-P1-103 — Mikro2 Formula and Task Bank

Goal: convert Mikro2 official formulas and examples into formula cards and task families.

Acceptance:

- Every major formula has official notation, derivation, assumptions, common mistakes, and source anchors.
- Every official exercise/example/probeklausur-style item from the supplied corpus is mapped or marked uncovered.
- Timed Mikro2 exam templates exist only after official exam format is known.

## P1 — Cross-Module Source Anchoring

### EOS-P1-201 — Anchor Current Concepts

Goal: upgrade file-level provenance to page/slide/task anchors.

Acceptance:

- Each concept has direct anchors for motivation/theory/formulas where possible.
- Concepts without direct anchors are flagged as platform-added or missing-source.
- Generated report includes anchor coverage per module.

### EOS-P1-202 — Formula Inventory and Cards

Goal: extract every important quantitative or doctrinal rule/formula.

Acceptance:

- Formula cards exist for all exam-relevant formulas.
- Each card includes assumptions, failure cases, derivation/proof where relevant, related tasks, and source anchors.
- Doctrinal modules use rule cards equivalent to formula cards.

### EOS-P1-203 — Official Task Archive

Goal: separate official tasks from platform-authored practice.

Acceptance:

- Official exercises, tutorials, solution keys, probeklausuren, old exams, code exercises, and datasets are represented as task-bank records.
- Every task has topic, concept, method, difficulty, expected time, source, formulas/rules, traps, solution route, and rubric.
- Platform-generated variants link back to task families, not to fake official tasks.

## P2 — Provenance UI and Companion Mode

### EOS-P2-301 — Item-Level Provenance Inspector

Goal: students can inspect the source status of any learning object.

Acceptance:

- Provenance trigger appears on concepts, formulas/rules, tasks, warnings, derivations, graph panels, and full exam tasks.
- Inspector shows source file, locator, status, confidence, exam-proven flag, last reviewed date, and missing-source warnings.
- Direct-source items can open official material in companion mode.

### EOS-P2-302 — Official Material Companion Mode

Goal: official PDFs/scripts become navigable study surfaces.

Acceptance:

- Student can open a lecture/exercise/tutorial/exam and see linked portal items.
- Student can practice all tasks from one selected official sheet.
- Student can ask "what from this source is not covered yet?"
- Coverage comparison is generated from source-item fingerprints and reviewed anchors.

## P2 — Adaptive Mastery

### EOS-P2-401 — Learner Evidence Model

Goal: replace checklist-only mastery with evidence-based readiness.

Acceptance:

- Every answer event stores concept, task family, formula/rule, skill dimension, result, score, time, and source context.
- Mistakes feed recognition, calculation, derivation, and transfer scores separately.
- Existing checklist mastery remains available but no longer acts as the only readiness signal.

### EOS-P2-402 — Diagnostic Tests

Goal: place students into a module-specific study plan.

Acceptance:

- Each module has a 20-40 minute diagnostic.
- Diagnostic samples concept categories and skill dimensions.
- Output is a weak-topic plan with source-backed lessons and task families.

### EOS-P2-403 — Exam Readiness Score

Goal: give honest readiness, not vibes.

Acceptance:

- Readiness score combines skill dimensions, task-family coverage, recency, stability, and mixed-exam performance.
- `a_plus_ready` requires repeated mixed-exam stability, not one lucky run.
- Low-confidence source areas lower readiness until reviewed.

## P3 — Module Equality Gate

### EOS-P3-501 — Equality Certification

Goal: enforce one standard across modules.

Acceptance:

- Every module reports yes/no for source-complete, exam-bank-complete, provenance-complete, adaptive-ready, and Mikro1-depth achieved.
- Landing/status copy reflects certification state.
- Hidden modules cannot become public until they pass the same gate as live modules.

## Immediate Next Build Order

1. Finish source registry and generated source-resolution registry.
2. Build Mikro2 source index from the supplied official corpus.
3. Reconstruct Mikro2 concept map and formula cards from all 20 lectures.
4. Add anchor-level provenance data structures and generated coverage checks.
5. Expand official task-bank schema into real module data.
6. Add provenance inspector UI.
7. Add companion mode.
8. Add adaptive mastery evidence model and diagnostics.
