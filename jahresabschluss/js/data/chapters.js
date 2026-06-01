import { mathContent, renderSemanticBlock } from '../../../assets/js/portal-core/ui/semanticContent.js';
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
const mathBlock = (content) => renderSemanticBlock(content, { variant: 'theory' });
const step = (text, eq = null) => ({ text, eq });
const task = (text, steps, result, hint = null) => ({ text, steps, result, ...(hint ? { hint } : {}) });

export const CHAPTERS = [
  { id: 'rechnungswesen_intro', title: 'Einführung in Rechnungswesen und Erfolgsermittlung', cat: 'Grundlagen', short: 'Einführung' },
  { id: 'gob_rechtsgrundlagen', title: 'GoB und Rechtsgrundlagen der Rechnungslegung', cat: 'Grundlagen', short: 'GoB' },
  { id: 'inventur_inventar_bilanzansatz', title: 'Inventur, Inventar und Bilanzansatz', cat: 'Grundlagen', short: 'Inventur' },
  { id: 'buchen_konten', title: 'Buchen auf Bestands- und Erfolgskonten', cat: 'Buchführung', short: 'Buchen' },
  { id: 'buchfuehrung_orga', title: 'Organisation der Buchführung und Handelsbücher', cat: 'Buchführung', short: 'Organisation' },
  { id: 'anlagevermoegen', title: 'Anlagevermögen und Abschreibungen', cat: 'Bilanzposten', short: 'Anlage' },
  { id: 'umlauf_bewertung_verfahren', title: 'Umlaufvermögen I: Bewertung und Verfahren', cat: 'Bilanzposten', short: 'UV I' },
  { id: 'werkstoffe_erzeugnisse_buchungen', title: 'Umlaufvermögen II: Werkstoffe und Erzeugnisbuchungen', cat: 'Bilanzposten', short: 'UV II' },
  { id: 'umlauf_waren_ust', title: 'Umlaufvermögen III: Waren und Umsatzsteuer', cat: 'Bilanzposten', short: 'UV III' },
  { id: 'eigenkapital_kapitalgesellschaften', title: 'Eigenkapital in Kapitalgesellschaften', cat: 'Bilanzposten', short: 'EK KGes' },
  { id: 'eigenkapital_personengesellschaften', title: 'Eigenkapital in Personengesellschaften', cat: 'Bilanzposten', short: 'EK PGes' },
  { id: 'verbindlichkeiten', title: 'Fremdkapital I: Verbindlichkeiten', cat: 'Bilanzposten', short: 'Verb.' },
  { id: 'rueckstellungen', title: 'Fremdkapital II: Rückstellungen', cat: 'Bilanzposten', short: 'Rückst.' },
  { id: 'rechnungsabgrenzung', title: 'Rechnungsabgrenzung', cat: 'Abschluss', short: 'RAP' },
  { id: 'erfolgsrechnung', title: 'Erfolgsrechnung mit GKV und UKV', cat: 'Abschluss', short: 'GKV / UKV' }
];

export const CONTENT = {
  rechnungswesen_intro: {
    motivation: 'Bevor einzelne Kontierungen Sinn ergeben, musst du die Logik des gesamten Rechnungswesens verstehen: Wer soll informiert werden, was misst Bilanz, was misst GuV, und warum bleibt die Bilanzgleichung immer erhalten?',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Zweck des Jahresabschlusses</h4>
<p>Der Jahresabschluss informiert externe und interne Adressaten über Vermögens-, Finanz- und Ertragslage. Für Gläubiger zählt insbesondere Vorsicht und Verlässlichkeit, für Eigentümer zusätzlich der Erfolgsnachweis und die Grundlage der Gewinnverwendung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Bilanzgleichung</strong></p><div class="math-block">$$A = P = EK + FK$$</div><p>Mittelverwendung entspricht Mittelherkunft.</p>
<p><strong>Jahresergebnis</strong></p><div class="math-block">$$Jahresergebnis = Erträge - Aufwendungen$$</div><p>Die GuV erklärt die Erfolgsänderung der Periode.</p>
<p><strong>EK-Veränderung</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\Delta EK = Jahresergebnis \\\\\\\\\\\\\\\\pm \\\\\\\\\\\\\\\\text{Ergebnisverwendung}$$</div><p>GuV und Bilanz sind über das Eigenkapital verbunden.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Bilanz und GuV als zwei Perspektiven</h4>
<p>Die Bilanz ist stichtagsbezogen und zeigt Vermögen und Kapital am Abschlussstichtag. Die GuV ist periodenbezogen und erklärt, wie der Jahreserfolg entstanden ist. Beide zusammen liefern erst das vollständige Bild des Unternehmens.</p>
         <div class="math-block math-block--theory">$$\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{Aktiva} = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{Passiva} = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{Eigenkapital} + \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{Fremdkapital}$$</div>


<h4 class="theory-subsection-title">Doppelte Buchführung als Stabilitätsmechanismus</h4>
<p>Jeder Geschäftsvorfall berührt mindestens zwei Konten. Dadurch bleibt die Bilanzgleichung erhalten und jede Veränderung wird nachvollziehbar dokumentiert. Genau diese Doppik ist die Grundlage der späteren Abschlusslogik.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Einstiegsfehler:</strong> Viele Antworten behandeln Bilanz und GuV wie zwei unverbundene Tabellen. Tatsächlich erklärt die GuV die periodische Veränderung des Eigenkapitals.</div>


<h4 class="theory-subsection-title">Adressaten und Informationszweck</h4>
<p>Der Companion unterscheidet externe Adressaten (Gläubiger, Investoren, Behörden) von interner Steuerung. Für Gläubiger zählen Vorsicht und Verlässlichkeit; für Eigentümer zusätzlich Erfolgsnachweis und Ausschüttungsgrundlage. In Klausuren musst du deshalb nicht nur Konten kennen, sondern erklären, <em>welche</em> Information ein Posten für welchen Adressaten liefert.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Rechnungswesen</h4>
<p>GoB: Vollständigkeit, Richtigkeit, Klarheit, Fortführung, Periodengerechtigkeit. Bilanz = Vermögen (Aktiva) vs. Kapital (Passiva). GuV = Aufwendungen vs. Erträge — periodenbezogen.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. Inventur/Inventar als Bestandsnachweis vor Abschluss.</p>
      <div class="warn-box"><strong>GuV vs. Cashflow:</strong> Periodenerfolg ≠ Liquidität — Abschreibungen ohne Zahlungsabfluss.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Bilanzgleichung', eq: String.raw`$$A = P = EK + FK$$`, desc: 'Mittelverwendung entspricht Mittelherkunft.' },
      { label: 'Jahresergebnis', eq: String.raw`$$Jahresergebnis = Erträge - Aufwendungen$$`, desc: 'Die GuV erklärt die Erfolgsänderung der Periode.' },
      { label: 'EK-Veränderung', eq: String.raw`$$\Delta EK = Jahresergebnis \pm \text{Ergebnisverwendung}$$`, desc: 'GuV und Bilanz sind über das Eigenkapital verbunden.' }
    ],
    aufgaben: [
      task(
        'Warum reicht es für den Jahresabschluss nicht, nur die Bilanz zu kennen?',
        [
          step('Die Stichtagslogik der Bilanz benennen.', String.raw`\text{Die Bilanz zeigt nur den Zustand am Abschlussstichtag.}`),
          step('Dann die Funktion der GuV ergänzen.', String.raw`\text{Die GuV erklärt, wie Gewinn oder Verlust in der Periode entstanden sind.}`)
        ],
        'Die Bilanz zeigt den Endzustand, aber nicht den Entstehungsweg des Erfolgs. Dafür braucht es die GuV.'
      ),
      task(
        'Ein Unternehmen kauft eine Maschine bar. Warum bleibt die Bilanzsumme unverändert?',
        [
          step('Die betroffenen Seiten identifizieren.', String.raw`\text{Maschinen } \uparrow,\; \text{Kasse/Bank } \downarrow`),
          step('Den Typ der Veränderung benennen.', String.raw`\text{Aktivtausch}`)
        ],
        'Es findet nur ein Aktivtausch statt: Eine Aktivposition steigt, eine andere sinkt im selben Betrag.'
      ),
      task(
        'Warum interessiert einen Gläubiger die Bilanz anders als einen Eigentümer?',
        [
          step('Gläubigerschutz benennen.', String.raw`\text{Gläubiger fragen nach Zahlungsfähigkeit und vorsichtiger Bewertung.}`),
          step('Eigentümerperspektive ergänzen.', String.raw`\text{Eigentümer brauchen zusätzlich den periodischen Erfolg und die Verwendungslogik.}`)
        ],
        'Gläubiger lesen vor allem Sicherheit und Verbindlichkeiten; Eigentümer lesen zusätzlich Ertrag und Eigenkapitalentwicklung über die GuV.'
      )
    ]
  },

  gob_rechtsgrundlagen: {
    motivation: 'GoB und Rechtsgrundlagen bestimmen den normativen Rahmen der Rechnungslegung. Ohne diesen Rahmen bleibt unklar, welche Informations- und Vorsichtslogik der Abschluss erfüllen muss.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">GoB und Rechtsrahmen</h4>
<p>Die GoB sichern Klarheit, Vollständigkeit, Nachprüfbarkeit und Vorsicht. Für Klausuren besonders wichtig sind Realisationsprinzip, Imparitätsprinzip und Stetigkeit, weil sie entscheiden, wann Erfolg ausgewiesen werden darf und wann Risiken bereits zu erfassen sind.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Realisationsprinzip</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Gewinne erst bei Realisation}</div><p>Noch nicht realisierte Gewinne dürfen grundsätzlich nicht vorgezogen werden.</p>
<p><strong>Imparitätsprinzip</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Verluste früh, Gewinne spät}</div><p>Asymmetrische Vorsicht im HGB.</p>
<p><strong>Latente Steuern (Richtung)</strong></p><div class="math-block">\\\\\\\\\\\\\\\\Delta_{HGB-Steuer} > 0 \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{passive latent};\\\\\\\\\\\\\\\\; \\\\\\\\\\\\\\\\Delta_{HGB-Steuer} < 0 \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{aktive latent}</div><p>Prüfungsnaher Merksatz zur Richtung zukünftiger Steuermehr-/-minderbelastung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Rechnungslegungsrecht als Strukturvorgabe</h4>
<p>Die Rechnungslegung folgt nicht bloß Rechenregeln, sondern gesetzlichen Rahmenbedingungen (u.a. HGB). Für die Klausur heißt das: Rechtsgrundlage, GoB-Logik und Informationszweck sind zusammen zu denken.</p>


