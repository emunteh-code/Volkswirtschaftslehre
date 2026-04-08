# Finanzwirtschaft Audit / Rollout Decision Pass 1

## Scope
- Module audited: `finanzwirtschaft`.
- Goal: determine correct next treatment:
  - `a)` rollout/normalization
  - `b)` direct content enrichment pass 1
- Constraint: no broad content rewrite in this pass.

## Audit baseline

### 1) Current architectural state
- `finanzwirtschaft` already runs on `createPortalApp` and shared portal-core modules (`quickExam`, `fullExam`, `srs`, renderer/navigation/right panel).
- Before this pass it was **partially integrated**:
  - no learner attempt/mistake pipeline wired into exam modules,
  - no full-exam attempt projection into learner backbone,
  - no mistake-review module wiring,
  - no manifest/provenance bridge file in module data layer.
- Safe backbone fix status (applied in this pass):
  - quick-exam + full-exam learner/mistake logging now wired.

### 2) Visual/platform consistency state
- Strong: `finanzwirtschaft/css/styles.css` imports `mikro1` shell styles and only adds small module-specific graph extensions.
- Shell, navigation, tabs, and consent modal are already close to platform standard.
- No platform-breaking visual divergence found that required additional CSS normalization in this pass.

### 3) Source/provenance readiness
- Not ready for full provenance standard:
  - no dedicated `finanzwirtschaft/js/data/contentManifest.js`,
  - no concept-level source anchoring map,
  - no manifest bridge export in `main.js`.
- `courseConfig` now carries `contentManifestVersion` for compatibility, but provenance content itself is still missing.

### 4) Content-depth state (audit only)
- Content base is substantial and structured:
  - broad chapter coverage across liquidity, intertemporal choice, NPV/IRR, uncertainty, rights issue, cost of capital, capital structure.
  - chapter tasks and step-problem coverage are already denser than pre-enrichment modules.
- Weak spots remain (for later dedicated enrichment):
  - advanced trap density around close method boundaries (e.g., IZF edge cases, financing-choice regimes),
  - deeper exam-style mini-cases linking formula choice -> interpretation -> decision robustness.

### 5) Module-specific strengths to preserve
- Strong curriculum continuity from foundational finance logic to valuation and capital structure.
- Decision-first framing in chapter narratives (not just formula listing).
- Existing graph/visual add-ons for finance-specific interpretations.
- These should be preserved; no generic shell flattening needed.

## Safe fixes applied in this pass

### Backbone-compatible logging/config fixes
- File: `finanzwirtschaft/js/data/courseConfig.js`
  - Added `contentManifestVersion: '2026.1'`.
- File: `finanzwirtschaft/js/data/srsConfig.js`
  - Added `ATTEMPTS_KEY`, `MISTAKES_KEY`, `MISTAKE_REVIEW_KEY`.
- File: `finanzwirtschaft/js/state/storage.js`
  - Wired attempt/mistake keys into storage module.
  - Exported `appendLearnerAttempt`, `listLearnerAttempts`, `appendMistakeLogEntry`, `listMistakeLogEntries`.
- File: `finanzwirtschaft/js/features/exam.js`
  - Added `moduleSlug`, `appendLearnerAttempt`, `appendMistakeLogEntry` to quick-exam module wiring.
- File: `finanzwirtschaft/js/features/fullExam.js`
  - Added `moduleSlug`, `appendMistakeLogEntry`.
  - Added `onExamSubmitted` with `toLearnerAttemptPayloadFromExamSummary` -> `appendLearnerAttempt`.

All changes are additive and deployability-safe.

## Exact files changed
- `finanzwirtschaft/js/data/courseConfig.js`
- `finanzwirtschaft/js/data/srsConfig.js`
- `finanzwirtschaft/js/state/storage.js`
- `finanzwirtschaft/js/features/exam.js`
- `finanzwirtschaft/js/features/fullExam.js`
- `docs/audits/finanzwirtschaft-audit-rollout-pass-1.md`

## Decision: correct next pass

### Recommended next pass: **a) rollout/normalization**
`finanzwirtschaft` is visually close and content-rich, but still misses core rollout artifacts required by the platform quality floor:
1. canonical manifest/provenance file and bridge exposure,
2. mistake-review module integration,
3. dashboard-derived metrics integration (honest backbone signals),
4. provenance/source-anchor curation scaffolding.

Direct content enrichment now would increase depth on top of an incomplete backbone and reduce cross-module comparability of analytics/review signals.

## Exact remaining blockers and why they matter
1. **Missing content manifest + provenance map**
   - Blocks source-traceable concept metadata and consistent platform-level provenance inspection.
2. **No mistake-review integration**
   - Blocks learner-facing consolidation of logged mistakes, including full-exam concept misses.
3. **No dashboard-derived metrics integration**
   - Blocks consistent module-level analytics comparability with migrated major modules.
4. **No explicit manifest bridge in `main.js`**
   - Blocks runtime parity for module manifest access patterns used elsewhere in the platform.

These blockers are structural (platform reliability/consistency), not cosmetic; they should be addressed before a dedicated `finanzwirtschaft` content-enrichment pass.
