# Statistik Granularity Check Pass 2 (Audit Only)

## Scope
- Module: `statistik`
- Pass type: post-split granularity audit after pass 1
- Constraint: audit only (no code/content rewrite)

## Exact files inspected
- `statistik/js/data/chapters.js`
- `statistik/js/data/stepProblems.js`
- `statistik/js/data/conceptLinks.js`
- `statistik/js/data/intuition.js`
- `statistik/js/data/masteryData.js`
- `docs/audits/statistik-concept-granularity-audit-pass-1.md`
- `docs/audits/statistik-concept-granularity-pass-1.md`

## Current concept count
- Current concepts in `CHAPTERS`: **14**
- Previous pre-split state: 12
- Net structural change from pass 1: +2 (as intended)

## Check of newly introduced splits

### 1) `schaetzen` split
- Implemented as:
  - `schaetzen_verfahren`
  - `schaetzen_eigenschaften_intervalle`
- Judgment:
  - **Pedagogically real:** yes (method construction vs quality/interval interpretation are distinct exam tasks).
  - **Navigation-useful:** yes (separate retrieval paths for method choice vs estimator quality/CI interpretation).
  - **Over-split risk:** low.

### 2) `regression` split
- Implemented as:
  - `regression_schaetzung_inferenz`
  - `regression_diagnostik_prognose`
- Judgment:
  - **Pedagogically real:** yes (estimation/inference and diagnostics/prognosis are distinct reasoning pipelines).
  - **Navigation-useful:** yes (concept-link graph separates inference from diagnostics flow).
  - **Over-split risk:** low.

## Under-splitting check (remaining broad concepts)
- `testen` remains broad by design but is an intentional umbrella over already separated families:
  - `z_test`
  - `zwei_stichproben`
  - `varianzanalyse`
  - `nichtparametrisch`
- `deskriptiv`, `wahrscheinlichkeit`, `verteilungen` remain broad but coherent blocks, and further splitting in this pass would likely be cosmetic rather than exam-value additive.
- `rlab` is broad in application scope, but this is a depth/distribution issue, not a concept-map granularity defect.

Conclusion on under-splitting:
- **No mandatory additional split** identified in this pass.

## Thinness check (newly split concepts)
- Conceptual thinness:
  - None of the new four split nodes is academically artificial.
- Operational thinness (implementation reality):
  - `schaetzen_verfahren` and `schaetzen_eigenschaften_intervalle` currently share the same underlying content/drill object.
  - `regression_schaetzung_inferenz` and `regression_diagnostik_prognose` currently share the same underlying content/drill object.
- Interpretation:
  - This is primarily a **content distribution depth issue**, not a reason to merge concepts back.
  - The slots are justified; they just need later differentiated learning object distribution in a content-enrichment pass.

## Over-splitting check
- No evidence of academically fake or navigation-noisy split nodes.
- No split appears to create dead-end or non-meaningful navigation.
- **No merge warranted**.

## Exact granularity judgment
- Current post-pass-1 granularity status: **appropriately granular**.
- Residual issues are mainly:
  - depth differentiation and unique drill distribution across new split pairs,
  - not concept-map architecture.

## Recommendations
- Pass 2 split/merge decision: **No further granularity changes warranted.**
- Recommended next step (outside this audit pass): targeted content-enrichment distribution so each new split node has more distinct drills/examples while preserving source fidelity.

## Explicit final statement
- After pass 1, the Statistik concept map is **not meaningfully under-split** in high-value exam-relevant areas and **not over-split**.
- **No additional split or merge should be executed in granularity pass 2.**
