// ============================================================
// SHARED TYPE DEFINITIONS — Mikroökonomik I
// ============================================================

// ----------------------------------------------------------
// Content types
// ----------------------------------------------------------

export interface Formula {
  /** LaTeX expression, e.g. "MU_x / MU_y = p_x / p_y" */
  tex: string;
  /** Human-readable label shown below the formula */
  label: string;
}

export interface Step {
  /** Step instruction shown in the practice panel */
  text: string;
  /** Accepted answer strings (numeric or string) */
  accepted: string[];
  /** Common wrong answer patterns that trigger specific feedback */
  traps?: Trap[];
  /** Hint shown on first wrong answer */
  hint?: string;
}

export interface Task {
  /** Problem statement (may contain LaTeX) */
  q: string;
  steps: Step[];
}

export interface Intuition {
  /** Icon emoji or character shown in the card */
  icon: string;
  /** Short intuition text */
  text: string;
}

export interface Trap {
  /** Substring to detect in the user's answer */
  pattern: string;
  /** Feedback message when the trap is triggered */
  msg: string;
}

export interface ConceptContent {
  /** Full display title */
  title: string;
  /** One-liner summary shown in the home grid */
  oneLiner: string;
  /** Core theory HTML (may include MathJax) */
  theorie: string;
  formeln: Formula[];
  tasks: Task[];
  intuitions?: Intuition[];
  /** Related concept IDs */
  links?: string[];
}

// ----------------------------------------------------------
// Navigation / chapter list
// ----------------------------------------------------------

export type ConceptCategory =
  | 'Grundlagen'
  | 'Präferenzen'
  | 'Haushaltsoptimum'
  | 'Nachfrage'
  | 'Produktion'
  | 'Kosten'
  | 'Markt'
  | 'Wohlfahrt'
  | 'Spieltheorie';

export interface Concept {
  id: string;
  title: string;
  cat: ConceptCategory;
  /** Display number, e.g. "1.1" */
  num: string;
  /** Chapter weight for ordering */
  order?: number;
}

// ----------------------------------------------------------
// SRS / Progress state
// ----------------------------------------------------------

export interface SRSData {
  interval: number;        // days until next review
  easeFactor: number;      // SM-2 ease factor (1.3–3.0)
  dueDate: string;         // ISO date string
  repetitions: number;
}

export interface ProgressEntry {
  views: number;
  solved: number;
  correct: number;
  wrong: number;
  lastSeen: string | null; // ISO date string
  mastery: boolean[];      // one boolean per mastery item
}

export type ProgressData = Record<string, ProgressEntry>;
export type SRSRecord    = Record<string, SRSData>;

// ----------------------------------------------------------
// Answer checking
// ----------------------------------------------------------

export interface AnswerResult {
  correct: boolean;
  /** Set when the user hit a known trap */
  trap?: string;
}

// ----------------------------------------------------------
// Graph / canvas helpers
// ----------------------------------------------------------

export interface GraphColors {
  bg:       string;
  grid:     string;
  axis:     string;
  tick:     string;
  muted:    string;
  label:    string;
  text:     string;
  accent:   string;
  accent2:  string;
  warn:     string;
  card:     string;
  fontMono: string;
  fontBody: string;
}

export interface TooltipPoint {
  x: number;        // canvas pixel x
  y: number;        // canvas pixel y
  label: string;    // text shown in tooltip
}

// ----------------------------------------------------------
// App state
// ----------------------------------------------------------

export type TabId = 'theorie' | 'formeln' | 'aufgaben' | 'intuition';

export interface AppState {
  current: string | null;
  currentTab: TabId;
  streak: number;
}

export type NavigateFn = (id: string | null) => void;
