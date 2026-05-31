import { createRenderer } from '../../../assets/js/portal-core/ui/renderer.js';
import { hasMeaningfulDisplayContent, renderSemanticBlock } from '../../../assets/js/portal-core/ui/semanticContent.js';
import { renderTeachingProse } from '../../../assets/js/portal-core/ui/teachingProse.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { CHAPTERS, CONTENT, R_BLOCKS_BY_ID } from '../data/chapters.js';
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
import { formalizeMarkupString } from '../utils/formalMath.js';
import { mountRPracticeBlocks, renderRAnwendungTab } from '../../../assets/js/portal-core/features/rPractice.js';
import { createSemanticMathSurfaces, OEKONOMETRIE_EXTRA_MATH_RANGE_PATTERNS } from '../../../assets/js/portal-core/ui/semanticMathSurfaces.js';
import { getConceptProvenance, getConceptSourceSummary } from '../data/contentManifest.js';
import { FORMULA_CARDS_BY_CONCEPT } from '../data/formulaCards.js';
import { TASK_FAMILIES_BY_CONCEPT } from '../data/taskFamilies.js';

const chapterMap = Object.fromEntries(CHAPTERS.map((chapter) => [chapter.id, chapter]));
let baseRenderer;

function stripHtml(value) {
  return String(value ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function hasMeaningfulText(value) {
  const normalized = stripHtml(value);
  return Boolean(normalized && !['undefined', 'null'].includes(normalized.toLowerCase()));
}

const {
  prepareSemanticMathData,
  decorateSemanticMathSurfaces,
  semanticizeMarkupString,
  semanticizeElementContent,
  renderSemanticPlainText,
  renderDecodedText
} = createSemanticMathSurfaces({
  formalizeMarkupString,
  extraRangePatterns: OEKONOMETRIE_EXTRA_MATH_RANGE_PATTERNS,
  contentData: CONTENT,
  intuitionData: INTUITION
});

if (typeof window !== 'undefined') {
  window.__decorateSemanticMathSurfaces = decorateSemanticMathSurfaces;
  window.__semanticizeElementContent = semanticizeElementContent;
}

prepareSemanticMathData();
baseRenderer = createRenderer({
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
  checkAnswer: checkAnswerWithTolerance,
  hasRBlock: (conceptId) => Boolean(R_BLOCKS_BY_ID[conceptId]),
  renderRAnwendungPanel: (conceptId) => {
    const block = R_BLOCKS_BY_ID[conceptId];
    if (!block) return '';
    return renderRAnwendungTab([block], 'oekonometrie', { conceptId });
  },
  getConceptProvenance,
  getConceptSourceSummary,
  sourceMaterialBaseUrl: '../source-materials/Ökonometrie/',
  formulaCardsByConcept: FORMULA_CARDS_BY_CONCEPT,
  taskFamiliesByConcept: TASK_FAMILIES_BY_CONCEPT
});

function markRenderSettled(isSettled) {
  if (typeof window !== 'undefined') {
    window.__mikroRenderSettled = isSettled;
  }
}

function extractTheorySignals(entry) {
  if (!entry?.theorie || typeof DOMParser === 'undefined') {
    return { sections: [], warnings: [] };
  }

  try {
    const doc = new DOMParser().parseFromString(`<div>${entry.theorie}</div>`, 'text/html');
    const sections = Array.from(doc.querySelectorAll('.section-block'))
      .map((section) => {
        const heading = section.querySelector('h3')?.textContent?.trim();
        const paragraph = section.querySelector('p')?.textContent?.trim();
        if (!heading || !paragraph) return null;
        return { heading, paragraph };
      })
      .filter(Boolean);
    const warnings = Array.from(doc.querySelectorAll('.warn-box'))
      .map((warning) => {
        const strong = warning.querySelector('strong');
        const label = strong?.textContent?.trim() || 'Typischer Fehler';
        if (strong) strong.remove();
        const body = warning.textContent?.trim();
        if (!body) return null;
        return { label, body };
      })
      .filter(Boolean);
    return { sections, warnings };
  } catch {
    return { sections: [], warnings: [] };
  }
}

function renderQuestionCard({
  label,
  question,
  buttonId,
  answerId,
  toggleCall,
  answerMarkup,
  buttonText = 'Lösung anzeigen',
  openButtonText = 'Lösung verbergen',
  cardClass = ''
}) {
  const classes = ['problem-card', cardClass].filter(Boolean).join(' ');
  return `<div class="${classes}">
<div class="prob-num">${label}</div>
<div class="prob-text">${question}</div>
<div class="prob-actions">
<button class="btn" id="${buttonId}" data-closed-label="${buttonText}" data-open-label="${openButtonText}" onclick="${toggleCall}">${buttonText}</button>
</div>
<div class="solution-block${cardClass ? ` ${cardClass.replace('card', 'answer')}` : ''}" id="${answerId}" aria-expanded="false">
${answerMarkup}
</div>
</div>`;
}

function renderNotationList(variables = {}) {
  const entries = Object.entries(variables);
  if (!entries.length) return '';
  return `<ul class="exam-drill-list">${entries
    .map(([key, value]) => `<li><strong>$${key}$</strong>: ${renderSemanticPlainText(value)}</li>`)
    .join('')}</ul>`;
}

function renderFormulaEq(eq) {
  if (!hasMeaningfulDisplayContent(eq)) return '';
  return renderSemanticBlock(eq, { variant: 'formula' });
}

function renderTaskMathBlock(value) {
  if (!hasMeaningfulDisplayContent(value)) return '';
  return renderSemanticBlock(value, { variant: 'task' });
}

function renderGuidedTasks(tasks) {
  if (!tasks.length) {
    return `<div class="section-block">
<h3>Geführte Aufgaben</h3>
<p>Für dieses Konzept liegt der Schwerpunkt im Prüfungstransfer. Nutze die Fragen unten, um Definition, Richtungsaussage und formalen Zugriff klausurfest zu machen.</p>
</div>`;
  }

  return tasks.map((task, index) => renderQuestionCard({
    label: `Aufgabe ${index + 1}`,
    question: task.text,
    buttonId: `solBtn_${index}`,
    answerId: `sol_${index}`,
    toggleCall: `window.__toggleSolution(${index})`,
    answerMarkup: `<h4>Musterlösung</h4>
${(task.steps || []).map((step, stepIndex) => `
<div class="step">
<div class="step-num" aria-hidden="true">${stepIndex + 1}</div>
<div class="step-body">
<div class="step-text">${renderSemanticPlainText(step.text || '')}</div>
<div class="step-math-slot">${renderTaskMathBlock(step.eq)}</div>
</div>
</div>`).join('')}
<div class="result-badge">Ergebnis: ${renderSemanticPlainText(task.result || 'Arbeite das Ergebnis formal zu Ende aus.')}</div>`
  })).join('');
}

function buildExamDrills(chapter, entry, intuition, signals) {
  const drills = [];
  const formula = entry?.formeln?.[0];
  const section = signals.sections[0];
  const secondSection = signals.sections[1];
  const warning = signals.warnings[0];
  const tasks = Array.isArray(entry?.aufgaben) ? entry.aufgaben : [];
  const patterns = Array.isArray(intuition?.exam) ? intuition.exam : [];

  drills.push({
    tag: 'Kernidee',
    question: `Was ist bei "${chapter.title}" der eine Kernsatz, den du in der Klausur sofort parat haben musst?`,
    answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Kernsatz</span>
<div class="exam-drill-copy">${intuition?.core || entry?.motivation || `${chapter.title} ist ein Kernbaustein aus ${chapter.cat}.`}</div>
</div>
${intuition?.bridge ? `<div class="exam-drill-line">
<span class="exam-drill-key">Warum das ökonomisch zählt</span>
<div class="exam-drill-copy">${intuition.bridge}</div>
</div>` : ''}`
  });

  if (formula) {
    drills.push({
      tag: formula.label,
      question: `Welche formale Beziehung trägt "${chapter.title}" in der Prüfung, und wie liest du sie richtig?`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Formaler Anker</span>
${renderFormulaEq(formula.eq)}
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Bedeutung</span>
<div class="exam-drill-copy">${renderSemanticPlainText(formula.desc || `Diese Beziehung ist der formale Einstieg in ${chapter.title}.`)}</div>
</div>
${formula.variables && Object.keys(formula.variables).length ? `<div class="exam-drill-line">
<span class="exam-drill-key">Notation</span>
${renderNotationList(formula.variables)}
</div>` : ''}`
    });
  }

  if (section) {
    drills.push({
      tag: 'Theorieblock',
      question: `Wie erklärst du "${section.heading}" so, dass daraus direkt eine saubere Prüfungsantwort wird?`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Argumentationskern</span>
<div class="exam-drill-copy">${renderSemanticPlainText(section.paragraph)}</div>
</div>
${formula ? `<div class="exam-drill-line">
<span class="exam-drill-key">Formale Rückbindung</span>
${renderFormulaEq(formula.eq)}
</div>` : ''}`
    });
  }

  patterns.slice(0, 2).forEach((pattern, index) => {
    drills.push({
      tag: `Klausurmuster ${index + 1}`,
      question: `Wenn in der Prüfung ${pattern.if} auftaucht, welcher Zugriff ist dann der richtige?`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Erstes Signal</span>
<div class="exam-drill-copy">${renderSemanticPlainText(pattern.if)}</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Saubere Reaktion</span>
<div class="exam-drill-copy">${renderSemanticPlainText(pattern.then)}</div>
</div>
${formula ? `<div class="exam-drill-line">
<span class="exam-drill-key">Formel, die du notieren kannst</span>
${renderFormulaEq(formula.eq)}
</div>` : ''}`
    });
  });

  tasks.slice(0, 3).forEach((task, index) => {
    drills.push({
      tag: `Prüfungsfrage ${index + 1}`,
      question: `Wie würdest du die klausurnahe Aufgabe zu "${chapter.title}" lösen? ${task.text}`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Lösungslogik</span>
<ol class="exam-drill-steps">${(task.steps || []).map((step) => `<li class="exam-drill-step"><div class="exam-drill-step-body"><div class="exam-drill-step-text">${renderSemanticPlainText(step.text || '')}</div><div class="exam-drill-step-math">${renderTaskMathBlock(step.eq)}</div></div></li>`).join('')}</ol>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Prüfungsresultat</span>
<div class="result-badge">${renderSemanticPlainText(task.result || 'Arbeite das Ergebnis formal aus.')}</div>
</div>`
    });
  });

  if (warning) {
    drills.push({
      tag: 'Fehlerkontrolle',
      question: `Welcher typische Fehler kostet bei "${chapter.title}" schnell Punkte und wie vermeidest du ihn?`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Fehlerbild</span>
<div class="exam-drill-copy"><strong>${renderDecodedText(warning.label)}:</strong> ${renderSemanticPlainText(warning.body)}</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Saubere Gegenregel</span>
<div class="exam-drill-copy">${intuition?.bridge || entry?.motivation || `${chapter.title} muss immer über die zentrale Definition und den passenden formalen Anker abgesichert werden.`}</div>
</div>`
    });
  }

  if (secondSection) {
    drills.push({
      tag: 'Transfer',
      question: `Welchen zweiten Gedanken solltest du nach dem ersten Kernsatz bei "${chapter.title}" direkt anschließen?`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Anschlussgedanke</span>
<div class="exam-drill-copy"><strong>${renderDecodedText(secondSection.heading)}:</strong> ${renderSemanticPlainText(secondSection.paragraph)}</div>
</div>
${intuition?.analogy ? `<div class="exam-drill-line">
<span class="exam-drill-key">Denkbild</span>
<div class="exam-drill-copy">${intuition.analogy}</div>
</div>` : ''}`
    });
  }

  return drills.slice(0, 8);
}

function renderExamDrillDeck(conceptId) {
  const chapter = chapterMap[conceptId];
  const entry = CONTENT[conceptId];
  const intuition = INTUITION[conceptId] || {};
  const signals = extractTheorySignals(entry);
  const drills = buildExamDrills(chapter, entry, intuition, signals);

  function resolveExamDrillMetaLabel(tag, cardLabel) {
    const normalizedTag = String(tag || '').trim();
    if (!normalizedTag) return '';
    if (normalizedTag === cardLabel) return '';
    if (/^Prüfungsfrage\s+\d+$/u.test(normalizedTag)) return '';
    if (/^Klausurmuster\s+\d+$/u.test(normalizedTag)) return 'Klausurmuster';
    return normalizedTag;
  }

  return `<div class="exam-drill-panel">
<div class="practice-section-header">Prüfungstransfer</div>
<div class="exam-drill-grid">
${drills.map((drill, index) => {
  const drillId = `${chapter.id.replace(/[^a-zA-Z0-9_]/g, '_')}_${index}`;
  const cardLabel = `Prüfungsfrage ${index + 1}`;
  const metaLabel = resolveExamDrillMetaLabel(drill.tag, cardLabel);
  return renderQuestionCard({
    label: cardLabel,
    question: drill.question,
    buttonId: `examDrillBtn_${drillId}`,
    answerId: `examDrill_${drillId}`,
    toggleCall: `window.__toggleExamDrill('${drillId}')`,
    cardClass: 'exam-drill-card',
    answerMarkup: `<h4>Musterlösung</h4>
${metaLabel ? `<div class="exam-drill-meta">${metaLabel}</div>` : ''}
${drill.answer}`
  });
}).join('')}
</div>
</div>`;
}

function buildMicroPracticePanel(conceptId) {
  const entry = CONTENT[conceptId];
  const tasks = Array.isArray(entry?.aufgaben) ? entry.aufgaben : [];

  return `<div class="panel active mikro1-practice">
<div class="section-block">
<div class="exam-drill-line">
<span class="exam-drill-key">Geführte Aufgaben</span>
<div class="exam-drill-copy">Hier trainierst du den vollständigen Lösungsweg Schritt für Schritt. Ziel ist nicht nur das Ergebnis, sondern die saubere Reihenfolge der Argumentation.</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Prüfungstransfer</span>
<div class="exam-drill-copy">Hier musst du zeigen, dass du Formel, Intuition und Fehlerkontrolle auch in komprimierter Klausurform sicher abrufen kannst.</div>
</div>
</div>
<div class="practice-section-header">Geführte Aufgaben</div>
${renderGuidedTasks(tasks)}
${renderExamDrillDeck(conceptId)}
</div>`;
}

function renderExamPatterns(intuition) {
  const patterns = Array.isArray(intuition?.exam) ? intuition.exam : [];
  if (!patterns.length) return '';
  return `<div class="intuition-detail intuition-patterns">
<span class="intuition-detail-label">Klausurmuster</span>
<div class="intuition-detail-copy">
${patterns.map((pattern) => `<div class="intuition-pattern-row">
<span class="intuition-pattern-if">Wenn</span>
<span class="intuition-pattern-then">${renderSemanticPlainText(pattern.if)}</span>
<span class="intuition-pattern-arrow" aria-hidden="true">→</span>
<span class="intuition-pattern-then">${renderSemanticPlainText(pattern.then)}</span>
</div>`).join('')}
</div>
</div>`;
}

function buildMicroIntuitionPanel(conceptId) {
  const chapter = chapterMap[conceptId];
  const entry = CONTENT[conceptId];
  const intuition = INTUITION[conceptId];
  if (!intuition) return '';

  const signals = extractTheorySignals(entry);
  const formula = entry?.formeln?.[0];
  const recognitionItems = [
    ...(Array.isArray(intuition.exam) ? intuition.exam.slice(0, 2).map((pattern) => `Wenn ${pattern.if}, dann ${pattern.then}.`) : []),
    ...(signals.sections[0] ? [`Achte auf ${signals.sections[0].heading.toLowerCase()}: ${signals.sections[0].paragraph}`] : []),
    ...(signals.warnings[0] ? [`Vermeide ${signals.warnings[0].label.toLowerCase()}: ${signals.warnings[0].body}`] : [])
  ].slice(0, 4);

  return `<div class="panel active mikro1-intuition">
<div class="section-block intuition-hero">
<h3>Worum es wirklich geht</h3>
<p class="intuition-lead">${intuition.core || entry?.motivation || `${chapter.title} ordnet einen zentralen Mechanismus aus ${chapter.cat}.`}</p>
${formula ? `<div class="intuition-callout">
<span class="intuition-callout-label">Formaler Anker</span>
<div class="intuition-callout-body">
${formula.eq ? `<div class="intuition-callout-anchor">${renderFormulaEq(formula.eq)}</div>` : ''}
${formula.desc ? `<p class="intuition-callout-desc">${renderSemanticPlainText(formula.desc)}</p>` : ''}
</div>
</div>` : ''}
</div>

<div class="intuition-grid">
<div class="section-block intuition-card">
<h3>Denkbild</h3>
<p>${intuition.analogy || entry?.motivation || `${chapter.title} lässt sich am besten als geordnete Entscheidung unter gegebenen Bedingungen lesen.`}</p>
${signals.sections[0] ? `<p class="intuition-support"><strong>${renderDecodedText(signals.sections[0].heading)}:</strong> ${renderSemanticPlainText(signals.sections[0].paragraph)}</p>` : ''}
</div>

<div class="section-block intuition-card">
<h3>Woran du das Konzept erkennst</h3>
<ul class="intuition-bullets">
${recognitionItems.map((item) => `<li>${renderSemanticPlainText(item, { stripMarkup: true })}</li>`).join('')}
</ul>
</div>
</div>

<div class="section-block intuition-bridge">
<div class="intuition-bridge-head">
<span class="intuition-bridge-kicker">Transferpfad</span>
<h3 class="intuition-bridge-title">Vom Bild zur Theorie</h3>
<p class="intuition-bridge-copy">${intuition.bridge || entry?.motivation || `${chapter.title} verbindet ökonomische Intuition mit einem formalen Prüfungszugriff.`}</p>
</div>
${signals.sections[1] || signals.warnings[0] || (Array.isArray(intuition.exam) && intuition.exam.length) ? `<div class="intuition-detail-list">
${signals.sections[1] ? `<div class="intuition-detail">
<span class="intuition-detail-label">Theoretische Vertiefung</span>
<div class="intuition-detail-copy"><strong>${renderDecodedText(signals.sections[1].heading)}:</strong> ${renderSemanticPlainText(signals.sections[1].paragraph)}</div>
</div>` : ''}
${signals.warnings[0] ? `<div class="intuition-detail">
<span class="intuition-detail-label">Typischer Fehlgriff</span>
<div class="intuition-detail-copy"><strong>${renderDecodedText(signals.warnings[0].label)}:</strong> ${renderSemanticPlainText(signals.warnings[0].body)}</div>
</div>` : ''}
${renderExamPatterns(intuition)}
</div>` : ''}
</div>
</div>`;
}

function decorateConceptLinks() {
  document.querySelectorAll('.concept-links .cl-section').forEach((section) => {
    const label = section.querySelector('.cl-label')?.textContent?.trim().toLowerCase() || '';
    if (label.includes('setzt voraus')) {
      section.dataset.linkRole = 'prereq';
    } else if (label.includes('wird gebraucht')) {
      section.dataset.linkRole = 'dependent';
    }
  });
}

function stripExamTransferIntro() {
  document.querySelectorAll('.exam-drill-panel > p').forEach((intro) => intro.remove());
}

function ensureEconometricsHomeExamCard() {
  const content = document.getElementById('content');
  const actions = content?.querySelector('.home-action-row');
  if (!actions || actions.querySelector('[data-home-action="full-exams"]')) return;
  if (actions.querySelector('.home-action-card[onclick*="__showFullExamSelect"]')) return;

  const card = document.createElement('div');
  card.className = 'home-action-card';
  card.dataset.homeAction = 'full-exams';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.innerHTML = `
<div class="hac-title">Probeklausuren</div>
<div class="hac-desc">3 kursnahe 90-Minuten-Klausuren mit Musterlösungen</div>
<span class="home-action-sim-badge">Plattform-Simulation</span>`;

  const open = () => window.__showFullExamSelect?.();
  card.addEventListener('click', open);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });

  const quickExamCard = Array.from(actions.children).find((child) => child.textContent?.includes('Schnelltest'));
  if (quickExamCard?.nextSibling) {
    actions.insertBefore(card, quickExamCard.nextSibling);
  } else {
    actions.appendChild(card);
  }
}

function enhanceRenderedSurface(conceptId) {
  const content = document.getElementById('content');
  if (!content) return;

  content.querySelectorAll('.concept-motivation').forEach((node) => node.remove());

  const activeTab = document.querySelector('#tabRow .tab-btn.active')?.dataset.tab || '';
  if (conceptId) {
    content.dataset.tab = activeTab;
  } else {
    content.removeAttribute('data-tab');
  }

  decorateConceptLinks();
  stripExamTransferIntro();
  if (conceptId) {
    if (activeTab === 'aufgaben' && CONTENT[conceptId]) {
      const panel = content.querySelector('.panel.active');
      if (panel) {
        panel.outerHTML = buildMicroPracticePanel(conceptId);
      }
    }

    if (activeTab === 'intuition' && CONTENT[conceptId]) {
      const panel = content.querySelector('.panel.active');
      const intuitionMarkup = buildMicroIntuitionPanel(conceptId);
      if (panel && intuitionMarkup) {
        panel.outerHTML = intuitionMarkup;
      }
    }

    decorateConceptLinks();
  } else {
    ensureEconometricsHomeExamCard();
  }

  mountRPracticeBlocks(content);
  markRenderSettled(false);
  decorateSemanticMathSurfaces();
  Promise.resolve(renderMath(content)).finally(() => {
    decorateSemanticMathSurfaces();
    requestAnimationFrame(() => {
      decorateSemanticMathSurfaces();
      setTimeout(() => {
        decorateSemanticMathSurfaces();
        markRenderSettled(true);
      }, 60);
    });
  });
}

export function renderContent(conceptId, tab, initGraphFn) {
  baseRenderer.renderContent(conceptId, tab, initGraphFn);
  enhanceRenderedSurface(conceptId);
}

export function renderHome() {
  baseRenderer.renderHome();
  enhanceRenderedSurface(null);
}

export const {
  toggleSolution,
  toggleExamDrill,
  copyFormula,
  showDashboard,
  setRendererState,
  renderPracticePanel,
  checkTaskStep,
  revealTaskStep
} = baseRenderer;
