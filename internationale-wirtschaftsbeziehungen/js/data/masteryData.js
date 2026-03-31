// ============================================================
// MASTERY DATA — AUTO-GENERATED
// Learning objective checklists
// ============================================================

import { CHAPTERS } from './chapters.js';

export const MASTERY = {};

CHAPTERS.forEach((ch) => {
  MASTERY[ch.id] = [
    `Die zentrale Definition von "${ch.title}" erklären können`,
    `Formeln und Zusammenhänge korrekt anwenden können`,
    `Typische Klausuraufgaben zu "${ch.title}" lösen`,
    `Den Zusammenhang mit anderen Konzepten verstehen`
  ];
});
