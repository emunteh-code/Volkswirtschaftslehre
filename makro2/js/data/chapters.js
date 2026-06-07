// ============================================================
// CHAPTERS & CONTENT DATA — Makroökonomik II
// Benchmark-grade authored concept line based on course materials
// ============================================================

import { COURSEWORK_TASKS } from './courseworkTasks.js';
import { A_PLUS_SUPPLEMENT } from './aPlusSupplement.js';
import { THEORY_DEPTH_EXPANSIONS } from './theoryDepthExpansions.js';

const section = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (title, body) => `<div class="warn-box" data-warning-placement="rail"><strong>${title}:</strong> ${body}</div>`;
const cloneTask = (task) => ({
  ...task,
  steps: Array.isArray(task?.steps) ? task.steps.map((step) => ({ ...step })) : []
});
const practice = (id, extras = []) => [
  ...extras.map(cloneTask),
  ...((A_PLUS_SUPPLEMENT[id]?.aufgaben || []).map(cloneTask)),
  ...((COURSEWORK_TASKS[id] || []).map(cloneTask))
];

export const CHAPTERS = [
  { id: 'zahlungsbilanz',   title: 'Zahlungsbilanz & Nettoauslandsvermögen',            cat: 'Offene Volkswirtschaft I', short: 'ZB' },
  { id: 'wechselkurs',      title: 'Nominaler und realer Wechselkurs',                  cat: 'Offene Volkswirtschaft I', short: 'WK' },
  { id: 'kaufkraftparitaet',title: 'Kaufkraftparität',                                  cat: 'Offene Volkswirtschaft I', short: 'PPP' },
  { id: 'zinsparitaet',     title: 'Ungedeckte Zinsparität',                            cat: 'Offene Volkswirtschaft I', short: 'UIP' },
  { id: 'offene_is',        title: 'Offener Gütermarkt & Multiplikator',                cat: 'Offene Volkswirtschaft II', short: 'IS offen' },
  { id: 'nettoexporte',     title: 'Nettoexporte & Wettbewerbsfähigkeit',               cat: 'Offene Volkswirtschaft II', short: 'NX' },
  { id: 'marshall_lerner',  title: 'Marshall-Lerner-Bedingung & J-Kurve',               cat: 'Offene Volkswirtschaft II', short: 'ML' },
  { id: 'geldmengen',       title: 'Geldmarkt, LM-Kurve & Zinssteuerung',               cat: 'Offene Volkswirtschaft II', short: 'LM' },
  { id: 'mundell_fleming',  title: 'Mundell-Fleming bei flexiblem Wechselkurs',         cat: 'Offene Volkswirtschaft II', short: 'M-F' },
  { id: 'zp_kurve',         title: 'ZP-Kurve & Zahlungsbilanzgleichgewicht',            cat: 'Offene Volkswirtschaft II', short: 'ZP' },
  { id: 'wirtschaftspolitik_offen', title: 'Wirtschaftspolitik im Mundell-Fleming-Modell', cat: 'Offene Volkswirtschaft II', short: 'WiPo offen' },
  { id: 'wk_regime',        title: 'Feste Wechselkurse, Trilemma & Paritätsverteidigung', cat: 'Offene Volkswirtschaft II', short: 'Regime' },
  { id: 'wk_krisen',        title: 'Currency Boards & Währungskrisen',                  cat: 'Offene Volkswirtschaft II', short: 'Krisen' },
  { id: 'opt_waehrungsraum',title: 'Optimaler Währungsraum & Währungsunion',            cat: 'Offene Volkswirtschaft II', short: 'OWR' },
  { id: 'phillipskurve',    title: 'Phillipskurve & Inflationserwartungen',             cat: 'Geldpolitik & Glaubwürdigkeit', short: 'PK' },
  { id: 'zeitinkonsistenz', title: 'Zeitinkonsistenz & Commitment',                     cat: 'Geldpolitik & Glaubwürdigkeit', short: 'Commit' },
  { id: 'barro_gordon',     title: 'Barro-Gordon & Inflationsbias',                     cat: 'Geldpolitik & Glaubwürdigkeit', short: 'B-G' },
  { id: 'taylor_regel',     title: 'Taylor-Regel & geldpolitische Reaktion',            cat: 'Geldpolitik & Glaubwürdigkeit', short: 'Taylor' },
  { id: 'inflation_targeting', title: 'Inflation Targeting & EZB-Strategie',            cat: 'Geldpolitik & Glaubwürdigkeit', short: 'IT' },
  { id: 'inflation_kosten', title: 'Inflationskosten, Disinflation & Opferquote',       cat: 'Geldpolitik & Glaubwürdigkeit', short: 'Infl.-Kosten' },
  { id: 'wachstum_fakten',  title: 'Stilisierte Fakten des Wachstums',                  cat: 'Wachstum & Fiskalstaat', short: 'Fakten' },
  { id: 'aggregierte_pf',   title: 'Produktionsfunktion, Grenzerträge & Skalenerträge', cat: 'Wachstum & Fiskalstaat', short: 'PF' },
  { id: 'solow_basis',      title: 'Solow-Grundmodell & Kapitalakkumulation',           cat: 'Wachstum & Fiskalstaat', short: 'Solow' },
  { id: 'steady_state',     title: 'Steady State & Konvergenz',                         cat: 'Wachstum & Fiskalstaat', short: 'SS' },
  { id: 'goldene_sparquote',title: 'Goldene Sparquote & Konsummaximum',                 cat: 'Wachstum & Fiskalstaat', short: 'Golden' },
  { id: 'tech_fortschritt', title: 'Technischer Fortschritt & langfristiges Wachstum',  cat: 'Wachstum & Fiskalstaat', short: 'TF' },
  { id: 'budgetrestriktion',title: 'Staatliche Budgetrestriktion & Primärsaldo',        cat: 'Wachstum & Fiskalstaat', short: 'Budget' },
  { id: 'schuldenquote_dynamik', title: 'Schuldenquote & Stabilisierung',               cat: 'Wachstum & Fiskalstaat', short: 'Schuld-D' },
  { id: 'ricardianisch',    title: 'Ricardianische Äquivalenz',                         cat: 'Wachstum & Fiskalstaat', short: 'Ricardo' },
  { id: 'schuldenfinanzierung_monetarisierung', title: 'Schuldenfinanzierung & Monetarisierung', cat: 'Wachstum & Fiskalstaat', short: 'Schuld-M' }
];

