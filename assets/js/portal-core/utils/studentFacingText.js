import { protectLatexInHtml, repairLatexInHtml } from './latexProtect.js';
import { prepareTheoryHtmlForStudent } from './formelDisplay.js';
import { decodeHtmlEntities, stripHtml } from '../ui/semanticContent.js';

/**
 * Strip dev/registry jargon from strings shown on student surfaces.
 */

const INTERNAL_ANCHOR_ID = /\b[a-z][a-z0-9-]*\.[a-z0-9_.-]+\b/gi;
const DEV_JARGON =
  /(?:item-level\s+(?:Aufgaben-)?Mapping|OCR\/Review|official-task-source|Nur Metadaten bis OCR|mapping blockiert|Probeklausur item-level)/i;

const SOURCE_STATUS_EM =
  /<em>\s*(?:(?:source-distilled|platform-added-explanation|platform-added-drill|direct-source|cross-link)(?:\s*\/\s*(?:source-distilled|platform-added-explanation|platform-added-drill|direct-source|cross-link))*[^<]*)<\/em>/gi;

const ESCAPED_INLINE_TAG = /&lt;\/?(?:strong|em|br)\s*\/?&gt;/gi;
const VAGUE_READINESS_PARAGRAPH =
  /<p[^>]*>\s*(?:Kernrelationen aus dem Formeln-Tab aktivieren|Begriffe aus Formeln-Tab|Lern-Checkliste)[^<]*<\/p>/gi;
const BLOCKQUOTE_GT = /^>\s+/gm;
const PLATFORM_ADDED_INLINE = /\bplatform-added-(?:explanation|drill)\b/gi;

