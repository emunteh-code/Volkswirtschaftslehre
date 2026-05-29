// ============================================================
// SOURCE ANCHORS — Makroökonomik I
// Syllabus-heading pass (2026-05-28); section labels from heading candidates.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'exam-os-syllabus-pass-makro1-anchors-1';

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

export const MAKRO1_SOURCE_ANCHORS = Object.freeze({
  makro_rahmen: [
    anchor({
      id: 'makro1.makro_rahmen.vl-1-pdf.p28.makroo-konomik-offener-v',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-1',
      sourcePath: 'Vorlesungen/VL_1.pdf',
      publicLabel: "VL_1",
      page: 28,
      section: "Makroökonomik offener Volkswirtschaften) behandeln",
      fingerprint: '5f3fffaba7ec318e',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.makro_rahmen.vl-1-pdf.p14.1-rt-e',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-1',
      sourcePath: 'Vorlesungen/VL_1.pdf',
      publicLabel: "VL_1",
      page: 14,
      section: "1 + rt        =            e",
      fingerprint: 'eca1af2386278aa6',
      confidence: 0.88
    })
  ],
  vgr: [
    anchor({
      id: 'makro1.vgr.vl-2-pdf.p36.das-bruttoinlandsprodukt',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-2',
      sourcePath: 'Vorlesungen/VL_2.pdf',
      publicLabel: "VL_2",
      page: 36,
      section: "Das Bruttoinlandsprodukt",
      fingerprint: '889a236ffccb1b11',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.vgr.vl-2-pdf.p15.das-bruttoinlandsprodukt',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-2',
      sourcePath: 'Vorlesungen/VL_2.pdf',
      publicLabel: "VL_2",
      page: 15,
      section: "Das Bruttoinlandsprodukt",
      fingerprint: '33d378b3b5e38312',
      confidence: 0.88
    })
  ],
  guetermarkt: [
    anchor({
      id: 'makro1.guetermarkt.vl-3-pdf.p36.sollten-wir-mehr-sparen',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-3',
      sourcePath: 'Vorlesungen/VL_3.pdf',
      publicLabel: "VL_3",
      page: 36,
      section: "Sollten wir mehr Sparen?",
      fingerprint: '69363e2dfebf14e7',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.guetermarkt.vl-3-pdf.p15.formale-analyse',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-3',
      sourcePath: 'Vorlesungen/VL_3.pdf',
      publicLabel: "VL_3",
      page: 15,
      section: "Formale Analyse",
      fingerprint: '3c70ec341c243f62',
      confidence: 0.88
    })
  ],
  multiplikator: [
    anchor({
      id: 'makro1.multiplikator.vl-3-pdf.p36.sollten-wir-mehr-sparen',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-3',
      sourcePath: 'Vorlesungen/VL_3.pdf',
      publicLabel: "VL_3",
      page: 36,
      section: "Sollten wir mehr Sparen?",
      fingerprint: '69363e2dfebf14e7',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.multiplikator.vl-3-pdf.p15.formale-analyse',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-3',
      sourcePath: 'Vorlesungen/VL_3.pdf',
      publicLabel: "VL_3",
      page: 15,
      section: "Formale Analyse",
      fingerprint: '3c70ec341c243f62',
      confidence: 0.88
    })
  ],
  geldnachfrage: [
    anchor({
      id: 'makro1.geldnachfrage.vl-4-pdf.p07.entscheidung-u-ber-liqui',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-4',
      sourcePath: 'Vorlesungen/VL_4.pdf',
      publicLabel: "VL_4",
      page: 7,
      section: "Entscheidung über Liquidität",
      fingerprint: 'dc7db1ee94da617a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.geldnachfrage.vl-4-pdf.p11.bargeld-sichteinlagen',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-4',
      sourcePath: 'Vorlesungen/VL_4.pdf',
      publicLabel: "VL_4",
      page: 11,
      section: "Bargeld + Sichteinlagen",
      fingerprint: '9f5a0e1dd986f839',
      confidence: 0.88
    })
  ],
  banken: [
    anchor({
      id: 'makro1.banken.vl-4-pdf.p07.entscheidung-u-ber-liqui',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-4',
      sourcePath: 'Vorlesungen/VL_4.pdf',
      publicLabel: "VL_4",
      page: 7,
      section: "Entscheidung über Liquidität",
      fingerprint: 'dc7db1ee94da617a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.banken.vl-4-pdf.p11.bargeld-sichteinlagen',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-4',
      sourcePath: 'Vorlesungen/VL_4.pdf',
      publicLabel: "VL_4",
      page: 11,
      section: "Bargeld + Sichteinlagen",
      fingerprint: '9f5a0e1dd986f839',
      confidence: 0.88
    })
  ],
  islm: [
    anchor({
      id: 'makro1.islm.vl-5-pdf.p13.einkommen-der-konsum-und',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-5',
      sourcePath: 'Vorlesungen/VL_5.pdf',
      publicLabel: "VL_5",
      page: 13,
      section: "Einkommen, der Konsum und auch die gesamte Nachfrage",
      fingerprint: '7c7103e3cf006e71',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.islm.vl-5-pdf.p17.1-feststellen-ob-sich-du',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-5',
      sourcePath: 'Vorlesungen/VL_5.pdf',
      publicLabel: "VL_5",
      page: 17,
      section: "1   Feststellen, ob sich durch eine Politikveränderung die IS- oder die",
      fingerprint: 'fc65005a68bcc02f',
      confidence: 0.88
    })
  ],
  politikmix: [
    anchor({
      id: 'makro1.politikmix.vl-5-pdf.p13.einkommen-der-konsum-und',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-5',
      sourcePath: 'Vorlesungen/VL_5.pdf',
      publicLabel: "VL_5",
      page: 13,
      section: "Einkommen, der Konsum und auch die gesamte Nachfrage",
      fingerprint: '7c7103e3cf006e71',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.politikmix.vl-5-pdf.p17.1-feststellen-ob-sich-du',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-5',
      sourcePath: 'Vorlesungen/VL_5.pdf',
      publicLabel: "VL_5",
      page: 17,
      section: "1   Feststellen, ob sich durch eine Politikveränderung die IS- oder die",
      fingerprint: 'fc65005a68bcc02f',
      confidence: 0.88
    })
  ],
  realzins_fisher_erwartungen: [
    anchor({
      id: 'makro1.realzins_fisher_erwartungen.kap6-pdf.p23.die-auswirkungen-eines-s',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-kap6',
      sourcePath: 'Vorlesungen/Kap6.pdf',
      publicLabel: "Kap6",
      page: 23,
      section: "Die Auswirkungen eines Schocks im Finanzsektor",
      fingerprint: '1f0d76371ccce0c0',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.realzins_fisher_erwartungen.kap6-pdf.p27.probleme-der-hohen-fremd',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-kap6',
      sourcePath: 'Vorlesungen/Kap6.pdf',
      publicLabel: "Kap6",
      page: 27,
      section: "Probleme der hohen Fremdfinanzierung:",
      fingerprint: '9b71d333cad6e285',
      confidence: 0.88
    })
  ],
  realzins_risikopraemie_krisenkanal: [
    anchor({
      id: 'makro1.realzins_risikopraemie_krisenkanal.kap6-pdf.p23.die-auswirkungen-eines-s',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-kap6',
      sourcePath: 'Vorlesungen/Kap6.pdf',
      publicLabel: "Kap6",
      page: 23,
      section: "Die Auswirkungen eines Schocks im Finanzsektor",
      fingerprint: '1f0d76371ccce0c0',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.realzins_risikopraemie_krisenkanal.kap6-pdf.p27.probleme-der-hohen-fremd',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-kap6',
      sourcePath: 'Vorlesungen/Kap6.pdf',
      publicLabel: "Kap6",
      page: 27,
      section: "Probleme der hohen Fremdfinanzierung:",
      fingerprint: '9b71d333cad6e285',
      confidence: 0.88
    })
  ],
  arbeitsmarkt: [
    anchor({
      id: 'makro1.arbeitsmarkt.vl-7-pdf.p35.das-produktionspotential',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-7',
      sourcePath: 'Vorlesungen/VL_7.pdf',
      publicLabel: "VL_7",
      page: 35,
      section: "(das Produktionspotential).",
      fingerprint: '8aaabbe69f1c524d',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.arbeitsmarkt.vl-7-pdf.p23.preissetzungsgleichung',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-7',
      sourcePath: 'Vorlesungen/VL_7.pdf',
      publicLabel: "VL_7",
      page: 23,
      section: "Preissetzungsgleichung",
      fingerprint: '0a9bf8e507700ba1',
      confidence: 0.88
    })
  ],
  phillips: [
    anchor({
      id: 'makro1.phillips.vl-8-pdf.p28.unterschiede-zwischen-de',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-8',
      sourcePath: 'Vorlesungen/VL_8.pdf',
      publicLabel: "VL_8",
      page: 28,
      section: "Unterschiede zwischen den einzelnen Ländern",
      fingerprint: '7eb7101c3b99bf90',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.phillips.vl-8-pdf.p04.erwartete-inflation',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-8',
      sourcePath: 'Vorlesungen/VL_8.pdf',
      publicLabel: "VL_8",
      page: 4,
      section: ", erwartete Inflation",
      fingerprint: '6f4edd04063194ee',
      confidence: 0.88
    })
  ],
  islmpc: [
    anchor({
      id: 'makro1.islmpc.vl-8-pdf.p28.unterschiede-zwischen-de',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-8',
      sourcePath: 'Vorlesungen/VL_8.pdf',
      publicLabel: "VL_8",
      page: 28,
      section: "Unterschiede zwischen den einzelnen Ländern",
      fingerprint: '7eb7101c3b99bf90',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.islmpc.vl-8-pdf.p04.erwartete-inflation',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-8',
      sourcePath: 'Vorlesungen/VL_8.pdf',
      publicLabel: "VL_8",
      page: 4,
      section: ", erwartete Inflation",
      fingerprint: '6f4edd04063194ee',
      confidence: 0.88
    })
  ],
  erwartungen: [
    anchor({
      id: 'makro1.erwartungen.vl-8-pdf.p28.unterschiede-zwischen-de',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-8',
      sourcePath: 'Vorlesungen/VL_8.pdf',
      publicLabel: "VL_8",
      page: 28,
      section: "Unterschiede zwischen den einzelnen Ländern",
      fingerprint: '7eb7101c3b99bf90',
      confidence: 0.88
    }),
    anchor({
      id: 'makro1.erwartungen.vl-8-pdf.p04.erwartete-inflation',
      sourceId: 'makro1-lecture-slide-makrookonomik-i-vorlesungen-vl-8',
      sourcePath: 'Vorlesungen/VL_8.pdf',
      publicLabel: "VL_8",
      page: 4,
      section: ", erwartete Inflation",
      fingerprint: '6f4edd04063194ee',
      confidence: 0.88
    })
  ]
});

