import { CURRICULUM } from './curriculum.js';

export const INTUITION = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, entry.intuition || null])
);
