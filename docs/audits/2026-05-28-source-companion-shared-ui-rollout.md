# Audit Note — Source Companion Shared UI Rollout (2026-05-28)

## Scope

This pass extracts duplicated source companion rendering logic into shared `portal-core` and applies the same companion surface to additional modules without changing academic content.

## Baseline Findings

- `mikro1/js/features/sourceCompanion.js` and `mikro2/js/features/sourceCompanion.js` each contained large, mostly duplicated UI/render/event code.
- Companion access was implemented only for Mikro modules.
- Makro1, Makro2, Statistik, and Ökonometrie had source manifests but no module companion entrypoint.

## Change Plan

1. Extract shared rendering/runtime logic to `assets/js/portal-core/features/sourceCompanionModule.js`.
2. Keep module-specific semantics in thin module adapters:
   - module slug/title
   - source root path
   - lecture ordering heuristics
   - copy and task-gap panel specifics
3. Keep provenance honesty constraints:
   - no invented academic claims
   - explicit gap states for corpus-only/reference-only/page-anchored partial
4. Roll out companion entrypoints to Makro1, Makro2, Statistik, Ökonometrie.
5. Expose dashboard button for companion in those modules.

## Risks / Follow-up

- Lecture sort regexes are heuristic and may need per-module title-pattern refinement after broader corpus normalization.
- Task-bank sections outside Mikro2 currently use generic gap reporting (document-count based), not full task-family diagnostics.
- This rollout does not claim improved page-level anchor completeness; it only standardizes companion visibility and honesty.
