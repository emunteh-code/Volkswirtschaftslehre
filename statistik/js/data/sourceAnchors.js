// ============================================================
// SOURCE ANCHORS — Statistik
// Reviewed page-level anchors for official VL reconstruction (pass 1–2).
// No source text stored; quoteFingerprint hashes the reviewed section label.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'codex-source-pass-statistik-anchors-2';

function anchor({
  id,
  sourceId,
  sourcePath,
  publicLabel,
  page,
  section,
  fingerprint,
  confidence = 0.9
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
  ]
});
