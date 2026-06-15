# Mikro2 intertemporal source correction — 2026-06-15

## Scope

Reviewed `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro2_12.pdf` for the existing portal concept `intertemporaler_konsum`.

## Evidence checked

- Native text extraction with `pdftotext -layout`.
- Visual page render via `pdftoppm` for slides 6-13.
- Manual visual check of slide 11 (`Optimaler intertemporaler Konsum`) and slide 13 (`Der Effekt einer Zinsänderung auf c1 und c2`).

## Corrections

- Corrected the portal Euler/FOC display from an inverted additive-utility form to the lecture notation:
  `(\partial u / \partial c_1) / (\partial u / \partial c_2) = 1 + r`.
- Updated the logarithmic-utility task explanation to use the same ratio form before deriving `c_2^* = (1+r)c_1^*`.
- Added tighter page-level anchors for:
  - intertemporal budget equation,
  - present-value / future-value budget forms,
  - optimum first-order condition,
  - interest-rate effect decomposition.

## Boundary

This pass improves source fidelity for a lecture-backed concept. It does not certify an official Mikro2 exercise bank: no official exercise sheet, solution key, tutorial, or exam artifact for this concept was added in this slice.
