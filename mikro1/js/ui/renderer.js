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
import { formalizeMarkupString } from '../utils/formalMath.js';

const chapterMap = Object.fromEntries(CHAPTERS.map((chapter) => [chapter.id, chapter]));
let baseRenderer;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripHtml(value) {
  return decodeHtmlEntities(String(value ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim());
}

function decodeHtmlEntities(value) {
  if (typeof value !== 'string' || !value.includes('&')) return String(value ?? '');
  if (typeof document === 'undefined') {
    return value
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }
  const textarea = document.createElement('textarea');
  textarea.innerHTML = value;
  return textarea.value;
}

function renderDecodedText(value) {
  return formalizeMarkupString(decodeHtmlEntities(String(value ?? '')));
}

function renderSemanticPlainText(value, { stripMarkup = false } = {}) {
  const source = formalizeMarkupString(
    stripMarkup ? stripHtml(value) : decodeHtmlEntities(String(value ?? ''))
  );
  return semanticizeMarkupString(source);
}

const MATH_TEX_REGEX = /(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g;
const MATH_SCRIPT_CHARS = '₀₁₂₃₄₅₆₇₈₉ₐₑₒₓₘₙₚᵢⱼᵣᵤᵥₖ*′';
const MATH_SUPERSCRIPT_CHARS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const MATH_GREEK_CHARS = 'λμωπΔεαβρσθūȳℒ∞';
const MATH_JOINER_REGEX = /^[\s0-9.,%()|=<>≤≥+\-−·/∂→↔*^:]+$/u;
const MATH_TRAILING_NUMBER_REGEX = /^\s*(?:=|<|>|≤|≥)\s*\d+(?:[.,]\d+)?%?/u;
const MATH_RANGE_PATTERNS = [
  /€/gu,
  /\d+(?:[.,]\d+)?\s*€/gu,
  /\b(?:GRS|GRTS|MR|MC|AC|AVC|CV|EV|DWL|KR|PR|SE|EE|MZB|IK|BEO)\b/gu,
  new RegExp(String.raw`\b(?:MU|MP)(?:[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?`, 'gu'),
  /∑\s*[^\s,.;:!?]+(?:\s*[^\s,.;:!?]+)?\s*=\s*[-−]?\d+(?:[.,]\d+)?/gu,
  new RegExp(String.raw`(?:∂|d)\s*[${MATH_GREEK_CHARS}A-Za-z]+(?:_[A-Za-z0-9*]+|\^[A-Za-z0-9.,+\-]+|[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?\s*\/\s*(?:∂|d)\s*[${MATH_GREEK_CHARS}A-Za-z]+(?:_[A-Za-z0-9*]+|\^[A-Za-z0-9.,+\-]+|[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?(?:\s*(?:=|<|>|≤|≥)\s*(?:[-−]?\d+(?:[.,]\d+)?|[${MATH_GREEK_CHARS}A-Za-z]+(?:_[A-Za-z0-9*]+|[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?))?`, 'gu'),
  new RegExp(String.raw`(?:[${MATH_GREEK_CHARS}A-Za-z]+)(?:_[A-Za-z0-9*]+|\^[A-Za-z0-9.,+\-]+|\([^)]*\)|[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)+`, 'gu'),
  /(?:p(?:_1|_2|₁|₂)\s*\/\s*p(?:_1|_2|₁|₂)|w\s*\/\s*r|K\s*\/\s*L|L\s*\/\s*K|x(?:_1|_2|₁|₂)\s*\/\s*[ab]|[ab]\s*\/\s*[abk]|k\s*(?:=|<|>)\s*1)/gu,
  new RegExp(String.raw`[${MATH_GREEK_CHARS}](?:[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?`, 'gu'),
  new RegExp(String.raw`\b(?:x|p|u|v|e|h|m|q|w|r|L|K|C|F|y)(?:[${MATH_SCRIPT_CHARS}]+|\([^)]*\))`, 'gu'),
  /(?<![\p{L}\p{N}_])(?:m|p|w|r|L|K|C|F|y|q|u|v|e|h|x)(?![\p{L}\p{N}_])/gu
];

function collectMathRanges(text) {
  const ranges = [];

  MATH_RANGE_PATTERNS.forEach((pattern) => {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      const start = match.index ?? 0;
      const end = start + match[0].length;
      ranges.push({ start, end });
    }
  });

  if (!ranges.length) return [];

  ranges.sort((a, b) => a.start - b.start || a.end - b.end);

  const groups = [];
  ranges.forEach((range) => {
    const lastGroup = groups[groups.length - 1];
    if (!lastGroup) {
      groups.push({ ...range });
      return;
    }

    const gap = text.slice(lastGroup.end, range.start);
    if (range.start <= lastGroup.end || !gap || MATH_JOINER_REGEX.test(gap)) {
      lastGroup.end = Math.max(lastGroup.end, range.end);
      return;
    }

    groups.push({ ...range });
  });

  groups.forEach((group, index) => {
    const nextGroup = groups[index + 1];
    const trailing = nextGroup ? text.slice(group.end, nextGroup.start) : text.slice(group.end);
    if (!nextGroup) {
      const trailingNumber = trailing.match(MATH_TRAILING_NUMBER_REGEX);
      if (trailingNumber) {
        group.end += trailingNumber[0].length;
      }
    }
  });

  return groups;
}

function hasSemanticMathToken(value) {
  return collectMathRanges(value).length > 0;
}

function buildSemanticMathFragment(text) {
  const fragment = document.createDocumentFragment();
  const groups = collectMathRanges(text);
  if (!groups.length) {
    fragment.appendChild(document.createTextNode(text));
    return { fragment, changed: false };
  }

  let cursor = 0;
  groups.forEach((group) => {
    if (group.start > cursor) {
      fragment.appendChild(document.createTextNode(text.slice(cursor, group.start)));
    }
    const span = document.createElement('span');
    span.className = 'math-semantic';
    span.textContent = text.slice(group.start, group.end);
    fragment.appendChild(span);
    cursor = group.end;
  });

  if (cursor < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(cursor)));
  }

  return { fragment, changed: true };
}

