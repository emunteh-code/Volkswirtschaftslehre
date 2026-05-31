// Source-distilled depth (IWB VL) — merged in chapters.js

const block = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (t, b) => `<div class="warn-box"><strong>${t}:</strong> ${b}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  kaufkraftparitaet: {
    html:
      block('Absolute und relative PPP', `
      <p>Absolute PPP: $E = P/P^*$. Relative PPP: Wechselkursänderung spiegelt Inflationsdifferenz. Kurzfristig oft verletzt wegen Preisrigiditäten und Güterarten.</p>
      ${math('$$\\hat{E} \\approx \\pi - \\pi^*$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Immer Regime (fix/flexibel) und Horizont (kurz/lang) nennen. PPP ist Niveau-/Trendaussage, kein Tageshandelsgesetz.</p>
      ${warn('PPP-Überdehnung', 'Nicht jede Abweichung ist Fehlbewertung — Balassa-Samuelson erklärt strukturelle Niveauunterschiede.')}
    `)
  },
  gravitation: {
    html:
      block('Log-linear Schätzung', `
      <p>Handelsströme steigen mit Wirtschaftsmasse ($GDP$) und sinken mit Distanz. Log-Spezifikation: $\\ln T_{ij} = \\beta_0 + \\beta_1 \\ln Y_i + \\beta_2 \\ln Y_j - \\gamma \\ln dist_{ij} + u$ — Koeffizienten sind Elastizitäten.</p>
    `)
  },
  overshooting: {
    html:
      block('Dornbusch-Logik', `
      <p>Güterpreise starr kurzfristig → Geldpolitik wirkt sofort über Zins und Erwartungen auf $E$; langfristig PPP-Niveau. Wechselkurs „overshootet“ Richtung neues Gleichgewicht.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Zeichnung: $E$ springt über, dann Rückkehr zur PPP-Linie. UIP und Geldmengenexpansion gemeinsam erklären.</p>
    `)
  },
  monetaerer_ansatz: {
    html:
      block('Geldnachfrage und Wechselkurs', `
      <p>Überschuss Geldmenge → Abwertungsdruck. Finanzmarktansatz: $E$ passt sich sofort an, Gütermärkte träge.</p>
    `) +
      block('Klausurpfad', `
      <p>Schock → LM/ Geldmenge → $i$ → $E$ (flexibles Regime). Fixer Kurs: Devisenintervention statt freier $E$-Anpassung.</p>
    `)
  },
  zinsparitaet: {
    html:
      block('UIP', `
      <p>$i \\approx i^* + \\mathbb{E}[\\Delta E/E]$. Höherer Inlandszins → Aufwertungserwartung → sofortige Aufwertung bei flexibler Kurve.</p>
      ${math('$$i \\approx i^* + \\mathbb{E}[\\Delta E/E]$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Bei Zinsschock immer Erwartungskomponente und Regime (Mundell-Fleming) mitdenken.</p>
    `)
  },
  heckscher_ohlin: {
    html:
      block('Faktorreichtum', `
      <p>Land exportiert Güter, die seinen reichlich vorhandenen Faktoren intensiv nutzen. HO-Theorem: Handel gleicht Faktorpreise zwischen Ländern an (unter Annahmen).</p>
      ${math('$$\\frac{K}{L}\\Big|_{H} > \\frac{K}{L}\\Big|_{F} \\Rightarrow \\text{Heim exportiert K-intensive Güter}$$')}
    `) +
      block('Stolper-Samuelson', `
      <p>Schutz des importkonkurrierenden Sektors begünstigt den reichlich vorhandenen Faktor, schadet dem knappen Faktor im Inland.</p>
    `) +
      block('In der Klausur: HO', `
      <p>Modellwahl: Ricardo (1 Faktor) vs. HO (2 Faktoren). HO erklärt Faktorintensität und Handelsrichtung — nicht intraindustriellen Handel (→ Krugman).</p>
      ${warn('FPE', 'Faktorpreisangleichung langfristig — kurzfristig Verteilungskonflikte (Stolper-Samuelson).')}
    `)
  },
  krugman: {
    html:
      block('IRS und intraindustrieller Handel', `
      <p>Steigende Skalenerträge + Liebhaber-Vielfalt → ähnliche Länder handeln ähnliche Güter (intraindustriell), nicht nur unterschiedliche Faktorenintensitäten.</p>
      ${math('$$AC(q) = \\frac{F}{q} + c \\Rightarrow \\text{größeres } q \\Rightarrow \\text{niedrigere } AC$$')}
    `) +
      block('Prüfungsstandard', `
      <p>HO vs. Krugman: HO = Faktorreichtum; Krugman = Skalenerträge/Produktvielfalt. Aufgabenstellung entscheidet das Modell.</p>
    `) +
      block('In der Klausur: Krugman', `
      <p>Monopolistischer Wettbewerb + IRS: Marktgröße und Vielfalt bestimmen Handelsmuster. Kein Faktorreichtum nötig — ähnliche Länder handeln ähnliche Güter.</p>
    `)
  },
  tarifmodell: {
    html:
      block('In der Klausur: Zolltarif', `
      <p>Kleines Land: Zoll → Inlandspreis steigt um Zoll, Menge fällt auf Importangebot/Nachfrage-Schnitt. Wohlfahrt: Produzentenrente↑, Konsumentenrente↓, Zolleinnahmen — DWL-Dreiecke.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Diagramm mit/ohne Zoll; Gewinner/Verlierer benennen. Großes Land: Terms of Trade Effekt möglich — optimaler Zoll > 0 theoretisch.</p>
    `)
  },
  quoten_sanktionen: {
    html:
      block('In der Klausur: Quoten', `
      <p>Importquote: harte Mengenbeschränkung — Preis passt sich an. Lizenzinhaber erhalten Quotenrente. vs. Zoll: Staat erzielt Einnahmen statt Quotenrente bei Lizenzvergabe ohne Auktion.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Quota vs. Zoll bei gleicher Importmenge vergleichen — Wohlfahrtsranking. Sanktionen: Handelsumleitung über Drittländer qualitativ.</p>
    `)
  },
  wto_integration: {
    html:
      block('In der Klausur: WTO/Integration', `
      <p>MFN-Prinzip, Bindung von Zöllen, Streitbeilegung. Preferential Trade Agreements (PTA): Art. XXIV — Handelsumlenkung vs. Schaffung. Dynamische Effekte: Wettbewerb, Skaleneffekte.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Statische Gewinne (Handels schaffend) vs. dynamische (Produktivität). Brexit/Customs Union als Regime-Beispiel qualitativ.</p>
    `)
  },
  wechselkurssysteme: {
    html:
      block('In der Klausur: WK-Systeme', `
      <p>Fix: Zentralbank interveniert, Geldpolitik oft eingeschränkt (Trilemma). Flex: UIP/M-F Kanäle. Currency Board: $M$ an Reserven. Managed float: Intervention ohne festes Parität.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Regime → Policy-Autonomie → Schockübertragung. Immer Mundell-Fleming-Logik bei Makro-Schocks verknüpfen.</p>
      ${warn('Fix ≠ stabil', 'Fixer Kurs kann real über- oder unterbewertet sein — Anpassungsdruck bleibt.')}
    `)
  },
  balassa_samuelson: {
    html:
      block('In der Klausur: Balassa-Samuelson', `
      <p>Produktivitätsfortschritt im tradable Sektor → Löhne steigen → auch non-tradables teurer → höheres Preisniveau bei gleichem Kurs → PPP-Abweichung strukturell.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Erklärt warum reiche Länder „teurer" sind ohne Fehlbewertung. Unterscheidet sich von kurzfristiger Überschießung (Dornbusch).</p>
    `)
  },
  ricardo: {
    html:
      block('In der Klausur: Ricardo', `
      <p>Arbeitswertmodell: $a_{LX}, a_{LY}$ gegeben. Opportunitätskosten $OK_X = a_{LX}/a_{LY}$. Spezialisierung auf komparativen Vorteil → Handel → beide Länder gewinnen (Grenzen der Theorie: 1 Faktor, Vollbeschäftigung).</p>
      ${math('$$OK_X = \\frac{a_{LX}}{a_{LY}},\\quad \\frac{P_X}{P_Y} \\text{ zwischen } OK_X^{Heim} \\text{ und } OK_X^{Ausland}$$')}
    `) +
      block('Numerisches Beispiel', `
      <p>Heim: $a_{LX}=2, a_{LY}=4$ → $OK_X=0{,}5$. Ausland: $a_{LX}=3, a_{LY}=3$ → $OK_X=1$. Heim exportiert X (niedrigeres $OK_X$). Relative Preise im Handelsgleichgewicht zwischen 0,5 und 1.</p>
      ${warn('Autarkie-Preise', 'Handelsdreieck zeichnen: Autarkie vs. Handel — wer exportiert welches Gut?')}
    `)
  },
  trilemma: {
    html:
      block('In der Klausur: Trilemma', `
      <p>Mundell-Fleming-Trilemma: höchstens 2 von {fixer WK, freie Kapitalmobilität, autonome Geldpolitik}. Fix + Kapitalmobilität → $i=i^*$, Geldpolitik endogen. Flex → eigene Geldpolitik, WK passt sich an.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Regime zuerst benennen → Policy-Autonomie → Schockübertragung (M-F). Currency Board = rigide Fixierung über Reserven.</p>
      ${warn('Trilemma ≠ immer Euro', 'Klausur: Mechanismus erklären, nicht nur Länderliste.')}
    `)
  }
};
