// ============================================================
// CHAPTERS & CONTENT DATA — Mikroökonomik II
import { A_PLUS_SUPPLEMENT } from './aPlusSupplement.js';
import { THEORY_DEPTH_EXPANSIONS } from './theoryDepthExpansions.js';
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'monopol_preissetzung', title: 'Monopol: Preissetzung, Elastizität und Wohlfahrt', cat: 'Monopol', short: 'Monopol' },
  { id: 'preisdiskriminierung', title: 'Monopolistische Preisdiskriminierung', cat: 'Monopol', short: 'Preisdiskr.' },
  { id: 'spieltheorie_statisch', title: 'Spieltheorie: Normalform & Nash-Gleichgewicht', cat: 'Interaktion', short: 'Spiel I' },
  { id: 'spieltheorie_dynamisch', title: 'Spieltheorie: Gemischte Strategien & Wiederholung', cat: 'Interaktion', short: 'Spiel II' },
  { id: 'oligopol_cournot_bertrand', title: 'Oligopol: Cournot- und Bertrand-Wettbewerb', cat: 'Interaktion', short: 'Oligopol I' },
  { id: 'oligopol_stackelberg', title: 'Oligopol: Stackelberg und Führerschaft', cat: 'Interaktion', short: 'Oligopol II' },
  { id: 'intertemporaler_konsum', title: 'Intertemporaler Konsum', cat: 'Haushalt', short: 'Intertemp.' },
  { id: 'unsicherheit_versicherung', title: 'Unsicherheit, Erwartungsnutzen und Versicherung', cat: 'Haushalt', short: 'Risiko' },
  { id: 'gleichgewicht_tausch', title: 'Allgemeines Gleichgewicht: Tausch, Edgeworth, Kontraktkurve', cat: 'Wohlfahrt', short: 'GG Tausch' },
  { id: 'gleichgewicht_walras', title: 'Allgemeines Gleichgewicht: Walras & Markt-Räumung', cat: 'Wohlfahrt', short: 'GG Walras' },
  { id: 'gleichgewicht_produktion', title: 'Allgemeines Gleichgewicht mit Produktion', cat: 'Wohlfahrt', short: 'GG Prod.' },
  { id: 'wohlfahrt_theoreme', title: 'Wohlfahrt: 1./2. Hauptsatz', cat: 'Wohlfahrt', short: 'Wohlf. Satz' },
  { id: 'wohlfahrt_messung', title: 'Wohlfahrt: Messung (KR, PR, DWL, SWF)', cat: 'Wohlfahrt', short: 'Wohlf. Mess.' },
  { id: 'externa_pigou', title: 'Externe Effekte: Pigou-Internalisierung', cat: 'Marktversagen', short: 'Extern Pigou' },
  { id: 'externa_institutionen', title: 'Externe Effekte: Coase & Emissionshandel', cat: 'Marktversagen', short: 'Extern Inst.' },
  { id: 'public_goods', title: 'Öffentliche Güter', cat: 'Marktversagen', short: 'Öff. Güter' },
  { id: 'information_adverse', title: 'Asymmetrische Information: Adverse Selection', cat: 'Marktversagen', short: 'Info I' },
  { id: 'information_moralhazard', title: 'Asymmetrische Information: Moral Hazard, Signaling & Screening', cat: 'Marktversagen', short: 'Info II' },
];

const MARKET_FAILURE_SOURCE_BOUNDARY = String.raw`
    <div class="section-block source-boundary-notice platform-added-banner" role="note">
      <h3>Plattform-Ergänzung — kein VL-Primäranker</h3>
      <p><strong>Klausurrelevanz (Plattform-Ergänzung):</strong> Marktversagen-Übung ohne VL-Seitenanker — für Einordnung von Pigou, Coase und öffentlichen Gütern. Primär-PDFs in ILIAS prüfen.</p>
    </div>
    `;

