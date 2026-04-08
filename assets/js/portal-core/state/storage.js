import { createLearnerBackboneStore } from './learnerBackbone.js';

export function createStorageModule({ keys }) {
  const {
    PROGRESS_KEY,
    SRS_KEY,
    STREAK_KEY,
    THEME_KEY,
    QUESTION_STATS_KEY,
    FE_STATE_KEY,
    LAST_KEY,
    ATTEMPTS_KEY,
    MISTAKES_KEY,
    extraKeys = []
  } = keys;

  const learnerBackbone =
    ATTEMPTS_KEY || MISTAKES_KEY
      ? createLearnerBackboneStore({ attemptsKey: ATTEMPTS_KEY, mistakesKey: MISTAKES_KEY })
      : null;

  function safeParse(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  }

  function loadProgress() {
    return safeParse(PROGRESS_KEY, {});
  }

  function saveProgressData(data) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  }

  function recordView(id) {
    const progress = loadProgress();
    if (!progress[id]) progress[id] = { views: 0, solved: 0 };
    progress[id].views = (progress[id].views || 0) + 1;
    progress[id].lastSeen = Date.now();
    saveProgressData(progress);
  }

  function recordSolved(id) {
    const progress = loadProgress();
    if (!progress[id]) progress[id] = {};
    progress[id].solved = (progress[id].solved || 0) + 1;
    saveProgressData(progress);
  }

  function recordAnswer(id, correct) {
    const progress = loadProgress();
    if (!progress[id]) progress[id] = {};
    if (correct) progress[id].correct = (progress[id].correct || 0) + 1;
    else progress[id].wrong = (progress[id].wrong || 0) + 1;
    saveProgressData(progress);
  }

  function loadSRS() {
    return safeParse(SRS_KEY, {});
  }

  function saveSRS(data) {
    localStorage.setItem(SRS_KEY, JSON.stringify(data));
  }

  function loadStreak() {
    return Number.parseInt(localStorage.getItem(STREAK_KEY) || "0", 10);
  }

  function saveStreak(n) {
    localStorage.setItem(STREAK_KEY, String(n));
  }

  function loadLastId() {
    return LAST_KEY ? localStorage.getItem(LAST_KEY) : null;
  }

  function saveLastId(id) {
    if (LAST_KEY) localStorage.setItem(LAST_KEY, id);
  }

  function loadQuestionStats() {
    return safeParse(QUESTION_STATS_KEY, {});
  }

  function saveQuestionStats(data) {
    localStorage.setItem(QUESTION_STATS_KEY, JSON.stringify(data));
  }

  function updateQuestionStats(conceptId, stepIdx, correct) {
    const stats = loadQuestionStats();
    const key = `${conceptId}_${stepIdx}`;
    if (!stats[key]) stats[key] = { correct: 0, wrong: 0 };
    if (correct) stats[key].correct += 1;
    else stats[key].wrong += 1;
    saveQuestionStats(stats);
  }

  function saveMasteryChecks(conceptId, checks) {
    const progress = loadProgress();
    if (!progress[conceptId]) progress[conceptId] = {};
    progress[conceptId].checks = checks;
    saveProgressData(progress);
  }

  function clearAllData() {
    [
      PROGRESS_KEY,
      SRS_KEY,
      STREAK_KEY,
      THEME_KEY,
      QUESTION_STATS_KEY,
      FE_STATE_KEY,
      LAST_KEY,
      ATTEMPTS_KEY,
      MISTAKES_KEY,
      ...extraKeys
    ]
      .filter(Boolean)
      .forEach((key) => localStorage.removeItem(key));
  }

  function appendLearnerAttempt(partial) {
    return learnerBackbone ? learnerBackbone.appendAttempt(partial) : null;
  }

  function listLearnerAttempts(filter) {
    return learnerBackbone ? learnerBackbone.listAttempts(filter) : [];
  }

  function appendMistakeLogEntry(partial) {
    return learnerBackbone ? learnerBackbone.appendMistake(partial) : null;
  }

  function listMistakeLogEntries(filter) {
    return learnerBackbone ? learnerBackbone.listMistakes(filter) : [];
  }

  function clearLearnerAttempts() {
    if (learnerBackbone) learnerBackbone.clearAttempts();
  }

  function clearMistakeLogEntries() {
    if (learnerBackbone) learnerBackbone.clearMistakes();
  }

  return {
    loadProgress,
    saveProgressData,
    recordView,
    recordSolved,
    recordAnswer,
    loadSRS,
    saveSRS,
    loadStreak,
    saveStreak,
    loadLastId,
    saveLastId,
    loadQuestionStats,
    saveQuestionStats,
    updateQuestionStats,
    saveMasteryChecks,
    clearAllData,
    appendLearnerAttempt,
    listLearnerAttempts,
    appendMistakeLogEntry,
    listMistakeLogEntries,
    clearLearnerAttempts,
    clearMistakeLogEntries
  };
}

