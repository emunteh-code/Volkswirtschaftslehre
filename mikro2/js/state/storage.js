import { createStorageModule } from '../../../assets/js/portal-core/state/storage.js';
import {
  PROGRESS_KEY,
  SRS_KEY,
  STREAK_KEY,
  THEME_KEY,
  QUESTION_STATS_KEY,
  FE_STATE_KEY,
  LAST_KEY,
  ATTEMPTS_KEY,
  MISTAKES_KEY,
  MISTAKE_REVIEW_KEY
} from '../data/srsConfig.js';

export const {
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
  listMistakeLogEntries
} = createStorageModule({
  keys: {
    PROGRESS_KEY,
    SRS_KEY,
    STREAK_KEY,
    THEME_KEY,
    QUESTION_STATS_KEY,
    FE_STATE_KEY,
    LAST_KEY,
    ATTEMPTS_KEY,
    MISTAKES_KEY,
    extraKeys: [MISTAKE_REVIEW_KEY]
  }
});
