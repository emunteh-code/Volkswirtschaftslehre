# Makro2 Content Enrichment Pass 1

## Scope
- Module: `makro2` only.
- Goal: deepen real learning content (not infrastructure), grounded in existing module/course structure.
- Benchmarks used: `mikro1` pedagogy depth and the recent `makro1` enrichment style (targeted, trap-aware, additive).

## Audit snapshot (before changes)
- Strong baseline already present:
  - broad concept line across open-economy, policy-credibility, and growth/debt blocks,
  - chapter theory + formulas + existing retrieval tasks,
  - full-exam set (`probeklausur_1..3`) with concept-tagged blocks,
  - step-based quick exam flow.
- Highest-value weak spots identified:
  1. **Exchange-rate sign discipline** was present but under-stressed in adversarial trap form.
  2. **Policy/graph/exchange-rate linkage** (especially regime comparison in Mundell-Fleming) needed more explicit retrieval pressure.
  3. **UIP and Marshall-Lerner/J-curve trap density** was thinner in step-drill format than exam relevance would justify.
  4. **Debt ratio denominator logic** needed an explicit anti-pattern drill ("higher debt stock => always higher debt ratio").

## What changed

### 1) Enriched chapter-end content objects (`CONTENT`)
- File: `makro2/js/data/chapters.js`
- Concepts enriched:
  - `wechselkurs`
  - `zinsparitaet`
  - `marshall_lerner`
  - `mundell_fleming`
  - `wk_regime`
- New learning objects/examples added:
  - **`wechselkurs`**: explicit notation trap-task (`E↑` in Mengennotierung) with competitiveness interpretation.
  - **`zinsparitaet`**: worked UIP sign-chain where `i-i*<0` implies `E^e>E` in Mengennotierung.
  - **`marshall_lerner`**: worked J-curve vs. long-run elasticity diagnosis task.
  - **`mundell_fleming`**: explicit same-shock regime comparison task (flex vs. fixed exchange rate).
  - **`wk_regime`**: paritätsverteidigung channels (reserves vs. rates) and domestic activity trade-off task.

### 2) Enriched trap-aware quick-exam drill objects (`STEP_PROBLEMS`)
- File: `makro2/js/data/stepProblems.js`
- New step-problem bundles added:
  - `m2_wk_sign_trap` under `wechselkurs`
  - `m2_mf_regime` under `mundell_fleming`
  - `m2_uip_sign` under `zinsparitaet`
  - `m2_ml_jcurve` under `marshall_lerner`
  - `m2_debt_ratio_trap` under `schuldenquote`
- Pedagogical effect:
  - denser decision -> execution -> validation chains on high-frequency exam confusions,
  - stronger policy/regime transmission reasoning,
  - tighter exchange-rate sign discipline and denominator-awareness in debt logic.

## Exact files changed
- `makro2/js/data/chapters.js`
- `makro2/js/data/stepProblems.js`
- `docs/audits/makro2-content-enrichment-pass-1.md`

## Exact concepts/sections enriched
- `wechselkurs`: notation trap + real competitiveness consequence.
- `zinsparitaet`: sign-consistent UIP expectations task.
- `marshall_lerner`: short-run vs. long-run trade-balance adjustment logic.
- `mundell_fleming`: explicit policy-effect regime comparison.
- `wk_regime`: operational parity-defense channels and macro cost.
- `schuldenquote` (drill layer): debt-stock vs debt-ratio denominator trap.

## Remaining gaps (post pass 1)
1. **Graph-script walkthrough density is still selective**
   - Existing graph concepts are preserved, but this pass did not add broad, scripted graph-by-graph walkthrough expansions.
2. **Full-exam volume/depth unchanged**
   - This pass prioritized chapter/retrieval depth and trap drills; full-exam expansion should be a dedicated exam-content pass.
3. **Renderer-level adaptive pedagogy gap vs `mikro1` remains**
   - `makro2` keeps its current renderer behavior; no surface-level semantic/adaptive layer uplift was attempted in this content-only pass.

## Why unresolved gaps remain
- Scope discipline: this pass targets high-value content enrichment only, not architecture or UI redesign.
- Source-faithfulness and deployability: additive changes were chosen where concept grounding was already clear in current module structure.
