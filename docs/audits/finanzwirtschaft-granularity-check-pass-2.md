# Finanzwirtschaft Granularity Check Pass 2 (Audit Only)

## Scope
- Module: `finanzwirtschaft` only.
- Objective: post-split granularity check after pass 1.
- This is an audit-only pass (no code/data changes).

## Exact files inspected
- `docs/audits/finanzwirtschaft-concept-granularity-pass-1.md`
- `finanzwirtschaft/js/data/chapters.js`
- `finanzwirtschaft/js/data/stepProblems.js`
- `finanzwirtschaft/js/data/conceptLinks.js`
- `finanzwirtschaft/js/data/intuition.js`
- `finanzwirtschaft/js/data/masteryData.js`

## Current concept count
- Current concept count (`CHAPTERS`): **16**

## Granularity judgment
- Overall judgment: **appropriately granular with minor overlap/thinness risks, but no mandatory pass-2 split/merge required right now**.
- Classification:
  - **Not meaningfully under-split** in a high-value exam-relevant way after pass 1.
  - **Not structurally over-split** in a way that forces immediate merge.
  - Some split nodes are **borderline thin/overlapping in implementation depth**, but this is mainly a content allocation quality issue, not concept-map architecture failure.

## Check of new splits (pedagogical reality + navigation utility)

1. `kapitalmarkt_bewertung` vs `institutionen_marktunvollkommenheit`
   - Verdict: **pedagogically real and navigation-useful**.
   - Reason: separates capital-market pricing/valuation frame from institution/friction frame (exam-relevant distinction).
   - Risk note: current retrieval objects are strongly overlapping between the two nodes, which can blur the visible split.

2. `eigenkapitalkosten` vs `fremdkapitalkosten`
   - Verdict: **pedagogically real and navigation-useful**.
   - Reason: distinct formula logic and interpretation workflow in exam settings.
   - Risk note: current drill mapping is largely duplicated; this makes `fremdkapitalkosten` look thinner than intended.

3. `wacc_leverage` vs `modigliani_miller`
   - Verdict: **pedagogically real and navigation-useful**.
   - Reason: computation/transmission mechanics (WACC/leverage) vs benchmark-assumption reasoning (MM) are distinct tasks.
   - Risk note: current drills are duplicated across both nodes, so navigation distinction is conceptually clear but practice-level separation is still shallow.

## Concepts that may still be too broad
- **`unsicherheit` (watchlist, not mandatory split)**:
  - still bundles dominance, expected-value logic, and risk-adjusted valuation.
  - Current decision: keep unsplit for now because it still forms one coherent exam pipeline.
  - Trigger for future split would be sustained need for separate diagnosis paths (e.g., state-model filtering vs pricing-risk adjustment) with dedicated drill density.

No other concept shows a high-confidence, high-value under-splitting blocker at this stage.

## Concepts that may now be too thin
- **`institutionen_marktunvollkommenheit`**: conceptually justified, but currently thin at retrieval depth (mainly overlap with sibling split).
- **`fremdkapitalkosten`**: conceptually justified, but currently has limited distinct drill identity vs `eigenkapitalkosten`.
- **`modigliani_miller`**: conceptually justified, but practice density is light relative to `wacc_leverage`.

Important: these are mostly **depth/distribution issues**, not clear evidence that the split concepts should be merged.

## Recommendation: pass-2 split/merge?
- **No further granularity split is warranted now.**
- **No immediate merge is warranted now.**
- Recommended next step (if requested): targeted content-depth refinement within current 16-concept map so each split has clearer non-duplicative drill identity.

## Explicit conclusion
- The post-pass-1 `finanzwirtschaft` concept map is **currently appropriate in granularity**.
- **No further granularity changes are warranted at this stage.**
