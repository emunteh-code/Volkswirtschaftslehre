// ============================================================
// SOURCE ANCHORS — Mathematik
// Reviewed page-level anchors for official lecture / R Kleinübung PDFs (pass 1).
// No source text stored; quoteFingerprint hashes the reviewed section label.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'codex-source-pass-mathematik-anchors-1';

const LECTURE = 'Vorlesung_Folien_+_R-Skripte_Lehrvideos/';

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

export const MATHEMATIK_SOURCE_ANCHORS = Object.freeze({
  algebra_mengen: [
    anchor({
      id: 'mathematik.algebra_mengen.e1.p35.regeln',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-01mathe-e1-algebraundmengenlehre',
      sourcePath: `${LECTURE}01Mathe_E1_AlgebraUndMengenlehre.pdf`,
      publicLabel: 'E1 Algebra und Mengenlehre',
      page: 35,
      section: 'Folgerungen aus den elementaren Regeln',
      fingerprint: 'a8f3c2e91b4d7015',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.algebra_mengen.e1.p45.ungleichungen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-01mathe-e1-algebraundmengenlehre',
      sourcePath: `${LECTURE}01Mathe_E1_AlgebraUndMengenlehre.pdf`,
      publicLabel: 'E1 Algebra und Mengenlehre',
      page: 45,
      section: 'Doppel-Ungleichungen',
      fingerprint: 'c41e0a6d8f2b9e37',
      confidence: 0.91
    }),
    anchor({
      id: 'mathematik.algebra_mengen.e1.p58.mengen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-01mathe-e1-algebraundmengenlehre',
      sourcePath: `${LECTURE}01Mathe_E1_AlgebraUndMengenlehre.pdf`,
      publicLabel: 'E1 Algebra und Mengenlehre',
      page: 58,
      section: 'Mengenoperationen',
      fingerprint: '6b3d9f0e2a1c8745',
      confidence: 0.93
    })
  ],
  funktionen_gleichungen: [
    anchor({
      id: 'mathematik.funktionen_gleichungen.e2.p24.grundlagen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-02mathe-e2-funktionenundgleichungen',
      sourcePath: `${LECTURE}02Mathe_E2_FunktionenUndGleichungen.pdf`,
      publicLabel: 'E2 Funktionen und Gleichungen',
      page: 24,
      section: 'E2.1 Grundlegendes über Funktionen',
      fingerprint: '7d2b5f1a9c8e4036',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.funktionen_gleichungen.e2.p52.quadratisch',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-02mathe-e2-funktionenundgleichungen',
      sourcePath: `${LECTURE}02Mathe_E2_FunktionenUndGleichungen.pdf`,
      publicLabel: 'E2 Funktionen und Gleichungen',
      page: 52,
      section: 'E2.4 Lineare und Quadratische Gleichungen',
      fingerprint: 'e9051c3a7b6d2840',
      confidence: 0.9
    }),
    anchor({
      id: 'mathematik.funktionen_gleichungen.e2.p64.graphen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-02mathe-e2-funktionenundgleichungen',
      sourcePath: `${LECTURE}02Mathe_E2_FunktionenUndGleichungen.pdf`,
      publicLabel: 'E2 Funktionen und Gleichungen',
      page: 64,
      section: 'E2.6 Graphen von Gleichungen',
      fingerprint: '1f8a4e2c0d9b6537',
      confidence: 0.9
    })
  ],
  exp_log_inverse: [
    anchor({
      id: 'mathematik.exp_log_inverse.e2.p68.exponential',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-02mathe-e2-funktionenundgleichungen',
      sourcePath: `${LECTURE}02Mathe_E2_FunktionenUndGleichungen.pdf`,
      publicLabel: 'E2 Funktionen und Gleichungen',
      page: 68,
      section: 'Allgemeine Exponentialfunktion',
      fingerprint: 'b4e7a1c9032d5f86',
      confidence: 0.91
    }),
    anchor({
      id: 'mathematik.exp_log_inverse.e2.p72.logarithmus',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-02mathe-e2-funktionenundgleichungen',
      sourcePath: `${LECTURE}02Mathe_E2_FunktionenUndGleichungen.pdf`,
      publicLabel: 'E2 Funktionen und Gleichungen',
      page: 72,
      section: 'Logarithmusfunktionen',
      fingerprint: 'd19f82a40c6e1b73',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.exp_log_inverse.e2.p97.inverse',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-02mathe-e2-funktionenundgleichungen',
      sourcePath: `${LECTURE}02Mathe_E2_FunktionenUndGleichungen.pdf`,
      publicLabel: 'E2 Funktionen und Gleichungen',
      page: 97,
      section: 'Inverse Funktionen',
      fingerprint: 'f3a0c58e71b294d6',
      confidence: 0.91
    })
  ],
  summen_logik_beweise: [
    anchor({
      id: 'mathematik.summen_logik_beweise.e3.p8.summen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-03mathe-e3-summenundlogik',
      sourcePath: `${LECTURE}03Mathe_E3_SummenUndLogik.pdf`,
      publicLabel: 'E3 Summen und Logik',
      page: 8,
      section: 'Summenzeichen',
      fingerprint: 'a1d4e9b7028c3f15',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.summen_logik_beweise.e3.p50.logik',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-03mathe-e3-summenundlogik',
      sourcePath: `${LECTURE}03Mathe_E3_SummenUndLogik.pdf`,
      publicLabel: 'E3 Summen und Logik',
      page: 50,
      section: 'E3.4 Einige Aspekte der Logik',
      fingerprint: 'c8e2f1a4059b7d62',
      confidence: 0.9
    }),
    anchor({
      id: 'mathematik.summen_logik_beweise.e3.p70.beweise',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-03mathe-e3-summenundlogik',
      sourcePath: `${LECTURE}03Mathe_E3_SummenUndLogik.pdf`,
      publicLabel: 'E3 Summen und Logik',
      page: 70,
      section: 'E3.5 Mathematische Beweise',
      fingerprint: 'e7b3c9d0184a6f25',
      confidence: 0.9
    })
  ],
  lineare_algebra_grundlagen: [
    anchor({
      id: 'mathematik.lineare_algebra_grundlagen.la1.p14.notation',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-04mathe-la1-linearealgebra1',
      sourcePath: `${LECTURE}04Mathe_LA1_LineareAlgebra1.pdf`,
      publicLabel: 'LA1 Lineare Algebra 1',
      page: 14,
      section: 'LA1.1 Notation und Verwendung von Matrizen',
      fingerprint: '9f2d4a8b61e0c357',
      confidence: 0.93
    }),
    anchor({
      id: 'mathematik.lineare_algebra_grundlagen.la1.p28.multiplikation',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-04mathe-la1-linearealgebra1',
      sourcePath: `${LECTURE}04Mathe_LA1_LineareAlgebra1.pdf`,
      publicLabel: 'LA1 Lineare Algebra 1',
      page: 28,
      section: 'LA1.4 Matrizenmultiplikation',
      fingerprint: '2c8e5f0a94b1d768',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.lineare_algebra_grundlagen.la1.p38.gleichungssysteme',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-04mathe-la1-linearealgebra1',
      sourcePath: `${LECTURE}04Mathe_LA1_LineareAlgebra1.pdf`,
      publicLabel: 'LA1 Lineare Algebra 1',
      page: 38,
      section: 'LA1.5 Summen und Gleichungssysteme in Matrixform',
      fingerprint: '5a1b7d3e82f9c041',
      confidence: 0.91
    })
  ],
  lineare_algebra_struktur: [
    anchor({
      id: 'mathematik.lineare_algebra_struktur.la2.p27.rang',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-05mathe-la2-linearealgebra2',
      sourcePath: `${LECTURE}05Mathe_LA2_LineareAlgebra2.pdf`,
      publicLabel: 'LA2 Lineare Algebra 2',
      page: 27,
      section: 'LA2.1 Spur und Rang einer Matrix',
      fingerprint: '4e8c1a9f702b3d56',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.lineare_algebra_struktur.la2.p38.determinante',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-05mathe-la2-linearealgebra2',
      sourcePath: `${LECTURE}05Mathe_LA2_LineareAlgebra2.pdf`,
      publicLabel: 'LA2 Lineare Algebra 2',
      page: 38,
      section: 'LA2.2 Determinante und Inverse einer Matrix',
      fingerprint: 'b7f2d4e81a9c6035',
      confidence: 0.93
    }),
    anchor({
      id: 'mathematik.lineare_algebra_struktur.la2.p67.eigenwerte',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-05mathe-la2-linearealgebra2',
      sourcePath: `${LECTURE}05Mathe_LA2_LineareAlgebra2.pdf`,
      publicLabel: 'LA2 Lineare Algebra 2',
      page: 67,
      section: 'LA2.4 Die Eigenwerte und Eigenvektoren einer Matrix',
      fingerprint: 'd1a5e8c4072f9b18',
      confidence: 0.91
    })
  ],
  analysis_ableitung_grundlagen: [
    anchor({
      id: 'mathematik.analysis_ableitung_grundlagen.an1.p15.regeln',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-06mathe-an1-differentialrechnung',
      sourcePath: `${LECTURE}06Mathe_AN1_Differentialrechnung.pdf`,
      publicLabel: 'AN1 Differentialrechnung',
      page: 15,
      section: 'Ableitungsregeln',
      fingerprint: '8c3f1e5a90d7246b',
      confidence: 0.93
    }),
    anchor({
      id: 'mathematik.analysis_ableitung_grundlagen.an1.p30.interpretation',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-06mathe-an1-differentialrechnung',
      sourcePath: `${LECTURE}06Mathe_AN1_Differentialrechnung.pdf`,
      publicLabel: 'AN1 Differentialrechnung',
      page: 30,
      section: 'AN1.2 Interpretationen der Ableitung',
      fingerprint: 'f4b8d2c7160e9a53',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.analysis_ableitung_grundlagen.an1.p7.herleiten',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-06mathe-an1-differentialrechnung',
      sourcePath: `${LECTURE}06Mathe_AN1_Differentialrechnung.pdf`,
      publicLabel: 'AN1 Differentialrechnung',
      page: 7,
      section: 'Ableitungen herleiten',
      fingerprint: '2a7e9c4d81f5036b',
      confidence: 0.9
    })
  ],
  analysis_monotonie_grenzwerte: [
    anchor({
      id: 'mathematik.analysis_monotonie_grenzwerte.an1.p47.monotonie',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-06mathe-an1-differentialrechnung',
      sourcePath: `${LECTURE}06Mathe_AN1_Differentialrechnung.pdf`,
      publicLabel: 'AN1 Differentialrechnung',
      page: 47,
      section: 'AN1.3 Monoton wachsende und fallende Funktionen',
      fingerprint: '6d1f8b2e94a0c537',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.analysis_monotonie_grenzwerte.an1.p90.lhopital',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-06mathe-an1-differentialrechnung',
      sourcePath: `${LECTURE}06Mathe_AN1_Differentialrechnung.pdf`,
      publicLabel: 'AN1 Differentialrechnung',
      page: 90,
      section: 'AN1.8 Stetigkeit, Grenzwerte und die Regel von L’Hôspital',
      fingerprint: 'e9035a7c1d8f4260',
      confidence: 0.91
    }),
    anchor({
      id: 'mathematik.analysis_monotonie_grenzwerte.an1.p100.newton',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-06mathe-an1-differentialrechnung',
      sourcePath: `${LECTURE}06Mathe_AN1_Differentialrechnung.pdf`,
      publicLabel: 'AN1 Differentialrechnung',
      page: 100,
      section: 'AN1.9 Zwischenwertsatz & Newton-Verfahren',
      fingerprint: '1c8e4f7a20b9d635',
      confidence: 0.9
    })
  ],
  univariate_optimierung: [
    anchor({
      id: 'mathematik.univariate_optimierung.op1.p10.einfuehrung',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-07mathe-op1-univoptimierung',
      sourcePath: `${LECTURE}07Mathe_OP1_UnivOptimierung.pdf`,
      publicLabel: 'OP1 Univariate Optimierung',
      page: 10,
      section: 'OP1.1 Einführung',
      fingerprint: 'a5d2e8f1037c4b96',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.univariate_optimierung.op1.p25.lokal',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-07mathe-op1-univoptimierung',
      sourcePath: `${LECTURE}07Mathe_OP1_UnivOptimierung.pdf`,
      publicLabel: 'OP1 Univariate Optimierung',
      page: 25,
      section: 'OP1.4 Lokale Extremstellen',
      fingerprint: '7b4c1f9e82a056d3',
      confidence: 0.93
    }),
    anchor({
      id: 'mathematik.univariate_optimierung.op1.p31.extremwertsatz',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-07mathe-op1-univoptimierung',
      sourcePath: `${LECTURE}07Mathe_OP1_UnivOptimierung.pdf`,
      publicLabel: 'OP1 Univariate Optimierung',
      page: 31,
      section: 'OP1.3 Der Extremwertsatz',
      fingerprint: 'c9e6a3d5180f724b',
      confidence: 0.9
    })
  ],
  analysis_multivariat: [
    anchor({
      id: 'mathematik.analysis_multivariat.an2.p14.funktionen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-08mathe-an2-funktionenmultivariat',
      sourcePath: `${LECTURE}08Mathe_AN2_FunktionenMultivariat.pdf`,
      publicLabel: 'AN2 Funktionen mehrerer Variablen',
      page: 14,
      section: 'AN2.1 Funktionen von zwei und mehr Variablen',
      fingerprint: '3f8a2c5e91d704b6',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.analysis_multivariat.an2.p22.partiell',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-08mathe-an2-funktionenmultivariat',
      sourcePath: `${LECTURE}08Mathe_AN2_FunktionenMultivariat.pdf`,
      publicLabel: 'AN2 Funktionen mehrerer Variablen',
      page: 22,
      section: 'AN2.3 Partielle Ableitungen',
      fingerprint: '5e1d9a7c4082f6b3',
      confidence: 0.93
    }),
    anchor({
      id: 'mathematik.analysis_multivariat.an2.p55.kettenregel',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-08mathe-an2-funktionenmultivariat',
      sourcePath: `${LECTURE}08Mathe_AN2_FunktionenMultivariat.pdf`,
      publicLabel: 'AN2 Funktionen mehrerer Variablen',
      page: 55,
      section: 'AN2.5 Die Kettenregel und Totale Ableitungen',
      fingerprint: '8a4f2e6c1039d758',
      confidence: 0.91
    })
  ],
  multivariate_optimierung: [
    anchor({
      id: 'mathematik.multivariate_optimierung.op2.p25.bivariat',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-09mathe-op2-multivoptimierung',
      sourcePath: `${LECTURE}09Mathe_OP2_MultivOptimierung.pdf`,
      publicLabel: 'OP2 Multivariate Optimierung',
      page: 25,
      section: 'OP2.1 Bivariate Optimierung',
      fingerprint: 'b2e7f4a8901c5d36',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.multivariate_optimierung.op2.p35.multivariat',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-09mathe-op2-multivoptimierung',
      sourcePath: `${LECTURE}09Mathe_OP2_MultivOptimierung.pdf`,
      publicLabel: 'OP2 Multivariate Optimierung',
      page: 35,
      section: 'OP2.2 Multivariate Optimierung',
      fingerprint: 'd6c1a8f5270e4b92',
      confidence: 0.91
    }),
    anchor({
      id: 'mathematik.multivariate_optimierung.op2.p38.nebenbedingungen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-09mathe-op2-multivoptimierung',
      sourcePath: `${LECTURE}09Mathe_OP2_MultivOptimierung.pdf`,
      publicLabel: 'OP2 Multivariate Optimierung',
      page: 38,
      section: 'OP2.3 Optimierung unter Nebenbedingungen',
      fingerprint: '4a9e2c7f8160d3b5',
      confidence: 0.9
    })
  ],
  lagrange: [
    anchor({
      id: 'mathematik.lagrange.op2.p43.lagrange_funktion',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-09mathe-op2-multivoptimierung',
      sourcePath: `${LECTURE}09Mathe_OP2_MultivOptimierung.pdf`,
      publicLabel: 'OP2 Multivariate Optimierung',
      page: 43,
      section: '1. Lagrange-Funktion aufschreiben',
      fingerprint: 'f1c8e4a2079b5d63',
      confidence: 0.93
    }),
    anchor({
      id: 'mathematik.lagrange.op2.p49.lagrange_pruefen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-09mathe-op2-multivoptimierung',
      sourcePath: `${LECTURE}09Mathe_OP2_MultivOptimierung.pdf`,
      publicLabel: 'OP2 Multivariate Optimierung',
      page: 49,
      section: 'Lagrange Optimierung überprüfen',
      fingerprint: '9e3a7c1f5082d4b6',
      confidence: 0.91
    }),
    anchor({
      id: 'mathematik.lagrange.op2.p02.methode',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-09mathe-op2-multivoptimierung',
      sourcePath: `${LECTURE}09Mathe_OP2_MultivOptimierung.pdf`,
      publicLabel: 'OP2 Multivariate Optimierung',
      page: 2,
      section: 'OP2.4 Die Methode der Lagrange-Multiplikatoren',
      fingerprint: '2d7f9e4a8160c3b5',
      confidence: 0.9
    })
  ],
  integralrechnung: [
    anchor({
      id: 'mathematik.integralrechnung.an3.p23.grundlagen',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-10mathe-an3-integralrechnung',
      sourcePath: `${LECTURE}10Mathe_AN3_Integralrechnung.pdf`,
      publicLabel: 'AN3 Integralrechnung',
      page: 23,
      section: 'AN3.1 Grundlagen',
      fingerprint: '6b4e1a9f7302c8d5',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.integralrechnung.an3.p31.partiell',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-10mathe-an3-integralrechnung',
      sourcePath: `${LECTURE}10Mathe_AN3_Integralrechnung.pdf`,
      publicLabel: 'AN3 Integralrechnung',
      page: 31,
      section: 'AN3.2 Partielle Integration',
      fingerprint: 'a8f3c2e91b4d7015',
      confidence: 0.91
    }),
    anchor({
      id: 'mathematik.integralrechnung.an3.p34.substitution',
      sourceId:
        'mathematik-lecture-slide-mathematik-vorlesung-folien-r-skripte-lehrvideos-10mathe-an3-integralrechnung',
      sourcePath: `${LECTURE}10Mathe_AN3_Integralrechnung.pdf`,
      publicLabel: 'AN3 Integralrechnung',
      page: 34,
      section: 'AN3.3 Integration durch Substitution',
      fingerprint: 'c41e0a6d8f2b9e37',
      confidence: 0.91
    })
  ],
  r_begleitpraxis: [
    anchor({
      id: 'mathematik.r_begleitpraxis.re1.p01.e1',
      sourceId: 'mathematik-exercise-mathematik-kleinubung-e-1-algebra-und-mengenlehre-r-e1-aufgaben',
      sourcePath: 'Kleinübung/E_1_-_Algebra_und_Mengenlehre/R.E1_-_Aufgaben.pdf',
      publicLabel: 'R.E1',
      page: 1,
      section: 'R-Übungsaufgaben zu Einführung I: Algebra und Mengenlehre',
      fingerprint: '7d2b5f1a9c8e4036',
      confidence: 0.92
    }),
    anchor({
      id: 'mathematik.r_begleitpraxis.ran1.p01.an1',
      sourceId:
        'mathematik-exercise-mathematik-kleinubung-an-1-univariate-differenzialrechnung-r-an-i-aufgaben',
      sourcePath: 'Kleinübung/AN_1_-_Univariate_Differenzialrechnung/R.AN_I_-_Aufgaben.pdf',
      publicLabel: 'R.AN1',
      page: 1,
      section: 'R-Übungsaufgaben zu Analysis I: Univariate Differenzialrechnung',
      fingerprint: 'e9051c3a7b6d2840',
      confidence: 0.91
    }),
    anchor({
      id: 'mathematik.r_begleitpraxis.rop2.p01.op2',
      sourceId:
        'mathematik-exercise-mathematik-kleinubung-op-2-multivariate-optimierung-r-op-ii-aufgaben',
      sourcePath: 'Kleinübung/OP_2_-__Multivariate_Optimierung/R.OP_II_-_Aufgaben.pdf',
      publicLabel: 'R.OP2',
      page: 1,
      section: 'R-Übungsaufgaben zu Optimierung II: Multivariate Optimierung',
      fingerprint: '1f8a4e2c0d9b6537',
      confidence: 0.91
    })
  ]
});
