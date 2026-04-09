import { CURRICULUM } from './curriculum.js';

export const CONCEPT_LINKS = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, entry.links || { uses: [], usedBy: [] }])
);
