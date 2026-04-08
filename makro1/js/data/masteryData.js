// ============================================================
// MASTERY DATA — Makroökonomik I
// Learning objective checklists for all benchmark concepts
// ============================================================

import { CHAPTERS } from './chapters.js';

export const MASTERY = {};

function createMasteryItems(conceptId, title) {
  const specific = {
    makro_rahmen: [
      'Kurze, mittlere und lange Frist sauber unterscheiden',
      'Kernvariablen der Makroökonomik sicher zuordnen',
      'Sektor- und Marktlogik eines Schocks in der richtigen Reihenfolge beschreiben',
      'Vor einer Rechnung den passenden Modellrahmen festlegen'
    ],
    vgr: [
      'Entstehungs-, Verwendungs- und Verteilungsseite des BIP unterscheiden',
      'Nominales und reales BIP sowie Deflator sicher berechnen',
      'Inflationsrate und Arbeitslosenquote formal korrekt angeben',
      'Bestands- und Stromgrößen klausursicher trennen'
    ],
    guetermarkt: [
      'Geplante Nachfrage Z und Gleichgewichtsbedingung Y = Z aufstellen',
      'Lineare Konsumfunktion korrekt einsetzen und interpretieren',
      'Gütermarktgleichgewicht im Keynes-Kreuz grafisch und algebraisch erklären',
      'Richtungswirkungen von G, T, I und c1 sauber ableiten'
    ],
    multiplikator: [
      'Staatsausgaben- und Steuermultiplikator herleiten und anwenden',
      'Erstimpuls und Gesamteffekt formal sauber unterscheiden',
      'Sparparadox als Aggregatmechanik erklären',
      'Automatische Stabilisatoren als Dämpfung des Multiplikators einordnen'
    ],
    geldnachfrage: [
      'Geld- und Anleihehaltung als Portfolioentscheidung erklären',
      'Geldmarktgleichgewicht M/P = L(i,Y) anwenden',
      'Offenmarktgeschäft, Anleihenpreis und Zins korrekt zusammen denken',
      'Liquiditätsfalle als Sonderfall der Geldnachfrage erläutern'
    ],
    banken: [
      'Bankbilanz logisch lesen: Kredite, Einlagen und Reserven zuordnen',
      'Einfachen Geld- bzw. Einlagenmultiplikator berechnen',
      'Fristentransformation und Bank-Run-Logik erklären',
      'Grenzen des mechanischen Multiplikatormodells benennen'
    ],
    islm: [
      'IS-Kurve aus der Gütermarktgleichung logisch herleiten',
      'Zinssteuerung bzw. monetäre Bedingung im Diagramm korrekt darstellen',
      'Gleichgewicht aus Güter- und Finanzmarkt sauber interpretieren',
      'Standardwirkungen von Fiskal- und Geldpolitik im Grundmodell erklären'
    ],
    politikmix: [
      'Fiskalpolitik mit und ohne Crowding-Out vergleichen',
      'Geldpolitik als Verschiebung der monetären Kurve darstellen',
      'Policy-Mix mit Blick auf Zinsreaktion und Output deuten',
      'Liquiditätsfalle und straffe Geldpolitik als Sonderfälle erkennen'
    ],
    realzins_fisher_erwartungen: [
      'Fisher-Gleichung und Realzins logisch anwenden',
      'Nominalzins und Realzins sauber auseinanderhalten',
      'Änderungen der Inflationserwartungen in Realzinsänderungen übersetzen',
      'Deflationsszenarien über den Fisher-Kanal klausursicher deuten'
    ],
    realzins_risikopraemie_krisenkanal: [
      'Kreditzins als Leitzins plus Risikoprämie korrekt aufstellen',
      'Risikoprämienanstiege als eigenständigen Nachfrageschock erklären',
      'Spread-/Kreditkanalschocks auf IS, Investitionen und Output übertragen',
      'ELB-nahe Stabilisierungsgrenzen in Krisenszenarien begründet einordnen'
    ],
    arbeitsmarkt: [
      'WS- und PS-Kurve korrekt definieren und zeichnen',
      'Natürliche Arbeitslosenquote aus dem Schnitt von WS und PS erklären',
      'Wirkung von z und μ auf den Arbeitsmarkt deuten',
      'Reallohnlogik im WS-PS-Modell klausursicher formulieren'
    ],
    phillips: [
      'Erwartungsaugmentierte Phillipskurve formal aufschreiben',
      'NAIRU bzw. natürliche Arbeitslosenquote in der Inflationsdynamik deuten',
      'Arbeitslosenlücke und Inflationsänderung korrekt verknüpfen',
      'Kurzfristigen und langfristigen Trade-off sauber unterscheiden'
    ],
    islmpc: [
      'IS, Phillipskurve und Zinsregel zu einer Dynamikkette verbinden',
      'Okuns Gesetz als Brücke zwischen Output und Arbeitslosigkeit nutzen',
      'Kurzfristigen Boom und mittelfristige Rückkehr zu Y_n erklären',
      'Mittelfristige Stabilisierung im IS-LM-PC-Modell klausurgerecht beschreiben'
    ],
    erwartungen: [
      'Temporäre und permanente Politikmaßnahmen sauber unterscheiden',
      'Erwartungskanal in Konsum, Investitionen und Zinsstruktur erklären',
      'Glaubwürdigkeit und Zeitinkonsistenz begrifflich sicher einsetzen',
      'Angekündigte Politik als Erwartungs- statt nur Gegenwartsimpuls deuten'
    ]
  };

  return specific[conceptId] || [
    `Die zentrale Definition von "${title}" erklären können`,
    `Formeln und Zusammenhänge zu "${title}" anwenden können`,
    `Typische Klausurfragen zu "${title}" sicher lösen`,
    `Die Verbindung von "${title}" zu benachbarten Konzepten verstehen`
  ];
}

CHAPTERS.forEach((chapter) => {
  MASTERY[chapter.id] = createMasteryItems(chapter.id, chapter.title);
});