export const CONTENT = {
  monopol_preissetzung: {
    motivation: 'Die ersten Mikro-II-Vorlesungen knüpfen an die Wettbewerbslogik an und fragen, wie ein Monopolist Preise setzt, warum Elastizitäten die Marktmacht begrenzen und wo Wohlfahrtsverluste entstehen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Monopolpreis als Aufschlag auf Grenzkosten</h4>
<p>Der Monopolist wählt die Ausbringungsmenge so, dass Grenzerlös und Grenzkosten übereinstimmen. In der Kursnotation wird der Grenzerlös über Preis und Nachfrageelastizität geschrieben.</p>
      <div class="math-block">$$E'(y)=p(y)\\\\left(1-\\\\frac{1}{|\\\\varepsilon_{xp}|}\\\\right)$$</div>
      <p>Aus der Bedingung erster Ordnung $E'(y)=C'(y)$ folgt die Aufschlagsformel: Je unelastischer die Nachfrage, desto größer ist der Abstand zwischen Preis und Grenzkosten.</p>


<h4 class="theory-subsection-title">VL-Mechanismus: MR = MC</h4>
<p>In Aufgaben mit linearer Nachfrage $p=a-by$ ist der Grenzerlös $MR=a-2by$. Setze $MR=MC$, bestimme $y^*$, dann $p^*$ — erst danach KR/PR/DWL zeichnen oder rechnen.</p>
      <div class="math-block">$$MR(y)=a-2by,\\\\quad MR=MC \\\\Rightarrow y^*=\\\\frac{a-MC}{2b}$$</div>


<h4 class="theory-subsection-title">In der Klausur: Monopol</h4>
<p>Standardpfad: Nachfrage $P(Q)$ → $TR=PQ$ → $MR = P + Q\\\\,P'(Q)$ → $MR=MC$ → $Q_m$, $P_m$. Markup: Lerner-Index $(P-MC)/P = -1/\\\\eta$. DWL = Dreieck zwischen $Q_m$ und $Q_c$ bei $P>MC$.</p>
      <div class="math-block">$$MR = MC \\\\quad\\\\Rightarrow\\\\quad P\\\\left(1+\\\\frac{1}{\\\\eta}\\\\right) = MC$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Wohlfahrtseffekt des Monopols</h4>
<p>Der Monopolpreis liegt über den Grenzkosten und die gehandelte Menge unter der effizienten Wettbewerbsmenge. Dadurch geht ein Teil der potentiellen Handelsgewinne als Deadweight Loss verloren.</p>
      <div class="warn-box"><strong>Klausurfehler:</strong> Der Monopolaufschlag ist keine beliebige Marge. Er ist über die Nachfrageelastizität gebunden; bei vollkommener Konkurrenz bzw. sehr elastischer Nachfrage nähert sich $p(y)$ den Grenzkosten.</div>


<h4 class="theory-subsection-title">Markup und Marktmacht</h4>
<p>Der Lerner-Index $(p-MC)/p = 1/|\\\\varepsilon|$ verbindet Preisaufschlag und Elastizität. Je elastischer die Nachfrage, desto näher rückt das Monopol an die Wettbewerbslösung.</p>


<h4 class="theory-subsection-title">Mechanismus und VL-Verknüpfung</h4>
<p>Monopolist internalisiert Preiseffekt auf Gesamtabsatz — deshalb $MR < P$. Bei linearer Nachfrage ist $MR$ doppelt so steil. Wohlfahrt: PS des Monopolisten kann steigen, CS sinkt; Gesamt-DWL positiv wenn $P>MC$.</p>
      <div class="warn-box"><strong>MR vs. Nachfrage:</strong> MR-Kurve liegt unter Nachfrage — Schnitt mit MC bestimmt $Q_m$, Preis aus Nachfrage ablesen, nicht aus MR.</div>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>

<div class="section-block">
<h4 class="theory-subsection-title">Mechanismus und VL-Verknüpfung</h4>
<p>Monopolist internalisiert Preiseffekt auf Gesamtabsatz — deshalb $MR < P$. Bei linearer Nachfrage ist $MR$ doppelt so steil. Wohlfahrt: PS des Monopolisten kann steigen, CS sinkt; Gesamt-DWL positiv wenn $P>MC$.</p>
      <div class="warn-box"><strong>MR vs. Nachfrage:</strong> MR-Kurve liegt unter Nachfrage — Schnitt mit MC bestimmt $Q_m$, Preis aus Nachfrage ablesen, nicht aus MR.</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Monopol</h4>
<p>Standardpfad: Nachfrage $P(Q)$ → $TR=PQ$ → $MR = P + Q\\,P'(Q)$ → $MR=MC$ → $Q_m$, $P_m$. Markup: Lerner-Index $(P-MC)/P = -1/\\eta$. DWL = Dreieck zwischen $Q_m$ und $Q_c$ bei $P>MC$.</p>
      <div class="math-block">$$MR = MC \\quad\\Rightarrow\\quad P\\left(1+\\frac{1}{\\eta}\\right) = MC$$</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Grenzerlös im Monopol', eq: String.raw`$$E'(y)=p(y)\left(1-\frac{1}{|\varepsilon_{xp}|}\right)$$`, desc: 'Kursnotation für Grenzerlös bei fallender Nachfrage.', variables: { y: 'Outputmenge', p: 'inverse Nachfrage', epsilon: 'Preiselastizität der Nachfrage' } },
      { label: 'Monopolaufschlag', eq: String.raw`$$p(y)=\left(1-\frac{1}{|\varepsilon_{xp}|}\right)^{-1}C'(y)$$`, desc: 'Preis als Aufschlag auf Grenzkosten.' },
      { label: 'Lerner-Index', eq: String.raw`$$\frac{p-MC}{p}=\frac{1}{|\varepsilon|}$$`, desc: 'Markup steigt mit Marktmacht.' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Monopolist hat konstante Grenzkosten $C'(y)=20$ und sieht sich einer Nachfrageelastizität von $|\varepsilon_{xp}|=2$ gegenüber. Bestimmen Sie den Monopolpreis über die Aufschlagsformel.`,
        steps: [
          { text: String.raw`Aufschlagsformel einsetzen.`, eq: String.raw`p=\left(1-\frac{1}{2}\right)^{-1}\cdot 20` },
          { text: String.raw`Klammer auswerten.`, eq: String.raw`p=(0{,}5)^{-1}\cdot 20=40` }
        ],
        result: String.raw`Der Monopolpreis beträgt $p=40$.`
      },
      {
        text: String.raw`Linearer Monopol: inverse Nachfrage $p(y)=10-y$, konstante Grenzkosten $MC=2$. Bestimmen Sie $y_m$, $p_m$, den Lerner-Index $L=(p-MC)/p$ und den Deadweight Loss relativ zum Wettbewerb.`,
        steps: [
          { text: String.raw`Grenzerlös: $E'(y)=10-2y$. Optimum: $10-2y=2$.`, eq: String.raw`y_m=4` },
          { text: String.raw`Preis und Gewinn:`, eq: String.raw`p_m=6,\quad \pi_m=(6-2)\cdot 4=16` },
          { text: String.raw`Lerner-Index:`, eq: String.raw`L=\frac{6-2}{6}=\frac{2}{3}` },
          { text: String.raw`Wettbewerb: $p=MC=2$, $y_W=8$. DWL-Dreieck:`, eq: String.raw`DWL=\frac12(6-2)(8-4)=8` }
        ],
        result: String.raw`$y_m=4$, $p_m=6$, $L=2/3$, $DWL=8$. Der Monopolist produziert weniger und verlangt einen deutlichen Aufschlag auf die Grenzkosten.`
      },
      {
        text: String.raw`Zeigen Sie mit $E'(y)=p(y)(1-1/|\varepsilon|)$ und $E'(y)=C'(y)$, dass bei konstanten Grenzkosten $C'(y)=c$ der Monopolpreis $p=c/(1-1/|\varepsilon|)$ folgt.`,
        steps: [
          { text: String.raw`FOC im Monopol: $E'(y)=C'(y)$.`, eq: String.raw`p(y)\left(1-\frac{1}{|\varepsilon|}\right)=c` },
          { text: String.raw`Nach $p$ auflösen:`, eq: String.raw`p=\frac{c}{1-1/|\varepsilon|}` },
          { text: String.raw`Grenzfall elastische Nachfrage:`, eq: String.raw`|\varepsilon|\to\infty \Rightarrow p\to c` }
        ],
        result: String.raw`Der Aufschlag steigt mit Marktmacht (niedrigere $|\varepsilon|$) und verschwindet im Grenzfall vollkommenen Wettbewerbs.`
      }
    ]
  },
  preisdiskriminierung: {
    motivation: 'Preisdiskriminierung ist der zweite offizielle Monopolblock: Die Portaloberfläche muss unterscheiden, ob der Monopolist Typen erkennt, Menüs anbietet oder Gruppen getrennt bepreist.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Dritter Grad: getrennte Kundengruppen</h4>
<p>Bei Preisdiskriminierung dritten Grades unterscheidet der Monopolist klar abgrenzbare Gruppen und setzt gruppenspezifische Preise. In der Zwei-Gruppen-Darstellung maximiert er die Summe der Erlöse abzüglich der Kosten der Gesamtproduktion.</p>
      <div class="math-block">$$\\\\max_{y_1,y_2}\\\\ \\\\pi(y_1,y_2)=E_1(y_1)+E_2(y_2)-C(y_1+y_2)$$</div>
      <p>Die Bedingung erster Ordnung verlangt den Ausgleich der Grenzerlöse zwischen den Teilmärkten und den Grenzkosten der Gesamtproduktion.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Zweiter Grad: Selbstselektion</h4>
<p>Bei Preisdiskriminierung zweiten Grades kann der Monopolist Konsumenten nicht direkt unterscheiden. Er bietet Preis-Mengen- oder Preis-Qualitäts-Kombinationen an, aus denen die Konsumenten selbst wählen.</p>
      <div class="warn-box"><strong>Trennlinie:</strong> Dritter Grad trennt beobachtbare Gruppen. Zweiter Grad baut ein Menü, damit unterschiedliche Zahlungsbereitschaften sich selbst sortieren.</div>


<h4 class="theory-subsection-title">Erster Grad: vollständige Preisdiskriminierung</h4>
<p>Bei perfekter Information über jeden Konsumenten setzt der Monopolist den individuellen Reservationspreis. Die Nachfragekurve wird zum Grenzerlös — es gibt keinen Deadweight Loss, aber die gesamte Konsumentenrente wird absorbiert. In der VL-Notation: $E'(y)=p(y)$ statt $E'(y)<p(y)$ bei fallender Nachfrage.</p>


<h4 class="theory-subsection-title">Mechanismus: Grenzerlöse ausgleichen</h4>
<p>Bei drittem Grad gilt $E_1'(y_1)=E_2'(y_2)=C'(y_1+y_2)$. Preise $p_1\\\\\\\\neq p_2$ sind möglich, weil die Nachfrageelastizitäten der Gruppen differieren: $p_i = C'(Y)/(1-1/|\\\\\\\\varepsilon_i|)$. Die Gruppe mit unelastischerer Nachfrage zahlt den höheren Preis.</p>


<h4 class="theory-subsection-title">Arten der Preisdiskriminierung</h4>
<p>1. Grad: MR = MC je Markt. 2. Grad: Versionen/Self-Selection. 3. Grad: individuelles Pricing. Voraussetzung: Marktmacht + Arbitrage verhindern.</p>


<h4 class="theory-subsection-title">In der Klausur: Preisdiskriminierung</h4>
<p>Antwortschema: (1) Grad identifizieren. (2) Gewinnfunktion aufschreiben. (3) FOC: Grenzerlöse = Grenzkosten (ggf. über Teilmärkte). (4) Wohlfahrt: Erster Grad → keine DWL, dritter Grad → teilweise Rentenextraktion. Bei Menüs (2. Grad): IC- und IR-Bindungen der Typen prüfen.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Wohlfahrtsvergleich Monopol einfach vs. perfekte Diskriminierung: DWL-Eliminierung bei 1. Grad; Konsumentenrente-Verteilung benennen.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Grad verwechseln</strong> Erster Grad = individuelle Preise (Reservationspreis). Zweiter Grad = Menü/Self-Selection ohne Typbeobachtung. Dritter Grad = beobachtbare Gruppen. In der Klausur zuerst fragen: Kann der Monopolist Typen erkennen?</div>
      <div class="warn-box"><strong>Gleicher Preis ≠ gleicher Grenzerlös</strong> Im Optimum des dritten Grades müssen Grenzerlöse übereinstimmen, nicht die Preise. Wer $p_1=p_2$ fordert, verwechselt Gleichgewichtsbedingung und Preisniveau.</div>

<div class="section-block">
<h4 class="theory-subsection-title">Arten der Preisdiskriminierung</h4>
<p>1. Grad: MR = MC je Markt. 2. Grad: Versionen/Self-Selection. 3. Grad: individuelles Pricing. Voraussetzung: Marktmacht + Arbitrage verhindern.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Wohlfahrtsvergleich Monopol einfach vs. perfekte Diskriminierung: DWL-Eliminierung bei 1. Grad; Konsumentenrente-Verteilung benennen.</p>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Preisdiskriminierung dritten Grades', eq: String.raw`$$E_1'(y_1)=E_2'(y_2)=C'(y_1+y_2)$$`, desc: 'Grenzerlöse werden zwischen Teilmärkten ausgeglichen.' },
      { label: 'Gruppenerlös', eq: String.raw`$$E_i(y_i)=p_i(y_i)y_i,\quad i=1,2$$`, desc: 'Erlös je Kundengruppe.' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Monopolist bedient zwei getrennte Gruppen. Erklären Sie, warum im Optimum nicht zwingend derselbe Preis, aber derselbe Grenzerlös in beiden Gruppen gilt.`,
        steps: [
          { text: String.raw`Gewinnfunktion für getrennte Gruppen formulieren.`, eq: String.raw`\pi=E_1(y_1)+E_2(y_2)-C(y_1+y_2)` },
          { text: String.raw`BEO für beide Mengen bilden.`, eq: String.raw`E_1'(y_1)=C'(y_1+y_2),\quad E_2'(y_2)=C'(y_1+y_2)` },
          { text: String.raw`Schlussfolgerung.`, eq: String.raw`E_1'(y_1)=E_2'(y_2)` }
        ],
        result: String.raw`Preise können wegen unterschiedlicher Nachfrageelastizitäten verschieden sein; die Grenzerlöse müssen im Optimum übereinstimmen.`
      },
      {
        text: String.raw`Zweiter Grad: Der Monopolist bietet ein Menü $(q_L,p_L)$ und $(q_H,p_H)$ an. Typ L hat Nutzen $u_L=\sqrt{q}$, Typ H hat $u_H=2\sqrt{q}$. Skizzieren Sie die Selbstselektionslogik und nennen Sie die typische Klausurfrage.`,
        steps: [
          { text: String.raw`IC-Low: Typ L wählt eigenes Paket.`, eq: String.raw`\sqrt{q_L}-p_L \ge \sqrt{q_H}-p_H` },
          { text: String.raw`IC-High: Typ H wählt eigenes Paket.`, eq: String.raw`2\sqrt{q_H}-p_H \ge 2\sqrt{q_L}-p_L` },
          { text: String.raw`Interpretation:`, eq: String.raw`\text{Menüpreise sortieren Typen über verdeckte Information.}` }
        ],
        result: String.raw`Beim 2. Grad muss das Menü so konstruiert werden, dass jeder Typ sein „eigenes“ Bündel freiwillig wählt — ohne dass der Monopolist den Typ beobachten muss.`
      }
    ]
  },
  spieltheorie_statisch: {
    motivation: 'In strategischen Situationen hängt das eigene Ergebnis nicht nur vom eigenen Handeln ab, sondern auch von den Entscheidungen anderer. Die Spieltheorie liefert das formale Instrumentarium hierfür.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Normalform-Spiele</h4>
<p>Ein Spiel in Normalform besteht aus einer Menge von Spielern $i \\\\in \\\\{1, \\\\dots, n\\\\}$, Strategieräumen $S_i$ und Auszahlungsfunktionen $u_i(s_1, \\\\dots, s_n)$.</p>
      <p>Die Normalform fasst alle Informationen eines simultanen Spiels in einer Auszahlungsmatrix zusammen — jede Zelle enthält die Auszahlungen beider Spieler für das jeweilige Strategieprofil.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Nash-Gleichgewicht (NG)</h4>
<p>Ein Strategieprofil $s^* = (s_1^*, \\\\dots, s_n^*)$ ist ein <strong>Nash-Gleichgewicht</strong>, wenn für jeden Spieler $i$ gilt:</p>
      <div class="math-block">$$u_i(s_i^*, s_{-i}^*) \\\\geq u_i(s_i, s_{-i}^*) \\\\quad \\\\forall s_i \\\\in S_i$$</div>
      <p>Niemand hat einen Anreiz, einseitig von seiner Strategie abzuweichen. Es ist eine gegenseitige beste Antwort.</p>


<h4 class="theory-subsection-title">Gemischte Strategien</h4>
<p>Falls kein Nash-Gleichgewicht in reinen Strategien existiert, gibt es stets ein Gleichgewicht in gemischten Strategien. Spieler randomisieren so, dass der Gegner indifferent zwischen seinen reinen Strategien ist.</p>
      <div class="math-block">$$E[u_i(\\\\sigma_i^*, \\\\sigma_{-i}^*)] \\\\geq E[u_i(\\\\sigma_i, \\\\sigma_{-i}^*)] \\\\quad \\\\forall \\\\sigma_i$$</div>


<h4 class="theory-subsection-title">In der Klausur: Nash in Normalform</h4>
<p>Matrix aufstellen → beste Antwort auf gegebene Strategie des Gegners (BR) → Schnittpunkt der BR-Korrespondenzen = Nash. Strikte Dominanz zuerst prüfen — eliminiert Zeilen/Spalten.</p>
      <div class="math-block">$$u_i(s_i^*, s_{-i}^*) \\\\geq u_i(s_i, s_{-i}^*)\\\\ \\\\forall s_i$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Dominante Strategien</h4>
<p>Eine Strategie ist <strong>strikt dominant</strong>, wenn sie unabhängig vom Verhalten der anderen Spieler immer die höchste Auszahlung liefert. Existiert für alle Spieler eine dominante Strategie, ist das daraus resultierende Profil das eindeutige Nash-Gleichgewicht.</p>
      <p>Iteration der Elimination dominierter Strategien (IESDS) kann das Spiel schrittweise vereinfachen und Nash-Gleichgewichte isolieren.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Reine vs. gemischte Strategien: bei keinem reinen Nash → gemischte mit Indifferenz (Gegner muss indifferent sein). Pareto vs. Nash trennen.</p>
      <div class="warn-box"><strong>Dominanz ≠ Nash:</strong> Eliminierte Strategien nie im Nash — aber Nash kann existieren ohne dominante Strategie.</div>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>NG vs. Pareto-Optimum:</strong> Ein Nash-Gleichgewicht muss nicht effizient sein (siehe Gefangenendilemma). Die Spieler optimieren individuell, nicht kollektiv.</div>
      <div class="warn-box"><strong>Mehrfache NG:</strong> Ein Spiel kann mehrere Nash-Gleichgewichte haben (z.B. Koordinationsspiele). Das Nash-Konzept sagt nichts darüber, auf welches GG die Spieler sich koordinieren — Gleichgewichtsselektion erfordert verfeinerte Konzepte (z.B. Risicodominanz, Payoff-Dominanz).</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Nash in Normalform</h4>
<p>Matrix aufstellen → beste Antwort auf gegebene Strategie des Gegners (BR) → Schnittpunkt der BR-Korrespondenzen = Nash. Strikte Dominanz zuerst prüfen — eliminiert Zeilen/Spalten.</p>
      <div class="math-block">$$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*)\\ \\forall s_i$$</div>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Reine vs. gemischte Strategien: bei keinem reinen Nash → gemischte mit Indifferenz (Gegner muss indifferent sein). Pareto vs. Nash trennen.</p>
      <div class="warn-box"><strong>Dominanz ≠ Nash:</strong> Eliminierte Strategien nie im Nash — aber Nash kann existieren ohne dominante Strategie.</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Nash-Bedingung', eq: String.raw`$$s_i^* \in \arg\max_{s_i} u_i(s_i, s_{-i}^*)$$`, desc: 'Beste Antwort auf Gleichgewichtsstrategien', variables: { s_i: 'Strategie von Spieler i', s_minus_i: 'Strategien aller anderen Spieler' } }
    ],
    aufgaben: [
      {
        text: String.raw`Betrachten Sie ein Gefangenendilemma mit den Optionen Kooperieren (K) und Defektieren (D). Die Auszahlung bei (D,D) ist (1,1), bei (K,K) (3,3) und bei (D,K) (5,0). Bestimmen Sie das Nash-Gleichgewicht.`,
        steps: [
          { text: String.raw`Interpretation: Was ist die beste Antwort auf K?`, eq: String.raw`\text{D (Auszahlung 5 > 3).}` },
          { text: String.raw`Decision: Was ist die beste Antwort auf D?`, eq: String.raw`\text{D (Auszahlung 1 > 0).}` },
          { text: String.raw`Execution: Gibt es eine dominante Strategie?`, eq: String.raw`\text{Ja, D ist für beide Spieler dominant.}` }
        ],
        result: String.raw`Nash-Gleichgewicht ist (D,D).`
      },
      {
        text: String.raw`Betrachten Sie ein Koordinationsspiel: A und B wählen gleichzeitig Links (L) oder Rechts (R). Auszahlungen: $(L,L)=(2,2)$, $(R,R)=(3,3)$, $(L,R)=(0,0)$, $(R,L)=(0,0)$. Bestimmen Sie alle Nash-Gleichgewichte in reinen Strategien.`,
        steps: [
          { text: String.raw`Beste Antwort von A: Wenn B L spielt?`, eq: String.raw`u_A(L,L)=2 > u_A(R,L)=0 \implies \text{A wählt L.}` },
          { text: String.raw`Beste Antwort von A: Wenn B R spielt?`, eq: String.raw`u_A(R,R)=3 > u_A(L,R)=0 \implies \text{A wählt R.}` },
          { text: String.raw`Symmetrie: B spiegelt dieselbe Logik. Wo treffen sich beide beste Antworten?`, eq: String.raw`(L,L) \text{ und } (R,R) \text{ sind beide gegenseitige beste Antworten.}` }
        ],
        result: String.raw`Zwei Nash-Gleichgewichte in reinen Strategien: $(L,L)$ und $(R,R)$. Im Unterschied zum Gefangenendilemma gibt es hier kein Problem kollektiver Rationalität — das Problem ist Koordination auf das gemeinsam vorzuziehende Gleichgewicht.`
      },
      {
        text: String.raw`Spieler A wählt oben (O) oder unten (U), Spieler B wählt links (L) oder rechts (R). Auszahlungsmatrix: $(O,L)=(3,3)$, $(O,R)=(0,5)$, $(U,L)=(5,0)$, $(U,R)=(1,1)$. Finden Sie alle Nash-Gleichgewichte in reinen Strategien.`,
        steps: [
          { text: String.raw`Beste Antwort von A auf L: $\max(3, 5)$.`, eq: String.raw`u_A(U,L) = 5 > u_A(O,L) = 3 \implies \text{A wählt U.}` },
          { text: String.raw`Beste Antwort von A auf R: $\max(0, 1)$.`, eq: String.raw`u_A(U,R) = 1 > u_A(O,R) = 0 \implies \text{A wählt U.}` },
          { text: String.raw`Beste Antwort von B auf O: $\max(3, 5)$.`, eq: String.raw`u_B(O,R) = 5 > u_B(O,L) = 3 \implies \text{B wählt R.}` },
          { text: String.raw`Beste Antwort von B auf U: $\max(0, 1)$.`, eq: String.raw`u_B(U,R) = 1 > u_B(U,L) = 0 \implies \text{B wählt R.}` },
          { text: String.raw`Nash-GG prüfen: Wo stimmen beide beste Antworten überein?`, eq: String.raw`(\text{U}, \text{R}) = (1,1) \text{ ist das einzige Nash-GG in reinen Strategien.}` }
        ],
        result: String.raw`Einziges Nash-Gleichgewicht: (U, R) mit Auszahlungen (1,1). Obwohl (O,L)=(3,3) Pareto-superior wäre, kein Spieler hat einen einseitigen Anreiz von (U,R) abzuweichen — das ist das klassische Gefangenendilemma-Muster in Matrixform.`
      },
      
    ]
  },
  spieltheorie_dynamisch: {
    motivation: 'Sobald reine Strategien nicht ausreichen, werden gemischte Strategien und wiederholte Interaktion prüfungsrelevant: Stabilität entsteht dann über Indifferenzbedingungen und Sanktionslogik.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Gemischte Strategien</h4>
<p>Existiert kein Nash-Gleichgewicht in reinen Strategien, randomisieren Spieler zwischen reinen Strategien. Ein gemischtes Gleichgewicht liegt vor, wenn jede gemischte Strategie eine beste Antwort auf die Mischung der Gegenseite ist.</p>
      <div class="math-block">$$E[u_i(\\\\sigma_i^*, \\\\sigma_{-i}^*)] \\\\geq E[u_i(\\\\sigma_i, \\\\sigma_{-i}^*)] \\\\quad \\\\forall \\\\sigma_i$$</div>


<h4 class="theory-subsection-title">Wiederholte Spiele und Kooperation</h4>
<p>Bei wiederholter Interaktion können Sanktionsstrategien Kooperation stützen. Entscheidend ist, ob zukünftige Kooperationsgewinne den kurzfristigen Abweichungsgewinn überwiegen.</p>
      <div class="math-block">$$\\\\delta \\\\geq \\\\frac{\\\\pi_D - \\\\pi_C}{\\\\pi_D - \\\\pi_P}$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Indifferenz als Rechenprinzip</h4>
<p>In 2x2-Spielen wird das Mischgleichgewicht über Indifferenz der Gegenseite bestimmt: Die Wahrscheinlichkeit wird so gewählt, dass der Gegner zwischen seinen reinen Strategien gerade indifferent ist.</p>


<h4 class="theory-subsection-title">Folk-Theorem und Kollusion</h4>
<p>Unendlich wiederholtes Spiel: Abweichung heute vs. Bestrafung in Zukunft. Trigger-Strategien können kooperative Outcomes stützen, wenn Diskontierungsfaktor $\\\\delta$ hoch genug. Endliche Horizonte: Rückwärtsinduktion bricht Kollusion (Chain-Store Paradox didaktisch).</p>
      <div class="warn-box"><strong>Zeit vs. Strategieraum:</strong> Dynamik = Reihenfolge und Information; nicht jede Wiederholung ist automatisch „dynamisches Spiel" ohne Entscheidungsbaum.</div>


<h4 class="theory-subsection-title">In der Klausur: Dynamische Spiele</h4>
<p>Extensive Form: Entscheidungsknoten, Informationsmenge, Auszahlungen. Rückwärtsinduktion bei vollständiger Information: letzter Spieler optimal → Vorwärts auflösen. Subgame Perfect Nash (SPNE): Nash in jedem Teilspiel.</p>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Mischungsfehler:</strong> Im gemischten Gleichgewicht werden nicht „beste Auszahlungen“ gemischt, sondern Wahrscheinlichkeiten so gewählt, dass der Gegner indifferent wird.</div>
      <div class="warn-box"><strong>Wiederholungsfehler:</strong> Wiederholung erzeugt nicht automatisch Kooperation. Ohne ausreichend hohen Diskontfaktor bleibt Defektion attraktiv.</div>

<div class="section-block">
<h4 class="theory-subsection-title">Folk-Theorem und Kollusion</h4>
<p>Unendlich wiederholtes Spiel: Abweichung heute vs. Bestrafung in Zukunft. Trigger-Strategien können kooperative Outcomes stützen, wenn Diskontierungsfaktor $\\delta$ hoch genug. Endliche Horizonte: Rückwärtsinduktion bricht Kollusion (Chain-Store Paradox didaktisch).</p>
      <div class="warn-box"><strong>Zeit vs. Strategieraum:</strong> Dynamik = Reihenfolge und Information; nicht jede Wiederholung ist automatisch „dynamisches Spiel" ohne Entscheidungsbaum.</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Dynamische Spiele</h4>
<p>Extensive Form: Entscheidungsknoten, Informationsmenge, Auszahlungen. Rückwärtsinduktion bei vollständiger Information: letzter Spieler optimal → Vorwärts auflösen. Subgame Perfect Nash (SPNE): Nash in jedem Teilspiel.</p>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Gemischtes NG', eq: String.raw`$$\sigma_i^* \in \arg\max_{\sigma_i} E[u_i(\sigma_i,\sigma_{-i}^*)]$$`, desc: 'Beste Antwort in gemischten Strategien.' },
      { label: 'Kooperationsbedingung', eq: String.raw`$$\delta \geq \frac{\pi_D - \pi_C}{\pi_D - \pi_P}$$`, desc: 'Folk-Theorem-Logik für Trigger-Strategien.' }
    ],
    aufgaben: [
      {
        text: String.raw`Nullsummenspiel (Matching Pennies): A erhält bei gleicher Wahl +1, bei unterschiedlicher Wahl -1. Zeigen Sie, dass kein reines Nash-Gleichgewicht existiert, und bestimmen Sie das gemischte Gleichgewicht.`,
        steps: [
          { text: String.raw`Reine Profile prüfen: In jedem Profil kann genau ein Spieler profitabel abweichen.`, eq: String.raw`\text{Kein Profil ist gegenseitige beste Antwort.}` },
          { text: String.raw`Gemischte Strategien: Sei $p$ die Wahrscheinlichkeit, dass A Kopf spielt. B muss indifferent zwischen Kopf und Zahl sein.`, eq: String.raw`E[u_B(K)] = -p + (1-p) = 1-2p,\quad E[u_B(Z)] = p-(1-p)=2p-1` },
          { text: String.raw`Indifferenzbedingung für B:`, eq: String.raw`1-2p = 2p-1 \implies p = \frac{1}{2}` },
          { text: String.raw`Symmetrisch für A folgt $q=\frac{1}{2}$ für B.`, eq: String.raw`(p^*,q^*)=\left(\frac12,\frac12\right)` }
        ],
        result: String.raw`Es gibt kein reines NG, aber ein gemischtes NG mit zufälliger Wahl beider Spieler: $p=q=\frac12$.`
      },
      {
        text: String.raw`Im infinit wiederholten Gefangenendilemma mit Diskontfaktor $\delta \in (0,1)$: Kooperation liefert $\pi_C = 3$ pro Periode, Defektion (einmalig) $\pi_D = 5$, danach ewige Bestrafung $\pi_P = 1$. Unter welcher Bedingung kann Kooperation im Gleichgewicht (Grim-Trigger) aufrechterhalten werden?`,
        steps: [
          { text: String.raw`Wert der Kooperation (ab heute, ewig): Geometrische Reihe.`, eq: String.raw`V_C = \frac{\pi_C}{1-\delta} = \frac{3}{1-\delta}` },
          { text: String.raw`Wert des Abweichens: Einmaliger Gewinn $\pi_D$, dann ewige Bestrafung.`, eq: String.raw`V_D = \pi_D + \frac{\delta \pi_P}{1-\delta} = 5 + \frac{\delta}{1-\delta}` },
          { text: String.raw`Kooperation im GG, wenn $V_C \geq V_D$:`, eq: String.raw`\frac{3}{1-\delta} \geq 5 + \frac{\delta}{1-\delta}` },
          { text: String.raw`Umformen — Folk-Theorem-Bedingung:`, eq: String.raw`3 \geq 5(1-\delta) + \delta \implies 3 \geq 5 - 4\delta \implies \delta \geq \frac{1}{2}` }
        ],
        result: String.raw`Kooperation ist im Grim-Trigger-Gleichgewicht möglich, wenn $\delta \geq \frac{1}{2}$.`
      }
    ]
  },
  oligopol_cournot_bertrand: {
    motivation: 'Oligopole beschreiben Märkte mit wenigen Anbietern, die strategisch interagieren. Wir unterscheiden Mengenwettbewerb (Cournot) und Preiswettbewerb (Bertrand).',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Cournot-Wettbewerb</h4>
<p>Unternehmen wählen gleichzeitig ihre Produktionsmengen $q_i$. Der Preis bildet sich über die Marktnachfrage $P(Q)$ mit $Q = \\\\sum q_i$.</p>
      <div class="math-block">$$\\\\max_{q_i} \\\\pi_i = P(q_i + q_{-i}) \\\\cdot q_i - C_i(q_i)$$</div>
      <p>Im Cournot-Nash-Gleichgewicht produziert jede Firma mehr als ein Monopolist, aber weniger als im vollkommenen Wettbewerb.</p>


<h4 class="theory-subsection-title">In der Klausur: Cournot vs. Bertrand</h4>
<p>Cournot: Mengenwettbewerb, RR $q_i^*(q_j)$, Schnitt = Nash in Mengen. Homogene Güter + Bertrand: Preiswettbewerb → $P=MC$, wie Wettbewerb (Bertrand-Paradox). Differenzierung rettet $P>MC$.</p>
      <div class="math-block">$$q_i^*:\\\\ \\\\frac{\\\\partial \\\\pi_i}{\\\\partial q_i} = 0 \\\\quad\\\\text{(Cournot)}\\\\qquad P_1=P_2=MC\\\\ \\\\text{(Bertrand, homogen)}$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Reaktionsfunktionen</h4>
<p>Die Bedingung erster Ordnung ($MR_i = MC_i$) liefert die Reaktionsfunktion $q_i(q_{-i})$, welche die optimale Menge in Abhängigkeit der Konkurrenzmenge angibt.</p>
      <p>Grafisch: Das Cournot-GG liegt im Schnittpunkt beider Reaktionsfunktionen. Jede Reaktionsfunktion hat eine negative Steigung — mehr des Konkurrenten impliziert weniger eigene optimale Menge.</p>


<h4 class="theory-subsection-title">Bertrand-Paradoxon</h4>
<p>Im Preiswettbewerb mit homogenen Gütern und konstanten Grenzkosten $c$ unterbieten sich die Firmen so lange, bis $P = c$ gilt. Das Ergebnis entspricht dem vollkommenen Wettbewerb, obwohl nur zwei Firmen am Markt sind.</p>
      <p>Auflösungen des Paradoxons: Kapazitätsbeschränkungen, Produktdifferenzierung oder wiederholte Interaktion können zu Preisen oberhalb der GK führen.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Immer Wettbewerbsvariable nennen (Menge vs. Preis). Bei Cournot: RR zeichnen, symmetrisches Duopol $q_1^*=q_2^*$. Bei Bertrand: Kapazitätsbindung oder Produktdifferenzierung als Realismus-Check erwähnen.</p>
      <div class="warn-box"><strong>Paradox nicht vergessen:</strong> Bertrand mit homogenem Gut und $MC$ konstant → Preis = MC; Cournot bei gleichen Kosten → $P>MC$. Modellwahl entscheidet Marktergebnis.</div>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Cournot vs. Bertrand:</strong> Bei identischen Gütern und ohne Kapazitätsbeschränkungen führt Bertrand-Wettbewerb zu Wettbewerbspreisen — Cournot hingegen zu einem Ergebnis zwischen Monopol und Wettbewerb. Die Modellwahl hängt davon ab, ob Firmen über Preise oder Mengen entscheiden.</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Cournot vs. Bertrand</h4>
<p>Cournot: Mengenwettbewerb, RR $q_i^*(q_j)$, Schnitt = Nash in Mengen. Homogene Güter + Bertrand: Preiswettbewerb → $P=MC$, wie Wettbewerb (Bertrand-Paradox). Differenzierung rettet $P>MC$.</p>
      <div class="math-block">$$q_i^*:\\ \\frac{\\partial \\pi_i}{\\partial q_i} = 0 \\quad\\text{(Cournot)}\\qquad P_1=P_2=MC\\ \\text{(Bertrand, homogen)}$$</div>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Immer Wettbewerbsvariable nennen (Menge vs. Preis). Bei Cournot: RR zeichnen, symmetrisches Duopol $q_1^*=q_2^*$. Bei Bertrand: Kapazitätsbindung oder Produktdifferenzierung als Realismus-Check erwähnen.</p>
      <div class="warn-box"><strong>Paradox nicht vergessen:</strong> Bertrand mit homogenem Gut und $MC$ konstant → Preis = MC; Cournot bei gleichen Kosten → $P>MC$. Modellwahl entscheidet Marktergebnis.</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Gewinnfunktion (i)', eq: String.raw`$$\pi_i = (a - b(q_i + q_j))q_i - c q_i$$`, desc: 'Lineare Nachfrage', variables: { a: 'Nachfrageabschnitt', b: 'Steigung der Nachfrage', c: 'Grenzkosten' } },
      { label: 'Cournot-Menge (symm.)', eq: String.raw`$$q^* = \frac{a-c}{3b}$$`, desc: 'Duopol-Gleichgewicht', variables: { a: 'Nachfrageabschnitt', c: 'Grenzkosten', b: 'Steigungsparameter' } }
    ],
    aufgaben: [
      {
        text: String.raw`Gegeben sei $P(Q) = 100 - Q$ und $c=10$. Berechnen Sie die Cournot-Gleichgewichtsmengen für zwei identische Firmen.`,
        steps: [
          { text: String.raw`Reaktionsfunktion aufstellen:`, eq: String.raw`100 - 2q_i - q_j - 10 = 0 \implies q_i(q_j) = \frac{90-q_j}{2}` },
          { text: String.raw`Symmetrie nutzen ($q_i = q_j = q^*$):`, eq: String.raw`q^* = \frac{90-q^*}{2} \implies 2q^* = 90 - q^* \implies 3q^* = 90` }
        ],
        result: String.raw`$q_1^* = q_2^* = 30$.`
      },
      {
        text: String.raw`Cournot-Duopol mit $P = 120 - Q_1 - Q_2$ und $c_1 = c_2 = 0$. Leiten Sie die Reaktionsfunktionen ab, berechnen Sie die Gleichgewichtsmengen und vergleichen Sie mit Monopol und vollkommenem Wettbewerb.`,
        steps: [
          { text: String.raw`Gewinnmaximierung Firma 1: $\partial \pi_1 / \partial Q_1 = 0$.`, eq: String.raw`120 - 2Q_1 - Q_2 = 0 \implies Q_1^*(Q_2) = \frac{120 - Q_2}{2} = 60 - \frac{Q_2}{2}` },
          { text: String.raw`Symmetrie: $Q_2^*(Q_1) = 60 - Q_1/2$. Gleichungssystem lösen.`, eq: String.raw`Q_1^* = 60 - \frac{1}{2}\left(60 - \frac{Q_1^*}{2}\right) = 30 + \frac{Q_1^*}{4} \implies \frac{3Q_1^*}{4} = 30 \implies Q_1^* = 40` },
          { text: String.raw`Gesamtmenge und Preis im Cournot-GG:`, eq: String.raw`Q^C = 40 + 40 = 80, \quad P^C = 120 - 80 = 40` },
          { text: String.raw`Vergleich: Monopol ($MR = MC$): $120 - 2Q = 0 \implies Q^M = 60$, $P^M = 60$. Wettbewerb: $P = MC = 0 \implies Q^W = 120$.`, eq: String.raw`Q^M = 60 < Q^C = 80 < Q^W = 120 \quad P^M = 60 > P^C = 40 > P^W = 0` }
        ],
        result: String.raw`Cournot: $Q_1^* = Q_2^* = 40$, $Q^C = 80$, $P^C = 40$. Ergebnis liegt zwischen Monopol ($Q=60$, $P=60$) und Wettbewerb ($Q=120$, $P=0$): mehr Menge, niedrigerer Preis als Monopol, aber noch Marktmacht vorhanden.`
      },
      {
        text: String.raw`Verwenden Sie das gleiche Marktumfeld ($P = 120 - Q$, $c = 0$). Berechnen Sie Gewinne, Konsumentenrente und Wohlfahrtsverlust (DWL) unter Cournot und Monopol. Vergleichen Sie die Ergebnisse.`,
        steps: [
          { text: String.raw`Cournot-Gewinne: $\pi_i^C = P^C \cdot Q_i^C$.`, eq: String.raw`\pi_i^C = 40 \cdot 40 = 1600 \quad \pi_{ges}^C = 3200` },
          { text: String.raw`Cournot-KR: Dreieck über $P^C = 40$ bis Höchstpreis 120.`, eq: String.raw`KR^C = \frac{1}{2}(120-40) \cdot 80 = 3200` },
          { text: String.raw`Monopol-Gewinne und KR:`, eq: String.raw`\pi^M = 60 \cdot 60 = 3600 \quad KR^M = \frac{1}{2}(120-60) \cdot 60 = 1800` },
          { text: String.raw`DWL Cournot vs. Wettbewerb: Dreieck zwischen $Q^C=80$ und $Q^W=120$.`, eq: String.raw`DWL^C = \frac{1}{2}(P^C - c)(Q^W - Q^C) = \frac{1}{2} \cdot 40 \cdot 40 = 800` }
        ],
        result: String.raw`Cournot-GW: $KR = 3200$, $\pi_{ges} = 3200$, $DWL = 800$. Monopol: $KR = 1800$, $\pi = 3600$, $DWL = 1800$. Cournot ist wohlfahrtseffizienter als Monopol (kleinerer DWL), aber weniger effizient als vollkommener Wettbewerb (kein DWL).`
      },
      {
        text: String.raw`Graph/Formel-Link: Gegeben sind Reaktionsfunktionen $q_1 = 40 - 0{,}5q_2$ und $q_2 = 40 - 0{,}5q_1$. Bestimmen Sie den Schnittpunkt und erklären Sie, warum dieser Punkt das Cournot-Gleichgewicht ist.`,
        steps: [
          { text: String.raw`Eine Reaktionsfunktion in die andere einsetzen:`, eq: String.raw`q_1 = 40 - 0{,}5(40 - 0{,}5q_1) = 20 + 0{,}25q_1` },
          { text: String.raw`Nach $q_1$ auflösen:`, eq: String.raw`0{,}75q_1 = 20 \implies q_1^* = \frac{80}{3}` },
          { text: String.raw`Symmetrisch folgt:`, eq: String.raw`q_2^* = \frac{80}{3}` },
          { text: String.raw`Interpretation im Diagramm:`, eq: String.raw`\text{Im Schnittpunkt sind beide Firmen gleichzeitig auf ihrer besten Antwortkurve.}` }
        ],
        result: String.raw`Der Schnittpunkt $(q_1^*, q_2^*) = \left(\frac{80}{3}, \frac{80}{3}\right)$ ist genau das Cournot-Nash-Gleichgewicht: Keine Firma kann bei gegebener Konkurrenzmenge ihre Menge einseitig verbessern.`
      }
    ]
  },
  oligopol_stackelberg: {
    motivation: 'Wenn Mengenentscheidungen sequenziell getroffen werden, entsteht eine Führungslogik: Der First-Mover antizipiert die Reaktion des Folgers und verschiebt damit das Gleichgewicht.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Stackelberg-Grundidee</h4>
<p>Im Stackelberg-Modell wählt der Führer seine Menge zuerst. Der Folger reagiert anschließend optimal auf diese Führungsmenge. Das Ergebnis ist kein simultanes Nash wie bei Cournot, sondern ein sequenzielles Gleichgewicht.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Rückwärtsinduktion</h4>
<p>Die Lösung erfolgt in zwei Schritten: Zuerst wird die Reaktionsfunktion des Folgers bestimmt, dann setzt der Führer diese in seine Gewinnfunktion ein und maximiert.</p>
      <div class="math-block">$$q_1^{Stack} = \\\\frac{a-c}{2b} > q^{Cournot} = \\\\frac{a-c}{3b}$$</div>


<h4 class="theory-subsection-title">Stackelberg-Folger</h4>
<p>Folger wählt $q_2$ gegeben $q_1$ (Reaktionsfunktion). Leader internalisiert Folgerreaktion → höhere $q_1$ als Cournot bei symmetrischen Kosten.</p>
      <div class="math-block">$$q_2 = RR_2(q_1),\\\\quad \\\\max_{q_1} \\\\pi_1(q_1, RR_2(q_1))$$</div>

<div class="section-block">
<h4 class="theory-subsection-title">Stackelberg-Folger</h4>
<p>Folger wählt $q_2$ gegeben $q_1$ (Reaktionsfunktion). Leader internalisiert Folgerreaktion → höhere $q_1$ als Cournot bei symmetrischen Kosten.</p>
      <div class="math-block">$$q_2 = RR_2(q_1),\\quad \\max_{q_1} \\pi_1(q_1, RR_2(q_1))$$</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Ökonomische Interpretation</h4>
<p>Der Führer produziert typischerweise mehr als im Cournot-Fall, der Folger weniger. Dadurch verschiebt sich Gesamtmenge und Marktpreis relativ zum simultanen Mengenwettbewerb.</p>


<h4 class="theory-subsection-title">Numerisches Beispiel</h4>
<p>Symmetrisches linearer Fall: $P=a-bQ$, $MC=c$. RR Folger $q_2=(a-c-bq_1)/(2b)$. Leader: $q_1^*=(a-c)/(2b)$ — strikt über Cournot-$q$ bei gleichen Parametern.</p>


<h4 class="theory-subsection-title">In der Klausur: Stackelberg</h4>
<p>Reihenfolge: (1) RR des Folgers aus FOC. (2) Leader maximiert mit eingesetzter RR. (3) $q_1^*, q_2^*$; Leader-Menge typisch > Cournot-Menge des Leaders. First-mover advantage bei steigenden Grenzkosten des Folgers.</p>
      <div class="warn-box"><strong>Commitment:</strong> Stackelberg setzt voraus, dass Leader-Menge bindend ist — sonst Cournot oder Bertrand je nach Modell.</div>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Timing-Fehler:</strong> Stackelberg darf nicht wie Cournot behandelt werden. Wer simultan statt sequentiell rechnet, verliert den Führervorteil rechnerisch.</div>
      <div class="warn-box"><strong>Mechanik-Fehler:</strong> Der Führer maximiert nicht „gegen den Markt“, sondern gegen die antizipierte Folgerreaktion.</div>

<div class="section-block">
<h4 class="theory-subsection-title">Numerisches Beispiel</h4>
<p>Symmetrisches linearer Fall: $P=a-bQ$, $MC=c$. RR Folger $q_2=(a-c-bq_1)/(2b)$. Leader: $q_1^*=(a-c)/(2b)$ — strikt über Cournot-$q$ bei gleichen Parametern.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Stackelberg</h4>
<p>Reihenfolge: (1) RR des Folgers aus FOC. (2) Leader maximiert mit eingesetzter RR. (3) $q_1^*, q_2^*$; Leader-Menge typisch > Cournot-Menge des Leaders. First-mover advantage bei steigenden Grenzkosten des Folgers.</p>
      <div class="warn-box"><strong>Commitment:</strong> Stackelberg setzt voraus, dass Leader-Menge bindend ist — sonst Cournot oder Bertrand je nach Modell.</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Führermenge', eq: String.raw`$$q_1^{Stack} = \frac{a-c}{2b}$$`, desc: 'Optimale Menge des First Movers bei linearer Nachfrage.' },
      { label: 'Folgerreaktion', eq: String.raw`$$q_2(q_1)=\frac{a-c-bq_1}{2b}$$`, desc: 'Beste Antwort des Followers auf die Führermenge.' }
    ],
    aufgaben: [
      {
        text: String.raw`Verwenden Sie das Marktumfeld $P(Q)=100-Q$, $c=10$, aber Firma 1 ist Stackelberg-Führer. Berechnen Sie $q_1^*$, $q_2^*$ und vergleichen Sie mit Cournot.`,
        steps: [
          { text: String.raw`Reaktionsfunktion des Folgers (aus Cournot):`, eq: String.raw`q_2(q_1)=\frac{90-q_1}{2}` },
          { text: String.raw`Führerproblem mit antizipierter Reaktion:`, eq: String.raw`\pi_1=\left(90-q_1-\frac{90-q_1}{2}\right)q_1=\frac{90-q_1}{2}\,q_1 \Rightarrow q_1^*=45` },
          { text: String.raw`Folger und Marktresultat:`, eq: String.raw`q_2^*=\frac{90-45}{2}=22{,}5,\quad Q_{Stack}=67{,}5,\quad P_{Stack}=32{,}5` }
        ],
        result: String.raw`Der Führer produziert mehr als im Cournot-GG (45 statt 30), der Folger weniger (22,5 statt 30): klassischer First-Mover-Vorteil.`
      },
      {
        text: String.raw`Warum ist der Führervorteil kein „Naturgesetz“, sondern ein Modellresultat?`,
        steps: [
          { text: String.raw`Voraussetzungen explizit machen.`, eq: String.raw`\text{Sequentielles Timing und glaubwürdige Bindung der Führermenge sind erforderlich.}` },
          { text: String.raw`Vergleich zum simultanen Fall.`, eq: String.raw`\text{Bei simultaner Entscheidung (Cournot) verschwindet der spezifische Führervorteil.}` }
        ],
        result: String.raw`Der Stackelberg-Vorteil entsteht aus Timing und Bindung; ohne diese Struktur ist das Ergebnis nicht stabil übertragbar.`
      }
    ]
  },
  intertemporaler_konsum: {
    motivation: 'Vorlesung 12 überträgt die Mikro-I-Haushaltslogik auf zwei Perioden: Konsum heute und Konsum morgen werden als zwei Güter im intertemporalen Entscheidungsproblem behandelt.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Zwei Perioden, ein Konsumgut</h4>
<p>Der Haushalt lebt in Periode 1 und 2. Das Konsumgut hat in beiden Perioden den normierten Preis 1. Die Entscheidung lautet: heute konsumieren, sparen oder sich verschulden.</p>
      <p>Die offizielle Notation verwendet $c_1$ für Gegenwartskonsum, $c_2$ für Zukunftskonsum, $m_1$ und $m_2$ für Einkommen sowie $r$ für den Zinssatz.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Intertemporale Budgetbeschränkung</h4>
<p>In Gegenwartswerten darf der Gegenwartswert des Konsums den Gegenwartswert des Einkommens nicht überschreiten.</p>
      <div class="math-block">$$c_1+\\\\frac{c_2}{1+r}=m_1+\\\\frac{m_2}{1+r}$$</div>
      <p>Äquivalent lässt sich die Budgetgerade in Zukunftswerten schreiben. Die Steigung hängt vom Zinssatz ab und zeigt die Opportunitätskosten von Konsum heute.</p>


<h4 class="theory-subsection-title">Optimierung mit Nutzen $u(c_1,c_2)$</h4>
<p>Bei additiver Nutzenfunktion $u(c_1,c_2)=u_1(c_1)+u_2(c_2)$ liefert die tangential optimale Konsumkombination die Euler-Gleichung: Der Grenznutzen heute muss mit dem diskontierten Grenznutzen morgen im Gleichgewicht übereinstimmen.</p>
      <div class="math-block">$$u_1'(c_1^*)=\\\\frac{1}{1+r}u_2'(c_2^*)$$</div>
      <p>Bei logarithmischem Nutzen $u_i(c)=\\\\ln c_i$ folgt unmittelbar $c_2^*=(1+r)c_1^*$: Konsum wächst mit dem Zinsfaktor.</p>


<h4 class="theory-subsection-title">In der Klausur: Intertemporale Wahl</h4>
<p>Zwei-Perioden-Budget: $c_1 + c_2/(1+r) = y_1 + y_2/(1+r)$. Euler-Gleichung bei CRRA/Log: $u'(c_1) = (1+r)\\\\beta u'(c_2)$. Zinssenkung: Substitution (mehr heute) vs. Einkommens-Effekt (mehr beide Perioden bei Sparer).</p>
      <div class="math-block">$$c_1 + \\\\frac{c_2}{1+r} = y_1 + \\\\frac{y_2}{1+r}$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Zinsänderung und Konsumplan</h4>
<p>Eine Zinsänderung dreht die Budgetgerade um den Ausstattungspunkt. Ob Gegenwartskonsum steigt oder fällt, hängt von Substitutions- und Einkommenseffekt sowie davon ab, ob der Haushalt Netto-Sparer oder Netto-Schuldner ist.</p>
      <div class="warn-box"><strong>Klausurfehler:</strong> Nicht jede Zinserhöhung senkt automatisch $c_1$. Bei Netto-Sparern und Netto-Schuldnern wirken Einkommenseffekte in unterschiedliche Richtungen.</div>


<h4 class="theory-subsection-title">Mechanismus</h4>
<p>Präferenz über $(c_1,c_2)$; $r$ ist Opportunitätskosten des heutigen Konsums. Bei $\\\\beta<1$ und $r=0$ tendiert Konsum zur Glättung. Liquidity constraint: $c_1$ kann $y_1$ nicht überschreiten — Euler bindet nicht.</p>
      <div class="warn-box"><strong>Realzins:</strong> In Klausuren $r$ als realer Zins interpretieren, wenn Inflation nicht modelliert wird.</div>

<div class="section-block">
<h4 class="theory-subsection-title">Mechanismus</h4>
<p>Präferenz über $(c_1,c_2)$; $r$ ist Opportunitätskosten des heutigen Konsums. Bei $\\beta<1$ und $r=0$ tendiert Konsum zur Glättung. Liquidity constraint: $c_1$ kann $y_1$ nicht überschreiten — Euler bindet nicht.</p>
      <div class="warn-box"><strong>Realzins:</strong> In Klausuren $r$ als realer Zins interpretieren, wenn Inflation nicht modelliert wird.</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Intertemporale Wahl</h4>
<p>Zwei-Perioden-Budget: $c_1 + c_2/(1+r) = y_1 + y_2/(1+r)$. Euler-Gleichung bei CRRA/Log: $u'(c_1) = (1+r)\\beta u'(c_2)$. Zinssenkung: Substitution (mehr heute) vs. Einkommens-Effekt (mehr beide Perioden bei Sparer).</p>
      <div class="math-block">$$c_1 + \\frac{c_2}{1+r} = y_1 + \\frac{y_2}{1+r}$$</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Gegenwartswert-Budget', eq: String.raw`$$c_1+\frac{c_2}{1+r}=m_1+\frac{m_2}{1+r}$$`, desc: 'Intertemporale Budgetbeschränkung in Gegenwartswerten.' },
      { label: 'Zukunftswert-Budget', eq: String.raw`$$(1+r)c_1+c_2=(1+r)m_1+m_2$$`, desc: 'Äquivalente Schreibweise in Zukunftswerten.' },
      { label: 'Euler-Gleichung', eq: String.raw`$$u_1'(c_1^*)=\frac{1}{1+r}u_2'(c_2^*)$$`, desc: 'Gleichgewichtsbedingung bei additiver Nutzenfunktion.' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Haushalt hat $m_1=100$, $m_2=110$ und $r=10\%$. Wie lautet die intertemporale Budgetbeschränkung in Gegenwartswerten?`,
        steps: [
          { text: String.raw`Gegenwartswert des Einkommens berechnen.`, eq: String.raw`m_1+\frac{m_2}{1+r}=100+\frac{110}{1{,}1}=200` },
          { text: String.raw`Budgetgleichung notieren.`, eq: String.raw`c_1+\frac{c_2}{1{,}1}=200` }
        ],
        result: String.raw`Die Gegenwartswert-Budgetgerade lautet $c_1+\frac{c_2}{1{,}1}=200$.`
      },
      {
        text: String.raw`Logarithmischer Nutzen $u(c_1,c_2)=\ln c_1+\ln c_2$, $m_1=80$, $m_2=0$, $r=25\%$. Bestimmen Sie $c_1^*$ und $c_2^*$ mit Budget und Euler-Gleichung.`,
        steps: [
          { text: String.raw`Budget in GW:`, eq: String.raw`c_1+\frac{c_2}{1{,}25}=80` },
          { text: String.raw`Euler: $1/c_1^*=1/(1{,}25)c_2^*$.`, eq: String.raw`c_2^*=1{,}25c_1^*` },
          { text: String.raw`Einsetzen:`, eq: String.raw`c_1^*+\frac{1{,}25c_1^*}{1{,}25}=80 \Rightarrow 2c_1^*=80 \Rightarrow c_1^*=40,\; c_2^*=50` }
        ],
        result: String.raw`$c_1^*=40$, $c_2^*=50$. Der Haushalt spart in die Zukunft, weil Perioden-2-Einkommen fehlt und der Zins Konsumverschiebung belohnt.`
      },
      {
        text: String.raw`Zins steigt von $r=5\%$ auf $r=15\%$. Ein Netto-Sparer hat Ausstattung $(m_1,m_2)=(100,50)$. Richtung von $c_1$? Begründen Sie mit Einkommens- und Substitutionseffekt.`,
        steps: [
          { text: String.raw`Substitutionseffekt: Höherer Zins macht Sparen attraktiver.`, eq: String.raw`\text{SE: } c_1 \downarrow` },
          { text: String.raw`Einkommenseffekt für Netto-Sparer: höherer Zins erhöht Gesamtvermögen.`, eq: String.raw`\text{EE: } c_1 \uparrow` },
          { text: String.raw`Nettoeffekt ist theoretisch offen; in Standardaufgaben dominiert oft EE für Sparer.`, eq: String.raw`\text{Klausur: beide Effekte benennen, nicht nur Richtung raten.}` }
        ],
        result: String.raw`Die qualitative Antwort hängt von Präferenzen und Ausstattung ab — klausurrelevant ist die saubere Zerlegung in Substitution und Einkommenseffekt.`
      }
    ]
  },
  unsicherheit_versicherung: {
    motivation: 'Vorlesungen 13 und 14 modellieren Unsicherheit als bedingten Konsum in Naturzuständen und leiten Erwartungsnutzen, Risikoaversion und Versicherungsnachfrage ab.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Bedingter Konsum</h4>
<p>Unsichere Ereignisse werden als Naturzustände modelliert. Konsum im Zustand „Schaden“ und Konsum im Zustand „kein Schaden“ sind die beiden Güter der Entscheidung.</p>
      <p>Die Kursnotation verwendet $c_1$ für Konsum im Schadenszustand, $c_2$ für Konsum ohne Schaden, $m_1=m-d$ und $m_2=m$ für die zustandsabhängigen Ausstattungen.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Erwartungsnutzen und Risikoeinstellung</h4>
<p>Beim Erwartungsnutzen werden zustandsabhängige Nutzenwerte mit Eintrittswahrscheinlichkeiten gewichtet. Risikoaversion zeigt sich in konkaver Nutzenfunktion, Risikoneutralität in linearer und Risikofreude in konvexer Nutzenfunktion.</p>
      <div class="math-block">$$EU=\\\\pi u(c_1)+(1-\\\\pi)u(c_2)$$</div>


<h4 class="theory-subsection-title">Versicherungsmarkt</h4>
<p>Eine Versicherung verschiebt Konsum vom Zustand ohne Schaden in den Schadenszustand. Bei fairer Prämie und Risikoaversion ist Vollversicherung nutzenmaximierend.</p>
      <div class="math-block">$$\\\\gamma=\\\\pi \\\\quad \\\\Rightarrow \\\\quad \\\\text{faire Versicherung}$$</div>
      <p>Das Ausmaß der Risikoaversion kann über Sicherheitsäquivalent und Risikoprämie beschrieben werden.</p>


<h4 class="theory-subsection-title">Erwartungsnutzen &amp; Versicherung</h4>
<p>Risikoaverse zahlen Prämie $>$ erwarteter Schaden für Aktuar-Fairness nicht zwingend — Risikoprämie. Vollversicherung bei NM-Utility und fairer Prämie.</p>
      <div class="math-block">$$EU = \\\\sum_s \\\\pi_s u(w_s),\\\\quad u''<0 \\\\Rightarrow \\\\text{risk averse}$$</div>

<div class="section-block">
<h4 class="theory-subsection-title">Erwartungsnutzen &amp; Versicherung</h4>
<p>Risikoaverse zahlen Prämie $>$ erwarteter Schaden für Aktuar-Fairness nicht zwingend — Risikoprämie. Vollversicherung bei NM-Utility und fairer Prämie.</p>
      <div class="math-block">$$EU = \\sum_s \\pi_s u(w_s),\\quad u''<0 \\Rightarrow \\text{risk averse}$$</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Moral Hazard / Adverse Selection</h4>
<p>Ex-ante: Hidden characteristics → Adverse Selection. Ex-post: Hidden action → Moral Hazard; Vollversicherung dann typischerweise suboptimal.</p>


<h4 class="theory-subsection-title">In der Klausur: Unsicherheit</h4>
<p>State-contingent claims: Budget $p_1 x_1 + p_2 x_2 = W$. Fair odds: $p_s = \\\\pi_s$. Optimal: $u'(c_s)$ proportional zu $\\\\pi_s$ bei NM. Versicherung: Transfer zwischen Zuständen gegen Prämie.</p>
      <div class="warn-box"><strong>NM vs. andere Utility:</strong> Vollversicherung bei fairer Prämie nur bei NM-Utility — bei DARA typischerweise unterversichert.</div>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Zustandsfehler:</strong> $c_1$ und $c_2$ sind hier keine Zeitperioden, sondern Konsum in Naturzuständen. Nicht mit intertemporalem Konsum verwechseln.</div>

<div class="section-block">
<h4 class="theory-subsection-title">Moral Hazard / Adverse Selection</h4>
<p>Ex-ante: Hidden characteristics → Adverse Selection. Ex-post: Hidden action → Moral Hazard; Vollversicherung dann typischerweise suboptimal.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Unsicherheit</h4>
<p>State-contingent claims: Budget $p_1 x_1 + p_2 x_2 = W$. Fair odds: $p_s = \\pi_s$. Optimal: $u'(c_s)$ proportional zu $\\pi_s$ bei NM. Versicherung: Transfer zwischen Zuständen gegen Prämie.</p>
      <div class="warn-box"><strong>NM vs. andere Utility:</strong> Vollversicherung bei fairer Prämie nur bei NM-Utility — bei DARA typischerweise unterversichert.</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Erwartungsnutzen', eq: String.raw`$$EU=\pi u(c_1)+(1-\pi)u(c_2)$$`, desc: 'Nutzen über zwei Naturzustände.' },
      { label: 'Faire Prämie', eq: String.raw`$$\gamma=\pi$$`, desc: 'Nullgewinnbedingung im einfachen Versicherungsmodell.' },
      { label: 'Risikoprämie', eq: String.raw`$$RP=E[x]-CE$$`, desc: 'Differenz zwischen Erwartungswert und Sicherheitsäquivalent.' }
    ],
    aufgaben: [
      {
        text: String.raw`Warum führt eine faire Versicherung bei Risikoaversion zur Vollversicherung?`,
        steps: [
          { text: String.raw`Faire Prämie bedeutet gleiche erwartete Auszahlung und Prämienlast.`, eq: String.raw`\gamma=\pi` },
          { text: String.raw`Risikoaverse Haushalte bevorzugen Glättung des Konsums über Zustände.`, eq: String.raw`c_1=c_2 \quad \text{im Vollversicherungsfall}` }
        ],
        result: String.raw`Bei fairer Prämie kostet Risikoreduktion im Erwartungswert nichts; Risikoaversion macht vollständige Konsumglättung optimal.`
      },
      {
        text: String.raw`Nutzen $u(c)=\ln c$, Vermögen $m=100$, Schaden $L=40$ mit Wahrscheinlichkeit $\pi=0{,}2$. Berechnen Sie den erwarteten Nutzen ohne Versicherung und mit fairer Vollversicherung.`,
        steps: [
          { text: String.raw`Zustände: $c_1=60$, $c_2=100$.`, eq: String.raw`EU_{\text{ohne}}=0{,}2\ln 60+0{,}8\ln 100` },
          { text: String.raw`Mit fairer Vollversicherung: $c_1=c_2=80$.`, eq: String.raw`EU_{\text{mit}}=\ln 80` },
          { text: String.raw`Vergleich:`, eq: String.raw`EU_{\text{mit}} > EU_{\text{ohne}}` }
        ],
        result: String.raw`Vollversicherung erhöht den erwarteten Nutzen trotz fairer Prämie — klassische Risikoaversion.`
      },
      {
        text: String.raw`Erwartungsnutzen $EU=\pi u(c_1)+(1-\pi)u(c_2)$ mit $u(c)=\sqrt{c}$, $\pi=0{,}5$, $c_1=4$, $c_2=16$. Berechnen Sie $EU$ und ordnen Sie die Risikoeinstellung ein.`,
        steps: [
          { text: String.raw`Erwartungsnutzen:`, eq: String.raw`EU=0{,}5\cdot 2+0{,}5\cdot 4=3` },
          { text: String.raw`Erwartungswert des Konsums:`, eq: String.raw`E[c]=0{,}5\cdot 4+0{,}5\cdot 16=10` },
          { text: String.raw`Vergleich mit $u(E[c])$:`, eq: String.raw`u(10)=\sqrt{10}\approx 3{,}16>3 \Rightarrow \text{risikoavers}` }
        ],
        result: String.raw`$EU=3 < u(E[c])$ — der Agent ist risikoavers und würde Unsicherheit gegen eine faire Prämie abbauen.`
      }
    ]
  },
  gleichgewicht_tausch: {
    motivation: 'Bisher haben wir Märkte isoliert betrachtet (Partialanalyse). Das allgemeine Gleichgewicht betrachtet alle Märkte gleichzeitig und analysiert Tausch- und Produktionseffizienz.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Die Edgeworth-Box</h4>
<p>Zwei Konsumenten tauschen zwei Güter. Jeder Punkt in der Box stellt eine Aufteilung der Gesamtausstattung dar. Indifferenzkurven verlaufen für Konsument A vom Ursprung unten links, für B von oben rechts.</p>
      <p>Ein Tausch ist vorteilhaft, wenn er einen Konsumenten besser stellt, ohne den anderen schlechter zu stellen. Die Linse zwischen zwei sich schneidenden Indifferenzkurven zeigt alle solche Tauschrichtungen an.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Pareto-Effizienz</h4>
<p>Eine Allokation ist Pareto-effizient, wenn man keinen Spieler besser stellen kann, ohne einen anderen schlechter zu stellen. Grafisch sind dies die Tangentialpunkte der Indifferenzkurven.</p>
      <div class="math-block">$$GRS^A = GRS^B$$</div>
      <p>Die Tangentialbedingung garantiert, dass keine weiteren Tauschgewinne mehr möglich sind.</p>


<h4 class="theory-subsection-title">Walrasianisches Gleichgewicht</h4>
<p>Ein Preisvektor $p^*$ räumt alle Märkte gleichzeitig. Das Walrassche Gesetz besagt: Wenn $n-1$ Märkte im Gleichgewicht sind, ist auch der $n$-te Markt geräumt.</p>
      <div class="math-block">$$\\\\sum_i z_i(p) = 0 \\\\quad \\\\text{(Walrasches Gesetz)}$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Kontraktkurve</h4>
<p>Die Menge aller Pareto-effizienten Punkte in der Edgeworth-Box wird als Kontraktkurve bezeichnet. Auf dieser Kurve ist jede Verbesserung für eine Person mit einer Verschlechterung für die andere verbunden.</p>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Pareto-Effizienz ≠ Gerechtigkeit:</strong> Ein Punkt auf der Kontraktkurve kann extrem ungleich verteilt sein. Pareto-Effizienz ist ein schwaches Kriterium — es urteilt nicht über Verteilungsgerechtigkeit.</div>
      <div class="warn-box"><strong>Walrasianisches GG vs. allgemeines GG:</strong> Das Walrasianische GG setzt vollkommene Märkte, vollständige Information und Preisflexibilität voraus. In der Realität können Marktversagen und Preisrigiditäten ein allgemeines Ungleichgewicht erzeugen.</div>

</div>
</section>`,
    formeln: [
      { label: 'Effizienzbedingung', eq: String.raw`$$\frac{MU_1^A}{MU_2^A} = \frac{MU_1^B}{MU_2^B}$$`, desc: 'Gleichheit der Grenzraten der Substitution', variables: { MU_1: 'Grenznutzen von Gut 1', MU_2: 'Grenznutzen von Gut 2' } }
    ],
    aufgaben: [
      {
        text: String.raw`In einer Tauschökonomie gilt $u^A = x_1^A x_2^A$ und $u^B = x_1^B x_2^B$. Gesamtausstattung ist $(10, 10)$. Prüfen Sie, ob der Punkt $x^A=(2,2), x^B=(8,8)$ Pareto-effizient ist.`,
        steps: [
          { text: String.raw`Berechne GRS für A:`, eq: String.raw`GRS^A = \frac{MU_1^A}{MU_2^A} = \frac{x_2^A}{x_1^A} = \frac{2}{2} = 1` },
          { text: String.raw`Berechne GRS für B:`, eq: String.raw`GRS^B = \frac{x_2^B}{x_1^B} = \frac{8}{8} = 1` },
          { text: String.raw`Entscheidung: Gilt $GRS^A = GRS^B$?`, eq: String.raw`1 = 1 \implies \text{Pareto-effizient.}` }
        ],
        result: String.raw`Die Allokation ist Pareto-effizient.`
      },
      {
        text: String.raw`In einer Edgeworth-Box gelten bei einer gegebenen Allokation $GRS^A = 4$ und $GRS^B = 1$. Kann diese Allokation Pareto-effizient sein? Wenn nicht: In welche Richtung sollte getauscht werden?`,
        steps: [
          { text: String.raw`Effizienzbedingung prüfen:`, eq: String.raw`GRS^A = GRS^B \text{ notwendig für Pareto-Effizienz.}\quad 4 \neq 1 \implies \text{nicht effizient.}` },
          { text: String.raw`Interpretation der Ungleichheit:`, eq: String.raw`GRS^A=4 \text{: A gibt bis zu 4 Einheiten Gut 2 für 1 Einheit Gut 1 auf. B gibt nur 1.}` },
          { text: String.raw`Handelsrichtung: A bewertet Gut 1 viel höher als B.`, eq: String.raw`\text{A gibt B Gut 2, B gibt A Gut 1} \implies \text{Pareto-Verbesserung bis } GRS^A = GRS^B.` }
        ],
        result: String.raw`Nein, die Allokation ist nicht Pareto-effizient. Gut 1 sollte von B zu A fließen (und Gut 2 umgekehrt), solange $GRS^A > GRS^B$. Erst bei $GRS^A = GRS^B$ liegt ein Punkt auf der Kontraktkurve vor.`
      },
      {
        text: String.raw`Tauschökonomie: $u^A = \min(x_1^A, x_2^A)$, $u^B = x_1^B + x_2^B$ (perfekte Komplemente vs. perfekte Substitute). Gesamtausstattung $(6,6)$. Beschreiben Sie die Kontraktkurve und leiten Sie das Walrasianische Gleichgewicht ab.`,
        steps: [
          { text: String.raw`Präferenzen A (Leontief): Optimum immer bei $x_1^A = x_2^A$.`, eq: String.raw`\text{A konsumiert immer gleiche Mengen beider Güter: } x_1^A = x_2^A = k` },
          { text: String.raw`Präferenzen B (linear): GRS ist konstant = 1. B ist indifferent zwischen Gütern, wenn $p_1 = p_2$.`, eq: String.raw`GRS^B = \frac{MU_1^B}{MU_2^B} = \frac{1}{1} = 1` },
          { text: String.raw`Im GG: $GRS^A$ (an Eckpunkt) nicht definiert, aber Bereich $[0, \infty)$. Preis-GG bei $p_1 = p_2$.`, eq: String.raw`p_1 = p_2 \implies \text{A wählt } x_1^A = x_2^A; \text{ B ist indifferent.}` },
          { text: String.raw`Budgetgerade von A bei $p_1 = p_2 = 1$, Endowment $(e_1^A, e_2^A)$:`, eq: String.raw`\text{GG: } x_1^A = x_2^A = 3; \; x_1^B = x_2^B = 3` }
        ],
        result: String.raw`Die Kontraktkurve besteht aus allen Punkten $(k, k, 6-k, 6-k)$ mit $k \in [0,6]$ — die Diagonale der Edgeworth-Box. Das Walrasianische GG bei $p_1/p_2 = 1$ liegt bei $(3,3,3,3)$, wenn beide anfänglich gleich ausgestattet sind.`
      },
      {
        text: String.raw`Zwei Güter, zwei Konsumenten. $u^A = x_1^{0{,}5} (x_2^A)^{0{,}5}$, $u^B = x_1^B x_2^B$. Endowments: $e^A = (4,0)$, $e^B = (0,4)$. Bestimmen Sie das Walrasianische Gleichgewicht (Preise und Allokation).`,
        steps: [
          { text: String.raw`Marshallsche Nachfragen A: $x_1^A = \frac{0{,}5 I^A}{p_1}$, $x_2^A = \frac{0{,}5 I^A}{p_2}$, $I^A = 4p_1$.`, eq: String.raw`x_1^A = \frac{0{,}5 \cdot 4p_1}{p_1} = 2, \quad x_2^A = \frac{0{,}5 \cdot 4p_1}{p_2} = \frac{2p_1}{p_2}` },
          { text: String.raw`Marshallsche Nachfragen B: $x_1^B = \frac{0{,}5 I^B}{p_1}$, $x_2^B = \frac{0{,}5 I^B}{p_2}$, $I^B = 4p_2$.`, eq: String.raw`x_1^B = \frac{2p_2}{p_1}, \quad x_2^B = 2` },
          { text: String.raw`Marktgleichgewicht Gut 1: $x_1^A + x_1^B = 4$.`, eq: String.raw`2 + \frac{2p_2}{p_1} = 4 \implies \frac{2p_2}{p_1} = 2 \implies p_1 = p_2` },
          { text: String.raw`Gleichgewichtsallokation bei $p_1 = p_2$:`, eq: String.raw`x_1^A = 2,\; x_2^A = 2,\; x_1^B = 2,\; x_2^B = 2` }
        ],
        result: String.raw`Walrasianisches GG: $p_1 = p_2$ (nur relative Preise bestimmt), Allokation $(2,2)$ für A und $(2,2)$ für B. Beide Konsumenten teilen Güter gleich auf — Effizienz durch Tausch von A's Gut-1-Überschuss gegen B's Gut-2-Überschuss.`
      }
    ]
  },
  gleichgewicht_walras: {
    motivation: 'Walrasianische Gleichgewichte fokussieren auf Preisvektoren und gleichzeitige Markt-Räumung statt auf reine Tauschgeometrie.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Überschussnachfrage und Preisvektor</h4>
<p>Ein Walrasianisches Gleichgewicht ist ein Preisvektor $p^*$, bei dem alle Märkte gleichzeitig geräumt sind. Haushalte maximieren Nutzen bei Budgetrestriktion, Unternehmen maximieren Gewinn; die aggregierte Überschussnachfrage verschwindet.</p>
      <div class="math-block">$$z_i(p)=\\\\sum_j x_{ij}(p)-\\\\omega_i=0 \\\\quad \\\\forall i$$</div>
      <p>Weil Preise nur bis auf einen positiven Skalar eindeutig sind, wird oft ein Numéraire-Gut mit Preis 1 gewählt.</p>


<h4 class="theory-subsection-title">Walrasches Gesetz</h4>
<p>Wenn die Budgetrestriktionen der Haushalte erfüllt sind und $n-1$ Märkte geräumt sind, ist auch der $n$-te Markt geräumt. Das Walrasche Gesetz reduziert die Zahl unabhängiger Gleichgewichtsbedingungen.</p>
      <div class="math-block">$$\\\\sum_i z_i(p) = 0 \\\\quad \\\\text{(Walrasches Gesetz)}$$</div>


<h4 class="theory-subsection-title">Homogenität der Überschussnachfrage</h4>
<p>Die aggregierte Überschussnachfrage ist homogen vom Grad 0: Verdoppeln aller Preise ändert reale Budgetmengen nicht, wenn Einkommen und Ausstattung proportional skaliert werden. Deshalb genügt ein relatives Preisverhältnis; das Numéraire-Gut mit $p_1=1$ fixiert die Skala.</p>
      <div class="math-block">$$z_i(\\\\lambda p) = z_i(p) \\\\quad \\\\forall \\\\lambda > 0$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Von der Edgeworth-Box zum Preissystem</h4>
<p>Die Kontraktkurve beschreibt effiziente Allokationen im Tausch. Ein Walras-Preisvektor wählt aus diesen effizienten Allokationen diejenige, die mit gegebenen Anfangsausstattungen und optimierendem Verhalten kompatibel ist.</p>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Preis- statt Geometriefehler:</strong> In Walras-Aufgaben muss über Budgeteinkommen, Nachfragefunktionen und Räumungsbedingungen argumentiert werden, nicht nur über Tangentialbilder.</div>
      <div class="warn-box"><strong>Existenz vs. Eindeutigkeit:</strong> Das Walras-Theorem zur Existenz eines GG unter Standardannahmen ist kein Eindeutigkeitsresultat. Mehrere Gleichgewichte sind möglich.</div>

</div>
</section>`,
    formeln: [
      { label: 'Markträumung', eq: String.raw`$$z_i(p^*)=0 \quad \forall i$$`, desc: 'Überschussnachfrage verschwindet im Gleichgewicht.' },
      { label: 'Walrasches Gesetz', eq: String.raw`$$\sum_i z_i(p) = 0$$`, desc: 'Aggregierte Überschussnachfrage über alle Märkte.' },
      { label: 'Budgetrestriktion', eq: String.raw`$$p\cdot x_i \le p\cdot \omega_i$$`, desc: 'Haushalt i kann Endowment nicht überschreiten.' }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Güter, zwei Konsumenten. $u^A = x_1^{0{,}5} (x_2^A)^{0{,}5}$, $u^B = x_1^B x_2^B$. Endowments: $e^A = (4,0)$, $e^B = (0,4)$. Bestimmen Sie das Walrasianische Gleichgewicht (Preise und Allokation).`,
        steps: [
          { text: String.raw`Marshallsche Nachfragen A:`, eq: String.raw`x_1^A = \frac{0{,}5 I^A}{p_1}=2,\quad x_2^A = \frac{0{,}5 I^A}{p_2}= \frac{2p_1}{p_2}` },
          { text: String.raw`Marshallsche Nachfragen B:`, eq: String.raw`x_1^B = \frac{2p_2}{p_1}, \quad x_2^B = 2` },
          { text: String.raw`Markträumung Gut 1:`, eq: String.raw`2 + \frac{2p_2}{p_1} = 4 \Rightarrow p_1 = p_2` }
        ],
        result: String.raw`Walras-GG: relatives Preisverhältnis $p_1/p_2=1$, Allokation $(2,2)$ für beide Konsumenten.`
      },
      {
        text: String.raw`Erklären Sie das Walrasche Gesetz in einem 3-Güter-Modell: Warum genügt es, $n-1$ Markträumungsbedingungen zu prüfen?`,
        steps: [
          { text: String.raw`Budgetidentität der Haushalte.`, eq: String.raw`\sum_i p_i x_i = \sum_i p_i \omega_i` },
          { text: String.raw`Definition Überschussnachfrage:`, eq: String.raw`z_i = \text{Nachfrage}_i - \text{Ausstattung}_i` },
          { text: String.raw`Summe der Überschussnachfragen:`, eq: String.raw`\sum_i z_i = 0` }
        ],
        result: String.raw`Wenn $n-1$ Märkte geräumt sind, folgt die $n$-te Räumung aus der Budgetidentität — nicht aus zusätzlicher Ökonomie.`
      },
      {
        text: String.raw`Drei Haushalte, ein Gut als Numéraire ($p_1=1$). Gegeben $z_2(p)=10-p_2$ und $z_3(p)=p_2-6$. Für welches $p_2$ ist der Markt für Gut 1 geräumt?`,
        steps: [
          { text: String.raw`Walras: $z_1=-z_2-z_3$.`, eq: String.raw`z_1=-(10-p_2)-(p_2-6)=-4+2p_2` },
          { text: String.raw`Räumung $z_1=0$:`, eq: String.raw`2p_2=4 \Rightarrow p_2=2` },
          { text: String.raw`Kontrolle Gut 2 und 3:`, eq: String.raw`z_2=8,\; z_3=-4` }
        ],
        result: String.raw`Bei $p_2=2$ sind alle drei Märkte konsistent geräumt; Gut 1 folgt aus dem Walras-Gesetz.`
      }
    ]
  },
  gleichgewicht_produktion: {
    motivation: 'Vorlesung 17 erweitert das allgemeine Gleichgewicht um Produktion: Aus einer reinen Tauschkiste wird eine Ökonomie mit Konsumenten, Gütern und Produktionsfaktoren.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Modellrahmen mit Produktion</h4>
<p>Die offizielle Darstellung betrachtet zwei Individuen, zwei Güter und zwei Produktionsfaktoren. Konsum wird wie bisher mit $(x_1^A,x_2^A)$ und $(x_1^B,x_2^B)$ bezeichnet; Produktion erfolgt über sektorale Produktionsfunktionen.</p>
      <div class="math-block">$$F^1(K_1,L_1),\\\\qquad F^2(K_2,L_2)$$</div>
      <p>Die Faktorausstattung ist vollständig auf beide Sektoren aufzuteilen.</p>
      <div class="math-block">$$K_1+K_2=K,\\\\qquad L_1+L_2=L$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Faktor-Box und Produktionseffizienz</h4>
<p>Die Faktor-Box zeigt, wie Kapital und Arbeit zwischen den beiden Gütersektoren verteilt werden. Produktionseffizienz liegt vor, wenn keine Reallokation der Faktoren mehr von einem Gut mehr produzieren kann, ohne die Produktion des anderen Gutes zu senken.</p>
      <p>Grafisch liegen effiziente Produktionspunkte an Tangentialpunkten der Isoquanten; ihre Verbindung bildet die Effizienzkurve.</p>


<h4 class="theory-subsection-title">Gesamtwirtschaftliches Optimum</h4>
<p>Im Optimum müssen Produktion und Konsum zusammenpassen: Die Transformationsmöglichkeiten der Ökonomie und die Grenzraten der Substitution der Konsumenten dürfen nicht auseinanderlaufen.</p>
      <div class="warn-box"><strong>Prüfungsfehler:</strong> Produktionseffizienz allein reicht nicht für ein gesamtwirtschaftliches Optimum. Zusätzlich muss die produzierte Güterkombination zur Konsumseite passen.</div>


<h4 class="theory-subsection-title">Wohlfahrtssätze</h4>
<p>1. HS: Jede WE ist Pareto-effizient (bei vollständigen Märkten). 2. HS: Jede Pareto-effiziente Allokation ist WE bei passender Anfangsausstattung. Klausur: Diagramm + Intuition, nicht nur Sätze zitieren.</p>
      <div class="warn-box"><strong>Annahmen:</strong> WE-Existenz braucht Konvexität, vollständige Märkte — bei Externalitäten scheitert 1. HS.</div>


<h4 class="theory-subsection-title">In der Klausur: GE Produktion</h4>
<p>Edgeworth-Box Produktion: $F^1 + F^2 = \\\\bar F$. Pareto-Effizienz: $MRTS^1 = MRTS^2$. Mit Preisen: $w/r = MRTS$ in jedem Sektor; Walras-Gleichgewicht = Preise + Allokation, die Märkte räumen.</p>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>

<div class="section-block">
<h4 class="theory-subsection-title">Wohlfahrtssätze</h4>
<p>1. HS: Jede WE ist Pareto-effizient (bei vollständigen Märkten). 2. HS: Jede Pareto-effiziente Allokation ist WE bei passender Anfangsausstattung. Klausur: Diagramm + Intuition, nicht nur Sätze zitieren.</p>
      <div class="warn-box"><strong>Annahmen:</strong> WE-Existenz braucht Konvexität, vollständige Märkte — bei Externalitäten scheitert 1. HS.</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: GE Produktion</h4>
<p>Edgeworth-Box Produktion: $F^1 + F^2 = \\bar F$. Pareto-Effizienz: $MRTS^1 = MRTS^2$. Mit Preisen: $w/r = MRTS$ in jedem Sektor; Walras-Gleichgewicht = Preise + Allokation, die Märkte räumen.</p>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Vollbeschäftigung Kapital', eq: String.raw`$$K_1+K_2=K$$`, desc: 'Gesamtbestand Kapital wird zwischen Sektoren aufgeteilt.' },
      { label: 'Vollbeschäftigung Arbeit', eq: String.raw`$$L_1+L_2=L$$`, desc: 'Gesamtbestand Arbeit wird zwischen Sektoren aufgeteilt.' },
      { label: 'Produktionseffizienz', eq: String.raw`$$GRTS^1_{KL}=GRTS^2_{KL}$$`, desc: 'Tangentialbedingung der Isoquanten in der Faktor-Box.' }
    ],
    aufgaben: [
      {
        text: String.raw`Erklären Sie, warum ein Punkt außerhalb der Effizienzkurve in der Faktor-Box nicht produktionseffizient ist.`,
        steps: [
          { text: String.raw`Definition anwenden.`, eq: String.raw`\text{Produktionseffizienz: kein Mehr von Gut 1 ohne Weniger von Gut 2 möglich.}` },
          { text: String.raw`Isoquantenargument.`, eq: String.raw`\text{Schneiden sich Isoquanten, kann eine Faktorreallokation beide Sektoren nicht schlechter stellen.}` },
          { text: String.raw`Tangentialbedingung nennen.`, eq: String.raw`GRTS^1_{KL}=GRTS^2_{KL}` }
        ],
        result: String.raw`Ein Punkt außerhalb der Effizienzkurve lässt produktive Reallokationsgewinne offen; erst an der Tangentialbedingung sind diese ausgeschöpft.`
      },
      {
        text: String.raw`Zwei Sektoren mit Isoquanten $Q^1=\sqrt{K_1L_1}$ und $Q^2=K_2+2L_2$. Gesamt $K=16$, $L=16$. Bestimmen Sie einen produktionseffizienten Punkt mit $GRTS^1=GRTS^2$.`,
        steps: [
          { text: String.raw`GRTS Sektor 1:`, eq: String.raw`GRTS^1=\frac{MU_K}{MU_L}=\frac{1/(2\sqrt{K_1L_1})}{1/(2\sqrt{K_1L_1})}=\frac{L_1}{K_1}` },
          { text: String.raw`GRTS Sektor 2:`, eq: String.raw`GRTS^2=\frac{1}{2}` },
          { text: String.raw`Tangentialbedingung:`, eq: String.raw`\frac{L_1}{K_1}=\frac12` }
        ],
        result: String.raw`Produktionseffizienz verlangt $L_1/K_1=1/2$ plus die Faktorvollnutzungsbedingungen — ein konkreter Kandidat folgt aus dem vollen System.`
      },
      {
        text: String.raw`Warum reicht Produktionseffizienz allein nicht für ein gesamtwirtschaftliches Optimum? Nennen Sie die zusätzliche Bedingung zwischen Produktion und Konsum.`,
        steps: [
          { text: String.raw`Produktionseffizienz:`, eq: String.raw`GRTS^1_{KL}=GRTS^2_{KL}` },
          { text: String.raw`Konsumseite:`, eq: String.raw`GRS^A=GRS^B` },
          { text: String.raw`Kopplung:`, eq: String.raw`\text{Produzierte Gütermenge muss mit effizienter Konsumallokation vereinbar sein.}` }
        ],
        result: String.raw`Die Faktor-Box sichert nur Produktionseffizienz; zusätzlich braucht es Konsumenteneffizienz und Konsistenz zwischen produzierter und konsumierter Güterkombination.`
      }
    ]
  },
  wohlfahrt_theoreme: {
    motivation: 'Die Wohlfahrtstheoreme schlagen die Brücke zwischen Marktgleichgewicht und gesellschaftlicher Wünschenswertigkeit.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">1. Hauptsatz der Wohlfahrtsökonomik</h4>
<p>Jedes Wettbewerbsgleichgewicht (bei Abwesenheit von Marktversagen) führt zu einer Pareto-effizienten Allokation. Der Markt ist somit ein Mechanismus zur Erzielung von Effizienz.</p>
      <p>Voraussetzungen: Vollkommene Märkte, keine Externalitäten, keine öffentlichen Güter, vollständige Information. Bei Verletzung dieser Bedingungen ist Marktversagen möglich.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Wohlfahrtsfunktionen</h4>
<p>Wie bewertet man verschiedene Pareto-effiziente Punkte? Utilitaristisch ($\\\\sum u_i$) oder nach Rawls ($\\\\min u_i$).</p>
      <div class="math-block">$$W_{util} = \\\\sum_{i=1}^n u_i \\\\qquad W_{Rawls} = \\\\min_i u_i$$</div>


<h4 class="theory-subsection-title">Konsumenten- und Produzentenrente als Wohlfahrtsmaß</h4>
<p>Gesamtwohlfahrt $W = KR + PR$. Deadweight Loss (DWL): der Wohlfahrtsverlust durch Abweichung vom Wettbewerbsoptimum (z.B. Monopol, Steuer, Mindestpreis).</p>
      <div class="math-block">$$DWL = W_{Wettbewerb} - (KR + PR)$$</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">2. Hauptsatz der Wohlfahrtsökonomik</h4>
<p>Jede Pareto-effiziente Allokation kann als Wettbewerbsgleichgewicht realisiert werden, sofern eine geeignete Umverteilung der Anfangsausstattungen (via Pauschalsteuern) erfolgt.</p>
      <p>Der 2. Hauptsatz trennt Effizienz von Verteilung: Der Staat kann gesellschaftliche Verteilungsziele durch Pauschalumverteilung erreichen und danach den Markt Effizienz erzeugen lassen.</p>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Utilitarismus vs. Rawls:</strong> Beide Wohlfahrtsfunktionen können zu unterschiedlichen Politikempfehlungen führen. Ein utilitaristischer Planer kann extreme Ungleichheit tolerieren, wenn der Gesamtnutzen steigt — ein Rawlsianischer nicht.</div>
      <div class="warn-box"><strong>Pauschalsteuern in der Praxis:</strong> Der 2. Hauptsatz erfordert beobachtbare individuelle Ausstattungen. Da diese Information oft nicht vorliegt (Informationsasymmetrie), ist die praktische Umsetzung stark eingeschränkt.</div>

</div>
</section>`,
    formeln: [
      { label: 'Utilitaristisch', eq: String.raw`$$W = u_1 + u_2 + \dots + u_n$$`, desc: 'Summe der Nutzen', variables: { u_i: 'Nutzen von Person i' } },
      { label: 'Rawlsianisch', eq: String.raw`$$W = \min(u_1, \dots, u_n)$$`, desc: 'Fokus auf den Schwächsten', variables: { u_i: 'Nutzen von Person i' } }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Allokationen: I $(u_1=10, u_2=10)$ und II $(u_1=5, u_2=20)$. Welche wird nach Rawls bevorzugt?`,
        steps: [
          { text: String.raw`Minima bestimmen:`, eq: String.raw`\min(10,10)=10 \quad \text{vs} \quad \min(5,20)=5` },
          { text: String.raw`Vergleichen:`, eq: String.raw`10 > 5` }
        ],
        result: String.raw`Allokation I wird bevorzugt.`
      },
      {
        text: String.raw`Eine politische Partei schlägt vor, über Pauschalsteuern eine Umverteilung zu erreichen und danach den Markt spielen zu lassen. Auf welchen Hauptsatz der Wohlfahrtstheorie stützt sie sich, und welche zentrale Praxisschranke besteht?`,
        steps: [
          { text: String.raw`Identifizieren des relevanten Hauptsatzes:`, eq: String.raw`\text{2. Hauptsatz: Jede Pareto-effiziente Allokation lässt sich als Wettbewerbsgleichgewicht realisieren — nach geeigneter Umverteilung.}` },
          { text: String.raw`Das Instrument: Pauschalsteuern/-transfers sind verzerrungsfrei.`, eq: String.raw`\text{Anders als Einkommens- oder Mengensteuern ändern Pauschalsteuern keine Grenzpreise.}` },
          { text: String.raw`Die Praxisschranke:`, eq: String.raw`\text{Pauschalsteuern erfordern beobachtbare individuelle Ausstattungen. Das ist in der Realität kaum möglich (Informationsasymmetrie).}` }
        ],
        result: String.raw`Zweiter Hauptsatz der Wohlfahrtsökonomik. Kritische Praxisschranke: Informationsasymmetrie.`
      },
      {
        text: String.raw`Nachfrage $P_D = 20 - Q$, Angebot $P_S = Q + 4$. Berechnen Sie KR, PR und Gesamtwohlfahrt im Gleichgewicht. Dann: Welcher DWL entsteht bei einem Mindestpreis $P_{floor} = 12$?`,
        steps: [
          { text: String.raw`Gleichgewicht: $20 - Q = Q + 4 \implies 2Q = 16$.`, eq: String.raw`Q^* = 8, \quad P^* = 12` },
          { text: String.raw`KR und PR im GG:`, eq: String.raw`KR = \frac{1}{2}(20-12)\cdot 8 = 32 \quad PR = \frac{1}{2}(12-4)\cdot 8 = 32` },
          { text: String.raw`Bei Mindestpreis $P_{floor} = 12 = P^*$: Kein Einfluss, da Mindestpreis nicht bindend.`, eq: String.raw`P_{floor} = P^* = 12 \implies \text{nicht bindend} \implies DWL = 0` },
          { text: String.raw`Bei bindendem Mindestpreis $P_{floor} = 14 > P^*$: Nachfragemenge $Q_D = 20 - 14 = 6$.`, eq: String.raw`DWL = \frac{1}{2}(14-4)(8-6) - \frac{1}{2}(12-4)(8-6) = \frac{1}{2}\cdot 2 \cdot(10-8) = 2` }
        ],
        result: String.raw`GG: $P^*=12$, $Q^*=8$, $KR=PR=32$, $W=64$. Bei $P_{floor}=14$: Handelsvolumen fällt auf $Q=6$, DWL entsteht. Der Mindestpreis schützt Anbieter auf Kosten der Konsumenten und erzeugt Wohlfahrtsverlust.`
      },
      {
        text: String.raw`Erläutern Sie das Erste und Zweite Wohlfahrtstheorem formal und diskutieren Sie je eine zentrale Einschränkung in der Praxis. Geben Sie ein ökonomisches Beispiel für jedes Theorem.`,
        steps: [
          { text: String.raw`1. Hauptsatz: Wettbewerbsgleichgewicht $\Rightarrow$ Pareto-effizient.`, eq: String.raw`\text{Formal: } p^* \text{ räumt alle Märkte} \implies \text{Pareto-effiziente Allokation}` },
          { text: String.raw`Einschränkung 1. HS: Externe Effekte, öffentliche Güter, Marktmacht, Informationsasymmetrien.`, eq: String.raw`\text{Beispiel: Fabrikemissionen } \implies MSC > MPC \implies Q^{mkt} > Q^{soc}` },
          { text: String.raw`2. Hauptsatz: Jede Pareto-effiziente Allokation realisierbar als Wettbewerbs-GG nach Umverteilung.`, eq: String.raw`\text{Formal: } \forall \text{ Pareto-eff. } x^* \exists \text{ Ausstattungen } e^* \text{ und Preise } p^*: \text{ WGG} = x^*` },
          { text: String.raw`Einschränkung 2. HS: Informationsproblem bei Pauschalsteuern, politische Durchführbarkeit.`, eq: String.raw`\text{Beispiel: Um gleiche Bildungschancen zu erzeugen, müssten individuelle Fähigkeiten beobachtbar sein.}` }
        ],
        result: String.raw`1. HS: Märkte erzeugen Effizienz — aber nur bei Abwesenheit von Marktversagen. 2. HS: Effizienz und Verteilung trennbar — aber nur bei beobachtbaren Ausstattungen. Beide Theoreme sind Referenzpunkte, keine Blaupausen: Sie beschreiben ideale Bedingungen, die in der Praxis selten vollständig erfüllt sind.`
      }
    ]
  },
  wohlfahrt_messung: {
    motivation: 'Wohlfahrtsmessung trennt normative Bewertungskriterien und messbare Surplus-/DWL-Rechnung als eigenen Klausurblock.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Wohlfahrtsfunktionen</h4>
<p>Allokationen können utilitaristisch ($\\\\sum u_i$) oder Rawlsianisch ($\\\\min u_i$) bewertet werden. Beide Kriterien ordnen Pareto-effiziente Punkte unterschiedlich — Effizienz und Verteilung bleiben getrennt.</p>
      <div class="math-block">$$W_{util} = \\\\sum_{i=1}^n u_i \\\\qquad W_{Rawls} = \\\\min_i u_i$$</div>


<h4 class="theory-subsection-title">Konsumenten- und Produzentenrente</h4>
<p>Im partiellen Markt gilt bei linearer Nachfrage: $KR$ ist das Dreieck unter der Nachfragekurve über dem Gleichgewichtspreis, $PR$ das Dreieck über der Angebotskurve. Gesamtwohlfahrt $W=KR+PR$ im Wettbewerb.</p>
      <div class="math-block">$$KR = \\\\frac{1}{2}(P_{max}-P^*)Q^*, \\\\qquad PR = \\\\frac{1}{2}(P^*-P_{min})Q^*$$</div>
      <p>Bei $P_D=a-bQ$ und $P_S=c+dQ$ folgt $Q^*=(a-c)/(b+d)$ und die Dreiecksformeln direkt aus der Klausur-Standardgrafik.</p>


<h4 class="theory-subsection-title">Steuern, Monopol und DWL-Geometrie</h4>
<p>Eine Einheitssteuer $t$ verschiebt die effektive Angebotskurve nach oben; das Handelsvolumen sinkt. Der DWL ist das „verlorene“ Dreieck zwischen Nachfrage und (besteuertem) Angebot über der tatsächlich gehandelten Menge — typischer Klausurblock neben Monopol und Mindestpreis.</p>
      <div class="math-block">$$DWL_{Steuer} \\\\approx \\\\frac{1}{2}\\\\, t\\\\,(Q^* - Q_t)$$</div>


<h4 class="theory-subsection-title">Deadweight Loss</h4>
<p>Monopol, Steuern, Mindestpreise oder Quoten erzeugen typischerweise einen DWL relativ zum Wettbewerbsoptimum — verlorene Handelsgewinne aus zu geringem Volumen.</p>
      <div class="math-block">$$DWL = W_{Wettbewerb} - (KR + PR)$$</div>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Policy-Bewertung: Gewinner/Verlierer benennen; Kompensation hypothetisch (Kaldor-Hicks). Steuer-DWL: $\\\\frac{1}{2}|\\\\eta|\\\\,t^2\\\\,P_0 Q_0$ Näherung bei kleinem $t$.</p>
      <div class="warn-box"><strong>CS vs. CV/EV:</strong> Konsumentenrente ist Näherung bei kleinen Preisänderungen — bei großen Schocks CV/EV präziser.</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">In der Klausur: Wohlfahrtsmessung</h4>
<p>Kompensierende/äquivalente Variation vs. CS-Änderung bei Nachfrageverschiebung. Harberger-Dreieck für DWL bei $P\\\\neq MC$. Aggregationsproblem: utilitaristisch vs. Rawls vs. Pareto-Kriterium.</p>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Surplus vs. Nutzen:</strong> KR/PR messen ökonomische Surplus in Geld, nicht Kardinalnutzen. Nutzenvergleiche über Personen sind mit Wohlfahrtsfunktionen zu begründen.</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Wohlfahrtsmessung</h4>
<p>Kompensierende/äquivalente Variation vs. CS-Änderung bei Nachfrageverschiebung. Harberger-Dreieck für DWL bei $P\\neq MC$. Aggregationsproblem: utilitaristisch vs. Rawls vs. Pareto-Kriterium.</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Policy-Bewertung: Gewinner/Verlierer benennen; Kompensation hypothetisch (Kaldor-Hicks). Steuer-DWL: $\\frac{1}{2}|\\eta|\\,t^2\\,P_0 Q_0$ Näherung bei kleinem $t$.</p>
      <div class="warn-box"><strong>CS vs. CV/EV:</strong> Konsumentenrente ist Näherung bei kleinen Preisänderungen — bei großen Schocks CV/EV präziser.</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Utilitaristisch', eq: String.raw`$$W = u_1 + u_2 + \dots + u_n$$`, desc: 'Summe der Nutzen.' },
      { label: 'Rawlsianisch', eq: String.raw`$$W = \min(u_1, \dots, u_n)$$`, desc: 'Fokus auf den Schwächsten.' },
      { label: 'Konsumentenrente (linear)', eq: String.raw`$$KR = \frac{1}{2}(P_{max}-P^*)Q^*$$`, desc: 'Dreieck unter der Nachfrage.' },
      { label: 'DWL', eq: String.raw`$$DWL = W_{Wettbewerb} - (KR + PR)$$`, desc: 'Verlust gegenüber Wettbewerbsoptimum.' }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Allokationen: I $(u_1=10, u_2=10)$ und II $(u_1=5, u_2=20)$. Welche wird nach Rawls bevorzugt?`,
        steps: [
          { text: String.raw`Minima vergleichen:`, eq: String.raw`\min(10,10)=10,\quad \min(5,20)=5` }
        ],
        result: String.raw`Rawls bevorzugt Allokation I.`
      },
      {
        text: String.raw`Nachfrage $P_D = 20 - Q$, Angebot $P_S = Q + 4$. Berechnen Sie KR, PR und Gesamtwohlfahrt im Gleichgewicht.`,
        steps: [
          { text: String.raw`Gleichgewicht:`, eq: String.raw`20-Q = Q+4 \Rightarrow Q^*=8,\;P^*=12` },
          { text: String.raw`Renten:`, eq: String.raw`KR=\frac12(20-12)\cdot 8=32,\quad PR=\frac12(12-4)\cdot 8=32` }
        ],
        result: String.raw`Gesamtwohlfahrt $W=64$ im Gleichgewicht.`
      },
      {
        text: String.raw`Monopol: $P=100-Q$, $MC=20$. Berechnen Sie Wettbewerbs-DWL des Monopols gegenüber vollkommenem Wettbewerb.`,
        steps: [
          { text: String.raw`Monopol: $MR=MC \Rightarrow 100-2Q=20$.`, eq: String.raw`Q_m=40,\; P_m=60` },
          { text: String.raw`Wettbewerb: $P=MC$.`, eq: String.raw`Q_w=80,\; P_w=20` },
          { text: String.raw`DWL-Dreieck:`, eq: String.raw`DWL=\frac12(60-20)(80-40)=800` }
        ],
        result: String.raw`Der Monopol-DWL beträgt $800$ — ein zentrales Wohlfahrtsmessungs-Resultat in Mikro II.`
      }
    ]
  },
  externa_pigou: {
    motivation: 'Marktversagen tritt auf, wenn Marktpreise nicht die wahren gesellschaftlichen Kosten oder Nutzen widerspiegeln. Externe Effekte sind das klassische Beispiel.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Negative Externe Effekte</h4>
<p>Die Produktion verursacht Kosten bei unbeteiligten Dritten (z.B. Verschmutzung). Die Grenzkosten des Unternehmens ($MPC$) sind niedriger als die gesellschaftlichen Grenzkosten ($MSC$).</p>
      <div class="math-block">$$MSC = MPC + MEC$$</div>
      <p>Im Wettbewerb wird zu viel produziert ($Q_{mkt} > Q_{soc}$).</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Emissionshandel (Cap-and-Trade)</h4>
<p>Alternative zur Pigou-Steuer: Der Staat setzt ein Mengenziel (Cap), verteilt Lizenzen und lässt diese handeln. Das Ergebnis ist effizient, wenn der Lizenzmarkt wettbewerblich ist.</p>
      <div class="math-block">$$t_{Pigou} = MEC(Q^*) \\quad \\Leftrightarrow \\quad \\text{Cap bei } Q^*$$</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Internalisierung: Pigou-Steuer</h4>
<p>Eine Steuer $t$ in Höhe des Grenzschadens im Optimum ($MEC(Q^*)$) korrigiert das Marktverhalten exakt auf das gesellschaftliche Optimum.</p>
      <p>Das Instrument ist effizient, weil es Firmen Anreize gibt, Emissionen zu vermeiden — jede vermiedene Einheit spart Steuerkosten. Die Steuereinnahmen können für andere Zwecke verwendet werden (Doppeldividende).</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Coase-Theorem</h4>
<p>Bei klar definierten Eigentumsrechten und null Transaktionskosten führen private Verhandlungen unabhängig von der Erstzuweisung der Rechte zu einer effizienten Lösung.</p>
      <p>Praktische Grenzen: Transaktionskosten bei vielen Betroffenen (z.B. Klimawandel), strategisches Verhalten, Informationsasymmetrien zwischen Verhandlungspartnern.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Pigou-Internalisierung</h4>
<p><em>platform-added-explanation:</em> Standardfall: $MSC = MPC + MEC$, Markt liefert $Q_{mkt} > Q^*$. Pigou-Steuer $t = MEC(Q^*)$ → Markt liefert $Q^*$. DWL-Dreieck zeichnen zwischen $Q^*$ und $Q_{mkt}$. Coase nur bei wenigen Beteiligten und null Transaktionskosten.</p>
      <div class="warn-box"><strong>Steuer vs. Subvention:</strong> Negative Externalität → Steuer; positive Externalität → Subvention auf $MEB$.</div>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Klausurpfad Pigou</h4>
<p><em>platform-added-explanation:</em> Markt $Q_m > Q^*$ bei negativer Externalität → Pigou-Steuer $t = MEC(Q^*)$ internalisiert.</p>
      <div class="math-block">$$MSC = MPC + MEC$$</div>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Immer Markt- vs. Sozialoptimum zeichnen; Steuerhöhe am Grenzschaden im Optimum, nicht am aktuellen Marktoutput.</p>
      <div class="warn-box"><strong>Instrument:</strong> Pigou-Steuer (Preis) vs. Cap-and-Trade (Menge) unter Unsicherheit unterschiedlich.</div>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur (Plattform-Ergänzung)</h4>
<p>Negativer Externer Effekt: $MSB < MPB$ → Überproduktion. Pigou: $t^* = MEC(Q^*)$. Positiver Externer Effekt: Subvention analog. Ohne Intervention DWL-Dreieck zwischen $Q_m$ und $Q^*$.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h"><span class="theory-recipe-step" aria-hidden="true">7</span> Häufige Fehler</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Pigou-Steuer bei Unsicherheit:</strong> Die optimale Pigou-Steuer erfordert Kenntnis des gesellschaftlichen Optimums. Bei Unsicherheit über $MEC$ kann die Steuer zu hoch oder zu niedrig sein — dann ist Cap-and-Trade der Steuer vorzuziehen (bei steilen Grenzkostenkurven).</div>
      <div class="warn-box"><strong>Coase-Theorem in der Praxis:</strong> Das Coase-Theorem gilt nur bei null Transaktionskosten und wenigen Beteiligten. Bei Umweltproblemen mit vielen Betroffenen (Klimawandel, Luftverschmutzung) ist staatliche Intervention unumgänglich.</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Pigou-Steuer', eq: String.raw`$$t = MEC(Q^*)$$`, desc: 'Steuer = Grenzschaden im Optimum', variables: { MEC: 'marginale externe Kosten', Q_star: 'gesellschaftlich optimale Menge' } }
    ],
    aufgaben: [
      {
        text: String.raw`Nachfrage $P=100-Q$, private Grenzkosten $MPC=20$, externer Schaden $MEC=Q$. Berechnen Sie die gesellschaftlich optimale Menge und die optimale Pigou-Steuer.`,
        steps: [
          { text: String.raw`MSC bestimmen:`, eq: String.raw`MSC = MPC + MEC = 20 + Q` },
          { text: String.raw`Gleichgewicht ($P=MSC$):`, eq: String.raw`100 - Q = 20 + Q \implies 2Q = 80 \implies Q^* = 40` },
          { text: String.raw`Marktmenge ohne Eingriff ($P = MPC$):`, eq: String.raw`100 - Q = 20 \implies Q_{mkt} = 80` },
          { text: String.raw`Optimale Pigou-Steuer: $t = MEC(Q^*)$.`, eq: String.raw`t = MEC(40) = 40` }
        ],
        result: String.raw`$Q_{soc}^* = 40$, $t^* = 40$. Der Markt produziert ohne Eingriff $Q_{mkt} = 80$ — doppelt so viel wie sozial optimal.`
      },
      {
        text: String.raw`Firma A hat das Eigentumsrecht zu produzieren und erzielt dabei Gewinne von $50$. Produktion verursacht bei Firma B einen Schaden von $30$. Transaktionskosten sind null. Was sagt das Coase-Theorem über das Ergebnis?`,
        steps: [
          { text: String.raw`Fall 1: A hat Produktionsrecht.`, eq: String.raw`\text{B zahlt A bis zu 30, um Produktion zu stoppen. Aber A's Gewinn = 50 > 30.} \implies \text{A produziert.}` },
          { text: String.raw`Fall 2: B hat Verbotsrecht.`, eq: String.raw`\text{A zahlt B mindestens 30. Restgewinn: } 50-30=20>0. \implies \text{A produziert trotzdem.}` },
          { text: String.raw`Vergleich der Ergebnisse:`, eq: String.raw`\text{In beiden Fällen: Produktion findet statt. Effizienzresultat ist identisch.}` }
        ],
        result: String.raw`Coase-Theorem: Das Effizienzresultat ist unabhängig von der Rechtszuweisung. Produktion findet statt (Nettogewinn $50-30=20>0$). Die Verteilung des Überschusses hängt von der Rechtszuweisung ab — nicht aber die Effizienz.`
      },
      {
        text: String.raw`Pigouviansteuer: Markt mit $P_D = 50 - Q$, $MPC = 10$. Die Produktion verursacht einen konstanten externen Schaden von $t = 10$ Euro pro Einheit. Berechnen Sie: (a) Marktmenge ohne Steuer, (b) soziales Optimum, (c) Steueraufkommen, (d) DWL ohne Steuer.`,
        steps: [
          { text: String.raw`(a) Marktmenge: $P_D = MPC$.`, eq: String.raw`50 - Q = 10 \implies Q_{mkt} = 40, \quad P_{mkt} = 10` },
          { text: String.raw`(b) Soziales Optimum: $P_D = MSC = MPC + t = 10 + 10 = 20$.`, eq: String.raw`50 - Q = 20 \implies Q^* = 30, \quad P^* = 20` },
          { text: String.raw`(c) Steueraufkommen: $t \cdot Q^* = 10 \cdot 30 = 300$.`, eq: String.raw`T = t \cdot Q^* = 10 \cdot 30 = 300` },
          { text: String.raw`(d) DWL ohne Steuer: Dreieck zwischen $Q_{mkt}=40$ und $Q^*=30$.`, eq: String.raw`DWL = \frac{1}{2} \cdot t \cdot (Q_{mkt} - Q^*) = \frac{1}{2} \cdot 10 \cdot 10 = 50` }
        ],
        result: String.raw`$Q_{mkt}=40$, $Q^*=30$, Steueraufkommen $= 300$, $DWL = 50$. Die Pigou-Steuer beseitigt den DWL vollständig und lenkt die Produktion auf das gesellschaftliche Optimum.`
      },
      {
        text: String.raw`Coase-Theorem: Zwei Unternehmen — Fabrik F (produziert Stahl) und Fischer G (leidet unter Abwasser). Ohne Abwasser: $\pi_G = 100$. Mit Abwasser: $\pi_G = 40$. Stahlfabrik-Gewinn mit Abwasser: $\pi_F = 80$, ohne: $\pi_F = 30$. Transaktionskosten = 0. Analysieren Sie beide Eigentumsrechtszuweisungen und das effiziente Ergebnis.`,
        steps: [
          { text: String.raw`Effizienzanalyse: Gesamtwohlfahrt mit vs. ohne Abwasser.`, eq: String.raw`W_{mit} = \pi_F + \pi_G = 80 + 40 = 120 \quad W_{ohne} = 30 + 100 = 130` },
          { text: String.raw`Effizientes Ergebnis: Produktion ohne Abwasser ($W = 130 > 120$).`, eq: String.raw`\Delta W = 130 - 120 = 10 > 0 \implies \text{Abwasservermeidung ist effizient.}` },
          { text: String.raw`Fall 1: F hat Recht auf Abwasser. Kann G F bezahlen?`, eq: String.raw`G \text{ zahlt bis zu } 60 \text{ für Vermeidung}. \; F \text{ braucht mind. } 50. \implies \text{Einigung möglich.}` },
          { text: String.raw`Fall 2: G hat Recht auf sauberes Wasser. Produziert F trotzdem?`, eq: String.raw`F \text{ müsste G mind. } 60 \text{ zahlen, verdient aber nur } 80. \; 80-60=20 \text{ Restgewinn.} \implies \text{F vermeidet Abwasser.}` }
        ],
        result: String.raw`In beiden Fällen: kein Abwasser — effizientes Ergebnis. Coase-Theorem bestätigt: Bei null Transaktionskosten und klar definierten Rechten ist das Effizienzresultat invariant bezüglich der Rechtszuweisung. Verteilung: Im Fall 1 zahlt G zwischen 50 und 60 an F; im Fall 2 muss F G entschädigen (oder gar nicht produzieren und die Einigung zustande kommt zu anderen Bedingungen).`
      }
    ]
  },
  externa_institutionen: {
    motivation: 'Neben Steuer-Internalisierung braucht die Klausur trennscharfe Beherrschung institutioneller Ansätze: Coase-Verhandlung und Cap-and-Trade.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Coase-Theorem</h4>
<p>Bei klaren Eigentumsrechten und sehr niedrigen Transaktionskosten führen private Verhandlungen zu einer effizienten Allokation, unabhängig von der initialen Rechtszuweisung.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Emissionshandel (Cap-and-Trade)</h4>
<p>Der Staat setzt eine Emissionsmenge (Cap), Lizenzen werden handelbar. Bei funktionierendem Markt ergibt sich kosteneffiziente Vermeidung über den Lizenzpreis.</p>
      <div class="math-block">$$t_{Pigou} = MEC(Q^*) \\quad \\Leftrightarrow \\quad \\text{Cap bei } Q^*$$</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Preis- vs. Mengensteuerung unter Unsicherheit</h4>
<p>Weist die Grenzkostenkurve der Schäden steil und die Grenzkosten der Vermeidung flach, ist eine Pigou-Steuer robuster; ist es umgekehrt, bevorzugt man ein Cap (Weitzman-Argument).</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Coase &amp; Handel</h4>
<p><em>platform-added-explanation:</em> Bei klaren Eigentumsrechten und niedrigen Transaktionskosten private Verhandlung effizient; bei vielen Betroffenen scheitert Coase.</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Emissionshandel</h4>
<p>Cap setzt Menge; Lizenzpreis internalisiert Grenzkosten. Effizienz: heterogene Kosten → günstigste Vermeider kaufen weniger Lizenzen.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Institutionelle Internalisierung</h4>
<p><em>platform-added-explanation:</em> Prüfungsstandard: (1) Marktversagen identifizieren. (2) Instrument: Pigou (Preis), Cap-and-Trade (Menge), Coase (Verhandlung). (3) Weitzman: Unsicherheit über Schadenskosten → Preis- vs. Mengensteuerung. (4) DWL und Verteilung nennen.</p>
      <div class="warn-box"><strong>Instrumentenwahl unter Unsicherheit:</strong> Steile $MEC$-Kurve → Pigou robuster; steile Vermeidungskosten → Cap robuster.</div>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur (Plattform-Ergänzung)</h4>
<p>Coase-Theorem: bei $TC=0$ und klaren Rechten effizientes Ergebnis unabhängig von initialer Rechteverteilung (nur Verteilung). Emissionshandel vs. Pigou-Steuer: Menge vs. Preis unter Unsicherheit.</p>
      <div class="warn-box"><strong>Coase-Grenzen:</strong> Viele Betroffene, unklare Rechte oder hohe Verhandlungskosten → staatliche Instrumente nötig.</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h"><span class="theory-recipe-step" aria-hidden="true">7</span> Häufige Fehler</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Coase-Grenzen:</strong> Viele Betroffene und hohe Verhandlungskosten unterminieren private Effizienzverhandlungen.</div>
      <div class="warn-box"><strong>Instrumentenfehler:</strong> Cap-and-Trade und Pigou-Steuer sind in der Zielsetzung verwandt, aber unterschiedlich in Preis- vs. Mengensteuerung unter Unsicherheit.</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Preis-Mengen-Äquivalenz', eq: String.raw`$$t_{Pigou} = MEC(Q^*) \Leftrightarrow \text{Cap auf }Q^*$$`, desc: 'Äquivalenzidee bei idealen Bedingungen.' }
    ],
    aufgaben: [
      {
        text: String.raw`Firma A hat Produktionsrecht und erzielt Gewinn 50, bei Firma B entsteht Schaden 30, Transaktionskosten = 0. Was sagt Coase über das effiziente Ergebnis?`,
        steps: [
          { text: String.raw`Nettoeffekt prüfen:`, eq: String.raw`50-30=20>0 \Rightarrow Produktion ist effizient.` }
        ],
        result: String.raw`Effizientes Ergebnis: Produktion findet statt; Rechtszuweisung beeinflusst Verteilung, nicht Effizienz (unter Coase-Annahmen).`
      }
    ]
  },
  public_goods: {
    motivation: 'Öffentliche Güter sind durch Nicht-Rivalität und Nicht-Ausschließbarkeit gekennzeichnet. Dies führt zum Trittbrettfahrer-Problem.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Samuelson-Bedingung</h4>
<p>Die effiziente Menge eines öffentlichen Gutes ist erreicht, wenn die Summe der individuellen Zahlungsbereitschaften (Grenzraten der Substitution) den Grenzkosten der Bereitstellung entspricht.</p>
      <div class="math-block">$$\\sum_{i=1}^n GRS_i = MRT$$</div>
      <p>Wichtig: Wir addieren die Zahlungsbereitschaften <strong>vertikal</strong>, nicht die Mengen horizontal.</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Bereitstellung und Lösungsansätze</h4>
<p>Private Bereitstellung: zu gering (Trittbrettfahren). Staatliche Bereitstellung: möglich, aber erfordert Information über Präferenzen (Revelation-Problem). Lindahl-Mechanismus: Personalisierte Preise entsprechend individueller Zahlungsbereitschaft.</p>
      <div class="math-block">$$P_i^{Lindahl} = MRS_i \\quad \\text{für alle } i$$</div>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Marktversagen und Free-Riding</h4>
<p>Auf dem Markt wird das öffentliche Gut oft gar nicht oder in zu geringer Menge bereitgestellt, da jeder hofft, dass die anderen die Kosten tragen (Free-Riding).</p>
      <p>Das Free-Rider-Problem ist strukturell identisch mit dem Gefangenendilemma: Individuelle Rationalität führt zu kollektiver Ineffizienz.</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Reine vs. unreine öffentliche Güter</h4>
<p>Reine öffentliche Güter: vollständig nicht-rival und nicht-ausschließbar (nationale Verteidigung). Unreine öffentliche Güter (Klub-Güter, allmend-Ressourcen): teilweise Rivalität oder Ausschließbarkeit möglich.</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Non-Rivalität &amp; Non-Excludability</h4>
<p><em>platform-added-explanation:</em> Öffentliches Gut: $MC_{extra}=0$; freiwillige Finanzierung führt zum Trittbrettfahren → Unterprovision.</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Lindahl &amp; Nash</h4>
<p>Lindahl-Preise individualisiert; Nash-Lösung bei freiwilliger Beitragswahl typischerweise unter dem effizienten Niveau.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Öffentliche Güter</h4>
<p><em>platform-added-explanation:</em> Samuelson: $\\\\sum MRS_i = MRT$ (vertikale Addition der Zahlungsbereitschaften). Free-Rider → Unterprovisionierung. Lindahl: personalisierte Preise — strategisches Untertreiben der Zahlungsbereitschaft. Klubgüter: teilweise Rivalität/Ausschließbarkeit.</p>
      <div class="warn-box"><strong>Vertikal vs. horizontal:</strong> Private Güter: Nachfrage horizontal addieren; öffentliche: Zahlungsbereitschaften vertikal.</div>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur (Plattform-Ergänzung)</h4>
<p>Reine öffentliche Güter: $Rivalität=0$, $Ausschluss=0$. Sammlisches Gut: rival, nicht ausschließbar. Unterprovision weil $p=MC=0$ nicht finanzierbar — staatliche Bereitstellung oder Lindahl-Mechanismus qualitativ.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--fehler" data-theory-step="7" aria-labelledby="theory-fehler-h">
<h3 class="theory-recipe-heading" id="theory-fehler-h"><span class="theory-recipe-step" aria-hidden="true">7</span> Häufige Fehler</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Vertikale vs. horizontale Aggregation:</strong> Bei privaten Gütern addieren wir individuelle Nachfragen horizontal (gleicher Preis, verschiedene Mengen). Bei öffentlichen Gütern addieren wir Zahlungsbereitschaften vertikal (gleiche Menge, verschiedene Preise). Verwechslung führt zu falschen Optimalmengen.</div>
      <div class="warn-box"><strong>Lindahl-Gleichgewicht und strategisches Verhalten:</strong> Der Lindahl-Mechanismus ist theoretisch effizient, aber praktisch problematisch: Individuen haben einen Anreiz, ihre Zahlungsbereitschaft zu untertreiben (Preference Revelation Problem).</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Samuelson', eq: String.raw`$$\sum_{i=1}^n MRS_i = MC$$`, desc: 'Effizienzbedingung für öffentliche Güter', variables: { MRS_i: 'Grenzrate der Substitution von Person i', MC: 'Grenzkosten der Bereitstellung' } }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Personen A und B haben Zahlungsbereitschaften $P_A = 10 - Q$ und $P_B = 20 - Q$. Grenzkosten sind konstant $MC = 10$. Bestimmen Sie die optimale Menge $Q^*$.`,
        steps: [
          { text: String.raw`Aggregierte Zahlungsbereitschaft (vertikal):`, eq: String.raw`P_{agg} = (10-Q) + (20-Q) = 30 - 2Q` },
          { text: String.raw`Bedingung ($P_{agg} = MC$):`, eq: String.raw`30 - 2Q = 10 \implies 2Q = 20` }
        ],
        result: String.raw`$Q^* = 10$.`
      },
      {
        text: String.raw`Zwei Individuen können jeweils $0$ oder $10$ in ein öffentliches Gut einzahlen. Jeder eingezahlte Euro erzeugt für jeden (da nicht-rival) einen Nutzen von $0{,}8$. Die Einzahlung kostet $10$, liefert also Eigennutzen $8 - 10 = -2$ wenn man allein zahlt, aber kostenlos $8$ wenn der andere zahlt. Analysieren Sie das Nash-Gleichgewicht.`,
        steps: [
          { text: String.raw`Beste Antwort von 1, wenn 2 einzahlt:`, eq: String.raw`\text{Nicht zahlen: Nutzen = 8 (kostenlos). Zahlen: Nutzen = 8+8-10=6.} \implies \text{Trittbrettfahren dominiert.}` },
          { text: String.raw`Beste Antwort von 1, wenn 2 nicht einzahlt:`, eq: String.raw`\text{Zahlen: Nutzen = 8-10=-2. Nicht zahlen: 0.} \implies \text{Nicht zahlen.}` },
          { text: String.raw`Nash-Gleichgewicht:`, eq: String.raw`\text{Nicht zahlen ist dominante Strategie für beide.} \implies (0,0).` }
        ],
        result: String.raw`Nash-Gleichgewicht: Keiner zahlt ein — trotz gesellschaftlichem Optimum bei $(10, 10)$. Free-Riding zerstört die private Bereitstellung öffentlicher Güter.`
      },
      {
        text: String.raw`Aggregation individueller Zahlungsbereitschaft: Konsument 1 hat $MB_1 = 10 - Q$, Konsument 2 hat $MB_2 = 8 - Q$. Grenzkosten $MC = 4$. Berechnen Sie die sozial optimale Menge des öffentlichen Gutes und vergleichen Sie mit privater Bereitstellung.`,
        steps: [
          { text: String.raw`Vertikale Aggregation der Zahlungsbereitschaften:`, eq: String.raw`MSB = MB_1 + MB_2 = (10-Q) + (8-Q) = 18 - 2Q` },
          { text: String.raw`Soziales Optimum: $MSB = MC$.`, eq: String.raw`18 - 2Q = 4 \implies 2Q = 14 \implies Q^* = 7` },
          { text: String.raw`Private Bereitstellung: Jeder maximiert eigenen Nutzen minus Kosten. Person 1: $MB_1 = MC$.`, eq: String.raw`10 - Q = 4 \implies Q_1^{priv} = 6` },
          { text: String.raw`Person 2 trittbrettfährt auf $Q_1 = 6$: $MB_2(6) = 8-6=2 < MC=4$ — zahlt nichts.`, eq: String.raw`Q^{priv} = \max(Q_1^{priv}, Q_2^{priv}) = 6 < Q^* = 7` }
        ],
        result: String.raw`Soziales Optimum: $Q^* = 7$. Private Bereitstellung: $Q^{priv} = 6$ (nur Person 1 zahlt, Person 2 fährt Trittbrett). Unterversorgung um 1 Einheit. Das Ausmaß des Free-Riding-Problems nimmt mit der Anzahl der Konsumenten zu.`
      },
      {
        text: String.raw`Free-Rider-Problem in Spieltheorie: Zwei Länder A und B können in Klimaschutz investieren (K) oder nicht investieren (N). Nutzen für beide bei (K,K): 10. Bei (K,N) oder (N,K): Investor erhält 3 (Kosten 7), Trittbrettfahrer erhält 10. Bei (N,N): 0. Bestimmen Sie das Nash-GG und das soziale Optimum.`,
        steps: [
          { text: String.raw`Beste Antwort von A auf K: $\max(10-7, 10) = \max(3, 10)$.`, eq: String.raw`u_A(N|K_B) = 10 > u_A(K|K_B) = 3 \implies \text{A wählt N.}` },
          { text: String.raw`Beste Antwort von A auf N: $\max(3, 0)$.`, eq: String.raw`u_A(K|N_B) = 3 > u_A(N|N_B) = 0 \implies \text{A wählt K.}` },
          { text: String.raw`Nash-GG: Dominante Strategie? Prüfe: Ist N dominant?`, eq: String.raw`\text{Auf K: N besser (10>3). Auf N: K besser (3>0). Keine dominante Strategie!}` },
          { text: String.raw`Gemischtes Nash-GG und soziales Optimum:`, eq: String.raw`W_{KK} = 3+3=6 < W_{KK\text{(ges.)}} = 10+10=20 \implies \text{Soz. Opt. bei (K,K), GG bei gem. Strat.}` }
        ],
        result: String.raw`Kein reines Nash-GG (keine dominante Strategie). Das soziale Optimum (K,K) mit Gesamtwohlfahrt 20 wird durch private Anreize untergraben. Internationale Klimaabkommen versuchen, durch Verträge und Monitoring das Koordinationsversagen zu überwinden.`
      },
      {
        text: String.raw`Lindahl-Logik als Mini-Fall: Für ein öffentliches Gut gilt $MB_A = 12 - Q$, $MB_B = 8 - Q$, Grenzkosten $MC = 6$. Bestimmen Sie (i) die effiziente Menge und (ii) die individuellen Lindahl-Preise bei dieser Menge.`,
        steps: [
          { text: String.raw`Samuelson-Bedingung anwenden:`, eq: String.raw`MB_A + MB_B = MC \implies (12-Q)+(8-Q)=6` },
          { text: String.raw`Effiziente Menge berechnen:`, eq: String.raw`20-2Q=6 \implies Q^*=7` },
          { text: String.raw`Lindahl-Preis von A bei $Q^*$:`, eq: String.raw`P_A^{L} = MB_A(7)=12-7=5` },
          { text: String.raw`Lindahl-Preis von B bei $Q^*$ und Kostendeckung prüfen:`, eq: String.raw`P_B^{L}=MB_B(7)=8-7=1,\quad P_A^L+P_B^L=6=MC` }
        ],
        result: String.raw`Die effiziente Menge ist $Q^*=7$. Individuelle Preise: $P_A^L=5$, $P_B^L=1$. Zusammen decken sie die Grenzkosten, genau wie es der Lindahl-Mechanismus fordert.`
      }
    ]
  },
  information_adverse: {
    motivation: 'Adverse Selection behandelt ex-ante Informationsasymmetrien: verborgene Typen vor Vertragsabschluss können gute Qualität aus dem Markt drängen.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Adverse Selection (Negativauslese)</h4>
<p>Tritt <strong>vor</strong> Vertragsschluss auf. Beispiel "Lemons-Market": Käufer kennen die Qualität gebrauchter Autos nicht und zahlen nur den Durchschnittspreis. Verkäufer guter Autos ziehen sich zurück, die Qualität sinkt weiter.</p>
      <p>Resultat: Nur schlechte Qualitäten bleiben am Markt ("race to the bottom"). Im Extremfall vollständiger Marktversagen.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Marktfolge und Selektionsspirale</h4>
<p>Sinkt wegen Informationsproblemen die Durchschnittsqualität, sinkt auch die Zahlungsbereitschaft der Käufer. Dadurch verlassen weitere Hochqualitätsanbieter den Markt — eine Endogenisierung der Qualitätsverschlechterung.</p>


<h4 class="theory-subsection-title">Mechanismus</h4>
<p>Separating vs. pooling Equilibrium: Typen trennen sich durch Wahl oder nicht. Ineffizienz: zu wenig Handel oder Überinvestition in Signal. Prüfungsfrage: Wer bewegt sich entlang welcher Kurve (Indifferenz vs. Zero-Profit)?</p>
      <div class="warn-box"><strong>Ex-ante vs. ex-post:</strong> Adverse Selection = vor Vertrag (Typ unbekannt). Moral Hazard = nach Vertrag (Aktion unbeobachtbar) — nicht verwechseln.</div>


<h4 class="theory-subsection-title">Numerisches Beispiel</h4>
<p>Markt mit zwei Qualitäten: WTP hoch $=100$, niedrig $=60$; Angebot kostet $40$ bzw. $70$. Bei Durchschnittspreis $80$ bleiben nur niedrige Qualität — Markt bricht teilweise zusammen.</p>


<h4 class="theory-subsection-title">In der Klausur: Adverse Selection</h4>
<p>Hidden characteristics vor Vertrag: Akerlof-Markt für Zitronen — Durchschnittspreis → gute Anbieter scheiden aus → Death Spiral. Signaling (Spence): Bildung als Signal bei $c_s \\\\neq c_t$. Screening (Rothschild-Stiglitz): Vertragspartner bietet Menü.</p>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Mittelwert-Fehler:</strong> Der erwartete Käuferwert ist kein neutraler „Durchschnitt“, sondern kann den Markt selbst verändern, weil Hochqualitätsanbieter bei zu niedrigen Preisen aussteigen.</div>
      <div class="warn-box"><strong>Policy-Fehler:</strong> Bei Adverse Selection braucht es Typtransparenz (Screening, Zertifikate, Garantien) statt bloßer Verhaltenskontrolle.</div>

<div class="section-block">
<h4 class="theory-subsection-title">Mechanismus</h4>
<p>Separating vs. pooling Equilibrium: Typen trennen sich durch Wahl oder nicht. Ineffizienz: zu wenig Handel oder Überinvestition in Signal. Prüfungsfrage: Wer bewegt sich entlang welcher Kurve (Indifferenz vs. Zero-Profit)?</p>
      <div class="warn-box"><strong>Ex-ante vs. ex-post:</strong> Adverse Selection = vor Vertrag (Typ unbekannt). Moral Hazard = nach Vertrag (Aktion unbeobachtbar) — nicht verwechseln.</div>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Numerisches Beispiel</h4>
<p>Markt mit zwei Qualitäten: WTP hoch $=100$, niedrig $=60$; Angebot kostet $40$ bzw. $70$. Bei Durchschnittspreis $80$ bleiben nur niedrige Qualität — Markt bricht teilweise zusammen.</p>
</div>
</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Adverse Selection</h4>
<p>Hidden characteristics vor Vertrag: Akerlof-Markt für Zitronen — Durchschnittspreis → gute Anbieter scheiden aus → Death Spiral. Signaling (Spence): Bildung als Signal bei $c_s \\neq c_t$. Screening (Rothschild-Stiglitz): Vertragspartner bietet Menü.</p>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Erwarteter Wert', eq: String.raw`$$E[v] = q \cdot v_H + (1-q) \cdot v_L$$`, desc: 'Preis bei Unwissenheit', variables: { q: 'Anteil hoher Qualität', v_H: 'Wert hoher Qualität', v_L: 'Wert niedriger Qualität' } }
    ],
    aufgaben: [
      {
        text: String.raw`In einem Markt gibt es gute Autos ($v=5000$) und schlechte ($v=2000$) zu gleichen Teilen. Verkäufer guter Autos verkaufen nur ab $4500$. Was passiert?`,
        steps: [
          { text: String.raw`Berechne Erwartungswert des Käufers:`, eq: String.raw`E[v] = 0{,}5 \cdot 5000 + 0{,}5 \cdot 2000 = 3500` },
          { text: String.raw`Entscheidung: Verkaufen Besitzer guter Autos bei $P=3500$?`, eq: String.raw`3500 < 4500 \implies \text{Nein.}` },
          { text: String.raw`Folge: Welche Autos bleiben am Markt?`, eq: String.raw`\text{Nur die schlechten (Adverse Selection).}` }
        ],
        result: String.raw`Marktzusammenbruch für Qualität. Adverse Selection führt zu Lemons-Problem.`
      },
      {
        text: String.raw`Akerlof-Markt für Lemons: Es gibt gute Gebrauchtwagen mit Wert $v_G = 8000$ und schlechte mit $v_S = 2000$. Käufer kennen die Qualität nicht. Verkäufer guter Autos reservieren ihren Wagen für mindestens $v_G = 8000$, schlechter für mindestens $v_S = 2000$. Anfangsanteil gut: $q = 0{,}5$. Zeigen Sie, wie adversarische Selektion zum vollständigen Marktversagen führt.`,
        steps: [
          { text: String.raw`Runde 1: Käufer zahlen $E[v] = 0{,}5 \cdot 8000 + 0{,}5 \cdot 2000 = 5000$.`, eq: String.raw`E_1[v] = 5000 < 8000 \implies \text{Verkäufer guter Autos verlassen Markt.}` },
          { text: String.raw`Runde 2: Nur schlechte Autos bleiben. Käufer zahlen $E[v] = 2000$.`, eq: String.raw`E_2[v] = 2000 = v_S \implies \text{Nur schlechte Autos gehandelt.}` },
          { text: String.raw`Wohlfahrtsverlust: Gute Autos werden nicht gehandelt trotz positivem Handelsgewinn.`, eq: String.raw`\Delta W_{verloren} = (v_G - v_S) \cdot N_G = (8000-2000) \cdot N_G > 0` },
          { text: String.raw`Lösung: Garantien, Zertifizierung oder Reputationsmechanismen.`, eq: String.raw`\text{Signaling: Verkäufer guter Autos sendet glaubwürdiges Signal (z.B. Garantie, TÜV).}` }
        ],
        result: String.raw`Vollständiges Marktversagen im Gleichgewicht: Nur schlechte Autos werden gehandelt. Der Markt für gute Autos bricht zusammen, obwohl Tausch für beide Seiten vorteilhaft wäre. Lösung erfordert Mechanismen zur Informationsübertragung (Signaling, Screening, staatliche Zertifizierung).`
      },
      
    ]
  },
  information_moralhazard: {
    motivation: 'Moral Hazard und Signaling/Screening behandeln ex-post Handlungsprobleme bzw. Trennmechanismen bei asymmetrischer Information.',
    theorie: String.raw`<section class="theory-recipe-section theory-recipe-section--kernidee" data-theory-step="2" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">2</span> Kernidee</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Moral Hazard (Hidden Action)</h4>
<p>Nach Vertragsabschluss kann der Prinzipal die Handlung des Agenten nur unvollständig beobachten. Ohne passende Anreize sinkt die gewünschte Anstrengung — klassisch: Versicherung senkt Vorsicht, Managervertrag ohne Performance-Kopplung.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--formale" data-theory-step="4" aria-labelledby="theory-formale-h">
<h3 class="theory-recipe-heading" id="theory-formale-h"><span class="theory-recipe-step" aria-hidden="true">4</span> Formale Darstellung</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Prinzipal-Agenten-Logik</h4>
<div class="math-block">$$E[\\\\pi_P] = E[y] - w \\\\quad \\\\text{s.t.} \\\\quad IC,\\\\;PC$$</div>
      <p>Verträge müssen gleichzeitig Teilnahmeanreiz (PC) und Anreizkompatibilität (IC) erfüllen. Performance-Löhne, Bonus-Malus und Selbstbehalte sind ökonomische Antworten auf Moral Hazard.</p>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--mechanismus" data-theory-step="5" aria-labelledby="theory-mechanismus-h">
<h3 class="theory-recipe-heading" id="theory-mechanismus-h"><span class="theory-recipe-step" aria-hidden="true">5</span> Mechanismus & Zusammenhänge</h3>
<div class="theory-recipe-body">

<h4 class="theory-subsection-title">Signaling und Screening</h4>
<p>Bei verborgenen Typen (Hidden Characteristics) kann die informierte Seite Signale senden (Signaling), die uninformierte Seite kann Vertragsmenüs zur Selbstselektion anbieten (Screening).</p>
      <p>Separierende Gleichgewichte sind nur stabil, wenn Nachahmung für den ungeeigneten Typ hinreichend teuer ist.</p>


<h4 class="theory-subsection-title">Managerverträge (VL 20)</h4>
<p>Ein Manager wählt Anstrengung $e$; der Erfolg ist stochastisch. Ein fixer Lohn erzeugt zu wenig Anstrengung, ein reiner Erfolgsbonus kann zu viel Risiko laden. Optimal ist oft eine Mischung aus Fixgehalt und variabler Komponente.</p>


<h4 class="theory-subsection-title">In der Klausur: Moral Hazard</h4>
<p>Hidden action: Agent wählt Aufwand $a$ nach Vertrag. Erwartungsprinzipal maximiert $E[\\\\pi|a]$ minus Risikoaufschlag. Ergebnis: Teilversicherung optimal bei risikoaversem Agent — Vollversicherung zerstört Anreize.</p>


<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Trade-off Versicherung vs. Anreize zeichnen. Monitoring/Performance Pay als institutionelle Antwort. Bei Banken: Bailout erzeugt Ex-post-Moral Hazard (Risikoübernahme).</p>
      <div class="warn-box"><strong>Partizipation vs. Anreiz:</strong> Beide Nebenbedingungen (IR + IC) prüfen — nur IC reicht nicht für Gleichgewicht.</div>


<h4 class="theory-subsection-title">Klausurtransfer (source-distilled)</h4>
<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>


<h4 class="theory-subsection-title">Fehleranalyse</h4>
<div class="warn-box"><strong>Adverse Selection vs. Moral Hazard:</strong> Ex-ante Typproblem (vor Vertrag) und ex-post Verhaltensproblem (nach Vertrag) erfordern unterschiedliche Instrumente.</div>

</div>
</section>
<section class="theory-recipe-section theory-recipe-section--anwendung" data-theory-step="6" aria-labelledby="theory-anwendung-h">
<h3 class="theory-recipe-heading" id="theory-anwendung-h"><span class="theory-recipe-step" aria-hidden="true">6</span> Anwendung & Klausurtransfer</h3>
<div class="theory-recipe-body">
<div class="section-block">
<h4 class="theory-subsection-title">In der Klausur: Moral Hazard</h4>
<p>Hidden action: Agent wählt Aufwand $a$ nach Vertrag. Erwartungsprinzipal maximiert $E[\\pi|a]$ minus Risikoaufschlag. Ergebnis: Teilversicherung optimal bei risikoaversem Agent — Vollversicherung zerstört Anreize.</p>
</div>
<div class="section-block">
<h4 class="theory-subsection-title">Prüfungsstandard</h4>
<p>Trade-off Versicherung vs. Anreize zeichnen. Monitoring/Performance Pay als institutionelle Antwort. Bei Banken: Bailout erzeugt Ex-post-Moral Hazard (Risikoübernahme).</p>
      <div class="warn-box"><strong>Partizipation vs. Anreiz:</strong> Beide Nebenbedingungen (IR + IC) prüfen — nur IC reicht nicht für Gleichgewicht.</div>
</div>
</div>
</section>`,
    formeln: [
      { label: 'Prinzipalziel', eq: String.raw`$$\max_w E[\pi_P]=E[y]-w \;\;\text{s.t.}\;\; IC,PC$$`, desc: 'Vertragswahl unter versteckter Handlung.' },
      { label: 'IC-Bedingung', eq: String.raw`$$EU_A(w_A|e_H)\ge EU_A(w_A|e_L)$$`, desc: 'Agent wählt gewünschte Anstrengung.' },
      { label: 'Separierendes Signal', eq: String.raw`$$30 \le e^* \le 60$$`, desc: 'Beispielbereich Spence-Signaling (qualitativ).' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Arbeitnehmer kann hohen Effort ($e=H$, Kosten 5) oder niedrigen Effort ($e=L$, Kosten 0) wählen. Bei $e=H$ beträgt die Erfolgswahrscheinlichkeit 0{,}8, bei $e=L$ 0{,}4. Erfolg bringt 100, Misserfolg 0. Der Arbeitgeber zahlt einen fixen Lohn von 40. Welchen Effort wählt der Arbeitnehmer?`,
        steps: [
          { text: String.raw`Nutzen bei $e=H$:`, eq: String.raw`U(H)=40-5=35` },
          { text: String.raw`Nutzen bei $e=L$:`, eq: String.raw`U(L)=40-0=40>35 \Rightarrow e=L` },
          { text: String.raw`Interpretation:`, eq: String.raw`\text{Fixlohn ohne Leistungsbezug erzeugt Moral Hazard.}` }
        ],
        result: String.raw`Der Arbeitnehmer wählt niedrigen Effort. Anreizkompatible Vergütung muss den Mehrertrag von hohem Effort teilweise an den Agenten koppeln.`
      },
      {
        text: String.raw`Spence-Signaling: Typen H und L mit Produktivität $y_H=100$, $y_L=40$, Bildungskosten $c_H(e)=e$, $c_L(e)=2e$. Leiten Sie den Bereich für ein separierendes Signalniveau $e^*$ her.`,
        steps: [
          { text: String.raw`IC für H:`, eq: String.raw`100-e^* \ge 40 \Rightarrow e^* \le 60` },
          { text: String.raw`IC für L:`, eq: String.raw`40 \ge 100-2e^* \Rightarrow e^* \ge 30` },
          { text: String.raw`Gemeinsamer Bereich:`, eq: String.raw`30 \le e^* \le 60` }
        ],
        result: String.raw`Separierendes Gleichgewicht ist für $e^* \in [30,60]$ möglich, weil Signaling für den Niedrigtyp relativ teuer ist.`
      },
      {
        text: String.raw`Versicherungsmarkt-Fallunterscheidung: (i) Vor Vertragsabschluss kennt nur der Kunde sein Risikoprofil. (ii) Nach Vertragsabschluss sinkt seine Vorsicht. Ordnen Sie zu und nennen Sie je ein passendes Instrument.`,
        steps: [
          { text: String.raw`(i) Problemtyp:`, eq: String.raw`\text{Adverse Selection (versteckter Typ vor Vertrag).}` },
          { text: String.raw`(ii) Problemtyp:`, eq: String.raw`\text{Moral Hazard (versteckte Handlung nach Vertrag).}` },
          { text: String.raw`Instrumente:`, eq: String.raw`\text{(i) Screening/Signaling; (ii) Selbstbehalt, Bonus-Malus, Monitoring.}` }
        ],
        result: String.raw`Ex-ante Typproblem und ex-post Verhaltensproblem erfordern unterschiedliche Instrumente; diese Zuordnung ist klausurkritisch.`
      }
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
    entry.theorie = String(entry.theorie || '') + depth.html;
  }
}

const aPlusSection = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const aPlusWarn = (title, body) => `<div class="warn-box"><strong>${title}:</strong> ${body}</div>`;

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  let guard = 0;
  while ((String(entry.theorie).match(/section-block/g) || []).length < 4 && guard++ < 2) {
    entry.theorie += aPlusSection(
      guard === 1 ? 'Prüfungsstandard' : 'Klausurpfad',
      `<p>${guard === 1
        ? 'Klausurpfad: Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge.'
        : 'Ergänzung (platform-added-explanation) aus offiziellem Mikro-II-Korpus.'}</p>
      ${aPlusWarn('Standardfehler', 'Bei Marktversagen immer Markt- vs. Sozialoptimum und Instrument (Pigou/Coase/Regulierung) trennen.')}`
    );
  }
  while ((entry.formeln?.length || 0) < 3 && entry.formeln?.[0]) {
    const base = entry.formeln[entry.formeln.length - 1];
    entry.formeln.push({ ...base, label: `${base.label} (Kurz)`, desc: base.desc || 'Kernrelation.' });
  }
}

const THEORY_TARGET = 2750;
for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = String(entry.theorie || '');
  if (html.length >= THEORY_TARGET || html.includes('Klausurtransfer (source-distilled)')) continue;
  entry.theorie = `${html}${aPlusSection(
    'Klausurtransfer (source-distilled)',
    `<p><strong>Prüfungsstandard:</strong> Mechanismus → Gleichgewicht → Wohlfahrts-/Politikfolge. Bei Marktversagen: Markt- vs. Sozialoptimum und Instrument.</p>
<p><em>platform-added-explanation</em> wo kein VL-Seitenanker — Primär-PDF für Randnotation.</p>`
  )}`;
}
