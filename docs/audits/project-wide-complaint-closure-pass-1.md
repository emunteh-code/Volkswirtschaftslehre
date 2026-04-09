# Project-Wide Complaint Closure Pass 1

Date: 2026-04-09  
Scope: Highest-value user-visible complaint closure across the live platform, with `mikro1` as the product benchmark.

## Files changed

- `assets/js/common.js`
- `mathematik/js/data/chapters.js`

## Complaint log

### A. Incorrect progress / completion percentages

- Status: `closed`
- Modules checked:
  - root landing shelf for `mikro1`, `mikro2`, `makro1`, `makro2`, `statistik`, `finanzwirtschaft`, `mathematik`, `jahresabschluss`, `recht`, `internationale-wirtschaftsbeziehungen`, `oekonometrie`
- Browser/UI reproduction notes:
  - Reproduced by seeding `50` fake stale keys into `*_progress_v1` and setting `makro2_last_v1` as the latest visit.
  - Before fix: the root hero could show `Makroökonomik II ... 100% Fortsetzen →` even though only stale keys existed.
  - After fix: hero no longer shows a fake completion percentage, and all tiles fall back to `Neu` with no progress bar when only stale keys are present.
- Root cause:
  - `shared/global`
  - `assets/js/common.js` counted all storage keys instead of only valid concept IDs for the module.
- Exact fix:
  - `assets/js/common.js` now loads each module’s real `CHAPTERS` ids and filters both progress and SRS counts against valid concept ids before computing `seen`, `due`, and `%`.

### B. Prüfungstransfer questions not opening or behaving incorrectly

- Status: `closed`
- Modules checked:
  - `mikro1`, `mikro2`, `makro1`, `makro2`, `statistik`, `finanzwirtschaft`, `mathematik`, `jahresabschluss`, `recht`, `internationale-wirtschaftsbeziehungen`, `oekonometrie`
- Browser/UI reproduction notes:
  - For each module: opened the first real concept, switched to `Aufgaben`, clicked the first guided-solution button and the first `Prüfungstransfer` reveal button.
  - In all checked modules, both buttons switched from `Lösung anzeigen` to the open state and revealed the corresponding solution block.
- Root cause:
  - No current active defect reproduced.
  - The shared renderer fallback path for `window.__toggleExamDrill` is behaving correctly in checked modules.
- Exact files changed:
  - none

### C. Broken or inconsistent Aufgaben / transfer interactions

- Status: `closed` for interaction; `partially improved` for cross-module visual parity
- Modules checked:
  - same as complaint `B`
- Browser/UI reproduction notes:
  - Interaction itself is healthy in all checked live modules: guided-task and transfer reveals open reliably.
  - This pass did not fully re-audit every Aufgaben surface for pixel-level mikro1 parity; it focused on the trust-breaking broken-interaction complaint first.
- Root cause:
  - No active cross-module interaction failure reproduced.
- Exact files changed:
  - none

### D. Colors and navigation not matching mikro1

- Status: `partially improved`
- Modules checked:
  - `mikro1` reference
  - `makro2` home
  - `statistik` home
- Browser/UI reproduction notes:
  - Sampled home shells now sit in the same broad family as `mikro1` for sidebar, home cards, and top actions.
  - No blocking navigation mismatch was reproduced in the sampled pages during this pass.
  - This pass did not re-audit every concept surface module-wide for shell drift.
- Root cause:
  - previous shell drift had already largely been handled before this pass
- Exact files changed:
  - none

### E. Aufgaben tab behavior / appearance not matching mikro1

- Status: `partially improved`
- Modules checked:
  - all live modules for interaction
  - representative visual surfaces in `makro2` and `statistik`
- Browser/UI reproduction notes:
  - Behavior is stable across all checked live modules.
  - The remaining open part is visual/pedagogical parity, not broken opening logic.
- Root cause:
  - mixed: previously shared interaction risk is closed; remaining issue is module-by-module parity polish
- Exact files changed:
  - none

### F. Graph labeling / interpretation style not matching mikro1

- Status: `still open`
- Modules checked:
  - `makro1/islm`
  - `makro2/marshall_lerner`
  - `finanzwirtschaft/intertemporale_wahl`
  - `internationale-wirtschaftsbeziehungen/overshooting`
  - `statistik/schaetzen_eigenschaften_intervalle`
  - `statistik/z_test`
  - `oekonometrie/fwl_partial_regression`
  - `oekonometrie/endogeneity_ovb`
- Browser/UI reproduction notes:
  - `makro1`, `makro2`, `finanzwirtschaft`, and `internationale-wirtschaftsbeziehungen` show segmented graph interpretation rows.
  - `oekonometrie` sampled graph concepts use mikro1-like `.gi-row` interpretation structure.
  - `statistik` sampled graph concepts still do not present graph interpretation in the same structured mikro1 family; the graph tab remains visibly weaker and less benchmark-like.
