/**
 * Derived dashboard metrics — read-only selectors over learner backbone + SRS + mistake review.
 * No invented mastery; percentages only where numerators/denominators are explicit in stored data.
 *
 * @see docs/architecture/dashboard-derived-metrics-pilot.md
 */

import { ATTEMPT_CONTEXT } from "../state/learnerBackbone.js";
import { listDueReviewItems } from "../state/learnerStateReadModels.js";
import { loadReviewedMap, partitionByReviewed } from "../state/mistakeReviewState.js";

/** @typedef {'supported' | 'partial' | 'not_available'} MetricTier */

/**
 * @param {Array<{ context?: string }>} attempts
 * @returns {Record<string, number>}
 */
export function countAttemptsByContext(attempts) {
  const counts = {};
  for (const a of attempts) {
    if (!a) continue;
    const c = a.context || "unknown";
    counts[c] = (counts[c] || 0) + 1;
  }
  return counts;
}

/**
 * @param {Array<{ source?: string }>} mistakes
 * @returns {Record<string, number>}
 */
export function countMistakesBySource(mistakes) {
  const h = {};
  for (const m of mistakes) {
    if (!m) continue;
    const s = m.source || "unknown";
    h[s] = (h[s] || 0) + 1;
  }
  return h;
}

export function summarizeFullExamMistakesByConcept(mistakes) {
  const fullExam = Array.isArray(mistakes) ? mistakes.filter((m) => m && m.source === "full_exam") : [];
  const byConcept = {};
  let untagged = 0;
  for (const m of fullExam) {
    const id = m && m.concept_id;
    if (!id) {
      untagged += 1;
      continue;
    }
    byConcept[id] = (byConcept[id] || 0) + 1;
  }
  const ranked = Object.entries(byConcept).sort((a, b) => b[1] - a[1]);
  return {
    total: fullExam.length,
    tagged: fullExam.length - untagged,
    untagged,
    by_concept: byConcept,
    ranked_concepts: ranked,
    repeated_miss_concepts: ranked.filter(([, n]) => n >= 2)
  };
}

const NORMALIZED_MISTAKE_FLOW_SOURCES = [
  "quick_exam",
  "schnelltest_concept",
  "practice",
  "step",
  "graph_drill",
  "formula_drill",
  "mixed_review"
];

export function summarizeNormalizedMistakeFlows(mistakes) {
  const list = Array.isArray(mistakes) ? mistakes : [];
  const bySource = {};
  for (const src of NORMALIZED_MISTAKE_FLOW_SOURCES) {
    bySource[src] = { total: 0, tagged: 0, untagged: 0, by_concept: {} };
  }
  for (const m of list) {
    if (!m || !m.source || !bySource[m.source]) continue;
    const bucket = bySource[m.source];
    bucket.total += 1;
    if (m.concept_id) {
      bucket.tagged += 1;
      bucket.by_concept[m.concept_id] = (bucket.by_concept[m.concept_id] || 0) + 1;
    } else {
      bucket.untagged += 1;
    }
  }
  return bySource;
}

/**
 * @param {object[]} attempts
 * @param {{ context?: string, limit?: number }} [opts]
 */
export function pickRecentAttempts(attempts, opts = {}) {
  const { context, limit = 8 } = opts;
  let list = Array.isArray(attempts) ? attempts.slice() : [];
  if (context) list = list.filter((a) => a && a.context === context);
  list.sort((a, b) => {
    const tb = b.submitted_at ?? b.started_at ?? 0;
    const ta = a.submitted_at ?? a.started_at ?? 0;
    return tb - ta;
  });
  if (limit > 0 && list.length > limit) list = list.slice(0, limit);
  return list;
}

/**
 * Compact row for UI or export (no PII beyond stored answers refs).
 * @param {object} a attempt record
 */
export function summarizeAttemptForDashboard(a) {
  if (!a) return null;
  return {
    context: a.context,
    target_id: a.target_id,
    started_at: a.started_at,
    submitted_at: a.submitted_at,
    score_earned: a.score != null && typeof a.score === "object" ? a.score.earned : undefined,
    score_max: a.score != null && typeof a.score === "object" ? a.score.max : undefined,
    finish_reason: a.meta != null && typeof a.meta === "object" ? a.meta.finish_reason : undefined,
    exam_title: a.meta != null && typeof a.meta === "object" ? a.meta.exam_title : undefined
  };
}

