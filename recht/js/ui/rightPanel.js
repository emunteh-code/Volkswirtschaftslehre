import { createRightPanelRenderer } from '../../../assets/js/portal-core/ui/rightPanel.js';
import { CHAPTERS, CONTENT } from '../data/chapters.js';
import { CONCEPT_LINKS } from '../data/conceptLinks.js';
import { renderMath } from '../utils/mathjax.js';
import { displayContentToPlainText, getDisplayMode, renderSemanticBlock } from '../../../assets/js/portal-core/ui/semanticContent.js';

const rightPanel = createRightPanelRenderer({
  chapters: CHAPTERS,
  contentById: CONTENT,
  conceptLinks: CONCEPT_LINKS,
  renderMath,
  renderFormulaEqHtml: (formula) => renderSemanticBlock(formula?.eq, { variant: 'sidebar' }),
  getFormulaCopyText: (formula) => displayContentToPlainText(formula?.eq),
  getFormulaDisplayMode: (formula) => getDisplayMode(formula?.eq) || 'math'
});

export const { clearRightPanel, renderRightPanel } = rightPanel;
