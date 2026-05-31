import { CHAPTERS } from '../data/chapters.js';
import { loadProgress, loadSRS } from '../state/storage.js';
import { createChapterNavigation } from '../../../assets/js/portal-core/ui/chapterNavigation.js';

const { buildNav, filterNav, setActiveNav, updateNavBadges, updateProgressUI } = createChapterNavigation({
  chapters: CHAPTERS,
  loadProgress,
  loadSRS
});

export { buildNav, filterNav, setActiveNav, updateNavBadges, updateProgressUI };
