import { CURRICULUM } from './curriculum.js';

const usedByMap = Object.fromEntries(CURRICULUM.map((entry) => [entry.id, []]));

CURRICULUM.forEach((entry) => {
  (entry.uses || []).forEach((dependencyId) => {
    if (usedByMap[dependencyId]) {
      usedByMap[dependencyId].push(entry.id);
    }
  });
});

export const CONCEPT_LINKS = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, {
    uses: entry.uses || [],
    usedBy: usedByMap[entry.id]
  }])
);