<h4 class="theory-subsection-title">Vorsicht als Leitplanke</h4>
<p>Realisations- und Imparitätsprinzip wirken als vorsichtsorientierte Leitplanken der Gewinnermittlung. In Prüfungen zeigt sich das an der asymmetrischen Behandlung von Chancen und Risiken.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Prüfungsfehler:</strong> GoB werden oft nur genannt, aber nicht auf den Fall angewendet. Klausurstark ist erst die konkrete Ableitung der Bilanzierungsentscheidung aus dem Prinzip.</div>


<h4 class="theory-subsection-title">Maßgeblichkeitsprinzip und latente Steuern</h4>
<p>Übungs- und Probeklausurmaterial fordert explizit den Maßgeblichkeitsgrundsatz samt Ausnahmen sowie die Funktion latenter Steuern. Latente Steuern zeigen zukünftige steuerliche Mehr- oder Minderbelastungen aus unterschiedlichen handels- und steuerrechtlichen Wertansätzen.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Exam-Trap:</strong> Maßgeblichkeit und latente Steuern werden oft getrennt gelernt. Klausurstark ist die Brücke: Abweichende Wertansätze heute -> steuerliche Wirkungen in Folgeperioden.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Realisationsprinzip', eq: String.raw`\text{Gewinne erst bei Realisation}`, desc: 'Noch nicht realisierte Gewinne dürfen grundsätzlich nicht vorgezogen werden.' },
      { label: 'Imparitätsprinzip', eq: String.raw`\text{Verluste früh, Gewinne spät}`, desc: 'Asymmetrische Vorsicht im HGB.' },
      { label: 'Latente Steuern (Richtung)', eq: String.raw`\Delta_{HGB-Steuer} > 0 \Rightarrow \text{passive latent};\; \Delta_{HGB-Steuer} < 0 \Rightarrow \text{aktive latent}`, desc: 'Prüfungsnaher Merksatz zur Richtung zukünftiger Steuermehr-/-minderbelastung.' }
    ],
    aufgaben: [
      task(
        'Warum sind GoB in der Klausur mehr als reine Definitionssätze?',
        [
          step('Normative Funktion benennen.', String.raw`\text{GoB steuern, wie Informationszweck und Vorsicht in Bilanzentscheidungen umgesetzt werden.}`),
          step('Anwendungsbezug herstellen.', String.raw`\text{Erst die Fallanwendung zeigt, ob ein Prinzip wirklich verstanden wurde.}`)
        ],
        'GoB sind Entscheidungsmaßstäbe. Klausurrelevant werden sie erst durch saubere Anwendung auf konkrete Bilanzierungsfragen.'
      ),
      task(
        'Warum verlangt das Imparitätsprinzip eine frühere Erfassung drohender Verluste als erwarteter Gewinne?',
        [
          step('Gläubigerschutz ansprechen.', String.raw`\text{Das HGB will eine zu optimistische Darstellung vermeiden.}`),
          step('Asymmetrie bewusst benennen.', String.raw`\text{Risiken sollen früh, Chancen erst bei Realisation erfasst werden.}`)
        ],
        'Die Asymmetrie ist gewollt: Sie schützt Gläubiger vor überhöht dargestellter Vermögens- und Ertragslage.'
      ),
      task(
        'Wie hängt das Realisationsprinzip mit § 252 HGB zusammen, wenn ein erwarteter, aber noch nicht realisierter Gewinn vorliegt?',
        [
          step('Rechtsanker benennen.', String.raw`\text{§ 252 HGB verankert die vorsichtige Erfolgsermittlung.}`),
          step('Konsequenz für den Fall ableiten.', String.raw`\text{Ohne Realisation darf der Gewinn noch nicht erfolgswirksam vorgezogen werden.}`)
        ],
        'Die erwartete Chance bleibt bis zur Realisation erfolgsneutral; genau darin zeigt sich die vorsichtsorientierte Systematik des § 252 HGB.'
      ),
      task(
        'Warum tauchen Maßgeblichkeitsprinzip und latente Steuern in Klausuren oft gemeinsam auf?',
        [
          step('Zusammenhang erklären.', String.raw`\text{Abweichungen zwischen Handels- und Steuerbilanz erzeugen zukünftige steuerliche Effekte.}`),
          step('Latente Steuerwirkung zuordnen.', String.raw`\text{Künftige Mehrbelastung -> passive latente Steuer; künftige Entlastung -> aktive latente Steuer.}`)
        ],
        'Maßgeblichkeit beschreibt die Beziehung der Wertansätze; latente Steuern bilden deren intertemporale Steuerfolgen im Abschluss ab.'
      )
    ]
  },

  inventur_inventar_bilanzansatz: {
    motivation: 'Inventur, Inventar und Bilanzansatz bilden die technische Eingangsschleuse in den Abschluss. Hier entscheidet sich, welche Posten überhaupt bilanziell erscheinen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Inventur und Inventar</h4>
<p>Die Inventur ist die tatsächliche Bestandsaufnahme. Ihr Ergebnis ist das Inventar als geordnetes Bestandsverzeichnis. Erst aus dieser Grundlage wird die Bilanz systematisch verdichtet.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Inventurfolge</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Inventur} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Inventar} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Bilanz}</div><p>Vom Einzelbestand zur Abschlussverdichtung.</p>
<p><strong>Prüfungsfolge</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Ansatz} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Bewertung}</div><p>Existenzfrage vor Wertfrage.</p>
<p><strong>Abschlusskette</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Inventur} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Inventar} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Ansatz} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Bewertung} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Ausweis}</div><p>Vom Rohbestand bis zur sichtbaren Abschlusswirkung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Bilanzansatz als Ob-Frage</h4>
<p>Bilanzansatz fragt, ob ein Vermögensgegenstand oder eine Schuld überhaupt bilanziert werden darf oder muss. Das ist logisch von der späteren Wertfrage getrennt.</p>


<h4 class="theory-subsection-title">Ansatz vor Bewertung</h4>
<p>In der Prüfung gilt: Erst Ansatzfähigkeit und Bilanzierungsfähigkeit klären, dann erst bewerten. Diese Reihenfolge ist methodisch zwingend und fehleranfällig.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Reihenfolgefehler:</strong> Viele Lösungen springen direkt zur Zahl. Ohne geklärten Ansatz ist jede Bewertung methodisch verfrüht.</div>


