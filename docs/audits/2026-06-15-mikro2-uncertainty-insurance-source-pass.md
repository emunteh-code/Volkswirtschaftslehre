# Mikro2 uncertainty and insurance source pass — 2026-06-15

## Scope

Reviewed `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro2_13.pdf` and `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro2_14.pdf` for the existing portal concept `unsicherheit_versicherung`.

## Evidence checked

- Native text extraction with `pdftotext -layout`.
- Visual page render via `pdftoppm` for VL13 slides 10-17 and VL14 slides 1-8.
- Manual visual checks:
  - VL13 slide 15: insurance optimization problem, state budget, and FOC.
  - VL13 slide 17: fair premium case `gamma = pi` and partial insurance case `gamma > pi`.
  - VL14 slide 6: absolute and relative risk-aversion coefficients.

## Source-backed changes

- Added direct page-level anchors for:
  - state-contingent insurance budget,
  - expected utility / VNM utility,
  - risk aversion,
  - insurance-demand FOC,
  - fair premium and full insurance,
  - absolute and relative risk-aversion coefficients.
- Replaced generic insurance warnings in the live theory text with VL13/VL14 mechanics.
- Added formula cards for insurance budget, insurance FOC, absolute risk aversion, and relative risk aversion.
- Updated task-family provenance to use exact lecture anchors instead of broad chapter-program anchors.

## Boundary

This pass improves lecture-source fidelity and formula provenance. It does not certify an exhaustive Mikro2 uncertainty/insurance exercise bank because no official exercise sheet, tutorial solution, or exam artifact for this concept was mapped in this slice.
