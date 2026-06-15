# Mikro2 oligopoly source pass — 2026-06-15

## Scope

Reviewed the Mikro2 oligopoly layer for `oligopol_stackelberg` and `oligopol_cournot_bertrand` using:

- `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro2_5.pdf`
- `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro2_6.pdf`
- `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro2_8.pdf`

## Evidence checked

- Native text extraction with `pdftotext -layout`.
- Visual page render via `pdftoppm`.
- Manual visual checks:
  - VL5 slide 10: Stackelberg equilibrium quantities.
  - VL5 slide 13: Stackelberg market result, price, leader profit, follower profit.
  - VL6 slide 6: asymmetric Cournot output.
  - VL6 slide 11: symmetric Cournot output, price, and profit.
  - VL8 slide 3: Bertrand paradox with `p = c`, split demand, and zero profits.

## Source-backed changes

- Added precise source anchors for:
  - Stackelberg follower reaction,
  - Stackelberg quantities,
  - Stackelberg market result,
  - Cournot reaction function,
  - asymmetric Cournot output,
  - symmetric Cournot outcome,
  - n-firm Cournot outcome,
  - Bertrand paradox.
- Added formula-list entries and formula cards for official VL-normalized Cournot, Stackelberg, and Bertrand results.
- Updated task-family provenance to exact formula/result slides instead of broad program anchors.

## Boundary

This pass improves lecture-source fidelity for the core oligopoly models already present in the portal. It does not yet map the full differentiated-goods Bertrand model from VL8 slides 5-14, nor does it certify official exercise/tutorial/exam task coverage for oligopoly.