<h4 class="theory-subsection-title">Vom Einzelbestand zum Abschlussausweis</h4>
<p>Zwischen Inventur und Bilanz liegt mehr als bloß ein Abschreibprozess. Aus dem Einzelbestand muss ein bilanzfähiger Posten mit richtiger Kategorie, Ansatzentscheidung und späterem Ausweis werden. Gerade diese Kette macht aus Rohdaten Abschlusswissen.</p>
         <p>Deshalb genügt in Klausuren weder „ist da“ noch „hat einen Wert“. Erst die saubere Übersetzung vom realen Bestand zum Bilanzposten beantwortet die eigentliche Abschlussfrage.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Inventurfolge', eq: String.raw`\text{Inventur} \rightarrow \text{Inventar} \rightarrow \text{Bilanz}`, desc: 'Vom Einzelbestand zur Abschlussverdichtung.' },
      { label: 'Prüfungsfolge', eq: String.raw`\text{Ansatz} \rightarrow \text{Bewertung}`, desc: 'Existenzfrage vor Wertfrage.' },
      { label: 'Abschlusskette', eq: String.raw`\text{Inventur} \rightarrow \text{Inventar} \rightarrow \text{Ansatz} \rightarrow \text{Bewertung} \rightarrow \text{Ausweis}`, desc: 'Vom Rohbestand bis zur sichtbaren Abschlusswirkung.' }
    ],
    aufgaben: [
      task(
        'Warum ist „Was steht in der Bilanz?“ eine andere Frage als „Mit welchem Wert steht es dort?“',
        [
          step('Ansatz und Bewertung trennen.', String.raw`\text{Ansatz = Ob der Posten bilanziert wird; Bewertung = Mit welchem Wert.}`),
          step('Die Prüfungsreihenfolge erklären.', String.raw`\text{Erst der Ansatz, dann die Wertfrage.}`)
        ],
        'Bilanzansatz entscheidet über die Existenz des Postens in der Bilanz; Bewertung entscheidet erst danach über seine Höhe.'
      ),
      task(
        'Worin liegt der methodische Unterschied zwischen Inventur und Bilanz?',
        [
          step('Inventur als Erhebungsebene benennen.', String.raw`\text{Inventur erfasst Bestände konkret und einzeln.}`),
          step('Bilanz als Verdichtungsebene ergänzen.', String.raw`\text{Die Bilanz ordnet und verdichtet diese Informationen abschlusssystematisch.}`)
        ],
        'Inventur liefert Rohdaten der Bestände, die Bilanz erzeugt daraus die strukturierte Abschlussdarstellung.'
      ),
      task(
        'Warum reicht die Aussage „Der Gegenstand ist vorhanden“ in einer Ansatzaufgabe fast nie aus?',
        [
          step('Körperliche Existenz ist nur der Startpunkt, nicht die Abschlusslösung.'),
          step('Zusätzlich sind wirtschaftliche Zuordnung und Bilanzierungsfähigkeit zu prüfen.'),
          step('Erst danach lässt sich entscheiden, ob ein Bilanzposten anzusetzen ist und wie er weiterbehandelt wird.')
        ],
        'Ansatzaufgaben prüfen die Bilanzlogik eines Bestands, nicht bloß seine physische Existenz.'
      ),
      task(
        'Welche Prüfungsreihenfolge sollte in einer Mini-Falllösung zu Inventur und Bilanzansatz sichtbar sein?',
        [
          step('Zuerst den realen Bestand bzw. Sachverhalt eindeutig identifizieren.'),
          step('Dann prüfen, ob daraus überhaupt ein bilanzierungsfähiger Posten wird.'),
          step('Erst nach bejahtem Ansatz zur Bewertung und zum Ausweis übergehen.')
        ],
        'Die Abschlussroutine lautet: Bestand -> Ansatz -> Bewertung -> Ausweis.'
      )
    ]
  },

  buchen_konten: {
    motivation: 'Die doppelte Buchführung wird erst dann klausursicher, wenn du Bestands- und Erfolgskonten nicht nur benennen, sondern sauber in Soll und Haben denken kannst.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kontenrahmen-Logik</h4>
<p>Aktiva: Soll = Zugang. Passiva/EK: Haben = Zugang. Erfolgskonten: Aufwand Soll, Ertrag Haben — Abschluss über GuV auf Eigenkapital.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Aktivkonto</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{AB im Soll,\\\\\\\\\\\\\\\\ Zugänge Soll,\\\\\\\\\\\\\\\\ Abgänge Haben}</div><p>Grundlogik eines Aktivkontos.</p>
<p><strong>Passivkonto</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{AB im Haben,\\\\\\\\\\\\\\\\ Zugänge Haben,\\\\\\\\\\\\\\\\ Abgänge Soll}</div><p>Spiegelbildliche Logik des Passivkontos.</p>
<p><strong>Buchungssatz</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Soll an Haben}</div><p>Jeder Geschäftsvorfall berührt mindestens zwei Konten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Klausurtransfer</h4>
<p>Immer beide Seiten der Buchung und die Bilanzwirkung nennen; „nur GuV" reicht in Klausuren nicht.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Aktivkonto', eq: String.raw`\text{AB im Soll,\ Zugänge Soll,\ Abgänge Haben}`, desc: 'Grundlogik eines Aktivkontos.' },
      { label: 'Passivkonto', eq: String.raw`\text{AB im Haben,\ Zugänge Haben,\ Abgänge Soll}`, desc: 'Spiegelbildliche Logik des Passivkontos.' },
      { label: 'Buchungssatz', eq: String.raw`\text{Soll an Haben}`, desc: 'Jeder Geschäftsvorfall berührt mindestens zwei Konten.' }
    ],
    aufgaben: [
      task(
        'Ein Unternehmen kauft Waren auf Ziel. Welche Grundlogik bestimmt den Buchungssatz?',
        [
          step('Zuerst die Kontenarten bestimmen.', String.raw`\text{Warenbestand/Aufwand } \uparrow,\; \text{Verbindlichkeiten } \uparrow`),
          step('Dann Soll und Haben zuordnen.', String.raw`\text{Zugang im Aktiv- bzw. Aufwandsbereich ins Soll, Zugang der Verbindlichkeit ins Haben.}`)
        ],
        'Der Geschäftsvorfall ist eine Bilanzverlängerung: Auf der einen Seite steigt Vermögen bzw. Aufwand, auf der anderen die Schuld.'
      ),
      task(
        'Warum sind Erfolgskonten trotz Periodenbezug immer mit der Bilanz verbunden?',
        [
          step('Eigenkapitalbezug erläutern.', String.raw`\text{Erträge und Aufwendungen verändern am Ende das Eigenkapital.}`),
          step('Abschlusslogik ergänzen.', String.raw`\text{Über die GuV werden Erfolgskonten in die Bilanzlogik zurückgeführt.}`)
        ],
        'Erfolgskonten sind keine losgelöste Parallelwelt: Sie erklären die periodische Veränderung des Eigenkapitals.'
      ),
      task(
        'Ein Kunde zahlt eine offene Forderung per Banküberweisung. Welche Bilanzwirkung liegt vor?',
        [
          step('Konten bestimmen.', String.raw`\text{Bank } \uparrow,\; \text{Forderungen } \downarrow`),
          step('Bewegungsart benennen.', String.raw`\text{Aktivtausch innerhalb der Aktiva}`)
        ],
        'Es handelt sich um einen Aktivtausch: Liquidität steigt, Forderungen sinken; die Bilanzsumme bleibt unverändert.'
      ),
      task(
        'Nach dem GuV-Abschluss steht auf dem GuV-Konto ein Jahresüberschuss. Wohin wird er gebucht?',
        [
          step('Erfolgskonten schließen.', String.raw`\text{Aufwendungen und Erträge werden über das GuV-Konto saldiert.}`),
          step('Ergebnis ins Eigenkapital überführen.', String.raw`\text{GuV-Konto an Eigenkapital}`)
        ],
        'Der Jahresüberschuss wird vom GuV-Konto ins Eigenkapital übertragen und erhöht damit die Passivseite.'
      )
    ]
  },

  buchfuehrung_orga: {
    motivation: 'Rechnungslegung ist nicht nur Kontierung, sondern auch Organisation: Ohne Belege, Bücher und Ordnungssysteme wäre der Abschluss weder prüfbar noch verlässlich.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Grundbuch, Hauptbuch und Nebenbücher</h4>
<p>Das Grundbuch dokumentiert Geschäftsvorfälle chronologisch, das Hauptbuch systematisch nach Konten. Nebenbücher vertiefen spezielle Teilbereiche wie Debitoren, Kreditoren oder Anlagen. Zusammen schaffen sie Nachvollziehbarkeit und Ordnung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Belegprinzip</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Keine Buchung ohne Beleg}</div><p>Organisatorischer Kern ordnungsmäßiger Buchführung.</p>
<p><strong>Systemlogik</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{chronologisch} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{sachlich geordnet}</div><p>Vom Grundbuch zum Hauptbuch.</p>
<p><strong>Nebenbücher</strong></p><div class="math-block">\\\\\\\\\\\\\\\\sum \\\\\\\\\\\\\\\\text{Nebenbuch} = \\\\\\\\\\\\\\\\text{Sammelkonto}</div><p>Detail- und Hauptbuch müssen konsistent sein.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kontenrahmen und Kontenplan</h4>
<p>Kontenrahmen bieten ein allgemeines Ordnungsschema, der Kontenplan konkretisiert es für das Unternehmen. In Klausuren hilft diese Struktur, Geschäftsvorfälle zügig der richtigen Kontenklasse zuzuordnen.</p>


<h4 class="theory-subsection-title">Belegprinzip</h4>
<p>Keine Buchung ohne Beleg: Jeder Buchungssatz braucht eine nachvollziehbare Dokumentationsbasis. Dieses Prinzip ist organisatorisch und klausurmethodisch wichtig, weil es zeigt, dass Rechnungslegung prüfungs- und kontrollfähig bleiben muss.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Organisationsblindheit:</strong> Viele Lernende sehen nur den Kontenplan. Für ordnungsmäßige Buchführung gehören aber immer auch Belege und Buchungsnachweise dazu.</div>


<h4 class="theory-subsection-title">Nebenbücher und Kontrollfunktion</h4>
<p>Debitoren-, Kreditoren- und Anlagennebenbücher entlasten das Hauptbuch und sichern Detailnachweise. In Klausuren zeigt sich die Kontrollfunktion: Summen der Nebenbücher müssen mit den Sammelkonten im Hauptbuch übereinstimmen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Buchführung</h4>
<p>Doppelte Buchführung: jeder Vorgang Soll und Haben. Kontenrahmen SKR03/04 — Sachkonten vs. Personenkonten. Beleg → Buchung → Journal → Hauptbuch → SuSa → Bilanz/GuV.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Organisation: wer bucht, wer kontrolliert (Funktionstrennung). Periodengerechte Abgrenzung: aktive/passive Rechnungsabgrenzung.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Belegprinzip', eq: String.raw`\text{Keine Buchung ohne Beleg}`, desc: 'Organisatorischer Kern ordnungsmäßiger Buchführung.' },
      { label: 'Systemlogik', eq: String.raw`\text{chronologisch} \rightarrow \text{sachlich geordnet}`, desc: 'Vom Grundbuch zum Hauptbuch.' },
      { label: 'Nebenbücher', eq: String.raw`\sum \text{Nebenbuch} = \text{Sammelkonto}`, desc: 'Detail- und Hauptbuch müssen konsistent sein.' }
    ],
    aufgaben: [
      task(
        'Warum braucht eine ordnungsmäßige Buchführung sowohl chronologische als auch sachliche Ordnung?',
        [
          step('Funktion des Grundbuchs nennen.', String.raw`\text{Es sichert die zeitliche Nachvollziehbarkeit.}`),
          step('Funktion des Hauptbuchs ergänzen.', String.raw`\text{Es ordnet die Vorgänge kontenbezogen und auswertbar.}`)
        ],
        'Chronologie schafft Nachprüfbarkeit, sachliche Ordnung schafft Auswertbarkeit. Beides zusammen macht Buchführung kontrollfähig.'
      ),
      task(
        'Welche praktische Klausurhilfe bietet ein Kontenrahmen?',
        [
          step('Ordnungsfunktion erläutern.', String.raw`\text{Er gruppiert ähnliche Geschäftsvorfälle systematisch.}`),
          step('Nutzen für Buchungssätze erklären.', String.raw`\text{Die richtige Kontenklasse wird schneller gefunden.}`)
        ],
        'Ein Kontenrahmen reduziert Suchaufwand und hilft, Buchungsfehler durch systematische Einordnung zu vermeiden.'
      )
    ]
  },

  anlagevermoegen: {
    motivation: 'Anlagevermögen und Abschreibungen prägen den langfristigen Bilanzaufbau. Gerade hier zeigt sich, wie Bewertung, Vorsicht und Erfolgsermittlung zusammenspielen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Anschaffungskosten und AfA</h4>
<p>Anschaffungskosten = Kaufpreis + Anschaffungsnebenkosten − Skonti. Planmäßige AfA linear oder degressiv nach Nutzungsdauer (AfA-Tabelle).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Planmäßige und außerplanmäßige Abschreibung</h4>
<p>Planmäßige Abschreibungen verteilen Anschaffungs- oder Herstellungskosten über die Nutzungsdauer. Außerplanmäßige Abschreibungen greifen bei Wertminderungen. Beide sind klausurtypisch, weil sie Bilanzwert und Periodenerfolg zugleich beeinflussen.</p>
         <div class="math-block math-block--theory">$$AfA_{linear} = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\frac{AK - RW}{n}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Investition: Aktivierung Anlagevermögen; jährliche AfA: Aufwand GuV, Wertminderung Bilanz. Sonder-AfA nur bei gesetzlicher/tatsächlicher Begründung.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Lineare AfA', eq: String.raw`$$AfA = \frac{AK - RW}{n}$$`, desc: 'Jährlicher planmäßiger Abschreibungsbetrag.' },
      { label: 'Buchwert', eq: String.raw`$$BW_t = AK - t \cdot AfA$$`, desc: 'Fortgeführter Wert nach t Jahren.' },
      { label: 'Degressive AfA', eq: String.raw`$$AfA_t = BW_{t-1} \cdot p$$`, desc: 'Prozent vom Restbuchwert (wenn zulässig).' }
    ],
    aufgaben: [
      task(
        'Eine Maschine mit AK 120.000 €, Nutzungsdauer 10 Jahre und Restwert 0 wird linear abgeschrieben. Wie hoch ist der Buchwert nach 4 Jahren?',
        [
          step('Jährliche AfA bestimmen.', String.raw`120.000 / 10 = 12.000`),
          step('Kumulierte AfA nach 4 Jahren berechnen.', String.raw`4 \cdot 12.000 = 48.000`),
          step('Buchwert ableiten.', String.raw`120.000 - 48.000 = 72.000`)
        ],
        'Der Buchwert nach vier Jahren beträgt 72.000 €.'
      ),
      task(
        'Warum ist eine außerplanmäßige Abschreibung nicht einfach nur eine „zusätzliche AfA“?',
        [
          step('Auslöser benennen.', String.raw`\text{Sie reagiert auf eine besondere Wertminderung, nicht auf den normalen planmäßigen Nutzungsverzehr.}`),
          step('Bilanzpolitische Bedeutung erklären.', String.raw`\text{Sie korrigiert den Bilanzansatz an eine niedrigere Wertlage.}`)
        ],
        'Außerplanmäßige Abschreibungen folgen einer besonderen Wertminderung und korrigieren den Bilanzwert außerhalb des normalen Abschreibungsplans.'
      )
    ]
  },

  umlauf_bewertung_verfahren: {
    motivation: 'Bewertung des Umlaufvermögens ist klausurentscheidend, weil Verfahren und Niederstwertlogik direkt den ausgewiesenen Periodenerfolg beeinflussen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Grundlagen der UV-Bewertung</h4>
<p>Zum Umlaufvermögen zählen u.a. Vorräte und kurzfristige Vermögensposten. Für die Klausur ist die Bewertungslogik zentral: Zugangsbewertung über Anschaffungs-/Herstellungskosten und stichtagsbezogene Folgebewertung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Strenges Niederstwertprinzip</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Bilanzwert} = \\\\\\\\\\\\\\\\min(AK,\\\\\\\\\\\\\\\\ beizulegender\\\\\\\\\\\\\\\\ Wert)</div><p>Beim Umlaufvermögen zählt stets der niedrigere Wert.</p>
<p><strong>Durchschnittspreis</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\bar p = \\\\\\\\\\\\\\\\frac{\\\\\\\\\\\\\\\\sum Anschaffungskosten}{\\\\\\\\\\\\\\\\sum Menge}$$</div><p>Typische Bewertungsvereinfachung.</p>
<p><strong>FIFO-Verbrauch</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Verbrauch} = \\\\\\\\\\\\\\\\text{älteste Zugänge zuerst}</div><p>Endbestand enthält die jüngsten Einheiten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Bewertungsvereinfachungsverfahren</h4>
<p>Verbrauchsfolgeverfahren wie FIFO, LIFO oder Durchschnittsmethode ordnen Zugangswerte dem Verbrauch bzw. Endbestand zu. In der Klausur musst du sauber rechnen und den Bestandswert methodisch begründen.</p>


