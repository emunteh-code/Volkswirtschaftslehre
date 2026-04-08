# Recht Granularity Check Pass 2 (Audit Only)

## Scope
- Module: `recht`
- Pass type: post-split granularity audit after pass 1
- Constraint: audit only (no code/content rewrite)

## Exact files inspected
- `recht/js/data/chapters.js`
- `recht/js/data/stepProblems.js`
- `recht/js/data/conceptLinks.js`
- `recht/js/data/intuition.js`
- `recht/js/data/masteryData.js`
- `recht/js/data/fullExams.js`
- `docs/audits/recht-concept-granularity-audit-pass-1.md`
- `docs/audits/recht-concept-granularity-pass-1.md`

## Current concept count
- Current concepts in `CHAPTERS`: **14**
- Previous pre-split state: 12
- Net structural change from pass 1: +2 (as intended)

## Check of newly implemented splits

### 1) `dissens_anfechtung` -> `dissens` + `anfechtung`
- **Pedagogically real:** yes.
  - Dissens and Anfechtung are distinct doctrinal pipelines with different triggers and consequences.
- **Navigation-useful:** yes.
  - Current links separate both nodes and keep explicit progression (`dissens` -> `anfechtung`).
- **Over-split risk:** low.

### 2) `ruecktritt_widerruf` -> `ruecktritt` + `verbraucherwiderruf`
- **Pedagogically real:** yes.
  - Rücktritt (Leistungsstörung) and Verbraucherwiderruf (Verbraucherschutzrecht) are distinct schema families.
- **Navigation-useful:** yes.
  - Current links preserve both as separate destinations from `schuldrecht_intro` and distinguish trigger logic.
- **Over-split risk:** low.

## Under-splitting check (remaining broad concepts)

Potential broad candidates reviewed:
- `willenserklaerung`: still combines WE fundamentals + Vertragsschluss.
  - Judgment: still acceptable as a coherent entry unit for this stage; optional split remains non-mandatory.
- `methodik`: broad but intentionally integrated (Anspruchsfrage, Gutachtenstil, Subsumtion) and exam-practical as one method spine.
- `schadensersatz`: broad schema family but still coherent for current map maturity.

Conclusion on under-splitting:
- **No mandatory additional split** identified for pass 2.

## Thinness check (new split concepts)

Conceptual thinness:
- No split node appears academically artificial.

Operational thinness (implementation reality):
- `dissens` and `anfechtung` currently share the same underlying chapter content object and drill bundle.
- `ruecktritt` and `verbraucherwiderruf` currently share the same underlying chapter content object and drill bundle.

Interpretation:
- This is primarily a **content distribution/depth differentiation issue**, not a concept-map validity issue.
- The split nodes are justified and navigation-useful; they can be further differentiated in future enrichment passes.

## Over-splitting check
- No evidence of cosmetic or fake splitting.
- No split node is pedagogically empty in doctrinal meaning.
- **No merge warranted**.

## Exact granularity judgment
- Current post-pass-1 granularity status: **appropriately granular**.
- Residual improvement needs are mainly:
  - richer split-specific drill/content assignment,
  - not further taxonomy expansion.

## Recommendations
- Pass 2 split/merge decision: **No further granularity changes warranted.**
- If a later depth pass is requested, prioritize:
  - unique drill allocation between `dissens` vs `anfechtung`,
  - unique drill allocation between `ruecktritt` vs `verbraucherwiderruf`,
  - while keeping current concept IDs unchanged.

## Explicit final statement
- After pass 1, `recht` is **not materially under-split** in high-value exam-relevant areas and **not over-split**.
- **No additional split or merge should be executed in granularity check pass 2.**
