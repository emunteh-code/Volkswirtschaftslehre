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
  bilanz: {
    motivation: 'Die Bilanz zeigt die Vermögens- und Kapitalstruktur eines Unternehmens zu einem Stichtag. Sie ist das zentrale Element des Jahresabschlusses.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Grundstruktur (§ 266 HGB)</h3>
      <p>Die Bilanz hat zwei Seiten: Die <strong>Aktivseite</strong> zeigt die Mittelverwendung (Vermögen), die <strong>Passivseite</strong> die Mittelherkunft (Kapital).</p>
      <div class="math-block">$$\text{Aktiva} = \text{Passiva}$$</div>
      <div class="math-block">$$\text{Anlagevermögen + Umlaufvermögen} = \text{Eigenkapital + Fremdkapital}$$</div>
    </div>
    <div class="section-block">
      <h3>Aktivseite</h3>
      <ul>
        <li><strong>Anlagevermögen (AV):</strong> Gegenstände, die dauerhaft dem Betrieb dienen (Grundstücke, Maschinen, Beteiligungen).</li>
        <li><strong>Umlaufvermögen (UV):</strong> Gegenstände, die kurzfristig umgesetzt werden (Vorräte, Forderungen, Bankguthaben).</li>
      </ul>
      <p>Gliederung nach <strong>Liquidierbarkeit</strong> — am wenigsten liquide oben (Grundstücke), am liquidesten unten (Kasse).</p>
    </div>
    <div class="section-block">
      <h3>Passivseite</h3>
      <ul>
        <li><strong>Eigenkapital:</strong> Gezeichnetes Kapital, Rücklagen, Gewinnvortrag, Jahresüberschuss.</li>
        <li><strong>Rückstellungen:</strong> Ungewisse Verbindlichkeiten (z.B. Pensionsverpflichtungen).</li>
        <li><strong>Verbindlichkeiten:</strong> Dem Grunde und der Höhe nach feststehende Schulden.</li>
      </ul>
      <p>Gliederung nach <strong>Fristigkeit</strong> — langfristig oben, kurzfristig unten.</p>
    </div>
    <div class="section-block">
      <h3>Bilanzveränderungen</h3>
      <ul>
        <li><strong>Aktivtausch:</strong> $A \uparrow$, $A \downarrow$ — Bilanzsumme konstant (z.B. Maschine bar kaufen).</li>
        <li><strong>Passivtausch:</strong> $P \uparrow$, $P \downarrow$ — Bilanzsumme konstant (z.B. Verbindlichkeit in langfristiges Darlehen umwandeln).</li>
        <li><strong>Bilanzverlängerung:</strong> $A \uparrow$, $P \uparrow$ — Bilanzsumme steigt (z.B. Warenkauf auf Kredit).</li>
        <li><strong>Bilanzverkürzung:</strong> $A \downarrow$, $P \downarrow$ — Bilanzsumme sinkt (z.B. Verbindlichkeit bar bezahlen).</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Bilanzgleichung verletzt:</strong> Wenn nach einer Buchung Aktiva ≠ Passiva, ist ein Fehler passiert. Jeder Geschäftsvorfall muss die Gleichung bewahren.</div>
    </div>
    `,
    formeln: [
      { label: 'Bilanzgleichung', eq: String.raw`$$A = P = EK + FK$$`, desc: 'Mittelverwendung = Mittelherkunft' },
      { label: 'Eigenkapitalquote', eq: String.raw`$$EK\text{-Quote} = \frac{EK}{\text{Bilanzsumme}}$$`, desc: 'Kapitalstrukturkennzahl' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Unternehmen nimmt einen Bankkredit über $50.000$ € auf. Das Geld wird auf dem Geschäftskonto gutgeschrieben. Welche Bilanzveränderung liegt vor?`,
        steps: [
          { text: `Aktivseite: Bankguthaben steigt.`, eq: String.raw`A \uparrow 50.000` },
          { text: `Passivseite: Verbindlichkeiten steigen.`, eq: String.raw`P \uparrow 50.000` },
          { text: `Typ bestimmen:`, eq: String.raw`\text{Bilanzverlängerung (A+P steigen gleichzeitig).}` }
        ],
        result: String.raw`Bilanzverlängerung um $50.000$ €.`
      }
    ]
  },
  guv: {
    motivation: 'Die GuV zeigt, wie der Jahreserfolg (Gewinn oder Verlust) entstanden ist. Sie ist die Ertragsrechnung und erklärt die Veränderung des Eigenkapitals.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Zweck und Aufbau</h3>
      <p>Die <strong>Gewinn- und Verlustrechnung</strong> stellt Erträge und Aufwendungen einer Periode gegenüber. Das Ergebnis ist der <strong>Jahresüberschuss</strong> (Gewinn) oder <strong>Jahresfehlbetrag</strong> (Verlust).</p>
      <div class="math-block">$$\text{Jahresergebnis} = \text{Erträge} - \text{Aufwendungen}$$</div>
    </div>
    <div class="section-block">
      <h3>Gesamtkostenverfahren (GKV, § 275 Abs. 2 HGB)</h3>
      <p>Gliedert die Aufwendungen nach <strong>Kostenarten</strong>: Materialaufwand, Personalaufwand, Abschreibungen, sonstige betriebliche Aufwendungen.</p>
      <p>Besonderheit: Bestandsveränderungen an fertigen und unfertigen Erzeugnissen werden als Korrekturposten berücksichtigt.</p>
    </div>
    <div class="section-block">
      <h3>Umsatzkostenverfahren (UKV, § 275 Abs. 3 HGB)</h3>
      <p>Gliedert die Aufwendungen nach <strong>Funktionsbereichen</strong>: Herstellungskosten der abgesetzten Leistungen, Vertriebskosten, allgemeine Verwaltungskosten.</p>
      <p>Vorteil: Direkte Zuordnung von Kosten zu Umsatz. Nachteil: Aufwendungen nach Kostenarten nicht direkt sichtbar.</p>
    </div>
    <div class="section-block">
      <h3>Ergebnisschichten</h3>
      <ul>
        <li><strong>Betriebsergebnis:</strong> Ergebnis der gewöhnlichen Geschäftstätigkeit.</li>
        <li><strong>Finanzergebnis:</strong> Zinsen und Beteiligungserträge.</li>
        <li><strong>Steuern vom Einkommen und Ertrag:</strong> Gewerbe- und Körperschaftsteuer.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Ertrag ≠ Einzahlung:</strong> Ein Ertrag entsteht, wenn eine Leistung erbracht wird (Realisationsprinzip), nicht wenn Geld fließt. Verwechseln Sie niemals Stromgrößen (GuV) mit Zahlungsströmen (Cashflow).</div>
      <div class="warn-box"><strong>GKV vs. UKV:</strong> Beide führen zum selben Jahresergebnis. Der Unterschied liegt in der Gliederung der Aufwendungen, nicht im Ergebnis.</div>
    </div>
    `,
    formeln: [
      { label: 'Jahresergebnis', eq: String.raw`$$JÜ = \text{Erträge} - \text{Aufwendungen}$$`, desc: 'Grundformel der GuV' },
      { label: 'Umsatzrendite', eq: String.raw`$$\text{Umsatzrendite} = \frac{JÜ}{\text{Umsatzerlöse}}$$`, desc: 'Rentabilitätskennzahl' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Unternehmen hat Umsatzerlöse von $500.000$ €, Materialaufwand $200.000$ €, Personalaufwand $150.000$ €, Abschreibungen $30.000$ € und sonstige Aufwendungen $40.000$ €. Berechnen Sie das Betriebsergebnis (GKV).`,
        steps: [
          { text: `Gesamte Aufwendungen:`, eq: String.raw`200.000 + 150.000 + 30.000 + 40.000 = 420.000` },
          { text: `Betriebsergebnis:`, eq: String.raw`500.000 - 420.000 = 80.000` }
        ],
        result: String.raw`Betriebsergebnis: $80.000$ €.`
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
  anlagevermoegen: {
    motivation: 'Das Anlagevermögen umfasst Gegenstände, die dauerhaft dem Geschäftsbetrieb dienen. Ihre Bewertung und Abschreibung bestimmen das Bilanzbild langfristig.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Gliederung (§ 266 Abs. 2 HGB)</h3>
      <ul>
        <li><strong>Immaterielle Vermögensgegenstände:</strong> Patente, Lizenzen, Geschäfts- oder Firmenwert (nur derivativer GoF aktivierbar).</li>
        <li><strong>Sachanlagen:</strong> Grundstücke, Gebäude, technische Anlagen, Betriebs- und Geschäftsausstattung.</li>
        <li><strong>Finanzanlagen:</strong> Beteiligungen, Wertpapiere des Anlagevermögens, Ausleihungen.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Planmäßige Abschreibung</h3>
      <p>Verteilt die Anschaffungs- oder Herstellungskosten über die betriebsgewöhnliche Nutzungsdauer:</p>
      <div class="math-block">$$AfA_{\text{linear}} = \frac{AK - \text{Restwert}}{n}$$</div>
      <p>Die lineare Abschreibung ist die gängigste Methode. Der Buchwert zum Stichtag berechnet sich als:</p>
      <div class="math-block">$$BW_t = AK - t \cdot AfA$$</div>
    </div>
    <div class="section-block">
      <h3>Außerplanmäßige Abschreibung</h3>
      <p>Bei dauerhafter Wertminderung ist eine außerplanmäßige Abschreibung <strong>verpflichtend</strong> (gemildertes NWP für AV). Entfällt der Grund, besteht ein <strong>Zuschreibungsgebot</strong> bis maximal zu den fortgeführten AK.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Aktivierungsverbot:</strong> Selbst geschaffene immaterielle Vermögensgegenstände des Anlagevermögens (z.B. selbst entwickelte Software) haben ein Aktivierungswahlrecht nach HGB — aber <strong>originärer GoF darf nie</strong> aktiviert werden.</div>
    </div>
    `,
    formeln: [
      { label: 'Lineare AfA', eq: String.raw`$$AfA = \frac{AK - RW}{n}$$`, desc: 'Jährliche Abschreibung', variables: { 'AK': 'Anschaffungskosten', 'RW': 'Restwert', 'n': 'Nutzungsdauer' } },
      { label: 'Buchwert', eq: String.raw`$$BW_t = AK - t \cdot AfA$$`, desc: 'Nach t Jahren' }
    ],
    aufgaben: [
      {
        text: String.raw`Eine Maschine (AK $120.000$ €, Nutzungsdauer 10 Jahre, kein Restwert) wird linear abgeschrieben. Wie hoch ist der Buchwert nach 4 Jahren?`,
        steps: [
          { text: `Jährliche AfA:`, eq: String.raw`120.000 / 10 = 12.000` },
          { text: `Kumulierte AfA nach 4 Jahren:`, eq: String.raw`4 \cdot 12.000 = 48.000` },
          { text: `Buchwert:`, eq: String.raw`120.000 - 48.000 = 72.000` }
        ],
        result: String.raw`$BW_4 = 72.000$ €.`
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
  },
  passiva: {
    motivation: 'Die Passivseite zeigt, woher das Kapital stammt. Die Unterscheidung zwischen Eigen- und Fremdkapital, insbesondere Rückstellungen, ist klausurrelevant.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Eigenkapital</h3>
      <p>Bestandteile nach § 272 HGB:</p>
      <ul>
        <li><strong>Gezeichnetes Kapital:</strong> Nennwert der Anteile (Haftungsgrundlage).</li>
        <li><strong>Kapitalrücklage:</strong> Agio bei Aktienemission.</li>
        <li><strong>Gewinnrücklagen:</strong> Einbehaltene Gewinne (gesetzliche, satzungsmäßige, freie).</li>
        <li><strong>Gewinn-/Verlustvortrag:</strong> Nicht ausgeschütteter Gewinn aus Vorjahren.</li>
        <li><strong>Jahresüberschuss/-fehlbetrag:</strong> Ergebnis der laufenden Periode.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Rückstellungen (§ 249 HGB)</h3>
      <p>Rückstellungen decken <strong>ungewisse Verbindlichkeiten</strong> ab — dem Grunde oder der Höhe nach unsicher, aber wahrscheinlich.</p>
      <ul>
        <li><strong>Pensionsrückstellungen:</strong> Pflicht zur Bildung.</li>
        <li><strong>Steuerrückstellungen:</strong> Für zu erwartende Steuernachzahlungen.</li>
        <li><strong>Sonstige Rückstellungen:</strong> Z.B. Garantieverpflichtungen, Prozessrisiken.</li>
      </ul>
      <p>Bewertung: zum notwendigen Erfüllungsbetrag (bestmögliche Schätzung).</p>
    </div>
    <div class="section-block">
      <h3>Verbindlichkeiten</h3>
      <p>Dem Grunde und der Höhe nach feststehende Schulden. Bewertung zum <strong>Erfüllungsbetrag</strong> (§ 253 Abs. 1 HGB). Verbindlichkeiten aus LuL sind kurzfristig, Bankdarlehen können lang- oder kurzfristig sein.</p>
    </div>
    <div class="section-block">
      <h3>Abgrenzung: Rückstellung vs. Verbindlichkeit vs. Rücklage</h3>
      <ul>
        <li><strong>Verbindlichkeit:</strong> Gewiss in Grund und Höhe (z.B. Bankkredit).</li>
        <li><strong>Rückstellung:</strong> Ungewiss in Grund oder Höhe (z.B. Garantiefall).</li>
        <li><strong>Rücklage:</strong> Eigenkapital — kein Fremdkapital! (Einbehaltene Gewinne).</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Rückstellung ≠ Rücklage:</strong> Rückstellungen sind Fremdkapital (Schulden). Rücklagen sind Eigenkapital. Die Verwechslung ist einer der häufigsten Klausurfehler.</div>
    </div>
    `,
    formeln: [
      { label: 'Fremdkapitalquote', eq: String.raw`$$FK\text{-Quote} = \frac{FK}{\text{Bilanzsumme}} = 1 - EK\text{-Quote}$$`, desc: 'Verschuldungsgrad' },
      { label: 'Verschuldungsgrad', eq: String.raw`$$VG = \frac{FK}{EK}$$`, desc: 'Kapitalstruktur' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Unternehmen verkauft Produkte mit 2-jähriger Garantie. Erfahrungsgemäß fallen bei $3\%$ der Verkäufe Garantiekosten von durchschnittlich $200$ € an. Der Jahresumsatz umfasst $1.000$ Stück. Wie hoch ist die Garantierückstellung?`,
        steps: [
          { text: `Erwartete Garantiefälle:`, eq: String.raw`1.000 \cdot 0{,}03 = 30` },
          { text: `Erwartete Kosten:`, eq: String.raw`30 \cdot 200 = 6.000` }
        ],
        result: String.raw`Garantierückstellung: $6.000$ €.`
      }
    ]
  }
};
