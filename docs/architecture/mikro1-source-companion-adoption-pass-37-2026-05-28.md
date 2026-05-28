# Mikro1 Source Companion Adoption Pass 37

Date: 2026-05-28
Scope: Mikro1 official-material companion surface

## Finding

Mikro1 remains the portal benchmark for interactive pedagogy, formulas, graphs, drills, and exam cockpit behavior. Its provenance layer has curated file-level primary references, but it does not yet expose the shared official-material companion UI that Mikro2 now uses.

The current audit state is intentionally mixed:

- official Mikro1 source corpus is local and registered
- most Mikro1 concepts have source references
- no Mikro1 concept has reviewed page anchors yet
- official exam/probeklausur documents exist in the corpus
- official task documents are not mapped into a task-family bank yet

Without a student-facing companion, this status is less visible than it should be. The portal can look more complete than the evidence permits.

## Change Planned

Add a Mikro1 source companion module that consumes the shared source companion core helpers and exposes:

- registered official Mikro1 documents
- lecture coverage matrix
- coverage filters for page-anchored, reference-only, and corpus-only sources
- document detail panels with mapped concepts, layer rows, and next source-parity actions
- honest messaging that Mikro1 currently has file-level references but no reviewed page anchors
- dashboard/sidebar entry points to the companion

## Source-Faithfulness Boundary

This pass must not create new source anchors, formulas, tasks, exam-family mappings, or readiness claims. It only makes the current evidence state visible.

All source-derived claims remain file-level unless a future pass creates reviewed page anchors from the official PDFs.

## Acceptance Criteria

- Mikro1 imports a source companion module through the shared app shell.
- Sidebar and dashboard expose a working Quellenbrowser button.
- The companion uses `assets/js/portal-core/features/sourceCompanionCore.js`.
- Coverage states are honest: Mikro1 page-anchor count remains zero.
- Static JS checks pass.
- Readiness/current-state audits remain deployable.
- Browser smoke confirms the Mikro1 companion opens and filters documents.

## Files Expected To Change

- `mikro1/js/features/sourceCompanion.js`
- `mikro1/js/main.js`
- `mikro1/index.html`
- `mikro1/js/features/dashboard.js`
