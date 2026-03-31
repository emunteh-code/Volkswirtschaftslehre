// ============================================================
// CHAPTERS & CONTENT DATA — Makroökonomik II
// Rebuilt to match mikro1 density and pedagogy
// ============================================================

export const CHAPTERS = [
  { id:'wechselkurs',      title:'Wechselkurs & Kaufkraftparität',       cat:'Offene VW I',      short:'WK' },
  { id:'zinsparitaet',     title:'Zinsparität & Wechselkurserwartungen', cat:'Offene VW I',      short:'ZP' },
  { id:'zahlungsbilanz',   title:'Zahlungsbilanz',                       cat:'Offene VW I',      short:'ZB' },
  { id:'marshall_lerner',  title:'Marshall-Lerner-Bedingung & J-Kurve',  cat:'Offene VW I',      short:'ML' },
  { id:'offene_is',        title:'IS-Kurve in offener Volkswirtschaft',  cat:'Offene VW II',     short:'IS offen' },
  { id:'mundell_fleming',  title:'Mundell-Fleming-Modell',               cat:'Offene VW II',     short:'M-F' },
  { id:'wk_regime',        title:'Wechselkursregime & Krisen',           cat:'Offene VW II',     short:'Regime' },
  { id:'zeitinkonsistenz', title:'Zeitinkonsistenz & Zentralbanken',     cat:'Wirtschaftspolitik', short:'Politik' },
  { id:'solow_basis',      title:'Solow-Wachstumsmodell',                cat:'Wachstum',         short:'Solow' }
];

