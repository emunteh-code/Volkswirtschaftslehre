# Oekonometrie platform backbone migration (audit)

**Date:** 2026-04-08  
**Benchmark:** `mikro1` shell + migrated modules (`makro1`, `makro2`, `statistik`).

## Summary

`oekonometrie` is now aligned with the current platform backbone using additive adapters: canonical manifest/provenance bridge, learner-state logging keys, full-exam attempt logging, mistake review wiring, and dashboard-derived metrics integration. The structured curriculum model and dedicated R-application layer are preserved as module-specific design elements.

## Audit against backbone and mikro1 benchmark

| Capability | mikro1 baseline | oekonometrie before | oekonometrie after |
|------------|------------------|---------------------|--------------------|
| Shared app shell (`createPortalApp`) | Yes | Yes | Yes (unchanged) |
| Canonical content manifest + provenance bridge | Partial/legacy in mikro1, canonical in migrated modules | No | Yes (`oekonometrie.contentManifest`) |
| Learner-state attempts/mistakes keys | Optional by module | No | Yes |
| Quick exam learner logging | Supported by core when wired | Not wired | Wired (`appendLearnerAttempt`, `appendMistakeLogEntry`) |
| Full exam backbone submission logging | Supported by core when wired | Not wired | Wired (`onExamSubmitted` attempt append) |
| Mistake review page integration | Optional by module | No | Yes |
| Dashboard-derived honest metrics | Optional by module | No | Yes |
| Structured curriculum + R tab | Module-specific | Present | Preserved |

## Exact files changed

| File | Change |
|------|--------|
| `oekonometrie/js/data/srsConfig.js` | Added `ATTEMPTS_KEY`, `MISTAKES_KEY`, `MISTAKE_REVIEW_KEY` |
| `oekonometrie/js/data/courseConfig.js` | Added `contentManifestVersion: '2026.1'` |
| `oekonometrie/js/state/storage.js` | Wired learner-backbone keys; exported attempt/mistake append/list APIs |
| `oekonometrie/js/features/exam.js` | Wired module slug + quick-exam attempt/mistake logging callbacks |
| `oekonometrie/js/features/fullExam.js` | Wired `moduleSlug` and `onExamSubmitted` → learner attempt payload |
| `oekonometrie/js/features/mistakeReview.js` | **New** module adapter using `createMistakeReviewModule` |
| `oekonometrie/js/features/dashboard.js` | Added mistake-review entry button and honest derived-metrics panel |
| `oekonometrie/js/data/contentManifest.js` | **New** canonical manifest/provenance + mode-index bridge payload |
| `oekonometrie/js/main.js` | Wired `mistakeReview` and `portalBridge` (`window.__oekonometrieContentManifest`) |
| `docs/audits/oekonometrie-migration.md` | This migration report |

## Adapter decisions (non-destructive)

1. **Curriculum model preserved:** `CURRICULUM`-driven chapter/content construction remains untouched; no flattening into generic chapter JSON.
2. **R layer preserved:** R-application content remains in `R_BLOCKS_BY_ID` and module renderer behavior; no generic replacement.
3. **Provenance honesty:** Per-concept source references are initialized as empty arrays (no invented PDF paths).
4. **Exam integration additive:** Existing exam UX is unchanged; only submit-time hooks append learner attempts.

## Remaining gaps to platform standard

1. **Primary source path mapping:** `OEKONOMETRIE_CONCEPT_PRIMARY_REFS` still needs curated course-file anchors for stronger traceability.
2. **Full-exam mistake extraction by concept:** Not added because full-exam questions currently do not carry stable concept IDs for safe mapping.
3. **Metric maturity dependency:** Some dashboard sections remain empty until enough attempts/mistakes are generated in user storage (expected and honest).

## Module-specific by design (intentionally not standardized away)

- `CURRICULUM` as the source structure for content sequencing and task scaffolding.
- Dedicated R application blocks and tab flow tied to econometrics workflows.
- Econometrics-specific graph concepts and diagnostics-focused interactive panels.
- Existing full-exam narratives and task framing aligned to module exercise style.

## Risks / notes

- **Storage migration:** New localStorage keys start empty for existing users; no destructive migration performed.
- **Manifest semantics:** `__oekonometrieContentManifest` is a bridge payload for tooling/devtools, not a learner-facing behavior change.
- **Deployability:** Changes are ES-module additive and keep the static site deployable.
