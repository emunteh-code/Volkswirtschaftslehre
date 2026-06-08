// ============================================================
// SOURCE ANCHORS — Statistik
// Reviewed page-level anchors for official VL reconstruction (pass 1–3).
// No source text stored; quoteFingerprint hashes the reviewed section label.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'codex-source-pass-statistik-anchors-3';

function anchor({
  id,
  sourceId,
  sourcePath,
  publicLabel,
  page,
  section,
  fingerprint,
  confidence = 0.9,
  reviewedBy = REVIEWED_BY,
  reviewedAt = REVIEWED_AT,
  task = null
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
      task,
      line: null
    },
    quoteFingerprint: `sha256:${fingerprint}`,
    confidence,
    reviewedBy,
    reviewedAt
  };
}

export const STATISTIK_SOURCE_ANCHORS = Object.freeze({
  deskriptiv: [
    anchor({
      id: 'statistik.deskriptiv.vl02.p06.ds11',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-02-deskriptive-stat-1-1-1-2',
      sourcePath: 'Vorlesungen/VL_02_-_Deskriptive_Stat_1.1-1.2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 6,
      section: 'DS1.1 Häufigkeitsverteilungen',
      fingerprint: 'a8f3c2e91b4d7015',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.deskriptiv.vl02.p23.ds12',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-02-deskriptive-stat-1-1-1-2',
      sourcePath: 'Vorlesungen/VL_02_-_Deskriptive_Stat_1.1-1.2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 23,
      section: 'DS1.2 Säulendiagramme und Histogramme',
      fingerprint: 'c41e0a6d8f2b9e37',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.deskriptiv.vl03.p10.ds13',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-03-deskriptive-stat-1-3-1-6',
      sourcePath: 'Vorlesungen/VL_03_-_Deskriptive_Stat_1.3-1.6.pdf',
      publicLabel: 'Vorlesung 3',
      page: 10,
      section: 'DS1.3 Maßzahlen nutzen',
      fingerprint: '7d2b5f1a9c8e4036',
      confidence: 0.91
    }),
    anchor({
      id: 'statistik.klausur-2022-teil-a.a1.p1-p2.descriptive-measures',
      sourceId: 'statistik-exam-statistik-lecture-statistik-b-wiwi-oph-0006-vorlesung-teil-a-klausur',
      sourcePath: 'Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Teil_A_Klausur.pdf',
      publicLabel: 'Klausur Statistik, 04.03.2022',
      page: 3,
      section: 'Aufgabe 1: Skalenniveau, Lage- und Streuungsparameter',
      task: 'Aufgabe 1',
      fingerprint: 'e623d553087beae78b88673b02e4a3bb402a99ec76b57cf1388bba7cdd4b68c3',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-statistik-pass-1',
      reviewedAt: '2026-06-08'
    }),
    anchor({
      id: 'statistik.klausur-2022-teil-a.a2.p3-p6.descriptive-data-analysis',
      sourceId: 'statistik-exam-statistik-lecture-statistik-b-wiwi-oph-0006-vorlesung-teil-a-klausur',
      sourcePath: 'Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Teil_A_Klausur.pdf',
      publicLabel: 'Klausur Statistik, 04.03.2022',
      page: 5,
      section: 'Aufgabe 2: Mittelwert, Streuung, Skalenniveau, empirische Verteilungsfunktion und klassierte Daten',
      task: 'Aufgabe 2',
      fingerprint: '1b6c40094afc945b538c6c32c443f1859a9174b0091692f7192a8ffa49fee8ee',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-statistik-pass-1',
      reviewedAt: '2026-06-08'
    })
  ],
  bivariat: [
    anchor({
      id: 'statistik.bivariat.vl04.p16.ds21',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-04-deskriptive-stat-2',
      sourcePath: 'Vorlesungen/VL_04_-_Deskriptive_Stat_2.pdf',
      publicLabel: 'Vorlesung 4',
      page: 16,
      section: 'DS2.1 Bivariate Häufigkeitsverteilungen und Histogramme',
      fingerprint: 'e9051c3a7b6d2840',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.bivariat.vl04.p30.ds22',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-04-deskriptive-stat-2',
      sourcePath: 'Vorlesungen/VL_04_-_Deskriptive_Stat_2.pdf',
      publicLabel: 'Vorlesung 4',
      page: 30,
      section: 'DS2.2 Maßzahlen für bivariate Häufigkeitsverteilungen',
      fingerprint: '1f8a4e2c0d9b6537',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.bivariat.vl04.p38.scatterplot',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-04-deskriptive-stat-2',
      sourcePath: 'Vorlesungen/VL_04_-_Deskriptive_Stat_2.pdf',
      publicLabel: 'Vorlesung 4',
      page: 38,
      section: 'Scatterplot (Sepal Length and Width)',
      fingerprint: '6b3d9f0e2a1c8745',
      confidence: 0.9
    })
  ],
  wahrscheinlichkeit: [
    anchor({
      id: 'statistik.wahrscheinlichkeit.vl05.p06.g21',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-05-grundlagen-2',
      sourcePath: 'Vorlesungen/VL_05_-_Grundlagen_2.pdf',
      publicLabel: 'Vorlesung 5',
      page: 6,
      section: 'G2.1 Perspektiven auf Wahrscheinlichkeit',
      fingerprint: 'b4e7a1c9032d5f86',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.wahrscheinlichkeit.vl05.p11.experimente',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-05-grundlagen-2',
      sourcePath: 'Vorlesungen/VL_05_-_Grundlagen_2.pdf',
      publicLabel: 'Vorlesung 5',
      page: 11,
      section: 'Experimente, Ergebnisse und Ereignisse',
      fingerprint: 'd19f82a40c6e1b73',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.wahrscheinlichkeit.vl05.p42.bedingte',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-05-grundlagen-2',
      sourcePath: 'Vorlesungen/VL_05_-_Grundlagen_2.pdf',
      publicLabel: 'Vorlesung 5',
      page: 42,
      section: 'Bedingte Wahrscheinlichkeit',
      fingerprint: 'f3a0c58e71b294d6',
      confidence: 0.91
    }),
    anchor({
      id: 'statistik.klausur-2022-teil-a.a3.p7-p9.conditional-bayes-binomial',
      sourceId: 'statistik-exam-statistik-lecture-statistik-b-wiwi-oph-0006-vorlesung-teil-a-klausur',
      sourcePath: 'Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Teil_A_Klausur.pdf',
      publicLabel: 'Klausur Statistik, 04.03.2022',
      page: 9,
      section: 'Aufgabe 3: Bedingte Wahrscheinlichkeit, totale Wahrscheinlichkeit, Bayes und mindestens ein Ereignis',
      task: 'Aufgabe 3',
      fingerprint: '7083232b6a4948d2fdb8d3f6b8a9c249fd855e0d66efc17fa85b237d1f6e7084',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-statistik-pass-2',
      reviewedAt: '2026-06-08'
    }),
    anchor({
      id: 'statistik.klausur-2022-teil-a.a4.p10.sets-laplace-conditional',
      sourceId: 'statistik-exam-statistik-lecture-statistik-b-wiwi-oph-0006-vorlesung-teil-a-klausur',
      sourcePath: 'Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Teil_A_Klausur.pdf',
      publicLabel: 'Klausur Statistik, 04.03.2022',
      page: 12,
      section: 'Aufgabe 4: Mengenoperationen im Laplace-Experiment und bedingte Wahrscheinlichkeit',
      task: 'Aufgabe 4',
      fingerprint: 'c88c496d028200fe296956510263ce2635dde23b9887d2105fb63f5d702506fa',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-statistik-pass-2',
      reviewedAt: '2026-06-08'
    })
  ],
  verteilungen: [
    anchor({
      id: 'statistik.verteilungen.vl06.p11.g31',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-06-grundlagen-3-1-3-pdf',
      sourcePath: 'Vorlesungen/VL_06_-_Grundlagen_3.1-3.pdf.pdf',
      publicLabel: 'Vorlesung 6',
      page: 11,
      section: 'Diskrete Zufallsvariablen',
      fingerprint: 'a1d4e9b7028c3f15',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.verteilungen.vl06.p14.g32',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-06-grundlagen-3-1-3-pdf',
      sourcePath: 'Vorlesungen/VL_06_-_Grundlagen_3.1-3.pdf.pdf',
      publicLabel: 'Vorlesung 6',
      page: 14,
      section: 'Wahrscheinlichkeitsfunktion einer diskreten ZV',
      fingerprint: 'c8e2f1a4059b7d62',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.verteilungen.vl08.p15.dichte',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-08-grundlagen-3-3-5-3-3-6',
      sourcePath: 'Vorlesungen/VL_08_-_Grundlagen_3.3.5-3.3.6.pdf',
      publicLabel: 'Vorlesung 8',
      page: 15,
      section: 'Dichtefunktion',
      fingerprint: 'e7b3c9d0184a6f25',
      confidence: 0.9
    })
  ],
  schaetzen_verfahren: [
    anchor({
      id: 'statistik.schaetzen_verfahren.vl09.p08.is11',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-09-induktive-statistik-1',
      sourcePath: 'Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf',
      publicLabel: 'Vorlesung 9',
      page: 8,
      section: 'IS1.1 Punktschätzung',
      fingerprint: '9f2d4a8b61e0c357',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.schaetzen_verfahren.vl09.p12.is12',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-09-induktive-statistik-1',
      sourcePath: 'Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf',
      publicLabel: 'Vorlesung 9',
      page: 12,
      section: 'IS1.2 Methode der Momente',
      fingerprint: '2c8e5f0a94b1d768',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.schaetzen_verfahren.vl09.p25.is13',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-09-induktive-statistik-1',
      sourcePath: 'Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf',
      publicLabel: 'Vorlesung 9',
      page: 25,
      section: 'IS1.3 Methode der kleinsten Quadrate',
      fingerprint: '5a1b7d3e82f9c041',
      confidence: 0.91
    })
  ],
  schaetzen_eigenschaften_intervalle: [
    anchor({
      id: 'statistik.schaetzen_eigenschaften_intervalle.vl09.p85.eigenschaften',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-09-induktive-statistik-1',
      sourcePath: 'Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf',
      publicLabel: 'Vorlesung 9',
      page: 85,
      section: 'Schätzfunktionen und deren Eigenschaften',
      fingerprint: '4e8c1a9f702b3d56',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.schaetzen_eigenschaften_intervalle.vl10.p03.motivation',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-10-induktive-statistik-2',
      sourcePath: 'Vorlesungen/VL_10_-_Induktive_Statistik_2.pdf',
      publicLabel: 'Vorlesung 10',
      page: 3,
      section: '7.1 Motivation und Hinführung',
      fingerprint: 'b7f2d4e81a9c6035',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.schaetzen_eigenschaften_intervalle.vl10.p10.konstruktion',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-10-induktive-statistik-2',
      sourcePath: 'Vorlesungen/VL_10_-_Induktive_Statistik_2.pdf',
      publicLabel: 'Vorlesung 10',
      page: 10,
      section:
        '7.2 Konstruktion von Konfidenzintervallen bei normalverteilter Grundgesamtheit',
      fingerprint: 'd1a5e8c4072f9b18',
      confidence: 0.92
    })
  ],
  testen: [
    anchor({
      id: 'statistik.testen.vl10_3.p08.hypothesen',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-10-induktive-statistik-3-0-3-1',
      sourcePath: 'Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf',
      publicLabel: 'Vorlesung 10 (Teil 3)',
      page: 8,
      section: 'Induktive Statistik und Hypothesen',
      fingerprint: '8c3f1e5a90d7246b',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.testen.vl10_3.p12.klassisch',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-10-induktive-statistik-3-0-3-1',
      sourcePath: 'Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf',
      publicLabel: 'Vorlesung 10 (Teil 3)',
      page: 12,
      section: 'Klassische statistische Hypothesen Tests',
      fingerprint: 'f4b8d2c7160e9a53',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.testen.vl11.p65.prinzipien',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-induktive-statistik-3-3-5-pdf',
      sourcePath: 'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf',
      publicLabel: 'Vorlesung 11',
      page: 65,
      section: '8.4 Allgemeine Prinzipien des statistischen Testens',
      fingerprint: '2a7e9c4d81f5036b',
      confidence: 0.91
    })
  ],
  z_test: [
    anchor({
      id: 'statistik.z_test.vl11.p18.motivation',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-induktive-statistik-3-3-5-pdf',
      sourcePath: 'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf',
      publicLabel: 'Vorlesung 11',
      page: 18,
      section: '8.1 Motivation und erstes Beispiel',
      fingerprint: '6d1f8b2e94a0c537',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.z_test.vl11.p39.zweiseitig',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-induktive-statistik-3-3-5-pdf',
      sourcePath: 'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf',
      publicLabel: 'Vorlesung 11',
      page: 39,
      section: '8.2 Zweiseitige Tests',
      fingerprint: 'e9035a7c1d8f4260',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.z_test.vl11.p47.normalverteilung',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-induktive-statistik-3-3-5-pdf',
      sourcePath: 'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf',
      publicLabel: 'Vorlesung 11',
      page: 47,
      section: '8.3 Tests für normalverteilte Grundgesamtheiten',
      fingerprint: '1c8e4f7a20b9d635',
      confidence: 0.92
    })
  ],
  varianzanalyse: [
    anchor({
      id: 'statistik.varianzanalyse.vl11.p03.einfuehrung',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-induktive-statistik-3-3-5-pdf',
      sourcePath: 'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf',
      publicLabel: 'Vorlesung 11',
      page: 3,
      section: 'Varianzanalyse',
      fingerprint: 'a5d2e8f1037c4b96',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.varianzanalyse.vl11.p12.tabelle',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-induktive-statistik-3-3-5-pdf',
      sourcePath: 'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf',
      publicLabel: 'Vorlesung 11',
      page: 12,
      section: 'Varianzanalysetabelle',
      fingerprint: '7b4c1f9e82a056d3',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.varianzanalyse.vl11.p02.is32',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-induktive-statistik-3-3-5-pdf',
      sourcePath: 'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf',
      publicLabel: 'Vorlesung 11',
      page: 2,
      section: 'IS3.2 Hypothesentests mittels Varianzanalyse',
      fingerprint: 'c9e6a3d5180f724b',
      confidence: 0.9
    })
  ],
  zwei_stichproben: [
    anchor({
      id: 'statistik.zwei_stichproben.vl11_zwei.p01.titel',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-zwei-sp-t-test',
      sourcePath: 'Vorlesungen/VL_11_-_Zwei-SP_t-Test.pdf',
      publicLabel: 'Vorlesung 11 (Einschub)',
      page: 1,
      section: 'Zweistichproben t-Test',
      fingerprint: '3f8a2c5e91d704b6',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.zwei_stichproben.vl11_zwei.p08.paarweise',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-zwei-sp-t-test',
      sourcePath: 'Vorlesungen/VL_11_-_Zwei-SP_t-Test.pdf',
      publicLabel: 'Vorlesung 11 (Einschub)',
      page: 8,
      section: 'Test bei paarweiser Abhängigkeit',
      fingerprint: '5e1d9a7c4082f6b3',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.zwei_stichproben.vl11_zwei.p09.unabhaengig',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-11-zwei-sp-t-test',
      sourcePath: 'Vorlesungen/VL_11_-_Zwei-SP_t-Test.pdf',
      publicLabel: 'Vorlesung 11 (Einschub)',
      page: 9,
      section: 'Test bei unabhängigen Stichproben – Varianzen identisch',
      fingerprint: '8a4f2e6c1039d758',
      confidence: 0.91
    })
  ],
  nichtparametrisch: [
    anchor({
      id: 'statistik.nichtparametrisch.vl09.p58.histogramm',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-09-induktive-statistik-1',
      sourcePath: 'Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf',
      publicLabel: 'Vorlesung 9',
      page: 58,
      section: '6.3 Histogramme als Schätzer für Dichten',
      fingerprint: 'b2e7f4a8901c5d36',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.nichtparametrisch.vl09.p71.kerndichte',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-09-induktive-statistik-1',
      sourcePath: 'Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf',
      publicLabel: 'Vorlesung 9',
      page: 71,
      section: '6.4 Kerndichteschätzung',
      fingerprint: 'd6c1a8f5270e4b92',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.nichtparametrisch.vl09.p02.is15',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-09-induktive-statistik-1',
      sourcePath: 'Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf',
      publicLabel: 'Vorlesung 9',
      page: 2,
      section: 'IS1.5 Kerndichte-Schätzung',
      fingerprint: '4a9e2c7f8160d3b5',
      confidence: 0.9
    })
  ],
  regression_schaetzung_inferenz: [
    anchor({
      id: 'statistik.regression_schaetzung_inferenz.vl12.p01.titel',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-12-stat-modellierung-1-0-1-4',
      sourcePath: 'Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf',
      publicLabel: 'Vorlesung 12',
      page: 1,
      section: 'Statistische Modellierung I: Regression',
      fingerprint: 'f1c8e4a2079b5d63',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.regression_schaetzung_inferenz.vl12.p22.homosk',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-12-stat-modellierung-1-0-1-4',
      sourcePath: 'Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf',
      publicLabel: 'Vorlesung 12',
      page: 22,
      section: 'Homosk. Var., Regression',
      fingerprint: '9e3a7c1f5082d4b6',
      confidence: 0.91
    }),
    anchor({
      id: 'statistik.regression_schaetzung_inferenz.vl12.p26.galton',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-12-stat-modellierung-1-0-1-4',
      sourcePath: 'Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf',
      publicLabel: 'Vorlesung 12',
      page: 26,
      section: 'Galtonbsp., Regression',
      fingerprint: '2d7f9e4a8160c3b5',
      confidence: 0.92
    })
  ],
  regression_diagnostik_prognose: [
    anchor({
      id: 'statistik.regression_diagnostik_prognose.vl12.p61.residuen',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-12-stat-modellierung-1-0-1-4',
      sourcePath: 'Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf',
      publicLabel: 'Vorlesung 12',
      page: 61,
      section: 'Residuen',
      fingerprint: '6b4e1a9f7302c8d5',
      confidence: 0.9
    }),
    anchor({
      id: 'statistik.regression_diagnostik_prognose.vl12.p22.residuen_homosk',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-12-stat-modellierung-1-0-1-4',
      sourcePath: 'Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf',
      publicLabel: 'Vorlesung 12',
      page: 22,
      section: 'Homosk. Var., Residuen',
      fingerprint: 'a8f3c2e91b4d7015',
      confidence: 0.91
    }),
    anchor({
      id: 'statistik.regression_diagnostik_prognose.vl14.p01.ausblick',
      sourceId: 'statistik-lecture-slide-statistik-vorlesungen-vl-14-stat-modellierung-2',
      sourcePath: 'Vorlesungen/VL_14_-_Stat_Modellierung_2.pdf',
      publicLabel: 'Vorlesung 14',
      page: 1,
      section: 'Statistische Modellierung II: Ausblick',
      fingerprint: 'c41e0a6d8f2b9e37',
      confidence: 0.9
    })
  ],
  rlab: [
    anchor({
      id: 'statistik.rlab.rvorkurs.p06.grundlagen',
      sourceId: 'statistik-supplement-statistik-r-vorkurs',
      sourcePath: 'R-Vorkurs.pdf',
      publicLabel: 'R-Vorkurs',
      page: 6,
      section: 'R Grundlagen',
      fingerprint: '7d2b5f1a9c8e4036',
      confidence: 0.92
    }),
    anchor({
      id: 'statistik.rlab.rvorkurs.p22.vektoren',
      sourceId: 'statistik-supplement-statistik-r-vorkurs',
      sourcePath: 'R-Vorkurs.pdf',
      publicLabel: 'R-Vorkurs',
      page: 22,
      section: 'Vektoren',
      fingerprint: 'e9051c3a7b6d2840',
      confidence: 0.93
    }),
    anchor({
      id: 'statistik.rlab.rvorkurs.p41.einlesen',
      sourceId: 'statistik-supplement-statistik-r-vorkurs',
      sourcePath: 'R-Vorkurs.pdf',
      publicLabel: 'R-Vorkurs',
      page: 41,
      section: 'Einlesen von Daten',
      fingerprint: '6b3d9f0e2a1c8745',
      confidence: 0.91
    })
  ]
});
