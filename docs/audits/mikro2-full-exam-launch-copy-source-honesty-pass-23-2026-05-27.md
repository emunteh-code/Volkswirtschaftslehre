# Mikro2 Full Exam Launch Copy Source Honesty Pass 23

Date: 2026-05-27

## Audit Finding

Pass 22 added visible provenance notices inside the Mikro2 timed exam picker and live exam view. Two earlier launch strings still remained too strong for Mikro2's current source state:

- Home card: `Vollständige Klausursets mit Lösungen`
- Picker intro: `Wähle eine vollständige Probeklausur.`

Those strings are appropriate for modules with actual official exam/probeklausur sources, but Mikro2 currently has no official task/exam archive in the source registry.

## Plan

- Keep the shared defaults for other modules.
- Add optional shared copy hooks for modules that need more precise exam-mode wording.
- Configure Mikro2 to describe the timed mode as portal simulations with visible source status.

## Implementation

- `assets/js/portal-core/ui/renderer.js`
  - adds optional `fullExamHomeDescription`
  - keeps the old default for modules that do not override it

- `assets/js/portal-core/features/fullExam.js`
  - adds optional `examSelectIntro`
  - keeps the old default picker intro for modules that do not override it

- `mikro2/js/data/courseConfig.js`
  - adds source-honest Mikro2 copy for the home card and picker intro

- `mikro2/js/ui/renderer.js`
  - passes the Mikro2 home-card copy into the shared renderer

- `mikro2/js/features/fullExam.js`
  - passes the Mikro2 picker intro into the shared full-exam module

## Source-Fidelity Decision

No exam content or scoring logic changed. This pass only prevents Mikro2's timed mode from being framed as a complete official Probeklausur set before the official exam-task corpus exists.

## Remaining Gaps

- The current timed exam remains a portal-authored simulation.
- Official Mikro2 Probeklausuren, Altklausuren, Übungsblätter, and Lösungsschlüssel are still required for exam-bank completeness.
