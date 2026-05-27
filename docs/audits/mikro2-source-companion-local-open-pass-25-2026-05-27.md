# Mikro2 Source Companion Local Open Pass 25

Date: 2026-05-27

## Audit Finding

The Mikro2 source companion listed official documents and mapped portal concepts, but the document detail panel still stated that PDF opening was intentionally not implemented. That was too weak for the official-material companion goal: a student or reviewer using the portal locally should be able to jump from the source browser to the referenced official file when the local `source-materials/Mikroökonomik II/` corpus is present.

At the same time, `source-materials/` is git-ignored, so a deployed build may not have the PDFs. A direct always-on link could become a dead action outside the local workspace.

## Plan

- Keep the source companion honest about local-only source availability.
- Add a checked open action that verifies whether the selected source file is reachable before opening it.
- Show a clear status message when the file is unavailable instead of leaving a dead button.
- Avoid changing source mappings, academic claims, or task coverage.

## Implementation

- `mikro2/js/features/sourceCompanion.js`
  - adds a local source URL builder for the Mikro2 corpus
  - defaults the detail panel to the first actual lecture PDF instead of auxiliary archive metadata
  - renders a `Lokale Quelle öffnen` action in the document detail panel
  - performs a `HEAD` check before opening the file in a new tab
  - shows success or missing-source feedback in the panel
  - keeps a warning that official source files are local and git-ignored

- `assets/css/premium-refinement.css`
  - styles the local-source action, warning block, and success/missing feedback states
  - keeps the layout responsive on narrow screens

## Source-Fidelity Decision

No academic content changed. The pass only improves traceability workflow: official files can be opened when they exist in the current local environment, while missing deployment availability remains explicit.

## Remaining Gaps

- This does not yet deep-link to a specific PDF page or slide from a concept anchor.
- Source files remain local-only unless the project decides on a secure deployment strategy for official course materials.
- Official Mikro2 task sources are still absent from the corpus, so the companion can open lecture/support files but not an official task archive.
