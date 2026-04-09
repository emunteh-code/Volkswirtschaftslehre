# R-Übung Pedagogy Closure Pass 4

## Scope
Close the remaining student-facing pedagogy gap in the shared `R-Übung` surface after pass 3, with special attention to the `mathematik` page where notation-to-code translation is central.

## Benchmark reference
- `mikro1` concept pages as benchmark for:
  - concept-first hierarchy
  - explicit formal anchor
  - low-friction orientation
  - fast scan behavior
  - transfer-facing retention

## Pages inspected before implementation
- `mathematik` → `summen_logik_beweise` (`R-Übung`)
- `mathematik` → `funktionen_gleichungen` (`R-Übung`)
- `oekonometrie` → `matrix_notation` (`R-Übung`)
- `statistik` → `regression_diagnostik_prognose` (`R-Übung`)

## Exact remaining weaknesses confirmed
1. The top orientation layer is improved, but still not explicit enough on pages where math notation must be translated into R.
2. The `Mathe ↔ R-Übersetzung` block still depends too much on inference when a safe explicit mapping can be shown.
3. `Kernzeile` is present, but the student still benefits too little from an exact “today this line matters” framing.
4. The output area still reads too much like a generic tool pane and too little like learning evidence.
5. On `mathematik/summen_logik_beweise`, the real objective is still under-specified unless the student already knows how to read `sum((1:4)^2)` as sigma notation.

## Root-cause classification
- Shared renderer / hierarchy gap: yes
- Shared copy / output-guidance gap: yes
- Module-local data gap: yes, especially for `mathematik/summen_logik_beweise`

## Implementation target
- Make the page more concept-first and less tool-first without adding decorative filler.
- Strengthen the shared hierarchy and output-role distinction.
- Add explicit concept-local scaffolding for `mathematik/summen_logik_beweise`.

## Exact files changed
- `assets/js/portal-core/features/rPractice.js`
- `assets/css/r-practice.css`
- `mathematik/js/data/curriculum.js`
- `docs/audits/r-uebung-pedagogy-closure-pass-4.md`

## Exact visible improvements made
1. **Top layer is now more concept-first**
   - The shared `Lernziel` block can now show compact bullet guidance in addition to the lead sentence.
   - The strongest notation-to-code pages no longer depend on one dense paragraph for orientation.

2. **`Mathe ↔ R-Übersetzung` became more explicit**
   - The shared layer now supports and uses stronger explicit mappings instead of abstract fallback copy.
   - `mathematik/summen_logik_beweise` now shows:
     - `\sum_{i=1}^4 i^2` ↔ `sum((1:4)^2)`
     - `\sum_{i=1}^4 i^3` ↔ `sum((1:4)^3)`
     - `\prod_{i=1}^4 i` ↔ `prod(1:4)`

3. **`Kernzeile` now reduces search burden more aggressively**
   - The shared page keeps the existing `Kernzeile` block, but the relevant math page now names the exact line and the exact change:
     - `sum((1:4)^2)`
     - change only the exponent from `2` to `3`

4. **Output became less tool-generic**
   - The output card now has a dedicated pre-output guidance strip:
     - `Worauf du im Output achtest`
   - This distinguishes the evidence-reading role of the output pane from the action role of the code pane.
   - Plot-heavy pages now no longer imply that console output is the main evidence when the real evidence is graphical.

5. **Code vs. output roles are visually clearer**
   - The editor card now carries slightly stronger visual emphasis than the output card.
   - The runtime badge was toned down so it no longer dominates the pedagogy layer.

6. **The weakest math notation-to-code page is now explicitly scaffolded**
   - `mathematik/summen_logik_beweise` now has:
     - sharper title
     - explicit learning goal
     - explicit goal bullets
     - explicit sigma/product translation
     - exact task steps
     - exact output-evidence guidance
     - math-first pitfalls
     - more mathematical Musterlösung phrasing

7. **The already-stronger pages also benefit**
   - `mathematik/funktionen_gleichungen` now has explicit goal bullets, task steps, and output-role clarification.
   - `oekonometrie/matrix_notation` and `statistik/regression_diagnostik_prognose` inherit the stronger output-guidance and concept-first top hierarchy through the shared renderer.

## Exact verification performed
- Syntax checks:
  - `node --check assets/js/portal-core/features/rPractice.js`
  - `node --check mathematik/js/data/curriculum.js`
- Shared markup verification via rendered tab HTML:
  - `mathematik/summen_logik_beweise`
  - `oekonometrie/matrix_notation`
  - `statistik/regression_diagnostik_prognose`
- Verified signals in rendered markup:
  - goal bullets present on the math translation page
  - explicit sigma/product mappings present
  - explicit `Kernzeile` cue present
  - `Worauf du im Output achtest` present on all three representative pages
  - statistics prognosis still explicitly distinguishes `prediction` vs `confidence`

## Exact pages checked after implementation
- `mathematik` → `summen_logik_beweise` (`R-Übung`)
- `mathematik` → `funktionen_gleichungen` (`R-Übung`)
- `oekonometrie` → `matrix_notation` (`R-Übung`)
- `statistik` → `regression_diagnostik_prognose` (`R-Übung`)

## Remaining limitations
- The output area is now pedagogically framed better, but plot-producing blocks still depend on the surrounding page logic because the shared WebR tab does not embed a second graphical result surface inside the output card.
- Some concept pages still rely on strong shared inference rather than fully custom per-block authored microcopy.
- So this pass materially reduces the benchmark gap, but the absolute top end would still be a future pass that authors a few more concept-local `goalBullets`, `taskSteps`, and `outputChecklist` entries for the remaining math R blocks.
