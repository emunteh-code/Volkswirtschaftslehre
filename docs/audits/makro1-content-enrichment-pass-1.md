# Makro1 Content Enrichment Pass 1

## Scope
- Module: `makro1` only.
- Goal: pedagogical depth uplift on real content (not infrastructure polish), grounded in existing module/course structure.
- Benchmark reference: `mikro1` depth standards (worked reasoning, trap-awareness, retrieval pressure), adapted to Makro I logic.

## Audit snapshot (before changes)
- Strong baseline already present:
  - coherent concept line over 13 chapters,
  - formula panels and chapter tasks,
  - full-exam set (`probeklausur_1..3`),
  - step-based quick exam flow.
- Highest-value weak spots identified:
  1. **Chapter-end retrieval density**: many core concepts had only two retrieval tasks.
  2. **Trap-aware practice**: several standard exam confusions were not explicitly stress-tested.
  3. **Worked transfer examples**: some high-frequency exam hybrids (e.g., balanced-budget logic, combined real-rate shocks) were underrepresented.
  4. **Formula-to-interpretation linkage**: key formulas existed, but some concept blocks lacked explicit “interpret first, compute second” reinforcement in drills.

## What changed

### 1) Enriched chapter-end content objects (`CONTENT`)
- File: `makro1/js/data/chapters.js`
- Concepts enriched:
  - `multiplikator`
  - `politikmix`
  - `realzins`
  - `phillips`
- New learning objects/examples added:
  - **`multiplikator`**: balanced-budget worked task (`ΔG = ΔT`) with explicit multiplier decomposition.
  - **`politikmix`**: explicit policy-mix trap task (“IS shift alone determines effect” is false).
  - **`realzins`**: combined scenario with falling inflation expectations + rising risk premium (real credit-rate synthesis).
  - **`phillips`**: explicit NAIRU-gap trap task (why `u` alone is insufficient without `u_n`).

### 2) Enriched trap-aware quick-exam drill objects (`STEP_PROBLEMS`)
- File: `makro1/js/data/stepProblems.js`
- New step-problem groups added:
  - `mk1_mult_2` (balanced-budget asymmetry)
  - `mk1_policy_2` (crowding-out intensity + LM condition dependence)
  - `mk1_real_2` (double financing shock)
  - `mk1_pc_2` (NAIRU gap identification trap)
- Pedagogical effect:
  - stronger decision→execution→validation chain,
  - clearer anti-pattern checks for frequent exam mistakes,
  - more retrieval opportunities without changing module architecture.

## Exact files changed
- `makro1/js/data/chapters.js`
- `makro1/js/data/stepProblems.js`
- `docs/audits/makro1-content-enrichment-pass-1.md`

## Exact concepts/sections enriched
- `multiplikator`: chapter task set expanded with balanced-budget transfer.
- `politikmix`: chapter task set expanded with LM-dependence/crowding-out trap.
- `realzins`: chapter task set expanded with Fisher + risk-premium combined case.
- `phillips`: chapter task set expanded with NAIRU-gap interpretation trap.
- Quick-exam drills for the same concept family expanded via 4 new step-problem bundles.

## Remaining gaps (post pass 1)
1. **Renderer-level pedagogy gap to mikro1 remains**  
   - `makro1` still lacks mikro1-style surface-level adaptive overlays (semantic/exam-render enhancements).  
   - Not addressed in this pass by design (content-focused only).
2. **Graph-bound worked walkthrough density still selective**  
   - Added formula/logic linkage in tasks, but no broad graph-script expansion across all graph concepts.  
   - Left for future targeted graph pedagogy pass.
3. **Full-exam item density unchanged in this pass**  
   - This pass prioritised concept and drill depth in chapter/retrieval flow; full-exam expansion can follow in a dedicated exam-content pass.

## Why unresolved gaps remain
- To keep scope constrained to “content enrichment pass 1” and avoid broad redesign or architecture-level shifts.
- To preserve existing module strengths and deployability while improving highest-value learning objects first.