/**
 * First recorded outcome per item id across concept-Schnelltest attempts (chronological by started_at).
 * Retakes: later attempts for the same item id are ignored — this is NOT global “first human try”, only first logged row.
 *
 * @param {object[]} attemptsConcept — filter to CONCEPT_SCHNELLTEST before calling, or pass all and we filter
 * @returns {{ tier: MetricTier, item_count: number, correct_count: number, rate: number|null, note: string }}
 */
export function firstRecordedOutcomePerItemConceptSchnelltest(attemptsConcept) {
  const list = (attemptsConcept || []).filter(
    (a) => a && a.context === ATTEMPT_CONTEXT.CONCEPT_SCHNELLTEST
  );
  const sorted = [...list].sort((a, b) => (a.started_at || 0) - (b.started_at || 0));
  /** @type {Record<string, boolean>} */
  const outcome = {};
  for (const att of sorted) {
    const r = att.responses;
    if (!r || typeof r !== "object") continue;
    for (const [ref, val] of Object.entries(r)) {
      if (outcome[ref] !== undefined) continue;
      if (val && typeof val === "object" && typeof val.correct === "boolean") {
        outcome[ref] = val.correct;
      }
    }
  }
  const ids = Object.keys(outcome);
  if (ids.length === 0) {
    return {
      tier: "not_available",
      item_count: 0,
      correct_count: 0,
      rate: null,
      note: "no_item_level_responses_in_logged_attempts"
    };
  }
  const correct_count = ids.filter((id) => outcome[id]).length;
  return {
    tier: "partial",
    item_count: ids.length,
    correct_count,
    rate: correct_count / ids.length,
    note: "first_logged_try_per_item_id_across_sessions_ignores_later_retakes"
  };
}

/**
 * Full snapshot for one module (pilot contract).
 *
 * @param {object} opts
 * @param {string} opts.moduleSlug
 * @param {Function} opts.listLearnerAttempts (filter?) => object[]
 * @param {Function} opts.listMistakeLogEntries (filter?) => object[]
 * @param {Function} opts.loadSRS () => Record<string, object>
 * @param {Storage|null|undefined} [opts.storage]
 * @param {string|null|undefined} [opts.mistakeReviewKey] if set with storage, computes open/done mistake counts
 * @param {number} [opts.nowMs]
 * @param {number} [opts.attemptLimit] max attempts loaded from store (default 250)
 * @param {number} [opts.recentN] recent rows per context (default 5)
 */
