# Finanzwirtschaft Rollout / Normalization Pass 1

## Scope
- Module: `finanzwirtschaft`.
- Focus: backbone rollout/normalization only.
- Excluded: broad content enrichment, renderer refactor, shell redesign.

## Rollout objective
Bring `finanzwirtschaft` to structural parity with migrated major modules for:
1. canonical contentManifest/provenance support,
2. manifest bridge exposure,
3. mistake-review integration,
4. dashboard-derived metrics integration.

## Changes made

### 1) Canonical manifest + provenance scaffold
- Added file: `finanzwirtschaft/js/data/contentManifest.js`
- Implemented:
  - concept-level provenance scaffold via `buildProvenanceByConceptFromPrimaryRefs`,
  - empty per-concept source refs map (`FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS`) to avoid fake anchors,
  - full-exam provenance scaffold (`FULL_EXAM_PROVENANCE`),
  - mode index generation (`buildFinanzwirtschaftModeIndex`),
  - bridge payload builder (`getFinanzwirtschaftContentManifestBridgePayload`).
- Source integrity:
  - no invented source anchors; refs intentionally remain empty in pass 1.

### 2) Manifest bridge exposure
- Updated: `finanzwirtschaft/js/main.js`
- Added:
  - import of `getFinanzwirtschaftContentManifestBridgePayload`,
  - `portalBridge` hook exposing `window.__finanzwirtschaftContentManifest`.

### 3) Mistake-review integration
- Added file: `finanzwirtschaft/js/features/mistakeReview.js`
  - wired `createMistakeReviewModule` with module slug, chapter map, review state key, and `listMistakeLogEntries`.
- Updated: `finanzwirtschaft/js/main.js`
  - passed `mistakeReview` into `createPortalApp`.

### 4) Dashboard-derived metrics integration
- Updated: `finanzwirtschaft/js/features/dashboard.js`
- Added:
  - `buildDashboardDerivedMetricsSnapshot` + `buildHonestDashboardPilotHtml` integration,
  - “Fehlerprotokoll anzeigen” action section,
  - derived metrics snapshot wiring from learner attempts/mistake logs/SRS.

### 5) Backbone key and logging parity (carried through from audit decision pass)
- Already aligned in current branch and retained:
  - `finanzwirtschaft/js/data/courseConfig.js` includes `contentManifestVersion: '2026.1'`.
  - `finanzwirtschaft/js/data/srsConfig.js` includes `ATTEMPTS_KEY`, `MISTAKES_KEY`, `MISTAKE_REVIEW_KEY`.
  - `finanzwirtschaft/js/state/storage.js` exports learner attempt/mistake APIs.
  - `finanzwirtschaft/js/features/exam.js` + `finanzwirtschaft/js/features/fullExam.js` are wired for attempt/mistake logging.

## Exact files changed
- `finanzwirtschaft/js/data/contentManifest.js` (new)
- `finanzwirtschaft/js/features/mistakeReview.js` (new)
- `finanzwirtschaft/js/main.js`
- `finanzwirtschaft/js/features/dashboard.js`
- `docs/audits/finanzwirtschaft-rollout-pass-1.md` (new)

## Exact parity gains achieved
1. `finanzwirtschaft` now exposes canonical manifest payload at runtime.
2. Provenance/model-index scaffolding now exists in module data layer.
3. Mistake-review feature is now integrated into the app wiring.
4. Dashboard now surfaces honest backbone-derived metrics and review entrypoint.
5. Attempt/mistake logging pipeline is active for quick exam and full exam flows.

## Remaining blockers (exact)
1. **Provenance anchors still empty**
   - Why: no defensible per-concept source-file mapping has been curated yet.
   - Impact: provenance exists structurally but remains unanchored at source-reference level.
2. **No dedicated source-curation pass for finanzwirtschaft yet**
   - Why: rollout scope avoided speculative source attribution.
   - Impact: source-trace depth remains below “fully curated” standard.
3. **Content-depth weaknesses not addressed in this rollout**
   - Why: explicit out-of-scope for this pass.
   - Impact: pedagogy/trap-density improvements still pending.

## Deployability and behavior
- Changes are additive and deployable.
- No shell flattening or broad redesign performed.
- Existing finance-specific module strengths (curriculum structure, concept framing, graph add-ons) are preserved.

## Recommendation for next pass
**Yes — next pass should be `finanzwirtschaft` content enrichment pass 1.**

Reason: core rollout/normalization parity is now in place; the highest remaining value is pedagogical depth improvement (worked mini-cases, trap-aware distinction drills, graph/formula linkage strengthening) on top of the now-aligned backbone.
