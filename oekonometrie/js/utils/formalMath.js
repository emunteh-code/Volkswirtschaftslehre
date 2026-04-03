const HTML_OR_TEX_SEGMENT_REGEX = /(<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>|<[^>]+>|\$\$[\s\S]+?\$\$|\$[^$]+\$)/g;
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
  'ₚ': 'p',
  'ₜ': 't',
  'ₛ': 's',
  '₀': '0'
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

const SUPERSCRIPT_CHARS = '⁰¹²³⁴⁵⁶⁷⁸⁹';

const TOKEN_SOURCE = String.raw`(?:GRS|GRTS|MR|MC|AC|AVC|CV|EV|DWL|SE|EE|MZB|OLS|GLS|WLS|HAC|VIF|TSS|ESS|SSR|DW|MU(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢ]+|[${SUPERSCRIPT_CHARS}]+)?|MP(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢ]+|[${SUPERSCRIPT_CHARS}]+)?|[FupCMyxLKwrqmvehXYRStHβσρΩŷû](?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢₘₖₗᵥₚₜₛ]+|[${SUPERSCRIPT_CHARS}]+|\([^)]*\)|\*|')?|[πλσωαβμūȳ](?:[${SUPERSCRIPT_CHARS}]+)?)`;
const STANDALONE_TOKENS = [
  /\b(?:GRS|GRTS|MR|MC|AC|AVC|CV|EV|DWL|SE|EE|MZB|OLS|GLS|WLS|HAC|VIF|TSS|ESS|SSR|DW)\b/gu,
  new RegExp(String.raw`(?:MU|MP)(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢ]+|[${SUPERSCRIPT_CHARS}]+)?`, 'gu'),
  /(?:β̂|σ̂|ρ̂|ŷ|û|H₀|H₁|u₀|y₀|x₀)/gu,
  new RegExp(String.raw`(?<![\p{L}\p{N}$\\])(?:[FupCMyxLKwrqmvehXYRStHβσρΩŷû](?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉ᵢₘₖₗᵥₚₜₛ]+|[${SUPERSCRIPT_CHARS}]+|\([^)]*\)|\*|')?|[πλσωαβμūȳ](?:[${SUPERSCRIPT_CHARS}]+)?)(?![\p{L}\p{N}])`, 'gu')
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
  return token.replace(/([A-Za-zπλσωαβμūȳ]+)([₀₁₂₃₄₅₆₇₈₉ᵢₘₖₗᵥₚ]+)/gu, (_, base, suffix) => {
    const normalized = Array.from(suffix).map((char) => SUBSCRIPT_MAP[char] || char).join('');
    return `${base}_${normalized.length > 1 ? `{${normalized}}` : normalized}`;
  });
}

function normalizeSuperscripts(token) {
  return token.replace(/([A-Za-zπλσωαβμūȳ0-9])([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/gu, (_, base, suffix) => {
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
    .replace(/([A-Za-zπλσωαβμūȳ])\*/gu, '$1^*');
}

function normalizeMathExpression(expression) {
  return normalizeDecorators(
    normalizeSuperscripts(
      normalizeSubscripts(
        String(expression ?? '')
          .replace(/β̂/gu, String.raw`\hat{\beta}`)
          .replace(/σ̂/gu, String.raw`\hat{\sigma}`)
          .replace(/ρ̂/gu, String.raw`\hat{\rho}`)
          .replace(/ŷ/gu, String.raw`\hat{y}`)
          .replace(/û/gu, String.raw`\hat{u}`)
          .replace(/H₀/gu, String.raw`H_0`)
          .replace(/H₁/gu, String.raw`H_1`)
          .replace(/x₀/gu, String.raw`x_0`)
          .replace(/y₀/gu, String.raw`y_0`)
          .replace(/u₀/gu, String.raw`u_0`)
          .replace(/[−–]/g, '-')
          .replace(/≤/g, String.raw`\le `)
          .replace(/≥/g, String.raw`\ge `)
          .replace(/→/g, String.raw`\to `)
          .replace(/·/g, String.raw`\cdot `)
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
      pattern: /(?<![\p{L}\p{N}$\\])X'\s*X(?![\p{L}\p{N}])/gu,
      replace: () => wrapMath(String.raw`X'X`)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])X'\s*y(?![\p{L}\p{N}])/gu,
      replace: () => wrapMath(String.raw`X'y`)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])x₀'\s*β̂(?![\p{L}\p{N}])/gu,
      replace: () => wrapMath(String.raw`x_0'\hat{\beta}`)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])E\s*\(\s*u\s*\|\s*X\s*\)\s*=\s*0(?![\p{L}\p{N}])/gu,
      replace: () => wrapMath(String.raw`E(u|X)=0`)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])R²(?![\p{L}\p{N}])/gu,
      replace: () => wrapMath(String.raw`R^2`)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])R_j²(?![\p{L}\p{N}])/gu,
      replace: () => wrapMath(String.raw`R_j^2`)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])β̂(?:_[A-Za-z0-9]+|[₀₁₂₃₄₅₆₇₈₉]+)?(?![\p{L}\p{N}])/gu,
      replace: (match) => wrapMath(match)
    },
    {
      pattern: /(?<![\p{L}\p{N}$\\])(?:σ̂|ρ̂|ŷ|û|H₀|H₁|u₀|y₀|x₀)(?![\p{L}\p{N}])/gu,
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
      pattern: /(?<![\p{L}\p{N}$\\])F\s*=\s*K\^[A-Za-z0-9.,]+\s*L\^[A-Za-z0-9.,]+(?![\p{L}\p{N}])/gu,
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