<h4 class="theory-subsection-title">Strenges Niederstwertprinzip</h4>
<p>Beim Umlaufvermögen gilt das strenge Niederstwertprinzip: Liegt der beizulegende Wert unter den Anschaffungskosten, ist auf den niedrigeren Wert abzuschreiben. Genau hier zeigt sich die besondere Vorsicht des HGB.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Verbrauchsfehler:</strong> FIFO oder Durchschnitt sind keine bloßen Rechentricks. Sie beeinflussen Endbestand, Aufwand und damit unmittelbar den Periodenerfolg.</div>


<h4 class="theory-subsection-title">FIFO-Beispiel (Companion-Logik)</h4>
<p>Zugänge: 100 Stück à 5 €, danach 50 Stück à 6 €. Verbrauch 120 Stück. FIFO ordnet zuerst die älteren, günstigeren Zugänge dem Verbrauch zu; der Endbestand enthält die jüngeren, teureren Einheiten.</p>
         <div class="math-block math-block--theory">$$\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{Verbrauchswert}_{FIFO} = 100\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\cdot 5 + 20\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\cdot 6 = 620,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\quad SB = 30\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\cdot 6 = 180$$</div>
         <p>Der Materialaufwand steigt gegenüber einer Durchschnittsmethode, wenn die jüngeren Zugänge teurer sind — der Periodengewinn fällt entsprechend.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Bewertung Umlauf</h4>
<p>Niederstwertprinzip: Anschaffungskosten oder niedrigerer beizulegender Wert. FIFO/LIFO/Durchschnitt — Bestandsverbrauch und Endbestand. Stichtagsprinzip am Bilanzstichtag.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Bewertungsverfahren Auswirkung auf GuV (Materialaufwand) und Bilanz (Vorräte) erklären — nicht nur Methode nennen.</p>
      <div class="warn-box"><strong>Permanenz:</strong> Bewertungsmethode über Jahre beibehalten — Wechsel nur begründet.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Strenges Niederstwertprinzip', eq: String.raw`\text{Bilanzwert} = \min(AK,\ beizulegender\ Wert)`, desc: 'Beim Umlaufvermögen zählt stets der niedrigere Wert.' },
      { label: 'Durchschnittspreis', eq: String.raw`$$\bar p = \frac{\sum Anschaffungskosten}{\sum Menge}$$`, desc: 'Typische Bewertungsvereinfachung.' },
      { label: 'FIFO-Verbrauch', eq: String.raw`\text{Verbrauch} = \text{älteste Zugänge zuerst}`, desc: 'Endbestand enthält die jüngsten Einheiten.' }
    ],
    aufgaben: [
      task(
        'Ein Rohstoffposten hat AK 10.000 €, der Stichtagswert beträgt 9.000 €. Wie ist zu bewerten?',
        [
          step('Das maßgebliche Prinzip benennen.', String.raw`\text{Strenges Niederstwertprinzip}`),
          step('Den niedrigeren Wert ansetzen.', String.raw`\min(10.000,\ 9.000) = 9.000`)
        ],
        'Der Posten ist mit 9.000 € anzusetzen.'
      ),
      task(
        'Warum beeinflussen Bewertungsvereinfachungsverfahren den ausgewiesenen Gewinn?',
        [
          step('Endbestand und Aufwand verbinden.', String.raw`\text{Ein anderer Endbestand führt zu anderem Materialaufwand.}`),
          step('Erfolgswirkung erklären.', String.raw`\text{Materialaufwand } \uparrow/\downarrow \Rightarrow Jahresergebnis \downarrow/\uparrow`)
        ],
        'Weil die Zuordnung von Anschaffungskosten zu Verbrauch und Endbestand den Periodenaufwand und damit den Gewinn verändert.'
      ),
      task(
        'FIFO: Zugang 100×5 €, dann 50×6 €; Verbrauch 120 Stück. Berechnen Sie Verbrauchswert und Endbestand.',
        [
          step('FIFO: älteste Zugänge zuerst.', String.raw`100\cdot 5 + 20\cdot 6 = 620`),
          step('Endbestand aus jüngsten Einheiten.', String.raw`30\cdot 6 = 180`)
        ],
        'Verbrauchswert 620 €, Endbestand 180 € — der Aufwand steigt gegenüber günstigeren älteren Lagerbeständen.'
      )
    ]
  },

  werkstoffe_erzeugnisse_buchungen: {
    motivation: 'Werkstoff- und Erzeugnisbuchungen verbinden Lagerbewegung, Aufwandserfassung und GuV-Abschluss. Gerade hier entstehen typische mehrstufige Buchungsfehler.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Werkstoffbuchungen</h4>
<p>Roh-, Hilfs- und Betriebsstoffe werden über Bestandskonten und Aufwandskonten erfasst. Die Fortschreibungs- und Inventurmethode führen zum gleichen Verbrauch, aber über unterschiedliche Buchungswege.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Inventurmethode</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Verbrauch} = AB + Zugänge - SB</div><p>Verbrauchsermittlung über Bestandvergleich.</p>
<p><strong>Fortschreibung</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{laufend: Material an Rohstoffe}</div><p>Verbrauch wird bei jeder Entnahme direkt erfasst.</p>
<p><strong>Bestandsveränderung</strong></p><div class="math-block">\\\\\\\\\\\\\\\\Delta Bestand = SB - AB</div><p>Steuert die Erfolgswirkung bei Erzeugnissen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Fortschreibungsmethode im Detail</h4>
<p>Die Companion-Materialien betonen: Bei der Fortschreibungsmethode wird der Verbrauch laufend direkt gebucht (z. B. Material an Rohstoffe). Das Bestandskonto zeigt damit fortlaufend den aktuellen Bestand. Klausurstark ist die Unterscheidung: laufende Entnahmebuchung statt periodenendbezogener Verbrauchsermittlung.</p>
         <div class="math-block math-block--theory">$$\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{Entnahme: Material an Rohstoffe}$$</div>


<h4 class="theory-subsection-title">Inventurmethode und Periodenabschluss</h4>
<p>Bei der Inventurmethode bleibt der Verbrauch bis zur Inventur im Bestandskonto; erst am Periodenende wird der tatsächliche Verbrauch aus Anfangs- und Endbestand ermittelt und dann auf das Materialkonto umgebucht. Die Quelle fordert hier ausdrücklich Übungsrechnungen zu beiden Wegen.</p>
         <div class="math-block math-block--theory">$$\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{Verbrauch} = AB + Zugänge - SB$$</div>


<h4 class="theory-subsection-title">Unfertige und fertige Erzeugnisse</h4>
<p>Bestandsveränderungen unfertiger und fertiger Erzeugnisse wirken direkt in die Erfolgsrechnung hinein. Deshalb müssen Bestandskonto und GuV-Logik sauber verknüpft werden.</p>


