import { toLearnerAttemptPayloadFromExamSummary } from '../../../assets/js/portal-core/exam/examSessionBackbone.js';
import { createFullExamModule } from '../../../assets/js/portal-core/features/fullExam.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { FULL_EXAMS } from '../data/fullExams.js';
import { appendLearnerAttempt, appendMistakeLogEntry } from '../state/storage.js';
import { renderMath } from '../utils/mathjax.js';
import { showToast } from '../utils/toast.js';

export const {
  startFullExam,
  feSelectWF,
  feCheckText,
  feRevealAnswer,
  feText,
  submitFE,
  showFullExamSelect
} = createFullExamModule({
  courseLabel: COURSE_CONFIG.courseLabel,
  courseExamCollectionTitle: COURSE_CONFIG.examCollectionTitle,
  fullExams: FULL_EXAMS,
  renderMath,
  showToast,
  moduleSlug: COURSE_CONFIG.slug,
  appendMistakeLogEntry,
  onExamSubmitted(summary) {
    appendLearnerAttempt(toLearnerAttemptPayloadFromExamSummary(summary));
  }
});
