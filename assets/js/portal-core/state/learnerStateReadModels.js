/**
 * Read models for masteryState + reviewItem (no extra storage).
 *
 * masteryState: maps PROGRESS_KEY blob per concept (recordView, recordAnswer, saveMasteryChecks).
 * reviewItem: normalizes SRS cards from runtime storage ({ interval, ease, due, reviews }) and
 *             optional TS-style ({ interval, easeFactor, dueDate, repetitions }).
 *
 * See docs/architecture/learning-data-model.md §4.14–4.15.
 */

/**
 * @param {string} conceptId
 * @param {Record<string, unknown>|null|undefined} progressEntry — progress[conceptId]
 */
export function readMasteryStateFromProgress(conceptId, progressEntry) {
  const e = progressEntry && typeof progressEntry === 'object' ? progressEntry : {};
  return {
    concept_id: conceptId,
    views: typeof e.views === 'number' ? e.views : 0,
    last_seen: typeof e.lastSeen === 'number' ? e.lastSeen : undefined,
    solved: typeof e.solved === 'number' ? e.solved : 0,
    correct: typeof e.correct === 'number' ? e.correct : 0,
    wrong: typeof e.wrong === 'number' ? e.wrong : 0,
    checks: Array.isArray(e.checks) ? e.checks : undefined
  };
}

/**
 * @param {string} conceptId
 * @param {Record<string, Record<string, unknown>>} progressByConcept — loadProgress()
 */
export function listMasteryStatesFromProgress(progressByConcept) {
  const blob = progressByConcept && typeof progressByConcept === 'object' ? progressByConcept : {};
  return Object.keys(blob).map((id) => readMasteryStateFromProgress(id, blob[id]));
}

/**
 * Normalize SRS storage card to reviewItem shape.
 * @param {string} conceptId
 * @param {string} moduleSlug
 * @param {Record<string, unknown>} raw — srs[conceptId]
 */
export function normalizeSrsCardToReviewItem(conceptId, moduleSlug, raw) {
  if (!raw || typeof raw !== 'object') return null;

  const ease = typeof raw.ease === 'number' ? raw.ease : typeof raw.easeFactor === 'number' ? raw.easeFactor : null;
  const interval = typeof raw.interval === 'number' ? raw.interval : null;
  const reviews = typeof raw.reviews === 'number' ? raw.reviews : typeof raw.repetitions === 'number' ? raw.repetitions : 0;

  let due_at = null;
  let legacy_iso_due;
  if (typeof raw.due === 'number') {
    due_at = raw.due;
  } else if (typeof raw.dueDate === 'string') {
    legacy_iso_due = raw.dueDate;
    const parsed = Date.parse(raw.dueDate);
    if (!Number.isNaN(parsed)) due_at = parsed;
  }

  if (ease == null || interval == null || due_at == null) return null;

  return {
    concept_id: conceptId,
    module_slug: moduleSlug,
    interval_days: interval,
    ease,
    due_at,
    reviews,
    ...(legacy_iso_due ? { legacy_iso_due } : {})
  };
}

/**
 * @param {string} moduleSlug
 * @param {Record<string, Record<string, unknown>>} srsByConcept — loadSRS()
 * @param {number} [nowMs]
 */
export function listDueReviewItems(moduleSlug, srsByConcept, nowMs = Date.now()) {
  const srs = srsByConcept && typeof srsByConcept === 'object' ? srsByConcept : {};
  const out = [];
  Object.keys(srs).forEach((conceptId) => {
    const item = normalizeSrsCardToReviewItem(conceptId, moduleSlug, srs[conceptId]);
    if (item && item.due_at <= nowMs) out.push(item);
  });
  out.sort((a, b) => a.due_at - b.due_at);
  return out;
}