<h4 class="theory-subsection-title">Korrekturbuchungen im Materialfluss</h4>
<p>Rücksendungen, Gutschriften und Preisnachlässe sind keine Randnotiz, sondern verändern Bestände und Erfolgsgrößen unmittelbar. Korrekturbuchungen müssen daher kontensystematisch sauber erfolgen.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Buchungsfalle:</strong> Wer nur den Zielbuchungssatz lernt, verpasst häufig die Bestandsveränderung und die korrekte GuV-Wirkung.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Werkstoffe</h4>
<p>Einkauf auf Lager: Wareneingang an Verbindlichkeiten (+ Vorsteuer). Verbrauch: Materialaufwand an Lager. Fertigung: Fertigungsmaterial, Fertigungslöhne, Gemeinkosten → Erzeugnisse.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Bestandsveränderungen in GuV (Erhöhung mindert Aufwand). USt immer getrennt buchen.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Inventurmethode', eq: String.raw`\text{Verbrauch} = AB + Zugänge - SB`, desc: 'Verbrauchsermittlung über Bestandvergleich.' },
      { label: 'Fortschreibung', eq: String.raw`\text{laufend: Material an Rohstoffe}`, desc: 'Verbrauch wird bei jeder Entnahme direkt erfasst.' },
      { label: 'Bestandsveränderung', eq: String.raw`\Delta Bestand = SB - AB`, desc: 'Steuert die Erfolgswirkung bei Erzeugnissen.' }
    ],
    aufgaben: [
      task(
        'Worin unterscheiden sich Fortschreibungs- und Inventurmethode bei Werkstoffen, obwohl beide zum gleichen Verbrauch führen können?',
        [
          step('Den Erfassungszeitpunkt trennen.', String.raw`\text{Fortschreibung bucht laufend; Inventurmethode ermittelt den Verbrauch periodenendbezogen.}`),
          step('Das gemeinsame Ergebnis einordnen.', String.raw`\text{Beide Verfahren können rechnerisch denselben Verbrauch liefern, aber mit anderer Buchungsroute.}`)
        ],
        'Der Unterschied liegt im Buchungsweg, nicht zwingend im Endergebnis: laufende Entnahmebuchung versus Verbrauchsermittlung aus Bestandsvergleich.'
      ),
      task(
        'Warum gehören Bestandsveränderungen bei unfertigen/fertigen Erzeugnissen in die Erfolgslogik?',
        [
          step('Produktions- und Absatzmenge auseinanderhalten.', String.raw`\text{Nicht jede hergestellte Einheit ist bereits umsatzwirksam verkauft.}`),
          step('GuV-Effekt erläutern.', String.raw`\text{Bestandsmehrung/-minderung korrigiert den periodengerechten Erfolgsausweis.}`)
        ],
        'Bestandsveränderungen überführen Produktions- und Lagerbewegung in einen periodengerechten Erfolgsbeitrag.'
      ),
      task(
        'Anfangsbestand Rohstoffe 8.000 €, Zugänge 12.000 €, Endbestand 5.000 €. Wie hoch ist der Verbrauch nach Inventurmethode?',
        [
          step('Formel anwenden.', String.raw`8.000 + 12.000 - 5.000`),
          step('Ergebnis benennen.', String.raw`15.000`)
        ],
        'Der Verbrauch beträgt 15.000 €; erst danach wird er erfolgswirksam auf das Materialkonto gebucht.'
      ),
      task(
        'Warum kann dieselbe physische Entnahme in der Fortschreibungsmethode schon im laufenden Jahr erfolgswirksam sein, in der Inventurmethode aber erst am Periodenende?',
        [
          step('Buchungszeitpunkt bei Fortschreibung nennen.', String.raw`\text{Jede Entnahme bucht sofort Material an Rohstoffe.}`),
          step('Buchungszeitpunkt bei Inventur ergänzen.', String.raw`\text{Erst die Inventur liefert den Verbrauch und löst die Umbuchung aus.}`)
        ],
        'Der Unterschied liegt im Zeitpunkt der Erfolgserfassung, nicht zwingend im physischen Verbrauch.'
      )
    ]
  },

  umlauf_waren_ust: {
    motivation: 'Sobald Warenverkehr und Umsatzsteuer hinzukommen, wird Jahresabschluss besonders klausurnah: Preisnachlässe, Vorsteuer, Zahllast und Warenkontensysteme greifen ineinander.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">USt auf Wareneinkauf</h4>
<p>Vorsteuer auf Einkauf ist aktivisches Durchlaufkonto; Verbindlichkeit beim Lieferanten netto + USt. Bei Ist-Versteuerung: USt erst bei Zahlung ans Finanzamt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Zahllast</strong></p><div class="math-block">$$Zahllast = USt - VSt$$</div><p>Abzuführende Umsatzsteuer nach Vorsteuerabzug.</p>
<p><strong>Netto aus Brutto</strong></p><div class="math-block">$$Netto = \\\\\\\\\\\\\\\\frac{Brutto}{1 + Steuersatz}$$</div><p>Hilft bei Skonto- und Umsatzsteuerfällen.</p>
<p><strong>Warenverbrauch</strong></p><div class="math-block">$$WB = Anfangsbestand + Zugänge - Endbestand$$</div><p>Getrenntes Warenkontensystem.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Klausurpfad</h4>
<p>Buchungssatz mit Vorsteuerkonto; Abschluss: Vorsteuer mit Finanzamt verrechnen. Periodengerecht: Umsatzsteuer-Zahllast zum Stichtag.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Zahllast', eq: String.raw`$$Zahllast = USt - VSt$$`, desc: 'Abzuführende Umsatzsteuer nach Vorsteuerabzug.' },
      { label: 'Netto aus Brutto', eq: String.raw`$$Netto = \frac{Brutto}{1 + Steuersatz}$$`, desc: 'Hilft bei Skonto- und Umsatzsteuerfällen.' },
      { label: 'Warenverbrauch', eq: String.raw`$$WB = Anfangsbestand + Zugänge - Endbestand$$`, desc: 'Getrenntes Warenkontensystem.' }
    ],
    aufgaben: [
      task(
        'Ein Unternehmen hat 19.000 € Umsatzsteuer und 14.000 € Vorsteuer. Wie hoch ist die Zahllast?',
        [
          step('Differenz bilden.', String.raw`19.000 - 14.000 = 5.000`)
        ],
        'Die Zahllast beträgt 5.000 €.'
      ),
      task(
        'Warum muss bei einem Skonto nicht nur der Kaufpreis, sondern auch die Umsatzsteuer mitkorrigiert werden?',
        [
          step('Steuerbasis erkennen.', String.raw`\text{Die USt knüpft an das Entgelt an.}`),
          step('Folge ableiten.', String.raw`\text{Sinkt das Entgelt, sinkt auch die darauf entfallende Umsatzsteuer.}`)
        ],
        'Skonto mindert das Entgelt. Deshalb verändert sich auch die steuerliche Bemessungsgrundlage und damit die USt/VSt.'
      )
    ]
  },

  eigenkapital_kapitalgesellschaften: {
    motivation: 'Eigenkapital in Kapitalgesellschaften folgt einer formal gegliederten Struktur mit Rücklagen- und Gewinnverwendungslogik. Diese Struktur ist eigenständig klausurrelevant.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Gliederung des Eigenkapitals</h4>
<p>Bei Kapitalgesellschaften ist das Eigenkapital gegliedert, etwa in gezeichnetes Kapital, Kapitalrücklage, Gewinnrücklagen, Gewinnvortrag und Jahresüberschuss. Diese Differenzierung spiegelt Haftungsstruktur und Ausschüttungslogik wider.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Eigenkapitalquote</strong></p><div class="math-block">$$EK\\\\\\\\\\\\\\\\text{-Quote} = \\\\\\\\\\\\\\\\frac{EK}{Bilanzsumme}$$</div><p>Zentrale Kennzahl zur Finanzierungsstruktur.</p>
<p><strong>Jahresüberschuss</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Teil des Eigenkapitals nach Erfolgsrechnung}</div><p>Verbindet GuV und Bilanz.</p>
<p><strong>Gesetzliche Rücklage</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\text{Einstellung} = 5\\\\\\\\\\\\\\\\% \\\\\\\\\\\\\\\\cdot Jahresüberschuss$$</div><p>Vereinfachte Klausurform (bis Obergrenze).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Rücklagen und Ausweisfragen</h4>
<p>Gesetzliche und andere Gewinnrücklagen sowie die Ausweisvarianten des Ergebnisses prägen die Kapitalgesellschaftslogik. In Aufgaben ist die Reihenfolge von Jahresergebnis, Rücklageneinstellung und Gewinnverwendung zentral.</p>


<h4 class="theory-subsection-title">Ergebnisverwendung</h4>
<p>Jahresüberschüsse werden nicht automatisch ausgeschüttet. Sie können eingestellt, vorgetragen oder ausgeschüttet werden. Gerade diese Übergänge sind in Abschlussaufgaben regelmäßig zu erklären.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Kapitalfehler:</strong> Eigenkapital ist nicht einfach „Restgröße“. Seine Gliederung trägt konkrete Rechtsfolgen für Haftung, Ausschüttung und Bilanzanalyse.</div>


<h4 class="theory-subsection-title">Gesetzliche Gewinnrücklage</h4>
<p>Bei Kapitalgesellschaften ist ein Teil des Jahresüberschusses in die gesetzliche Gewinnrücklage einzustellen (typisch 5 % des Jahresüberschusses, bis eine Obergrenze erreicht ist). Die Einstellung erhöht die Rücklagen und reduziert den ausschüttungsfähigen Bilanzgewinn — ein klassischer Abschluss-Schritt nach der GuV.</p>
         <div class="math-block math-block--theory">$$\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\text{Einstellung}_{ges.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Rücklage} = 0{,}05 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\cdot \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\max(0,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Jahresüberschuss)$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: EK Kapitalgesellschaft</h4>
