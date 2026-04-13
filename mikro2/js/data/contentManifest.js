// ============================================================
// CONTENT MANIFEST — Mikroökonomik II (provenance only)
// Live module under source quarantine: no Mikro II tree in `source-materials/`.
// See AGENTS.md, docs/audits/mikro2-quarantine-roadmap-pass-1.md
// ============================================================

import { createProvenance } from '../../../assets/js/portal-core/data/provenance.js';
import { buildProvenanceByConceptFromPrimaryRefs } from '../../../assets/js/portal-core/data/learningObjectNormalize.js';
import { CHAPTERS } from './chapters.js';
import { STEP_PROBLEMS } from './stepProblems.js';
import { INTUITION } from './intuition.js';
import { GRAPH_CONCEPTS } from '../ui/graphPanel.js';

const MODULE_SLUG = 'mikro2';

/** Intentionally empty: no file-level anchors until a corpus ships in-repo. */
export const MIKRO2_CONCEPT_PRIMARY_REFS = Object.fromEntries(CHAPTERS.map(({ id }) => [id, []]));

const NOTES_QUARANTINE =
  'Mikro II topic module without an in-repo Mikro II source-materials folder. Didactic portal content — not direct-source anchored to course PDFs here. See docs/audits/mikro2-quarantine-roadmap-pass-1.md.';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: MIKRO2_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  statusByLayer: {
    motivation: 'platform-added-explanation',
    theory: 'platform-added-explanation',
    formulas: 'platform-added-explanation',
    tasks: 'platform-added-drill',
    intuition: 'platform-added-explanation',
    graph: 'platform-added-explanation',
    stepProblems: 'platform-added-drill'
  },
  notesByLayer: {
    motivation: NOTES_QUARANTINE,
    theory: NOTES_QUARANTINE,
    formulas: NOTES_QUARANTINE,
    tasks: NOTES_QUARANTINE,
    intuition: NOTES_QUARANTINE,
    graph: NOTES_QUARANTINE,
    stepProblems: NOTES_QUARANTINE
  }
});

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}
