// ============================================================
// CHAPTERS & CONTENT DATA — Jahresabschluss
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'grundlagen', title: 'Grundlagen & Vorgehen', cat: 'Einführung', short: 'Grundl.' },
  { id: 'bilanz', title: 'Die Bilanz: Struktur & Logik', cat: 'Abschluss', short: 'Bilanz' },
  { id: 'guv', title: 'Gewinn- und Verlustrechnung', cat: 'Abschluss', short: 'GuV' },
  { id: 'bewertung', title: 'Bewertungsmaßstäbe', cat: 'Bewertung', short: 'Bewert.' },
  { id: 'anlagevermoegen', title: 'Anlagevermögen', cat: 'Bilanzposten', short: 'Anlage' },
  { id: 'umlaufvermoegen', title: 'Umlaufvermögen', cat: 'Bilanzposten', short: 'Umlauf' },
  { id: 'passiva', title: 'FK, Rückstellungen & Eigenkapital', cat: 'Bilanzposten', short: 'Passiva' },
];

export const CONTENT = {
  grundlagen: {
    motivation: 'Der Jahresabschluss informiert externe Adressaten über die wirtschaftliche Lage des Unternehmens. Er ist Rechenschaftslegung und Basis für die Gewinnverteilung.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Doppelte Buchführung</h3>
      <p>Jeder Geschäftsvorfall wird auf mindestens zwei Konten gebucht (Soll an Haben). Die Bilanz ist das Ergebnis dieser Buchungen zum Stichtag.</p>
    </div>
    <div class="section-block">
      <h3>Grundsätze ordnungsmäßiger Buchführung (GoB)</h3>
      <ul>
        <li><strong>Klarheit & Übersichtlichkeit:</strong> Dritte müssen sich in angemessener Zeit ein Bild machen können.</li>
        <li><strong>Vollständigkeit:</strong> Alle buchungspflichtigen Vorfälle müssen erfasst werden.</li>
        <li><strong>Vorsichtsprinzip:</strong> Vermögen eher zu niedrig, Schulden eher zu hoch bewerten (Gläubigerschutz).</li>
      </ul>
    </div>
    `,
    formeln: [
      { label: 'Bilanzgleichung', eq: String.raw`$$\text{Aktiva} = \text{Passiva} = \text{Eigenkapital} + \text{Fremdkapital}$$`, desc: 'Mittelverwendung = Mittelherkunft' }
    ],
    aufgaben: [
      {
        text: String.raw`Kauf einer Maschine für $10.000$ € gegen Barzahlung. Bilden Sie den Buchungssatz und nennen Sie die Bilanzwirkung.`,
        steps: [
          { text: `Interpretation: Welche Konten sind betroffen?`, eq: String.raw`\text{Maschinen (Anlagevermögen) und Kasse (Umlaufvermögen).}` },
          { text: `Execution: Buchungssatz bilden.`, eq: String.raw`\text{Maschinen } 10.000 \text{ an Kasse } 10.000` },
          { text: `Validation: Wie ändert sich die Bilanzsumme?`, eq: String.raw`\text{Gar nicht (Aktivtausch).}` }
        ],
        result: String.raw`Aktivtausch; Bilanzsumme bleibt konstant.`
      }
    ]
  },
  bewertung: {
    motivation: 'Zu welchem Wert stehen Gegenstände in der Bilanz? Die Bewertungsvorschriften verhindern Willkür und sichern die Vergleichbarkeit.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Anschaffungskosten (AK)</h3>
      <p>Basis für die Erstbewertung. AK = Anschaffungspreis + Nebenkosten (Montage, Notar) - Preisminderungen (Skonti, Rabatte).</p>
    </div>
    <div class="section-block">
      <h3>Abschreibungen</h3>
      <p>Verteilen die AK über die Nutzungsdauer. Die planmäßige Abschreibung reflektiert den Werteverzehr.</p>
      <div class="math-block">$$AfA_{pro Jahr} = \frac{AK - Restwert}{Nutzungsdauer}$$</div>
    </div>
    <div class="section-block">
      <h3>Niederstwertprinzip (NWP)</h3>
      <p>Für Aktiva gilt: Im Zweifel den niedrigeren Wert wählen (Vorsicht!).</p>
      <ul>
        <li><strong>Strenges NWP (Umlaufvermögen):</strong> Immer auf den niedrigeren Börsen-/Marktpreis abwerten.</li>
        <li><strong>Gemildertes NWP (Anlagevermögen):</strong> Nur bei dauerhafter Wertminderung zwingend abwerten.</li>
      </ul>
    </div>
    `,
    formeln: [
      { label: 'Anschaffungskosten', eq: String.raw$$AK = \text{Preis} + \text{Nebenkosten} - \text{Minderungen}$$, desc: 'Obergrenze der Bewertung' }
    ],
    aufgaben: [
      {
        text: String.raw`Eine Maschine wurde für $100.000$ € gekauft. Montagekosten $5.000$ €, Skonto $2\%$. Berechnen Sie die Anschaffungskosten.`,
        steps: [
          { text: `Netto-Anschaffungspreis inkl. Skonto:`, eq: String.raw`100.000 \cdot 0{,}98 = 98.000` },
          { text: `Nebenkosten addieren:`, eq: String.raw`98.000 + 5.000 = 103.000` }
        ],
        result: String.raw`$AK = 103.000$ €.`
      }
    ]
  },
  umlaufvermoegen: {
    motivation: 'Posten, die nicht dauerhaft im Betrieb bleiben (Vorräte, Forderungen, Kasse). Sie unterliegen dem strengen Niederstwertprinzip.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Forderungen aus LuL</h3>
      <p>Müssen zum Nennwert bewertet werden. Zweifelhafte Forderungen müssen einzelwertberichtigt (EWB) werden.</p>
    </div>
    <div class="section-block">
      <h3>Vorräte</h3>
      <p>Bewertung zu AK oder Herstellungskosten (HK). Bei gesunkenen Marktpreisen muss auf den niedrigeren Stichtagswert abgewertet werden.</p>
    </div>
    `,
    formeln: [
      { label: 'Einzelwertberichtigung', eq: String.raw`\text{Ausfallrisiko} \cdot \text{Nettowert}`, desc: 'Korrekturposten' }
    ],
    aufgaben: [
      {
        text: String.raw`Eine Warenlieferung (AK $5.000$ €) hat am Stichtag einen Marktpreis von $4.500$ €. Wie muss bilanziert werden?`,
        steps: [
          { text: `Interpretation: Welches Prinzip greift hier?`, eq: String.raw`\text{Strenges Niederstwertprinzip (Umlaufvermögen).}` },
          { text: `Execution: Bestimme den Bilanzansatz.`, eq: String.raw`\min(5.000, 4.500) = 4.500` }
        ],
        result: String.raw`Abwertung auf $4.500$ €.`
      }
    ]
  }
};
