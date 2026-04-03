const HTML_OR_TEX_SEGMENT_REGEX = /(<[^>]+>|\$\$[\s\S]+?\$\$|\$[^$]+\$)/g;
const TEX_SEGMENT_REGEX = /(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g;

const SUBSCRIPT_MAP = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
  'ᵢ': 'i',
  'ₘ': 'm',
  'ₖ': 'k',
  'ₗ': 'l',
  'ᵥ': 'v',
  'ₚ': 'p'
};

const SUPERSCRIPT_MAP = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9'
};

const SUBSCRIPT_CHARS = '₀₁₂₃₄₅₆₇₈₉ᵢₘₖₗᵥₚ';
const SUPERSCRIPT_CHARS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const GREEK_CHARS = 'πλσωαβμρσθεūȳℒε';
const DERIVATIVE_SYMBOL_SOURCE = String.raw`(?:ℒ|[${GREEK_CHARS}A-Za-z]+)(?:_[A-Za-z0-9]+|[${SUBSCRIPT_CHARS}${SUPERSCRIPT_CHARS}]+|\*)?`;

const TOKEN_SOURCE = String.raw`(?:GRS|GRTS|MR|MC|AC|AVC|CV|EV|DWL|SE|EE|MZB|MU(?:_[A-Za-z0-9]+|[${SUBSCRIPT_CHARS}]+|[${SUPERSCRIPT_CHARS}]+)?|MP(?:_[A-Za-z0-9]+|[${SUBSCRIPT_CHARS}]+|[${SUPERSCRIPT_CHARS}]+)?|[FupCMyxLKwrqmveh](?:_[A-Za-z0-9]+|[${SUBSCRIPT_CHARS}]+|[${SUPERSCRIPT_CHARS}]+|\([^)]*\)|\*)?|[${GREEK_CHARS}](?:[${SUPERSCRIPT_CHARS}]+)?)`;
const STANDALONE_TOKENS = [
  /\b(?:GRS|GRTS|MR|MC|AC|AVC|CV|EV|DWL|SE|EE|MZB)\b/gu,
  new RegExp(String.raw`(?:MU|MP)(?:_[A-Za-z0-9]+|[${SUBSCRIPT_CHARS}]+|[${SUPERSCRIPT_CHARS}]+)?`, 'gu'),
  new RegExp(String.raw`(?<![\p{L}\p{N}$\\])(?:[FupCMyxLKwrqmveh](?:_[A-Za-z0-9]+|[${SUBSCRIPT_CHARS}]+|[${SUPERSCRIPT_CHARS}]+|\([^)]*\)|\*)?|[${GREEK_CHARS}](?:[${SUPERSCRIPT_CHARS}]+)?)(?![\p{L}\p{N}])`, 'gu')
];

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

function normalizeSubscripts(token) {
  return token.replace(new RegExp(String.raw`([A-Za-z${GREEK_CHARS}]+)([${SUBSCRIPT_CHARS}]+)`, 'gu'), (_, base, suffix) => {
    const normalized = Array.from(suffix).map((char) => SUBSCRIPT_MAP[char] || char).join('');
    return `${base}_${normalized.length > 1 ? `{${normalized}}` : normalized}`;
  });
}

function normalizeSuperscripts(token) {
  return token.replace(new RegExp(String.raw`([A-Za-z${GREEK_CHARS}0-9])([${SUPERSCRIPT_CHARS}]+)`, 'gu'), (_, base, suffix) => {
    const normalized = Array.from(suffix).map((char) => SUPERSCRIPT_MAP[char] || char).join('');
    return `${base}^{${normalized}}`;
  });
}

function normalizeDecorators(token) {
  return token
    .replace(/_min\b/gu, '_{\\min}')
    .replace(/_vk\b/gu, '_{vk}')
    .replace(/_m\b/gu, '_m')
    .replace(/_c\b/gu, '_c')
    .replace(/_0\b/gu, '_0')
    .replace(/_1\b/gu, '_1')
    .replace(/_2\b/gu, '_2')
    .replace(new RegExp(String.raw`([A-Za-z${GREEK_CHARS}])\*`, 'gu'), '$1^*');
}

