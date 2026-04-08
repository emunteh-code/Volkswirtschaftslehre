# Exam session backbone

Minimal shared infrastructure for **exam-mode** sessions: timed metadata, weighted scoring, answer capture shape, submission summary, and hooks for post-exam review and learner-state logging.

## Files

| Path | Role |
|------|------|
| `assets/js/portal-core/exam/examSessionBackbone.js` | Pure helpers: IDs, duration, evaluate, score, summary, learner attempt payload, mistake partials |
| `assets/js/portal-core/features/fullExam.js` | Optional `moduleSlug` + `onExamSubmitted`; uses backbone for scoring/evaluate and finish reason |
| Module `features/fullExam.js` | May pass `moduleSlug` and `onExamSubmitted` (pilot: `makro1`) |

## Runtime state (full exam UI)

`createFullExamModule` keeps existing mutable `feState` and adds backbone fields when `moduleSlug` is set:

| Field | Meaning |
|--------|---------|
| `sessionId` | From `generateExamSessionId(moduleSlug, examId)`; `null` if `moduleSlug` omitted |
| `durationLimitMs` | `exam.duration` (minutes) × 60000, or `null` if untimed |
| `finishReason` | `complete` (default submit), `timeout` (timer), or `aborted` (reserved) |
| `exam`, `questions`, `answers`, `revealed`, `startTime`, `submitted` | Unchanged |

## Submitted summary (`onExamSubmitted`)

Shape produced by `buildExamSubmittedSummary(feState, { moduleSlug })`:

```ts
{
  session_id: string | null,
  module_slug: string | null,
  exam_id: string,
  exam_title: string,
  started_at: number,
  submitted_at: number,
  duration_limit_ms: number | null,
  finish_reason: 'complete' | 'timeout' | 'aborted',
  responses: Record<questionId, string>,
  score: {
    earned: number,
    maxPts: number,
    byQuestion: Array<{
      id, type?, max, earned, correct, revealed
    }>
  }
}
```

## Learner attempt mapping

`toLearnerAttemptPayloadFromExamSummary(summary)` → `appendLearnerAttempt(...)`:

- `context`: `full_exam` (`ATTEMPT_CONTEXT.FULL_EXAM`)
- `target_id`: `exam_id`
- `score`: `{ earned, max }`
- `responses`: raw captured answers
- `meta`: `exam_title`, `duration_limit_ms`, `finish_reason`, `by_question` (per-item breakdown for future mistake classification)

## Solution visibility (future)

`EXAM_SOLUTION_POLICY.PER_QUESTION` matches current behaviour (reveal on WF select, “Prüfen”, “Lösung anzeigen”, or bulk submit).

`AFTER_SUBMIT_ALL` is documented for future UIs; use `isSolutionVisibleForPolicy(...)` when implementing.

## Mistake log (optional)

`mistakePartialsFromExamSummary(summary, { moduleSlug, questionById })` returns `appendMistakeLogEntry` partials only for wrong **and** revealed items whose flattened question has `concept_id`. Full-exam content can gain `concept_id` gradually.

## Gradual migration

1. **No change**: Omit `moduleSlug` and `onExamSubmitted` — behaviour matches pre-backbone (except shared `defaultExamEvaluate` / `computeExamScore` internally).
2. **Logging only**: Set `moduleSlug` + `onExamSubmitted` → `appendLearnerAttempt(toLearnerAttemptPayloadFromExamSummary(summary))` (see `makro1/js/features/fullExam.js`).
3. **Mistakes**: Add `concept_id` to exam questions where needed; in `onExamSubmitted`, loop `mistakePartialsFromExamSummary` and call `appendMistakeLogEntry`.
4. **Custom scoring**: Pass a wrapper that still uses `computeExamScore` with a custom `evaluate` only if you fork evaluation in one place; full-exam UI still calls `defaultExamEvaluate` unless further refactors allow injection.

## Module-specific (unchanged for now)

- Exam **content** (`FULL_EXAMS`, aufgaben blocks, HTML, canvases)
- **Rendering** (progress dots, sticky banner, focus mode)
- **Per-question** interaction (WF immediate reveal vs text “Prüfen”)
- **Persistence** of in-progress exam in `FE_STATE_KEY` (not part of this backbone; backbone is submit-time + scoring contract)