export function buildDashboardDerivedMetricsSnapshot({
  moduleSlug,
  listLearnerAttempts,
  listMistakeLogEntries,
  loadSRS,
  storage = typeof localStorage !== "undefined" ? localStorage : null,
  mistakeReviewKey = null,
  nowMs = Date.now(),
  attemptLimit = 250,
  recentN = 5
}) {
  const attempts =
    typeof listLearnerAttempts === "function"
      ? listLearnerAttempts({ module_slug: moduleSlug, limit: attemptLimit }) || []
      : [];
  const mistakes =
    typeof listMistakeLogEntries === "function"
      ? listMistakeLogEntries({ module_slug: moduleSlug, limit: 500 }) || []
      : [];
  const srsRaw = typeof loadSRS === "function" ? loadSRS() || {} : {};

  const byContext = countAttemptsByContext(attempts);
  const mistakesBySource = countMistakesBySource(mistakes);
  const fullExamConcept = summarizeFullExamMistakesByConcept(mistakes);
  const normalizedMistakeFlows = summarizeNormalizedMistakeFlows(mistakes);

  const recentConcept = pickRecentAttempts(attempts, {
    context: ATTEMPT_CONTEXT.CONCEPT_SCHNELLTEST,
    limit: recentN
  }).map(summarizeAttemptForDashboard);
  const recentQuick = pickRecentAttempts(attempts, {
    context: ATTEMPT_CONTEXT.QUICK_EXAM,
    limit: recentN
  }).map(summarizeAttemptForDashboard);
  const recentFull = pickRecentAttempts(attempts, {
    context: ATTEMPT_CONTEXT.FULL_EXAM,
    limit: recentN
  }).map(summarizeAttemptForDashboard);

  const firstItemMetric = firstRecordedOutcomePerItemConceptSchnelltest(attempts);

  let reviewable_open = null;
  let reviewable_done = null;
  if (storage && mistakeReviewKey) {
    const reviewed = loadReviewedMap(storage, mistakeReviewKey);
    const { open, done } = partitionByReviewed(mistakes, reviewed);
    reviewable_open = open.length;
    reviewable_done = done.length;
  }

  const dueItems = listDueReviewItems(moduleSlug, srsRaw, nowMs);
  const due_count = dueItems.length;
  const due_next =
    due_count > 0
      ? { concept_id: dueItems[0].concept_id, due_at: dueItems[0].due_at }
      : null;

  /** @type {Array<{ metric_id: string, tier: MetricTier, depends_on: string[], note?: string }>} */
  const metric_support = [
    {
      metric_id: "attempts_total_by_context",
      tier: "supported",
      depends_on: ["ATTEMPTS_KEY", "appendLearnerAttempt"],
      note: "empty_if_module_does_not_log_attempts"
    },
    {
      metric_id: "mistakes_by_source",
      tier: "supported",
      depends_on: ["MISTAKES_KEY", "appendMistakeLogEntry"],
      note: "empty_if_no_mistakes_logged"
    },
    {
      metric_id: "recent_concept_schnelltest_sessions",
      tier: attempts.some((a) => a.context === ATTEMPT_CONTEXT.CONCEPT_SCHNELLTEST) ? "supported" : "not_available",
      depends_on: ["concept_schnelltest_flow"],
      note: "only_modules_with_concept_schnelltest_flow_can_populate_this"
    },
    {
      metric_id: "recent_quick_exam_sessions",
      tier: attempts.some((a) => a.context === ATTEMPT_CONTEXT.QUICK_EXAM) ? "supported" : "not_available",
      depends_on: ["quick_exam_append_attempt_hook"],
      note: "available_when_module_logs_quick_exam_attempts"
    },
    {
      metric_id: "recent_full_exam_sessions",
      tier: attempts.some((a) => a.context === ATTEMPT_CONTEXT.FULL_EXAM) ? "supported" : "not_available",
      depends_on: ["full_exam_onExamSubmitted"],
      note: "available_when_module_logs_full_exam_submissions"
    },
    {
      metric_id: "first_recorded_per_item_concept_schnelltest",
      tier: firstItemMetric.tier === "not_available" ? "not_available" : "partial",
      depends_on: ["concept_schnelltest_responses_shape"],
      note: firstItemMetric.note
    },
    {
      metric_id: "srs_due_count",
      tier: "supported",
      depends_on: ["SRS_KEY", "loadSRS"],
      note: "cards_must_have_due_ease_interval"
    },
    {
      metric_id: "mistake_review_open_done",
      tier: reviewable_open != null ? "supported" : "not_available",
      depends_on: ["MISTAKE_REVIEW_KEY", "mistake_review_pilot"],
      note: "null_when_review_key_not_passed"
    },
    {
      metric_id: "quick_exam_mistakes_by_concept",
      tier: (normalizedMistakeFlows.quick_exam?.tagged || 0) > 0 ? "supported" : "not_available",
      depends_on: ["MISTAKES_KEY", "source=quick_exam", "concept_id"],
      note: (normalizedMistakeFlows.quick_exam?.total || 0) > 0 ? "available_when_quick_exam_mistakes_exist" : "no_quick_exam_mistake_rows_logged_yet"
    },
    {
      metric_id: "concept_check_mistakes_by_concept",
      tier: (normalizedMistakeFlows.schnelltest_concept?.tagged || 0) > 0 ? "supported" : "not_available",
      depends_on: ["MISTAKES_KEY", "source=schnelltest_concept", "concept_id"],
      note:
        (normalizedMistakeFlows.schnelltest_concept?.total || 0) > 0
          ? "available_when_concept_check_mistakes_exist"
          : "only_modules_with_concept_check_flow_can_produce_this"
    },
    {
      metric_id: "drill_practice_mistakes_by_concept",
      tier:
        (normalizedMistakeFlows.practice?.tagged || 0) > 0 ||
        (normalizedMistakeFlows.graph_drill?.tagged || 0) > 0 ||
        (normalizedMistakeFlows.formula_drill?.tagged || 0) > 0 ||
        (normalizedMistakeFlows.mixed_review?.tagged || 0) > 0
          ? "supported"
          : "not_available",
      depends_on: ["MISTAKES_KEY", "source in {practice,graph_drill,formula_drill,mixed_review}", "concept_id"],
      note: "no_drill_practice_mistake_rows_logged_in_current_migrated_backbone_yet"
    }
  ];

  return {
    module_slug: moduleSlug,
    generated_at: nowMs,
    attempts: {
      total: attempts.length,
      by_context: byContext,
      recent_concept_schnelltest: recentConcept,
      recent_quick_exam: recentQuick,
      recent_full_exam: recentFull,
      first_recorded_per_item_concept_schnelltest: firstItemMetric
    },
    mistakes: {
      total: mistakes.length,
      by_source: mistakesBySource,
      full_exam_concepts: fullExamConcept,
      normalized_flows: normalizedMistakeFlows,
      reviewable_open,
      reviewable_done
    },
    srs: {
      due_count,
      due_next
    },
    metric_support
  };
}