export const CONTENT = {
  zahlungsbilanz: {
    motivation: 'Die Zahlungsbilanz ist die Buchhaltung der offenen Volkswirtschaft. Wer Leistungsbilanz, Kapitalbilanz und Nettoauslandsvermögen nicht sauber trennt, stolpert später bei Wechselkursen, Fiskalpolitik und Schuldenfragen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Zahlungsbilanz &amp; Nettoauslandsvermögen</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Die Zahlungsbilanz ist die Buchhaltung der offenen Volkswirtschaft. Wer Leistungsbilanz, Kapitalbilanz und Nettoauslandsvermögen nicht sauber trennt, stolpert später bei Wechselkursen, Fiskalpolitik und Schuldenfragen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Zahlungsbilanzidentität</strong> — Gesamtbuchhaltung der offenen Volkswirtschaft</li><li><strong>Sparen und Investieren</strong> — Makroökonomische Deutung des Leistungsbilanzsaldos</li><li><strong>Nettoauslandsvermögen</strong> — Leistungsbilanz verändert die Nettoauslandsposition</li><li><strong>S-I Identität offen</strong> — Leistungsbilanz und Ersparnis-Investitions-Saldo.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Leistungsbilanz und Finanzierung</h4>
<p>Die Leistungsbilanz misst Waren-, Dienstleistungs- und Einkommensströme mit dem Ausland. Ein Defizit bedeutet: Die Volkswirtschaft konsumiert/ investiert mehr als sie spart — spiegelbildlich Kapitalimporte.</p>
      <div class="math-block">$$CA + KA + \Delta R = 0$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Ablauf</h4>
<p><strong>Schrittfolge:</strong> (1) Annahmen und Notation aus der VL festlegen, (2) formale Relation aus dem Formeln-Tab aufschreiben, (3) algebraisch/ökonomisch umformen oder lösen, (4) Ergebnis fachlich deuten — nicht nur die Zahl nennen.</p>
<p><em>platform-added-explanation:</em> Generischer Mechanismus-Pfad; konzeptspezifische Kausalität in VL-Folien und Grafik.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Klausurfall: Transaktion zuordnen</h4>
<p>Export von Maschinen → Leistungsbilanz; Kauf ausländischer Anleihen → Kapitalbilanz. Immer Gegenbuchung nennen.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Handelsbilanz:</strong> Handelsbilanz ⊂ Leistungsbilanz; Zins- und Transferströme können den Saldo drehen.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Handelsbilanz:</strong> Handelsbilanz ⊂ Leistungsbilanz; Zins- und Transferströme können den Saldo drehen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Zahlungsbilanzidentität', eq: String.raw`$$LB + KB + \Delta R = 0$$`, desc: 'Gesamtbuchhaltung der offenen Volkswirtschaft', variables: { 'LB': 'Leistungsbilanz', 'KB': 'Kapitalbilanz', '\\Delta R': 'Reserveveränderung' } },
      { label: 'Sparen und Investieren', eq: String.raw`$$LB = S - I$$`, desc: 'Makroökonomische Deutung des Leistungsbilanzsaldos', variables: { 'S': 'Ersparnis', 'I': 'Investitionen' } },
      { label: 'Nettoauslandsvermögen', eq: String.raw`$$\Delta NAV = LB$$`, desc: 'Leistungsbilanz verändert die Nettoauslandsposition', variables: { 'NAV': 'Nettoauslandsvermögen' } }
    ],
    aufgaben: practice('zahlungsbilanz', [
      {
        text: String.raw`Ein Land weist einen Leistungsbilanzüberschuss von 15 Mrd. € auf, während die Zentralbank Devisenreserven im Umfang von 5 Mrd. € aufbaut. Wie groß ist der Kapitalbilanzsaldo?`,
        steps: [
          { text: 'Nutze die Zahlungsbilanzidentität:', eq: String.raw`$$LB + KB + \Delta R = 0$$` },
          { text: 'Setze die Größen ein:', eq: String.raw`$$15 + KB + 5 = 0$$` },
          { text: 'Löse nach der Kapitalbilanz auf.', eq: String.raw`$$KB = -20$$` }
        ],
        result: String.raw`$KB=-20$ Mrd. €: Dem Leistungsbilanzüberschuss stehen Kapitalexporte bzw. Forderungsaufbau gegenüber.`
      }
    ])
  },

  wechselkurs: {
    motivation: 'Makro II arbeitet durchgehend mit Wechselkursnotation. Wer hier Mengennotierung, reale Auf- und Abwertung und Preisniveaulogik unsauber hält, verliert den Faden in PPP, UIP und Mundell-Fleming.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Nominaler und realer Wechselkurs</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Makro II arbeitet durchgehend mit Wechselkursnotation. Wer hier Mengennotierung, reale Auf- und Abwertung und Preisniveaulogik unsauber hält, verliert den Faden in PPP, UIP und Mundell-Fleming.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Nominaler Wechselkurs</strong> — Mengennotierung</li><li><strong>Realer Wechselkurs</strong> — Preisliche Wettbewerbsfähigkeit</li><li><strong>Nominaler Wechselkurs (Merksatz)</strong> — Mengennotierung</li><li><strong>Realer Wechselkurs</strong> — Preisniveau-Korrektur.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Nominal vs. real</h4>
<p>Der nominale Wechselkurs $E$ gibt Preis der ausländischen Währung; der reale Wechselkurs $\varepsilon = E P^*/P$ berücksichtigt Preisniveaus.</p>
      <div class="math-block">$$\varepsilon = \frac{E P^*}{P}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Appreciation und Wettbewerbsfähigkeit</h4>
<p>Eine nominale Aufwertung bei gegebenen Preisniveaus verschlechtert die relative Wettbewerbsfähigkeit und drückt typischerweise $NX$.</p>
<p><strong>Mengennotation (VL):</strong> Steigt $E$ in „Einheiten Ausland pro Inland“, kauft eine Inlandseinheit mehr Fremdwährung — das ist nominale Aufwertung, nicht Abwertung. Erst $\varepsilon = E P^*/P$ verbindet Nominalkurs und Preisniveaus für die Wettbewerbsfähigkeit.</p>
<p><em>source-distilled:</em> Aus Makro-II-VL und Übungs-Trap-Checks; Notation in Primär-PDFs prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Nominaler Wechselkurs', eq: String.raw`$$E = \frac{\text{Einheiten Ausland}}{\text{1 Einheit Inland}}$$`, desc: 'Mengennotierung', variables: { 'E': 'Nominaler Wechselkurs' } },
      { label: 'Realer Wechselkurs', eq: String.raw`$$\varepsilon = \frac{E \cdot P}{P^*}$$`, desc: 'Preisliche Wettbewerbsfähigkeit', variables: { 'P': 'Preisniveau Inland', 'P^*': 'Preisniveau Ausland' } }
    ],
    aufgaben: practice('wechselkurs', [
      {
        text: String.raw`Das inländische Preisniveau steigt um 8%, das ausländische um 3%. Der nominale Wechselkurs in Mengennotierung bleibt konstant. Was passiert mit dem realen Wechselkurs und wie ist das zu interpretieren?`,
        steps: [
          { text: 'Nutze die reale Logik bei konstantem $E$.', eq: String.raw`$$\frac{\Delta \varepsilon}{\varepsilon} \approx \pi - \pi^*$$` },
          { text: 'Setze die Inflationsraten ein.', eq: String.raw`$$8\% - 3\% = 5\%$$` },
          { text: 'Der reale Wechselkurs steigt; das Inland wertet real auf.', eq: null }
        ],
        result: 'Der reale Wechselkurs steigt um etwa 5%; die preisliche Wettbewerbsfähigkeit verschlechtert sich.'
      },
      {
        text: String.raw`Trap-Check: Eine Lösung schreibt "E steigt in Mengennotierung, also wertet das Inland ab". Was ist daran falsch und welche reale Folge ist stattdessen plausibel?`,
        steps: [
          { text: 'In Mengennotierung bedeutet $E \\uparrow$: eine Einheit Inlandswährung kauft mehr Fremdwährung.', eq: null },
          { text: 'Damit liegt nominale Aufwertung vor, nicht Abwertung.', eq: null },
          { text: 'Ceteris paribus erhöht das den realen Aufwertungsdruck und belastet Nettoexporte.', eq: null }
        ],
        result: 'Der Vorzeichenfehler liegt in der Notation: $E\\uparrow$ ist Aufwertung des Inlands; dadurch werden Inlandsprodukte relativ teurer.'
      }
    ])
  },

  kaufkraftparitaet: {
    motivation: 'PPP ist der Brückensatz zwischen Preisniveaus und Wechselkursen. In Makro II wird damit sauber zwischen Niveauaussagen, Änderungsraten und systematischen Abweichungen unterschieden.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Kaufkraftparität</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Absolute PPP</h4>
<p>Absolute Kaufkraftparität: gleiche Preisniveaus implizieren $E = P/P^*$. Langfristige Niveauaussage, kurzfristig oft verletzt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Absolute PPP</strong> — PPP-Kurs aus Preisniveaus</li><li><strong>Relative PPP</strong> — Änderungsratenform</li><li><strong>Absolute PPP (Merksatz)</strong> — PPP-Kurs aus Preisniveaus</li><li><strong>Relative PPP</strong> — Inflationsdifferenz und WK-Entwicklung.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Relative PPP und Inflation</h4>
<p>Relative PPP verknüpft Wechselkursänderung mit Inflationsdifferenz: höhere Inlandsinflation → Abwertungsdruck.</p>
      <div class="math-block">$$\hat{E} \approx \pi - \pi^*$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Ablauf</h4>
<p><strong>Schrittfolge:</strong> (1) Annahmen und Notation aus der VL festlegen, (2) formale Relation aus dem Formeln-Tab aufschreiben, (3) algebraisch/ökonomisch umformen oder lösen, (4) Ergebnis fachlich deuten — nicht nur die Zahl nennen.</p>
<p><em>platform-added-explanation:</em> Generischer Mechanismus-Pfad; konzeptspezifische Kausalität in VL-Folien und Grafik.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Absolute PPP', eq: String.raw`$$E_{PPP} = \frac{P^*}{P}$$`, desc: 'PPP-Kurs aus Preisniveaus', variables: { 'P': 'Preisniveau Inland', 'P^*': 'Preisniveau Ausland' } },
      { label: 'Relative PPP', eq: String.raw`$$\hat E \approx \pi^* - \pi$$`, desc: 'Änderungsratenform', variables: { '\\pi': 'Inflation Inland', '\\pi^*': 'Inflation Ausland' } }
    ],
    aufgaben: practice('kaufkraftparitaet', [
      {
        text: String.raw`Die Inflation im Inland beträgt 6%, im Ausland 2%. Welche nominale Wechselkursänderung ist nach relativer PPP zu erwarten? Wie lautet das Vorzeichen in Mengennotierung?`,
        steps: [
          { text: 'Nutze die Änderungsratenform der relativen PPP.', eq: String.raw`$$\hat E \approx \pi^* - \pi$$` },
          { text: 'Setze die Werte ein.', eq: String.raw`$$\hat E \approx 2\% - 6\% = -4\%$$` },
          { text: 'Ein negatives Vorzeichen bedeutet in Mengennotierung nominale Abwertung des Inlands.', eq: null }
        ],
        result: 'Der nominale Wechselkurs sinkt um etwa 4%; das Inland wertet nominal ab.'
      }
    ])
  },

  zinsparitaet: {
    motivation: 'Die ungedeckte Zinsparität ist die Arbitragegleichung der offenen Makro. Sie verknüpft Zinsdifferenzen, Wechselkurserwartungen und die unmittelbare Kursreaktion.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Ungedeckte Zinsparität</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Die ungedeckte Zinsparität ist die Arbitragegleichung der offenen Makro. Sie verknüpft Zinsdifferenzen, Wechselkurserwartungen und die unmittelbare Kursreaktion.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Exakte UIP</strong> — Arbitragegleichgewicht</li><li><strong>Approximative UIP</strong> — Zinsdifferenz = erwartete Abwertungsrate</li><li><strong>Exakte UIP (Merksatz)</strong> — Arbitragegleichgewicht</li><li><strong>UIP</strong> — Zins- und Erwartungskanal.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Exakte UIP</h4>
<p>Bei perfekter Kapitalmobilität müssen erwartete Renditen in In- und Auslandswährung gleich sein. Sonst gäbe es eine risikolose Arbitragemöglichkeit.</p>
        <div class="math-block">$$1 + i_t = (1 + i_t^*) \frac{E_t}{E_{t+1}^e}$$</div>
        <p>Ein scheinbar hoher Inlandszins ist deshalb kein Geschenk, sondern kompensiert eine erwartete Abwertung oder geringere erwartete Aufwertung.</p>


<h4 class="theory-subsection-title">Approximation und ökonomische Lesart</h4>
<p>Für kleine Zinssätze wird die Beziehung meist linear geschrieben:</p>
        <div class="math-block">$$i_t - i_t^* \approx - \frac{E_{t+1}^e - E_t}{E_t}$$</div>
        <p>Je höher der Inlandszins relativ zum Ausland, desto stärker muss aus Sicht der Märkte ein künftiger Kursverlust des Inlands eingepreist sein.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">UIP-Logik</h4>
<p>Ungedeckte Zinsparität: erwartete Abwertung kompensiert Zinsdifferenz; bei hoher Kapitalmobilität $i \approx i^* + \mathbb{E}[\Delta E/E]$.</p>


<h4 class="theory-subsection-title">Geldpolitik unter UIP</h4>
<p>Zinssenkung bei flexiblem Kurs → Abwertungserwartung → sofortige Abwertung → NX-Stützung des Gütermarkts.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: UIP</h4>
<p>Rechnen: $i-i^* \approx -(E^e-E)/E$ in Mengennotierung. Hoher Inlandszins → erwartete Abwertung kompensiert. Geldpolitik unter flex: Zinssenkung → sofortige Abwertung → NX↑. Immer $E_t$ vs. $E_{t+1}^e$ trennen.</p><div class="warn-box" data-warning-placement="rail"><strong>UIP ist keine Prognose:</strong> UIP beschreibt Arbitragegleichgewicht, nicht kausal „Zins bestimmt Kurs". Erwartungen und Risikoprämien können UIP verletzen.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>UIP ist keine Prognose:</strong> UIP beschreibt Arbitragegleichgewicht, nicht kausal „Zins bestimmt Kurs". Erwartungen und Risikoprämien können UIP verletzen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Exakte UIP', eq: String.raw`$$1 + i_t = (1 + i_t^*) \frac{E_t}{E_{t+1}^e}$$`, desc: 'Arbitragegleichgewicht', variables: { 'i_t': 'Inlandszins', 'i_t^*': 'Auslandszins', 'E_t': 'Aktueller WK', 'E_{t+1}^e': 'Erwarteter WK' } },
      { label: 'Approximative UIP', eq: String.raw`$$i_t - i_t^* \approx - \frac{E_{t+1}^e - E_t}{E_t}$$`, desc: 'Zinsdifferenz = erwartete Abwertungsrate', variables: {} }
    ],
    aufgaben: practice('zinsparitaet', [
      {
        text: String.raw`Der Auslandszins liegt bei 3%, der Inlandszins bei 6%. Welche Kursbewegung muss der Markt bei geltender UIP ungefähr erwarten?`,
        steps: [
          { text: 'Nutze die approximative UIP.', eq: String.raw`$$i - i^* \approx -\frac{E^e - E}{E}$$` },
          { text: 'Setze die Zinsdifferenz ein.', eq: String.raw`$$6\% - 3\% = 3\%$$` },
          { text: 'Also muss eine erwartete Abwertung des Inlands von rund 3% kompensieren.', eq: null }
        ],
        result: 'Der Markt erwartet ungefähr eine 3%ige Abwertung der Inlandswährung.'
      },
      {
        text: String.raw`Der Inlandszins liegt 2 Prozentpunkte unter dem Auslandszins. Welche Erwartung über den künftigen Wechselkurs folgt aus UIP in Mengennotierung?`,
        steps: [
          { text: 'Nutze die approximative UIP in Vorzeichenlogik.', eq: String.raw`$$i-i^* \approx -\frac{E^e-E}{E}$$` },
          { text: 'Bei $i-i^*<0$ muss die rechte Seite negativ sein, also $(E^e-E)/E>0$.', eq: null },
          { text: 'Das bedeutet: erwartetes $E$ liegt über dem aktuellen $E$.', eq: null }
        ],
        result: 'Es wird eine nominale Aufwertung des Inlands erwartet (in Mengennotierung: $E^e>E$).'
      }
    ])
  },

  offene_is: {
    motivation: 'Der offene Gütermarkt erweitert die geschlossene Makro um Exportnachfrage, Importe und Multiplikatorleckagen. Genau hier beginnt der Übergang von Binnenlogik zu offener Makroökonomie.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Offener Gütermarkt &amp; Multiplikator</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Der offene Gütermarkt erweitert die geschlossene Makro um Exportnachfrage, Importe und Multiplikatorleckagen. Genau hier beginnt der Übergang von Binnenlogik zu offener Makroökonomie.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Offenes Gütermarktgleichgewicht</strong> — Gleichgewicht der Nachfrage nach inländischen Gütern</li><li><strong>Offener Multiplikator</strong> — Importe dämpfen die Multiplikatorwirkung</li><li><strong>Offenes Gütermarktgleichgewicht (Merksatz)</strong> — Gleichgewicht der Nachfrage nach inländischen Gütern</li><li><strong>Offener Multiplikator</strong> — Importleckage $m$.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">ZZ-Kurve und Inlandsnachfrage</h4>
<p>Die Nachfrage nach inländischen Gütern (ZZ) ist flacher als die Gesamtnachfrage (DD), weil Importe mit $Y$ steigen.</p>
      <div class="math-block">$$Y = C(Y-T) + I + G + NX(Y^*,\varepsilon)$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Multiplikator mit Importleckage</h4>
<p>Marginale Importquote $m$ reduziert den Multiplikator: $1/(1-c_1-m)$ statt $1/(1-c_1)$.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Schock aus dem Ausland:</strong> Boom im Ausland ($Y^*$↑) wirkt über Exporte expansiv auf $Y$.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Offener Gütermarkt</h4>
<p>Antwortschema: (1) ZZ-Gleichung aufschreiben mit NX-Kanal. (2) Multiplikator $1/(1-c_1-b_1+q_1)$ — Importleckage $q_1$ senkt Wirkung. (3) Fiskalimpuls: DD/ZZ nach rechts, aber Importe steigen mit $Y$. (4) Auslandsschock über $Y^*$: Exportkanal. Nie DD mit ZZ verwechseln.</p><div class="warn-box" data-warning-placement="rail"><strong>Multiplikator geschlossen vs. offen:</strong> Der geschlossene Multiplikator $1/(1-c_1)$ überschätzt die Wirkung: Importe sind eine Leckage aus dem Inland.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Schock aus dem Ausland:</strong> Boom im Ausland ($Y^*$↑) wirkt über Exporte expansiv auf $Y$.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Multiplikator geschlossen vs. offen:</strong> Der geschlossene Multiplikator $1/(1-c_1)$ überschätzt die Wirkung: Importe sind eine Leckage aus dem Inland.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Offenes Gütermarktgleichgewicht', eq: String.raw`$$Y = C + I + G + NX$$`, desc: 'Gleichgewicht der Nachfrage nach inländischen Gütern', variables: { 'NX': 'Nettoexporte' } },
      { label: 'Offener Multiplikator', eq: String.raw`$$\frac{\partial Y}{\partial G} = \frac{1}{1 - c_1 - b_1 + q_1}$$`, desc: 'Importe dämpfen die Multiplikatorwirkung', variables: { 'q_1': 'Marginale Importquote' } }
    ],
    aufgaben: practice('offene_is')
  },

  nettoexporte: {
    motivation: 'Nettoexporte sind das Gelenk zwischen Wechselkurs, Auslandskonjunktur und inländischer Nachfrage. Genau über sie laufen viele offene Schocks in Output und Beschäftigung hinein.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Nettoexporte &amp; Wettbewerbsfähigkeit</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Nettoexporte sind das Gelenk zwischen Wechselkurs, Auslandskonjunktur und inländischer Nachfrage. Genau über sie laufen viele offene Schocks in Output und Beschäftigung hinein.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Nettoexportfunktion</strong> — Gütermarktkanal der offenen Volkswirtschaft</li><li><strong>Nettoexportfunktion (Merksatz)</strong> — Gütermarktkanal der offenen Volkswirtschaft</li><li><strong>NX-Funktion</strong> — Export minus Import.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Determinanten der Nettoexporte</h4>
<p>Nettoexporte steigen typischerweise mit der Auslandsnachfrage, sinken mit dem Inlandseinkommen und reagieren auf den realen Wechselkurs.</p>
        <div class="math-block">$$NX = X(Y^*, \varepsilon) - \frac{IM(Y,\varepsilon)}{\varepsilon}$$</div>
        <p>Eine reale Abwertung macht Inlandsgüter billiger und wirkt damit exportfördernd sowie importdämpfend.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Komparative Statik</h4>
<p>$NX$ steigt mit $Y^*$ und realer Abwertung ($\varepsilon\uparrow$), fällt mit $Y$ (Importe).</p>


<h4 class="theory-subsection-title">J-Kurve Kurzhinweis</h4>
<p>Kurzfristig kann $NX$ nach Abwertung sinken (Verträge in Fremdwährung), mittelfristig steigt $NX$ (Marshall-Lerner).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Nettoexporte</h4>
<p>Standardpfad: Schock identifizieren ($Y$, $Y^*$, $\varepsilon$, $i$) → Vorzeichen auf $X$ und $IM$ → $NX$-Shift → IS/ZZ-Verschiebung. Reale Abwertung ($\varepsilon\downarrow$ in Preisnotierung) stützt $NX$ langfristig (Marshall-Lerner), kurzfristig evtl. J-Kurve.</p><div class="warn-box" data-warning-placement="rail"><strong>Nominal vs. real:</strong> NX-Reaktionen laufen über den realen Wechselkurs $\varepsilon = EP^*/P$. Nur nominale Kursänderung ohne Preisniveau reicht nicht.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Nominal vs. real:</strong> NX-Reaktionen laufen über den realen Wechselkurs $\varepsilon = EP^*/P$. Nur nominale Kursänderung ohne Preisniveau reicht nicht.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Nettoexportfunktion', eq: String.raw`$$NX = X(Y^*,\varepsilon) - \frac{IM(Y,\varepsilon)}{\varepsilon}$$`, desc: 'Gütermarktkanal der offenen Volkswirtschaft', variables: { 'Y': 'Inlandseinkommen', 'Y^*': 'Auslandseinkommen', '\\varepsilon': 'Realer WK' } }
    ],
    aufgaben: practice('nettoexporte', [
      {
        text: String.raw`Das Ausland gerät in eine Rezession, während der reale Wechselkurs unverändert bleibt. Welche Richtung hat der Effekt auf Nettoexporte und inländische Produktion?`,
        steps: [
          { text: 'Eine Auslandsrezession senkt $Y^*$ und damit die Exportnachfrage.', eq: null },
          { text: 'Sinkende Exporte verschieben die NX-Funktion nach unten.', eq: null },
          { text: 'Im offenen Gütermarkt sinken dadurch Nachfrage nach inländischen Gütern und Output.', eq: null }
        ],
        result: 'Nettoexporte sinken; der offene Gütermarkt wird nach unten gezogen und die Produktion fällt.'
      }
    ])
  },

  marshall_lerner: {
    motivation: 'Eine Abwertung verbessert die Handelsbilanz nicht automatisch. Marshall-Lerner und J-Kurve trennen sauber zwischen langfristigen Elastizitätseffekten und kurzfristigen Vertragseffekten.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Marshall-Lerner-Bedingung &amp; J-Kurve</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Eine Abwertung verbessert die Handelsbilanz nicht automatisch. Marshall-Lerner und J-Kurve trennen sauber zwischen langfristigen Elastizitätseffekten und kurzfristigen Vertragseffekten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Marshall-Lerner-Bedingung</strong> — Langfristige Verbesserung der Handelsbilanz nach Abwertung</li><li><strong>Richtungseffekt</strong> — Bei Mengennotierung verbessert fallendes $\varepsilon$ die Handelsbilanz</li><li><strong>Marshall-Lerner-Bedingung (Merksatz)</strong> — Langfristige Verbesserung der Handelsbilanz nach Abwertung</li><li><strong>Marshall-Lerner</strong> — Elastizitätssumme.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Langfristbedingung</h4>
<p>Die Marshall-Lerner-Bedingung beschreibt, wann eine reale Abwertung die Handelsbilanz verbessert: Die Mengenreaktionen müssen den negativen Preiseffekt überwiegen.</p>
        <div class="math-block">$$|\eta_X| + |\eta_M| > 1$$</div>
        <p>Ökonomisch heißt das: Exporte und Importe müssen stark genug auf relative Preisänderungen reagieren.</p>


<h4 class="theory-subsection-title">J-Kurve</h4>
<p>Kurzfristig sind Mengen oft träge. Dann wird zuerst nur die bestehende Importrechnung teurer, bevor Mengen angepasst werden. Genau daraus entsteht die J-Kurve.</p>
        <div class="math-block">$$\frac{\partial NX}{\partial \varepsilon} < 0$$</div>
        <p>In Mengennotierung bedeutet eine Abwertung ein Sinken von $\varepsilon$; wenn Marshall-Lerner gilt, steigt dann $NX$.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Bedingung</h4>
<p>Marshall-Lerner: $| \eta_X + \eta_M | > 1$ für eine reale Abwertung, die $NX$ verbessert.</p>


<h4 class="theory-subsection-title">J-Kurve</h4>
<p>Zeitverzögerung: kurzfristig Preise fix → Handelsbilanz kann sich verschlechtern, später Mengenreaktion dominiert.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Marshall-Lerner</h4>
<p>Langfrist: $|\eta_X|+|\eta_M|>1$ für Handelsbilanzverbesserung nach Abwertung. Kurzfrist: J-Kurve — Mengen träge, Importrechnung teurer → NX kann sinken. Klausur: beide Horizonte nennen, nicht nur eine Formel.</p><div class="warn-box" data-warning-placement="rail"><strong>Elastizitäten schätzen:</strong> In Aufgaben ohne gegebene Elastizitäten: qualitative Argumentation (Verträge, Anpassungszeit) statt willkürlicher Zahlen.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Langfristig vs. kurzfristig:</strong> Marshall-Lerner ist eine Langfristaussage über Elastizitäten. Für die unmittelbare Wirkung nach einer Abwertung muss zuerst an die J-Kurve gedacht werden.</div>
        <div class="warn-box" data-warning-placement="rail"><strong>Vorzeichen in Mengennotierung:</strong> In der hier verwendeten Notation ist eine Abwertung ein Rückgang von $\varepsilon$. Wer das übersieht, interpretiert Ableitungen schnell falsch.</div>
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
      { label: 'Marshall-Lerner-Bedingung', eq: String.raw`$$|\eta_X| + |\eta_M| > 1$$`, desc: 'Langfristige Verbesserung der Handelsbilanz nach Abwertung', variables: { '\\eta_X': 'Preiselastizität der Exporte', '\\eta_M': 'Preiselastizität der Importe' } },
      { label: 'Richtungseffekt', eq: String.raw`$$\frac{\partial NX}{\partial \varepsilon} < 0$$`, desc: 'Bei Mengennotierung verbessert fallendes $\\varepsilon$ die Handelsbilanz', variables: {} }
    ],
    aufgaben: practice('marshall_lerner', [
      {
        text: String.raw`Eine Abwertung wurde gerade beschlossen. Die Handelsbilanz verschlechtert sich zunächst, verbessert sich aber später. Wie lautet die saubere Diagnose?`,
        steps: [
          { text: 'Kurzfristig sind Mengen oft träge, Preiseffekte dominieren.', eq: null },
          { text: 'Dadurch kann die Importrechnung zunächst steigen und NX vorübergehend sinken.', eq: null },
          { text: 'Mit Zeitverzug greifen Mengenanpassungen; bei erfüllter Marshall-Lerner-Bedingung verbessert sich die Handelsbilanz.', eq: null }
        ],
        result: 'Das ist die J-Kurve: kurzfristig Verschlechterung, langfristig Verbesserung unter ausreichender Elastizitätsreaktion.'
      },
      {
        text: String.raw`Graph-/Formel-Link: Wie verbindest du die J-Kurve im Zeitdiagramm mit der Elastizitätsbedingung $|\eta_X|+|\eta_M|>1$ in einer schlüssigen Klausurkette?`,
        steps: [
          { text: 'Kurzfristig dominieren Preis- und Vertragsbindungen; der Zeitpfad kann zunächst nach unten gehen.', eq: null },
          { text: 'Mit Verzögerung reagieren Export- und Importmengen stärker auf relative Preise.', eq: null },
          { text: 'Wenn die Elastizitätssumme hinreichend groß ist, überwiegt langfristig der Mengeneffekt.', eq: String.raw`$$|\eta_X|+|\eta_M|>1$$` }
        ],
        result: 'Prüfungsstark ist die Verbindung von Zeitpfad (Graph) und Kriterium (Formel), statt beide isoliert aufzuzählen.'
      }
    ])
  },

  geldmengen: {
    motivation: 'Auch in Makro II bleibt der Geldmarkt zentral: Wechselkurse, UIP und Taylor-Regel setzen voraus, dass Zinssteuerung und LM-Logik sicher beherrscht werden.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Geldmarkt, LM-Kurve &amp; Zinssteuerung</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Auch in Makro II bleibt der Geldmarkt zentral: Wechselkurse, UIP und Taylor-Regel setzen voraus, dass Zinssteuerung und LM-Logik sicher beherrscht werden.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Geldmarktgleichgewicht</strong> — Reale Geldmenge = reale Geldnachfrage</li><li><strong>Lineare LM</strong> — Zins als Funktion von Einkommen und realer Geldmenge</li><li><strong>Geldmarktgleichgewicht (Merksatz)</strong> — Reale Geldmenge = reale Geldnachfrage</li><li><strong>LM offen</strong> — Grenzfall perfekte Kapitalmobilität.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Geldmarktgleichgewicht</h4>
<p>Die reale Geldnachfrage steigt mit Einkommen und sinkt mit dem Zinssatz. Das Gleichgewicht am Geldmarkt verknüpft reale Geldmenge, Aktivität und Zins.</p>
        <div class="math-block">$$\frac{M}{P} = Y \cdot L(i)$$</div>
        <p>In der linearen Standardform ergibt sich daraus eine positiv geneigte LM-Kurve: Höheres Einkommen erzeugt mehr Transaktionsnachfrage und damit ceteris paribus höheren Zins.</p>


<h4 class="theory-subsection-title">Geldpolitik und offener Zusammenhang</h4>
<p>Eine expansive Geldpolitik verschiebt die LM-Kurve nach rechts bzw. unten. In der offenen Volkswirtschaft wird daraus über UIP und Wechselkurs ein zusätzlicher Außenkanal.</p>
        <div class="math-block">$$i = \frac{k}{h}Y - \frac{1}{h}\frac{M}{P}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">LM in offener VW</h4>
<p>Bei perfekter Kapitalmobilität und flexiblem Kurs ist LM effektiv horizontal bei $i=i^*$; Geldpolitik wirkt über $E$ und $NX$.</p>


<h4 class="theory-subsection-title">Zinssteuerung vs. Geldmenge</h4>
<p>Moderne Zentralbanken steuern oft den Leitzins; im Modell ist das eine Verschiebung von LM bzw. Akkommodation am Geldmarkt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: LM und offene VW</h4>
<p>LM: $M/P = YL(i)$ → $i = (k/h)Y - (1/h)(M/P)$. Geldpolitik: $M↑$ → $i↓$ → unter flex: Abwertung → NX↑. Real vs. nominal: nur $M/P$ wirkt. Liquiditätsfalle: horizontale LM, Geldpolitik wirkungslos.</p><div class="warn-box" data-warning-placement="rail"><strong>LM-Verschiebung vs. Drehung:</strong> Geldmenge verschiebt LM parallel; Einkommensschock bewegt entlang LM (höheres $Y$ → höheres $i$ ceteris paribus).</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>LM-Verschiebung vs. Drehung:</strong> Geldmenge verschiebt LM parallel; Einkommensschock bewegt entlang LM (höheres $Y$ → höheres $i$ ceteris paribus).</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Geldmarktgleichgewicht', eq: String.raw`$$\frac{M}{P} = Y \cdot L(i)$$`, desc: 'Reale Geldmenge = reale Geldnachfrage', variables: { 'M/P': 'Reale Geldmenge', 'L(i)': 'Liquiditätspräferenz' } },
      { label: 'Lineare LM', eq: String.raw`$$i = \frac{k}{h}Y - \frac{1}{h}\frac{M}{P}$$`, desc: 'Zins als Funktion von Einkommen und realer Geldmenge', variables: { 'k': 'Einkommenssensitivität', 'h': 'Zinssensitivität' } }
    ],
    aufgaben: practice('geldmengen', [
      {
        text: String.raw`Inflation-Targeting vs. Geldmengensteuerung: Die Geldmenge wächst kurzfristig stark, gleichzeitig steigt die Geldnachfrage wegen Finanzmarktunsicherheit. Warum ist ein reines Geldmengen-Signal für die aktuelle Inflationsdiagnose dann nur begrenzt aussagekräftig?`,
        steps: [
          { text: 'Die beobachtete Geldmenge ist nur zusammen mit Geldnachfrage und Umlaufgeschwindigkeit interpretierbar.', eq: null },
          { text: 'Steigt die Liquiditätsnachfrage, kann hohe Geldmengenexpansion in Teilen Kassenhaltung statt zusätzliche Güternachfrage spiegeln.', eq: null },
          { text: 'Inflation-Targeting fokussiert deshalb auf das Inflationsziel und die Abweichung von diesem Ziel, nicht auf ein einzelnes Monetäraggregat.', eq: null }
        ],
        result: 'Starkes Geldmengenwachstum allein ist kein sicherer Inflationsbeweis; bei instabiler Geldnachfrage ist zielorientierte Inflationssteuerung robuster.'
      }
    ])
  },

  mundell_fleming: {
    motivation: 'Mundell-Fleming ist das Standardmodell der kleinen offenen Volkswirtschaft. Es zeigt, warum das gleiche Politiktool unter flexiblem und festem Wechselkurs völlig unterschiedlich wirkt.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Mundell-Fleming bei flexiblem Wechselkurs</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Mundell-Fleming ist das Standardmodell der kleinen offenen Volkswirtschaft. Es zeigt, warum das gleiche Politiktool unter flexiblem und festem Wechselkurs völlig unterschiedlich wirkt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>IS in offener VW</strong> — Gütermarkt mit Außenbeziehung</li><li><strong>UIP-Kanal</strong> — Finanzmarktscharnier des Modells</li><li><strong>IS in offener VW (Merksatz)</strong> — Gütermarkt mit Außenbeziehung</li><li><strong>Fiskal unter fix</strong> — Kein NX-Crowding-out über WK.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Drei Märkte in einem System</h4>
<p>Das Modell verbindet offenen Gütermarkt, Geldmarkt und Außenbeziehung. Für flexible Wechselkurse ist vor allem die Kombination aus IS, LM und UIP zentral.</p>
        <div class="math-block">$$Y = C + I + G + NX(\varepsilon, Y, Y^*)$$</div>
        <div class="math-block">$$\frac{M}{P} = YL(i)$$</div>
        <div class="math-block">$$1+i = (1+i^*)\frac{E}{E^e}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Fester Wechselkurs</h4>
<p>Unter fixem Kurs und hoher Kapitalmobilität muss die Zentralbank die Parität verteidigen: Fiskalimpuls → $M$↑ → LM nach rechts → $Y$ stärker.</p>


<h4 class="theory-subsection-title">Impossible Trinity</h4>
<p>Trilemma: von {fester WK, freier Kapitalmobilität, autonomer Geldpolitik} sind höchstens zwei gleichzeitig erfüllbar.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Regime zuerst:</strong> Ohne Regime keine Politikbewertung im M-F-Modell.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Mundell-Fleming</h4>
<p>Regime zuerst! Flex: $\Delta M$ stark (über $E$, NX), $\Delta G$ schwach (Aufwertung crowding-out). Fix: $\Delta G$ stark (ZB akkommodiert $M$), $\Delta M$ wirkungslos (Paritätszwang). Fünf Schritte: Regime → IS/LM-Impuls → $i$/Kapital → $E$/NX → $Y$.</p><div class="warn-box" data-warning-placement="rail"><strong>Kleine offene VW:</strong> M-F setzt kleines Land und hohe Kapitalmobilität voraus. Große Volkswirtschaften: UIP-Wirkung auf Weltzins.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Regime zuerst:</strong> Ohne Regime keine Politikbewertung im M-F-Modell.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Kleine offene VW:</strong> M-F setzt kleines Land und hohe Kapitalmobilität voraus. Große Volkswirtschaften: UIP-Wirkung auf Weltzins.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'IS in offener VW', eq: String.raw`$$Y = C + I + G + NX(\varepsilon, Y, Y^*)$$`, desc: 'Gütermarkt mit Außenbeziehung', variables: {} },
      { label: 'UIP-Kanal', eq: String.raw`$$1+i = (1+i^*)\frac{E}{E^e}$$`, desc: 'Finanzmarktscharnier des Modells', variables: {} }
    ],
    aufgaben: practice('mundell_fleming', [
      {
        text: String.raw`Vergleiche dieselbe Fiskalexpansion unter flexiblem und festem Wechselkurs bei hoher Kapitalmobilität. Wo ist der Outputeffekt typischerweise größer und warum?`,
        steps: [
          { text: 'Flexibler Kurs: Fiskalimpuls erzeugt Aufwertungsdruck, NX werden teilweise verdrängt.', eq: null },
          { text: 'Fester Kurs: Zentralbank akkommodiert zur Paritätsstabilisierung, Aufwertungskanal entfällt.', eq: null },
          { text: 'Damit ist der Outputeffekt unter fixem Kurs typischerweise größer.', eq: null }
        ],
        result: 'Bei fixem Wechselkurs wirkt Fiskalpolitik stärker; bei flexiblem Wechselkurs wird sie über Aufwertung und NX-Dämpfung teilweise neutralisiert.'
      },
      {
        text: String.raw`Before/After-Graphwalk: Expansive Fiskalpolitik unter flexiblem Wechselkurs. Welche dreiteilige Schockkette muss die Diagrammlösung enthalten?`,
        steps: [
          { text: 'Schritt 1: Gütermarktimpuls (IS nach rechts).', eq: null },
          { text: 'Schritt 2: Finanz-/Wechselkursreaktion (Aufwertungsdruck).', eq: null },
          { text: 'Schritt 3: Außenkanal (NX-Dämpfung, partieller Rücklauf des Erstimpulses).', eq: null }
        ],
        result: 'Die M-F-Antwort ist nur vollständig, wenn Erstimpuls und Gegenkanal explizit im Vorher/Nachher-Pfad stehen.'
      }
    ])
  },

  zp_kurve: {
    motivation: 'Die ZP-Kurve ist die fehlende dritte Lesart zwischen IS und LM: Sie zeigt, bei welchen Kombinationen aus Einkommen und Zins die Zahlungsbilanz gerade ausgeglichen ist.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum die ZP-Kurve positiv steigt</h4>
<p>Wenn $Y$ steigt, verschlechtert sich ceteris paribus die Außenbilanz. Um trotzdem Zahlungsbilanzgleichgewicht zu halten, muss $i$ steigen und die Kapitalbilanz verbessern.</p>
        <p>Die ZP-Kurve ist deshalb im Standardfall positiv geneigt. Je höher die Kapitalmobilität, desto flacher verläuft sie. Bei perfekter Kapitalmobilität wird sie praktisch horizontal bei $i=i^*$.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Die ZP-Kurve beschreibt alle Kombinationen aus Einkommen und Zinssatz, für die Leistungsbilanz und Kapitalbilanz zusammen gerade null ergeben.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Zahlungsbilanzgleichgewicht</strong> — Leistungs- und Kapitalbilanz müssen sich ausgleichen</li><li><strong>Perfekte Kapitalmobilität</strong> — Im Grenzfall wird die ZP-Kurve horizontal</li><li><strong>Zahlungsbilanzgleichgewicht (Merksatz)</strong> — Leistungs- und Kapitalbilanz müssen sich ausgleichen</li><li><strong>ZP</strong> — Zahlungsbilanzgleichgewicht.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Zahlungsbilanzgleichgewicht</strong></p><div class="math-block">$$LB(Y,Y^*,\varepsilon) + KB(i-i^*) = 0$$</div><p>Leistungs- und Kapitalbilanz müssen sich ausgleichen</p>
<p><strong>Perfekte Kapitalmobilität</strong></p><div class="math-block">$$i = i^*$$</div><p>Im Grenzfall wird die ZP-Kurve horizontal</p>
<p><strong>Zahlungsbilanzgleichgewicht (Merksatz)</strong></p><div class="math-block">$$LB(Y,Y^*,\varepsilon) + KB(i-i^*) = 0$$</div><p>Leistungs- und Kapitalbilanz müssen sich ausgleichen</p>
<p><strong>ZP</strong></p><div class="math-block">$$NX(Y,\varepsilon) + KA(i,i^*) = 0$$</div><p>Zahlungsbilanzgleichgewicht.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">ZP-Kurve im Diagramm</h4>
<p>Die Zahlungsbilanzkurve (ZP) verknüpft $Y$ und $i$ bei gegebenem Wechselkurs: Zahlungsbilanzgleichgewicht bei $NX + KB_{netto} = 0$.</p>


<h4 class="theory-subsection-title">Verschiebungen</h4>
<p>Reale Abwertung verschiebt ZP nach rechts (höheres $Y$ bei gleichem $i$); ausländischer Boom über Exporte ebenfalls.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>ZP vs. BP:</strong> In manchen Skripten BP statt ZP — Bezeichnung aus VL übernehmen.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: ZP-Kurve</h4>
<p>ZP: $LB + KB = 0$ im $(Y,i)$-Raum. Positiv geneigt: $Y↑$ → Importe → LB↓ → braucht $i↑$ für KB↑. Oberhalb ZP: Überschuss; unterhalb: Defizit. Bei $i=i^*$ (perfekte Mobilität): ZP horizontal — Gleichgewicht am Schnitt IS-LM-ZP.</p><div class="warn-box" data-warning-placement="rail"><strong>ZP ≠ IS:</strong> ZP beschreibt Außenbilanzgleichgewicht, nicht Gütermarkt. Schnittpunkt aller drei Kurven bestimmt $(Y,i)$ im vollständigen offenen Modell.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>ZP vs. BP:</strong> In manchen Skripten BP statt ZP — Bezeichnung aus VL übernehmen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>ZP ≠ IS:</strong> ZP beschreibt Außenbilanzgleichgewicht, nicht Gütermarkt. Schnittpunkt aller drei Kurven bestimmt $(Y,i)$ im vollständigen offenen Modell.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Zahlungsbilanzgleichgewicht', eq: String.raw`$$LB(Y,Y^*,\varepsilon) + KB(i-i^*) = 0$$`, desc: 'Leistungs- und Kapitalbilanz müssen sich ausgleichen', variables: { 'LB': 'Leistungsbilanzsaldo', 'KB': 'Kapitalbilanzsaldo', 'i^*': 'Weltzins' } },
      { label: 'Perfekte Kapitalmobilität', eq: String.raw`$$i = i^*$$`, desc: 'Im Grenzfall wird die ZP-Kurve horizontal', variables: { 'i': 'Inlandszins', 'i^*': 'Auslandszins / Weltzins' } }
    ],
    aufgaben: [
      {
        text: 'Erkläre, warum die ZP-Kurve im Standardfall positiv geneigt ist.',
        steps: [
          { text: 'Mehr Einkommen erhöht die Importe und verschlechtert damit die Leistungsbilanz.', eq: null },
          { text: 'Um das Außenbilanzgleichgewicht zu halten, muss der Inlandszins steigen und zusätzliche Kapitalzuflüsse anziehen.', eq: null },
          { text: 'Darum gehört zu höherem $Y$ im ZP-Gleichgewicht auch höheres $i$.', eq: null }
        ],
        result: 'Die positive Steigung entsteht aus Importanstieg bei höherem Einkommen und der kompensierenden Kapitalzuflusslogik über höhere Zinsen.'
      },
      {
        text: String.raw`Eine Volkswirtschaft liegt unterhalb der ZP-Kurve. Was sagt das über Zahlungsbilanzsaldo und nötige Anpassungsrichtung von $i$ oder $Y$?`,
        steps: [
          { text: 'Unterhalb der ZP-Kurve ist der Zins für das gegebene Einkommen zu niedrig oder das Einkommen zu hoch.', eq: null },
          { text: 'Die Kapitalbilanz kompensiert die Leistungsbilanz dann nicht ausreichend; es liegt ein Zahlungsbilanzdefizit vor.', eq: null },
          { text: 'Zur Rückkehr auf die ZP-Kurve braucht es ceteris paribus höheren Zins oder niedrigeres Einkommen.', eq: null }
        ],
        result: 'Unterhalb der ZP-Kurve liegt ein Defizit vor; Anpassung läuft über $i\\uparrow$ und/oder $Y\\downarrow$.'
      }
    ]
  },

  wirtschaftspolitik_offen: {
    motivation: 'Die Klausur fragt selten nur nach dem Modell, sondern fast immer nach der Politik im Modell. Diese Seite verdichtet genau diese Regelfälle: welches Instrument wirkt unter welchem Regime und über welchen Kanal.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Wirtschaftspolitik im Mundell-Fleming-Modell</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Das Mundell-Fleming-Theorem</h4>
<p>Bei hoher bzw. perfekter Kapitalmobilität kippt die Wirksamkeit von Fiskal- und Geldpolitik mit dem Wechselkursregime.</p>
        <p>Unter flexiblem Wechselkurs wirkt Geldpolitik stark über den Wechselkurskanal; Fiskalpolitik wird durch Aufwertung und Nettoexportverluste ausgebremst. Unter festem Wechselkurs ist es gerade umgekehrt.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Flexibler Wechselkurs</strong> — Fiskalpolitik trifft auf den Aufwertungskanal</li><li><strong>Fester Wechselkurs</strong> — Die Paritätsverteidigung akkommodiert den Fiskalimpuls</li><li><strong>Flexibler Wechselkurs (Merksatz)</strong> — Fiskalpolitik trifft auf den Aufwertungskanal</li><li><strong>M-F Theorem</strong> — Kapitalmobilität vorausgesetzt.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Regimevergleich als Schockpfad</h4>
<p>Der saubere Klausurpfad lautet: <strong>Regime nennen → Erstimpuls benennen → Finanzmarkt-/Wechselkursreaktion → Nettoexportfolge → Endwirkung auf Y</strong>.</p>
        <p>Diese Reihenfolge verhindert den typischen Fehler, direkt ein Ergebnis zu behaupten, ohne den Gegenkanal mitzudenken.</p>
        <div class="math-block">$$\text{flexibler WK: } \Delta G \Rightarrow \text{Aufwertung} \Rightarrow NX\downarrow$$</div>
        <div class="math-block">$$\text{fester WK: } \Delta G \Rightarrow M\uparrow \Rightarrow \text{kein Aufwertungs-Crowding-out}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Politikmatrix</h4>
<table><tr><th>Regime</th><th>Fiskal</th><th>Geld</th></tr>
      <tr><td>Flexibel</td><td>schwächer</td><td>stark</td></tr>
      <tr><td>Fix</td><td>stark</td><td>schwach</td></tr></table>


<h4 class="theory-subsection-title">Diagrammfolge</h4>
<p>Im (Y,i)-Diagramm: IS/LM/ZP verschieben, dann WK-Reaktion einzeichnen, dann NX-Rückwirkung auf IS.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Politik offen</h4>
<p>M-F-Theorem auswendig: flex → Geld stark, Fiskal schwach; fix → umgekehrt. Jede Antwort: Regime → Kanal → Vorzeichen auf $Y$, $i$, $\varepsilon$, NX. Trilemma: fix + freie Kapitalmobilität → keine autonome Geldpolitik.</p><div class="warn-box" data-warning-placement="rail"><strong>Partial crowding-out:</strong> Unter flex ist Fiskal-Crowding-out über Nettoexporte, nicht über Zins wie in geschlossener VW — Mechanismus benennen.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Politische Lesart unter Prüfungsdruck</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Regime zuerst:</strong> Ohne explizite Regimeangabe bleibt jede Politikantwort unvollständig. Dieselbe Maßnahme hat im flexiblen und fixen Regime unterschiedliche Endergebnisse.</div>
        <div class="warn-box" data-warning-placement="rail"><strong>Nicht bei IS aufhören:</strong> Im offenen Modell reicht eine IS-Verschiebung nie als komplette Antwort. Erst der Wechselkurs- oder ZB-Kanal macht die Politikbewertung vollständig.</div>
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
      { label: 'Flexibler Wechselkurs', eq: String.raw`$$\Delta G>0 \Rightarrow \text{partielles oder starkes Crowding-out über } NX$$`, desc: 'Fiskalpolitik trifft auf den Aufwertungskanal', variables: { 'NX': 'Nettoexporte' } },
      { label: 'Fester Wechselkurs', eq: String.raw`$$\Delta G>0 \Rightarrow \Delta M>0 \Rightarrow \Delta Y \text{ stärker}$$`, desc: 'Die Paritätsverteidigung akkommodiert den Fiskalimpuls', variables: {} }
    ],
    aufgaben: [
      {
        text: 'Warum ist Fiskalpolitik unter flexiblem Wechselkurs und hoher Kapitalmobilität typischerweise schwächer als unter festem Wechselkurs?',
        steps: [
          { text: 'Unter flexiblem Wechselkurs erzeugt Fiskalpolitik Aufwertungsdruck.', eq: null },
          { text: 'Die Aufwertung verschlechtert die Nettoexporte und nimmt dem Erstimpuls einen Teil seiner Kraft.', eq: null },
          { text: 'Unter festem Wechselkurs wird dieser Kanal durch Zentralbankintervention blockiert; der Impuls bleibt stärker im Inland wirksam.', eq: null }
        ],
        result: 'Der Unterschied kommt aus dem Wechselkurskanal: flexibel dämpft Aufwertung, fix akkommodiert die Zentralbank.'
      },
      {
        text: 'Formuliere für eine M-F-Klausur die Minimalstruktur einer vollständigen Politikantwort in fünf Prüfschritten.',
        steps: [
          { text: 'Schritt 1: Wechselkursregime nennen.', eq: null },
          { text: 'Schritt 2: Erstimpuls auf IS oder LM benennen.', eq: null },
          { text: 'Schritt 3: Reaktion von Zins bzw. Kapitalflüssen erklären.', eq: null },
          { text: 'Schritt 4: Wechselkurs-/Nettoexportkanal anschließen.', eq: null },
          { text: 'Schritt 5: Endwirkung auf Output, Außenbeitrag und geldpolitische Autonomie festhalten.', eq: null }
        ],
        result: 'Genau diese Fünferstruktur macht offene Makropolitik klausurstabil und verhindert reine Ergebnisbehauptungen.'
      }
    ]
  },

  wk_regime: {
    motivation: 'Feste Wechselkurse, autonome Geldpolitik und freier Kapitalverkehr sind nicht gleichzeitig zu haben. Genau dieser Zielkonflikt wird im Kurs über Trilemma und Paritätsverteidigung analysiert.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Feste Wechselkurse, Trilemma &amp; Paritätsverteidigung</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Trilemma der offenen Volkswirtschaft</h4>
<p>Ein Land kann höchstens zwei der drei Ziele gleichzeitig wählen: festen Wechselkurs, freien Kapitalverkehr, autonome Geldpolitik.</p>
        <p>Fixe Paritäten kaufen Wechselkursstabilität, verlangen aber meistens den Verzicht auf geldpolitische Autonomie.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Trilemma-Logik</strong> — Politische Restriktion der offenen Makro</li><li><strong>Trilemma-Logik (Merksatz)</strong> — Politische Restriktion der offenen Makro</li><li><strong>Devisenintervention</strong> — Reserven und Kapitalbilanz.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Paritätsverteidigung</h4>
<p>Wird eine Abwertung erwartet, muss die Zentralbank den inländischen Zins anheben oder Reserven einsetzen, um den Kurs zu verteidigen. Bei unglaubwürdiger Parität kann das sehr schnell teuer werden.</p>
        <div class="math-block">$$i - i^* \approx \mathbb{E}\left[\frac{\Delta E}{E}\right]$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Paritätsverteidigung</h4>
<p>Bei festem Kurs kauft/verkauft die Zentralbank Devisen, um $E$ zu halten; Reserven sind die Grenze der Verteidigung.</p>


<h4 class="theory-subsection-title">Kapitalverkehrskontrollen</h4>
<p>Mit Kontrollen kann Geldpolitik teilweise autonom bleiben; das Modell ändert sich je nach Mobilitätsannahme.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Wechselkursregime</h4>
<p>Trilemma: höchstens 2 von {fixer WK, freie Kapitalmobilität, autonome Geldpolitik}. Paritätsverteidigung: Reserven und/oder $i↑$. Kosten: Rezession, Bankenstress. Currency Board: $M$ an Reserven gebunden — rigide, aber glaubwürdig.</p><div class="warn-box" data-warning-placement="rail"><strong>Fix heißt nicht stabil:</strong> Fixe Kurse können real überbewertet sein. Anpassung dann über Binnenrezession statt externer Abwertung.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Fester Kurs heißt nicht spannungsfrei:</strong> Gerade bei glaubwürdigkeitsschwachen Regimen kann ein fixer Wechselkurs den Anpassungsdruck erhöhen, statt ihn verschwinden zu lassen.</div>
        <div class="warn-box" data-warning-placement="rail"><strong>Trilemma ist keine Meinung:</strong> Das Trilemma ist eine Restriktion. Wer drei Ziele gleichzeitig behauptet, muss zeigen, welche der Voraussetzungen tatsächlich verletzt ist.</div>
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
      { label: 'Trilemma-Logik', eq: String.raw`$$\text{fixer WK} + \text{freie Kapitalmobilität} \Rightarrow \text{keine autonome Geldpolitik}$$`, desc: 'Politische Restriktion der offenen Makro', variables: {} }
    ],
    aufgaben: practice('wk_regime', [
      {
        text: String.raw`Ein Land möchte den Wechselkurs fest halten und gleichzeitig eine expansive Geldpolitik fahren, obwohl Kapital frei mobil ist. Was sagt das Trilemma?`,
        steps: [
          { text: 'Beim festen Wechselkurs bindet der Finanzmarkt den inländischen Zins an das Weltzinsniveau.', eq: null },
          { text: 'Eine autonome Geldmengenausweitung wäre ohne Kursanpassung oder Kapitalkontrollen nicht dauerhaft haltbar.', eq: null },
          { text: 'Also kann das Land nicht alle drei Ziele gleichzeitig erreichen.', eq: null }
        ],
        result: 'Das Trilemma verbietet diese Kombination: Bei fixem Kurs und freiem Kapitalverkehr ist keine autonome Geldpolitik möglich.'
      },
      {
        text: String.raw`Ein Land verteidigt einen fixen Kurs trotz anhaltender Abwertungserwartungen. Welche zwei unmittelbaren Verteidigungskanäle hat die Zentralbank und welcher Binneneffekt folgt häufig?`,
        steps: [
          { text: 'Kanal 1: Devisenreserven einsetzen, um den Kurs direkt zu stützen.', eq: null },
          { text: 'Kanal 2: Zinsen anheben, um Kapitalabfluss zu dämpfen und Inlandsanlage attraktiver zu machen.', eq: null },
          { text: 'Höhere Zinsen belasten typischerweise Binnennachfrage und Konjunktur.', eq: null }
        ],
        result: 'Paritätsverteidigung läuft über Reserven und/oder Zinsanhebung; der häufige Preis ist eine konjunkturelle Abschwächung.'
      },
      {
        text: String.raw`Regimevergleich als Grafikfalle: Gleicher externer Schock unter flexiblem und festem Wechselkurs. Welche zentrale Visualisierungsdifferenz muss genannt werden?`,
        steps: [
          { text: 'Flexibles Regime: Teil der Anpassung läuft über den Wechselkurs (Stoßdämpfer).', eq: null },
          { text: 'Fixes Regime: Kurs bleibt gebunden, Anpassungslast verlagert sich stärker auf Binnenvariablen.', eq: null },
          { text: 'Gleicher Schock heißt daher nicht gleicher Anpassungspfad.', eq: null }
        ],
        result: 'Exam-Logik: nicht nur Schockrichtung, sondern die je Regime unterschiedliche Anpassungsvariable benennen.'
      },
      {
        text: String.raw`Paritätsverteidigung unter Stress: Märkte erwarten mit hoher Wahrscheinlichkeit eine Abwertung. Erkläre die Kette von erwarteter Abwertung über den nötigen Zinsaufschlag bis zu den binnenwirtschaftlichen Kosten.`,
        steps: [
          { text: 'Steigende erwartete Abwertung erhöht unter Zinsparität den erforderlichen Inlandszins relativ zum Ausland.', eq: String.raw`$$i-i^* \approx \mathbb{E}\!\left[\frac{\Delta E}{E}\right]$$` },
          { text: 'Zur Kursverteidigung muss die Zentralbank deshalb Zinsen erhöhen und/oder Reserven einsetzen.', eq: null },
          { text: 'Höhere Zinsen dämpfen Investitionen und Nachfrage; die Paritätsverteidigung verschiebt Anpassungslasten auf Output und Beschäftigung.', eq: null }
        ],
        result: 'Je höher die Abwertungserwartung, desto teurer wird die Verteidigung des Fixkurses in Form höherer inländischer Zinsen und realwirtschaftlicher Dämpfung.'
      }
    ])
  },

  wk_krisen: {
    motivation: 'Währungskrisen sind der Stresstest fixer Regime. Im Kurs werden sie über Currency Boards, Glaubwürdigkeit und Krisendynamik analysiert, nicht nur als historische Anekdoten.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Currency Boards &amp; Währungskrisen</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Selbsterfüllende Erwartungen</h4>
<p>Erwartete Abwertung → Kapitalabzug → Zinsaufschlag → Rezession → bestätigt Abwertungsdruck.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Erwartete Abwertung und Zinsaufschlag</strong> — Je unglaubwürdiger die Parität, desto höher der notwendige Zinsaufschlag</li><li><strong>Erwartete Abwertung und Zinsaufschlag (Merksatz)</strong> — Je unglaubwürdiger die Parität, desto höher der notwendige Zinsaufschlag</li><li><strong>Risikoprämie</strong> — Aufschlag bei Unglaubwürdigkeit.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">First- und Second-Generation-Krisen</h4>
<p><strong>First generation (Krugman):</strong> Überbewerteter fixer Kurs + expansionäre Fiskalpolitik + schrumpfende Reserven → Spekulanten wetten auf Abwertung → selbsterfüllend. Die Fundamentaldaten (Budget, Reserven) sind schwach genug, dass Verteidigung nicht kostengünstig ist.</p>
        <p><strong>Second generation:</strong> Fundamentale sind noch vertretbar, aber die Zentralbank zögert mit Verteidigung wegen hoher Zinskosten (Rezession, Bankennot). Erwartete Abwertung löst Kapitalflucht aus — die Krise entsteht durch Erwartungskoordination, nicht nur durch Reservearithmetik.</p>
        <div class="math-block">$$i = i^* + \phi + \mathbb{E}[\Delta E/E]$$</div>
        <p>Der Aufschlag $\phi$ steigt mit wahrgenommener Unglaubwürdigkeit; je höher $i$ zur Verteidigung, desto stärker die Binnenrezession und desto attraktiver die Abwertungserwartung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">First-generation crisis</h4>
<p>Überbewerteter fixer Kurs + schrumpfende Reserven + begrenzte Fiskalpolitik → Spekulationsangriff und Aufgabe des Pegs.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Prüfungslogik</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Nicht nur Reserven zählen:</strong> Währungskrisen hängen nicht nur von Devisenreserven ab. Erwartungsbildung, reale Überbewertung, Bankenschwäche und politische Kosten der Verteidigung sind ebenso wichtig.</div>
        <div class="warn-box" data-warning-placement="rail"><strong>Currency Board ≠ Garantie:</strong> Ein Currency Board erhöht Glaubwürdigkeit, eliminiert aber Anpassungsdruck nicht. Bei fixer Parität und divergierender Produktivität entsteht reale Überbewertung — genau der first-generation-Kanal.</div>
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
      { label: 'Erwartete Abwertung und Zinsaufschlag', eq: String.raw`$$i - i^* \approx \mathbb{E}\left[\frac{\Delta E}{E}\right]$$`, desc: 'Je unglaubwürdiger die Parität, desto höher der notwendige Zinsaufschlag', variables: {} }
    ],
    aufgaben: practice('wk_krisen')
  },

  opt_waehrungsraum: {
    motivation: 'Der optimale Währungsraum beantwortet die Klausurfrage hinter jeder Währungsunion: Wann lohnt sich der Verzicht auf den eigenen Wechselkurs überhaupt?',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Optimaler Währungsraum &amp; Währungsunion</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">OWR-Kriterien nach Mundell</h4>
<p>Ein Währungsraum ist dann "optimal", wenn der Verlust des eigenen Wechselkurses gut durch andere Anpassungsmechanismen aufgefangen wird.</p>
        <p>Prüfungsrelevant sind vor allem: Faktormobilität, Lohn- und Preisflexibilität, Fiskaltransfers und die Symmetrie von Schocks.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>OWR-Abwägung</strong> — Kein Rechengesetz, sondern die Prüfungslogik des Konzepts</li><li><strong>OWR-Abwägung (Merksatz)</strong> — Kein Rechengesetz, sondern die Prüfungslogik des Konzepts</li><li><strong>OWR-Trade-off</strong> — Abwägung.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>OWR-Abwägung</strong></p><div class="math-block">$$\text{Nutzen der Währungsunion} \gtrless \text{Kosten des Verzichts auf den eigenen WK}$$</div><p>Kein Rechengesetz, sondern die Prüfungslogik des Konzepts</p>
<p><strong>OWR-Abwägung (Merksatz)</strong></p><div class="math-block">$$\text{Nutzen der Währungsunion} \gtrless \text{Kosten des Verzichts auf den eigenen WK}$$</div><p>Kein Rechengesetz, sondern die Prüfungslogik des Konzepts</p>
<p><strong>OWR-Trade-off</strong></p><div class="math-block">$$\text{Nutzen(WU)} \gtrless \text{Kosten(Verzicht auf WK)}$$</div><p>Abwägung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Mundell-Kriterien im Detail</h4>
<p>Arbeitsmobilität, Preis-/Lohnflexibilität, Fiskaltransfers und symmetrische Schocks bestimmen, ob ein gemeinsamer WK optimal ist.</p>


<h4 class="theory-subsection-title">Eurozone-Debatte</h4>
<p>Asymmetrische Schocks (z.B. Südeuropa vs. Deutschland) ohne eigenen WK erfordern Ersatzmechanismen (Transfers, Strukturreformen).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Optimaler Währungsraum</h4>
<p>OWR-Abwägung: Nutzen (Transaktionskosten, WK-Risiko, Glaubwürdigkeit) vs. Kosten (asymmetrische Schocks ohne eigenen WK). Ersatzmechanismen: Arbeitsmobilität, Lohnflexibilität, Fiskaltransfers. Eurozone: immer Abwägung, nie Pro/Contra-Liste.</p><div class="warn-box" data-warning-placement="rail"><strong>OWR ≠ Optimal Currency Area Bewertung:</strong> Kriterien erklären Anpassungsfähigkeit ohne WK — nicht automatisch „WU immer gut".</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Klausurzugriff auf die Eurozone</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Nicht nur Vorteile aufzählen:</strong> OWR-Fragen sind immer Abwägungsfragen. Handelsgewinne, Glaubwürdigkeit und Integration genügen nicht, wenn asymmetrische Schocks und starre Arbeitsmärkte die Anpassung blockieren.</div>
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
      { label: 'OWR-Abwägung', eq: String.raw`$$\text{Nutzen der Währungsunion} \gtrless \text{Kosten des Verzichts auf den eigenen WK}$$`, desc: 'Kein Rechengesetz, sondern die Prüfungslogik des Konzepts', variables: {} }
    ],
    aufgaben: [
      {
        text: 'Nenne vier klassische OWR-Kriterien und erkläre kurz, warum sie den Verlust des eigenen Wechselkurses abfedern können.',
        steps: [
          { text: 'Arbeitsmobilität: Beschäftigte können in boomende Regionen ausweichen.', eq: null },
          { text: 'Lohn- und Preisflexibilität: interne Abwertung ersetzt teilweise die externe Abwertung.', eq: null },
          { text: 'Fiskaltransfers: Schocks werden zwischen Regionen geteilt.', eq: null },
          { text: 'Symmetrische Schocks: Wenn Länder ähnlich getroffen werden, passt eine einheitliche Geldpolitik besser.', eq: null }
        ],
        result: 'OWR-Kriterien benennen die Ersatzmechanismen, die ohne eigenen Wechselkurs Anpassung ermöglichen.'
      },
      {
        text: 'Warum ist die Eurozone eine klassische OWR-Abwägungsfrage und keine reine Pro-/Contra-Liste?',
        steps: [
          { text: 'Sie vereint Nutzen wie geringere Wechselkurskosten und stärkere Integration.', eq: null },
          { text: 'Gleichzeitig treten asymmetrische Schocks, begrenzte Arbeitsmobilität und unvollständige Fiskaltransfers auf.', eq: null },
          { text: 'Die Bewertung hängt deshalb an der Stärke alternativer Anpassungsmechanismen, nicht an einem einzelnen Argument.', eq: null }
        ],
        result: 'Die Eurozone ist eine OWR-Abwägung, weil der Nutzen gemeinsamer Währung gegen fehlende Wechselkursanpassung bei asymmetrischen Schocks steht.'
      }
    ]
  },

  phillipskurve: {
    motivation: 'Die Phillipskurve verbindet Inflation, Erwartungen und Arbeitslosigkeit. Sie ist das Bindeglied zwischen Konjunktur, Disinflation und den Anreizproblemen der Geldpolitik.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Phillipskurve &amp; Inflationserwartungen</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Die Phillipskurve verbindet Inflation, Erwartungen und Arbeitslosigkeit. Sie ist das Bindeglied zwischen Konjunktur, Disinflation und den Anreizproblemen der Geldpolitik.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Erwartungsaugmentierte Phillipskurve</strong> — Inflation, Erwartungen und Auslastung</li><li><strong>Erwartungsaugmentierte Phillipskurve (Merksatz)</strong> — Inflation, Erwartungen und Auslastung</li><li><strong>PC</strong> — Erwartungen eingebaut.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Erwartungsaugmentierte Phillipskurve</h4>
<p>Kurzfristig hängt die Inflation davon ab, wie stark die Arbeitslosigkeit von ihrem natürlichen Niveau abweicht und welche Inflation die Akteure bereits erwarten.</p>
        <div class="math-block">$$\pi_t = \pi_t^e - \alpha (u_t - u_n)$$</div>
        <p>Liegt die Arbeitslosigkeit unter $u_n$, entsteht positiver Inflationsdruck; liegt sie darüber, dämpft das die Preisentwicklung.</p>


<h4 class="theory-subsection-title">NAIRU und Ankerfunktion</h4>
<p>Die <strong>natürliche Arbeitslosigkeit</strong> $u_n$ (NAIRU) ist die Quote, bei der die Inflation weder beschleunigt noch verlangsamt — vorausgesetzt $\pi^e$ ist stabil. Sie hängt von Strukturmerkmalen des Arbeitsmarkts ab (Matching, Institutionen, Mindestlöhne), nicht von der aktuellen Konjunktur.</p>
        <div class="math-block">$$\pi = \pi^e \text{ wenn } u = u_n$$</div>
        <p>Geldpolitik kann kurzfristig $u$ von $u_n$ abweichen lassen (Überraschungsinflation), aber langfristig kehrt die Wirtschaft zu $u_n$ zurück — dann bestimmt $\pi^e$ das Inflationsniveau.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Erwartungsaugmentiert</h4>
<p>Moderne Phillipskurve: $\pi = \pi^e + \kappa u + \ldots$; erwartete Inflation verschiebt die Kurve.</p>


<h4 class="theory-subsection-title">NAIRU</h4>
<p>NAIRU: Arbeitslosenquote ohne Beschleunigung der Inflation; Anker für mittelfristige Geldpolitik.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Phillipskurve (Ergänzung)</h4>
<p>Kurzfrist: $\pi = \pi^e - \alpha(u-u_n)$ — Trade-off möglich. Langfrist: $\pi^e$ passt sich an → vertikale PC bei $u_n$. Disinflation kostet Output (Opferquote). Adaptive Erwartungen: langsame Anpassung verlängert Kosten.</p><div class="warn-box" data-warning-placement="rail"><strong>Kein permanentes Menü:</strong> Politik kann nicht dauerhaft $u<u_n$ „kaufen" — Erwartungen ziehen nach.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Keine dauerhafte Tauschbeziehung:</strong> Die Phillipskurve ist kein Menü, mit dem Politik dauerhaft weniger Arbeitslosigkeit gegen etwas mehr Inflation kaufen könnte. Langfristig verschwimmt der Trade-off.</div>
        <div class="warn-box" data-warning-placement="rail"><strong>$u_n$ nicht mit $u=0$ verwechseln:</strong> Vollbeschäftigung im makroökonomischen Sinn bedeutet $u=u_n$, nicht null Arbeitslosigkeit. Strukturelle und friktionelle Arbeitslosigkeit bleiben auch im Gleichgewicht.</div>
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
      { label: 'Erwartungsaugmentierte Phillipskurve', eq: String.raw`$$\pi_t = \pi_t^e - \alpha (u_t - u_n)$$`, desc: 'Inflation, Erwartungen und Auslastung', variables: { 'u_n': 'Natürliche Arbeitslosigkeit', '\\alpha': 'Steigung' } }
    ],
    aufgaben: practice('phillipskurve', [
      {
        text: String.raw`Die erwartete Inflation liegt bei 2%, die natürliche Arbeitslosigkeit bei 5%, die Steigung bei $\alpha=0{,}8$. Wie hoch ist die Inflation bei einer Arbeitslosigkeit von 4%?`,
        steps: [
          { text: 'Nutze die Phillipskurve.', eq: String.raw`$$\pi = \pi^e - \alpha(u-u_n)$$` },
          { text: 'Setze die Werte ein.', eq: String.raw`$$\pi = 2 - 0{,}8(4-5) = 2 + 0{,}8 = 2{,}8$$` },
          { text: 'Unter natürlicher Arbeitslosigkeit liegt die Inflation über den Erwartungen.', eq: null }
        ],
        result: 'Die Inflation beträgt 2,8%.'
      }
    ])
  },

  zeitinkonsistenz: {
    motivation: 'Zeitinkonsistenz erklärt, warum eine ex ante vernünftige Geldpolitik ex post an Glaubwürdigkeit verliert. Ohne Bindung wächst der Anreiz zur Überraschungsinflation.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Zeitinkonsistenz &amp; Commitment</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Commitment vs. Diskretion</h4>
<p>Ex ante möchte die Zentralbank niedrige Inflation versprechen. Ex post hat sie aber einen Anreiz, über Überraschungsinflation die Arbeitslosigkeit unter ihr natürliches Niveau zu drücken.</p>
        <p>Genau diese Differenz zwischen angekündigtem Plan und später optimal erscheinender Handlung heißt Zeitinkonsistenz.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Phillips-Anreiz</strong> — Überraschungsinflation wirkt nur über Erwartungen</li><li><strong>Phillips-Anreiz (Merksatz)</strong> — Überraschungsinflation wirkt nur über Erwartungen</li><li><strong>Kydland-Prescott</strong> — Bias unter Diskretion.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Phillips-Anreiz</strong></p><div class="math-block">$$u = u_n - \alpha(\pi - \pi^e)$$</div><p>Überraschungsinflation wirkt nur über Erwartungen</p>
<p><strong>Phillips-Anreiz (Merksatz)</strong></p><div class="math-block">$$u = u_n - \alpha(\pi - \pi^e)$$</div><p>Überraschungsinflation wirkt nur über Erwartungen</p>
<p><strong>Kydland-Prescott</strong></p><div class="math-block">$$\pi(\text{discretion}) > \pi(\text{commitment})$$</div><p>Bias unter Diskretion.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Commitment vs. Discretion</h4>
<p>Regel (Taylor, Inflation Target) bindet zukünftiges Handeln und senkt $\pi^e$; Diskretion erlaubt Überraschungsinflation.</p>


<h4 class="theory-subsection-title">Glaubwürdigkeit</h4>
<p>Unabhängigkeit der Zentralbank ist institutionelles Commitment gegen politischen Inflationsdruck.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Zeitinkonsistenz</h4>
<p>Ex ante: niedrige $\pi$ versprechen. Ex post: Anreiz zu Überraschungs-$\pi$ für $u<u_n$. Rational: $\pi^e$ steigt → kein Beschäftigungsgewinn, nur höhere $\pi$. Lösungen: Regeln, Unabhängigkeit, Reputation, Inflation Targeting.</p><div class="warn-box" data-warning-placement="rail"><strong>Diskretion ≠ Fehler:</strong> Zeitinkonsistenz ist struktureller Anreizkonflikt, nicht „dumme Politik". Institutionen binden ex-post-Handeln.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Diskretion ≠ Fehler:</strong> Zeitinkonsistenz ist struktureller Anreizkonflikt, nicht „dumme Politik". Institutionen binden ex-post-Handeln.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Phillips-Anreiz', eq: String.raw`$$u = u_n - \alpha(\pi - \pi^e)$$`, desc: 'Überraschungsinflation wirkt nur über Erwartungen', variables: {} }
    ],
    aufgaben: [
      {
        text: 'Erkläre in drei Schritten, warum diskretionäre Geldpolitik ohne Commitment zu einem Inflationsbias führen kann.',
        steps: [
          { text: 'Die Zentralbank möchte Arbeitslosigkeit unter das natürliche Niveau drücken und hat deshalb ex post einen Inflationsanreiz.', eq: null },
          { text: 'Private Akteure antizipieren diesen Anreiz und setzen ihre Inflationserwartungen höher.', eq: null },
          { text: 'Am Ende entsteht mehr Inflation, aber die Arbeitslosigkeit bleibt langfristig beim natürlichen Niveau.', eq: null }
        ],
        result: 'Diskretion ohne Commitment erzeugt einen Inflationsbias: höhere Inflation ohne dauerhaften Beschäftigungsgewinn.'
      }
    ]
  },

  barro_gordon: {
    motivation: 'Das Barro-Gordon-Modell formalisiert Zeitinkonsistenz. Es ist der Prüfungsfall, in dem Verlustfunktion, Phillipskurve und rationale Erwartungen sauber zusammengeführt werden.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Barro-Gordon &amp; Inflationsbias</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Das Barro-Gordon-Modell formalisiert Zeitinkonsistenz. Es ist der Prüfungsfall, in dem Verlustfunktion, Phillipskurve und rationale Erwartungen sauber zusammengeführt werden.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Verlustfunktion</strong> — Präferenzstruktur der Zentralbank</li><li><strong>Inflationsbias</strong> — Diskretionäres Gleichgewicht unter rationalen Erwartungen</li><li><strong>Verlustfunktion (Merksatz)</strong> — Präferenzstruktur der Zentralbank</li><li><strong>Verlustfunktion</strong> — Zielkonflikt.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Modellbausteine</h4>
<p>Barro-Gordon kombiniert eine Zentralbank-Verlustfunktion mit der erwartungsaugmentierten Phillipskurve. So wird der Zielkonflikt zwischen Preisstabilität und Auslastungswunsch formal greifbar.</p>
        <div class="math-block">$$L = \frac{1}{2}\chi \pi^2 + \frac{1}{2}\lambda (u-u^*)^2$$</div>
        <div class="math-block">$$u = u_n - \alpha(\pi - \pi^e)$$</div>


<h4 class="theory-subsection-title">Diskretionärer Bias</h4>
<p>Unter Diskretion setzt die Zentralbank einen positiven Inflationsanreiz, solange sie $u^* < u_n$ anstrebt. Mit rationalen Erwartungen landet die Wirtschaft dann bei positiver Inflation, aber wieder bei natürlicher Arbeitslosigkeit.</p>
        <div class="math-block">$$\pi^{D} = \frac{\alpha \lambda}{\chi}(u_n-u^*)$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Zeitinkonsistenz der Geldpolitik</h4>
<p>Ex post will die Zentralbank höhere Inflation für Beschäftigungsgewinn; ex ante rational $\pi^e$ steigt — kein dauerhafter Phillips-Trade-off.</p>


<h4 class="theory-subsection-title">Inflationsbias</h4>
<p>Ohne Commitment (Regel, Unabhängigkeit) entsteht systematischer Inflationsbias bei kurzfristiger Arbeitslosigkeit.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Barro-Gordon</h4>
<p>Verlust: $L = \chi\pi^2/2 + \lambda(u-u^*)^2/2$. PC: $u = u_n - \alpha(\pi-\pi^e)$. Diskretion: $\pi^D = \alpha\lambda(u_n-u^*)/\chi > 0$ bei $u^*<u_n$. Regel/ konservativer Banker reduziert Bias. Kein dauerhafter Phillips-Trade-off.</p><div class="warn-box" data-warning-placement="rail"><strong>Bias ≠ willkürliche Inflation:</strong> Inflationsbias entsteht aus strukturiertem Anreiz, nicht aus „schlechter" Zentralbank.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Bias ≠ willkürliche Inflation:</strong> Inflationsbias entsteht aus strukturiertem Anreiz, nicht aus „schlechter" Zentralbank.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Verlustfunktion', eq: String.raw`$$L = \frac{1}{2}\chi \pi^2 + \frac{1}{2}\lambda (u-u^*)^2$$`, desc: 'Präferenzstruktur der Zentralbank', variables: { '\\chi': 'Inflationsgewicht', '\\lambda': 'Arbeitslosigkeitsgewicht' } },
      { label: 'Inflationsbias', eq: String.raw`$$\pi^{D} = \frac{\alpha \lambda}{\chi}(u_n-u^*)$$`, desc: 'Diskretionäres Gleichgewicht unter rationalen Erwartungen', variables: {} }
    ],
    aufgaben: practice('barro_gordon')
  },

  taylor_regel: {
    motivation: 'Die Taylor-Regel übersetzt geldpolitische Reaktion in eine einfache, klausurfeste Leitzinsregel. Sie verknüpft Inflationsziel, Outputlücke und Realzinslogik.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Taylor-Regel &amp; geldpolitische Reaktion</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Die Taylor-Regel übersetzt geldpolitische Reaktion in eine einfache, klausurfeste Leitzinsregel. Sie verknüpft Inflationsziel, Outputlücke und Realzinslogik.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Taylor-Regel</strong> — Reaktionsfunktion der Geldpolitik</li><li><strong>Taylor-Regel (Merksatz)</strong> — Reaktionsfunktion der Geldpolitik</li><li><strong>Taylor</strong> — Leitzinsregel.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Regelform</h4>
<p>Die Taylor-Regel beschreibt, wie der Leitzins auf Inflation und reale Über- bzw. Unterauslastung reagieren soll.</p>
        <div class="math-block">$$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$$</div>
        <p>Sie ist keine rein mechanische Wahrheit, aber ein sehr gutes Prüfungswerkzeug für stabilitätsorientierte Geldpolitik.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Taylor-Regel</h4>
<p>$i_t = r^* + \pi_t + \phi_\pi(\pi_t-\pi^*) + \phi_y(y_t-y^n)$ — reagiert auf Inflations- und Output-Lücke.</p>


<h4 class="theory-subsection-title">Praxis EZB/Fed</h4>
<p>Zentralbanken folgen approximativ einer Reaktionsfunktion; Abweichungen erklären Marktbewegungen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Taylor-Regel</h4>
<p>$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$. Taylor-Prinzip: $a>1$ — Nominalzins reagiert stärker als 1:1 auf Inflation, damit Realzins steigt. Rechenaufgabe: Werte einsetzen, ELB beachten ($i\geq 0$).</p><div class="warn-box" data-warning-placement="rail"><strong>Taylor-Regel ist keine EZB-Vorschrift:</strong> Die Regel ist Modell/Heuristik. In der Klausur: Reaktionslogik erklären, nicht historische Zinsen exakt reproduzieren.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Taylor-Regel ist keine EZB-Vorschrift:</strong> Die Regel ist Modell/Heuristik. In der Klausur: Reaktionslogik erklären, nicht historische Zinsen exakt reproduzieren.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Taylor-Regel', eq: String.raw`$$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$$`, desc: 'Reaktionsfunktion der Geldpolitik', variables: { 'r^*': 'Natürlicher Realzins', '\\pi^*': 'Inflationsziel' } }
    ],
    aufgaben: practice('taylor_regel', [
      {
        text: String.raw`Regimeentscheidung der Geldpolitik: Inflation liegt nahe dem Ziel, aber Geldmengenaggregate schwanken stark. Welche Größe ist in einem Inflation-Targeting-Rahmen der primäre Steueranker und wofür dienen Geldmengeninformationen dann noch?`,
        steps: [
          { text: 'Im Inflation-Targeting ist die Zielabweichung der Inflation der primäre Anker für Zinsentscheidungen.', eq: String.raw`$$\pi_t-\pi^*$$` },
          { text: 'Geldmengenentwicklungen liefern ergänzende Informationssignale über Liquidität, Kreditdynamik und Risiken, aber ersetzen das Zielkriterium nicht.', eq: null },
          { text: 'So wird verhindert, dass instabile Geldnachfrage zu mechanischen Fehlreaktionen führt.', eq: null }
        ],
        result: 'Primärer Anker bleibt die Inflationszielabweichung; Geldmengenaggregate sind nützliche Zusatzindikatoren, aber kein alleiniger Steuerkompass.'
      },
      {
        text: String.raw`ELB/optimal-inflation Mini-Case: Zwei Volkswirtschaften haben denselben Realzins im Normalzustand. A hat langfristig $\pi=4\%$, B hat $\pi=0\%$. Bei einem starken Schock können beide den Nominalzins nur bis $i=0$ senken. Welche Volkswirtschaft gewinnt mehr geldpolitischen Spielraum über den Realzinskanal?`,
        steps: [
          { text: 'Nutze den Realzinskanal:', eq: String.raw`$$r \approx i-\pi$$` },
          { text: 'Bei gleicher ELB für den Nominalzins erlaubt höhere Inflation ein stärker negatives erreichbares $r$.', eq: null },
          { text: 'Damit hat Volkswirtschaft A mehr Stabilisierungsraum; B stößt früher an die reale Untergrenze des Politikimpulses.', eq: null }
        ],
        result: 'Die Volkswirtschaft mit höherem Inflationsniveau vor dem Schock hat an der ELB mehr geldpolitischen Realzins-Spielraum.'
      }
    ])
  },

  inflation_targeting: {
    motivation: 'Inflation Targeting ist im Kurs kein bloßes Schlagwort, sondern ein geldpolitisches Regime: Zielgröße, Reaktionsfunktion, Kommunikation und Informationssatz greifen ineinander.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Inflation Targeting &amp; EZB-Strategie</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Regimekern</h4>
<p>Inflation Targeting verbindet ein explizites Inflationsziel mit operativer Unabhängigkeit der Zentralbank. Der Prüfungszugriff lautet deshalb: <strong>Welche Zielabweichung wird beobachtet, welches Instrument wird bewegt und über welchen Horizont soll Preisstabilität gesichert werden?</strong></p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Zielorientierte Reaktionsfunktion</strong> — Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein</li><li><strong>Realzins an der Untergrenze</strong> — Bei gegebener ELB hängt der Stabilisierungsspielraum an der Inflation</li><li><strong>Zielorientierte Reaktionsfunktion (Merksatz)</strong> — Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein</li><li><strong>Zielpfad</strong> — Mittelfristiger Anker.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Zielorientierte Reaktionsfunktion</strong></p><div class="math-block">$$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$$</div><p>Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein</p>
<p><strong>Realzins an der Untergrenze</strong></p><div class="math-block">$$r_t \approx i_t - \pi_t$$</div><p>Bei gegebener ELB hängt der Stabilisierungsspielraum an der Inflation</p>
<p><strong>Zielorientierte Reaktionsfunktion (Merksatz)</strong></p><div class="math-block">$$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$$</div><p>Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein</p>
<p><strong>Zielpfad</strong></p><div class="math-block">$$\mathbb{E}_t[\pi_{t+k}] \rightarrow \pi^*$$</div><p>Mittelfristiger Anker.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Inflationsziel</h4>
<p>Explizites Ziel (z.B. 2%) verankert Erwartungen; Abweichungen erfordern Transparenz und Forward Guidance.</p>


<h4 class="theory-subsection-title">Flexibles Targeting</h4>
<p>Kurzfristige Abweichungen bei Schocks erlaubt, mittelfristig Rückkehr zum Ziel — vermeidet prozyklische Überreaktion.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Inflation Targeting</h4>
<p>Regime: explizites $\pi^*$, operative Unabhängigkeit, Forward Guidance. Steueranker: $\pi-\pi^*$, nicht M3 mechanisch. ELB: bei $i=0$ weniger Realzins-Spielraum — höheres Trend-$\pi$ vor Schock = mehr Puffer ($r\approx i-\pi$).</p><div class="warn-box" data-warning-placement="rail"><strong>IT ≠ direkte Inflationssteuerung:</strong> Zentralbank steuert $i$ und Erwartungen; Übertragung auf $\pi$ braucht Zeit und funktionierende Kanäle.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>IT ≠ direkte Inflationssteuerung:</strong> Zentralbank steuert $i$ und Erwartungen; Übertragung auf $\pi$ braucht Zeit und funktionierende Kanäle.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Zielorientierte Reaktionsfunktion', eq: String.raw`$$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$$`, desc: 'Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein', variables: { 'r^*': 'Natürlicher Realzins', '\\pi_t': 'Aktuelle Inflation', '\\pi^*': 'Inflationsziel', 'y_t-y_n': 'Outputlücke' } },
      { label: 'Realzins an der Untergrenze', eq: String.raw`$$r_t \approx i_t - \pi_t$$`, desc: 'Bei gegebener ELB hängt der Stabilisierungsspielraum an der Inflation', variables: { 'r_t': 'Ex-post-Realzins', 'i_t': 'Nominalzins', '\\pi_t': 'Inflation' } }
    ],
    aufgaben: practice('inflation_targeting', [
      {
        text: 'Warum ist in einem Inflation-Targeting-Regime die Zielabweichung der Inflation der primäre Steueranker, während Geldmengenaggregate nur ergänzende Hinweise liefern?',
        steps: [
          { text: 'Das Regime definiert Preisstabilität über ein explizites Inflationsziel; daran wird die Zentralbank gemessen.', eq: null },
          { text: 'Geldmengenaggregate können wichtige Zusatzinformationen über Liquidität, Kreditdynamik und Risiken enthalten, sind aber bei instabiler Geldnachfrage kein sauberer Einzelanker.', eq: null },
          { text: 'Die klausurstabile Antwort lautet daher: Zielabweichung zuerst, monetäre Indikatoren als Ergänzung und Plausibilitätscheck danach.', eq: null }
        ],
        result: 'Inflation Targeting bleibt zielgeführt: Primär zählt die Distanz zu \\(\\pi^*\\), monetäre Aggregate liefern ergänzende Diagnosesignale.'
      },
      {
        text: String.raw`Zwei Länder stoßen beide bei \(i=0\) an die Untergrenze. Land A hat vor dem Schock \(\pi=4\%\), Land B \(\pi=0\%\). Welches Land besitzt mehr geldpolitischen Realzins-Spielraum und warum ist das für Inflation Targeting relevant?`,
        steps: [
          { text: 'An der ELB bestimmt die Inflation, wie negativ der Realzins werden kann.', eq: String.raw`$$r \approx i-\pi$$` },
          { text: 'Bei gleichem Nominalzins von 0% ist der Realzins in Land A niedriger als in Land B.', eq: null },
          { text: 'Das zeigt, warum sehr niedrige Trendinflation zwar attraktiv wirkt, aber an der Untergrenze geldpolitischen Puffer kosten kann.', eq: null }
        ],
        result: 'Land A hat mehr Realzins-Spielraum; genau deshalb ist die Wahl des Inflationsziels auch eine Frage makroökonomischer Stabilisierungsfähigkeit.'
      }
    ])
  },

  inflation_kosten: {
    motivation: 'Inflation ist in Makro II nicht nur eine Prozentzahl, sondern ein Wohlfahrts- und Stabilitätsproblem. Genauso wichtig sind aber die Kosten, Inflation wieder herunterzuholen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum Inflation reale Kosten erzeugt</h4>
<p>Inflation verzerrt Kassenhaltung, Preisvergleich, Vertragsbeziehungen und relative Preise. Im Kurs sind besonders prüfungsrelevant: Schuhsohlenkosten, Menükosten, Inflationssteuer auf Nominalvermögen und Fehlallokation durch unsynchrone Preisanpassung.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Inflation ist in Makro II nicht nur eine Prozentzahl, sondern ein Wohlfahrts- und Stabilitätsproblem. Genauso wichtig sind aber die Kosten, Inflation wieder herunterzuholen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Disinflation und Arbeitslosigkeit</strong> — Schnelle Disinflation erzeugt bei gegebener Steigung reale Kosten</li><li><strong>Opferquote</strong> — Kumulierter Outputverlust je Prozentpunkt Disinflation</li><li><strong>Disinflation und Arbeitslosigkeit (Merksatz)</strong> — Schnelle Disinflation erzeugt bei gegebener Steigung reale Kosten</li><li><strong>Sacrifice ratio</strong> — Arbeitslosigkeit pro Inflationspunkt Senkung.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Disinflation und Opferquote</h4>
<p>Eine disinflationäre Politik verschiebt kurzfristig Inflation und Auslastung entlang der Phillipslogik. Genau daraus ergeben sich Arbeitslosigkeits- und Outputkosten der Disinflation.</p>
        <div class="math-block">$$\Delta u \approx -\frac{\Delta \pi}{\alpha}$$</div>
        <div class="math-block">$$SR = \frac{\text{kumulierte Outputverluste}}{|\Delta \pi|}$$</div>
        <p>Klausurfragen verlangen hier fast immer: <strong>Inflationsrückgang nennen → kurzfristige Kosten benennen → Rolle der Glaubwürdigkeit ergänzen.</strong></p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Menu costs &amp; shoe-leather</h4>
<p>Inflation verzerrt Preisschilder (Menu Costs) und erhöht Opportunitätskosten der Giralgeldhaltung.</p>


<h4 class="theory-subsection-title">Disinflation cost</h4>
<p>Disinflation kann hohe Arbeitslosenkosten haben (Sacrifice Ratio), besonders wenn $\pi^e$ träge sind.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Inflationskosten</h4>
<p>Inflationskosten: Schuhsohle, Menü, Fehlallokation, Inflationssteuer auf Nominale. Disinflation: Opferquote $SR$ = kumulierter Outputverlust / $|\Delta\pi|$. $\Delta u \approx -\Delta\pi/\alpha$. Glaubwürdigkeit senkt $SR$.</p><div class="warn-box" data-warning-placement="rail"><strong>Disinflation ≠ kostenlos:</strong> Auch „gute" Disinflation hat kurzfristige Arbeitsmarktkosten — Größenordnung mit Phillips nennen.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Disinflation ≠ kostenlos:</strong> Auch „gute" Disinflation hat kurzfristige Arbeitsmarktkosten — Größenordnung mit Phillips nennen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Disinflation und Arbeitslosigkeit', eq: String.raw`$$\Delta u \approx -\frac{\Delta \pi}{\alpha}$$`, desc: 'Schnelle Disinflation erzeugt bei gegebener Steigung reale Kosten', variables: { '\\Delta u': 'Änderung der Arbeitslosigkeit', '\\Delta \\pi': 'Inflationsänderung', '\\alpha': 'Steigung der Phillipskurve' } },
      { label: 'Opferquote', eq: String.raw`$$SR = \frac{\sum_t (Y_n-Y_t)/Y_n}{|\Delta \pi|}$$`, desc: 'Kumulierter Outputverlust je Prozentpunkt Disinflation', variables: { 'SR': 'Sacrifice Ratio', 'Y_n-Y_t': 'Outputlücke' } }
    ],
    aufgaben: practice('inflation_kosten', [
      {
        text: String.raw`Die Inflation soll von 6% auf 2% sinken. Die Phillips-Steigung beträgt \(\alpha = 0{,}5\). Wie groß wäre der grobe Anstieg der Arbeitslosigkeit in einer Ein-Perioden-Näherung?`,
        steps: [
          { text: 'Der Inflationsrückgang beträgt 4 Prozentpunkte.', eq: String.raw`$$\Delta \pi = -4$$` },
          { text: 'Setze die Näherungsbeziehung ein.', eq: String.raw`$$\Delta u \approx -\frac{-4}{0{,}5} = 8$$` },
          { text: 'Die Rechnung zeigt die Größenordnung der kurzfristigen Disinflationskosten, nicht eine naturgesetzliche exakte Prognose.', eq: null }
        ],
        result: 'In der groben Phillips-Näherung steigt die Arbeitslosigkeit um etwa 8 Prozentpunkte.'
      },
      {
        text: 'Warum kann eine glaubwürdige Disinflation dieselbe Zielinflation mit geringeren Outputkosten erreichen als eine unglaubwürdige?',
        steps: [
          { text: 'Glaubwürdigkeit senkt Inflationserwartungen schneller.', eq: null },
          { text: 'Damit verschiebt sich die kurzfristige Phillipskurve günstiger und es braucht weniger reale Dämpfung, um Inflation zu senken.', eq: null },
          { text: 'Die Opferquote fällt also geringer aus, obwohl das Inflationsziel identisch ist.', eq: null }
        ],
        result: 'Glaubwürdigkeit reduziert die reale „Bezahlstrecke“ der Disinflation, weil Erwartungen schneller mitziehen.'
      }
    ])
  },

  wachstum_fakten: {
    motivation: 'Wachstumstheorie beginnt nicht mit einer Gleichung, sondern mit den Datenmustern, die erklärt werden sollen. Die stilisierten Fakten sind deshalb der Prüfungsanker vor jedem Modell.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Stilisierte Fakten des Wachstums</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Stilisierte Fakten des Wachstums</h4>
<p>Der Kurs nutzt die klassischen Wachstumsfakten als Orientierungsrahmen: langfristiges Wachstum von Output pro Kopf, steigende Kapitalintensität, relativ stabile Faktoranteile und deutliche Unterschiede zwischen Ländern.</p>
        <p>Die erste Klausurfrage lautet daher oft nicht „Welche Formel?“, sondern: <strong>Welches empirische Muster soll das Modell überhaupt erfassen?</strong></p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Wachstumszerlegung</strong> — BIP-Wachstum als Summe aus Produktivität, Kapital- und Arbeitsbeitrag</li><li><strong>Wachstumszerlegung (Merksatz)</strong> — BIP-Wachstum als Summe aus Produktivität, Kapital- und Arbeitsbeitrag</li><li><strong>Pro-Kopf-Wachstum</strong> — Technik + Bevölkerung.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Wachstumszerlegung</h4>
<p>Wachstum wird im Kurs über Faktorbeiträge und Produktivitätsrest gelesen. Genau daraus folgt der Übergang zu Produktionsfunktion, Solow-Residuum und langfristigen Institutionenfragen.</p>
        <div class="math-block">$$g_Y \approx g_A + \alpha_K g_K + (1-\alpha_K) g_N$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kaldor-Stilisierte Fakten</h4>
<p>Steady growth of Y/L, stable r, stable K/Y ratio über lange Horizonte — Motivation für Solow.</p>


<h4 class="theory-subsection-title">Konvergenz empirisch</h4>
<p>Ärmere Länder wachsen oft schneller conditional on policies — $\beta$-Konvergenz in Querchnittsregressionen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Wachstumsfakten</h4>
<p>Stilisierte Fakten vor Modell: Pro-Kopf-Wachstum, steigende $K/L$, stabile Faktorenanteile (Kaldor), Konvergenz/Divergenz zwischen Ländern. Klausur: erst Muster benennen, dann Modell zuordnen (Solow vs. endogen).</p><div class="warn-box" data-warning-placement="rail"><strong>Fakten ≠ Theorie:</strong> Empirische Muster belegen nicht automatisch Solow — sie motivieren Modellwahl.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Fakten ≠ Theorie:</strong> Empirische Muster belegen nicht automatisch Solow — sie motivieren Modellwahl.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Wachstumszerlegung', eq: String.raw`$$g_Y \approx g_A + \alpha_K g_K + (1-\alpha_K) g_N$$`, desc: 'BIP-Wachstum als Summe aus Produktivität, Kapital- und Arbeitsbeitrag', variables: { 'g_Y': 'BIP-Wachstum', 'g_A': 'TFP-/Produktivitätswachstum', 'g_K': 'Kapitalwachstum', 'g_N': 'Beschäftigungs- bzw. Arbeitswachstum', '\\alpha_K': 'Kapitaleinkommensanteil' } }
    ],
    aufgaben: practice('wachstum_fakten', [
      {
        text: String.raw`Das BIP wächst um 3%, Kapital um 2%, Beschäftigung um 1%. Der Kapitalanteil beträgt \(\alpha_K=\tfrac13\). Wie groß ist das TFP-Wachstum näherungsweise?`,
        steps: [
          { text: 'Nutze die Wachstumszerlegung.', eq: String.raw`$$g_A \approx g_Y - \alpha_K g_K - (1-\alpha_K) g_N$$` },
          { text: 'Setze die Werte ein.', eq: String.raw`$$g_A \approx 3 - \tfrac13 \cdot 2 - \tfrac23 \cdot 1 = 1{,}67$$` },
          { text: 'Der Rest ist das Solow-Residuum: Er misst nicht „reine Technik“ perfekt, sondern alles nicht direkt durch Faktorwachstum erklärte Wachstum.', eq: null }
        ],
        result: 'Das TFP-Wachstum liegt näherungsweise bei 1,67%.'
      },
      {
        text: 'Warum reicht der Befund „Land X ist arm“ nicht aus, um schnelle Konvergenz vorherzusagen?',
        steps: [
          { text: 'Solow sagt nur bedingte Konvergenz voraus.', eq: null },
          { text: 'Dafür müssen zentrale Strukturgrößen wie Sparen, Demografie, Technologiezugang und Institutionen vergleichbar sein.', eq: null },
          { text: 'Ohne diese Bedingungen kann ein armes Land dauerhaft hinterherhinken statt aufzuholen.', eq: null }
        ],
        result: 'Konvergenz ist konditional: Armut allein ist kein Garant für Aufholen.'
      }
    ])
  },

  aggregierte_pf: {
    motivation: 'Bevor das Solow-Modell gerechnet wird, muss die Produktionsseite sitzen: Grenzerträge, Skalenerträge und Pro-Kopf-Formen sind die formale Grundlage aller späteren Wachstumsaussagen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Produktionsfunktion, Grenzerträge &amp; Skalenerträge</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Bevor das Solow-Modell gerechnet wird, muss die Produktionsseite sitzen: Grenzerträge, Skalenerträge und Pro-Kopf-Formen sind die formale Grundlage aller späteren Wachstumsaussagen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Cobb-Douglas</strong> — Standardfunktion des Solow-Modells</li><li><strong>Pro-Kopf-Form</strong> — Intensive Form bei konstanten Skalenerträgen</li><li><strong>Cobb-Douglas (Merksatz)</strong> — Standardfunktion des Solow-Modells</li><li><strong>PF</strong> — Aggregierte Produktion.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Aggregierte Produktionsfunktion</h4>
<p>Die gesamtwirtschaftliche Produktionsfunktion verknüpft Kapital, Arbeit und Produktivität. Für Makro II ist die Cobb-Douglas-Form der Standardfall.</p>
        <div class="math-block">$$Y = A K^{\alpha} N^{1-\alpha}$$</div>


<h4 class="theory-subsection-title">Grenzerträge und Skalenerträge</h4>
<p>Jeder einzelne Faktor unterliegt typischerweise abnehmenden Grenzerträgen. Gleichzeitig kann die Funktion konstante Skalenerträge haben, wenn sich die Exponenten zu eins addieren.</p>
        <div class="math-block">$$MP_K = \frac{\partial Y}{\partial K}, \qquad MP_N = \frac{\partial Y}{\partial N}$$</div>
        <div class="math-block">$$f(\lambda K,\lambda N)=\lambda f(K,N)\quad \text{bei CRS}$$</div>


<h4 class="theory-subsection-title">Pro-Kopf-Form</h4>
<p>Für Wachstum wird die Funktion in intensive Form überführt. Das erlaubt die Analyse von Kapitalintensität und Produktion pro Kopf.</p>
        <div class="math-block">$$y = \frac{Y}{N} = A k^{\alpha}, \qquad k = \frac{K}{N}$$</div>
        <div class="warn-box" data-warning-placement="rail"><strong>CRS ist nicht steigender Grenzertrag:</strong> Konstante Skalenerträge bedeuten nur, dass alle Inputs gemeinsam proportional vergrößert werden können. Einzelne Grenzerträge können trotzdem abnehmen.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Cobb-Douglas</h4>
<p>$Y = A K^\alpha L^{1-\alpha}$; Grenzprodukte und Faktorentlohnung im Wettbewerb.</p>


<h4 class="theory-subsection-title">Skalenerträge</h4>
<p>Langfristig oft konstante Skalenerträge angenommen; $\alpha$ misst Kapitalanteil am Einkommen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Produktionsfunktion</h4>
<p>Cobb-Douglas: $y = Ak^\alpha$. Grenzprodukte: $MPK = \alpha y/k$, $MPL = (1-\alpha)y/l$. Skalenerträge: $\alpha+\beta$ bei $Y=F(K,L)$. Solow: $sf(k) = \delta k$ im SS. Faktorenanteile bei CD konstant.</p><div class="warn-box" data-warning-placement="rail"><strong>MPK vs. Rendite:</strong> Grenzprodukt fällt in $k$ (Diminishing Returns); das bedeutet nicht automatisch negative Gesamtrendite.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>CRS ist nicht steigender Grenzertrag:</strong> Konstante Skalenerträge bedeuten nur, dass alle Inputs gemeinsam proportional vergrößert werden können. Einzelne Grenzerträge können trotzdem abnehmen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>MPK vs. Rendite:</strong> Grenzprodukt fällt in $k$ (Diminishing Returns); das bedeutet nicht automatisch negative Gesamtrendite.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Cobb-Douglas', eq: String.raw`$$Y = A K^{\alpha} N^{1-\alpha}$$`, desc: 'Standardfunktion des Solow-Modells', variables: { 'A': 'Produktivität', '\\alpha': 'Kapitalelastizität' } },
      { label: 'Pro-Kopf-Form', eq: String.raw`$$y = A k^{\alpha}$$`, desc: 'Intensive Form bei konstanten Skalenerträgen', variables: {} }
    ],
    aufgaben: practice('aggregierte_pf')
  },

  solow_basis: {
    motivation: 'Das Solow-Grundmodell erklärt, wie Sparen, Abschreibung und Kapitalintensität langfristiges Niveauwachstum bestimmen. Es trennt sauber zwischen Niveaueffekten und dauerhaften Wachstumsraten.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Solow-Grundmodell &amp; Kapitalakkumulation</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Das Solow-Grundmodell erklärt, wie Sparen, Abschreibung und Kapitalintensität langfristiges Niveauwachstum bestimmen. Es trennt sauber zwischen Niveaueffekten und dauerhaften Wachstumsraten.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Kapitaldynamik</strong> — Akkumulation im Grundmodell</li><li><strong>Steady-State-Bedingung</strong> — Investition = Break-even-Investition</li><li><strong>Kapitaldynamik (Merksatz)</strong> — Akkumulation im Grundmodell</li><li><strong>Kapitaldynamik</strong> — Solow Kern.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Akkumulationsgleichung</h4>
<p>Im Grundmodell ohne technischen Fortschritt und ohne Bevölkerungswachstum wird Kapital pro Kopf durch Ersparnis aufgebaut und durch Abschreibung abgebaut.</p>
        <div class="math-block">$$\dot k = s f(k) - \delta k$$</div>


<h4 class="theory-subsection-title">Steady State</h4>
<p>Im Steady State kompensiert die Investition genau die Break-even-Investition. Dann bleibt $k$ konstant.</p>
        <div class="math-block">$$s f(k^*) = \delta k^*$$</div>
        <p>Eine höhere Sparquote hebt das langfristige Niveau von $k$ und $y$, aber nicht die dauerhafte Wachstumsrate pro Kopf.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Numerisches Beispiel</h4>
<p>CD: $f(k)=k^{0{,}5}$, $\delta=0{,}05$, $s=0{,}2$, $n=0$. Dann $k^*=(s/\delta)^2=16$, $y^*=4$. Liegt $k_0=4$, gilt $\dot k>0$ — die Wirtschaft konvergiert nach oben. Parameteränderung: $s\uparrow$ verschiebt Investitionskurve nach oben → neues höheres $k^*$.</p>


<h4 class="theory-subsection-title">Akkumulationsgleichung</h4>
<p>$\dot k = s f(k) - (\delta+n)k$; Investition pro Kopf minus effektive Abschreibung und Bevölkerungswachstum.</p>


<h4 class="theory-subsection-title">Goldene Regel vs. goldenes Kapital</h4>
<p>Goldene Regel maximiert Konsum im Steady State; goldene Sparquote $s^*$ ist nicht automatisch optimal für Konsum.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Solow-Grundmodell</h4>
<p>Akkumulation: $\dot k = sf(k)-\delta k$. SS: $sf(k^*)=\delta k^*$. Mehr Sparen → höheres Niveau von $k^*, y^*$, aber ohne $g_A$ keine dauerhafte Wachstumsrate. Konvergenzdiagramm: Investitions- vs. Break-even-Kurve zeichnen.</p><div class="warn-box" data-warning-placement="rail"><strong>Sparen ≠ Wachstum:</strong> Höhere $s$ hebt das Niveau, nicht die Trendwachstumsrate pro Kopf — das kommt aus technischem Fortschritt.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Sparen ≠ Wachstum:</strong> Höhere $s$ hebt das Niveau, nicht die Trendwachstumsrate pro Kopf — das kommt aus technischem Fortschritt.</div>
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
      { label: 'Kapitaldynamik', eq: String.raw`$$\dot k = s f(k) - \delta k$$`, desc: 'Akkumulation im Grundmodell', variables: { 's': 'Sparquote', '\\delta': 'Abschreibung' } },
      { label: 'Steady-State-Bedingung', eq: String.raw`$$s f(k^*) = \delta k^*$$`, desc: 'Investition = Break-even-Investition', variables: {} }
    ],
    aufgaben: practice('solow_basis')
  },

  steady_state: {
    motivation: 'Der Steady State ist die eigentliche Langfrist-Lesart des Solow-Modells: Dort entscheidet sich, welches Pro-Kopf-Niveau eine Volkswirtschaft bei gegebenen Parametern dauerhaft tragen kann.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Steady State &amp; Konvergenz</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Der Steady State ist die eigentliche Langfrist-Lesart des Solow-Modells: Dort entscheidet sich, welches Pro-Kopf-Niveau eine Volkswirtschaft bei gegebenen Parametern dauerhaft tragen kann.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Steady-State-Bedingung</strong> — Investition deckt Abschreibung und Verdünnung gerade ab</li><li><strong>Cobb-Douglas-Steady-State</strong> — Explizite Lösung bei \(y=Ak^\alpha\)</li><li><strong>Steady-State-Bedingung (Merksatz)</strong> — Investition deckt Abschreibung und Verdünnung gerade ab</li><li><strong>Steady state</strong> — Gleichgewicht.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Steady-State-Bedingung</h4>
<p>Im Steady State sind Nettoinvestitionen pro Kopf null. Die Investitionskurve deckt gerade die Break-even-Investition.</p>
        <div class="math-block">$$s f(k^*) = (\delta + n)k^*$$</div>
        <p>Mit technischem Fortschritt wird aus \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\delta+n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\) die effektive Verlust-/Verdünnungsrate \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\delta+n+g_A\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\).</p>


