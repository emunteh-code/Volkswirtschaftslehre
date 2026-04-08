// ============================================================
// SRS CONFIGURATION — Recht für Wirtschaftswissenschaftler
// Spaced Repetition System keys and interval levels
// ============================================================

export const SRS_KEY        = 'recht_srs_v1';
export const PROGRESS_KEY   = 'recht_progress_v1';
export const LAST_KEY       = 'recht_last_v1';
export const STREAK_KEY     = 'recht_streak_v1';
export const THEME_KEY      = 'recht_theme_v1';
export const QUESTION_STATS_KEY = 'recht_question_stats_v1';
export const FE_STATE_KEY   = 'recht_fe_state_v1';
export const ATTEMPTS_KEY   = 'recht_attempts_v1';
export const MISTAKES_KEY   = 'recht_mistakes_v1';
export const MISTAKE_REVIEW_KEY = 'recht_mistake_review_v1';

/** Default ease factor for a new SRS card */
export const SRS_EASE_DEFAULT = 2.5;
export const SRS_EASE_MIN     = 1.3;
export const SRS_EASE_MAX     = 3.0;

/** Number of questions in the quick exam */
export const EXAM_QUESTIONS = 10;
export const EXAM_DURATION_MS = 20 * 60 * 1000; // 20 minutes
