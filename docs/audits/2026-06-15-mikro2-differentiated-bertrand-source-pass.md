# Mikro2 differentiated Bertrand source pass — 2026-06-15

## Scope

Reviewed the differentiated-goods Bertrand section in `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro2_8.pdf` for the portal concept `oligopol_cournot_bertrand`.

## Evidence checked

- Native text extraction with `pdftotext -layout`.
- Visual page render via `pdftoppm` for VL8 slides 5-14.
- Manual visual checks:
  - VL8 slide 7: differentiated-goods Bertrand profit function, FOC, and reaction function.
  - VL8 slide 8: symmetric Bertrand equilibrium price.
  - VL8 slide 10: equilibrium quantity.
  - VL8 slide 12: Bertrand equilibrium profit and comparison to Cournot.

## Source-backed changes

- Added precise source anchors for the differentiated-goods demand system, price reaction functions, equilibrium price, equilibrium quantity, and equilibrium profit.
- Added live formula-list entries and formula cards for:
  - `p^B=(1-gamma+c)/(2-gamma)`,
  - `y^B=(1-c)/((1+gamma)(2-gamma))`,
  - `pi^B=((1-gamma)(1-c)^2)/((1+gamma)(2-gamma)^2)`.
- Updated the Bertrand task-family provenance to reference both the homogeneous-goods Bertrand paradox and differentiated-goods Bertrand formula slides.

## Boundary

This pass closes the known VL8 differentiated-Bertrand formula gap in the lecture layer. It does not certify an exhaustive official exercise/tutorial/exam bank for differentiated Bertrand.
