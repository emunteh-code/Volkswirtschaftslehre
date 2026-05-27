# Mikro2 Task-Family Taxonomy Pass 6 - 2026-05-27

## Finding

Mikro2 now has official lecture-source anchors and a first formula-card layer, but the practice system still treats task coverage mainly as counts of portal tasks, step drills, and one mock exam. That is not enough for an exam operating system because it does not expose which exam-relevant task families are source-grounded, which are represented by portal-authored drills, and which still lack official exercise or old-exam coverage.

## Scope

This pass establishes a Mikro2 task-family taxonomy. It is intentionally not labeled as an exhaustive official exam bank. The official Mikro2 corpus currently available in this repository contains lecture PDFs, supporting literature, and CDF files, but no complete official exercise-sheet / solution-key / old-exam archive for Mikro2.

## Implementation Target

- Add a data layer for source-grounded Mikro2 task families.
- Attach each family to concept ids, source-anchor ids, method labels, expected time, exam relevance, required formulas, traps, and grading focus.
- Mark official task coverage honestly as missing where no official exercise or old-exam source is present.
- Surface the taxonomy inside the practice tab so students see what kind of task family they are training.
- Extend the audit so task-family coverage is counted separately from raw portal task blocks.

## Definition of Done for This Pass

- Every taxonomy entry has a source status.
- Every direct-source taxonomy entry references existing Mikro2 source anchors.
- No entry claims to be an official exercise unless backed by an official task source.
- Current-state audit reports task-family counts.

## Implemented

- Added 12 Mikro2 task-family records across monopoly, price discrimination, Cournot/Bertrand, Stackelberg, intertemporal choice, uncertainty, general equilibrium, production efficiency, adverse selection, and moral hazard.
- Surfaced task-family cards inside the practice tab for covered concepts.
- Added current portal coverage notes and explicit official-task-source gap warnings.
- Extended the generated audit with task-family counts, source-grounded task-family counts, and official-task-source-family counts.

## Validation

- All task-family records carry a source status.
- All task-family source anchors resolve to existing Mikro2 source anchors.
- JavaScript syntax checks passed for the shared renderer, Mikro2 renderer, Mikro2 task-family data, and current-state audit script.

## Changed Files

- `assets/css/premium-refinement.css`
- `assets/js/portal-core/ui/renderer.js`
- `mikro2/js/data/taskFamilies.js`
- `mikro2/js/ui/renderer.js`
- `tools/exam-os/audit-current-state.mjs`
- `docs/audits/exam-operating-system-current-state.generated.json`
- `docs/audits/exam-operating-system-current-state.generated.md`
- `docs/audits/mikro2-task-family-taxonomy-pass-6-2026-05-27.md`
