/**
 * Learner-state backbone — attempt log + mistake log (localStorage).
 *
 * Architecture: docs/architecture/learning-data-model.md (attempt, mistakeLogEntry).
 *
 * Storage keys (per module, opt-in):
 *   {module_slug}_attempts_v1   — JSON array of attempt records (FIFO-capped)
 *   {module_slug}_mistakes_v1  — JSON array of mistakeLogEntry records (FIFO-capped)
 *
 * Existing PROGRESS_KEY / SRS_KEY are unchanged; masteryState and reviewItem are read models
 * in learnerStateReadModels.js.
 *
 * Integration:
 *   1. Add ATTEMPTS_KEY + MISTAKES_KEY to module srsConfig (or any constant file).
 *   2. Pass them into createStorageModule({ keys: { ..., ATTEMPTS_KEY, MISTAKES_KEY } }).
 *   3. From Schnelltest / full exam / future drills: call appendLearnerAttempt / appendMistakeLogEntry.
 */

export const ATTEMPT_CONTEXT = Object.freeze({
  QUICK_EXAM: 'quick_exam',
  /** Trap-MCQ concept check (short timer); distinct from step-based Schnelltest */
  CONCEPT_SCHNELLTEST: 'concept_schnelltest',
  FULL_EXAM: 'full_exam',
  STEP_PROBLEM: 'step_problem',
  PRACTICE_TASK: 'practice_task',
  SRS: 'srs',
  GRAPH_DRILL: 'graph_drill',
  FORMULA_DRILL: 'formula_drill',
  MIXED_REVIEW: 'mixed_review'
});

export const MISTAKE_SOURCE = Object.freeze({
  QUICK_EXAM: 'quick_exam',
  SCHNELLTEST_CONCEPT: 'schnelltest_concept',
  PRACTICE: 'practice',
  FULL_EXAM: 'full_exam',
  STEP: 'step',
  GRAPH_DRILL: 'graph_drill',
  FORMULA_DRILL: 'formula_drill',
  MIXED_REVIEW: 'mixed_review'
});

const DEFAULT_MAX_ATTEMPTS = 250;
const DEFAULT_MAX_MISTAKES = 500;

function getDefaultStorage() {
  if (typeof localStorage === 'undefined') return null;
  return localStorage;
}

function loadJsonArray(key, storage) {
  if (!key || !storage) return [];
  try {
    const raw = storage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveJsonArray(key, storage, arr) {
  if (!key || !storage) return;
  try {
    storage.setItem(key, JSON.stringify(arr));
  } catch {
    /* quota or private mode — fail silently; backbone is best-effort */
  }
}

/**
 * @param {string} moduleSlug
 * @returns {string}
 */
export function generateAttemptId(moduleSlug) {
  const t = Date.now();
  const r = Math.random().toString(36).slice(2, 10);
  return `${t}:${moduleSlug}:${r}`;
}

/**
 * @param {string} moduleSlug
 * @returns {string}
 */
export function generateMistakeEntryId(moduleSlug) {
  const t = Date.now();
  const r = Math.random().toString(36).slice(2, 10);
  return `m:${t}:${moduleSlug}:${r}`;
}

/**
 * @param {object} opts
 * @param {string} [opts.attemptsKey]
 * @param {string} [opts.mistakesKey]
 * @param {Storage} [opts.storage]
 * @param {number} [opts.maxAttempts]
 * @param {number} [opts.maxMistakes]
 */
export function createLearnerBackboneStore({
  attemptsKey,
  mistakesKey,
  storage: storageOpt,
  maxAttempts = DEFAULT_MAX_ATTEMPTS,
  maxMistakes = DEFAULT_MAX_MISTAKES
} = {}) {
  const storage = storageOpt ?? getDefaultStorage();

  /**
   * @param {object} partial
   * @param {string} partial.module_slug
   * @param {string} partial.context
   * @param {number} partial.started_at
   * @param {Record<string, unknown>} [partial.responses]
   * @param {string} [partial.target_id]
   * @param {number} [partial.submitted_at]
   * @param {{ earned: number, max: number }} [partial.score]
   * @param {Record<string, unknown>} [partial.meta]
   * @param {string} [partial.attempt_id]
   */
  function appendAttempt(partial) {
    if (!attemptsKey || !storage) return null;
    const attempt = {
      attempt_id: partial.attempt_id || generateAttemptId(partial.module_slug || 'unknown'),
      module_slug: partial.module_slug,
      context: partial.context,
      target_id: partial.target_id,
      started_at: partial.started_at,
      submitted_at: partial.submitted_at,
      responses: partial.responses && typeof partial.responses === 'object' ? partial.responses : {},
      score: partial.score,
      meta: partial.meta && typeof partial.meta === 'object' ? partial.meta : undefined
    };
    const list = loadJsonArray(attemptsKey, storage);
    list.push(attempt);
    while (list.length > maxAttempts) list.shift();
    saveJsonArray(attemptsKey, storage, list);
    return attempt.attempt_id;
  }

  /**
   * @param {{ limit?: number, context?: string, module_slug?: string }} [filter]
   */
  function listAttempts(filter = {}) {
    if (!attemptsKey || !storage) return [];
    const { limit = 100, context, module_slug } = filter;
    let list = loadJsonArray(attemptsKey, storage);
    if (context) list = list.filter((a) => a && a.context === context);
    if (module_slug) list = list.filter((a) => a && a.module_slug === module_slug);
    if (limit > 0 && list.length > limit) list = list.slice(-limit);
    return list;
  }

  /**
   * @param {object} partial
   * @param {string} partial.module_slug
   * @param {string} partial.concept_id
   * @param {string} partial.source
   * @param {number} partial.timestamp
   * @param {string} [partial.ref_id]
   * @param {string} [partial.wrong_answer]
   * @param {Record<string, unknown>} [partial.meta]
   * @param {string} [partial.entry_id]
   */
  function appendMistake(partial) {
    if (!mistakesKey || !storage) return null;
    const entry = {
      entry_id: partial.entry_id || generateMistakeEntryId(partial.module_slug || 'unknown'),
      module_slug: partial.module_slug,
      concept_id: partial.concept_id,
      source: partial.source,
      ref_id: partial.ref_id,
      wrong_answer: partial.wrong_answer,
      timestamp: partial.timestamp,
      meta: partial.meta && typeof partial.meta === 'object' ? partial.meta : undefined
    };
    const list = loadJsonArray(mistakesKey, storage);
    list.push(entry);
    while (list.length > maxMistakes) list.shift();
    saveJsonArray(mistakesKey, storage, list);
    return entry.entry_id;
  }

  /**
   * @param {{ limit?: number, concept_id?: string, source?: string, module_slug?: string }} [filter]
   */
  function listMistakes(filter = {}) {
    if (!mistakesKey || !storage) return [];
    const { limit = 200, concept_id, source, module_slug } = filter;
    let list = loadJsonArray(mistakesKey, storage);
    if (concept_id) list = list.filter((e) => e && e.concept_id === concept_id);
    if (source) list = list.filter((e) => e && e.source === source);
    if (module_slug) list = list.filter((e) => e && e.module_slug === module_slug);
    if (limit > 0 && list.length > limit) list = list.slice(-limit);
    return list;
  }

  function clearAttempts() {
    if (!attemptsKey || !storage) return;
    storage.removeItem(attemptsKey);
  }

  function clearMistakes() {
    if (!mistakesKey || !storage) return;
    storage.removeItem(mistakesKey);
  }

  return {
    appendAttempt,
    listAttempts,
    appendMistake,
    listMistakes,
    clearAttempts,
    clearMistakes
  };
}
