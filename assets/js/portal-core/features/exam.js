import { EXAM_FINISH_REASON } from "../exam/examSessionBackbone.js";
import { ATTEMPT_CONTEXT, MISTAKE_SOURCE, generateAttemptId } from "../state/learnerBackbone.js";
import { scrubLegacyFeedbackPrefixes } from "../utils/feedbackCopy.js";

export function createQuickExamModule({
  courseLabel,
  stepProblems,
  examQuestions,
  examDurationMs,
  checkAnswerWithTolerance,
  recordAnswer,
  updateSRS,
  renderMath,
  /** When set with appendLearnerAttempt, Schnelltest sessions are logged to the learner backbone. */
  moduleSlug = null,
  appendLearnerAttempt = null,
  /** Optional: one mistake row per wrong committed answer (concept_id from step problem). */
  appendMistakeLogEntry = null
}) {
  let examState = null;

  function cleanExamSurfaceTitle(value) {
    return String(value || "").replace(/^Exam-Drill\s+/i, "").trim();
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function setFeedbackContent(feedbackEl, className, prefixText, explainHtml) {
    if (!feedbackEl) return;
    feedbackEl.innerHTML = "";
    const span = document.createElement("span");
    span.className = className;
    span.appendChild(document.createTextNode(prefixText));
    const detail = document.createElement("span");
    detail.innerHTML = explainHtml;
    span.appendChild(detail);
    feedbackEl.appendChild(span);
  }

  function finishExam(finishReason = EXAM_FINISH_REASON.COMPLETE) {
    if (!examState) return;
    if (examState.timerInterval) clearInterval(examState.timerInterval);
    const content = document.getElementById("content");
    if (!content) return;

    const snap = examState;
    if (typeof appendLearnerAttempt === "function" && moduleSlug) {
      appendLearnerAttempt({
        attempt_id: snap.attemptId,
        module_slug: moduleSlug,
        context: ATTEMPT_CONTEXT.QUICK_EXAM,
        target_id: "quick_exam_session",
        started_at: snap.startTime,
        submitted_at: Date.now(),
        score: { earned: snap.correct, max: snap.questions.length },
        responses: snap.responses && typeof snap.responses === "object" ? snap.responses : {},
        meta: {
          course_label: courseLabel,
          duration_ms_config: snap.duration,
          finish_reason: finishReason,
          question_count: snap.questions.length,
          item_order: snap.questions.map((q, idx) => `idx_${idx}:${q.conceptId || "na"}`)
        }
      });
    }

    const total = snap.questions.length;
    const correct = snap.correct;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const color = pct >= 70 ? "var(--accent)" : pct >= 50 ? "var(--accent2)" : "var(--accent3)";
    const msg = pct >= 70
      ? "Stark. Sichere jetzt die wenigen Fehler gezielt im Dashboard oder in der Wiederholung."
      : pct >= 50
        ? "Solide Basis. Wiederhole jetzt die Konzepte, in denen du noch unsicher warst."
        : "Noch nicht stabil genug für Prüfungstempo. Geh jetzt direkt in Dashboard oder Wiederholung und arbeite die Fehlerquellen nach.";

    content.innerHTML = `<div class="exam-container">
<div class="exam-result">
  <div class="er-score" style="color:${color}">${pct}%</div>
  <div class="er-label">${correct} von ${total} richtig</div>
  <div class="er-message">${msg}</div>
  <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
    <button class="btn" onclick="window.__startExam()">Nochmal</button>
    <button class="btn secondary" onclick="window.__renderHome()">Startseite</button>
    <button class="btn secondary" onclick="window.__showDashboard()">Dashboard</button>
  </div>
</div>
</div>`;
    examState = null;
  }

  function renderExamQuestion() {
    if (!examState) return;
    const content = document.getElementById("content");
    if (!content) return;

    if (examState.current >= examState.questions.length) {
      finishExam(EXAM_FINISH_REASON.COMPLETE);
      return;
    }

    const q = examState.questions[examState.current];
    const elapsed = Date.now() - examState.startTime;
    const remaining = Math.max(0, examState.duration - elapsed);
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);

    const tabRow = document.getElementById("tabRow");
    if (tabRow) tabRow.classList.remove("visible");
    document.getElementById("breadcrumb").innerHTML =
      `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / Schnelltest`;

    content.innerHTML = `<div class="exam-container">
<div class="exam-topbar">
  <span class="exam-title">Schnelltest unter Zeitdruck</span>
  <span class="exam-progress">${examState.current + 1} / ${examState.questions.length}</span>
  <span class="exam-timer" id="examTimer" aria-live="polite">${mins}:${secs.toString().padStart(2, "0")}</span>
</div>
<div class="exam-q-card">
  <div class="exam-q-ctx">${cleanExamSurfaceTitle(q.title)}${q.context ? ` · ${q.context}` : ""}</div>
  <div class="exam-q-text">${q.step.q}</div>
  <input class="exam-input" id="examInput" placeholder="Antwort knapp und fachlich sauber formulieren..."
         aria-label="Antwort eingeben"
         onkeydown="if(event.key==='Enter'){ event.preventDefault(); window.__submitExamAnswer(); }">
  <div class="exam-actions">
    <button class="btn" onclick="window.__submitExamAnswer()">Antwort prüfen</button>
    <button class="btn secondary" onclick="window.__skipExamQ()">Überspringen</button>
  </div>
  <div class="exam-feedback hidden" id="examFeedback" role="status"></div>
</div>
<div class="exam-prog-bar" role="progressbar" aria-valuenow="${examState.current}" aria-valuemax="${examState.questions.length}">
  <div class="exam-prog-fill" style="width:${(examState.current / examState.questions.length) * 100}%"></div>
</div>
</div>`;

    renderMath(content);

    if (examState.timerInterval) clearInterval(examState.timerInterval);
    examState.timerInterval = setInterval(() => {
      const el = document.getElementById("examTimer");
      if (!el) {
        clearInterval(examState.timerInterval);
        return;
      }
      const remainingMs = Math.max(0, examState.duration - (Date.now() - examState.startTime));
      if (remainingMs === 0) {
        clearInterval(examState.timerInterval);
        finishExam(EXAM_FINISH_REASON.TIMEOUT);
        return;
      }
      const m = Math.floor(remainingMs / 60000);
      const s = Math.floor((remainingMs % 60000) / 1000);
      el.textContent = `${m}:${s.toString().padStart(2, "0")}`;
      if (remainingMs < 60000) el.classList.add("urgent");
    }, 1000);

    const input = document.getElementById("examInput");
    if (input) input.focus();
  }

  function startExam() {
    const allProblems = [];
    Object.entries(stepProblems).forEach(([conceptId, problems]) => {
      problems.forEach((problem) => {
        problem.steps.forEach((step, stepIdx) => {
          allProblems.push({ conceptId, stepIdx, step, title: problem.title, context: problem.context });
        });
      });
    });
    shuffle(allProblems);

    if (examState?.timerInterval) clearInterval(examState.timerInterval);

    const useBackbone = typeof appendLearnerAttempt === "function" && moduleSlug;
    examState = {
      questions: allProblems.slice(0, Math.min(examQuestions, allProblems.length)),
      current: 0,
      correct: 0,
      startTime: Date.now(),
      duration: examDurationMs,
      timerInterval: null,
      attemptId: useBackbone ? generateAttemptId(moduleSlug) : null,
      responses: useBackbone ? {} : null
    };
    renderExamQuestion();
  }

  function submitExamAnswer() {
    if (!examState) return;
    const q = examState.questions[examState.current];
    const input = document.getElementById("examInput");
    const val = (input?.value || "").trim();
    if (!val) return;

    const result = checkAnswerWithTolerance(val.toLowerCase().replace(/\s+/g, ""), q.step.answer, q.step.traps);
    const correct = result.correct;
    const feedbackEl = document.getElementById("examFeedback");

    const refKey = `idx_${examState.current}`;
    if (examState.responses && typeof examState.responses === "object") {
      examState.responses[refKey] = {
        concept_id: q.conceptId,
        correct,
        committed_at: Date.now()
      };
    }

    if (correct) {
      examState.correct += 1;
      setFeedbackContent(feedbackEl, "fb-correct", "Richtig - ", q.step.explain);
      recordAnswer(q.conceptId, true);
      updateSRS(q.conceptId, true);
      window.__updateStreakUI?.();
    } else {
      if (typeof appendMistakeLogEntry === "function" && moduleSlug && q.conceptId) {
        appendMistakeLogEntry({
          module_slug: moduleSlug,
          concept_id: q.conceptId,
          source: MISTAKE_SOURCE.QUICK_EXAM,
          ref_id: `quick_exam:${examState.attemptId || "na"}:${examState.current}`,
          wrong_answer: val,
          timestamp: Date.now(),
          meta: { title: q.title, context: q.context, step_idx: q.stepIdx }
        });
      }
      if (feedbackEl) {
        const trapClean = scrubLegacyFeedbackPrefixes(result.trap);
        const trapMsg = trapClean
          ? `<div style="margin-bottom:6px;color:var(--muted);font-size:0.95rem;line-height:1.5">${escapeHtml(trapClean)}</div>`
          : "";
        const correctAnswers = Array.isArray(q.step.answer) ? q.step.answer : [q.step.answer];
        const correctDisplay = correctAnswers[0];
        feedbackEl.innerHTML = "";
        const span = document.createElement("span");
        span.className = "fb-wrong";
        span.innerHTML = `${trapMsg}<div style="margin-top:6px"><strong style="color:var(--accent)">Richtige Antwort:</strong> <strong>${escapeHtml(String(correctDisplay))}</strong></div>${q.step.explain ? `<div style="margin-top:6px;color:var(--muted)">${q.step.explain}</div>` : ""}`;
        feedbackEl.appendChild(span);
      }
      recordAnswer(q.conceptId, false);
      updateSRS(q.conceptId, false);
    }

    if (feedbackEl) {
      feedbackEl.classList.remove("hidden");
      renderMath(feedbackEl);
    }
    if (input) input.disabled = true;

    const answerBtn = document.querySelector(".exam-actions .btn");
    if (answerBtn) {
      answerBtn.textContent = "Weiter";
      answerBtn.onclick = () => {
        examState.current += 1;
        renderExamQuestion();
      };
    }
    window.__updateProgressUI?.();
    window.__updateNavBadges?.();
  }

  function skipExamQ() {
    if (!examState) return;
    const refKey = `idx_${examState.current}`;
    if (examState.responses && typeof examState.responses === "object") {
      examState.responses[refKey] = {
        concept_id: examState.questions[examState.current]?.conceptId,
        skipped: true,
        committed_at: Date.now()
      };
    }
    examState.current += 1;
    renderExamQuestion();
  }

  return {
    startExam,
    submitExamAnswer,
    skipExamQ
  };
}
