# Readiness Gate Truth Pass — 2026-06-07

## Finding

The generated readiness gate was too optimistic for the final Learning OS definition.

It could mark `examBankComplete: true` when a module only had official task documents in the registry or portal-authored task families, even though fleet policy keeps `officialTaskSourceFamilies` at `0` until OCR plus human review promote real official task families.

It also allowed Mikro1-depth certification through parity metrics even when the current-state scorecard still described modules as pending or not achieved.

## Change

Tightened the generated gates:

- `anchorComplete` now requires every concept to have both a source reference and a source anchor.
- `examBankComplete` now requires at least one reviewed `official-task-source` family.
- `adaptiveReady` remains blocked while the official exam bank is not evidence-based.
- `mikro1DepthAchieved` now follows the current-state scorecard and only passes on the literal value `achieved`.
- The readiness markdown now shows document-registry families separately from reviewed official task families.

Updated current-state scorecard language:

- `achieved` is only emitted when the module has local sources, strong concept/formula/task parity, source anchors covering concepts, and reviewed official task-source families.
- Near modules now say `near, but official task-source review pending`.
- Mikro1 says `benchmark cockpit; official task-source review pending` until official task review exists.

## Result

The gate is expected to show blockers again. That is the correct product state: the portal is strong and deployable, but the final all-encompassing Learning OS is blocked by official task-source review and remaining source parity gaps.

## Source-Faithfulness Boundary

No academic content, formulas, tasks, or source anchors were added in this pass. This is a governance and reporting correction so the product cannot over-claim completion.

## Files Changed

- `tools/exam-os/check-readiness.mjs`
- `tools/exam-os/audit-current-state.mjs`
- `docs/audits/exam-operating-system-current-state.generated.*`
- `docs/audits/exam-operating-system-readiness.generated.*`
