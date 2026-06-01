/**
 * LaTeX preservation for theory HTML and persisted String.raw sources.
 * Collapses runaway backslash doubling from mistaken template escaping.
 */

const MATH_DELIMITER_REGEX = /(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g;
const TEX_COMMAND_HEAD = /\\{2,}(?=[a-zA-Z@*]|\\[{}[\]();,!.])/g;
const SPURIOUS_BEFORE_TEXT = /\\{2,}(?=\s+\\text)/g;

function collapseMathDelimitedBlock(block) {
  return block
    .replace(/\\{4,}/g, '\\\\')
    .replace(TEX_COMMAND_HEAD, '\\')
    .replace(SPURIOUS_BEFORE_TEXT, ' ');
}

/**
 * Inside $…$ / $$…$$, collapse runaway backslash doubling from String.raw re-escaping.
 * @param {unknown} value
 * @returns {string}
 */
export function collapseOverEscapedLatex(value) {
  const input = String(value ?? '');
  if (!input.includes('\\')) return input;

  return input.replace(MATH_DELIMITER_REGEX, collapseMathDelimitedBlock);
}

const LATEX_PLACEHOLDER_PREFIX = '\uE000LP';
const LATEX_PLACEHOLDER_SUFFIX = '\uE001';

/**
 * Replace math delimiters with opaque placeholders so HTML sanitizers skip TeX.
 * @param {unknown} html
 * @returns {{ html: string, restore: (s: string) => string }}
 */
export function protectLatexInHtml(html) {
  const slots = [];
  let index = 0;
  const protectedHtml = String(html ?? '').replace(MATH_DELIMITER_REGEX, (block) => {
    const token = `${LATEX_PLACEHOLDER_PREFIX}${index++}${LATEX_PLACEHOLDER_SUFFIX}`;
    slots.push(block);
    return token;
  });

  const restore = (value) => {
    let out = String(value ?? '');
    slots.forEach((block, i) => {
      const token = `${LATEX_PLACEHOLDER_PREFIX}${i}${LATEX_PLACEHOLDER_SUFFIX}`;
      out = out.split(token).join(block);
    });
    return out;
  };

  return { html: protectedHtml, restore };
}

/**
 * Repair persisted theory / chapter HTML before student render.
 * @param {unknown} html
 * @returns {string}
 */
export function repairLatexInHtml(html) {
  return collapseOverEscapedLatex(String(html ?? ''));
}