function normalizeMathExpression(expression) {
  return normalizeDecorators(
    normalizeSuperscripts(
      normalizeSubscripts(
        String(expression ?? '')
          .replace(/[−–]/g, '-')
          .replace(/≤/g, String.raw`\le `)
          .replace(/≥/g, String.raw`\ge `)
          .replace(/→/g, String.raw`\to `)
          .replace(/·/g, String.raw`\cdot `)
          .replace(/ℒ/g, String.raw`\mathcal{L}`)
          .replace(/∑/g, String.raw`\sum `)
          .replace(/∞/g, String.raw`\infty `)
          .replace(/\bmin(?=\s*[\(\{])/g, String.raw`\min`)
          .replace(/\bmax(?=\s*[\(\{])/g, String.raw`\max`)
          .replace(/\s+/g, ' ')
          .trim()
      )
    )
  );
}

function wrapMath(expression) {
  return `$${normalizeMathExpression(expression)}$`;
}

function applyExpressionReplacements(text) {
  const replacements = [
    {
      pattern: new RegExp(
        String.raw`(?<![\p{L}\p{N}$\\])((?:${DERIVATIVE_SYMBOL_SOURCE}\s*=\s*)?(?:∂|d)\s*${DERIVATIVE_SYMBOL_SOURCE}\s*\/\s*(?:∂|d)\s*${DERIVATIVE_SYMBOL_SOURCE}(?:\s*(?:=|<|>|≤|≥)\s*(?:[-−]?\d+(?:[.,]\d+)?|${DERIVATIVE_SYMBOL_SOURCE}))?)(?![\p{L}\p{N}])`,
        'gu'
      ),
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])x(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢ]+|\*)?\s*=\s*[−-]?\s*\((?:∂|d)[^,.;:!?]+\)\s*\/\s*\((?:∂|d)[^,.;:!?]+\)(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])∑\s*[^\s,.;:!?]+(?:\s*[^\s,.;:!?]+)?\s*=\s*[-−]?\d+(?:[.,]\d+)?(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])u\s*=\s*a\s*x(?:_1|₁)\s*\+\s*b\s*x(?:_2|₂)(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])u\s*=\s*min\s*\(\s*x(?:_1|₁)\s*\/\s*a\s*,\s*x(?:_2|₂)\s*\/\s*b\s*\)(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])x(?:_1|₁)\s*\/\s*a\s*=\s*x(?:_2|₂)\s*\/\s*b(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])(GRTS|GRS)\s*=\s*(w|r|a|b|p(?:_1|_2|₁|₂)|MP_L|MP_K|MU_1|MU_2)\s*\/\s*(w|r|a|b|p(?:_1|_2|₁|₂)|MP_L|MP_K|MU_1|MU_2)(?![\p{L}\p{N}])/gu,
      replace: (_, lhs, num, den) => wrapMath(`${lhs} = \\frac{${num}}{${den}}`)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])(?:p(?:_1|₁)\s*\/\s*p(?:_2|₂)|w\s*\/\s*r|K\s*\/\s*L|L\s*\/\s*K)\s*(?:=|<|>|≤|≥)\s*(?:a\s*\/\s*b|[-−]?\d+(?:[.,]\d+)?)(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])k\s*(?:=|<|>)\s*1(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: new RegExp(String.raw`(?<![\p{L}\p{N}$\\])(GRTS)\s*=\s*(MP_L|MPₗ)\s*\/\s*(MP_K|MPₖ)(?![\p{L}\p{N}])`, 'gu'),
      replace: (_, lhs, num, den) => wrapMath(`${lhs} = \\frac{${num}}{${den}}`)
    },
    {
      pattern: new RegExp(String.raw`(?<![\p{L}\p{N}$\\])(GRS)\s*=\s*(p(?:_1|₁))\s*\/\s*(p(?:_2|₂))(?![\p{L}\p{N}])`, 'gu'),
      replace: (_, lhs, num, den) => wrapMath(`${lhs} = \\frac{${num}}{${den}}`)
    },
    {
      pattern: new RegExp(String.raw`(?<![\p{L}\p{N}$\\])(GRTS|GRS|MR|MC|AC|AVC|CV|EV|DWL|SE|EE|MZB|MU(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢ]+)?|MP(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢ]+)?|[FupCMyxLKwrqmveh](?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢₘₖₗᵥₚ]+|\([^)]*\)|\*)?|[πλσωαβμūȳ])\s*(=|<|>|\\le|\\ge|≤|≥)\s*(GRTS|GRS|MR|MC|AC|AVC|CV|EV|DWL|SE|EE|MZB|MU(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢ]+)?|MP(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢ]+)?|[FupCMyxLKwrqmveh](?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢₘₖₗᵥₚ]+|\([^)]*\)|\*)?|[πλσωαβμūȳ]|\d+(?:[.,]\d+)?(?:\s*€)?)(?![\p{L}\p{N}])`, 'gu'),
      replace: (_, lhs, rel, rhs) => wrapMath(`${lhs} ${rel} ${rhs}`)
    },
    {
      pattern: new RegExp(String.raw`(?<![\p{L}\p{N}$\\])(${TOKEN_SOURCE})\s*\/\s*(${TOKEN_SOURCE})(?![\p{L}\p{N}])`, 'gu'),
      replace: (_, numerator, denominator) => wrapMath(String.raw`\frac{${numerator}}{${denominator}}`)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])p\s*=\s*a\s*-\s*y(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])C\s*=\s*c\s*·\s*y²(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])(?:F|f)\s*=\s*[LK]\^[A-Za-z0-9.,]+\s*(?:·\s*)?[LK]\^[A-Za-z0-9.,]+(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])(?:F|f)\s*\(\s*λ\s*[LK]\s*,\s*λ\s*[LK]\s*\)\s*=\s*λ\^[A-Za-z0-9.,]+\s*·\s*(?:F|f)\s*\(\s*[LK]\s*,\s*[LK]\s*\)(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])(?:F|u|p|C|MC|AC|MR|y)\([^)]*\)(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    }
  ];

  return replacements.reduce((result, { pattern, replace }) => result.replace(pattern, replace), text);
}

