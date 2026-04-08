/**
 * Exam session backbone — shared shapes, scoring, and learner-state payloads.
 * UI stays in portal-core/features/fullExam.js (and modules); this file is DOM-free.
 *
 * @see docs/architecture/exam-session-backbone.md
 */

import { ATTEMPT_CONTEXT, MISTAKE_SOURCE } from '../state/learnerBackbone.js';

export const EXAM_FINISH_REASON = Object.freeze({
  COMPLETE: 'complete',
  TIMEOUT: 'timeout',
  ABORTED: 'aborted'
});

/**
 * When to show worked solutions / feedback bodies.
 * Current full-exam UI behaves as PER_QUESTION (reveal on check / WF select / submit-all).
 */
export const EXAM_SOLUTION_POLICY = Object.freeze({
  PER_QUESTION: 'per_question',
  AFTER_SUBMIT_ALL: 'after_submit_all'
});

/**
 * @param {string} moduleSlug
 * @param {string} examId
 * @returns {string}
 */
export function generateExamSessionId(moduleSlug, examId) {
  const t = Date.now();
  const r = Math.random().toString(36).slice(2, 8);
  return `exam:${t}:${moduleSlug}:${examId}:${r}`;
}

/**
 * @param {object} opts
 * @param {number|null|undefined} opts.durationMinutes Exam metadata (minutes); 0 / null = untimed
 * @returns {{ duration_limit_ms: number|null }}
 */
export function durationMinutesToLimitMs(durationMinutes) {
  if (durationMinutes == null || durationMinutes <= 0) return { duration_limit_ms: null };
  return { duration_limit_ms: durationMinutes * 60000 };
}

/**
 * Default evaluator for flattened full-exam questions (WF + keyword text).
 * Matches legacy createFullExamModule behavior.
 *
 * @param {{ type?: string, correct?: string|string[] }} q
 * @param {string} userAnswer
 * @returns {boolean}
 */
export function defaultExamEvaluate(q, userAnswer) {
  const ua = userAnswer;
  if (q.type === 'wf') return ua === q.correct;
  if (!ua || String(ua).trim() === '') return false;
  const t = String(ua).trim();
  if (Array.isArray(q.correct)) {
    const lower = t.toLowerCase();
    return q.correct.some((answer) => lower.includes(answer.toLowerCase()));
  }
  return false;
}

/**
 * Point-weighted score; only revealed questions count toward earned points.
 *
 * @param {object} opts
 * @param {Array<{ id: string, type?: string, points?: number }>} opts.questions
 * @param {Record<string, string>} opts.answers
 * @param {Record<string, boolean>} opts.revealed
 * @param {typeof defaultExamEvaluate} [opts.evaluate]
 * @returns {{
 *   earned: number,
 *   maxPts: number,
 *   byQuestion: Array<{
 *     id: string,
 *     type?: string,
 *     max: number,
 *     earned: number,
 *     correct: boolean,
 *     revealed: boolean
 *   }>
 * }}
 */
export function computeExamScore({ questions, answers, revealed, evaluate = defaultExamEvaluate }) {
  let earned = 0;
  let maxPts = 0;
  const byQuestion = [];
  for (const q of questions) {
    const pts = q.points || 2;
    maxPts += pts;
    const isRevealed = !!revealed[q.id];
    let qEarned = 0;
    let correct = false;
    if (isRevealed) {
      correct = evaluate(q, (answers[q.id] || '').trim());
      if (correct) qEarned = pts;
      earned += qEarned;
    }
    byQuestion.push({
      id: q.id,
      type: q.type,
      max: pts,
      earned: qEarned,
      correct,
      revealed: isRevealed
    });
  }
  return { earned, maxPts, byQuestion };
}

/**
 * Whether solution text may be shown for a question under a policy (for future UIs).
 *
 * @param {object} opts
 * @param {string} opts.policy EXAM_SOLUTION_POLICY
 * @param {boolean} opts.sessionSubmitted Entire exam submitted
 * @param {boolean} opts.revealedForQuestion Legacy per-question reveal flag
 */
export function isSolutionVisibleForPolicy({ policy, sessionSubmitted, revealedForQuestion }) {
  if (policy === EXAM_SOLUTION_POLICY.AFTER_SUBMIT_ALL) {
    return sessionSubmitted && revealedForQuestion;
  }
  return revealedForQuestion;
}

/**
 * Build a summary for post-submit hooks (review, analytics, learner attempt).
 *
 * @param {object} feState createFullExamModule runtime state
 * @param {object} [opts]
 * @param {string} [opts.moduleSlug]
 * @param {typeof defaultExamEvaluate} [opts.evaluate]
 */
export function buildExamSubmittedSummary(feState, { moduleSlug, evaluate = defaultExamEvaluate } = {}) {
  if (!feState?.exam) return null;
  const score = computeExamScore({
    questions: feState.questions,
    answers: feState.answers,
    revealed: feState.revealed,
    evaluate
  });
  return {
    session_id: feState.sessionId || null,
    module_slug: moduleSlug || null,
    exam_id: feState.exam.id,
    exam_title: feState.exam.title,
    started_at: feState.startTime,
    submitted_at: Date.now(),
    duration_limit_ms: feState.durationLimitMs != null ? feState.durationLimitMs : null,
    finish_reason: feState.finishReason || EXAM_FINISH_REASON.COMPLETE,
    responses: { ...feState.answers },
    score
  };
}

/**
 * Payload for appendLearnerAttempt (learner backbone).
 *
 * @param {object} summary from buildExamSubmittedSummary (non-null)
 * @returns {object}
 */
export function toLearnerAttemptPayloadFromExamSummary(summary) {
  return {
    attempt_id: summary.session_id || undefined,
    module_slug: summary.module_slug,
    context: ATTEMPT_CONTEXT.FULL_EXAM,
    target_id: summary.exam_id,
    started_at: summary.started_at,
    submitted_at: summary.submitted_at,
    score: { earned: summary.score.earned, max: summary.score.maxPts },
    responses: summary.responses,
    meta: {
      exam_title: summary.exam_title,
      duration_limit_ms: summary.duration_limit_ms,
      finish_reason: summary.finish_reason,
      by_question: summary.score.byQuestion
    }
  };
}

/**
 * Partials for appendMistakeLogEntry when questions carry concept_id (optional migration).
 *
 * @param {object} summary
 * @param {object} opts
 * @param {string} opts.moduleSlug
 * @param {Record<string, { concept_id?: string }>} opts.questionById map q.id -> { concept_id }
 * @returns {Array<object>}
 */
export function mistakePartialsFromExamSummary(summary, { moduleSlug, questionById }) {
  if (!summary?.score?.byQuestion) return [];
  const out = [];
  for (const row of summary.score.byQuestion) {
    if (!row.revealed || row.correct) continue;
    const q = questionById[row.id];
    const concept_id = q?.concept_id;
    if (!concept_id) continue;
    out.push({
      module_slug: moduleSlug,
      concept_id,
      source: MISTAKE_SOURCE.FULL_EXAM,
      ref_id: row.id,
      wrong_answer: summary.responses[row.id] || '',
      timestamp: summary.submitted_at,
      meta: {
        exam_id: summary.exam_id,
        session_id: summary.session_id,
        earned: row.earned,
        max: row.max
      }
    });
  }
  return out;
}
