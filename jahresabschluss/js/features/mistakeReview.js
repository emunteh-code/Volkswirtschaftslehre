import { createMistakeReviewModule } from '../../../assets/js/portal-core/features/mistakeReview.js';
import { CHAPTERS } from '../data/chapters.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { MISTAKE_REVIEW_KEY } from '../data/srsConfig.js';
import { listMistakeLogEntries } from '../state/storage.js';

export const mistakeReview = createMistakeReviewModule({
  moduleSlug: COURSE_CONFIG.slug,
  courseLabel: COURSE_CONFIG.courseLabel,
  listMistakeLogEntries,
  reviewStateKey: MISTAKE_REVIEW_KEY,
  chapters: CHAPTERS
});
