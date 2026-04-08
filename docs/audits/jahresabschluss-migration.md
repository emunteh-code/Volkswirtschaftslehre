# Jahresabschluss platform backbone migration (audit)

**Date:** 2026-04-08  
**Benchmark:** `mikro1` shell + migrated modules (`makro1`, `makro2`, `statistik`, `oekonometrie`, `recht`).

## Summary

`jahresabschluss` is upgraded to the current platform backbone using additive adapters only: canonical manifest/provenance bridge, learner-state keys, quick/full-exam backbone hooks, mistake review integration, and dashboard-derived metrics integration. Existing accounting-specific workflow, notation, and Soll/Haben logic are preserved.

## Audit against backbone and mikro1 benchmark

| Capability | mikro1 baseline | jahresabschluss before | jahresabschluss after |
|------------|------------------|------------------------|-----------------------|
| Shared app shell (`createPortalApp`) | Yes | Yes | Yes (unchanged) |
| Canonical content manifest + provenance bridge | Partial/legacy in mikro1; canonical in migrated modules | No | Yes (`jahresabschluss.contentManifest`) |
| Learner-state attempts/mistakes keys | Optional by module | No | Yes |
| Quick exam learner logging | Supported by core when wired | Not wired | Wired (`appendLearnerAttempt`, `appendMistakeLogEntry`) |
| Full exam backbone submission logging | Supported by core when wired | Not wired | Wired (`onExamSubmitted` attempt append) |
| Mistake review UI | Optional by module | No | Yes |
| Dashboard-derived honest metrics | Optional by module | No | Yes |
| Accounting-specific booking/sign workflow | Module-specific | Present | Preserved |
| Graph layer status | Varies by module | Explicit no-graph stub | Preserved and documented honestly |

## Exact files changed

| File | Change |
|------|--------|
| `jahresabschluss/js/data/srsConfig.js` | Added `ATTEMPTS_KEY`, `MISTAKES_KEY`, `MISTAKE_REVIEW_KEY` |
| `jahresabschluss/js/data/courseConfig.js` | Added `contentManifestVersion: '2026.1'` |
| `jahresabschluss/js/state/storage.js` | Wired learner-backbone keys; exported attempt/mistake append/list APIs |
| `jahresabschluss/js/features/exam.js` | Wired module slug + quick-exam attempt/mistake logging callbacks |
| `jahresabschluss/js/features/fullExam.js` | Wired `moduleSlug` and `onExamSubmitted` → learner attempt payload |
| `jahresabschluss/js/features/mistakeReview.js` | **New** module adapter using `createMistakeReviewModule` |
| `jahresabschluss/js/features/dashboard.js` | Added mistake-review entry button and honest derived-metrics panel |
| `jahresabschluss/js/data/contentManifest.js` | **New** canonical manifest/provenance + mode-index bridge payload |
| `jahresabschluss/js/main.js` | Wired `mistakeReview` and `portalBridge` (`window.__jahresabschlussContentManifest`) |
| `docs/audits/jahresabschluss-migration.md` | This migration report |

## Adapter decisions (non-destructive)

1. **Accounting workflow preserved:** Existing chapter/task flow for Kontierung, Bewertung, Rechnungsabgrenzung, and Abschlusslogik remains unchanged.
2. **Notation and sign logic preserved:** Soll/Haben conventions and accounting-specific answer expectations are kept as-is.
3. **Graph stubs kept honest:** `GRAPH_CONCEPTS` remains empty and explicit non-graph placeholder remains in place.
4. **Provenance honesty:** Per-concept source references are intentionally empty until stable source anchors are curated.

## Remaining gaps to platform standard

1. **Primary source path mapping:** `JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS` still needs curated source anchors for stronger traceability.
2. **Full-exam concept-level mistakes:** Not added because current full-exam question structure does not provide robust concept mapping for safe extraction.
3. **Metric population lag:** Dashboard-derived sections are correct but may be sparse until attempt/mistake logs accumulate.
4. **Graph capability:** Module intentionally remains non-graph-centric; no fake graph integration added.

## Module-specific by design (intentionally preserved)

- Accounting pedagogy and workflow (Bilanz/GuV logic, booking flows, periodization).
- Accounting notation and sign/booking conventions (Soll/Haben).
- Existing task structure for valuation and posting logic.
- Current no-graph design with explicit placeholder.

## Risks / notes

- **Storage migration:** New keys start empty for existing users; no destructive migration.
- **Manifest semantics:** `__jahresabschlussContentManifest` is bridge metadata for tooling/dev inspection, not a learner-facing rewrite.
- **Deployability:** Changes are additive ES-module wiring and keep static deployment intact.
