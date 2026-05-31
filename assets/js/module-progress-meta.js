/**
 * Lightweight concept counts for landing-page progress (avoids loading chapters.js / dataFactory.js).
 * Regenerate: node tools/exam-os/build-module-progress-meta.mjs --write
 */
export const MODULE_PROGRESS_META = Object.freeze({
  mikro1: { concepts: 33 },
  mikro2: { concepts: 18 },
  makro1: { concepts: 14 },
  makro2: { concepts: 30 },
  statistik: { concepts: 14 },
  oekonometrie: { concepts: 32 },
  mathematik: { concepts: 14 },
  finanzwirtschaft: { concepts: 19 },
  jahresabschluss: { concepts: 15 },
  recht: { concepts: 14 },
  "internationale-wirtschaftsbeziehungen": { concepts: 16 }
});

export function getModuleConceptCount(slug) {
  return MODULE_PROGRESS_META[slug]?.concepts ?? 0;
}
