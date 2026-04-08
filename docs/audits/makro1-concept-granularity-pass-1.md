# Makro1 Concept Granularity Pass 1

## Scope
- Module: `makro1`
- Basis: `docs/audits/makro1-concept-granularity-audit-pass-1.md`
- Pass type: concept-map granularity implementation only
- Constraint followed: implemented only the mandatory conservative split from the audit

## Exact Split Implemented
1. `realzins` ->
   - `realzins_fisher_erwartungen`
   - `realzins_risikopraemie_krisenkanal`

No optional splits were implemented in this pass (`phillips`, `politikmix` remain unsplit by design).

## Concept Count (Exact)
- Before: **13** concepts (`makro1/js/data/chapters.js`)
- After: **14** concepts (`makro1/js/data/chapters.js`)
- Net change: **+1**

## Exact Files Changed
1. `makro1/js/data/chapters.js`
2. `makro1/js/data/stepProblems.js`
3. `makro1/js/data/conceptLinks.js`
4. `makro1/js/data/intuition.js`
5. `makro1/js/data/masteryData.js`
6. `makro1/js/data/contentManifest.js`
7. `makro1/js/data/fullExams.js`
8. `docs/audits/makro1-concept-granularity-pass-1.md`

## What Changed and Why

### 1) Chapter / concept map split
- In `chapters.js`, replaced the single chapter concept ID `realzins` with:
  - `realzins_fisher_erwartungen`
  - `realzins_risikopraemie_krisenkanal`
- Reason: matches the audit’s source-grounded distinction between Fisher/expectations translation and risk-premium/crisis transmission.

### 2) Content integrity preservation
- In `chapters.js`, content object was conservatively reassigned:
  - `CONTENT.realzins_fisher_erwartungen = CONTENT.realzins`
  - `CONTENT.realzins_risikopraemie_krisenkanal = CONTENT.realzins`
  - then old `CONTENT.realzins` removed.
- Reason: preserve all current learning objects without inventing new material; keep behavior stable while concept IDs become granular.

### 3) Drill mapping consistency
- In `stepProblems.js`, base key was moved to `realzins_fisher_erwartungen`.
- Added explicit mapping:
  - `BASE_STEP_PROBLEMS.realzins_risikopraemie_krisenkanal = BASE_STEP_PROBLEMS.realzins_fisher_erwartungen`
- Reason: maintain deployable quick-exam/drill coverage for both new IDs without fake content generation.

### 4) Navigation / prerequisite graph alignment
- In `conceptLinks.js`, all `realzins` references were replaced by the two new IDs.
- `realzins_fisher_erwartungen` was positioned as upstream to `realzins_risikopraemie_krisenkanal`, and both are connected to downstream `islmpc` / `erwartungen`.
- Reason: keep learning path coherent with the split while preserving existing module flow.

### 5) Intuition layer split
- In `intuition.js`, replaced the broad `realzins` intuition entry with two focused entries:
  - Fisher/expected-inflation logic
  - risk-premium/spread/crisis-channel logic
- Reason: improve concept-level retrieval and navigation utility along the same conservative split boundary.

### 6) Mastery outcomes split
- In `masteryData.js`, replaced one broad `realzins` mastery block with two targeted mastery blocks matching the two new IDs.
- Reason: maintain mastery compatibility with updated concept IDs and exam-relevant distinction.

### 7) Provenance mapping update
- In `contentManifest.js`, replaced `realzins` primary refs with:
  - `realzins_fisher_erwartungen` -> `Kap6` + VL6 summary
  - `realzins_risikopraemie_krisenkanal` -> `Kap6` + VL6 summary + `Uebung5`
- Reason: keep source mapping explicit and concept-specific under the split.

### 8) Full-exam concept attribution update
- In `fullExams.js`, the affected exam block concept ID was moved from `realzins` to `realzins_risikopraemie_krisenkanal`.
- Reason: preserve exam tagging validity after ID split; block content is heavily crisis/risk-premium oriented while still containing related Fisher logic.

## Remaining Broad Concepts That Stay Unsplit (Intentional)
- `phillips`: still somewhat broad but intentionally unsplit in pass 1 (optional split only in audit).
- `politikmix`: still somewhat broad but intentionally unsplit in pass 1 (optional split only in audit).
- `erwartungen`: broad capstone concept retained as-is; no mandatory split in audit.

## Deployability / Consistency Check
- All direct `realzins` concept-ID references in `makro1/js/data` were migrated to the new IDs.
- New IDs are present across core structures (chapters, drills, links, intuition, mastery, provenance, full-exam attribution).
- Lint check on touched areas: no linter errors.

## Risks / Gaps
- Current split is structurally valid but still reuses shared content/drills between the two new IDs.
- This is intentional for pass 1 (granularity-first); deeper differentiation belongs to a later depth/enrichment pass, not this granularity pass.
