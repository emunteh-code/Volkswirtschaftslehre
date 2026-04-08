# Makro1 Granularity Check Pass 2

## Scope
- Module: `makro1`
- Pass type: audit only (post pass-1 split check)
- Goal: verify whether concept-map granularity is now under-split, appropriate, or over-split

## Exact Files Inspected
1. `docs/audits/makro1-concept-granularity-audit-pass-1.md`
2. `docs/audits/makro1-concept-granularity-pass-1.md`
3. `makro1/js/data/chapters.js`
4. `makro1/js/data/stepProblems.js`
5. `makro1/js/data/conceptLinks.js`
6. `makro1/js/data/intuition.js`
7. `makro1/js/data/masteryData.js`
8. `makro1/js/data/fullExams.js`
9. `makro1/js/data/contentManifest.js`

## Current Concept Count
- Current count: **14** concepts (from `CHAPTERS` in `makro1/js/data/chapters.js`)

## Check of the New Split (`realzins`)

### Pedagogical reality
- `realzins_fisher_erwartungen` and `realzins_risikopraemie_krisenkanal` map to two academically real units:
  - Fisher/expected-inflation translation
  - risk-premium/spread/crisis transmission and policy-constraint logic
- This remains source-grounded with concept-specific references in `contentManifest.js` (Kap6 and Übung5 linkage).

### Navigation utility
- Navigation/prereq graph now distinguishes entry logic (`realzins_fisher_erwartungen`) from crisis-channel continuation (`realzins_risikopraemie_krisenkanal`) in `conceptLinks.js`.
- This improves route clarity for exam-style diagnosis sequences.

### Thinness risk
- Structural thinness exists operationally because both concepts currently share the same chapter content object and the same step-problem array mapping.
- However, this is a **depth/distribution issue**, not evidence of concept-map invalidity.
- Conclusion on thinness: **not artificially thin**, but pedagogical differentiation can be strengthened in a later depth pass.

## Remaining Concepts That May Still Be Broad
- `phillips`: still bundles NAIRU-gap logic and expectation-regime framing; this is a known borderline broad area, but currently still coherent and exam-usable.
- `politikmix`: still bundles standard crowding-out regime comparison with constrained-feasibility (ELB-style) reasoning; still coherent, though broad.

Assessment:
- Both remain **borderline broad but acceptable** for this pass.
- No additional split is mandatory to maintain pedagogical reality or deployable navigation.

## Over-Split Check
- No evidence of cosmetic split inflation.
- The pass-1 split count increase (+1 net) is conservative and tied to real exam distinctions.
- No merge is warranted.

## Exact Granularity Judgment
- Overall status after pass 1: **appropriately granular**.
- Under-split risk in high-value areas: **low / non-mandatory**.
- Over-split risk: **low**.

## Pass-2 Split/Merge Decision
- **No further granularity changes warranted in pass 2.**

## Recommendations (if a later depth pass is requested)
- Keep concept IDs unchanged.
- Improve distribution clarity between:
  - `realzins_fisher_erwartungen` (more Fisher-first drills/content anchors),
  - `realzins_risikopraemie_krisenkanal` (more spread/ELB/feasibility drills).
- Optionally revisit `phillips` and `politikmix` only if observed learner/navigation friction justifies additional splitting.
