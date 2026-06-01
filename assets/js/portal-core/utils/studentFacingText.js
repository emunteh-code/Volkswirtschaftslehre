/**
 * Strip dev/registry jargon from strings shown on student surfaces.
 */

const INTERNAL_ANCHOR_ID = /\b[a-z][a-z0-9-]*\.[a-z0-9_.-]+\b/gi;
const DEV_JARGON =
  /(?:item-level\s+(?:Aufgaben-)?Mapping|OCR\/Review|official-task-source|Nur Metadaten bis OCR|mapping blockiert|Probeklausur item-level)/i;

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
 * @param {unknown} html
 * @returns {string}
 */
export function studentizeTheoryHtml(html) {
  let s = String(html ?? "");
  if (!s) return s;
  s = s.replace(/\(source-distilled\)/gi, "");
  s = s.replace(/<em>\s*platform-added-explanation:\s*<\/em>/gi, "");
  s = s.replace(/<em>\s*source-distilled\s*\/\s*platform-added-explanation:\s*<\/em>[^<]*/gi, "");
  s = s.replace(/<p>\s*<em>\s*source_status:[^<]*<\/em>\s*<\/p>/gi, "");
  s = s.replace(/<h3>\s*Klausurtransfer\s*\(\s*source-distilled\s*\)\s*<\/h3>/gi, "<h3>Klausurtransfer</h3>");
  s = s.replace(/\s{2,}/g, " ");
  return s;
}
