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
import * as fullExam from './features/fullExam.js';
import * as mastery from './features/mastery.js';
import * as srs from './features/srs.js';
import * as examGraphs from './features/examGraphs.js';
import * as theme from './utils/theme.js';
import * as keyboard from './utils/keyboard.js';
import * as toast from './utils/toast.js';
import * as math from './utils/mathjax.js';

const bootStorage = {
  ...storage,
  // Enter Mikro I on the internal overview first; resume remains available there.
  loadLastId: () => null
};

createPortalApp({
  courseLabel: COURSE_CONFIG.courseLabel,
  consentKey: COURSE_CONFIG.consentKey,
  chapters: CHAPTERS,
  appState,
  storage: bootStorage,
  navigation,
  renderer,
  rightPanel,
  graphs,
  quickExam,
  fullExam,
  mastery,
  srs,
  examGraphs,
  theme,
  keyboard,
  toast,
  math
});
