/**
 * Reusable 5-minute-style concept Schnelltest: trap MCQ, attempt-first, explain-after-commit.
 *
 * Contract:
 * - Items are module-authored (see makro1/js/data/conceptSchnelltestItems.js).
 * - One appendLearnerAttempt per finished session (complete or timeout).
 * - appendMistakeLogEntry on each wrong committed answer.
 * - Optional recordAnswer / updateSRS keep existing progress semantics.
 *
 * @see docs/architecture/learning-data-model.md — attempt, mistakeLogEntry
 */

import { ATTEMPT_CONTEXT, MISTAKE_SOURCE, generateAttemptId } from '../state/learnerBackbone.js';
import { scrubLegacyFeedbackPrefixes } from '../utils/feedbackCopy.js';

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * @typedef {object} ConceptSchnelltestChoice
 * @property {string} id
 * @property {string} label
 * @property {boolean} [is_correct]
 * @property {string} [trap_feedback] Shown only if this wrong option was chosen (after commit).
 */

/**
 * @typedef {object} ConceptSchnelltestItemInput
 * @property {string} id
 * @property {string} concept_id Chapter / concept id for SRS + mistake log
 * @property {string} stem HTML (MathJax-friendly)
 * @property {ConceptSchnelltestChoice[]} choices Exactly one must have is_correct: true
 * @property {string} explain HTML shown only after the learner commits an answer
 */

/**
 * @param {object} config
 * @param {string} config.moduleSlug e.g. makro1
 * @param {string} config.courseLabel
 * @param {number} config.durationMs
 * @param {ConceptSchnelltestItemInput[]} config.items
 * @param {Function} config.renderMath
 * @param {Function} [config.recordAnswer] (conceptId, correct) => void
 * @param {Function} [config.updateSRS] (conceptId, correct) => void
 * @param {Function} config.appendLearnerAttempt
 * @param {Function} config.appendMistakeLogEntry
 * @param {number} [config.maxItems] cap after shuffle (default all)
 */
