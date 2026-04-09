# R-Übung benchmark reconstruction — pass 1

**Date:** 2026-04-09  
**Mission:** Rebuild shared R-Übung from tool-first sandbox framing to concept-first taught learning surface.  
**Benchmark reference:** mikro1 concept-page pedagogy pattern (`mikro1/js/ui/renderer.js`: Worum-es-geht hierarchy, formaler Anker, recognition cues, Transferpfad, typische Fehler, exam-facing phrasing).

---

## 1) Benchmark extraction (what mikro1 does better)

From `mikro1/js/ui/renderer.js` (`buildMicroIntuitionPanel`, `buildMicroPracticePanel`) and mikro1 page structure:

- **Lernziel upfront:** starts with core idea before mechanics.
- **Formaler anchor:** explicit math expression tied to meaning.
- **Recognition cues:** “Woran du das Konzept erkennst”.
- **Transfer path:** visible bridge from intuition to formal reasoning.
- **Error framing:** concrete “typischer Fehlgriff”, not generic “be careful”.
- **Exam orientation:** every block reads as klausur-prep, not syntax practice.
- **Hierarchy:** concept first, then action, then evidence, then retention.

---

## 2) Pedagogical diagnosis of previous shared R surface

Before this pass, shared `rPractice` was already functional but still weaker than mikro1 in visible teaching order:

- **Tool-first start:** workspace/editor prominence dominated the first impression.
- **Weak formal bridge:** no explicit math-to-code translation grid.
- **Kernzeile ambiguity:** “what exact line matters” was often inferential.
- **Output evidence under-specified:** interpretation existed, but “what proves what” was not explicit.
- **Transfer retention too implicit:** mini-task existed, but no short retained transfer prompt.
- **Solution closure incomplete:** answer reveal did not consistently close concept → code → output loop in one explicit statement.

Root cause class: **shared/global renderer + shared CSS hierarchy**, not module-local runtime logic.

---

## 3) Structural reconstruction implemented

### Shared renderer (`assets/js/portal-core/features/rPractice.js`)

Added shared pedagogy inference and rendering blocks:

- **Lernziel block**
  - `inferLearningGoal()`
  - `inferSuccessSignal()`
- **Math ↔ R translation**
  - `inferMathCodeMap()`
  - rendered as `.r-map-row` entries
- **Kernzeile / heute wichtig**
  - `inferCoreLine()`
- **Mini-Transfer**
  - `inferTransferPrompt()`
- **Output als Beweis framing**
  - `inferOutputEvidenceHint()`
- **Musterlösung loop closure**
  - explicit “Schließt den Loop” statement in solution body

The above are now injected through `buildConfig(...)` and rendered in both:

- embedded R blocks (`renderRPracticeMarkup`)
- dedicated R tab surface (`renderRAnwendungTab` → orientation/output/bottom-row cards)

### Wording reconstruction (shared, student-facing)

Changed task flow language to be concept-first and operational:

- from “Ändern, ausführen, interpretieren” to **“Code als Modell der Fachidee”**
- first steps now instruct:
  - read **Lernziel + Mathe↔R**
  - identify **Kernzeile**
  - predict output change before run
- interpretation step now requires an explicit output line as evidence

### Visual hierarchy reconstruction (`assets/css/r-practice.css`)

Added and styled pedagogy-first hierarchy blocks:

- `.r-learning-sequence`, `.r-goal-panel`, `.r-goal-success`
- `.r-map-panel`, `.r-map-grid`, `.r-map-row`, `.r-map-math`, `.r-map-code`, `.r-map-meaning`
- `.r-core-line`, `.r-core-line-kicker`
- `.r-output-proof` (evidence framing)
- `.r-transfer-prompt` (retention prompt)
- `.r-solution-loop` (concept→code→output closure)

Effect: instruction hierarchy is now visually separated from code/editor and from output evidence.

---

## 4) Exact files changed

1. `assets/js/portal-core/features/rPractice.js`
2. `assets/css/r-practice.css`
3. `tools/clickthrough/r_uebung_verify_pass1.mjs` (verification harness for this pass)

---

## 5) Representative browser verification performed

Real browser verification executed with Playwright (`tools/clickthrough/r_uebung_verify_pass1.mjs`) on:

- **Econometrics symbolic page:** `oekonometrie` → `matrix_notation`
- **Statistics/econometrics page:** `statistik` → `deskriptiv`
- **Notation-to-R translation page:** `mathematik` → `funktionen_gleichungen`

Run command used:

```bash
CLICKTHROUGH_BASE=http://127.0.0.1:8770 node tools/clickthrough/r_uebung_verify_pass1.mjs
```

Result:

- `failed: []`
- `pageErrors: []`
- `consoleErrors: []`

Verified visible blocks across those pages:

- Lernziel block present
- Math↔R mapping rows present
- Kernzeile block present
- Output-as-evidence note present
- Mini-transfer prompt present
- Solution-loop closure present
- Runtime path still functional (output non-empty for live mode; guided mode remains intentionally no-run)

---

## 6) Visible learning improvements achieved

The shared R-Übung now reads as a **taught sequence**:

1. **What idea** is practiced (Lernziel + Erfolgssignal)  
2. **How notation maps to code** (Mathe↔R rows)  
3. **Which line matters** (Kernzeile)  
4. **What to change / keep** (existing operational panels retained)  
5. **How to interpret output as evidence** (explicit proof cue)  
6. **What to retain for transfer** (Mini-Transfer)  
7. **How solution closes loop** (explicit concept→code→output closure)

This materially reduces the old “code-runner with helper text” feel.

---

## 7) Remaining limitations (explicit)

- **Inference quality is heuristic** when data blocks do not provide structured pedagogy fields (`learningGoal`, `mathCodeMap`, `coreLine`, `transferPrompt`); still better than generic helper text, but not yet author-perfect.
- **Right-rail parity** is intentionally unchanged in this pass; reconstruction is on the R surface itself.
- Some modules may benefit from **author-specified overrides** (data-level) to replace inferred mappings with exact instructor intent.

These remain open by design to keep this pass shared, safe, and non-breaking.

