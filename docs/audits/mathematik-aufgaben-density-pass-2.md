# Mathematik Aufgaben Density Pass 2

## Scope
Raise the `mathematik` Aufgaben tab from a thin solving layer to a dense, exam-facing solving deck that is closer to the `mikro1` benchmark without faking source grounding.

## Trigger
After pass 1, `mathematik` had the right direction on the Aufgaben tab, but still surfaced only a very small number of guided tasks and transfer cards per concept. The visible module still felt too sparse for a solving-heavy exam module.

## Reproduced gap before this pass
1. `mathematik` concepts typically surfaced only `2` guided tasks and a small transfer deck.
2. The old shared fallback was disabled, but the local replacement still did not achieve the density the user asked for.
3. The module had enough source-backed structure to go denser:
   - `2` authored source-distilled tasks
   - `4` method-recognition cards
   - `3` warnings / trap patterns
   - `1` step-problem chain
4. Those ingredients were not yet being turned into a full visible practice deck.

## Source grounding used for this pass
- `source-materials/Mathematik/Mathematik/Kleinübung/E_1_-_Algebra_und_Mengenlehre/E1_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/E_2_-_Funktionen_und_Gleichungen/E_2_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/E_3_-_Summen_und_Logik/E_3_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/LA_1_-_Matrizen_und_Matrix-Algebra/LA_I_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/LA_2_-_Maßzahlen_von_Matrizen_und_inverse_Matrizen/LA_II_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/AN_1_-_Univariate_Differenzialrechnung/AN_I_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/OP_1_-_Univariate_Optimierung/OP_I_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/AN_2_-__Funktionen_mehrerer_Variablen_und_multivariate_Differenzialrechnung/AN_II_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/OP_2_-__Multivariate_Optimierung/OP_II_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/AN_3_-_Intergralrechnung/AN_III_-_Aufgaben.pdf`

## Design decision
Do not inflate density with generic filler. Instead, build a `mathematik`-local practice bank that converts the already source-backed concept scaffolding into visible solving decks:
- guided tasks = authored tasks + method families + trap-control drills + step-chain drill
- transfer cards = authored tasks + exam signal patterns + trap-control cards + formula anchor

## Files intended for this pass
- `mathematik/js/data/practiceConfig.js`
- `mathematik/js/ui/renderer.js`
- `assets/js/portal-core/ui/renderer.js`
- `.qa/mathematik_aufgaben_solving_verify.mjs`
- `docs/audits/mathematik-aufgaben-density-pass-2.md`

## Success target
- Every `mathematik` concept should show roughly `10` guided cards and `10` transfer cards.
- The new cards should read as solving drills, not theory-recall filler.
- The visible task families should still be plausibly grounded in the Kleinübungen and current math curriculum.

## Files changed
- `assets/js/portal-core/ui/renderer.js`
- `mathematik/js/data/practiceConfig.js`
- `mathematik/js/ui/renderer.js`
- `.qa/mathematik_aufgaben_solving_verify.mjs`
- `docs/audits/mathematik-aufgaben-density-pass-2.md`

## Exact implementation
1. Recreated `mathematik/js/data/practiceConfig.js` and turned it into the module-local task bank the renderer was already waiting for.
2. Added two exports:
   - `MATHEMATIK_GUIDED_TASKS_BY_ID`
   - `MATHEMATIK_EXAM_DRILLS_BY_ID`
3. Built the guided decks from math-native building blocks that already exist in the current source-backed curriculum:
   - `2` authored Aufgaben
   - `4` method / recognition families from `cards`
   - `3` trap-control drills from `warnings`
   - `1` step-chain drill from `stepProblems`
4. Built the transfer decks from:
   - the authored Aufgaben
   - the intuition exam patterns
   - the warning / trap patterns
   - one formal-anchor card
5. Updated `mathematik/js/ui/renderer.js` so `mathematik` no longer uses the thin default `contentEntry.aufgaben` path, but the new module-local guided-task map instead.

