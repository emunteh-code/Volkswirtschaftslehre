import { CURRICULUM } from './curriculum.js';

export const MASTERY = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, entry.mastery || []])
);
