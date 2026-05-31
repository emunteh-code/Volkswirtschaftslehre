import { createConceptSchnelltestModule } from '../../../assets/js/portal-core/features/conceptSchnelltest.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import {
  CONCEPT_SCHNELLTEST_ITEMS,
  CONCEPT_SCHNELLTEST_DURATION_MS
} from '../data/conceptSchnelltestItems.js';
import { recordAnswer, appendLearnerAttempt, appendMistakeLogEntry } from '../state/storage.js';
import { updateSRS } from './srs.js';
import { renderMath } from '../utils/mathjax.js';

export const { startConceptSchnelltest, handleConceptSchnelltestPrimary } = createConceptSchnelltestModule({
  moduleSlug: COURSE_CONFIG.slug,
  courseLabel: COURSE_CONFIG.courseLabel,
  durationMs: CONCEPT_SCHNELLTEST_DURATION_MS,
  items: CONCEPT_SCHNELLTEST_ITEMS,
  renderMath,
  recordAnswer,
  updateSRS,
  appendLearnerAttempt,
  appendMistakeLogEntry
});
