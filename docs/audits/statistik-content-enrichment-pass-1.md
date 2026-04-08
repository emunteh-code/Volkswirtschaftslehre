# Statistik Content Enrichment Pass 1

## Scope
- Module: `statistik` only.
- Goal: improve real pedagogical depth (not infra polish), grounded in existing course-structured content.
- Benchmark reference: `mikro1` depth standards (interpretation-first reasoning, trap density, worked transfer), adapted to statistics workflows.

## Audit snapshot (before changes)
- Strong baseline already present:
  - broad concept coverage across deskriptiv, Inferenz, Regression, ANOVA, nonparametric tests, and R-praxis,
  - many worked chapter tasks and full-exam basics,
  - interpretation notes already present in multiple sections.
- Highest-value weak spots identified:
  1. **Interpretation guidance under pressure**: some key tasks still ended at computation instead of decision-language quality.
  2. **Test-selection logic**: z vs t, paired vs unpaired, and one-/two-sided design needed denser explicit trap training.
  3. **Chapter-end retrieval traps**: outlier-robust summary logic and p-value misreadings were underrepresented in decision-task format.
  4. **Formula/result/meaning linkage**: some drills needed tighter "what the number means in words" reinforcement.

## What changed

### 1) Enriched chapter-end content objects (`CONTENT`)
- File: `statistik/js/data/chapters.js`
- Concepts enriched:
  - `deskriptiv`
  - `testen`
  - `z_test`
  - `zwei_stichproben`
- New learning objects/examples added:
  - **`deskriptiv`**: outlier-sensitive interpretation task (mean vs median vs spread reporting).
  - **`testen`**: one-/two-sided hypothesis-direction decision task with method-risk explanation.
  - **`z_test`**: explicit z-vs-t selection task (unknown sigma, finite n).
  - **`zwei_stichproben`**: paired-design test-selection trap task (difference-based logic).

### 2) Enriched trap-aware quick-exam drill objects (`STEP_PROBLEMS`)
- File: `statistik/js/data/stepProblems.js`
- Existing drill families expanded:
  - `deskriptiv`: new `stat_desk_2` (outlier trap).
  - `testen`: new `stat_test_2` (p-value interpretation trap).
- New drill families added:
  - `z_test`: `stat_z_1` (z vs t selection logic).
  - `zwei_stichproben`: `stat_2s_1` (paired vs unpaired decision logic).
  - `regression`: `stat_reg_1` (significance vs relevance vs causality trap).
- Pedagogical effect:
  - stronger interpretation-first sequence (decision -> calculation meaning -> validation),
  - higher trap density on recurring exam confusions,
  - tighter linkage between formula output and defensible interpretation language.

## Exact files changed
- `statistik/js/data/chapters.js`
- `statistik/js/data/stepProblems.js`
- `docs/audits/statistik-content-enrichment-pass-1.md`

## Exact concepts/sections enriched
- `deskriptiv`: robust interpretation under outliers.
- `testen`: directional hypothesis setup and p-value decision language.
- `z_test`: model/test selection boundary (`sigma` known vs unknown).
- `zwei_stichproben`: paired structure detection and correct test path.
- `regression` (drill layer): significance vs practical relevance and anti-causality trap.

## Exact new learning objects or examples added
- New chapter tasks:
  - outlier-sensitive descriptive interpretation task,
  - one-sided vs two-sided hypothesis decision task,
  - z-vs-t method-selection task,
  - paired-vs-unpaired test-selection task.
- New step-problem bundles:
  - `stat_desk_2`
  - `stat_test_2`
  - `stat_z_1`
  - `stat_2s_1`
  - `stat_reg_1`

## Remaining gaps (post pass 1)
1. **Graph/visual diagnostics are still selective**
   - The pass improves interpretation and test logic, but does not broaden visual diagnostic walkthroughs across all chapters.
2. **Full-exam breadth unchanged**
   - This pass targets chapter/retrieval depth and trap training; full-exam expansion should remain a separate exam-content pass.
3. **Advanced model-diagnostics depth remains limited**
   - Regression diagnostics (e.g., residual plots, heteroskedasticity checks) are present in spirit but not comprehensively expanded in this pass.

## Why unresolved gaps remain
- Scope discipline: pass 1 focuses on highest-value learning depth gains without broad redesign.
- Source faithfulness and deployability: additive, structurally aligned improvements only where grounding is already clear in current module content.
