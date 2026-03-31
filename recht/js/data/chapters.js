// ============================================================
// CHAPTERS & CONTENT DATA — Recht
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'rechtsgeschaeft', title: 'Willenserklärung & Vertrag', cat: 'Grundlagen', short: 'Vertrag' },
  { id: 'vertretung', title: 'Stellvertretung', cat: 'Grundlagen', short: 'Vertret.' },
  { id: 'leistungsstoerung', title: 'Leistungsstörungen', cat: 'Schuldrecht', short: 'Störung' },
  { id: 'kaufrecht', title: 'Kaufrechtliche Gewährleistung', cat: 'Schuldrecht', short: 'Kauf' },
  { id: 'delikt', title: 'Unerlaubte Handlungen', cat: 'Schuldrecht', short: 'Delikt' },
  { id: 'besitz', title: 'Besitz & Eigentum', cat: 'Sachenrecht', short: 'Sachen' },
];

export const CONTENT = {
  rechtsgeschaeft: {
    motivation: 'Das Rechtsgeschäft ist das Mittel zur Gestaltung privater Rechtsverhältnisse. Der Vertrag ist dabei der wichtigste Typ.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Willenserklärung (WE)</h3>
      <p>Eine WE besteht aus einem <strong>objektiven Tatbestand</strong> (Erklärungswert) und einem <strong>subjektiven Tatbestand</strong> (Handlungswille, Erklärungsbewusstsein, Geschäftswille).</p>
    </div>
    <div class="section-block">
      <h3>Zustandekommen eines Vertrags</h3>
      <p>Ein Vertrag erfordert zwei übereinstimmende Willenserklärungen: <strong>Angebot</strong> und <strong>Annahme</strong> (§§ 145 ff. BGB).</p>
    </div>
    <div class="section-block">
      <h3>Gutachtenstil: Vertragsschluss</h3>
      <ul>
        <li><strong>Obersatz:</strong> A und B könnten einen Kaufvertrag gemäß § 433 BGB geschlossen haben.</li>
        <li><strong>Definition:</strong> Dies erfordert Angebot und Annahme.</li>
        <li><strong>Subsumtion:</strong> Hat A ein Angebot gemacht? Hat B dieses angenommen?</li>
        <li><strong>Ergebnis:</strong> Ein Vertrag ist (nicht) zustande gekommen.</li>
      </ul>
    </div>
    `,
    formeln: [
      { label: 'Anspruchsgrundlage', eq: String.raw`\text{Wer will was von wem woraus?}`, desc: 'Zentraler Prüfungsansatz' }
    ],
    aufgaben: [
      {
        text: String.raw`A schickt B einen Brief mit dem Angebot, sein Fahrrad für $500$ € zu kaufen. B liest den Brief und denkt sich "Einverstanden". Ist ein Vertrag zustande gekommen?`,
        steps: [
          { text: `Obersatz: Vertragsschluss gemäß § 433 BGB?`, eq: null },
          { text: `Definition: Erfordert Angebot und Annahme.`, eq: null },
          { text: `Subsumtion: Angebot liegt vor. Liegt eine Annahme vor?`, eq: String.raw`\text{Nein, das bloße Denken ist keine Erklärung (fehlende Kundgabe).}` }
        ],
        result: String.raw`Kein Vertrag mangels Annahmeerklärung.`
      }
    ]
  },
  vertretung: {
    motivation: 'Man kann nicht überall gleichzeitig sein. Die Stellvertretung erlaubt rechtsgeschäftliches Handeln für einen anderen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Voraussetzungen (§ 164 BGB)</h3>
      <ol>
        <li>Eigene Willenserklärung des Vertreters.</li>
        <li>In fremdem Namen (Offenkundigkeitsprinzip).</li>
        <li>Innerhalb der Vertretungsmacht (Vollmacht oder Gesetz).</li>
      </ol>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Handeln unter fremdem Namen:</strong> Hier tritt der Handelnde als der andere auf (Identitätstäuschung). Dies ist keine Stellvertretung!</div>
    </div>
    `,
    formeln: [
      { label: 'Offenkundigkeit', eq: String.raw`\text{Handeln im Namen des Vertretenen}`, desc: 'Schutz des Geschäftspartners' }
    ],
    aufgaben: [
      {
        text: String.raw`Chef A beauftragt Mitarbeiter B, Büromaterial im Namen der Firma zu kaufen. B tut dies. Gegen wen hat der Verkäufer einen Zahlungsanspruch?`,
        steps: [
          { text: `Prüfung Stellvertretung: Eigene WE des B?`, eq: String.raw`\text{Ja.}` },
          { text: `Offenkundigkeit?`, eq: String.raw`\text{Ja, im Namen der Firma.}` },
          { text: `Vertretungsmacht?`, eq: String.raw`\text{Ja, Beauftragung durch A.}` }
        ],
        result: String.raw`Anspruch gegen A gemäß § 433 Abs. 2 BGB.`
      }
    ]
  }
};
