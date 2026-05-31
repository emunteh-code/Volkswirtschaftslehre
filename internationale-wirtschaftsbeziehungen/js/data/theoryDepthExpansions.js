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
    `) +
      block('Stolper-Samuelson', `
      <p>Schutz des importkonkurrierenden Sektors begünstigt den reichlich vorhandenen Faktor, schadet dem knappen Faktor im Inland.</p>
    `)
  },
  krugman: {
    html:
      block('IRS und intraindustrieller Handel', `
      <p>Steigende Skalenerträge + Liebhaber-Vielfalt → ähnliche Länder handeln ähnliche Güter (intraindustriell), nicht nur unterschiedliche Faktorenintensitäten.</p>
    `) +
      block('Prüfungsstandard', `
      <p>HO vs. Krugman: HO = Faktorreichtum; Krugman = Skalenerträge/Produktvielfalt. Aufgabenstellung entscheidet das Modell.</p>
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
  }
};
