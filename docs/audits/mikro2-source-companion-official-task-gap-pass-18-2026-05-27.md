# Mikro2 Source Companion Official Task Gap Pass 18

Date: 2026-05-27

## Audit Finding

The Mikro2 source companion already shows lecture coverage and unanchored supplemental portal concepts, but it did not yet expose the official task-bank blocker with the same prominence. The generated source registry currently lists 31 Mikro2 documents:

| Kind | Count |
|---|---:|
| lecture-slide | 22 |
| supplement | 7 |
| dataset | 2 |
| exercise | 0 |
| solution | 0 |
| tutorial | 0 |
| exam | 0 |

The task-family layer contains 12 source-grounded exam-pattern families, but none have `officialTaskCoverage: official-task-source`. This means the portal can offer prüfungsnah practice, but it cannot honestly claim exhaustive official task-bank parity for Mikro2.

## Plan

- Add a first-class official task-bank status panel to the Mikro2 source companion.
- Show the missing source kinds explicitly: Übungsblätter, Lösungsschlüssel, Tutorien, Klausuren / Probeklausuren.
- List every task family that remains source-grounded but not official-task sourced.
- Link each missing-official-task family back to its portal concept, without adding dead PDF-open buttons or implying that local source files are deployed.

## Implementation

- `mikro2/js/features/sourceCompanion.js`
  - imports `TASK_FAMILIES`
  - computes official task-document presence from the generated source registry
  - computes task families with and without official task-source evidence
  - renders a dedicated `Official Task Bank` panel below source-boundary warnings

- `assets/css/premium-refinement.css`
  - adds visual treatment for the official-task gap panel
  - keeps the panel dense and scannable while preserving existing companion layout conventions

## Source-Fidelity Decision

No new academic task content was authored in this pass. The change only exposes a provenance/readiness boundary that already exists in the data:

- source-grounded task families remain useful
- missing official exercise/solution/exam archive remains a release blocker
- Mikro2 remains not A+ certified until direct official task evidence exists

## Remaining Gaps

- Official Mikro2 exercise sheets, solution keys, tutorium tasks, Probeklausuren, or old exams still need to be supplied or discovered.
- Once those sources exist, each task family must be upgraded from source-grounded taxonomy to direct official task records with task/page anchors, solution routes, traps, and rubrics.
