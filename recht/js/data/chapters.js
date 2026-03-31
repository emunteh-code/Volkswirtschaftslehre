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
    motivation: 'Man kann nicht überall gleichzeitig sein. Die Stellvertretung erlaubt rechtsgeschäftliches Handeln für einen anderen — im Geschäftsleben unverzichtbar.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Voraussetzungen (§ 164 BGB)</h3>
      <p>Drei kumulative Voraussetzungen für wirksame Stellvertretung:</p>
      <ol>
        <li><strong>Eigene Willenserklärung des Vertreters:</strong> Der Vertreter entscheidet selbst — er ist kein bloßer Bote (der nur eine fremde Erklärung übermittelt).</li>
        <li><strong>Handeln in fremdem Namen (Offenkundigkeitsprinzip):</strong> Der Geschäftspartner muss erkennen können, dass nicht für den Vertreter selbst, sondern für einen anderen gehandelt wird.</li>
        <li><strong>Innerhalb der Vertretungsmacht:</strong> Rechtsgeschäftlich durch Vollmacht (§ 166 ff.) oder kraft Gesetzes (z.B. Eltern für Minderjährige, § 1629).</li>
      </ol>
      <p>Rechtsfolge: Die Wirkungen treffen direkt den <strong>Vertretenen</strong>, nicht den Vertreter.</p>
    </div>
    <div class="section-block">
      <h3>Arten der Vertretungsmacht</h3>
      <ul>
        <li><strong>Vollmacht (gewillkürte Vertretungsmacht):</strong> Durch einseitige Erklärung des Vertretenen erteilt. Innenvollmacht (nur dem Vertreter gegenüber) vs. Außenvollmacht (dem Dritten gegenüber kundgetan).</li>
        <li><strong>Prokura (§ 48 HGB):</strong> Handelsrechtliche Generalvollmacht — sehr weitreichend, nur durch eingetragenen Kaufmann erteilbar.</li>
        <li><strong>Gesetzliche Vertretung:</strong> Eltern, Vormund, Geschäftsführer einer GmbH.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Vertreter ohne Vertretungsmacht (§ 177 BGB)</h3>
      <p>Handelt jemand ohne oder über seine Vertretungsmacht hinaus, ist das Geschäft <strong>schwebend unwirksam</strong>. Der Vertretene kann genehmigen (§ 177 Abs. 1) oder ablehnen. Ohne Genehmigung haftet der Vertreter dem Geschäftspartner auf Schadensersatz (§ 179 BGB).</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Vertreter vs. Bote:</strong> Der Vertreter gibt eine eigene Willenserklärung ab. Der Bote übermittelt nur eine fremde Erklärung. Folge: Beim Vertreter kommt es auf dessen Geschäftsfähigkeit an, beim Boten auf die des Erklärenden.</div>
      <div class="warn-box"><strong>Handeln unter fremdem Namen:</strong> Hier tritt der Handelnde als der andere auf (Identitätstäuschung). Dies ist keine Stellvertretung, sondern wird nach dem Empfängerhorizont beurteilt.</div>
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
  },
  leistungsstoerung: {
    motivation: 'Was passiert, wenn ein Vertrag nicht ordnungsgemäß erfüllt wird? Das Leistungsstörungsrecht regelt Verzug, Unmöglichkeit und Schlechtleistung.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Unmöglichkeit (§ 275 BGB)</h3>
      <p>Der Schuldner wird von der Leistungspflicht frei, wenn die Leistung unmöglich wird. Unterscheidung:</p>
      <ul>
        <li><strong>Anfängliche Unmöglichkeit:</strong> Leistung war von Anfang an unmöglich. Vertrag ist wirksam, aber es besteht sofort ein Schadensersatzanspruch (§ 311a BGB).</li>
        <li><strong>Nachträgliche Unmöglichkeit:</strong> Leistung wird nach Vertragsschluss unmöglich.</li>
      </ul>
      <p>Die Gegenleistungspflicht entfällt nach § 326 Abs. 1 BGB.</p>
    </div>
    <div class="section-block">
      <h3>Schuldnerverzug (§ 286 BGB)</h3>
      <p>Voraussetzungen: (1) Fällige und durchsetzbare Leistung, (2) Mahnung (entbehrlich bei kalendermäßiger Bestimmung, § 286 Abs. 2), (3) Vertretenmüssen.</p>
      <p>Rechtsfolgen: Schadensersatz neben der Leistung (Verzögerungsschaden) und nach Fristsetzung ggf. Schadensersatz statt der Leistung (§ 281 BGB).</p>
    </div>
    <div class="section-block">
      <h3>Schlechtleistung (§ 281 BGB)</h3>
      <p>Der Schuldner leistet, aber nicht vertragsgemäß. Der Gläubiger muss grundsätzlich erst eine <strong>Nachfrist</strong> setzen, bevor er Schadensersatz statt der Leistung oder Rücktritt verlangen kann.</p>
    </div>
    <div class="section-block">
      <h3>Gutachtenstil: Schadensersatz statt der Leistung</h3>
      <ol>
        <li>Schuldverhältnis (z.B. Kaufvertrag § 433)</li>
        <li>Pflichtverletzung (Nichtleistung, Schlechtleistung)</li>
        <li>Vertretenmüssen (§ 276: Vorsatz oder Fahrlässigkeit, vermutet)</li>
        <li>Erfolglose Fristsetzung (§ 281 Abs. 1)</li>
        <li>Schaden</li>
      </ol>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Fristsetzung vergessen:</strong> Ohne erfolglose Nachfrist kein Schadensersatz statt der Leistung (außer bei Entbehrlichkeit, § 281 Abs. 2). Die Fristsetzung ist eine der häufigsten vergessenen Voraussetzungen in der Klausur.</div>
    </div>
    `,
    formeln: [
      { label: 'SE statt Leistung', eq: String.raw`\text{§ 280 I, III + § 281 BGB}`, desc: 'Anspruchsgrundlage' }
    ],
    aufgaben: [
      {
        text: String.raw`Verkäufer V soll am 1.3. eine Maschine liefern. Am 1.3. passiert nichts. Käufer K mahnt am 5.3. Am 15.3. ist immer noch nicht geliefert. Welche Rechte hat K?`,
        steps: [
          { text: `Schuldnerverzug prüfen: Fällig?`, eq: String.raw`\text{Ja, seit 1.3.}` },
          { text: `Mahnung?`, eq: String.raw`\text{Ja, am 5.3.}` },
          { text: `Vertretenmüssen?`, eq: String.raw`\text{Wird vermutet (§ 286 Abs. 4).}` },
          { text: `Rechtsfolgen nach Fristsetzung:`, eq: String.raw`\text{SE statt Leistung (§ 281) oder Rücktritt (§ 323).}` }
        ],
        result: String.raw`K kann nach angemessener Nachfrist SE statt der Leistung verlangen oder vom Vertrag zurücktreten.`
      }
    ]
  },
  kaufrecht: {
    motivation: 'Das Kaufrecht regelt die Rechte des Käufers bei mangelhafter Ware. Die Mängelgewährleistung (§§ 434 ff. BGB) ist ein Klausurklassiker.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Sachmangel (§ 434 BGB)</h3>
      <p>Ein Sachmangel liegt vor, wenn die Ist-Beschaffenheit von der Soll-Beschaffenheit abweicht. Prüfreihenfolge:</p>
      <ol>
        <li>Subjektive Anforderungen (vereinbarte Beschaffenheit)</li>
        <li>Objektive Anforderungen (übliche Beschaffenheit, Eignung für gewöhnliche Verwendung)</li>
        <li>Montageanforderungen (fehlerhafte Montage oder Anleitung)</li>
      </ol>
    </div>
    <div class="section-block">
      <h3>Rechte des Käufers (§ 437 BGB)</h3>
      <ul>
        <li><strong>Nacherfüllung (§ 439):</strong> Nachbesserung oder Ersatzlieferung — vorrangig!</li>
        <li><strong>Rücktritt (§ 440, 323):</strong> Nach erfolgloser Nachfristsetzung.</li>
        <li><strong>Minderung (§ 441):</strong> Herabsetzung des Kaufpreises.</li>
        <li><strong>Schadensersatz (§ 440, 280 ff.):</strong> Bei Vertretenmüssen des Verkäufers.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Verjährung</h3>
      <p>Die Gewährleistungsansprüche verjähren nach <strong>2 Jahren</strong> ab Ablieferung (§ 438 Abs. 1 Nr. 3 BGB). Bei Bauwerken: 5 Jahre.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Vorrang der Nacherfüllung:</strong> Der Käufer darf nicht sofort mindern oder zurücktreten. Erst muss er dem Verkäufer eine Chance zur Nacherfüllung geben (Recht zur zweiten Andienung).</div>
    </div>
    `,
    formeln: [
      { label: 'Minderung', eq: String.raw`$$p_{\text{gemindert}} = p \cdot \frac{\text{Wert mangelhaft}}{\text{Wert mangelfrei}}$$`, desc: '§ 441 Abs. 3 BGB' }
    ],
    aufgaben: [
      {
        text: String.raw`K kauft einen Gebrauchtwagen für $10.000$ €. Nach 3 Wochen zeigt sich ein Motorschaden (Mangel bei Gefahrübergang). V weigert sich nachzubessern. Was kann K tun?`,
        steps: [
          { text: `Sachmangel: Ist-Beschaffenheit ≠ Soll-Beschaffenheit?`, eq: String.raw`\text{Ja, Motorschaden war bei Übergabe vorhanden.}` },
          { text: `Nacherfüllung gescheitert?`, eq: String.raw`\text{Ja, V verweigert (§ 439 Abs. 4 → Fristsetzung entbehrlich).}` },
          { text: `Sekundärrechte:`, eq: String.raw`\text{Rücktritt (§ 437 Nr. 2), Minderung, oder SE (§ 437 Nr. 3).}` }
        ],
        result: String.raw`K kann zurücktreten, mindern oder Schadensersatz verlangen, da Nacherfüllung verweigert wurde.`
      }
    ]
  },
  delikt: {
    motivation: 'Das Deliktsrecht (§§ 823 ff. BGB) schützt absolute Rechte und begründet Schadensersatzansprüche außerhalb vertraglicher Beziehungen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>§ 823 Abs. 1 BGB — Grundtatbestand</h3>
      <p>Prüfschema:</p>
      <ol>
        <li><strong>Rechtsgutsverletzung:</strong> Leben, Körper, Gesundheit, Freiheit, Eigentum oder sonstiges Recht.</li>
        <li><strong>Handlung:</strong> Positives Tun oder pflichtwidriges Unterlassen.</li>
        <li><strong>Haftungsbegründende Kausalität:</strong> Handlung hat die Rechtsgutsverletzung verursacht.</li>
        <li><strong>Rechtswidrigkeit:</strong> Wird durch die Tatbestandsmäßigkeit indiziert (Erfolgsunrecht).</li>
        <li><strong>Verschulden:</strong> Vorsatz oder Fahrlässigkeit (§ 276 BGB).</li>
      </ol>
    </div>
    <div class="section-block">
      <h3>§ 823 Abs. 2 BGB — Schutzgesetzverletzung</h3>
      <p>Schadensersatz auch bei Verstoß gegen ein Gesetz, das den Schutz eines anderen bezweckt (Schutzgesetz). Beispiel: StVO-Verstoß schützt andere Verkehrsteilnehmer.</p>
    </div>
    <div class="section-block">
      <h3>§ 831 BGB — Haftung für Verrichtungsgehilfen</h3>
      <p>Wer einen Verrichtungsgehilfen einsetzt, haftet für dessen Schadenszufügung. Der Geschäftsherr kann sich durch den Nachweis sorgfältiger Auswahl und Überwachung <strong>exkulpieren</strong>.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Reine Vermögensschäden:</strong> § 823 Abs. 1 schützt nur die genannten Rechtsgüter, nicht das Vermögen als solches. Für reine Vermögensschäden braucht man § 823 Abs. 2 oder § 826 BGB (sittenwidrige Schädigung).</div>
    </div>
    `,
    formeln: [
      { label: 'Deliktsanspruch', eq: String.raw`\text{§ 823 I: RG-Verletzung + Handlung + Kausalität + RW + Verschulden}`, desc: 'Prüfungsreihenfolge' }
    ],
    aufgaben: [
      {
        text: String.raw`Autofahrer A überfährt bei Rot und beschädigt das parkende Auto des B. Prüfen Sie den Anspruch des B aus § 823 Abs. 1 BGB.`,
        steps: [
          { text: `Rechtsgutsverletzung?`, eq: String.raw`\text{Ja, Eigentum (Auto des B).}` },
          { text: `Handlung?`, eq: String.raw`\text{Ja, Überfahren der roten Ampel.}` },
          { text: `Kausalität?`, eq: String.raw`\text{Ja, ohne Rotlichtverstoß kein Unfall.}` },
          { text: `Rechtswidrigkeit?`, eq: String.raw`\text{Indiziert durch Eigentumsverletzung, kein Rechtfertigungsgrund.}` },
          { text: `Verschulden?`, eq: String.raw`\text{Fahrlässigkeit (§ 276 II BGB).}` }
        ],
        result: String.raw`B hat einen Anspruch auf Schadensersatz gegen A aus § 823 Abs. 1 BGB.`
      }
    ]
  },
  besitz: {
    motivation: 'Sachenrecht regelt die Zuordnung von Gegenständen. Die Unterscheidung von Besitz und Eigentum ist fundamental — wer hat die Sache, wem gehört sie?',
    theorie: String.raw`
    <div class="section-block">
      <h3>Besitz (§ 854 BGB)</h3>
      <p><strong>Besitz</strong> ist die tatsächliche Sachherrschaft. Der Besitzer hat die Sache physisch unter Kontrolle. Besitz ist ein Faktum, kein Recht.</p>
      <ul>
        <li><strong>Unmittelbarer Besitz:</strong> Tatsächliche Gewalt über die Sache.</li>
        <li><strong>Mittelbarer Besitz (§ 868):</strong> Herausgabeanspruch gegen den unmittelbaren Besitzer (z.B. Vermieter).</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Eigentum</h3>
      <p><strong>Eigentum</strong> ist das umfassende Herrschaftsrecht über eine Sache (§ 903 BGB). Eigentumsübertragung an beweglichen Sachen (§ 929 BGB):</p>
      <ol>
        <li><strong>Einigung</strong> (dinglicher Vertrag)</li>
        <li><strong>Übergabe</strong> (Besitzverschaffung)</li>
        <li><strong>Berechtigung</strong> des Veräußerers</li>
      </ol>
    </div>
    <div class="section-block">
      <h3>Gutgläubiger Erwerb (§ 932 BGB)</h3>
      <p>Auch vom Nichtberechtigten kann Eigentum erworben werden, wenn der Erwerber <strong>gutgläubig</strong> ist (er darf nicht wissen oder grob fahrlässig nicht wissen, dass der Veräußerer nicht Eigentümer ist).</p>
      <p>Ausnahme: <strong>Abhandenkommen</strong> (§ 935 BGB) — bei gestohlenen oder verlorenen Sachen kein gutgläubiger Erwerb möglich.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Besitz ≠ Eigentum:</strong> Der Mieter besitzt die Wohnung (tatsächliche Sachherrschaft), ist aber nicht Eigentümer. Der Dieb besitzt die gestohlene Sache, ohne Eigentümer zu sein. Verwechseln Sie niemals Besitz und Eigentum.</div>
    </div>
    `,
    formeln: [
      { label: 'Übereignung (§ 929)', eq: String.raw`\text{Einigung + Übergabe + Berechtigung}`, desc: 'Bewegliche Sachen' }
    ],
    aufgaben: [
      {
        text: String.raw`A verkauft sein Fahrrad an B und übergibt es. Später stellt sich heraus, dass A das Fahrrad zuvor von C gestohlen hatte. Ist B Eigentümer geworden?`,
        steps: [
          { text: `Übereignung nach § 929: Einigung + Übergabe?`, eq: String.raw`\text{Ja.}` },
          { text: `Berechtigung des A?`, eq: String.raw`\text{Nein, A ist Dieb, nicht Eigentümer.}` },
          { text: `Gutgläubiger Erwerb (§ 932)?`, eq: String.raw`\text{Scheitert an § 935: Fahrrad ist C abhanden gekommen (gestohlen).}` }
        ],
        result: String.raw`B ist nicht Eigentümer geworden. C bleibt Eigentümer (Herausgabeanspruch aus § 985 BGB).`
      }
    ]
  }
};
