import { referenceList, renderSemanticBlock, schemaPhrase, schemaSequence } from '../../../assets/js/portal-core/ui/semanticContent.js';
import { A_PLUS_SUPPLEMENT } from './aPlusSupplement.js';
import { THEORY_DEPTH_EXPANSIONS } from './theoryDepthExpansions.js';

function mergeAPlusEntry(id, base) {
  const sup = A_PLUS_SUPPLEMENT[id] || {};
  return {
    ...base,
    formeln: [...(base.formeln || []), ...(sup.formeln || [])],
    aufgaben: [...(base.aufgaben || []), ...(sup.aufgaben || [])]
  };
}

const section = (title, body) => `
  <div class="section-block">
    <h3>${title}</h3>
    ${body}
  </div>
`;

const warn = (title, body) => `<div class="warn-box" data-warning-placement="rail"><strong>${title}</strong> ${body}</div>`;
const scheme = (content) => renderSemanticBlock(content, { variant: 'theory' });
const schema = (parts, layout = 'chain') => schemaSequence(parts, { layout });
const phrase = (text) => schemaPhrase(text);
const ref = (...entries) => referenceList(entries);

const step = (text, eq = null) => ({ text, eq });

const task = (text, steps, result, hint = null) => ({
  text,
  steps,
  result,
  ...(hint ? { hint } : {})
});

export const CHAPTERS = [
  { id: 'was_ist_recht', title: 'Was ist Recht?', cat: 'Grundlagen', short: 'Recht' },
  { id: 'privatrecht', title: 'Privatrecht und BGB-Struktur', cat: 'Grundlagen', short: 'BGB' },
  { id: 'methodik', title: 'Juristische Methodik und Gutachtenstil', cat: 'Grundlagen', short: 'Methodik' },
  { id: 'willenserklaerung', title: 'Willenserklärung und Vertragsschluss', cat: 'Vertrag', short: 'Vertrag' },
  { id: 'dissens', title: 'Dissens', cat: 'Vertrag', short: 'Dissens' },
  { id: 'anfechtung', title: 'Anfechtung', cat: 'Vertrag', short: 'Anfechtung' },
  { id: 'trennung_abstraktion', title: 'Trennungs- und Abstraktionsprinzip', cat: 'Vertrag', short: 'Abstraktion' },
  { id: 'geschaeftsfaehigkeit', title: 'Rechts- und Geschäftsfähigkeit', cat: 'Personen & Zurechnung', short: 'Fähigkeit' },
  { id: 'stellvertretung', title: 'Stellvertretung', cat: 'Personen & Zurechnung', short: 'Vertretung' },
  { id: 'agb', title: 'AGB-Recht', cat: 'Personen & Zurechnung', short: 'AGB' },
  { id: 'schuldrecht_intro', title: 'Schuldrecht AT: Grundlagen', cat: 'Schuldrecht AT', short: 'Schuldrecht' },
  { id: 'schadensersatz', title: 'Schuldrecht AT: Schadensersatz', cat: 'Schuldrecht AT', short: 'SE' },
  { id: 'ruecktritt', title: 'Rücktritt', cat: 'Schuldrecht AT', short: 'Rücktritt' },
  { id: 'verbraucherwiderruf', title: 'Verbraucherwiderruf', cat: 'Schuldrecht AT', short: 'Widerruf' }
];