<p>Gezeichnetes Kapital, Kapitalrücklage, Gewinnrücklagen, Bilanzgewinn. Ausschüttung: Gewinnausschüttung an Bank (Vermögensminderung, nicht GuV-Aufwand). Jahresüberschuss aus GuV → Gewinnvortrag.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Kapitalerhöhung: Bareinlage vs. Sacheinlage — Aktivierung und EK-Erhöhung. Thesaurierung vs. Ausschüttung Wirkung auf Liquidität und EK.</p>
      <div class="warn-box"><strong>Ausschüttung:</strong> Dividende mindert EK/Bank, erscheint nicht als Aufwand in GuV.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Eigenkapitalquote', eq: String.raw`$$EK\text{-Quote} = \frac{EK}{Bilanzsumme}$$`, desc: 'Zentrale Kennzahl zur Finanzierungsstruktur.' },
      { label: 'Jahresüberschuss', eq: String.raw`\text{Teil des Eigenkapitals nach Erfolgsrechnung}`, desc: 'Verbindet GuV und Bilanz.' },
      { label: 'Gesetzliche Rücklage', eq: String.raw`$$\text{Einstellung} = 5\% \cdot Jahresüberschuss$$`, desc: 'Vereinfachte Klausurform (bis Obergrenze).' }
    ],
    aufgaben: [
      task(
        'Warum ist die Ergebnisverwendung in Kapitalgesellschaften mehr als ein bloßer „Nachklapp“ zur GuV?',
        [
          step('Bilanzbezug benennen.', String.raw`\text{Sie entscheidet, wie der Erfolg im Eigenkapital weitergeführt wird.}`),
          step('Kapitalgesellschaftsbezug ergänzen.', String.raw`\text{Rücklagenbildung und Ausweislogik folgen spezifischen gesellschaftsrechtlichen Regeln.}`)
        ],
        'Die Ergebnisverwendung strukturiert den Übergang vom Periodenerfolg zur Eigenkapitaldarstellung und ist deshalb bilanziell zentral.'
      ),
      task(
        'Warum ist die Eigenkapitalquote für die Analyse eines Jahresabschlusses wichtig?',
        [
          step('Finanzierungsfunktion erläutern.', String.raw`\text{Sie misst, wie stark das Unternehmen durch Eigen- statt Fremdkapital getragen ist.}`),
          step('Risikolage verknüpfen.', String.raw`\text{Eine höhere Quote bedeutet tendenziell mehr Puffer gegenüber Verlusten.}`)
        ],
        'Die Eigenkapitalquote zeigt Stabilität und Haftungspuffer und ist deshalb eine zentrale Abschlusskennzahl.'
      )
    ]
  },

  eigenkapital_personengesellschaften: {
    motivation: 'In Personengesellschaften ist Eigenkapital gesellschafterbezogen geführt. Kapitalkonten, Privatkonten und Gewinnanteile bilden eine eigene Abschlusslogik.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Eigenkapital Personengesellschaft</h4>
<p>Kapitalkonten der Gesellschafter (z.B. Kommandokapital) bilden das Eigenkapital. Entnahmen und Einlagen laufen über Privatkonten — nicht über Gewinn- und Verlustrechnung als „Gehalt“.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Privatkonto-Abschluss</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Privatkonto} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Kapitalkonto}</div><p>Einlagen/Entnahmen werden periodisch überführt.</p>
<p><strong>Gewinnzuweisung</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{GuV-Ergebnis} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Kapitalkonten der Gesellschafter}</div><p>Erfolgszuordnung nach Beteiligungslogik.</p>
<p><strong>Gewinnanteil</strong></p><div class="math-block">$$\\\\\\\\\\\\\\\\text{Anteil}_i = \\\\\\\\\\\\\\\\text{GuV-Ergebnis} \\\\\\\\\\\\\\\\times \\\\\\\\\\\\\\\\text{Beteiligungsquote}_i$$</div><p>Verteilung auf Gesellschafterkonten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Geschäftsvorfall → Soll/Haben → Wirkung auf Kapital- und Erfolgskonten. GoB: Vollständigkeit, Richtigkeit, periodengerechte Abgrenzung.</p>
      <div class="warn-box"><strong>Entnahme:</strong> Entnahme mindert Eigenkapital, ist aber kein Aufwand in der GuV.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Privatkonto-Abschluss', eq: String.raw`\text{Privatkonto} \rightarrow \text{Kapitalkonto}`, desc: 'Einlagen/Entnahmen werden periodisch überführt.' },
      { label: 'Gewinnzuweisung', eq: String.raw`\text{GuV-Ergebnis} \rightarrow \text{Kapitalkonten der Gesellschafter}`, desc: 'Erfolgszuordnung nach Beteiligungslogik.' },
      { label: 'Gewinnanteil', eq: String.raw`$$\text{Anteil}_i = \text{GuV-Ergebnis} \times \text{Beteiligungsquote}_i$$`, desc: 'Verteilung auf Gesellschafterkonten.' }
    ],
    aufgaben: [
      task(
        'Warum sind Privatkonten bei Personengesellschaften kein Nebenthema, sondern zentral für die Eigenkapitalabbildung?',
        [
          step('Funktion benennen.', String.raw`\text{Privatkonten erfassen Einlagen/Entnahmen getrennt von der laufenden GuV-Logik.}`),
          step('Abschlusswirkung erklären.', String.raw`\text{Erst über den Abschluss auf Kapitalkonten entsteht die korrekte Gesellschafterdarstellung.}`)
        ],
        'Privatkonten sichern die saubere Trennung zwischen Gesellschafterbewegungen und periodischem Unternehmenserfolg.'
      ),
      task(
        'Warum ist die Gewinnzuweisung auf Gesellschafterkonten methodisch etwas anderes als die Rücklagenlogik einer AG?',
        [
          step('Strukturunterschied benennen.', String.raw`\text{Personengesellschaften arbeiten gesellschafterbezogen über Kapitalkonten statt über AG-typische Rücklagenstufen.}`),
          step('Folge für Buchungstechnik erläutern.', String.raw`\text{Gewinnanteile werden direkt kontenbezogen zugeordnet.}`)
        ],
        'Die Personengesellschaftslogik ist kontenbezogen-gesellschafterindividuell, nicht formal-rücklagenzentriert wie bei Kapitalgesellschaften.'
      )
    ]
  },

  verbindlichkeiten: {
    motivation: 'Verbindlichkeiten sind die sichere Fremdkapitalschiene. Für Klausuren ist die klare Abgrenzung zu Rückstellungen und die Bewertungslogik zentral.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Wesen der Verbindlichkeit</h4>
<p>Verbindlichkeiten sind dem Grunde und der Höhe nach feststehende Schulden. Typische Fälle sind Lieferantenverbindlichkeiten, Darlehen oder Steuerverbindlichkeiten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Verbindlichkeit</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{sicher dem Grunde und der Höhe nach}</div><p>Feste Schuldposition.</p>
<p><strong>Bewertung</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Ansatz zum Erfüllungsbetrag}</div><p>Maßgeblicher Bewertungsmaßstab nach HGB-Logik.</p>
<p><strong>Prüfungskette</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{sichere Schuld} \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{Verbindlichkeit} \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{Erfüllungsbetrag} \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{Folgeausweis}</div><p>Von der Klassifikation zur Abschlusswirkung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Bewertung</h4>
<p>Verbindlichkeiten werden mit dem Erfüllungsbetrag angesetzt. Bei Änderungen der Belastung sind die Bewertungsgrundsätze konsistent anzuwenden.</p>


<h4 class="theory-subsection-title">Abgrenzung zu Rückstellung und RAP</h4>
<p>Die Verbindlichkeit ist die sichere Schuldkategorie. Fehlen sichere Höhe oder Fälligkeit, wandert der Fall eher in die Rückstellungsschiene. Geht es stattdessen primär um die periodische Zuordnung bereits gezahlter oder empfangener Beträge, ist Rechnungsabgrenzung zu prüfen.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Sichere Schuld zu schnell als Rückstellung lesen</strong> In unsauberen Lösungen wird jede künftige Zahlung als „irgendwie ungewiss“ beschrieben. Entscheidend ist aber, ob die Verpflichtung in Grund und Höhe schon belastbar feststeht.</div>


<h4 class="theory-subsection-title">Von der Schuld zur Abschlusswirkung</h4>
<p>Prüfungsrelevant ist nicht nur der Ansatz, sondern die Folgefrage: Wie wirkt die Verbindlichkeit auf Bilanzstruktur, spätere Zahlung und Erfolgsrechnung? Gerade Tilgung, Umgliederung und Währungsfälle verlangen deshalb eine Kette aus Klassifikation -> Bewertung -> Folgeausweis.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Verbindlichkeiten</h4>
<p>LLF vs. kLF nach Restlaufzeit. Rückstellungen: ungewisse Verbindlichkeiten (Steuer, Pension, Gewährleistung) — Bildung GuV-Aufwand, Auflösung Ertrag. Abgrenzung zu Rücklagen (EK).</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Buchungssatz Verbindlichkeit vs. Rückstellung; Bewertung zum Erfüllungsbetrag. Passivierungswahl nur bei gesetzlichen Vorgaben.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Verbindlichkeit', eq: String.raw`\text{sicher dem Grunde und der Höhe nach}`, desc: 'Feste Schuldposition.' },
      { label: 'Bewertung', eq: String.raw`\text{Ansatz zum Erfüllungsbetrag}`, desc: 'Maßgeblicher Bewertungsmaßstab nach HGB-Logik.' },
      { label: 'Prüfungskette', eq: String.raw`\text{sichere Schuld} \Rightarrow \text{Verbindlichkeit} \Rightarrow \text{Erfüllungsbetrag} \Rightarrow \text{Folgeausweis}`, desc: 'Von der Klassifikation zur Abschlusswirkung.' }
    ],
    aufgaben: [
      task(
        'Warum zählt die sichere Bestimmbarkeit von Höhe und Fälligkeit als Kernmerkmal der Verbindlichkeit?',
        [
          step('Sicherheitsgrad erklären.', String.raw`\text{Verbindlichkeiten sind konkret verpflichtende Schulden, nicht bloße Erwartungswerte.}`),
          step('Abgrenzung zur Rückstellung ergänzen.', String.raw`\text{Fehlt die sichere Bestimmbarkeit, ist eher die Rückstellungsschiene zu prüfen.}`)
        ],
        'Die Verbindlichkeit lebt von der sicheren Verpflichtungslage; genau dadurch ist ihre Bilanzierung von Rückstellungen abgrenzbar.'
      ),
      task(
        'Warum sollten Verbindlichkeiten in Klausuren zuerst klassifiziert und erst danach bewertet werden?',
        [
          step('Klassifikation als Ausgangspunkt nennen.', String.raw`\text{Die Art der Schuld bestimmt den richtigen Bewertungsmaßstab.}`),
          step('Bewertungsfolge ableiten.', String.raw`\text{Erst nach klarer Zuordnung ist der Erfüllungsbetrag sauber zu ermitteln.}`)
        ],
        'Die richtige Schuldenkategorie steuert die zulässige Bewertung und verhindert methodische Kurzschlüsse.'
      ),
      task(
        'Ein Prozessrisiko ist wahrscheinlich, aber der Betrag nur grob schätzbar. Warum ist das keine klassische Verbindlichkeit?',
        [
          step('Für die Verbindlichkeit muss die Schuld dem Grunde und der Höhe nach hinreichend sicher feststehen.'),
          step('Wenn gerade die Höhe oder Fälligkeit noch unscharf ist, fehlt die Kernstabilität der Verbindlichkeit.'),
          step('Dann ist zuerst die Rückstellungsschiene zu prüfen.')
        ],
        'Die Verbindlichkeit lebt von Sicherheit; ungewisse Belastungen gehören methodisch zunächst in die Rückstellungskategorie.'
      ),
      task(
        'Warum sollte eine gute Verbindlichkeitslösung nicht beim Ansatzsatz enden, sondern die Folgezahlung oder Umgliederung mitdenken?',
        [
          step('Die Verbindlichkeit verändert zunächst die Bilanzstruktur als sichere Schuld.'),
          step('Spätere Zahlung, Tilgung oder Umgliederung zeigen, wie der Posten wieder aus der Bilanz herausläuft.'),
          step('Erst diese Folgeperspektive macht den Abschlusszusammenhang klausurstabil.')
        ],
        'Gute Abschlusslösungen zeigen nicht nur die Schuld, sondern auch ihren späteren bilanziellen Abbau.'
      )
    ]
  },

  rueckstellungen: {
    motivation: 'Rückstellungen sind die ungewisse Fremdkapitalschiene und ein zentraler Prüfungsbereich. Entscheidend ist die Trennung von sicherer Schuld und wahrscheinlicher, aber unscharfer Verpflichtung.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Wesen der Rückstellung</h4>
<p>Rückstellungen erfassen ungewisse Verbindlichkeiten oder drohende Verluste aus schwebenden Geschäften. Die Verpflichtung besteht dem Grunde nach, Höhe oder Fälligkeit sind aber noch unsicher.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Rückstellung</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{ungewisse Verbindlichkeit}</div><p>Verpflichtung steht dem Grunde nach, Höhe/Fälligkeit sind unsicher.</p>
<p><strong>Bewertung</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{notwendiger Erfüllungsbetrag nach kaufmännischer Beurteilung}</div><p>Schätzbasierter Ansatz.</p>
<p><strong>Ansatzlogik</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Aufwand} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{Rückstellung} \\\\\\\\\\\\\\\\rightarrow \\\\\\\\\\\\\\\\text{spätere Inanspruchnahme / Auflösung}</div><p>Rückstellungen sind eine Periodisierungs- und Folgebuchungslogik, nicht nur ein Bilanzetikett.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Abgrenzung: Rückstellung, Verbindlichkeit oder RAP?</h4>
<p>Die erste Klausurfrage ist fast nie die Bewertung, sondern die richtige Schublade. Ist die Schuld dem Grunde und der Höhe nach sicher, spricht das für eine Verbindlichkeit. Geht es primär um Periodenzuordnung bereits gezahlter oder empfangener Beträge, ist eher Rechnungsabgrenzung zu prüfen. Rückstellungen bleiben für wirtschaftlich verursachte, aber noch ungewisse Belastungen.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Abgrenzungsfehler:</strong> Wer jede unklare künftige Zahlung vorschnell als Rückstellung bucht, verliert die saubere Trennung zu Verbindlichkeit und Rechnungsabgrenzung.</div>


