import { createRenderer } from '../../../assets/js/portal-core/ui/renderer.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { CHAPTERS, CONTENT } from '../data/chapters.js';
import { STEP_PROBLEMS } from '../data/stepProblems.js';
import { INTUITION } from '../data/intuition.js';
import { CONCEPT_LINKS } from '../data/conceptLinks.js';
import { renderGraphPanel, GRAPH_CONCEPTS } from './graphPanel.js';
import { renderMastery } from '../features/mastery.js';
import { renderMath } from '../utils/mathjax.js';
import { loadProgress, loadLastId } from '../state/storage.js';
import { getDueCards } from '../features/srs.js';
import { renderDashboard } from '../features/dashboard.js';
import { checkAnswerWithTolerance } from '../utils/answerChecker.js';

export const {
  renderContent,
  renderHome,
  toggleSolution,
  copyFormula,
  showDashboard,
  setRendererState,
  renderPracticePanel,
  checkTaskStep,
  revealTaskStep
} = createRenderer({
  courseLabel: COURSE_CONFIG.courseLabel,
  courseTitle: COURSE_CONFIG.courseTitle,
  homeIntro: COURSE_CONFIG.homeIntro,
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  conceptLinks: CONCEPT_LINKS,
  renderGraphPanel,
  graphConcepts: GRAPH_CONCEPTS,
  renderMastery,
  renderMath,
  loadProgress,
  loadLastId,
  getDueCards,
  renderDashboard,
  stepProblems: STEP_PROBLEMS,
  checkAnswer: checkAnswerWithTolerance
});
