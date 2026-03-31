// ============================================================
// INTUITION DATA — Jahresabschluss
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const INTUITION = {
  grundlagen: {
    core: 'Die Bilanz ist ein statisches Foto des Unternehmens am Stichtag. Die GuV ist der Film, der die Veränderungen über das Jahr zeigt.',
    analogy: 'Die Bilanz ist der Kontostand am 31.12., die GuV sind alle Kontoauszüge des Jahres zusammengefasst.',
    exam: [
      { if: 'Aktivtausch', then: 'Bilanzsumme bleibt gleich. Nur die Zusammensetzung des Vermögens ändert sich.' },
      { if: 'Bilanzverlängerung', then: 'Vermögen und Schulden steigen gleichzeitig (z.B. Kauf auf Ziel).' }
    ],
    bridge: 'Doppik sorgt dafür, dass die Bilanz immer ausgeglichen ist.'
  },
  bewertung: {
    core: 'Das Vorsichtsprinzip ist das Grundgesetz der Bilanzierung. Wir machen uns lieber ärmer als reicher.',
    analogy: 'Wie ein skeptischer Käufer: Man schätzt den Wert seiner Besitztümer eher konservativ ein, um keine bösen Überraschungen zu erleben.',
    exam: [
      { if: 'Umlaufvermögen bewerten', then: 'Strenges Niederstwertprinzip. Immer den niedrigsten Wert ansetzen.' },
      { if: 'Anschaffungskosten', then: 'Preis + Nebenkosten - Minderungen. Das ist die absolute Obergrenze.' }
    ],
    bridge: 'Bewertung regelt den Gewinnausweis.'
  }
};
