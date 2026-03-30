// ============================================================
// SRS CONFIGURATION — Mikroökonomik I
// Spaced Repetition System keys and interval levels
// ============================================================

export const SRS_KEY        = 'mikro_srs_v1';
export const PROGRESS_KEY   = 'mikro_progress_v2';
export const LAST_KEY       = 'mikro_last_v2';
export const STREAK_KEY     = 'mikro_streak_v2';
export const THEME_KEY      = 'mikro_theme';
export const QUESTION_STATS_KEY = 'micro_question_stats_v1';
export const FE_STATE_KEY   = 'mikro_fe_state_v1';

/** Default ease factor for a new SRS card */
export const SRS_EASE_DEFAULT = 2.5;
export const SRS_EASE_MIN     = 1.3;
export const SRS_EASE_MAX     = 3.0;

/** Number of questions in the quick exam */
export const EXAM_QUESTIONS = 10;
export const EXAM_DURATION_MS = 20 * 60 * 1000; // 20 minutes