const SOURCE_LABELS_FOR_DISPLAY = {
  quick_exam: "Schnelltest (Schritte)",
  schnelltest_concept: "Konzept-Check",
  full_exam: "Probeklausur",
  practice: "Übung",
  step: "Schritt",
  srs: "SRS",
  graph_drill: "Graph-Übung",
  formula_drill: "Formel-Übung",
  mixed_review: "Gemischte Wiederholung"
};

function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmtDueAt(ms) {
  if (ms == null) return "—";
  try {
    return new Date(ms).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" });
  } catch {
    return "—";
  }
}

/**
 * Text-first honest dashboard panel: prioritized sections, explicit unavailable/partial states.
 * @param {ReturnType<typeof buildDashboardDerivedMetricsSnapshot>} snap
 * @param {object} [opts]
 * @param {Record<string, string>} [opts.conceptTitleById]
 */
export function buildHonestDashboardPilotHtml(snap, opts = {}) {
  if (!snap) return "";
  const titles = opts.conceptTitleById && typeof opts.conceptTitleById === "object" ? opts.conceptTitleById : {};

  const rc = snap.attempts.recent_concept_schnelltest;
  let block1;
  if (!rc.length) {
    block1 = `<p class="dhp-status dhp-na">Noch keine Konzept-Checks im Lernprotokoll.</p>
<p class="dhp-muted">Sobald du einen Konzept-Check abschließt, erscheinen hier Punktestand, Abschlussgrund und Zeitstempel.</p>`;
  } else {
    const lines = rc
      .map(
        (r) =>
          `<li>${escHtml(r.score_earned ?? "?")}/${escHtml(r.score_max ?? "?")} richtig · ${escHtml(String(r.finish_reason || "—"))} · ${escHtml(fmtDueAt(r.submitted_at || r.started_at))}</li>`
      )
      .join("");
    const fr = snap.attempts.first_recorded_per_item_concept_schnelltest;
    let partial = "";
    if (fr.tier === "partial" && fr.rate != null) {
      partial = `<p class="dhp-partial"><strong>Teilweise:</strong> erste <em>protokollierte</em> Antwort pro Aufgabe über alle Läufe: ${fr.correct_count}/${fr.item_count} richtig (${Math.round(fr.rate * 100)}%). Spätere Wiederholungen derselben Aufgabe nach dem ersten Log werden nicht erneut gezählt.</p>`;
    } else if (fr.tier === "not_available") {
      partial = `<p class="dhp-muted">Keine auswertbaren Einzelantworten im Log (teilweise Kennzahl entfällt).</p>`;
    }
    block1 = `<ul class="dhp-list">${lines}</ul>${partial}`;
  }

  const rf = snap.attempts.recent_full_exam;
  let block2;
  if (!rf.length) {
    block2 = `<p class="dhp-status dhp-na">Noch keine abgegebene Probeklausur im Lernprotokoll.</p>
<p class="dhp-muted">Nach „Klausur abgeben“ tauchen hier deine letzten Sessions auf, sofern das Modul die Versuche protokolliert.</p>`;
  } else {
    block2 = `<ul class="dhp-list">${rf
      .map(
        (r) =>
          `<li>${escHtml(r.score_earned ?? "?")}/${escHtml(r.score_max ?? "?")} Punkte · ${escHtml(String(r.finish_reason || "—"))} · ${escHtml(fmtDueAt(r.submitted_at || r.started_at))}${r.exam_title ? ` · ${escHtml(r.exam_title)}` : ""}</li>`
      )
      .join("")}</ul>`;
  }

  let block3;
  if (!snap.mistakes.total) {
    block3 = `<p class="dhp-status dhp-na">Noch keine Fehler-Einträge im Lernprotokoll.</p>
<p class="dhp-muted">Sobald du in Schnelltest, Konzept-Check oder Probeklausur Fehler sammelst, werden die wichtigsten Quellen hier gebündelt.</p>`;
  } else {
    const top = Object.entries(snap.mistakes.by_source)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
    block3 = `<ul class="dhp-list">${top
      .map(([src, n]) => `<li>${escHtml(SOURCE_LABELS_FOR_DISPLAY[src] || src)}: <strong>${n}</strong></li>`)
      .join("")}</ul>`;
    if (snap.mistakes.reviewable_open != null) {
      block3 += `<p class="dhp-muted">Fehlerprotokoll (lokal markiert): ${snap.mistakes.reviewable_open} offen · ${snap.mistakes.reviewable_done ?? 0} als erledigt.</p>`;
    }
  }

  const nf = snap.mistakes.normalized_flows || {};
  const quick = nf.quick_exam || { total: 0, tagged: 0, untagged: 0 };
  const concept = nf.schnelltest_concept || { total: 0, tagged: 0, untagged: 0 };
  const drillSources = ["practice", "graph_drill", "formula_drill", "mixed_review"];
  const drillTotal = drillSources.reduce((sum, src) => sum + ((nf[src] && nf[src].total) || 0), 0);
  const drillTagged = drillSources.reduce((sum, src) => sum + ((nf[src] && nf[src].tagged) || 0), 0);
  const block3a = `<div class="dhp-section">
<h4 class="dhp-h">Schnelltest und Drills</h4>
<ul class="dhp-list">
<li>Schnelltest (Schritte): <strong>${quick.total}</strong> Fehler · Konzept-getaggt: ${quick.tagged}${quick.untagged ? ` · ungetaggt: ${quick.untagged}` : ""}</li>
<li>Konzept-Check: <strong>${concept.total}</strong> Fehler · Konzept-getaggt: ${concept.tagged}${concept.untagged ? ` · ungetaggt: ${concept.untagged}` : ""}</li>
<li>Drill/Practice (practice/graph/formula/mixed): <strong>${drillTotal}</strong> Fehler · Konzept-getaggt: ${drillTagged}</li>
</ul>
${drillTotal === 0 ? `<p class="dhp-muted">Derzeit sind noch keine Drill-Fehler im Lernprotokoll erfasst.</p>` : ""}
</div>`;

  let block3b = "";
  const fec = snap.mistakes.full_exam_concepts;
  if (fec && fec.total > 0) {
    const top = fec.ranked_concepts.slice(0, 6);
    const topHtml = top.length
      ? `<ul class="dhp-list">${top
          .map(([id, n]) => `<li>${escHtml(titles[id] || id)}: <strong>${n}</strong></li>`)
          .join("")}</ul>`
      : `<p class="dhp-muted">Noch keine konzeptgetaggten Probeklausur-Fehler im lokalen Log.</p>`;
    const repeated =
      fec.repeated_miss_concepts && fec.repeated_miss_concepts.length
        ? `<p class="dhp-muted">Wiederholte Probeklausur-Konzeptfehler (>=2): ${escHtml(
            fec.repeated_miss_concepts.map(([id, n]) => `${titles[id] || id} (${n})`).join(", ")
          )}</p>`
        : `<p class="dhp-muted">Noch keine wiederholten Probeklausur-Konzeptfehler (>=2).</p>`;
    const untaggedNote =
      fec.untagged > 0
        ? `<p class="dhp-partial"><strong>Teilweise:</strong> ${fec.untagged} von ${fec.total} Probeklausur-Fehlern ohne Konzept-Tag (nicht gruppierbar).</p>`
        : `<p class="dhp-muted">Alle Probeklausur-Fehler im lokalen Log sind einem Konzept zugeordnet.</p>`;
    block3b = `<div class="dhp-section">
<h4 class="dhp-h">Probeklausur-Fehler nach Konzept</h4>
${topHtml}
${repeated}
${untaggedNote}
</div>`;
  }

  let nextStepHeadline = "Nächster sinnvoller Schritt";
  let nextStepBody = "Starte mit einem Konzept und bearbeite danach Schnelltest oder Probeklausur, damit das Lernprotokoll aussagekräftig wird.";
  if ((snap.mistakes.reviewable_open || 0) > 0) {
    nextStepBody =
      snap.mistakes.reviewable_open === 1
        ? "Öffne zuerst das Fehlerprotokoll: 1 Eintrag wartet noch auf Klärung."
        : `Öffne zuerst das Fehlerprotokoll: ${snap.mistakes.reviewable_open} Einträge warten noch auf Klärung.`;
  } else if (snap.srs.due_count > 0) {
    nextStepBody = `Arbeite als Nächstes deine fälligen Wiederholungen ab: ${snap.srs.due_count} Konzept${snap.srs.due_count === 1 ? "" : "e"} sind heute dran.`;
  } else if (rc.length > 0) {
    nextStepBody = "Nutze jetzt ein schwächeres Konzept oder eine Probeklausur, damit aus den vorhandenen Daten eine echte Priorisierung wird.";
  }

  let block4;
  if (snap.srs.due_count === 0) {
    block4 = `<p class="dhp-muted">Heute sind keine SRS-Wiederholungen fällig oder es wurden noch keine Karten aufgebaut.</p>`;
  } else {
    const next = snap.srs.due_next;
    const title = next ? titles[next.concept_id] || next.concept_id : "";
    block4 = `<p><strong>${snap.srs.due_count}</strong> Konzept(e) mit fälliger Wiederholung.</p>`;
    if (next) {
      block4 += `<p>Nächste in der sortierten Liste: <strong>${escHtml(title)}</strong> · fällig ${escHtml(fmtDueAt(next.due_at))}</p>`;
    }
  }

  return `<div class="dash-honest-pilot" aria-label="Lernprotokoll und nächste Schritte">
<h3 class="dash-honest-pilot-title">Lernprotokoll und nächste Schritte</h3>
<p class="dhp-intro">Diese Übersicht zeigt nur echte Lernspuren aus diesem Browser. Sie ersetzt keine geschätzte Gesamtmastery, hilft aber bei der nächsten sinnvollen Entscheidung.</p>
<div class="dhp-section">
<h4 class="dhp-h">${nextStepHeadline}</h4>
<p class="dhp-status">${nextStepBody}</p>
</div>
<div class="dhp-section">
<h4 class="dhp-h">Konzept-Check: letzte Läufe</h4>
${block1}
</div>
<div class="dhp-section">
<h4 class="dhp-h">Probeklausuren: letzte Sessions</h4>
${block2}
</div>
<div class="dhp-section">
<h4 class="dhp-h">Wo Fehler zuletzt aufgetreten sind</h4>
${block3}
</div>
${block3a}
${block3b}
<div class="dhp-section">
<h4 class="dhp-h">Wiederholungen für heute</h4>
${block4}
</div>
<p class="dhp-foot">Einige Module protokollieren noch nicht jede Übungsform gleich tief. Wo Daten fehlen, zeigt die Übersicht das offen an, statt etwas zu schätzen.</p>
</div>`;
}