export const CONTENT = {
  was_ist_recht: {
    motivation: 'Der Kurs beginnt nicht mit Spezialnormen, sondern mit der Grundfrage, was Recht überhaupt leisten soll: Verbindlichkeit, Konfliktlösung und Erwartungssicherheit.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Propädeutikum: Gewaltenteilung</h4>
<p>Die erste Vorlesungseinheit ordnet das Recht in die staatliche Gewaltenteilung ein: Die <strong>Legislative</strong> erlässt Gesetze, die <strong>Exekutive</strong> führt sie aus, die <strong>Judikative</strong> legt sie aus und entscheidet im Streit. Dieses Bild hilft später, Gesetzgebung, Verwaltung und Gerichte nicht zu vermischen.</p>


<h4 class="theory-subsection-title">Warum der Kurs fallbezogen arbeitet</h4>
<p>Juristische Kompetenz zeigt sich nicht im bloßen Wiedergeben von Definitionen, sondern in der Subsumtion eines Sachverhalts unter gesetzliche Voraussetzungen. Der Fall ist deshalb kein Zusatz, sondern die eigentliche Arbeitsform des Rechts.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Fehlstart:</strong> Viele Antworten beginnen mit Meinungen oder Alltagsgerechtigkeit. Im Gutachten zählt zuerst die gesetzliche Anknüpfung und erst dann die Wertung.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Recht als verbindliche Ordnung</h4>
<p>Recht ist ein System verbindlicher Normen, das gesellschaftliches Verhalten ordnet und Konflikte kanalisiert. Es schafft Erwartungssicherheit: Wer Verträge schließt, Eigentum überträgt oder Ansprüche geltend macht, muss darauf vertrauen können, dass Regeln gelten und durchsetzbar sind.</p>


<h4 class="theory-subsection-title">Blickwinkel auf „Recht“</h4>
<p>Die Vorlesung skizziert Recht aus mehreren Perspektiven: <strong>soziologisch</strong> als kulturelles Faktum und Herrschaftsinstrument, in dem außerrechtliche Faktoren mitwirken; <strong>(rechts-)philosophisch</strong> etwa als Gerechtigkeitsprojekt (einschließlich Naturrechtsdiskussion); <strong>ökonomisch</strong> als institutionelle Rahmenbedingung des Marktes und als Kostenfaktor. Für die Klausur bleibt zentral: Du arbeitest im Rahmen der positiven Rechtsordnung, nicht mit bloßem Wunschrecht.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Kernfrage</strong> — Juristische Anspruchsarbeit beginnt mit einer präzisen Ausgangsfrage.</li><li><strong>Normbezug</strong> — Das ist die elementare Struktur juristischer Arbeit.</li><li><strong>Normbezug (Merksatz)</strong> — Das ist die elementare Struktur juristischer Arbeit.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Kernfrage</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">Wer will was von wem woraus?</span></div><p>Juristische Anspruchsarbeit beginnt mit einer präzisen Ausgangsfrage.</p>
<p><strong>Normbezug</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Sachverhalt</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Tatbestandsmerkmal</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Rechtsfolge</span></div><p>Das ist die elementare Struktur juristischer Arbeit.</p>
<p><strong>Normbezug (Merksatz)</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Sachverhalt</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Tatbestandsmerkmal</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Rechtsfolge</span></div><p>Das ist die elementare Struktur juristischer Arbeit.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Recht und Rechtswissenschaft</h4>
<p>Die Einheit führt Rechtsfindungsrichtungen vor, die in der Juristenausbildung historisch und methodisch eine Rolle spielen: <strong>Rechtspositivismus</strong> (Lösung aus positivem Recht), <strong>Begriffsjurisprudenz</strong>, die <strong>reine Rechtslehre</strong> (Kelsen) als streng systematisch-deduktive Ausprägung, die abgelehnte <strong>Freirechtslehre</strong> (Ehrlich) sowie die <strong>Interessenjurisprudenz</strong> (Jhering, Heck u.a.). Das Fazit der Folien: In der Rechtsanwendung geht es primär um den <strong>Norminhalt</strong> und den <strong>Wortlaut</strong> des Gesetzes; Spielräume können im Einzelfall interessengerechte Auslegung erlauben — aber nicht „beliebig“.</p>


<h4 class="theory-subsection-title">Gesetzliches Unrecht und Grenzen positiven Rechts</h4>
<p>Die Vorlesung diskutiert „gesetzliches Unrecht“ (Beispiele NS- und DDR-Recht) und die <strong>Radbruchsche Formel</strong>: Extrem ungerechtes positives Gesetz kann so weit von Gerechtigkeit entfernt stehen, dass es seiner Rechtsnatur verlustig geht. Ergänzend werden die Mauerschützen-Urteile und im Grundgesetz der Schutz durch <strong>Art. 79 Abs. 3 GG</strong> in Verbindung mit den Staatsstrukturprinzipien und der Menschenwürde genannt. Das ist Staats- und Rechtsphilosophie im Überblick — für Zivilrechtsklausuren meist Hintergrund, aber prägend für das Verständnis, dass „Gesetz“ und „Gerechtigkeit“ auseinanderfallen können.</p>


<h4 class="theory-subsection-title">Rechtsquellen der deutschen Rechtsordnung</h4>
<p>Im Anschluss listet die Vorlesung die wichtigsten <strong>Rechtsquellen</strong>: Grundgesetz, Unionsrecht (Verträge, Richtlinien, Verordnungen), deutsche Gesetze und Rechtsverordnungen sowie Satzungen, dazu (bedeutungsarm gewordenes) Gewohnheitsrecht und private Verträge. <strong>Rechtsprechung</strong> und Auslegung treten dabei als Form der Normanwendung hinzu — in der Klausur entwickelst du Lösungen aus Normtext, Systematik und subsumtiver Fallarbeit, nicht aus bloßer Meinung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Fehlstart:</strong> Viele Antworten beginnen mit Meinungen oder Alltagsgerechtigkeit. Im Gutachten zählt zuerst die gesetzliche Anknüpfung und erst dann die Wertung.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Kernfrage', eq: phrase('Wer will was von wem woraus?'), desc: 'Juristische Anspruchsarbeit beginnt mit einer präzisen Ausgangsfrage.' },
      { label: 'Normbezug', eq: schema(['Sachverhalt', '→', 'Tatbestandsmerkmal', '→', 'Rechtsfolge']), desc: 'Das ist die elementare Struktur juristischer Arbeit.' }
    ],
    aufgaben: [
      task(
        'Warum ist ein Rechtsfall nicht schon dadurch gelöst, dass man intuitiv sagt, was „gerecht“ wäre?',
        [
          step('Recht und bloßes Gerechtigkeitsgefühl trennen.', String.raw`\text{Im Gutachten zählt die rechtliche Begründung aus Normen, nicht nur das intuitive Ergebnis.}`),
          step('Die Rolle der Norm herausarbeiten.', String.raw`\text{Erst Tatbestand und Rechtsfolge schaffen eine belastbare Lösung.}`)
        ],
        'Juristische Lösungen müssen normativ begründet werden. Ein gerechtes Bauchgefühl ersetzt weder Tatbestand noch Subsumtion.'
      ),
      task(
        'Ein Student nennt im Examen sofort das Ergebnis, prüft aber keine Voraussetzungen. Warum ist das methodisch problematisch?',
        [
          step('Gutachtenstil als Prüfungslogik benennen.', String.raw`\text{Das Ergebnis muss über Definition und Subsumtion hergeleitet werden.}`),
          step('Funktion der Begründung erklären.', String.raw`\text{Nur so wird sichtbar, ob die Rechtsfolge tatsächlich ausgelöst ist.}`)
        ],
        'Ohne Herleitung bleibt unklar, ob die relevanten Tatbestandsmerkmale überhaupt vorliegen. Recht verlangt begründete und nicht nur behauptete Ergebnisse.'
      )
    ]
  },

  privatrecht: {
    motivation: 'Bevor Einzelfälle lösbar werden, musst du wissen, wo im BGB du überhaupt suchst: Privatrecht ordnet Beziehungen zwischen Gleichgeordneten und bildet die Arbeitsgrundlage fast aller späteren Fälle.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Privatrecht innerhalb der Rechtsordnung</h4>
<p>Das Privatrecht regelt Rechtsbeziehungen zwischen rechtlich Gleichgeordneten. Es unterscheidet sich damit vom öffentlichen Recht, in dem staatliche Über- und Unterordnungsverhältnisse dominieren. Die Vorlesungsgrafik führt daneben auch das <strong>Strafrecht</strong> als eigenes Rechtsgebiet; für diese Einführung bleibt das Zivilrecht jedoch das Arbeitspferd, weil Vertrags- und Haftungslogik den Kern der Fallbearbeitung bilden.</p>


<h4 class="theory-subsection-title">Grundaufbau des BGB</h4>
<p>Das BGB ist kein loses Normbündel, sondern systematisch aufgebaut: Allgemeiner Teil, Schuldrecht, Sachenrecht, Familienrecht und Erbrecht. Klausuren arbeiten oft aus dem Allgemeinen Teil heraus, bevor sie in speziellere Anspruchsgrundlagen übergehen.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">AT</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Schuldrecht</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Sachenrecht / Sondermaterien</span></div>


<h4 class="theory-subsection-title">Warum die Systematik klausurentscheidend ist</h4>
<p>Wer die Stellung einer Norm im System kennt, findet schneller die passende Anspruchsgrundlage und vermeidet Doppelprüfungen. Gerade im ersten Kontakt mit dem BGB entscheidet der systematische Zugriff darüber, ob Fälle geordnet oder chaotisch bearbeitet werden.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Orientierungsfehler:</strong> Viele Lernende merken sich Einzelnormen, ohne ihre Stellung im System zu kennen. Dann wird die Fallbearbeitung langsam und unsicher.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Sachenrecht und Familienrecht als Randzonen</h4>
<p>Im Grundkurs bleibt der Fokus auf AT und Schuldrecht; Sachenrecht (§§ 929 ff. BGB) wird über Trennung/Abstraktion berührt. Familien- und Erbrecht sind eigene Bücher — in Klausuren selten Startpunkt, aber für Systematik nennbar.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>BGB-System</strong> — Spezielle Normen bauen auf allgemeinen Regeln auf.</li><li><strong>Privatrecht</strong> — Grundidee der privatrechtlichen Beziehung.</li><li><strong>Normfinder</strong> — Systematische Suchreihenfolge.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>BGB-System</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">AT</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Besonderer Teil</span></div><p>Spezielle Normen bauen auf allgemeinen Regeln auf.</p>
<p><strong>Privatrecht</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">Gleichordnung der Beteiligten</span></div><p>Grundidee der privatrechtlichen Beziehung.</p>
<p><strong>Normfinder</strong></p><div class="math-block">AT → Schuldrecht → ggf. Sachenrecht</div><p>Systematische Suchreihenfolge.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Öffentliches Recht kurz abgrenzen</h4>
<p>Hoheitliche Gewalt (Polizei, Steuern) folgt anderen Normen und Gerichtswegen. Verwechslung „BGB = alles Recht“ ist ein häufiger Anfängerfehler.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Prüfungsstart</strong> Bei zivilrechtlichen Fällen nicht mit Verwaltungsrecht oder Strafrecht beginnen, wenn die Fallfrage privatrechtlich ist.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Orientierungsfehler:</strong> Viele Lernende merken sich Einzelnormen, ohne ihre Stellung im System zu kennen. Dann wird die Fallbearbeitung langsam und unsicher.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Prüfungsstart</strong> Bei zivilrechtlichen Fällen nicht mit Verwaltungsrecht oder Strafrecht beginnen, wenn die Fallfrage privatrechtlich ist.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'BGB-System', eq: schema(['AT', '+', 'Besonderer Teil']), desc: 'Spezielle Normen bauen auf allgemeinen Regeln auf.' },
      { label: 'Privatrecht', eq: phrase('Gleichordnung der Beteiligten'), desc: 'Grundidee der privatrechtlichen Beziehung.' }
    ],
    aufgaben: [
      task(
        'Warum beginnt eine vertragliche Fallprüfung häufig mit dem Allgemeinen Teil, obwohl der konkrete Anspruch etwa aus § 433 BGB stammt?',
        [
          step('Allgemeine Voraussetzungen identifizieren.', String.raw`\text{Vertragsschluss, Geschäftsfähigkeit, Anfechtung und Stellvertretung stehen im AT.}`),
          step('Dann die Spezialnorm ergänzen.', String.raw`\text{Erst danach wird die konkrete Anspruchsgrundlage geprüft.}`)
        ],
        'Spezialnormen setzen allgemeine Voraussetzungen voraus. Deshalb muss der Allgemeine Teil oft zuerst geklärt werden.'
      ),
      task(
        'Ein Student verwechselt öffentliches Recht und Privatrecht. Welche Abgrenzung ist in einer Grundklausur am wichtigsten?',
        [
          step('Auf die Stellung der Beteiligten schauen.', String.raw`\text{Gleichordnung spricht für Privatrecht, Über-/Unterordnung eher für öffentliches Recht.}`),
          step('Die Funktion der Norm mitdenken.', String.raw`\text{Im Privatrecht geht es um Beziehungen zwischen Privaten und ihren Ansprüchen.}`)
        ],
        'Die einfachste und wichtigste Ausgangsabgrenzung ist das Verhältnis der Beteiligten: gleichgeordnet oder hoheitlich strukturiert.'
      )
    ]
  },

  methodik: {
    motivation: 'Juristische Methodik ist das eigentliche Werkzeugfach des Moduls: Ohne Anspruchsaufbau, einleitenden und merkmalsbezogenen Obersätzen, Definition, Subsumtion, Zwischenergebnissen und sauberer Gliederung werden auch bekannte Normen in der Klausur wertlos.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Juristische Methodik und Gutachtenstil</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Anspruchsdenken</h4>
<p>Das Grundschema jeder zivilrechtlichen Fallbearbeitung lautet: Wer will was von wem woraus? Diese Frage zwingt dazu, Anspruchsgegner, Anspruchsziel und Anspruchsgrundlage präzise zu benennen. Genau dadurch wird der Fall prüfbar.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Anspruchsfrage</strong> — Erste und wichtigste Sortierfrage des Falles.</li><li><strong>Gutachtenstil</strong> — Einleitender Obersatz, dann je Tatbestandsmerkmal: Obersatz zum Merkmal, Definition, Subsumtion; abschließend Ergebnis. Obersätze i.d.R. Konjunktiv II, Definition/Subsumtion Indikativ.</li><li><strong>Anspruchskette</strong> — Saubere Ordnung für Einwendungen, Einreden und Gestaltungsrechte.</li><li><strong>Tatbestand vor Rechtsfolge</strong> — Rückgewähr, Schadenshöhe und Konkurrenzfragen kommen erst nach tragfähigem Tatbestand.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Anspruchsfrage</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">Wer will was von wem woraus?</span></div><p>Erste und wichtigste Sortierfrage des Falles.</p>
<p><strong>Gutachtenstil</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">O</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">–</span></span><span class="semantic-schema__item">D</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">–</span></span><span class="semantic-schema__item">S</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">–</span></span><span class="semantic-schema__item">E</span></div><p>Einleitender Obersatz, dann je Tatbestandsmerkmal: Obersatz zum Merkmal, Definition, Subsumtion; abschließend Ergebnis. Obersätze i.d.R. Konjunktiv II, Definition/Subsumtion Indikativ.</p>
<p><strong>Anspruchskette</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">entstanden</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">untergegangen</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">durchsetzbar</span></div><p>Saubere Ordnung für Einwendungen, Einreden und Gestaltungsrechte.</p>
<p><strong>Tatbestand vor Rechtsfolge</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">erst Voraussetzungen, dann Folgen</span></div><p>Rückgewähr, Schadenshöhe und Konkurrenzfragen kommen erst nach tragfähigem Tatbestand.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Gutachtenstil</h4>
<p>Im Gutachten wird die <strong>Subsumtionstechnik</strong> zur Beantwortung der Fallfrage eingesetzt: Du ordnest den <strong>Sachverhalt</strong> unter den <strong>Tatbestand</strong> einer Norm und leitest die <strong>Rechtsfolge</strong> her (wenn-dann-Struktur). Nach der Vorlesung gliedert sich die Prüfung einzelner Ansprüche üblicherweise in einen <strong>einleitenden Obersatz</strong>, sodann für <strong>jedes Tatbestandsmerkmal</strong> einen <strong>Obersatz zum Merkmal</strong>, jeweils gefolgt von <strong>Definition</strong> und <strong>Subsumtion</strong>, und schließlich das <strong>Ergebnis</strong> der Anspruchsprüfung. Eine lineare Kette „einmal O–D–S–E“ genügt damit methodisch nicht, wenn mehrere Merkmale zu prüfen sind — die Merkmalskette wiederholt sich.</p>
         <p>Zur <strong>Sprache</strong> (Vorlesung): Obersätze stehen typischerweise im <strong>Konjunktiv II</strong> (Modalverben wie „könnte“, „müsste“), Definition und Subsumtion im <strong>Indikativ</strong>; die Schlussfolgerung innerhalb der Subsumtion kennzeichnest du mit Wörtern wie „folglich“, „daher“ oder „somit“.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Einleitender Obersatz</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">pro TBM: Obersatz</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Definition</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Subsumtion</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Ergebnis</span></div>


<h4 class="theory-subsection-title">Anspruch entstanden, untergegangen, durchsetzbar</h4>
<p>Die Übungen arbeiten zusätzlich mit einer zweiten Ordnungsebene: Zuerst prüfst du, ob ein Anspruch entstanden ist. Danach fragst du, ob er untergegangen ist. Erst am Ende prüfst du, ob er durchsetzbar bleibt. Diese Kette verhindert, dass Einwendungen, Gestaltungsrechte und Einreden ungeordnet vermischt werden.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Anspruch entstanden</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">untergegangen</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">durchsetzbar</span></div>


<h4 class="theory-subsection-title">Subsumtion als Kernleistung</h4>
<p>Die Subsumtion ist mehr als ein Wortersatz für „anwenden“: Du musst zeigen, <em>warum</em> konkrete Tatsachen ein Tatbestandsmerkmal erfüllen oder nicht erfüllen. Genau hier trennt sich reine Definitionenkenntnis von juristischem Arbeiten.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Methodikfehler:</strong> Definitionen ohne anschließende Subsumtion sind fast wertlos. Die Klausur bewertet nicht bloßes Wissen, sondern die Anwendung auf den Sachverhalt.</div>


<h4 class="theory-subsection-title">Gliederungsebenen und Ergebniskontrolle</h4>
<p>Die Fallskripte und Methodikblätter zeigen, dass gute Klausuren nicht nur materiell richtig, sondern auch formal steuerbar sein müssen: Obersätze gehören auf die richtige Ebene, Zwischenergebnisse leiten zum nächsten Prüfungsabschnitt über, und Rechtsfolgen dürfen nie vor den Tatbestandsvoraussetzungen stehen. Gerade Mehranspruchsfälle leben von dieser Disziplin.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Strukturverlust:</strong> Viele Bearbeitungen springen direkt zu Rückgewähr, Schadenshöhe oder „am Ende wohl ja“. Ohne klare Gliederung geht die Anspruchslogik verloren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Methodikfehler:</strong> Definitionen ohne anschließende Subsumtion sind fast wertlos. Die Klausur bewertet nicht bloßes Wissen, sondern die Anwendung auf den Sachverhalt.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Strukturverlust:</strong> Viele Bearbeitungen springen direkt zu Rückgewähr, Schadenshöhe oder „am Ende wohl ja“. Ohne klare Gliederung geht die Anspruchslogik verloren.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Anspruchsfrage', eq: phrase('Wer will was von wem woraus?'), desc: 'Erste und wichtigste Sortierfrage des Falles.' },
      {
        label: 'Gutachtenstil',
        eq: schema(['O', '–', 'D', '–', 'S', '–', 'E']),
        desc: 'Einleitender Obersatz, dann je Tatbestandsmerkmal: Obersatz zum Merkmal, Definition, Subsumtion; abschließend Ergebnis. Obersätze i.d.R. Konjunktiv II, Definition/Subsumtion Indikativ.'
      },
      { label: 'Anspruchskette', eq: schema(['entstanden', '→', 'untergegangen', '→', 'durchsetzbar']), desc: 'Saubere Ordnung für Einwendungen, Einreden und Gestaltungsrechte.' },
      { label: 'Tatbestand vor Rechtsfolge', eq: phrase('erst Voraussetzungen, dann Folgen'), desc: 'Rückgewähr, Schadenshöhe und Konkurrenzfragen kommen erst nach tragfähigem Tatbestand.' }
    ],
    aufgaben: [
      task(
        'Warum ist „A hat einen Anspruch aus § 433 BGB“ ohne weitere Prüfung noch keine gute Klausurlösung?',
        [
          step('Anspruchsgrundlage von Anspruchsentstehung trennen.', String.raw`\text{Die Norm allein sagt noch nicht, dass ihre Voraussetzungen erfüllt sind.}`),
          step('Methodische Ergänzung nennen.', String.raw`\text{Es braucht zu jedem relevanten Merkmal einen Obersatz, Definition, Subsumtion und am Ende das Gesamtergebnis.}`)
        ],
        'Eine Anspruchsgrundlage muss vollständig hergeleitet werden. Erst die Prüfung ihrer Voraussetzungen macht aus der Norm eine tragfähige Lösung.'
      ),
      task(
        'Ein Bearbeiter zitiert Definitionen korrekt, zieht aber keine Verbindung zum Sachverhalt. Welcher Arbeitsschritt fehlt?',
        [
          step('Den fehlenden Schritt benennen.', String.raw`\text{Es fehlt die Subsumtion.}`),
          step('Seine Funktion erklären.', String.raw`\text{Nur die Subsumtion verbindet Tatbestandsmerkmal und konkrete Tatsachen.}`)
        ],
        'Ohne Subsumtion bleibt unklar, ob und warum der Sachverhalt die Norm wirklich erfüllt.'
      ),
      task(
        'Mini-Case (Gutachtenstil): K verlangt von V Rückzahlung des Kaufpreises, weil die gelieferte Sache mangelhaft ist. Wie baust du eine strukturfeste Erstprüfung auf, bevor du Details diskutierst?',
        [
          step('Anspruchsfrage präzisieren.', String.raw`\text{Wer will was von wem woraus?}`),
          step('Norm und Tatbestandsmerkmale gliedern.', String.raw`\text{Einleitender Obersatz, dann Merkmal für Merkmal Obersatz/Definition/Subsumtion vormerken.}`),
          step('Subsumtion: jeden Sachverhaltsbaustein den Merkmalen zuordnen.', String.raw`\text{Indikativ, mit Schlüsselwörtern wie „folglich“/„daher“.}`),
          step('Ergebnis und ggf. nächste Prüfungsebene.', String.raw`\text{Zwischenergebnis formulieren, bevor du zur nächsten Anspruchsgrundlage wechselst.}`)
        ],
        'Struktur vor Detail: dieselbe Logik wie im Vorlesungsschema (einleitender Obersatz, dann je Tatbestandsmerkmal Obersatz, Definition, Subsumtion, Ergebnis) verhindert methodische Sprünge und entspricht dem erwarteten Gutachtenstil.'
      ),
      task(
        'Chain-Mini-Case (Anspruchsaufbau): K will von V primär Lieferung, hilfsweise Rücktritt und zusätzlich Schadensersatz. Wie vermeidest du im Gutachtenstil das Vermischen von Tatbestand, Rechtsfolge und Konkurrenz der Anspruchsziele?',
        [
          step('Issue: Primäres Anspruchsziel und Hilfsziele getrennt formulieren.'),
          step('Rule: Für jedes Ziel eigene Anspruchsgrundlage und Tatbestandsmerkmale aufbauen.'),
          step('Subsumption: Merkmale je Schiene vollständig prüfen; keine Rechtsfolge vorziehen.'),
          step('Result: Zwischenergebnisse pro Anspruchsebene notieren und erst am Ende Konkurrenz/Alternativen ordnen.')
        ],
        'Klausurdisziplin heißt Kettenführung: Jeder Anspruch wird vollständig geprüft, bevor zur nächsten Rechtsfolgeebene gewechselt wird.'
      ),
      task(
        'Prüfungsreihenfolge-Fall: K verlangt nach einem mangelhaften Kauf Nacherfüllung, Rücktritt und Schadensersatz. Welche methodische Reihenfolge macht die Lösung belastbar?',
        [
          step('Zuerst die Anspruchsziele und ihre Anspruchsgrundlagen trennen.'),
          step('Dann pro Anspruch die Tatbestandsmerkmale vollständig prüfen.'),
          step('Rückgewähr, Schadenshöhe und Konkurrenzfragen erst nach den Zwischenergebnissen behandeln.'),
          step('Die Kette ausdrücklich dokumentieren: entstanden, untergegangen, durchsetzbar.')
        ],
        'Die starke Klausurlösung steuert den Fall über getrennte Anspruchsschienen und nicht über spontane Ergebnisbehauptungen.'
      )
    ]
  },

  willenserklaerung: {
    motivation: 'Willenserklärung und Vertragsschluss sind das Herzstück des Allgemeinen Teils. Wer Angebot, Annahme, Zugang und Erklärungshandlung nicht sauber prüft, verliert fast jeden schuldrechtlichen Fall schon am Anfang.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Willenserklärung und Vertragsschluss</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Zugang und empfangsbedürftige Erklärungen</h4>
<p>Willenserklärungen werden mit Zugang wirksam, wenn sie empfangsbedürftig sind (§ 130 BGB). Bei Angeboten und Annahmen ist der Zugang beim Empfänger maßgeblich — nicht das Absendedatum allein.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Willenserklärung</h4>
<p>Eine Willenserklärung ist eine auf einen rechtlichen Erfolg gerichtete Erklärung. Sie setzt objektiven Erklärungswert und subjektive Elemente wie Handlungswillen voraus. Für die Klausur ist entscheidend: Nicht jedes innere Wollen wird rechtlich relevant, sondern nur das rechtlich erkennbare Erklären.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Vertragsschluss</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Angebot</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Annahme</span></div><p>Zwei übereinstimmende Willenserklärungen.</p>
<p><strong>Angebot</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">essentialia negotii</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Rechtsbindungswille</span></div><p>So bestimmt, dass ein einfaches Ja genügt.</p>
<p><strong>Zugang</strong></p><div class="math-block">§ 130 BGB</div><p>Wirksamkeit empfangsbedürftiger WE.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Angebot vs. invitatio ad offerendum</h4>
<p>Supermarkt-Preisschilder, Schaufenster und Auktionskataloge sind regelmäßig nur Aufforderungen zur Abgabe eines Angebots. Das bindende Angebot kommt erst durch die Kundgabe des Kunden (z.B. an der Kasse).</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Schweigen</strong> Schweigen ist keine Annahme (§ 151 BGB Ausnahmen beachten).</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Schweigen</strong> Schweigen ist keine Annahme (§ 151 BGB Ausnahmen beachten).</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Vertragsschluss', eq: schema(['Angebot', '+', 'Annahme']), desc: 'Zwei übereinstimmende Willenserklärungen.' },
      { label: 'Angebot', eq: schema(['essentialia negotii', '+', 'Rechtsbindungswille']), desc: 'So bestimmt, dass ein einfaches Ja genügt.' }
    ],
    aufgaben: [
      task(
        'A bietet B per E-Mail einen Laptop für 500 € an. B liest die Nachricht und denkt sich „einverstanden“, antwortet aber nicht. Ist ein Vertrag zustande gekommen?',
        [
          step('Angebot prüfen.', String.raw`\text{Ja, Sache und Preis sind bestimmt.}`),
          step('Annahme prüfen.', String.raw`\text{Nein, bloßes inneres Einverständnis ist keine Kundgabe.}`),
          step('Ergebnis ziehen.', String.raw`\text{Mangels Annahmeerklärung kein Vertrag.}`)
        ],
        'Ein Vertrag ist nicht zustande gekommen, weil es an einer nach außen erklärten Annahme fehlt.'
      ),
      task(
        'Warum ist ein Preisschild im Supermarkt häufig noch kein Angebot, sondern nur eine invitatio ad offerendum?',
        [
          step('Bindungswillen problematisieren.', String.raw`\text{Der Händler will sich nicht ohne Lager- und Kassenkontrolle sofort binden.}`),
          step('Rechtsfolge benennen.', String.raw`\text{Das eigentliche Angebot liegt dann regelmäßig im Vorlegen an der Kasse.}`)
        ],
        'Viele Alltagssituationen sind rechtlich nur Aufforderungen zur Abgabe eines Angebots. Das schützt vor ungewollter unmittelbarer Bindung.'
      )
    ]
  },

  dissens: {
    motivation: 'Dissens ist kein nachträglicher Fehlerheilungsmechanismus, sondern die Frage, ob es überhaupt zu einer wirksamen Einigung gekommen ist. Genau daran scheitern Vertragsklausuren oft schon auf der ersten Stufe.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Dissens</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Konsens nach objektivem Empfängerhorizont</h4>
<p>Ob Angebot und Annahme korrespondieren, bestimmst du nicht nach geheimen Vorstellungen, sondern nach der objektiven Auslegung empfangsbedürftiger Willenserklärungen gem. §§ 133, 157 BGB. Stimmen die Erklärungen danach überein, liegt grundsätzlich Konsens vor, auch wenn eine Partei innerlich etwas anderes wollte.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Konsensfrage</strong> — Zuerst prüfen, ob die Erklärungen objektiv korrespondieren.</li><li><strong>Offener Dissens</strong> — Bewusst offengelassener Punkt blockiert den Vertragsschluss regelmäßig.</li><li><strong>Versteckter Dissens</strong> — Nur bei wirklichem Nichtübereinstimmen und fortbestehendem Vertragswillen relevant.</li><li><strong>Falsa demonstratio</strong> — Gemeinsam gewollter Inhalt bleibt trotz falscher Bezeichnung maßgeblich.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Konsensfrage</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Angebot</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">↔</span></span><span class="semantic-schema__item">Annahme</span></div><p>Zuerst prüfen, ob die Erklärungen objektiv korrespondieren.</p>
<p><strong>Offener Dissens</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">§ 154 BGB</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">⇒</span></span><span class="semantic-schema__item">im Zweifel kein Vertrag</span></div><p>Bewusst offengelassener Punkt blockiert den Vertragsschluss regelmäßig.</p>
<p><strong>Versteckter Dissens</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 155 BGB</span></div></div><p>Nur bei wirklichem Nichtübereinstimmen und fortbestehendem Vertragswillen relevant.</p>
<p><strong>Falsa demonstratio</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">falsa demonstratio non nocet</span></div><p>Gemeinsam gewollter Inhalt bleibt trotz falscher Bezeichnung maßgeblich.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Totaldissens und offener Dissens</h4>
<p>Fehlt die Einigung schon bei den <em>essentialia negotii</em>, kommt von vornherein kein Vertrag zustande. Beim offenen Dissens (§ 154 BGB) wissen die Parteien, dass noch ein Punkt offen ist; dann gilt im Zweifel: kein Vertrag. Der typische Klausurzugriff ist deshalb: erst Konsensfrage, dann erst überhaupt an Rechtsfolgen denken.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">kein Konsens über essentialia</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">⇒</span></span><span class="semantic-schema__item">kein Vertrag</span></div>


<h4 class="theory-subsection-title">Versteckter Dissens und seine Seltenheit</h4>
<p>Beim versteckten Dissens (§ 155 BGB) glauben die Parteien an Einigkeit, obwohl sie objektiv aneinander vorbeireden. In der Vorlesung wird aber ausdrücklich betont, dass dieser Fall in Klausuren seltener ist, als viele denken: Häufig lässt sich über die objektive Auslegung doch eine Bedeutung feststellen, und dann liegt eher ein einseitiger Irrtum als echter Dissens vor.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Prüfungsfalle:</strong> Nicht jeder innere Unterschied ist Dissens. Wenn die Erklärungen objektiv deckungsgleich sind, musst du aus dem Dissenspfad heraus und in die Anfechtungsebene wechseln.</div>


<h4 class="theory-subsection-title">Falsa demonstratio non nocet</h4>
<p>Ein Sonderfall ist die falsa demonstratio: Beide Parteien wollen objektiv dasselbe, benutzen aber übereinstimmend die falsche Bezeichnung. Dann schadet die falsche Benennung nicht. Genau dieser Sonderfall zeigt, dass im Dissensrecht die gemeinsame Bedeutung und der Verkehrsschutz sauber gegeneinander abgewogen werden müssen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Dissens</h4>
<p>Klausurpfad: Angebot und Annahme objektiv auslegen (§§ 133, 157 BGB) → deckungsgleich? → Konsens. Offener Dissens § 154: bewusst offener Punkt → kein Vertrag. Versteckter Dissens § 155: selten — oft objektive Auslegung oder Irrtum. Essentialia negotii fehlen → Totaldissens.</p><div class="warn-box" data-warning-placement="rail"><strong>Nicht jeder Irrtum ist Dissens</strong> Bei objektiver Deckungsgleichheit → Anfechtung (§§ 119 ff.), nicht Dissenspfad.</div><div class="warn-box" data-warning-placement="rail"><strong>Falsa demonstratio</strong> Gleiche objektive Bedeutung, falsche Bezeichnung → Vertrag trotzdem wirksam.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Prüfungsfalle:</strong> Nicht jeder innere Unterschied ist Dissens. Wenn die Erklärungen objektiv deckungsgleich sind, musst du aus dem Dissenspfad heraus und in die Anfechtungsebene wechseln.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Nicht jeder Irrtum ist Dissens</strong> Bei objektiver Deckungsgleichheit → Anfechtung (§§ 119 ff.), nicht Dissenspfad.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Falsa demonstratio</strong> Gleiche objektive Bedeutung, falsche Bezeichnung → Vertrag trotzdem wirksam.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Konsensfrage', eq: schema(['Angebot', '↔', 'Annahme']), desc: 'Zuerst prüfen, ob die Erklärungen objektiv korrespondieren.' },
      { label: 'Offener Dissens', eq: schema(['§ 154 BGB', '⇒', 'im Zweifel kein Vertrag']), desc: 'Bewusst offengelassener Punkt blockiert den Vertragsschluss regelmäßig.' },
      { label: 'Versteckter Dissens', eq: ref('§ 155 BGB'), desc: 'Nur bei wirklichem Nichtübereinstimmen und fortbestehendem Vertragswillen relevant.' },
      { label: 'Falsa demonstratio', eq: phrase('falsa demonstratio non nocet'), desc: 'Gemeinsam gewollter Inhalt bleibt trotz falscher Bezeichnung maßgeblich.' }
    ],
    aufgaben: [
      task(
        'A und B wollen ein Fahrrad für 500 EUR verkaufen bzw. kaufen, können sich aber über Ratenzahlung und Übergabezeitpunkt noch nicht einigen. Welcher Dissens-Typ liegt nahe und was folgt?',
        [
          step('Zuerst fragen, ob den Parteien die fehlende Einigung bewusst ist.'),
          step('Hier liegt typischerweise offener Dissens vor.', String.raw`\text{§ 154 BGB}`),
          step('Im Zweifel folgt daraus: noch kein Vertragsschluss.')
        ],
        'Wenn ein offener Einigungsmangel bewusst fortbesteht, steht die Konsensfrage im Vordergrund und der Vertrag kommt im Zweifel nicht zustande.'
      ),
      task(
        'A und B einigen sich auf Übergabe bei „Kommilitonin C“, meinen aber unterschiedliche C-Personen. Warum ist das kein Standardfall für Anfechtung?',
        [
          step('Zuerst objektive Auslegung und Nebenpunktcharakter prüfen.'),
          step('Wenn nur ein Nebenpunkt betroffen ist, kommt § 155 BGB in Betracht.'),
          step('Erst wenn objektiv Konsens feststeht und nur ein innerer Irrtum vorliegt, wechselt die Prüfung zur Anfechtung.')
        ],
        'Der Fall ist zunächst eine Konsensfrage. Anfechtung setzt dagegen einen objektiv zunächst zustande gekommenen Vertrag voraus.'
      ),
      task(
        'Haakjöringsköd-Fall in Kurzform: Beide Parteien benutzen dieselbe falsche Bezeichnung, meinen aber übereinstimmend Walfleisch. Warum schadet das falsche Wort nicht automatisch?',
        [
          step('Die objektive Verkehrsauffassung zwar notieren, aber den gemeinsam gewollten Inhalt mitprüfen.'),
          step('Gerade bei übereinstimmendem Fehlgebrauch greift die falsa-demonstratio-Logik.'),
          step('Ergebnis: Maßgeblich bleibt der von beiden subjektiv gewollte Vertragsinhalt.')
        ],
        'Die falsa demonstratio zeigt, dass eine falsche Benennung den Vertrag nicht sprengt, wenn beide Seiten denselben Inhalt wollten.'
      ),
      task(
        'Methodik-Drill: A schreibt „5 EUR“, meint aber „15 EUR“. B nimmt „5 EUR“ an. Welche Reihenfolge schützt dich vor dem Standardfehler „Dissens vorschnell bejahen“?',
        [
          step('Erst Angebot und Annahme nach objektivem Empfängerhorizont auslegen.'),
          step('Bei objektiver Deckungsgleichheit den Vertragsschluss bejahen.'),
          step('Erst danach prüfen, ob ein Irrtum eine Anfechtung eröffnet.')
        ],
        'Dissens ist die Konsensfrage. Sobald objektiver Konsens steht, ist die richtige Korrekturebene die Anfechtung.'
      )
    ]
  },

  anfechtung: {
    motivation: 'Die Anfechtung korrigiert keinen fehlenden Konsens, sondern einen zunächst wirksamen Vertrag oder eine zunächst wirksame Erklärung. Genau diese zeitliche und methodische Trennung macht sie klausurprägend.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum es die Anfechtung braucht</h4>
<p>Wer eine Willenserklärung abgibt, ist daran grundsätzlich gebunden. Das Gesetz löst den Konflikt zwischen Privatautonomie und Verkehrsschutz über die Anfechtung: Nur bestimmte, gesetzlich geregelte Fehler berechtigen dazu, die Erklärung nachträglich zu beseitigen. Ohne Anfechtungsgrund bleibt der Erklärende gebunden.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Die Anfechtung korrigiert keinen fehlenden Konsens, sondern einen zunächst wirksamen Vertrag oder eine zunächst wirksame Erklärung. Genau diese zeitliche und methodische Trennung macht sie klausurprägend.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Anfechtungsgründe</strong> — Irrtums-, Täuschungs- und Drohungsfälle nur innerhalb des gesetzlichen Katalogs.</li><li><strong>Vollständige Prüfung</strong> — Der Irrtum allein reicht nie für eine vollständige Lösung.</li><li><strong>Rechtsfolge</strong> — Das Geschäft wird rückwirkend beseitigt.</li><li><strong>Vertrauensschaden</strong> — Eigener Folgeanspruch nach wirksamer Irrtumsanfechtung.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Anfechtungsgründe</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--stack semantic-display--pres-contrast" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 119 BGB</span></div><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 123 BGB</span></div></div><p>Irrtums-, Täuschungs- und Drohungsfälle nur innerhalb des gesetzlichen Katalogs.</p>
<p><strong>Vollständige Prüfung</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Grund</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Erklärung</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Frist</span></div><p>Der Irrtum allein reicht nie für eine vollständige Lösung.</p>
<p><strong>Rechtsfolge</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">ex tunc nichtig</span></div><p>Das Geschäft wird rückwirkend beseitigt.</p>
<p><strong>Vertrauensschaden</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 122 BGB</span></div></div><p>Eigener Folgeanspruch nach wirksamer Irrtumsanfechtung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Anfechtungsgründe und Kausalität</h4>
<p>Die Vorlesung nennt als Kernfälle Inhaltsirrtum, Erklärungsirrtum, Eigenschaftsirrtum sowie Täuschung und Drohung. Der Anfechtungsgrund muss für die Erklärung kausal gewesen sein: Ohne den Fehler wäre die Erklärung nicht oder nicht mit diesem Inhalt abgegeben worden.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Anfechtungsgrund</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Kausalität</span></div>


<h4 class="theory-subsection-title">Anfechtungserklärung und Frist</h4>
<p>Die Anfechtung ist ein Gestaltungsrecht. Deshalb braucht es eine Anfechtungserklärung gegenüber dem richtigen Gegner und die Einhaltung der gesetzlichen Frist. Bei Irrtumsanfechtung gilt § 121 BGB („unverzüglich“), bei Täuschung oder Drohung § 124 BGB. Wer nur den Irrtum sieht, aber Erklärung und Frist weglässt, bleibt klausurisch unvollständig.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Anfechtungsgrund</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Erklärung</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Frist</span></div>


<h4 class="theory-subsection-title">Rechtsfolgen und § 122 BGB</h4>
<p>Die erfolgreiche Anfechtung vernichtet das Geschäft ex tunc. Gleichzeitig kann in den Irrtumsfällen ein Anspruch auf Vertrauensschaden nach § 122 BGB entstehen. Klausurtechnisch wichtig ist die Trennung: Erst Anfechtungstatbestand, dann Rechtsfolge, dann erst der separate § 122-Pfad.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Anfechtungsfalle:</strong> Nicht jeder Fehlkalkulations- oder Motivirrtum trägt eine Anfechtung. Und § 122 BGB wird nicht in den Tatbestand der Anfechtung hineingemischt, sondern danach eigenständig geprüft.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Anfechtungsfalle:</strong> Nicht jeder Fehlkalkulations- oder Motivirrtum trägt eine Anfechtung. Und § 122 BGB wird nicht in den Tatbestand der Anfechtung hineingemischt, sondern danach eigenständig geprüft.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Anfechtungsgründe', eq: ref('§ 119 BGB', '§ 123 BGB'), desc: 'Irrtums-, Täuschungs- und Drohungsfälle nur innerhalb des gesetzlichen Katalogs.' },
      { label: 'Vollständige Prüfung', eq: schema(['Grund', '+', 'Erklärung', '+', 'Frist']), desc: 'Der Irrtum allein reicht nie für eine vollständige Lösung.' },
      { label: 'Rechtsfolge', eq: phrase('ex tunc nichtig'), desc: 'Das Geschäft wird rückwirkend beseitigt.' },
      { label: 'Vertrauensschaden', eq: ref('§ 122 BGB'), desc: 'Eigener Folgeanspruch nach wirksamer Irrtumsanfechtung.' }
    ],
    aufgaben: [
      task(
        'A will 100 Flaschen verkaufen, verschreibt sich aber und bietet 1000 an. B nimmt sofort an. Welcher Prüfungsweg ist naheliegend?',
        [
          step('Zunächst Vertragsschluss nach objektiver Erklärungslage bejahen.'),
          step('Dann den Erklärungsirrtum als Anfechtungsgrund prüfen.', String.raw`\text{§ 119 Abs. 1 Alt. 2 BGB}`),
          step('Anfechtungserklärung, Frist und Rechtsfolge sauber ergänzen.')
        ],
        'Hier liegt typischerweise kein Dissens, sondern ein zunächst geschlossener, später anfechtbarer Vertrag vor.'
      ),
      task(
        'Warum reicht es in einer Anfechtungsklausur nicht, nur den Irrtum zu erkennen?',
        [
          step('Weitere Voraussetzungen ergänzen.', String.raw`\text{Anfechtungserklärung und Frist müssen mitgeprüft werden.}`),
          step('Rechtsfolgen vollständig darstellen.', String.raw`\text{Nichtigkeit ex tunc plus möglicher Vertrauensschaden nach § 122 BGB.}`)
        ],
        'Eine erfolgreiche Anfechtung verlangt mehr als nur einen Irrtum. Erklärung, Frist und Rechtsfolgen gehören zwingend zur vollständigen Lösung.'
      ),
      task(
        'Warum ist der Satz „Ich habe mich verkalkuliert, also fechte ich an“ oft zu schnell?',
        [
          step('Zuerst den konkreten Irrtumstyp bestimmen.'),
          step('Bloße Motiv- oder Kalkulationsirrtümer nicht vorschnell mit Erklärungs- oder Inhaltsirrtum verwechseln.'),
          step('Nur gesetzlich anerkannte Anfechtungsgründe tragen die Rückabwicklung über §§ 119 ff. BGB.')
        ],
        'Die Anfechtung ist kein allgemeines Korrekturrecht für unkluge Entscheidungen. Sie greift nur bei den gesetzlich geregelten Fehlerarten.'
      ),
      task(
        'Subsumtions-Mini-Case: E verkauft ein Buch für 700 EUR, irrt sich über dessen Eigenschaft als Erstauflage und ficht später an. Welche mehrstufige Prüfung trennt Anspruch aus Vertrag und § 122 BGB sauber?',
        [
          step('Zuerst den vertraglichen Primäranspruch aufbauen.'),
          step('Dann prüfen, ob der Anspruch wegen wirksamer Anfechtung untergeht.'),
          step('Erst danach § 122 BGB als eigene Anspruchsschiene eröffnen und den Vertrauensschaden subsumieren.'),
          step('Die Begrenzung des Ersatzes sauber auf der Rechtsfolgenseite behandeln.')
        ],
        'Tatbestandsklarheit ist der Schlüssel: Vertragsebene, Anfechtungsebene und § 122-Folge dürfen nicht in einem Mischschritt aufgehen.'
      )
    ]
  },

  trennung_abstraktion: {
    motivation: 'Das Trennungs- und Abstraktionsprinzip ist für viele Nichtjuristen der ungewohnteste, aber klausurprägendste Teil des deutschen Privatrechts.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum das klausurpraktisch wichtig ist</h4>
<p>Wer Verpflichtungs- und Verfügungsgeschäft vermischt, verliert Eigentums- und Anspruchslagen aus dem Blick. Das Prinzip wirkt kompliziert, macht die Fallprüfung aber systematisch beherrschbar.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Standardverwechslung:</strong> „Der Kaufvertrag ist unwirksam, also ging nie Eigentum über“ ist zu schnell. Zuerst musst du das Verfügungsgeschäft eigenständig prüfen.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Trennungsprinzip</h4>
<p>Verpflichtungs- und Verfügungsgeschäft sind voneinander zu trennen. Der Kaufvertrag verpflichtet zur Übereignung, überträgt das Eigentum aber noch nicht. Erst das dingliche Verfügungsgeschäft bewirkt die Rechtsänderung am Gegenstand.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Verpflichtung</strong> — Begründet Leistungspflichten.</li><li><strong>Verfügung</strong> — Überträgt, belastet oder hebt ein Recht auf.</li><li><strong>Übereignung</strong> — Verfügung über bewegliche Sache.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Verpflichtung</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">schuldrechtliches Geschäft</span></div><p>Begründet Leistungspflichten.</p>
<p><strong>Verfügung</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">dingliche Rechtsänderung</span></div><p>Überträgt, belastet oder hebt ein Recht auf.</p>
<p><strong>Übereignung</strong></p><div class="math-block">§ 929 BGB</div><p>Verfügung über bewegliche Sache.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Beispielkette Kauf und Übereignung</h4>
<p>Kaufvertrag (§ 433) begründet die Pflicht zur Übereignung; Eigentumsübergang erfordert ein wirksames Verfügungsgeschäft (§ 929) und ggf. gutgläubigen Erwerb (§ 932 ff.).</p>


<h4 class="theory-subsection-title">Bereicherungsrecht bei Abstraktion</h4>
<p>Ist das Verpflichtungsgeschäft unwirksam, kann Eigentum dennoch übergegangen sein. Rückabwicklung läuft dann über §§ 812 ff. BGB (Leistungskondiktion), nicht „automatisch“ über Rücktritt vom Kauf.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Kurzschluss</strong> Erst Verpflichtungs- und Verfügungsgeschäft getrennt prüfen, dann Bereicherung — nicht umgekehrt.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Trennung und Abstraktion</h4>
<p>Prüfungsstandard: Zwei Stränge parallel — (1) Verpflichtungsgeschäft (Wirksamkeit, Anfechtung, Rücktritt). (2) Verfügungsgeschäft (Eigentumsübertragung § 929 BGB) eigenständig prüfen. Unwirksamer Kauf ≠ automatisch kein Eigentumsübergang → Bereicherungsanspruch prüfen.</p><div class="warn-box" data-warning-placement="rail"><strong>Subsumtionsreihenfolge</strong> Erst Verpflichtung, dann Verfügung — nie aus Unwirksamkeit des einen auf den anderen schließen.</div><div class="warn-box" data-warning-placement="rail"><strong>Typischer Fall</strong> Nichtiger Kauf, aber wirksame Übergabe: Eigentum bei Käufer, § 812 Abs. 1 S. 1 Alt. 1 Bereicherung.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Standardverwechslung:</strong> „Der Kaufvertrag ist unwirksam, also ging nie Eigentum über“ ist zu schnell. Zuerst musst du das Verfügungsgeschäft eigenständig prüfen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Kurzschluss</strong> Erst Verpflichtungs- und Verfügungsgeschäft getrennt prüfen, dann Bereicherung — nicht umgekehrt.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Subsumtionsreihenfolge</strong> Erst Verpflichtung, dann Verfügung — nie aus Unwirksamkeit des einen auf den anderen schließen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Typischer Fall</strong> Nichtiger Kauf, aber wirksame Übergabe: Eigentum bei Käufer, § 812 Abs. 1 S. 1 Alt. 1 Bereicherung.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Verpflichtung', eq: phrase('schuldrechtliches Geschäft'), desc: 'Begründet Leistungspflichten.' },
      { label: 'Verfügung', eq: phrase('dingliche Rechtsänderung'), desc: 'Überträgt, belastet oder hebt ein Recht auf.' }
    ],
    aufgaben: [
      task(
        'Warum kann ein unwirksamer Kaufvertrag nicht automatisch bedeuten, dass auch kein Eigentum übergegangen ist?',
        [
          step('Geschäfte trennen.', String.raw`\text{Kaufvertrag und Übereignung sind verschiedene Rechtsgeschäfte.}`),
          step('Abstraktion ergänzen.', String.raw`\text{Die Verfügung kann trotz Mangel im Verpflichtungsgeschäft wirksam sein.}`)
        ],
        'Weil das dingliche Geschäft eigenständig zu prüfen ist. Ein Fehler im Kaufvertrag schlägt nicht automatisch auf die Eigentumsübertragung durch.'
      ),
      task(
        'Welche Funktion hat das Abstraktionsprinzip in der Fallbearbeitung?',
        [
          step('Systematisierung benennen.', String.raw`\text{Es ordnet Pflichten und Rechtsänderungen in getrennte Prüfungsschritte.}`),
          step('Folgen für Rückabwicklung erklären.', String.raw`\text{Unwirksamkeit des Grundgeschäfts führt oft nicht direkt zur Eigentumslage, sondern zu Bereicherungsfragen.}`)
        ],
        'Das Prinzip zwingt zu einer sauberen Trennung der Ebenen und macht dadurch auch komplexe Rückabwicklungen systematisch lösbar.'
      )
    ]
  },

  geschaeftsfaehigkeit: {
    motivation: 'Geschäftsfähigkeit entscheidet, wer sich wirksam rechtlich binden kann. Gerade Minderjährigenfälle sind Standardstoff, weil sie Definition, Normlogik und Fallanwendung zugleich verlangen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Rechts- und Geschäftsfähigkeit</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">§ 107 BGB — lediglich rechtlich vorteilhaft</h4>
<p>Ein Geschäft ist nur dann ohne Zustimmung wirksam, wenn der Minderjährige rechtlich keinen Nachteil erleidet (keine Verpflichtung, kein Risiko). Ein günstiger Kaufpreis allein reicht nicht, wenn Raten oder Verbindlichkeiten entstehen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Beschränkt geschäftsfähig</strong> — Zwischen völliger Unfähigkeit und voller Geschäftsfähigkeit.</li><li><strong>Lediglich rechtlich vorteilhaft</strong> — Dann ist keine Zustimmung nötig.</li><li><strong>Taschengeld</strong> — Wirksamkeit aus eigenen Mitteln.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Beschränkt geschäftsfähig</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§§ 106 ff. BGB</span></div></div><p>Zwischen völliger Unfähigkeit und voller Geschäftsfähigkeit.</p>
<p><strong>Lediglich rechtlich vorteilhaft</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">kein rechtlicher Nachteil</span></div><p>Dann ist keine Zustimmung nötig.</p>
<p><strong>Taschengeld</strong></p><div class="math-block">§ 110 BGB</div><p>Wirksamkeit aus eigenen Mitteln.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">§ 110 BGB — Taschengeld</h4>
<p>Leistungen, die der Minderjährige aus Mitteln bewirkt, die ihm zur freien Verfügung überlassen wurden, sind wirksam. Grenze: Umfang des überlassenen Vermögens.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Zustimmung</strong> Fehlende Zustimmung macht das Geschäft schwebend unwirksam (§ 108), nicht automatisch nichtig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Zustimmung</strong> Fehlende Zustimmung macht das Geschäft schwebend unwirksam (§ 108), nicht automatisch nichtig.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Beschränkt geschäftsfähig', eq: ref('§§ 106 ff. BGB'), desc: 'Zwischen völliger Unfähigkeit und voller Geschäftsfähigkeit.' },
      { label: 'Lediglich rechtlich vorteilhaft', eq: phrase('kein rechtlicher Nachteil'), desc: 'Dann ist keine Zustimmung nötig.' }
    ],
    aufgaben: [
      task(
        'Ein 16-Jähriger kauft ohne Zustimmung seiner Eltern ein Smartphone auf Raten. Welcher Kernpunkt entscheidet über die Wirksamkeit?',
        [
          step('Zunächst den Status bestimmen.', String.raw`\text{Der 16-Jährige ist beschränkt geschäftsfähig.}`),
          step('Dann das Geschäft bewerten.', String.raw`\text{Ein Ratenkauf ist nicht lediglich rechtlich vorteilhaft.}`),
          step('Zustimmungserfordernis nennen.', String.raw`\text{Ohne Zustimmung ist das Geschäft regelmäßig schwebend unwirksam.}`)
        ],
        'Entscheidend ist, dass der Minderjährige sich zu Zahlungen verpflichtet und damit rechtlich belastet wird. Deshalb braucht er grundsätzlich Zustimmung.'
      ),
      task(
        'Warum darfst du die Wirksamkeit eines Minderjährigengeschäfts nicht allein danach beurteilen, ob der Kauf wirtschaftlich „gut“ oder „schlecht“ war?',
        [
          step('Wirtschaftlichen und rechtlichen Vorteil unterscheiden.', String.raw`\text{Maßstab ist der rechtliche, nicht der wirtschaftliche Vorteil.}`),
          step('Normlogik betonen.', String.raw`\text{Schon eine Verpflichtung kann rechtlich nachteilig sein, selbst wenn der Preis günstig wirkt.}`)
        ],
        'Das Gesetz fragt nicht nach wirtschaftlicher Cleverness, sondern nach rechtlicher Belastung. Deshalb kann auch ein vermeintlich guter Deal zustimmungsbedürftig sein.'
      )
    ]
  },

  stellvertretung: {
    motivation: 'Stellvertretung ist die Standardtechnik, mit der rechtliche Handlungen arbeitsteilig möglich werden. Im Wirtschaftsleben ist sie allgegenwärtig; in der Klausur verlangt sie einen klaren Dreischritt.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Stellvertretung</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Die drei Voraussetzungen</h4>
<p>Wirksame Stellvertretung verlangt eine eigene Willenserklärung des Vertreters, Handeln im fremden Namen und Vertretungsmacht. Diese drei Merkmale sind strikt nacheinander zu prüfen. Gerade die Offenkundigkeit wird in Fällen schnell übersehen.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">eigene WE</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">fremder Name</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Vertretungsmacht</span></div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Stellvertretung</strong> — Handeln in fremdem Namen mit Vertretungsmacht.</li><li><strong>Vertretungsmacht</strong> — Quellen der Zurechnungsmacht müssen sauber getrennt werden.</li><li><strong>Ohne Vertretungsmacht</strong> — Geschäft schwebend unwirksam bis zur Genehmigung.</li><li><strong>Haftung des falsus procurator</strong> — Folgeebene erst nach Offenkundigkeit und ausbleibender Genehmigung prüfen.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Stellvertretung</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 164 Abs. 1 BGB</span></div></div><p>Handeln in fremdem Namen mit Vertretungsmacht.</p>
<p><strong>Vertretungsmacht</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">rechtsgeschäftlich</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">/</span></span><span class="semantic-schema__item">gesetzlich</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">/</span></span><span class="semantic-schema__item">organschaftlich</span></div><p>Quellen der Zurechnungsmacht müssen sauber getrennt werden.</p>
<p><strong>Ohne Vertretungsmacht</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 177 BGB</span></div></div><p>Geschäft schwebend unwirksam bis zur Genehmigung.</p>
<p><strong>Haftung des falsus procurator</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 179 BGB</span></div></div><p>Folgeebene erst nach Offenkundigkeit und ausbleibender Genehmigung prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vertretungsmacht und ihre Quellen</h4>
<p>Vertretungsmacht kann rechtsgeschäftlich, gesetzlich oder organschaftlich begründet sein. Fehlt sie, ist das Geschäft grundsätzlich schwebend unwirksam und hängt von der Genehmigung des Vertretenen ab. Die Vorlesung macht zudem deutlich, dass interne Weisungen und Außenvollmacht nicht vorschnell gleichgesetzt werden dürfen: Interne Grenzen schlagen nicht automatisch ins Außenverhältnis durch.</p>


<h4 class="theory-subsection-title">Vertreter, Bote, Identitätstäuschung</h4>
<p>Der Vertreter gibt eine eigene Willenserklärung ab, der Bote übermittelt nur eine fremde. Handeln unter fremdem Namen ist wiederum keine Stellvertretung, sondern ein Problem des Identitätsschutzes. Diese Unterscheidungen sind klausurtypisch.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Vertreter-Boten-Falle:</strong> Wer keine eigene Entscheidungsmacht hat, ist Bote und nicht Vertreter. Dann wird die fremde und nicht die eigene Erklärung zugerechnet.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Vertreter-Boten-Falle:</strong> Wer keine eigene Entscheidungsmacht hat, ist Bote und nicht Vertreter. Dann wird die fremde und nicht die eigene Erklärung zugerechnet.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Stellvertretung', eq: ref('§ 164 Abs. 1 BGB'), desc: 'Handeln in fremdem Namen mit Vertretungsmacht.' },
      { label: 'Vertretungsmacht', eq: schema(['rechtsgeschäftlich', '/', 'gesetzlich', '/', 'organschaftlich']), desc: 'Quellen der Zurechnungsmacht müssen sauber getrennt werden.' },
      { label: 'Ohne Vertretungsmacht', eq: ref('§ 177 BGB'), desc: 'Geschäft schwebend unwirksam bis zur Genehmigung.' },
      { label: 'Haftung des falsus procurator', eq: ref('§ 179 BGB'), desc: 'Folgeebene erst nach Offenkundigkeit und ausbleibender Genehmigung prüfen.' }
    ],
    aufgaben: [
      task(
        'Mitarbeiter M schließt im Namen der GmbH einen Kaufvertrag über Büromaterial. Welche Frage muss zuerst geklärt werden, bevor du über Ansprüche sprichst?',
        [
          step('Die Zurechnungsebene prüfen.', String.raw`\text{Hat M wirksam als Vertreter der GmbH gehandelt?}`),
          step('Dazu die drei Voraussetzungen durchgehen.', String.raw`\text{Eigene WE, fremder Name, Vertretungsmacht.}`)
        ],
        'Bevor Ansprüche geprüft werden, muss geklärt sein, ob die Erklärung der GmbH zugerechnet wird oder M selbst Vertragspartner wurde.'
      ),
      task(
        'Warum ist die Offenkundigkeit für den Geschäftspartner so wichtig?',
        [
          step('Schutzfunktion benennen.', String.raw`\text{Der Vertragspartner muss wissen, mit wem er rechtlich kontrahiert.}`),
          step('Rechtsfolge erläutern.', String.raw`\text{Fehlt Offenkundigkeit, wird regelmäßig der Handelnde selbst verpflichtet.}`)
        ],
        'Offenkundigkeit schützt vor verdeckter Risikoverschiebung. Der Dritte soll erkennen können, wem die Erklärung zugerechnet werden soll.'
      ),
      task(
        'Doctrinal Distinction Case: S übermittelt nur wörtlich die Nachricht des Chefs („Verkauf für 10.000 €“), ohne eigene Entscheidungsmacht. Warum ist das regelmäßig Boten- und nicht Vertreterkonstellation, und was folgt für die Prüfung?',
        [
          step('Issue: Eigene Willenserklärung oder reine Übermittlung?'),
          step('Rule: Vertreter gibt eigene Erklärung ab; Bote überbringt fremde Erklärung.'),
          step('Subsumption: Ohne Entscheidungsspielraum liegt typischerweise Botenstellung vor.'),
          step('Result: Zurechnung läuft über den Geschäftsherrn als Erklärenden; Vertretungsmachtsprüfung tritt zurück.')
        ],
        'Die Vertreter-Boten-Abgrenzung ist ein Kerntrap: Erst Erklärungstyp klären, dann erst Vertretungsmachtfragen.'
      ),
      task(
        'Mehrschrittfall Stellvertretung: A unterschreibt im Laden nur mit seinem Namen, erwähnt die GmbH nicht und hatte intern keine wirksame Vollmacht. Wie gehst du in der Klausurkette vor?',
        [
          step('Issue: Zuerst Offenkundigkeit nach objektivem Empfängerhorizont prüfen.'),
          step('Rule: Fehlt erkennbares Handeln in fremdem Namen, bindet der Vertrag regelmäßig den Handelnden selbst.'),
          step('Subsumption: Nur wenn Offenkundigkeit bejaht wird, Vertretungsmacht prüfen; bei Fehlen Genehmigung/§ 179 BGB als Folgeebene öffnen.'),
          step('Result: Vertragspartner und ggf. Haftungsadressat getrennt ausweisen (Tatbestandsebene vs. Rechtsfolgeebene).')
        ],
        'Stellvertretungsfälle werden robust, wenn Offenkundigkeit, Vertretungsmacht und § 179-Folge strikt nacheinander geprüft werden.'
      ),
      task(
        'Innen- und Außenverhältnis-Fall: M darf intern nur bis 5.000 EUR einkaufen, bestellt aber für 8.000 EUR. Warum darfst du interne Kompetenzgrenzen nicht vorschnell mit fehlender Vertretungsmacht gleichsetzen?',
        [
          step('Zuerst die äußere Vertretungsmacht aus Sicht des Dritten klären.'),
          step('Interne Weisungen getrennt als Innenverhältnis problematisieren.'),
          step('Nur bei erkennbarer Überschreitung oder fehlender äußerer Vollmacht den § 177/§ 179-Pfad sauber eröffnen.')
        ],
        'Die Klausurstärke liegt darin, Innen- und Außenverhältnis getrennt zu halten: Nicht jede interne Überschreitung zerstört automatisch die Außenwirkung.'
      )
    ]
  },

  agb: {
    motivation: 'AGB-Recht ist Massenvertragsrecht. Es verbindet Vertragstechnik mit Schutzgedanken und ist deshalb ein idealer Prüfungsstoff für saubere Einbeziehungs- und Kontrolllogik.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>AGB-Recht</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Was überhaupt AGB sind</h4>
<p>AGB sind für eine Vielzahl von Verträgen vorformulierte Vertragsbedingungen, die eine Partei der anderen bei Vertragsschluss stellt. Schon diese Ausgangsfrage musst du sauber von der späteren Einbeziehung und Kontrolle trennen. Nicht jede unangenehme Vertragsklausel ist automatisch AGB im technischen Sinn.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>AGB-Begriff</strong> — Vorliegen von AGB ist eine eigene erste Sachfrage.</li><li><strong>Einbeziehung</strong> — Erst dann werden AGB Vertragsbestandteil.</li><li><strong>Vorrang Individualabrede</strong> — Das konkret Vereinbarte verdrängt kollidierende AGB.</li><li><strong>Überraschende Klausel</strong> — Kann schon vor der eigentlichen Inhaltskontrolle ausscheiden.</li><li><strong>Kontrolle</strong> — Inhaltskontrolle kommt erst nach Einbeziehung und Vorfragen.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>AGB-Begriff</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">vorformuliert</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">für Vielzahl</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">gestellt</span></div><p>Vorliegen von AGB ist eine eigene erste Sachfrage.</p>
<p><strong>Einbeziehung</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Hinweis</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Kenntnisnahme</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Einverständnis</span></div><p>Erst dann werden AGB Vertragsbestandteil.</p>
<p><strong>Vorrang Individualabrede</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 305b BGB</span></div></div><p>Das konkret Vereinbarte verdrängt kollidierende AGB.</p>
<p><strong>Überraschende Klausel</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 305c BGB</span></div></div><p>Kann schon vor der eigentlichen Inhaltskontrolle ausscheiden.</p>
<p><strong>Kontrolle</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§§ 307-309 BGB</span></div></div><p>Inhaltskontrolle kommt erst nach Einbeziehung und Vorfragen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Einbeziehung</h4>
<p>AGB gelten nicht automatisch. Sie müssen wirksam in den Vertrag einbezogen werden. Dazu gehören Hinweis, zumutbare Kenntnisnahmemöglichkeit und Einverständnis des Vertragspartners. Fehlt eines davon, scheitert bereits die Einbeziehung.</p>


<h4 class="theory-subsection-title">Die Fünf-Stufen-Logik</h4>
<p>Die Vorlesung arbeitet mit einer festen Prüfungsreihenfolge: Anwendungsbereich, Vorliegen von AGB, Einbeziehung, überraschende Klauseln bzw. Vorrang individueller Abreden und erst dann die Inhaltskontrolle. Diese Reihenfolge ist der eigentliche Punkteträger, weil AGB-Fälle sonst vorschnell in die Wertung rutschen.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Anwendungsbereich</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">AGB</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Einbeziehung</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">§ 305b / § 305c</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">§§ 307-309</span></div>


<h4 class="theory-subsection-title">Inhaltskontrolle und Abredenkonkurrenz</h4>
<p>Nach wirksamer Einbeziehung folgt die Kontrolle auf unangemessene Benachteiligung, Überraschung und Transparenz. Zugleich darfst du nie vergessen, dass individuelle Abreden gem. § 305b BGB Vorrang haben. Viele Fälle lösen sich gerade dadurch, dass das mündlich Vereinbarte und das Kleingedruckte nicht deckungsgleich sind.</p>


<h4 class="theory-subsection-title">AGB-Fälle lesen</h4>
<p>In AGB-Fällen darfst du nicht sofort „unwirksam“ rufen. Erst die saubere Prüfungsreihenfolge zeigt, ob die Klausel überhaupt Vertragsbestandteil wurde und auf welcher Stufe sie scheitert.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Prüfungsreihenfolge:</strong> Wer sofort in die Inhaltskontrolle springt, ohne die Einbeziehung zu prüfen, verschenkt einen der wichtigsten Klausurpunkte.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Prüfungsreihenfolge:</strong> Wer sofort in die Inhaltskontrolle springt, ohne die Einbeziehung zu prüfen, verschenkt einen der wichtigsten Klausurpunkte.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'AGB-Begriff', eq: schema(['vorformuliert', '+', 'für Vielzahl', '+', 'gestellt']), desc: 'Vorliegen von AGB ist eine eigene erste Sachfrage.' },
      { label: 'Einbeziehung', eq: schema(['Hinweis', '+', 'Kenntnisnahme', '+', 'Einverständnis']), desc: 'Erst dann werden AGB Vertragsbestandteil.' },
      { label: 'Vorrang Individualabrede', eq: ref('§ 305b BGB'), desc: 'Das konkret Vereinbarte verdrängt kollidierende AGB.' },
      { label: 'Überraschende Klausel', eq: ref('§ 305c BGB'), desc: 'Kann schon vor der eigentlichen Inhaltskontrolle ausscheiden.' },
      { label: 'Kontrolle', eq: ref('§§ 307-309 BGB'), desc: 'Inhaltskontrolle kommt erst nach Einbeziehung und Vorfragen.' }
    ],
    aufgaben: [
      task(
        'Warum ist eine sehr strenge Klausel noch nicht automatisch unwirksam, solange ihre Einbeziehung gar nicht feststeht?',
        [
          step('Prüfungsstufe bestimmen.', String.raw`\text{Ohne Einbeziehung gehört die Klausel noch nicht zum Vertrag.}`),
          step('Erst danach Kontrollstufe öffnen.', String.raw`\text{Inhaltskontrolle setzt wirksame Einbeziehung voraus.}`)
        ],
        'Die Kontrolle einer Klausel setzt voraus, dass sie überhaupt Vertragsbestandteil geworden ist. Deshalb steht die Einbeziehung logisch an erster Stelle.'
      ),
      task(
        'Ein Verkäufer druckt AGB nur in winziger Schrift auf die Rückseite, ohne darauf hinzuweisen. Wo setzt deine Prüfung an?',
        [
          step('Nicht direkt bei der unangemessenen Benachteiligung starten.', String.raw`\text{Zuerst Einbeziehung prüfen.}`),
          step('Hinweis- und Kenntnisnahmemöglichkeit benennen.', String.raw`\text{Ohne klaren Hinweis und zumutbare Kenntnis scheitert die Einbeziehung.}`)
        ],
        'Der Fall beginnt auf der Einbeziehungsebene. Fehlt diese, erledigt sich die spätere Inhaltskontrolle häufig bereits.'
      ),
      task(
        'Mündliche Abrede vs. Formulartext: Verkäufer und Kunde vereinbaren mündlich kostenlose Lieferung, das Formular sieht Versandkosten vor. Welche Weiche musst du vor jeder Inhaltskontrolle setzen?',
        [
          step('Zuerst die Konkurrenz von Individualabrede und AGB prüfen.', String.raw`\text{§ 305b BGB}`),
          step('Das individuell Vereinbarte hat Vorrang vor dem Formulartext.'),
          step('Erst wenn keine Individualabrede greift, wird die Klauselkontrolle relevant.')
        ],
        'AGB-Fälle werden oft schon auf der Ebene des Vorrangs individueller Abreden entschieden und nicht erst über § 307 BGB.'
      ),
      task(
        'Überraschungsklausel-Fall: Auf der Rückseite eines Kassenbons steht plötzlich ein weitgehender Haftungsausschluss. Warum ist „ist unfair“ nicht der beste erste Satz?',
        [
          step('Zuerst fragen, ob die Klausel überhaupt wirksam einbezogen wurde.'),
          step('Dann § 305c BGB als Überraschungsstufe prüfen.'),
          step('Erst danach, falls nötig, zur Inhaltskontrolle übergehen.')
        ],
        'Die starke Lösung ordnet die Klausel sauber ein: Einbeziehung und Überraschung kommen vor der abstrakten Fairnesswertung.'
      )
    ]
  },

  schuldrecht_intro: {
    motivation: 'Mit dem Schuldrecht AT verschiebt sich der Fokus von der Entstehung des Vertrags auf seine Durchführung: Wer schuldet was, wann und mit welchen Pflichten?',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum dieser Einstieg wichtig ist</h4>
<p>Viele Klausuren scheitern daran, dass Pflichtverletzung, Verzug, Unmöglichkeit und Rücktritt ohne sauberes Grundverständnis zusammengeworfen werden. Der Schuldrecht-Einstieg ordnet diese Institute als Reaktionsformen auf Störungen eines bestehenden Schuldverhältnisses.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Grundlagenfehler:</strong> Schadensersatz setzt nicht „irgendwo einen Fehler“ voraus, sondern eine dem Schuldverhältnis zuordenbare Pflichtverletzung.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Schuldverhältnis und Anspruch</h4>
<p>Ein Schuldverhältnis ist die rechtliche Sonderbeziehung, aus der Leistungs- und Nebenpflichten folgen. Ein Anspruch ist demgegenüber das konkrete Recht, von einem anderen ein Tun oder Unterlassen zu verlangen. Diese Unterscheidung ist klausurpraktisch wichtig, weil du aus einem Schuldverhältnis mehrere verschiedene Ansprüche entwickeln kannst.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Schuldverhältnis</strong> — Beide Ebenen können verletzt werden.</li><li><strong>Anspruch</strong> — Ein Schuldverhältnis kann mehrere konkrete Ansprüche enthalten.</li><li><strong>Pflichtverletzung</strong> — Ausgangspunkt vieler Ansprüche im Schuldrecht AT.</li><li><strong>Prüfungskette</strong> — Auch im Schuldrecht bleibt die Methodik leitend.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Schuldverhältnis</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Leistungspflichten</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Nebenpflichten</span></div><p>Beide Ebenen können verletzt werden.</p>
<p><strong>Anspruch</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">Recht, ein Tun oder Unterlassen zu verlangen</span></div><p>Ein Schuldverhältnis kann mehrere konkrete Ansprüche enthalten.</p>
<p><strong>Pflichtverletzung</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">Abweichung von Leistung oder Rücksichtnahme</span></div><p>Ausgangspunkt vieler Ansprüche im Schuldrecht AT.</p>
<p><strong>Prüfungskette</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">entstanden</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">untergegangen</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">durchsetzbar</span></div><p>Auch im Schuldrecht bleibt die Methodik leitend.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Primär- und Nebenpflichten</h4>
<p>Primärpflichten betreffen die eigentliche Leistung, Nebenpflichten schützen Integritäts- und Vermögensinteressen. Gerade moderne Schadensersatzfälle hängen oft an Nebenpflichtverletzungen und nicht an der Hauptleistung.</p>


<h4 class="theory-subsection-title">Anspruchsprüfung im Schuldrecht AT</h4>
<p>Die Übungen übertragen die allgemeine Methodik in das Schuldrecht: Anspruch entstanden, Anspruch untergegangen, Anspruch durchsetzbar. Gerade im Leistungsstörungsrecht schützt diese Reihenfolge davor, Rücktritt, Schadensersatz und Rückgewährfolgen unkontrolliert zu vermischen.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Schuldverhältnis</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Pflicht</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Störung</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">→</span></span><span class="semantic-schema__item">Rechtsfolge</span></div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Schuldrecht AT</h4>
<p>Anspruchsprüfung: Anspruch entstanden (Schuldverhältnis + Primärpflicht) → nicht untergegangen → durchsetzbar. Bei Störung: Verzug (§ 286), Unmöglichkeit (§ 275), Pflichtverletzung (§ 280) — Institute nicht vermischen. Nebenpflichtverletzung kann Schadensersatz auslösen ohne Hauptleistungsmangel.</p><div class="warn-box" data-warning-placement="rail"><strong>Schadensersatz braucht Pflichtverletzung</strong> Nicht jeder Vertragsbruch = sofort Rücktritt — Reihenfolge der Rechtsfolgen prüfen.</div><div class="warn-box" data-warning-placement="rail"><strong>Schuldverhältnis ≠ Anspruch</strong> Aus einem Schuldverhältnis können mehrere Ansprüche folgen — jeden separat prüfen.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Grundlagenfehler:</strong> Schadensersatz setzt nicht „irgendwo einen Fehler“ voraus, sondern eine dem Schuldverhältnis zuordenbare Pflichtverletzung.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Schadensersatz braucht Pflichtverletzung</strong> Nicht jeder Vertragsbruch = sofort Rücktritt — Reihenfolge der Rechtsfolgen prüfen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Schuldverhältnis ≠ Anspruch</strong> Aus einem Schuldverhältnis können mehrere Ansprüche folgen — jeden separat prüfen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Schuldverhältnis', eq: schema(['Leistungspflichten', '+', 'Nebenpflichten']), desc: 'Beide Ebenen können verletzt werden.' },
      { label: 'Anspruch', eq: phrase('Recht, ein Tun oder Unterlassen zu verlangen'), desc: 'Ein Schuldverhältnis kann mehrere konkrete Ansprüche enthalten.' },
      { label: 'Pflichtverletzung', eq: phrase('Abweichung von Leistung oder Rücksichtnahme'), desc: 'Ausgangspunkt vieler Ansprüche im Schuldrecht AT.' },
      { label: 'Prüfungskette', eq: schema(['entstanden', '→', 'untergegangen', '→', 'durchsetzbar']), desc: 'Auch im Schuldrecht bleibt die Methodik leitend.' }
    ],
    aufgaben: [
      task(
        'Warum genügt in einer Schadensersatzklausur nicht der Satz „Der Schuldner hat sich falsch verhalten“?',
        [
          step('Verhaltensvorwurf präzisieren.', String.raw`\text{Es muss eine konkrete Pflicht aus einem Schuldverhältnis verletzt sein.}`),
          step('Anspruchslogik ergänzen.', String.raw`\text{Erst dann lässt sich prüfen, welche Rechtsfolge daran anknüpft.}`)
        ],
        'Schuldrechtlicher Schadensersatz setzt eine konkrete Pflichtverletzung voraus. Reines Missfallen oder schlechtes Benehmen reicht nicht.'
      ),
      task(
        'Welche Funktion haben Nebenpflichten neben der eigentlichen Leistungspflicht?',
        [
          step('Schutzdimension benennen.', String.raw`\text{Sie schützen Person, Eigentum und sonstige Interessen des Vertragspartners.}`),
          step('Klausurfolge ableiten.', String.raw`\text{Auch ohne Leistungsstörung können daraus Schadensersatzansprüche entstehen.}`)
        ],
        'Nebenpflichten sichern das Schuldverhältnis ab. Gerade dadurch wird vertragliche Haftung weiter als bloße Nichterfüllung der Hauptleistung.'
      ),
      task(
        'Warum ist „Zwischen K und V besteht ein Vertrag“ noch kein vollständiger schuldrechtlicher Einstieg, wenn später Schadensersatz oder Rücktritt geprüft werden sollen?',
        [
          step('Zwischen Schuldverhältnis und konkretem Anspruch unterscheiden.'),
          step('Die verletzte Pflicht benennen, nicht nur den Vertrag als Ganzes.'),
          step('Erst danach die passende Rechtsfolge im Leistungsstörungsrecht aufbauen.')
        ],
        'Der Vertrag ist nur die Ausgangsbasis. Klausurpunkte gibt es für die konkrete Zuordnung von Pflicht, Störung und Rechtsfolge.'
      ),
      task(
        'Mehranspruchs-Fall: K verlangt Lieferung, hilfsweise Rücktritt und außerdem Schadensersatz. Warum hilft der schuldrechtliche Grundlagenblock schon auf der ersten Seite der Klausur?',
        [
          step('Er zeigt, dass mehrere Reaktionsformen an dasselbe Schuldverhältnis anknüpfen können.'),
          step('Er zwingt zur Trennung von Primäranspruch, Gestaltungsrecht und Ersatzanspruch.'),
          step('Er verhindert, dass Rechtsfolgen ohne Pflichtverletzung oder Anspruchsgrundlage diskutiert werden.')
        ],
        'Die Grundlagen machen sichtbar, dass Leistungsstörungen unterschiedliche Rechtsfolgen auslösen können, die methodisch getrennt geprüft werden müssen.'
      )
    ]
  },

  schadensersatz: {
    motivation: 'Schadensersatz ist die Kernreaktion auf Pflichtverletzungen. Die Kunst liegt darin, die Anspruchsgrundlage und ihre Voraussetzungen sauber in Reihenfolge zu prüfen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Schuldrecht AT: Schadensersatz</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Überblick über § 280 ff. BGB</h4>
<p>Die Vorlesung ordnet den Schadensersatz nicht als Einzelnorm, sondern als System: Schadensersatz neben der Leistung, statt der Leistung, wegen Verzugs, wegen Unmöglichkeit und wegen Schutzpflichtverletzung. Gerade diese Einordnung hilft in Fällen mit mehreren Störungen, weil sie die richtige Anspruchsgrundlage vorgibt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Schadensersatz neben der Leistung</strong> — Pflichtverletzung genügt, wenn keine Ersatzleistung an die Stelle der Hauptleistung tritt.</li><li><strong>Schadensersatz statt der Leistung</strong> — Regelmäßig mit erfolgloser Fristsetzung.</li><li><strong>Verzugsschaden</strong> — Eigene Schiene bei Verzögerung der Leistung.</li><li><strong>Unmöglichkeit</strong> — Schadensersatzpfad bei endgültiger Leistungshindernis.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Schadensersatz neben der Leistung</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 280 I BGB</span></div></div><p>Pflichtverletzung genügt, wenn keine Ersatzleistung an die Stelle der Hauptleistung tritt.</p>
<p><strong>Schadensersatz statt der Leistung</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§§ 280 I, III, 281 BGB</span></div></div><p>Regelmäßig mit erfolgloser Fristsetzung.</p>
<p><strong>Verzugsschaden</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§§ 280 I, II, 286 BGB</span></div></div><p>Eigene Schiene bei Verzögerung der Leistung.</p>
<p><strong>Unmöglichkeit</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§§ 280 I, III, 283 BGB</span></div></div><p>Schadensersatzpfad bei endgültiger Leistungshindernis.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Grundschema</h4>
<p>Das Grundschema des vertraglichen Schadensersatzes lautet: Schuldverhältnis, Pflichtverletzung, Vertretenmüssen, Schaden. Je nach Konstellation kommen zusätzliche Anforderungen wie Fristsetzung hinzu.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Schuldverhältnis</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Pflichtverletzung</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Vertretenmüssen</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Schaden</span></div>


<h4 class="theory-subsection-title">Neben der Leistung vs. statt der Leistung</h4>
<p>Verzögerungsschäden und Integritätsschäden können Schadensersatz neben der Leistung auslösen. Schadensersatz statt der Leistung verlangt regelmäßig eine erfolglose Fristsetzung, weil dem Schuldner noch eine zweite Chance zur ordnungsgemäßen Leistung gegeben werden soll.</p>


<h4 class="theory-subsection-title">Vertretenmüssen und Fristsetzung</h4>
<p>Das Vertretenmüssen wird grundsätzlich vermutet. Die Fristsetzung ist einer der häufigsten Klausurpunkte: Sie darf nicht vergessen werden und ist nur ausnahmsweise entbehrlich. Genau hier entscheidet sich, ob eine Lösung belastbar wirkt.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Klausurklassiker:</strong> Bei Schadensersatz statt der Leistung wird die Fristsetzung besonders oft übersehen. Ohne sie bricht die Prüfung schnell weg.</div>


<h4 class="theory-subsection-title">Tatbestand und Rechtsfolge getrennt halten</h4>
<p>Der Schaden gehört als eigener Prüfungspunkt in den Tatbestand; Schadenshöhe und konkrete Berechnung gehören erst danach in die Rechtsfolge- bzw. Subsumtionsebene. Wer bereits bei der Fristsetzung mit der Schadenssumme argumentiert, verliert schnell die klare Struktur des Anspruchs.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Klausurklassiker:</strong> Bei Schadensersatz statt der Leistung wird die Fristsetzung besonders oft übersehen. Ohne sie bricht die Prüfung schnell weg.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Schadensersatz neben der Leistung', eq: ref('§ 280 I BGB'), desc: 'Pflichtverletzung genügt, wenn keine Ersatzleistung an die Stelle der Hauptleistung tritt.' },
      { label: 'Schadensersatz statt der Leistung', eq: ref('§§ 280 I, III, 281 BGB'), desc: 'Regelmäßig mit erfolgloser Fristsetzung.' },
      { label: 'Verzugsschaden', eq: ref('§§ 280 I, II, 286 BGB'), desc: 'Eigene Schiene bei Verzögerung der Leistung.' },
      { label: 'Unmöglichkeit', eq: ref('§§ 280 I, III, 283 BGB'), desc: 'Schadensersatzpfad bei endgültiger Leistungshindernis.' }
    ],
    aufgaben: [
      task(
        'Warum ist die Fristsetzung bei Schadensersatz statt der Leistung so wichtig?',
        [
          step('Zweite-Andienungs-Funktion benennen.', String.raw`\text{Der Schuldner soll noch ordnungsgemäß leisten können.}`),
          step('Abgrenzung zur bloßen Verzögerung ziehen.', String.raw`\text{Erst wenn diese Chance scheitert, tritt Ersatz an die Stelle der Leistung.}`)
        ],
        'Die Fristsetzung entscheidet, ob der Gläubiger die Leistung endgültig „umstellt“ und stattdessen Ersatz verlangen darf.'
      ),
      task(
        'Ein Verkäufer liefert mangelhaft, der Käufer setzt aber nie eine Nachfrist. Wo liegt der methodische Schwachpunkt?',
        [
          step('Anspruchsebene benennen.', String.raw`\text{Bei Schadensersatz statt der Leistung fehlt regelmäßig eine Voraussetzung.}`),
          step('Rechtsfolge erklären.', String.raw`\text{Ohne Fristsetzung scheitert der Anspruch meist, sofern keine Entbehrlichkeit vorliegt.}`)
        ],
        'Der Fall zeigt den Standardfehler im Schuldrecht AT: Die Pflichtverletzung wird erkannt, aber die Fristsetzungslogik fehlt.'
      ),
      task(
        'Warum darfst du „Schadensersatz“ in einer Klausur nicht als einheitliches Allerweltsrecht behandeln?',
        [
          step('Zuerst die Störungsart einordnen: Neben der Leistung, statt der Leistung, Verzug oder Unmöglichkeit.'),
          step('Erst dann die passende Anspruchsgrundlage aus § 280 ff. BGB benennen.'),
          step('Zusatzvoraussetzungen wie Fristsetzung oder Mahnung erst auf der richtigen Schiene prüfen.')
        ],
        'Die Anspruchsgrundlage hängt von der Störungsart ab. Wer das nicht trennt, prüft schnell die falschen Voraussetzungen.'
      ),
      task(
        'Tatbestand-vs-Rechtsfolge Fall: K nennt sofort seine Schadenssumme, prüft aber weder Vertretenmüssen noch Fristsetzung. Warum wirkt die Lösung trotz richtiger Zahl schwach?',
        [
          step('Weil die Tatbestandsvoraussetzungen den Anspruch tragen und nicht die Schadenssumme.'),
          step('Vertretenmüssen und ggf. Fristsetzung sind eigenständige Prüfungspunkte.'),
          step('Erst nach einem bejahten Anspruch wird die Schadenshöhe sinnvoll subsumiert.')
        ],
        'Im Schuldrecht gibt es keine Punkte für bloße Endzahlen ohne saubere Anspruchsprüfung. Die Rechtsfolge lebt vom tragfähigen Tatbestand.'
      )
    ]
  },

  ruecktritt: {
    motivation: 'Der Rücktritt ist das klassische Lösungsrecht des Leistungsstörungsrechts. Er ist nicht bloß „Rückgängigmachung“, sondern ein streng aufgebautes Gestaltungsrecht mit eigener Frist- und Folgeebene.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Rücktritt</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Rücktritt als Leistungsstörungsrecht</h4>
<p>Der Rücktritt gehört wie der Schadensersatz zum allgemeinen Leistungsstörungsrecht des Schuldrecht AT. Er setzt einen wirksamen gegenseitigen Vertrag voraus und reagiert auf Nicht-, Schlecht- oder Unmöglichkeitsfälle. Anders als beim Schadensersatz geht es nicht um Ersatz, sondern um Lösung vom Vertrag.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Rücktritt wegen Schlechtleistung</strong> — Standardpfad bei Nicht- oder Schlechtleistung trotz Fristsetzung.</li><li><strong>Rücktritt wegen Unmöglichkeit</strong> — Wichtiger Sonderpfad ohne klassische Nachfristlogik.</li><li><strong>Rücktrittserklärung</strong> — Gestaltungsrecht braucht eine klare Erklärung.</li><li><strong>Rechtsfolge</strong> — Rückgewähr und ggf. Wertersatz gehören auf die Folgeebene.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Rücktritt wegen Schlechtleistung</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§§ 323, 346 BGB</span></div></div><p>Standardpfad bei Nicht- oder Schlechtleistung trotz Fristsetzung.</p>
<p><strong>Rücktritt wegen Unmöglichkeit</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§§ 326 V, 323, 346 BGB</span></div></div><p>Wichtiger Sonderpfad ohne klassische Nachfristlogik.</p>
<p><strong>Rücktrittserklärung</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 349 BGB</span></div></div><p>Gestaltungsrecht braucht eine klare Erklärung.</p>
<p><strong>Rechtsfolge</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 346 BGB</span></div></div><p>Rückgewähr und ggf. Wertersatz gehören auf die Folgeebene.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Rücktrittsschemata</h4>
<p>Die Vorlesung arbeitet mit zwei Standardpfaden: Rücktritt wegen Nicht- oder Schlechtleistung über §§ 323, 346 BGB und Rücktritt wegen Unmöglichkeit über §§ 326 Abs. 5, 323, 346 BGB. Im ersten Pfad ist die Fristsetzung regelmäßig zentral, im zweiten tritt an ihre Stelle die Unmöglichkeit.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">gegenseitiger Vertrag</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Störung</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Frist / Unmöglichkeit</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Erklärung</span></div>


<h4 class="theory-subsection-title">Rücktrittserklärung und Rückgewähr</h4>
<p>Der Rücktritt braucht eine Erklärung nach § 349 BGB. Rechtsfolge ist das Rückgewährschuldverhältnis: Die ursprünglichen Hauptleistungspflichten kehren sich um. Dadurch unterscheidet sich der Rücktritt sowohl vom Schadensersatz als auch von der Anfechtung.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Rücktritt</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">⇒</span></span><span class="semantic-schema__item">Rückgewährschuldverhältnis</span></div>


<h4 class="theory-subsection-title">Abgrenzung zu Anfechtung und Schadensersatz</h4>
<p>Im Unterschied zur Anfechtung wirkt der Rücktritt nicht ex tunc, sondern stellt das Vertragsverhältnis erst ab der Ausübung auf Rückabwicklung um. Im Unterschied zum Schadensersatz erhält der Gläubiger grundsätzlich nicht den Erfüllungswert, sondern nur das bereits Geleistete zurück.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Standardfehler:</strong> Rücktritt verlangt regelmäßig eine Leistungsstörung und oft eine Fristsetzung. Wer ihn wie eine freie „Umentscheidung“ behandelt, landet methodisch im falschen Institut.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Standardfehler:</strong> Rücktritt verlangt regelmäßig eine Leistungsstörung und oft eine Fristsetzung. Wer ihn wie eine freie „Umentscheidung“ behandelt, landet methodisch im falschen Institut.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Rücktritt wegen Schlechtleistung', eq: ref('§§ 323, 346 BGB'), desc: 'Standardpfad bei Nicht- oder Schlechtleistung trotz Fristsetzung.' },
      { label: 'Rücktritt wegen Unmöglichkeit', eq: ref('§§ 326 V, 323, 346 BGB'), desc: 'Wichtiger Sonderpfad ohne klassische Nachfristlogik.' },
      { label: 'Rücktrittserklärung', eq: ref('§ 349 BGB'), desc: 'Gestaltungsrecht braucht eine klare Erklärung.' },
      { label: 'Rechtsfolge', eq: ref('§ 346 BGB'), desc: 'Rückgewähr und ggf. Wertersatz gehören auf die Folgeebene.' }
    ],
    aufgaben: [
      task(
        'Warum genügt es für den Rücktritt nicht, dass K „unzufrieden“ mit der Leistung ist?',
        [
          step('Zuerst einen gegenseitigen Vertrag und eine echte Leistungsstörung verlangen.'),
          step('Dann prüfen, ob Fristsetzung nötig und erfolgt ist oder ausnahmsweise entbehrlich war.'),
          step('Erst danach die Rücktrittserklärung und Rechtsfolge anschließen.')
        ],
        'Rücktritt ist ein strukturiertes Leistungsstörungsrecht und kein freies Lösungsrecht aus bloßer Unzufriedenheit.'
      ),
      task(
        'Warum ist die Rücktrittserklärung ein eigener Prüfungspunkt und nicht bloß Formalität?',
        [
          step('Weil der Rücktritt ein Gestaltungsrecht ist, das durch Erklärung ausgeübt werden muss.'),
          step('Ohne wirksame Ausübung bleibt es trotz Tatbestandsnähe beim ursprünglichen Schuldverhältnis.'),
          step('Die Rückgewährfolgen setzen also nicht automatisch ein.')
        ],
        'Die Erklärung ist der Umschaltpunkt vom Primärschuldverhältnis zum Rückgewährschuldverhältnis.'
      ),
      task(
        'Welche Differenz zum Schadensersatz solltest du in einer Klausur ausdrücklich ansprechen, wenn beide Rechte parallel im Raum stehen?',
        [
          step('Rücktritt führt zur Lösung vom Vertrag und Rückgewähr, nicht zum Ersatz des Erfüllungsinteresses.'),
          step('Schadensersatz verlangt regelmäßig zusätzliche Tatbestandsvoraussetzungen wie Vertretenmüssen.'),
          step('Beide Schienen getrennt aufbauen und erst am Ende ihr Verhältnis klären.')
        ],
        'Klausurpunkte liegen oft gerade in der sauberen Trennung von Rücktritt und Ersatzanspruch.'
      ),
      task(
        'Mehrschrittfall Rücktritt: V liefert mangelhaft, setzt aber später doch noch eine mangelfreie Sache ein. Wo liegt die methodische Weiche?',
        [
          step('Zuerst prüfen, ob eine wirksame Frist gesetzt und fruchtlos abgelaufen ist.'),
          step('Dann fragen, ob vor Erklärung des Rücktritts noch ordnungsgemäß geleistet wurde.'),
          step('Erst bei fortbestehender Störung den Rücktritt erklären und die Rückgewährfolge eröffnen.')
        ],
        'Der Rücktritt lebt von seiner zeitlichen Ordnung: Störung, Frist, Erklärung, erst dann Rückgewähr.'
      )
    ]
  },

  verbraucherwiderruf: {
    motivation: 'Der Verbraucherwiderruf ist kein Sanktionsrecht wegen Schlechterfüllung, sondern ein europarechtlich geprägtes Schutzrecht. Gerade deshalb muss er scharf vom Rücktritt getrennt werden.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Verbraucherwiderruf</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Widerruf als gesetzliches Schutzrecht</h4>
<p>Der Verbraucherwiderruf basiert auf § 355 BGB, setzt aber immer voraus, dass das Gesetz für einen bestimmten Vertragstyp überhaupt ein Widerrufsrecht eröffnet. § 355 BGB allein verleiht also noch kein allgemeines Widerrufsrecht. Diese Vorfrage ist im Gutachten der natürliche Einstieg.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Basisnorm</strong> — Regelt Erklärung, Frist und Rechtsfolge, schafft aber nicht allein den Vertragstyp.</li><li><strong>Persönliche Voraussetzungen</strong> — §§ 13, 14 BGB sind Standardbausteine der Prüfung.</li><li><strong>Frist</strong> — Regelmäßig ab Vertragsschluss; rechtzeitige Absendung genügt.</li><li><strong>Rechtsfolge</strong> — Ähnelt dem Rücktritt, beruht aber auf anderem Normzweck.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Basisnorm</strong></p><div class="semantic-display semantic-display--reference semantic-display--theory semantic-reference semantic-reference--pill semantic-display--pres-anchor" role="group"><div class="semantic-reference__entry"><span class="semantic-reference__term">§ 355 BGB</span></div></div><p>Regelt Erklärung, Frist und Rechtsfolge, schafft aber nicht allein den Vertragstyp.</p>
<p><strong>Persönliche Voraussetzungen</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Verbraucher</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Unternehmer</span></div><p>§§ 13, 14 BGB sind Standardbausteine der Prüfung.</p>
<p><strong>Frist</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">14 Tage</span></div><p>Regelmäßig ab Vertragsschluss; rechtzeitige Absendung genügt.</p>
<p><strong>Rechtsfolge</strong></p><div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--phrase semantic-display--pres-anchor" role="group"><span class="semantic-schema__item">Rückgewährschuldverhältnis</span></div><p>Ähnelt dem Rücktritt, beruht aber auf anderem Normzweck.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vertragstyp und persönliche Voraussetzungen</h4>
<p>Geprüft werden müssen der widerrufsfähige Vertragstyp sowie Verbraucher- und Unternehmereigenschaft. Die Vorlesung nennt besonders Fernabsatz, Haustürsituationen, Verbraucherdarlehen und Ratenlieferungsverträge. Der Widerruf knüpft also an Schutzlage und Vertragstyp an, nicht an eine Pflichtverletzung.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Widerrufsrecht</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Verbraucher</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">Unternehmer</span></div>


<h4 class="theory-subsection-title">Erklärung und Frist</h4>
<p>Erforderlich ist eine gegenüber dem Unternehmer erklärte Widerrufsabsicht innerhalb der gesetzlichen Frist von grundsätzlich 14 Tagen. Eine Begründung ist nicht nötig. Klausurtypisch ist dabei die Klarstellung, dass für die Fristwahrung die rechtzeitige Absendung genügt.</p>
         <div class="semantic-display semantic-display--schema semantic-display--theory semantic-schema semantic-schema--chain semantic-display--pres-bridge" role="group"><span class="semantic-schema__item">Widerrufserklärung</span><span class="semantic-schema__connector-wrap"><span class="semantic-schema__connector" aria-hidden="true">+</span></span><span class="semantic-schema__item">14 Tage</span></div>


<h4 class="theory-subsection-title">Rechtsfolge und Abgrenzung</h4>
<p>Auch der Widerruf führt zu einem Rückgewährschuldverhältnis. Dennoch bleibt die dogmatische Trennung entscheidend: Rücktritt reagiert auf Leistungsstörung, Widerruf auf Verbraucherschutz. Bei digitaler Nutzung oder starker Ingebrauchnahme können zusätzliche Folgefragen wie Wertersatz oder Nutzungsgrenzen aufkommen, aber erst nachdem der Tatbestand steht.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Normzweckfehler:</strong> Wenn keine Leistungsstörung vorliegt, ist der Rücktritt nicht der natürliche Startpunkt. Der Widerruf wird nicht über Mängel, sondern über Schutzlage, Erklärung und Frist erschlossen.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Normzweckfehler:</strong> Wenn keine Leistungsstörung vorliegt, ist der Rücktritt nicht der natürliche Startpunkt. Der Widerruf wird nicht über Mängel, sondern über Schutzlage, Erklärung und Frist erschlossen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Methodik</strong> Rechtsfolge nie vor vollständigem Tatbestand diskutieren.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="8" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h">Vor den Aufgaben</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Vor den Aufgaben</h4>
<p>Kernrelationen aus dem Formeln-Tab aktivieren; eine Skizze (Grafik oder Ablauf) ohne Rechnung erklären können; typische Fehler bewusst vermeiden.</p>
<p><em>platform-added-explanation:</em> Lern-Checkliste.</p>
</div>
</section>`,
    formeln: [
      { label: 'Basisnorm', eq: ref('§ 355 BGB'), desc: 'Regelt Erklärung, Frist und Rechtsfolge, schafft aber nicht allein den Vertragstyp.' },
      { label: 'Persönliche Voraussetzungen', eq: schema(['Verbraucher', '+', 'Unternehmer']), desc: '§§ 13, 14 BGB sind Standardbausteine der Prüfung.' },
      { label: 'Frist', eq: phrase('14 Tage'), desc: 'Regelmäßig ab Vertragsschluss; rechtzeitige Absendung genügt.' },
      { label: 'Rechtsfolge', eq: phrase('Rückgewährschuldverhältnis'), desc: 'Ähnelt dem Rücktritt, beruht aber auf anderem Normzweck.' }
    ],
    aufgaben: [
      task(
        'Ein Online-Kauf funktioniert technisch einwandfrei, der Verbraucher möchte sich aber umentscheiden. Welcher Prüfungsweg liegt näher: Rücktritt oder Widerruf?',
        [
          step('Zuerst nach einer Leistungsstörung fragen.', String.raw`\text{Liegt keine Störung vor, ist Rücktritt nicht der natürliche Startpunkt.}`),
          step('Dann die Verbraucherschutzlage und den Vertragstyp prüfen.'),
          step('Erklärung und Frist des Widerrufs vollständig anschließen.')
        ],
        'Ohne Leistungsstörung spricht der Fall eher für einen Verbraucherwiderruf als für einen Rücktritt.'
      ),
      task(
        'Warum reicht der Satz „§ 355 BGB gibt dem Verbraucher ein Widerrufsrecht“ allein noch nicht aus?',
        [
          step('Weil zunächst ein Vertragstyp mit gesetzlichem Widerrufsrecht vorliegen muss.'),
          step('Danach sind Verbraucher- und Unternehmereigenschaft gesondert zu prüfen.'),
          step('Erst anschließend folgen Erklärung, Frist und Rechtsfolge.')
        ],
        '§ 355 BGB ist Basisnorm, aber nicht Freifahrtschein. Der Tatbestand beginnt mit der widerrufsfähigen Vertragssituation.'
      ),
      task(
        'Welche Prüfungsaussage zeigt in einer Klausur, dass du den Normzweck des Widerrufs verstanden hast?',
        [
          step('Benennen, dass der Widerruf gerade keine Pflichtverletzung des Unternehmers voraussetzt.'),
          step('Die Schutzlage des Verbrauchers als Anknüpfungspunkt hervorheben.'),
          step('Rücktritt und Widerruf ausdrücklich über ihren unterschiedlichen Zweck abgrenzen.')
        ],
        'Der Widerruf ist Schutzrecht, nicht Sanktion. Diese kurze Normzweckklarstellung macht eine Lösung sofort belastbarer.'
      ),
      task(
        'Tatbestand-vs-Rechtsfolge Drillcase: K widerruft fristgerecht, hat die Sache aber bereits stark benutzt. Wie gehst du methodisch vor?',
        [
          step('Zuerst den Widerrufstatbestand vollständig prüfen: Vertragstyp, Parteien, Erklärung, Frist.'),
          step('Den Widerruf nicht wegen der Benutzung vorschnell verneinen.'),
          step('Wertersatz- oder Rückabwicklungsprobleme erst auf der Rechtsfolgeebene anschließen.')
        ],
        'Der Standardfehler ist, Folgeprobleme vor den Tatbestand zu ziehen. Zuerst steht die Wirksamkeit des Widerrufs, danach die Abwicklung.'
      )
    ]
  }
};

const RECHT_KLAUSUR_DEPTH = {
  trennung_abstraktion: section('In der Klausur: Trennung und Abstraktion', `<p>Prüfungsstandard: Zwei Stränge parallel — (1) Verpflichtungsgeschäft (Wirksamkeit, Anfechtung, Rücktritt). (2) Verfügungsgeschäft (Eigentumsübertragung § 929 BGB) eigenständig prüfen. Unwirksamer Kauf ≠ automatisch kein Eigentumsübergang → Bereicherungsanspruch prüfen.</p>${warn('Subsumtionsreihenfolge', 'Erst Verpflichtung, dann Verfügung — nie aus Unwirksamkeit des einen auf den anderen schließen.')}${warn('Typischer Fall', 'Nichtiger Kauf, aber wirksame Übergabe: Eigentum bei Käufer, § 812 Abs. 1 S. 1 Alt. 1 Bereicherung.')}`),
  dissens: section('In der Klausur: Dissens', `<p>Klausurpfad: Angebot und Annahme objektiv auslegen (§§ 133, 157 BGB) → deckungsgleich? → Konsens. Offener Dissens § 154: bewusst offener Punkt → kein Vertrag. Versteckter Dissens § 155: selten — oft objektive Auslegung oder Irrtum. Essentialia negotii fehlen → Totaldissens.</p>${warn('Nicht jeder Irrtum ist Dissens', 'Bei objektiver Deckungsgleichheit → Anfechtung (§§ 119 ff.), nicht Dissenspfad.')}${warn('Falsa demonstratio', 'Gleiche objektive Bedeutung, falsche Bezeichnung → Vertrag trotzdem wirksam.')}`),
  schuldrecht_intro: section('In der Klausur: Schuldrecht AT', `<p>Anspruchsprüfung: Anspruch entstanden (Schuldverhältnis + Primärpflicht) → nicht untergegangen → durchsetzbar. Bei Störung: Verzug (§ 286), Unmöglichkeit (§ 275), Pflichtverletzung (§ 280) — Institute nicht vermischen. Nebenpflichtverletzung kann Schadensersatz auslösen ohne Hauptleistungsmangel.</p>${warn('Schadensersatz braucht Pflichtverletzung', 'Nicht jeder Vertragsbruch = sofort Rücktritt — Reihenfolge der Rechtsfolgen prüfen.')}${warn('Schuldverhältnis ≠ Anspruch', 'Aus einem Schuldverhältnis können mehrere Ansprüche folgen — jeden separat prüfen.')}`)
};

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  const depth = RECHT_KLAUSUR_DEPTH[ch.id];
  if (entry && depth) {
    entry.theorie = (typeof entry.theorie === 'string' ? entry.theorie : '') + depth;
  }
}

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
    entry.theorie = (typeof entry.theorie === 'string' ? entry.theorie : '') + depth.html;
  }
  if (depth?.formeln?.length) {
    entry.formeln = [...(entry.formeln || []), ...depth.formeln];
  }
}

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const theoryHtml = typeof entry.theorie === 'string' ? entry.theorie : '';
  if ((theoryHtml.match(/section-block/g) || []).length < 4) {
    entry.theorie += section('Prüfungsstandard', `
      <p>Klausurpfad: Tatbestand → Rechtsfolge → Subsumtion. Zivilrecht: zuerst Anspruchsgrundlage, dann Einwendungen.</p>
      ${warn('Methodik', 'Rechtsfolge nie vor vollständigem Tatbestand diskutieren.')}
    `);
  }
  while ((entry.formeln?.length || 0) < 3 && entry.formeln?.[0]) {
    const base = entry.formeln[entry.formeln.length - 1];
    entry.formeln.push({ ...base, label: `${base.label} (Merksatz)` });
  }
}