/** Forbidden learner-facing phrases → student-safe replacements (§4 product QA). */
const FORBIDDEN_LEARNER_REPLACEMENTS = [
  [/Kernbaustein für Klausurtransfer/gi, "Kernbaustein im Modul"],
  [/Kernrelationen:\s*/gi, ""],
  [/Kernrelationen aus dem Formeln-Tab aktivieren/gi, "Formeln-Tab für Kernrelationen nutzen"],
  [/Begriffe aus Formeln-Tab/gi, "Begriffe im Formeln-Tab nachschlagen"],
  [/Lern-Checkliste/gi, "Selbsttest"],
  [/Generischer Fehlercheck/gi, "Selbsttest vor der Klausur"],
  [/Generischer Mechanismus-Pfad/gi, ""],
  [/Orientierungshilfe/gi, ""],
  [/Empfohlener Ablauf/gi, ""],
  [/Plattform-Übung/gi, "Übung"],
  [/PLATTFORM-ÜBUNG/gi, "Übung"],
  [/&#36;/g, "$"],
  [/&amp;#36;/g, "$"]
];

/**
 * @param {string} text
 * @returns {string}
 */
export function replaceForbiddenLearnerPhrases(text) {
  let out = String(text ?? "");
  for (const [re, replacement] of FORBIDDEN_LEARNER_REPLACEMENTS) {
    re.lastIndex = 0;
    out = out.replace(re, replacement);
  }
  return out.replace(/\s{2,}/g, " ").trim();
}

/**
 * Plain learner text: decode entities, strip tags, remove markdown blockquote markers.
 * @param {unknown} value
 * @returns {string}
 */
export function sanitizeLearnerPlainText(value) {
  let text = decodeHtmlEntities(stripHtml(String(value ?? "")));
  text = text.replace(/^>\s+/gm, "").replace(/\s+/g, " ").trim();
  text = text.replace(PLATFORM_ADDED_INLINE, "").trim();
  text = replaceForbiddenLearnerPhrases(text);
  return text;
}

/**
 * @param {unknown} value
 * @returns {string}
 */
export function studentizeMethodText(value) {
  let text = String(value ?? "").trim();
  if (!text) {
    return "Vorlesungsabschnitt lesen, Methode notieren und mit den Aufgaben abgleichen.";
  }

  text = text.replace(/Item-level Aufgaben-Mapping nur nach OCR\/Review[^.]*\.?/gi, "");
  text = text.replace(/Probeklausur item-level mapping blockiert bis OCR\/Review\.?/gi, "");
  text = text.replace(/Nur Metadaten bis OCR\/Review\.?/gi, "");
  text = text.replace(/Offizielles Dokument im Korpus:[^.]*\.?/gi, "");

  text = text.replace(/\([^)]*\)/g, (segment) => {
    if (INTERNAL_ANCHOR_ID.test(segment)) {
      INTERNAL_ANCHOR_ID.lastIndex = 0;
      return "(Vorlesungsabschnitte)";
    }
    return segment;
  });

  text = text.replace(INTERNAL_ANCHOR_ID, "Vorlesungsabschnitt");
  text = text.replace(/\bAnkern?\b/gi, "Vorlesungsabschnitten");
  text = text.replace(/\s{2,}/g, " ").replace(/\(\s*\)/g, "").trim();

  if (!text || text.length < 12 || DEV_JARGON.test(text)) {
    return "Vorlesungsabschnitt lesen, Methode notieren und mit den Aufgaben abgleichen.";
  }
  return text;
}

/**
 * @param {unknown} gap
 * @returns {string}
 */
export function studentizeTaskGapNote(gap) {
  const raw = String(gap ?? "").trim();
  if (!raw) return "";
  if (DEV_JARGON.test(raw) || /portalabdeckung|partial|not yet represented|missing-official/i.test(raw)) {
    return "Übungen auf der Plattform — nicht jede offizielle Klausuraufgabe ist hier einzeln abgebildet.";
  }
  return raw;
}

/**
 * Remove internal provenance labels from theory HTML before student render.
 * Source mapping is shown only in the Quellen tab.
 * @param {unknown} html
 * @returns {string}
 */
/**
 * @param {unknown} html
 * @param {{ formeln?: Array<{ label?: string, eq?: unknown }> }} [entry]
 * @returns {string}
 */
export function studentizeTheoryHtml(html, entry = null) {
  let s = repairLatexInHtml(html);
  if (!s) return s;

  s = s.replace(/&#36;|&amp;#36;/g, "$");

  if (entry && typeof entry === "object") {
    s = prepareTheoryHtmlForStudent(s, entry);
  } else if (s.includes("[object Object]")) {
    s = prepareTheoryHtmlForStudent(s, {});
  }

  const { html: shielded, restore } = protectLatexInHtml(s);
  s = shielded;

  s = s.replace(
    /<div[^>]*class="[^"]*\b(?:source-boundary-notice|platform-added-banner)\b[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
    ""
  );
  s = s.replace(SOURCE_STATUS_EM, "");
  s = s.replace(/\(source-distilled\)/gi, "");
  s = s.replace(/\(direct-source\)/gi, "");
  s = s.replace(/\(platform-added-explanation\)/gi, "");
  s = s.replace(/\(platform-added-drill\)/gi, "");
  s = s.replace(/<em>\s*platform-added-explanation:\s*<\/em>/gi, "");
  s = s.replace(/<em>\s*source-distilled\s*\/\s*platform-added-explanation:\s*<\/em>[^<]*/gi, "");
  s = s.replace(/<p>\s*<em>\s*source_status:[^<]*<\/em>\s*<\/p>/gi, "");
  s = s.replace(/<p[^>]*class="[^"]*\bpedagogy-source-note\b[^"]*"[^>]*>[\s\S]*?<\/p>/gi, "");
  s = s.replace(/<span[^>]*class="[^"]*\bpedagogy-source-note\b[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "");
  s = s.replace(/<p>\s*<em>\s*platform-added-(?:explanation|drill):\s*[^<]*<\/em>\s*<\/p>/gi, "");
  s = s.replace(/<p>\s*<em>\s*source-distilled:\s*[^<]*<\/em>\s*<\/p>/gi, "");
  s = s.replace(/<p>\s*<em>\s*Lern-Checkliste\.?\s*<\/em>\s*<\/p>/gi, "");
  s = s.replace(
    /<p[^>]*>\s*<em>\s*(?:platform-added-(?:explanation|drill)|source-distilled|direct-source|cross-link)\s*:\s*<\/em>[\s\S]*?<\/p>/gi,
    ""
  );
  s = s.replace(
    /<p[^>]*>\s*(?:Orientierungshilfe[^<]*|Generischer Mechanismus-Pfad[^<]*|Lern-Checkliste\.?|Begriffe aus Formeln-Tab[^<]*)<\/p>/gi,
    ""
  );
  s = s.replace(/<h3>\s*Klausurtransfer\s*\(\s*source-distilled\s*\)\s*<\/h3>/gi, "<h3>Klausurtransfer</h3>");
  s = s.replace(/<span[^>]*class="[^"]*\bplatform-chrome-badge\b[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "");
  s = s.replace(ESCAPED_INLINE_TAG, "");
  s = s.replace(/<\/?(?:strong|em)>/gi, "");
  s = s.replace(/<br\s*\/?>/gi, " ");
  s = s.replace(VAGUE_READINESS_PARAGRAPH, "");
  s = s.replace(/<p[^>]*>\s*<strong>\s*Kernrelationen:\s*<\/strong>[^<]*<\/p>/gi, "");
  s = s.replace(/<p[^>]*>\s*>\s*[^<]*<\/p>/gi, "");
  s = s.replace(BLOCKQUOTE_GT, "");
  s = s.replace(
    /<p[^>]*class="[^"]*\b(?:klausurmethodik-footnote|theory-source-footnote)\b[^"]*"[^>]*>[\s\S]*?<\/p>/gi,
    ""
  );
  s = s.replace(/<button[^>]*class="[^"]*\bklausurmethodik-source-link\b[^"]*"[^>]*>[\s\S]*?<\/button>/gi, "");
  s = s.replace(/\s{2,}/g, " ");
  return restore(repairLatexInHtml(s));
}
