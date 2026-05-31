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
    return "Übungsformat (Plattform) — keine item-für-item Übernahme offizieller Klausuraufgaben.";
  }
  return raw;
}
