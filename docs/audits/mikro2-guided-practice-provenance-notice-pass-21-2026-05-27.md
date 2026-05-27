# Mikro2 Guided Practice Provenance Notice Pass 21

Date: 2026-05-27

## Audit Finding

Mikro2 now separates lecture-source grounding from official task evidence in task-family cards. The remaining practice-surface risk was the generated `Geführte Aufgaben` block: students could start solving portal-authored drills without seeing the task-layer provenance until the generic footer or task-family warning.

The Mikro2 manifest already classifies the `tasks` layer as `platform-added-drill`. For source-backed topics it keeps lecture refs and page anchors; for supplemental topics it has no direct official refs. The UI needed to expose that distinction directly inside the Aufgaben panel.

## Plan

- Read the active concept's `tasks` provenance layer from the existing manifest hook.
- Render an `Aufgabenstatus` notice before task families and guided tasks.
- Show:
  - the task-layer source status
  - the manifest note
  - the available evidence count: page anchors, source refs, or no direct anchor
- Keep this generic and optional so modules without task provenance are unaffected.

## Implementation

- `assets/js/portal-core/ui/renderer.js`
  - adds `renderPracticeSourceNotice(conceptId)`
  - inserts the notice at the top of the Aufgaben panel, including the no-guided-task fallback path

- `assets/css/premium-refinement.css`
  - adds compact responsive styling for `.practice-source-notice`
  - highlights `platform-added-drill` with the same warning tone used for missing official evidence

## Source-Fidelity Decision

No exercise content, formulas, or solutions were changed. This pass only makes the existing task-layer provenance visible at the moment of practice.

## Remaining Gaps

- Mikro2 still lacks official Übungsblätter, Lösungsschlüssel, Tutorien, Probeklausuren, and old exams.
- Existing generated practice remains useful as platform-authored training, but it is not an official task archive.
