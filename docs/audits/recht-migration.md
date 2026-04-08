# Recht platform backbone migration (audit)

**Date:** 2026-04-08  
**Benchmark:** `mikro1` shell + migrated modules (`makro1`, `makro2`, `statistik`, `oekonometrie`).

## Summary

`recht` is upgraded to the current platform backbone using additive adapters only: canonical manifest/provenance bridge, learner-state keys, quick/full-exam backbone hooks, mistake review integration, and dashboard-derived metrics integration. Existing legal workflow and visible behavior are preserved.

## Audit against backbone and mikro1 benchmark

| Capability | mikro1 baseline | recht before | recht after |
|------------|------------------|--------------|-------------|
| Shared app shell (`createPortalApp`) | Yes | Yes | Yes (unchanged) |
| Canonical content manifest + provenance bridge | Partial/legacy in mikro1; canonical in migrated modules | No | Yes (`recht.contentManifest`) |
| Learner-state attempts/mistakes keys | Optional by module | No | Yes |
| Quick exam learner logging | Supported by core when wired | Not wired | Wired (`appendLearnerAttempt`, `appendMistakeLogEntry`) |
| Full exam backbone submission logging | Supported by core when wired | Not wired | Wired (`onExamSubmitted` attempt append) |
| Mistake review UI | Optional by module | No | Yes |
| Dashboard-derived honest metrics | Optional by module | No | Yes |
| Law-specific answer/workflow structure | Module-specific | Present | Preserved |
| Graph layer status | Varies by module | Explicit no-graph stub | Preserved and documented honestly |

## Exact files changed

| File | Change |
|------|--------|
| `recht/js/data/srsConfig.js` | Added `ATTEMPTS_KEY`, `MISTAKES_KEY`, `MISTAKE_REVIEW_KEY` |
| `recht/js/data/courseConfig.js` | Added `contentManifestVersion: '2026.1'` |
| `recht/js/state/storage.js` | Wired learner-backbone keys; exported attempt/mistake append/list APIs |
| `recht/js/features/exam.js` | Wired module slug + quick-exam attempt/mistake logging callbacks |
| `recht/js/features/fullExam.js` | Wired `moduleSlug` and `onExamSubmitted` → learner attempt payload |
| `recht/js/features/mistakeReview.js` | **New** module adapter using `createMistakeReviewModule` |
| `recht/js/features/dashboard.js` | Added mistake-review entry button and honest derived-metrics panel |
| `recht/js/data/contentManifest.js` | **New** canonical manifest/provenance + mode-index bridge payload |
| `recht/js/main.js` | Wired `mistakeReview` and `portalBridge` (`window.__rechtContentManifest`) |
| `docs/audits/recht-migration.md` | This migration report |

## Adapter decisions (non-destructive)

1. **Legal workflow preserved:** Existing structure centered on definitions, Anspruchsdenken, Gutachtenstil, and Subsumtion remains unchanged.
2. **Law-specific answer structure preserved:** Step/task answer expectations were not generalized or flattened.
3. **Graph stubs kept honest:** `GRAPH_CONCEPTS` remains empty and graph panel placeholder remains explicit; no fake graph completion added.
4. **Provenance honesty:** Per-concept source references are kept as empty arrays until stable legal source anchors are curated.

## Remaining gaps to platform standard

1. **Primary source path mapping:** `RECHT_CONCEPT_PRIMARY_REFS` still needs curated source anchors for stronger traceability.
2. **Full-exam mistake extraction by concept:** Not added because current full-exam item structure does not expose robust per-question concept mapping.
3. **Metric population lag:** Dashboard-derived sections are correct but will be sparse initially until attempts/mistakes accumulate.
4. **Graph capability:** Module intentionally remains non-graph-centric; no graph metrics beyond explicit not-available status.

## Module-specific by design (intentionally preserved)

- Law-module pedagogy and legal reasoning workflow (claim structure + subsumption sequence).
- Legal case-style task and explanation patterns.
- Existing no-graph design with explicit placeholder text.
- Current full-exam legal narrative style and answer handling.

## Risks / notes

- **Storage migration:** New keys start empty for existing users; no destructive migration.
- **Manifest semantics:** `__rechtContentManifest` is bridge metadata for tooling/dev inspection, not a learner-facing content rewrite.
- **Deployability:** Changes are additive ES-module wiring and keep static deployment intact.
