// ============================================================
// SOURCE ANCHORS — Mikroökonomik I
// Reviewed page-level anchors for official VL reconstruction (pass 1–2).
// No source text stored; quoteFingerprint hashes the reviewed section label.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'codex-source-pass-mikro1-anchors-2';

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

export const MIKRO1_SOURCE_ANCHORS = Object.freeze({
  budget: [
    anchor({
      id: 'mikro1.budget.vl01.p16.budgetmenge',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-1',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_1.pdf',
      publicLabel: 'Vorlesung 1',
      page: 16,
      section: 'Budgetmenge',
      fingerprint: 'a3c91f0e4b2d7085',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.budget.vl01.p18.budgetgerade',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-1',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_1.pdf',
      publicLabel: 'Vorlesung 1',
      page: 18,
      section: 'Budgetmenge und Budgetgerade',
      fingerprint: 'd8e2a1c40f9b6e17',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.budget.vl01.p19.budgetdiskussion',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-1',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_1.pdf',
      publicLabel: 'Vorlesung 1',
      page: 19,
      section: 'Budgetgerade: Diskussion',
      fingerprint: 'f1b7c9e0284a5d63',
      confidence: 0.91
    })
  ],
  praeferenz: [
    anchor({
      id: 'mikro1.praeferenz.vl02.p02.praeferenzen',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-2',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 2,
      section: 'Präferenzen',
      fingerprint: 'b2e4f8a1037c9d52',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro1.praeferenz.vl02.p07.indifferenz',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-2',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 7,
      section: 'Indifferenzkurven',
      fingerprint: 'c9d1a7e4062b8f34',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.praeferenz.vl02.p12.grs',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-2',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 12,
      section: 'Grenzrate der Substitution',
      fingerprint: 'e4a8c2f9170d3b61',
      confidence: 0.91
    })
  ],
  lagrange: [
    anchor({
      id: 'mikro1.lagrange.vl02.p17.nebenbedingung',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-2',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 17,
      section: 'Exkurs: Maximierung unter einer Nebenbedingung',
      fingerprint: '7f3b2e9a81c4d056',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro1.lagrange.vl02.p20.nebenbedingungen',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-2',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 20,
      section: 'Exkurs: Maximierung unter Nebenbedingungen',
      fingerprint: '8a1d5c3e92f0b748',
      confidence: 0.91
    }),
    anchor({
      id: 'mikro1.lagrange.vl04.p04.haushaltsoptimum',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-4',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_4.pdf',
      publicLabel: 'Vorlesung 4',
      page: 4,
      section: 'Haushaltsoptimum, analytische Bestimmung',
      fingerprint: '9c2e6f1a03b8d459',
      confidence: 0.93
    })
  ],
  marshall: [
    anchor({
      id: 'mikro1.marshall.vl04.p04.haushaltsoptimum',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-4',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_4.pdf',
      publicLabel: 'Vorlesung 4',
      page: 4,
      section: 'Haushaltsoptimum, analytische Bestimmung',
      fingerprint: '1d8f4a2c96e0b735',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro1.marshall.vl04.p09.marshall-cd',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-4',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_4.pdf',
      publicLabel: 'Vorlesung 4',
      page: 9,
      section: 'Marshallsche Nachfrage bei Cobb-Douglas Nutzenfunktion',
      fingerprint: '2e9b5d7f18a4c062',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.marshall.vl04.p10.marshall-ces',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-4',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_4.pdf',
      publicLabel: 'Vorlesung 4',
      page: 10,
      section: 'Marshallsche Nachfrage bei CES Nutzenfunktion',
      fingerprint: '3f0c6e8a29b5d173',
      confidence: 0.92
    })
  ],
  slutsky: [
    anchor({
      id: 'mikro1.slutsky.vl07.p02.einkommen-substitution',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-7',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_7.pdf',
      publicLabel: 'Vorlesung 7',
      page: 2,
      section: 'Preisänderungen: Einkommens- und Substitutionseffekt',
      fingerprint: '4a1d7f9b38c2e084',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.slutsky.vl07.p04.slutsky-gleichung',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-7',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_7.pdf',
      publicLabel: 'Vorlesung 7',
      page: 4,
      section: 'Die Slutsky-Gleichung',
      fingerprint: '5b2e8a0c49d3f195',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.slutsky.vl08.p02.sonderfaelle',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-8',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 2,
      section: 'Slutsky-Gleichung: Zwei interessante Sonderfälle',
      fingerprint: '6c3f9b1d50e4a206',
      confidence: 0.91
    })
  ],
  produktion: [
    anchor({
      id: 'mikro1.produktion.vl11.p04.produktionstechnologie',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-11',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_11.pdf',
      publicLabel: 'Vorlesung 11',
      page: 4,
      section: 'Produktionstechnologie',
      fingerprint: '7d4e1a9b40f2c318',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.produktion.vl11.p07.isoquanten',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-11',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_11.pdf',
      publicLabel: 'Vorlesung 11',
      page: 7,
      section: 'Isoquanten',
      fingerprint: '8e5f2b0c51a3d429',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro1.produktion.vl11.p10.skalenertraege',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-11',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_11.pdf',
      publicLabel: 'Vorlesung 11',
      page: 10,
      section: 'Skalenerträge',
      fingerprint: '9f6a3c1d62b4e530',
      confidence: 0.91
    })
  ],
  kosten: [
    anchor({
      id: 'mikro1.kosten.vl12.p03.kostenminimierung',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-12',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 3,
      section: 'Kostenminimierung',
      fingerprint: 'a07b4d2e73c5f641',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.kosten.vl12.p11.shephard',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-12',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 11,
      section: 'Shephards Lemma',
      fingerprint: 'b18c5e3f84d6a752',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro1.kosten.vl12.p16.kostenfunktion',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-12',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 16,
      section: 'Die Kostenfunktion',
      fingerprint: 'c29d6f4a95e7b863',
      confidence: 0.93
    })
  ],
  gewinn: [
    anchor({
      id: 'mikro1.gewinn.vl13.p02.gewinnmax',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-13',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 2,
      section: 'Gewinnmaximierung',
      fingerprint: 'd3ae7a5b06f8c974',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.gewinn.vl13.p04.gewinn-kostenfunktion',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-13',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 4,
      section: 'Gewinnmaximierung unter Verwendung der Kostenfunktion',
      fingerprint: 'e4bf8b6c17a9da85',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro1.gewinn.vl14.p10.kurzfristig',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-14',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_14.pdf',
      publicLabel: 'Vorlesung 14',
      page: 10,
      section: 'Kurzfristige Gewinnmaximierung',
      fingerprint: 'f5c09c7d28b0eb96',
      confidence: 0.91
    })
  ],
  markt: [
    anchor({
      id: 'mikro1.markt.vl16.p09.marktangebot-nachfrage',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-16',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 9,
      section: 'Marktangebot und Marktnachfrage',
      fingerprint: '06d1ad8e39c1fc07',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.markt.vl16.p12.gleichgewicht',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-16',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 12,
      section: 'Marktgleichgewicht',
      fingerprint: '17e2be9f4ad20d18',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.markt.vl16.p14.wohlfahrt',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-16',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 14,
      section: 'Wohlfahrt',
      fingerprint: '28f3cf0a5be31e29',
      confidence: 0.91
    })
  ],
  monopol: [
    anchor({
      id: 'mikro1.monopol.vl17.p03.monopol',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-17',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 3,
      section: 'Das Monopol',
      fingerprint: '39a4d01b6cf42f3a',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro1.monopol.vl17.p06.gewinnmax-monopol',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-17',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 6,
      section: 'Gewinnmaximierung des Monopolisten',
      fingerprint: '4ab5e12c7d05304b',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro1.monopol.vl17.p11.wohlfahrt',
      sourceId: 'mikro1-lecture-slide-mikrookonomik-i-vorlesungsfolien-mikro-1-vl-17',
      sourcePath: 'Vorlesungsfolien/Mikro_1_VL_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 11,
      section: 'Wohlfahrtswirkung des Monopols',
      fingerprint: '5bc6f23d8e16415c',
      confidence: 0.91
    })
  ]
});
