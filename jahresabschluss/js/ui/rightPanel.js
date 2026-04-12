import { createRightPanelRenderer } from '../../../assets/js/portal-core/ui/rightPanel.js';
import { CHAPTERS, CONTENT } from '../data/chapters.js';
import { CONCEPT_LINKS } from '../data/conceptLinks.js';
import { renderMath } from '../utils/mathjax.js';

const rightPanel = createRightPanelRenderer({
  chapters: CHAPTERS,
  contentById: CONTENT,
  conceptLinks: CONCEPT_LINKS,
  renderMath
});

export const { clearRightPanel, renderRightPanel } = rightPanel;
