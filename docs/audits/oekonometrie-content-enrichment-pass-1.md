# Oekonometrie Content Enrichment Pass 1

## Scope
- Module: `oekonometrie` only.
- Goal: deepen real pedagogical content quality (not infrastructure), grounded in the existing curriculum and R-linked structure.
- Benchmark reference: `mikro1` depth standard (interpretation-first, trap-aware reasoning, retrieval pressure), adapted to econometrics logic.

## Audit snapshot (before changes)
- Strong baseline already present:
  - rich `CURRICULUM` concept line across assumptions, OLS properties, inference, diagnostics, robust corrections, and serial dependence,
  - worked chapter tasks with formula support and intuition bridges,
  - dedicated R layer (`rBlock`) preserved and concept-coupled.
- Highest-value weak spots identified:
  1. **Interpretation-vs-significance separation** needed denser retrieval (students can compute t, but over-interpret p-values causally).
  2. **Assumption-diagnosis logic** (especially Exogenität/OVB) needed more explicit decision tasks under common exam traps.
  3. **Diagnostics-to-action mapping** for heteroskedasticity/autocorrelation needed clearer first-step decision logic.
  4. **Chapter-end trap density** around "fit/significance implies causality" and "trend in y implies autocorrelation" was underrepresented.

## What changed

### 1) Enriched chapter-end content objects (`CURRICULUM` -> `CONTENT`)
- File: `oekonometrie/js/data/curriculum.js`
- Concepts enriched:
  - `exogeneity`
  - `endogeneity_ovb`
  - `t_test`
  - `heteroskedasticity`
  - `autocorrelation`
- New learning objects/examples added:
  - **`exogeneity`**: new trap task separating statistical significance from causal exogeneity claims.
  - **`endogeneity_ovb`**: new boundary-case task ("relevant omitted variable but Cov(x,z)=0") using the bias formula explicitly.
  - **`t_test`**: new significance-vs-economic-relevance interpretation task.
  - **`heteroskedasticity`**: new diagnostics/decision task clarifying robust-SE-first logic before model replacement.
  - **`autocorrelation`**: new DW/trend trap task focusing diagnosis on error structure rather than y-level trend alone.

### 2) Retrieval/drill effect via existing pipeline
- File impact path:
  - `oekonometrie/js/data/curriculum.js` (new tasks)
  - `oekonometrie/js/data/chapters.js` (already curriculum-driven, no structural rewrite needed)
  - `oekonometrie/js/data/stepProblems.js` (already auto-derived from curriculum tasks)
- Pedagogical effect:
  - stronger interpretation-first practice,
  - denser assumption-diagnosis and correction-choice logic,
  - stronger link between result, assumption status, and meaning in exam language.

## Exact files changed
- `oekonometrie/js/data/curriculum.js`
- `docs/audits/oekonometrie-content-enrichment-pass-1.md`

## Exact concepts/sections enriched
- `exogeneity`: significance vs identification trap.
- `endogeneity_ovb`: no-bias boundary case despite omitted relevance (if Cov(x,z)=0).
- `t_test`: significance vs practical effect-size interpretation.
- `heteroskedasticity`: diagnostic evidence -> robust inference decision path.
- `autocorrelation`: trend-in-y vs serial-correlation-in-errors distinction + DW interpretation.

## Exact new learning objects or examples added
- 5 new chapter-level tasks (one in each concept above), each with:
  - explicit decision logic,
  - stepwise justification,
  - trap-aware correction of frequent inference mistakes.

## Remaining gaps (post pass 1)
1. **Full-exam item density unchanged**
   - This pass targets concept-depth and retrieval logic, not broad full-exam expansion.
2. **Advanced multi-failure diagnostics still selective**
   - Combined failure settings (e.g., simultaneous endogeneity + serial dependence in one integrated workflow) remain limited.
3. **R-layer expansion not broadened in this pass**
   - Existing R blocks stay intact; no large new R-case additions were made to keep scope content-focused and deployable.

## Why unresolved gaps remain
- Scope discipline: pass 1 prioritizes highest-value concept/trap enrichment without broad redesign.
- Source-faithful execution: only additive improvements where grounding is already explicit in existing curriculum and module logic.
- Module-strength preservation: no flattening of curriculum architecture or R-specific learning layer.
