# Mikro2 Task Card Official Evidence Badges Pass 20

Date: 2026-05-27

## Audit Finding

The Mikro2 task-family layer correctly stores two different facts:

- the family is grounded in official lecture/source anchors via `sourceStatus`
- the family is not yet reconstructed from official exercise sheets, solutions, tutorium tasks, Probeklausuren, or old exams via `officialTaskCoverage`

Before this pass, the task-family card surfaced `direct-source` as the leading badge and placed the official task gap only as a warning paragraph at the bottom. That was truthful in data terms, but too easy for a student to misread as official exercise-bank coverage.

## Plan

- Split task-family status into two compact badges:
  - lecture/source grounding
  - official task evidence
- Keep the existing detailed official-task-gap warning.
- Make the rendering optional/generic in the shared renderer so modules without `officialTaskCoverage` are unaffected.

## Implementation

- `assets/js/portal-core/ui/renderer.js`
  - adds readable labels for task-family source status and official task coverage
  - renders a badge row instead of a single ambiguous `direct-source` label

- `assets/css/premium-refinement.css`
  - styles task-family badge rows
  - gives missing official task evidence a distinct warning color

## Source-Fidelity Decision

No Mikro2 academic task content was added or changed. This pass only makes the provenance distinction harder to miss at the exact point where students start practicing.

## Remaining Gaps

- Mikro2 still has 12 source-grounded task families and 0 official-task-source families.
- The next substantive content pass requires actual official task sources, or a formal decision to keep these families as platform-authored practice.