function applyStandaloneTokenWrapping(text) {
  return STANDALONE_TOKENS.reduce((result, pattern) => (
    result.replace(pattern, (token) => wrapMath(token))
  ), text);
}

function mergeAdjacentInlineMath(text) {
  let result = String(text ?? '');
  let previous = '';
  const adjacentInlineMath = /\$([^$]+)\$\s*\$([^$]+)\$/g;
  while (result !== previous) {
    previous = result;
    result = result.replace(adjacentInlineMath, (_, left, right) => `$${left} ${right}$`);
  }
  return result;
}

function formalizePlainSegment(text) {
  const decoded = decodeHtmlEntities(String(text ?? ''));
  const withExpressions = applyExpressionReplacements(decoded);
  return mergeAdjacentInlineMath(
    withExpressions
    .split(TEX_SEGMENT_REGEX)
    .map((segment) => {
      if (!segment) return '';
      if (segment.startsWith('$')) return segment;
      return applyStandaloneTokenWrapping(segment);
    })
    .join('')
  );
}

export function formalizeMarkupString(markup) {
  return String(markup ?? '')
    .split(HTML_OR_TEX_SEGMENT_REGEX)
    .map((segment) => {
      if (!segment) return '';
      if (segment.startsWith('<') || segment.startsWith('$')) return segment;
      return formalizePlainSegment(segment);
    })
    .join('');
}
