import { createRenderer } from '../../../assets/js/portal-core/ui/renderer.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { CHAPTERS, CONTENT } from '../data/chapters.js';
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

const chapterMap = Object.fromEntries(CHAPTERS.map((chapter) => [chapter.id, chapter]));

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
  stepProblems: STEP_PROBLEMS,
  checkAnswer: checkAnswerWithTolerance
});

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripHtml(value) {
  return String(value ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
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
    .map(([key, value]) => `<li><strong>$${key}$</strong>: ${value}</li>`)
    .join('')}</ul>`;
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
<div class="step-text">${step.text || ''}</div>
${step.eq ? `<div class="math-block">${step.eq}</div>` : ''}
</div>
</div>`).join('')}
<div class="result-badge">Ergebnis: ${task.result || 'Arbeite das Ergebnis formal zu Ende aus.'}</div>`
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
<div class="math-block">${formula.eq}</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Bedeutung</span>
<div class="exam-drill-copy">${formula.desc || `Diese Beziehung ist der formale Einstieg in ${chapter.title}.`}</div>
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
<div class="exam-drill-copy">${escapeHtml(section.paragraph)}</div>
</div>
${formula ? `<div class="exam-drill-line">
<span class="exam-drill-key">Formale Rückbindung</span>
<div class="math-block">${formula.eq}</div>
</div>` : ''}`
    });
  }

  patterns.slice(0, 2).forEach((pattern, index) => {
    drills.push({
      tag: `Klausurmuster ${index + 1}`,
      question: `Wenn in der Prüfung ${pattern.if} auftaucht, welcher Zugriff ist dann der richtige?`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Erstes Signal</span>
<div class="exam-drill-copy">${pattern.if}</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Saubere Reaktion</span>
<div class="exam-drill-copy">${pattern.then}</div>
</div>
${formula ? `<div class="exam-drill-line">
<span class="exam-drill-key">Formel, die du notieren kannst</span>
<div class="math-block">${formula.eq}</div>
</div>` : ''}`
    });
  });

  tasks.slice(0, 3).forEach((task, index) => {
    drills.push({
      tag: `Prüfungsfrage ${index + 1}`,
      question: `Wie würdest du die klausurnahe Aufgabe zu "${chapter.title}" lösen? ${task.text}`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Lösungslogik</span>
<ol class="exam-drill-steps">${(task.steps || []).map((step) => `<li>${step.text || ''}${step.eq ? `<div class="math-block">${step.eq}</div>` : ''}</li>`).join('')}</ol>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Prüfungsresultat</span>
<div class="result-badge">${task.result || 'Arbeite das Ergebnis formal aus.'}</div>
</div>`
    });
  });

  if (warning) {
    drills.push({
      tag: 'Fehlerkontrolle',
      question: `Welcher typische Fehler kostet bei "${chapter.title}" schnell Punkte und wie vermeidest du ihn?`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Fehlerbild</span>
<div class="exam-drill-copy"><strong>${escapeHtml(warning.label)}:</strong> ${escapeHtml(warning.body)}</div>
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
<div class="exam-drill-copy"><strong>${escapeHtml(secondSection.heading)}:</strong> ${escapeHtml(secondSection.paragraph)}</div>
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

  return `<div class="exam-drill-panel">
<div class="practice-section-header">Prüfungstransfer</div>
<div class="exam-drill-grid">
${drills.map((drill, index) => {
  const drillId = `${chapter.id.replace(/[^a-zA-Z0-9_]/g, '_')}_${index}`;
  return renderQuestionCard({
    label: `Prüfungsfrage ${index + 1}`,
    question: drill.question,
    buttonId: `examDrillBtn_${drillId}`,
    answerId: `examDrill_${drillId}`,
    toggleCall: `window.__toggleExamDrill('${drillId}')`,
    cardClass: 'exam-drill-card',
    answerMarkup: `<h4>Musterlösung</h4>
${drill.tag ? `<div class="exam-drill-meta">${drill.tag}</div>` : ''}
<div class="exam-drill-solution">${drill.answer}</div>`
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
<h3>Arbeitsmodus</h3>
<p>Arbeite zuerst den Rechenkern sauber aus: Definition, Bedingung, Umformung, Ergebnis. Danach prüfst du im Prüfungstransfer, ob du denselben Zugriff ohne Leitplanken wiedergeben kannst.</p>
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
  return `<div class="exam-pattern"><h4>Klausurmuster</h4>
${patterns.map((pattern) => `<div class="exam-trigger">
<span class="trigger-if">Wenn:</span>
<span class="trigger-then">${pattern.if}</span>
<span class="trigger-arrow" aria-hidden="true">→</span>
<span class="trigger-then">${pattern.then}</span>
</div>`).join('')}
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
<div class="math-block">${formula.eq}</div>
${formula.desc ? `<p>${formula.desc}</p>` : ''}
</div>
</div>` : ''}
</div>

<div class="intuition-grid">
<div class="section-block intuition-card">
<h3>Denkbild</h3>
<p>${intuition.analogy || entry?.motivation || `${chapter.title} lässt sich am besten als geordnete Entscheidung unter gegebenen Bedingungen lesen.`}</p>
${signals.sections[0] ? `<p class="intuition-support"><strong>${escapeHtml(signals.sections[0].heading)}:</strong> ${escapeHtml(signals.sections[0].paragraph)}</p>` : ''}
</div>

<div class="section-block intuition-card">
<h3>Woran du das Konzept erkennst</h3>
<ul class="intuition-bullets">
${recognitionItems.map((item) => `<li>${escapeHtml(stripHtml(item))}</li>`).join('')}
</ul>
</div>
</div>

<div class="section-block intuition-bridge">
<div class="intuition-bridge-head">
<span class="intuition-bridge-kicker">Transferpfad</span>
<h3 class="intuition-bridge-title">Vom Bild zur Theorie</h3>
<p class="intuition-bridge-copy">${intuition.bridge || entry?.motivation || `${chapter.title} verbindet ökonomische Intuition mit einem formalen Prüfungszugriff.`}</p>
</div>
${signals.sections[1] || signals.warnings[0] ? `<div class="intuition-detail-list">
${signals.sections[1] ? `<div class="intuition-detail">
<span class="intuition-detail-label">Theoretische Vertiefung</span>
<div class="intuition-detail-copy"><strong>${escapeHtml(signals.sections[1].heading)}:</strong> ${escapeHtml(signals.sections[1].paragraph)}</div>
</div>` : ''}
${signals.warnings[0] ? `<div class="intuition-detail">
<span class="intuition-detail-label">Typischer Fehlgriff</span>
<div class="intuition-detail-copy"><strong>${escapeHtml(signals.warnings[0].label)}:</strong> ${escapeHtml(signals.warnings[0].body)}</div>
</div>` : ''}
</div>` : ''}
${renderExamPatterns(intuition)}
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

function enhanceRenderedSurface(conceptId) {
  const content = document.getElementById('content');
  if (!content) return;

  const activeTab = document.querySelector('#tabRow .tab-btn.active')?.dataset.tab || '';
  if (conceptId) {
    content.dataset.tab = activeTab;
  } else {
    content.removeAttribute('data-tab');
  }

  decorateConceptLinks();
  stripExamTransferIntro();

  if (!conceptId) return;

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
  renderMath(content);
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
