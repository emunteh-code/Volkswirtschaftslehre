/**
 * Minimal mistake-review UI (single full-page list, no analytics dashboard).
 * Uses listMistakeLogEntries + optional localStorage reviewed map.
 */

import {
  distinctConceptIds,
  distinctSources,
  filterEntries,
  loadReviewedMap,
  markEntryReviewed,
  partitionByReviewed,
  sortEntriesByTimeDesc
} from "../state/mistakeReviewState.js";

function getDefaultStorage() {
  if (typeof localStorage === "undefined") return null;
  return localStorage;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fmtTime(ts) {
  if (!ts) return "—";
  try {
    return new Date(ts).toLocaleString(undefined, {
      dateStyle: "short",
      timeStyle: "short"
    });
  } catch {
    return "—";
  }
}

function summarizeFullExamConceptSignals(entries) {
  const fullExam = Array.isArray(entries) ? entries.filter((e) => e && e.source === "full_exam") : [];
  const tagged = fullExam.filter((e) => e && e.concept_id);
  const untaggedCount = fullExam.length - tagged.length;
  const byConcept = {};
  for (const e of tagged) {
    const id = e.concept_id;
    byConcept[id] = (byConcept[id] || 0) + 1;
  }
  const ranked = Object.entries(byConcept).sort((a, b) => b[1] - a[1]);
  const repeated = ranked.filter(([, n]) => n >= 2);
  return {
    totalFullExamMistakes: fullExam.length,
    taggedCount: tagged.length,
    untaggedCount,
    rankedByConcept: ranked,
    repeatedConceptMisses: repeated
  };
}

const DEFAULT_SOURCE_LABELS = {
  quick_exam: "Schnelltest (Schritte)",
  schnelltest_concept: "Konzept-Check",
  full_exam: "Probeklausur",
  practice: "Übung",
  step: "Schritt",
  srs: "Wiederholung (SRS)",
  graph_drill: "Graph-Übung",
  formula_drill: "Formel-Übung",
  mixed_review: "Gemischte Wiederholung"
};

/**
 * @param {object} opts
 * @param {string} opts.moduleSlug
 * @param {string} opts.courseLabel
 * @param {Function} opts.listMistakeLogEntries (filter?) => entries[]
 * @param {string} opts.reviewStateKey localStorage key for { reviewed: { [entry_id]: ts } }
 * @param {Array<{ id: string, title?: string }>} opts.chapters concept title lookup
 * @param {Record<string, string>} [opts.sourceLabels]
 * @param {Storage|null} [opts.storage]
 */
export function createMistakeReviewModule({
  moduleSlug,
  courseLabel,
  listMistakeLogEntries,
  reviewStateKey,
  chapters = [],
  sourceLabels = {},
  storage: storageOpt
}) {
  const storage = storageOpt ?? getDefaultStorage();
  const labels = { ...DEFAULT_SOURCE_LABELS, ...sourceLabels };
  const chapterMap = Object.fromEntries(chapters.map((c) => [c.id, c.title || c.id]));

  let filterSource = "";
  let filterConcept = "";

  function allEntries() {
    return listMistakeLogEntries({ module_slug: moduleSlug, limit: 500 }) || [];
  }

  function reviewedMap() {
    return loadReviewedMap(storage, reviewStateKey);
  }

  function renderRow(e, isOpen) {
    const srcLabel = labels[e.source] || e.source || "—";
    const refLine =
      e.ref_id != null && String(e.ref_id).length > 0
        ? `<span class="mr-meta">Ref: <code>${escapeHtml(String(e.ref_id))}</code></span>`
        : "";
    const wrong =
      e.wrong_answer != null && String(e.wrong_answer).trim() !== ""
        ? `<div class="mr-wrong">Deine Antwort: ${escapeHtml(String(e.wrong_answer).slice(0, 200))}${String(e.wrong_answer).length > 200 ? "…" : ""}</div>`
        : "";
    const conceptLabel = e.concept_id ? escapeHtml(chapterMap[e.concept_id] || e.concept_id) : "";

    const nav = e.concept_id
      ? `<button type="button" class="btn secondary mr-nav-concept" style="font-size:12px;padding:4px 10px" data-mr-concept="${escapeHtml(e.concept_id)}">Zum Konzept${conceptLabel ? ` (${conceptLabel})` : ""}</button>`
      : `<span class="mr-meta">Noch ohne Konzept-Verknüpfung</span>`;

    const markBtn = isOpen
      ? `<button type="button" class="btn secondary mr-mark" style="font-size:12px;padding:4px 10px" data-mr-entry="${escapeHtml(e.entry_id)}">Als geklärt markieren</button>`
      : `<span class="mr-meta">Erledigt ${fmtTime(reviewedMap()[e.entry_id])}</span>`;

    return `<div class="mr-row" data-entry="${escapeHtml(e.entry_id)}">
<div class="mr-row-top">
<span class="mr-src">${escapeHtml(srcLabel)}</span>
<span class="mr-time">${fmtTime(e.timestamp)}</span>
</div>
<div class="mr-row-body">
${wrong}
<div class="mr-actions">${nav} ${markBtn} ${refLine}</div>
</div>
</div>`;
  }

  function renderList(title, list, isOpen) {
    if (!list.length) {
      const guidance = isOpen
        ? "Aktuell gibt es hier nichts Offenes. Neue Einträge erscheinen nach Fehlern aus Schnelltest, Konzept-Check oder Probeklausur."
        : "Sobald du Einträge als geklärt markierst, tauchen sie hier als persönlicher Verlauf auf.";
      return `<div class="mr-empty"><strong>${escapeHtml(title)}</strong><br>${escapeHtml(guidance)}</div>`;
    }
    const sorted = sortEntriesByTimeDesc(list);
    return `<div class="mr-section"><h3 class="mr-h3">${escapeHtml(title)} (${list.length})</h3>${sorted.map((e) => renderRow(e, isOpen)).join("")}</div>`;
  }

  function buildPageHtml() {
    const entries = allEntries();
    const fullExamSignals = summarizeFullExamConceptSignals(entries);
    const reviewed = reviewedMap();
    const filtered = filterEntries(entries, { source: filterSource, concept_id: filterConcept });
    const { open, done } = partitionByReviewed(filtered, reviewed);

    const sources = distinctSources(entries);
    const concepts = distinctConceptIds(entries);

    const srcOptions =
      `<option value="">Alle Quellen</option>` +
      sources
        .map((s) => `<option value="${escapeHtml(s)}" ${s === filterSource ? "selected" : ""}>${escapeHtml(labels[s] || s)}</option>`)
        .join("");

    const conOptions =
      `<option value="">Alle Konzepte</option>` +
      concepts
        .map((id) => `<option value="${escapeHtml(id)}" ${id === filterConcept ? "selected" : ""}>${escapeHtml(chapterMap[id] || id)}</option>`)
        .join("");

    let fullExamBlock = "";
    if (fullExamSignals.totalFullExamMistakes > 0) {
      const topConcepts = fullExamSignals.rankedByConcept
        .slice(0, 8)
        .map(([id, n]) => `<li>${escapeHtml(chapterMap[id] || id)}: <strong>${n}</strong></li>`)
        .join("");
      const repeated = fullExamSignals.repeatedConceptMisses.length
        ? `<p class="mr-hint"><strong>Wiederkehrende Probeklausur-Signale (>=2):</strong> ${escapeHtml(
            fullExamSignals.repeatedConceptMisses
              .map(([id, n]) => `${chapterMap[id] || id} (${n})`)
              .join(", ")
          )}</p>`
        : `<p class="mr-hint">Noch keine wiederkehrenden Probeklausur-Fehler (>=2) im lokalen Protokoll.</p>`;
      const untaggedNote =
        fullExamSignals.untaggedCount > 0
          ? `<p class="mr-hint">Noch ohne Konzept-Tag: <strong>${fullExamSignals.untaggedCount}</strong> von ${fullExamSignals.totalFullExamMistakes} Probeklausur-Fehlern.</p>`
          : `<p class="mr-hint">Alle protokollierten Probeklausur-Fehler in diesem Browser sind einem Konzept zugeordnet.</p>`;
      fullExamBlock = `<div class="mr-section">
<h3 class="mr-h3">Probeklausuren: wiederkehrende Fehlmuster</h3>
<p class="mr-hint">Hier siehst du nur lokal protokollierte Einträge aus Probeklausuren. Die Liste hilft beim Erkennen von Themen, die unter Klausurdruck wiederkehren.</p>
${topConcepts ? `<ul class="mr-list">${topConcepts}</ul>` : `<div class="mr-empty">Noch keine konzeptgetaggten Probeklausur-Fehler.</div>`}
${repeated}
${untaggedNote}
</div>`;
    }

    return `<div class="mistake-review">
<div class="mr-header">
<h2>Fehlerprotokoll</h2>
<p class="mr-sub">${escapeHtml(courseLabel)} · ${open.length} offen · ${done.length} geklärt</p>
<p class="mr-hint">Hier sammelst du persönliche Fehlmuster aus diesem Modul. Markiere Einträge erst dann als geklärt, wenn du den Denkfehler wirklich verstanden und im Konzept nachgearbeitet hast.</p>
</div>
<div class="mr-filters">
<label class="mr-filter-label">Quelle <select id="mr-filter-src" class="mr-select">${srcOptions}</select></label>
<label class="mr-filter-label">Konzept <select id="mr-filter-con" class="mr-select">${conOptions}</select></label>
</div>
${fullExamBlock}
${renderList("Als Nächstes klären", open, true)}
${renderList("Bereits als geklärt markiert", done, false)}
<div class="mr-footer"><button type="button" class="btn secondary" onclick="window.__showDashboard()">Zurück zum Lern-Dashboard</button></div>
</div>`;
  }

  function bindControls(content) {
    const src = content.querySelector("#mr-filter-src");
    const con = content.querySelector("#mr-filter-con");
    if (src) {
      src.value = filterSource;
      src.addEventListener("change", () => {
        filterSource = src.value || "";
        refreshMistakeReview();
      });
    }
    if (con) {
      con.value = filterConcept;
      con.addEventListener("change", () => {
        filterConcept = con.value || "";
        refreshMistakeReview();
      });
    }
    content.querySelectorAll(".mr-nav-concept").forEach((btn) => {
      const id = btn.getAttribute("data-mr-concept");
      if (id && typeof window.__navigate === "function") {
        btn.addEventListener("click", () => window.__navigate(id));
      }
    });
    content.querySelectorAll(".mr-mark").forEach((btn) => {
      const id = btn.getAttribute("data-mr-entry");
      if (id) btn.addEventListener("click", () => markReviewedAndRefresh(id));
    });
  }

  function paint() {
    const content = document.getElementById("content");
    if (!content) return;
    content.innerHTML = buildPageHtml();
    bindControls(content);
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise([content]).catch(() => {});
    }
  }

  function showMistakeReview() {
    const tabRow = document.getElementById("tabRow");
    const breadcrumb = document.getElementById("breadcrumb");
    filterSource = "";
    filterConcept = "";
    if (tabRow) tabRow.classList.remove("visible");
    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / Fehlerprotokoll`;
    }
    paint();
  }

  function refreshMistakeReview() {
    const content = document.getElementById("content");
    if (!content || !content.querySelector(".mistake-review")) return;
    const srcEl = document.getElementById("mr-filter-src");
    const conEl = document.getElementById("mr-filter-con");
    if (srcEl) filterSource = srcEl.value || "";
    if (conEl) filterConcept = conEl.value || "";
    paint();
  }

  function markReviewedAndRefresh(entryId) {
    markEntryReviewed(storage, reviewStateKey, entryId);
    refreshMistakeReview();
  }

  return {
    showMistakeReview,
    refreshMistakeReview,
    markReviewedAndRefresh
  };
}