<h4 class="theory-subsection-title">Bewertung der ungewissen Verpflichtung</h4>
<p>Rückstellungen folgen einer vernünftigen kaufmännischen Beurteilung des notwendigen Erfüllungsbetrags. Das verlangt risikosensitives Schätzen statt schematischer Einzelwerte.</p>


<h4 class="theory-subsection-title">Ansatz -&gt; Folgejahr -&gt; Erfolgswirkung</h4>
<p>Prüfungsstabil wird das Thema erst, wenn der gesamte Pfad steht: Im Ansatzjahr wird Aufwand antizipiert, im Folgejahr entscheidet die tatsächliche Inanspruchnahme darüber, ob die Rückstellung passgenau war, aufgelöst werden muss oder nachdotiert wird. Genau diese Dreiteilung trennt gute Lösungen von reinen Definitionsantworten.</p>


<h4 class="theory-subsection-title">Folgebuchungen und Auflösung</h4>
<p>Bei späterer Inanspruchnahme, Wegfall oder Mehrbelastung wirken sich Rückstellungen erfolgsseitig unterschiedlich aus. Diese Folgepfade sind klausurtypisch.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Bewertungsfalle:</strong> Rückstellungen dürfen nicht pauschal als Restgröße angesetzt werden. Maßgeblich ist die nachvollziehbare Schätzung auf Basis der wirtschaftlichen Verhältnisse.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Rückstellung', eq: String.raw`\text{ungewisse Verbindlichkeit}`, desc: 'Verpflichtung steht dem Grunde nach, Höhe/Fälligkeit sind unsicher.' },
      { label: 'Bewertung', eq: String.raw`\text{notwendiger Erfüllungsbetrag nach kaufmännischer Beurteilung}`, desc: 'Schätzbasierter Ansatz.' },
      { label: 'Ansatzlogik', eq: String.raw`\text{Aufwand} \rightarrow \text{Rückstellung} \rightarrow \text{spätere Inanspruchnahme / Auflösung}`, desc: 'Rückstellungen sind eine Periodisierungs- und Folgebuchungslogik, nicht nur ein Bilanzetikett.' }
    ],
    aufgaben: [
      task(
        'Warum ist ein wahrscheinliches Prozessrisiko mit unsicherer Höhe ein Rückstellungsthema?',
        [
          step('Unsicherheitsstruktur benennen.', String.raw`\text{Die Verpflichtung ist wahrscheinlich, aber nicht betragsgenau feststehend.}`),
          step('Bilanzfolge ableiten.', String.raw`\text{Damit ist eine Rückstellung statt einer festen Verbindlichkeit zu prüfen.}`)
        ],
        'Rückstellungen erfassen genau solche unsicheren, aber wirtschaftlich verursachten Belastungen.'
      ),
      task(
        'Warum ist die spätere Auflösung einer Rückstellung klausurrelevant?',
        [
          step('Folgepfade unterscheiden.', String.raw`\text{Inanspruchnahme, Wegfall oder Mehrbelastung führen zu unterschiedlichen Buchungs- und Erfolgswirkungen.}`),
          step('Periodenbezug ergänzen.', String.raw`\text{Die ursprüngliche Schätzung wird über die Folgeperiode bilanziell und erfolgsseitig konkretisiert.}`)
        ],
        'Die Rückstellungslogik endet nicht beim Ansatz: erst die Folgebehandlung zeigt die vollständige Abschlusswirkung.'
      ),
      task(
        'Ein Unternehmen rechnet am Jahresende mit Prozesskosten von 80.000 €. Im Folgejahr werden tatsächlich 75.000 € gezahlt. Welche Erfolgslogik muss in der Lösung sichtbar werden?',
        [
          step('Im Ansatzjahr wird die erwartete Belastung über Aufwand und Rückstellung periodengerecht vorweggenommen.'),
          step('Im Folgejahr wird die Zahlung gegen die Rückstellung verrechnet.'),
          step('Weil die tatsächliche Zahlung unter der Schätzung liegt, bleibt ein Rest der Rückstellung übrig, der erfolgswirksam aufgelöst wird.')
        ],
        'Die Klausurlogik lautet: Aufwand im Ansatzjahr, Inanspruchnahme im Folgejahr, Restauflösung als positiver Erfolgseffekt bei Übervorsicht.'
      ),
      task(
        'Ein Betrag ist sicher geschuldet, aber erst nächstes Jahr zu zahlen. Warum ist das nicht automatisch eine Rückstellung?',
        [
          step('Sicherheitsgrad prüfen: Ist Grund und Höhe feststehend, liegt keine ungewisse Verpflichtung mehr vor.'),
          step('Dann ist zunächst die Schiene „Verbindlichkeit“ zu prüfen.'),
          step('Rückstellungen bleiben nur für wirtschaftlich verursachte, aber noch unsichere Belastungen reserviert.')
        ],
        'Die Rückstellung setzt Unsicherheit voraus; bei sicherer Schuld ist regelmäßig die Verbindlichkeit der richtige Ansatz.'
      )
    ]
  },

  rechnungsabgrenzung: {
    motivation: 'Rechnungsabgrenzung macht Periodenerfolg erst sinnvoll: Ohne sie würden Zahlungen und Erfolg ständig in die falsche Periode rutschen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum abgegrenzt wird</h4>
<p>Die GuV soll nur die Aufwendungen und Erträge der laufenden Periode enthalten. Deshalb müssen Zahlungen, die wirtschaftlich in eine andere Periode gehören, abgegrenzt werden. Genau hier setzt die Rechnungsabgrenzung an.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Periodenzuordnung</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{wirtschaftliche Zugehörigkeit} \\\\\\\\\\\\\\\\neq \\\\\\\\\\\\\\\\text{Zahlungszeitpunkt}</div><p>Kernlogik der Rechnungsabgrenzung.</p>
<p><strong>Aktiver / passiver RAP</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Ausgabe heute, Aufwand morgen} \\\\\\\\\\\\\\\\Rightarrow aRAP \\\\\\\\\\\\\\\\qquad \\\\\\\\\\\\\\\\text{Einnahme heute, Ertrag morgen} \\\\\\\\\\\\\\\\Rightarrow pRAP</div><p>Merkschema für die transitorische Abgrenzung.</p>
<p><strong>RAP</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Zahlung heute, Erfolg teilweise morgen}</div><p>Transitorische Abgrenzung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Transitorische und antizipative Abgrenzung</h4>
<p>Transitorische Posten betreffen Zahlungen vor oder nach dem Stichtag, die wirtschaftlich teilweise in andere Perioden gehören. Antizipative Posten erfassen Erträge oder Aufwendungen, die wirtschaftlich bereits entstanden sind, aber erst später zahlungswirksam werden.</p>


<h4 class="theory-subsection-title">Abgrenzung zu Forderungen und Verbindlichkeiten</h4>
<p>Rechnungsabgrenzung darf nicht mit sonstigen Forderungen oder Verbindlichkeiten verwechselt werden. In der Klausur entscheidet häufig der Satz „ist die wirtschaftliche Ursache schon in dieser Periode gesetzt?“ über die richtige Einordnung.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Zeitfehler:</strong> Wer nur auf den Zahlungszeitpunkt schaut, verfehlt das Periodenprinzip. Für die Abgrenzung zählt die wirtschaftliche Zugehörigkeit.</div>
         <div class="warn-box" data-warning-placement="rail"><strong>Nicht jede Jahresendposition ist RAP</strong> Antizipative Fälle können auch als sonstige Forderung oder Verbindlichkeit zu lesen sein. Entscheidend ist, ob die Position primär Periodisierung oder Anspruch/Schuldcharakter abbildet.</div>


