function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const full = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;

  const r = Number.parseInt(full.slice(0, 2), 16);
  const g = Number.parseInt(full.slice(2, 4), 16);
  const b = Number.parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function readThemeColor(variableName, fallback) {
  const value = getComputedStyle(document.body).getPropertyValue(variableName).trim();
  return value || fallback;
}

export function createFullExamModule({
  courseLabel,
  courseExamCollectionTitle,
  fullExams,
  renderMath,
  showToast
}) {
  let feState = null;

  function evaluate(q, ua) {
    if (q.type === "wf") return ua === q.correct;
    if (!ua || ua.trim() === "") return false;
    if (Array.isArray(q.correct)) {
      const lower = ua.toLowerCase();
      return q.correct.some((answer) => lower.includes(answer.toLowerCase()));
    }
    return false;
  }

  function calcScore() {
    const { questions, answers, revealed } = feState;
    let earned = 0;
    let maxPts = 0;
    questions.forEach((q) => {
      const pts = q.points || 2;
      maxPts += pts;
      if (revealed[q.id]) {
        const ok = evaluate(q, (answers[q.id] || "").trim());
        if (ok) earned += pts;
      }
    });
    return { earned, maxPts };
  }

  function updateScoreBadge() {
    const el = document.getElementById("fe-live-score");
    if (!el) return;
    const { earned, maxPts } = calcScore();
    const totalRevealed = feState.questions.filter((q) => feState.revealed[q.id]).length;
    el.textContent = `${earned} / ${maxPts} Pkt. · ${totalRevealed}/${feState.questions.length} beantwortet`;
  }

  function updateDots() {
    const { questions, answers, revealed } = feState;
    questions.forEach((q) => {
      const dot = document.getElementById(`fed_${q.id}`);
      if (!dot) return;
      dot.className = "fe-dot";
      if (revealed[q.id]) {
        const ok = evaluate(q, (answers[q.id] || "").trim());
        dot.classList.add(ok ? "correct" : "wrong");
      } else if (answers[q.id]) {
        dot.classList.add("answered");
      }
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function showFeedback(qid, ok, q, userAnswer, revealOnly = false) {
    const feedback = document.getElementById(`fefb_${qid}`);
    if (!feedback) return;

    const accent = readThemeColor("--accent", "#486b19");
    const accent2 = readThemeColor("--accent2", "#647b5f");
    const accent3 = readThemeColor("--accent3", "#a55a4f");
    const safeAnswer = escapeHtml(userAnswer || "(keine)");
    const isWF = q.type === "wf";

    let inner = "";
    if (!revealOnly) {
      inner += `<div class="fe-fb-row"><span class="fe-fb-label">Deine Antwort:</span>
<span style="color:${ok ? "var(--accent)" : "var(--accent3)"}"><strong>${safeAnswer}</strong>
${ok ? ' <span style="font-size:16px">✓</span>' : ' <span style="font-size:16px">✗</span>'}</span></div>`;
      if (!ok && isWF) {
        inner += `<div class="fe-fb-row"><span class="fe-fb-label">Richtig:</span> <strong style="color:var(--accent)">${q.correct}</strong></div>`;
      }
      inner += '<hr style="border:none;border-top:1px solid var(--border);margin:10px 0">';
    }
    inner += `<div class="fe-fb-solution">
<div class="fe-fb-sol-title">${revealOnly ? "Musterlösung" : (ok ? "Musterlösung" : "Musterlösung - so wäre es richtig")}</div>
<div class="fe-fb-sol-body">${q.feedback || "Keine Musterlösung verfügbar."}</div>
</div>`;

    const borderColor = revealOnly ? accent2 : (ok ? accent : accent3);
    const background = revealOnly
      ? hexToRgba(accent2, 0.08)
      : ok
        ? hexToRgba(accent, 0.08)
        : hexToRgba(accent3, 0.08);

    feedback.style.cssText = `display:block;margin-top:14px;padding:14px 18px;border-radius:8px;border-left:3px solid ${borderColor};background:${background};animation:fadeIn 0.25s ease`;
    feedback.innerHTML = inner;
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([feedback]).catch(() => {});
  }

  function updateTimer() {
    if (!feState || !feState.exam.duration) return;
    const remaining = Math.max(0, feState.exam.duration * 60000 - (Date.now() - feState.startTime));
    const el = document.getElementById("feTimer");
    if (el) {
      el.textContent = `⏱ ${Math.floor(remaining / 60000)}:${Math.floor((remaining % 60000) / 1000).toString().padStart(2, "0")}`;
      el.classList.toggle("urgent", remaining < 300000);
    }
    if (remaining <= 0 && !feState.submitted) {
      clearInterval(feState.timerInterval);
      submitFE();
    }
  }

  function renderFullExamView() {
    const { exam, questions } = feState;
    const content = document.getElementById("content");
    if (!content) return;
    const tabRow = document.getElementById("tabRow");
    if (tabRow) tabRow.style.display = "none";
    document.getElementById("breadcrumb").innerHTML =
      `<span style="cursor:pointer;text-decoration:underline" onclick="window.__renderHome()">${courseLabel}</span>/ Probeklausur`;

    const maxPts = questions.reduce((sum, q) => sum + (q.points || 2), 0);

    let html = `<div class="full-exam">
<div class="full-exam-header">
  <h2>${exam.title}</h2>
  <div class="full-exam-meta">
    <span>${exam.subtitle}</span>
    <span>${exam.duration} Min.</span>
    <span id="fe-live-score" aria-live="polite">0 / ${maxPts} Pkt. · 0/${questions.length} beantwortet</span>
    ${exam.duration ? '<div class="full-exam-timer" id="feTimer" aria-live="polite"></div>' : ""}
  </div>
</div>
<div class="fe-progress-strip" role="navigation" aria-label="Fragenuebersicht">
  <div class="fe-progress-dots" id="feDots">
    ${questions.map((q) => `<div class="fe-dot" id="fed_${q.id}" title="${q.id}" onclick="document.getElementById('feq_${q.id}').scrollIntoView({behavior:'smooth',block:'center'})"></div>`).join("")}
  </div>
</div>`;

    let lastAufgabe = "";
    let lastContext = "";
    questions.forEach((q, index) => {
      if (q.aufgabe !== lastAufgabe) {
        lastAufgabe = q.aufgabe;
        lastContext = "";
        const aufgabe = exam.aufgaben.find((entry) => entry.label === q.aufgabe);
        html += `<div class="fe-aufgabe-sep">${q.aufgabe}${aufgabe && aufgabe.title ? ` - ${aufgabe.title}` : ""} <span style="font-weight:400;opacity:.6">(${aufgabe ? aufgabe.points : ""} Pkt.)</span></div>`;
        if (aufgabe && aufgabe.preamble) html += `<div class="fe-context-block">${aufgabe.preamble}</div>`;
      }
      if (q.context && q.context !== lastContext) {
        lastContext = q.context;
        html += `<div class="fe-context-block">${q.context}</div>`;
      }

      if (q.type === "wf") {
        html += `<div class="fe-question" id="feq_${q.id}">
<div class="fe-q-head">
  <span class="fe-q-num">Frage ${index + 1}</span>
  <span class="fe-q-pts" id="fepts_${q.id}">${q.points || 2} Pkt.</span>
</div>
<div class="fe-q-text">${q.text}</div>
<div class="fe-mc-group" role="radiogroup" aria-label="Wahr oder Falsch">
  <label class="fe-mc-label" id="felbl_${q.id}_Wahr" onclick="window.__feSelectWF('${q.id}','Wahr',this)"><input type="radio" name="fe_${q.id}" value="Wahr"> Wahr</label>
  <label class="fe-mc-label" id="felbl_${q.id}_Falsch" onclick="window.__feSelectWF('${q.id}','Falsch',this)"><input type="radio" name="fe_${q.id}" value="Falsch"> Falsch</label>
</div>
<div class="fe-inline-feedback" id="fefb_${q.id}" style="display:none" aria-live="polite"></div>
</div>`;
      } else {
        html += `<div class="fe-question" id="feq_${q.id}">
<div class="fe-q-head">
  <span class="fe-q-num">Frage ${index + 1}</span>
  <span class="fe-q-pts" id="fepts_${q.id}">${q.points || 2} Pkt.</span>
</div>
<div class="fe-q-text">${q.text}</div>
<textarea class="fe-input fe-textarea" id="fein_${q.id}" placeholder="Antwort hier eingeben..."
  oninput="window.__feText('${q.id}',this.value)" rows="4"
  aria-label="Antwort fuer Frage ${index + 1}"></textarea>
<div style="margin-top:8px;display:flex;gap:8px;align-items:center">
  <button class="btn" id="febtn_${q.id}" onclick="window.__feCheckText('${q.id}')" style="padding:6px 18px;font-size:13px">Prüfen</button>
  <button class="btn secondary" id="ferevbtn_${q.id}" onclick="window.__feRevealAnswer('${q.id}')" style="padding:6px 14px;font-size:13px">Lösung anzeigen</button>
</div>
<div class="fe-inline-feedback" id="fefb_${q.id}" style="display:none" aria-live="polite"></div>
</div>`;
      }
    });

    html += `<div class="fe-submit-row">
<button class="btn" onclick="window.__submitFE()" style="padding:12px 36px;font-size:16px">Klausur abgeben &amp; Auswertung</button>
</div></div>`;

    content.innerHTML = html;
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([content]).catch(() => {});
    updateTimer();
  }

  function startFullExam(examId) {
    const exam = fullExams[examId];
    if (!exam) return;
    if (!document.body.classList.contains("focus-mode")) {
      document.body.classList.add("focus-mode");
    }
    const questions = [];
    exam.aufgaben.forEach((aufgabe) => {
      if (aufgabe.type === "wf-block") {
        aufgabe.groups.forEach((group) => {
          group.questions.forEach((q) => {
            questions.push({ ...q, points: 2, type: "wf", aufgabe: aufgabe.label, context: group.context });
          });
        });
      } else if (aufgabe.type === "text-block") {
        aufgabe.questions.forEach((q) => {
          questions.push({ ...q, aufgabe: aufgabe.label, aufgabeTitle: aufgabe.title, preamble: aufgabe.preamble });
        });
      }
    });

    feState = {
      exam,
      questions,
      answers: {},
      revealed: {},
      startTime: Date.now(),
      submitted: false,
      timerInterval: null
    };
    renderFullExamView();
    if (exam.duration) feState.timerInterval = setInterval(updateTimer, 1000);
  }

  function feSelectWF(qid, val, labelEl) {
    const q = feState.questions.find((entry) => entry.id === qid);
    if (!q || feState.revealed[qid]) return;

    const accent = readThemeColor("--accent", "#486b19");
    const accent3 = readThemeColor("--accent3", "#a55a4f");

    feState.answers[qid] = val;
    labelEl.parentElement.querySelectorAll(".fe-mc-label").forEach((label) => label.classList.remove("selected"));
    labelEl.classList.add("selected");
    feState.revealed[qid] = true;

    const ok = evaluate(q, val);
    const pts = q.points || 2;
    labelEl.parentElement.querySelectorAll(".fe-mc-label").forEach((label) => { label.style.pointerEvents = "none"; });

    const chosen = document.getElementById(`felbl_${qid}_${val}`);
    const correct = document.getElementById(`felbl_${qid}_${q.correct}`);
    if (ok) {
      if (chosen) chosen.style.cssText += `;background:${hexToRgba(accent, 0.16)};border-color:var(--accent);color:var(--accent)`;
    } else {
      if (chosen) chosen.style.cssText += `;background:${hexToRgba(accent3, 0.15)};border-color:var(--accent3);color:var(--accent3)`;
      if (correct) correct.style.cssText += `;background:${hexToRgba(accent, 0.12)};border-color:var(--accent);color:var(--accent)`;
    }
    const ptsEl = document.getElementById(`fepts_${qid}`);
    if (ptsEl) {
      ptsEl.textContent = ok ? `+${pts} Pkt. ✓` : `0 / ${pts} Pkt. ✗`;
      ptsEl.style.color = ok ? "var(--accent)" : "var(--accent3)";
    }
    showFeedback(qid, ok, q, val);
    updateDots();
    updateScoreBadge();
  }

  function feCheckText(qid) {
    const q = feState.questions.find((entry) => entry.id === qid);
    if (!q || feState.revealed[qid]) return;
    const ua = (feState.answers[qid] || "").trim();
    if (!ua) {
      showToast("Bitte zuerst eine Antwort eingeben.", "info");
      return;
    }

    feState.revealed[qid] = true;
    const ok = evaluate(q, ua);
    const pts = q.points || 2;
    const textarea = document.getElementById(`fein_${qid}`);
    if (textarea) {
      textarea.readOnly = true;
      textarea.style.opacity = "0.7";
    }
    const btn = document.getElementById(`febtn_${qid}`);
    if (btn) btn.disabled = true;
    const revealBtn = document.getElementById(`ferevbtn_${qid}`);
    if (revealBtn) revealBtn.style.display = "none";
    const ptsEl = document.getElementById(`fepts_${qid}`);
    if (ptsEl) {
      ptsEl.textContent = ok ? `+${pts} Pkt. ✓` : `0 / ${pts} Pkt. ✗`;
      ptsEl.style.color = ok ? "var(--accent)" : "var(--accent3)";
    }
    showFeedback(qid, ok, q, ua);
    updateDots();
    updateScoreBadge();
  }

  function feRevealAnswer(qid) {
    const q = feState.questions.find((entry) => entry.id === qid);
    if (!q || feState.revealed[qid]) return;
    feState.revealed[qid] = true;
    feState.answers[qid] = feState.answers[qid] || "";
    const textarea = document.getElementById(`fein_${qid}`);
    if (textarea) {
      textarea.readOnly = true;
      textarea.style.opacity = "0.7";
    }
    const btn = document.getElementById(`febtn_${qid}`);
    if (btn) btn.disabled = true;
    const revealBtn = document.getElementById(`ferevbtn_${qid}`);
    if (revealBtn) revealBtn.style.display = "none";
    const ptsEl = document.getElementById(`fepts_${qid}`);
    if (ptsEl) {
      ptsEl.textContent = "Musterlösung ↓";
      ptsEl.style.color = "var(--accent2)";
    }
    showFeedback(qid, false, q, feState.answers[qid], true);
    updateDots();
    updateScoreBadge();
  }

  function feText(qid, val) {
    if (feState) feState.answers[qid] = val.trim();
  }

  function submitFE() {
    if (!feState || feState.submitted) return;
    feState.submitted = true;
    if (feState.timerInterval) clearInterval(feState.timerInterval);

    const accent = readThemeColor("--accent", "#486b19");

    feState.questions.forEach((q) => {
      if (!feState.revealed[q.id]) {
        feState.revealed[q.id] = true;
        const ua = (feState.answers[q.id] || "").trim();
        const ok = evaluate(q, ua);
        if (q.type === "wf") {
          const correctLbl = document.getElementById(`felbl_${q.id}_${q.correct}`);
          if (!ok && correctLbl) {
            correctLbl.style.cssText += `;background:${hexToRgba(accent, 0.12)};border-color:var(--accent);color:var(--accent)`;
          }
        } else {
          const textarea = document.getElementById(`fein_${q.id}`);
          if (textarea) {
            textarea.readOnly = true;
            textarea.style.opacity = "0.7";
          }
          const btn = document.getElementById(`febtn_${q.id}`);
          if (btn) btn.disabled = true;
          const revealBtn = document.getElementById(`ferevbtn_${q.id}`);
          if (revealBtn) revealBtn.style.display = "none";
        }
        showFeedback(q.id, ok, q, ua, !ua);
      }
    });

    updateDots();
    const { earned, maxPts } = calcScore();
    const pct = Math.round((earned / maxPts) * 100);
    const color = pct >= 60 ? "var(--accent)" : pct >= 40 ? "var(--accent2)" : "var(--accent3)";
    const msg = pct >= 60 ? "Bestanden" : "Knapp nicht bestanden - schwache Bereiche wiederholen.";
    const content = document.getElementById("content");
    if (!content) return;

    const banner = document.createElement("div");
    banner.style.cssText = "position:sticky;top:0;z-index:20;background:var(--surface);border-bottom:2px solid var(--border);padding:14px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;animation:fadeIn .3s ease";
    banner.innerHTML = `<div>
<span style="font-family:Syne,sans-serif;font-size:24px;font-weight:800;color:${color}">${earned} / ${maxPts} Punkte</span>
<span style="color:var(--muted);font-size:13px;margin-left:12px">${pct}% - ${msg}</span>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<button class="btn secondary" onclick="window.__startFullExam('${feState.exam.id}')" style="font-size:13px;padding:7px 16px">Nochmal</button>
<button class="btn secondary" onclick="window.__renderHome()" style="font-size:13px;padding:7px 16px">Startseite</button>
</div>`;
    content.firstChild ? content.insertBefore(banner, content.firstChild) : content.appendChild(banner);
    content.scrollTo({ top: 0, behavior: "smooth" });
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([content]).catch(() => {});
  }

  function showFullExamSelect() {
    const content = document.getElementById("content");
    if (!content) return;
    const tabRow = document.getElementById("tabRow");
    if (tabRow) tabRow.style.display = "none";
    document.getElementById("breadcrumb").innerHTML =
      `<span style="cursor:pointer;text-decoration:underline" onclick="window.__renderHome()">${courseLabel}</span>/ Probeklausuren`;
    let html = `<div style="max-width:600px"><h2 style="font-family:Syne;font-weight:800;margin-bottom:16px">${courseExamCollectionTitle}</h2>`;
    Object.values(fullExams).forEach((exam) => {
      const totalPoints = exam.aufgaben.reduce((sum, aufgabe) => sum + aufgabe.points, 0);
      const totalQuestions = exam.aufgaben.reduce((sum, aufgabe) => {
        if (aufgabe.type === "wf-block") return sum + aufgabe.groups.reduce((groupSum, group) => groupSum + group.questions.length, 0);
        return sum + (aufgabe.questions ? aufgabe.questions.length : 0);
      }, 0);
      html += `<div class="home-action-card" onclick="window.__startFullExam('${exam.id}')" style="margin-bottom:12px">
<div class="hac-title">${exam.title}</div>
<div class="hac-desc">${exam.duration} Min. | ${totalQuestions} Fragen | ${totalPoints} Punkte</div>
</div>`;
    });
    html += "</div>";
    content.innerHTML = html;
  }

  return {
    startFullExam,
    feSelectWF,
    feCheckText,
    feRevealAnswer,
    feText,
    submitFE,
    showFullExamSelect
  };
}
