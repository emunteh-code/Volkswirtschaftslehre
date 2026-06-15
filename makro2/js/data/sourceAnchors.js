// ============================================================
// SOURCE ANCHORS — Makroökonomik II
// Syllabus-heading pass (2026-05-28); section labels from heading candidates.
// ============================================================

const REVIEWED_AT = '2026-05-28';
const REVIEWED_BY = 'exam-os-syllabus-pass-makro2-anchors-1';

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

export const MAKRO2_SOURCE_ANCHORS = Object.freeze({
  zahlungsbilanz: [
    anchor({
      id: 'makro2.zahlungsbilanz.slides-01-pdf.p14.i-in-der-preisnotierung',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-01',
      sourcePath: 'Folien/slides_01.pdf',
      publicLabel: "slides_01",
      page: 14,
      section: "I   In der Preisnotierung",
      fingerprint: 'fc58c0fb2b34951b',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.zahlungsbilanz.slides-01-pdf.p34.offene-gu-terma-rkte',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-01',
      sourcePath: 'Folien/slides_01.pdf',
      publicLabel: "slides_01",
      page: 34,
      section: "Offene Gütermärkte",
      fingerprint: '372e11928632c289',
      confidence: 0.88
    })
  ],
  wechselkurs: [
    anchor({
      id: 'makro2.wechselkurs.slides-01-pdf.p14.i-in-der-preisnotierung',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-01',
      sourcePath: 'Folien/slides_01.pdf',
      publicLabel: "slides_01",
      page: 14,
      section: "I   In der Preisnotierung",
      fingerprint: 'fc58c0fb2b34951b',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.wechselkurs.slides-01-pdf.p34.offene-gu-terma-rkte',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-01',
      sourcePath: 'Folien/slides_01.pdf',
      publicLabel: "slides_01",
      page: 34,
      section: "Offene Gütermärkte",
      fingerprint: '372e11928632c289',
      confidence: 0.88
    })
  ],
  kaufkraftparitaet: [
    anchor({
      id: 'makro2.kaufkraftparitaet.slides-01-pdf.p14.i-in-der-preisnotierung',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-01',
      sourcePath: 'Folien/slides_01.pdf',
      publicLabel: "slides_01",
      page: 14,
      section: "I   In der Preisnotierung",
      fingerprint: 'fc58c0fb2b34951b',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.kaufkraftparitaet.slides-01-pdf.p34.offene-gu-terma-rkte',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-01',
      sourcePath: 'Folien/slides_01.pdf',
      publicLabel: "slides_01",
      page: 34,
      section: "Offene Gütermärkte",
      fingerprint: '372e11928632c289',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.uebungsblatt1.a1.p1.ppp-exchange-rate-notation',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-1',
      sourcePath: 'Übungen/Uebungsblatt_1.pdf',
      publicLabel: 'Uebungsblatt_1',
      page: 1,
      section: 'Aufgabe 1: Kaufkraftparität und Wechselkursbestimmung',
      fingerprint: '7b85f9a2f7ed3128',
      confidence: 0.9,
      reviewedBy: 'codex-official-task-review-makro2-pass-1',
      reviewedAt: '2026-06-08'
    })
  ],
  zinsparitaet: [
    anchor({
      id: 'makro2.zinsparitaet.slides-01-pdf.p14.i-in-der-preisnotierung',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-01',
      sourcePath: 'Folien/slides_01.pdf',
      publicLabel: "slides_01",
      page: 14,
      section: "I   In der Preisnotierung",
      fingerprint: 'fc58c0fb2b34951b',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.zinsparitaet.slides-01-pdf.p34.offene-gu-terma-rkte',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-01',
      sourcePath: 'Folien/slides_01.pdf',
      publicLabel: "slides_01",
      page: 34,
      section: "Offene Gütermärkte",
      fingerprint: '372e11928632c289',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.uebungsblatt1.a2.p1.interest-parity-credit-choice',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-1',
      sourcePath: 'Übungen/Uebungsblatt_1.pdf',
      publicLabel: 'Uebungsblatt_1',
      page: 1,
      section: 'Aufgabe 2: Zinsparität',
      fingerprint: '683c28a03a04ae48',
      confidence: 0.9,
      reviewedBy: 'codex-official-task-review-makro2-pass-1',
      reviewedAt: '2026-06-08'
    })
  ],
  offene_is: [
    anchor({
      id: 'makro2.offene_is.slides-02-pdf.p21.wirtschaftspolitik-in-ei',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-02',
      sourcePath: 'Folien/slides_02.pdf',
      publicLabel: "slides_02",
      page: 21,
      section: "Wirtschaftspolitik in einer globalen Rezession?",
      fingerprint: '65874248a11ff355',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.offene_is.slides-02-pdf.p40.komparative-statik-nachf',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-02',
      sourcePath: 'Folien/slides_02.pdf',
      publicLabel: "slides_02",
      page: 40,
      section: "Komparative Statik: Nachfrageveränderungen",
      fingerprint: '23b0f3c61a11ef69',
      confidence: 0.88
    })
  ],
  nettoexporte: [
    anchor({
      id: 'makro2.nettoexporte.slides-02-pdf.p21.wirtschaftspolitik-in-ei',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-02',
      sourcePath: 'Folien/slides_02.pdf',
      publicLabel: "slides_02",
      page: 21,
      section: "Wirtschaftspolitik in einer globalen Rezession?",
      fingerprint: '65874248a11ff355',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.nettoexporte.slides-02-pdf.p40.komparative-statik-nachf',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-02',
      sourcePath: 'Folien/slides_02.pdf',
      publicLabel: "slides_02",
      page: 40,
      section: "Komparative Statik: Nachfrageveränderungen",
      fingerprint: '23b0f3c61a11ef69',
      confidence: 0.88
    })
  ],
  marshall_lerner: [
    anchor({
      id: 'makro2.marshall_lerner.slides-02-pdf.p21.wirtschaftspolitik-in-ei',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-02',
      sourcePath: 'Folien/slides_02.pdf',
      publicLabel: "slides_02",
      page: 21,
      section: "Wirtschaftspolitik in einer globalen Rezession?",
      fingerprint: '65874248a11ff355',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.marshall_lerner.slides-02-pdf.p40.komparative-statik-nachf',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-02',
      sourcePath: 'Folien/slides_02.pdf',
      publicLabel: "slides_02",
      page: 40,
      section: "Komparative Statik: Nachfrageveränderungen",
      fingerprint: '23b0f3c61a11ef69',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.uebungsblatt2.a1.p1-open-goods-market-dd-aa-zz-nx',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-2',
      sourcePath: 'Übungen/Uebungsblatt_2.pdf',
      publicLabel: 'Uebungsblatt_2',
      page: 1,
      section: 'Aufgabe 1: Gütermarkt in einer offenen Volkswirtschaft',
      fingerprint: '4a3718c7dce45bbfc3ddcf66b4fead21add9bb1ab44918f4fd64c03ed62a0937',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-2-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  geldmengen: [
    anchor({
      id: 'makro2.geldmengen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-03',
      sourcePath: 'Folien/slides_03.pdf',
      publicLabel: "slides_03",
      page: 34,
      section: "I Gemeinsame Währung: Euro",
      fingerprint: 'd1d0e0728fdc402a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.geldmengen.slides-03-pdf.p04.das-gleichgewicht-auf-de',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-03',
      sourcePath: 'Folien/slides_03.pdf',
      publicLabel: "slides_03",
      page: 4,
      section: "Das Gleichgewicht auf dem Gütermarkt",
      fingerprint: '8f908df9df52a6b2',
      confidence: 0.88
    })
  ],
  mundell_fleming: [
    anchor({
      id: 'makro2.mundell_fleming.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-03',
      sourcePath: 'Folien/slides_03.pdf',
      publicLabel: "slides_03",
      page: 34,
      section: "I Gemeinsame Währung: Euro",
      fingerprint: 'd1d0e0728fdc402a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.mundell_fleming.slides-03-pdf.p04.das-gleichgewicht-auf-de',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-03',
      sourcePath: 'Folien/slides_03.pdf',
      publicLabel: "slides_03",
      page: 4,
      section: "Das Gleichgewicht auf dem Gütermarkt",
      fingerprint: '8f908df9df52a6b2',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.klausur-feb-2024.a1.p1-open-is-lm-flexible-exchange',
      sourceId: 'makro2-exam-makrookonomik-ii-klausur-februar-2024-260119-141838',
      sourcePath: 'Makroökonomik I/Klausur_Februar_2024_260119_141838.pdf',
      publicLabel: 'Klausur Februar 2024',
      page: 1,
      section: 'Aufgabe 1: Offenes IS-LM-Modell bei flexiblem Wechselkurs',
      fingerprint: 'ad95b53418806b7ed24a774e1b905ec42de188d25fe5e36ede3a97ce1839eb6d',
      confidence: 0.93,
      reviewedBy: 'codex-official-task-review-makro2-feb-2024-pass-1',
      reviewedAt: '2026-06-15'
    }),
    anchor({
      id: 'makro2.uebungsblatt3.a1.p1-mundell-fleming-equilibrium',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-3',
      sourcePath: 'Übungen/Uebungsblatt_3.pdf',
      publicLabel: 'Uebungsblatt_3',
      page: 1,
      section: 'Aufgabe 1: Mundell-Fleming Modell',
      fingerprint: '0a5e54c8b3a2d20a2aa094d56f92f1c7812dec032a29a64a8e823653d89ff049',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-3-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  zp_kurve: [
    anchor({
      id: 'makro2.zp_kurve.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-03',
      sourcePath: 'Folien/slides_03.pdf',
      publicLabel: "slides_03",
      page: 34,
      section: "I Gemeinsame Währung: Euro",
      fingerprint: 'd1d0e0728fdc402a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.zp_kurve.slides-03-pdf.p04.das-gleichgewicht-auf-de',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-03',
      sourcePath: 'Folien/slides_03.pdf',
      publicLabel: "slides_03",
      page: 4,
      section: "Das Gleichgewicht auf dem Gütermarkt",
      fingerprint: '8f908df9df52a6b2',
      confidence: 0.88
    })
  ],
  wirtschaftspolitik_offen: [
    anchor({
      id: 'makro2.wirtschaftspolitik_offen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-03',
      sourcePath: 'Folien/slides_03.pdf',
      publicLabel: "slides_03",
      page: 34,
      section: "I Gemeinsame Währung: Euro",
      fingerprint: 'd1d0e0728fdc402a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.wirtschaftspolitik_offen.slides-03-pdf.p04.das-gleichgewicht-auf-de',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-03',
      sourcePath: 'Folien/slides_03.pdf',
      publicLabel: "slides_03",
      page: 4,
      section: "Das Gleichgewicht auf dem Gütermarkt",
      fingerprint: '8f908df9df52a6b2',
      confidence: 0.88
    })
  ],
  wk_regime: [
    anchor({
      id: 'makro2.wk_regime.slides-04-pdf.p16.i-den-wechselkurs-vertei',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-04',
      sourcePath: 'Folien/slides_04.pdf',
      publicLabel: "slides_04",
      page: 16,
      section: "I Den Wechselkurs verteidigen",
      fingerprint: '61680ac95745b67a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.wk_regime.slides-04-pdf.p33.asymmetrischen-schocks-a',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-04',
      sourcePath: 'Folien/slides_04.pdf',
      publicLabel: "slides_04",
      page: 33,
      section: "asymmetrischen Schocks ausgesetzt sind",
      fingerprint: 'a58091654b3e5dde',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.uebungsblatt3.a2.p1-fixed-exchange-trilemma',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-3',
      sourcePath: 'Übungen/Uebungsblatt_3.pdf',
      publicLabel: 'Uebungsblatt_3',
      page: 1,
      section: 'Aufgabe 2: Fester Wechselkurs und das Trilemma der Geldpolitik',
      fingerprint: '0a5e54c8b3a2d20a2aa094d56f92f1c7812dec032a29a64a8e823653d89ff049',
      confidence: 0.93,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-3-pass-1',
      reviewedAt: '2026-06-15'
    }),
    anchor({
      id: 'makro2.uebungsblatt4.a1.p1-currency-board-real-exchange-rate',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-4',
      sourcePath: 'Übungen/Uebungsblatt_4.pdf',
      publicLabel: 'Uebungsblatt_4',
      page: 1,
      section: 'Aufgabe 1: Currency Board',
      fingerprint: '8921673129d432a1c0111cbdc6f30745bc32725f37984d251b8fd697e06006c3',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-4-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  wk_krisen: [
    anchor({
      id: 'makro2.wk_krisen.slides-04-pdf.p16.i-den-wechselkurs-vertei',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-04',
      sourcePath: 'Folien/slides_04.pdf',
      publicLabel: "slides_04",
      page: 16,
      section: "I Den Wechselkurs verteidigen",
      fingerprint: '61680ac95745b67a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.wk_krisen.slides-04-pdf.p33.asymmetrischen-schocks-a',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-04',
      sourcePath: 'Folien/slides_04.pdf',
      publicLabel: "slides_04",
      page: 33,
      section: "asymmetrischen Schocks ausgesetzt sind",
      fingerprint: 'a58091654b3e5dde',
      confidence: 0.88
    })
  ],
  opt_waehrungsraum: [
    anchor({
      id: 'makro2.opt_waehrungsraum.slides-04-pdf.p16.i-den-wechselkurs-vertei',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-04',
      sourcePath: 'Folien/slides_04.pdf',
      publicLabel: "slides_04",
      page: 16,
      section: "I Den Wechselkurs verteidigen",
      fingerprint: '61680ac95745b67a',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.opt_waehrungsraum.slides-04-pdf.p33.asymmetrischen-schocks-a',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-04',
      sourcePath: 'Folien/slides_04.pdf',
      publicLabel: "slides_04",
      page: 33,
      section: "asymmetrischen Schocks ausgesetzt sind",
      fingerprint: 'a58091654b3e5dde',
      confidence: 0.88
    })
  ],
  phillipskurve: [
    anchor({
      id: 'makro2.phillipskurve.slides-05-pdf.p08.unsicherheit-und-politik',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-05',
      sourcePath: 'Folien/slides_05.pdf',
      publicLabel: "slides_05",
      page: 8,
      section: "Unsicherheit und Politik",
      fingerprint: '7c80636fb96982a0',
      confidence: 0.84
    }),
    anchor({
      id: 'makro2.phillipskurve.slides-05-pdf.p11.polito-konomische-aspekt',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-05',
      sourcePath: 'Folien/slides_05.pdf',
      publicLabel: "slides_05",
      page: 11,
      section: "Politökonomische Aspekte",
      fingerprint: 'b12776f4fb6832df',
      confidence: 0.88
    })
  ],
  zeitinkonsistenz: [
    anchor({
      id: 'makro2.zeitinkonsistenz.slides-05-pdf.p08.unsicherheit-und-politik',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-05',
      sourcePath: 'Folien/slides_05.pdf',
      publicLabel: "slides_05",
      page: 8,
      section: "Unsicherheit und Politik",
      fingerprint: '7c80636fb96982a0',
      confidence: 0.84
    }),
    anchor({
      id: 'makro2.zeitinkonsistenz.slides-05-pdf.p11.polito-konomische-aspekt',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-05',
      sourcePath: 'Folien/slides_05.pdf',
      publicLabel: "slides_05",
      page: 11,
      section: "Politökonomische Aspekte",
      fingerprint: 'b12776f4fb6832df',
      confidence: 0.88
    })
  ],
  barro_gordon: [
    anchor({
      id: 'makro2.barro_gordon.slides-05-pdf.p08.unsicherheit-und-politik',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-05',
      sourcePath: 'Folien/slides_05.pdf',
      publicLabel: "slides_05",
      page: 8,
      section: "Unsicherheit und Politik",
      fingerprint: '7c80636fb96982a0',
      confidence: 0.84
    }),
    anchor({
      id: 'makro2.barro_gordon.slides-05-pdf.p11.polito-konomische-aspekt',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-05',
      sourcePath: 'Folien/slides_05.pdf',
      publicLabel: "slides_05",
      page: 11,
      section: "Politökonomische Aspekte",
      fingerprint: 'b12776f4fb6832df',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.klausur-feb-2024.a2.p3-barro-gordon-phillips',
      sourceId: 'makro2-exam-makrookonomik-ii-klausur-februar-2024-260119-141838',
      sourcePath: 'Makroökonomik I/Klausur_Februar_2024_260119_141838.pdf',
      publicLabel: 'Klausur Februar 2024',
      page: 3,
      section: 'Aufgabe 2: Barro-Gordon und adaptive Phillipskurve',
      fingerprint: '8849b0aad8a0f2af167ea7ce9b7defdd7d107cdae6c7aad5295ba8164df18935',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-feb-2024-pass-1',
      reviewedAt: '2026-06-15'
    }),
    anchor({
      id: 'makro2.uebungsblatt5.a1.p1-barro-gordon-commitment',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-5',
      sourcePath: 'Übungen/Uebungsblatt_5.pdf',
      publicLabel: 'Uebungsblatt_5',
      page: 1,
      section: 'Aufgabe 1: Barro-Gordon Modell',
      fingerprint: '5cc62331ed0c1473fa0a86d120f5196c01fd19edc9bac8c4240d1165a1c53601',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-5-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  taylor_regel: [
    anchor({
      id: 'makro2.taylor_regel.slides-07-pdf.p23.i-seigniorage-einnahmen-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-07',
      sourcePath: 'Folien/slides_07.pdf',
      publicLabel: "slides_07",
      page: 23,
      section: "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
      fingerprint: '4205c66e11bd6edf',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.taylor_regel.slides-07-pdf.p11.moderne-konzepte-der-gel',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-07',
      sourcePath: 'Folien/slides_07.pdf',
      publicLabel: "slides_07",
      page: 11,
      section: "Moderne Konzepte der Geldpolitik",
      fingerprint: '187e1d332ecdbc23',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.uebungsblatt7.a3.p1-taylor-rule-demand-shock',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-7',
      sourcePath: 'Übungen/Uebungsblatt_7.pdf',
      publicLabel: 'Uebungsblatt_7',
      page: 1,
      section: 'Aufgabe 3: Taylor-Regel',
      fingerprint: 'cb59fac5867ef5853993ede4c9ea9f93d3f297a966ddaf1b5e96c1ae01265025',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-7-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  inflation_targeting: [
    anchor({
      id: 'makro2.inflation_targeting.slides-07-pdf.p23.i-seigniorage-einnahmen-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-07',
      sourcePath: 'Folien/slides_07.pdf',
      publicLabel: "slides_07",
      page: 23,
      section: "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
      fingerprint: '4205c66e11bd6edf',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.inflation_targeting.slides-07-pdf.p11.moderne-konzepte-der-gel',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-07',
      sourcePath: 'Folien/slides_07.pdf',
      publicLabel: "slides_07",
      page: 11,
      section: "Moderne Konzepte der Geldpolitik",
      fingerprint: '187e1d332ecdbc23',
      confidence: 0.88
    })
  ],
  inflation_kosten: [
    anchor({
      id: 'makro2.inflation_kosten.slides-07-pdf.p23.i-seigniorage-einnahmen-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-07',
      sourcePath: 'Folien/slides_07.pdf',
      publicLabel: "slides_07",
      page: 23,
      section: "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
      fingerprint: '4205c66e11bd6edf',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.inflation_kosten.slides-07-pdf.p11.moderne-konzepte-der-gel',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-07',
      sourcePath: 'Folien/slides_07.pdf',
      publicLabel: "slides_07",
      page: 11,
      section: "Moderne Konzepte der Geldpolitik",
      fingerprint: '187e1d332ecdbc23',
      confidence: 0.88
    })
  ],
  wachstum_fakten: [
    anchor({
      id: 'makro2.wachstum_fakten.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 6,
      section: "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
      fingerprint: '2aab4dd8b1e5d0ed',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.wachstum_fakten.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 34,
      section: "Beispiel: Wechselkursbewegungen seit dem Ende des Bretton Woods-",
      fingerprint: 'c5d58060fcae0fcd',
      confidence: 0.88
    })
  ],
  aggregierte_pf: [
    anchor({
      id: 'makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 6,
      section: "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
      fingerprint: '2aab4dd8b1e5d0ed',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 34,
      section: "Beispiel: Wechselkursbewegungen seit dem Ende des Bretton Woods-",
      fingerprint: 'c5d58060fcae0fcd',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.uebungsblatt8.a1.p1-cobb-douglas-production-function',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-8',
      sourcePath: 'Übungen/Uebungsblatt_8.pdf',
      publicLabel: 'Uebungsblatt_8',
      page: 1,
      section: 'Aufgabe 1: Produktionsfunktion',
      fingerprint: 'fd12331f3bfc45987c5135ef96a24ab6b3796b448870337d17f120d015aded9f',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-8-pass-1',
      reviewedAt: '2026-06-15'
    }),
    anchor({
      id: 'makro2.uebungsblatt8.a2.p2-easterlin-paradox-wellbeing',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-8',
      sourcePath: 'Übungen/Uebungsblatt_8.pdf',
      publicLabel: 'Uebungsblatt_8',
      page: 2,
      section: 'Aufgabe 2: BIP, Glück und das Easterlin-Paradox',
      fingerprint: 'fd12331f3bfc45987c5135ef96a24ab6b3796b448870337d17f120d015aded9f',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-8-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  solow_basis: [
    anchor({
      id: 'makro2.solow_basis.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 6,
      section: "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
      fingerprint: '2aab4dd8b1e5d0ed',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.solow_basis.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 34,
      section: "Beispiel: Wechselkursbewegungen seit dem Ende des Bretton Woods-",
      fingerprint: 'c5d58060fcae0fcd',
      confidence: 0.88
    })
  ],
  steady_state: [
    anchor({
      id: 'makro2.steady_state.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 6,
      section: "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
      fingerprint: '2aab4dd8b1e5d0ed',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.steady_state.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 34,
      section: "Beispiel: Wechselkursbewegungen seit dem Ende des Bretton Woods-",
      fingerprint: 'c5d58060fcae0fcd',
      confidence: 0.88
    })
  ],
  goldene_sparquote: [
    anchor({
      id: 'makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 6,
      section: "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
      fingerprint: '2aab4dd8b1e5d0ed',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 34,
      section: "Beispiel: Wechselkursbewegungen seit dem Ende des Bretton Woods-",
      fingerprint: 'c5d58060fcae0fcd',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.uebungsblatt9.a1.p1-solow-graph-golden-rule',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-9',
      sourcePath: 'Übungen/Uebungsblatt_9.pdf',
      publicLabel: 'Uebungsblatt_9',
      page: 1,
      section: 'Aufgabe 1: Solow Grundmodell graphisch',
      fingerprint: 'ad9bc83e64189f1eefe95edec4545f54485194749efd2f2f59fb3a6502586f05',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-9-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  tech_fortschritt: [
    anchor({
      id: 'makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 6,
      section: "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
      fingerprint: '2aab4dd8b1e5d0ed',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe',
      sourceId: 'makro2-supplement-makrookonomik-ii-handout-makro2-handout-v25-2',
      sourcePath: 'Handout/Makro2_handout_V25.2.pdf',
      publicLabel: "Makro2_handout_V25.2",
      page: 34,
      section: "Beispiel: Wechselkursbewegungen seit dem Ende des Bretton Woods-",
      fingerprint: 'c5d58060fcae0fcd',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.klausur-feb-2024.a4.p5-p6-solow-technology-savings-shock',
      sourceId: 'makro2-exam-makrookonomik-ii-klausur-februar-2024-260119-141838',
      sourcePath: 'Makroökonomik I/Klausur_Februar_2024_260119_141838.pdf',
      publicLabel: 'Klausur Februar 2024',
      page: 5,
      section: 'Aufgabe 4: Solow-Modell mit technischem Fortschritt',
      fingerprint: '27629cf235de32cc3820425da623085806a05b4f983b9d76367d56f1b29ee7ff',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-feb-2024-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  budgetrestriktion: [
    anchor({
      id: 'makro2.budgetrestriktion.slides-06-pdf.p41.die-gefahren-sehr-hoher-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-06',
      sourcePath: 'Folien/slides_06.pdf',
      publicLabel: "slides_06",
      page: 41,
      section: "Die Gefahren sehr hoher Staatsverschuldung",
      fingerprint: '505817ce258ddc09',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.budgetrestriktion.slides-06-pdf.p39.die-gefahren-sehr-hoher-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-06',
      sourcePath: 'Folien/slides_06.pdf',
      publicLabel: "slides_06",
      page: 39,
      section: "Die Gefahren sehr hoher Staatsverschuldung",
      fingerprint: 'ae4245a7c15a9886',
      confidence: 0.88
    })
  ],
  schuldenquote_dynamik: [
    anchor({
      id: 'makro2.schuldenquote_dynamik.slides-06-pdf.p41.die-gefahren-sehr-hoher-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-06',
      sourcePath: 'Folien/slides_06.pdf',
      publicLabel: "slides_06",
      page: 41,
      section: "Die Gefahren sehr hoher Staatsverschuldung",
      fingerprint: '505817ce258ddc09',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.schuldenquote_dynamik.slides-06-pdf.p39.die-gefahren-sehr-hoher-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-06',
      sourcePath: 'Folien/slides_06.pdf',
      publicLabel: "slides_06",
      page: 39,
      section: "Die Gefahren sehr hoher Staatsverschuldung",
      fingerprint: 'ae4245a7c15a9886',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.klausur-feb-2024.a3.p4-debt-dynamics-price-level',
      sourceId: 'makro2-exam-makrookonomik-ii-klausur-februar-2024-260119-141838',
      sourcePath: 'Makroökonomik I/Klausur_Februar_2024_260119_141838.pdf',
      publicLabel: 'Klausur Februar 2024',
      page: 4,
      section: 'Aufgabe 3: Staatsschuldendynamik und Preisniveau',
      fingerprint: 'd8284122be13efbcba013b4bf6b5e8af195be8d246e3f75571f9826eeb46ff2a',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-feb-2024-pass-1',
      reviewedAt: '2026-06-15'
    }),
    anchor({
      id: 'makro2.uebungsblatt6.a1.p1-debt-repayment-stabilization',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-6',
      sourcePath: 'Übungen/Uebungsblatt_6.pdf',
      publicLabel: 'Uebungsblatt_6',
      page: 1,
      section: 'Aufgabe 1: Rückzahlung der Staatsschulden',
      fingerprint: 'f682093ccd5e9aa80efc93149d9b474a91fb7d66f161221b8500784cf05d59cf',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-6-pass-1',
      reviewedAt: '2026-06-15'
    })
  ],
  ricardianisch: [
    anchor({
      id: 'makro2.ricardianisch.slides-06-pdf.p41.die-gefahren-sehr-hoher-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-06',
      sourcePath: 'Folien/slides_06.pdf',
      publicLabel: "slides_06",
      page: 41,
      section: "Die Gefahren sehr hoher Staatsverschuldung",
      fingerprint: '505817ce258ddc09',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.ricardianisch.slides-06-pdf.p39.die-gefahren-sehr-hoher-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-06',
      sourcePath: 'Folien/slides_06.pdf',
      publicLabel: "slides_06",
      page: 39,
      section: "Die Gefahren sehr hoher Staatsverschuldung",
      fingerprint: 'ae4245a7c15a9886',
      confidence: 0.88
    })
  ],
  schuldenfinanzierung_monetarisierung: [
    anchor({
      id: 'makro2.schuldenfinanzierung_monetarisierung.slides-06-pdf.p41.die-gefahren-sehr-hoher-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-06',
      sourcePath: 'Folien/slides_06.pdf',
      publicLabel: "slides_06",
      page: 41,
      section: "Die Gefahren sehr hoher Staatsverschuldung",
      fingerprint: '505817ce258ddc09',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.schuldenfinanzierung_monetarisierung.slides-06-pdf.p39.die-gefahren-sehr-hoher-',
      sourceId: 'makro2-lecture-slide-makrookonomik-ii-folien-slides-06',
      sourcePath: 'Folien/slides_06.pdf',
      publicLabel: "slides_06",
      page: 39,
      section: "Die Gefahren sehr hoher Staatsverschuldung",
      fingerprint: 'ae4245a7c15a9886',
      confidence: 0.88
    }),
    anchor({
      id: 'makro2.uebungsblatt6.a2.p2-debt-monetization-is-lm-pc',
      sourceId: 'makro2-exercise-makrookonomik-ii-ubungen-uebungsblatt-6',
      sourcePath: 'Übungen/Uebungsblatt_6.pdf',
      publicLabel: 'Uebungsblatt_6',
      page: 2,
      section: 'Aufgabe 2: Monetarisierung der Staatsschuld und hohe Inflation',
      fingerprint: 'f682093ccd5e9aa80efc93149d9b474a91fb7d66f161221b8500784cf05d59cf',
      confidence: 0.94,
      reviewedBy: 'codex-official-task-review-makro2-uebungsblatt-6-pass-1',
      reviewedAt: '2026-06-15'
    })
  ]
});