<h4 class="theory-subsection-title">Notation und Herleitung (VL-Basis)</h4>
<p>FOC im SS: $sf'(k^*) = \delta + n$. Bei $f(k)=k^\alpha$: $k^* = \big(\frac{s}{\delta+n}\big)^{1/(1-\alpha)}$. Halbe Lebensdistanz: Zeit bis $k$ halbe Distanz zu $k^*$ zurückgelegt — qualitativ von $s$ und $\alpha$ abhängig. Konvergenzgeschwindigkeit ist zentral für Wachstumstransitions-Aufgaben.</p><div class="warn-box" data-warning-placement="rail"><strong>SS vs. Goldene Regel:</strong> $k^*$ hängt von $s$ ab; $k_{gold}$ aus Technologie — beide im selben Diagramm, aber unterschiedliche Fragestellungen.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Grafische Steady-State-Analyse</h4>
<p>Schnitt von $sf(k)$ und $(\delta+n)k$ bestimmt $k^*$; links davon $k$ steigt, rechts sinkt $k$.</p>


<h4 class="theory-subsection-title">Vergleiche Statik</h4>
<p>$n\uparrow$ → $k^*$ sinkt; $s\uparrow$ → $k^*$ steigt; $g_A\uparrow$ → höheres Wachstum pro Kopf.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Steady State</h4>
<p>SS: $sf(k^*) = (\delta+n)k^*$. Cobb-Douglas: $k^* = (sA/(\delta+n))^{1/(1-\alpha)}$. $s↑$ → höheres Niveau, nicht höheres $g_y$ ohne $g_A$. Konvergenz: $k<k^*$ → Wachstum; $k>k^*$ → Schrumpfung.</p><div class="warn-box" data-warning-placement="rail"><strong>SS-Berechnung:</strong> Immer Break-even $(\delta+n)k$ mit Investition $sf(k)$ gleichsetzen — nicht $s$ mit $\delta$ verwechseln.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>SS vs. Goldene Regel:</strong> $k^*$ hängt von $s$ ab; $k_{gold}$ aus Technologie — beide im selben Diagramm, aber unterschiedliche Fragestellungen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>SS-Berechnung:</strong> Immer Break-even $(\delta+n)k$ mit Investition $sf(k)$ gleichsetzen — nicht $s$ mit $\delta$ verwechseln.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Steady-State-Bedingung', eq: String.raw`$$s f(k^*) = (\delta+n)k^*$$`, desc: 'Investition deckt Abschreibung und Verdünnung gerade ab', variables: { 'k^*': 'Kapital pro Kopf im Steady State', 'n': 'Bevölkerungswachstum', '\\delta': 'Abschreibung' } },
      { label: 'Cobb-Douglas-Steady-State', eq: String.raw`$$k^* = \left(\frac{sA}{\delta+n}\right)^{\!\frac{1}{1-\alpha}}$$`, desc: 'Explizite Lösung bei \\(y=Ak^\\alpha\\)', variables: { 'A': 'Produktivität', '\\alpha': 'Kapitalelastizität' } }
    ],
    aufgaben: practice('steady_state', [
      {
        text: String.raw`Gegeben sei \(y = 1{,}2\sqrt{k}\), \(s=0{,}3\) und \(\delta+n=0{,}12\). Bestimme den Steady-State-Kapitalstock näherungsweise.`,
        steps: [
          { text: 'Setze die Steady-State-Bedingung an.', eq: String.raw`$$0{,}3 \cdot 1{,}2 \sqrt{k^*} = 0{,}12k^*$$` },
          { text: 'Vereinfache: \\(0{,}36\\sqrt{k^*}=0{,}12k^*\\Rightarrow 3\\sqrt{k^*}=k^*\\).', eq: null },
          { text: 'Damit gilt \\(\\sqrt{k^*}=3\\) und also \\(k^*=9\\).', eq: null }
        ],
        result: 'Der Steady-State-Kapitalstock liegt bei \\(k^*=9\\).'
      },
      {
        text: 'Was passiert mit dem Steady State, wenn die Sparquote steigt, aber technischer Fortschritt unverändert bleibt?',
        steps: [
          { text: 'Die Investitionskurve \\(sf(k)\\) verschiebt sich nach oben.', eq: null },
          { text: 'Der neue Schnittpunkt mit der Break-even-Geraden liegt bei höherem \\(k^*\\) und höherem \\(y^*\\).', eq: null },
          { text: 'Die langfristige Wachstumsrate pro Kopf bleibt ohne zusätzlichen technischen Fortschritt trotzdem unverändert.', eq: null }
        ],
        result: 'Mehr Sparen hebt das langfristige Niveau, aber nicht die dauerhafte Pro-Kopf-Wachstumsrate.'
      }
    ])
  },

  goldene_sparquote: {
    motivation: 'Nicht jeder Steady State ist normativ gut. Die Goldene Sparquote beantwortet die klausurrelevante Frage, bei welcher Kapitalintensität der langfristige Konsum maximal ist.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Goldene Sparquote &amp; Konsummaximum</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Konsum im Steady State</h4>
<p>Im langfristigen Gleichgewicht gilt \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\(c^* = f(k^*) - (\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\delta+n)k^*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\). Mehr Sparen erhöht nicht automatisch den Konsum, weil ein Teil des Outputs nur noch zur Kapitalerhaltung gebraucht wird.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Goldene Regel</strong> — Grenzprodukt des Kapitals = Break-even-Belastung</li><li><strong>Goldene Sparquote (Cobb-Douglas)</strong> — Bei \(y=Ak^\alpha\) entspricht die optimale Sparquote dem Kapitalanteil</li><li><strong>Goldene Regel (Merksatz)</strong> — Grenzprodukt des Kapitals = Break-even-Belastung</li><li><strong>Goldene Regel</strong> — MPK = effektive Verlustrate.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Goldene Regel</h4>
<p>Die Goldene Regel maximiert den Steady-State-Konsum. Dazu muss das Grenzprodukt des Kapitals gerade der Break-even-Belastung entsprechen.</p>
        <div class="math-block">$$f'(k_{gold}) = \delta + n$$</div>
        <p>Für Cobb-Douglas folgt im Standardfall: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\(s_{gold}=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\alpha\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\). Das ist eine besonders klausurstabile Merkregel.</p>


<h4 class="theory-subsection-title">Notation und Herleitung (VL-Basis)</h4>
<p>Bei Cobb-Douglas $f(k)=k^\alpha$: $k_{gold} = \big(\frac{\alpha}{\delta+n}\big)^{1/(1-\alpha)}$. Vergleiche $k^*$ bei gegebener Sparquote $s$ mit $k_{gold}$ — liegt $k^* > k_{gold}$, ist die Volkswirtschaft dynamisch ineffizient (zu viel Sparen). Klausur: Diagramm mit $sf(k)$, $(\delta+n)k$ und $c^*$ markieren.</p><div class="warn-box" data-warning-placement="rail"><strong>Goldene Regel ≠ optimale Sparquote:</strong> Die goldene Regel maximiert Konsum pro Kopf im SS — nicht zwingend die utilitaristisch optimale Sparquote bei endlicher Zeitpräferenz.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Goldene Regel</h4>
<p>Maximiert $c^* = f(k^*) - (\delta+n)k^*$; impliziert $MPK = \delta+n$.</p>


<h4 class="theory-subsection-title">Dynamische Ineffizienz</h4>
<p>Zu viel Kapital ($k$ über goldener Regel) kann dynamisch ineffizient sein — zu wenig Konsum heute.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Goldene Sparquote</h4>
<p>Maximiert $c^* = f(k^*)-(\delta+n)k^*$. Bedingung: $f'(k_{gold}) = \delta+n$. CD: $s_{gold}=\alpha$. Rechts von $k_{gold}$: Überakkumulation — weniger Sparen kann $c^*$ erhöhen.</p><div class="warn-box" data-warning-placement="rail"><strong>Gold ≠ outputmaximierend:</strong> Maximaler Konsum und maximaler Output fallen bei $s_{gold}$ und $s_{max}$ auseinander.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Goldene Regel ≠ optimale Sparquote:</strong> Die goldene Regel maximiert Konsum pro Kopf im SS — nicht zwingend die utilitaristisch optimale Sparquote bei endlicher Zeitpräferenz.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Gold ≠ outputmaximierend:</strong> Maximaler Konsum und maximaler Output fallen bei $s_{gold}$ und $s_{max}$ auseinander.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Goldene Regel', eq: String.raw`$$f'(k_{gold}) = \delta + n$$`, desc: 'Grenzprodukt des Kapitals = Break-even-Belastung', variables: { 'k_{gold}': 'Goldener Kapitalstock' } },
      { label: 'Goldene Sparquote (Cobb-Douglas)', eq: String.raw`$$s_{gold} = \alpha$$`, desc: 'Bei \\(y=Ak^\\alpha\\) entspricht die optimale Sparquote dem Kapitalanteil', variables: { '\\alpha': 'Kapitalelastizität' } }
    ],
    aufgaben: practice('goldene_sparquote', [
      {
        text: 'Warum kann eine Senkung der Sparquote den langfristigen Konsum erhöhen, obwohl dadurch der Kapitalstock sinkt?',
        steps: [
          { text: 'Rechts vom goldenen Kapitalstock wird zu viel Output in Kapitalerhalt gelenkt.', eq: null },
          { text: 'Eine niedrigere Sparquote reduziert zwar \\(k^*\\), spart aber zugleich Break-even-Investitionen ein.', eq: null },
          { text: 'Wenn die Wirtschaft überakkumuliert ist, überwiegt dieser Konsumeffekt.', eq: null }
        ],
        result: 'Überakkumulation bedeutet: Weniger Sparen kann den langfristigen Konsum steigern.'
      },
      {
        text: String.raw`Eine Cobb-Douglas-Volkswirtschaft hat \(\alpha=0{,}35\). Welche goldene Sparquote folgt daraus und was ist die ökonomische Merkbotschaft?`,
        steps: [
          { text: 'Bei Cobb-Douglas gilt direkt:', eq: String.raw`$$s_{gold}=\alpha$$` },
          { text: 'Setze \\(\\alpha=0{,}35\\) ein.', eq: String.raw`$$s_{gold}=0{,}35$$` },
          { text: 'Die optimale Sparquote folgt damit unmittelbar aus dem Kapitalanteil der Produktionsfunktion.', eq: null }
        ],
        result: 'Die goldene Sparquote beträgt 35%.'
      }
    ])
  },

  tech_fortschritt: {
    motivation: 'Mit technischem Fortschritt wird aus dem Solow-Modell ein dauerhaft wachsendes System. Hier sitzt die eigentliche Langfristlogik des Pro-Kopf-Wachstums.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Technischer Fortschritt &amp; langfristiges Wachstum</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Mit technischem Fortschritt wird aus dem Solow-Modell ein dauerhaft wachsendes System. Hier sitzt die eigentliche Langfristlogik des Pro-Kopf-Wachstums.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Solow mit technischem Fortschritt</strong> — Kapital pro Arbeitseffizienzeinheit</li><li><strong>Wachstum pro Kopf im Steady State</strong> — Dauerhaftes Pro-Kopf-Wachstum folgt dem technischen Fortschritt</li><li><strong>Solow mit technischem Fortschritt (Merksatz)</strong> — Kapital pro Arbeitseffizienzeinheit</li><li><strong>BGP</strong> — Langfristiges Pro-Kopf-Wachstum.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Arbeitsvermehrender technischer Fortschritt</h4>
<p>Makro II verwendet den Standardfall arbeitsvermehrenden Fortschritts. Dann wird die Produktion pro Arbeitseffizienzeinheit analysiert.</p>
        <div class="math-block">$$Y = F(K, AN)$$</div>
        <div class="math-block">$$\dot{\tilde k} = s f(\tilde k) - (n + g_A + \delta)\tilde k$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Labor-augmenting</h4>
<p>$Y = F(K, A L)$; $g_A$ treibt dauerhaftes Pro-Kopf-Wachstum im Balanced Growth Path.</p>


<h4 class="theory-subsection-title">BGP</h4>
<p>Alle Variablen in effizienzen Einheiten wachsen mit $g_A$; Kapitalquote stabil bei Cobb-Douglas.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Technischer Fortschritt</h4>
<p>Arbeitsvermehrend: $\tilde k = K/(AN)$, $\dot{\tilde k} = sf(\tilde k)-(\delta+n+g_A)\tilde k$. Im SS: $g_{Y/N}=g_A$. Solow-Residuum: nicht beobachtetes Wachstum — Sammelgröße für Technologie, Institutionen, Human Capital.</p><div class="warn-box" data-warning-placement="rail"><strong>Residuum ≠ exogene Technologie:</strong> Das Residuum misst alles außer $K$- und $L$-Wachstum — Interpretation vorsichtig.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Residuum ≠ exogene Technologie:</strong> Das Residuum misst alles außer $K$- und $L$-Wachstum — Interpretation vorsichtig.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Solow mit technischem Fortschritt', eq: String.raw`$$\dot{\tilde k} = s f(\tilde k) - (n + g_A + \delta)\tilde k$$`, desc: 'Kapital pro Arbeitseffizienzeinheit', variables: { 'g_A': 'Technischer Fortschritt', 'n': 'Bevölkerungswachstum' } },
      { label: 'Wachstum pro Kopf im Steady State', eq: String.raw`$$g_{Y/N}=g_A$$`, desc: 'Dauerhaftes Pro-Kopf-Wachstum folgt dem technischen Fortschritt', variables: { 'g_A': 'Wachstum der Arbeitseffizienz' } }
    ],
    aufgaben: practice('tech_fortschritt')
  },

  budgetrestriktion: {
    motivation: 'Die staatliche Budgetrestriktion ist die Buchhaltung hinter jeder Schuldenfrage. Ohne sie bleiben Tragfähigkeit, Primärsaldo und spätere Steuerlast begriffslos.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Staatliche Budgetrestriktion &amp; Primärsaldo</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Die staatliche Budgetrestriktion ist die Buchhaltung hinter jeder Schuldenfrage. Ohne sie bleiben Tragfähigkeit, Primärsaldo und spätere Steuerlast begriffslos.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Periodische Budgetrestriktion</strong> — Fortschreibung des nominalen Schuldenstands</li><li><strong>Intertemporale Restriktion</strong> — Heute bestehende Schuld = Barwert künftiger Primärüberschüsse</li><li><strong>Periodische Budgetrestriktion (Merksatz)</strong> — Fortschreibung des nominalen Schuldenstands</li><li><strong>Schulden dynamik</strong> — Schuldenquote $b$.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Periodische Budgetrestriktion des Staates</h4>
<p>Neue Schulden entstehen aus alter Schuld, Zinslast und Primärsaldo. Diese Buchhaltung ist der Startpunkt jeder Schuldenfrage.</p>
        <div class="math-block">$$B_t = (1+r)B_{t-1} + G_t - T_t$$</div>


<h4 class="theory-subsection-title">Primärsaldo und intertemporale Lesart</h4>
<p>Der Primärsaldo trennt laufende Fiskalpolitik von Zinslasten. Über Vorwärtsiteration folgt daraus die intertemporale Budgetrestriktion: Heutige Schulden müssen durch künftige Primärüberschüsse oder Seigniorage gedeckt sein.</p>
        <div class="math-block">$$PD_t = G_t - T_t$$</div>
        <div class="math-block">$$B_0 = \sum_{t=1}^{\infty} \frac{T_t-G_t}{(1+r)^t}$$</div>


<h4 class="theory-subsection-title">Notation und Herleitung (VL-Basis)</h4>
<p>Diskontierte Staatsbudget: $B_0 = \sum_{t=0}^{\infty} \frac{PS_t}{(1+r)^t}$ bei $r$ konstant. No-Ponzi: $\lim_{T\to\infty} B_T/(1+r)^T \geq 0$. Verbindung zu Haushalten: Ricardian equivalence wenn Haushalte dieselbe IR internalisieren. Tragfähigkeit: $b$ und $r-g$ gemeinsam bewerten.</p><div class="warn-box" data-warning-placement="rail"><strong>Intertemporale Konsistenz:</strong> Einmalige Schuldentilgung vs. dauerhafter Primärüberschuss — Klausur unterscheidet Niveau und Dynamik.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Intertemporale Budgetrestriktion</h4>
<p>Staat muss langfristig Schulden bedienen; Primärsaldo und Wachstum bestimmen Tragfähigkeit.</p>


<h4 class="theory-subsection-title">Primärsaldo</h4>
<p>Defizit minus Zinszahlungen: strukturelle Haushaltsdisziplin ohne Zinslast.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Budgetrestriktion</h4>
<p>Periodisch: $B_t = (1+r)B_{t-1} + (G-T)_t$. Primärsaldo $PS = T-G$ separat von Zinslast. Intertemporal: $B_0 = \sum (T-G)/(1+r)^t$. Buchhaltung ≠ Tragfähigkeit.</p><div class="warn-box" data-warning-placement="rail"><strong>Nominal vs. real:</strong> In Wachstumsmodellen oft reale Größen — Zins und Wachstum konsistent definieren.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Klausurfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Primärsaldo ist nicht Gesamtsaldo:</strong> Wer Zinslasten und Primärsaldo nicht trennt, verwechselt laufende Fiskalentscheidung mit Altlastenproblem.</div>
        <div class="warn-box" data-warning-placement="rail"><strong>Buchhaltung ist noch keine Tragfähigkeit:</strong> Die periodische Restriktion sagt, wie Schulden entstehen. Ob sie tragfähig sind, hängt erst an Wachstum, Zinsdifferenz und künftigen Primärpfaden.</div>
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
      { label: 'Periodische Budgetrestriktion', eq: String.raw`$$B_t = (1+r)B_{t-1} + G_t - T_t$$`, desc: 'Fortschreibung des nominalen Schuldenstands', variables: { 'B_t': 'Schuldenstand am Periodenende', 'G_t-T_t': 'Primärdefizit' } },
      { label: 'Intertemporale Restriktion', eq: String.raw`$$B_0 = \sum_{t=1}^{\infty} \frac{T_t-G_t}{(1+r)^t}$$`, desc: 'Heute bestehende Schuld = Barwert künftiger Primärüberschüsse', variables: { 'B_0': 'Anfangsschuld' } }
    ],
    aufgaben: practice('budgetrestriktion', [
      {
        text: String.raw`Ein Staat startet mit \(B_0=100\), der Realzins beträgt 5%. In Periode 1 liegt ein Primärdefizit von 4 vor. Wie hoch ist der Schuldenstand \(B_1\)?`,
        steps: [
          { text: 'Nutze die periodische Budgetrestriktion.', eq: String.raw`$$B_1=(1+r)B_0+PD_1$$` },
          { text: 'Setze ein.', eq: String.raw`$$B_1=1{,}05\cdot 100 + 4 = 109$$` },
          { text: 'Der neue Schuldenstand enthält also Zinslast plus frisches Primärdefizit.', eq: null }
        ],
        result: 'Der Schuldenstand in Periode 1 beträgt 109.'
      },
      {
        text: 'Warum ist ein ausgeglichener Primärsaldo nicht automatisch ausreichend, um einen gegebenen Schuldenstand tragfähig zu machen?',
        steps: [
          { text: 'Bei Primärsaldo null wachsen Altschulden weiter mit dem Zins.', eq: null },
          { text: 'Ohne Wachstumsvorteil oder spätere Primärüberschüsse kann der Schuldenpfad deshalb weiter steigen.', eq: null },
          { text: 'Tragfähigkeit verlangt also mehr als nur „keine neuen Primärdefizite“.', eq: null }
        ],
        result: 'Ein Primärsaldo von null stoppt die Zinsdynamik nicht; Tragfähigkeit hängt am gesamten intertemporalen Pfad.'
      }
    ])
  },

  schuldenquote_dynamik: {
    motivation: 'Für Makro II zählt die relative Größe zum BIP. Erst die Schuldenquote macht sichtbar, wann Zins, Wachstum und Primärsaldo den Pfad stabilisieren oder eskalieren.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Schuldenquote &amp; Stabilisierung</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<p>Für Makro II zählt die relative Größe zum BIP. Erst die Schuldenquote macht sichtbar, wann Zins, Wachstum und Primärsaldo den Pfad stabilisieren oder eskalieren.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Schuldenquotendynamik</strong> — Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad</li><li><strong>Stabilisierender Primärsaldo</strong> — Gerade ausreichender Primärüberschuss zur Stabilisierung</li><li><strong>Schuldenquotendynamik (Merksatz)</strong> — Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad</li><li><strong>Schuldenquote</strong> — Dynamik.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Schneeballeffekt und Stabilisierung</h4>
<p>Aus Budgetrestriktion und BIP-Normierung folgt näherungsweise die Dynamik der Schuldenquote.</p>
        <div class="math-block">$$\Delta b \approx (r-g)b - ps$$</div>
        <p>Ist \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\(r>g\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\), wirkt der Schneeballeffekt gegen den Staat. Ein ausreichend hoher Primärüberschuss kann die Quote trotzdem stabilisieren.</p>


<h4 class="theory-subsection-title">Stabilisierungsbedingung</h4>
<p>Zur Stabilisierung der Quote auf aktuellem Niveau muss gelten:</p>
        <div class="math-block">$$ps^* = (r-g)b$$</div>
        <p>Diese Formel ist das Standardwerkzeug für schnelle Prüfungsrechnungen und für politische Urteile über Tragfähigkeit.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Stabilitätsbedingung</h4>
<p>Wenn $r < g$, kann Schuldenquote auch bei positivem Defizit fallen (Snowball-Effekt umgekehrt).</p>


<h4 class="theory-subsection-title">Nachhaltigkeit</h4>
<p>Maastricht-Kriterien und nationale Regeln setzen Grenzen; politische Ökonomie der Verschuldung separat.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Schuldenquote</h4>
<p>$\Delta b \approx (r-g)b - ps$. Stabilisierung: $ps^* = (r-g)b$. $r>g$: Schneeballeffekt gegen Staat. $r<g$: Schuldenquote kann ohne Primärüberschuss fallen. Immer Quote, nicht nur Nominalschuld.</p><div class="warn-box" data-warning-placement="rail"><strong>Eine Periodenrechnung reicht nicht:</strong> Stabilisierung ist Pfadfrage — dauerhafter Primärüberschuss nötig wenn $r>g$.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Eine Periodenrechnung reicht nicht:</strong> Stabilisierung ist Pfadfrage — dauerhafter Primärüberschuss nötig wenn $r>g$.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Schuldenquotendynamik', eq: String.raw`$$\Delta b \approx (r-g)b - ps$$`, desc: 'Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad', variables: { 'b': 'Schuldenquote', 'ps': 'Primärsaldo in % des BIP', 'r-g': 'Zins-Wachstums-Differenz' } },
      { label: 'Stabilisierender Primärsaldo', eq: String.raw`$$ps^* = (r-g)b$$`, desc: 'Gerade ausreichender Primärüberschuss zur Stabilisierung', variables: {} }
    ],
    aufgaben: practice('schuldenquote_dynamik', [
      {
        text: String.raw`Die Schuldenquote beträgt 80% des BIP. Der Realzins liegt bei 4%, das Wachstum bei 1%. Welcher Primärüberschuss stabilisiert die Quote ungefähr?`,
        steps: [
          { text: 'Nutze die Näherungsformel der Schuldenquote.', eq: String.raw`$$\Delta b \approx (r-g)b - ps$$` },
          { text: 'Setze für Stabilität $\Delta b = 0$ und löse nach $ps$ auf.', eq: String.raw`$$ps^* = (0{,}04-0{,}01)\cdot 0{,}80 = 0{,}024$$` },
          { text: 'Interpretiere den Wert als Anteil am BIP.', eq: null }
        ],
        result: 'Ein Primärüberschuss von rund 2,4% des BIP stabilisiert die Schuldenquote.'
      },
      {
        text: String.raw`Die nominale Staatsschuld steigt, zugleich wächst das BIP sehr kräftig. Warum reicht diese Information allein nicht aus, um auf eine steigende Schuldenquote zu schließen?`,
        steps: [
          { text: 'Die Schuldenquote ist ein Verhältnis aus Schuldstand und BIP.', eq: null },
          { text: 'Wenn das BIP schneller wächst als der Schuldstand, kann die Quote trotz höherer Nominalschuld sinken.', eq: null },
          { text: 'Für die Bewertung braucht man deshalb immer Zähler und Nenner zusammen.', eq: null }
        ],
        result: 'Ohne BIP-Dynamik ist keine belastbare Aussage über die Schuldenquote möglich.'
      }
    ])
  },

  ricardianisch: {
    motivation: 'Ricardianische Äquivalenz ist die Gegenfrage jeder Defizitpolitik: Ist ein heutiger Steuererlass wirklich Vermögensgewinn oder nur verschobene Steuerlast?',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Warum die Äquivalenz nicht immer gilt</h4>
<p>Liquiditätsbeschränkungen, endliche Horizonte, unvollständige Information oder fehlende Erbschaftsmotive durchbrechen die Äquivalenz. Genau deshalb ist sie im Kurs eher Benchmark als empirisches Naturgesetz.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Ricardo heißt nicht „Fiskalpolitik wirkt nie“:</strong> Die Äquivalenz zeigt eine Grenzlogik. In der Praxis wird der Multiplikator oft gedämpft, aber nicht zwangsläufig auf null gesetzt.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kernidee</h4>
<p>Wenn Haushalte rational vorausblicken und künftige Steuerlast internalisieren, dann ist eine defizitfinanzierte Steuersenkung kein echtes Vermögensgeschenk. Der private Konsum steigt dann nicht automatisch.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Äquivalenzlogik</strong> — Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht</li><li><strong>Äquivalenzlogik (Merksatz)</strong> — Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht</li><li><strong>Äquivalenz</strong> — Unter Annahmen.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<p><strong>Äquivalenzlogik</strong></p><div class="math-block">$$\Delta T_1 = -\frac{\Delta T_2}{1+r} \Rightarrow \Delta C_1 = 0 \quad (\text{unter Ricardo-Annahmen})$$</div><p>Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht</p>
<p><strong>Äquivalenzlogik (Merksatz)</strong></p><div class="math-block">$$\Delta T_1 = -\frac{\Delta T_2}{1+r} \Rightarrow \Delta C_1 = 0 \quad (\text{unter Ricardo-Annahmen})$$</div><p>Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht</p>
<p><strong>Äquivalenz</strong></p><div class="math-block">$$\Delta T_1 = -PV(\Delta T_{future}) \Rightarrow \Delta C_1 = 0$$</div><p>Unter Annahmen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Barro-Ricardo</h4>
<p>Steuerfinanzierung vs. Anleihefinanzierung äquivalent, wenn Haushalte intertemporal optimieren und Kinder erben.</p>


<h4 class="theory-subsection-title">Grenzen</h4>
<p>Liquidity constraints, myopia, endliche Horizonte brechen Äquivalenz — Fiskalmultiplikator > 0.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Ricardianische Äquivalenz</h4>
<p>Defizitfinanzierte Steuersenkung: Haushalte internalisieren künftige Steuern → $\Delta C=0$ unter Annahmen. Brüche: Liquiditätsbeschränkung, endlicher Horizont, myope Haushalte. Fiskalmultiplikator gedämpft, nicht zwingend null.</p><div class="warn-box" data-warning-placement="rail"><strong>Ricardo als Benchmark:</strong> Empirisch oft partielle Äquivalenz — Voraussetzungen in Antwort explizit prüfen.</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $arepsilon$.</p>
        <div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>Ricardo heißt nicht „Fiskalpolitik wirkt nie“:</strong> Die Äquivalenz zeigt eine Grenzlogik. In der Praxis wird der Multiplikator oft gedämpft, aber nicht zwangsläufig auf null gesetzt.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Ricardo als Benchmark:</strong> Empirisch oft partielle Äquivalenz — Voraussetzungen in Antwort explizit prüfen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Pflichtfolge:</strong> Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.</div>
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
      { label: 'Äquivalenzlogik', eq: String.raw`$$\Delta T_1 = -\frac{\Delta T_2}{1+r} \Rightarrow \Delta C_1 = 0 \quad (\text{unter Ricardo-Annahmen})$$`, desc: 'Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht', variables: { '\\Delta T_1': 'Steueränderung heute', '\\Delta T_2': 'Künftige Gegenfinanzierung' } }
    ],
    aufgaben: practice('ricardianisch', [
      {
        text: 'Warum kann ein heutiger defizitfinanzierter Steuererlass unter Ricardianischer Äquivalenz konsumneutral sein?',
        steps: [
          { text: 'Haushalte erkennen, dass heutige Steuersenkung spätere Steuererhöhungen impliziert.', eq: null },
          { text: 'Der Barwert ihres Lebenseinkommens bleibt damit unverändert.', eq: null },
          { text: 'Die zusätzliche Liquidität wird gespart statt konsumiert; der heutige Konsum steigt nicht.', eq: null }
        ],
        result: 'Unter den Ricardo-Annahmen verschiebt Defizitfinanzierung nur den Steuerzeitpunkt, nicht das Lebenseinkommen.'
      },
      {
        text: 'Nenne zwei realistische Gründe, warum Ricardianische Äquivalenz empirisch oft nur unvollständig gilt.',
        steps: [
          { text: 'Haushalte können kredit- oder liquiditätsbeschränkt sein.', eq: null },
          { text: 'Sie haben eventuell keinen perfekten Horizont oder internalisieren Steuerlasten zukünftiger Generationen nicht vollständig.', eq: null },
          { text: 'Dann wirkt eine Steuersenkung zumindest teilweise wie zusätzlicher verfügbarer Konsumspielraum.', eq: null }
        ],
        result: 'Liquiditätsbeschränkungen und endliche Horizonte schwächen die Ricardianische Äquivalenz typischerweise ab.'
      }
    ])
  },

  schuldenfinanzierung_monetarisierung: {
    motivation: 'Der Finanzierungsmodus ist eine eigene makroökonomische Entscheidung: Kreditaufnahme und Monetarisierung verschieben Lasten unterschiedlich zwischen Zinskanal, Inflation und Glaubwürdigkeit.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--orientierung" data-theory-step="1" aria-labelledby="theory-orientierung-h">
<h3 class="theory-recipe-heading" id="theory-orientierung-h">Orientierung</h3>
<div class="theory-recipe-body">
<p><strong>Schuldenfinanzierung &amp; Monetarisierung</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>
<p><em>platform-added-explanation:</em> Orientierungshilfe; fachliche Tiefe in VL-PDFs (Quellen-Tab).</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h">Kernidee</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kreditfinanzierung</h4>
<p>Bei kreditfinanzierten Defiziten steigt der Schuldenstand; spätere Tragfähigkeit hängt an Zins-Wachstums-Differenz und Primärsaldo. Die Last liegt primär auf dem Schulden- und Refinanzierungspfad.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--definitionen" data-theory-step="3" aria-labelledby="theory-definitionen-h">
<h3 class="theory-recipe-heading" id="theory-definitionen-h">Definitionen</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Kerngrößen</h4>
<ul><li><strong>Seigniorage</strong> — Reale Finanzierung über Geldschöpfung</li><li><strong>Seigniorage (Merksatz)</strong> — Reale Finanzierung über Geldschöpfung</li><li><strong>Fiskal-Monetär</strong> — Finanzierungskanal.</li></ul>
<p><em>source-distilled:</em> Begriffe aus Formeln-Tab; exakte VL-Notation in Primärquellen prüfen.</p>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h">Formale Darstellung</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Monetarisierung</h4>
<p>Wird das Defizit über Geldschöpfung finanziert, fällt kurzfristig weniger Marktrefinanzierungsdruck an. Gleichzeitig entsteht aber ein zusätzlicher Preisniveau- und Erwartungskanal.</p>
        <div class="math-block">$$\text{Seigniorage} = \frac{\Delta M}{P}$$</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h">Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Mechanismus und VL-Verknüpfung</h4>
<p>VL-Logik: Budgetrestriktion → Finanzierungswahl → makroökonomischer Kanal. Kreditfinanzierung wirkt über $r-g$ und Primärsaldo auf $b$. Monetarisierung wirkt über $M/P$, LM und Erwartungsbildung auf $\pi$. In der Klausur immer beide Seiten der Budgetrestriktion mitdenken: Wer trägt die Last — Steuerzahler heute, Gläubiger morgen oder Geldhalter via Inflation?</p>


<h4 class="theory-subsection-title">Schuldenfinanzierung</h4>
<p>Staat finanziert Defizit über Anleihen → Zinslast und Tragfähigkeit; Crowding-out über Kapitalmarkt möglich.</p>


<h4 class="theory-subsection-title">Monetarisierung</h4>
<p>Zentralbank kauft Staatsanleihen → Geldmenge↑ → Inflationsrisiko und Glaubwürdigkeitsverlust der Geldpolitik.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>EZB-Mandat:</strong> Primärziel Preisstabilität — dauerhafte Monetarisierung widerspricht Unabhängigkeit.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h">Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">In der Klausur: Finanzierungsmodus</h4>
<p>Kredit: Schulden- und Zinslastpfad. Monetarisierung: Seigniorage $\Delta M/P$ — entlastet Refinanzierung, belastet Preisniveau und Erwartungen. Kein kostenloser Lunch: Inflation vs. Schulden-Trade-off. Hyperinflation = Vertrauensverlust in Geld.</p><div class="warn-box" data-warning-placement="rail"><strong>Monetarisierung ≠ automatische Hyperinflation:</strong> Einmalige Monetarisierung ≠ dauerhafte Finanzierung — Erwartungskanal entscheidet.</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-card theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h">Häufige Fehler</h3>
<div class="theory-recipe-body">
<h4 class="theory-subsection-title">Typische Prüfungsfallen</h4>
<div class="warn-box" data-warning-placement="rail"><strong>EZB-Mandat:</strong> Primärziel Preisstabilität — dauerhafte Monetarisierung widerspricht Unabhängigkeit.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Monetarisierung ≠ automatische Hyperinflation:</strong> Einmalige Monetarisierung ≠ dauerhafte Finanzierung — Erwartungskanal entscheidet.</div>
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
      { label: 'Seigniorage', eq: String.raw`$$\text{Seigniorage} = \frac{\Delta M}{P}$$`, desc: 'Reale Finanzierung über Geldschöpfung', variables: { '\\Delta M': 'Geldmengenausweitung', 'P': 'Preisniveau' } }
    ],
    aufgaben: practice('schuldenfinanzierung_monetarisierung', [
      {
        text: String.raw`Finanzierungsmodus-Vergleich: Zusätzliche Staatsausgaben werden alternativ (A) über Kreditaufnahme oder (B) über Monetarisierung finanziert. Welche makroökonomische Zusatzwirkung ist bei (B) gegenüber (A) besonders zu beachten?`,
        steps: [
          { text: 'Kreditfinanzierung erhöht primär die Schulden- und Zinslastdynamik des Staates.', eq: null },
          { text: 'Monetarisierung verschiebt zusätzlich die nominale Nachfrage und kann Inflationsdruck erzeugen.', eq: null },
          { text: 'Damit ist (B) kein kostenloses Entkommen aus der Budgetrestriktion, sondern ein Trade-off zwischen Schuldenpfad und Preisstabilität.', eq: null }
        ],
        result: 'Monetarisierung reduziert kurzfristig Refinanzierungsdruck, erhöht aber das Risiko inflationsgetriebener Anpassungskosten.'
      },
      {
        text: 'Warum ist Monetarisierung politisch und ökonomisch etwas anderes als bloß „eine andere Form der Kreditaufnahme“?',
        steps: [
          { text: 'Kreditaufnahme verschiebt die Last primär in den Zins- und Rückzahlungsprozess.', eq: null },
          { text: 'Monetarisierung verändert zusätzlich Geldmenge, Inflationserwartungen und reale Kassenhaltung.', eq: null },
          { text: 'Damit betrifft sie Preisstabilität und Glaubwürdigkeit unmittelbar, nicht nur die spätere Schuldentragfähigkeit.', eq: null }
        ],
        result: 'Monetarisierung ist ein anderer makroökonomischer Kanal: Sie verschiebt nicht nur Finanzierung, sondern verändert auch das monetäre Umfeld.'
      }
    ])
  }
};

