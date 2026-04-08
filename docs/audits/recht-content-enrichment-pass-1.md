# Recht Content Enrichment Pass 1

## Scope
- Module: `recht` only.
- Goal: real pedagogical depth uplift on legal case handling (not infrastructure).
- Benchmark reference: `mikro1` depth standard (structured reasoning, trap awareness, retrieval pressure), adapted to legal Anspruchslogik and Gutachtenstil.

## Audit snapshot (before changes)
- Strong baseline already present:
  - coherent chapter line from Grundlagen to Schuldrecht AT,
  - existing doctrine-first explanations with case-style tasks,
  - full-exam sets already aligned with major concept families.
- Highest-value weak spots identified:
  1. **Issue-spotting under pressure**: some tasks recognized doctrine, but not always in a strict structure-first workflow.
  2. **Anspruchsaufbau/Gutachtenstil scaffolding**: needed denser retrieval around explicit step sequence (Issue -> Rule -> Subsumption -> Result).
  3. **Doctrinal distinction traps**: insufficient drill density for `Dissens vs Anfechtung`, `Vertreter vs Bote`, `Rücktritt vs Widerruf`.
  4. **Chapter-end retrieval depth**: needed more worked mini-cases linking issue/rule/subsumption/result in one chain.

## What changed

### 1) Enriched chapter-end content objects (`CONTENT`)
- File: `recht/js/data/chapters.js`
- Concepts enriched:
  - `methodik`
  - `dissens_anfechtung`
  - `stellvertretung`
  - `ruecktritt_widerruf`
- New learning objects/examples added:
  - **`methodik`**: new IRSR/Gutachtenstil mini-case requiring explicit structure-first claim processing.
  - **`dissens_anfechtung`**: new trap mini-case clarifying objective consensus vs later anfechtung path.
  - **`stellvertretung`**: new doctrinal mini-case for `Vertreter`/`Bote` distinction and consequence path.
  - **`ruecktritt_widerruf`**: new issue-spotting mini-case that separates solution rights by trigger and purpose.

### 2) Enriched trap-aware quick-exam drill objects (`STEP_PROBLEMS`)
- File: `recht/js/data/stepProblems.js`
- New step-problem bundles added:
  - `re_me_2` (IRSR structure discipline)
  - `re_da_2` (Dissens vs Anfechtung trap)
  - `re_st_2` (Vertreter vs Bote decision logic)
  - `re_rw_2` (Rücktritt vs Widerruf separation)
- Pedagogical effect:
  - stronger structure-first practice in timed settings,
  - clearer doctrinal distinction under frequent exam confusions,
  - better linkage between issue, norm trigger, subsumption step, and result sentence.

## Exact files changed
- `recht/js/data/chapters.js`
- `recht/js/data/stepProblems.js`
- `docs/audits/recht-content-enrichment-pass-1.md`

## Exact concepts/sections enriched
- `methodik`: Anspruchsaufbau/Gutachtenstil workflow discipline.
- `dissens_anfechtung`: doctrinal boundary and sequence logic.
- `stellvertretung`: representative-vs-messenger doctrinal separation.
- `ruecktritt_widerruf`: rights-of-withdrawal vs performance-disturbance remedy separation.

## Exact new learning objects or examples added
- New chapter-level mini-cases: 4
  - 1 each in the concept sections listed above.
- New step-drill bundles: 4
  - `re_me_2`, `re_da_2`, `re_st_2`, `re_rw_2`.

## Remaining gaps (post pass 1)
1. **Full-exam case density unchanged**
   - This pass focused on chapter/retrieval strengthening, not broad full-exam expansion.
2. **Deep multi-claim chaining remains selective**
   - Added structure-first mini-cases, but no broad expansion into very long Anspruchsketten with extensive Anspruchskonkurrenz.
3. **Advanced argumentation depth still bounded**
   - The pass strengthens doctrinal distinction and subsumption scaffolding, but not a full-scale Ausbau of argumentation variants across all edge constellations.

## Why unresolved gaps remain
- Scope discipline: pass 1 targets highest-value doctrinal and methodic gains without broad redesign.
- Source-faithful approach: only additive enrichments where existing module structure already provided clear doctrinal grounding.
- Deployability and module-strength preservation: no infrastructure or renderer changes, no flattening of legal workflow.
