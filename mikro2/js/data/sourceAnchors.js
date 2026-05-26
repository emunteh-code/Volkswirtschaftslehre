// ============================================================
// SOURCE ANCHORS — Mikroökonomik II
// Reviewed page-level anchors for official-source reconstruction.
// These records intentionally avoid storing source text; quoteFingerprint
// is a short hash of the reviewed topic phrase.
// ============================================================

const REVIEWED_AT = '2026-05-27';
const REVIEWED_BY = 'codex-source-pass-3';

function anchor({
  id,
  sourceId,
  sourcePath,
  publicLabel,
  page,
  section,
  fingerprint,
  confidence = 0.88
}) {
  return {
    id,
    sourceId,
    sourcePath,
    publicLabel,
    locator: {
      page,
      slide: page,
      section,
      task: null,
      line: null
    },
    quoteFingerprint: `sha256:${fingerprint}`,
    confidence,
    reviewedBy: REVIEWED_BY,
    reviewedAt: REVIEWED_AT
  };
}

export const MIKRO2_SOURCE_ANCHORS = Object.freeze({
  monopol_preissetzung: [
    anchor({
      id: 'mikro2.monopol_preissetzung.vl02.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 1,
      section: 'Preissetzung im Monopol und Wohlfahrtseffekte',
      fingerprint: '372887c7f7512d78',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.monopol_preissetzung.vl02.p02.markup',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 2,
      section: 'Preissetzung und Preiselastizität der Nachfrage',
      fingerprint: '372887c7f7512d78',
      confidence: 0.95
    })
  ],
  preisdiskriminierung: [
    anchor({
      id: 'mikro2.preisdiskriminierung.vl03.p02.third-degree',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-3',
      sourcePath: 'Vorlesungsfolien/Mikro_2_3.pdf',
      publicLabel: 'Vorlesung 3',
      page: 2,
      section: 'Preisdiskriminierung dritten Grades',
      fingerprint: '4cd0ceaf50856fcb',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.preisdiskriminierung.vl03.p03.mr-equalization',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-3',
      sourcePath: 'Vorlesungsfolien/Mikro_2_3.pdf',
      publicLabel: 'Vorlesung 3',
      page: 3,
      section: 'Ausgleich der Grenzerlöse zwischen Teilmärkten',
      fingerprint: '4cd0ceaf50856fcb',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.preisdiskriminierung.vl04.p02.second-degree',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-4',
      sourcePath: 'Vorlesungsfolien/Mikro_2_4.pdf',
      publicLabel: 'Vorlesung 4',
      page: 2,
      section: 'Preisdiskriminierung zweiten Grades',
      fingerprint: 'fa6cd11e07fd2eb5',
      confidence: 0.93
    })
  ],
  intertemporaler_konsum: [
    anchor({
      id: 'mikro2.intertemporaler_konsum.vl12.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-12',
      sourcePath: 'Vorlesungsfolien/Mikro2_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 1,
      section: 'Intertemporaler Konsum',
      fingerprint: '3f87bdd6bbf165de',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.intertemporaler_konsum.vl12.p05.budget',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-12',
      sourcePath: 'Vorlesungsfolien/Mikro2_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 5,
      section: 'Intertemporale Budgetgleichung',
      fingerprint: '3f87bdd6bbf165de',
      confidence: 0.9
    })
  ],
  unsicherheit_versicherung: [
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 1,
      section: 'Entscheidungen unter Unsicherheit',
      fingerprint: '30049cb1cdcffadc',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 3,
      section: 'Bedingter Konsum',
      fingerprint: '30049cb1cdcffadc',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl14.p02.fair-insurance',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-14',
      sourcePath: 'Vorlesungsfolien/Mikro2_14.pdf',
      publicLabel: 'Vorlesung 14',
      page: 2,
      section: 'Versicherungsmarkt und faire Prämie',
      fingerprint: '4603c215f9f1b1ed',
      confidence: 0.94
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl14.p03.risk-premium',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-14',
      sourcePath: 'Vorlesungsfolien/Mikro2_14.pdf',
      publicLabel: 'Vorlesung 14',
      page: 3,
      section: 'Sicherheitsäquivalent und Risikoprämie',
      fingerprint: '4603c215f9f1b1ed',
      confidence: 0.94
    })
  ],
  gleichgewicht_produktion: [
    anchor({
      id: 'mikro2.gleichgewicht_produktion.vl17.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-17',
      sourcePath: 'Vorlesungsfolien/Mikro2_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 1,
      section: 'Allgemeines Gleichgewicht mit Produktion',
      fingerprint: '628fdb72dc8e2ad2',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_produktion.vl17.p02.model',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-17',
      sourcePath: 'Vorlesungsfolien/Mikro2_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 2,
      section: 'Modellrahmen: 2 Konsumenten, 2 Güter, 2 Faktoren',
      fingerprint: '628fdb72dc8e2ad2',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_produktion.vl17.p03.factor-box',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-17',
      sourcePath: 'Vorlesungsfolien/Mikro2_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 3,
      section: 'Faktor-Box und Produktionseffizienz',
      fingerprint: '628fdb72dc8e2ad2',
      confidence: 0.95
    })
  ]
});

export function getMikro2SourceAnchors(conceptId) {
  return MIKRO2_SOURCE_ANCHORS[conceptId] || [];
}