/** Long bullet list; prefer {@link buildHonestDashboardPilotHtml} for UI. */
export function formatDashboardDerivedMetricsLines(snap) {
  if (!snap) return [];
  const lines = [];
  lines.push(`Protokollierte Versuche (gesamt): ${snap.attempts.total}`);
  const ctx = snap.attempts.by_context;
  const ctxStr = Object.keys(ctx).length
    ? Object.entries(ctx)
        .map(([k, v]) => `${k}: ${v}`)
        .join(" · ")
    : "—";
  lines.push(`Versuche nach Kontext: ${ctxStr}`);
  lines.push(`Fehler-Einträge (gesamt): ${snap.mistakes.total}`);
  const ms = snap.mistakes.by_source;
  lines.push(
    `Fehler nach Quelle: ${
      Object.keys(ms).length ? Object.entries(ms).map(([k, v]) => `${k}=${v}`).join(", ") : "—"
    }`
  );
  const nf = snap.mistakes.normalized_flows || {};
  const quick = nf.quick_exam || { total: 0, tagged: 0 };
  const concept = nf.schnelltest_concept || { total: 0, tagged: 0 };
  const drillTotal =
    (nf.practice?.total || 0) +
    (nf.graph_drill?.total || 0) +
    (nf.formula_drill?.total || 0) +
    (nf.mixed_review?.total || 0);
  const drillTagged =
    (nf.practice?.tagged || 0) +
    (nf.graph_drill?.tagged || 0) +
    (nf.formula_drill?.tagged || 0) +
    (nf.mixed_review?.tagged || 0);
  lines.push(
    `Normalisiert (Fehler): quick_exam ${quick.total}/${quick.tagged} konzeptgetaggt · concept_schnelltest ${concept.total}/${concept.tagged} konzeptgetaggt · drill/practice ${drillTotal}/${drillTagged} konzeptgetaggt`
  );
  if (snap.mistakes.reviewable_open != null) {
    lines.push(
      `Fehlerprotokoll offen / erledigt (lokal): ${snap.mistakes.reviewable_open} / ${snap.mistakes.reviewable_done ?? 0}`
    );
  }
  const fr = snap.attempts.first_recorded_per_item_concept_schnelltest;
  if (fr.tier !== "not_available" && fr.rate != null) {
    lines.push(
      `Konzept-Check (erste protokollierte Antwort pro Aufgabe): ${fr.correct_count}/${fr.item_count} richtig (${Math.round(fr.rate * 100)}%) — ${fr.note}`
    );
  }
  lines.push(`SRS fällig: ${snap.srs.due_count}`);
  if (snap.srs.due_next) {
    lines.push(`Nächste Fälligkeit: ${snap.srs.due_next.concept_id}`);
  }
  const rc = snap.attempts.recent_concept_schnelltest;
  if (rc.length) {
    lines.push(
      `Letzte Konzept-Checks: ${rc
        .map((r) => `${r.score_earned ?? "?"}/${r.score_max ?? "?"} (${r.finish_reason || "—"})`)
        .join(" · ")}`
    );
  }
  const rf = snap.attempts.recent_full_exam;
  if (rf.length) {
    lines.push(
      `Letzte Probeklausur-Sessions: ${rf
        .map((r) => `${r.score_earned ?? "?"}/${r.score_max ?? "?"} · ${r.finish_reason || "—"}`)
        .join(" | ")}`
    );
  }
  if (!snap.attempts.recent_quick_exam.length) {
    lines.push("Step-Schnelltest: keine Versuche im Attempt-Log (optional noch nicht angebunden).");
  } else {
    lines.push(
      `Letzte Schnelltests: ${snap.attempts.recent_quick_exam.map((r) => `${r.score_earned ?? "?"}/${r.score_max ?? "?"}`).join(" · ")}`
    );
  }
  return lines;
}
