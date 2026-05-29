// ============================================================
// SOURCE ANCHORS — Recht
// Syllabus-heading pass (2026-05-28); section labels from heading candidates.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'exam-os-syllabus-pass-recht-anchors-1';

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

export const RECHT_SOURCE_ANCHORS = Object.freeze({
  was_ist_recht: [
    anchor({
      id: 'recht.was_ist_recht.1-was-ist-recht-k-pdf.p08.anerkannten-ungeschriebe',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-1-was-ist-recht-k',
      sourcePath: 'Vorlesungen/§_1_Was_ist_Recht-K.pdf',
      publicLabel: "§_1_Was_ist_Recht-K",
      page: 8,
      section: "anerkannten ungeschriebenen Normen (Gewohnheitsrecht) verstanden",
      fingerprint: '980792dd73f63ea8',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.was_ist_recht.1-was-ist-recht-k-pdf.p02.legislative-exekutive-ju',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-1-was-ist-recht-k',
      sourcePath: 'Vorlesungen/§_1_Was_ist_Recht-K.pdf',
      publicLabel: "§_1_Was_ist_Recht-K",
      page: 2,
      section: "Legislative                    Exekutive                      Judikative",
      fingerprint: '31f199cd5ccc1615',
      confidence: 0.84
    })
  ],
  privatrecht: [
    anchor({
      id: 'recht.privatrecht.2-privatrecht-k-pdf.p03.privatrecht-deliktsrecht',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-2-privatrecht-k',
      sourcePath: 'Vorlesungen/§_2_Privatrecht-K.pdf',
      publicLabel: "§_2_Privatrecht-K",
      page: 3,
      section: "-> Privatrecht (Deliktsrecht)",
      fingerprint: '437715bd77a81b2a',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.privatrecht.2-privatrecht-k-pdf.p07.2-privatrecht-erlas',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-2-privatrecht-k',
      sourcePath: 'Vorlesungen/§_2_Privatrecht-K.pdf',
      publicLabel: "§_2_Privatrecht-K",
      page: 7,
      section: "§ 2 Privatrecht         Erlas",
      fingerprint: '4a61a08922313b71',
      confidence: 0.84
    })
  ],
  methodik: [
    anchor({
      id: 'recht.methodik.3-juristische-methodik-k.p12.beispiel-auslegung-des-b',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-3-juristische-methodik-k',
      sourcePath: 'Vorlesungen/§_3_Juristische_Methodik-K.pdf',
      publicLabel: "§_3_Juristische_Methodik-K",
      page: 12,
      section: "Beispiel: Auslegung des Begriffs „Besitz“ in § 985 BGB",
      fingerprint: '71faa8397c5fc3d4',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.methodik.3-juristische-methodik-k.p03.beispiel-deliktischer-sc',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-3-juristische-methodik-k',
      sourcePath: 'Vorlesungen/§_3_Juristische_Methodik-K.pdf',
      publicLabel: "§_3_Juristische_Methodik-K",
      page: 3,
      section: "Beispiel: Deliktischer Schadenersatz",
      fingerprint: 'fcd8de7946feca02',
      confidence: 0.84
    })
  ],
  willenserklaerung: [
    anchor({
      id: 'recht.willenserklaerung.4-willenserkl-rung-vertr.p16.a-vertragsschluss-am-17-',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-4-willenserklarung-vertragsschluss-k',
      sourcePath: 'Vorlesungen/§_4_Willenserklärung,_Vertragsschluss-K.pdf',
      publicLabel: "§_4_Willenserklärung,_Vertragsschluss-K",
      page: 16,
      section: "A. Vertragsschluss am 17.12.2021",
      fingerprint: '2eafa722e7bc87e8',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.willenserklaerung.4-willenserkl-rung-vertr.p18.dr-simon-gerdemann',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-4-willenserklarung-vertragsschluss-k',
      sourcePath: 'Vorlesungen/§_4_Willenserklärung,_Vertragsschluss-K.pdf',
      publicLabel: "§_4_Willenserklärung,_Vertragsschluss-K",
      page: 18,
      section: "Dr. Simon   Gerdemann,",
      fingerprint: 'c41931916dd83fd7',
      confidence: 0.84
    })
  ],
  dissens: [
    anchor({
      id: 'recht.dissens.5-dissens-und-anfechtung.p05.wissen-dies-aber-nicht',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-5-dissens-und-anfechtung-k',
      sourcePath: 'Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf',
      publicLabel: "§_5_Dissens_und_Anfechtung-K",
      page: 5,
      section: "wissen dies aber nicht.",
      fingerprint: '70dad9233f36ef1f',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.dissens.5-dissens-und-anfechtung.p07.relevante-ausnahmen',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-5-dissens-und-anfechtung-k',
      sourcePath: 'Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf',
      publicLabel: "§_5_Dissens_und_Anfechtung-K",
      page: 7,
      section: "• Relevante Ausnahmen:",
      fingerprint: '074b1b105e15ba67',
      confidence: 0.84
    })
  ],
  anfechtung: [
    anchor({
      id: 'recht.anfechtung.5-dissens-und-anfechtung.p12.20-gro-e-toilettenpapier',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-5-dissens-und-anfechtung-k',
      sourcePath: 'Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf',
      publicLabel: "§_5_Dissens_und_Anfechtung-K",
      page: 12,
      section: "20 „große“ Toilettenpapierrollen bestellt. Tatsächlich bedeutet die (heute nicht mehr besonders übliche)",
      fingerprint: 'a30f4e914f74c4de',
      confidence: 0.88
    }),
    anchor({
      id: 'recht.anfechtung.5-dissens-und-anfechtung.p21.dr-simon-gerdemann',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-5-dissens-und-anfechtung-k',
      sourcePath: 'Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf',
      publicLabel: "§_5_Dissens_und_Anfechtung-K",
      page: 21,
      section: "Dr. Simon   Gerdemann,",
      fingerprint: 'd63e941f8239c564',
      confidence: 0.88
    })
  ],
  trennung_abstraktion: [
    anchor({
      id: 'recht.trennung_abstraktion.6-verpflichtungs-und-ver.p09.6-verpflichtungs-und-ver',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-6-verpflichtungs-und-verfugungsgeschafte-k',
      sourcePath: 'Vorlesungen/§_6_Verpflichtungs-_und_Verfügungsgeschäfte-K.pdf',
      publicLabel: "§_6_Verpflichtungs-_und_Verfügungsgeschäfte-K",
      page: 9,
      section: "§ 6 Verpflichtungs- und Verfügungsgeschäfte",
      fingerprint: '2172868740f615e5',
      confidence: 0.88
    }),
    anchor({
      id: 'recht.trennung_abstraktion.6-verpflichtungs-und-ver.p02.einleitende-frage',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-6-verpflichtungs-und-verfugungsgeschafte-k',
      sourcePath: 'Vorlesungen/§_6_Verpflichtungs-_und_Verfügungsgeschäfte-K.pdf',
      publicLabel: "§_6_Verpflichtungs-_und_Verfügungsgeschäfte-K",
      page: 2,
      section: "• Einleitende Frage:",
      fingerprint: 'e179dbb5e510bc5b',
      confidence: 0.84
    })
  ],
  geschaeftsfaehigkeit: [
    anchor({
      id: 'recht.geschaeftsfaehigkeit.7-rechts-und-gesch-ftsf-.p02.vertr-ge-schlie-en',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-7-rechts-und-geschaftsfahigkeit-k',
      sourcePath: 'Vorlesungen/§_7_Rechts-_und_Geschäftsfähigkeit-K.pdf',
      publicLabel: "§_7_Rechts-_und_Geschäftsfähigkeit-K",
      page: 2,
      section: "• Verträge schließen",
      fingerprint: 'f2038c39f1867a58',
      confidence: 0.88
    }),
    anchor({
      id: 'recht.geschaeftsfaehigkeit.7-rechts-und-gesch-ftsf-.p06.sind-auch-gesch-ftsf-hig',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-7-rechts-und-geschaftsfahigkeit-k',
      sourcePath: 'Vorlesungen/§_7_Rechts-_und_Geschäftsfähigkeit-K.pdf',
      publicLabel: "§_7_Rechts-_und_Geschäftsfähigkeit-K",
      page: 6,
      section: "sind, auch geschäftsfähig sind.",
      fingerprint: '580612c5f1399683',
      confidence: 0.88
    })
  ],
  stellvertretung: [
    anchor({
      id: 'recht.stellvertretung.8-stellvertretung-k-pdf.p04.8-die-stellvertretung',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-8-stellvertretung-k',
      sourcePath: 'Vorlesungen/§_8_Stellvertretung-K.pdf',
      publicLabel: "§_8_Stellvertretung-K",
      page: 4,
      section: "§ 8 Die Stellvertretung",
      fingerprint: '1202bde5a6df7276',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.stellvertretung.8-stellvertretung-k-pdf.p18.dr-simon-gerdemann',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-8-stellvertretung-k',
      sourcePath: 'Vorlesungen/§_8_Stellvertretung-K.pdf',
      publicLabel: "§_8_Stellvertretung-K",
      page: 18,
      section: "Dr. Simon   Gerdemann,",
      fingerprint: '2a073128498b0bc3',
      confidence: 0.84
    })
  ],
  agb: [
    anchor({
      id: 'recht.agb.9-agb-recht-k-pdf.p12.dr-simon-gerdemann-ll-m-',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-9-agb-recht-k',
      sourcePath: 'Vorlesungen/§_9_AGB-Recht-K.pdf',
      publicLabel: "§_9_AGB-Recht-K",
      page: 12,
      section: "Dr. Simon Gerdemann, LL.M.   (Berkeley)",
      fingerprint: '35b990af8ca08655',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.agb.9-agb-recht-k-pdf.p04.4-inhaltskontrolle-307-3',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-9-agb-recht-k',
      sourcePath: 'Vorlesungen/§_9_AGB-Recht-K.pdf',
      publicLabel: "§_9_AGB-Recht-K",
      page: 4,
      section: "• 4. Inhaltskontrolle, §§ 307-309 BGB",
      fingerprint: '72cc2322d3c9b2c1',
      confidence: 0.84
    })
  ],
  schuldrecht_intro: [
    anchor({
      id: 'recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p11.10-schuldrecht-einf-hrun',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-10-schuldrecht-at-einfuhrung-k',
      sourcePath: 'Vorlesungen/§_10_Schuldrecht_AT_-_Einführung-K.pdf',
      publicLabel: "§_10_Schuldrecht_AT_-_Einführung-K",
      page: 11,
      section: "§ 10 Schuldrecht - Einführung",
      fingerprint: 'a7756c0fbedc625a',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p13.271-bgb-und-einen-konkre',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-10-schuldrecht-at-einfuhrung-k',
      sourcePath: 'Vorlesungen/§_10_Schuldrecht_AT_-_Einführung-K.pdf',
      publicLabel: "§_10_Schuldrecht_AT_-_Einführung-K",
      page: 13,
      section: "271 BGB) und einen konkreten Leistungs- und Erfolgsort (vgl. § 269 BGB). Letztere",
      fingerprint: '7e13a9b90e255e9a',
      confidence: 0.84
    })
  ],
  schadensersatz: [
    anchor({
      id: 'recht.schadensersatz.11-schuldrecht-at-schade.p14.d-fall-mit-l-sungsskizze',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-11-schuldrecht-at-schadenersatz-k',
      sourcePath: 'Vorlesungen/§_11_Schuldrecht_AT_-_Schadenersatz-K.pdf',
      publicLabel: "§_11_Schuldrecht_AT_-_Schadenersatz-K",
      page: 14,
      section: "D. Fall mit Lösungsskizze zum Abschluss",
      fingerprint: 'f743ea46d44ec086',
      confidence: 0.88
    }),
    anchor({
      id: 'recht.schadensersatz.11-schuldrecht-at-schade.p16.ii-pflichtverletzung',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-11-schuldrecht-at-schadenersatz-k',
      sourcePath: 'Vorlesungen/§_11_Schuldrecht_AT_-_Schadenersatz-K.pdf',
      publicLabel: "§_11_Schuldrecht_AT_-_Schadenersatz-K",
      page: 16,
      section: "II. Pflichtverletzung",
      fingerprint: '21dbd598fa1f39e5',
      confidence: 0.88
    })
  ],
  ruecktritt: [
    anchor({
      id: 'recht.ruecktritt.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-12-schuldrecht-at-rucktritt-und-verbraucher-widerruf-k',
      sourcePath: 'Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf',
      publicLabel: "§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K",
      page: 2,
      section: "und Verbraucher-Widerruf",
      fingerprint: '24bea545c6da94f8',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.ruecktritt.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-12-schuldrecht-at-rucktritt-und-verbraucher-widerruf-k',
      sourcePath: 'Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf',
      publicLabel: "§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K",
      page: 4,
      section: "C. Verbraucher-Widerruf - Überblick",
      fingerprint: '78c3fc585b319759',
      confidence: 0.84
    })
  ],
  verbraucherwiderruf: [
    anchor({
      id: 'recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-12-schuldrecht-at-rucktritt-und-verbraucher-widerruf-k',
      sourcePath: 'Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf',
      publicLabel: "§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K",
      page: 2,
      section: "und Verbraucher-Widerruf",
      fingerprint: '24bea545c6da94f8',
      confidence: 0.84
    }),
    anchor({
      id: 'recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b',
      sourceId: 'recht-lecture-slide-recht-vorlesungen-12-schuldrecht-at-rucktritt-und-verbraucher-widerruf-k',
      sourcePath: 'Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf',
      publicLabel: "§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K",
      page: 4,
      section: "C. Verbraucher-Widerruf - Überblick",
      fingerprint: '78c3fc585b319759',
      confidence: 0.84
    })
  ]
});