function buildSemanticMathMarkup(text) {
  const groups = collectMathRanges(text);
  if (!groups.length) {
    return escapeHtml(text);
  }

  let cursor = 0;
  let html = '';
  groups.forEach((group) => {
    if (group.start > cursor) {
      html += escapeHtml(text.slice(cursor, group.start));
    }
    html += `<span class="math-semantic">${escapeHtml(text.slice(group.start, group.end))}</span>`;
    cursor = group.end;
  });
  if (cursor < text.length) {
    html += escapeHtml(text.slice(cursor));
  }

  return html;
}

function semanticizeTextNode(node) {
  const rawValue = node.textContent;
  const value = decodeHtmlEntities(rawValue);
  if (!value || !value.trim()) return false;

  const segments = value.split(MATH_TEX_REGEX);
  const hasMath = segments.some((segment) => segment && !segment.startsWith('$') && hasSemanticMathToken(segment));
  if (!hasMath && value === rawValue) {
    return false;
  }

  const fragment = document.createDocumentFragment();
  let changed = value !== rawValue;
  segments.forEach((segment) => {
    if (!segment) return;
    if (segment.startsWith('$')) {
      fragment.appendChild(document.createTextNode(segment));
      return;
    }
    const processed = buildSemanticMathFragment(segment);
    fragment.appendChild(processed.fragment);
    changed ||= processed.changed;
  });

  if (!changed) return false;
  node.replaceWith(fragment);
  return true;
}

function decodeTextEntitiesInPlace(root) {
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const value = node.textContent;
      if (!value || !value.includes('&')) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, textarea, input, select, option')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const decoded = decodeHtmlEntities(node.textContent);
    if (decoded !== node.textContent) {
      node.textContent = decoded;
    }
  });
}

function decorateSemanticMath(root) {
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const value = node.textContent;
      if (!value || !value.trim()) return NodeFilter.FILTER_REJECT;

      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;

      if (parent.closest('mjx-container, script, style, textarea, input, select, option, canvas, svg, .math-block, .math-inline, .math-semantic')) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  textNodes.forEach((node) => {
    semanticizeTextNode(node);
  });
}

function semanticizeElementContent(element) {
  if (!element || !element.innerHTML?.trim()) return;
  decodeTextEntitiesInPlace(element);
  decorateSemanticMath(element);
}

