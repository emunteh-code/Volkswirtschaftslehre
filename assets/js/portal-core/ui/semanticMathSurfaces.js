import { renderTeachingProse } from './teachingProse.js';

const MATH_TEX_REGEX = /(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g;
const MATH_SCRIPT_CHARS = '₀₁₂₃₄₅₆₇₈₉ₐₑₒₓₘₙₚᵢⱼᵣᵤᵥₖ*′';
const MATH_SUPERSCRIPT_CHARS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const MATH_GREEK_CHARS = 'λμωπΔεαβρσθūȳℒ∞';
const MATH_JOINER_REGEX = /^[\s0-9.,%()|=<>≤≥+\-−·/∂→↔*^:]+$/u;
const MATH_TRAILING_NUMBER_REGEX = /^\s*(?:=|<|>|≤|≥)\s*\d+(?:[.,]\d+)?%?/u;
const SEMANTIC_MATH_HEADER_SKIP_SELECTOR =
  'h1, h2, h3, h4, h5, h6, .concept-title, .concept-subtitle, .concept-tag, .platform-chrome-badge, .formula-tab-section-head h3, .klausurmethodik-accordion-title, .klausurmethodik-card-title, .klausurmethodik-heading, .klausurmethodik-label, .f-label, .formula-card-label, .formula-card-title, .formula-herleitung-title, .formula-einsatzgrenzen-title, .formula-einsatzgrenzen-group-title, .quellen-panel-layer-k, .quellen-panel-anchor-group-label, .graph-panel-title, summary, [role="tab"]';

const SEMANTIC_MATH_SKIP_SELECTOR =
  'button, a, .btn, .nav-item, .breadcrumb, .breadcrumb-link, .concept-motivation, .concept-motivation-toggle, .concept-pill-row, .lp-tile, .lp-hero-btn, .tab-row, #tabRow, .home-action-card, .home-action-row, .home-card, .home-continue-card, .home-mini-card, .home-mini-grid, .hero, .stat-row, .hac-title, .hac-desc, .hc-title, .hcc-title, .mastery-check button, .source-provenance, .source-companion, .empty-state-actions, [role="button"], #content, .content-area, .theorie, .theorie-panel, .theory-tab-panel, .theory-recipe-section, .theory-recipe-card, .theory-recipe-body, .section-block, .formula-tab-panel, .formula-tab-section, .formula-card, .formula-grid, .formula-support-layer, .formula-support-card, .formula-herleitung-block, .formula-herleitung-anchor, .formula-herleitung-math, .formula-einsatzgrenzen-block, .formula-section-accordion-body, .math-block, .math-inline, .warn-box, .warning-card, .f-eq, .f-desc, .f-body, .f-variables, .merksatz';

const LATEX_COMMAND_IN_TEXT = /\\(?:le|ge|leq|geq|iff|text|frac|left|right|qquad|cdot|sum|ln|Delta|min|max|Rightarrow)\b/;

export function shouldSkipSemanticMath(el) {
  if (!el?.closest) return true;
  return Boolean(el.closest(`${SEMANTIC_MATH_SKIP_SELECTOR}, ${SEMANTIC_MATH_HEADER_SKIP_SELECTOR}`));
}

function isInsideSemanticSkipZone(node) {
  const parent = node?.parentElement;
  if (!parent) return true;
  return shouldSkipSemanticMath(parent);
}

function isSingleLetterInsideWord(text, start, end) {
  const slice = text.slice(start, end);
  if (slice.length !== 1 || !/^[A-Za-z]$/.test(slice)) return false;
  const before = start > 0 ? text[start - 1] : '';
  const after = end < text.length ? text[end] : '';
  return /[\p{L}\p{N}_]/u.test(before) || /[\p{L}\p{N}_]/u.test(after);
}

export const MIKRO1_EXTRA_MATH_RANGE_PATTERNS = [

];

export const OEKONOMETRIE_EXTRA_MATH_RANGE_PATTERNS = [
  /(?:β̂|σ̂|ρ̂|ŷ|û|H₀|H₁|u₀|y₀|x₀|R²|R_j²)/gu,
  /X'\s*X/gu,
  /X'\s*y/gu,
  /\b(?:OLS|GLS|WLS|HAC|VIF|TSS|ESS|SSR|DW)\b/gu
];

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

function stripHtml(value) {
  return decodeHtmlEntities(String(value ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim());
}

export function createSemanticMathSurfaces({
  formalizeMarkupString,
  extraRangePatterns = [],
  contentData,
  intuitionData
}) {
  let activeMathRangePatterns = [
    /€/gu,
    /\d+(?:[.,]\d+)?\s*€/gu,
    /\b(?:GRS|GRTS|MR|MC|AC|AVC|CV|EV|DWL|KR|PR|SE|EE|MZB|IK|BEO)\b/gu,
    new RegExp(String.raw`\b(?:MU|MP)(?:[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?`, 'gu'),
    /∑\s*[^\s,.;:!?]+(?:\s*[^\s,.;:!?]+)?\s*=\s*[-−]?\d+(?:[.,]\d+)?/gu,
    new RegExp(String.raw`(?:∂|d)\s*[${MATH_GREEK_CHARS}A-Za-z]+(?:_[A-Za-z0-9*]+|\^[A-Za-z0-9.,+\-]+|[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?\s*\/\s*(?:∂|d)\s*[${MATH_GREEK_CHARS}A-Za-z]+(?:_[A-Za-z0-9*]+|\^[A-Za-z0-9.,+\-]+|[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?(?:\s*(?:=|<|>|≤|≥)\s*(?:[-−]?\d+(?:[.,]\d+)?|[${MATH_GREEK_CHARS}A-Za-z]+(?:_[A-Za-z0-9*]+|[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?))?`, 'gu'),
    new RegExp(String.raw`(?:[${MATH_GREEK_CHARS}A-Za-z]+)(?:_[A-Za-z0-9*]+|\^[A-Za-z0-9.,+\-]+|\([^)]*\)|[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)+`, 'gu'),
    /(?:p(?:_1|_2|₁|₂)\s*\/\s*p(?:_1|_2|₁|₂)|w\s*\/\s*r|K\s*\/\s*L|L\s*\/\s*K|x(?:_1|_2|₁|₂)\s*\/\s*[ab]|[ab]\s*\/\s*[abk]|k\s*(?:=|<|>)\s*1)/gu,
    new RegExp(String.raw`[${MATH_GREEK_CHARS}](?:[${MATH_SCRIPT_CHARS}${MATH_SUPERSCRIPT_CHARS}]+)?`, 'gu'),
    new RegExp(String.raw`\b(?:x|p|u|v|e|h|m|q|w|r|L|K|C|F|y|X|Y|R|S|T)(?:[${MATH_SCRIPT_CHARS}]+|\([^)]*\)|')?`, 'gu'),
    /(?<![\p{L}\p{N}_])(?:m|p|w|r|L|K|C|F|y|q|u|v|e|h|x|X)(?![\p{L}\p{N}_])/gu,
    ...extraRangePatterns
  ];

  function renderSemanticPlainText(value, options = {}) {
    const raw = options.stripMarkup ? stripHtml(value) : decodeHtmlEntities(String(value ?? ''));
    if (/\\texttt\{/.test(raw)) {
      return renderTeachingProse(value, options);
    }
    const source = formalizeMarkupString(raw);
    return semanticizeMarkupString(source);
  }

  function collectMathRanges(text) {
    const ranges = [];

    activeMathRangePatterns.forEach((pattern) => {
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

    return groups.filter((group) => !isSingleLetterInsideWord(text, group.start, group.end));
  }

  function hasSemanticMathToken(value) {
    if (LATEX_COMMAND_IN_TEXT.test(value)) return false;
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
      span.setAttribute('aria-hidden', 'true');
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
      html += `<span class="math-semantic" aria-hidden="true">${escapeHtml(text.slice(group.start, group.end))}</span>`;
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

        if (
          parent.closest(
            'mjx-container, .MathJax, script, style, textarea, input, select, option, canvas, svg, .math-block, .math-inline, .math-semantic'
          )
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        if (LATEX_COMMAND_IN_TEXT.test(value)) {
          return NodeFilter.FILTER_REJECT;
        }

        if (isInsideSemanticSkipZone(node)) {
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
    if (shouldSkipSemanticMath(element)) return;
    const plainAccessible = stripHtml(element.textContent);
    decodeTextEntitiesInPlace(element);
    decorateSemanticMath(element);
    if (element.querySelector('.math-semantic') && plainAccessible) {
      element.setAttribute('aria-label', plainAccessible);
    }
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
          node[index] = formalizeMarkupString(item);
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
    if (contentData) semanticizeDataStrings(contentData);
    if (intuitionData) semanticizeDataStrings(intuitionData);
  }

  function decorateSemanticMathSurfaces() {
    [
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
      '#rightPanel .rp-mistake--rail .rp-mistake-body',
      '#rightPanel .rp-f-name'
    ].forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        semanticizeElementContent(element);
      });
    });

    decorateSemanticMath(document.getElementById('rightPanel'));
  }
  return {
    prepareSemanticMathData,
    decorateSemanticMathSurfaces,
    semanticizeMarkupString,
    semanticizeElementContent,
    renderSemanticPlainText,
    renderDecodedText: (value) => formalizeMarkupString(decodeHtmlEntities(String(value ?? '')))
  };
}
