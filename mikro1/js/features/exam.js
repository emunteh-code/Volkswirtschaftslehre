import { createQuickExamModule } from '../../../assets/js/portal-core/features/exam.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { STEP_PROBLEMS } from '../data/stepProblems.js';
import { EXAM_QUESTIONS, EXAM_DURATION_MS } from '../data/srsConfig.js';
import { checkAnswerWithTolerance } from '../utils/answerChecker.js';
import { recordAnswer, appendLearnerAttempt, appendMistakeLogEntry } from '../state/storage.js';
import { updateSRS } from './srs.js';
import { renderMath } from '../utils/mathjax.js';

const examModule = createQuickExamModule({
  courseLabel: COURSE_CONFIG.courseLabel,
  stepProblems: STEP_PROBLEMS,
  examQuestions: EXAM_QUESTIONS,
  examDurationMs: EXAM_DURATION_MS,
  checkAnswerWithTolerance,
  recordAnswer,
  updateSRS,
  renderMath,
  moduleSlug: COURSE_CONFIG.slug,
  appendLearnerAttempt,
  appendMistakeLogEntry
});

function cleanWrongExamFeedback() {
  const feedbackEl = document.getElementById('examFeedback');
  const wrong = feedbackEl?.querySelector('.fb-wrong');
  if (!wrong) return;

  Array.from(wrong.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.includes('Nicht ganz.')) {
      node.textContent = node.textContent.replace('Nicht ganz.', '').trimStart();
      if (!node.textContent.trim()) {
        node.remove();
      }
    }
  });

  wrong.querySelectorAll('div').forEach((block) => {
    if (block.textContent?.trim().startsWith('Achtung:')) {
      block.remove();
    }
  });

  renderMath(feedbackEl);
}

export const {
  startExam,
  skipExamQ
} = examModule;

export function submitExamAnswer() {
  examModule.submitExamAnswer();
  cleanWrongExamFeedback();
}