function semanticizeMarkupString(markup) {
  const source = decodeHtmlEntities(String(markup ?? ''));
  if (!source || !hasSemanticMathToken(source.replace(/<[^>]+>/g, ' ').replace(MATH_TEX_REGEX, ' '))) {
    return source;
  }
  return source
    .split(/(<[^>]+>|\$\$[\s\S]+?\$\$|\$[^$]+\$)/g)
    .map((segment) => {
      if (!segment) return '';
      if (segment.startsWith('<') || segment.startsWith('$')) return segment;
      return buildSemanticMathMarkup(decodeHtmlEntities(segment));
    })
    .join('');
}

let semanticDataPrepared = false;
function semanticizeDataStrings(node, seen = new WeakSet()) {
  if (!node || typeof node !== 'object') return;
  if (seen.has(node)) return;
  seen.add(node);

  if (Array.isArray(node)) {
    node.forEach((item, index) => {
      if (typeof item === 'string') {
        node[index] = semanticizeMarkupString(item);
      } else {
        semanticizeDataStrings(item, seen);
      }
    });
    return;
  }

  Object.keys(node).forEach((key) => {
    const value = node[key];
    if (typeof value === 'string') {
      node[key] = formalizeMarkupString(value);
    } else if (value && typeof value === 'object') {
      semanticizeDataStrings(value, seen);
    }
  });
}

function prepareSemanticMathData() {
  if (semanticDataPrepared) return;
  semanticDataPrepared = true;
  semanticizeDataStrings(CONTENT);
  semanticizeDataStrings(INTUITION);
}

function decorateSemanticMathSurfaces() {
  [
    '#content h1',
    '#content .section-block p',
    '#content .section-block li',
    '#content .formula-card .f-desc',
    '#content .formula-card .f-var-def',
    '#content .prob-text',
    '#content .step-text',
    '#content .result-badge',
    '#content .exam-drill-copy',
    '#content .exam-drill-steps li',
    '#content .intuition-lead',
    '#content .intuition-support',
    '#content .intuition-bullets li',
    '#content .intuition-bridge-copy',
    '#content .intuition-detail-copy',
    '#content .intuition-pattern-then',
    '#content .graph-info',
    '#content .graph-info strong',
    '#content .graph-info .gi-eq',
    '#content .graph-info .gi-label',
    '#content .mastery-check h3',
    '#content .mastery-item',
    '#content .mastery-bar-label',
    '#rightPanel .rp-conn',
    '#rightPanel .rp-mistake .fix',
    '#rightPanel .rp-f-name',
    '#sidebar .nav-item > span:not(.num):not(.mastery)'
  ].forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      semanticizeElementContent(element);
    });
  });

  decorateSemanticMath(document.getElementById('content'));
  decorateSemanticMath(document.getElementById('rightPanel'));
  decorateSemanticMath(document.getElementById('sidebar'));
}

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
  checkAnswer: checkAnswerWithTolerance
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
<div class="exam-drill-copy">${renderSemanticPlainText(section.paragraph)}</div>
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
<div class="exam-drill-copy">${renderSemanticPlainText(pattern.if)}</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Saubere Reaktion</span>
<div class="exam-drill-copy">${renderSemanticPlainText(pattern.then)}</div>
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
<div class="math-block">${formula.eq}</div>
${formula.desc ? `<p>${formula.desc}</p>` : ''}
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

function ensureMikroHomeExamCard() {
  const content = document.getElementById('content');
  const actions = content?.querySelector('.home-action-row');
  if (!actions || actions.querySelector('[data-home-action="full-exams"]')) return;
  // `createRenderer` already adds a Probeklausuren card when `__showFullExamSelect` exists.
  if (actions.querySelector('.home-action-card[onclick*="__showFullExamSelect"]')) return;

  const card = document.createElement('div');
  card.className = 'home-action-card';
  card.dataset.homeAction = 'full-exams';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.innerHTML = `
<div class="hac-title">Probeklausuren</div>
<div class="hac-desc">Vollständige Mikro-I-Klausuren mit Musterlösungen</div>`;

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
    ensureMikroHomeExamCard();
  }

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
