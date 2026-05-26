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
  spieltheorie_statisch: [
    anchor({
      id: 'mikro2.spieltheorie_statisch.vl09.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-9',
      sourcePath: 'Vorlesungsfolien/Mikro2_9.pdf',
      publicLabel: 'Vorlesung 9',
      page: 1,
      section: 'Spieltheorie I: Auszahlungsmatrix, dominante Strategien, Nash',
      fingerprint: 'f885f7f94c9f1ec8',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.spieltheorie_statisch.vl09.p05.nash',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-9',
      sourcePath: 'Vorlesungsfolien/Mikro2_9.pdf',
      publicLabel: 'Vorlesung 9',
      page: 5,
      section: 'Nash-Gleichgewicht in reinen Strategien',
      fingerprint: 'f885f7f94c9f1ec8',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro2.spieltheorie_statisch.vl10.p01.mixed-intro',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-10',
      sourcePath: 'Vorlesungsfolien/Mikro2_10.pdf',
      publicLabel: 'Vorlesung 10',
      page: 1,
      section: 'Nash-Gleichgewichte in gemischten Strategien',
      fingerprint: '9f66dcb496dc03a5',
      confidence: 0.9
    })
  ],
  spieltheorie_dynamisch: [
    anchor({
      id: 'mikro2.spieltheorie_dynamisch.vl10.p01.mixed',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-10',
      sourcePath: 'Vorlesungsfolien/Mikro2_10.pdf',
      publicLabel: 'Vorlesung 10',
      page: 1,
      section: 'Gemischte Strategien und spezielle Spiele',
      fingerprint: '9f66dcb496dc03a5',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.spieltheorie_dynamisch.vl11.p01.sequential',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-11',
      sourcePath: 'Vorlesungsfolien/Mikro2_11.pdf',
      publicLabel: 'Vorlesung 11',
      page: 1,
      section: 'Sequentielle Spiele und teilspielperfektes Nash-Gleichgewicht',
      fingerprint: '50c91909d0403f9b',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.spieltheorie_dynamisch.vl11.p04.backward-induction',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-11',
      sourcePath: 'Vorlesungsfolien/Mikro2_11.pdf',
      publicLabel: 'Vorlesung 11',
      page: 4,
      section: 'Rückwärtsinduktion und Teilspielperfektion',
      fingerprint: '50c91909d0403f9b',
      confidence: 0.9
    })
  ],
  oligopol_cournot_bertrand: [
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl06.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 1,
      section: 'Cournot-Duopol und Cournot-Wettbewerb mit vielen Anbietern',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl06.p03.reaction',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 3,
      section: 'Reaktionsfunktionen und Cournot-Gleichgewicht',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p01.bertrand',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 1,
      section: 'Bertrand-Modell und Preiswettbewerb',
      fingerprint: '52de0cbf2d6d4eb7',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p03.bertrand-paradox',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 3,
      section: 'Bertrand-Paradox und Erweiterungen',
      fingerprint: '52de0cbf2d6d4eb7',
      confidence: 0.9
    })
  ],
  oligopol_stackelberg: [
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl05.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-5',
      sourcePath: 'Vorlesungsfolien/Mikro2_5.pdf',
      publicLabel: 'Vorlesung 5',
      page: 1,
      section: 'Oligopoltheorie I: Strategien und Stackelbergmodell',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl05.p02.stackelberg-model',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-5',
      sourcePath: 'Vorlesungsfolien/Mikro2_5.pdf',
      publicLabel: 'Vorlesung 5',
      page: 2,
      section: 'Stackelberg-Modell: Führer und Folger',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl06.p01.cournot-contrast',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 1,
      section: 'Cournot als simultaner Vergleichsfall',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.88
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
  ],
  gleichgewicht_tausch: [
    anchor({
      id: 'mikro2.gleichgewicht_tausch.vl16.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 1,
      section: 'Tauschökonomie, Tauschoptimum und Pareto-Effizienz',
      fingerprint: '6c69af476a21a519',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_tausch.vl16.p03.edgeworth',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 3,
      section: 'Edgeworth-Box und Tauschgewinne',
      fingerprint: '6c69af476a21a519',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_tausch.vl16.p05.contract',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 5,
      section: 'Pareto-Effizienz und Kontraktkurve',
      fingerprint: '6c69af476a21a519',
      confidence: 0.93
    })
  ],
  gleichgewicht_walras: [
    anchor({
      id: 'mikro2.gleichgewicht_walras.vl15.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-15',
      sourcePath: 'Vorlesungsfolien/Mikro2_15.pdf',
      publicLabel: 'Vorlesung 15',
      page: 1,
      section: 'Allgemeines Gleichgewicht I und Walras-Gesetz',
      fingerprint: '26c7a21ad26bad3a',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_walras.vl15.p02.robinson',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-15',
      sourcePath: 'Vorlesungsfolien/Mikro2_15.pdf',
      publicLabel: 'Vorlesung 15',
      page: 2,
      section: 'Robinson-Crusoe-Ökonomie',
      fingerprint: '26c7a21ad26bad3a',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.gleichgewicht_walras.vl16.p09.market-clearing',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 9,
      section: 'Güterpreise im allgemeinen Gleichgewicht',
      fingerprint: '26c7a21ad26bad3a',
      confidence: 0.88
    })
  ],
  wohlfahrt_theoreme: [
    anchor({
      id: 'mikro2.wohlfahrt_theoreme.vl16.p07.pareto',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 7,
      section: 'Pareto-Effizienz',
      fingerprint: 'aece4b5bd2fb9217',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.wohlfahrt_theoreme.vl16.p17.fundamental-theorems',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 17,
      section: 'Die beiden Hauptsätze der Wohlfahrtsökonomik',
      fingerprint: 'aece4b5bd2fb9217',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.wohlfahrt_theoreme.vl17.p01.production-extension',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-17',
      sourcePath: 'Vorlesungsfolien/Mikro2_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 1,
      section: 'Allgemeines Gleichgewicht mit Produktion',
      fingerprint: 'aece4b5bd2fb9217',
      confidence: 0.86
    })
  ],
  wohlfahrt_messung: [
    anchor({
      id: 'mikro2.wohlfahrt_messung.vl02.p05.monopoly-welfare',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 5,
      section: 'Wohlfahrtswirkung des Monopols',
      fingerprint: '01c5da58796e79b1',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.wohlfahrt_messung.vl02.p09.surplus',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 9,
      section: 'Konsumentenrente, Produzentenrente und Wohlfahrtsverlust',
      fingerprint: '01c5da58796e79b1',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro2.wohlfahrt_messung.vl16.p17.fundamental-context',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 17,
      section: 'Wohlfahrtsökonomik im allgemeinen Gleichgewicht',
      fingerprint: 'aece4b5bd2fb9217',
      confidence: 0.82
    })
  ],
  information_adverse: [
    anchor({
      id: 'mikro2.information_adverse.vl18.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-18',
      sourcePath: 'Vorlesungsfolien/Mikro2_18.pdf',
      publicLabel: 'Vorlesung 18',
      page: 1,
      section: 'Moralisches Risiko und Adverse Selektion',
      fingerprint: '480be150e9950e84',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.information_adverse.vl18.p03.adverse-selection',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-18',
      sourcePath: 'Vorlesungsfolien/Mikro2_18.pdf',
      publicLabel: 'Vorlesung 18',
      page: 3,
      section: 'Adverse Selektion',
      fingerprint: '480be150e9950e84',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.information_adverse.vl19.p01.adverse-signalling',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-19',
      sourcePath: 'Vorlesungsfolien/Mikro2_19.pdf',
      publicLabel: 'Vorlesung 19',
      page: 1,
      section: 'Adverse Selektion und Signalling',
      fingerprint: '7d836cc40a226d4d',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.information_adverse.vl19.p02.market-breakdown',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-19',
      sourcePath: 'Vorlesungsfolien/Mikro2_19.pdf',
      publicLabel: 'Vorlesung 19',
      page: 2,
      section: 'Marktzusammenbruch bei Adverse Selection',
      fingerprint: '7d836cc40a226d4d',
      confidence: 0.9
    })
  ],
  information_moralhazard: [
    anchor({
      id: 'mikro2.information_moralhazard.vl18.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-18',
      sourcePath: 'Vorlesungsfolien/Mikro2_18.pdf',
      publicLabel: 'Vorlesung 18',
      page: 1,
      section: 'Moralisches Risiko und Prinzipal-Agenten-Theorie',
      fingerprint: '480be150e9950e84',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.information_moralhazard.vl18.p04.principal-agent',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-18',
      sourcePath: 'Vorlesungsfolien/Mikro2_18.pdf',
      publicLabel: 'Vorlesung 18',
      page: 4,
      section: 'Prinzipal-Agenten-Theorie',
      fingerprint: '480be150e9950e84',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro2.information_moralhazard.vl20.p01.manager',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-20',
      sourcePath: 'Vorlesungsfolien/Mikro2_20.pdf',
      publicLabel: 'Vorlesung 20',
      page: 1,
      section: 'Managerentlohnung und unvollkommene Information',
      fingerprint: '76e5c1d92e263b02',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.information_moralhazard.vl20.p02.contract',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-20',
      sourcePath: 'Vorlesungsfolien/Mikro2_20.pdf',
      publicLabel: 'Vorlesung 20',
      page: 2,
      section: 'Managervertrag als Prinzipal-Agenten-Problem',
      fingerprint: '76e5c1d92e263b02',
      confidence: 0.93
    })
  ]
});

export function getMikro2SourceAnchors(conceptId) {
  return MIKRO2_SOURCE_ANCHORS[conceptId] || [];
}