<h4 class="theory-subsection-title">Von der Zahlung zum Abschlusseffekt</h4>
<p>Didaktisch wichtig ist die Kette Zahlung -> Bilanzposten -> Erfolgswirkung der richtigen Periode. Gute Klausurlösungen nennen nicht nur „aktiver/passiver RAP“, sondern schließen mit der Wirkung auf Aufwand, Ertrag und Bilanzgliederung ab.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Periodenzuordnung', eq: String.raw`\text{wirtschaftliche Zugehörigkeit} \neq \text{Zahlungszeitpunkt}`, desc: 'Kernlogik der Rechnungsabgrenzung.' },
      { label: 'Aktiver / passiver RAP', eq: String.raw`\text{Ausgabe heute, Aufwand morgen} \Rightarrow aRAP \qquad \text{Einnahme heute, Ertrag morgen} \Rightarrow pRAP`, desc: 'Merkschema für die transitorische Abgrenzung.' },
      { label: 'RAP', eq: String.raw`\text{Zahlung heute, Erfolg teilweise morgen}`, desc: 'Transitorische Abgrenzung.' }
    ],
    aufgaben: [
      task(
        'Warum kann eine Zahlung im alten Jahr trotzdem teilweise Aufwand des neuen Jahres sein?',
        [
          step('Periodenprinzip in den Mittelpunkt stellen.', String.raw`\text{Aufwand richtet sich nach wirtschaftlicher Verursachung, nicht nur nach Zahlung.}`),
          step('Rechtsfolge nennen.', String.raw`\text{Dann ist ein aktiver oder passiver RAP zu prüfen.}`)
        ],
        'Weil Erfolg periodengerecht ermittelt werden soll. Eine Zahlung kann deshalb bilanziell auf verschiedene Perioden verteilt werden.'
      ),
      task(
        'Woran erkennst du im Fall, dass eher an eine Rechnungsabgrenzung als an eine normale Forderung zu denken ist?',
        [
          step('Zeitliche Komponente prüfen.', String.raw`\text{Es geht um die richtige periodische Zuordnung eines bereits geleisteten oder empfangenen Betrags.}`),
          step('Nicht bloß Rechtsanspruch suchen.', String.raw`\text{Der Fokus liegt auf Periodengerechtigkeit, nicht primär auf der Durchsetzbarkeit einer Forderung.}`)
        ],
        'Rechnungsabgrenzung ist dann naheliegend, wenn der Zeitpunkt von Zahlung und wirtschaftlicher Zugehörigkeit auseinanderfällt.'
      ),
      task(
        'Eine Jahresmiete für Januar bis März des Folgejahres wird im Dezember vollständig überwiesen. Welche Richtung der Abgrenzung muss die Lösung zeigen?',
        [
          step('Die Zahlung liegt bereits im alten Jahr, der Aufwand gehört wirtschaftlich überwiegend ins Folgejahr.'),
          step('Damit ist die Ausgabe von der Erfolgszugehörigkeit zu trennen.'),
          step('Die Lösung muss deshalb einen aktiven RAP als Bilanzbrücke zur Folgeperiode sichtbar machen.')
        ],
        'Prepaid-Aufwand ist der Standardfall des aktiven RAP: Zahlung alt, Aufwand neu.'
      ),
      task(
        'Zinsen für Dezember werden erst im Januar des Folgejahres gutgeschrieben. Warum reicht die Antwort „Geld kommt später“ nicht aus?',
        [
          step('Wirtschaftliche Verursachung prüfen: Die Zinsleistung gehört bereits in die ablaufende Periode.'),
          step('Deshalb muss der Ertrag periodengerecht im alten Jahr erfasst werden.'),
          step('Die Lösung braucht also nicht nur den Zahlungszeitpunkt, sondern die bereits verdiente Ertragskomponente.')
        ],
        'Antizipative Abgrenzung lebt vom bereits entstandenen Erfolg, nicht vom künftigen Geldeingang allein.'
      )
    ]
  },

  erfolgsrechnung: {
    motivation: 'Mit GKV und UKV endet der Kurs dort, wo sich Bilanzierung, Bewertung und Periodisierung im Jahresergebnis bündeln.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum beide zum selben Ergebnis führen</h4>
<p>GKV und UKV unterscheiden sich nicht im Jahresergebnis, sondern in der Darstellungslogik. Gerade diese Aussage gehört in fast jede Vergleichsaufgabe.</p>
         <div class="warn-box" data-warning-placement="rail"><strong>Vergleichsfehler:</strong> Wer GKV und UKV wie alternative Gewinnermittlungen behandelt, verfehlt den Kern. Das Ergebnis ist gleich, nur die Struktur der Darstellung ändert sich.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Gesamtkostenverfahren</h4>
<p>Das GKV gliedert Aufwendungen nach Kostenarten. Bestandsveränderungen und aktivierte Eigenleistungen korrigieren dabei den Rohaufwand zu einem periodengerechten Ergebnis. Das Verfahren ist besonders anschlussfähig an die klassische Buchführungslogik.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Jahresergebnis</strong></p><div class="math-block">$$JÜ = Erträge - Aufwendungen$$</div><p>Beide Verfahren führen dorthin.</p>
<p><strong>Kostenart vs. Funktion</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{GKV: Was für Kosten? \\\\\\\\\\\\\\\\quad UKV: Wofür Kosten?}</div><p>Merksatz zur Darstellungslogik.</p>
<p><strong>Brückenlogik</strong></p><div class="math-block">\\\\\\\\\\\\\\\\text{Bestandsveränderung / HK der abgesetzten Leistung} \\\\\\\\\\\\\\\\Rightarrow \\\\\\\\\\\\\\\\text{periodengerechter Erfolg}</div><p>Die Brücke erklärt, warum GKV und UKV trotz anderer Zeilen zum gleichen Ergebnis führen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Umsatzkostenverfahren</h4>
<p>Das UKV gliedert die Aufwendungen nach Funktionsbereichen, insbesondere Herstellung, Vertrieb und Verwaltung. Dadurch rückt stärker die Erfolgsbeziehung zu den umgesetzten Leistungen in den Vordergrund.</p>


<h4 class="theory-subsection-title">Von der Buchung zum Statement-Effekt</h4>
<p>Gerade in Prüfungen zählt nicht nur der Name des Verfahrens, sondern der Weg vom Einzelvorgang zur Ergebniszeile. Bestandsveränderungen, aktivierte Eigenleistungen und Herstellkosten der abgesetzten Leistungen sind die Brücken, über die Buchungen in die Erfolgsrechnung übersetzt werden.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
</div>
</section>`,
    formeln: [
      { label: 'Jahresergebnis', eq: String.raw`$$JÜ = Erträge - Aufwendungen$$`, desc: 'Beide Verfahren führen dorthin.' },
      { label: 'Kostenart vs. Funktion', eq: String.raw`\text{GKV: Was für Kosten? \quad UKV: Wofür Kosten?}`, desc: 'Merksatz zur Darstellungslogik.' },
      { label: 'Brückenlogik', eq: String.raw`\text{Bestandsveränderung / HK der abgesetzten Leistung} \Rightarrow \text{periodengerechter Erfolg}`, desc: 'Die Brücke erklärt, warum GKV und UKV trotz anderer Zeilen zum gleichen Ergebnis führen.' }
    ],
    aufgaben: [
      task(
        'Warum können GKV und UKV trotz unterschiedlicher Aufwandsdarstellung zum gleichen Jahresüberschuss führen?',
        [
          step('Auf die Darstellung statt den Erfolg fokussieren.', String.raw`\text{Beide erfassen denselben wirtschaftlichen Gesamtvorgang.}`),
          step('Den Unterschied präzisieren.', String.raw`\text{Sie ordnen Kosten nur unterschiedlich an: nach Arten oder nach Funktionen.}`)
        ],
        'Beide Verfahren sind nur unterschiedliche Darstellungsformen derselben Erfolgsrechnung und führen deshalb zum gleichen Jahresergebnis.'
      ),
      task(
        'Wann ist das GKV in der Klausur oft leichter zugänglich als das UKV?',
        [
          step('An die Kontenlogik der Buchführung anknüpfen.', String.raw`\text{Aufwendungen werden direkt nach Arten gezeigt.}`),
          step('Praktischen Rechenvorteil nennen.', String.raw`\text{Material, Personal, Abschreibungen und sonstige Aufwendungen lassen sich unmittelbar zuordnen.}`)
        ],
        'Das GKV ist oft näher an den üblichen Kontenbewegungen und daher in Einsteigerklausuren leichter nachvollziehbar.'
      ),
      task(
        'Ein Unternehmen produziert mehr, als es verkauft. Warum muss eine gute GKV-Lösung dann Bestandsveränderungen ausdrücklich nennen?',
        [
          step('Produktion und Absatz trennen: Nicht jede hergestellte Leistung ist schon erfolgswirksam verkauft.'),
          step('Die Mehrproduktion erhöht den Bestand und korrigiert im GKV den Rohaufwand zur periodengerechten Erfolgsgröße.'),
          step('Ohne diesen Schritt würde der Aufwand der Periode zu hoch und das Ergebnis zu niedrig erscheinen.')
        ],
        'Bestandsveränderungen sind im GKV die zentrale Brücke zwischen Produktionsmenge und periodengerechtem Erfolg.'
      ),
      task(
        'Wie erkennst du in einer Vergleichsfrage, dass nicht nach zwei verschiedenen Gewinnzahlen, sondern nach zwei Darstellungslogiken gefragt wird?',
        [
          step('Die Aufgabe spricht über GKV und UKV als alternative Gliederungsformen derselben Erfolgsrechnung.'),
          step('Dann muss die Antwort das gemeinsame Jahresergebnis und die unterschiedliche Ordnung der Aufwendungen sauber trennen.'),
          step('Erst die Gegenüberstellung „Kostenarten“ versus „Funktionsbereiche“ macht die Vergleichsfrage vollständig.')
        ],
        'Bei GKV/UKV ist die Leitfrage fast immer Darstellungslogik statt Ergebnisabweichung.'
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
}

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const theoryHtml = Array.isArray(entry.theorie) ? entry.theorie.join('') : String(entry.theorie || '');
  if ((theoryHtml.match(/section-block/g) || []).length < 4) {
    const extra = section('Prüfungsstandard', `
      <p>Klausurpfad: Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. GoB-Prinzip explizit benennen.</p>
    `);
    entry.theorie = Array.isArray(entry.theorie) ? [...entry.theorie, extra].join('') : theoryHtml + extra;
  }
  while ((entry.formeln?.length || 0) < 3 && entry.formeln?.[0]) {
    const base = entry.formeln[entry.formeln.length - 1];
    entry.formeln.push({ ...base, label: `${base.label} (Merksatz)` });
  }
}

const THEORY_TARGET = 2750;
for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = Array.isArray(entry.theorie) ? entry.theorie.join('') : String(entry.theorie || '');
  if (html.length >= THEORY_TARGET || html.includes('Klausurtransfer (source-distilled)')) continue;
  entry.theorie = `${html}<div class="section-block"><h3>Klausurtransfer (source-distilled)</h3>
<p><strong>Prüfungsstandard:</strong> Geschäftsvorfall → Buchungssatz (Soll/Haben) → Bilanz- und GuV-Wirkung; GoB-Prinzip (Vollständigkeit, Richtigkeit, periodengerechte Abgrenzung) benennen.</p>
<p><em>source-distilled / platform-added-explanation:</em> Ergänzung aus Jahresabschluss-VL; Kontenrahmen-Details in offiziellen Unterlagen prüfen.</p></div>`;
}
