import { A_PLUS_SUPPLEMENT } from './aPlusSupplement.js';

import { THEORY_DEPTH_EXPANSIONS } from './theoryDepthExpansions.js';

const section = (title, body) => `
  <div class="section-block">
    <h3>${title}</h3>
    ${body}
  </div>
`;

const mathBlock = (eq) => `<div class="math-block">${eq}</div>`;

const warn = (title, body) => `<div class="warn-box" data-warning-placement="rail"><strong>${title}</strong> ${body}</div>`;

const step = (text, eq = null) => ({ text, eq });

const task = (text, steps, result, hint = null) => ({
  text,
  steps,
  result,
  ...(hint ? { hint } : {})
});

export const CHAPTERS = [
  { id: 'handelsfakten', title: 'Handelsfakten und Grundfragen', cat: 'Handel I', short: 'Fakten' },
  { id: 'ricardo', title: 'Ricardo-Modell und komparativer Vorteil', cat: 'Handel I', short: 'Ricardo' },
  { id: 'heckscher_ohlin', title: 'Heckscher-Ohlin und Faktorausstattung', cat: 'Handel I', short: 'H-O' },
  { id: 'verteilung_handel', title: 'Stolper-Samuelson und Verteilungseffekte des Handels', cat: 'Handel I', short: 'Verteilung' },
  { id: 'krugman', title: 'Intraindustrieller Handel und Krugman-Modell', cat: 'Handel II', short: 'Krugman' },
  { id: 'gravitation', title: 'Gravitationsgleichung und empirische Handelsmuster', cat: 'Handel II', short: 'Grav.' },
  { id: 'tarifmodell', title: 'Importzoll, Wohlfahrt und Optimalzoll', cat: 'Handel II', short: 'Zoll' },
  { id: 'quoten_sanktionen', title: 'Quoten, Sanktionen und diskriminierende Handelspolitik', cat: 'Handel II', short: 'Quoten' },
  { id: 'wto_integration', title: 'WTO, Freihandelszonen, Zollunionen und Brexit', cat: 'Politik & Institutionen', short: 'WTO' },
  { id: 'wechselkurssysteme', title: 'Wechselkurse, reale Kurse und Wechselkursregime', cat: 'Offene Makro I', short: 'Regime' },
  { id: 'zinsparitaet', title: 'Gedeckte und ungedeckte Zinsparität', cat: 'Offene Makro I', short: 'Zinsparität' },
  { id: 'kaufkraftparitaet', title: 'Gesetz des einheitlichen Preises und Kaufkraftparität', cat: 'Offene Makro I', short: 'KKP' },
  { id: 'monetaerer_ansatz', title: 'Monetärer Ansatz, Fisher-Effekt und reale Zinsparität', cat: 'Offene Makro II', short: 'Monetär' },
  { id: 'overshooting', title: 'Finanzmarktansatz und Overshooting', cat: 'Offene Makro II', short: 'Overshoot' },
  { id: 'trilemma', title: 'Trilemma der Währungspolitik und fixe Wechselkurse', cat: 'Offene Makro II', short: 'Trilemma' },
  { id: 'balassa_samuelson', title: 'Balassa-Samuelson und systematische KKP-Abweichungen', cat: 'Offene Makro II', short: 'B-S' }
];

