# Mathematik Aufgaben Solution Correctness Pass 3

## Scope
Close the remaining `mathematik` blocker where later added `Geführte Aufgaben` and `Prüfungstransfer` cards could still open mismatched or generic solution bodies.

## Trigger
After the wording and density passes, the visible question stems were much better, but the opened solutions were still not guaranteed to match those new prompts. The user surfaced the real failure mode directly: a concrete solving question could still reveal a generic family-style answer.

## Reproduced gap before this pass
1. `mathematik/js/data/practiceConfig.js` already contained a solved extra-task bank, but the exported decks were still built through the older generic builder path.
2. That meant the UI could show direct-source-like question stems while still opening generic or family-level solution logic.
3. Some inline matrix question stems were also too fragile in paragraph text and could surface as malformed browser output (`Misplaced &`-style rendering).

## Files changed
- `mathematik/js/data/practiceConfig.js`
- `mathematik/js/data/curriculum.js`
- `.qa/mathematik_aufgaben_solving_verify.mjs`

## Exact implementation
1. Added `buildSolvedTaskDeck(entry)` in `practiceConfig.js`.
2. Rewired both exports to use the solved concept-specific deck:
   - `MATHEMATIK_GUIDED_TASKS_BY_ID`
   - `MATHEMATIK_EXAM_DRILLS_BY_ID`
3. `Geführte Aufgaben` now use:
   - authored base tasks from the curriculum
   - plus the concept-specific solved extra-task bank
4. `Prüfungstransfer` now reuses that same solved deck through the exam-card wrapper, so every transfer card also opens a full worked solution with `Lösungslogik` and `Prüfungsresultat`.
5. Replaced fragile inline `pmatrix` question stems in `curriculum.js` with inline-safe `smallmatrix` notation for the affected matrix prompts.
6. Strengthened the QA script so it checks:
   - all `14` concepts
   - `10` guided + `10` transfer cards per concept
   - no generic fallback phrases
   - non-empty solution/result content
   - opened late-card UI solutions for both guided and transfer cards

## Visible improvement
- Added cards no longer open generic “family” solutions.
- Guided and transfer cards now both open concrete, matching worked answers.
- The visible `Lineare Algebra II` matrix stems no longer break into malformed inline output.

## Verification
Checks run:
- `node --check mathematik/js/data/practiceConfig.js`
- `node --check mathematik/js/data/curriculum.js`
- `node --check mathematik/js/ui/renderer.js`
- `node --check .qa/mathematik_aufgaben_solving_verify.mjs`

Data verification:
- all `14` concepts
- `badCount: 0` for:
  - missing results
  - too-thin step lists
  - generic fallback phrases
  - malformed `Prüfungstransfer` answer structures

Browser verification:
- `PORTAL_BASE_URL=http://127.0.0.1:4182 node .qa/mathematik_aufgaben_solving_verify.mjs`
- result file: `/tmp/mathematik_aufgaben_solving_verify.json`
- verified:
  - `moduleCount: 14`
  - `badCount: 0`
  - opened guided late cards show full step solutions + result
  - opened transfer late cards show `Lösungslogik` + `Prüfungsresultat`

Representative screenshots:
- `.qa/funktionen_gleichungen-aufgaben-solving-correctness-pass3.png`
- `.qa/lineare_algebra_struktur-aufgaben-solving-correctness-pass3.png`
- `.qa/analysis_ableitung_grundlagen-aufgaben-solving-correctness-pass3.png`
- `.qa/lagrange-aufgaben-solving-correctness-pass3.png`
- `.qa/integralrechnung-aufgaben-solving-correctness-pass3.png`

## Remaining honest gap
- This pass closes the correctness/mismatch blocker on the current `mathematik` task decks.
- A later fidelity pass could still replace more `source-distilled` added tasks with verbatim direct-source Kleinübung statements, but the current cards are now fully answered and internally consistent.
