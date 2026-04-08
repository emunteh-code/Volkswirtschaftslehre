# Mikro1 backbone integration (audit)

**Date:** 2026-04-08  
**Context:** Integrate `mikro1` into the current backbone without weakening benchmark strengths.

## Summary

`mikro1` is now backbone-compatible for canonical manifest/provenance bridge, learner-state attempt/mistake logging, mistake review, and dashboard-derived metrics. Integration is additive and keeps Mikro I as pedagogy benchmark, especially its custom renderer, semantic math surface treatment, and rich graph/exam-transfer workflow.

## Audit: what mikro1 already does better than migrated modules

Compared with modules migrated into the baseline shape, `mikro1` already has stronger, module-specific capabilities:

- **Richer pedagogy layer:** custom generated exam-transfer deck and guided practice synthesis from theory/intuition/task signals.
- **Custom renderer pipeline:** post-render enhancement hooks, semantic text/math decoration, and multi-pass stabilization behavior.
- **Semantic math surface behavior:** targeted semantic highlighting/decorating across content, side panels, and graph info contexts.
- **Interactive graph depth:** broader concept graph coverage and richer graph feedback layer.
- **Exam drill ergonomics:** custom quick-exam feedback cleaning and renderer-integrated transfer prompts.

These strengths were preserved; no downgrade to a generic migrated-module renderer was performed.

## What was aligned to the backbone

1. **Canonical manifest/provenance support**
   - Added `mikro1/js/data/contentManifest.js`.
   - Added `contentManifestVersion` in `courseConfig`.
   - Added `portalBridge` in `main.js` to expose `window.__mikro1ContentManifest`.

2. **Learner-state compatibility**
   - Added `ATTEMPTS_KEY` and `MISTAKES_KEY` in `srsConfig`.
   - Wired storage exports for attempt/mistake append/list APIs.

3. **Exam backbone compatibility**
   - Quick exam now receives `moduleSlug`, `appendLearnerAttempt`, `appendMistakeLogEntry`.
   - Full exam now receives `moduleSlug` and `onExamSubmitted` hook with canonical attempt payload mapping.

4. **Mistake review compatibility**
   - Added `mikro1/js/features/mistakeReview.js` adapter.
   - Wired `mistakeReview` module into `createPortalApp`.

5. **Dashboard-derived metrics compatibility**
   - Added derived snapshot + honest metrics block in dashboard.
   - Added mistake-review CTA in dashboard.

## Exact files changed

| File | Change |
|------|--------|
| `mikro1/js/data/srsConfig.js` | Added `ATTEMPTS_KEY`, `MISTAKES_KEY`, `MISTAKE_REVIEW_KEY` |
| `mikro1/js/data/courseConfig.js` | Added `contentManifestVersion: '2026.1'` |
| `mikro1/js/state/storage.js` | Wired learner-backbone keys; exported attempt/mistake append/list APIs |
| `mikro1/js/features/exam.js` | Added backbone hooks while preserving custom feedback-clean wrapper |
| `mikro1/js/features/fullExam.js` | Added `moduleSlug` and `onExamSubmitted` attempt append |
| `mikro1/js/features/mistakeReview.js` | **New** mistake review adapter |
| `mikro1/js/features/dashboard.js` | Added mistake review CTA + derived honest metrics block |
| `mikro1/js/data/contentManifest.js` | **New** canonical manifest/provenance + mode-index bridge |
| `mikro1/js/main.js` | Wired `mistakeReview` + `portalBridge` |
| `docs/audits/mikro1-backbone-integration.md` | This audit/integration note |

## What remains intentionally mikro1-specific

- Custom renderer architecture in `mikro1/js/ui/renderer.js`.
- Semantic math enhancement pipeline and multi-surface decoration behavior.
- Rich exam-transfer/guided-practice rendering model.
- Existing graph interaction breadth and graph-specific explanatory behavior.
- Home/start experience choice (`bootStorage.loadLastId: () => null`) to preserve Mikro I flow.

## Remaining gaps / incompatibilities

1. **Provenance anchors:** `MIKRO1_CONCEPT_PRIMARY_REFS` currently empty pending curated source-anchor mapping (kept honest).
2. **Full-exam concept-level mistake extraction:** not wired because full-exam question data does not yet provide robust concept mapping for safe mistake attribution.
3. **Derived-metrics population lag:** dashboard-derived sections are correct but depend on accumulated local attempt/mistake logs.

## Risks

- **New localStorage keys:** attempts/mistakes start empty for existing users; non-destructive.
- **Bridge payload scope:** `__mikro1ContentManifest` is metadata for tooling/dev inspection, not a learner-facing content rewrite.
- **No renderer flattening:** integration deliberately avoids replacing Mikro I’s custom renderer behavior with baseline module renderer behavior.
