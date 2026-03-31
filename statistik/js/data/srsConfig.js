// ============================================================
// SRS CONFIGURATION — Statistik
// Spaced Repetition System keys and interval levels
// ============================================================

export const SRS_KEY        = 'stat_srs_v1';
export const PROGRESS_KEY   = 'stat_progress_v1';
export const LAST_KEY       = 'stat_last_v1';
export const STREAK_KEY     = 'stat_streak_v1';
export const THEME_KEY      = 'stat_theme_v1';
export const QUESTION_STATS_KEY = 'stat_question_stats_v1';
export const FE_STATE_KEY   = 'stat_fe_state_v1';

/** Default ease factor for a new SRS card */
export const SRS_EASE_DEFAULT = 2.5;
export const SRS_EASE_MIN     = 1.3;
export const SRS_EASE_MAX     = 3.0;

/** Number of questions in the quick exam */
export const EXAM_QUESTIONS = 10;
export const EXAM_DURATION_MS = 20 * 60 * 1000; // 20 minutes
