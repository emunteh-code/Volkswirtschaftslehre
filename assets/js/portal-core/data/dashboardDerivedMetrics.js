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
      note: "makro1_pilot_logs;_quick_step_schnelltest_not_in_attempt_log_yet"
    },
    {
      metric_id: "recent_quick_exam_sessions",
      tier: attempts.some((a) => a.context === ATTEMPT_CONTEXT.QUICK_EXAM) ? "supported" : "not_available",
      depends_on: ["quick_exam_append_attempt_hook"],
      note: "not_wired_in_makro1_yet"
    },
    {
      metric_id: "recent_full_exam_sessions",
      tier: attempts.some((a) => a.context === ATTEMPT_CONTEXT.FULL_EXAM) ? "supported" : "not_available",
      depends_on: ["full_exam_onExamSubmitted"],
      note: "makro1_pilot_logs"
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
    block1 = `<p class="dhp-status dhp-na">Noch nicht verfügbar: keine Konzept-Check-Läufe im Attempt-Log.</p>
<p class="dhp-muted">Nach einem abgeschlossenen Konzept-Check erscheinen hier die letzten Läufe (Punkte, Abschlussgrund).</p>`;
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
    block2 = `<p class="dhp-status dhp-na">Noch nicht verfügbar: keine Probeklausur-Sessions im Attempt-Log.</p>
<p class="dhp-muted">Erscheint nach „Klausur abgeben“ bei einer Probeklausur (sofern das Modul Versuche protokolliert).</p>`;
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
    block3 = `<p class="dhp-status dhp-na">Keine Fehler-Einträge im Protokoll (oder noch nichts protokolliert).</p>`;
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

  let block4;
  if (snap.srs.due_count === 0) {
    block4 = `<p class="dhp-muted">Keine SRS-Karten mit fälliger Wiederholung (oder noch keine Karten).</p>`;
  } else {
    const next = snap.srs.due_next;
    const title = next ? titles[next.concept_id] || next.concept_id : "";
    block4 = `<p><strong>${snap.srs.due_count}</strong> Konzept(e) mit fälliger Wiederholung.</p>`;
    if (next) {
      block4 += `<p>Nächste in der sortierten Liste: <strong>${escHtml(title)}</strong> · fällig ${escHtml(fmtDueAt(next.due_at))}</p>`;
    }
  }

  return `<div class="dash-honest-pilot" aria-label="Pilot: ehrliche Kennzahlen aus Protokoll">
<h3 class="dash-honest-pilot-title">Kennzahlen aus dem Lernprotokoll (Pilot)</h3>
<p class="dhp-intro">Nur Daten, die in diesem Browser gespeichert sind. Keine geschätzte Gesamtmastery.</p>
<div class="dhp-section">
<h4 class="dhp-h">Konzept-Check (letzte Läufe)</h4>
${block1}
</div>
<div class="dhp-section">
<h4 class="dhp-h">Probeklausur (letzte Sessions)</h4>
${block2}
</div>
<div class="dhp-section">
<h4 class="dhp-h">Fehler nach Quelle (Top)</h4>
${block3}
</div>
<div class="dhp-section">
<h4 class="dhp-h">SRS-Wiederholungen</h4>
${block4}
</div>
<p class="dhp-foot">Step-Schnelltest (20-Min.) erscheint hier erst, wenn das Modul diese Versuche ins Attempt-Log schreibt (derzeit oft nicht angebunden).</p>
</div>`;
}

/**
 * Plain lines for a minimal strip (non-UI); prefer {@link buildHonestDashboardPilotHtml} for dashboards.
 * @param {ReturnType<typeof buildDashboardDerivedMetricsSnapshot>} snap
 */
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