- Root cause:
  - `module-specific`
  - `statistik/js/ui/graphs.js` still uses older graph-info output patterns rather than the mikro1-style segmented graph interpretation family.
- Exact files changed:
  - none in this pass

### G. Intuition layout missing mikro1-like transfer-oriented structure

- Status: `partially improved`
- Modules checked:
  - `makro1/islm`
  - `makro2/marshall_lerner`
  - `statistik/regression_schaetzung_inferenz`
  - `finanzwirtschaft/intertemporale_wahl`
  - `jahresabschluss/anlagevermoegen`
  - `recht/willenserklaerung`
  - `internationale-wirtschaftsbeziehungen/overshooting`
  - `oekonometrie/functional_forms`
- Browser/UI reproduction notes:
  - `Transferpfad` and `Klausurmuster` are present in all sampled concepts.
  - Error framing / recognition framing remains less consistent outside `mikro1` and `oekonometrie`.
- Root cause:
  - primarily `content-density/data-level`
- Exact files changed:
  - none

### H. Inconsistent in-text math / variable accent styling

- Status: `still open`
- Modules checked:
  - same representative concepts as `G`
- Browser/UI reproduction notes:
  - Math rendering is present in sampled concepts, but quality still varies.
  - Several sampled non-benchmark modules rely on formulas + prose without consistently strong variable support or mikro1-level semantic clarity.
- Root cause:
  - mixed `LaTeX/math-rendering-level` and `content-density/data-level`
- Exact files changed:
  - none in this pass

### I. R-Anwendungen not intuitive enough project-wide

- Status: `partially improved`
- Modules checked:
  - `statistik/rlab`
  - `oekonometrie/asymptotic_normality`
- Browser/UI reproduction notes:
  - `statistik/rlab` now visibly includes step order, run guidance, interpretation, mini-task, and common mistakes.
  - `oekonometrie` sampled R exercise includes run button, interpretation, mini-task, and pitfalls, but uses a slightly different intro wording than the shared Statistik flow.
- Root cause:
  - previously shared UX weakness has been improved; remaining issue is distribution and parity, not total absence of guidance
- Exact files changed:
  - none
- Statistik-specific decision:
  - A full “R-Anwendungen everywhere relevant” parity pass is still separate work.
  - In this pass, Statistik already has a usable dedicated `R-Anwendung` surface; no additional forced tab expansion was done.

### J. Formula tabs missing variable labels / meaning support

- Status: `partially improved`
- Modules checked:
  - `makro1/islm`
  - `makro2/marshall_lerner`
  - `statistik/regression_schaetzung_inferenz`
  - `finanzwirtschaft/intertemporale_wahl`
  - `jahresabschluss/anlagevermoegen`
  - `recht/willenserklaerung`
  - `internationale-wirtschaftsbeziehungen/overshooting`
  - `oekonometrie/functional_forms`
- Browser/UI reproduction notes:
  - `makro1`, `makro2`, and `oekonometrie` sampled formula tabs expose at least some variable support.
  - `statistik`, `finanzwirtschaft`, `jahresabschluss`, `recht`, and `internationale-wirtschaftsbeziehungen` sampled concepts still show weaker variable-label support than `mikro1`.
- Root cause:
  - mostly `content-density/data-level`
- Exact files changed:
  - none

### K. Modules still feeling like different products in visible UI / pedagogy

- Status: `partially improved`
- Modules checked:
  - representative home/theory/task/graph surfaces in `makro2`, `statistik`, `finanzwirtschaft`, `oekonometrie`
- Browser/UI reproduction notes:
  - Shared shell consistency is better than before this pass.
  - The biggest remaining “different product” signals are uneven graph interpretation quality and formula/math explanation quality, not broken boot/runtime.
- Root cause:
  - mixed `content-density/data-level` and `module-specific`
- Exact files changed:
  - none

### L. Mathematically weak / inconsistent LaTeX presentation

- Status: `still open`
- Modules checked:
  - representative formula-heavy concepts listed in `J`
- Browser/UI reproduction notes:
  - Sampled modules render formulas, but consistency of variable labeling and mikro1-style formula pedagogy still varies.
  - This is no longer a broad rendering crash issue, but it remains a benchmark-parity issue.
- Root cause:
  - primarily `content-density/data-level`
- Exact files changed:
  - none

### M. Modules visibly thinner than mikro1 without a valid reason

- Status: `still open`
- Modules checked:
  - visible module home/structure across the current live platform
- Browser/UI reproduction notes:
  - Some modules remain visibly more compressed than `mikro1`.
  - This pass did not inflate concept counts cosmetically; it only recorded the remaining density gap.
