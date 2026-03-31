// ============================================================
// SRS CONFIGURATION — Makroökonomik I
// Spaced Repetition System keys and interval levels
// ============================================================

export const SRS_KEY        = 'makro1_srs_v1';
export const PROGRESS_KEY   = 'makro1_progress_v1';
export const LAST_KEY       = 'makro1_last_v1';
export const STREAK_KEY     = 'makro1_streak_v1';
export const THEME_KEY      = 'makro1_theme_v1';
export const QUESTION_STATS_KEY = 'makro1_question_stats_v1';
export const FE_STATE_KEY   = 'makro1_fe_state_v1';

/** Default ease factor for a new SRS card */
export const SRS_EASE_DEFAULT = 2.5;
export const SRS_EASE_MIN     = 1.3;
export const SRS_EASE_MAX     = 3.0;

/** Number of questions in the quick exam */
export const EXAM_QUESTIONS = 10;
export const EXAM_DURATION_MS = 20 * 60 * 1000; // 20 minutes