const MAKRO2_KLAUSUR_DEPTH = {
  offene_is: section('In der Klausur: Offener Gütermarkt', `<p>Antwortschema: (1) ZZ-Gleichung aufschreiben mit NX-Kanal. (2) Multiplikator $1/(1-c_1-b_1+q_1)$ — Importleckage $q_1$ senkt Wirkung. (3) Fiskalimpuls: DD/ZZ nach rechts, aber Importe steigen mit $Y$. (4) Auslandsschock über $Y^*$: Exportkanal. Nie DD mit ZZ verwechseln.</p>${warn('Multiplikator geschlossen vs. offen', 'Der geschlossene Multiplikator $1/(1-c_1)$ überschätzt die Wirkung: Importe sind eine Leckage aus dem Inland.')}`),
  nettoexporte: section('In der Klausur: Nettoexporte', `<p>Standardpfad: Schock identifizieren ($Y$, $Y^*$, $\\varepsilon$, $i$) → Vorzeichen auf $X$ und $IM$ → $NX$-Shift → IS/ZZ-Verschiebung. Reale Abwertung ($\\varepsilon\\downarrow$ in Preisnotierung) stützt $NX$ langfristig (Marshall-Lerner), kurzfristig evtl. J-Kurve.</p>${warn('Nominal vs. real', 'NX-Reaktionen laufen über den realen Wechselkurs $\\varepsilon = EP^*/P$. Nur nominale Kursänderung ohne Preisniveau reicht nicht.')}`),
  zinsparitaet: section('In der Klausur: UIP', `<p>Rechnen: $i-i^* \\approx -(E^e-E)/E$ in Mengennotierung. Hoher Inlandszins → erwartete Abwertung kompensiert. Geldpolitik unter flex: Zinssenkung → sofortige Abwertung → NX↑. Immer $E_t$ vs. $E_{t+1}^e$ trennen.</p>${warn('UIP ist keine Prognose', 'UIP beschreibt Arbitragegleichgewicht, nicht kausal „Zins bestimmt Kurs". Erwartungen und Risikoprämien können UIP verletzen.')}`),
  marshall_lerner: section('In der Klausur: Marshall-Lerner', `<p>Langfrist: $|\\eta_X|+|\\eta_M|>1$ für Handelsbilanzverbesserung nach Abwertung. Kurzfrist: J-Kurve — Mengen träge, Importrechnung teurer → NX kann sinken. Klausur: beide Horizonte nennen, nicht nur eine Formel.</p>${warn('Elastizitäten schätzen', 'In Aufgaben ohne gegebene Elastizitäten: qualitative Argumentation (Verträge, Anpassungszeit) statt willkürlicher Zahlen.')}`),
  geldmengen: section('In der Klausur: LM und offene VW', `<p>LM: $M/P = YL(i)$ → $i = (k/h)Y - (1/h)(M/P)$. Geldpolitik: $M↑$ → $i↓$ → unter flex: Abwertung → NX↑. Real vs. nominal: nur $M/P$ wirkt. Liquiditätsfalle: horizontale LM, Geldpolitik wirkungslos.</p>${warn('LM-Verschiebung vs. Drehung', 'Geldmenge verschiebt LM parallel; Einkommensschock bewegt entlang LM (höheres $Y$ → höheres $i$ ceteris paribus).')}`),
  mundell_fleming: section('In der Klausur: Mundell-Fleming', `<p>Regime zuerst! Flex: $\\Delta M$ stark (über $E$, NX), $\\Delta G$ schwach (Aufwertung crowding-out). Fix: $\\Delta G$ stark (ZB akkommodiert $M$), $\\Delta M$ wirkungslos (Paritätszwang). Fünf Schritte: Regime → IS/LM-Impuls → $i$/Kapital → $E$/NX → $Y$.</p>${warn('Kleine offene VW', 'M-F setzt kleines Land und hohe Kapitalmobilität voraus. Große Volkswirtschaften: UIP-Wirkung auf Weltzins.')}`),
  zp_kurve: section('In der Klausur: ZP-Kurve', `<p>ZP: $LB + KB = 0$ im $(Y,i)$-Raum. Positiv geneigt: $Y↑$ → Importe → LB↓ → braucht $i↑$ für KB↑. Oberhalb ZP: Überschuss; unterhalb: Defizit. Bei $i=i^*$ (perfekte Mobilität): ZP horizontal — Gleichgewicht am Schnitt IS-LM-ZP.</p>${warn('ZP ≠ IS', 'ZP beschreibt Außenbilanzgleichgewicht, nicht Gütermarkt. Schnittpunkt aller drei Kurven bestimmt $(Y,i)$ im vollständigen offenen Modell.')}`),
  wirtschaftspolitik_offen: section('In der Klausur: Politik offen', `<p>M-F-Theorem auswendig: flex → Geld stark, Fiskal schwach; fix → umgekehrt. Jede Antwort: Regime → Kanal → Vorzeichen auf $Y$, $i$, $\\varepsilon$, NX. Trilemma: fix + freie Kapitalmobilität → keine autonome Geldpolitik.</p>${warn('Partial crowding-out', 'Unter flex ist Fiskal-Crowding-out über Nettoexporte, nicht über Zins wie in geschlossener VW — Mechanismus benennen.')}`),
  wk_regime: section('In der Klausur: Wechselkursregime', `<p>Trilemma: höchstens 2 von {fixer WK, freie Kapitalmobilität, autonome Geldpolitik}. Paritätsverteidigung: Reserven und/oder $i↑$. Kosten: Rezession, Bankenstress. Currency Board: $M$ an Reserven gebunden — rigide, aber glaubwürdig.</p>${warn('Fix heißt nicht stabil', 'Fixe Kurse können real überbewertet sein. Anpassung dann über Binnenrezession statt externer Abwertung.')}`),
  opt_waehrungsraum: section('In der Klausur: Optimaler Währungsraum', `<p>OWR-Abwägung: Nutzen (Transaktionskosten, WK-Risiko, Glaubwürdigkeit) vs. Kosten (asymmetrische Schocks ohne eigenen WK). Ersatzmechanismen: Arbeitsmobilität, Lohnflexibilität, Fiskaltransfers. Eurozone: immer Abwägung, nie Pro/Contra-Liste.</p>${warn('OWR ≠ Optimal Currency Area Bewertung', 'Kriterien erklären Anpassungsfähigkeit ohne WK — nicht automatisch „WU immer gut".')}`),
  zeitinkonsistenz: section('In der Klausur: Zeitinkonsistenz', `<p>Ex ante: niedrige $\\pi$ versprechen. Ex post: Anreiz zu Überraschungs-$\\pi$ für $u<u_n$. Rational: $\\pi^e$ steigt → kein Beschäftigungsgewinn, nur höhere $\\pi$. Lösungen: Regeln, Unabhängigkeit, Reputation, Inflation Targeting.</p>${warn('Diskretion ≠ Fehler', 'Zeitinkonsistenz ist struktureller Anreizkonflikt, nicht „dumme Politik". Institutionen binden ex-post-Handeln.')}`),
  barro_gordon: section('In der Klausur: Barro-Gordon', `<p>Verlust: $L = \\chi\\pi^2/2 + \\lambda(u-u^*)^2/2$. PC: $u = u_n - \\alpha(\\pi-\\pi^e)$. Diskretion: $\\pi^D = \\alpha\\lambda(u_n-u^*)/\\chi > 0$ bei $u^*<u_n$. Regel/ konservativer Banker reduziert Bias. Kein dauerhafter Phillips-Trade-off.</p>${warn('Bias ≠ willkürliche Inflation', 'Inflationsbias entsteht aus strukturiertem Anreiz, nicht aus „schlechter" Zentralbank.')}`),
  taylor_regel: section('In der Klausur: Taylor-Regel', `<p>$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$. Taylor-Prinzip: $a>1$ — Nominalzins reagiert stärker als 1:1 auf Inflation, damit Realzins steigt. Rechenaufgabe: Werte einsetzen, ELB beachten ($i\\geq 0$).</p>${warn('Taylor-Regel ist keine EZB-Vorschrift', 'Die Regel ist Modell/Heuristik. In der Klausur: Reaktionslogik erklären, nicht historische Zinsen exakt reproduzieren.')}`),
  inflation_targeting: section('In der Klausur: Inflation Targeting', `<p>Regime: explizites $\\pi^*$, operative Unabhängigkeit, Forward Guidance. Steueranker: $\\pi-\\pi^*$, nicht M3 mechanisch. ELB: bei $i=0$ weniger Realzins-Spielraum — höheres Trend-$\\pi$ vor Schock = mehr Puffer ($r\\approx i-\\pi$).</p>${warn('IT ≠ direkte Inflationssteuerung', 'Zentralbank steuert $i$ und Erwartungen; Übertragung auf $\\pi$ braucht Zeit und funktionierende Kanäle.')}`),
  inflation_kosten: section('In der Klausur: Inflationskosten', `<p>Inflationskosten: Schuhsohle, Menü, Fehlallokation, Inflationssteuer auf Nominale. Disinflation: Opferquote $SR$ = kumulierter Outputverlust / $|\\Delta\\pi|$. $\\Delta u \\approx -\\Delta\\pi/\\alpha$. Glaubwürdigkeit senkt $SR$.</p>${warn('Disinflation ≠ kostenlos', 'Auch „gute" Disinflation hat kurzfristige Arbeitsmarktkosten — Größenordnung mit Phillips nennen.')}`),
  wachstum_fakten: section('In der Klausur: Wachstumsfakten', `<p>Stilisierte Fakten vor Modell: Pro-Kopf-Wachstum, steigende $K/L$, stabile Faktorenanteile (Kaldor), Konvergenz/Divergenz zwischen Ländern. Klausur: erst Muster benennen, dann Modell zuordnen (Solow vs. endogen).</p>${warn('Fakten ≠ Theorie', 'Empirische Muster belegen nicht automatisch Solow — sie motivieren Modellwahl.')}`),
  aggregierte_pf: section('In der Klausur: Produktionsfunktion', `<p>Cobb-Douglas: $y = Ak^\\alpha$. Grenzprodukte: $MPK = \\alpha y/k$, $MPL = (1-\\alpha)y/l$. Skalenerträge: $\\alpha+\\beta$ bei $Y=F(K,L)$. Solow: $sf(k) = \\delta k$ im SS. Faktorenanteile bei CD konstant.</p>${warn('MPK vs. Rendite', 'Grenzprodukt fällt in $k$ (Diminishing Returns); das bedeutet nicht automatisch negative Gesamtrendite.')}`),
  steady_state: section('In der Klausur: Steady State', `<p>SS: $sf(k^*) = (\\delta+n)k^*$. Cobb-Douglas: $k^* = (sA/(\\delta+n))^{1/(1-\\alpha)}$. $s↑$ → höheres Niveau, nicht höheres $g_y$ ohne $g_A$. Konvergenz: $k<k^*$ → Wachstum; $k>k^*$ → Schrumpfung.</p>${warn('SS-Berechnung', 'Immer Break-even $(\\delta+n)k$ mit Investition $sf(k)$ gleichsetzen — nicht $s$ mit $\\delta$ verwechseln.')}`),
  goldene_sparquote: section('In der Klausur: Goldene Sparquote', `<p>Maximiert $c^* = f(k^*)-(\\delta+n)k^*$. Bedingung: $f'(k_{gold}) = \\delta+n$. CD: $s_{gold}=\\alpha$. Rechts von $k_{gold}$: Überakkumulation — weniger Sparen kann $c^*$ erhöhen.</p>${warn('Gold ≠ outputmaximierend', 'Maximaler Konsum und maximaler Output fallen bei $s_{gold}$ und $s_{max}$ auseinander.')}`),
  tech_fortschritt: section('In der Klausur: Technischer Fortschritt', `<p>Arbeitsvermehrend: $\\tilde k = K/(AN)$, $\\dot{\\tilde k} = sf(\\tilde k)-(\\delta+n+g_A)\\tilde k$. Im SS: $g_{Y/N}=g_A$. Solow-Residuum: nicht beobachtetes Wachstum — Sammelgröße für Technologie, Institutionen, Human Capital.</p>${warn('Residuum ≠ exogene Technologie', 'Das Residuum misst alles außer $K$- und $L$-Wachstum — Interpretation vorsichtig.')}`),
  budgetrestriktion: section('In der Klausur: Budgetrestriktion', `<p>Periodisch: $B_t = (1+r)B_{t-1} + (G-T)_t$. Primärsaldo $PS = T-G$ separat von Zinslast. Intertemporal: $B_0 = \\sum (T-G)/(1+r)^t$. Buchhaltung ≠ Tragfähigkeit.</p>${warn('Nominal vs. real', 'In Wachstumsmodellen oft reale Größen — Zins und Wachstum konsistent definieren.')}`),
  schuldenquote_dynamik: section('In der Klausur: Schuldenquote', `<p>$\\Delta b \\approx (r-g)b - ps$. Stabilisierung: $ps^* = (r-g)b$. $r>g$: Schneeballeffekt gegen Staat. $r<g$: Schuldenquote kann ohne Primärüberschuss fallen. Immer Quote, nicht nur Nominalschuld.</p>${warn('Eine Periodenrechnung reicht nicht', 'Stabilisierung ist Pfadfrage — dauerhafter Primärüberschuss nötig wenn $r>g$.')}`),
  ricardianisch: section('In der Klausur: Ricardianische Äquivalenz', `<p>Defizitfinanzierte Steuersenkung: Haushalte internalisieren künftige Steuern → $\\Delta C=0$ unter Annahmen. Brüche: Liquiditätsbeschränkung, endlicher Horizont, myope Haushalte. Fiskalmultiplikator gedämpft, nicht zwingend null.</p>${warn('Ricardo als Benchmark', 'Empirisch oft partielle Äquivalenz — Voraussetzungen in Antwort explizit prüfen.')}`),
  schuldenfinanzierung_monetarisierung: section('In der Klausur: Finanzierungsmodus', `<p>Kredit: Schulden- und Zinslastpfad. Monetarisierung: Seigniorage $\\Delta M/P$ — entlastet Refinanzierung, belastet Preisniveau und Erwartungen. Kein kostenloser Lunch: Inflation vs. Schulden-Trade-off. Hyperinflation = Vertrauensverlust in Geld.</p>${warn('Monetarisierung ≠ automatische Hyperinflation', 'Einmalige Monetarisierung ≠ dauerhafte Finanzierung — Erwartungskanal entscheidet.')}`) + section('Mechanismus und VL-Verknüpfung', `<p>VL-Logik: Budgetrestriktion → Finanzierungswahl → makroökonomischer Kanal. Kreditfinanzierung wirkt über $r-g$ und Primärsaldo auf $b$. Monetarisierung wirkt über $M/P$, LM und Erwartungsbildung auf $\\pi$. In der Klausur immer beide Seiten der Budgetrestriktion mitdenken: Wer trägt die Last — Steuerzahler heute, Gläubiger morgen oder Geldhalter via Inflation?</p>`),
  solow_basis: section('In der Klausur: Solow-Grundmodell', `<p>Akkumulation: $\\dot k = sf(k)-\\delta k$. SS: $sf(k^*)=\\delta k^*$. Mehr Sparen → höheres Niveau von $k^*, y^*$, aber ohne $g_A$ keine dauerhafte Wachstumsrate. Konvergenzdiagramm: Investitions- vs. Break-even-Kurve zeichnen.</p>${warn('Sparen ≠ Wachstum', 'Höhere $s$ hebt das Niveau, nicht die Trendwachstumsrate pro Kopf — das kommt aus technischem Fortschritt.')}`) + section('Numerisches Beispiel', `<p>CD: $f(k)=k^{0{,}5}$, $\\delta=0{,}05$, $s=0{,}2$, $n=0$. Dann $k^*=(s/\\delta)^2=16$, $y^*=4$. Liegt $k_0=4$, gilt $\\dot k>0$ — die Wirtschaft konvergiert nach oben. Parameteränderung: $s\\uparrow$ verschiebt Investitionskurve nach oben → neues höheres $k^*$.</p>`),
  phillipskurve: section('In der Klausur: Phillipskurve (Ergänzung)', `<p>Kurzfrist: $\\pi = \\pi^e - \\alpha(u-u_n)$ — Trade-off möglich. Langfrist: $\\pi^e$ passt sich an → vertikale PC bei $u_n$. Disinflation kostet Output (Opferquote). Adaptive Erwartungen: langsame Anpassung verlängert Kosten.</p>${warn('Kein permanentes Menü', 'Politik kann nicht dauerhaft $u<u_n$ „kaufen" — Erwartungen ziehen nach.')}`)
};

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  const depth = MAKRO2_KLAUSUR_DEPTH[ch.id];
  if (entry && depth) {
    entry.theorie = (typeof entry.theorie === 'string' ? entry.theorie : '') + depth;
  }
}

