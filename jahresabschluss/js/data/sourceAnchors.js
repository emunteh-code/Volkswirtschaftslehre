// ============================================================
// SOURCE ANCHORS — Jahresabschluss
// Syllabus-heading pass (2026-05-28); section labels from heading candidates.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'exam-os-syllabus-pass-ja-anchors-1';

function anchor({
  id,
  sourceId,
  sourcePath,
  publicLabel,
  page,
  section,
  fingerprint,
  confidence = 0.82,
  reviewedBy = REVIEWED_BY,
  reviewedAt = REVIEWED_AT
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
    reviewedBy,
    reviewedAt
  };
}

export const JAHRESABSCHLUSS_SOURCE_ANCHORS = Object.freeze({
  rechnungswesen_intro: [
    anchor({
      id: 'jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p09.berarbeitete-auflage-sch',
      sourceId: 'jahresabschluss-supplement-jahresabschluss-orga-kapitel1',
      sourcePath: 'Orga+Kapitel1.pdf',
      publicLabel: "Orga+Kapitel1",
      page: 9,
      section: "überarbeitete Auflage, Schäffer-Poeschel Verlag Stuttgart.",
      fingerprint: 'b6d511c49ff783ef',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p07.ws-2024-25-jahresabschlu',
      sourceId: 'jahresabschluss-supplement-jahresabschluss-orga-kapitel1',
      sourcePath: 'Orga+Kapitel1.pdf',
      publicLabel: "Orga+Kapitel1",
      page: 7,
      section: "WS 2024/25                                Jahresabschluss - Prof. Dr. Vanessa Flagmeier           7",
      fingerprint: '4aa70680d05bfedd',
      confidence: 0.88
    })
  ],
  gob_rechtsgrundlagen: [
    anchor({
      id: 'jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p22.2-2-von-der-inventur-zur',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel2',
      sourcePath: 'Kapitel2.pdf',
      publicLabel: "Kapitel2",
      page: 22,
      section: "2.2 VON DER INVENTUR ZUR BILANZ – DIE BILANZ",
      fingerprint: '598084b0c6f4fea6',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p29.ansatz-mit-den-fortgef-h',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel2',
      sourcePath: 'Kapitel2.pdf',
      publicLabel: "Kapitel2",
      page: 29,
      section: "− Ansatz mit den fortgeführten Erfüllungsbeträgen",
      fingerprint: 'cff081aba4102beb',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a1.p1.grundlagen-gob',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 1: Grundlagen & GoB (6 Punkte)',
      fingerprint: 'a7c77103d9e8aad8',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-7',
      reviewedAt: '2026-06-09'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a1.p1.grundlagen-gob',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 1 – Grundlagen & GoB (6 Punkte)',
      fingerprint: '9ae1b3976e4e36e2',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-7',
      reviewedAt: '2026-06-09'
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a2.p1.massgeblichkeit-latente-steuern',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 2: Maßgeblichkeitsprinzip & latente Steuern (6 Punkte)',
      fingerprint: '9800d3bb12289879',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-8',
      reviewedAt: '2026-06-15'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a2.p1.massgeblichkeit-latente-steuern',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 2 – Maßgeblichkeit & latente Steuern (6 Punkte)',
      fingerprint: '9e17528cad5e8d66',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-8',
      reviewedAt: '2026-06-15'
    })
  ],
  inventur_inventar_bilanzansatz: [
    anchor({
      id: 'jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p08.2-1-rechtsgrundlagen-rec',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel2',
      sourcePath: 'Kapitel2.pdf',
      publicLabel: "Kapitel2",
      page: 8,
      section: "2.1 RECHTSGRUNDLAGEN - RECHTSFORMEN",
      fingerprint: 'e33ec5ae1241ed3f',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p14.2-1-rechtsgrundlagen-sys',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel2',
      sourcePath: 'Kapitel2.pdf',
      publicLabel: "Kapitel2",
      page: 14,
      section: "2.1 RECHTSGRUNDLAGEN – SYSTEMATIK DER GOB",
      fingerprint: 'd285c92fbde040bf',
      confidence: 0.84
    })
  ],
  buchen_konten: [
    anchor({
      id: 'jahresabschluss.buchen_konten.kapitel3-pdf.p23.3-3-bilanzielle-wertbewe',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel3',
      sourcePath: 'Kapitel3.pdf',
      publicLabel: "Kapitel3",
      page: 23,
      section: "3.3 BILANZIELLE WERTBEWEGUNGEN – DOPPELTE BUCHFÜHRUNG",
      fingerprint: '74b2ceaacb4cd849',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.buchen_konten.kapitel3-pdf.p14.ab-ab',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel3',
      sourcePath: 'Kapitel3.pdf',
      publicLabel: "Kapitel3",
      page: 14,
      section: "AB                                                                                           AB",
      fingerprint: 'f4aa4d69fa0c14dd',
      confidence: 0.88
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a4.p1.buchungstechnik-guv',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 4: Buchungstechnik und GuV (6 Punkte)',
      fingerprint: '907b63780b0693bb',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-10',
      reviewedAt: '2026-06-15'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a4.p1.buchung-guv',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 4 – Buchung & GuV (6 Punkte)',
      fingerprint: '9325dce88829a17f',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-10',
      reviewedAt: '2026-06-15'
    })
  ],
  buchfuehrung_orga: [
    anchor({
      id: 'jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p12.4-3-belegorganisation-gr',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel4',
      sourcePath: 'Kapitel4.pdf',
      publicLabel: "Kapitel4",
      page: 12,
      section: "4.3 BELEGORGANISATION – GRUNDLAGEN",
      fingerprint: 'c0d1656c312c4879',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p10.kontenrahmens-in-konteng',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel4',
      sourcePath: 'Kapitel4.pdf',
      publicLabel: "Kapitel4",
      page: 10,
      section: "Kontenrahmens in Kontengruppen, -arten und –unterarten.",
      fingerprint: '7071c9f389ce8711',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a3.p1.buchfuehrung-kontenrahmen',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 3: Buchführung und Kontenrahmen (6 Punkte)',
      fingerprint: 'd7f5595bf46a403b',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-9',
      reviewedAt: '2026-06-15'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a3.p1.buchfuehrung-belege',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 3 – Buchführung & Belege (6 Punkte)',
      fingerprint: '418c28d84760360e',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-9',
      reviewedAt: '2026-06-15'
    })
  ],
  anlagevermoegen: [
    anchor({
      id: 'jahresabschluss.anlagevermoegen.kapitel5-pdf.p03.die-bilanz-bilanzpositio',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel5',
      sourcePath: 'Kapitel5.pdf',
      publicLabel: "Kapitel5",
      page: 3,
      section: "DIE BILANZ – BILANZPOSITION",
      fingerprint: '43922fae4f2fab53',
      confidence: 0.88
    }),
    anchor({
      id: 'jahresabschluss.anlagevermoegen.kapitel5-pdf.p13.t1-120-000-15-000-105-00',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel5',
      sourcePath: 'Kapitel5.pdf',
      publicLabel: "Kapitel5",
      page: 13,
      section: "t1         120.000,--                             15.000,--                                 105.000,--",
      fingerprint: '6748ad22eca338bb',
      confidence: 0.88
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a5.p1.anlagevermoegen-afa-verkauf',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 5: Abschreibung und Anlagenverkauf (8 Punkte)',
      fingerprint: 'fabd491c27afd8fe',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-1',
      reviewedAt: '2026-06-08'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a5.p1.anlagevermoegen-afa-verkauf',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 5 – Anlagevermögen (8 Punkte)',
      fingerprint: '05889e099c633cc3',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-1',
      reviewedAt: '2026-06-08'
    })
  ],
  umlauf_bewertung_verfahren: [
    anchor({
      id: 'jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p10.6-2-bewertungsvereinfach',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel6-1-6-5',
      sourcePath: 'Kapitel6.1-6.5.pdf',
      publicLabel: "Kapitel6.1-6.5",
      page: 10,
      section: "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – FIFO-METHODE (FIRST IN = FIRST OUT)",
      fingerprint: '2f46a637105e2a35',
      confidence: 0.88
    }),
    anchor({
      id: 'jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p18.aufwendungen-f-rohstoffe',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel6-1-6-5',
      sourcePath: 'Kapitel6.1-6.5.pdf',
      publicLabel: "Kapitel6.1-6.5",
      page: 18,
      section: "Aufwendungen f. Rohstoffe                                   Bestandserhöhung",
      fingerprint: 'b557c2a3e746b324',
      confidence: 0.88
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a6.p1.vorraete-durchschnitt-fifo',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 6: Bewertung von Vorräten (6 Punkte)',
      fingerprint: '225639cc0abe7601',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-2',
      reviewedAt: '2026-06-08'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a6.p1.vorraete-durchschnitt-fifo',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 6 – Vorräte (6 Punkte)',
      fingerprint: '3e30103eb50d56cd',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-2',
      reviewedAt: '2026-06-08'
    })
  ],
  werkstoffe_erzeugnisse_buchungen: [
    anchor({
      id: 'jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p07.6-2-bewertungsvereinfach',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel6-1-6-5',
      sourcePath: 'Kapitel6.1-6.5.pdf',
      publicLabel: "Kapitel6.1-6.5",
      page: 7,
      section: "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – ÜBERSICHT",
      fingerprint: 'f4f1d3d3eceb6ebd',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p12.2000-rohstoffe-an-4400-v',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel6-1-6-5',
      sourcePath: 'Kapitel6.1-6.5.pdf',
      publicLabel: "Kapitel6.1-6.5",
      page: 12,
      section: "2000 Rohstoffe        an 4400 Verbindlichkeiten a. LL 500,--",
      fingerprint: '5d26b7107b7ea43d',
      confidence: 0.84
    })
  ],
  umlauf_waren_ust: [
    anchor({
      id: 'jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p20.s-umsatzsteuer-abschluss',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel6-6-6-7',
      sourcePath: 'Kapitel6.6-6.7.pdf',
      publicLabel: "Kapitel6.6-6.7",
      page: 20,
      section: "S                Umsatzsteuer-Abschlusskonto                                        H",
      fingerprint: '7d7ab030f23615b7',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p18.2800-bank-833-an-5000-um',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel6-6-6-7',
      sourcePath: 'Kapitel6.6-6.7.pdf',
      publicLabel: "Kapitel6.6-6.7",
      page: 18,
      section: "2800 Bank                           833,--          an                  5000 Umsatzerlöse             700,--",
      fingerprint: '61cff99fb23299cd',
      confidence: 0.84
    })
  ],
  eigenkapital_kapitalgesellschaften: [
    anchor({
      id: 'jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p17.1-entnahme-5-1-einlage-1',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel7',
      sourcePath: 'Kapitel7.pdf',
      publicLabel: "Kapitel7",
      page: 17,
      section: "1. Entnahme      5,--                                                                 1. Einlage   10,--",
      fingerprint: '2a64d4e019705dce',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p15.100-000-aktien-zum-nennw',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel7',
      sourcePath: 'Kapitel7.pdf',
      publicLabel: "Kapitel7",
      page: 15,
      section: "100.000 Aktien zum Nennwert von 2,-- EUR/Stück für 3,-- EUR/Stück platziert. Das Geld",
      fingerprint: '51244e6703e64246',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a7.p1.eigenkapitalgliederung',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 1,
      section: 'Aufgabe 7: Eigenkapitalgliederung (6 Punkte)',
      fingerprint: '0767bf690e02dcfc',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-6',
      reviewedAt: '2026-06-09'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a7.p1-p2.eigenkapitalgliederung',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: '1-2',
      section: 'Aufgabe 7 – Eigenkapital (6 Punkte)',
      fingerprint: '57b40510ce4af54d',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-6',
      reviewedAt: '2026-06-09'
    })
  ],
  eigenkapital_personengesellschaften: [
    anchor({
      id: 'jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p05.7-1-grundlagen-kapitalge',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel7',
      sourcePath: 'Kapitel7.pdf',
      publicLabel: "Kapitel7",
      page: 5,
      section: "7.1 GRUNDLAGEN – KAPITALGESELLSCHAFTEN",
      fingerprint: '100728edda1ff5e7',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p13.7-2-kapitalgesellschafte',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel7',
      sourcePath: 'Kapitel7.pdf',
      publicLabel: "Kapitel7",
      page: 13,
      section: "7.2 KAPITALGESELLSCHAFTEN – ERGEBNISAUSWEIS",
      fingerprint: '06d33113e5642aae',
      confidence: 0.84
    })
  ],
  verbindlichkeiten: [
    anchor({
      id: 'jahresabschluss.verbindlichkeiten.kapitel8-pdf.p12.6940-sonstige-aufwendung',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel8',
      sourcePath: 'Kapitel8.pdf',
      publicLabel: "Kapitel8",
      page: 12,
      section: "6940 Sonstige Aufwendungen                 an      4890 Übrige sonst. Verb.                                             50.000,--",
      fingerprint: '2f1fa5ed59e2dc4f',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.verbindlichkeiten.kapitel8-pdf.p05.8-2-verbindlichkeiten-de',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel8',
      sourcePath: 'Kapitel8.pdf',
      publicLabel: "Kapitel8",
      page: 5,
      section: "8.2 VERBINDLICHKEITEN – DEFINITION, ANSATZ UND BEWERTUNG",
      fingerprint: '35b0e9c4c2489799',
      confidence: 0.84
    })
  ],
  rueckstellungen: [
    anchor({
      id: 'jahresabschluss.rueckstellungen.kapitel8-pdf.p03.die-bilanz-bilanzpositio',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel8',
      sourcePath: 'Kapitel8.pdf',
      publicLabel: "Kapitel8",
      page: 3,
      section: "DIE BILANZ – BILANZPOSITION",
      fingerprint: '43922fae4f2fab53',
      confidence: 0.88
    }),
    anchor({
      id: 'jahresabschluss.rueckstellungen.kapitel8-pdf.p06.8-2-verbindlichkeiten-be',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel8',
      sourcePath: 'Kapitel8.pdf',
      publicLabel: "Kapitel8",
      page: 6,
      section: "8.2 VERBINDLICHKEITEN – BEISPIEL",
      fingerprint: 'f84068554b6be084',
      confidence: 0.88
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a8.p2.rueckstellungen-verbindlichkeiten',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 2,
      section: 'Aufgabe 8: Rückstellungen und Verbindlichkeiten (6 Punkte)',
      fingerprint: '9bde2a74cb6160aa',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-5',
      reviewedAt: '2026-06-09'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a8.p2.rueckstellungen-verbindlichkeiten',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 2,
      section: 'Aufgabe 8 – Rückstellungen & Verb. (6 Punkte)',
      fingerprint: '18ed5bcf29a05105',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-5',
      reviewedAt: '2026-06-09'
    })
  ],
  rechnungsabgrenzung: [
    anchor({
      id: 'jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p14.9-rechnungsabgrenzung-be',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel9',
      sourcePath: 'Kapitel9.pdf',
      publicLabel: "Kapitel9",
      page: 14,
      section: "9. RECHNUNGSABGRENZUNG – BEISPIEL IV: ANTIZIPATIVE AKTIVE RECHNUNGSABGRENZUNG",
      fingerprint: 'db9b75affce7eafa',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p08.transitorische-zahlungsv',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel9',
      sourcePath: 'Kapitel9.pdf',
      publicLabel: "Kapitel9",
      page: 8,
      section: "Transitorische                 Zahlungsvorgang                                       Erfolgsvorgang",
      fingerprint: '4e248b7f13a81202',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a9.p2.rechnungsabgrenzung-arap-miete',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 2,
      section: 'Aufgabe 9: Rechnungsabgrenzung (6 Punkte)',
      fingerprint: '77395d46ad3acc0f',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-3',
      reviewedAt: '2026-06-09'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a9.p2.rechnungsabgrenzung-arap-miete',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 2,
      section: 'Aufgabe 9 – Rechnungsabgrenzung (6 Punkte)',
      fingerprint: '423c9bcaa928b144',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-3',
      reviewedAt: '2026-06-09'
    })
  ],
  erfolgsrechnung: [
    anchor({
      id: 'jahresabschluss.erfolgsrechnung.kapitel10-pdf.p04.10-1-grundlagen-gewinn-u',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel10',
      sourcePath: 'Kapitel10.pdf',
      publicLabel: "Kapitel10",
      page: 4,
      section: "10.1 GRUNDLAGEN – GEWINN- UND VERLUSTRECHNUNG (GUV)",
      fingerprint: 'e310e74573d78b78',
      confidence: 0.88
    }),
    anchor({
      id: 'jahresabschluss.erfolgsrechnung.kapitel10-pdf.p07.die-herstellungskosten-z',
      sourceId: 'jahresabschluss-lecture-slide-jahresabschluss-kapitel10',
      sourcePath: 'Kapitel10.pdf',
      publicLabel: "Kapitel10",
      page: 7,
      section: "die Herstellungskosten zur Wertuntergrenze angesetzt werden)",
      fingerprint: '553d008c4de44ba9',
      confidence: 0.84
    }),
    anchor({
      id: 'jahresabschluss.probeklausur-jahresabschluss.a10.p2.gkv-ukv',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Probeklausur Jahresabschluss',
      page: 2,
      section: 'Aufgabe 10: GKV vs. UKV (4 Punkte)',
      fingerprint: '79ce6ccb4cbdc8d3',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-4',
      reviewedAt: '2026-06-09'
    }),
    anchor({
      id: 'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a10.p2.gkv-ukv',
      sourceId: 'jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
      sourcePath: 'Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf',
      publicLabel: 'Musterlösung Probeklausur Jahresabschluss',
      page: 2,
      section: 'Aufgabe 10 – GKV vs. UKV (4 Punkte)',
      fingerprint: 'f760032e2b4d9bed',
      confidence: 0.95,
      reviewedBy: 'codex-official-task-review-ja-pass-4',
      reviewedAt: '2026-06-09'
    })
  ]
});