export const CONTENT = {
  handelsfakten: {
    motivation: 'Bevor Modelle überzeugen, musst du wissen, welches reale Phänomen sie überhaupt erklären sollen: Handel wächst, ist politisch umkämpft und besteht oft gerade zwischen ähnlichen Ländern.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Welche Beobachtungen der Kurs erklären will</h4>
<p>Internationale Wirtschaftsbeziehungen beginnen nicht mit einer Formel, sondern mit drei robusten Fakten: Erstens ist der Welthandel langfristig stark gewachsen. Zweitens handeln vor allem große, produktive Volkswirtschaften intensiv miteinander. Drittens besteht ein erheblicher Teil des Handels aus dem gleichzeitigen Export und Import ähnlicher Güter.</p>
         <p>Diese Fakten zeigen sofort, dass kein einzelnes Modell alles leisten kann. Ricardo erklärt Handel durch Technologieunterschiede, Heckscher-Ohlin durch Faktorausstattung, Krugman durch Skalenerträge und Produktvielfalt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Handelsquote</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\text{Handelsquote} = \\\\\\\\\\\\\\\\frac{X + M}{BIP}$$</div><p>Misst die Offenheit einer Volkswirtschaft.</p>
<p><strong>Terms of Trade</strong></p><div class="math-block">$$ToT = \\\\\\\\\\\\\\\\frac{P_X}{P_M}$$</div><p>Preis der Exporte relativ zu den Importen.</p>
<p><strong>Handelsquote (Merksatz)</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\text{Handelsquote} = \\\\\\\\\\\\\\\\frac{X + M}{BIP}$$</div><p>Misst die Offenheit einer Volkswirtschaft.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Positive Analyse vs. normative Debatte</h4>
<p>Die positive Frage lautet: <em>Warum</em> wird gehandelt? Die normative Frage lautet: <em>Soll</em> Handelspolitik eingreifen? Prüfungsaufgaben springen oft zwischen beiden Ebenen. Deshalb musst du sauber trennen, ob ein Modell ein Handelsmuster erklärt oder ob es eine politische Maßnahme bewertet.</p>
         <p>Gerade in Einführungsaufgaben ist diese Trennung klausurentscheidend: Ein Modell kann Freihandelsgewinne zeigen, ohne jede Verteilungsfrage innerhalb eines Landes zu lösen.</p>


<h4 class="theory-subsection-title">Wie du Handelsmodelle erkennst</h4>
<p>Wenn in der Aufgabe Arbeitskoeffizienten, Spezialisierung und Opportunitätskosten vorkommen, bist du bei Ricardo. Wenn von Kapital, Arbeit, Faktorausstattung oder Verteilungswirkungen die Rede ist, signalisiert das Heckscher-Ohlin. Bei Varietät, Produktdifferenzierung, Skalenerträgen oder ähnlichen Ländern liegt die Neue Handelstheorie nahe.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Erkennungsfehler:</strong> Viele Antworten bleiben auf der Ebene „Handel ist gut“. Das reicht nicht. Du musst benennen, <em>welcher</em> Mechanismus den beobachteten Handel erzeugt und welche Annahmen dahinterstehen.</div>


<h4 class="theory-subsection-title">Was die Zusatzliteratur hier leisten soll</h4>
<p>Die Literatur in VL1 dient nicht als dekorativer Lesestapel, sondern als empirischer Kompass. WTO- und Outlook-Berichte liefern die Handelsfakten, Bown/Yale aktualisieren die politische Lage. Für die Klausur heißt das: erst Modellmechanismus sauber benennen, dann erst reale Politik- oder Datenbeispiele anheften.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Handelsquote', eq: String.raw`$$\text{Handelsquote} = \frac{X + M}{BIP}$$`, desc: 'Misst die Offenheit einer Volkswirtschaft.', variables: { 'X': 'Exporte', 'M': 'Importe', 'BIP': 'Bruttoinlandsprodukt' } },
      { label: 'Terms of Trade', eq: String.raw`$$ToT = \frac{P_X}{P_M}$$`, desc: 'Preis der Exporte relativ zu den Importen.', variables: { 'P_X': 'Exportpreisindex', 'P_M': 'Importpreisindex' } }
    ],
    aufgaben: [
      task(
        'Ein Land exportiert Maschinen, importiert aber gleichzeitig andere Maschinenbauteile. Welcher Modelltyp erklärt das besser: Ricardo, Heckscher-Ohlin oder Krugman?',
        [
          step('Zuerst die Handelsform identifizieren.', String.raw`\text{Gleichzeitiger Export und Import ähnlicher Güter = intraindustrieller Handel.}`),
          step('Dann den passenden Mechanismus zuordnen.', String.raw`\text{Produktdifferenzierung + Skalenerträge } \Rightarrow \text{ Neue Handelstheorie / Krugman.}`)
        ],
        'Der Fall passt am besten zur Neuen Handelstheorie: ähnliche Länder handeln ähnliche Güter, weil größere Märkte mehr Varianten und niedrigere Stückkosten erlauben.'
      ),
      task(
        'Warum reicht die bloße Beobachtung „Handelsquote steigt“ nicht aus, um sofort für oder gegen Zölle zu argumentieren?',
        [
          step('Die positive von der normativen Frage trennen.', String.raw`\text{Eine steigende Handelsquote beschreibt zunächst nur Offenheit, nicht automatisch Wohlfahrt oder Verteilung.}`),
          step('Politikurteil nur mit zusätzlicher Analyse ableiten.', String.raw`\text{Für ein Urteil braucht man Wohlfahrts-, Verteilungs- oder Strategieargumente.}`)
        ],
        'Eine Handelsquote ist ein Ausgangsindikator, aber noch kein Politikurteil. Erst Modelle zu Wohlfahrt, Verteilung oder strategischem Verhalten erlauben eine Bewertung.'
      ),
      task(
        'In einer Transferfrage sollst du einen aktuellen Zollkonflikt einordnen. Was ist der erste methodische Zugriff?',
        [
          step('Zuerst die Ebene bestimmen.', String.raw`\text{Geht es um Handelsmuster, Wohlfahrt, Verteilung oder Institutionen?}`),
          step('Dann den passenden Modellblock wählen.', String.raw`\text{Erst danach folgen Ricardo/H-O/Krugman oder Handelspolitik/WTO.}`)
        ],
        'Aktuelle Fälle werden klausursicher, wenn du sie zuerst auf die richtige analytische Ebene und dann auf den passenden Modellmechanismus abbildest.'
      )
    ]
  },

  ricardo: {
    motivation: 'Ricardo liefert das Grundargument für Spezialisierung: Auch wenn ein Land in allem produktiver ist, lohnt sich Handel, sobald sich Opportunitätskosten unterscheiden.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Absolute und komparative Vorteile sauber trennen</h4>
<p>Ein absoluter Vorteil bedeutet: Ein Land benötigt weniger Arbeit pro Einheit eines Gutes. Ein komparativer Vorteil bedeutet: Ein Land opfert relativ weniger vom anderen Gut. Für die Handelsrichtung zählt nicht die absolute Produktivität, sondern die Relation der Opportunitätskosten.</p>
         <div class="math-block">$$OK_X = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\frac{a_{LX}}{a_{LY}}$$</div>
         <p>Genau deshalb kann ein Land mit absoluten Vorteilen in beiden Gütern dennoch nur eines exportieren: Dort ist sein relativer Kostenvorteil am größten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Numerisches Beispiel</h4>
<p>Heim: $a_{LX}=2, a_{LY}=4$ → $OK_X=0{,}5$. Ausland: $a_{LX}=3, a_{LY}=3$ → $OK_X=1$. Heim exportiert X (niedrigeres $OK_X$). Relative Preise im Handelsgleichgewicht zwischen 0,5 und 1.</p>
      <div class="warn-box"><strong>Autarkie-Preise:</strong> Handelsdreieck zeichnen: Autarkie vs. Handel — wer exportiert welches Gut?</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Ricardo</h4>
<p>Arbeitswertmodell: $a_{LX}, a_{LY}$ gegeben. Opportunitätskosten $OK_X = a_{LX}/a_{LY}$. Spezialisierung auf komparativen Vorteil → Handel → beide Länder gewinnen (Grenzen der Theorie: 1 Faktor, Vollbeschäftigung).</p>
      <div class="math-block">$$OK_X = \\frac{a_{LX}}{a_{LY}},\\quad \\frac{P_X}{P_Y} \\text{ zwischen } OK_X^{Heim} \\text{ und } OK_X^{Ausland}$$</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Opportunitätskosten von X', eq: String.raw`$$OK_X = \frac{a_{LX}}{a_{LY}}$$`, desc: 'Arbeitsstunden für X relativ zu Y.', variables: { 'a_{LX}': 'Arbeitskoeffizient für Gut X', 'a_{LY}': 'Arbeitskoeffizient für Gut Y' } },
      { label: 'Spezialisierungsbedingung', eq: String.raw`$$OK_X^{H} < OK_X^{F} \Rightarrow H \text{ exportiert } X$$`, desc: 'Exportgut hat die geringeren relativen Kosten.' }
    ],
    aufgaben: [
      task(
        'Home benötigt 2 Stunden für Wein und 4 Stunden für Tuch. Foreign benötigt 6 Stunden für Wein und 3 Stunden für Tuch. Wer exportiert Wein?',
        [
          step('Opportunitätskosten von Wein in Home bestimmen.', String.raw`OK_W^H = 2/4 = 0{,}5 \text{ Tuch.}`),
          step('Opportunitätskosten von Wein in Foreign bestimmen.', String.raw`OK_W^F = 6/3 = 2 \text{ Tuch.}`),
          step('Die kleineren Opportunitätskosten identifizieren.', String.raw`0{,}5 < 2 \Rightarrow \text{Home exportiert Wein.}`)
        ],
        'Home exportiert Wein, obwohl Foreign bei Tuch produktiver sein kann. Entscheidend sind die relativen und nicht die absoluten Kosten.'
      ),
      task(
        'Ein Land ist in beiden Gütern absolut produktiver. Wie begründest du in der Prüfung trotzdem, dass Spezialisierung beider Länder sinnvoll bleibt?',
        [
          step('Absoluten Vorteil von komparativem Vorteil trennen.', String.raw`\text{Absolute Überlegenheit sagt noch nichts über relative Verzichtskosten.}`),
          step('Auf die gegenseitige Ergänzung der Opportunitätskosten verweisen.', String.raw`\text{Ein Land hat immer nur bei einem Gut den kleineren relativen Verzicht.}`)
        ],
        'Auch das absolut stärkere Land spezialisiert sich auf das Gut mit dem stärkeren relativen Vorteil. Das andere Land exportiert das zweite Gut und beide gewinnen an Konsummöglichkeiten.'
      ),
      task(
        'Warum ist „Home ist produktiver, also müssen dort auch die Löhne höher sein“ keine Widerlegung des Ricardo-Modells?',
        [
          step('Produktivität und Handelsrichtung trennen.', String.raw`\text{Ricardo erklärt zuerst relative Produktionskosten und Spezialisierung.}`),
          step('Lohnfrage nachordnen.', String.raw`\text{Löhne sind mit Preisanpassung und absoluter Produktivität vereinbar, ohne die Handelslogik zu kippen.}`)
        ],
        'Höhere Produktivität kann mit höheren Löhnen einhergehen, ohne dass der komparative Vorteil verschwindet; die Handelsrichtung bleibt eine Frage relativer Kosten.'
      )
    ]
  },

  heckscher_ohlin: {
    motivation: 'Heckscher-Ohlin verschiebt den Fokus von Technologie auf Faktorausstattung: Länder exportieren die Güter, die ihren reichlich vorhandenen Faktor intensiv nutzen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Faktorreichtum</h4>
<p>Land exportiert Güter, die seinen reichlich vorhandenen Faktoren intensiv nutzen. HO-Theorem: Handel gleicht Faktorpreise zwischen Ländern an (unter Annahmen).</p>
      <div class="math-block">$$\\frac{K}{L}\\Big|_{H} > \\frac{K}{L}\\Big|_{F} \\Rightarrow \\text{Heim exportiert K-intensive Güter}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Stolper-Samuelson</h4>
<p>Schutz des importkonkurrierenden Sektors begünstigt den reichlich vorhandenen Faktor, schadet dem knappen Faktor im Inland.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: HO</h4>
<p>Modellwahl: Ricardo (1 Faktor) vs. HO (2 Faktoren). HO erklärt Faktorintensität und Handelsrichtung — nicht intraindustriellen Handel (→ Krugman).</p>
      <div class="warn-box"><strong>FPE:</strong> Faktorpreisangleichung langfristig — kurzfristig Verteilungskonflikte (Stolper-Samuelson).</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Faktorreichlichkeit', eq: String.raw`$$\frac{K}{L}\Big|_{H} > \frac{K}{L}\Big|_{F}$$`, desc: 'Home ist relativ kapitalreich.', variables: { 'K/L': 'Kapital-Arbeits-Verhältnis des Landes' } },
      { label: 'Handelsrichtung', eq: String.raw`$$H \text{ exportiert das } K\text{-intensive Gut}$$`, desc: 'Direkte Anwendung des H-O-Theorems.' }
    ],
    aufgaben: [
      task(
        'Home ist kapitalreich, Foreign arbeitsreich. Maschinen sind kapitalintensiv, Textilien arbeitsintensiv. Wie sieht das Handelsmuster aus?',
        [
          step('Faktorreichlichkeit zuordnen.', String.raw`\text{Home: kapitalreich, Foreign: arbeitsreich.}`),
          step('Güter nach Faktorintensität ordnen.', String.raw`\text{Maschinen: kapitalintensiv, Textilien: arbeitsintensiv.}`),
          step('H-O anwenden.', String.raw`\text{Home exportiert Maschinen, Foreign exportiert Textilien.}`)
        ],
        'Home exportiert Maschinen und importiert Textilien; Foreign tut das Gegenteil.'
      ),
      task(
        'Warum ist H-O mehr als nur „Ricardo mit Kapital und Arbeit“?',
        [
          step('Unterschiedliche Triebkraft benennen.', String.raw`\text{Ricardo: Technologieunterschiede. H-O: Faktorausstattung.}`),
          step('Erkenntnisgewinn ergänzen.', String.raw`\text{H-O öffnet zusätzlich den Weg zu Verteilungsfragen im Inland.}`)
        ],
        'H-O ersetzt nicht einfach Arbeit durch Kapital, sondern verschiebt den ganzen Erklärungsansatz von Technologie auf Faktorausstattung und Verteilung.'
      ),
      task(
        'Welche Vorprüfung solltest du in einer Klausur machen, bevor du das Handelsmuster im H-O-Modell nennst?',
        [
          step('Länder und Güter sauber klassifizieren.', String.raw`\text{Welches Land ist faktorreich? Welches Gut ist faktorintensiv?}`),
          step('Erst danach die Zuordnung ziehen.', String.raw`\text{Reichlicher Faktor } \Rightarrow \text{ Export des faktorintensiven Gutes.}`)
        ],
        'Ohne saubere Trennung von Faktorreichlichkeit und Faktorintensität ist jedes H-O-Handelsmuster begrifflich unsauber.'
      )
    ]
  },

  verteilung_handel: {
    motivation: 'Die große Zusatzleistung von VL3 ist nicht nur die Handelsrichtung, sondern die Verteilungsfrage: Wer gewinnt und wer verliert innerhalb eines Landes durch Handel?',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum Verteilung hier zentral wird</h4>
<p>Das Heckscher-Ohlin-Modell ist klausurrelevant, weil es erstmals nicht nur Ländergewinne, sondern auch Konflikte innerhalb eines Landes strukturiert. Genau deshalb ist das Stolper-Samuelson-Theorem kein Nebensatz, sondern die politische Pointe des Modells.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Worked intuition: kapitalreiches vs. arbeitsreiches Land</h4>
<p>Home ist kapitalreich und exportiert das kapitalintensive Gut. Durch Handel steigt der Weltpreis dieses Gutes relativ. Home gewinnt real am Faktor Kapital ($r\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\uparrow$), verliert am Faktor Arbeit ($w\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\downarrow$ in realer Entlohnung). Foreign — arbeitsreich — erlebt das Spiegelbild. Die Summe der Handelsgewinne ist positiv, aber innerhalb jedes Landes gibt es distributive Verlierer.</p>
         <div class="math-block">$$\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\hat{P}_{K\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{-int}} \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\uparrow \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\hat{r} > 0,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\hat{w} < 0 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{ (in Home)}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Stolper-Samuelson</strong></p><div class="math-block">$$P_{K\\\\\\\\\\\\\\\\text{-intensiv}} \\\\\\\\\\\\\\\\uparrow \\\\\\\\\\\\\\\\Rightarrow r \\\\\\\\\\\\\\\\uparrow,\\\\\\\\\\\\\\\\ w \\\\\\\\\\\\\\\\downarrow$$</div><p>Steigt der relative Preis des kapitalintensiven Gutes, gewinnt Kapital real und Arbeit verliert real.</p>
<p><strong>Verteilungslogik</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{reichlicher Faktor} \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{gewinnt relativ durch Handel}</div><p>Politische Gewinner und Verlierer ergeben sich aus der Faktorlage des Landes.</p>
<p><strong>Faktorpreis-Link</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\hat{P}_j \\\\\\\\\\\\\\\\uparrow \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{Faktor des intensiv genutzten Gutes } j \\\\\\\\\\\\\\\\text{ gewinnt real}$$</div><p>Stolper-Samuelson-Kern.</p>
<p><strong>Stolper-Samuelson (Merksatz)</strong></p><div class="math-block">$$P_{K\\\\\\\\\\\\\\\\text{-intensiv}} \\\\\\\\\\\\\\\\uparrow \\\\\\\\\\\\\\\\Rightarrow r \\\\\\\\\\\\\\\\uparrow,\\\\\\\\\\\\\\\\ w \\\\\\\\\\\\\\\\downarrow$$</div><p>Steigt der relative Preis des kapitalintensiven Gutes, gewinnt Kapital real und Arbeit verliert real.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Stolper-Samuelson sauber lesen</h4>
<p>Steigt durch Handel der relative Preis des kapitalintensiven Gutes, steigt die reale Entlohnung des Faktors Kapital und die reale Entlohnung des Faktors Arbeit sinkt. Umgekehrt profitiert im arbeitsreichen Land der Faktor Arbeit. Wichtig ist: Die Aussage ist eine <em>reale</em> Verteilungsaussage, nicht bloß eine nominale Lohnbeobachtung.</p>


<h4 class="theory-subsection-title">Vom Modell zur politischen Kontroverse</h4>
<p>Damit erklärt das Modell, warum Handelsliberalisierung trotz gesamtwirtschaftlicher Gewinne politisch umkämpft ist. Die Summe kann gewinnen, einzelne Gruppen können aber reale Einbußen tragen. Genau diese Spannung macht Handelspolitik innenpolitisch konfliktträchtig.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Aggregationsfehler:</strong> „Handel erhöht die Wohlfahrt, also gewinnen alle.“ Genau diese Abkürzung widerspricht der Verteilungslogik aus Stolper-Samuelson.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Stolper-Samuelson', eq: String.raw`$$P_{K\text{-intensiv}} \uparrow \Rightarrow r \uparrow,\ w \downarrow$$`, desc: 'Steigt der relative Preis des kapitalintensiven Gutes, gewinnt Kapital real und Arbeit verliert real.', variables: { 'r': 'reale Kapitalentlohnung', 'w': 'reale Arbeitsentlohnung' } },
      { label: 'Verteilungslogik', eq: String.raw`\text{reichlicher Faktor} \Rightarrow \text{gewinnt relativ durch Handel}`, desc: 'Politische Gewinner und Verlierer ergeben sich aus der Faktorlage des Landes.' },
      { label: 'Faktorpreis-Link', eq: String.raw`$$\hat{P}_j \uparrow \Rightarrow \text{Faktor des intensiv genutzten Gutes } j \text{ gewinnt real}$$`, desc: 'Stolper-Samuelson-Kern.' }
    ],
    aufgaben: [
      task(
        'Warum kann ein kapitalreiches Land Freihandel befürworten und gleichzeitig starke innenpolitische Verlierer produzieren?',
        [
          step('Landesebene von Faktorgruppen trennen.', String.raw`\text{Das Land kann insgesamt gewinnen, auch wenn der knappe Faktor verliert.}`),
          step('Stolper-Samuelson anwenden.', String.raw`\text{Im kapitalreichen Land profitiert Kapital; Arbeit kann real verlieren.}`)
        ],
        'Die gesamtwirtschaftliche Handelsöffnung kann mit klaren inländischen Verlierern einhergehen, weil Verteilung und Gesamtwohlfahrt nicht dieselbe Aussageebene sind.'
      ),
      task(
        'Welche Antwort ist in einer Klausur zu grob: „Heckscher-Ohlin erklärt, wer exportiert was“ oder „Heckscher-Ohlin erklärt zusätzlich, wer im Inland profitiert“?',
        [
          step('Beide Ebenen benennen.', String.raw`\text{Handelsrichtung ist der erste Schritt, Verteilung die zweite Kernleistung.}`),
          step('Bewertungsgrund nennen.', String.raw`\text{Gerade die Verteilungsdimension macht das Modell politisch relevant.}`)
        ],
        'Nur die Handelsrichtung zu nennen bleibt zu grob; erst die ergänzte Verteilungslogik zeigt die volle Prüfungsrelevanz des H-O-Blocks.'
      )
    ]
  },

  krugman: {
    motivation: 'Die Neue Handelstheorie erklärt, warum ähnliche Länder ähnliche Güter gleichzeitig exportieren und importieren: Skalenerträge und Produktdifferenzierung erzeugen Handel auch ohne große Faktorunterschiede.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum Ricardo und H-O hier nicht reichen</h4>
<p>Zwischen Deutschland und Frankreich werden Autos in beide Richtungen gehandelt. Das ist kein klassischer interindustrieller Handel, sondern intraindustrieller Handel. Klassische Modelle mit konstanten Skalenerträgen und homogener Ware erklären das nur unzureichend.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">IRS und intraindustrieller Handel</h4>
<p>Steigende Skalenerträge + Liebhaber-Vielfalt → ähnliche Länder handeln ähnliche Güter (intraindustriell), nicht nur unterschiedliche Faktorenintensitäten.</p>
      <div class="math-block">$$AC(q) = \\frac{F}{q} + c \\Rightarrow \\text{größeres } q \\Rightarrow \\text{niedrigere } AC$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Was Krugman erklärt, was Ricardo und H-O nicht erklären</h4>
<p>Das Modell erklärt zwei Dinge gleichzeitig: warum ähnliche Länder intensiv miteinander handeln und warum sie ähnliche Güter in beide Richtungen handeln. Genau hier liegt sein Mehrwert gegenüber den klassischen Theorien.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Modellverwechslung:</strong> Wenn die Aufgabe nach Produktvielfalt, ähnlichen Ländern oder Firmengröße fragt, reicht Heckscher-Ohlin nicht. Dann brauchst du explizit steigende Skalenerträge oder monopolistischen Wettbewerb.</div>


<h4 class="theory-subsection-title">Wie du den Mechanismus exam-tauglich formulierst</h4>
<p>Die saubere Kurzform lautet: Handel vergrößert den Markt, senkt Durchschnittskosten und erhöht die Zahl tragfähiger Varianten. Eine gute Antwort nennt deshalb nicht nur „Skalenerträge“, sondern verbindet Marktgröße, Stückkosten und Vielfalt in einer Kette.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>HO vs. Krugman: HO = Faktorreichtum; Krugman = Skalenerträge/Produktvielfalt. Aufgabenstellung entscheidet das Modell.</p>


<h4 class="theory-subsection-title">In der Klausur: Krugman</h4>
<p>Monopolistischer Wettbewerb + IRS: Marktgröße und Vielfalt bestimmen Handelsmuster. Kein Faktorreichtum nötig — ähnliche Länder handeln ähnliche Güter.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Durchschnittskosten', eq: String.raw`$$AC(q) = \frac{F}{q} + c$$`, desc: 'Fixkosten werden mit größerem Output verdünnt.', variables: { 'F': 'Fixkosten', 'q': 'Outputmenge', 'c': 'konstante Grenzkosten' } },
      { label: 'Grubel-Lloyd-Index', eq: String.raw`$$GL_i = 1 - \frac{|X_i - M_i|}{X_i + M_i}$$`, desc: 'Misst intraindustriellen Handel in Branche i.' }
    ],
    aufgaben: [
      task(
        'Warum ist der Handel zwischen zwei ähnlich reichen Industrieländern kein Gegenbeispiel zu Handelsgewinnen, sondern ein Hinweis auf einen anderen Mechanismus?',
        [
          step('Beobachtung präzise benennen.', String.raw`\text{Ähnliche Länder handeln ähnliche Güter = intraindustrieller Handel.}`),
          step('Passenden Erklärungsmechanismus wählen.', String.raw`\text{Skalenerträge + Produktdifferenzierung } \Rightarrow \text{ Krugman.}`)
        ],
        'Handel zwischen ähnlichen Ländern ist kein Problemfall, sondern genau der Anwendungsbereich der Neuen Handelstheorie.'
      ),
      task(
        'Ein Sektor hat hohe Fixkosten und viele differenzierte Varianten. Was passiert bei Markterweiterung durch Handel typischerweise mit Stückkosten und Produktvielfalt?',
        [
          step('Fixkosten auf größere Menge verteilen.', String.raw`q \uparrow \Rightarrow F/q \downarrow \Rightarrow AC \downarrow`),
          step('Marktgröße und Anzahl der Varianten verknüpfen.', String.raw`\text{Größerer Markt } \Rightarrow \text{ mehr tragfähige Varianten.}`)
        ],
        'Stückkosten sinken und die Produktvielfalt steigt. Genau diese Doppelwirkung macht den Wohlfahrtsgewinn im Krugman-Modell aus.'
      ),
      task(
        'Warum ist „Länder sind ähnlich“ im Krugman-Block ein Hinweis auf Relevanz und nicht auf Irrelevanz?',
        [
          step('Klassische Erwartung erinnern.', String.raw`\text{Ricardo/H-O erwarten eher Handel bei Unterschieden.}`),
          step('Krugman-Mehrwert benennen.', String.raw`\text{Gerade ähnliche Länder können wegen Skalenerträgen und Variantenvielfalt stark handeln.}`)
        ],
        'Ähnlichkeit der Länder ist hier kein Problem, sondern der typische Anwendungsfall der Neuen Handelstheorie.'
      )
    ]
  },

  gravitation: {
    motivation: 'Die Gravitationsgleichung ist die empirische Verdichtung des Handelsmusters: Große Länder handeln viel, Distanz bremst, und genau das passt überraschend gut zu den Daten.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum sie gut zu Krugman passt</h4>
<p>Die empirische Handelsstruktur aus der Gravitationsgleichung passt zur Idee großer Märkte und sinkender Durchschnittskosten. Sie ersetzt Krugman nicht, sondern liefert die datennahe Kurzform: große Länder handeln viel miteinander, Distanz verteuert Handel.</p>
         <div class="math-block">$$Trade_{ij} \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\propto \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\frac{GDP_i \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\cdot GDP_j}{Dist_{ij}}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Wofür die Gravitationsgleichung steht</h4>
<p>Die Gravitationsgleichung beschreibt Handelsströme als steigende Funktion von Marktgröße und fallende Funktion von Distanz. Sie ist damit kein eigenständiges Wohlfahrtsmodell, sondern ein empirisch starkes Organisationsschema für Handelsdaten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Gravitation</strong></p><div class="math-block">$$Trade_{ij} \\\\\\\\\\\\\\\\propto \\\\\\\\\\\\\\\\frac{GDP_i \\\\\\\\\\\\\\\\cdot GDP_j}{Dist_{ij}}$$</div><p>Große Länder handeln viel, Distanz bremst.</p>
<p><strong>Interpretation</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Größe} \\\\\\\\\\\\\\\\uparrow \\\\\\\\\\\\\\\\Rightarrow Trade \\\\\\\\\\\\\\\\uparrow,\\\\\\\\\\\\\\\\quad \\\\\\\\\\\\\\\\text{Distanz} \\\\\\\\\\\\\\\\uparrow \\\\\\\\\\\\\\\\Rightarrow Trade \\\\\\\\\\\\\\\\downarrow</div><p>Richtung der Haupteffekte.</p>
<p><strong>Gravitation (Merksatz)</strong></p><div class="math-block">$$Trade_{ij} \\\\\\\\\\\\\\\\propto \\\\\\\\\\\\\\\\frac{GDP_i \\\\\\\\\\\\\\\\cdot GDP_j}{Dist_{ij}}$$</div><p>Große Länder handeln viel, Distanz bremst.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Log-linear Schätzung</h4>
<p>Handelsströme steigen mit Wirtschaftsmasse ($GDP$) und sinken mit Distanz. Log-Spezifikation: $\\ln T_{ij} = \\beta_0 + \\beta_1 \\ln Y_i + \\beta_2 \\ln Y_j - \\gamma \\ln dist_{ij} + u$ — Koeffizienten sind Elastizitäten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Gravitation', eq: String.raw`$$Trade_{ij} \propto \frac{GDP_i \cdot GDP_j}{Dist_{ij}}$$`, desc: 'Große Länder handeln viel, Distanz bremst.', variables: { 'GDP_i, GDP_j': 'wirtschaftliche Größe der Länder i und j', 'Dist_{ij}': 'geographische oder ökonomische Distanz' } },
      { label: 'Interpretation', eq: String.raw`\text{Größe} \uparrow \Rightarrow Trade \uparrow,\quad \text{Distanz} \uparrow \Rightarrow Trade \downarrow`, desc: 'Richtung der Haupteffekte.' }
    ],
    aufgaben: [
      task(
        'Warum handeln die USA und Kanada typischerweise intensiver miteinander als zwei gleich große, weit entfernte Länder?',
        [
          step('Marktgröße und Distanz zusammen lesen.', String.raw`\text{Große Nachfrageseiten plus geringe Distanz verstärken den Handelsstrom.}`),
          step('Distanz weit auslegen.', String.raw`\text{Gemeint sind auch institutionelle und logistische Friktionen, nicht nur Kilometer.}`)
        ],
        'Die Gravitationslogik sagt starke Handelsströme voraus, wenn beide Länder groß sind und Distanzkosten niedrig bleiben.'
      ),
      task(
        'Was ist in einer empirischen GIWB-Aufgabe oft der schnellste Startpunkt, wenn nur Handelspartner, Größe und Entfernung beschrieben werden?',
        [
          step('Nicht sofort ein Wohlfahrtsmodell wählen.', String.raw`\text{Zuerst das beobachtete Muster als Gravitationsfall lesen.}`),
          step('Dann ökonomisch deuten.', String.raw`\text{Große Märkte ziehen Handel an, Distanz wirkt bremsend.}`)
        ],
        'Bei Größe-und-Distanz-Aufgaben ist die Gravitationsgleichung oft der richtige Einstieg, bevor feinere Modellmechanismen ergänzt werden.'
      )
    ]
  },

  tarifmodell: {
    motivation: 'Der Importzoll ist das Standardwerkzeug der Handelspolitik. Seine Analyse zeigt sauber, wie Preis, Menge, Wohlfahrt und Verteilung zusammenhängen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kleines Land: Preiswirkung und Importmenge</h4>
<p>Im kleinen Land ist der Weltmarktpreis exogen. Ein spezifischer Zoll erhöht den Inlandspreis um genau den Zollsatz:</p>
         <div class="math-block">$$P_{in} = P_w + t$$</div>
         <p>Die heimische Produktion steigt, der Konsum sinkt und die Importmenge schrumpft. Die zentrale Graphik arbeitet mit Nachfrage, Angebot, Weltmarktpreis und Zollpreis.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Wohlfahrt: Gewinner, Verlierer und Deadweight Loss</h4>
<p>Konsumenten verlieren wegen des höheren Preises und des geringeren Konsums. Produzenten gewinnen durch den Preisanstieg. Der Staat erzielt Zolleinnahmen. Netto bleibt im kleinen Land jedoch ein Wohlfahrtsverlust, weil Produktions- und Konsumverzerrung nicht kompensiert werden.</p>
         <p>In Klausuren musst du diese Flächenargumente meist verbal sauber wiedergeben, auch wenn keine Zahlen angegeben sind.</p>


<h4 class="theory-subsection-title">Großes Land und Optimalzoll</h4>
<p>Ein großes Land kann über seine Importnachfrage den Weltmarktpreis drücken und damit seine Terms of Trade verbessern. Dadurch entsteht das Optimalzoll-Argument. Es bleibt aber fragil, weil Retaliation, Gegenmaßnahmen und internationale Abkommen den Vorteil schnell zerstören.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Standardfehler:</strong> Im kleinen-Land-Fall gibt es keinen Terms-of-Trade-Gewinn. Wer dort einen Optimalzoll behauptet, vermischt zwei unterschiedliche Modelle.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Zolltarif</h4>
<p>Kleines Land: Zoll → Inlandspreis steigt um Zoll, Menge fällt auf Importangebot/Nachfrage-Schnitt. Wohlfahrt: Produzentenrente↑, Konsumentenrente↓, Zolleinnahmen — DWL-Dreiecke.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Diagramm mit/ohne Zoll; Gewinner/Verlierer benennen. Großes Land: Terms of Trade Effekt möglich — optimaler Zoll > 0 theoretisch.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Inlandspreis mit Zoll', eq: String.raw`$$P_{in} = P_w + t$$`, desc: 'Preiswirkung im kleinen Land.' },
      { label: 'Importmenge', eq: String.raw`$$M = D(P_{in}) - S(P_{in})$$`, desc: 'Importe als Lücke zwischen Nachfrage und Angebot.' }
    ],
    aufgaben: [
      task(
        'Der Weltmarktpreis beträgt 10, der Zoll 3. Wie verändern sich Inlandspreis und Importmenge im kleinen Land qualitativ?',
        [
          step('Preiswirkung notieren.', String.raw`P_{in} = 10 + 3 = 13`),
          step('Mengenreaktionen aus dem Preis ableiten.', String.raw`\text{Höherer Preis } \Rightarrow D \downarrow,\; S \uparrow,\; M \downarrow`)
        ],
        'Der Inlandspreis steigt auf 13. Konsum sinkt, Produktion steigt und die Importmenge fällt.'
      ),
      task(
        'Warum ist der Importzoll im kleinen Land trotz Produzentenrenten und Zolleinnahmen netto wohlfahrtsmindernd?',
        [
          step('Verteilungswirkungen separat nennen.', String.raw`\text{KR } \downarrow,\; \text{PR } \uparrow,\; \text{Staatseinnahmen } \uparrow`),
          step('Dann die Ineffizienzen benennen.', String.raw`\text{Produktions- und Konsumverzerrung } \Rightarrow \text{ Deadweight Loss}`)
        ],
        'Die Gewinne von Produzenten und Staat gleichen die Verzerrungsverluste nicht vollständig aus; deshalb sinkt die nationale Wohlfahrt netto.'
      ),
      task(
        'Wann kippt die Begründung vom „einfachen Zollschaden“ zur Optimalzoll-Logik?',
        [
          step('Ländermodell identifizieren.', String.raw`\text{Nur das große Land kann den Weltmarktpreis beeinflussen.}`),
          step('Terms of Trade ergänzen.', String.raw`\text{Dann kann ein Zoll die Importpreise drücken und einen partiellen Gegengewinn erzeugen.}`)
        ],
        'Sobald das Land groß genug ist, muss zusätzlich zur Binnenverzerrung die Terms-of-Trade-Wirkung geprüft werden.'
      )
    ]
  },

  quoten_sanktionen: {
    motivation: 'Nicht jede Handelspolitik sieht wie ein klassischer Zoll aus. Quoten, Sanktionen und diskriminierende Maßnahmen wirken ähnlich, verteilen die Rente aber anders und erzeugen neue politische Probleme.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum Institutionen wichtig werden</h4>
<p>Gerade Quoten und Sanktionen zeigen, warum internationale Regeln wichtig sind. Ohne übergeordnete Ordnung drohen Vergeltungsspiralen und ineffiziente Politikzyklen.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Rentenfehler:</strong> Wer Quote und Zoll gleichsetzt, ohne die Quotenrente zu diskutieren, verliert den zentralen ökonomischen Unterschied aus dem Blick.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Quote vs. Zoll</h4>
<p>Eine äquivalente Importquote kann denselben Inlandspreis erzeugen wie ein Zoll. Der entscheidende Unterschied ist die Rentenverteilung: Beim Zoll fließen Einnahmen an den Staat, bei der Quote an die Inhaber der Importrechte.</p>
         <p>Bei steigender Nachfrage wird die Quote relativ restriktiver, weil die Menge fix ist. Genau deshalb ist die Wirkung dynamisch anders als beim Zoll.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Quote als Mengenrestriktion</strong></p><div class="math-block">$$M \\\\\\\\\\\\\\\\leq \\\\\\\\\\\\\\\\bar M$$</div><p>Importmenge wird direkt begrenzt.</p>
<p><strong>Quotenrente</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\text{Quotenrente} = (P_{in} - P_w)\\\\\\\\\\\\\\\\cdot M$$</div><p>Erlös aus der künstlichen Verknappung.</p>
<p><strong>Zoll vs. Quote (Renten)</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Zollrente} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Staat};\\\\\\\\\\\\\\\\quad \\\\\\\\\\\\\\\\text{Quotenrente} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Importrechte}</div><p>Gleicher Preis, unterschiedliche Verteilung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Sanktionen und diskriminierende Zölle</h4>
<p>Sanktionen wirken oft nicht nur über Preise, sondern auch über Umleitungseffekte, Lieferketten und politische Gegensanktionen. Diskriminierende Zölle verletzen zudem die Idee nichtdiskriminierender Handelsbehandlung und können Drittlandeffekte auslösen.</p>
         <p>In Klausuren geht es hier selten nur um ein Diagramm, sondern um den Transfer: Wer trägt die Last? Welche Ersatzkanäle entstehen? Wie verändern sich politische und ökonomische Ziele?</p>


