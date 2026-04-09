# R-Übung Rework Pass 1

## Scope
Shared R-Anwendung usability and concept refresh audit for modules using the shared WebR component.

## Modules checked
- mathematik
- oekonometrie
- statistik (generated portal path)

## Reproduced issues before fix
1. The top of the R tab did not make the student task immediately obvious.
2. The mini-task remained, but the Musterlösung only explained the answer in prose and did not show how the code must change.
3. Concept-specific editor state leaked across concepts because shared block IDs were reused (`rtab_<module>_<index>`), so edited code from one concept could appear in another concept with the same block index.
4. The generated Statistik path still exposes static module-level R blocks rather than true concept-specific R tabs; this is a structural limitation distinct from the shared WebR UI bug.

## Root-cause classification
- Shared renderer / interaction issue: yes
- Shared storage-key issue: yes
- Shared R-practice pedagogy issue: yes
- Module-local data issue: yes, for stronger concept-specific task framing and code-change solutions
- Generated Statistik architecture limitation: yes (module-level `code_*` chapter, not concept-level R)

## Planned fixes in this pass
- Improve shared R-tab orientation so the task, first step, editing scope, and learning goal are obvious.
- Add solution support that shows how the code changes, not only the verbal result.
- Fix concept refresh by making R-block persistence keys concept-specific.
- Upgrade module R-block data where needed so mathematics and econometrics blocks carry concept-appropriate task framing and code-change solutions.
- Document remaining generated Statistik limitation explicitly if still not fully closable in this pass.

## Files changed
- `assets/js/portal-core/features/rPractice.js`
- `assets/css/r-practice.css`
- `mathematik/js/ui/renderer.js`
- `oekonometrie/js/ui/renderer.js`
- `assets/js/generated-portal/main.js`
- `mathematik/js/data/curriculum.js`
- `oekonometrie/js/data/curriculum.js`
- `statistik/js/data/chapters.js`
- `assets/js/generated-portal/rPracticeCatalog.js`
- `.qa/r_tab_rework_verify.mjs`

## Visible fixes implemented
1. The shared R tab now opens with three explicit briefing blocks:
   - `Arbeitsauftrag`
   - `Was du änderst` / `Codefokus`
   - `Was stehen bleibt`
2. The first step is now stated directly instead of being buried in generic workflow prose.
3. Musterlösungen can now show:
   - a textual solution
   - explicit code-change bullets
   - a target code block
   - or an explicit `Keine Codeänderung nötig` note for interpretation-only tasks.
4. Concept-specific persistence keys now include the concept id, so edited code from one concept no longer leaks into another concept with the same block index.
5. Mathematics R blocks were upgraded with concept-specific target code.
6. The three actually edit-driven econometrics R blocks were upgraded with target code; interpretation-driven blocks now explicitly tell the student when no code change is required.
7. Statistik’s embedded R blocks and generated catalog blocks were upgraded to the same clearer solution format.

## Browser verification after fix
- `mathematik`
  - checked concept switch from `funktionen_gleichungen` to `summen_logik_beweise`
  - verified distinct block ids:
    - `rtab_mathematik_funktionen_gleichungen_1`
    - `rtab_mathematik_summen_logik_beweise_1`
  - verified stale editor content no longer persisted across concepts
  - verified visible task briefing and solution code block
- `oekonometrie`
  - checked `matrix_notation` (edit-driven block)
  - checked `model_objects` (interpretation-driven block)
  - verified edit block shows target code
  - verified interpretation block explicitly says no code change is needed
- `statistik`
  - checked `rlab` theory page with embedded R blocks
  - verified shared briefing structure and solution-code support on embedded blocks

## Checks run
- `node --check assets/js/portal-core/features/rPractice.js`
- `node --check assets/js/generated-portal/main.js`
- `node --check assets/js/generated-portal/rPracticeCatalog.js`
- `node --check mathematik/js/ui/renderer.js`
- `node --check oekonometrie/js/ui/renderer.js`
- `node --check mathematik/js/data/curriculum.js`
- `node --check oekonometrie/js/data/curriculum.js`
- `node --check statistik/js/data/chapters.js`
- `node .qa/r_tab_rework_verify.mjs`

## Remaining open point
- The generated Statistik portal path still uses a module-level `code_*` chapter with shared R blocks rather than true concept-level R tabs. The shared pedagogy and solution format are now improved there too, but full concept-by-concept Statistik-R tabs would require a separate content-structure pass.
