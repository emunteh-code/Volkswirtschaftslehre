# Mikro2 Formula-Card Pass 5 - 2026-05-27

## Scope

This pass adds the first official-source anchored derivation layer for Mikro2. It does not claim formula parity for the module yet; it establishes the reusable rendering path and covers a representative first batch of high-exam-value quantitative formulas.

## Implemented

- Added a reusable formula proof layer to the shared portal renderer.
- Added Mikro2 formula cards for:
  - monopoly markup / elasticity rule
  - third-degree price discrimination marginal-revenue equalization
  - symmetric Cournot duopoly quantity
  - Stackelberg leader quantity
  - present-value intertemporal budget
  - two-state expected utility
  - production efficiency via equality of marginal rates of technical substitution
  - principal-agent participation and incentive constraints
- Connected formula cards to existing page-level Mikro2 source anchors.
- Exposed formula cards in the formula tab under `Herleitung & Einsatzgrenzen`.
- Extended the current-state audit so modules report `officialFormulaCards`.

## Source-Fidelity Notes

- Every new Mikro2 formula card is marked `direct-source`.
- Every new formula card carries at least one existing source-anchor id.
- The cards preserve course-facing terminology at the concept level and avoid claiming complete source parity.
- Platform-added explanatory structure is limited to pedagogical framing around source-backed formulas.

## Validation

- JavaScript syntax checks passed for the shared renderer, Mikro2 renderer, Mikro2 formula cards, and current-state audit script.
- Formula-card anchor validation passed with zero missing anchor ids.
- Browser smoke testing confirmed formula cards render for selected Mikro2 concepts with derivation steps, assumptions, and exam shortcuts.
- The generated current-state audit now reports `officialFormulaCards = 8` for Mikro2.

## Remaining Gaps

- Mikro2 still needs a complete formula inventory against all official lecture PDFs.
- Formula cards are not yet exhaustive across monopoly variants, uncertainty, intertemporal choice, production, welfare, and information economics.
- The task bank is still not source-complete.
- Formula-level PDF companion opening is specified as a target capability but not implemented in this pass.
- Adaptive mastery still needs formula-card evidence integration.

## Changed Files

- `assets/js/portal-core/ui/renderer.js`
- `assets/css/premium-refinement.css`
- `mikro2/js/data/formulaCards.js`
- `mikro2/js/ui/renderer.js`
- `tools/exam-os/audit-current-state.mjs`
- `docs/audits/exam-operating-system-current-state.generated.json`
- `docs/audits/exam-operating-system-current-state.generated.md`
- `docs/audits/mikro2-formula-card-pass-5-2026-05-27.md`