## Visible improvements made
- Every `mathematik` concept now shows a dense solving deck instead of a thin pair of tasks.
- `Geführte Aufgaben` are now visibly method-heavy:
  - task families
  - error-correction drills
  - compact decision chains
  - formal-anchor guided moves
- `Prüfungstransfer` is now also dense and solving-facing:
  - no generic `Kernsatz / Theorieblock / Klausurmuster` filler remained in the verified runtime
  - the visible questions are now phrased as signal → method → correction tasks
- The module now feels much closer to a real exam-drill surface instead of a light recap page.

## Browser verification
Verification script:
- `.qa/mathematik_aufgaben_solving_verify.mjs`

Runtime check:
- `PORTAL_BASE_URL=http://127.0.0.1:4182 node .qa/mathematik_aufgaben_solving_verify.mjs`

Verified concepts:
- all `14` `mathematik` concepts

Representative screenshots:
- `.qa/funktionen_gleichungen-aufgaben-solving-pass2.png`
- `.qa/analysis_ableitung_grundlagen-aufgaben-solving-pass2.png`
- `.qa/lagrange-aufgaben-solving-pass2.png`
- `.qa/integralrechnung-aufgaben-solving-pass2.png`

Observed runtime result:
- every concept showed `guidedCount: 10`
- every concept showed `transferCount: 10`
- every concept showed `genericPromptCount: 0`

## Checks run
- `node --check assets/js/portal-core/ui/renderer.js`
- `node --check mathematik/js/data/practiceConfig.js`
- `node --check mathematik/js/ui/renderer.js`
- `node --check .qa/mathematik_aufgaben_solving_verify.mjs`
- `PORTAL_BASE_URL=http://127.0.0.1:4182 node .qa/mathematik_aufgaben_solving_verify.mjs`

## Remaining honest gap
- This pass closes the visible density problem on the Aufgaben tab.
- The new deck is strongly course-shaped and Kleinübung-backed, but it is still mostly `source-distilled` rather than a line-by-line verbatim import of all Kleinübung sheets.
- A later pass could still deepen fidelity by replacing selected generated method cards with direct-source problem statements from the PDFs in the highest-value topics (`Funktionen`, `LA II`, `AN I`, `OP II`, `AN III`).

## Follow-up uniformity correction
After the dense deck was live, one visible mismatch remained: Aufgabe 3-10 still sounded too much like generator prompts compared to the original Aufgabe 1-2 cards.

Correction made:
- replaced the remaining generic-looking guided-task question texts with concrete, concept-specific exercise statements across all `mathematik` concepts
- examples now read like direct problem prompts (`Bestimmen Sie ...`, `Berechnen Sie ...`, `Korrigieren Sie ...`, `Erläutern Sie ...`) instead of `Kleinübung-Familie ...` or `Entscheidungsdrill ...`

Representative verification:
- `.qa/funktionen_gleichungen-aufgaben-direct-style-pass5.png`

Remaining honest gap after the follow-up:
- the wording is now much closer to the native math task style
- full one-to-one direct-source parity would still require replacing more of the generated solution bodies, not only the visible question stems

## Follow-up transfer uniformity correction
The same mismatch also remained in `Prüfungstransfer`: the card shell was correct, but the visible prompts still sounded like generator logic (`In der Klausur taucht ...`, `Wo verlierst du ...`, `Welche Gleichung ...`) instead of real exam questions.

Correction made:
- reused the same concrete prompt bank for `Prüfungstransfer`, so card stems 3-10 now read as direct math questions rather than abstract signal prompts
- removed the extra `exam-drill-meta` label from math transfer solutions so the revealed answer block sits closer to the native `mikro1` feel

Representative verification:
- `.qa/funktionen_gleichungen-pruefungstransfer-direct-style-pass6.png`
- `.qa/funktionen_gleichungen-pruefungstransfer-open-pass6.png`

Observed result:
- closed transfer cards now use direct exercise wording
- opened transfer cards show `metaCount: 0`

Remaining honest gap after the transfer follow-up:
- the visible prompts and opened solution chrome are now much closer to the native task family
- full parity would still require making more of the hidden transfer solution copy itself fully direct-source rather than source-distilled
