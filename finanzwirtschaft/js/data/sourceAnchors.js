// ============================================================
// SOURCE ANCHORS — Finanzwirtschaft
// Syllabus-heading pass (2026-05-28); section labels from heading candidates.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'exam-os-syllabus-pass-finanz-anchors-1';

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

export const FINANZWIRTSCHAFT_SOURCE_ANCHORS = Object.freeze({
  finanz_denkweise: [
    anchor({
      id: 'finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p20.23-10-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v1-studip',
      sourcePath: 'V1_StudIP.pdf',
      publicLabel: "V1_StudIP",
      page: 20,
      section: "23.10.2024                                       Georg-August-Universität Göttingen   20",
      fingerprint: '1dee050a29fa5d48',
      confidence: 0.84
    }),
    anchor({
      id: 'finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p14.23-10-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v1-studip',
      sourcePath: 'V1_StudIP.pdf',
      publicLabel: "V1_StudIP",
      page: 14,
      section: "23.10.2024                                        Georg-August-Universität Göttingen   14",
      fingerprint: '9d411c7c71c1e79f',
      confidence: 0.84
    })
  ],
  liquiditaetsplanung: [
    anchor({
      id: 'finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p03.06-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v2-studip',
      sourcePath: 'V2_StudIP.pdf',
      publicLabel: "V2_StudIP",
      page: 3,
      section: "06.11.2024                      Georg-August-Universität Göttingen                                                  3",
      fingerprint: 'a3153466072f082c',
      confidence: 0.84
    }),
    anchor({
      id: 'finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p15.06-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v2-studip',
      sourcePath: 'V2_StudIP.pdf',
      publicLabel: "V2_StudIP",
      page: 15,
      section: "06.11.2024                                           Georg-August-Universität Göttingen            15",
      fingerprint: 'e360e3eb7db84203',
      confidence: 0.84
    })
  ],
  kapitalmarkt_bewertung: [
    anchor({
      id: 'finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p16.06-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v2-studip',
      sourcePath: 'V2_StudIP.pdf',
      publicLabel: "V2_StudIP",
      page: 16,
      section: "06.11.2024                                         Georg-August-Universität Göttingen   16",
      fingerprint: 'e4ae40f5c12cec48',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p07.06-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v2-studip',
      sourcePath: 'V2_StudIP.pdf',
      publicLabel: "V2_StudIP",
      page: 7,
      section: "06.11.2024                                       Georg-August-Universität Göttingen                                           7",
      fingerprint: '38ab8e19569347e9',
      confidence: 0.84
    })
  ],
  institutionen_marktunvollkommenheit: [
    anchor({
      id: 'finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p13.06-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v2-studip',
      sourcePath: 'V2_StudIP.pdf',
      publicLabel: "V2_StudIP",
      page: 13,
      section: "06.11.2024                                    Georg-August-Universität Göttingen                             13",
      fingerprint: '9a117855eef19eb4',
      confidence: 0.84
    }),
    anchor({
      id: 'finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p03.06-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v2-studip',
      sourcePath: 'V2_StudIP.pdf',
      publicLabel: "V2_StudIP",
      page: 3,
      section: "06.11.2024                      Georg-August-Universität Göttingen                                                  3",
      fingerprint: 'a3153466072f082c',
      confidence: 0.84
    })
  ],
  intertemporale_wahl: [
    anchor({
      id: 'finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p13.13-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v3-studip',
      sourcePath: 'V3_StudIP.pdf',
      publicLabel: "V3_StudIP",
      page: 13,
      section: "13.11.2024                                       Georg-August-Universität Göttingen                                     13",
      fingerprint: 'f217b3667082d6f4',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p15.13-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v3-studip',
      sourcePath: 'V3_StudIP.pdf',
      publicLabel: "V3_StudIP",
      page: 15,
      section: "13.11.2024                                          Georg-August-Universität Göttingen   15",
      fingerprint: 'b422b9d5bcea4c2e',
      confidence: 0.88
    })
  ],
  kapitalwert_fisher: [
    anchor({
      id: 'finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p07.27-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v5-studip',
      sourcePath: 'V5_StudIP.pdf',
      publicLabel: "V5_StudIP",
      page: 7,
      section: "27.11.2024                                            Georg-August-Universität Göttingen                                7",
      fingerprint: 'bac5bdfab8fbbb22',
      confidence: 0.84
    }),
    anchor({
      id: 'finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p14.27-11-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v5-studip',
      sourcePath: 'V5_StudIP.pdf',
      publicLabel: "V5_StudIP",
      page: 14,
      section: "27.11.2024                                  Georg-August-Universität Göttingen                    14",
      fingerprint: '00af5dd6acc83560',
      confidence: 0.84
    })
  ],
  auf_abzinsen: [
    anchor({
      id: 'finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p08.04-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v6-studip',
      sourcePath: 'V6_StudIP.pdf',
      publicLabel: "V6_StudIP",
      page: 8,
      section: "04.12.2024                                        Georg-August-Universität Göttingen                                    8",
      fingerprint: 'bfc88cb7f803c55b',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p10.04-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v6-studip',
      sourcePath: 'V6_StudIP.pdf',
      publicLabel: "V6_StudIP",
      page: 10,
      section: "04.12.2024                                         Georg-August-Universität Göttingen                                  10",
      fingerprint: 'b075610127e91d8a',
      confidence: 0.88
    })
  ],
  renten_endwert: [
    anchor({
      id: 'finanzwirtschaft.renten_endwert.v6-studip-pdf.p06.04-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v6-studip',
      sourcePath: 'V6_StudIP.pdf',
      publicLabel: "V6_StudIP",
      page: 6,
      section: "04.12.2024                                              Georg-August-Universität Göttingen                                         6",
      fingerprint: '7acb7a42da2cbe66',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.renten_endwert.v6-studip-pdf.p02.04-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v6-studip',
      sourcePath: 'V6_StudIP.pdf',
      publicLabel: "V6_StudIP",
      page: 2,
      section: "04.12.2024                                         Georg-August-Universität Göttingen   2",
      fingerprint: '6e9476b9faa613bb',
      confidence: 0.84
    })
  ],
  annuitaeten_finanzplan: [
    anchor({
      id: 'finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p11.11-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v7-studip',
      sourcePath: 'V7_StudIP.pdf',
      publicLabel: "V7_StudIP",
      page: 11,
      section: "11.12.2024                                          Georg-August-Universität Göttingen                                                 11",
      fingerprint: '3a4f5d6c9c0392fe',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p08.11-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v7-studip',
      sourcePath: 'V7_StudIP.pdf',
      publicLabel: "V7_StudIP",
      page: 8,
      section: "11.12.2024                                         Georg-August-Universität Göttingen                              8",
      fingerprint: '23ac56704631f57a',
      confidence: 0.88
    })
  ],
  izf_kapitalwertfunktion: [
    anchor({
      id: 'finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p03.18-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v8-studip',
      sourcePath: 'V8_StudIP.pdf',
      publicLabel: "V8_StudIP",
      page: 3,
      section: "18.12.2024                                Georg-August-Universität Göttingen                            3",
      fingerprint: '67aad3ee6dce58eb',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p05.18-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v8-studip',
      sourcePath: 'V8_StudIP.pdf',
      publicLabel: "V8_StudIP",
      page: 5,
      section: "18.12.2024                                              Georg-August-Universität Göttingen       5",
      fingerprint: '110692c2b066831c',
      confidence: 0.84
    })
  ],
  izf_grenzen: [
    anchor({
      id: 'finanzwirtschaft.izf_grenzen.v8-studip-pdf.p03.18-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v8-studip',
      sourcePath: 'V8_StudIP.pdf',
      publicLabel: "V8_StudIP",
      page: 3,
      section: "18.12.2024                                Georg-August-Universität Göttingen                            3",
      fingerprint: '67aad3ee6dce58eb',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.izf_grenzen.v8-studip-pdf.p05.18-12-2024-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v8-studip',
      sourcePath: 'V8_StudIP.pdf',
      publicLabel: "V8_StudIP",
      page: 5,
      section: "18.12.2024                                              Georg-August-Universität Göttingen       5",
      fingerprint: '110692c2b066831c',
      confidence: 0.84
    })
  ],
  unsicherheit: [
    anchor({
      id: 'finanzwirtschaft.unsicherheit.v9-studip-pdf.p18.08-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v9-studip',
      sourcePath: 'V9_StudIP.pdf',
      publicLabel: "V9_StudIP",
      page: 18,
      section: "08.01.2025                                           Georg-August-Universität Göttingen                    18",
      fingerprint: '2872bf8a2bd87947',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.unsicherheit.v9-studip-pdf.p25.08-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v9-studip',
      sourcePath: 'V9_StudIP.pdf',
      publicLabel: "V9_StudIP",
      page: 25,
      section: "08.01.2025                                             Georg-August-Universität Göttingen   25",
      fingerprint: '897c2005bf3eafad',
      confidence: 0.88
    })
  ],
  risikoadjustierter_kapitalwert: [
    anchor({
      id: 'finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p09.08-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v9-studip',
      sourcePath: 'V9_StudIP.pdf',
      publicLabel: "V9_StudIP",
      page: 9,
      section: "08.01.2025                                             Georg-August-Universität Göttingen                            9",
      fingerprint: '83419e4d4dc8e261',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p17.08-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v9-studip',
      sourcePath: 'V9_StudIP.pdf',
      publicLabel: "V9_StudIP",
      page: 17,
      section: "08.01.2025                                     Georg-August-Universität Göttingen                             17",
      fingerprint: '2b409c1224a357fe',
      confidence: 0.88
    })
  ],
  bezugsrecht: [
    anchor({
      id: 'finanzwirtschaft.bezugsrecht.v10-studip-pdf.p09.15-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v10-studip',
      sourcePath: 'V10_StudIP.pdf',
      publicLabel: "V10_StudIP",
      page: 9,
      section: "15.01.2025                                              Georg-August-Universität Göttingen   9",
      fingerprint: 'f2c33a41479305cb',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.bezugsrecht.v10-studip-pdf.p19.15-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v10-studip',
      sourcePath: 'V10_StudIP.pdf',
      publicLabel: "V10_StudIP",
      page: 19,
      section: "15.01.2025                                          Georg-August-Universität Göttingen                                   19",
      fingerprint: 'e0dd1a89261d9506',
      confidence: 0.88
    })
  ],
  eigenkapitalkosten: [
    anchor({
      id: 'finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p06.15-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v10-studip',
      sourcePath: 'V10_StudIP.pdf',
      publicLabel: "V10_StudIP",
      page: 6,
      section: "15.01.2025                                     Georg-August-Universität Göttingen   6",
      fingerprint: 'd04e11b371c6e8fb',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p03.15-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v10-studip',
      sourcePath: 'V10_StudIP.pdf',
      publicLabel: "V10_StudIP",
      page: 3,
      section: "15.01.2025                                        Georg-August-Universität Göttingen   3",
      fingerprint: '633bb78d152be378',
      confidence: 0.88
    })
  ],
  fremdkapitalkosten: [
    anchor({
      id: 'finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p08.22-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v11-studip',
      sourcePath: 'V11_StudIP.pdf',
      publicLabel: "V11_StudIP",
      page: 8,
      section: "22.01.2025                                           Georg-August-Universität Göttingen   8",
      fingerprint: '1a3e46ac874e1147',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p05.22-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v11-studip',
      sourcePath: 'V11_StudIP.pdf',
      publicLabel: "V11_StudIP",
      page: 5,
      section: "22.01.2025                                       Georg-August-Universität Göttingen                                                5",
      fingerprint: '614a31a06098acbd',
      confidence: 0.88
    })
  ],
  wacc: [
    anchor({
      id: 'finanzwirtschaft.wacc.v11-studip-pdf.p09.22-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v11-studip',
      sourcePath: 'V11_StudIP.pdf',
      publicLabel: "V11_StudIP",
      page: 9,
      section: "22.01.2025                                    Georg-August-Universität Göttingen   9",
      fingerprint: 'c6d2af37d30f9ad4',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.wacc.v11-studip-pdf.p04.22-01-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v11-studip',
      sourcePath: 'V11_StudIP.pdf',
      publicLabel: "V11_StudIP",
      page: 4,
      section: "22.01.2025                                     Georg-August-Universität Göttingen   4",
      fingerprint: 'f4805b28b45b6af2',
      confidence: 0.88
    })
  ],
  wacc_leverage: [
    anchor({
      id: 'finanzwirtschaft.wacc_leverage.v12-studip-pdf.p04.02-02-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v12-studip',
      sourcePath: 'V12_StudIP.pdf',
      publicLabel: "V12_StudIP",
      page: 4,
      section: "02.02.2025                                        Georg-August-Universität Göttingen   4",
      fingerprint: '6e58e68e1585096f',
      confidence: 0.88
    }),
    anchor({
      id: 'finanzwirtschaft.wacc_leverage.v12-studip-pdf.p02.02-02-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v12-studip',
      sourcePath: 'V12_StudIP.pdf',
      publicLabel: "V12_StudIP",
      page: 2,
      section: "02.02.2025                                      Georg-August-Universität Göttingen   2",
      fingerprint: '009fcb968b61f277',
      confidence: 0.88
    })
  ],
  modigliani_miller: [
    anchor({
      id: 'finanzwirtschaft.modigliani_miller.v12-studip-pdf.p08.02-02-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v12-studip',
      sourcePath: 'V12_StudIP.pdf',
      publicLabel: "V12_StudIP",
      page: 8,
      section: "02.02.2025                                             Georg-August-Universität Göttingen                                8",
      fingerprint: '9d218de8238cc916',
      confidence: 0.84
    }),
    anchor({
      id: 'finanzwirtschaft.modigliani_miller.v12-studip-pdf.p03.02-02-2025-georg-august-',
      sourceId: 'finanzwirtschaft-lecture-slide-finanzwirtschaft-v12-studip',
      sourcePath: 'V12_StudIP.pdf',
      publicLabel: "V12_StudIP",
      page: 3,
      section: "02.02.2025                                         Georg-August-Universität Göttingen           3",
      fingerprint: 'b57c46ffc674440e',
      confidence: 0.88
    })
  ]
});

