// ============================================================
// SOURCE ANCHORS — Mikroökonomik II
// Reviewed page-level anchors for official-source reconstruction.
// These records intentionally avoid storing source text; quoteFingerprint
// is a short hash of the reviewed topic phrase.
// ============================================================

// Page locators re-verified against the official VL PDFs on 2026-06-03 by
// reading each anchored slide; drifted page numbers corrected to the slide
// where the topic actually appears (see
// docs/audits/2026-06-03-mikro2-source-metadata-readiness-pass.md). Anchor
// id strings keep their historical pNN label for stable cross-references in
// taskFamilies.js / formulaCards.js; locator.page is the verified truth.
const DEFAULT_REVIEWED_AT = '2026-06-03';
const DEFAULT_REVIEWED_BY = 'codex-source-verify-pass-2026-06-03';

function anchor({
  id,
  sourceId,
  sourcePath,
  publicLabel,
  page,
  section,
  fingerprint,
  confidence = 0.88,
  reviewedAt = DEFAULT_REVIEWED_AT,
  reviewedBy = DEFAULT_REVIEWED_BY
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

export const MIKRO2_SOURCE_ANCHORS = Object.freeze({
  monopol_preissetzung: [
    anchor({
      id: 'mikro2.monopol_preissetzung.vl02.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 1,
      section: 'Preissetzung im Monopol und Wohlfahrtseffekte',
      fingerprint: '372887c7f7512d78',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.monopol_preissetzung.vl02.p02.markup',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 2,
      section: 'Preissetzung und Preiselastizität der Nachfrage',
      fingerprint: '01a453da911b12dd',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.monopol_preissetzung.vl02.p02.monopoly-markup',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 2,
      section: 'Monopolpreis als Aufschlag auf Grenzkosten',
      fingerprint: 'c0af93852ecf369f',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.monopol_preissetzung.vl02.p10.linear-monopoly',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 10,
      section: 'Zahlenbeispiel zum linearen Monopol',
      fingerprint: '3467ec718fd1c439',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.monopol_preissetzung.vl02.p11.monopoly-welfare',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 11,
      section: 'Wohlfahrt im Monopol und bei vollkommener Konkurrenz',
      fingerprint: '5dfd287a193b37d6',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    })
  ],
  preisdiskriminierung: [
    anchor({
      id: 'mikro2.preisdiskriminierung.vl03.p02.third-degree',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-3',
      sourcePath: 'Vorlesungsfolien/Mikro_2_3.pdf',
      publicLabel: 'Vorlesung 3',
      page: 2,
      section: 'Preisdiskriminierung dritten Grades',
      fingerprint: '4cd0ceaf50856fcb',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.preisdiskriminierung.vl03.p03.mr-equalization',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-3',
      sourcePath: 'Vorlesungsfolien/Mikro_2_3.pdf',
      publicLabel: 'Vorlesung 3',
      page: 3,
      section: 'Ausgleich der Grenzerlöse zwischen Teilmärkten',
      fingerprint: '31e06bc97d67af06',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.preisdiskriminierung.vl03.p04.elasticity-price-rule',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-3',
      sourcePath: 'Vorlesungsfolien/Mikro_2_3.pdf',
      publicLabel: 'Vorlesung 3',
      page: 4,
      section: 'Elastizitätenregel bei Preisdiskriminierung dritten Grades',
      fingerprint: '72b15baca41916a1',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.preisdiskriminierung.vl04.p02.second-degree',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-4',
      sourcePath: 'Vorlesungsfolien/Mikro_2_4.pdf',
      publicLabel: 'Vorlesung 4',
      page: 2,
      section: 'Preisdiskriminierung zweiten Grades',
      fingerprint: '629de34f946cdf51',
      confidence: 0.95,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    })
  ],
  spieltheorie_statisch: [
    anchor({
      id: 'mikro2.spieltheorie_statisch.vl09.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-9',
      sourcePath: 'Vorlesungsfolien/Mikro2_9.pdf',
      publicLabel: 'Vorlesung 9',
      page: 1,
      section: 'Spieltheorie I: Auszahlungsmatrix, dominante Strategien, Nash',
      fingerprint: 'f885f7f94c9f1ec8',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.spieltheorie_statisch.vl09.p05.nash',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-9',
      sourcePath: 'Vorlesungsfolien/Mikro2_9.pdf',
      publicLabel: 'Vorlesung 9',
      page: 6,
      section: 'Nash-Gleichgewicht (in reinen Strategien)',
      fingerprint: 'f885f7f94c9f1ec8',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro2.spieltheorie_statisch.vl10.p01.mixed-intro',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-10',
      sourcePath: 'Vorlesungsfolien/Mikro2_10.pdf',
      publicLabel: 'Vorlesung 10',
      page: 1,
      section: 'Nash-Gleichgewichte in gemischten Strategien',
      fingerprint: '9f66dcb496dc03a5',
      confidence: 0.9
    })
  ],
  spieltheorie_dynamisch: [
    anchor({
      id: 'mikro2.spieltheorie_dynamisch.vl10.p01.mixed',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-10',
      sourcePath: 'Vorlesungsfolien/Mikro2_10.pdf',
      publicLabel: 'Vorlesung 10',
      page: 1,
      section: 'Gemischte Strategien und spezielle Spiele',
      fingerprint: '9f66dcb496dc03a5',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.spieltheorie_dynamisch.vl11.p01.sequential',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-11',
      sourcePath: 'Vorlesungsfolien/Mikro2_11.pdf',
      publicLabel: 'Vorlesung 11',
      page: 1,
      section: 'Sequentielle Spiele und teilspielperfektes Nash-Gleichgewicht',
      fingerprint: '50c91909d0403f9b',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.spieltheorie_dynamisch.vl11.p04.backward-induction',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-11',
      sourcePath: 'Vorlesungsfolien/Mikro2_11.pdf',
      publicLabel: 'Vorlesung 11',
      page: 4,
      section: 'Rückwärtsinduktion und Teilspielperfektion',
      fingerprint: '50c91909d0403f9b',
      confidence: 0.9
    })
  ],
  oligopol_cournot_bertrand: [
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl06.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 1,
      section: 'Cournot-Duopol und Cournot-Wettbewerb mit vielen Anbietern',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl06.p03.reaction',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 4,
      section: 'Reaktionsfunktionen und Cournot-Gleichgewicht',
      fingerprint: 'e1d584d6cd3a2e7a',
      confidence: 0.96,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl06.p06.cournot-output',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 6,
      section: 'Cournot-Output bei unterschiedlichen Grenzkosten',
      fingerprint: '7cb54f135d97890d',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl06.p11.symmetric-cournot',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 11,
      section: 'Cournot-Modell mit identischen Unternehmen',
      fingerprint: '0ac891cdc3f132e8',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl06.p16.n-firm-cournot',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 16,
      section: 'Cournot-Modell mit n identischen Unternehmen',
      fingerprint: 'f97aa10c3cb39ec1',
      confidence: 0.96,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p01.bertrand',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 1,
      section: 'Bertrand-Modell und Preiswettbewerb',
      fingerprint: '52de0cbf2d6d4eb7',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p03.bertrand-paradox',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 3,
      section: 'Preiswettbewerb mit identischen Gütern: Marktergebnis (p = c, Bertrand-Paradox)',
      fingerprint: 'f4d4f41e318de4f8',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p05.diff-demand',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 5,
      section: 'Preiswettbewerb mit differenzierten Gütern: direktes Nachfragesystem',
      fingerprint: 'ff76d410e734ea7e',
      confidence: 0.96,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p07.diff-reaction',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 7,
      section: 'Preiswettbewerb mit differenzierten Gütern: Reaktionsfunktionen',
      fingerprint: '59466cd9e5d8a4b6',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p08.diff-price',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 8,
      section: 'Preiswettbewerb mit differenzierten Gütern: Gleichgewichtspreis',
      fingerprint: '0d05262fd6094b35',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p10.diff-quantity',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 10,
      section: 'Preiswettbewerb mit differenzierten Gütern: Gleichgewichtsmenge',
      fingerprint: '336528fef5d68f38',
      confidence: 0.96,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_cournot_bertrand.vl08.p12.diff-profit',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-8',
      sourcePath: 'Vorlesungsfolien/Mikro2_8.pdf',
      publicLabel: 'Vorlesung 8',
      page: 12,
      section: 'Preiswettbewerb mit differenzierten Gütern: Gewinn im Bertrand-Gleichgewicht',
      fingerprint: 'f74773739c9625ec',
      confidence: 0.96,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    })
  ],
  oligopol_stackelberg: [
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl05.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-5',
      sourcePath: 'Vorlesungsfolien/Mikro2_5.pdf',
      publicLabel: 'Vorlesung 5',
      page: 1,
      section: 'Oligopoltheorie I: Strategien und Stackelbergmodell',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl05.p02.stackelberg-model',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-5',
      sourcePath: 'Vorlesungsfolien/Mikro2_5.pdf',
      publicLabel: 'Vorlesung 5',
      page: 3,
      section: 'Das Stackelberg-Modell: Führer und Folger',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl05.p07.follower-reaction',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-5',
      sourcePath: 'Vorlesungsfolien/Mikro2_5.pdf',
      publicLabel: 'Vorlesung 5',
      page: 7,
      section: 'Reaktionsfunktion des Stackelberg-Folgers',
      fingerprint: '3fbdf2866dd72802',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl05.p10.stackelberg-quantities',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-5',
      sourcePath: 'Vorlesungsfolien/Mikro2_5.pdf',
      publicLabel: 'Vorlesung 5',
      page: 10,
      section: 'Mengen beider Unternehmen im Stackelberg-Gleichgewicht',
      fingerprint: '73c0d7ac36b6bfc4',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl05.p13.stackelberg-market-result',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-5',
      sourcePath: 'Vorlesungsfolien/Mikro2_5.pdf',
      publicLabel: 'Vorlesung 5',
      page: 13,
      section: 'Stackelberg-Modell Marktergebnis',
      fingerprint: 'c14e7db03ddc7552',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.oligopol_stackelberg.vl06.p01.cournot-contrast',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-6',
      sourcePath: 'Vorlesungsfolien/Mikro2_6.pdf',
      publicLabel: 'Vorlesung 6',
      page: 1,
      section: 'Cournot als simultaner Vergleichsfall',
      fingerprint: '2523a6a149b28afe',
      confidence: 0.88
    })
  ],
  intertemporaler_konsum: [
    anchor({
      id: 'mikro2.intertemporaler_konsum.vl12.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-12',
      sourcePath: 'Vorlesungsfolien/Mikro2_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 1,
      section: 'Intertemporaler Konsum',
      fingerprint: '3f87bdd6bbf165de',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.intertemporaler_konsum.vl12.p05.budget',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-12',
      sourcePath: 'Vorlesungsfolien/Mikro2_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 6,
      section: 'Intertemporale Budgetgleichung',
      fingerprint: 'c851f638034f90fb',
      confidence: 0.96,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.intertemporaler_konsum.vl12.p07.relative-price',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-12',
      sourcePath: 'Vorlesungsfolien/Mikro2_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 7,
      section: 'Zinsfaktor als relativer Preis des Gegenwartskonsums',
      fingerprint: 'ce15a8b3a07984fd',
      confidence: 0.94,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.intertemporaler_konsum.vl12.p08.present-future-value',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-12',
      sourcePath: 'Vorlesungsfolien/Mikro2_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 8,
      section: 'Gegenwartswert- und Zukunftswertdarstellung der intertemporalen Budgetgleichung',
      fingerprint: 'ed960bc6d2226aaa',
      confidence: 0.95,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.intertemporaler_konsum.vl12.p11.optimum-foc',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-12',
      sourcePath: 'Vorlesungsfolien/Mikro2_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 11,
      section: 'Optimaler intertemporaler Konsum und Bedingung erster Ordnung',
      fingerprint: '67f0a237c5e8e552',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.intertemporaler_konsum.vl12.p13.interest-effect',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-12',
      sourcePath: 'Vorlesungsfolien/Mikro2_12.pdf',
      publicLabel: 'Vorlesung 12',
      page: 13,
      section: 'Effekt einer Zinsänderung auf Gegenwarts- und Zukunftskonsum',
      fingerprint: 'bed64cf8f622b4fb',
      confidence: 0.95,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    })
  ],
  unsicherheit_versicherung: [
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 1,
      section: 'Entscheidungen unter Unsicherheit',
      fingerprint: '30049cb1cdcffadc',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 3,
      section: 'Bedingter Konsum',
      fingerprint: '30049cb1cdcffadc',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p05.insurance-budget',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 5,
      section: 'Versicherung und zustandsabhängige Budgetbeschränkung',
      fingerprint: '9536d27fa6256e6a',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p10.expected-utility',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 10,
      section: 'Erwartungsnutzenhypothese und VNM-Nutzenfunktion',
      fingerprint: '13954371bd633fa7',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p12.risk-aversion',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 12,
      section: 'Risikoaversion',
      fingerprint: 'e192c04ae1add4c4',
      confidence: 0.96,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p15.insurance-demand-foc',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 15,
      section: 'Nachfrage nach Versicherung und Bedingung erster Ordnung',
      fingerprint: '1907d0923b2bf9f4',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl13.p17.fair-premium-full-insurance',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-13',
      sourcePath: 'Vorlesungsfolien/Mikro2_13.pdf',
      publicLabel: 'Vorlesung 13',
      page: 17,
      section: 'Faire Prämie und Vollversicherung',
      fingerprint: '6cd2968bc30c6bdc',
      confidence: 0.97,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl14.p02.fair-insurance',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-14',
      sourcePath: 'Vorlesungsfolien/Mikro2_14.pdf',
      publicLabel: 'Vorlesung 14',
      page: 2,
      section: 'Versicherungsmarkt und faire Prämie',
      fingerprint: '4603c215f9f1b1ed',
      confidence: 0.94
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl14.p03.risk-premium',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-14',
      sourcePath: 'Vorlesungsfolien/Mikro2_14.pdf',
      publicLabel: 'Vorlesung 14',
      page: 5,
      section: 'Versicherung, Sicherheitsäquivalent und Risikoprämie',
      fingerprint: '4603c215f9f1b1ed',
      confidence: 0.94
    }),
    anchor({
      id: 'mikro2.unsicherheit_versicherung.vl14.p06.risk-aversion-measures',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-14',
      sourcePath: 'Vorlesungsfolien/Mikro2_14.pdf',
      publicLabel: 'Vorlesung 14',
      page: 6,
      section: 'Koeffizienten der absoluten und relativen Risikoaversion',
      fingerprint: '20a100096a12be19',
      confidence: 0.96,
      reviewedAt: '2026-06-15',
      reviewedBy: 'codex-source-verify-pass-2026-06-15'
    })
  ],
  gleichgewicht_produktion: [
    anchor({
      id: 'mikro2.gleichgewicht_produktion.vl17.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-17',
      sourcePath: 'Vorlesungsfolien/Mikro2_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 1,
      section: 'Allgemeines Gleichgewicht mit Produktion',
      fingerprint: '628fdb72dc8e2ad2',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_produktion.vl17.p02.model',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-17',
      sourcePath: 'Vorlesungsfolien/Mikro2_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 2,
      section: 'Modellrahmen: 2 Konsumenten, 2 Güter, 2 Faktoren',
      fingerprint: '628fdb72dc8e2ad2',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_produktion.vl17.p03.factor-box',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-17',
      sourcePath: 'Vorlesungsfolien/Mikro2_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 3,
      section: 'Faktor-Box und Produktionseffizienz',
      fingerprint: '628fdb72dc8e2ad2',
      confidence: 0.95
    })
  ],
  gleichgewicht_tausch: [
    anchor({
      id: 'mikro2.gleichgewicht_tausch.vl16.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 1,
      section: 'Tauschökonomie, Tauschoptimum und Pareto-Effizienz',
      fingerprint: '6c69af476a21a519',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_tausch.vl16.p03.edgeworth',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 3,
      section: 'Edgeworth-Box und Tauschgewinne',
      fingerprint: '6c69af476a21a519',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_tausch.vl16.p05.contract',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 6,
      section: 'Pareto-Effizienz und die Kontraktkurve',
      fingerprint: '6c69af476a21a519',
      confidence: 0.93
    })
  ],
  gleichgewicht_walras: [
    anchor({
      id: 'mikro2.gleichgewicht_walras.vl15.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-15',
      sourcePath: 'Vorlesungsfolien/Mikro2_15.pdf',
      publicLabel: 'Vorlesung 15',
      page: 1,
      section: 'Allgemeines Gleichgewicht I und Walras-Gesetz',
      fingerprint: '26c7a21ad26bad3a',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.gleichgewicht_walras.vl15.p02.robinson',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-15',
      sourcePath: 'Vorlesungsfolien/Mikro2_15.pdf',
      publicLabel: 'Vorlesung 15',
      page: 3,
      section: 'Die Robinson-Crusoe-Ökonomie',
      fingerprint: '26c7a21ad26bad3a',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.gleichgewicht_walras.vl16.p09.market-clearing',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 11,
      section: 'Güterpreise im allgemeinen Gleichgewicht',
      fingerprint: '26c7a21ad26bad3a',
      confidence: 0.88
    })
  ],
  wohlfahrt_theoreme: [
    anchor({
      id: 'mikro2.wohlfahrt_theoreme.vl16.p07.pareto',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 7,
      section: 'Pareto-Effizienz',
      fingerprint: 'aece4b5bd2fb9217',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.wohlfahrt_theoreme.vl16.p17.fundamental-theorems',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 17,
      section: 'Die beiden Hauptsätze der Wohlfahrtsökonomik',
      fingerprint: 'aece4b5bd2fb9217',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.wohlfahrt_theoreme.vl17.p01.production-extension',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-17',
      sourcePath: 'Vorlesungsfolien/Mikro2_17.pdf',
      publicLabel: 'Vorlesung 17',
      page: 1,
      section: 'Allgemeines Gleichgewicht mit Produktion',
      fingerprint: 'aece4b5bd2fb9217',
      confidence: 0.86
    })
  ],
  wohlfahrt_messung: [
    anchor({
      id: 'mikro2.wohlfahrt_messung.vl02.p05.monopoly-welfare',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 7,
      section: 'Wohlfahrtswirkung des Monopols',
      fingerprint: '01c5da58796e79b1',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.wohlfahrt_messung.vl02.p09.surplus',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro-2-2',
      sourcePath: 'Vorlesungsfolien/Mikro_2_2.pdf',
      publicLabel: 'Vorlesung 2',
      page: 11,
      section: 'Wohlfahrt im Monopol und bei vollkommener Konkurrenz (KR, PR, Wohlfahrtsverlust)',
      fingerprint: '01c5da58796e79b1',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro2.wohlfahrt_messung.vl16.p17.fundamental-context',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-16',
      sourcePath: 'Vorlesungsfolien/Mikro2_16.pdf',
      publicLabel: 'Vorlesung 16',
      page: 17,
      section: 'Wohlfahrtsökonomik im allgemeinen Gleichgewicht',
      fingerprint: 'aece4b5bd2fb9217',
      confidence: 0.82
    })
  ],
  information_adverse: [
    anchor({
      id: 'mikro2.information_adverse.vl18.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-18',
      sourcePath: 'Vorlesungsfolien/Mikro2_18.pdf',
      publicLabel: 'Vorlesung 18',
      page: 1,
      section: 'Moralisches Risiko und Adverse Selektion',
      fingerprint: '480be150e9950e84',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.information_adverse.vl18.p03.adverse-selection',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-18',
      sourcePath: 'Vorlesungsfolien/Mikro2_18.pdf',
      publicLabel: 'Vorlesung 18',
      page: 4,
      section: 'Unvollständige Information: Adverse Selektion',
      fingerprint: '480be150e9950e84',
      confidence: 0.93
    }),
    anchor({
      id: 'mikro2.information_adverse.vl19.p01.adverse-signalling',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-19',
      sourcePath: 'Vorlesungsfolien/Mikro2_19.pdf',
      publicLabel: 'Vorlesung 19',
      page: 1,
      section: 'Adverse Selektion und Signalling',
      fingerprint: '7d836cc40a226d4d',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.information_adverse.vl19.p02.market-breakdown',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-19',
      sourcePath: 'Vorlesungsfolien/Mikro2_19.pdf',
      publicLabel: 'Vorlesung 19',
      page: 2,
      section: 'Marktzusammenbruch bei Adverse Selection',
      fingerprint: '7d836cc40a226d4d',
      confidence: 0.9
    })
  ],
  information_moralhazard: [
    anchor({
      id: 'mikro2.information_moralhazard.vl18.p01.programm',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-18',
      sourcePath: 'Vorlesungsfolien/Mikro2_18.pdf',
      publicLabel: 'Vorlesung 18',
      page: 1,
      section: 'Moralisches Risiko und Prinzipal-Agenten-Theorie',
      fingerprint: '480be150e9950e84',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.information_moralhazard.vl18.p04.principal-agent',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-18',
      sourcePath: 'Vorlesungsfolien/Mikro2_18.pdf',
      publicLabel: 'Vorlesung 18',
      page: 5,
      section: 'Prinzipal-Agenten-Theorie',
      fingerprint: '480be150e9950e84',
      confidence: 0.92
    }),
    anchor({
      id: 'mikro2.information_moralhazard.vl20.p01.manager',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-20',
      sourcePath: 'Vorlesungsfolien/Mikro2_20.pdf',
      publicLabel: 'Vorlesung 20',
      page: 1,
      section: 'Managerentlohnung und unvollkommene Information',
      fingerprint: '76e5c1d92e263b02',
      confidence: 0.95
    }),
    anchor({
      id: 'mikro2.information_moralhazard.vl20.p02.contract',
      sourceId: 'mikro2-lecture-slide-mikrookonomik-ii-vorlesungsfolien-mikro2-20',
      sourcePath: 'Vorlesungsfolien/Mikro2_20.pdf',
      publicLabel: 'Vorlesung 20',
      page: 3,
      section: 'Managervertrag als Prinzipal-Agenten-Problem',
      fingerprint: '76e5c1d92e263b02',
      confidence: 0.93
    })
  ],
  /** No VL hit in official Mikro II corpus (see docs/audits/mikro2-official-source-ingest-pass-1.md). */
  externa_pigou: [],
  externa_institutionen: [],
  public_goods: []
});

export function getMikro2SourceAnchors(conceptId) {
  return MIKRO2_SOURCE_ANCHORS[conceptId] || [];
}
