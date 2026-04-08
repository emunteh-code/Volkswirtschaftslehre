# Makro2 Concept Granularity Pass 1

## Scope
- Module: `makro2`
- Basis: `docs/audits/makro2-concept-granularity-audit-pass-1.md`
- Pass type: concept-map granularity implementation only
- Constraint followed: implemented only the mandatory conservative split from the audit

## Exact Split Implemented
1. `schuldenquote` ->
   - `schuldenquote_dynamik`
   - `schuldenfinanzierung_monetarisierung`

No optional splits were implemented in this pass (`wk_regime`, `taylor_regel` remain unsplit by design).

## Concept Count (Exact)
- Before: **19** concepts (`makro2/js/data/chapters.js`)
- After: **20** concepts (`makro2/js/data/chapters.js`)
- Net change: **+1**

## Exact Files Changed
1. `makro2/js/data/chapters.js`
2. `makro2/js/data/stepProblems.js`
3. `makro2/js/data/conceptLinks.js`
4. `makro2/js/data/intuition.js`
5. `makro2/js/data/masteryData.js`
6. `makro2/js/data/contentManifest.js`
7. `makro2/js/data/fullExams.js`
8. `makro2/js/ui/graphPanel.js`
9. `makro2/js/ui/graphs.js`
10. `docs/audits/makro2-concept-granularity-pass-1.md`

## What Changed and Why

### 1) Chapter / concept map split
- In `chapters.js`, replaced `schuldenquote` chapter ID with:
  - `schuldenquote_dynamik`
  - `schuldenfinanzierung_monetarisierung`
- Reason: aligns with audit-grounded distinction between debt-ratio dynamics and financing/monetization channel.

### 2) Content integrity preservation
- In `chapters.js`, existing content was conservatively reassigned:
  - `CONTENT.schuldenquote_dynamik = CONTENT.schuldenquote`
  - `CONTENT.schuldenfinanzierung_monetarisierung = CONTENT.schuldenquote`
  - old `CONTENT.schuldenquote` removed afterwards.
- Reason: preserve behavior and learning objects without inventing content.

### 3) Drill mapping consistency
- In `stepProblems.js`, base key moved from `schuldenquote` to `schuldenquote_dynamik`.
- Added explicit mapping:
  - `BASE_STEP_PROBLEMS.schuldenfinanzierung_monetarisierung = BASE_STEP_PROBLEMS.schuldenquote_dynamik`
- Reason: keep quick-exam/drill coverage deployable for both new concept IDs.

### 4) Navigation/prerequisite graph alignment
- In `conceptLinks.js`, all `schuldenquote` links were replaced by the two new IDs.
- `schuldenquote_dynamik` is upstream and `schuldenfinanzierung_monetarisierung` follows as a financing-mode continuation.
- Reason: improves pedagogical navigation while keeping surrounding concept flow stable.

### 5) Intuition layer split
- In `intuition.js`, replaced the broad `schuldenquote` intuition entry with two focused entries:
  - debt-ratio dynamics/stability logic
  - financing mode + monetization trade-off logic
- Reason: concept-level retrieval is clearer and matches the mandated split.

### 6) Mastery outcomes split
- In `masteryData.js`, replaced broad `schuldenquote` mastery with two mastery blocks matching the new IDs.
- Reason: learning outcomes stay aligned with updated concept map.

### 7) Provenance mapping update
- In `contentManifest.js`, replaced single `schuldenquote` reference mapping with two split mappings:
  - `schuldenquote_dynamik`
  - `schuldenfinanzierung_monetarisierung`
  both grounded in the same debt worksheet anchor already used in-module.
- Reason: maintain per-concept provenance compatibility after split.

### 8) Full-exam concept attribution update
- In `fullExams.js`, affected concept attribution was updated to:
  - `schuldenfinanzierung_monetarisierung`
- Reason: that block includes financing-mode comparison and monetization implications.

### 9) Graph/interactive compatibility update
- In `graphPanel.js`, graph concept availability and panel mappings were updated for both new IDs.
- In `graphs.js`, runtime dispatch now supports both new IDs using the existing debt-graph renderer.
- Reason: preserve deployability and avoid dead graph routing after ID split.

## Remaining Broad Concepts That Stay Unsplit (Intentional)
- `wk_regime`: still somewhat broad but intentionally unsplit in pass 1 (optional split only in audit).
- `taylor_regel`: still somewhat broad but intentionally unsplit in pass 1 (optional split only in audit).

## Deployability / Consistency Check
- Concept IDs and references were propagated across core data and graph routing surfaces.
- No linter errors found on touched `makro2/js/data` and `makro2/js/ui` paths.

## Risks / Gaps
- As intended for granularity-first implementation, the two new concepts currently reuse the same underlying content/drill pools.
- This is acceptable for pass 1; deeper differentiation belongs to a later depth/enrichment pass, not this concept-map pass.
