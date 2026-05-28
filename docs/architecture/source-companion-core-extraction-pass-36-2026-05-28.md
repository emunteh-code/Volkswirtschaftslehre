# Source Companion Core Extraction Pass 36

Date: 2026-05-28
Scope: shared provenance companion architecture

## Finding

Mikro2 now has the strongest official-material companion implementation, but most of its source coverage logic lives inside `mikro2/js/features/sourceCompanion.js`. That makes it harder to apply the same provenance behavior to Mikro1 and the remaining modules without copying module-specific code.

The reusable parts are pure metadata operations:

- source path normalization
- concept source-path collection
- document-to-concept matching
- page-anchor matching
- document anchor inventory
- anchor density
- document layer map rows
- selected-document coverage verdict
- coverage filter counts

The module-specific parts should remain outside the core:

- module source registry URL
- official source folder path
- source kind labels
- rendered copy and visual layout
- module-specific task gap panels
- module-specific official task-family data

## Change Implemented

Extract the pure provenance companion operations into `assets/js/portal-core/features/sourceCompanionCore.js`, then rewire Mikro2 to consume that shared core without changing its student-facing behavior.

Implemented shared helpers:

- `normalizeSourcePath`
- `collectConceptSourcePaths`
- `buildConceptCoverage`
- `mappedConceptsForDoc`
- `documentAnchorsForDoc`
- `anchorDensityForDoc`
- `documentLayerRowsForDoc`
- `documentCoverageVerdict`
- `filterDocsByCoverage`

Mikro2 now imports these helpers and keeps only its module-specific rendering, copy, task gap panel, and source registry configuration in `mikro2/js/features/sourceCompanion.js`.

## Source-Faithfulness Boundary

This is an architecture-only pass. It must not add course content, source anchors, formulas, tasks, or readiness claims. Any UI wording must continue to mark partial coverage honestly.

## Acceptance Criteria

- Mikro2 companion renders the same coverage states after extraction.
- Generated readiness audits remain stable.
- Static JS checks pass.
- Browser smoke confirms coverage filters and source-parity checklist still work.

## Files Changed

- `assets/js/portal-core/features/sourceCompanionCore.js`
- `mikro2/js/features/sourceCompanion.js`
- `docs/architecture/source-companion-core-extraction-pass-36-2026-05-28.md`