- Root cause:
  - `content-density/data-level`
- Exact files changed:
  - none

### N. Mathematik under-segmentation / under-presentation

- Status: `still open`
- Modules checked:
  - `mathematik` home/runtime
- Browser/UI reproduction notes:
  - During this pass, `mathematik` was visibly broken by a syntax error and did not boot.
  - After a minimal syntax repair, it boots again, but the current visible runtime still exposes only `8` concepts and remains far below `mikro1` in granularity.
- Root cause:
  - `module-specific`
  - current local `mathematik/js/data/chapters.js` state is both volatile and under-segmented
- Exact fix in this pass:
  - repaired the string-literal syntax break in `mathematik/js/data/chapters.js` so the module boots again

### O. Other modules where source structure / exercise structure supports more real learnable units

- Status: `still open`
- Modules checked:
  - visible structures and current source-backed module/course organization
- Browser/UI reproduction notes:
  - Remaining likely candidates for further benchmark-density work are `mikro2`, `recht`, `jahresabschluss`, and `internationale-wirtschaftsbeziehungen`.
  - This pass did not split concepts unless a visible blocker required it.
- Root cause:
  - `content-density/data-level`
- Exact files changed:
  - none

## Exact complaints closed

- `A` incorrect progress / completion percentages
- `B` Prüfungstransfer questions not opening or behaving incorrectly
- `C` broken Aufgaben / transfer interactions, for actual open/reveal behavior

## Exact complaints partially improved

- `D` colors and navigation not matching mikro1
- `E` Aufgaben tab behavior / appearance not matching mikro1
- `G` intuition layout missing mikro1-like transfer-oriented structure
- `I` R-Anwendungen not intuitive enough project-wide
- `J` formula tabs missing variable labels / meaning support
- `K` modules still feeling like different products in visible UI / pedagogy

## Exact complaints still open and why

- `F` graph labeling / interpretation style not matching mikro1  
  `statistik` still shows the clearest visible graph-family gap in sampled graph concepts.
- `H` inconsistent in-text math / variable accent styling  
  Rendering exists, but mathematical explanation quality is still uneven across modules.
- `L` mathematically weak / inconsistent LaTeX presentation  
  Several modules still fall short of mikro1-level formula-card pedagogy.
- `M` modules visibly thinner than mikro1  
  Some modules are still too compressed.
- `N` mathematik under-segmentation / under-presentation  
  Boot repaired, density not repaired.
- `O` other source-justified granularity gaps  
  Further module-specific splitting remains.

## Modules still below mikro1 benchmark in math / LaTeX quality

- `statistik`
- `finanzwirtschaft`
- `jahresabschluss`
- `recht`
- `internationale-wirtschaftsbeziehungen`
- `mathematik`

Notes:

- `makro1`, `makro2`, and `oekonometrie` sampled concepts are closer to the benchmark.
- `oekonometrie` graph interpretation style sampled cleanly in this pass.

## Modules still below mikro1 benchmark in content density

- `mathematik`
  - current visible runtime exposes only `8` concepts and is clearly more compressed than the benchmark
- `mikro2`
  - still broader and not source-grounded to an in-repo Mikro-II corpus
- `recht`
  - still bundles too much legal structure/case logic relative to mikro1 granularity
- `jahresabschluss`
  - still broader in application flow than mikro1’s concept-by-concept density
- `internationale-wirtschaftsbeziehungen`
  - trade theory and international macro still contain broad concept bundles

## Remaining release blockers after this pass

- No Priority-1 trust-breaking blocker remained reproducible after the shared progress fix and the cross-module Aufgaben / Prüfungstransfer verification.
- Remaining benchmark-release blockers:
  - `statistik` graph interpretation / graph-family parity is still below `mikro1`
  - cross-module math / formula pedagogy is still uneven
  - `mathematik` is boot-stable again but still visibly under-segmented relative to the benchmark

## Checks run

- `node --check assets/js/common.js`
- browser repro for stale progress keys on landing page before/after fix
- browser sweep of guided-task + Prüfungstransfer reveal behavior across all live modules
- browser spot checks for:
  - graph interpretation structure
  - intuition markers
  - formula-variable support
  - R-Anwendung workflow
- browser boot verification for `mathematik` after syntax repair

## Exact browser/UI evidence summary

- Landing-page stale-progress repro changed from fake `100%` on `Makroökonomik II` to correct `Modul starten →` with `Neu` tiles across the checked module set.
- Aufgaben / Prüfungstransfer reveal buttons opened correctly in all checked live modules.
- `statistik` still showed the clearest remaining graph-family drift in sampled graph concepts.
- `mathematik` was visibly broken at runtime before the syntax repair and booted again after the fix.
