import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MAKRO2_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Makro-II-Aufgabeninhalte.';

export const MAKRO2_REVIEWED_OFFICIAL_TASK_FAMILY_IDS = Object.freeze([
  'makro2.official-task.uebungsblatt-1-a1-ppp-exchange-rate-notation',
  'makro2.official-task.uebungsblatt-1-a2-interest-parity-credit-choice',
  'makro2.official-task.klausur-feb-2024-a1-open-is-lm-flexible-exchange',
  'makro2.official-task.klausur-feb-2024-a2-barro-gordon-phillips',
  'makro2.official-task.klausur-feb-2024-a3-debt-dynamics-price-level',
  'makro2.official-task.klausur-feb-2024-a4-solow-technology-savings-shock',
  'makro2.official-task.uebungsblatt-2-a1-open-goods-market-dd-aa-zz-nx',
  'makro2.official-task.uebungsblatt-3-a1-mundell-fleming-equilibrium',
  'makro2.official-task.uebungsblatt-3-a2-fixed-exchange-trilemma',
  'makro2.official-task.uebungsblatt-4-a1-currency-board-real-exchange-rate',
  'makro2.official-task.uebungsblatt-5-a1-barro-gordon-commitment',
  'makro2.official-task.uebungsblatt-6-a1-debt-repayment-stabilization',
  'makro2.official-task.uebungsblatt-6-a2-debt-monetization-is-lm-pc'
]);

export const MAKRO2_OFFICIAL_TASK_REVIEW_STATUS = Object.freeze({
  ocrReviewed: 'native-text-plus-visual-page-review',
  humanItemMappingReviewed: 'partial',
  reviewedDocuments: [
    {
      path: 'Makroökonomik II/Übungen/Uebungsblatt_1.pdf',
      reviewedPages: [1],
      reviewedTaskFamilies: [
        'makro2.official-task.uebungsblatt-1-a1-ppp-exchange-rate-notation',
        'makro2.official-task.uebungsblatt-1-a2-interest-parity-credit-choice'
      ],
      reviewedAt: '2026-06-08',
      reviewedBy: 'codex-official-task-review-makro2-pass-1'
    },
    {
      path: 'Makroökonomik I/Klausur_Februar_2024_260119_141838.pdf',
      storageModule: 'makro1',
      academicModule: 'makro2',
      reviewedPages: [1, 2, 3, 4, 5, 6],
      reviewedTaskFamilies: [
        'makro2.official-task.klausur-feb-2024-a1-open-is-lm-flexible-exchange',
        'makro2.official-task.klausur-feb-2024-a2-barro-gordon-phillips',
        'makro2.official-task.klausur-feb-2024-a3-debt-dynamics-price-level',
        'makro2.official-task.klausur-feb-2024-a4-solow-technology-savings-shock'
      ],
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-official-task-review-makro2-feb-2024-pass-1'
    },
    {
      path: 'Makroökonomik II/Übungen/Uebungsblatt_2.pdf',
      reviewedPages: [1],
      reviewedTaskFamilies: [
        'makro2.official-task.uebungsblatt-2-a1-open-goods-market-dd-aa-zz-nx'
      ],
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-2-pass-1'
    },
    {
      path: 'Makroökonomik II/Übungen/Uebungsblatt_3.pdf',
      reviewedPages: [1],
      reviewedTaskFamilies: [
        'makro2.official-task.uebungsblatt-3-a1-mundell-fleming-equilibrium',
        'makro2.official-task.uebungsblatt-3-a2-fixed-exchange-trilemma'
      ],
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-3-pass-1'
    },
    {
      path: 'Makroökonomik II/Übungen/Uebungsblatt_4.pdf',
      reviewedPages: [1],
      reviewedTaskFamilies: [
        'makro2.official-task.uebungsblatt-4-a1-currency-board-real-exchange-rate'
      ],
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-4-pass-1'
    },
    {
      path: 'Makroökonomik II/Übungen/Uebungsblatt_5.pdf',
      reviewedPages: [1],
      reviewedTaskFamilies: [
        'makro2.official-task.uebungsblatt-5-a1-barro-gordon-commitment'
      ],
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-5-pass-1'
    },
    {
      path: 'Makroökonomik II/Übungen/Uebungsblatt_6.pdf',
      reviewedPages: [1, 2],
      reviewedTaskFamilies: [
        'makro2.official-task.uebungsblatt-6-a1-debt-repayment-stabilization',
        'makro2.official-task.uebungsblatt-6-a2-debt-monetization-is-lm-pc'
      ],
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-6-pass-1'
    }
  ],
  officialTaskSourceAllowed: 'reviewed-family-ids-only',
  reviewedOfficialTaskFamilyIds: MAKRO2_REVIEWED_OFFICIAL_TASK_FAMILY_IDS,
  nextStep: 'Continue native-text extraction plus visual review for remaining Uebungsblaetter, Tutorienblaetter, and solution-key material before broader official-task-source promotion'
});

/**
 * Guards task-family authoring: never emit official-task-source without reviewed mapping.
 * @param {{ officialTaskCoverage?: string, id?: string }} family
 */
export function assertMakro2OfficialTaskSourcePolicy(family) {
  if (
    family?.officialTaskCoverage === 'official-task-source' &&
    !MAKRO2_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.includes(family?.id)
  ) {
    throw new Error(
      'Makro2 official-task-source blocked unless the family id is explicitly listed in MAKRO2_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.'
    );
  }
}

export function normalizeMakro2OfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter((doc) => doc.module === 'makro2');
}

export function summarizeMakro2OfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeMakro2OfficialTaskDocuments(docs));
}

export function buildMakro2OfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'makro2',
    chapterIds,
    documents: normalizeMakro2OfficialTaskDocuments(docs)
  });
}
