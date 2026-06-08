// ============================================================
// SOURCE ANCHORS — Ökonometrie
// Syllabus-heading pass (2026-05-28); section labels from heading candidates.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'exam-os-syllabus-pass-oekonometrie-anchors-1';

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

export const OEKONOMETRIE_SOURCE_ANCHORS = Object.freeze({
  matrix_notation: [
    anchor({
      id: 'oekonometrie.matrix_notation.einf-wise2024-pdf.p97.1-1-x-1x-x-1x-1',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 97,
      section: "?              \u0002 1 \u00011 X 1X \u0002 X 1X \u00011",
      fingerprint: '73dff6923dc4ce2d',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.matrix_notation.einf-wise2024-pdf.p109.p22-22-0',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 109,
      section: "P22  22        0",
      fingerprint: '4103214c08d67bbd',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.probeklausur1.a1.p2.loglog-ols-inference',
      sourceId: 'oekonometrie-exam-okonometrie-exercises-einfuhrung-in-die-okonometrie-ubung-probeklausuren-probeklausur-1',
      sourcePath: 'Exercises_Einführung_in_die_Ökonometrie_Übung/Probeklausuren/Probeklausur_1.pdf',
      publicLabel: 'Probeklausur_1',
      page: 2,
      section: 'Aufgabe 1: Log-log OLS-Modell Reisproduktion, Matrixnotation, Inferenz, R², F-Test und Prognose',
      fingerprint: 'e4f9148f61066ed2',
      confidence: 0.9,
      reviewedBy: 'codex-official-task-review-oekonometrie-pass-1',
      reviewedAt: '2026-06-08'
    })
  ],
  sample_moments: [
    anchor({
      id: 'oekonometrie.sample_moments.einf-wise2024-pdf.p120.px-1-1x-q-1x-1-1y',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 120,
      section: "β̂ \u0010 pX 1Ψ\u00011X q\u00011X 1Ψ\u00011y",
      fingerprint: '4033c056b4dad8ac',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.sample_moments.einf-wise2024-pdf.p128.t2-exppzt1-q',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 128,
      section: "σt2 \u0010 exppzt1 αq",
      fingerprint: '3bc1f21fb893a6f7',
      confidence: 0.84
    })
  ],
  distributions_df: [
    anchor({
      id: 'oekonometrie.distributions_df.einf-wise2024-pdf.p154.seite-154',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 154,
      section: "Seite 154",
      fingerprint: 'de98f7a30028ca12',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.distributions_df.einf-wise2024-pdf.p63.2-2-t-2',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 63,
      section: "2                            2 \u0001T {2",
      fingerprint: 'fe99090044c6c44a',
      confidence: 0.84
    })
  ],
  model_objects: [
    anchor({
      id: 'oekonometrie.model_objects.einf-wise2024-pdf.p46.x21-m1y-x21-m1x2b2-m1-i-',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 46,
      section: "ô        X21 M1y \u0010 X21 M1X2b2, M1 \u0010 I \u0001 X1pX11X1q\u00011X11",
      fingerprint: '685aec2a2d6be050',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.model_objects.einf-wise2024-pdf.p174.3-4-3-nls-estimation-of-',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 174,
      section: "3.4.3       NLS estimation of multiple slope parameters",
      fingerprint: '91c976fb1ab56674',
      confidence: 0.84
    })
  ],
  ols_objective: [
    anchor({
      id: 'oekonometrie.ols_objective.einf-wise2024-pdf.p152.t-t-1-s-1',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 152,
      section: "T t\u00101 s\u00101",
      fingerprint: '994586ebd16371cc',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.ols_objective.einf-wise2024-pdf.p68.cramer-rao-inequality-cr',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 68,
      section: "Cramer-Rao inequality (CRI)",
      fingerprint: '7fb954ac16e27734',
      confidence: 0.84
    })
  ],
  normal_equations: [
    anchor({
      id: 'oekonometrie.normal_equations.einf-wise2024-pdf.p67.einfu-hrung-in-die-o-kon',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 67,
      section: "Einführung in die Ökonometrie",
      fingerprint: '417e0a165635fef0',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.normal_equations.einf-wise2024-pdf.p70.r1-n-pr1-2r1px-1x-q-1r11',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 70,
      section: "R1β̃ \u0012 N pR1β, σ 2R1pX 1X q\u00011R11 q",
      fingerprint: 'a334044998afca85',
      confidence: 0.84
    })
  ],
  partial_effects: [
    anchor({
      id: 'oekonometrie.partial_effects.einf-wise2024-pdf.p71.rearranging-yields',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 71,
      section: "Rearranging yields:",
      fingerprint: 'd938bcc437685ae2',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.partial_effects.einf-wise2024-pdf.p78.slide',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 78,
      section: "\u0014              \u001c       \u0004",
      fingerprint: 'b8a6b09dc1641a27',
      confidence: 0.84
    })
  ],
  functional_forms: [
    anchor({
      id: 'oekonometrie.functional_forms.einf-wise2024-pdf.p69.b-2b-1-2-4',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 69,
      section: "Bσ2Bβ1             2       σ4",
      fingerprint: '1f47ee601b31e819',
      confidence: 0.88
    }),
    anchor({
      id: 'oekonometrie.functional_forms.einf-wise2024-pdf.p39.1-2-8-estimating-the-var',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 39,
      section: "1.2.8   Estimating the variance parameter",
      fingerprint: '7a41869dea3c9b78',
      confidence: 0.88
    })
  ],
  no_perfect_multicollinearity: [
    anchor({
      id: 'oekonometrie.no_perfect_multicollinearity.einf-wise2024-pdf.p129.const-st-3-316940-0-4027',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 129,
      section: "CONST_ST         -3.316940      0.402775     -8.235212        0.0000",
      fingerprint: 'ed5f66098d815f00',
      confidence: 0.88
    }),
    anchor({
      id: 'oekonometrie.no_perfect_multicollinearity.einf-wise2024-pdf.p50.1-3-4-multicollinearity-',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 50,
      section: "1.3.4    Multicollinearity in the multiple model",
      fingerprint: '7283b79e400bf924',
      confidence: 0.88
    })
  ],
  exogeneity: [
    anchor({
      id: 'oekonometrie.exogeneity.einf-wise2024-pdf.p73.0-t1-2pt-k-q-x10px-1x-q-',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 73,
      section: "0       t1\u0001α{2pT \u0001 K qσ̂     x10pX 1X q\u00011x0   1q \u0010 1 \u0001 α.",
      fingerprint: 'd5df4a6e4e1bcfb3',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.exogeneity.einf-wise2024-pdf.p148.einfu-hrung-in-die-o-kon',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 148,
      section: "Einführung in die Ökonometrie",
      fingerprint: '63842c3f7971dc67',
      confidence: 0.84
    })
  ],
  endogeneity_ovb: [
    anchor({
      id: 'oekonometrie.endogeneity_ovb.einf-wise2024-pdf.p106.slide',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 106,
      section: "\u0004            \u0004              \u0004",
      fingerprint: '6b0ffff36f8ce3ed',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.endogeneity_ovb.einf-wise2024-pdf.p60.y-0-standard-errors-of-p',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 60,
      section: "ŷ 0                                Standard errors of predictors pσ̂p q",
      fingerprint: '88f65f63e100ad32',
      confidence: 0.84
    })
  ],
  unbiasedness: [
    anchor({
      id: 'oekonometrie.unbiasedness.einf-wise2024-pdf.p104.px-1p-1p-x-q-1x-1p-1p-y',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 104,
      section: "\u0010 pX 1P 1P X q\u00011X 1P 1P y",
      fingerprint: 'c214689238bb88d9',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.unbiasedness.einf-wise2024-pdf.p66.t-k-2pt-k-q',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 66,
      section: "ðñ σ̂ \u0012 T \u0001 K χ2pT \u0001 K q.",
      fingerprint: '57e59b135b9c5916',
      confidence: 0.84
    })
  ],
  gauss_markov: [
    anchor({
      id: 'oekonometrie.gauss_markov.einf-wise2024-pdf.p153.3-1-appendix-1-some-resu',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 153,
      section: "3.1        Appendix 1: Some results for matrix algebra",
      fingerprint: '00b28e94e08bd8c3',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.gauss_markov.einf-wise2024-pdf.p82.h0-r-r',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 82,
      section: "H0 : \u0005                β\u0010   \u0005       ; Rβ̃ \u0001 r \u0010   \u0005",
      fingerprint: '782f99c9fb413399',
      confidence: 0.84
    })
  ],
  consistency: [
    anchor({
      id: 'oekonometrie.consistency.einf-wise2024-pdf.p85.1-5-asymptotic-propertie',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 85,
      section: "1.5     Asymptotic properties of the OLS-estimator",
      fingerprint: '4faa2d023ee8121f',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.consistency.einf-wise2024-pdf.p14.x1-x-1',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 14,
      section: "\u0011                   \u0019 \u0016 x1 x       1",
      fingerprint: '5c10d7f3d88be13c',
      confidence: 0.84
    })
  ],
  error_variance: [
    anchor({
      id: 'oekonometrie.error_variance.einf-wise2024-pdf.p182.constant-t2-ln-s-p-q',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 182,
      section: "\u0010 constant \u0001 T2 ln S pβq",
      fingerprint: '9291bd8af768680b',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.error_variance.einf-wise2024-pdf.p123.lim-t-8',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 123,
      section: "lim T Ñ8",
      fingerprint: '9264e41ab505c6fb',
      confidence: 0.84
    })
  ],
  covariance_matrix: [
    anchor({
      id: 'oekonometrie.covariance_matrix.einf-wise2024-pdf.p100.k-2-k-2-k-2-k-2-k-2',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 100,
      section: "K=2       K=2           K=2            K=2      K=2",
      fingerprint: '2b9e7a3c5bc2c63c',
      confidence: 0.88
    }),
    anchor({
      id: 'oekonometrie.covariance_matrix.einf-wise2024-pdf.p55.coef-est-std-err-est-std',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 55,
      section: "coef    est    std-err    est    std-err      σ         σ2",
      fingerprint: 'c0a7ac785fae890c',
      confidence: 0.88
    })
  ],
  prediction: [
    anchor({
      id: 'oekonometrie.prediction.einf-wise2024-pdf.p78.slide',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 78,
      section: "\u0014              \u001c       \u0004",
      fingerprint: 'b8a6b09dc1641a27',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.prediction.einf-wise2024-pdf.p121.v-t-vt-1-27',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 121,
      section: "ô v̂t \u0010 vt\u0006 \u0001 1.27",
      fingerprint: '8e5969dbee91854e',
      confidence: 0.84
    })
  ],
  prediction_intervals: [
    anchor({
      id: 'oekonometrie.prediction_intervals.einf-wise2024-pdf.p08.w',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 8,
      section: "W                       \u0002",
      fingerprint: 'e1a736b369acf005',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.prediction_intervals.einf-wise2024-pdf.p41.einfu-hrung-in-die-o-kon',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 41,
      section: "Einführung in die Ökonometrie",
      fingerprint: '8c0b3d6118d7cbe0',
      confidence: 0.84
    })
  ],
  r_squared: [
    anchor({
      id: 'oekonometrie.r_squared.einf-wise2024-pdf.p167.3-4-appendix-4-nonlinear',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 167,
      section: "3.4        Appendix 4: Nonlinear LS and ML estimation",
      fingerprint: '713b1965bde05f2a',
      confidence: 0.88
    }),
    anchor({
      id: 'oekonometrie.r_squared.einf-wise2024-pdf.p09.1-2-the-basic-model',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 9,
      section: "1.2      The basic model",
      fingerprint: 'eeaec497ae0f4c4c',
      confidence: 0.88
    })
  ],
  t_test: [
    anchor({
      id: 'oekonometrie.t_test.einf-wise2024-pdf.p175.b-1-b-k',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 175,
      section: "\u0016      B β1           B βK \u001e",
      fingerprint: '4b45a472ded7e960',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.t_test.einf-wise2024-pdf.p56.e0e10-x0pb-qe10-e0pb-q1x',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 56,
      section: "e0e10 \u0001 X0pb \u0001 β qe10 \u0001 e0pb \u0001 β q1X01 s",
      fingerprint: '1cce6e0a68c2f8a4',
      confidence: 0.84
    })
  ],
  f_test: [
    anchor({
      id: 'oekonometrie.f_test.einf-wise2024-pdf.p163.3-3-appendix-3-ols-estim',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 163,
      section: "3.3        Appendix 3: OLS-Estimation under linearrestrictions",
      fingerprint: '4a32420368010ead',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.f_test.einf-wise2024-pdf.p169.3-4-2-the-gauss-newton-a',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 169,
      section: "3.4.2       The Gauss Newton algorithm",
      fingerprint: 'f15aeff7219c9497',
      confidence: 0.84
    })
  ],
  confidence_intervals: [
    anchor({
      id: 'oekonometrie.confidence_intervals.einf-wise2024-pdf.p159.11-11-11',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 159,
      section: "11                  11     11        \u001d,",
      fingerprint: '107f6db234dceaf5',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.confidence_intervals.einf-wise2024-pdf.p28.0-817-0-114-0-059',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 28,
      section: "\u0006    0.817 \u00010.114 \u00010.059 \u000e",
      fingerprint: 'a6254f01d1b29175',
      confidence: 0.84
    })
  ],
  normal_linear_model_mle: [
    anchor({
      id: 'oekonometrie.normal_linear_model_mle.einf-wise2024-pdf.p03.einfu-hrung-in-die-o-kon',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 3,
      section: "Einführung in die Ökonometrie",
      fingerprint: '71c704e0ae4afe0e',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.normal_linear_model_mle.einf-wise2024-pdf.p75.1-4-4-continuing-the-mon',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 75,
      section: "1.4.4        Continuing the Monte Carlo experiment (confidence intervals)",
      fingerprint: '1e3aab900bea725d',
      confidence: 0.84
    })
  ],
  linear_restrictions_ur: [
    anchor({
      id: 'oekonometrie.linear_restrictions_ur.einf-wise2024-pdf.p102.2-trr-pi-x-px-x-q-x-qs',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 102,
      section: "2 trrΨpI \u0001 X pX X q X qs",
      fingerprint: '3f5b8fd55fbc908e',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.linear_restrictions_ur.einf-wise2024-pdf.p126.2ptii-k-q',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 126,
      section: "\u0012 χ2pTII \u0001K q",
      fingerprint: '220db7af91cec305',
      confidence: 0.84
    })
  ],
  asymptotic_normality: [
    anchor({
      id: 'oekonometrie.asymptotic_normality.einf-wise2024-pdf.p35.einfu-hrung-in-die-o-kon',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 35,
      section: "Einführung in die Ökonometrie",
      fingerprint: 'caf1491d6ea7ee30',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.asymptotic_normality.einf-wise2024-pdf.p149.slide',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 149,
      section: "\u001b                          -          \u001b                     -",
      fingerprint: '78eb3b08c53ea3f5',
      confidence: 0.84
    })
  ],
  monte_carlo: [
    anchor({
      id: 'oekonometrie.monte_carlo.einf-wise2024-pdf.p150.einfu-hrung-in-die-o-kon',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 150,
      section: "Einführung in die Ökonometrie",
      fingerprint: 'b22850b50d06f8ab',
      confidence: 0.88
    }),
    anchor({
      id: 'oekonometrie.monte_carlo.einf-wise2024-pdf.p52.2-2-x-x',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 52,
      section: "2 γ2 x       x",
      fingerprint: 'ef3a44833dac412c',
      confidence: 0.84
    })
  ],
  vif_collinearity: [
    anchor({
      id: 'oekonometrie.vif_collinearity.einf-wise2024-pdf.p78.slide',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 78,
      section: "\u0014              \u001c       \u0004",
      fingerprint: 'b8a6b09dc1641a27',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.vif_collinearity.einf-wise2024-pdf.p121.v-t-vt-1-27',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 121,
      section: "ô v̂t \u0010 vt\u0006 \u0001 1.27",
      fingerprint: '8e5969dbee91854e',
      confidence: 0.84
    })
  ],
  fwl_partial_regression: [
    anchor({
      id: 'oekonometrie.fwl_partial_regression.einf-wise2024-pdf.p102.2-trr-pi-x-px-x-q-x-qs',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 102,
      section: "2 trrΨpI \u0001 X pX X q X qs",
      fingerprint: '3f5b8fd55fbc908e',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.fwl_partial_regression.einf-wise2024-pdf.p126.2ptii-k-q',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 126,
      section: "\u0012 χ2pTII \u0001K q",
      fingerprint: '220db7af91cec305',
      confidence: 0.84
    })
  ],
  heteroskedasticity: [
    anchor({
      id: 'oekonometrie.heteroskedasticity.einf-wise2024-pdf.p52.2-2-x-x',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 52,
      section: "2 γ2 x       x",
      fingerprint: 'ef3a44833dac412c',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.heteroskedasticity.einf-wise2024-pdf.p26.205-18-949-20-1010-2-0-0',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 26,
      section: "205.18 949.20 1010.2                       \u00010.059 \u00010.168 0.171",
      fingerprint: 'd20cfbaba9f07654',
      confidence: 0.84
    })
  ],
  robust_gls: [
    anchor({
      id: 'oekonometrie.robust_gls.einf-wise2024-pdf.p109.p22-22-0',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 109,
      section: "P22  22        0",
      fingerprint: '4103214c08d67bbd',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.robust_gls.einf-wise2024-pdf.p115.2-6-a-heteroskedastic-mo',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 115,
      section: "2.6    A heteroskedastic model",
      fingerprint: '58e69a03843ca2b1',
      confidence: 0.84
    })
  ],
  autocorrelation: [
    anchor({
      id: 'oekonometrie.autocorrelation.einf-wise2024-pdf.p172.pseudo-linear-model-seco',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 172,
      section: "Pseudo linear model (second step):",
      fingerprint: 'f9bf300e31667fe2',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.autocorrelation.einf-wise2024-pdf.p143.residual-actual-fitted',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 143,
      section: "Residual        Actual         Fitted",
      fingerprint: '7b1b7594524120d9',
      confidence: 0.84
    })
  ],
  hac_newey_west: [
    anchor({
      id: 'oekonometrie.hac_newey_west.einf-wise2024-pdf.p175.b-1-b-k',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 175,
      section: "\u0016      B β1           B βK \u001e",
      fingerprint: '4b45a472ded7e960',
      confidence: 0.84
    }),
    anchor({
      id: 'oekonometrie.hac_newey_west.einf-wise2024-pdf.p56.e0e10-x0pb-qe10-e0pb-q1x',
      sourceId: 'oekonometrie-lecture-slide-okonometrie-lecture-einfuhrung-in-die-okonometrie-einf-wise2024',
      sourcePath: 'Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf',
      publicLabel: "Einf_WiSe2024",
      page: 56,
      section: "e0e10 \u0001 X0pb \u0001 β qe10 \u0001 e0pb \u0001 β q1X01 s",
      fingerprint: '1cce6e0a68c2f8a4',
      confidence: 0.84
    })
  ]
});
