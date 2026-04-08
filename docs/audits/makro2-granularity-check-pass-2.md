# Makro2 Granularity Check Pass 2

## Scope
- Module: `makro2`
- Pass type: audit only (post pass-1 split check)
- Goal: assess whether concept-map granularity is now under-split, appropriate, or over-split

## Exact Files Inspected
1. `docs/audits/makro2-concept-granularity-audit-pass-1.md`
2. `docs/audits/makro2-concept-granularity-pass-1.md`
3. `makro2/js/data/chapters.js`
4. `makro2/js/data/stepProblems.js`
5. `makro2/js/data/conceptLinks.js`
6. `makro2/js/data/intuition.js`
7. `makro2/js/data/masteryData.js`
8. `makro2/js/data/fullExams.js`
9. `makro2/js/data/contentManifest.js`

## Current Concept Count
- Current count: **20** concepts (from `CHAPTERS` in `makro2/js/data/chapters.js`)

## Check of the New Split (`schuldenquote`)

### Pedagogical reality
- The split into:
  - `schuldenquote_dynamik`
  - `schuldenfinanzierung_monetarisierung`
  reflects a real source-level exam separation (debt arithmetic/stability vs financing mode and inflation channel).
- This is academically real and not cosmetic.

### Navigation utility
- `conceptLinks.js` now creates a meaningful sequence from debt dynamics to financing-mode implications.
- `contentManifest.js`, `fullExams.js`, and graph routing compatibility were updated, so navigation remains deployable and concept-specific.

### Thinness risk
- Operational thinness remains because both split concepts currently share underlying chapter/drill pools.
- This is a **content-distribution depth issue**, not evidence that one of the new concept IDs is fake or unusable.
- Both concepts still justify separate slots at concept-map level.

## Remaining Concepts Potentially Too Broad
- `wk_regime` may still bundle two exam-distinct units:
  - regime/trilemma architecture
  - parity defense under expectation stress.
- `taylor_regel` may still bundle:
  - baseline rule mechanics
  - ELB/real-rate-room interpretation.

Assessment:
- Both are still **borderline broad but acceptable** after pass 1.
- No mandatory split is required now for pedagogical validity or deployability.

## Concepts Potentially Too Thin
- No concept is academically artificial or empty.
- The two new debt concepts are not over-split; they are conceptually valid despite shared current assets.

## Over-Split Check
- No evidence of fake inflation in concept count.
- The pass-1 increase (+1 net) is conservative and source-grounded.
- No merge is warranted.

## Exact Granularity Judgment
- Overall status after pass 1: **appropriately granular**.
- Under-split risk: **low / non-mandatory**.
- Over-split risk: **low**.

## Pass-2 Split/Merge Decision
- **No further granularity changes are warranted in pass 2.**

## Recommendations (if a later depth pass is requested)
- Keep current concept IDs unchanged.
- Improve allocation clarity between:
  - `schuldenquote_dynamik` (more debt-path and stabilization drills),
  - `schuldenfinanzierung_monetarisierung` (more financing-mode and inflation-channel drills).
- Revisit optional splits for `wk_regime` and `taylor_regel` only if observed learner-navigation friction justifies it.