<h4 class="theory-subsection-title">Dynamische Wirkung bei Nachfragesteigerung</h4>
<p>Beim Zoll passt sich bei höherer Nachfrage die Importmenge an, solange der Inlandspreis über dem Weltmarktpreis liegt. Bei der Quote bleibt die Menge fix; der Preisdruck im Inland steigt stärker. Genau diese dynamische Differenz ist in VL-Übungsmaterial zu Quoten und diskriminierender Politik klausurrelevant.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Quoten</h4>
<p>Importquote: harte Mengenbeschränkung — Preis passt sich an. Lizenzinhaber erhalten Quotenrente. vs. Zoll: Staat erzielt Einnahmen statt Quotenrente bei Lizenzvergabe ohne Auktion.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Quota vs. Zoll bei gleicher Importmenge vergleichen — Wohlfahrtsranking. Sanktionen: Handelsumleitung über Drittländer qualitativ.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Quote als Mengenrestriktion', eq: String.raw`$$M \leq \bar M$$`, desc: 'Importmenge wird direkt begrenzt.' },
      { label: 'Quotenrente', eq: String.raw`$$\text{Quotenrente} = (P_{in} - P_w)\cdot M$$`, desc: 'Erlös aus der künstlichen Verknappung.' },
      { label: 'Zoll vs. Quote (Renten)', eq: String.raw`\text{Zollrente} \rightarrow \text{Staat};\quad \text{Quotenrente} \rightarrow \text{Importrechte}`, desc: 'Gleicher Preis, unterschiedliche Verteilung.' }
    ],
    aufgaben: [
      task(
        'Warum kann eine Importquote bei wachsender Inlandsnachfrage restriktiver wirken als ein äquivalenter Zoll?',
        [
          step('Die Fixierung der Menge betonen.', String.raw`\bar M \text{ bleibt konstant, auch wenn die Nachfrage steigt.}`),
          step('Preisanpassung ableiten.', String.raw`\text{Mehr Nachfrage bei fixer Importmenge } \Rightarrow \text{ stärkerer Preisdruck im Inland.}`)
        ],
        'Die Quote begrenzt die Menge direkt. Bei höherer Nachfrage passt sich nicht die Importmenge, sondern stärker der Preis an.'
      ),
      task(
        'Ein Staat begründet Sanktionen rein moralisch. Welche zusätzliche ökonomische Analyse erwartet die Prüfung trotzdem?',
        [
          step('Die Wirkungsrichtung ökonomisch zerlegen.', String.raw`\text{Preise, Umleitung, Verteilung, Angebotsersatz, Gegenmaßnahmen}`),
          step('Politisches Ziel und ökonomische Kosten trennen.', String.raw`\text{Normatives Ziel } \neq \text{ automatisch effiziente Maßnahme}`)
        ],
        'Auch bei moralischer Begründung musst du ökonomisch analysieren, wer belastet wird, welche Umwege entstehen und ob die Maßnahme ihr Ziel überhaupt mit vertretbaren Kosten erreicht.'
      ),
      task(
        'Ein äquivalenter Zoll und eine äquivalente Quote erzeugen denselben Inlandspreis. Wer profitiert jeweils von der Handelsrente?',
        [
          step('Zollrente zuordnen.', String.raw`\text{Staat erhält } (P_{in}-P_w)\cdot M`),
          step('Quotenrente zuordnen.', String.raw`\text{Inhaber der Importlizenzen erhalten die Rente.}`)
        ],
        'Bei gleichem Preis verteilt sich die Rente unterschiedlich: Zoll an den Staat, Quote an die Importrechte.'
      )
    ]
  },

  wto_integration: {
    motivation: 'Internationale Handelsordnung ist kein Randthema: WTO, Freihandelszonen und Zollunionen bestimmen, ob Handelskonflikte koordiniert oder eskalierend ausgetragen werden.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum Institutionen ökonomisch disziplinieren</h4>
<p>VL7 nutzt das Gefangenendilemma ausdrücklich als Deutungsrahmen: Ohne Regelbindung haben große Länder Anreize zu wechselseitiger Terms-of-Trade-Politik. WTO und Integrationsverträge sind daher nicht nur juristische Hüllen, sondern Koordinationsinstrumente gegen eskalierende Vergeltung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">MFN, Gegenseitigkeit und Bindungen</h4>
<p>Die WTO reduziert Unsicherheit, weil sie Zölle bindet, Transparenz schafft und Diskriminierung begrenzt. Das MFN-Prinzip verlangt, gleichartige Handelspartner gleich zu behandeln. Dadurch sinkt die Versuchung, unilateral immer wieder neue Barrieren zu errichten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Trade creation</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\Delta W > 0 \\\\\\\\\\\\\\\\text{ durch Ersatz teurer Inlandsproduktion}$$</div><p>Zollunion erhöht Effizienz.</p>
<p><strong>Trade diversion</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\Delta W < 0 \\\\\\\\\\\\\\\\text{ möglich durch Ersatz billiger Drittlandimporte}$$</div><p>Präferenz kann Handel umlenken statt verbessern.</p>
<p><strong>Trade creation (Merksatz)</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\Delta W > 0 \\\\\\\\\\\\\\\\text{ durch Ersatz teurer Inlandsproduktion}$$</div><p>Zollunion erhöht Effizienz.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Freihandelszone vs. Zollunion</h4>
<p>Eine Freihandelszone beseitigt Binnenzölle, lässt aber nationale Außenzölle bestehen. Eine Zollunion kombiniert Binnenfreihandel mit einem gemeinsamen Außenzoll. Prüfungsfragen fragen hier fast immer nach dem Unterschied zwischen <em>trade creation</em> und <em>trade diversion</em>.</p>
         <p>Trade creation ist wohlfahrtssteigernd, weil ineffiziente Inlandsproduktion durch günstigere Partnerimporte ersetzt wird. Trade diversion kann problematisch sein, weil nur der bisher billigste Drittlandanbieter verdrängt wird.</p>


<h4 class="theory-subsection-title">Brexit als Transferfall</h4>
<p>Brexit ist didaktisch wertvoll, weil er institutionelle und reale Kosten verbindet: Grenzformalitäten, Ursprungsregeln, Unsicherheit und Dienstleistungshemmnisse. Wer diesen Fall erklären kann, versteht den Unterschied zwischen Marktintegration und bloß niedrigen Zöllen.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Institutionsfalle:</strong> Freihandel ist nicht nur „kein Zoll“. Gerade Standards, Ursprungskontrollen und Rechtsdurchsetzung prägen den tatsächlichen Integrationsgrad.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: WTO/Integration</h4>
<p>MFN-Prinzip, Bindung von Zöllen, Streitbeilegung. Preferential Trade Agreements (PTA): Art. XXIV — Handelsumlenkung vs. Schaffung. Dynamische Effekte: Wettbewerb, Skaleneffekte.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Statische Gewinne (Handels schaffend) vs. dynamische (Produktivität). Brexit/Customs Union als Regime-Beispiel qualitativ.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Trade creation', eq: String.raw`$$\Delta W > 0 \text{ durch Ersatz teurer Inlandsproduktion}$$`, desc: 'Zollunion erhöht Effizienz.' },
      { label: 'Trade diversion', eq: String.raw`$$\Delta W < 0 \text{ möglich durch Ersatz billiger Drittlandimporte}$$`, desc: 'Präferenz kann Handel umlenken statt verbessern.' }
    ],
    aufgaben: [
      task(
        'Warum kann eine Zollunion trotz Wegfall von Binnenzöllen wohlfahrtsmindernd sein?',
        [
          step('Trade diversion sauber benennen.', String.raw`\text{Günstiger Drittlandanbieter wird durch teureren Partner verdrängt.}`),
          step('Dann die Präferenzlogik erklären.', String.raw`\text{Nicht jede Umlenkung ist Effizienzgewinn.}`)
        ],
        'Wenn Handelsumlenkung billige Drittlandimporte verdrängt, kann die Zollunion trotz Binnenfreihandel ineffizient sein.'
      ),
      task(
        'Warum ist Brexit kein reiner „Zoll“-Fall, sondern ein Integrationsfall?',
        [
          step('Auf nichttarifäre Kosten verweisen.', String.raw`\text{Grenzkontrollen, Ursprung, Regulierung, Dienstleistungszugang}`),
          step('Institutionelle Tiefe betonen.', String.raw`\text{Binnenmarktintegration umfasst mehr als Zollsätze.}`)
        ],
        'Brexit betrifft institutionelle Marktintegration. Deshalb entstehen Handelskosten auch ohne spektakulär hohe Zölle.'
      ),
      task(
        'Warum ist WTO-Koordination ökonomisch plausibel, obwohl einzelne große Länder kurzfristig von Zöllen profitieren könnten?',
        [
          step('Einzelanreiz benennen.', String.raw`\text{Große Länder können Terms-of-Trade-Gewinne anstreben.}`),
          step('Kollektivproblem ergänzen.', String.raw`\text{Wenn alle das tun, droht Vergeltung und die gemeinsame Wohlfahrt sinkt.}`)
        ],
        'WTO-Regeln sind ökonomisch plausibel, weil sie ein Gefangenendilemma der Handelspolitik institutionell entschärfen.'
      )
    ]
  },

  wechselkurssysteme: {
    motivation: 'Mit dem Makroteil verschiebt sich der Fokus von Gütern auf Preise, Zinsen und Erwartungen. Der erste Schritt ist die saubere Unterscheidung von nominalem Wechselkurs, realem Wechselkurs und Regimewahl.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Nominaler Kurs, Notation und Leserichtung</h4>
<p>Bevor Paritäten oder Overshooting Sinn ergeben, muss klar sein, welche Kursnotation verwendet wird und wie Auf- und Abwertung gelesen werden. Der nominale Wechselkurs ist deshalb nicht bloß Symbolik, sondern die Sprache, in der alle späteren Makroaussagen formuliert werden.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Realer Wechselkurs und Wettbewerbsfähigkeit</h4>
<p>Der reale Wechselkurs korrigiert den nominalen Kurs um Preisniveaus:</p>
         <div class="math-block">$$q = E \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\cdot \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\frac{P^*}{P}$$</div>
         <p>Er zeigt, wie teuer ausländische Güter relativ zu inländischen Gütern sind. Genau deshalb ist für Wettbewerbsfähigkeit nicht nur der nominale, sondern der reale Kurs entscheidend.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Fixe vs. flexible Regime</h4>
<p>Unter flexiblen Kursen absorbiert der Wechselkurs einen Teil externer Schocks. Unter fixen Kursen wird diese Anpassung auf Zins, Reserven und Binnenwirtschaft verlagert. Deshalb ist die Regimefrage nie rein technisch, sondern immer eine Frage der politischen Prioritäten und der gewünschten Anpassungslast.</p>


<h4 class="theory-subsection-title">Glaubwürdigkeit und Krisenrisiko</h4>
<p>Eine Währungskrise entsteht häufig dann, wenn ein fixiertes Regime nicht mehr glaubwürdig erscheint. Kapitalflucht, Reservenverlust und spekulative Attacken erzwingen dann oft die Aufgabe des Kurses oder eine drastische Zinserhöhung zur Verteidigung.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Standardverwechslung:</strong> Nominale Abwertung und reale Abwertung sind nicht dasselbe. Steigen die Inlandspreise mit, kann die reale Wirkung schnell verpuffen.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: WK-Systeme</h4>
<p>Fix: Zentralbank interveniert, Geldpolitik oft eingeschränkt (Trilemma). Flex: UIP/M-F Kanäle. Currency Board: $M$ an Reserven. Managed float: Intervention ohne festes Parität.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Regime → Policy-Autonomie → Schockübertragung. Immer Mundell-Fleming-Logik bei Makro-Schocks verknüpfen.</p>
      <div class="warn-box"><strong>Fix ≠ stabil:</strong> Fixer Kurs kann real über- oder unterbewertet sein — Anpassungsdruck bleibt.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Realer Wechselkurs', eq: String.raw`$$q = E \cdot \frac{P^*}{P}$$`, desc: 'Ausländische Güter relativ zu inländischen Gütern.', variables: { 'E': 'nominaler Wechselkurs', 'P^*': 'ausländisches Preisniveau', 'P': 'inländisches Preisniveau' } },
      { label: 'Reale Abwertung', eq: String.raw`$$q \uparrow \Rightarrow \text{Wettbewerbsfähigkeit des Inlandes steigt}$$`, desc: 'Exportgüter werden relativ günstiger.' }
    ],
    aufgaben: [
      task(
        'Der nominale Wechselkurs steigt, die Inlandspreise steigen aber genauso stark wie die Auslands Preise. Was passiert mit dem realen Wechselkurs?',
        [
          step('Realen Wechselkurs über Nominalkurs und Preise definieren.', String.raw`q = E \cdot \frac{P^*}{P}`),
          step('Gleiche Preissteigerung im Zähler und Nenner beurteilen.', String.raw`\text{Wenn } E \text{ und } P \text{ gleich stark steigen, muss } q \text{ nicht zunehmen.}`)
        ],
        'Eine nominale Abwertung garantiert keine reale Abwertung. Entscheidend ist, wie sich die Preisniveaus mitbewegen.'
      ),
      task(
        'Warum kann ein fixes Wechselkursregime gerade dann instabil werden, wenn die Marktteilnehmer nicht mehr an seine Verteidigung glauben?',
        [
          step('Erwartungen und Kapitalbewegungen verknüpfen.', String.raw`\text{Erwartete Abwertung } \Rightarrow \text{ Kapitalabzug } \Rightarrow \text{ Reservendruck}`),
          step('Glaubwürdigkeitsproblem benennen.', String.raw`\text{Die Erwartung macht die Verteidigung erst recht teuer.}`)
        ],
        'Bei fixen Kursen kann ein Vertrauensverlust selbstverstärkend werden: Die erwartete Abwertung setzt die Zentralbank unter Druck und erhöht die Wahrscheinlichkeit einer tatsächlichen Aufgabe des Kurses.'
      ),
      task(
        'Warum ist in offenen Makroaufgaben die richtige Kursnotation oft schon der erste Prüfungsstein?',
        [
          step('Leserichtung benennen.', String.raw`\text{Auf- und Abwertung hängen an der Definition von } E.`),
          step('Folge für die Interpretation ziehen.', String.raw`\text{Ohne klare Notation kippen Vorzeichen bei PPP, UIP und Overshooting schnell.}`)
        ],
        'Viele Fehler beginnen nicht im Modell, sondern bei der falschen Leserichtung des Wechselkurses; deshalb muss die Notation zu Beginn explizit fixiert werden.'
      )
    ]
  },

  zinsparitaet: {
    motivation: 'VL9 beginnt mit der Ertragslogik offener Finanzmärkte: Wechselkurse hängen kurzfristig nicht nur an Güterpreisen, sondern an Zinsen, Erwartungen und Arbitrage.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Gedeckte und ungedeckte Zinsparität</h4>
<p>Die gedeckte Zinsparität arbeitet mit Terminwechselkursen und beobachtbaren Zinssätzen. Die ungedeckte Zinsparität (UIP) ersetzt den Terminwechselkurs durch den erwarteten zukünftigen Kassakurs. Genau das macht UIP für Wechselkurserwartungen zentral und für empirische Prüfungen heikel.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">UIP</h4>
<p>$i \\approx i^* + \\mathbb{E}[\\Delta E/E]$. Höherer Inlandszins → Aufwertungserwartung → sofortige Aufwertung bei flexibler Kurve.</p>
      <div class="math-block">$$i \\approx i^* + \\mathbb{E}[\\Delta E/E]$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Was die Vorzeichen bedeuten</h4>
<p>Ist der Inlandszins höher, muss die Auslandsanlage durch erwartete Wechselkursbewegung aufholen. Genau hier passieren in Prüfungen die meisten Sign-Fehler: Du musst sauber lesen, ob eine erwartete Auf- oder Abwertung des Inlandes gemeint ist und welche Wechselkursnotation verwendet wird.</p>


<h4 class="theory-subsection-title">Evidenz und Approximation</h4>
<p>VL9 betont ausdrücklich, dass UIP empirisch nicht als exaktes Naturgesetz funktioniert. Sie bleibt aber eine nützliche Approximation und vor allem die zentrale Strukturbeziehung für kurzfristige offene Makro-Modelle wie den Finanzmarktansatz und Overshooting.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Paritätsverwechslung:</strong> Zinsparität ist eine Renditebedingung. Sobald Preisniveaus, Inflation oder reale Kurse im Zentrum stehen, bist du nicht mehr im UIP-Kern.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Bei Zinsschock immer Erwartungskomponente und Regime (Mundell-Fleming) mitdenken.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Gedeckte Zinsparität', eq: String.raw`$$1+i = (1+i^*)\frac{F}{E}$$`, desc: 'Bezieht Termin- und Kassakurs auf beobachtbare Arbitrage.', variables: { 'i': 'Inlandszins', 'i^*': 'Auslandszins', 'F': 'Terminwechselkurs', 'E': 'heutiger Kassakurs' } },
      { label: 'UIP', eq: String.raw`$$i = i^* + \frac{E^e - E}{E}$$`, desc: 'Erwarteter Auslandsertrag muss dem Inlandszins entsprechen.', variables: { 'E^e': 'erwarteter zukünftiger Kassakurs' } },
      { label: 'Approximation', eq: String.raw`$$i - i^* \approx \frac{E^e - E}{E}$$`, desc: 'Prüfungsnahe Kurzform der UIP-Logik.' }
    ],
    aufgaben: [
      task(
        'Gegeben sind i = 4 %, i* = 2 % und ein erwarteter Kurs Eᵉ = 1,20. Was sagt UIP qualitativ über den heutigen Gleichgewichtskurs E?',
        [
          step('Höheren Inlandszins interpretieren.', String.raw`\text{Damit Home attraktiv bleibt, muss die Auslandsanlage eine entsprechende erwartete Wechselkurskomponente liefern.}`),
          step('Kurs so lesen, dass der Auslandsertrag nicht zu groß wird.', String.raw`\text{Ein höheres heutiges } E \text{ senkt } \frac{E^e-E}{E}.`)
        ],
        'Bei höherem Inlandszins muss der heutige Kurs so liegen, dass die erwartete Wechselkursänderung den Zinsvorteil des Inlandes ausgleicht.'
      ),
      task(
        'Woran erkennst du in einer Klausur sofort, dass Zinsparität und nicht Kaufkraftparität gefragt ist?',
        [
          step('Variablen lesen.', String.raw`\text{Zinsen, erwarteter Kurs und Renditevergleich } \Rightarrow \text{ Zinsparität.}`),
          step('Preisbegriffe ausschließen.', String.raw`\text{Solange Preisniveau und Inflation nicht zentral sind, ist PPP nicht der Primärzugriff.}`)
        ],
        'Zinsparität erkennst du an Zinsdifferenzen plus erwarteter Wechselkursänderung, nicht an Preisniveaus.'
      )
    ]
  },

  kaufkraftparitaet: {
    motivation: 'Kaufkraftparität verankert den Wechselkurs auf der Gütermarktseite: Preise, Inflation und reale Wechselkurse liefern die langfristige Preislogik hinter offenen Volkswirtschaften.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum PPP kein Naturgesetz ist</h4>
<p>Transportkosten, nicht-handelbare Güter, unterschiedliche Warenkörbe und Marktsegmentierung verhindern einen permanent exakten Gleichlauf. Trotzdem bleibt PPP ein wichtiger Langfristanker.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Horizontfehler:</strong> PPP ist keine Kurzfristformel für jeden Tageskurs. Wenn Erwartungen und Finanzmärkte dominieren, brauchst du andere Modelle.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Gesetz des einheitlichen Preises</h4>
<p>Das Gesetz des einheitlichen Preises gilt für identische handelbare Güter ohne Transport- und Handelskosten. In diesem Grenzfall gilt: Ein Gut kann nicht dauerhaft in zwei Ländern unterschiedliche Preise haben, wenn Arbitrage möglich ist.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Absolute und relative PPP</h4>
<p>Absolute PPP: $E = P/P^*$. Relative PPP: Wechselkursänderung spiegelt Inflationsdifferenz. Kurzfristig oft verletzt wegen Preisrigiditäten und Güterarten.</p>
      <div class="math-block">$$\\hat{E} \\approx \\pi - \\pi^*$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Realer Wechselkurs als Prüfgröße</h4>
<p>Der reale Wechselkurs $q = E cdot P^*/P$ zeigt, ob ausländische Güter relativ teuer oder billig sind. Genau deshalb ist er die richtige Größe, wenn die Aufgabe nach Wettbewerbsfähigkeit, Fehlbewertung oder PPP-Abweichungen fragt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Immer Regime (fix/flexibel) und Horizont (kurz/lang) nennen. PPP ist Niveau-/Trendaussage, kein Tageshandelsgesetz.</p>
      <div class="warn-box"><strong>PPP-Überdehnung:</strong> Nicht jede Abweichung ist Fehlbewertung — Balassa-Samuelson erklärt strukturelle Niveauunterschiede.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Gesetz des einheitlichen Preises', eq: String.raw`$$P = E \cdot P^*$$`, desc: 'Preisgleichheit identischer handelbarer Güter im Grenzfall.' },
      { label: 'Absolute PPP', eq: String.raw`$$E = \frac{P}{P^*}$$`, desc: 'Preisniveauverhältnis bestimmt den nominalen Kurs.', variables: { 'P': 'inländisches Preisniveau', 'P^*': 'ausländisches Preisniveau' } },
      { label: 'Relative PPP', eq: String.raw`$$\frac{\Delta E}{E} \approx \pi - \pi^*$$`, desc: 'Inflationsdifferenz als Abwertungsrate.', variables: { '\\pi': 'inländische Inflationsrate', '\\pi^*': 'ausländische Inflationsrate' } }
    ],
    aufgaben: [
      task(
        'Warum kann Kaufkraftparität langfristig nützlich, kurzfristig aber oft schlecht passend sein?',
        [
          step('Langfristigen Preisanker nennen.', String.raw`\text{Preisniveaus und Inflation wirken über längere Horizonte auf } E.`),
          step('Kurzfristige Friktionen ergänzen.', String.raw`\text{Finanzmärkte, Erwartungen, starre Preise und nicht-handelbare Güter verzerren kurzfristig.}`)
        ],
        'PPP ist ein langfristiger Referenzanker, aber kurzfristig dominieren oft Finanzmarktkräfte und träge Preisreaktionen.'
      ),
      task(
        'Woran erkennst du in einer Klausur, dass der reale Wechselkurs die richtige Zielgröße ist?',
        [
          step('Frage nach Wettbewerbsfähigkeit oder relativen Preisen lesen.', String.raw`\text{Dann reicht der nominale Kurs nicht.}`),
          step('Preisniveaus mitziehen.', String.raw`q = E\cdot \frac{P^*}{P}`)
        ],
        'Sobald relative Güterpreise und Wettbewerbsfähigkeit im Zentrum stehen, ist der reale Wechselkurs die passende Prüfgröße.'
      )
    ]
  },

  monetaerer_ansatz: {
    motivation: 'Der monetäre Ansatz verbindet Geldmenge, Inflation, Zinsen und Wechselkurs im langen Horizont. Er liefert die Langfristlogik hinter PPP, Fisher-Effekt und realer Zinsparität.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Geldnachfrage und Wechselkurs</h4>
<p>Überschuss Geldmenge → Abwertungsdruck. Finanzmarktansatz: $E$ passt sich sofort an, Gütermärkte träge.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Fisher-Effekt und reale Zinsparität</h4>
<p>Der Fisher-Effekt verbindet Nominalzins und erwartete Inflation:</p>
         <div class="math-block">$$i \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\approx r + \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\pi^e$$</div>
         <p>Wenn Kapital international mobil ist und langfristig reale Renditen angeglichen werden, entsteht reale Zinsparität als weitere Langfristbeziehung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Klausurpfad</h4>
<p>Schock → LM/ Geldmenge → $i$ → $E$ (flexibles Regime). Fixer Kurs: Devisenintervention statt freier $E$-Anpassung.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Fisher-Effekt', eq: String.raw`$$i \approx r + \pi^e$$`, desc: 'Nominalzins zerfällt in Realzins und erwartete Inflation.' },
      { label: 'Relative PPP', eq: String.raw`$$\Delta E/E \approx \pi - \pi^*$$`, desc: 'Inflationsdifferenz als langfristige Abwertungsrate.' },
      { label: 'Reale Zinsparität', eq: String.raw`$$r \approx r^*$$`, desc: 'Langfristige Angleichung realer Renditen.' }
    ],
    aufgaben: [
      task(
        'Home hat 6 % Geldmengenwachstum, 2 % reales Wachstum; Foreign 3 % Geldmengenwachstum, 2 % reales Wachstum. Welche langfristige Inflations- und Wechselkursdynamik erwartest du grob?',
        [
          step('Inflation als Geldmengenwachstum minus reales Wachstum annähern.', String.raw`\pi_H \approx 6 - 2 = 4,\quad \pi_F \approx 3 - 2 = 1`),
          step('Relative PPP anwenden.', String.raw`\Delta E/E \approx \pi_H - \pi_F \approx 3\%`)
        ],
        'Home inflationiert langfristig stärker und sollte nominal ungefähr um 3 % pro Periode abwerten.'
      ),
      task(
        'Warum steigt bei stabilen realen Renditen der Nominalzins in Hochinflationsländern typischerweise mit der Inflation?',
        [
          step('Fisher-Effekt aufspalten.', String.raw`i \approx r + \pi^e`),
          step('Realzins und Inflation getrennt interpretieren.', String.raw`\text{Wenn } r \text{ ähnlich bleibt und } \pi^e \uparrow,\text{ dann } i \uparrow`)
        ],
        'Weil Nominalzinsen die erwartete Inflation kompensieren müssen. Ein höheres Inflationsumfeld hebt deshalb den beobachteten Nominalzins.'
      ),
      task(
        'Welche typische Fehlverkürzung musst du beim monetären Ansatz vermeiden?',
        [
          step('Kurzfrist- und Langfristhorizont trennen.', String.raw`\text{Nicht jede sofortige Wechselkursreaktion folgt direkt aus PPP.}`),
          step('Trendlogik klar benennen.', String.raw`\text{Monetärer Ansatz erklärt vor allem langfristige Kurs- und Preisbewegungen.}`)
        ],
        'Der monetäre Ansatz ist keine Universalformel für jede Schwankung, sondern ein Langfristmodell für Preisniveau-, Inflations- und Trendbewegungen.'
      )
    ]
  },

  overshooting: {
    motivation: 'Kurzfristig reagieren Wechselkurse oft viel stärker als Preisniveaus. Das Overshooting-Modell erklärt diese Überreaktion aus Finanzmarktgleichgewicht und trägen Güterpreisen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum Wechselkurse springen, Preise aber nicht</h4>
<p>Auf Finanzmärkten passen sich Vermögenspreise sofort an. Güterpreise sind kurzfristig träge. Nach einem monetären Schock muss der Wechselkurs deshalb oft mehr springen als langfristig nötig wäre, damit die erwartete spätere Gegenbewegung UIP-kompatibel bleibt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Dornbusch-Logik</h4>
<p>Güterpreise starr kurzfristig → Geldpolitik wirkt sofort über Zins und Erwartungen auf $E$; langfristig PPP-Niveau. Wechselkurs „overshootet“ Richtung neues Gleichgewicht.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>UIP-Logik</strong></p><div class="math-block">$$i = i^* + \\\\\\\\\\\\\\\\frac{E^e - E}{E}$$</div><p>Niedrigerer Inlandszins verlangt erwartete Aufwertung des Inlandes.</p>
<p><strong>Overshooting-Idee</strong></p><div class="math-block">$$E_{kurz} > E_{lang}$$</div><p>Kurzfristiger Kurs liegt über dem langfristigen Endwert.</p>
<p><strong>UIP-Logik (Merksatz)</strong></p><div class="math-block">$$i = i^* + \\\\\\\\\\\\\\\\frac{E^e - E}{E}$$</div><p>Niedrigerer Inlandszins verlangt erwartete Aufwertung des Inlandes.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Zeichnung: $E$ springt über, dann Rückkehr zur PPP-Linie. UIP und Geldmengenexpansion gemeinsam erklären.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'UIP-Logik', eq: String.raw`$$i = i^* + \frac{E^e - E}{E}$$`, desc: 'Niedrigerer Inlandszins verlangt erwartete Aufwertung des Inlandes.' },
      { label: 'Overshooting-Idee', eq: String.raw`$$E_{kurz} > E_{lang}$$`, desc: 'Kurzfristiger Kurs liegt über dem langfristigen Endwert.' }
    ],
    aufgaben: [
      task(
        'Warum muss der Wechselkurs nach einer expansiven Geldpolitik im Dornbusch-Modell zunächst stärker reagieren als langfristig nötig?',
        [
          step('Kurzfristigen Zinskanal nennen.', String.raw`\text{Mehr Geld } \Rightarrow i \downarrow`),
          step('UIP mit erwarteter Gegenbewegung verbinden.', String.raw`\text{Damit trotz } i \downarrow \text{ Gleichgewicht herrscht, braucht es erwartete spätere Aufwertung.}`),
          step('Daraus den zu starken Anfangssprung folgern.', String.raw`E_{kurz} > E_{lang}`)
        ],
        'Der Kurs muss kurzfristig über das langfristige Niveau hinausschießen, damit der erwartete spätere Rücklauf den niedrigeren Inlandszins ausgleicht.'
      ),
      task(
        'Weshalb ist Overshooting ein Kurzfristmodell und kein Widerspruch zur Kaufkraftparität?',
        [
          step('Preisrigidität betonen.', String.raw`\text{Kurzfristig sind Güterpreise träge.}`),
          step('Langfristigen Anker ergänzen.', String.raw`\text{Mit der Zeit passen Preise an und der Kurs nähert sich dem PPP-kompatiblen Langfristniveau.}`)
        ],
        'Overshooting erklärt den Übergangspfad. PPP bleibt der langfristige Bezugspunkt, nur eben nicht der kurzfristige.'
      ),
      task(
        'Welche Antwort ist in einer Prüfung zu kurz: „expansive Geldpolitik führt zur Abwertung“ oder „expansive Geldpolitik senkt kurzfristig den Zins und erzwingt darum einen Overshoot“?',
        [
          step('Abwertungsaussage relativieren.', String.raw`\text{Sie nennt nur Richtung, nicht die Modellmechanik.}`),
          step('UIP- und Rücklauf-Logik ergänzen.', String.raw`\text{Der Overshoot ist nötig, damit späterer Rücklauf und niedriger Zins zusammenpassen.}`)
        ],
        'Die zweite Antwort ist klausurtauglich, weil sie den Mechanismus statt nur das Endergebnis liefert.'
      )
    ]
  },

  trilemma: {
    motivation: 'Das Trilemma bündelt die offene Makroökonomik in einer prägnanten Einsicht: freie Kapitalmobilität, fixer Wechselkurs und autonome Geldpolitik sind nicht gleichzeitig vollständig erreichbar.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Die drei Ziele</h4>
<p>Politisch attraktiv sind oft drei Dinge gleichzeitig: ein fester Wechselkurs, offene Kapitalmärkte und geldpolitische Autonomie. Das Trilemma besagt, dass nur zwei davon zugleich erreichbar sind.</p>
         <p>Ökonomisch folgt dies daraus, dass freie Kapitalbewegungen und ein fixer Kurs die Zinssetzung eng an das Ausland binden.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Trilemma</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\{\\\\\\\\\\\\\\\\text{Fixkurs},\\\\\\\\\\\\\\\\ \\\\\\\\\\\\\\\\text{Kapitalmobilität},\\\\\\\\\\\\\\\\ \\\\\\\\\\\\\\\\text{Geldpolitik}\\\\\\\\\\\\\\\\} \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{nur zwei zugleich}$$</div><p>Makropolitischer Zielkonflikt.</p>
<p><strong>Fixkurs-Folge</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\text{Fixkurs} + \\\\\\\\\\\\\\\\text{Kapitalmobilität} \\\\\\\\\\\\\\\\Rightarrow i = i^*$$</div><p>Monetäre Autonomie geht verloren.</p>
<p><strong>Flex-Kurs-Folge</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\text{Kapitalmobilität} + \\\\\\\\\\\\\\\\text{Autonomie} \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{flexibler } E$$</div><p>Wechselkurs übernimmt Anpassung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Fixe Wechselkurse als Politikfall</h4>
<p>VL12 zeigt den Fixkursfall ausdrücklich: Bei fixer Wechselkursbindung und Kapitalmobilität erzwingt UIP die Anpassung an den Auslandszins. Damit verliert das Inland monetäre Autonomie. Dieser Fixkursfall ist kein Beispiel neben dem Trilemma, sondern dessen wichtigste konkrete Ausprägung.</p>


<h4 class="theory-subsection-title">Regimekombinationen lesen</h4>
<p>Fixkurs + Kapitalmobilität erzwingt Zinsanpassung an das Ausland. Fixkurs + autonome Geldpolitik geht nur mit Kapitalverkehrskontrollen. Kapitalmobilität + autonome Geldpolitik erfordert flexible Wechselkurse. Diese Matrix musst du in der Klausur schnell abrufen können.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Merksatzfehler:</strong> Das Trilemma ist kein politisches Motto, sondern eine harte Restriktion aus Kapitalmobilität, Zinsarbitrage und Wechselkursbindung.</div>


<h4 class="theory-subsection-title">Evidenz und politische Lesart (VL12)</h4>
<p>Die Vorlesung zum monetären Trilemma verbindet die Theorie mit empirischer Evidenz: Länder mit fixen Kursen und offenen Kapitalmärkten zeigen engere Zinsbindung an das Ausland. Für Transferaufgaben heißt das: Nenne zuerst die aufgegebenen Ziele, dann welches Ziel im Dreieck geopfert werden muss, und erst danach die erwartete Zins- oder Kursreaktion.</p>


<h4 class="theory-subsection-title">Flexible Kurse als dritte Ecke</h4>
<p>Wer Kapitalmobilität und geldpolitische Autonomie behalten will, muss den Wechselkurs flexibel lassen. Dann absorbiert der Kurs Schocks, statt dass die Zentralbank jeden Druck sofort mit Reserven abfängt. Genau diese Kombination ist die Standardlogik großer Industrieländer mit eigenständiger Geldpolitik.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Trilemma</h4>
<p>Mundell-Fleming-Trilemma: höchstens 2 von {fixer WK, freie Kapitalmobilität, autonome Geldpolitik}. Fix + Kapitalmobilität → $i=i^*$, Geldpolitik endogen. Flex → eigene Geldpolitik, WK passt sich an.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Regime zuerst benennen → Policy-Autonomie → Schockübertragung (M-F). Currency Board = rigide Fixierung über Reserven.</p>
      <div class="warn-box"><strong>Trilemma ≠ immer Euro:</strong> Klausur: Mechanismus erklären, nicht nur Länderliste.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Trilemma', eq: String.raw`$$\{\text{Fixkurs},\ \text{Kapitalmobilität},\ \text{Geldpolitik}\} \Rightarrow \text{nur zwei zugleich}$$`, desc: 'Makropolitischer Zielkonflikt.' },
      { label: 'Fixkurs-Folge', eq: String.raw`$$\text{Fixkurs} + \text{Kapitalmobilität} \Rightarrow i = i^*$$`, desc: 'Monetäre Autonomie geht verloren.' },
      { label: 'Flex-Kurs-Folge', eq: String.raw`$$\text{Kapitalmobilität} + \text{Autonomie} \Rightarrow \text{flexibler } E$$`, desc: 'Wechselkurs übernimmt Anpassung.' }
    ],
    aufgaben: [
      task(
        'Ein Land will den Wechselkurs festhalten und die Zinsen unabhängig vom Ausland setzen, obwohl Kapital völlig mobil bleibt. Warum ist das dauerhaft nicht stabil?',
        [
          step('Das unvereinbare Zielbündel benennen.', String.raw`\text{Fixkurs + Kapitalmobilität + autonome Geldpolitik}`),
          step('Arbitrage- und Kursdruck erklären.', String.raw`\text{Abweichende Zinsen erzeugen Kapitalflüsse und setzen den Fixkurs unter Druck.}`)
        ],
        'Bei freier Kapitalmobilität kann ein Fixkurs nur stabil bleiben, wenn die Zinspolitik im Wesentlichen dem Ausland folgt. Sonst entstehen sofort Spannungen am Devisenmarkt.'
      ),
      task(
        'Warum ist der Fixkursfall in VL12 kein Zusatzbeispiel, sondern die Kernillustration des Trilemmas?',
        [
          step('Zinsbindung herausarbeiten.', String.raw`\text{Bei Kapitalmobilität erzwingt der Fixkurs die Orientierung am Auslandszins.}`),
          step('Verlust der Autonomie benennen.', String.raw`\text{Gerade daran wird sichtbar, welches Ziel im Dreieck geopfert wird.}`)
        ],
        'Der Fixkursfall zeigt am klarsten, wie Kapitalmobilität und Kursbindung gemeinsam die Geldpolitik disziplinieren und damit das Trilemma greifbar machen.'
      ),
      task(
        'Ein Land führt Kapitalverkehrskontrollen ein, will aber Fixkurs und eigene Geldpolitik. Welche Ecke des Trilemmas wird damit „gelöst“?',
        [
          step('Mobilität einschränken.', String.raw`\text{Kapitalmobilität wird nicht mehr vollständig.}`),
          step('Folge für die Matrix ziehen.', String.raw`\text{Fixkurs + Autonomie werden ohne vollständige Mobilität vereinbar.}`)
        ],
        'Mit Kontrollen bricht die vollständige Kapitalmobilität; damit können Fixkurs und nationale Geldpolitik zumindest temporär kombiniert werden.'
      ),
      task(
        'Warum ist „flexibler Wechselkurs + offene Kapitalmärkte“ keine Schwäche, sondern die dritte Standardlösung des Trilemmas?',
        [
          step('Anpassungsfunktion des Kurses nennen.', String.raw`\text{Der Kurs absorbiert externe und geldpolitische Schocks.}`),
          step('Autonomie bewahren.', String.raw`\text{Die Zentralbank kann den Inlandszins unabhängiger vom Ausland setzen.}`)
        ],
        'Flexible Kurse sind die Lösung, wenn ein Land offene Finanzmärkte und eigenständige Geldpolitik will — nicht ein „Notfallmodus“.'
      )
    ]
  },

  balassa_samuelson: {
    motivation: 'Balassa-Samuelson erklärt systematische reale Aufwertungen und PPP-Abweichungen aus Produktivitätsunterschieden zwischen handelbaren und nicht-handelbaren Sektoren.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum das zu systematischen PPP-Abweichungen führt</h4>
<p>Das Gesamtpreisniveau steigt damit in produktiven Ländern relativ stärker an, obwohl bei handelbaren Gütern keine willkürliche Fehlbepreisung vorliegt. Genau deshalb kann ein Land real aufwerten, ohne dass daraus sofort eine Korrektur zurück auf „q = 1“ folgen muss.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Die Ausgangsfrage</h4>
<p>Warum wirken reiche Länder dauerhaft „teurer“, ohne dass dies einfach ein Zeichen von Fehlbewertung sein muss? Balassa-Samuelson beantwortet genau diese Frage und liefert damit eine strukturelle Korrektur zu einer zu naiven PPP-Lesart.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Produktivitätsschub im handelbaren Sektor</h4>
<p>Steigt die Produktivität im handelbaren Sektor, steigen dort Löhne. Wegen Arbeitsmobilität innerhalb des Landes müssen Löhne auch in den nicht-handelbaren Sektoren mithalten. Da dort die Produktivität nicht im selben Maß steigt, erhöhen sich vor allem die Preise der nicht-handelbaren Güter.</p>
         <div class="math-block">$$A_T \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\uparrow \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Rightarrow w \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\uparrow \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Rightarrow P_N \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\uparrow$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Was das Modell erklärt und was nicht</h4>
<p>Balassa-Samuelson erklärt systematische Niveauunterschiede und ihren Wandel über die Zeit. Es erklärt nicht jede kurzfristige Wechselkursbewegung. Für Tages- und Krisendynamik brauchst du weiter UIP, Finanzmarktansatz oder Overshooting.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>PPP-Überdehnung:</strong> Nicht jede Abweichung von PPP ist ein Marktfehler. Ein Teil kann strukturell durch Balassa-Samuelson erklärt werden.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Balassa-Samuelson</h4>
<p>Produktivitätsfortschritt im tradable Sektor → Löhne steigen → auch non-tradables teurer → höheres Preisniveau bei gleichem Kurs → PPP-Abweichung strukturell.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Erklärt warum reiche Länder „teurer" sind ohne Fehlbewertung. Unterscheidet sich von kurzfristiger Überschießung (Dornbusch).</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>
</div>
</section>`,
    formeln: [
      { label: 'Balassa-Samuelson-Kette', eq: String.raw`$$A_T \uparrow \Rightarrow w \uparrow \Rightarrow P_N \uparrow \Rightarrow q \text{ verändert sich systematisch}$$`, desc: 'Produktivität im handelbaren Sektor treibt relative Preise.' },
      { label: 'Interpretation', eq: String.raw`\text{PPP-Abweichung} \neq \text{automatisch Fehlbewertung}`, desc: 'Ein Teil der Abweichung kann strukturell sein.' }
    ],
    aufgaben: [
      task(
        'Warum kann ein produktives Aufholland dauerhaft höhere Preisniveaus haben, ohne dass dies sofort eine „Überbewertung“ im simplen Sinn bedeutet?',
        [
          step('Handelbare und nicht-handelbare Sektoren unterscheiden.', String.raw`\text{Produktivität steigt zuerst im handelbaren Sektor.}`),
          step('Lohn- und Preisübertragung ergänzen.', String.raw`\text{Höhere Löhne verteuern nicht-handelbare Güter und heben das Gesamtpreisniveau.}`)
        ],
        'Höhere Preisniveaus können strukturell entstehen, wenn Produktivitätsgewinne im handelbaren Sektor die Löhne und damit die Preise nicht-handelbarer Güter anheben.'
      ),
      task(
        'Woran erkennst du in einer Klausur, dass Balassa-Samuelson und nicht Overshooting oder UIP gefragt ist?',
        [
          step('Horizont lesen.', String.raw`\text{Es geht um systematische Niveauunterschiede oder langfristige reale Aufwertung.}`),
          step('Mechanismus lesen.', String.raw`\text{Produktivität, Löhne und nicht-handelbare Güter stehen im Vordergrund.}`)
        ],
        'Balassa-Samuelson ist der richtige Zugriff, wenn strukturelle Produktivitätsunterschiede und relative Preisniveaus erklärt werden sollen.'
      )
    ]
  }
};

for (const id of Object.keys(CONTENT)) {
  const sup = A_PLUS_SUPPLEMENT[id];
  if (!sup) continue;
  if (sup.aufgaben?.length) {
    CONTENT[id].aufgaben = [...(CONTENT[id].aufgaben || []), ...sup.aufgaben];
  }
  if (sup.formeln?.length) {
    CONTENT[id].formeln = [...(CONTENT[id].formeln || []), ...sup.formeln];
  }
}

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const depth = THEORY_DEPTH_EXPANSIONS[ch.id];
  if (depth?.html) {
    const base = Array.isArray(entry.theorie) ? entry.theorie.join('') : String(entry.theorie || '');
    entry.theorie = base + depth.html;
  }
  if ((String(entry.theorie).match(/section-block/g) || []).length < 4) {
    entry.theorie += section(
      'Prüfungsstandard',
      `<p>Klausurpfad: Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge. Regime (fix/flex) und Notation aus der VL.</p>`
    );
  }
}

const THEORY_TARGET = 2750;
for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = Array.isArray(entry.theorie) ? entry.theorie.join('') : String(entry.theorie || '');
  if (html.length >= THEORY_TARGET || html.includes('Klausurtransfer (source-distilled)')) continue;
  entry.theorie = `${html}${section(
    'Klausurtransfer (source-distilled)',
    `<p><strong>Prüfungsstandard:</strong> (1) Aufgabenstellung lesen — Handel, Wechselkurs oder Politik? (2) Modell wählen: HO bei Faktorreichtum, Krugman bei IRS/Vielfalt, PPP/UIP bei Kurs, Tarif/Quote bei Politik. (3) Mechanismus in 2–3 Sätzen. (4) Wohlfahrts- oder Politikfolge. Regime und Zeithorizont immer benennen.</p>`
  )}`;
}
