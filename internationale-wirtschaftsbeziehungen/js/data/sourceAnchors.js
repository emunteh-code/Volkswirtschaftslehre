// ============================================================
// SOURCE ANCHORS — Internationale Wirtschaftsbeziehungen
// Syllabus-heading pass (2026-05-28); section labels from heading candidates.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'exam-os-syllabus-pass-iwb-anchors-1';

function anchor({
  id,
  sourceId,
  sourcePath,
  publicLabel,
  page,
  section,
  fingerprint,
  confidence = 0.82
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

export const IWB_SOURCE_ANCHORS = Object.freeze({
  handelsfakten: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p31.allgemein-neubewertung-v',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb1',
      sourcePath: 'Vorlesungsfolien/IntWB1.pdf',
      publicLabel: "IntWB1",
      page: 31,
      section: "Allgemein: Neubewertung von politischen Risiken durch",
      fingerprint: '7558d2d30c3f4f20',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p03.vorlesung-wird-begleitet',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb1',
      sourcePath: 'Vorlesungsfolien/IntWB1.pdf',
      publicLabel: "IntWB1",
      page: 3,
      section: "Vorlesung wird begleitet durch Übung (weitere Informationen auf",
      fingerprint: 'dfac668a6f5fc743',
      confidence: 0.84
    })
  ],
  ricardo: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p07.zusa-tzliche-einheit-wei',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb2',
      sourcePath: 'Vorlesungsfolien/IntWB2.pdf',
      publicLabel: "IntWB2",
      page: 7,
      section: "zusätzliche Einheit Weizen aufgeben muss",
      fingerprint: '7f09e84ca4ea9e8a',
      confidence: 0.88
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p20.kreickemeier-grundlagen-',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb2',
      sourcePath: 'Vorlesungsfolien/IntWB2.pdf',
      publicLabel: "IntWB2",
      page: 20,
      section: "Kreickemeier                         Grundlagen IWB                         20 von 26",
      fingerprint: 'e66212bb3ecaacba',
      confidence: 0.84
    })
  ],
  heckscher_ohlin: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p15.produktivita-tsunterschi',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb3',
      sourcePath: 'Vorlesungsfolien/IntWB3.pdf',
      publicLabel: "IntWB3",
      page: 15,
      section: "Produktivitätsunterschiede zwischen den Ländern",
      fingerprint: 'f236cd764df41ebd',
      confidence: 0.88
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p23.gruppen-ist-reale-entloh',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb3',
      sourcePath: 'Vorlesungsfolien/IntWB3.pdf',
      publicLabel: "IntWB3",
      page: 23,
      section: "Gruppen ist reale Entlohnung relevant",
      fingerprint: 'd53aca10470dbd27',
      confidence: 0.88
    })
  ],
  verteilung_handel: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p07.kapitalreich-relative-au',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb3',
      sourcePath: 'Vorlesungsfolien/IntWB3.pdf',
      publicLabel: "IntWB3",
      page: 7,
      section: "kapitalreich (relative Aussage über beide Länder)",
      fingerprint: 'e11d17857da683f1',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p21.relativem-faktorangebot-',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb3',
      sourcePath: 'Vorlesungsfolien/IntWB3.pdf',
      publicLabel: "IntWB3",
      page: 21,
      section: "relativem Faktorangebot und relativer Faktornachfrage",
      fingerprint: '7335a2932985dff5',
      confidence: 0.84
    })
  ],
  krugman: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p22.i-gro-e-handelsvolumina-',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb4',
      sourcePath: 'Vorlesungsfolien/IntWB4.pdf',
      publicLabel: "IntWB4",
      page: 22,
      section: "I große Handelsvolumina zwischen ähnlichen Ländern",
      fingerprint: 'be58fa023aae0285',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p16.markt-aus-konstanter-bes',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb4',
      sourcePath: 'Vorlesungsfolien/IntWB4.pdf',
      publicLabel: "IntWB4",
      page: 16,
      section: "Markt aus (konstanter Bestand an Arbeitskräften)",
      fingerprint: '3c6a1acee381576e',
      confidence: 0.84
    })
  ],
  gravitation: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p16.markt-aus-konstanter-bes',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb4',
      sourcePath: 'Vorlesungsfolien/IntWB4.pdf',
      publicLabel: "IntWB4",
      page: 16,
      section: "Markt aus (konstanter Bestand an Arbeitskräften)",
      fingerprint: '3c6a1acee381576e',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p02.kreickemeier-grundlagen-',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb4',
      sourcePath: 'Vorlesungsfolien/IntWB4.pdf',
      publicLabel: "IntWB4",
      page: 2,
      section: "Kreickemeier                             Grundlagen IWB                           2 von 22",
      fingerprint: '5ac6865e61c58138',
      confidence: 0.84
    })
  ],
  tarifmodell: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p04.einfu-hrung-modellrahmen',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb5',
      sourcePath: 'Vorlesungsfolien/IntWB5.pdf',
      publicLabel: "IntWB5",
      page: 4,
      section: "Einführung: Modellrahmen",
      fingerprint: '36b789bc29ffa28d',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p02.kreickemeier-grundlagen-',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb5',
      sourcePath: 'Vorlesungsfolien/IntWB5.pdf',
      publicLabel: "IntWB5",
      page: 2,
      section: "Kreickemeier                          Grundlagen IWB                        2 von 21",
      fingerprint: 'c2ed16ce4ffa7214',
      confidence: 0.84
    })
  ],
  quoten_sanktionen: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p03.eu-prus-eu',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb6',
      sourcePath: 'Vorlesungsfolien/IntWB6.pdf',
      publicLabel: "IntWB6",
      page: 3,
      section: "EU              pRUS                               EU",
      fingerprint: '38c83fb45ea3134e',
      confidence: 0.88
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p06.fla-che-e-in-der-folgend',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb6',
      sourcePath: 'Vorlesungsfolien/IntWB6.pdf',
      publicLabel: "IntWB6",
      page: 6,
      section: "(Fläche e in der folgenden Abbildung)",
      fingerprint: '24763b108569a361',
      confidence: 0.84
    })
  ],
  wto_integration: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p17.zollunion-freihandelszon',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb7',
      sourcePath: 'Vorlesungsfolien/IntWB7.pdf',
      publicLabel: "IntWB7",
      page: 17,
      section: "Zollunion, Freihandelszone und Brexit",
      fingerprint: 'ce00af6b2cdd98d8',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p06.i-diskriminierung-gegen-',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb7',
      sourcePath: 'Vorlesungsfolien/IntWB7.pdf',
      publicLabel: "IntWB7",
      page: 6,
      section: "I Diskriminierung gegen Nicht-Mitglieder des RTA",
      fingerprint: '18bce5589a0a6d65',
      confidence: 0.84
    })
  ],
  wechselkurssysteme: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p12.die-absolute-a-nderung-d',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb8',
      sourcePath: 'Vorlesungsfolien/IntWB8.pdf',
      publicLabel: "IntWB8",
      page: 12,
      section: "Die absolute Änderung des Wechselkurses betrug",
      fingerprint: '02bfa87a489add10',
      confidence: 0.88
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p26.1-iac-1-i-fac-eac',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb8',
      sourcePath: 'Vorlesungsfolien/IntWB8.pdf',
      publicLabel: "IntWB8",
      page: 26,
      section: "1 + iAC = (1 + i$ )            →       FAC/$ = EAC/$",
      fingerprint: '8d141cbd2b71de82',
      confidence: 0.88
    })
  ],
  zinsparitaet: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p09.g-peur',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb9',
      sourcePath: 'Vorlesungsfolien/IntWB9.pdf',
      publicLabel: "IntWB9",
      page: 9,
      section: "g                                  PEUR",
      fingerprint: '7d7e8d9239423cc7',
      confidence: 0.88
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p04.1-iac-1-i',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb9',
      sourcePath: 'Vorlesungsfolien/IntWB9.pdf',
      publicLabel: "IntWB9",
      page: 4,
      section: "1 + iAC = (1 + i$ )",
      fingerprint: 'e21f4fc7a1ccaaa7',
      confidence: 0.88
    })
  ],
  kaufkraftparitaet: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p17.the-index-demonstrates-t',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb9',
      sourcePath: 'Vorlesungsfolien/IntWB9.pdf',
      publicLabel: "IntWB9",
      page: 17,
      section: "The index demonstrates the",
      fingerprint: '3d9c0b515f8f7dd1',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p13.seite-13',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb9',
      sourcePath: 'Vorlesungsfolien/IntWB9.pdf',
      publicLabel: "IntWB9",
      page: 13,
      section: "Seite 13",
      fingerprint: 'cfcbef36df0122fe',
      confidence: 0.88
    })
  ],
  monetaerer_ansatz: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p16.weltzinssatz-r',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb10',
      sourcePath: 'Vorlesungsfolien/IntWB10.pdf',
      publicLabel: "IntWB10",
      page: 16,
      section: "Weltzinssatz r∗ :",
      fingerprint: '75f6a4d6e220d1c3',
      confidence: 0.88
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p04.l-eur-yeur-l-us-yus',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb10',
      sourcePath: 'Vorlesungsfolien/IntWB10.pdf',
      publicLabel: "IntWB10",
      page: 4,
      section: "L̄EUR YEUR                            L̄US YUS",
      fingerprint: '64f689f59ff7ad59',
      confidence: 0.88
    })
  ],
  overshooting: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p27.erkla-rung-von-wechselku',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb11',
      sourcePath: 'Vorlesungsfolien/IntWB11.pdf',
      publicLabel: "IntWB11",
      page: 27,
      section: "Erklärung von Wechselkursen",
      fingerprint: '025fa3a1927c8994',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p16.kurzen-und-der-langen-fr',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb11',
      sourcePath: 'Vorlesungsfolien/IntWB11.pdf',
      publicLabel: "IntWB11",
      page: 16,
      section: "kurzen und der langen Frist",
      fingerprint: '213bc9ee2bf878da',
      confidence: 0.84
    })
  ],
  trilemma: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p15.q-a-a',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb12',
      sourcePath: 'Vorlesungsfolien/IntWB12.pdf',
      publicLabel: "IntWB12",
      page: 15,
      section: "q            A∗     A",
      fingerprint: 'ecb88d07447075bc',
      confidence: 0.88
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p22.beispiele-china-und-arge',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb12',
      sourcePath: 'Vorlesungsfolien/IntWB12.pdf',
      publicLabel: "IntWB12",
      page: 22,
      section: "Beispiele: China und Argentinien (Folie 18)",
      fingerprint: '9ef0c92a71da7c8a',
      confidence: 0.88
    })
  ],
  balassa_samuelson: [
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p05.feenstra-taylor-internat',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb12',
      sourcePath: 'Vorlesungsfolien/IntWB12.pdf',
      publicLabel: "IntWB12",
      page: 5,
      section: "Feenstra/Taylor, International Economics, 5e, © 2021 Worth Publishers",
      fingerprint: '5829ee59259e0f0a',
      confidence: 0.84
    }),
    anchor({
      id: 'internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p01.i-das-trilemma-der-wa-hr',
      sourceId: 'internationale-wirtschaftsbeziehungen-lecture-slide-internationale-wirtschaftsbeziehungen-vorlesungsfolien-intwb12',
      sourcePath: 'Vorlesungsfolien/IntWB12.pdf',
      publicLabel: "IntWB12",
      page: 1,
      section: "I Das Trilemma“der Währungspolitik",
      fingerprint: '7038bd37a51ec2db',
      confidence: 0.84
    })
  ]
});

