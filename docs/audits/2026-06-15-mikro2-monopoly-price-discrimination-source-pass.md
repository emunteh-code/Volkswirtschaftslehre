# Mikro2 monopoly and price discrimination source pass — 2026-06-15

## Scope

Reviewed the early Mikro2 monopoly block for `monopol_preissetzung` and `preisdiskriminierung` using:

- `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro_2_2.pdf`
- `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro_2_3.pdf`
- `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro_2_4.pdf`

## Evidence checked

- Native text extraction with `pdftotext -layout`.
- Visual page render via `pdftoppm`.
- Manual visual checks:
  - VL2 slide 2: monopoly marginal revenue and markup formula.
  - VL2 slide 10: linear monopoly quantity, price, profit, elasticity.
  - VL2 slide 11: monopoly welfare and deadweight loss in the linear model.
  - VL3 slide 3: third-degree price-discrimination FOC.
  - VL3 slide 4: elasticity-based price relation across markets.
  - VL4 slides 2-11: second-degree price discrimination as menu/self-selection logic.

## Source-backed changes

- Added precise source anchors for the monopoly markup derivation, linear monopoly example, monopoly welfare formulas, third-degree price-discrimination FOC, elasticity price rule, and second-degree self-selection logic.
- Added live formula-list entries and formula cards for:
  - linear monopoly,
  - monopoly deadweight loss,
  - third-degree price-discrimination elasticity rule.
- Updated existing formula cards and task-family metadata to use exact formula/example anchors instead of broad lecture-program anchors.

## Boundary

This pass improves lecture-source fidelity and provenance for the portal's existing monopoly and price-discrimination layer. It does not certify exhaustive coverage of all official exercises, tutorial solutions, or exam tasks for these topics.