export function createConceptSchnelltestModule({
  moduleSlug,
  courseLabel,
  durationMs,
  items: itemInputs,
  renderMath,
  recordAnswer = () => {},
  updateSRS = () => {},
  appendLearnerAttempt,
  appendMistakeLogEntry,
  maxItems
}) {
  function normalizeItems(inputs) {
    return inputs.map((raw, idx) => {
      const id = raw.id || `cc_item_${idx}`;
      const concept_id = raw.concept_id;
      if (!concept_id) throw new Error(`conceptSchnelltest: item ${id} missing concept_id`);
      const choicesIn = Array.isArray(raw.choices) ? raw.choices : [];
      const choices = choicesIn.map((c, i) => ({
        id: c.id || String.fromCharCode(97 + i),
        label: c.label,
        is_correct: !!c.is_correct,
        trap_feedback: c.trap_feedback || ''
      }));
      const nCorrect = choices.filter((c) => c.is_correct).length;
      if (nCorrect !== 1) {
        throw new Error(`conceptSchnelltest: item ${id} needs exactly one is_correct choice`);
      }
      return {
        id,
        concept_id,
        stem: raw.stem,
        explain: raw.explain || '',
        choices: shuffle(choices)
      };
    });
  }

  /** @type {null | {
   *   attemptId: string,
   *   startedAt: number,
   *   duration: number,
   *   questions: ReturnType<normalizeItems>,
   *   current: number,
   *   correct: number,
   *   revealed: boolean,
   *   responses: Record<string, { choice_id: string, correct: boolean, committed_at: number }>,
   *   timerInterval: ReturnType<typeof setInterval>|null
   * }} */
  let state = null;

  function clearTimer() {
    if (state?.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function persistAttempt(finishReason) {
    if (!state) return;
    const total = state.questions.length;
    appendLearnerAttempt({
      attempt_id: state.attemptId,
      module_slug: moduleSlug,
      context: ATTEMPT_CONTEXT.CONCEPT_SCHNELLTEST,
      target_id: 'concept_schnelltest_session',
      started_at: state.startedAt,
      submitted_at: Date.now(),
      score: { earned: state.correct, max: total },
      responses: state.responses,
      meta: {
        course_label: courseLabel,
        duration_ms_config: state.duration,
        finish_reason: finishReason,
        item_order: state.questions.map((q) => q.id)
      }
    });
  }

  function finishSession(finishReason) {
    if (!state) return;
    clearTimer();
    persistAttempt(finishReason);
    const content = document.getElementById('content');
    if (!content) {
      state = null;
      return;
    }

    const total = state.questions.length;
    const correct = state.correct;
    const missed = total - correct;
    const summary =
      finishReason === 'timeout'
        ? 'Zeit abgelaufen — offene Fragen zählen als unbeantwortet.'
        : 'Alle Fragen durchgespielt.';

    content.innerHTML = `<div class="exam-container">
<div class="exam-result cc-schnelltest-result">
  <div class="er-label">Konzept-Check</div>
  <div class="er-message">${escapeHtml(summary)}</div>
  <div class="er-score" style="margin-top:12px;font-size:1.25rem">${correct} von ${total} richtig</div>
  ${missed > 0 ? `<div class="er-sub" style="margin-top:8px;color:var(--muted)">${missed} Fehler wurden im Fehlerprotokoll gespeichert (falls aktiviert).</div>` : ''}
  <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
    <button type="button" class="btn" onclick="window.__startConceptSchnelltest()">Konzept-Check erneut</button>
    <button type="button" class="btn secondary" onclick="window.__renderHome()">Startseite</button>
  </div>
</div>
</div>`;
    renderMath(content);
    state = null;
    window.__updateProgressUI?.();
    window.__updateNavBadges?.();
  }

  function renderQuestion() {
    if (!state) return;
    const content = document.getElementById('content');
    const tabRow = document.getElementById('tabRow');
    const breadcrumb = document.getElementById('breadcrumb');
    if (!content) return;

    if (state.current >= state.questions.length) {
      finishSession('complete');
      return;
    }

    if (tabRow) tabRow.classList.remove('visible');
    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / Konzept-Check`;
    }

    const q = state.questions[state.current];
    const elapsed = Date.now() - state.startedAt;
    const remaining = Math.max(0, state.duration - elapsed);
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);

    const choicesHtml = q.choices
      .map(
        (c) => `<label class="cc-choice-row">
  <input type="radio" name="cc-choice" value="${escapeHtml(c.id)}" class="cc-choice-input" ${state.revealed ? 'disabled' : ''}>
  <span class="cc-choice-label">${c.label}</span>
</label>`
      )
      .join('');

    const feedbackHtml = state.revealed
      ? `<div class="exam-feedback cc-schnelltest-feedback" id="ccFeedback" role="status"></div>`
      : `<div class="exam-feedback hidden" id="ccFeedback" role="status"></div>`;

    const primaryLabel = state.revealed ? 'Weiter' : 'Antwort abgeben';

    content.innerHTML = `<div class="exam-container cc-schnelltest">
<div class="exam-topbar">
  <span class="exam-title">Konzept-Check</span>
  <span class="exam-progress">${state.current + 1} / ${state.questions.length}</span>
  <span class="exam-timer" id="ccTimer" aria-live="polite">${mins}:${secs.toString().padStart(2, '0')}</span>
</div>
<div class="exam-q-card">
  <p class="cc-schnelltest-hint">Wähle eine Antwort und bestätige — Erklärungen erscheinen erst danach.</p>
  <fieldset class="cc-schnelltest-fieldset">
    <legend class="exam-q-text cc-schnelltest-stem">${q.stem}</legend>
    <div class="cc-choice-list">${choicesHtml}</div>
  </fieldset>
  <div class="exam-actions">
    <button type="button" class="btn" id="ccPrimaryBtn" onclick="window.__conceptSchnelltestPrimary()">${primaryLabel}</button>
  </div>
  ${feedbackHtml}
</div>
</div>`;

    const feedbackEl = document.getElementById('ccFeedback');
    if (state.revealed && feedbackEl) {
      fillFeedback(q, feedbackEl);
      feedbackEl.classList.remove('hidden');
    }

    renderMath(content);

    clearTimer();
    state.timerInterval = setInterval(() => {
      const el = document.getElementById('ccTimer');
      if (!el || !state) {
        clearTimer();
        return;
      }
      const remainingMs = Math.max(0, state.duration - (Date.now() - state.startedAt));
      if (remainingMs === 0) {
        clearTimer();
        finishSession('timeout');
        return;
      }
      const m = Math.floor(remainingMs / 60000);
      const s = Math.floor((remainingMs % 60000) / 1000);
      el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
      if (remainingMs < 60000) el.classList.add('urgent');
    }, 1000);
  }

  /**
   * @param {ReturnType<normalizeItems>[0]} q
   * @param {HTMLElement} feedbackEl
   */
  function fillFeedback(q, feedbackEl) {
    const last = state.responses[q.id];
    if (!last) return;
    const chosen = q.choices.find((c) => c.id === last.choice_id);
    const correctChoice = q.choices.find((c) => c.is_correct);
    if (last.correct) {
      feedbackEl.innerHTML = `<span class="fb-correct">Richtig.</span><div class="cc-explain-after">${q.explain}</div>`;
    } else {
      const trap =
        chosen && chosen.trap_feedback
          ? `<div class="cc-trap-note">${escapeHtml(scrubLegacyFeedbackPrefixes(chosen.trap_feedback))}</div>`
          : '';
      const rightLabel = correctChoice ? escapeHtml(correctChoice.label) : '';
      feedbackEl.innerHTML = `<span class="fb-wrong">Nicht passend.</span>${trap}<div class="cc-correct-line"><strong>Richtig wäre:</strong> ${rightLabel}</div><div class="cc-explain-after">${q.explain}</div>`;
    }
    renderMath(feedbackEl);
  }

  function handlePrimary() {
    if (!state) return;
    const q = state.questions[state.current];

    if (!state.revealed) {
      const input = document.querySelector('input[name="cc-choice"]:checked');
      if (!input) return;
      const choiceId = input.value;
      const chosen = q.choices.find((c) => c.id === choiceId);
      if (!chosen) return;

      const correct = !!chosen.is_correct;
      if (correct) state.correct += 1;

      state.responses[q.id] = {
        choice_id: choiceId,
        concept_id: q.concept_id,
        correct,
        committed_at: Date.now()
      };

      recordAnswer(q.concept_id, correct);
      updateSRS(q.concept_id, correct);

      if (!correct) {
        appendMistakeLogEntry({
          module_slug: moduleSlug,
          concept_id: q.concept_id,
          source: MISTAKE_SOURCE.SCHNELLTEST_CONCEPT,
          ref_id: `concept_schnelltest:${state.attemptId}:${q.id}`,
          wrong_answer: chosen.label,
          timestamp: Date.now(),
          meta: { attempt_id: state.attemptId, choice_id: choiceId }
        });
      }

      state.revealed = true;
      const feedbackEl = document.getElementById('ccFeedback');
      if (feedbackEl) {
        fillFeedback(q, feedbackEl);
        feedbackEl.classList.remove('hidden');
      }
      document.querySelectorAll('.cc-choice-input').forEach((el) => {
        el.disabled = true;
      });
      const primary = document.getElementById('ccPrimaryBtn');
      if (primary) primary.textContent = 'Weiter';
      window.__updateProgressUI?.();
      window.__updateNavBadges?.();
      return;
    }

    state.current += 1;
    state.revealed = false;
    renderQuestion();
  }

  function startConceptSchnelltest() {
    if (!itemInputs?.length) {
      return;
    }
    const normalized = shuffle(normalizeItems(itemInputs));
    const cap = maxItems != null ? Math.min(maxItems, normalized.length) : normalized.length;
    const questions = normalized.slice(0, cap);

    clearTimer();
    state = {
      attemptId: generateAttemptId(moduleSlug),
      startedAt: Date.now(),
      duration: durationMs,
      questions,
      current: 0,
      correct: 0,
      revealed: false,
      responses: {},
      timerInterval: null
    };
    renderQuestion();
  }

  return {
    startConceptSchnelltest,
    handleConceptSchnelltestPrimary: handlePrimary
  };
}
