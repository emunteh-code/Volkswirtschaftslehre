import { createQuickExamModule } from '../../../assets/js/portal-core/features/exam.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { STEP_PROBLEMS } from '../data/stepProblems.js';
import { EXAM_QUESTIONS, EXAM_DURATION_MS } from '../data/srsConfig.js';
import { checkAnswerWithTolerance } from '../utils/answerChecker.js';
import { appendLearnerAttempt, appendMistakeLogEntry, recordAnswer } from '../state/storage.js';
import { updateSRS } from './srs.js';
import { renderMath } from '../utils/mathjax.js';

export const {
  startExam,
  submitExamAnswer,
  skipExamQ
} = createQuickExamModule({
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