export const CONTENT = {
  wechselkurs: {
    motivation: 'Der Wechselkurs ist das zentrale Preissignal in der offenen Volkswirtschaft — er verbindet inländische und ausländische Güter-, Kapital- und Arbeitsmärkte.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Nominaler Wechselkurs (Mengennotierung)</h3>
      <p>Der <strong>nominale Wechselkurs</strong> $E$ gibt an, wie viele Einheiten ausländischer Währung man für eine Einheit inländischer Währung erhält. In diesem Kurs verwenden wir konsequent die <strong>Mengennotierung</strong>.</p>
      <div class="math-block">$$E = \frac{\text{Fremdwährung}}{\text{Inlandswährung}}$$</div>
      <p>Ein Anstieg von $E$ bedeutet eine <strong>Aufwertung</strong> (Inlandswährung wird wertvoller), ein Rückgang eine <strong>Abwertung</strong>.</p>
    </div>
    <div class="section-block">
      <h3>Realer Wechselkurs</h3>
      <p>Der reale Wechselkurs $\varepsilon$ misst den relativen Preis inländischer Güter in Einheiten ausländischer Güter. Er ist entscheidend für die internationale Wettbewerbsfähigkeit.</p>
      <div class="math-block">$$\varepsilon = \frac{E \cdot P}{P^*}$$</div>
      <p>Hierbei ist $P$ das inländische und $P^*$ das ausländische Preisniveau. Eine reale Aufwertung ($\varepsilon \uparrow$) macht Inlandsgüter relativ teurer.</p>
    </div>
    <div class="section-block">
      <h3>Kaufkraftparität (KKP)</h3>
      <p>Die <strong>absolute KKP</strong> postuliert, dass sich der Wechselkurs so anpasst, dass ein Güterkorb überall das gleiche kostet (Gesetz des einheitlichen Preises):</p>
      <div class="math-block">$$E_{\text{KKP}} = \frac{P^*}{P}$$</div>
      <p>Die <strong>relative KKP</strong> betrachtet Veränderungsraten: Der Wechselkurs wertet um die Inflationsdifferenz ab/auf:</p>
      <div class="math-block">$$\frac{\Delta E}{E} \approx \pi^* - \pi$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Preis- vs. Mengennotierung:</strong> Verwechseln Sie niemals die Notierungen. In der Preisnotierung ($1/E$) wäre ein Anstieg eine Abwertung. Hier (Mengennotierung) gilt: $E \uparrow \implies$ Aufwertung.</div>
      <div class="warn-box"><strong>Realer Wechselkurs:</strong> Achten Sie darauf, ob $\varepsilon$ im Zähler oder Nenner steht. In der Mengennotierung steht $E$ im Zähler: $\varepsilon = (E \cdot P)/P^*$.</div>
    </div>`,
    formeln: [
      { label:'Nominaler WK', eq: String.raw`$$E = \frac{\text{Einheiten Ausland}}{\text{1 Einheit Inland}}$$`, desc:'Mengennotierung', variables: { 'E': 'Nominaler Wechselkurs' } },
      { label:'Realer WK', eq: String.raw`$$\varepsilon = \frac{E \cdot P}{P^*}$$`, desc:'Wettbewerbsfähigkeit', variables: { 'E': 'Nominaler WK', 'P': 'Preisniveau Inland', 'P^*': 'Preisniveau Ausland' } },
      { label:'Relative KKP', eq: String.raw`$$\frac{\Delta E}{E} = \pi^* - \pi$$`, desc:'Inflationsdifferenz', variables: { '\pi': 'Inflation Inland', '\pi^*': 'Inflation Ausland' } }
    ],
    aufgaben: [
      {
        text: String.raw`In Land A (Mark) kostet ein Korb Güter $P = 100$. In Land B (Schilling) kostet er $P^* = 300$. Der nominale Wechselkurs sei $E = 2{,}5$. Berechne den realen Wechselkurs $\varepsilon$ und ordne ihn grafisch ein.`,
        steps: [
          { text: `Formel für realen Wechselkurs:`, eq: String.raw`$$\varepsilon = \frac{E \cdot P}{P^*}$$` },
          { text: `Einsetzen der Werte:`, eq: String.raw`$$\varepsilon = \frac{2{,}5 \cdot 100}{300} \approx 0{,}833$$` },
          { text: `Grafische Einordnung: Auf welcher Achse eines $Y$-$E$-Diagramms (Mengennotierung) würde dieser Wert die Wettbewerbsfähigkeit beeinflussen?`, eq: String.raw`\text{Vertikale Achse (Wechselkurs-Achse)}` }
        ],
        result: String.raw`$\varepsilon \approx 0{,}833$ (Real unterbewertet)`
      },
      {
        text: String.raw`Die Inflation in den USA beträgt $\pi^* = 2\%$, in der EU $\pi = 5\%$. Um wie viel Prozent muss der Euro laut relativer KKP auf- oder abwerten?`,
        steps: [
          { text: `Relative KKP Formel:`, eq: String.raw`$$\frac{\Delta E}{E} = \pi^* - \pi$$` },
          { text: `Werte einsetzen:`, eq: String.raw`$$\frac{\Delta E}{E} = 0{,}02 - 0{,}05 = -0{,}03$$` },
          { text: `Interpretation: Ein negatives Vorzeichen bedeutet in Mengennotierung eine Abwertung.`, eq: null }
        ],
        result: String.raw`Abwertung um $3\%$`
      },
      {
        text: String.raw`Gegeben sei $E = 1{,}2$ $/€$. Der US-Preisindex steigt um $10\%$, der EU-Preisindex bleibt konstant. Wie ändert sich die Wettbewerbsfähigkeit ($\varepsilon$) bei konstantem $E$?`,
        steps: [
          { text: `Modellauswahl: Was misst die Wettbewerbsfähigkeit?`, eq: String.raw`\text{Der reale Wechselkurs } \varepsilon` },
          { text: `Neue Lage berechnen ($P^*_1 = 1{,}1 P^*_0$):`, eq: String.raw`$$\varepsilon_1 = \frac{1{,}2 \cdot P}{1{,}1 \cdot P^*} = \frac{\varepsilon_0}{1{,}1}$$` },
          { text: `Relative Änderung:`, eq: String.raw`$$\frac{1}{1{,}1} - 1 \approx -9{,}1\%$$` }
        ],
        result: String.raw`Reale Abwertung (Wettbewerbsfähigkeit steigt) um $9{,}1\%$`
      }
    ]
  },
  zinsparitaet: {
    motivation: 'Arbitrage auf internationalen Finanzmärkten erzwingt eine Beziehung zwischen Zinssätzen und erwarteten Wechselkursänderungen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Ungedeckte Zinsparität (UIP)</h3>
      <p>Die <strong>UIP</strong> besagt, dass die erwarteten Renditen von Anlagen in In- und Auslandswährung bei perfekter Kapitalmobilität gleich sein müssen:</p>
      <div class="math-block">$$1 + i_t = (1 + i^*_t) \frac{E_t}{E^e_{t+1}}$$</div>
      <p>Ein Anleger erhält im Inland $1+i$. Im Ausland tauscht er 1€ in $E$ Einheiten Fremdwährung, erhält dort $1+i^*$ und tauscht am Ende zum erwarteten Kurs $1/E^e$ zurück.</p>
    </div>
    <div class="section-block">
      <h3>Approximative Form</h3>
      <p>Für kleine Zinssätze lässt sich die UIP linear annähern:</p>
      <div class="math-block">$$i_t \approx i^*_t - \frac{E^e_{t+1} - E_t}{E_t}$$</div>
      <p>Der inländische Zins entspricht dem ausländischen Zins abzüglich der erwarteten Aufwertungsrate der Inlandswährung.</p>
    </div>
    <div class="section-block">
      <h3>Bestimmung des aktuellen Wechselkurses</h3>
      <p>Stellt man die UIP nach $E_t$ um, sieht man, dass der aktuelle Kurs von den Zinsen und dem Erwartungswert abhängt:</p>
      <div class="math-block">$$E_t = \frac{1+i_t}{1+i^*_t} E^e_{t+1}$$</div>
      <p>Steigt der Inlandszins $i_t$, wertet die Währung sofort auf ($E_t \uparrow$).</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Zinsvorteil vs. Erwartung:</strong> Ein hoher Zins im Inland ($i > i^*$) bedeutet laut UIP <i>nicht</i>, dass die Währung attraktiv ist und aufwerten wird, sondern dass der Markt eine <strong>Abwertung</strong> erwartet, die den Zinsvorteil genau kompensiert.</div>
    </div>`,
    formeln: [
      { label:'Exakte UIP', eq: String.raw`$$1 + i_t = (1 + i^*_t) \frac{E_t}{E^e_{t+1}}$$`, desc:'Arbitragebedingung', variables: { 'i': 'Inlandszins', 'i^*': 'Auslandszins', 'E': 'Aktueller WK', 'E^e': 'Erwarteter WK' } },
      { label:'Approximative UIP', eq: String.raw`$$i_t \approx i^*_t - \frac{E^e_{t+1} - E_t}{E_t}$$`, desc:'Lineare Näherung', variables: { 'i-i^*': 'Zinsdifferenz', '\Delta E^e/E': 'Erwartete Aufwertung' } }
    ],
    aufgaben: [
      {
        text: String.raw`Der Zins in der Eurozone sei $i = 1\%$, in den USA $i^* = 4\%$. Der aktuelle Wechselkurs liegt bei $E = 1{,}10$ $/€$. Die Leistungsbilanz weist ein Defizit von $2\%$ des BIP auf. Welcher Wechselkurs wird für die nächste Periode erwartet, wenn die UIP gilt?`,
        steps: [
          { text: `Modellauswahl: Ist das Leistungsbilanzdefizit für die kurzfristige UIP-Berechnung relevant?`, eq: String.raw`\text{Nein, UIP basiert nur auf Zinsen und Arbitrage.}` },
          { text: `UIP nach $E^e$ auflösen:`, eq: String.raw`$$E^e_{t+1} = E_t \frac{1+i^*_t}{1+i_t}$$` },
          { text: `Werte einsetzen und berechnen:`, eq: String.raw`$$E^e = 1{,}10 \cdot \frac{1{,}04}{1{,}01} \approx 1{,}1327$$` }
        ],
        result: String.raw`$E^e \approx 1{,}1327$ $/€$ (LB-Daten waren irrelevant)`
      },
      {
        text: String.raw`Analysiere grafisch: Zeichne die UIP-Kurve im $i$-$E$-Diagramm ($i$ auf der vertikalen Achse). In welche Richtung verschiebt sich die Kurve, wenn die Erwartungen $E^e$ steigen?`,
        steps: [
          { text: `Stelle die UIP nach $i$ um: $i = \frac{E}{E^e}(1+i^*) - 1$.`, eq: null },
          { text: `Wenn $E^e$ steigt (Aufwertungserwartung), sinkt der Faktor vor $E$.`, eq: null },
          { text: `Grafische Wirkung: Die Kurve verschiebt sich nach rechts (bei jedem $i$ ist ein höheres $E$ nötig).`, eq: null }
        ],
        result: String.raw`Rechtsverschiebung (Aufwertungsdruck)`
      },
      {
        text: String.raw`Ein Investor erwartet $E^e = 1{,}15$ in einem Jahr. Der aktuelle Kurs ist $E = 1{,}10$ und $i^* = 4\%$. Welchen Zins $i$ muss die ZB setzen, um $E=1{,}10$ zu halten?`,
        steps: [
          { text: `Nutze die exakte UIP:`, eq: String.raw`$$1 + i = (1 + 0{,}04) \frac{1{,}10}{1{,}15}$$` },
          { text: `Berechne die rechte Seite:`, eq: String.raw`$$1{,}04 \cdot 0{,}9565 \approx 0{,}9948$$` },
          { text: `Ergebnis: $i \approx -0{,}52\%$.`, eq: null }
        ],
        result: String.raw`$i \approx -0{,}52\%$ (Negativzins nötig)`
      }
    ]
  },
  zahlungsbilanz: {
    motivation: 'Die Zahlungsbilanz ist die Buchführung einer Volkswirtschaft gegenüber dem Rest der Welt. Jede Transaktion hat eine Gegenbuchung.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Struktur der Zahlungsbilanz</h3>
      <p>Die Zahlungsbilanz besteht aus zwei Hauptteilbilanzen:</p>
      <ul>
        <li><strong>Leistungsbilanz (LB):</strong> Handel mit Gütern, Dienstleistungen, Primäreinkommen (z.B. Zinsen aus dem Ausland) und Sekundäreinkommen (Transfers).</li>
        <li><strong>Kapitalbilanz (KB):</strong> Grenzüberschreitender Kapitalverkehr (Direktinvestitionen, Wertpapiere).</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Die Zahlungsbilanzidentität</h3>
      <p>Da jede Transaktion finanziert werden muss, gilt rein buchhalterisch (bei Vernachlässigung der Restposten):</p>
      <div class="math-block">$$LB + KB = 0 \quad \implies \quad LB = -KB$$</div>
      <p>Ein Leistungsbilanzüberschuss ($LB > 0$) bedeutet, dass das Land per Saldo Kapital an das Ausland liefert (Kapitalexport, $KB < 0$).</p>
    </div>
    <div class="section-block">
      <h3>Vermögensstatus</h3>
      <p>Die Leistungsbilanz verändert das <strong>Nettoauslandsvermögen (NAV)</strong> eines Landes. Ein Land mit dauerhaften LB-Defiziten verschuldet sich gegenüber dem Ausland.</p>
      <div class="math-block">$$\Delta NAV = LB$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Vorzeichen in der KB:</strong> In der Makroökonomik wird die Kapitalbilanz oft als "Nettokapitalexport" definiert. Ein Plus in der KB bedeutet dann, dass Kapital <i>abfließt</i> (Forderungsaufbau gegenüber dem Ausland). Prüfen Sie immer die lokale Definition im Skript!</div>
    </div>`,
    formeln: [
      { label:'Identität', eq: String.raw`$$LB + KB = 0$$`, desc:'Buchhalterischer Ausgleich', variables: { 'LB': 'Leistungsbilanz', 'KB': 'Kapitalbilanz' } },
      { label:'Nettoexporte', eq: String.raw`$$NX = X - IM/\varepsilon$$`, desc:'Handelsbilanzteil der LB', variables: { 'X': 'Exporte', 'IM': 'Importe' } }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Land exportiert Güter im Wert von 100 Mrd. € und importiert Güter für 120 Mrd. €. Die Ersparnis beträgt 50 Mrd. €, das BIP liegt bei 500 Mrd. €. Wie hoch ist der Saldo der Leistungsbilanz?`,
        steps: [
          { text: `Modellauswahl: Welche Daten sind für die LB-Identität (LB = X - IM) relevant?`, eq: String.raw`\text{Nur Exporte und Importe. Ersparnis/BIP sind hier irrelevant.}` },
          { text: `Leistungsbilanz berechnen:`, eq: String.raw`$$LB = 100 - 120 = -20$$` }
        ],
        result: String.raw`$LB = -20$ Mrd. € (Defizit)`
      },
      {
        text: String.raw`Wenn ein Land ein Leistungsbilanzdefizit von 50 Mrd. $ hat, wie muss sich die Kapitalbilanz (Nettokapitalexport) verhalten?`,
        steps: [
          { text: `Nutze die Identität:`, eq: String.raw`$$KB = -LB$$` },
          { text: `Einsetzen:`, eq: String.raw`$$KB = -(-50) = +50$$` }
        ],
        result: String.raw`Kapitalimport von 50 Mrd. $`
      },
      {
        text: String.raw`Ein deutscher Tourist gibt in den USA 2000 $ aus. Erkläre die Buchung in Theorie und Formel.`,
        steps: [
          { text: `Theorie: Reiseverkehr ist ein Dienstleistungsimport.`, eq: String.raw`LB \downarrow` },
          { text: `Formel: $\Delta LB + \Delta KB = 0$.`, eq: String.raw$$-2000 + \Delta KB = 0 \implies \Delta KB = +2000$$` }
        ],
        result: String.raw`LB sinkt, KB (Forderungsabbau) steigt.`
      }
    ]
  },
  marshall_lerner: {
    motivation: 'Verbessert eine Abwertung immer die Handelsbilanz? Mathematisch hängt dies von der Preiselastizität der Nachfrage ab.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Handelsbilanz in realen Einheiten</h3>
      <p>Die Nettoexporte hängen vom realen Wechselkurs $\varepsilon$ ab:</p>
      <div class="math-block">$$NX = X(Y^*, \varepsilon) - \frac{IM(Y, \varepsilon)}{\varepsilon}$$</div>
      <p>Eine Abwertung ($\varepsilon \downarrow$) hat drei Effekte:</p>
      <ul>
        <li><strong>Exporteffekt:</strong> $X \uparrow$ (Menge steigt), da Inlandsgüter billiger werden. (Positiv für $NX$)</li>
        <li><strong>Importmengen-Effekt:</strong> $IM \downarrow$ (Menge sinkt), da Auslandsgüter teurer werden. (Positiv für $NX$)</li>
        <li><strong>Preiseffekt:</strong> $1/\varepsilon \uparrow$. Die bereits getätigten Importe werden teurer. (Negativ für $NX$)</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Marshall-Lerner-Bedingung</h3>
      <p>Die Marshall-Lerner-Bedingung besagt, dass eine reale Abwertung die Handelsbilanz nur dann verbessert, wenn die Mengeneffekte den Preiseffekt überwiegen. Formal:</p>
      <div class="math-block">$$\frac{\partial NX}{\partial \varepsilon} < 0$$</div>
      <p>Dies ist erfüllt, wenn die Summe der Elastizitäten von Export- und Importnachfrage größer als 1 ist.</p>
    </div>
    <div class="section-block">
      <h3>J-Kurven-Effekt</h3>
      <p>In der kurzen Frist sind Export- und Importmengen oft durch Verträge fixiert. Unmittelbar nach einer Abwertung dominiert daher der negative Preiseffekt. Erst nach einiger Zeit passen sich die Mengen an.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Richtung der Ableitung:</strong> In der Mengennotierung ist eine Abwertung ein <i>Sinken</i> von $\varepsilon$. Wenn Marshall-Lerner gilt, führt ein Sinken von $\varepsilon$ zu einem <i>Anstieg</i> von $NX$. Die Ableitung ist also negativ: $dNX/d\varepsilon < 0$.</div>
    </div>`,
    formeln: [
      { label:'Nettoexporte', eq: String.raw`$$NX = X - \frac{IM}{\varepsilon}$$`, desc:'Handelsbilanz in Inlandsgütern', variables: { '\varepsilon': 'Realer WK (Mengennot.)' } },
      { label:'M-L-Bedingung', eq: String.raw`$$|\eta_x| + |\eta_{im}| > 1$$`, desc:'Bedingung für Verbesserung', variables: { '\eta': 'Elastizität' } }
    ],
    aufgaben: [
      {
        text: String.raw`Der nominale Kurs sinkt um $10\%$. Die Inflation im Inland beträgt $5\%$, im Ausland $0\%$. Prüfe die Marshall-Lerner-Bedingung bei $\eta_x = 0{,}6$ und $\eta_{im} = 0{,}5$.`,
        steps: [
          { text: `Modellauswahl: Bestimme zuerst die reale Abwertung $\Delta \varepsilon$.`, eq: String.raw`$$\Delta \varepsilon \approx \Delta E + \pi - \pi^* = -0{,}10 + 0{,}05 - 0 = -0{,}05$$` },
          { text: `Gilt Marshall-Lerner? Summe der Elastizitäten bilden:`, eq: String.raw`$$0{,}6 + 0{,}5 = 1{,}1$$` },
          { text: `Vergleich: $1{,}1 > 1$. Die Bedingung ist erfüllt.`, eq: null }
        ],
        result: String.raw`Ja, die Handelsbilanz verbessert sich langfristig.`
      },
      {
        text: String.raw`Erkläre grafisch den Verlauf der J-Kurve. Was sind die Achsenbeschriftungen?`,
        steps: [
          { text: `Horizontale Achse: Zeit $t$. Vertikale Achse: Nettoexporte $NX$.`, eq: null },
          { text: `Zeichne den Verlauf: Unmittelbar nach $t_0$ (Abwertung) sinkt $NX$ unter die x-Achse (Preiseffekt).`, eq: null },
          { text: `Später steigt $NX$ über das Ausgangsniveau (Mengeneffekt).`, eq: null }
        ],
        result: String.raw`Erst Preiseffekt, dann Mengeneffekt.`
      },
      {
        text: String.raw`Gegeben sei $X = 100 \varepsilon^{0{,}8}$ und $IM = 100 \varepsilon^{-0{,}4}$. Gilt hier die Marshall-Lerner-Bedingung?`,
        steps: [
          { text: `Bestimme die Elastizitäten aus den Exponenten:`, eq: String.raw`$$\eta_x = 0{,}8, \quad \eta_{im} = 0{,}4$$` },
          { text: `Summe bilden:`, eq: String.raw`$$0{,}8 + 0{,}4 = 1{,}2$$` }
        ],
        result: String.raw`Ja, M-L gilt ($1{,}2 > 1$).`
      }
    ]
  },
  offene_is: {
    motivation: 'Die IS-Kurve in der offenen Volkswirtschaft berücksichtigt, dass ein Teil der Nachfrage ins Ausland abfließt (Importe) und Nachfrage aus dem Ausland hinzukommt (Exporte).',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Nachfragefunktion (ZZ-Kurve)</h3>
      <p>Die Nachfrage nach inländischen Gütern setzt sich zusammen aus:</p>
      <div class="math-block">$$Z = C(Y-T) + I(Y, i) + G + X(Y^*, \varepsilon) - \frac{IM(Y, \varepsilon)}{\varepsilon}$$</div>
      <p>Wichtig: Importe werden durch $\varepsilon$ dividiert, um sie in Einheiten inländischer Güter auszudrücken.</p>
    </div>
    <div class="section-block">
      <h3>Gleichgewicht und Handelsbilanz</h3>
      <p>Im Gleichgewicht gilt $Y = Z$. Die Kurve der Inlandsnachfrage (DD-Kurve, $C+I+G$) ist steiler als die ZZ-Kurve, da bei ZZ ein Teil des Einkommenszuwachses in Importe fließt.</p>
      <div class="math-block">$$\text{Steigung DD} = c_1 + b_1 > \text{Steigung ZZ} = c_1 + b_1 - q_1$$</div>
    </div>
    <div class="section-block">
      <h3>Der Multiplikatoreffekt</h3>
      <p>Der Multiplikator in der offenen VW ist kleiner, da die marginale Importquote $q_1$ den "Sickerverlust" erhöht:</p>
      <div class="math-block">$$m_{offen} = \frac{1}{1 - (c_1 + b_1) + q_1}$$</div>
    </div>
    <div class="section-block">
      <h3>Effekte von Schocks</h3>
      <p>Ein Anstieg der Staatsausgaben ($G \uparrow$) erhöht $Y$, verschlechtert aber die Handelsbilanz ($NX \downarrow$), da die Importe mit dem Einkommen steigen. Ein Anstieg der Auslandsnachfrage ($Y^* \uparrow$) erhöht $Y$ und verbessert die Handelsbilanz.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>DD vs. ZZ Kurve:</strong> Die DD-Kurve beschreibt die Inlandsnachfrage. Die ZZ-Kurve beschreibt die Nachfrage nach inländischen Gütern. Es gilt: $ZZ = DD + NX$.</div>
    </div>`,
    formeln: [
      { label:'ZZ-Kurve', eq: String.raw`$$Z = C + I + G + NX$$`, desc:'Nachfrage nach Inlandsgütern', variables: { 'NX': 'Nettoexporte' } },
      { label:'Multiplikator', eq: String.raw`$$m = \frac{1}{1 - c_1 + q_1}$$`, desc:'Staatsausgabenmultiplikator', variables: { 'c_1': 'Marg. Konsumquote', 'q_1': 'Marg. Importquote' } }
    ],
    aufgaben: [
      {
        text: String.raw`In einer VW sei $c_1 = 0{,}6$ und $q_1 = 0{,}1$. Berechne den Anstieg von $Y$ bei $\Delta G = 100$.`,
        steps: [
          { text: `Multiplikator berechnen:`, eq: String.raw`$$m = \frac{1}{1 - 0{,}6 + 0{,}1} = 2$$` },
          { text: `Änderung der Produktion:`, eq: String.raw`$$\Delta Y = 2 \cdot 100 = 200$$` }
        ],
        result: String.raw`$\Delta Y = 200$`
      },
      {
        text: String.raw`Finde grafisch den Punkt $Y_{NX=0}$. Wenn $NX = 20 - 0{,}1 Y$, bei welchem Einkommen ist die Handelsbilanz ausgeglichen?`,
        steps: [
          { text: `Theorie: $NX=0$ ist der Schnittpunkt von ZZ und DD Kurve.`, eq: null },
          { text: `Formel: Setze $NX = 0$ und löse nach $Y$ auf.`, eq: String.raw`$$20 - 0{,}1 Y = 0 \implies Y = 200$$` },
          { text: `Grafik: Bei $Y=200$ schneiden sich ZZ und DD.`, eq: null }
        ],
        result: String.raw`$Y = 200$`
      },
      {
        text: String.raw`Warum ist die ZZ-Kurve flacher als die DD-Kurve?`,
        steps: [
          { text: `Theorie: Ein Teil der Nachfrage fließt über Importe ab.`, eq: null },
          { text: `Formel: Die marginale Neigung, inländische Güter zu kaufen, ist $c_1 - q_1$ statt $c_1$.`, eq: null }
        ],
        result: String.raw`Importe dämpfen die Nachfragereaktion.`
      }
    ]
  },
  mundell_fleming: {
    motivation: 'Das Mundell-Fleming-Modell erweitert das IS-LM-Modell um den Außenhandel und die Zinsparität. Es ist das Standardwerkzeug zur Analyse von Geld- und Fiskalpolitik in offenen Volkswirtschaften.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Das Gleichungssystem</h3>
      <p>Das Modell besteht aus drei Gleichungen (Triple Integration):</p>
      <ul>
        <li><strong>IS*:</strong> $Y = C(Y-T) + I(Y, i) + G + NX(Y, Y^*, E)$ (Theorie & Grafik)</li>
        <li><strong>LM*:</strong> $M/P = L(Y, i)$ (Theorie & Grafik)</li>
        <li><strong>UIP:</strong> $i = i^* + \frac{E^e - E}{E}$ (Theorie & Formel)</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Flexible Wechselkurse</h3>
      <p>Bei flexiblen Kursen ist die <strong>Geldpolitik</strong> sehr effektiv. Eine Zinssenkung führt zu Kapitalabfluss, Abwertung ($E \downarrow$) und steigenden Nettoexporten. Die <strong>Fiskalpolitik</strong> ist hingegen ineffektiv ("Crowding-out" über den Wechselkurs), da steigende Zinsen eine Aufwertung induzieren, die $NX$ senkt.</p>
    </div>
    <div class="section-block">
      <h3>Feste Wechselkurse</h3>
      <p>Bei festen Kursen verliert die Zentralbank ihre Autonomie ($i = i^*$). Die <strong>Geldpolitik</strong> ist wirkungslos, da jede Änderung der Geldmenge durch Devisenmarktinterventionen neutralisiert werden muss. Die <strong>Fiskalpolitik</strong> ist jedoch maximal effektiv, da die ZB die Geldmenge ausweiten muss, um den Aufwertungsdruck zu verhindern.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Richtung der IS*-Kurve:</strong> Im $Y$-$E$-Diagramm verläuft die IS*-Kurve fallend (da $E \uparrow \implies NX \downarrow \implies Y \downarrow$). Die LM*-Kurve ist vertikal, wenn $i=i^*$ gesetzt wird.</div>
    </div>`,
    formeln: [
      { label:'IS*-Gleichgewicht', eq: String.raw`$$Y = C + I + G + NX(E)$$`, desc:'Gütermarktgleichgewicht', variables: { 'E': 'Wechselkurs' } },
      { label:'LM*-Gleichgewicht', eq: String.raw`$$M/P = L(Y, i^*)$$`, desc:'Geldmarktgleichgewicht', variables: { 'M': 'Geldmenge' } }
    ],
    aufgaben: [
      {
        text: String.raw`Expansive Fiskalpolitik ($G \uparrow$) bei flexiblen Kursen. Konsumquote 0.6, Investitionsneigung 0.2. Analysiere grafisch.`,
        steps: [
          { text: `Modellauswahl: Sind Konsum- und Investitionsneigung für das Endergebnis von $Y$ relevant?`, eq: String.raw`\text{Nein, bei LM* vertikal ist der Multiplikator für G gleich null.}` },
          { text: `Grafik: Verschiebe IS* nach rechts. Wo liegt das neue Gleichgewicht?`, eq: String.raw`\text{Auf der ursprünglichen LM*-Vertikalen, aber bei höherem } E.` }
        ],
        result: String.raw`$Y$ unverändert, $E$ steigt.`
      },
      {
        text: String.raw`Geldmengenerhöhung ($M \uparrow$) bei festen Wechselkursen. Beschreibe die notwendige ZB-Intervention.`,
        steps: [
          { text: `Theorie: $M \uparrow$ erzeugt Abwertungsdruck.`, eq: null },
          { text: `Aktion: Die ZB muss eigene Währung kaufen und Devisen verkaufen.`, eq: null },
          { text: `Formel: $\Delta M$ wird durch $\Delta R$ (Reserven) neutralisiert.`, eq: String.raw`$$\Delta M = \Delta R_{neg} \implies M_{neu} = M_{alt}$$` }
        ],
        result: String.raw`Geldpolitik wirkungslos.`
      },
      {
        text: String.raw`Warum ist Fiskalpolitik bei festen Kursen effektiver als in der geschlossenen VW?`,
        steps: [
          { text: `In der geschlossenen VW steigt $i$, was Investitionen dämpft.`, eq: null },
          { text: `Hier muss die ZB die Geldmenge erhöhen, um $i=i^*$ zu halten (Akkommodierung).`, eq: null }
        ],
        result: String.raw`Kein Zins-Crowding-out.`
      }
    ]
  },
  wk_regime: {
    motivation: 'Länder müssen entscheiden, ob sie ihre Währung frei schwanken lassen oder an eine andere Währung binden. Beide Extreme haben Vor- und Nachteile.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Feste Wechselkurse</h3>
      <p>Vorteile: Planungssicherheit für den Handel, Import von Glaubwürdigkeit (Disziplinierung der ZB). Nachteile: Verlust der Geldpolitik als Stabilisierungsinstrument, Gefahr von spekulativen Attacken.</p>
    </div>
    <div class="section-block">
      <h3>Flexible Wechselkurse</h3>
      <p>Vorteile: Autonome Geldpolitik, automatische Anpassung bei Schocks (über den Wechselkurs). Nachteile: Volatilität, Wechselkursrisiko für Firmen.</p>
    </div>
    <div class="section-block">
      <h3>Spekulative Attacken</h3>
      <p>Wenn Märkte glauben, dass eine ZB einen festen Kurs nicht mehr verteidigen kann (z.B. wegen zu geringer Reserven), verkaufen sie die Währung massiv. Die ZB muss die Zinsen extrem anheben oder die Bindung aufgeben.</p>
    </div>
    <div class="section-block">
      <h3>Optimale Währungsräume (OCA)</h3>
      <p>Nach Robert Mundell lohnt sich eine Währungsunion, wenn: (1) hohe Mobilität der Arbeit, (2) hohe Flexibilität von Löhnen/Preisen, (3) fiskalische Transfers zwischen den Regionen existieren.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Glaubwürdigkeit:</strong> Eine Währungsbindung ist nur glaubwürdig, wenn die ZB über ausreichende Reserven verfügt und die Politik bereit ist, die wirtschaftlichen Kosten (hohe Zinsen) zu tragen.</div>
    </div>`,
    formeln: [
      { label:'Devisenreserven', eq: String.raw`$$\Delta R = LB + KB$$`, desc:'Veränderung der Reserven bei festem WK', variables: { 'R': 'Währungsreserven' } }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Land mit festem Kurs ($E=1$) erlebt einen massiven Kapitalabfluss. Die ZB-Chefin sagt: "Wir werden den Kurs verteidigen, solange es nötig ist." Märkte vermuten aber eine Abwertung auf $E=0{,}8$. Welches Modell wendest du an?`,
        steps: [
          { text: `Modellauswahl: Ist der Kurs wirklich fest, wenn die Erwartungen $E^e$ fallen?`, eq: String.raw`\text{Nein, wir müssen die UIP mit } E^e < E \text{ nutzen.}` },
          { text: `Folge: Um $E=1$ zu halten, muss $i$ massiv über $i^*$ steigen.`, eq: null }
        ],
        result: String.raw`Spekulative Attacke erfordert Hochzinspolitik.`
      },
      {
        text: String.raw`Unterscheide Currency Board und Peg. Welches ist glaubwürdiger?`,
        steps: [
          { text: `Currency Board: Geldbasis zu 100% durch Reserven gedeckt.`, eq: null },
          { text: `Peg: Nur ein Versprechen ohne volle Deckung.`, eq: null }
        ],
        result: String.raw`Currency Board (höhere Bindung).`
      },
      {
        text: String.raw`Nenne die drei Bedingungen für einen optimalen Währungsraum.`,
        steps: [
          { text: `Mobilität, Flexibilität, Transfers.`, eq: null }
        ],
        result: String.raw`OCA-Kriterien.`
      }
    ]
  },
  zeitinkonsistenz: {
    motivation: 'Warum versprechen Zentralbanken niedrige Inflation und liefern sie dann doch nicht? Das Problem der Zeitinkonsistenz erklärt den Anreiz zur Überraschungsinflation.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Phillips-Kurve</h3>
      <p>Die Zentralbank möchte die Arbeitslosigkeit $u$ unter ihr natürliches Niveau $u_n$ senken. Dies gelingt laut Phillips-Kurve nur durch Überraschungsinflation ($\pi > \pi^e$):</p>
      <div class="math-block">$$u = u_n - \alpha (\pi - \pi^e)$$</div>
    </div>
    <div class="section-block">
      <h3>Die Verlustfunktion</h3>
      <p>Die ZB minimiert die Kosten aus Inflation und Arbeitslosigkeit:</p>
      <div class="math-block">$$L = \frac{1}{2} \pi^2 + \frac{b}{2} (u - u^*)^2$$</div>
      <p>Mit $u^* < u_n$ (Ziel-Arbeitslosigkeit ist niedriger als natürliche).</p>
    </div>
    <div class="section-block">
      <h3>Nash-Gleichgewicht (Inflation Bias)</h3>
      <p>Im Gleichgewicht ($\pi = \pi^e$) gilt:</p>
      <div class="math-block">$$\pi^* = b \alpha (u_n - u^*)$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Rationale Erwartungen:</strong> Im Gleichgewicht wissen die Wirtschaftssubjekte, dass die ZB einen Anreiz zur Inflation hat. Sie setzen $\pi^e$ direkt hoch an. Die ZB kann sie nicht "überraschen", ohne die Glaubwürdigkeit zu verlieren.</div>
    </div>`,
    formeln: [
      { label:'Verlustfunktion', eq: String.raw`$$L = \frac{1}{2} \pi^2 + \frac{b}{2} (u - u^*)^2$$`, desc:'Kosten der Politik', variables: { 'b': 'Gewichtung der Arbeitslosigkeit' } },
      { label:'Inflation Bias', eq: String.raw`$$\pi = b \alpha (u_n - u^*)$$`, desc:'Inflation im Gleichgewicht', variables: { '\alpha': 'Phillips-Kurven-Steigung' } }
    ],
    aufgaben: [
      {
        text: String.raw`Berechne $\pi$ bei $b=0{,}5, \alpha=0{,}5, u_n=0{,}06, u^*=0{,}04$. Zeichne die Lage in einer Phillips-Kurve ein.`,
        steps: [
          { text: `Formel anwenden: $\pi = 0{,}5 \cdot 0{,}5 \cdot (0{,}06 - 0{,}04)$.`, eq: String.raw`$$\pi = 0{,}25 \cdot 0{,}02 = 0{,}005 = 0{,}5\%$$` },
          { text: `Grafik: Zeichne die vertikale langfristige Phillips-Kurve bei $u=0{,}06$.`, eq: null },
          { text: `Gleichgewicht: Der Punkt liegt auf der vertikalen Linie bei $\pi=0{,}5\%$.`, eq: null }
        ],
        result: String.raw`$\pi = 0{,}5\%$ (Inflation Bias)`
      },
      {
        text: String.raw`Warum ist "Commitment" besser?`,
        steps: [
          { text: `Theorie: Bindung verhindert den Inflation Bias.`, eq: null },
          { text: `Ergebnis: $\pi=0$ bei gleicher Arbeitslosigkeit $u_n$.`, eq: null }
        ],
        result: String.raw`Geringere Verluste.`
      },
      {
        text: String.raw`Was ist ein "konservativer Notenbanker"?`,
        steps: [
          { text: `Jemand mit kleinem $b$.`, eq: null }
        ],
        result: String.raw`Niedrigerer Bias.`
      }
    ]
  },
  solow_basis: {
    motivation: 'Das Solow-Modell erklärt langfristiges Wachstum durch Kapitalakkumulation, Bevölkerungswachstum und technischen Fortschritt.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Produktionsfunktion</h3>
      <p>In intensiver Form (pro effektivem Arbeiter) gilt:</p>
      <div class="math-block">$$y = f(k) = k^\alpha$$</div>
      <p>wobei $y = Y/(AN)$ and $k = K/(AN)$. $A$ is the labor efficiency, $N$ is the population.</p>
    </div>
    <div class="section-block">
      <h3>Der Steady State</h3>
      <p>Im Gleichgewicht gilt $\dot{k} = 0$. Die Kapitalintensität ist konstant, was bedeutet, dass der gesamte Kapitalstock $K$ mit der Rate $(g_n + g_a)$ wächst.</p>
      <div class="math-block">$$s \cdot k^\alpha = (\delta + g_n + g_a)k$$</div>
    </div>
    <div class="section-block">
      <h3>Goldene Regel</h3>
      <p>Die Sparquote der Goldenen Regel $s_{gold}$ maximiert den Konsum pro Kopf im Steady State.</p>
      <div class="math-block">$$f'(k^*) = \delta + g_n + g_a$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Wachstum im Steady State:</strong> Im Steady State wächst die Produktion <i>pro Kopf</i> ($Y/N$) mit der Rate des technischen Fortschritts $g_a$. Ohne technischen Fortschritt ($g_a=0$) stagniert das Pro-Kopf-Einkommen langfristig.</div>
    </div>`,
    formeln: [
      { label:'Steady State', eq: String.raw`$$s \cdot f(k^*) = (\delta + g_n + g_a)k^*$$`, desc:'Gleichgewichtsbedingung', variables: { 's': 'Sparquote', '\delta': 'Abschreibung', 'g_n': 'Bevolkerungswachstum' } },
      { label:'Produktion', eq: String.raw`$$Y = K^\alpha (AN)^{1-\alpha}$$`, desc:'Cobb-Douglas Produktion', variables: { '\alpha': 'Kapitalelastizität' } }
    ],
    aufgaben: [
      {
        text: String.raw`Berechne $k^*$ bei $s=0{,}11, \delta+g_n+g_a = 0{,}11, \alpha=0{,}4$. Skizziere das Solow-Diagramm.`,
        steps: [
          { text: `Formel: $0{,}11 \cdot k^{0{,}4} = 0{,}11 \cdot k \implies k^{0{,}6} = 1 \implies k^* = 1$.`, eq: null },
          { text: `Grafik: Zeichne $sf(k)$ und $(\delta+n+g)k$. Wo schneiden sie sich?`, eq: String.raw`\text{Schnittpunkt bei } k=1.` }
        ],
        result: String.raw`$k^* = 1$`
      },
      {
        text: String.raw`Prüfe, ob diese Sparquote der Goldenen Regel entspricht.`,
        steps: [
          { text: `Formel: $s_{gold} = \alpha = 0{,}4$.`, eq: null },
          { text: `Vergleich: $0{,}11 < 0{,}4$.`, eq: null },
          { text: `Schlussfolgerung: Die Wirtschaft spart zu wenig für das Konsumoptimum.`, eq: null }
        ],
        result: String.raw`Unterhalb der Goldenen Regel.`
      },
      {
        text: String.raw`Was passiert mit $y$ im Steady State, wenn $g_a$ von 0 auf 2% steigt?`,
        steps: [
          { text: `Theorie: Dauerhaftes Wachstum von $Y/N$ steigt auf 2%.`, eq: null },
          { text: `Grafik: Die Investitionsgerade $(\delta+n+g)k$ wird steiler, $k^*$ sinkt.`, eq: null }
        ],
        result: String.raw`Höheres Wachstum, niedrigeres Kapitalniveau.`
      }
    ]
  }
};