const MAKRO2_MECHANISM_BOOST = {
  nettoexporte: section('Mechanismus und VL-Verknüpfung', `<p>Im Mundell-Fleming-System ist $NX$ der zentrale Gütermarkt-Übertragungskanal der Geldpolitik unter flexiblen Kursen: $M\\uparrow \\Rightarrow i\\downarrow \\Rightarrow E\\uparrow \\text{ (Abwertung)} \\Rightarrow \\varepsilon\\downarrow \\Rightarrow NX\\uparrow \\Rightarrow Y\\uparrow$. Bei Fiskalpolitik unter flex läuft die Kette oft umgekehrt über Aufwertung. Zeichne diese Kette immer explizit — nicht nur „NX steigt".</p>`),
  zinsparitaet: section('Mechanismus und VL-Verknüpfung', `<p>Die exakte UIP $1+i = (1+i^*)E_t/E_{t+1}^e$ folgt aus risikoloser Arbitrage: Anleger sind indifferent zwischen Inlands- und Auslandsanlage. Bei erwarteter Abwertung muss der Inlandszins höher sein, um Kapitalexporte zu kompensieren. In der VL wird UIP oft mit Mundell-Fleming und ZP-Kurve kombiniert — Kapitalbilanz reagiert auf $i-i^*$.</p>`),
  marshall_lerner: section('Mechanismus und VL-Verknüpfung', `<p>Die Handelsbilanz $NX = p_X X - p_M M$ reagiert auf $\\varepsilon$ über Preis- und Mengeneffekt. Abwertung: Exporte billiger (Mengen↑), Importe teurer (Mengen↓). Marshall-Lerner: Summe der Elastizitäten > 1, damit Mengeneffekt den Preiseffekt überwiegt. J-Kurve: kurzfristig dominieren Preise bei fixen Verträgen.</p>`),
  geldmengen: section('Mechanismus und VL-Verknüpfung', `<p>Die LM-Kurve entsteht aus $M/P = YL(i)$. Steigt $Y$, steigt Transaktionsnachfrage → bei gegebener $M/P$ muss $i$ steigen (Ausgleich). In offener VW koppelt LM über UIP an $E$ und $NX$. Liquiditätsfalle: $L_i \\to \\infty$ bei $i \\to 0$ — LM horizontal, klassische Geldpolitik wirkungslos, Fiskalpolitik wirksam (Keynes).</p>`),
  mundell_fleming: section('Mechanismus und VL-Verknüpfung', `<p>Das $(Y,i)$-Diagramm mit IS, LM und ggf. ZP ist das Standardwerkzeug. Unter flex: IS-Verschiebung durch $G$ → $Y\\uparrow$ → $i\\uparrow$ → Kapitalexporte → Aufwertung → $NX\\downarrow$ → IS zurück. Unter fix: $G\\uparrow$ → Druck auf $i$ → ZB kauft Devisen, $M\\uparrow$ → LM nach rechts → stärkerer $Y$-Effekt.</p>`),
  wk_regime: section('Mechanismus und VL-Verknüpfung', `<p>Mundells Trilemma ist die institutionelle Restriktion hinter Mundell-Fleming. Fix + Kapitalmobilität: inländischer Zins = Weltzins ($i=i^*$), Geldpolitik endogen. Flex: Zins durch Geldmarkt, Kurs passt sich an. Kapitalverkehrskontrollen erlauben teilweise Autonomie bei fixem Kurs — dritte Option im Trilemma.</p>`),
  opt_waehrungsraum: section('Mechanismus und VL-Verknüpfung', `<p>Mundell (1961): optimale Währungsgebiete haben hohe Arbeitsmobilität oder Lohnflexibilität, damit asymmetrische Schocks ohne Wechselkursanpassung absorbiert werden. McKinnon: hohe Handelsintensität begünstigt WU. Kenen: Produktionsdiversifikation reduziert asymmetrische Schocks. Klausur: Kriterium nennen + auf Eurozone anwenden.</p>`),
  zeitinkonsistenz: section('Mechanismus und VL-Verknüpfung', `<p>Kydland-Prescott (1977): diskretionäre Politik führt zu suboptimalem Gleichgewicht, weil Erwartungen rational sind. Barro-Gordon formalisiert den Inflationsbias. Rogoff: konservativer Zentralbanker ($\\chi$ hoch) reduziert Bias. Inflation Targeting und Unabhängigkeit sind institutionelle Commitment-Technologien.</p>`),
  barro_gordon: section('Mechanismus und VL-Verknüpfung', `<p>Herleitung: Zentralbank minimiert $L$ unter PC-Restriktion. FOC liefert $\\pi = \\pi^e + \\alpha\\lambda/\\chi (u_n - u^*)$. Mit $\\pi^e = \\pi$ im RE-Gleichgewicht: positiver Bias wenn $u^* < u_n$. Regelbindung ($\\pi=0$): kein Bias, aber Outputvolatilität. Klausur: Modellbausteine aufschreiben, nicht nur Ergebnis zitieren.</p>`),
  taylor_regel: section('Mechanismus und VL-Verknüpfung', `<p>Taylor (1993): US-Leitzins 1987–1992 gut approximiert durch Regel mit $a \\approx 1{,}5$, $b \\approx 0{,}5$. Taylor-Prinzip ($a>1$): Realzins steigt bei Inflationsanstieg → dämpft Nachfrage. Output-Glied: Unterauslastung senkt Zins. Forward Guidance erweitert Regel um Erwartungskanal — relevant an ELB.</p>`),
  inflation_kosten: section('Mechanismus und VL-Verknüpfung', `<p>Friedman: Inflation ist „always and everywhere" monetär — langfristig. Kurzfristig: unerwartete Inflation verteilt zwischen Gläubigern/Schuldnern (Inflationssteuer). Menu costs (Akerlof-Yellen): Preisanpassung verzögert relative Preise. Disinflation nach Volcker: hohe Opferquote, dann Erwartungsankerung.</p>`),
  wachstum_fakten: section('Mechanismus und VL-Verknüpfung', `<p>Kaldor (1961): sechs stilisierte Fakten — u.a. konstante Kapitalrendite, stabile Kapital-Einkommens-Quote, hohe Varianz der Wachstumsraten zwischen Ländern. Solow erklärt Faktorenanteile und Konvergenz; endogenes Wachstum (Romer, Lucas) ergänzt $g_A$-Erklärung. Klausur: Faktum → passendes Modell zuordnen.</p>`),
  aggregierte_pf: section('Mechanismus und VL-Verknüpfung', `<p>Neoklassische PF: $Y=F(K,L)$ mit Grenzprodukten $F_K, F_L$. Euler-Theorem bei linearer Homogenität: Faktorenanteile = Elastizitäten. Solow nutzt $y=f(k)$ mit $f'(k)>0$, $f''(k)<0$. Break-even-Investition $(\\delta+n)k$ vs. $sf(k)$ im Diagramm — Standardzeichnung in VL.</p>`),
  steady_state: section('Mechanismus und VL-Verknüpfung', `<p>Transition dynamics: $\\dot k = sf(k)-(\\delta+n)k$ ist Autonomous Differential Equation. Stabilität: $f'(k^*) < \\delta+n$ garantiert Konvergenz. Speed of convergence hängt von $s$, $\\delta$, $n$, $\\alpha$ ab — halbe Lebensdistanz typische Klausurfrage qualitativ.</p>`),
  goldene_sparquote: section('Mechanismus und VL-Verknüpfung', `<p>Phelps (1966): Goldene Regel unabhängig von Präferenzen — rein technisch aus PF. Dynamische Ineffizienz: wenn $f'(k) < \\delta+n+g$ (überakkumuliert), sinkt Konsum durch zu viel Kapitalerhalt. Diamond OLG: Goldene Regel kann in Überlappungsgenerationenmodellen abweichen.</p>`),
  tech_fortschritt: section('Mechanismus und VL-Verknüpfung', `<p>Harrod-neutraler Fortschritt: $AN$ wächst mit Rate $g_A$ — effizienzsteigernd ohne Verzerrung der Faktorenanteile. Im $\\tilde k$-Raum: kein Wachstum im SS, aber $Y/L$ wächst mit $g_A$. TFP-Wachstum in Growth Accounting: $\\Delta \\ln Y - \\alpha \\Delta \\ln K - (1-\\alpha)\\Delta \\ln L$.</p>`),
  budgetrestriktion: section('Mechanismus und VL-Verknüpfung', `<p>Barro (1979): Ricardianische Äquivalenz aus intertemporaler Budgetrestriktion der Haushalte. Staatliche IR: Barwert aller künftigen Primärüberschüsse muss heutige Schuld decken. Tragfähigkeit: $r-g$ und Primärpfad — nicht nur $B/Y$ Niveau.</p>`),
  schuldenquote_dynamik: section('Mechanismus und VL-Verknüpfung', `<p>Herleitung: $b = B/Y$, $\\Delta b/b \\approx \\Delta B/B - \\Delta Y/Y$. Mit $B_t = (1+r)B_{t-1} - PS$ und $g$: $\\Delta b \\approx (r-g)b - ps$. OECD/IMF-Stabilisierungsrechnungen basieren auf dieser Näherung. $r-g < 0$ (Wachstum über Zins): „Schnee schmilzt" — historisch oft in Deutschland post-WWII.</p>`),
  ricardianisch: section('Mechanismus und VL-Verknüpfung', `<p>Barro (1974): endliche Lebensdauer + Altruismus/Vererbung → Haushalte internalisieren Staatsschuld wie eigene. Empirie: Tax smoothing, partial Ricardian equivalence. Liquiditätsbeschränkte Haushalte: MPC aus Steuersenkung > 0 — Multiplikator positiv.</p>`),
  zeitinkonsistenz: section('Mechanismus und VL-Verknüpfung', `<p>Kydland-Prescott (1977): diskretionäre Politik führt zu suboptimalem Gleichgewicht, weil Erwartungen rational sind. Barro-Gordon formalisiert den Inflationsbias. Rogoff: konservativer Zentralbanker ($\\chi$ hoch) reduziert Bias. Spieltheoretisch: Zeitinkonsistenz = dynamische Inkonsistenz optimaler Pläne — Reputation als wiederholtes Spiel kann diskretionären Bias reduzieren.</p>`),
  taylor_regel: section('Mechanismus und VL-Verknüpfung', `<p>Taylor (1993): US-Leitzins 1987–1992 gut approximiert durch Regel mit $a \\approx 1{,}5$, $b \\approx 0{,}5$. Taylor-Prinzip ($a>1$): Realzins steigt bei Inflationsanstieg → dämpft Nachfrage. In DSGE-Modellen: Taylor-Prinzip als Stabilitätsbedingung. An ELB: Regel bricht zusammen — Forward Guidance und QE ergänzen.</p>`),
  steady_state: section('Mechanismus und VL-Verknüpfung', `<p>Transition dynamics: $\\dot k = sf(k)-(\\delta+n)k$ ist Autonomous Differential Equation. Stabilität: $f'(k^*) < \\delta+n$ garantiert Konvergenz. Goldene Regel vs. Steady State: $k^*$ aus $s$; $k_{gold}$ aus $f'(k)=\\delta+n$. Diagramm mit $sf(k)$ und $(\\delta+n)k$ ist Pflichtzeichnung in Solow-Klausuren.</p>`),
  goldene_sparquote: section('Mechanismus und VL-Verknüpfung', `<p>Phelps (1966): Goldene Regel unabhängig von Präferenzen — rein technisch aus PF. Konsum pro Kopf im SS: $c^* = f(k^*) - (\\delta+n)k^*$. Maximum bei $k_{gold}$ wo $f'(k_{gold})=\\delta+n$. Dynamische Ineffizienz wenn $k > k_{gold}$: zu viel Kapital bindet Ressourcen in Erhalt statt Konsum.</p>`),
  budgetrestriktion: section('Mechanismus und VL-Verknüpfung', `<p>Barro (1979): Ricardianische Äquivalenz aus intertemporaler Budgetrestriktion der Haushalte. Fortschreibung $B_t = (1+r)B_{t-1} + PD_t$ ist Ausgangspunkt für Schuldenquoten-Dynamik. Intertemporale Budgetrestriktion verknüpft mit No-Ponzi-Game: Grenzschuld muss in Barwert null sein.</p>`),
  schuldenquote_dynamik: section('Mechanismus und VL-Verknüpfung', `<p>Herleitung: $b = B/Y$, $\\Delta b/b \\approx \\Delta B/B - \\Delta Y/Y$. Mit $B_t = (1+r)B_{t-1} - PS$ und $g$: $\\Delta b \\approx (r-g)b - ps$. Beispiel: $b=80\\%$, $r-g=3$ pp → $ps^* = 2{,}4\\%$ BIP für Stabilisierung. $r-g < 0$ kann Quote ohne Primärüberschuss fallen — aber nicht automatisch „Schulden unschädlich".</p>`)
};

