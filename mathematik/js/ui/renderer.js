import { createRenderer } from '../../../assets/js/portal-core/ui/renderer.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { CHAPTERS, CONTENT, R_BLOCKS_BY_ID } from '../data/chapters.js';
import { STEP_PROBLEMS } from '../data/stepProblems.js';
import { INTUITION } from '../data/intuition.js';
import { CONCEPT_LINKS } from '../data/conceptLinks.js';
import { MATHEMATIK_EXAM_DRILLS_BY_ID, MATHEMATIK_GUIDED_TASKS_BY_ID } from '../data/practiceConfig.js';
import { renderGraphPanel, GRAPH_CONCEPTS } from './graphPanel.js';
import { renderMastery } from '../features/mastery.js';
import { renderMath } from '../utils/mathjax.js';
import { loadProgress, loadLastId, listMistakeLogEntries } from '../state/storage.js';
import { getDueCards } from '../features/srs.js';
import { renderDashboard } from '../features/dashboard.js';
import { checkAnswerWithTolerance } from '../utils/answerChecker.js';
import { mountRPracticeBlocks, renderRAnwendungTab } from '../../../assets/js/portal-core/features/rPractice.js';
import { getConceptProvenance } from '../data/contentManifest.js';

const baseRenderer = createRenderer({
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
  getPracticeTasks: (conceptId, contentEntry) => MATHEMATIK_GUIDED_TASKS_BY_ID[conceptId] || contentEntry?.aufgaben || [],
  stepProblems: STEP_PROBLEMS,
  minimumPracticeTasks: 0,
  examDrillsById: MATHEMATIK_EXAM_DRILLS_BY_ID,
  checkAnswer: checkAnswerWithTolerance,
  hasRBlock: (conceptId) => Array.isArray(R_BLOCKS_BY_ID[conceptId]) && R_BLOCKS_BY_ID[conceptId].length > 0,
  renderRAnwendungPanel: (conceptId) => {
    const blocks = R_BLOCKS_BY_ID[conceptId] || [];
    return renderRAnwendungTab(blocks, 'mathematik', { conceptId });
  },
  getConceptProvenance
});

export function renderContent(conceptId, tab, initGraphFn) {
  baseRenderer.renderContent(conceptId, tab, initGraphFn);
  mountRPracticeBlocks(document.getElementById('content'));
}

export function renderHome() {
  baseRenderer.renderHome();
  const row = document.querySelector('#content .home-action-row');
  if (!row || row.querySelector('[data-home-action="mistake-review"]')) return;

  const mistakeCount = listMistakeLogEntries().length;
  const card = document.createElement('div');
  card.className = 'home-action-card';
  card.dataset.homeAction = 'mistake-review';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('onkeydown', "if(event.key==='Enter')window.__showMistakeReview?.()");
  card.onclick = () => window.__showMistakeReview?.();
  card.innerHTML = `
    <div class="hac-title">Fehlerprotokoll${mistakeCount > 0 ? ` (${mistakeCount})` : ''}</div>
    <div class="hac-desc">Wiederkehrende Rechen- und Strukturfehler gezielt nacharbeiten</div>
  `;

  row.insertBefore(card, row.children[1] || null);
}

export const {
  toggleSolution,
  copyFormula,
  showDashboard,
  setRendererState,
  renderPracticePanel,
  checkTaskStep,
  revealTaskStep
} = baseRenderer;
