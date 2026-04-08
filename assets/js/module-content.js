export const MODULE_CONTENT = {
  makro1: {
    stageLabel: "Kursportal",
    sourceMethod: "Zusammengestellt aus Deck-Ueberschriften, Zusammenfassungen, Tutoriums- und Uebungsblaettern sowie archivierten Klausurdateien im Makrooekonomik-I-Ordner.",
    coverageStatus: "Der aktuelle Quellstand enthaelt eine vollstaendige Vorlesungslinie, einen echten Uebungs-/Tutoriumspfad und mehrere belastbare Klausurjahrgaenge fuer Makrooekonomik I.",
    portalGoal: "Dieses Modul laeuft nun als dokumentgebundenes Live-Portal mit echter Vorlesungs-, Aufgaben- und Klausurbasis.",
    audit: [
      { label: "Vorlesungen", value: "8 Decks" },
      { label: "Uebungen", value: "11 Dateien" },
      { label: "Tutorium", value: "11 Dateien" },
      { label: "Klausuren", value: "2018 und 2022" }
    ],
    sourceGroups: [
      {
        title: "Vorlesungsreihe",
        body: "Die Stofflinie ist ueber VL_1 bis VL_5, Kap6 sowie VL_7 und VL_8 plus Zusammenfassungen zu VL1-VL8 dokumentiert.",
        sources: [
          "Vorlesungen/VL_1.pdf bis VL_5.pdf",
          "Vorlesungen/Kap6.pdf",
          "Vorlesungen/VL_7.pdf und VL_8.pdf",
          "Zusammenfassungen/Makro I VL1.pdf bis VL8.pdf"
        ]
      },
      {
        title: "Uebungen und Tutorium",
        body: "Die Praxisbasis kombiniert Uebung1-5, weitere Uebungsblaetter sowie Tutorienblatt 1-6 und Tutorium 1-5.",
        sources: [
          "Uebungen/Uebung1.pdf bis Uebung5.pdf",
          "Uebungen/Uebungsblatt_1.pdf, _2.pdf, _5.pdf, _6.pdf, _7.pdf",
          "Tutorium/Tutorienblatt-1.pdf bis Tutorienblatt_6_Makro_1.pdf",
          "Tutorium/Tutorium1.pdf bis Tutorium5.pdf"
        ]
      },
      {
        title: "Klausurarchiv",
        body: "Die Klausurvorbereitung kann auf mehrere Haupt- und Nachtermine sowie eine Probeklausur gestuetzt werden.",
        sources: [
          "Klausur_2018_Haupttermin.pdf",
          "Klausur_2018_Nachtermin.pdf",
          "Klausur_2022_Haupttermin.pdf",
          "Klausur_2022_Nachtermin.pdf",
          "Probeklausur aus 2018 Haupttermin.pdf",
          "Fragen aus dem Handout klaeren.pdf"
        ]
      }
    ],
    roadmap: [
      {
        title: "Einfuehrung in die Makrooekonomik und Zeithorizonte",
        body: "Dieser Einstieg fuehrt in die Makrooekonomik als Analyse gesamtwirtschaftlicher Produktion, Arbeitslosigkeit und Inflation ein und ordnet kurze, mittlere und lange Frist als Denkrahmen des gesamten Kurses.",
        sources: ["Vorlesungen/VL_1.pdf", "Zusammenfassungen/Makro I VL1.pdf"]
      },
      {
        title: "Volkswirtschaftliche Gesamtrechnung, BIP, Inflation und Arbeitslosigkeit",
        body: "Dieser Block baut die makrooekonomischen Kennzahlen sauber auf: Entstehungs-, Verteilungs- und Verwendungsseite des BIP, nominales versus reales BIP, Deflator, Verbraucherpreisindex und Arbeitslosenquote.",
        sources: ["Vorlesungen/VL_2.pdf", "Zusammenfassungen/Makro I VL2.pdf"]
      },
      {
        title: "Guetermarkt und lineare Konsumfunktion",
        body: "Dieser Abschnitt entwickelt den kurzfristigen Guetermarkt ausgehend von Konsum, Investitionen, Staatsausgaben und Steuern. Zentral sind Gleichgewichtsproduktion, lineare Konsumfunktion, geplante Nachfrage und die Verbindung von Einkommen und Nachfrage.",
        sources: ["Vorlesungen/VL_3.pdf", "Zusammenfassungen/Makro I VL3.pdf", "Uebungen/Übung3.pdf"]
      },
      {
        title: "Multiplikator, Sparparadox und Fiskalimpulse",
        body: "Auf dem Guetermarkt folgt auf die Nachfragegleichung die eigentliche Konjunkturmechanik: Multiplikator, Sparparadox, Staatsausgaben- und Steuerschocks sowie die saubere Unterscheidung zwischen Erstimpuls und Gesamteffekt.",
        sources: ["Vorlesungen/VL_3.pdf", "Zusammenfassungen/Makro I VL3.pdf", "Uebungen/Übung3.pdf", "Tutorium/Tutorienblatt-3.pdf"]
      },
      {
        title: "Geld, Anleihen und Geldnachfrage",
        body: "Hier werden Geld, Anleihen, Geldnachfrage, Offenmarktgeschaefte und Zinssteuerung der Zentralbank aufgebaut. Im Zentrum stehen Liquiditaetspraeferenz, Opportunitaetskosten der Geldhaltung und die Verbindung von Einkommen, Preisniveau und Zins.",
        sources: ["Vorlesungen/VL_4.pdf", "Zusammenfassungen/Makro I VL4.pdf"]
      },
      {
        title: "Banken, Mindestreserven und Geldschoepfung",
        body: "Der zweite Finanzmarktblock vertieft die Rolle von Geschaeftsbanken, Mindestreserven, Geldschoepfungsprozess und Zentralbankoperationen. Genau hier wird geklaert, wie aus Einlagen, Reserven und Wertpapiergeschaeften eine zins- und geldpolitische Steuerung entsteht.",
        sources: ["Vorlesungen/VL_4.pdf", "Zusammenfassungen/Makro I VL4.pdf", "Tutorium/Tutorium4.pdf"]
      },
      {
        title: "IS-LM-Grundmodell bei Zinssteuerung",
        body: "Hier werden Gueter- und Geldmarkt zum IS-LM-Modell verbunden. Klausurrelevant sind die Herleitung der fallenden IS-Kurve, die horizontale LM-Kurve bei Zinssteuerung und die Logik des gemeinsamen Gleichgewichts von Einkommen und Zins.",
        sources: ["Vorlesungen/VL_5.pdf", "Zusammenfassungen/Makro I VL5.pdf"]
      },
      {
        title: "Fiskalpolitik, Geldpolitik und Crowding-Out im IS-LM",
        body: "Aufbauend auf dem Grundmodell wird hier trainiert, wie Fiskal- und Geldpolitik die Kurven verschieben, wann Crowding-Out entsteht und wie ein Policy-Mix Produktions- und Zinsreaktionen veraendert.",
        sources: ["Vorlesungen/VL_5.pdf", "Zusammenfassungen/Makro I VL5.pdf", "Uebungen/Uebung5.pdf"]
      },
      {
        title: "Realzins, Risikopraemie und erweitertes IS-LM",
        body: "Kapitel 6 vertieft das Finanzsystem ueber Realzins, erwartete Inflation, Risikopraemien, Leverage, Bank-Runs und das erweiterte IS-LM-Modell, in dem der fuer Investitionen relevante Kreditzins aus Realzins plus Risikopraemie besteht.",
        sources: ["Vorlesungen/Kap6.pdf", "Zusammenfassungen/Makro I VL6.pdf"]
      },
      {
        title: "Arbeitsmarkt, Lohnsetzung, Preissetzung und Produktionspotenzial",
        body: "Dieser Block fuehrt Arbeitslosenquote, Partizipation und Arbeitsmarktdynamik mit Lohnsetzung, Preissetzung und natuerlicher Arbeitslosenquote zusammen. Daraus entstehen natuerliches Beschaeftigungsniveau und Produktionspotenzial.",
        sources: ["Vorlesungen/VL_7.pdf", "Zusammenfassungen/Makro I VL7.pdf"]
      },
      {
        title: "Phillipskurve, Erwartungen, NAIRU und Inflationsdynamik",
        body: "Hier wird die Phillipskurve aus Lohn- und Preissetzung hergeleitet; dazu kommen adaptive und verankerte Erwartungen, die Rolle der NAIRU, Lohnindexierung, Hysterese und die Stabilisierung von Inflation und Arbeitslosigkeit.",
        sources: ["Vorlesungen/VL_8.pdf", "Zusammenfassungen/Makro I VL8.pdf", "Tutorium/Tutorienblatt_6_Makro_1.pdf"]
      }
    ],
    practice: [
      {
        title: "Tutorien 1-6 als Kurzfragen- und Grafiktraining",
        body: "Die Tutorien pruefen definitorische Kurzantworten, Wirkungsrichtungen, Diagrammverschiebungen und saubere Begruendungen in genau der Form, wie sie spaeter im ersten Klausurteil auftauchen.",
        sources: ["Tutorium/Tutorienblatt-1.pdf bis Tutorienblatt_6_Makro_1.pdf", "Tutorium/Tutorium1.pdf bis Tutorium5.pdf"]
      },
      {
        title: "Uebungen fuer Rechenwege und Modellverschiebungen",
        body: "Die Uebungsblaetter liefern genau die numerischen und graphischen Standardsituationen des Kurses: Multiplikator, IS-LM, Risikopraemien, Arbeitsmarkt und Phillipskurve.",
        sources: ["Uebungen/Uebung1.pdf bis Uebung5.pdf", "Uebungen/Übungsblatt_1.pdf, _2.pdf, _5.pdf, _6.pdf, _7.pdf"]
      },
      {
        title: "Klausurtraining mit Originaljahrgaengen",
        body: "Die Klausuren 2018 und 2022 sowie die Probeklausur zeigen die echte Gewichtung aus 10 Kurzfragen plus Modell- oder Rechenaufgaben und sind damit das Leitformat fuer exam-level Training im Portal.",
        sources: ["Klausur_2018_*.pdf", "Klausur_2022_*.pdf", "Probeklausur aus 2018 Haupttermin.pdf"]
      }
    ],
    qualityNotes: [
      "VL_6.pdf liegt im Quellordner nicht separat vor; der Stoff wird dort durch Kap6.pdf getragen und ist im Portal so ausgewiesen.",
      "Eine im Ordner liegende Februar-2024-Klausur ist als Makrooekonomik II beschriftet und wird deshalb nicht als Makro-I-Klausurquelle verwendet.",
      "Das Modul hat eine belastbare Aufgaben- und Klausurbasis fuer ein vollwertiges Makro-I-Live-Portal mit Diagramm- und Rechenfokus."
    ]
  },
  mikro1: {
    stageLabel: "Kursportal",
    sourceMethod:
      "Die Portal-Konzeptanker fuer Mikro I beziehen sich auf die im Ordner Mikrooekonomik I bereitgestellten Vorlesungsfolien Mikro_1_VL_1.pdf bis Mikro_1_VL_18.pdf (plus Mikro_1_VL_5_EmpirischeElastizitaeten.pdf), die Vorlesungsplanung SS 2025 und ausgewaehlte PDFs unter Weitere_Unterlagen.",
    coverageStatus:
      "Der Quellordner enthaelt eine vollstaendige VL-Reihe mit klar titelierten Programmfolien (Haushalt, Dualitaet, Slutsky, Wohlfahrtseffekte, Unternehmen, Wettbewerb, Monopol). Zusaetzliche Einzel-PDFs (z. B. Slutsky, Cobb-Douglas/CES-Produktion) ergaenzen spezielle Punkte; sie sind im Portal nicht flaechendeckend als Primaeranker verdrahtet.",
    portalGoal:
      "Das benchmark-Modul Mikro I bleibt erklaerungs- und drillstark; Primaerpfade verbinden Konzepte dort, wo die VL-Folien den Stoff eindeutig tragen. Zusaetzlich existiert ein `contentManifest.js`-Bridge mit dateirelativen Primaerrefs unter `source-materials/Mikrooekonomik I/Mikrooekonomik I/` (Kuratierung/Validierung siehe Audits).",
    audit: [
      { label: "Vorlesungsfolien", value: "Mikro_1_VL_1.pdf bis Mikro_1_VL_18.pdf" },
      { label: "Zusatzfolie", value: "Mikro_1_VL_5_EmpirischeElastizitaeten.pdf" },
      { label: "Planung", value: "Vorlesungsplanung_Mikrooekonomik_I.pdf (Terminplan SS 2025)" },
      { label: "Ergänzungen", value: "Weitere_Unterlagen (u. a. Slutsky-, Nutzenänderungs-, CD/CES-Produktions-PDFs)" }
    ],
    sourceGroups: [
      {
        title: "Vorlesungsfolien (Mikro I)",
        body: "Hauptquelle fuer kursnahe Definitionen und Standardherleitungen: nummerierte VL-PDFs unter Vorlesungsfolien/. Die ersten Seiten jedes Dokuments nennen das Tagesprogramm und Literaturhinweise (Varian, teils Breyer).",
        sources: [
          "Vorlesungsfolien/Mikro_1_VL_1.pdf bis Vorlesungsfolien/Mikro_1_VL_18.pdf",
          "Vorlesungsfolien/Mikro_1_VL_5_EmpirischeElastizitaeten.pdf"
        ]
      },
      {
        title: "Vorlesungsplanung",
        body: "Vorlesungsplanung_Mikrooekonomik_I.pdf listet fuer das Sommersemester 2025 die Zuordnung von Kalenderwochen zu VL-Nummern (1–18, optional 19 als Fragestunde). Sie ersetzt keine inhaltliche Themenmatrix.",
        sources: ["Weitere_Unterlagen/Vorlesungsplanung_Mikrooekonomik_I.pdf"]
      },
      {
        title: "Weitere Unterlagen und Probeklausur",
        body: "Ergänzende PDFs zu Einzelthemen (Slutsky, Nutzenänderungen, AEE, Klausurtext ohne echten Text) sowie die Unterlage Probeklausur/ mit Bilddateien; nicht automatisch als Primaeranker pro Portal-Konzept gesetzt.",
        sources: [
          "Weitere_Unterlagen/Breyer_Slutsky.pdf",
          "Weitere_Unterlagen/Demmler_Slutsky.pdf",
          "Weitere_Unterlagen/Preis\u00e4nderungNutzen\u00e4nderung_25.pdf",
          "Weitere_Unterlagen/CobbDouglas_CES.pdf",
          "Weitere_Unterlagen/Klausur_Mikro1_ohneechtentext.pdf",
          "Probeklausur/*.JPG"
        ]
      }
    ],
    roadmap: [
      {
        title: "VL 1 — Einführung, Haushaltstheorie, Budgetbeschränkung",
        body: "Programmfolie nennt Haushaltstheorie und Budgetbeschränkung (Varian Kap. 2); im Fliesstext der Folien: Konsummöglichkeitenmenge und Budgetmenge.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_1.pdf"]
      },
      {
        title: "VL 2 — Präferenzen, Nutzen, Indifferenzkurven, GRS, Exkurs Lagrange",
        body: "Formale Präferenzrelation, Nutzenfunktionen, IK, Grenzrate der Substitution; Exkurs Maximierung unter Nebenbedingung.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_2.pdf"]
      },
      {
        title: "VL 3 — Substitutionselastizität, homothetische Nutzenfunktionen, graphisches Optimum",
        body: "Substitutionselastizität σ, Homothetie, graphische Bestimmung des optimalen Konsumbündels.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_3.pdf"]
      },
      {
        title: "VL 4 — Marshallsche Nachfrage, Cobb-Douglas- und CES-Beispiele",
        body: "Allgemeine Herleitung der Marshallschen Nachfrage; Nutzenmaximierung mit Cobb-Douglas und CES.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_4.pdf"]
      },
      {
        title: "VL 5 — Einkommens- und Preisänderungen, Marshall-Kurven; VL 5b empirische Elastizitäten",
        body: "Einkommens-Konsum-Kurven, Engelkurven, Preis-Konsum-Kurven und Marshallsche Nachfragekurven; separate Folie mit empirischen Elastizitätsbeispielen.",
        sources: [
          "Vorlesungsfolien/Mikro_1_VL_5.pdf",
          "Vorlesungsfolien/Mikro_1_VL_5_EmpirischeElastizitaeten.pdf"
        ]
      },
      {
        title: "VL 6 — Ausgabenminimierung, Hicks, Ausgaben- und indirekte Nutzenfunktion",
        body: "Dualität: Ausgabenminimierung, Hickssche Nachfrage, Ausgabenfunktion und Shephards Lemma, indirekte Nutzenfunktion und Roys Identität (Breyer 4.3.1/4.3.2).",
        sources: ["Vorlesungsfolien/Mikro_1_VL_6.pdf"]
      },
      {
        title: "VL 7–8 — Slutsky, Sonderfälle, Anfangsausstattung, Brücke zum Arbeitsangebot",
        body: "VL 7: Einkommens- und Substitutionseffekt, Slutsky-Gleichung. VL 8: Leontief und quasilineare Nutzenfunktion, Slutsky bei Güterausstattung, Ausblick Arbeitsangebot.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_7.pdf", "Vorlesungsfolien/Mikro_1_VL_8.pdf"]
      },
      {
        title: "VL 9 — Arbeitsangebot",
        body: "Freizeitnachfrage, Substitutionseffekt und Einkommenseffekt, Lohnänderung und Arbeitsangebot.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_9.pdf"]
      },
      {
        title: "VL 10 — CV, EV, Konsumentenrente",
        body: "Kompensierende und äquivalente Variation, Änderung der Konsumentenrente, Vergleich der Nutzenmaße.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_10.pdf"]
      },
      {
        title: "VL 11–12 — Produktionstechnologie, Skalenerträge, Kostenminimierung",
        body: "VL 11: Produktionsfunktion, homogene Funktionen, proportionale Inputvariation. VL 12: Kostenminimierung, bedingte Faktornachfragen, Kostenfunktionen, GRTS.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_11.pdf", "Vorlesungsfolien/Mikro_1_VL_12.pdf"]
      },
      {
        title: "VL 13–15 — Gewinnmaximierung, Angebot, kurzfristige Kostenkurven",
        body: "VL 13: Gewinnmax, Güterangebot, unbedingte Faktornachfrage, Hotelling. VL 14: grafische Darstellung, CRS/Euler, kurzfristige Gewinnmax. VL 15: kurzfristige Kostenminimierung, kurz- und langfristige Kostenkurven.",
        sources: [
          "Vorlesungsfolien/Mikro_1_VL_13.pdf",
          "Vorlesungsfolien/Mikro_1_VL_14.pdf",
          "Vorlesungsfolien/Mikro_1_VL_15.pdf"
        ]
      },
      {
        title: "VL 16 — Wettbewerbsmarkt",
        body: "Einzelangebot, Marktangebot, Marktnachfrage, Wettbewerbsgleichgewicht.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_16.pdf"]
      },
      {
        title: "VL 17–18 — Monopol",
        body: "VL 17: Gewinnmax im Monopol, Wohlfahrtswirkungen. VL 18: Rechenbeispiel, monopolistische Preisdiskriminierung.",
        sources: ["Vorlesungsfolien/Mikro_1_VL_17.pdf", "Vorlesungsfolien/Mikro_1_VL_18.pdf"]
      }
    ],
    qualityNotes: [
      "Die Vorlesungsplanung dokumentiert nur Terminzuordnungen, keine detaillierte Konzept-zu-VL-Matrix.",
      "Perfekte Substitute (lineare Nutzenfunktion) werden in den extrahierten Vorlesungsfolientexten nicht unter eindeutigem Stichwort gefunden; Primaeranker dafuer bleiben im Portal leer.",
      "Unterlagen wie Demmler_Slutsky.pdf oder Breyer_Slutsky.pdf sind fachlich relevant, aber nicht als flaechendeckende Primaerquelle fuer alle Slutsky-Portalinhalte ohne zusaetzliche Sichtung zugewiesen.",
      "Technische Verdrahtung: `mikro1/js/data/contentManifest.js` spiegelt die Kuratierung als `MIKRO1_CONCEPT_PRIMARY_REFS` (Konzepte ohne belastbaren VL-Beleg bleiben `[]`, z. B. `psubst` laut `docs/audits/mikro1-provenance-validation-pass-2.md`).",
      "Provenance-Audits: `docs/audits/mikro1-provenance-curation-pass-1.md`, `docs/audits/mikro1-provenance-validation-pass-2.md`."
    ]
  },
  mikro2: {
    stageLabel: "Kursportal (Quarantaene: Quellenlage)",
    sourceMethod:
      "Es gibt **keinen** Ordner **Mikro II** unter `source-materials/`; das Live-Portal deckt Mikro-II-Themen (Spieltheorie, Oligopol, AGG, Marktversagen, Information) **ohne** dateibasierte Primaeranker aus dem Repo. Inhaltliche Erweiterungen sind nicht als `direct-source` gegen VL-PDFs im Materialordner ausweisbar, bis ein offizieller Korpus eingepflegt ist (siehe `docs/audits/mikro2-quarantine-roadmap-pass-1.md`, `AGENTS.md`, `assets/js/modules.js` mit `sourceCorpusInRepo: false`).",
    coverageStatus:
      "Modul ist **live** und thematisch konsistent mit fortgeschrittener Mikrooekonomik; **nicht** mit in-repo PDF-Korpus abgesichert. Kein `contentManifest.js`, keine `MIKRO*-PRIMARY_REFS` gegen `source-materials/`.",
    portalGoal:
      "Bis Mikro-II-Materialien im Repo liegen: Lernpfad nutzbar halten, aber **keine** vorgebliche Quellenparitaet zu Modulen wie `mikro1` oder `makro2` suggerieren.",
    audit: [
      { label: "source-materials", value: "Kein Mikro-II-Baum (nur Mikro I vorhanden)" },
      { label: "Manifest / Bridge", value: "Nicht vorhanden (bewusst; leeres Manifest waere irrefuehrend)" },
      { label: "Registry", value: "`modules.js`: sourceCorpusInRepo false + sourceStatusNote" }
    ],
    sourceGroups: [],
    roadmap: [],
    qualityNotes: [
      "Diagnose: `docs/audits/mikro2-source-identity-resolution-pass-1.md`.",
      "Policy: `docs/audits/mikro2-quarantine-roadmap-pass-1.md` — Quarantaene betrifft **Quellenwahrheit**, nicht Deployability.",
      "Neue Inhalte: als source-distilled / platform-added-* kennzeichnen, bis ein Korpus existiert; kein erfundenes PDF-Mapping."
    ]
  },
  makro2: {
    stageLabel: "Kursportal",
    sourceMethod: "Aufgebaut aus den Tutorien- und Uebungsblaettern zu Makrooekonomik II sowie den im Modulordner dokumentierten Aufgaben zu offener Volkswirtschaft, Wechselkursregimen, Geldpolitik, Staatsverschuldung und Wachstum.",
    coverageStatus: "Die Materialien decken offene Makro, internationale Verflechtungen, Geld- und Wechselkurspolitik, Zeitinkonsistenz sowie Solow- und Schuldenlogik mit echter Rechen- und Grafikbasis ab.",
    portalGoal: "Das Portal soll Makrooekonomik II als dichtes Lernsystem fuer offene Volkswirtschaft, makropolitische Regimefragen und Wachstum abbilden – inklusive echter Klausurkurzfragen, Modellgrafiken und Uebergangslogik.",
    audit: [
      { label: "Tutorien", value: "12 Dateien" },
      { label: "Uebungen", value: "10 Blaetter" },
      { label: "Modelle", value: "Offene VW + Wachstum" },
      { label: "Klausurstil", value: "Kurzfragen + Diagramme + Rechnen" }
    ],
    sourceGroups: [
      {
        title: "Offene Volkswirtschaft und Wechselkurse",
        body: "Die ersten Tutorien- und Uebungsblaetter bauen Wechselkursnotation, Kaufkraftparitaet, Zinsparitaet, Zahlungsbilanz und den offenen Guetermarkt systematisch auf.",
        sources: [
          "coursework_text/Tutorienblatt_1.txt bis Tutorienblatt_3.txt",
          "coursework_text/Uebungsblatt_1.txt bis Uebungsblatt_4.txt"
        ]
      },
      {
        title: "Geldpolitik, Regime und Glaubwuerdigkeit",
        body: "Der mittlere Kursblock verbindet feste und flexible Wechselkurse, Trilemma, Currency Boards, Barro-Gordon, Taylor-Regel und politische Konjunkturzyklen.",
        sources: [
          "coursework_text/Tutorienblatt_3.txt bis Tutorienblatt_5.txt",
          "coursework_text/Uebungsblatt_3.txt bis Uebungsblatt_7.txt"
        ]
      },
      {
        title: "Wachstum und Staatsverschuldung",
        body: "Die spaeteren Uebungsreihen vertiefen Cobb-Douglas, Skalenertraege, Solow-Grundmodell, technischen Fortschritt, Goldene Regel und Schuldenquotendynamik.",
        sources: [
          "coursework_text/Tutorienblatt_6.txt",
          "coursework_text/Uebungsblatt_6.txt bis Uebungsblatt_10.txt"
        ]
      }
    ],
    roadmap: [
      {
        title: "Zahlungsbilanz und offene Volkswirtschaft als Buchhaltungssystem",
        body: "Der Kurs startet mit der Frage, wie Exporte, Importe, Primar- und Sekundaereinkommen sowie Kapitalstroeme zusammenhaengen. Leistungsbilanz, Kapitalbilanz und Nettoauslandsvermoegen bilden die Buchhaltungslogik, auf der spaetere Wechselkurs- und Politikfragen aufsetzen.",
        sources: ["coursework_text/Tutorienblatt_1.txt"]
      },
      {
        title: "Nominaler und realer Wechselkurs in Mengen- und Preisnotierung",
        body: "Hier wird die gesamte Wechselkursnotation sauber aufgebaut: Mengennotierung versus Preisnotierung, Auf- und Abwertung, reale Auf- und Abwertung sowie der Zusammenhang zwischen nominalem Kurs und relativen Preisen.",
        sources: ["coursework_text/Uebungsblatt_1.txt", "coursework_text/Tutorienblatt_1.txt"]
      },
      {
        title: "Absolute und relative Kaufkraftparitaet",
        body: "Dieser Block entwickelt das Gesetz des einheitlichen Preises, absolute PPP, relative PPP und deren Grenzen. Der Big-Mac-Zugriff zeigt, wie implizite PPP-Kurse, Unter- und Ueberbewertungen sowie Inflationsdifferenzen klausurfaehig gerechnet und gedeutet werden.",
        sources: ["coursework_text/Uebungsblatt_1.txt", "coursework_text/Tutorienblatt_1.txt"]
      },
      {
        title: "Ungedeckte Zinsparitaet und Wechselkurserwartungen",
        body: "Die UIP verknuepft Inlandszins, Auslandszins und erwartete Wechselkursveraenderung. Zentral sind hier Renditevergleich, Erwartungsbildung, Arbitrageintuition und die Frage, wie scheinbare Zinsvorteile durch erwartete Ab- oder Aufwertungen kompensiert werden.",
        sources: ["coursework_text/Uebungsblatt_1.txt", "coursework_text/Tutorienblatt_1.txt"]
      },
      {
        title: "Offener Guetermarkt, Nettoexporte und Multiplikatorleckagen",
        body: "Der offene Guetermarkt fuehrt Exporte, Importe und auslaendisches Einkommen in die gesamtwirtschaftliche Nachfrage ein. Dadurch veraendern sich Gleichgewichtsproduktion, Staatsausgabenmultiplikator und die Verbindung von Ersparnis, Investition und Leistungsbilanz.",
        sources: ["coursework_text/Uebungsblatt_2.txt", "coursework_text/Tutorienblatt_2.txt"]
      },
      {
        title: "Marshall-Lerner-Bedingung und J-Kurve",
        body: "Hier wird geklaert, wann eine reale Abwertung die Handelsbilanz verbessert und warum kurzfristig oft zunaechst der Preiseffekt dominiert. Die Summe von Export- und Importelastizitaeten, die J-Kurvenlogik und die saubere Vorzeichenanalyse sind klausurrelevant.",
        sources: ["coursework_text/Uebungsblatt_2.txt", "coursework_text/Tutorienblatt_2.txt"]
      },
      {
        title: "Mundell-Fleming bei flexiblem Wechselkurs",
        body: "Das kleine offene VW-Modell verbindet Guetermarkt, Geldmarkt und Zinsparitaet. Behandelt werden Gleichgewichtsbestimmung, Fiskal- und Geldpolitik, Auslandsschocks und die Rolle erwarteter Wechselkurse unter Kapitalmobilitaet.",
        sources: ["coursework_text/Uebungsblatt_3.txt"]
      },
      {
        title: "Feste Wechselkurse, Trilemma und Verteidigung der Paritaet",
        body: "Im Zentrum stehen glaubwuerdige und unglaubwuerdige Paritaeten, Zinsverteidigung, Erwartungen, Devisenreserven und das Trilemma. Der Kurs trainiert hier besonders die Verbindung aus UIP, IS-LM-ZP-Diagramm und Regimeinterpretation.",
        sources: ["coursework_text/Tutorienblatt_3.txt", "coursework_text/Uebungsblatt_3.txt", "coursework_text/Uebungsblatt_4.txt"]
      },
      {
        title: "Wechselkursregime, Currency Boards und Krisendynamik",
        body: "Dieser Abschnitt nutzt Argentinien und andere Regimebeispiele, um zu zeigen, wie reale Aufwertung, Glaubwuerdigkeitsverluste, starre Paritaeten und Krisenmechanismen zusammenhaengen.",
        sources: ["coursework_text/Uebungsblatt_4.txt"]
      },
      {
        title: "Zeitinkonsistenz, Barro-Gordon und Inflationsbias",
        body: "Die politische Makrologik des Kurses baut auf Verlustfunktion, Phillipskurve, Erwartungen und Commitment auf. Zentral ist die Unterscheidung zwischen First Best, diskretionaerer Politik, Inflationsbias und glaubwuerdiger Bindung.",
        sources: ["coursework_text/Tutorienblatt_4.txt", "coursework_text/Uebungsblatt_5.txt"]
      },
      {
        title: "Taylor-Regel, Taylor-Prinzip und politische Konjunkturzyklen",
        body: "Dieser Block verbindet Inflationsziel, Arbeitslosenluecke, nominale und reale Zinsreaktion sowie die Bedingungen stabiler Geldpolitik. Gleichzeitig wird geprueft, wie Phillipskurve und Politikspielraum zusammenhaengen.",
        sources: ["coursework_text/Tutorienblatt_5.txt", "coursework_text/Uebungsblatt_7.txt"]
      },
      {
        title: "Produktionsfunktion, Grenzertraege und Skalenertraege",
        body: "Bevor das Solow-Modell gerechnet wird, muessen Cobb-Douglas, Grenzertraege, Pro-Kopf-Groessen und Skalenertraege sicher sitzen. Genau hier werden Produktions- und Wachstumsaussagen formal verankert.",
        sources: ["coursework_text/Tutorienblatt_5.txt", "coursework_text/Uebungsblatt_8.txt"]
      },
      {
        title: "Solow-Grundmodell und Wachstumsgleichgewicht",
        body: "Das Solow-Modell fuehrt von Sparquote, Abschreibungen und Kapitalintensitaet zum Steady State. Im Mittelpunkt stehen Konvergenzlogik, Sparquotenwirkung, Produktions- und Konsumpro-Kopf sowie die Goldene Regel.",
        sources: ["coursework_text/Tutorienblatt_6.txt", "coursework_text/Uebungsblatt_9.txt"]
      },
      {
        title: "Technischer Fortschritt, Bevoelkerungswachstum und Goldene Regel",
        body: "Hier wird das Wachstum je Arbeitseffizienzeinheit, die Rolle von technischem Fortschritt, Bevoelkerungswachstum und die Bestimmung der Golden-Rule-Sparquote ausgebaut.",
        sources: ["coursework_text/Uebungsblatt_10.txt", "coursework_text/Tutorienblatt_6.txt"]
      },
      {
        title: "Staatsverschuldung, Schuldenquote und Monetarisierung",
        body: "Zum Kursende wird die intertemporale Budgetrestriktion des Staates mit Tilgungsprofilen, Primarsaldo, Schuldenquotendynamik und der Gegenueberstellung von Kreditfinanzierung und Monetarisierung verbunden.",
        sources: ["coursework_text/Uebungsblatt_6.txt"]
      }
    ],
    practice: [
      {
        title: "PPP- und UIP-Kurzfragen als Einstieg in die offene Makro",
        body: "Die fruehen Tutorien pruefen Wechselkursnotation, Big-Mac-Index, Leistungsbilanzlogik und Zinsparitaet in knappen, begruendungsstarken Formaten – genau so, wie spaeter viele Klausurteile beginnen.",
        sources: ["coursework_text/Tutorienblatt_1.txt", "coursework_text/Uebungsblatt_1.txt"]
      },
      {
        title: "Offener Guetermarkt und Marshall-Lerner als Rechen- und Grafiktraining",
        body: "Die zweite Stoffphase trainiert DD-/AA-/ZZ-/NX-Darstellungen, offene Multiplikatorlogik, Abwertungseffekte und J-Kurven-Interpretation mit typischen Vorzeichenfallen.",
        sources: ["coursework_text/Tutorienblatt_2.txt", "coursework_text/Uebungsblatt_2.txt"]
      },
      {
        title: "Regimewechsel, Paritaetsverteidigung und Trilemma-Aufgaben",
        body: "Gerade bei festen Wechselkursen werden Diagrammtechnik, UIP-Rechnen und Glaubwuerdigkeitslogik gemeinsam geprueft. Diese Blaetter liefern den exam-level Standard dafuer.",
        sources: ["coursework_text/Tutorienblatt_3.txt", "coursework_text/Uebungsblatt_3.txt", "coursework_text/Uebungsblatt_4.txt"]
      },
      {
        title: "Barro-Gordon, Taylor-Regel und geldpolitische Kurzbegruendung",
        body: "Die Mittelphase trainiert Reaktionsfunktionen, Verlustfunktionen, Commitment-Argumente und die saubere Verbalisierung politischer Zielkonflikte unter Zeitdruck.",
        sources: ["coursework_text/Tutorienblatt_4.txt", "coursework_text/Tutorienblatt_5.txt", "coursework_text/Uebungsblatt_5.txt", "coursework_text/Uebungsblatt_7.txt"]
      },
      {
        title: "Solow-, Skalenertrags- und Schuldenquoten-Drills",
        body: "Die spaeten Aufgabenblaetter verbinden Produktionsfunktion, Steady-State-Rechnung, Goldene Regel, technischen Fortschritt und staatliche Budgetrestriktionen zu vollwertigem Klausurtraining.",
        sources: ["coursework_text/Tutorienblatt_5.txt", "coursework_text/Tutorienblatt_6.txt", "coursework_text/Uebungsblatt_6.txt", "coursework_text/Uebungsblatt_8.txt", "coursework_text/Uebungsblatt_9.txt", "coursework_text/Uebungsblatt_10.txt"]
      }
    ],
    qualityNotes: [
      "Die Stofflinie basiert hier auf Tutoriums- und Uebungsblaettern; eine separate Vorlesungsdeck-Reihe ist im Modulordner nicht als vollstaendige PDF-Serie abgelegt und wird deshalb nicht kuenstlich fingiert.",
      "Mehrere Tutorienblaetter liegen in doppelten Varianten vor; das Portal nutzt sie zur Stoffverifikation, zaehlt sie aber nicht als eigene Themenblöcke hoch.",
      "Die offene-Makro- und Wachstumsteile sind beide klausurtragend, deshalb wurde das Modul nicht auf Wechselkursfragen verengt."
    ]
  },
  statistik: {
    stageLabel: "Live-Portal",
    sourceMethod: "Aufgebaut aus der kompletten Vorlesungsreihe VL_01-VL_14, den Uebungsblaettern, Tutorien, Klausurmaterialien, Datensaetzen und den tutoriumsnahen R-Loesungen im Statistikordner.",
    coverageStatus: "Theorie, Rechentraining, Klausurvorbereitung und R-Praxis sind in diesem Modulordner ungewoehnlich dicht belegt.",
    portalGoal: "Das Portal soll die Statistik-Vorlesung von Datenbeschreibung ueber Wahrscheinlichkeitsrechnung und Inferenz bis zur Regression als echtes klausurfaehiges Lernsystem abbilden.",
    audit: [
      { label: "Vorlesungen", value: "14 Decks" },
      { label: "Tutorien", value: "13 Sets" },
      { label: "Uebungen", value: "5 Blaetter + 3 Coachings" },
      { label: "Daten + R", value: "25+ Assets" }
    ],
    sourceGroups: [
      {
        title: "Vorlesungen und Zusammenfassungen",
        body: "Die Vorlesungsreihe spannt den Kurs von Grundlagen und deskriptiver Statistik ueber Wahrscheinlichkeitsrechnung und Inferenz bis zur statistischen Modellierung auf.",
        sources: [
          "Vorlesungen/VL_01_-_Grundlagen_1.pdf bis VL_14_-_Stat_Modellierung_2.pdf",
          "Zusammenfassungen zu Grundlagen, deskriptiver Statistik, induktiver Statistik und Regression"
        ]
      },
      {
        title: "Uebungen und Tutorium",
        body: "Zu Uebung_1 bis Uebung_5 liegen Loesungen vor; Tutorium 1 bis 13 ist mit Kurz- und oft auch Langloesungen dokumentiert.",
        sources: [
          "Vorlesungsordner/Uebung_1.pdf bis Uebung_5.pdf",
          "Vorlesungsordner/Uebung_1_Loesungen.pdf bis Uebung_5_ausfuehrliche_Loesungen.pdf",
          "Vorlesungsordner/Tutorium_1.pdf bis Tutorium13.pdf",
          "Vorlesungsordner/Kurz- und Langloesungen zu den Tutorien"
        ]
      },
      {
        title: "Datensaetze und R-Material",
        body: "Die Statistik-Unterlagen verbinden coding-nahe Wiederholung mit mehreren Datensaetzen und einer gut anschlussfaehigen R-Praxis.",
        sources: [
          "Datensaetze/titanic.csv, GrowthSW.csv, HousePrices.csv, Bodyfat.csv, Advertising.csv",
          "Vorlesungsordner/R-Vorkurs.pdf",
          "Vorlesungsordner/TUT_01_-_R-Loesung.R bis TUT_11_-_R-Loesung.R",
          "Vorlesungsordner/R-Sammeldatei.R"
        ]
      },
      {
        title: "Klausurmaterial",
        body: "Die Klausurvorbereitung wird durch Probeklausuren, grundlegende Kurzfrageformate, Verteilungstabellen und klare Rechenhinweise abgesichert.",
        sources: [
          "Vorlesungsordner/03ProbeklausurDS2.pdf",
          "Vorlesungsordner/Teil_A_Klausur.pdf",
          "Vorlesungsordner/KlausurE2122K1_upd.pdf",
          "Verteilungstabellen.pdf",
          "Positivliste_Taschenrechner.pdf"
        ]
      }
    ],
    roadmap: [
      {
        title: "Grundlagen I: Datenwelten, Merkmale und Fragebogendesign",
        body: "Der Kursauftakt behandelt Datenarten, Merkmale, Mengenlogik und den Aufbau belastbarer Frageboegen. Genau hier wird geklaert, was spaeter ueberhaupt sinnvoll beschrieben, geschaetzt oder getestet werden kann.",
        sources: [
          "Vorlesungen/VL_01_-_Grundlagen_1.pdf"
        ]
      },
      {
        title: "Deskriptive Statistik I: Haeufigkeitsverteilungen, Histogramme und Balkendiagramme",
        body: "Dieser Block behandelt die saubere Beschreibung beobachteter Daten ueber absolute und relative Haeufigkeiten, Tabellen, Balkendiagramme und Histogramme. Er ist die Grundlage fuer fast jede spaetere Datenauswertung.",
        sources: [
          "Vorlesungen/VL_02_-_Deskriptive_Stat_1.1-1.2.pdf"
        ]
      },
      {
        title: "Deskriptive Statistik II: Lage-, Streumasse und Boxplots",
        body: "Hier wird die deskriptive Statistik ueber Mittelwerte, Median, Quantile, Varianz, Standardabweichung und Boxplots weitergefuehrt. Klausurrelevant ist nicht nur das Rechnen, sondern vor allem die passende Wahl und Interpretation des Masses.",
        sources: [
          "Vorlesungen/VL_03_-_Deskriptive_Stat_1.3-1.6.pdf"
        ]
      },
      {
        title: "Deskriptive Statistik III: Bivariate Tabellen, Korrelation und Fehlschluesse",
        body: "Dieser Abschnitt verlagert den Blick von einzelnen Merkmalen auf Zusammenhaenge zwischen Variablen. Bivariate Haeufigkeitsverteilungen, Zusammenhangsmasse und typische Scheinkorrelationen gehoeren hier zum klausurfesten Standard.",
        sources: [
          "Vorlesungen/VL_04_-_Deskriptive_Stat_2.pdf"
        ]
      },
      {
        title: "Wahrscheinlichkeitsrechnung: Rechenregeln, Unabhaengigkeit und bedingte Wahrscheinlichkeit",
        body: "Dieser Teil bildet die Bruecke von beobachteten Daten zu formalen Wahrscheinlichkeitsmodellen. Rechenregeln, Unabhaengigkeit, bedingte Wahrscheinlichkeit und totale Wahrscheinlichkeit sind hier der begriffliche Kern.",
        sources: [
          "Vorlesungen/VL_05_-_Grundlagen_2.pdf"
        ]
      },
      {
        title: "Diskrete Zufallsvariablen: Bernoulli-, Binomial- und Poissonverteilung",
        body: "Hier werden Zufallsvariablen, diskrete Verteilungen sowie Erwartungswert und Varianz systematisch eingefuehrt. Gerade Binomial- und Poissonfragen sind ein klassischer Punkt, an dem Rechenlogik und Modellwahl zusammenkommen muessen.",
        sources: [
          "Vorlesungen/VL_06_-_Grundlagen_3.1-3.pdf.pdf"
        ]
      },
      {
        title: "Stetige Zufallsvariablen: Dichten, Verteilungsfunktionen und Normalverteilung",
        body: "Dieser Block konzentriert sich auf stetige Verteilungen und ihre Kennzeichen. Rechteck-, Exponential- und vor allem Normalverteilung werden hier als Referenzmodelle fuer viele spaetere Verfahren aufgebaut.",
        sources: [
          "Vorlesungen/VL_07_-_Grundlagen_3.3.0-3.3.4.pdf"
        ]
      },
      {
        title: "Bivariate Verteilungen und bedingte Verteilungen",
        body: "Der mittlere Verteilungsblock erweitert den Stoff um bivariate Zufallsvariablen, bedingte Verteilungen und weiterfuehrende Verteilungsfragen. Das ist besonders wichtig, wenn spaeter Zusammenhang und bedingte Erwartung interpretiert werden.",
        sources: [
          "Vorlesungen/VL_07_VL_08_Einschub.pdf",
          "Vorlesungen/VL_08_-_Grundlagen_3.3.5-3.3.6.pdf"
        ]
      },
      {
        title: "Schaetzverfahren: Momente, kleinste Quadrate, Maximum Likelihood und Kerndichte",
        body: "Hier beginnt die induktive Statistik ueber Schaetzlogik. Behandelt werden Momentenmethode, Methode der kleinsten Quadrate, Maximum-Likelihood und Kerndichteschaetzung samt Eigenschaften von Schaetzfunktionen.",
        sources: [
          "Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf"
        ]
      },
      {
        title: "Konfidenzintervalle",
        body: "Hier werden aus Punktschaetzungen statistische Unsicherheitsaussagen. Das korrekte Aufstellen, Lesen und sprachlich saubere Interpretieren von Konfidenzintervallen ist der eigentliche Pruefungskern.",
        sources: [
          "Vorlesungen/VL_10_-_Induktive_Statistik_2.pdf"
        ]
      },
      {
        title: "Hypothesentests: Teststatistik, Ablehnungsbereich und Testentscheidung",
        body: "Dieser Abschnitt ordnet Hypothesentests ueber Teststatistik, Signifikanzniveau sowie Annahme- und Ablehnungsbereich. Binomial-, Normal- und allgemeine Testlogik muessen hier sicher beherrscht werden.",
        sources: [
          "Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf",
          "Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf"
        ]
      },
      {
        title: "Zwei-Stichproben-Verfahren und Varianzanalyse",
        body: "Der Einschub zum Zwei-Stichproben-t-Test und die Tutoriumsaufgaben zur Varianzanalyse bilden den klassischen Mehrgruppen- und Vergleichsblock. Hier wird besonders geprueft, ob du Modellannahmen, Testgroessen und Interpretation zusammendenken kannst.",
        sources: [
          "Vorlesungen/VL_11_-_Zwei-SP_t-Test.pdf",
          "Tutorien/Tutorium_11/Tutorium11.pdf",
          "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_11_-_R-Loesung.R"
        ]
      },
      {
        title: "Statistische Modellierung und Regression",
        body: "Die letzten Kapitel fuehren von der einfachen linearen Regression ueber Modellvarianten bis zu einem Ausblick auf weiterfuehrende Modellierungsfragen. Wichtig ist hier sowohl das Rechnen als auch die inhaltliche Deutung von Koeffizienten, Guete und Unsicherheit.",
        sources: [
          "Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf",
          "Vorlesungen/VL_13_-_Stat_Modellierung_1.5-1.8.pdf",
          "Vorlesungen/VL_14_-_Stat_Modellierung_2.pdf"
        ]
      }
    ],
    practice: [
      {
        title: "Uebung 1 und 2: Datenbeschreibung und deskriptive Statistik",
        body: "Die ersten beiden Uebungsblaetter trainieren Tabellen, Diagramme, Lagemasse, Streumasse und erste Interpretationsfragen in der Form, die spaeter auch in Teil-A- oder Kurzfragen wiederkehrt.",
        sources: ["Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_1.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_2.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_1_Loesungen.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_2_Loesungen.pdf"]
      },
      {
        title: "Uebung 3 und 4: Wahrscheinlichkeiten, Verteilungen und Inferenz",
        body: "Diese Blaetter decken die Rechenhaerte des Kurses ab: diskrete und stetige Verteilungen, Schaetzungen, Konfidenzintervalle und Hypothesentests mit sauberem Rechenweg.",
        sources: ["Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_3.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_4.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_3_Loesungen.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_4_Loesungen.pdf"]
      },
      {
        title: "Uebung 5 und Grossuebung: Regression und integrierte Klausurfalle",
        body: "Uebung 5 sowie die Grossuebungen bilden den Uebergang zur statistischen Modellierung und mischen den Stoff bewusst so, wie er auch in echten Klausuren verknuepft wird.",
        sources: ["Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_5.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Uebung_5_ausfuehrliche_Loesungen.pdf", "Grossuebung_Coaching/Uebung_1.pdf", "Grossuebung_Coaching/Uebung_2.pdf", "Grossuebung_Coaching/Uebung_3.pdf"]
      },
      {
        title: "Tutorium 1-13 als fein gestufte Drill-Bank",
        body: "Die Tutoriumsreihe liefert kurze, kleinteilige und loesungsnahe Aufgaben. Gerade fuer Wiederholung, Fehlersuche und das Zerlegen grosser Themen in sichere Einzelschritte ist sie die staerkste Praxisquelle des Kurses.",
        sources: ["Tutorien/Tutorium_1.pdf bis Tutorium_13.pdf", "Tutorien/Tutorium_1_Ausfuehrliche-Loesung.pdf bis Tutorium13-Ausfuehrliche-Loesungen.pdf"]
      },
      {
        title: "Klausurmodus und R-Lab",
        body: "Kurzfrageformate, Probeklausur, Verteilungstabellen und coding-nahe Uebungen bilden zusammen den eigentlichen Exam- und R-Pfad dieses Moduls.",
        sources: ["Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Teil_A_Klausur.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/03ProbeklausurDS2.pdf", "R-Vorkurs.pdf", "Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_01_-_R-Loesung.R bis TUT_11_-_R-Loesung.R", "Datensaetze/*.csv"]
      }
    ],
    qualityNotes: [
      "Deskriptive Statistik, Inferenz und Regression wurden nicht kuenstlich zusammengeschoben, sondern entlang der realen VL-Teilung getrennt, damit jedes exam-relevante Thema ein eigenes Portalkapitel bekommt.",
      "Der Zwei-Stichproben- und ANOVA-Block wurde als eigener Stoffabschnitt abgetrennt, weil genau dort in Tutorium und Klausur die Methodenauswahl oft kippt.",
      "Einige PDFs enthalten Encoding-Artefakte; die Stofflinie folgt deshalb den stabilen Vorlesungstiteln und den klaren Aufgabenpfaden statt fehlerhaften Volltextauszuegen."
    ]
  },
  oekonometrie: {
    stageLabel: "Live-Portal",
    sourceMethod: "Aufgebaut aus dem Vorlesungs-Masterdeck, Syllabus, Formelsammlung, 12 Uebungsblaettern, 11 Tutoriumsblaettern, 3 Probeklausuren und den thematisch gegliederten R-Skripten aus Uebung und Tutorium.",
    coverageStatus: "Theorie, Matrixrechnen, Inferenz, Diagnostik und R-Praxis sind hier vollstaendig bis in die typischen Klausurthemen hinein belegt.",
    portalGoal: "Das Portal soll die Einfuehrung in die Oekonometrie vom linearen Modell ueber Inferenz und Diagnostik bis zu heteroskedastischen und autokorrelierten Fehlern als strenges Lern- und Pruefungssystem abbilden.",
    audit: [
      { label: "Vorlesung", value: "Masterdeck + Syllabus" },
      { label: "Uebungen", value: "12 + 2 Wiederholungen" },
      { label: "Tutorien", value: "11 Blaetter" },
      { label: "R + Exams", value: "15 Skripte + 3 Proben" }
    ],
    sourceGroups: [
      {
        title: "Vorlesungsbasis",
        body: "Theorie, Kursrahmen und Formeln liegen in einem grossen Vorlesungsdeck plus Syllabus, Formelsammlung und Statistical Tables.",
        sources: [
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Syllabus.pdf",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Formelsammlung.pdf",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Statistical_Tables.pdf"
        ]
      },
      {
        title: "Uebungsarchiv",
        body: "Die Uebungsseite enthaelt 12 Uebungsblaetter, zwei Wiederholungen, drei Probeklausuren und einen thematischen R-Skriptpfad.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Uebungsblaetter/uebung_01.pdf bis uebung_12.pdf",
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Uebungsblaetter/wiederholung_1.pdf und wiederholung_2.pdf",
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Probeklausuren/Probeklausur_1.pdf bis Probeklausur_3.pdf",
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/01_Das_lineare_Modell.R bis 12_Autokorrelation.R"
        ]
      },
      {
        title: "Tutoriumsarchiv",
        body: "Die Tutoriumsseite liefert 11 Aufgabenblaetter, zusaetzliche R-Skripte und mehrere Datendateien.",
        sources: [
          "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/aufgabenblatt01.pdf bis aufgabenblatt11.pdf",
          "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/R/Tutorium_3.R, Tutorium_7.R, Tutorium_8.R, Tutorium_10.R",
          "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/R/cdp.xls, cps78.csv, stu_w.xls"
        ]
      }
    ],
    roadmap: [
      {
        title: "Wiederholung: Matrixalgebra und Statistik fuer OLS",
        body: "Die Wiederholungsskripte setzen genau die mathematischen und statistischen Bausteine, ohne die OLS spaeter nicht sauber gelesen werden kann: Matrixprodukte, Inversion, Rang, Normal- und t-Verteilung.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/Wiederholung_Lineare_Algebra.R",
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/Wiederholung_Statistik.R"
        ]
      },
      {
        title: "Das multiple lineare Modell und OLS-Schaetzung",
        body: "Dieser Block fuehrt Spezifikation, Designmatrix, OLS-Schaetzer und die Umsetzung in lm() zusammen. Er ist das technische Zentrum des ganzen Kurses.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/01_Das_lineare_Modell.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Klassische Annahmen des linearen Modells",
        body: "Dieser Abschnitt konzentriert die Kernlogik der Gauss-Markov-Welt: Erwartungswert null, Vollrang, Exogenitaet und die Folgen von Annahmeverletzungen. Genau hier wird geprueft, ob du Modellvoraussetzungen mehr kannst als nur aufzuzaehlst.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/02_Annahmen.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Eigenschaften des KQ-Schaetzers und Gauss-Markov",
        body: "Hier werden Unverzerrtheit, Praezision, Monte-Carlo-Intuition und das Gauss-Markov-Theorem konkret. Das ist der Block, in dem OLS nicht nur gerechnet, sondern theoretisch verstanden werden soll.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/03_Eigenschaften.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Schaetzung der Fehlervarianz und Kovarianzmatrix",
        body: "Hier werden SSR, sigma-Quadrat, Standardfehler und die Kovarianzmatrix des Schaetzers sauber ausgearbeitet. Diese Rechenschritte sind zentral, weil auf ihnen spaeter Intervalle und Tests aufbauen.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/04_Schaetzen_der_Fehlervarianz.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Prognose im linearen Modell",
        body: "Dieser Abschnitt zeigt den Unterschied zwischen Parameterschaetzung und Prognose. Wichtig sind hier Praediktionswert, Prognosevarianz und die oekonomische Lesart eines vorhergesagten Werts.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/05_Vorhersage.R",
          "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/R/Tutorium_3.R"
        ]
      },
      {
        title: "Bestimmtheitsmass und Modellguete",
        body: "Hier werden R-Quadrat, adjustiertes R-Quadrat und die Zerlegung von Gesamt-, erklaerter und residualer Variation explizit. In Klausuren geht es hier oft um richtige Formel, aber noch oefter um richtige Interpretation.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/06_Bestimmtheitsmass.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Intervallschaetzung, Tests und normales lineares Modell",
        body: "Dieser Block fuehrt t-, F- und Intervalllogik zusammen. Genau hier entscheidet sich, ob Regressionsergebnisse korrekt gelesen und beurteilt werden.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/09_Intervallschaetzung_Hypothesentests.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Asymptotische Eigenschaften des OLS-Schaetzers",
        body: "Hier wird ueber Simulationen sichtbar, wie sich die Verteilung des Schaetzers mit wachsender Stichprobe veraendert. Das ist der Kern der spaeteren grossen-Stichproben-Logik.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/10_Asymptotische_Eigenschaften.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Multikollinearitaet und partielle Regression",
        body: "Der Abschnitt zu Multikollinearitaet verbindet Vorlesungsintuition und Tutorium. Entscheidende Fragen sind hier: Was verraet eine hohe Regressorenkorrelation und warum werden Koeffizienten dadurch unpraezise?",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/07_Multikollinearitaet.R",
          "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/R/Tutorium_7.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Heteroskedastizitaet, GLS und robuste Inferenz",
        body: "Dieser Block fuehrt von Varianzverletzungen ueber FGLS/EGLS bis zur Frage, wie Inferenz unter Heteroskedastizitaet noch belastbar gemacht wird.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/11_Heteroskedastizitaet.R",
          "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/R/Tutorium_10.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      },
      {
        title: "Autokorrelation und serielle Abhaengigkeit",
        body: "Hier geht es um zeitlich korrelierte Fehler, Durbin-Watson-Logik und die Folgen serieller Abhaengigkeit fuer Schaetzung und Testen.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/12_Autokorrelation.R",
          "Lecture_Einfuehrung_in_die_Oekonometrie/Einf_WiSe2024.pdf"
        ]
      }
    ],
    practice: [
      {
        title: "Uebungsblaetter 01-03: Modellaufbau, Annahmen und OLS-Basis",
        body: "Die ersten drei Uebungsblaetter decken Spezifikation, Matrixlogik, Annahmen und die erste OLS-Rechnung ab. Hier sitzt die methodische Grundhaltung des gesamten Kurses.",
        sources: ["Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Uebungsblaetter/uebung_01.pdf bis uebung_03.pdf"]
      },
      {
        title: "Uebungsblaetter 04-06: Fehlervarianz, Prognose und Modellguete",
        body: "Diese Uebungsgruppe trainiert Standardfehler, Prognosefragen, Residuenlogik und R-Quadrat. Sie ist die direkte Vorbereitung auf viele klassische Rechenaufgaben der Klausur.",
        sources: ["Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Uebungsblaetter/uebung_04.pdf bis uebung_06.pdf"]
      },
      {
        title: "Uebungsblaetter 07-09: Multikollinearitaet, Intervalle und Tests",
        body: "In diesem Abschnitt wird die oekonometrische Inferenz wirklich klausurfest: partielle Regression, Intervallschaetzung, t-Tests und F-Tests muessen rechnerisch und sprachlich sauber sitzen.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Uebungsblaetter/uebung_07.pdf bis uebung_09.pdf"
        ]
      },
      {
        title: "Uebungsblaetter 10-12: Asymptotik, Heteroskedastizitaet und Autokorrelation",
        body: "Die spaeten Uebungen fokussieren die diagnostischen Standardprobleme des Moduls. Hier geht es um Modellkritik und darum, welche Inferenz unter welchen Fehlerstrukturen noch gilt.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Uebungsblaetter/uebung_10.pdf bis uebung_12.pdf",
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Uebungsblaetter/wiederholung_1.pdf",
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Uebungsblaetter/wiederholung_2.pdf"
        ]
      },
      {
        title: "Tutorium 01-11 als kompakter Drillpfad",
        body: "Die Tutoriumsreihe ist enger, schneller und oft direkter als die Hauptuebung. Sie eignet sich besonders gut fuer Wochenwiederholung, Kontrollrechnungen und die begleitende Nutzung des R-Labs.",
        sources: ["Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/aufgabenblatt01.pdf bis aufgabenblatt11.pdf"]
      },
      {
        title: "Probeklausuren und Coding-Praxis",
        body: "Drei Probeklausuren und die coding-nahe Begleitpraxis bilden zusammen den eigentlichen Exam-Modus des Moduls. Genau daraus sollte die Endphase der Vorbereitung gebaut werden.",
        sources: [
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/Probeklausuren/Probeklausur_1.pdf bis Probeklausur_3.pdf",
          "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/01_Das_lineare_Modell.R bis 12_Autokorrelation.R",
          "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/R/Tutorium_3.R bis Tutorium_10.R"
        ]
      }
    ],
    qualityNotes: [
      "Das Masterdeck wurde nicht als ein einziger Theorieblock uebernommen, sondern entlang seiner echten Teilprobleme in lernbare und pruefbare Kapitel zerlegt.",
      "Die Kapitelstruktur folgt den thematischen R-Skripten, weil diese die Vorlesungslogik im Material am saubersten in rechenbare Einzelprobleme herunterbrechen.",
      "Der heteroskedastische und der autokorrelierte Fehlerfall bleiben getrennt, weil sich dort Annahmen, Tests und Korrekturstrategien deutlich unterscheiden."
    ]
  },
  mathematik: {
    stageLabel: "Live-Portal",
    sourceMethod: "Aufgebaut aus der kompletten 10-teiligen Vorlesungsreihe, den zehn Kleinuebungsblaettern mit Loesungen und den zugehoerigen R-Uebungsblaettern samt R-Skripten.",
    coverageStatus: "Theorie, Rechendrill und R-Praxis decken Algebra, Funktionen, lineare Algebra, Analysis, Optimierung und Integralrechnung vollstaendig ab.",
    portalGoal: "Das Portal soll vom ersten Umgang mit Zahlen und Mengen bis zu Lagrange und Integralen als echtes klausurfaehiges Mathematik-Werkzeug funktionieren.",
    audit: [
      { label: "Vorlesungen", value: "10 Einheiten" },
      { label: "Kleinuebungen", value: "10 Blaetter" },
      { label: "R-Uebungen", value: "10 Blaetter" },
      { label: "R-Skripte", value: "10 Skripte" }
    ],
    sourceGroups: [
      {
        title: "Vorlesungsreihe",
        body: "Die Vorlesung folgt einem klaren Aufbau von algebraischen Grundlagen ueber lineare Algebra und Analysis bis zu Optimierung und Integralrechnung.",
        sources: [
          "01Mathe_E1_AlgebraUndMengenlehre.pdf",
          "02Mathe_E2_FunktionenUndGleichungen.pdf",
          "03Mathe_E3_SummenUndLogik.pdf",
          "04Mathe_LA1_LineareAlgebra1.pdf",
          "05Mathe_LA2_LineareAlgebra2.pdf",
          "06Mathe_AN1_Differentialrechnung.pdf",
          "07Mathe_OP1_UnivOptimierung.pdf",
          "08Mathe_AN2_FunktionenMultivariat.pdf",
          "09Mathe_OP2_MultivOptimierung.pdf",
          "10Mathe_AN3_Integralrechnung.pdf"
        ]
      },
      {
        title: "Kleinuebungsreihe",
        body: "Zu jeder Kurseinheit liegt ein eigenstaendiges Aufgabenblatt mit Loesungen vor, das die klausurtypischen Rechen- und Argumentationsformen trainiert.",
        sources: [
          "Kleinübung/E_1_-_Algebra_und_Mengenlehre/E1_-_Aufgaben.pdf",
          "Kleinübung/E_2_-_Funktionen_und_Gleichungen/E_2_-_Aufgaben.pdf",
          "Kleinübung/E_3_-_Summen_und_Logik/E_3_-_Aufgaben.pdf",
          "Kleinübung/LA_1_-_Matrizen_und_Matrix-Algebra/LA_I_-_Aufgaben.pdf",
          "Kleinübung/LA_2_-_Maßzahlen_von_Matrizen_und_inverse_Matrizen/LA_II_-_Aufgaben.pdf",
          "Kleinübung/AN_1_-_Univariate_Differenzialrechnung/AN_I_-_Aufgaben.pdf",
          "Kleinübung/OP_1_-_Univariate_Optimierung/OP_I_-_Aufgaben.pdf",
          "Kleinübung/AN_2_-__Funktionen_mehrerer_Variablen_und_multivariate_Differenzialrechnung/AN_II_-_Aufgaben.pdf",
          "Kleinübung/OP_2_-__Multivariate_Optimierung/OP_II_-_Aufgaben.pdf",
          "Kleinübung/AN_3_-_Intergralrechnung/AN_III_-_Aufgaben.pdf"
        ]
      },
      {
        title: "R-Begleitpfad",
        body: "Zu denselben Themen existieren eigene R-Uebungsblaetter und die passenden Vorlesungsskripte, sodass Rechnen, Visualisieren und numerisches Loesen direkt mitgeuebt werden koennen.",
        sources: [
          "Kleinübung/E_1_-_Algebra_und_Mengenlehre/R.E1_-_Aufgaben.pdf",
          "Kleinübung/E_2_-_Funktionen_und_Gleichungen/R.E2_-_Aufgaben.pdf",
          "Kleinübung/LA_1_-_Matrizen_und_Matrix-Algebra/R.LA_I_-_Aufgaben.pdf",
          "Kleinübung/AN_1_-_Univariate_Differenzialrechnung/R.AN_I_-_Aufgaben.pdf",
          "Kleinübung/OP_2_-__Multivariate_Optimierung/R.OP_II_-_Aufgaben.pdf",
          "R/R-Skripte/Rcode_E1.R",
          "R/R-Skripte/Rcode_E2.R",
          "R/R-Skripte/Rcode_LA1.R",
          "R/R-Skripte/Rcode_AN1.R",
          "R/R-Skripte/Rcode_OP2.R"
        ]
      }
    ],
    roadmap: [
      {
        title: "Einfuehrung I: Algebra und Mengenlehre",
        body: "Hier sitzen die Grundlagen fuer den ganzen Kurs: reelle Zahlen, algebraische Umformungen, Ungleichungen, Intervalle, Absolutbetraege und saubere Mengenoperationen.",
        sources: ["01Mathe_E1_AlgebraUndMengenlehre.pdf"]
      },
      {
        title: "Einfuehrung II: Funktionen und Gleichungen",
        body: "Die Einheit trainiert Funktionsbegriff, Definitionsbereiche, Polynome, lineare und quadratische Gleichungen, nichtlineare Gleichungen, Funktionsgraphen sowie Potenz-, Exponential- und Logarithmusfunktionen.",
        sources: ["02Mathe_E2_FunktionenUndGleichungen.pdf"]
      },
      {
        title: "Einfuehrung III: Summen und Logik",
        body: "Summenzeichen, Doppelsummen, Produkte, Aussagenlogik und Beweisideen bilden den formalen Uebergang von reinem Rechnen zu sauberer mathematischer Argumentation.",
        sources: ["03Mathe_E3_SummenUndLogik.pdf"]
      },
      {
        title: "Lineare Algebra I: Matrizen und Matrix-Algebra",
        body: "Matrizen werden aufgebaut, transponiert, addiert und multipliziert; ausserdem werden Vektoren und lineare Gleichungssysteme in Matrixform gelesen und gerechnet.",
        sources: ["04Mathe_LA1_LineareAlgebra1.pdf"]
      },
      {
        title: "Lineare Algebra II: Masszahlen, Inversen und Eigenwerte",
        body: "Spur, Rang, Determinante, inverse Matrix, das Loesen linearer Gleichungssysteme sowie Eigenwerte und Eigenvektoren machen die algebraische Struktur erst klausurfest.",
        sources: ["05Mathe_LA2_LineareAlgebra2.pdf"]
      },
      {
        title: "Analysis I: Univariate Differenzialrechnung",
        body: "Ableitungen, ihre Interpretation, Monotonie, hoehere Ableitungen, implizites Differenzieren, Approximationen, Grenzwerte und Newton-Verfahren sind der Kern dieser Einheit.",
        sources: ["06Mathe_AN1_Differentialrechnung.pdf"]
      },
      {
        title: "Optimierung I: Univariate Optimierung",
        body: "Globale und lokale Extremstellen, der Extremwertsatz und die klassische Ableitungslogik fuer Maxima und Minima werden hier systematisch geordnet.",
        sources: ["07Mathe_OP1_UnivOptimierung.pdf"]
      },
      {
        title: "Analysis II: Funktionen mehrerer Variablen",
        body: "Mehrdimensionale Funktionen, Homogenitaet, partielle Ableitungen, Kettenregel, totale Differentiale, implizites Differenzieren und lineare Approximationen erweitern die Analysis in den mehrdimensionalen Raum.",
        sources: ["08Mathe_AN2_FunktionenMultivariat.pdf"]
      },
      {
        title: "Optimierung II: Multivariate Optimierung und Lagrange",
        body: "Mehrdimensionale Extremstellen, Nebenbedingungen und die Methode der Lagrange-Multiplikatoren liefern den klausurrelevanten Standardzugriff auf Optimierungsprobleme mit Restriktionen.",
        sources: ["09Mathe_OP2_MultivOptimierung.pdf"]
      },
      {
        title: "Analysis III: Integralrechnung",
        body: "Unbestimmte und bestimmte Integrale, partielle Integration, Substitution, uneigentliche Integrale, Doppelintegrale und numerische Integration runden den Kurs ab.",
        sources: ["10Mathe_AN3_Integralrechnung.pdf"]
      }
    ],
    practice: [
      {
        title: "Kleinuebung E1: Algebra und Mengenlehre",
        body: "Die Aufgaben trainieren Zahlbereiche, Termumformungen, Ungleichungen, Intervalle, Absolutbetraege und Mengenlogik genauso, wie sie im Tutorium und in der Klausur abgefragt werden.",
        sources: ["Kleinübung/E_1_-_Algebra_und_Mengenlehre/E1_-_Aufgaben.pdf", "Kleinübung/E_1_-_Algebra_und_Mengenlehre/E1_-_Lösungen.pdf", "Kleinübung/E_1_-_Algebra_und_Mengenlehre/R.E1_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung E2: Funktionen und Gleichungen",
        body: "Hier werden Definitionsbereiche, Funktionswerte, Graphen, Gleichungen und elementare Transformationen in klausurnaher Aufgabenform geuebt; das R-Blatt ergaenzt die funktionale Perspektive direkt im Code.",
        sources: ["Kleinübung/E_2_-_Funktionen_und_Gleichungen/E_2_-_Aufgaben.pdf", "Kleinübung/E_2_-_Funktionen_und_Gleichungen/E_2_-_Lösungen.pdf", "Kleinübung/E_2_-_Funktionen_und_Gleichungen/R.E2_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung E3: Summen und Logik",
        body: "Die Uebung vertieft Summenformeln, Umformungen, Logik und Beweisideen und zwingt dazu, mathematische Aussagen nicht nur intuitiv, sondern formal sauber zu fassen.",
        sources: ["Kleinübung/E_3_-_Summen_und_Logik/E_3_-_Aufgaben.pdf", "Kleinübung/E_3_-_Summen_und_Logik/E_3_-_Lösungen.pdf", "Kleinübung/E_3_-_Summen_und_Logik/R.E3_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung LA1: Matrizen und Matrix-Algebra",
        body: "Die Blattlogik trainiert Matrixnotation, Addition, Multiplikation, Transponieren und die Uebersetzung linearer Gleichungssysteme in Matrixform; die R-Aufgaben machen dieselben Operationen rechnerisch sichtbar.",
        sources: ["Kleinübung/LA_1_-_Matrizen_und_Matrix-Algebra/LA_I_-_Aufgaben.pdf", "Kleinübung/LA_1_-_Matrizen_und_Matrix-Algebra/LA_I_-_Lösungen.pdf", "Kleinübung/LA_1_-_Matrizen_und_Matrix-Algebra/R.LA_I_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung LA2: Inverse Matrizen und Eigenwerte",
        body: "Rang, Spur, Determinanten, Inversen, lineare Gleichungssysteme und Eigenwerte werden hier klausurtypisch Schritt fuer Schritt gerechnet und kontrolliert.",
        sources: ["Kleinübung/LA_2_-_Maßzahlen_von_Matrizen_und_inverse_Matrizen/LA_II_-_Aufgaben.pdf", "Kleinübung/LA_2_-_Maßzahlen_von_Matrizen_und_inverse_Matrizen/LA_II_-_Lösungen.pdf", "Kleinübung/LA_2_-_Maßzahlen_von_Matrizen_und_inverse_Matrizen/R.LA_II_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung AN1: Univariate Differenzialrechnung",
        body: "Typische Aufgaben sind Ableitungen, Tangenten, Monotonie, Kurvendiskussion, implizites Differenzieren und Newton-Verfahren; das R-Blatt uebt Ableitungen auch symbolisch und numerisch.",
        sources: ["Kleinübung/AN_1_-_Univariate_Differenzialrechnung/AN_I_-_Aufgaben.pdf", "Kleinübung/AN_1_-_Univariate_Differenzialrechnung/AN_I_-_Lösungen.pdf", "Kleinübung/AN_1_-_Univariate_Differenzialrechnung/R.AN_I_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung OP1: Univariate Optimierung",
        body: "Auf diesem Blatt wird die Ableitungslogik auf lokale und globale Extremwerte angewendet, inklusive Randpruefung und sauberer Entscheidung zwischen Maximum und Minimum.",
        sources: ["Kleinübung/OP_1_-_Univariate_Optimierung/OP_I_-_Aufgaben.pdf", "Kleinübung/OP_1_-_Univariate_Optimierung/OP_I_-_Lösungen.pdf", "Kleinübung/OP_1_-_Univariate_Optimierung/R.OP_I_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung AN2: Multivariate Funktionen",
        body: "Mehrdimensionale Definitionsbereiche, partielle Ableitungen, totale Differentiale und lineare Approximationen werden hier in typischer Klausurstruktur geuebt; das R-Blatt spiegelt die Rechenschritte numerisch.",
        sources: ["Kleinübung/AN_2_-__Funktionen_mehrerer_Variablen_und_multivariate_Differenzialrechnung/AN_II_-_Aufgaben.pdf", "Kleinübung/AN_2_-__Funktionen_mehrerer_Variablen_und_multivariate_Differenzialrechnung/AN_II_-_Lösungen.pdf", "Kleinübung/AN_2_-__Funktionen_mehrerer_Variablen_und_multivariate_Differenzialrechnung/R.AN_II_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung OP2: Multivariate Optimierung",
        body: "Die Aufgaben gehen von freien mehrdimensionalen Extremstellen bis zur Lagrange-Methode mit Nebenbedingungen und trainieren genau die Systematik, die in der Klausur sitzen muss.",
        sources: ["Kleinübung/OP_2_-__Multivariate_Optimierung/OP_II_-_Aufgaben.pdf", "Kleinübung/OP_2_-__Multivariate_Optimierung/OP_II_-_Lösungen.pdf", "Kleinübung/OP_2_-__Multivariate_Optimierung/R.OP_II_-_Aufgaben.pdf"]
      },
      {
        title: "Kleinuebung AN3: Integralrechnung",
        body: "Die Abschlussuebung deckt unbestimmte und bestimmte Integrale, partielle Integration, Substitution, Doppelintegrale und numerische Verfahren ab; im R-Blatt wird vor allem die numerische Seite praktisch gerechnet.",
        sources: ["Kleinübung/AN_3_-_Intergralrechnung/AN_III_-_Aufgaben.pdf", "Kleinübung/AN_3_-_Intergralrechnung/AN_III_-_Lösungen.pdf", "Kleinübung/AN_3_-_Intergralrechnung/R.AN_III_-_Aufgaben.pdf"]
      }
    ],
    qualityNotes: [
      "Das Mathematik-Portal folgt jetzt der echten Kurssequenz von E1 bis AN3 und bildet jede Theoriespur mit einem passenden Uebungsblatt ab.",
      "Regulaere Kleinuebungen, Loesungen, R-Blaetter und Vorlesungsskripte ergaenzen sich so, dass sowohl Papierklausur als auch R-Teil gezielt trainierbar bleiben."
    ]
  },
  finanzwirtschaft: {
    stageLabel: "Live-Portal",
    sourceMethod: "Finanzwirtschaftliche Grundlagen von Liquiditaetsplanung ueber Investitionsrechnung und Unsicherheit bis Kapitalstruktur, entlang der Vorlesungsreihe V1-V12 aufgebaut.",
    coverageStatus: "Der Schwerpunkt liegt auf klausurfaehiger Begriffsarbeit, Rechenwegen, Entscheidungsregeln unter Sicherheit und Unsicherheit sowie sauberer finanzwirtschaftlicher Interpretation.",
    portalGoal: "Das Portal fuehrt sauber von den Grundlagen der Liquiditaets- und Investitionslogik ueber Entscheidungen unter Unsicherheit bis zu Finanzierungskosten, Kapitalstruktur und Leverage.",
    audit: [
      { label: "Theoriebloecke", value: "13 Kapitel" },
      { label: "Rechenkern", value: "Kapitalwert, IZF, Unsicherheit" },
      { label: "Praxisfaelle", value: "HRE + SVB + Porsche" },
      { label: "Klausurformat", value: "MC-orientiert" }
    ],
    sourceGroups: [
      {
        title: "Kurslogik",
        body: "Der Kurs baut von Liquiditaetsplanung, Kapitalmarktlogik und Zeitpraeferenzen bis zu Investitionsrechnung, Entscheidungsproblemen unter Unsicherheit, Finanzierungskosten und Kapitalstruktur aufeinander auf.",
        sources: ["V1_StudIP.pdf bis V12_StudIP.pdf"]
      },
      {
        title: "Anwendungsfaelle",
        body: "Krisenfaelle, Entscheidungsbloecke unter Unsicherheit, Kapitalerhoehung, Aktienbewertung und Verschuldungsbeispiele liefern den Stoff fuer klausurnahe Transferfragen.",
        sources: ["V2_StudIP.pdf", "V9_StudIP.pdf", "V10_StudIP.pdf", "V11_StudIP.pdf", "V12_StudIP.pdf"]
      }
    ],
    roadmap: [
      {
        title: "Einfuehrung und finanzwirtschaftliche Denkweise",
        body: "Zum Einstieg klaerst du, warum Finanzwirtschaft nicht nur Buchung oder Finanzierungstechnik ist, sondern eine Denkweise zur Beurteilung von Zahlungsstroemen, Vermoegenswirkungen und Entscheidungsfolgen.",
        sources: ["V1_StudIP.pdf"]
      },
      {
        title: "Traditionelle Betrachtungsweise: Liquiditaetsplanung, goldene Bilanzregel und Kapitalbedarfsplanung",
        body: "An HRE- und SVB-Faellen lernst du, warum Liquiditaet, Fristentransformation und die Abstimmung von Kapitalbindung und Finanzierung ueberlebenswichtig sind. Dazu gehoeren die goldene Bilanzregel, kumulierte Ein- und Auszahlungen sowie Kapitalbedarfs- und Kapitaldeckungsplaene.",
        sources: ["V2_StudIP.pdf"]
      },
      {
        title: "Moderne Betrachtungsweise: Kapitalmarkt, Praeferenzen und Institutionen",
        body: "Dieser Block verschiebt den Blick von der reinen Bilanzplanung zur Frage, was Kapitalmaerkte leisten, warum Praeferenzen wichtig sind und weshalb Institutionen wie Banken auf unvollkommenen Maerkten ueberhaupt entstehen.",
        sources: ["V3_StudIP.pdf"]
      },
      {
        title: "Grundlagen der Investitionstheorie: Intertemporale Wahl, Zeitpraeferenzen und Budgetgerade",
        body: "Hier uebst du die Grundlogik der Wahl zwischen heutigen und zukuenftigen Vorteilen: Budgetrestriktion, Konsummoeglichkeiten, Geldanlage, Kreditaufnahme und die Rolle individueller Zeitpraeferenzen.",
        sources: ["V4_StudIP.pdf"]
      },
      {
        title: "Investitionstheorie: Kapitalwert, Fisher-Separation und unvollkommener Kapitalmarkt",
        body: "Du lernst, wann der Kapitalwert eine saubere Entscheidungsregel liefert, wie sich Vorteilhaftigkeits- und Wahlprobleme trennen lassen und warum bei unterschiedlichen Soll- und Habenzinsen die Konsum- und Investitionsentscheidung wieder zusammenfallen.",
        sources: ["V5_StudIP.pdf"]
      },
      {
        title: "Dynamische Investitionsrechnung I: Aufzinsen, Abzinsen sowie Gegenwarts- und Endwerte",
        body: "Dieser Stoffblock macht Zahlungsstroeme ueber die Zeit vergleichbar. Im Mittelpunkt stehen Aufzinsung, Abzinsung, variable Zinssaetze sowie die Unterscheidung von Gegenwartswert, Barwert und Endwert.",
        sources: ["V6_StudIP.pdf"]
      },
      {
        title: "Dynamische Investitionsrechnung II: Rentenfaktoren, Kapitalwertmethode und Endwertmethode",
        body: "Du arbeitest mit Rentenbarwert- und Rentenendwertfaktoren, leitest Kapitalwert und Endwert aus mehrperiodigen Zahlungsreihen ab und verknuepfst beides ueber den vollstaendigen Finanzplan.",
        sources: ["V7_StudIP.pdf"]
      },
      {
        title: "Dynamische Investitionsrechnung III: Interner Zinsfuss und Kapitalwertfunktion",
        body: "Hier steht der interne Zinsfuss im Mittelpunkt: Nullstellen der Kapitalwertfunktion, grafische Kapitalwertprofile und die Frage, wann der IZF als Entscheidungsregel funktioniert.",
        sources: ["V8_StudIP.pdf"]
      },
      {
        title: "Interner Zinsfuss: Interpretation, Wiederanlagepraemisse und Grenzen",
        body: "Du schaust dir an, wie der interne Zinsfuss als Rendite auf gebundenes Kapital gelesen wird und welche Probleme durch Wiederanlagepraemissen, Skalierbarkeit und Vergleich unterschiedlich grosser Projekte entstehen.",
        sources: ["V9_StudIP.pdf"]
      },
      {
        title: "Entscheidungsprobleme unter Unsicherheit",
        body: "Dieser Block fuehrt das Grundmodell von Alternativen, Umweltzustaenden, Ergebnissen und Wahrscheinlichkeiten ein. Du uebst Dominanz als Vorauswahl, Erwartungswert, Verlustwahrscheinlichkeit und den Uebergang zu risikoadjustierten Kapitalwertregeln mit Risikozuschlag oder Sicherheitsaequivalent.",
        sources: ["V9_StudIP.pdf"]
      },
      {
        title: "Finanzierungskosten des Eigenkapitals: Aktienausgabe, Kapitalerhoehung und Bezugsrecht",
        body: "Dieser Block behandelt die Kosten des Eigenkapitals bei Kapitalerhoehungen: Primaer- versus Sekundaermarkt, neue und alte Aktionaere, neuer Boersenkurs, Bezugsverhaeltnis und Wert des Bezugsrechts.",
        sources: ["V10_StudIP.pdf"]
      },
      {
        title: "Finanzierungskosten von Eigen- und Fremdkapital: Dividendenbarwertmodell, Kredite und Skonto",
        body: "Du leitest Eigenkapitalkosten aus Aktienpreisen und erwarteten Dividenden ab, arbeitest mit dem Dividendenbarwertmodell und bestimmst Fremdkapitalkosten ueber interne Zinsfuesse, Lieferantenkredit, Skonto und Ausfallrisiko.",
        sources: ["V11_StudIP.pdf"]
      },
      {
        title: "Kapitalstruktur, Gesamtkapitalkosten und Leverage",
        body: "Zum Schluss analysierst du, wie Verschuldung Eigenkapitalrendite und Risiko veraendert, wie Gesamtkapitalkosten gewichtet werden und warum die Modigliani-Miller-Irrelevanzthese nur unter starken Marktannahmen gilt.",
        sources: ["V11_StudIP.pdf", "V12_StudIP.pdf"]
      }
    ],
    practice: [
      {
        title: "MC- und Kurzfalltraining zu traditioneller und moderner Betrachtungsweise",
        body: "Trainiere typische Klausurfragen zu Liquiditaet, Fristenstruktur, Kapitalmarktlogik, Praeferenzen und Entscheidungsregeln. Wichtig ist nicht nur der richtige Begriff, sondern die passende finanzwirtschaftliche Begruendung.",
        sources: ["V2_StudIP.pdf", "V3_StudIP.pdf", "V4_StudIP.pdf", "V5_StudIP.pdf"]
      },
      {
        title: "Investitionsrechnung I: Budget, Kapitalwert und dynamische Zahlungsreihen",
        body: "Uebe den Wechsel zwischen Budgetgerade, Kapitalwert, Endwert und vollstaendigem Finanzplan systematisch: Zahlungsreihe lesen, Bezugszeitpunkt setzen, Regel anwenden und die Entscheidung wirtschaftlich deuten.",
        sources: ["V4_StudIP.pdf", "V5_StudIP.pdf", "V6_StudIP.pdf", "V7_StudIP.pdf"]
      },
      {
        title: "Investitionsrechnung II: IZF, Unsicherheit und risikoadjustierte Entscheidung",
        body: "Bearbeite klausurnahe Aufgaben zu Kapitalwertprofil, internem Zinsfuss, Dominanz, Erwartungswert, Verlustwahrscheinlichkeit und der Frage, wie sich Risiko sauber in die Entscheidungsregel einbauen laesst.",
        sources: ["V8_StudIP.pdf", "V9_StudIP.pdf"]
      },
      {
        title: "Finanzierungskosten, Kapitalstruktur und Leverage-Drill",
        body: "Bearbeite klausurnahe Aufgaben zu Kapitalerhoehung, Bezugsrecht, Aktienbewertung, Fremdkapitalkosten, Kapitalstruktur und den Ertrags-Risiko-Effekten von Verschuldung.",
        sources: ["V10_StudIP.pdf", "V11_StudIP.pdf", "V12_StudIP.pdf"]
      }
    ],
    qualityNotes: [
      "Die Portalstruktur folgt dem tatsaechlichen Vorlesungsbogen vom Kursauftakt ueber Investitionsrechnung und Unsicherheit bis zur Kapitalstruktur und vermeidet pauschale Sammelkapitel.",
      "Aufgaben und Exam-Drills werden aus den im Kurs gezeigten Entscheidungsproblemen, Rechenbeispielen und MC-nahen Fragelogiken entwickelt."
    ]
  },
  "internationale-wirtschaftsbeziehungen": {
    stageLabel: "Live-Portal",
    sourceMethod: "Internationale Handelstheorie, Handelspolitik und offene Makrooekonomik entlang der Vorlesungsreihe IntWB1-12 aufgebaut.",
    coverageStatus: "Der Schwerpunkt liegt auf Modelllogik, Politikfolgen, Wechselkursmechanismen und klausurnaher Transferfaehigkeit zwischen Handel und Makrooekonomik.",
    portalGoal: "Das Portal fuehrt von Handelsfakten ueber Ricardo, Heckscher-Ohlin und Handelspolitik bis zu Wechselkursen, Kaufkraftparitaet, Overshooting und Trilemma.",
    audit: [
      { label: "Theoriebloecke", value: "12 Kapitel" },
      { label: "Teilstruktur", value: "Handel + offene Makro" },
      { label: "Politikfaelle", value: "Zoelle, Sanktionen, Brexit" },
      { label: "Makrokern", value: "UIP, KKP, Trilemma" }
    ],
    sourceGroups: [
      {
        title: "Vorlesungslogik",
        body: "Die Vorlesungsreihe beginnt mit Handelsfakten und Erklaerungsmodellen, geht in Handelspolitik ueber und schliesst mit Wechselkursen und offener Makrooekonomik.",
        sources: ["Vorlesungsfolien/IntWB1.pdf bis IntWB12.pdf"]
      },
      {
        title: "Anwendungs- und Literaturkontext",
        body: "Zusaetzliche Literatur vertieft Zollpolitik, WTO-Entwicklungen, Intra-Industry-Trade und aktuelle Handelskonflikte.",
        sources: [
          "Zusaetzliche_Literatur/Bruelhart_WE2009.pdf",
          "Zusaetzliche_Literatur/World_Trade_Statistical_Review_2023.pdf",
          "Zusaetzliche_Literatur/GlobalTradeOutlook_Okt2024.pdf",
          "Zusaetzliche_Literatur/GlobalTradeOutlook_Okt2025.pdf",
          "Zusaetzliche_Literatur/State_of_U.S._Tariffs_September_26,_2025__The_Budget_Lab_at_Yale.pdf",
          "Zusaetzliche_Literatur/US-China_Trade_War_Tariffs_An_Up-to-Date_Chart__PIIE.pdf"
        ]
      }
    ],
    roadmap: [
      {
        title: "Kursauftakt, Handelsfakten und Grundfragen",
        body: "Zum Einstieg klaerst du, warum internationaler Handel politisch aufgeladen ist, welche Missverstaendnisse die Debatte praegen und wie der Kurs in Handel und internationale Makrooekonomik gegliedert ist.",
        sources: ["Vorlesungsfolien/IntWB1.pdf"]
      },
      {
        title: "Ricardo-Modell, Opportunitaetskosten und komparative Vorteile",
        body: "Dieser Block behandelt Handel aufgrund von Technologieunterschieden: Opportunitaetskosten, komparativer Vorteil, absolute Vorteile und die Gewinne aus Handel im Ricardo-Modell.",
        sources: ["Vorlesungsfolien/IntWB2.pdf"]
      },
      {
        title: "Heckscher-Ohlin, Faktorausstattungen und Verteilungseffekte",
        body: "Hier lernst du, wie Unterschiede in der relativen Faktorausstattung Handel erklaeren, warum PPFs konkav werden und weshalb Handel Gewinner und Verlierer innerhalb von Laendern hervorbringen kann.",
        sources: ["Vorlesungsfolien/IntWB3.pdf"]
      },
      {
        title: "Intraindustrieller Handel, Krugman-Modell und Gravitationsgleichung",
        body: "Du arbeitest heraus, warum aehnliche Laender aehnliche Gueter gleichzeitig importieren und exportieren, wie Produktdifferenzierung und Marktmacht Handel erzeugen und was die Gravitationsgleichung empirisch erklaert.",
        sources: ["Vorlesungsfolien/IntWB4.pdf", "Zusaetzliche_Literatur/Bruelhart_WE2009.pdf"]
      },
      {
        title: "Handelspolitik I: Partialmodell und Importzoelle",
        body: "Im Mittelpunkt stehen Wohlfahrt im Partialmodell, Importnachfrage, Gewinne aus Freihandel sowie die Wirkung von Importzoellen im kleinen und grossen Land.",
        sources: ["Vorlesungsfolien/IntWB5.pdf"]
      },
      {
        title: "Handelspolitik II: Sanktionen, diskriminierende Zoelle und Importquoten",
        body: "Dieser Block verbindet die Grundanalyse aus dem Tarifmodell mit aktuellen Politikfaellen wie Russland-Sanktionen, diskriminierenden Zoellen und Quoten.",
        sources: ["Vorlesungsfolien/IntWB6.pdf"]
      },
      {
        title: "Multilaterale Handelsabkommen, Freihandelszonen, Zollunionen und Brexit",
        body: "Du analysierst, warum kooperative Zollsetzung sinnvoll sein kann, wie WTO und MFN-Prinzip funktionieren und worin sich Freihandelsabkommen, Zollunionen und Brexit-Folgen unterscheiden.",
        sources: ["Vorlesungsfolien/IntWB7.pdf"]
      },
      {
        title: "Globale Makrooekonomik, Wechselkurssysteme und Waehrungskrisen",
        body: "Der Makroteil beginnt mit der Rolle fixer und flexibler Wechselkurse, der Einordnung von Waehrungskrisen und der Frage, wie relative Preise in offenen Volkswirtschaften kurz- und langfristig bestimmt werden.",
        sources: ["Vorlesungsfolien/IntWB8.pdf"]
      },
      {
        title: "Ungedeckte Zinsparitaet, Gesetz des einheitlichen Preises und Kaufkraftparitaet",
        body: "Hier stehen UIP, erwartete Wechselkursaenderungen, das Gesetz des einheitlichen Preises sowie absolute und relative Kaufkraftparitaet im Zentrum.",
        sources: ["Vorlesungsfolien/IntWB9.pdf"]
      },
      {
        title: "Quantitaetstheorie, Geldmengenwachstum, Fisher-Effekt und reale Zinsparitaet",
        body: "Du leitest langfristige Preisniveaus und Wechselkurse ueber Geldmarktgleichgewichte ab und verbindest Geldmengenwachstum, Inflation, nominale Zinssaetze und reale Zinsparitaet.",
        sources: ["Vorlesungsfolien/IntWB10.pdf"]
      },
      {
        title: "Kurzfristige Wechselkurse, Finanzmarktansatz und Overshooting",
        body: "Dieser Stoffblock zeigt, wie Wechselkurse kurzfristig ueber Finanzmarktgleichgewichte, Zinsdifferenziale und Erwartungen bestimmt werden und warum ueberschiessende Wechselkurse entstehen koennen.",
        sources: ["Vorlesungsfolien/IntWB11.pdf"]
      },
      {
        title: "Trilemma der Waehrungspolitik und Balassa-Samuelson",
        body: "Zum Schluss analysierst du, warum fixer Wechselkurs, Kapitalmobilitaet und unabhaengige Geldpolitik nicht gleichzeitig erreichbar sind und wie Balassa-Samuelson systematische Abweichungen von der Kaufkraftparitaet erklaert.",
        sources: ["Vorlesungsfolien/IntWB12.pdf"]
      }
    ],
    practice: [
      {
        title: "Modell- und Diagrammtraining zum internationalen Handel",
        body: "Trainiere Ricardo, Heckscher-Ohlin, intraindustriellen Handel und die wichtigsten Diagramme so, dass du Annahmen, Handelsmuster und Wohlfahrtsfolgen ohne Rechenspruenge erklaeren kannst.",
        sources: ["Vorlesungsfolien/IntWB2.pdf", "Vorlesungsfolien/IntWB3.pdf", "Vorlesungsfolien/IntWB4.pdf"]
      },
      {
        title: "Politik- und Institutionsfaelle zu Zoellen, Sanktionen und Abkommen",
        body: "Bearbeite klausurnahe Transferfragen zu WTO-Regeln, Sanktionen, diskriminierenden Zoellen, Freihandelsabkommen, Zollunionen und Brexit.",
        sources: [
          "Zusaetzliche_Literatur/State_of_U.S._Tariffs_September_26,_2025__The_Budget_Lab_at_Yale.pdf",
          "Zusaetzliche_Literatur/US-China_Trade_War_Tariffs_An_Up-to-Date_Chart__PIIE.pdf",
          "Zusaetzliche_Literatur/GlobalTradeOutlook_Okt2024.pdf",
          "Zusaetzliche_Literatur/GlobalTradeOutlook_Okt2025.pdf"
        ]
      },
      {
        title: "Wechselkurs- und Makrodrill",
        body: "Uebe UIP, Kaufkraftparitaet, Quantitaetstheorie, Fisher-Effekt, Overshooting und Trilemma als verbundenen Makroblock mit Fokus auf Richtung, Vorzeichen und Interpretation.",
        sources: ["Vorlesungsfolien/IntWB8.pdf", "Vorlesungsfolien/IntWB9.pdf", "Vorlesungsfolien/IntWB10.pdf", "Vorlesungsfolien/IntWB11.pdf", "Vorlesungsfolien/IntWB12.pdf"]
      }
    ],
    qualityNotes: [
      "Die Portalstruktur folgt jetzt der echten Zwolf-Vorlesungs-Sequenz statt vier Sammelkapiteln und trennt Handel, Politik und internationale Makrooekonomik sauber.",
      "Aufgaben und Exam-Drills muessen zwischen Modelllogik, Politikfolgen und Wechselkursintuition unterscheiden, statt den Stoff pauschal zusammenzufassen.",
      "JS-Schluessel ist als String `\"internationale-wirtschaftsbeziehungen\"` gesetzt, weil der Slug Bindestriche enthaelt (Zugriff nur ueber `getModuleContent(slug)` mit gleichem String).",
      "Pfade in `sourceGroups`/`roadmap` sind relativ zum Kursordner `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/` (doppelte Ordnerebene wie bei anderen ZIP-Entpackungen).",
      "Es gibt kein `internationale-wirtschaftsbeziehungen/js/data/contentManifest.js`; diese Datei ist Landing-/Quellen-Narrativ, kein Ersatz fuer laufzeitseitige Primaerrefs pro Lernobjekt."
    ]
  },
  jahresabschluss: {
    stageLabel: "Kursportal",
    sourceMethod: "Zusammengestellt aus Kapitel-PDFs, passenden Tutoriumsdateien, Zusammenfassungen und dem Probeklausurpaket im Jahresabschlussordner.",
    coverageStatus: "Der aktuelle Quellstand ist auf Kapitel-Ebene ungewoehnlich komplett und enthaelt sowohl Tutoriums- als auch Klausurmaterial.",
    portalGoal: "Diese Modulseite funktioniert nun als accounting-spezifisches Live-Portal fuer Bilanz, Kontierung, Bewertungslogik und exam-nahe Abschlussrechnungen.",
    audit: [
      { label: "Kapitel", value: "1-10" },
      { label: "Tutorium", value: "1-10" },
      { label: "Zusammenfassungen", value: "9 PDFs" },
      { label: "Probeklausur", value: "mit Musterloesung" }
    ],
    sourceGroups: [
      {
        title: "Kapitelreihe",
        body: "Die Vorlesungsbasis reicht von Orga+Kapitel1 ueber Kapitel2-10 bis zu den beiden Teildateien fuer Kapitel 6.",
        sources: [
          "Orga+Kapitel1.pdf",
          "Kapitel2.pdf bis Kapitel5.pdf",
          "Kapitel6.1-6.5.pdf und Kapitel6.6-6.7.pdf",
          "Kapitel7.pdf bis Kapitel10.pdf"
        ]
      },
      {
        title: "Tutorium und Zusammenfassungen",
        body: "Fuer jedes Kapitel liegt ein eigenes Tutorium vor; dazu kommen verdichtete Zusammenfassungen von VL1/2 bis VL10.",
        sources: [
          "Tutorium/Tutorium_Kapitel1.pdf bis Tutorium_Kapitel10.pdf",
          "Zusammenfassungen/Jahresabschluss VL1_2.pdf bis VL10.pdf"
        ]
      },
      {
        title: "Klausurvorbereitung",
        body: "Die Probeklausur mit Musterloesung eignet sich fuer komplette Pruefungssimulation; das Leerschema hilft zusaetzlich bei aktiver Rekonstruktion von Buchungs- und Abschlusslogik.",
        sources: [
          "Probeklausur/Probeklausur_JA.pdf",
          "Probeklausur/Probeklausur_Jahresabschluss.pdf",
          "Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf",
          "JA - empty.pdf"
        ]
      }
    ],
    roadmap: [
      {
        title: "Einfuehrung in das betriebliche Rechnungswesen und Erfolgsermittlung",
        body: "Kapitel 1 fuehrt in Zwecke, Adressaten und Teilbereiche des Rechnungswesens ein und legt Bilanzgleichung, Erfolgsermittlung und die drei Ebenen des Erfolgs als Fundament des gesamten Kurses.",
        sources: ["Orga+Kapitel1.pdf", "Zusammenfassungen/Jahresabschluss VL1_2.pdf", "Tutorium/Tutorium_Kapitel1.pdf"]
      },
      {
        title: "Grundsaetze des betrieblichen Rechnungswesens, Inventur und Bilanzansatz",
        body: "Kapitel 2 behandelt GoB, Inventur, Inventar, Bilanz und die Ansatzlogik fuer Vermoegensgegenstaende, Schulden und Bilanzierungswahlrechte.",
        sources: ["Kapitel2.pdf", "Zusammenfassungen/Jahresabschluss VL1_2.pdf", "Tutorium/Tutorium_Kapitel2.pdf"]
      },
      {
        title: "Buchen auf Bestands- und Erfolgskonten",
        body: "Kapitel 3 entwickelt Erfassungstechnik, doppelte Buchfuehrung, bilanzielle Wertbewegungen und die Rolle der Erfolgskonten als Kern aller spaeteren Buchungssaetze.",
        sources: ["Kapitel3.pdf", "Zusammenfassungen/Jahresabschluss VL3.pdf", "Tutorium/Tutorium_Kapitel3.pdf"]
      },
      {
        title: "Organisation der Buchfuehrung, Handelsbuecher und Belege",
        body: "Kapitel 4 ordnet Grundbuch, Hauptbuch, Nebenbuecher, Kontenrahmen, Kontenplan und Belegorganisation als organisatorische Basis einer ordnungsgemaessen Buchfuehrung.",
        sources: ["Kapitel4.pdf", "Zusammenfassungen/Jahresabschluss VL4.pdf", "Tutorium/Tutorium_Kapitel4.pdf"]
      },
      {
        title: "Anlagevermoegen und Abschreibungen",
        body: "Kapitel 5 behandelt die Abgrenzung des Anlagevermoegens, planmaessige und ausserplanmaessige Abschreibungen, Zuschreibungen und die Veraeusserung von Anlageguetern.",
        sources: ["Kapitel5.pdf", "Zusammenfassungen/Jahresabschluss VL5.pdf", "Tutorium/Tutorium_Kapitel5.pdf"]
      },
      {
        title: "Umlaufvermoegen I: Grundlagen, Bewertungsverfahren und Werkstoffbuchungen",
        body: "Der erste Teil von Kapitel 6 behandelt die Abgrenzung von Umlauf- und Anlagevermoegen, Bewertungsvereinfachungsverfahren, Werkstoffbuchungen sowie unfertige und fertige Erzeugnisse.",
        sources: ["Kapitel6.1-6.5.pdf", "Zusammenfassungen/Jahresabschluss VL6.pdf", "Tutorium/Tutorium_Kapitel6.pdf"]
      },
      {
        title: "Umlaufvermoegen II: Waren und Umsatzsteuer",
        body: "Der zweite Teil von Kapitel 6 fokussiert Handelswaren, Warenkontensysteme, Vorsteuer/Umsatzsteuer, Zahllast und die typischen Korrekturen bei Preisnachlaessen und Skonti.",
        sources: ["Kapitel6.6-6.7.pdf", "Zusammenfassungen/Jahresabschluss VL6.pdf", "Tutorium/Tutorium_Kapitel6.pdf"]
      },
      {
        title: "Eigenkapital in Kapital- und Personengesellschaften",
        body: "Kapitel 7 arbeitet die Gliederung des Eigenkapitals, Ruecklagen, Ergebnisverwendung und die Unterschiede zwischen Kapital- und Personengesellschaften heraus.",
        sources: ["Kapitel7.pdf", "Zusammenfassungen/Jahresabschluss VL7.pdf", "Tutorium/Tutorium_Kapitel7.pdf"]
      },
      {
        title: "Fremdkapital: Verbindlichkeiten und Rueckstellungen",
        body: "Kapitel 8 behandelt die Abgrenzung von Verbindlichkeiten und Rueckstellungen, Bewertungsregeln, Fremdwaehrungsverbindlichkeiten und typische Rueckstellungsfaelle.",
        sources: ["Kapitel8.pdf", "Zusammenfassungen/Jahresabschluss VL8.pdf", "Tutorium/Tutorium_Kapitel8.pdf"]
      },
      {
        title: "Rechnungsabgrenzung",
        body: "Kapitel 9 fokussiert die periodengerechte Erfolgsermittlung ueber transitorische und antizipative Rechnungsabgrenzung sowie die saubere Unterscheidung zu sonstigen Forderungen und Verbindlichkeiten.",
        sources: ["Kapitel9.pdf", "Zusammenfassungen/Jahresabschluss VL9.pdf", "Tutorium/Tutorium_Kapitel9.pdf"]
      },
      {
        title: "Erfolgsrechnung mit GKV und UKV",
        body: "Kapitel 10 vergleicht Gesamtkostenverfahren und Umsatzkostenverfahren, behandelt Herstellkosten nach § 255 HGB und fuehrt die Erfolgsrechnung zum Jahresueberschuss zusammen.",
        sources: ["Kapitel10.pdf", "Zusammenfassungen/Jahresabschluss VL10.pdf", "Tutorium/Tutorium_Kapitel10.pdf"]
      }
    ],
    practice: [
      {
        title: "Kapitelgenaues Tutorium",
        body: "Zu jedem Kapitel gibt es klausurnahe Aufgaben, Kontierungen und Bewertungsfragen. Damit bildet dieser Block den Kern des exam-level Trainings.",
        sources: ["Tutorium/Tutorium_Kapitel1.pdf bis Tutorium_Kapitel10.pdf"]
      },
      {
        title: "Zusammenfassungen und Checklisten",
        body: "Die Zusammenfassungen zu VL1/2 bis VL10 verdichten Definitionen, Schemata, Bewertungsregeln und typische Klausurfallen zu kompakten Wiederholungsbausteinen.",
        sources: ["Zusammenfassungen/Jahresabschluss VL1_2.pdf bis VL10.pdf"]
      },
      {
        title: "Probeklausur und Leerschema",
        body: "Die Probeklausur mit Musterloesung und Leerschema eignet sich fuer komplette Pruefungssimulation, Schema-Rekonstruktion und saubere Nachbereitung von Fehlern.",
        sources: ["Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf", "JA - empty.pdf"]
      }
    ],
    qualityNotes: [
      "Die Stofflinie bleibt direkt an den Kapiteldateien orientiert, wird aber mit den aus den Zusammenfassungen gesicherten Themenbezeichnungen studentisch lesbar gemacht.",
      "Jahresabschluss gehoert zu den Modulen mit der besten Kapitel-Tutorium-Klausur-Abdeckung im aktuellen Materialstand."
    ]
  },
  recht: {
    stageLabel: "Kursportal",
    sourceMethod: "Zusammengestellt aus den 12 paragrafnummerierten Vorlesungs-PDFs sowie Uebungseinheiten, Fallskript, Definitionsuebersichten und Methodikmaterial im Rechtordner.",
    coverageStatus: "Der aktuelle Quellstand verbindet eine vollstaendige Zivilrechtslinie von § 1 bis § 12 mit fallbasierter Praxis, Definitionshilfen und echtem Gutachtenstil-Material.",
    portalGoal: "Die Modulseite verhaelt sich nun wie ein echtes juristisches Live-Portal fuer Definition, Anspruchsaufbau, Subsumtion und klausurnahe Fallbearbeitung.",
    audit: [
      { label: "Vorlesungen", value: "12 Einheiten" },
      { label: "Uebung", value: "1-5 + Fallskript" },
      { label: "Hilfen", value: "Definitionen + Methodik" },
      { label: "Format", value: "Text + Fall" }
    ],
    sourceGroups: [
      {
        title: "Vorlesungsreihe",
        body: "Die Vorlesungen folgen Paragraf 1 bis 12 und reichen von Rechtsbegriff und Methodik bis zu Schadenersatz und Ruecktritt.",
        sources: [
          "Vorlesungen/Paragraf_1_Was_ist_Recht.pdf bis Paragraf_12_Schuldrecht_AT_Ruecktritt_und_Verbraucher-Widerruf.pdf"
        ]
      },
      {
        title: "Uebung und Fallmaterial",
        body: "Die Uebungseinheiten 1-5, das Fallskript und dessen aktualisierte Version liefern klausurnahe Kurzfaelle statt abstrakter Zusammenfassungen.",
        sources: [
          "Uebungen/SoSe2025_Einheit_1.pdf",
          "Uebungen/SoSe_5.5.2025_2._Einheit.pdf",
          "Uebungen/SoSe_2025_Einheit_3.pdf",
          "Uebungen/SoSe_2025_Einheit_4.pdf",
          "Uebungen/5._Einheit__SoSe2025__26.5.2025.pdf",
          "Uebungen/Fallskript_SoSe2025.pdf",
          "Uebungen/Fallskript_SoSe2025_aktualisiert.pdf"
        ]
      },
      {
        title: "Methoden- und Definitionshilfen",
        body: "Definitionen, Gutachtenstil und zusaetzliche Fallartikel staerken Begriffsicherheit, Argumentationslogik und saubere Subsumtion.",
        sources: [
          "Uebungen/Uebersicht_Definitionen.pdf",
          "Uebungen/Juristische_Gliederungsebenen_im_Gutachten.pdf",
          "Uebungen/Ipsen_Rehder_ZJS_2023_751.pdf",
          "Uebungen/Lorenz_JuS_2019_852.pdf",
          "Uebungen/Thum_JuS_2014_418.pdf"
        ]
      }
    ],
    roadmap: [
      {
        title: "Was ist Recht?",
        body: "Die erste Einheit klaert Rechtsbegriff, Rechtsquellen und die grundlegende Funktion des Rechts fuer verbindliche gesellschaftliche Ordnung.",
        sources: ["Vorlesungen/§_1_Was_ist_Recht-K.pdf"]
      },
      {
        title: "Privatrecht",
        body: "Die zweite Einheit ordnet das Privatrecht innerhalb der Rechtsordnung ein und markiert die Grundstruktur des BGB als Arbeitsgrundlage fuer spaetere Anspruchspruefungen.",
        sources: ["Vorlesungen/§_2_Privatrecht-K.pdf"]
      },
      {
        title: "Juristische Methodik",
        body: "Diese Einheit fuehrt in Anspruchsgrundlagen, Normarbeit, Subsumtion und Gutachtenstil ein und schafft damit die zentrale Arbeitsweise fuer den gesamten Kurs.",
        sources: ["Vorlesungen/§_3_Juristische_Methodik-K.pdf", "Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf"]
      },
      {
        title: "Willenserklaerung und Vertragsschluss",
        body: "Im Zentrum stehen Willenserklaerung, Angebot, Annahme, Zugang und die saubere Herleitung des Zustandekommens eines Vertrages.",
        sources: ["Vorlesungen/§_4_Willenserklärung,_Vertragsschluss-K.pdf", "Übungen/SoSe_5.5.2025_2._Einheit.pdf", "Übungen/Übersicht_Definitionen.pdf"]
      },
      {
        title: "Dissens und Anfechtung",
        body: "Die Einheit behandelt Dissens, Anfechtungsgruende, Anfechtungserklaerung, Fristen und die Rechtsfolgen der Anfechtung als klassische Klausurmaterie.",
        sources: ["Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf", "Übungen/SoSe_2025_Einheit_3.pdf"]
      },
      {
        title: "Verpflichtungs- und Verfuegungsgeschaefte",
        body: "Hier geht es um das Trennungs- und Abstraktionsprinzip und die saubere Trennung zwischen schuldrechtlicher Verpflichtung und dinglicher Rechtsaenderung.",
        sources: ["Vorlesungen/§_6_Verpflichtungs-_und_Verfügungsgeschäfte-K.pdf", "Übungen/SoSe_2025_Einheit_3.pdf"]
      },
      {
        title: "Rechts- und Geschaeftsfaehigkeit",
        body: "Die Einheit ordnet Rechtsfaehigkeit und Geschaeftsfaehigkeit ein und behandelt die Regeln zur beschraenkten Geschaeftsfaehigkeit als zentralen Fallstoff.",
        sources: ["Vorlesungen/§_7_Rechts-_und_Geschäftsfähigkeit-K.pdf", "Übungen/SoSe_2025_Einheit_3.pdf", "Übungen/_Einheit_3_Übersicht_beschr._Geschäftsfähigkeit.pdf"]
      },
      {
        title: "Stellvertretung",
        body: "Die Stellvertretungseinheit fokussiert Vertretungsmacht, Handeln im fremden Namen und die Zurechnung von Willenserklaerungen ueber Dritte.",
        sources: ["Vorlesungen/§_8_Stellvertretung-K.pdf"]
      },
      {
        title: "AGB-Recht",
        body: "Dieser Block behandelt Einbeziehung, Inhaltskontrolle und typische Klausurprobleme des AGB-Rechts im Massengeschaeft.",
        sources: ["Vorlesungen/§_9_AGB-Recht-K.pdf"]
      },
      {
        title: "Schuldrecht AT: Einfuehrung",
        body: "Die Einfuehrung in den Allgemeinen Teil des Schuldrechts ordnet Schuldverhaeltnisse, Leistungspflichten und Grundbegriffe des vertraglichen Anspruchsdenkens.",
        sources: ["Vorlesungen/§_10_Schuldrecht_AT_-_Einführung-K.pdf"]
      },
      {
        title: "Schuldrecht AT: Schadenersatz",
        body: "Die Schadenersatzeinheit behandelt Pflichtverletzung, Vertretenmuessen und die pruefungsrelevante Herleitung von Ersatzanspruechen.",
        sources: ["Vorlesungen/§_11_Schuldrecht_AT_-_Schadenersatz-K.pdf"]
      },
      {
        title: "Schuldrecht AT: Ruecktritt und Verbraucherwiderruf",
        body: "Zum Abschluss folgen Ruecktritt und Verbraucherwiderruf mit Voraussetzungen, Rechtsfolgen und der klausurtypischen Abgrenzung beider Institute.",
        sources: ["Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf"]
      }
    ],
    practice: [
      {
        title: "Einheit 1-5 als Fallspur",
        body: "Die Uebungseinheiten bauen den Stoff als echte Fallbearbeitung auf: Anspruchsgrundlagen, Vertragsschluss, Anfechtung, Trennungsprinzip und Geschaeftsfaehigkeit werden ueber konkrete Faelle geuebt.",
        sources: [
          "Uebungen/SoSe2025_Einheit_1.pdf",
          "Uebungen/SoSe_5.5.2025_2._Einheit.pdf",
          "Uebungen/SoSe_2025_Einheit_3.pdf",
          "Uebungen/SoSe_2025_Einheit_4.pdf",
          "Uebungen/5._Einheit__SoSe2025__26.5.2025.pdf"
        ]
      },
      {
        title: "Fallskript und Definitionen",
        body: "Das Fallskript, die aktualisierte Fassung und die Definitionsuebersicht liefern die beste Basis fuer issue-spotting, Standarddefinitionen und saubere Subsumtion unter Zeitdruck.",
        sources: ["Uebungen/Fallskript_SoSe2025.pdf", "Uebungen/Fallskript_SoSe2025_aktualisiert.pdf", "Uebungen/Uebersicht_Definitionen.pdf"]
      },
      {
        title: "Gutachtenstil und Zusatzfaelle",
        body: "Die Gutachtenstil-Hilfe und die zusaetzlichen Aufsatzfaelle eignen sich fuer strukturierte Aufbaufragen, Anspruchsreihenfolgen und Wiederholung anspruchsnaher Problemlagen.",
        sources: ["Uebungen/Juristische_Gliederungsebenen_im_Gutachten.pdf", "Uebungen/Koerber_JuS_2008_289.pdf"]
      }
    ],
    qualityNotes: [
      "Die Stofflinie folgt der realen Reihenfolge der §-Vorlesungen 1 bis 12 statt einer groben Sammelkategorie.",
      "Recht wird im Portal bewusst nicht graphisch ueberdehnt, sondern entlang von Definition, Merkmal, Anspruchsaufbau, Fall und Subsumtion aufbereitet."
    ]
  },
  r: {
    stageLabel: "Live-Portal",
    sourceMethod: "Aufgebaut aus den zehn R-Skripten E1 bis AN3, LearnR/phase3.R und der gemeinsamen CSV-Sammlung des R-Moduls.",
    coverageStatus: "Das Modul deckt R-Basics, Plotten, Matrixrechnung, numerische Analysis, Optimierung und datensatzbasierte Auswertung in einem durchgaengigen Coding-Pfad ab.",
    portalGoal: "Das Portal soll als eigenstaendiger R-Kurs funktionieren: Syntax verstehen, Skriptlogik reproduzieren, Output deuten und typische Kursaufgaben selbst coden.",
    audit: [
      { label: "R-Skripte", value: "10 Dateien" },
      { label: "LearnR", value: "phase3.R" },
      { label: "Datensaetze", value: "14+ CSV" },
      { label: "Schwerpunkte", value: "Syntax, Plot, Analysis, Optimierung" }
    ],
    sourceGroups: [
      {
        title: "Kernskripte",
        body: "Die coding-basierten Kapitel folgen der Mathematiklogik von Einstieg ueber lineare Algebra und Analysis bis zur Optimierung und zeigen, wie algebraische, analytische und optimierungsbezogene Inhalte in R umgesetzt werden.",
        sources: [
          "R-Skripte/Rcode_E1.R",
          "R-Skripte/Rcode_E2.R",
          "R-Skripte/Rcode_E3.R",
          "R-Skripte/Rcode_LA1.R",
          "R-Skripte/Rcode_LA2.R",
          "R-Skripte/Rcode_AN1.R",
          "R-Skripte/Rcode_OP1.R",
          "R-Skripte/Rcode_AN2.R",
          "R-Skripte/Rcode_OP2.R",
          "R-Skripte/Rcode_AN3.R"
        ]
      },
      {
        title: "Datensatzpraxis und Auswertung",
        body: "Dieser Block erweitert den Lernpfad um datensatzbasierte Filter-, Analyse- und Auswertungslogik mit direkt anschlussfaehigen Uebungsdaten.",
        sources: [
          "LearnR/phase3.R",
          "csv/titanic.csv, GrowthSW.csv, HousePrices.csv, Bodyfat.csv, Advertising.csv",
          "csv/IrisAnova.csv, MietspiegelGoe2001.csv, insurance.csv, customers.csv"
        ]
      }
    ],
    roadmap: [
      {
        title: "R-Einstieg: Objekte, Rechnen und Workspace",
        body: "Der Einstieg fuehrt in Zuweisung, Grundrechenarten, Vektoren, Folgen und logische Vergleiche ein. Diese Basisschritte muessen spaeter in jeder Coding-Aufgabe blind sitzen.",
        sources: ["R-Skripte/Rcode_E1.R"]
      },
      {
        title: "Funktionen, Sequenzen und 2D-Plots",
        body: "Hier wird geuebt, wie Funktionen definiert, auf Vektoren angewandt und mit plot() und lines() visualisiert werden. Dazu kommen Potenz-, Exponential- und Logarithmusbeispiele.",
        sources: ["R-Skripte/Rcode_E2.R"]
      },
      {
        title: "Summen, Vektorisierung und Datenimport",
        body: "Dieser Block verbindet Summen und Produkte mit Vektorisierung, Tabellenlogik und dem Einlesen realer Datensaetze. Genau hier beginnt die datenorientierte Seite von R.",
        sources: ["R-Skripte/Rcode_E3.R"]
      },
      {
        title: "Matrizen und Matrixprodukte in R",
        body: "Dieser Block trainiert matrix(), t(), Matrixaddition, Matrixmultiplikation, Kronecker-Produkte und Summen als Matrizenprodukte.",
        sources: ["R-Skripte/Rcode_LA1.R"]
      },
      {
        title: "Determinanten, Inverse und lineare Systeme",
        body: "Hier geht es weiter zu diag(), det(), solve(), Rangbestimmung und verschiedenen Loesungswegen fuer lineare Gleichungssysteme.",
        sources: ["R-Skripte/Rcode_LA2.R"]
      },
      {
        title: "Ableitungen, Newton und Nullstellensuche",
        body: "Dieser Block zeigt symbolische Ableitungen mit D(), numerische Ableitungen, Newton-Raphson und uniroot() fuer die Nullstellensuche.",
        sources: ["R-Skripte/Rcode_AN1.R"]
      },
      {
        title: "Multivariate Funktionen, persp() und Hesse-Matrix",
        body: "Hier werden bivariate Funktionen mit outer() aufgebaut, persp()-Darstellungen genutzt und partielle Ableitungen mit grad() und hessian() verknuepft.",
        sources: ["R-Skripte/Rcode_AN2.R"]
      },
      {
        title: "Integrale und numerische Mehrdimensionalitaet",
        body: "Dieser Block behandelt bestimmte und uneigentliche Integrale mit integrate() und fuehrt ueber cubature in numerische mehrdimensionale Integration ein.",
        sources: ["R-Skripte/Rcode_AN3.R"]
      },
      {
        title: "Univariate Optimierung mit optimise() und nlm()",
        body: "Hier wird der Standardzugriff auf eindimensionale Optimierung geuebt, inklusive Vergleich zwischen optimise() und nlm() sowie grafischer Iterationsintuition.",
        sources: ["R-Skripte/Rcode_OP1.R"]
      },
      {
        title: "Multivariate Optimierung und Restriktionen",
        body: "Dieser Optimierungsblock fuehrt von bivariater nlm()-Optimierung ueber numerische Stabilitaet bis zu restriktiver Optimierung mit der augmentierten Lagrange-Methode.",
        sources: ["R-Skripte/Rcode_OP2.R", "LearnR/phase3.R"]
      }
    ],
    practice: [
      {
        title: "Coding-Drill E1: Objekte und Logik",
        body: "Die Praxis zu E1 trainiert Zuweisung, Typen, Vektoren, Folgen und logische Ausdruecke. Genau diese Mikro-Schritte entscheiden spaeter ueber fehlerfreie Skripte.",
        sources: ["R-Skripte/Rcode_E1.R"]
      },
      {
        title: "Coding-Drill E2: Funktionen und Plot-Workflow",
        body: "Hier wird geuebt, wie Funktionen sauber geschrieben, auf Vektoren angewendet und in plot()-/lines()-Workflows ueberfuehrt werden.",
        sources: ["R-Skripte/Rcode_E2.R"]
      },
      {
        title: "Coding-Drill E3: Summen und Daten",
        body: "Die Aufgaben trainieren sum(), rowSums(), colSums(), elementweises Rechnen und den ersten Umgang mit externen Datenquellen.",
        sources: ["R-Skripte/Rcode_E3.R", "csv/titanic.csv", "csv/customers.csv"]
      },
      {
        title: "Coding-Drill LA1: Matrixoperationen",
        body: "Der Fokus liegt auf matrix(), t(), %*% und der sauberen Unterscheidung zwischen elementweiser und echter Matrixrechnung.",
        sources: ["R-Skripte/Rcode_LA1.R"]
      },
      {
        title: "Coding-Drill LA2: solve(), det() und lineare Systeme",
        body: "Die Praxis zu LA2 verlangt, Determinanten, Inversen und lineare Gleichungssysteme nicht nur mathematisch, sondern auch in den passenden R-Befehlen sicher zu beherrschen.",
        sources: ["R-Skripte/Rcode_LA2.R"]
      },
      {
        title: "Coding-Drill AN1: D(), uniroot() und Ableitungen",
        body: "Hier wird geuebt, wann symbolische Ableitung, numerische Approximation oder direkte Nullstellensuche der richtige R-Zugriff ist.",
        sources: ["R-Skripte/Rcode_AN1.R"]
      },
      {
        title: "Coding-Drill AN2: outer(), persp() und mehrdimensionale Ableitungen",
        body: "Diese Praxis verbindet Gittererzeugung, 3D-Visualisierung und multivariate Funktionslogik in klaren reproduzierbaren R-Schritten.",
        sources: ["R-Skripte/Rcode_AN2.R"]
      },
      {
        title: "Coding-Drill AN3: integrate() und numerische Flaechen",
        body: "Die Uebung trainiert numerische Integrale, uneigentliche Integrale und den Uebergang zu mehrdimensionalen numerischen Verfahren.",
        sources: ["R-Skripte/Rcode_AN3.R"]
      },
      {
        title: "Coding-Drill OP1: Eindimensionale Optimierung",
        body: "Die Aufgaben pruefen, wie Zielgroessen fuer optimise() und nlm() vorbereitet, maximiert und inhaltlich gelesen werden.",
        sources: ["R-Skripte/Rcode_OP1.R"]
      },
      {
        title: "Coding-Drill OP2: Mehrdimensionale Optimierung und Datenpraxis",
        body: "Der Abschluss verbindet mehrdimensionale Optimierung, Restriktionen und datensatzbasierte Mini-Analysen zu einer examensnahen Coding-Sequenz.",
        sources: ["R-Skripte/Rcode_OP2.R", "LearnR/phase3.R", "csv/titanic.csv", "csv/GrowthSW.csv"]
      }
    ],
    qualityNotes: [
      "Das R-Portal ist jetzt als eigenstaendige Kursseite organisiert und nicht mehr nur als Verteiler zu anderen Modulen beschrieben.",
      "Die Struktur folgt den realen Skripten und verbindet deren Logik direkt mit uebbaren Coding- und Datensatzaufgaben."
    ]
  },
  "politisches-system-brd": {
    stageLabel: "Kursportal",
    sourceMethod: "Zusammengestellt aus den Sitzungs-PDFs, der archive_filelist, der Klausur-FAQ und den voll ausgearbeiteten CSV-Decks im BRD-Ordner.",
    coverageStatus: "Der aktuelle Quellstand verbindet eine vollstaendige Sitzungslinie mit wiederverwendbaren CSV-Kartendecks und einer expliziten Klausur-FAQ.",
    portalGoal: "Diese Modulseite funktioniert nun als textorientiertes Live-Portal mit sauberer Institutions-, Prozess- und Vergleichslogik.",
    audit: [
      { label: "Sitzungen", value: "13 PDFs" },
      { label: "CSV-Decks", value: "11 Dateien" },
      { label: "Klausurinfo", value: "FAQ vorhanden" },
      { label: "Format", value: "Text + Karten" }
    ],
    sourceGroups: [
      {
        title: "Vorlesungssitzungen",
        body: "Die Reihe deckt Einleitung, Institutionen, Wahlen, Parteien, Verbaende, politische Kultur, Medien, Policymaking und Deutschlands Aussenbezug ab.",
        sources: [
          "Sitzung_1_Einleitung_und_Ueberblick/Vorlesung_Einfuehrung_BRD_Goettingen_WS_2025.pdf",
          "Sitzung_2_Der_Bundestag/2_Der_Bundestag.pdf",
          "Sitzung_4_Die_Bundesregierung/3_Bundesregierung.pdf",
          "Sitzung_5_Bundesrat/4_Bundesrat.pdf",
          "Sitzung_6_Bundeslaender_und_Kommunen/5_Bundeslaender_und_Kommunen.pdf",
          "Sitzung_7_Grundgesetz_und_Bundesverfassungsgericht/6_Grundgesetz_und_BVerfG.pdf",
          "Sitzung_8_Wahlsystem_Waehler_und_Wahlverhalten/7_Wahlsystem_Waehler_Wahlverhalten.pdf",
          "Sitzung_9_Parteien_und_Parteiensystem/8_Parteien_und_Parteiensysteme.pdf",
          "Sitzung_10_Verbaende_und_Interessenvermittlung/9_Verbaende_und_Interessenvermittlung.pdf",
          "Sitzung_11_Politische_Kultur_Protest_Partizipation/10_Politische_Kultur_Protest_Partizipation.pdf",
          "Sitzung_12_Mediendemokratie/11_Mediendemokratie.pdf",
          "Sitzung_13_Policymaking_in_Deutschland/12_Policymaking_in_Deutschland.pdf",
          "Sitzung_14_Deutschland_in_Europa_und_der_Welt/13_Deutschland_in_Europa_und_der_Welt.pdf"
        ]
      },
      {
        title: "Aktive Wiederholungsbasis",
        body: "Fuer mehrere Kapitel gibt es kurze Karten- und Schnellfrageformate, die sich fuer Flashcards, Vergleichstabellen und schnelle Wiederholung eignen.",
        sources: [
          "Bundestag_Anki.csv",
          "Bundesregierung_Kapitel2_full.csv",
          "Bundesrat_Kapitel3_full.csv",
          "Bundeslaender_Kapitel4_full.csv",
          "Grundgesetz_BVerfG_Kapitel5_full.csv",
          "Kapitel6_Wahlsystem_Wahlverhalten_full.csv",
          "Kapitel7_Parteien_Parteiensysteme_full.csv",
          "Kapitel8_Verbaende_Interessenvermittlung_full.csv",
          "Kapitel9_PolitischeKultur_Protest_Partizipation_full.csv",
          "Kapitel10_Mediendemokratie_full.csv",
          "Kapitel11_Policymaking_full.csv",
          "Kapitel12_Deutschland_in_Europa_und_der_Welt_full.csv"
        ]
      },
      {
        title: "Klausurhinweis",
        body: "Die Auftaktsitzung liefert einen klaren Ueberblick zum Klausurformat und hilft, die Wiederholung frueh auf kurze, praezise Antworten auszurichten.",
        sources: ["Sitzung_1_Einleitung_und_Ueberblick/FAQ_BRD_Klausur_im_E_Pruefungsraum_WS_2025.pdf"]
      }
    ],
    roadmap: [
      {
        title: "Einleitung, Polity und Politics der Bundesrepublik",
        body: "Die Auftaktsitzung legt die Landkarte des Kurses: charakteristische Strukturen der Bundesrepublik, die Unterscheidung von Polity und Politics sowie den Vergleich mit anderen Demokratien.",
        sources: [
          "Sitzung_1_Einleitung_und_Ueberblick/Vorlesung_Einfuehrung_BRD_Goettingen_WS_2025.pdf"
        ]
      },
      {
        title: "Der Bundestag",
        body: "Die Sitzung zum Bundestag fokussiert Rechte, Aufgaben, Ausschuesse, Kontrollinstrumente und den Dualismus zwischen Regierungsmehrheit und Opposition.",
        sources: [
          "Sitzung_2_Der_Bundestag/2_Der_Bundestag.pdf",
          "Bundestag_Anki.csv"
        ]
      },
      {
        title: "Die Bundesregierung",
        body: "Die Bundesregierung erscheint als politisches Fuehrungs- und Steuerungszentrum der Bundesrepublik, das unter Zeitdruck Probleme priorisiert, Ministerien koordiniert und politische Verantwortung traegt.",
        sources: [
          "Sitzung_4_Die_Bundesregierung/3_Bundesregierung.pdf",
          "Bundesregierung_Kapitel2_full.csv"
        ]
      },
      {
        title: "Der Bundesrat",
        body: "Im Bundesrat geht es um die Mitwirkung der Laender an Gesetzgebung und Verwaltung des Bundes, um weisungsgebundene Stimmenabgabe und um die institutionelle Logik des Foederalismus.",
        sources: [
          "Sitzung_5_Bundesrat/4_Bundesrat.pdf",
          "Bundesrat_Kapitel3_full.csv"
        ]
      },
      {
        title: "Bundeslaender und Kommunen",
        body: "Der Foederalismusblock behandelt Kompetenzen der Laender, kommunale Selbstverwaltung, politische Verantwortung auf mehreren Ebenen und die praktische Arbeitsteilung im Bundesstaat.",
        sources: [
          "Sitzung_6_Bundeslaender_und_Kommunen/5_Bundeslaender_und_Kommunen.pdf",
          "Bundeslaender_Kapitel4_full.csv"
        ]
      },
      {
        title: "Grundgesetz und Bundesverfassungsgericht",
        body: "Diese Sitzung verknuepft Verfassungsprinzipien, Grundrechte, wehrhafte Demokratie und die besondere Rolle des Bundesverfassungsgerichts als Kontroll- und Schiedsinstanz.",
        sources: [
          "Sitzung_7_Grundgesetz_und_Bundesverfassungsgericht/6_Grundgesetz_und_BVerfG.pdf",
          "Grundgesetz_BVerfG_Kapitel5_full.csv"
        ]
      },
      {
        title: "Wahlsystem, Waehler und Wahlverhalten",
        body: "Behandelt werden die Wahlrechtsgrundsaetze, das personalisierte Verhaeltniswahlrecht, Erst- und Zweitstimme, Sitzverteilung und Muster des Wahlverhaltens.",
        sources: [
          "Sitzung_8_Wahlsystem_Waehler_und_Wahlverhalten/7_Wahlsystem_Waehler_Wahlverhalten.pdf",
          "Kapitel6_Wahlsystem_Wahlverhalten_full.csv"
        ]
      },
      {
        title: "Parteien und Parteiensystem",
        body: "Die Parteiensitzung behandelt verfassungsrechtliche Einbettung, Parteiengesetz, Parteienprivileg, innerparteiliche Demokratie und die Logik des deutschen Parteiensystems.",
        sources: [
          "Sitzung_9_Parteien_und_Parteiensystem/8_Parteien_und_Parteiensysteme.pdf",
          "Kapitel7_Parteien_Parteiensysteme_full.csv"
        ]
      },
      {
        title: "Verbaende und Interessenvermittlung",
        body: "Hier steht im Mittelpunkt, wie organisierte Interessen, Lobbying und Verbaende politischen Einfluss ausueben und an der Interessenvermittlung teilnehmen.",
        sources: [
          "Sitzung_10_Verbaende_und_Interessenvermittlung/9_Verbaende_und_Interessenvermittlung.pdf",
          "Kapitel8_Verbaende_Interessenvermittlung_full.csv"
        ]
      },
      {
        title: "Politische Kultur, Protest und Partizipation",
        body: "Dieser Block verbindet Einstellungen zum politischen System mit Protestformen, Beteiligungsarten und Fragen demokratischer Legitimation jenseits klassischer Wahlen.",
        sources: [
          "Sitzung_11_Politische_Kultur_Protest_Partizipation/10_Politische_Kultur_Protest_Partizipation.pdf",
          "Kapitel9_PolitischeKultur_Protest_Partizipation_full.csv"
        ]
      },
      {
        title: "Mediendemokratie",
        body: "Die Sitzung zu Medien fokussiert die Rolle oeffentlicher Kommunikation, die Logik medialer Aufmerksamkeit und ihre Wirkung auf politische Fuehrung und Konfliktinszenierung.",
        sources: [
          "Sitzung_12_Mediendemokratie/11_Mediendemokratie.pdf",
          "Kapitel10_Mediendemokratie_full.csv"
        ]
      },
      {
        title: "Policymaking in Deutschland",
        body: "Der Policymaking-Block betrachtet, wie oeffentliche Probleme in Deutschland definiert, politisch bearbeitet, entschieden und umgesetzt werden.",
        sources: [
          "Sitzung_13_Policymaking_in_Deutschland/12_Policymaking_in_Deutschland.pdf",
          "Kapitel11_Policymaking_full.csv"
        ]
      },
      {
        title: "Deutschland in Europa und der Welt",
        body: "Zum Abschluss verbindet die Vorlesung deutsche Aussenpolitik mit Europa, Westintegration, Multilateralismus und der Stellung Deutschlands in internationalen Institutionen.",
        sources: [
          "Sitzung_14_Deutschland_in_Europa_und_der_Welt/13_Deutschland_in_Europa_und_der_Welt.pdf",
          "Kapitel12_Deutschland_in_Europa_und_der_Welt_full.csv"
        ]
      }
    ],
    practice: [
      {
        title: "Aktive Wiederholungsbank",
        body: "Kurze Karten- und Schnellfrageformate liefern definitionsstarke Kurzfragen zu Institutionen, Akteuren und Verfahren und eignen sich ideal fuer Recall-Training, Vergleichstabellen und schnelle Exam-Checks.",
        sources: ["Bundestag_Anki.csv", "CSV-Decks zu Kapiteln 2-12"]
      },
      {
        title: "Vergleichs- und Einordnungsfragen",
        body: "Das Modul eignet sich besonders fuer Gegenueberstellungen: Bundestag versus Bundesrat, Parteien versus Verbaende, Politics versus Policy, nationale versus europaeische Ebene.",
        sources: ["Bundesregierung_Kapitel2_full.csv", "Bundesrat_Kapitel3_full.csv", "Kapitel11_Policymaking_full.csv"]
      },
      {
        title: "Klausurorientierung im E-Pruefungsraum",
        body: "Ein kompakter Ueberblick zum Klausurformat hilft dabei, die Wiederholung auf kurze, praezise und strukturierte Antworten auszurichten.",
        sources: ["FAQ_BRD_Klausur_im_E_Pruefungsraum_WS_2025.pdf"]
      }
    ],
    qualityNotes: [
      "Die entfallene Sitzung 3 wird nicht als kuenstlicher Stoffblock aufgeblasen; das Portal folgt der realen Stofflinie der gehaltenen Themen.",
      "Die CSV-Decks machen dieses textlastige Modul besonders geeignet fuer aktive Wiederholung, Vergleichsfragen und institutionsbezogene Klausurantworten."
    ]
  }
};

export function getModuleContent(slug) {
  return MODULE_CONTENT[slug] || null;
}
