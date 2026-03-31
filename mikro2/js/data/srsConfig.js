// ============================================================
// SRS CONFIGURATION — Mikroökonomik II
// Spaced Repetition System keys and interval levels
// ============================================================

export const SRS_KEY        = 'mikro2_srs_v1';
export const PROGRESS_KEY   = 'mikro2_progress_v1';
export const LAST_KEY       = 'mikro2_last_v1';
export const STREAK_KEY     = 'mikro2_streak_v1';
export const THEME_KEY      = 'mikro2_theme_v1';
export const QUESTION_STATS_KEY = 'mikro2_question_stats_v1';
export const FE_STATE_KEY   = 'mikro2_fe_state_v1';

/** Default ease factor for a new SRS card */
export const SRS_EASE_DEFAULT = 2.5;
export const SRS_EASE_MIN     = 1.3;
export const SRS_EASE_MAX     = 3.0;

/** Number of questions in the quick exam */
export const EXAM_QUESTIONS = 10;
export const EXAM_DURATION_MS = 20 * 60 * 1000; // 20 minutes
