// ============================================================
// SOURCE ANCHORS — Statistik
// Reviewed page-level anchors for official VL reconstruction (pilot pass).
// No source text stored; quoteFingerprint hashes the reviewed section label.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'codex-source-pass-statistik-anchors-1';

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
  ]
});
