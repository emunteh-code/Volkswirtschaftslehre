# Feedback Copy Cleanup Pass 16

## Objective

Remove student-visible fragments **`Nicht ganz.`** and **`Achtung: RECHENFEHLER.`** (and the underlying **`RECHENFEHLER.`** diagnostic tail) project-wide without changing scoring or feedback structure.

## Where the strings lived

### 1. Shared quick-exam (Schnelltest / Kurz-Exam) wrong-answer HTML

**File:** [assets/js/portal-core/features/exam.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/features/exam.js)

- Wrong feedback was built as: literal **`Nicht ganz.`** + a div prefixed with **`Achtung:`** + escaped `result.trap` + **Richtige Antwort** + optional explain.
- `result.trap` comes from each module’s `checkAnswerWithTolerance` → `VWLBenchmarkEvaluator` `msg`, which included **`RECHENFEHLER. `** on numeric mismatch.

Together this produced the unwanted **`Achtung: RECHENFEHLER.`** line for students.

**Fix:** Shared renderer only — drop the **`Nicht ganz.`** prefix; drop the **`Achtung:`** label; pass `result.trap` through **`scrubLegacyFeedbackPrefixes`** before HTML escape; optional trap line is muted secondary text; **Richtige Antwort** and explain unchanged.

### 2. Module-local evaluator message (all modules using the same engine)

**Files:** `*/js/utils/answerChecker.js` in:

- `mikro1`, `mikro2`, `makro1`, `makro2`, `statistik`, `mathematik`, `recht`, `finanzwirtschaft`, `jahresabschluss`, `oekonometrie`, `internationale-wirtschaftsbeziehungen`

**Line removed:** `res.msg += "RECHENFEHLER. ";` (numeric mismatch branch).

**Why:** Stops the token from entering `trap` at source. Scoring (`calc_score`, etc.) unchanged.

### 3. Mikro1 post-DOM hack (redundant after shared fix)

**File:** [mikro1/js/features/exam.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro1/js/features/exam.js)

- **`cleanWrongExamFeedback`** stripped **`Nicht ganz.`** and removed any div whose text started with **`Achtung:`** (which could drop the entire trap block).

**Fix:** Removed the helper and post-submit cleanup; **`createQuickExamModule`** from portal-core now emits clean copy directly.

### 4. Concept Schnelltest (defensive)

**File:** [assets/js/portal-core/features/conceptSchnelltest.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/features/conceptSchnelltest.js)

- **`trap_feedback`** from module data is escaped for display; **`scrubLegacyFeedbackPrefixes`** applied so authored copy cannot reintroduce the banned fragments.

## New shared utility

**File:** [assets/js/portal-core/utils/feedbackCopy.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/utils/feedbackCopy.js)

- **`scrubLegacyFeedbackPrefixes(text)`** — removes **`RECHENFEHLER.`**, **`Nicht ganz.`**, and a leading **`Achtung:`**; normalizes whitespace. Copy-only.

## Files changed (summary)

| Area | Files |
|------|--------|
| Shared | `assets/js/portal-core/features/exam.js`, `assets/js/portal-core/features/conceptSchnelltest.js`, `assets/js/portal-core/utils/feedbackCopy.js` |
| Module evaluators | 11× `*/js/utils/answerChecker.js` (RECHENFEHLER line removed) |
| Mikro1 exam shim | `mikro1/js/features/exam.js` (DOM cleanup removed) |
| Audit | `docs/audits/feedback-copy-cleanup-pass-16.md` (this file) |

## Shared vs module-local

- **Primary student fix:** shared **`exam.js`** + shared **`feedbackCopy.js`**.
- **Source hygiene:** module-local **`answerChecker.js`** (same line in every module that ships the evaluator).
- **Mikro1:** only the redundant DOM workaround was removed.

## Browser verification notes

Not executed in-browser here. Suggested checks:

1. Any module **Kurz-Exam / Schnelltest** (uses `createQuickExamModule`): wrong numeric answer → no **`Nicht ganz.`**, no **`Achtung:`**, no **`RECHENFEHLER.`**; **Richtige Antwort** + Erklärung still present.
2. Another module with the same flow to confirm shared path.
3. **Konzept-Schnelltest** (MCQ): wrong choice with `trap_feedback` still shows note without banned prefixes if they were ever pasted into data.

## Remaining / honest outliers

- Evaluator may still append **other** internal English tokens (e.g. logic / validation caps) to `msg`; those were not in scope unless they appear as the two banned German fragments.
- **Stored** mistake log rows from before deploy could still contain old strings in `meta` if ever displayed raw (current UI does not re-render full legacy trap HTML from logs for this path).

Pass 16 is complete when repo search shows no student-facing construction of **`Nicht ganz.`** or **`Achtung: …RECHENFEHLER`** except inside **`feedbackCopy.js`** scrub patterns.
