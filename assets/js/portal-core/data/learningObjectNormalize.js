import { createSourceReference, createProvenance } from './provenance.js';

/**
 * Default layer statuses for portal-style economics modules (makro1 pilot pattern).
 * Override per layer via `statusByLayer`.
 */
export const DEFAULT_LAYER_SOURCE_STATUS = Object.freeze({
  motivation: 'source-distilled',
  theory: 'source-distilled',
  formulas: 'source-distilled',
  tasks: 'platform-added-drill',
  intuition: 'platform-added-explanation',
  graph: 'platform-added-explanation',
  stepProblems: 'platform-added-drill'
});

/**
 * Build per-concept provenance layers from primary source paths + capability flags.
 * Does not read CONTENT bodies — module supplies paths and predicates.
 *
 * @param {object} opts
 * @param {{ id: string }[]} opts.chapters
 * @param {Record<string, string[]>} opts.primaryPathsByConceptId
 * @param {string} opts.moduleSlug
 * @param {(conceptId: string) => boolean} [opts.hasGraph]
 * @param {(conceptId: string) => boolean} [opts.hasStepProblems]
 * @param {(conceptId: string) => boolean} [opts.hasIntuition]
 * @param {Partial<Record<'motivation'|'theory'|'formulas'|'tasks'|'intuition'|'graph'|'stepProblems', string>>} [opts.notesByLayer]
 * @param {Partial<typeof DEFAULT_LAYER_SOURCE_STATUS>} [opts.statusByLayer]
 * @returns {Record<string, Record<string, ReturnType<typeof createProvenance>>>}
 */
export function buildProvenanceByConceptFromPrimaryRefs({
  chapters,
  primaryPathsByConceptId,
  moduleSlug,
  hasGraph = () => false,
  hasStepProblems = () => false,
  hasIntuition = () => false,
  notesByLayer = {},
  statusByLayer = {}
}) {
  const st = { ...DEFAULT_LAYER_SOURCE_STATUS, ...statusByLayer };

  return Object.fromEntries(
    chapters.map(({ id }) => {
      const paths = primaryPathsByConceptId[id] || [];
      const refs = paths.map((p) => createSourceReference(moduleSlug, p));

      const layers = {
        motivation: createProvenance({
          source_status: st.motivation,
          source_refs: refs,
          notes: notesByLayer.motivation
        }),
        theory: createProvenance({
          source_status: st.theory,
          source_refs: refs,
          notes: notesByLayer.theory
        }),
        formulas: createProvenance({
          source_status: st.formulas,
          source_refs: refs,
          notes: notesByLayer.formulas
        }),
        tasks: createProvenance({
          source_status: st.tasks,
          source_refs: refs,
          notes: notesByLayer.tasks
        })
      };

      if (hasIntuition(id)) {
        layers.intuition = createProvenance({
          source_status: st.intuition,
          source_refs: refs,
          notes: notesByLayer.intuition
        });
      }
      if (hasGraph(id)) {
        layers.graph = createProvenance({
          source_status: st.graph,
          source_refs: refs,
          notes: notesByLayer.graph
        });
      }
      if (hasStepProblems(id)) {
        layers.stepProblems = createProvenance({
          source_status: st.stepProblems,
          source_refs: refs,
          notes: notesByLayer.stepProblems
        });
      }

      return [id, layers];
    })
  );
}