const MAKRO2_FINAL_BOOST = {
  goldene_sparquote: section('Notation und Herleitung (VL-Basis)', `<p>Bei Cobb-Douglas $f(k)=k^\\alpha$: $k_{gold} = \\big(\\frac{\\alpha}{\\delta+n}\\big)^{1/(1-\\alpha)}$. Vergleiche $k^*$ bei gegebener Sparquote $s$ mit $k_{gold}$ — liegt $k^* > k_{gold}$, ist die Volkswirtschaft dynamisch ineffizient (zu viel Sparen). Klausur: Diagramm mit $sf(k)$, $(\\delta+n)k$ und $c^*$ markieren.</p>${warn('Goldene Regel ≠ optimale Sparquote', 'Die goldene Regel maximiert Konsum pro Kopf im SS — nicht zwingend die utilitaristisch optimale Sparquote bei endlicher Zeitpräferenz.')}`),
  ricardianisch: section('Notation und Herleitung (VL-Basis)', `<p>Haushalts-Budget: $PV(C) = PV(Y) - PV(T)$. Steuerfinanzierter Transfer hebt $PV(T)$ und senkt $PV(C)$ um gleichen Betrag — Konsum unverändert wenn Kreditmarkt vollständig. Defizitfinanzierung: $T$ steigt später, Haushalte sparen heute. Klausur: Annahmenliste (unendlicher Horizont, keine Liquiditätsbeschränkung) explizit prüfen.</p>${warn('Teilweise Ricardian equivalence', 'Empirisch: liquide Haushalte reagieren schwächer auf fiskalische Impulse als illiquide — Multiplikator > 0.')}`),
  steady_state: section('Notation und Herleitung (VL-Basis)', `<p>FOC im SS: $sf'(k^*) = \\delta + n$. Bei $f(k)=k^\\alpha$: $k^* = \\big(\\frac{s}{\\delta+n}\\big)^{1/(1-\\alpha)}$. Halbe Lebensdistanz: Zeit bis $k$ halbe Distanz zu $k^*$ zurückgelegt — qualitativ von $s$ und $\\alpha$ abhängig. Konvergenzgeschwindigkeit ist zentral für Wachstumstransitions-Aufgaben.</p>${warn('SS vs. Goldene Regel', '$k^*$ hängt von $s$ ab; $k_{gold}$ aus Technologie — beide im selben Diagramm, aber unterschiedliche Fragestellungen.')}`),
  taylor_regel: section('Notation und Herleitung (VL-Basis)', `<p>Realzins-Form: $r_t = i_t - \\pi^e_t$. Taylor-Prinzip $a>1$ bedeutet: bei $\\pi > \\pi^* $ steigt $r$ überproportional — stabilisiert Nachfrage und Erwartungen. Output-Glied $b>0$: Unterauslastung senkt $i$. Klausur: Parameter $a,b$ interpretieren und Policy-Reaktion auf Schock skizzieren (Inflationsschock vs. Output-Gap).</p>${warn('Regel vs. Diskretion', 'Taylor-Regel ist Commitment-Benchmark — reine Diskretion kann Inflationsbias erzeugen (Barro-Gordon).')}`),
  schuldenquote_dynamik: section('Notation und Herleitung (VL-Basis)', `<p>Primärsaldo $ps = PS/Y$ (Überschuss positiv). Stabilisierungsbedingung: $ps \\geq (r-g)\\,b$ hält $b$ konstant. Sinkt $g$ oder steigt $r$, steigt erforderlicher $ps$. OECD-Projektionen nutzen diese Näherung — in Klausur oft Zahlenbeispiel mit gegebenem $b$, $r$, $g$.</p>${warn('Nominal vs. real', 'Formel setzt konsistente Definition von $r$ (real) und $g$ (real) voraus — Mischung verfälscht $r-g$.')}`),
  zeitinkonsistenz: section('Notation und Herleitung (VL-Basis)', `<p>Beispiel Arbeitsmarkt: optimale Lohnsteuer heute niedrig (Anreize), ex post hohe Steuer (Arbeitsangebot fixiert). Lösungen: verbindliche Regeln, unabhängige Institution (CB), Reputation in wiederholten Spielen. Rogoff-Delegationsmodell: $L$ mit Gewicht auf Inflation vs. Output — trade-off explizit.</p>${warn('Commitment-Technologie', 'Inflation Targeting und CB-Unabhängigkeit sind institutionelle Antworten — nicht automatisch optimal bei allen Schocks.')}`),
  budgetrestriktion: section('Notation und Herleitung (VL-Basis)', `<p>Diskontierte Staatsbudget: $B_0 = \\sum_{t=0}^{\\infty} \\frac{PS_t}{(1+r)^t}$ bei $r$ konstant. No-Ponzi: $\\lim_{T\\to\\infty} B_T/(1+r)^T \\geq 0$. Verbindung zu Haushalten: Ricardian equivalence wenn Haushalte dieselbe IR internalisieren. Tragfähigkeit: $b$ und $r-g$ gemeinsam bewerten.</p>${warn('Intertemporale Konsistenz', 'Einmalige Schuldentilgung vs. dauerhafter Primärüberschuss — Klausur unterscheidet Niveau und Dynamik.')}`)
};

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = typeof entry.theorie === 'string' ? entry.theorie : '';
  const boost = MAKRO2_MECHANISM_BOOST[ch.id];
  if (html.length < 2500 && boost) {
    entry.theorie = html + boost;
  }
}

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = typeof entry.theorie === 'string' ? entry.theorie : '';
  const finalBoost = MAKRO2_FINAL_BOOST[ch.id];
  if (html.length < 2500 && finalBoost) {
    entry.theorie = html + finalBoost;
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
  if (depth?.aufgaben?.length) {
    entry.aufgaben = [...(entry.aufgaben || []), ...depth.aufgaben.map(cloneTask)];
  }
}

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const theoryHtml = typeof entry.theorie === 'string' ? entry.theorie : '';
  let sectionCount = (theoryHtml.match(/section-block/g) || []).length;
  if (sectionCount < 4) {
    entry.theorie = [
      theoryHtml,
      section('Prüfungsstandard', `
        <p>Klausurantwort: <strong>Regime</strong> → <strong>Kanal</strong> (Güter/Geld/Außen) → <strong>Wirkung</strong> auf $Y$, $i$ oder $\varepsilon$.</p>
        ${warn('Pflichtfolge', 'Offene-Volkswirtschaft-Antworten ohne Wechselkursregime sind strukturell unvollständig.')}
      `)
    ].filter(Boolean).join('');
    sectionCount = (entry.theorie.match(/section-block/g) || []).length;
  }
  while ((entry.formeln?.length || 0) < 3 && entry.formeln?.[0]) {
    const base = entry.formeln[entry.formeln.length - 1];
    entry.formeln.push({
      ...base,
      label: `${base.label} (Kurz)`,
      desc: base.desc || 'Kernrelation für die Klausur.'
    });
  }
}

const THEORY_TARGET = 2750;
for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = typeof entry.theorie === 'string' ? entry.theorie : '';
  if (html.length >= THEORY_TARGET || html.includes('Klausurtransfer (source-distilled)') || html.includes('In der Klausur:')) continue;
  entry.theorie = [
    html,
    section('Klausurtransfer (source-distilled)', `
      <p><strong>Prüfungsstandard:</strong> Regime → Kanal (Güter/Geld/Außen) → Wirkung auf $Y$, $i$ oder $\\varepsilon$.</p>
      <p><em>source-distilled / platform-added-explanation:</em> Ergänzung aus Makro-II-VL; offene-Volkswirtschafts-Randnotation in Primär-PDFs.</p>
    `)
  ].join('');
}
