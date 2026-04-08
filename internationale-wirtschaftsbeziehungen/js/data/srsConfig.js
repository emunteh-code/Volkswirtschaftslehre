// ============================================================
// SRS CONFIGURATION — Internationale Wirtschaftsbeziehungen
// Spaced Repetition System keys and interval levels
// ============================================================

export const SRS_KEY        = 'iwb_srs_v1';
export const PROGRESS_KEY   = 'iwb_progress_v1';
export const LAST_KEY       = 'iwb_last_v1';
export const STREAK_KEY     = 'iwb_streak_v1';
export const THEME_KEY      = 'iwb_theme_v1';
export const QUESTION_STATS_KEY = 'iwb_question_stats_v1';
export const FE_STATE_KEY   = 'iwb_fe_state_v1';
/** Learner backbone (attempt log + mistake log) for Schnelltest / Probeklausur */
export const ATTEMPTS_KEY   = 'iwb_attempts_v1';
export const MISTAKES_KEY   = 'iwb_mistakes_v1';
/** Local „erledigt“ marks in Fehlerprotokoll (not scoring) */
export const MISTAKE_REVIEW_KEY = 'iwb_mistake_review_v1';

/** Default ease factor for a new SRS card */
export const SRS_EASE_DEFAULT = 2.5;
export const SRS_EASE_MIN     = 1.3;
export const SRS_EASE_MAX     = 3.0;

/** Number of questions in the quick exam */
export const EXAM_QUESTIONS = 10;
export const EXAM_DURATION_MS = 20 * 60 * 1000; // 20 minutes
