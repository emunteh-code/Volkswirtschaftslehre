export function createQuickExamModule({
  courseLabel,
  stepProblems,
  examQuestions,
  examDurationMs,
  checkAnswerWithTolerance,
  recordAnswer,
  updateSRS,
  renderMath
}) {
  let examState = null;

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

  function finishExam() {
    if (!examState) return;
    if (examState.timerInterval) clearInterval(examState.timerInterval);
    const content = document.getElementById("content");
    if (!content) return;

    const total = examState.questions.length;
    const correct = examState.correct;
    const pct = Math.round((correct / total) * 100);
    const color = pct >= 70 ? "var(--accent)" : pct >= 50 ? "var(--accent2)" : "var(--accent3)";
    const msg = pct >= 70 ? "Sehr gut - weiter so!" : pct >= 50 ? "Gut - weiter üben!" : "Noch üben - schwache Konzepte wiederholen.";

    content.innerHTML = `<div class="exam-container">
<div class="exam-result">
  <div class="er-score" style="color:${color}">${pct}%</div>
  <div class="er-label">${correct} von ${total} richtig</div>
  <div class="er-message">${msg}</div>
  <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
    <button class="btn" onclick="window.__startExam()">Nochmal</button>
    <button class="btn secondary" onclick="window.__renderHome()">Startseite</button>
    <button class="btn secondary" onclick="window.__showDashboard()">Lernstand</button>
  </div>
</div>
</div>`;
    renderMath(content);
    examState = null;
  }

  function renderExamQuestion() {
    if (!examState) return;
    const content = document.getElementById("content");
    if (!content) return;

    if (examState.current >= examState.questions.length) {
      finishExam();
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
      `<button class="breadcrumb-link" onclick="window.__renderHome()">${courseLabel}</button> / Schnelltest`;

    content.innerHTML = `<div class="exam-container">
<div class="exam-topbar">
  <span class="exam-title">Prüfungssimulation</span>
  <span class="exam-progress">${examState.current + 1} / ${examState.questions.length}</span>
  <span class="exam-timer" id="examTimer" aria-live="polite">${mins}:${secs.toString().padStart(2, "0")}</span>
</div>
<div class="exam-q-card">
  <div class="exam-q-ctx">${q.title} | ${q.context}</div>
  <div class="exam-q-text">${q.step.q}</div>
  <input class="exam-input" id="examInput" placeholder="Deine Antwort..."
         aria-label="Antwort eingeben"
         onkeydown="if(event.key==='Enter'){ event.preventDefault(); window.__submitExamAnswer(); }">
  <div class="exam-actions">
    <button class="btn" onclick="window.__submitExamAnswer()">Antworten</button>
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
        finishExam();
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

    examState = {
      questions: allProblems.slice(0, Math.min(examQuestions, allProblems.length)),
      current: 0,
      correct: 0,
      startTime: Date.now(),
      duration: examDurationMs,
      timerInterval: null
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

    if (correct) {
      examState.correct += 1;
      setFeedbackContent(feedbackEl, "fb-correct", "Richtig - ", q.step.explain);
      recordAnswer(q.conceptId, true);
      updateSRS(q.conceptId, true);
      window.__updateStreakUI?.();
    } else {
      if (feedbackEl) {
        const msg = result.trap ? `Achtung: ${escapeHtml(result.trap)}` : q.step.explain;
        setFeedbackContent(feedbackEl, "fb-wrong", "Nicht ganz. ", msg);
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
    examState.current += 1;
    renderExamQuestion();
  }

  return {
    startExam,
    submitExamAnswer,
    skipExamQ
  };
}
