/**
 * mikro2 app shell — live module under source quarantine (no Mikro II tree in `source-materials/`).
 * Intentionally omits `portalBridge` / content-manifest payload vs source-backed modules.
 * Do not treat as file-grounded or backbone-parity without reading:
 *   docs/audits/mikro2-quarantine-roadmap-pass-1.md
 *   docs/audits/mikro2-status-guard-pass-2.md
 */
import { createPortalApp } from '../../assets/js/portal-core/app.js';
import { COURSE_CONFIG } from './data/courseConfig.js';
import * as appState from './state/appState.js';
import * as storage from './state/storage.js';
import { CHAPTERS } from './data/chapters.js';
import * as navigation from './ui/navigation.js';
import * as renderer from './ui/renderer.js';
import * as rightPanel from './ui/rightPanel.js';
import * as graphs from './ui/graphs.js';
import * as quickExam from './features/exam.js';
import { mistakeReview } from './features/mistakeReview.js';
import * as fullExam from './features/fullExam.js';
import * as mastery from './features/mastery.js';
import * as srs from './features/srs.js';
import * as examGraphs from './features/examGraphs.js';
import * as theme from './utils/theme.js';
import * as keyboard from './utils/keyboard.js';
import * as toast from './utils/toast.js';
import * as math from './utils/mathjax.js';

createPortalApp({
  courseLabel: COURSE_CONFIG.courseLabel,
  consentKey: COURSE_CONFIG.consentKey,
  chapters: CHAPTERS,
  appState,
  storage,
  navigation,
  renderer,
  rightPanel,
  graphs,
  quickExam,
  mistakeReview,
  fullExam,
  mastery,
  srs,
  examGraphs,
  theme,
  keyboard,
  toast,
  math
});
