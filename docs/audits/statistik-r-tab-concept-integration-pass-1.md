# Statistik R-Tab Concept Integration Pass 1

## Scope
Move Statistik from one module-level `R-Statistik Praxis` bottleneck to real concept-linked `R-Anwendung` tabs, using the strengthened shared WebR UI that already exists.

## Benchmark reference
- `mikro1`: concept-native tabs, no stale content carry-over, concept page as the primary learning unit
- local benchmark from previous R pass: `mathematik` and `oekonometrie` concept-linked R tabs

## Reproduced issue before fix
1. Statistik exposed the improved R practice UI only inside the single `rlab` theory page.
2. Relevant method concepts such as `deskriptiv`, `bivariat`, `testen` and `regression_schaetzung_inferenz` had no own `R-Anwendung` tab, even though the content naturally belongs there.
3. The four existing Statistik R blocks were rendered up front as HTML strings in `chapters.js`, so they could not be reassigned cleanly to concept tabs.
4. `rlab` acted as a storage container instead of an orientation page.

## Root cause classification
- Shared WebR pedagogy: already improved in the previous pass
- Shared storage refresh bug: already fixed in the previous pass
- Statistik local renderer gap: yes
- Statistik local data-shape gap: yes
- Source-material grounding available: yes

## Source grounding used in this pass
- `source-materials/Statistik/Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_01_-_R-Lösung.R`
  - data inspection, `summary()`, `mean()`, subsets
- `source-materials/Statistik/Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_02_-_R-Lösung.R`
  - histogram, `table()`, `barplot()`
- `source-materials/Statistik/Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_04_-_R-Lösung.R`
  - scatterplots, Pearson vs. Spearman correlation, spurious-correlation reading
- `source-materials/Statistik/Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_11_-_R-Lösung.R`
  - `aov(...)`, `summary(...)`, `boxplot(...)`, p-value reading in ANOVA

## Planned implementation
1. Refactor Statistik R blocks into raw config objects keyed by concept id.
2. Hook the local Statistik renderer into the shared `renderRAnwendungTab(...)` path.
3. Move the actual live R blocks onto the concepts where they belong.
4. Keep `rlab` as a lighter orientation concept that explains where the R exercises now live.
5. Add one extra Statistik concept block for ANOVA so the live R layer matches the course structure better.

## Files expected to change
- `statistik/js/data/chapters.js`
- `statistik/js/ui/renderer.js`
- `assets/js/portal-core/features/rPractice.js`

## Success criteria
- Relevant Statistik concepts get their own `R-Anwendung` tab.
- Each checked concept shows concept-specific code, task, and solution code.
- Switching between Statistik concepts no longer feels like reopening the same R page with recycled code.
- `rlab` becomes an orientation page instead of the sole live-R container.

## Files changed
- `docs/audits/statistik-r-tab-concept-integration-pass-1.md`
- `assets/js/portal-core/features/rPractice.js`
- `statistik/js/data/chapters.js`
- `statistik/js/data/conceptLinks.js`
- `statistik/js/data/intuition.js`
- `statistik/js/ui/renderer.js`
- `.qa/statistik_r_tab_concept_verify.mjs`

## Visible fixes implemented
1. `statistik/js/ui/renderer.js` now uses the shared `renderRAnwendungTab(...)` path, just like the stronger local modules.
2. `statistik/js/data/chapters.js` no longer pre-renders all R blocks into the `rlab` theory page.
3. Real concept-linked R tabs now exist for:
   - `deskriptiv`
   - `bivariat`
   - `schaetzen_eigenschaften_intervalle`
   - `testen`
   - `regression_schaetzung_inferenz`
   - `regression_diagnostik_prognose`
   - `varianzanalyse`
4. `rlab` is now an orientation page that explains where the concept-linked R tabs live and how to use them.
5. The shared Statistik WebR prelude was extended with a small ANOVA data frame and prediction data so the new blocks can run concept-appropriate code.
6. `conceptLinks` and the `rlab` intuition line were updated so the orientation concept points students toward the method pages where the live work now sits.

## Browser verification after fix
Verification script:
- `.qa/statistik_r_tab_concept_verify.mjs`

Representative screenshots:
- `.qa/statistik-rtab-deskriptiv.png`
- `.qa/statistik-rtab-bivariat.png`
- `.qa/statistik-rtab-regression.png`
- `.qa/statistik-rtab-anova.png`
- `.qa/statistik-rlab-overview.png`

Runtime results:
- `deskriptiv` → `rtab_statistik_deskriptiv_1` with first code line `str(df)`
- `bivariat` → `rtab_statistik_bivariat_1` with first code line `cor(df$x, df$y, method = "pearson")`
- `schaetzen_eigenschaften_intervalle` → `rtab_statistik_schaetzen_eigenschaften_intervalle_1`
- `testen` → `rtab_statistik_testen_1`
- `regression_schaetzung_inferenz` → `rtab_statistik_regression_schaetzung_inferenz_1`
- `regression_diagnostik_prognose` → `rtab_statistik_regression_diagnostik_prognose_1`
- `varianzanalyse` → `rtab_statistik_varianzanalyse_1`
- `rlab` → `rTabVisible: false`, `theoryHasPracticeBlocks: 0`

Interpretation:
- the R tab now refreshes concept-by-concept
- concept ids are part of the block ids
- the same editor content no longer appears as one recycled Statistik R page
- `rlab` no longer hoards the live R component

## Checks run
- `node --check assets/js/portal-core/features/rPractice.js`
- `node --check statistik/js/data/chapters.js`
- `node --check statistik/js/ui/renderer.js`
- `node --check statistik/js/data/conceptLinks.js`
- `node --check statistik/js/data/intuition.js`
- `node --check .qa/statistik_r_tab_concept_verify.mjs`
- `PORTAL_BASE_URL=http://127.0.0.1:4182 node .qa/statistik_r_tab_concept_verify.mjs`

## Remaining honest gap
- This closes the Statistik concept-refresh problem for the local module.
- The remaining improvement would be breadth, not the same stale-code defect: some later Statistik concepts still do not have their own R tab because they are less naturally WebR-driven in the current module structure. That is a separate content-expansion decision, not the original bug.
