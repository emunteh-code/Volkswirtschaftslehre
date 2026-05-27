// ============================================================
// CONTENT MANIFEST — Mikroökonomik II (provenance only)
// Source corpus added under `source-materials/Mikroökonomik II/` on 2026-05-26.
// Current portal coverage is source-backed but not yet full lecture-sequence parity.
// See docs/audits/mikro2-official-source-ingest-pass-1.md.
// ============================================================

import { createProvenance } from '../../../assets/js/portal-core/data/provenance.js';
import { buildProvenanceByConceptFromPrimaryRefs } from '../../../assets/js/portal-core/data/learningObjectNormalize.js';
import { CHAPTERS } from './chapters.js';
import { STEP_PROBLEMS } from './stepProblems.js';
import { INTUITION } from './intuition.js';
import { MIKRO2_SOURCE_ANCHORS } from './sourceAnchors.js';
import { GRAPH_CONCEPTS } from '../ui/graphPanel.js';

const MODULE_SLUG = 'mikro2';

const MIKRO2_PRIMARY_REFS_CURATED = {
  monopol_preissetzung: [
    'Vorlesungsfolien/Mikro_2_1.pdf',
    'Vorlesungsfolien/Mikro_2_2.pdf'
  ],
  preisdiskriminierung: [
    'Vorlesungsfolien/Mikro_2_2.pdf',
    'Vorlesungsfolien/Mikro_2_3.pdf',
    'Vorlesungsfolien/Mikro_2_4.pdf'
  ],
  spieltheorie_statisch: [
    'Vorlesungsfolien/Mikro2_9.pdf',
    'Vorlesungsfolien/Mikro2_10.pdf'
  ],
  spieltheorie_dynamisch: [
    'Vorlesungsfolien/Mikro2_10.pdf',
    'Vorlesungsfolien/Mikro2_11.pdf'
  ],
  oligopol_cournot_bertrand: [
    'Vorlesungsfolien/Mikro2_5.pdf',
    'Vorlesungsfolien/Mikro2_6.pdf',
    'Vorlesungsfolien/Mikro2_7.pdf',
    'Vorlesungsfolien/Mikro2_8.pdf',
    'Weitere_Unterlagen/cdf-Files/Cournot.cdf',
    'Weitere_Unterlagen/cdf-Files/Cournot_n.cdf'
  ],
  oligopol_stackelberg: [
    'Vorlesungsfolien/Mikro2_5.pdf',
    'Vorlesungsfolien/Mikro2_6.pdf'
  ],
  intertemporaler_konsum: [
    'Vorlesungsfolien/Mikro2_12.pdf'
  ],
  unsicherheit_versicherung: [
    'Vorlesungsfolien/Mikro2_13.pdf',
    'Vorlesungsfolien/Mikro2_14.pdf',
    'Vorlesungsfolien/Mikro2_14_lecture.pdf',
    'Weitere_Unterlagen/Breyer_46.pdf'
  ],
  gleichgewicht_tausch: [
    'Vorlesungsfolien/Mikro2_16.pdf'
  ],
  gleichgewicht_walras: [
    'Vorlesungsfolien/Mikro2_15.pdf',
    'Vorlesungsfolien/Mikro2_16.pdf'
  ],
  wohlfahrt_theoreme: [
    'Vorlesungsfolien/Mikro2_16.pdf',
    'Vorlesungsfolien/Mikro2_17.pdf'
  ],
  gleichgewicht_produktion: [
    'Vorlesungsfolien/Mikro2_17.pdf',
    'Weitere_Unterlagen/cdf-Files/Robinson_Crusoe_Ökonomie_Allgemeines_Gleichgewicht.cdf',
    'Weitere_Unterlagen/cdf-Files/Robinson_Crusoe_Ökonomie_Gewinnmaximierung.cdf'
  ],
  wohlfahrt_messung: [
    'Vorlesungsfolien/Mikro_2_2.pdf',
    'Vorlesungsfolien/Mikro2_16.pdf'
  ],
  information_adverse: [
    'Vorlesungsfolien/Mikro2_18.pdf',
    'Vorlesungsfolien/Mikro2_19.pdf',
    'Weitere_Unterlagen/Tirole_Lemon_Problem.pdf'
  ],
  information_moralhazard: [
    'Vorlesungsfolien/Mikro2_18.pdf',
    'Vorlesungsfolien/Mikro2_20.pdf',
    'Weitere_Unterlagen/Ray_1998_PrincipalAgent.pdf'
  ]
};

export const MIKRO2_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [
    id,
    MIKRO2_PRIMARY_REFS_CURATED[id] ? [...MIKRO2_PRIMARY_REFS_CURATED[id]] : []
  ])
);

const NOTES_SOURCED =
  'Mikro II source corpus is present under source-materials/Mikroökonomik II. Current portal content is source-distilled and still pending full lecture-sequence reconstruction; see docs/audits/mikro2-official-source-ingest-pass-1.md.';
const NOTES_UNMAPPED =
  'No direct primary anchor found in the available official Mikro II corpus for this current portal concept. Treat this as supplemental platform-added support, not exam-proven Mikro II source content, until an official source is provided.';

const BASE_PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: MIKRO2_CONCEPT_PRIMARY_REFS,
  anchorsByConceptId: MIKRO2_SOURCE_ANCHORS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_SOURCED,
    theory: NOTES_SOURCED,
    formulas: NOTES_SOURCED,
    tasks: 'Portal-authored practice aligned to source topics where refs exist; not a verbatim official exercise archive.',
    intuition: 'Compressed recall layer for the closed learning loop.',
    graph: 'Interactive graphs for exam-style intuition; not a single fixed course figure.',
    stepProblems: 'Step-problem Schnelltest items; platform-added drills aligned to source topics where refs exist.'
  }
});

const UNMAPPED_CURRENT_CONCEPTS = new Set([
  'externa_pigou',
  'externa_institutionen',
  'public_goods'
]);

export const PROVENANCE_BY_CONCEPT = Object.fromEntries(
  Object.entries(BASE_PROVENANCE_BY_CONCEPT).map(([conceptId, layers]) => {
    if (!UNMAPPED_CURRENT_CONCEPTS.has(conceptId)) return [conceptId, layers];
    return [
      conceptId,
      Object.fromEntries(
        Object.entries(layers).map(([layer, provenance]) => [
          layer,
          createProvenance({
            source_status: layer === 'tasks' || layer === 'stepProblems'
              ? 'platform-added-drill'
              : 'platform-added-explanation',
            source_refs: provenance.source_refs,
            notes: NOTES_UNMAPPED
          })
        ])
      )
    ];
  })
);

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}
