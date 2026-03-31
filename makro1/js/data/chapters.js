// ============================================================
// CHAPTERS & CONTENT DATA — Makroökonomik I
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'vgr', title: 'VGR: BIP, Inflation & Arbeitslosigkeit', cat: 'Einführung', short: 'VGR' },
  { id: 'guetermarkt', title: 'Der Gütermarkt', cat: 'Kurze Frist', short: 'Güter' },
  { id: 'finanzmarkt', title: 'Finanzmärkte', cat: 'Kurze Frist', short: 'Finanz' },
  { id: 'islm', title: 'Das IS-LM-Modell', cat: 'Kurze Frist', short: 'IS-LM' },
  { id: 'arbeitsmarkt', title: 'Der Arbeitsmarkt', cat: 'Mittlere Frist', short: 'Arbeit' },
  { id: 'islmpc', title: 'Das IS-LM-PC-Modell', cat: 'Mittlere Frist', short: 'IS-LM-PC' },
  { id: 'phillips', title: 'Die Phillips-Kurve', cat: 'Mittlere Frist', short: 'Phillips' },
  { id: 'erwartungen', title: 'Erwartungen & Politik', cat: 'Erweiterungen', short: 'Erwart.' },
];

export const CONTENT = {
  vgr: {
    motivation: 'Bevor wir Modelle bauen, müssen wir messen können. Die VGR liefert die Kennzahlen für den Zustand einer Volkswirtschaft.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Das BIP</h3>
      <p>Das Bruttoinlandsprodukt (BIP) kann auf drei Arten definiert werden:</p>
      <ul>
        <li><strong>Entstehungsseite:</strong> Wert aller Endprodukte abzüglich Vorleistungen.</li>
        <li><strong>Verwendungsseite:</strong> Summe aller Ausgaben ($C + I + G + NX$).</li>
        <li><strong>Verteilungsseite:</strong> Summe aller Einkommen.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Nominales vs. Reales BIP</h3>
      <p>Das nominale BIP bewertet Mengen zu aktuellen Preisen. Das reale BIP nutzt konstante Preise eines Basisjahres, um reines Mengenwachstum zu messen.</p>
      <div class="math-block">$$BIP_{real} = \frac{BIP_{nom}}{P}$$</div>
    </div>
    <div class="section-block">
      <h3>Inflation & Arbeitslosigkeit</h3>
      <p>Der <strong>BIP-Deflator</strong> ist das Verhältnis von nominalem zu realem BIP. Die <strong>Arbeitslosenquote</strong> $u$ ist der Anteil der Arbeitslosen an den Erwerbspersonen ($L$): $u = U/L$.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Bestands- vs. Stromgrößen:</strong> Das BIP ist eine Stromgröße (Wert pro Zeitraum). Das Vermögen ist eine Bestandsgröße (Wert zu einem Zeitpunkt).</div>
    </div>
    `,
    formeln: [
      { label: 'BIP-Identität', eq: String.raw`$$Y = C + I + G + NX$$`, desc: 'Verwendungsseite' },
      { label: 'Inflationsrate', eq: String.raw`$$\pi_t = \frac{P_t - P_{t-1}}{P_{t-1}}$$`, desc: 'Veränderung des Preisniveaus' }
    ],
    aufgaben: [
      {
        text: String.raw`In einem Jahr steigt das nominale BIP um $5\%$, während das Preisniveau um $3\%$ steigt. Wie stark ist das reale BIP gewachsen?`,
        steps: [
          { text: `Interpretation: Was ist die Beziehung zwischen nominalem, realem BIP und Inflation?`, eq: String.raw`\% \Delta Y_{nom} \approx \% \Delta Y_{real} + \pi` },
          { text: `Decision: Stellen Sie die Gleichung nach dem realen Wachstum um.`, eq: String.raw`\% \Delta Y_{real} \approx 5\% - 3\%` }
        ],
        result: String.raw`$2\%$ reales Wachstum.`
      }
    ]
  },
  guetermarkt: {
    motivation: 'In der kurzen Frist wird die Produktion durch die Nachfrage bestimmt. Wir untersuchen, wie Konsum und Investitionen das Gleichgewicht formen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Konsumfunktion</h3>
      <p>Der Konsum hängt vom verfügbaren Einkommen ($Y_D = Y - T$) ab:</p>
      <div class="math-block">$$C = c_0 + c_1(Y - T)$$</div>
      <p>Dabei ist $c_0$ der autonome Konsum und $c_1$ die marginale Konsumquote ($0 < c_1 < 1$).</p>
    </div>
    <div class="section-block">
      <h3>Gleichgewicht im Gütermarkt</h3>
      <p>Im Gleichgewicht entspricht die Produktion $Y$ der Nachfrage $Z$:</p>
      <div class="math-block">$$Y = \frac{1}{1-c_1} [c_0 + I + G - c_1 T]$$</div>
      <p>Der Term $1/(1-c_1)$ ist der <strong>Multiplikator</strong>. Da $c_1 < 1$, ist der Multiplikator $> 1$.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Endogenität:</strong> Im Gütermarktmodell ist $Y$ sowohl die Produktion als auch das Einkommen, das die Nachfrage bestimmt. Dies erzeugt die Multiplikatorschleife.</div>
    </div>
    `,
    formeln: [
      { label: 'Güternachfrage', eq: String.raw`$$Z = C + I + G$$`, desc: 'Geschlossene VW' },
      { label: 'Multiplikator', eq: String.raw`$$\frac{1}{1-c_1}$$`, desc: 'Effekt einer autonomen Ausgabenänderung' }
    ],
    aufgaben: [
      {
        text: String.raw`Die marginale Konsumquote sei $c_1 = 0{,}8$. Die Regierung erhöht die Staatsausgaben um $\Delta G = 100$. Berechnen Sie den Gesamteffekt auf die Produktion.`,
        steps: [
          { text: `Interpretation: Wie hoch ist der Multiplikator?`, eq: String.raw`\frac{1}{1-0{,}8} = 5` },
          { text: `Execution: Multiplizieren Sie den Impuls mit dem Multiplikator.`, eq: String.raw`5 \cdot 100 = 500` }
        ],
        result: String.raw`$\Delta Y = 500$.`
      }
    ]
  },
  finanzmarkt: {
    motivation: 'Geld ist kein Gut wie jedes andere. Sein Preis ist der Zins. Wir analysieren, wie die Zentralbank und das Verhalten der Haushalte den Zins beeinflussen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Geldnachfrage</h3>
      <p>Die Nachfrage nach Geld ($M^d$) steigt mit dem Nominaleinkommen ($PY$) und sinkt mit dem Zinssatz ($i$):</p>
      <div class="math-block">$$M^d = PY \cdot L(i)$$</div>
    </div>
    <div class="section-block">
      <h3>Zinsbestimmung</h3>
      <p>Im Gleichgewicht entspricht das Geldangebot $M$ der Geldnachfrage $M^d$. Die Zentralbank steuert $M$ über Offenmarktgeschäfte.</p>
    </div>
    <div class="section-block">
      <h3>Liquiditätsfalle</h3>
      <p>Sinkt der Zins auf Null, wollen die Leute nur noch Geld halten (horizontale Geldnachfrage). Die Geldpolitik verliert ihre Wirkung auf den Zins.</p>
    </div>
    `,
    formeln: [
      { label: 'Geldmarkt-GG', eq: String.raw`$$M = PY \cdot L(i)$$`, desc: 'Bestimmung von i' }
    ],
    aufgaben: [
      {
        text: String.raw`Die Zentralbank kauft Wertpapiere im Wert von 1 Mrd. € (expansive Offenmarktpolitik). Was passiert mit der Geldmenge und dem Zinssatz?`,
        steps: [
          { text: `Decision: Erhöht oder senkt ein Wertpapierkauf die Geldmenge?`, eq: String.raw`\text{Erhöht (Zentralbank zahlt Geld an die Banken).}` },
          { text: `Interpretation: Wie reagiert der Zins auf ein höheres Geldangebot?`, eq: String.raw`\text{Er sinkt (um die höhere Geldmenge im Gleichgewicht zu halten).}` }
        ],
        result: String.raw`$M \uparrow, i \downarrow$.`
      }
    ]
  },
  islm: {
    motivation: 'Das IS-LM-Modell führt Güter- und Finanzmärkte zusammen. Es zeigt, wie Fiskal- und Geldpolitik gemeinsam Produktion und Zins bestimmen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die IS-Kurve</h3>
      <p>Beschreibt das Gleichgewicht auf dem Gütermarkt. Ein höherer Zins senkt Investitionen und damit die Produktion. Die IS-Kurve verläuft fallend.</p>
      <div class="math-block">$$Y = C(Y-T) + I(Y, i) + G$$</div>
    </div>
    <div class="section-block">
      <h3>Die LM-Kurve</h3>
      <p>Beschreibt das Gleichgewicht auf dem Finanzmarkt. Die Zentralbank setzt heute meist direkt den Zins ($i = \bar{i}$). Dann verläuft die LM-Kurve horizontal.</p>
    </div>
    <div class="section-block">
      <h3>Politik-Mix</h3>
      <p>Fiskalexpansion ($G \uparrow$) verschiebt IS nach rechts. Geldpolitische Straffung ($i \uparrow$) verschiebt LM nach oben.</p>
    </div>
    `,
    formeln: [
      { label: 'IS-Gleichung', eq: String.raw`$$Y = C + I + G$$`, desc: 'Gütermarkt' },
      { label: 'LM-Zinsregel', eq: String.raw`$$i = \bar{i}$$`, desc: 'Zinssteuerung' }
    ],
    aufgaben: [
      {
        text: String.raw`Die Regierung senkt die Steuern ($T \downarrow$) und die Zentralbank hält den Zins konstant. Analysieren Sie die Wirkung auf $Y$ und $i$.`,
        steps: [
          { text: `Decision: Welche Kurve verschiebt sich?`, eq: String.raw`\text{IS-Kurve nach rechts (Konsum steigt).}` },
          { text: `Interpretation: Was passiert mit dem Schnittpunkt?`, eq: String.raw`\text{Y steigt, i bleibt unverändert (da LM horizontal).}` }
        ],
        result: String.raw`$Y \uparrow, i$ konstant.`
      }
    ]
  },
  arbeitsmarkt: {
    motivation: 'In der mittleren Frist passen sich Preise und Löhne an. Wir untersuchen die Verhandlungsmacht von Arbeitnehmern und die Preissetzung von Firmen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Lohnsetzung (WS)</h3>
      <p>Löhne hängen vom erwarteten Preisniveau ($P^e$), der Arbeitslosenquote ($u$) und Sammelvariablen ($z$) ab:</p>
      <div class="math-block">$$W = P^e \cdot F(u, z)$$</div>
    </div>
    <div class="section-block">
      <h3>Preissetzung (PS)</h3>
      <p>Firmen setzen Preise als Aufschlag ($\mu$) auf die Grenzkosten (Lohn $W$):</p>
      <div class="math-block">$$P = (1 + \mu) W$$</div>
    </div>
    <div class="section-block">
      <h3>Natürliche Arbeitslosigkeit</h3>
      <p>Das Gleichgewicht auf dem Arbeitsmarkt ($W/P_{WS} = W/P_{PS}$) bestimmt die natürliche Arbeitslosenquote $u_n$.</p>
    </div>
    `,
    formeln: [
      { label: 'WS-Kurve', eq: String.raw`$$W/P = F(u, z)$$`, desc: 'Reallohnforderung' },
      { label: 'PS-Kurve', eq: String.raw`$$W/P = \frac{1}{1+\mu}$$`, desc: 'Reallohnangebot der Firmen' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Anstieg des Marktmacht-Aufschlags $\mu$ der Firmen findet statt. Wie ändert sich die natürliche Arbeitslosigkeit $u_n$?`,
        steps: [
          { text: `Interpretation: Wie reagiert der Reallohn der PS-Kurve auf $\mu \uparrow$?`, eq: String.raw`W/P = 1/(1+\mu) \downarrow` },
          { text: `Decision: Wo schneidet die WS-Kurve nun das neue PS-Niveau?`, eq: String.raw`\text{Bei höherem u (da F(u,z) fallend in u).}` }
        ],
        result: String.raw`$u_n$ steigt.`
      }
    ]
  },
  phillips: {
    motivation: 'Die Phillips-Kurve zeigt den Zusammenhang zwischen Inflation und Arbeitslosigkeit. Sie ist das Bindeglied zwischen Arbeitsmarkt und IS-LM.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Relation</h3>
      <p>Inflation $\pi$ ist hoch, wenn die erwartete Inflation $\pi^e$ hoch ist, der Preisaufschlag $\mu$ hoch ist oder die Arbeitslosigkeit $u$ niedrig ist.</p>
      <div class="math-block">$$\pi_t = \pi_t^e + (\mu + z) - \alpha u_t$$</div>
    </div>
    <div class="section-block">
      <h3>NAIRU</h3>
      <p>Die <strong>Non-Accelerating Inflation Rate of Unemployment</strong> ($u_n$) ist die Quote, bei der die Inflation stabil bleibt ($\pi_t = \pi_{t-1}$).</p>
      <div class="math-block">$$\pi_t - \pi_{t-1} = -\alpha(u_t - u_n)$$</div>
    </div>
    `,
    formeln: [
      { label: 'Phillips-Kurve', eq: String.raw`$$\pi_t - \pi_t^e = -\alpha(u_t - u_n)$$`, desc: 'Inflationsdynamik' }
    ],
    aufgaben: [
      {
        text: String.raw`Gilt $u_t < u_n$, wie entwickelt sich die Inflation im Vergleich zum Vorjahr?`,
        steps: [
          { text: `Interpretation: Welches Vorzeichen hat der Term $(u_t - u_n)$?`, eq: String.raw`\text{Negativ (-).}` },
          { text: `Execution: Einsetzen in die Formel $-\alpha \cdot (-)$.`, eq: String.raw`\text{Positiv (+).}` }
        ],
        result: String.raw`$\pi_t > \pi_{t-1}$ (Inflation steigt).`
      }
    ]
  },
  islmpc: {
    motivation: 'Das IS-LM-PC-Modell verbindet die kurze Frist (IS-LM) mit der mittleren Frist (Phillips-Kurve). Es zeigt, wie die Wirtschaft nach einem Schock zum natürlichen Gleichgewicht zurückkehrt.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Vom IS-LM zum IS-LM-PC</h3>
      <p>In der kurzen Frist bestimmen IS- und LM-Kurve Produktion und Zinssatz. Die Phillips-Kurve (PC) ergänzt die Inflationsdynamik:</p>
      <div class="math-block">$$\pi_t - \pi_{t-1} = -\alpha(u_t - u_n)$$</div>
      <p>Die Zentralbank reagiert auf Inflation mit dem Realzins. Im IS-LM-PC-Modell wird die LM-Kurve durch eine <strong>Zinsregel</strong> (Monetary Policy Rule) ersetzt:</p>
      <div class="math-block">$$r_t = \bar{r} + \bar{\lambda}\,(\pi_t - \bar{\pi})$$</div>
      <p>Steigt die Inflation über das Ziel $\bar{\pi}$, erhöht die Zentralbank den Realzins $r_t$.</p>
    </div>
    <div class="section-block">
      <h3>IS-Kurve und Okuns Gesetz</h3>
      <p>Die IS-Kurve liefert die Produktion $Y_t$ in Abhängigkeit vom Realzins. Okuns Gesetz verbindet Produktion und Arbeitslosigkeit:</p>
      <div class="math-block">$$u_t - u_n = -\beta\,(Y_t - Y_n)/Y_n$$</div>
      <p>Wenn $Y_t > Y_n$, liegt die Arbeitslosigkeit unter $u_n$ und die Inflation steigt.</p>
    </div>
    <div class="section-block">
      <h3>Anpassungsdynamik</h3>
      <p>Nach einem expansiven Schock ($\bar{G} \uparrow$): Kurzfristig steigt $Y$ über $Y_n$. Die Inflation steigt. Die Zentralbank reagiert mit höherem Realzins. Die Produktion sinkt Schritt für Schritt zurück auf $Y_n$, bis die Inflation wieder beim Ziel liegt.</p>
      <p>Dieser Anpassungsprozess kann <strong>mehrere Perioden</strong> dauern. Die Geschwindigkeit hängt von $\alpha$ (Phillips-Sensitivität) und $\bar{\lambda}$ (Zentralbank-Aggressivität) ab.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Kurze vs. mittlere Frist:</strong> Im IS-LM (kurze Frist) ist das Preisniveau fix. Im IS-LM-PC (mittlere Frist) passt sich die Inflation endogen an. Der Übergang ist der Kern des Modells.</div>
      <div class="warn-box"><strong>Zinsregel vs. LM:</strong> Die LM-Kurve setzt eine fixe Geldmenge voraus. Die Zinsregel setzt ein Inflationsziel voraus. Beide sind nicht gleichzeitig gültig.</div>
    </div>
    `,
    formeln: [
      { label: 'Zinsregel (MP)', eq: String.raw`$$r_t = \bar{r} + \bar{\lambda}\,(\pi_t - \bar{\pi})$$`, desc: 'Monetary Policy Rule', variables: { 'r_t': 'Realzins', '\\bar{r}': 'Natürlicher Realzins', '\\bar{\\lambda}': 'Reaktionskoeffizient', '\\bar{\\pi}': 'Inflationsziel' } },
      { label: 'Okuns Gesetz', eq: String.raw`$$u_t - u_n = -\beta\,\frac{Y_t - Y_n}{Y_n}$$`, desc: 'Produktionslücke → Arbeitslosigkeit' }
    ],
    aufgaben: [
      {
        text: String.raw`Die Regierung erhöht die Staatsausgaben dauerhaft. Beschreiben Sie die Anpassungsdynamik im IS-LM-PC-Modell für die kurze und mittlere Frist.`,
        steps: [
          { text: `Kurze Frist: IS verschiebt sich nach rechts.`, eq: String.raw`Y_1 > Y_n, \; u_1 < u_n` },
          { text: `Phillips-Kurve: Inflation steigt.`, eq: String.raw`\pi_1 > \pi_0` },
          { text: `Zinsregel: Zentralbank erhöht Realzins.`, eq: String.raw`r_1 = \bar{r} + \bar{\lambda}(\pi_1 - \bar{\pi}) > r_0` },
          { text: `Mittlere Frist: Höherer Zins senkt Investitionen, Y kehrt zurück auf $Y_n$.`, eq: String.raw`Y \to Y_n, \; \pi \to \bar{\pi} + \text{höheres Niveau}` }
        ],
        result: String.raw`Kurzfristig Boom; mittelfristig kehrt $Y$ zu $Y_n$ zurück, aber bei höherem Zinsniveau (Crowding-Out der Investitionen).`
      }
    ]
  },
  erwartungen: {
    motivation: 'Erwartungen über die Zukunft beeinflussen heutige Entscheidungen. Die Geld- und Fiskalpolitik wirkt unterschiedlich, je nachdem ob sie antizipiert wird oder nicht.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Erwartungen in Konsum und Investition</h3>
      <p>Der Konsum hängt nicht nur vom heutigen Einkommen ab, sondern vom <strong>erwarteten Lebenseinkommen</strong> (Permanente-Einkommens-Hypothese). Investitionen hängen vom erwarteten Barwert zukünftiger Gewinne ab:</p>
      <div class="math-block">$$V(\pi^e_t) = \sum_{k=0}^{\infty} \frac{\pi^e_{t+k}}{(1+r)^k}$$</div>
      <p>Steigen die erwarteten Gewinne, steigen die Investitionen heute.</p>
    </div>
    <div class="section-block">
      <h3>Erwartungen und IS-Kurve</h3>
      <p>Die IS-Kurve wird erwartungsabhängig. Eine Steuersenkung, die als <strong>temporär</strong> wahrgenommen wird, verschiebt die IS-Kurve kaum (Konsumenten passen ihr Lebenseinkommen kaum an). Eine <strong>permanente</strong> Senkung verschiebt sie stark.</p>
    </div>
    <div class="section-block">
      <h3>Geldpolitik und Erwartungen</h3>
      <p>Wenn die Zentralbank eine Zinssenkung ankündigt und diese glaubwürdig ist, sinken die langfristigen Zinsen sofort (bevor die kurzfristigen sich bewegen). Der <strong>Erwartungskanal</strong> wirkt schneller als der direkte Zinskanal.</p>
      <div class="math-block">$$i_{lang} \approx \frac{1}{n}\sum_{k=0}^{n-1} i^e_{t+k}$$</div>
    </div>
    <div class="section-block">
      <h3>Glaubwürdigkeit und Zeitinkonsistenz</h3>
      <p>Politik wirkt nur, wenn die Agenten die Ankündigungen glauben. Eine Zentralbank, die ein Inflationsziel von $2\%$ ankündigt, muss glaubwürdig sein — sonst bleiben die Inflationserwartungen hoch und die Phillips-Kurve verschiebt sich nicht.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Temporär vs. permanent:</strong> Verwechseln Sie niemals die Wirkung temporärer und permanenter Politikmaßnahmen. Temporäre Maßnahmen wirken schwächer, weil sie das erwartete Lebenseinkommen kaum ändern.</div>
    </div>
    `,
    formeln: [
      { label: 'Barwert erwarteter Gewinne', eq: String.raw`$$V = \sum_{k=0}^{\infty} \frac{\pi^e_{t+k}}{(1+r)^k}$$`, desc: 'Investitionsentscheidung' },
      { label: 'Langfristiger Zinssatz', eq: String.raw`$$i_{lang} \approx \frac{1}{n}\sum_{k=0}^{n-1} i^e_{t+k}$$`, desc: 'Erwartungshypothese der Zinsstruktur' }
    ],
    aufgaben: [
      {
        text: String.raw`Die Regierung kündigt eine Einkommensteuersenkung für genau ein Jahr an. Wie reagieren Konsum und die IS-Kurve im Vergleich zu einer permanenten Senkung?`,
        steps: [
          { text: `Interpretation: Was bestimmt den Konsum langfristig?`, eq: String.raw`\text{Das erwartete Lebenseinkommen (Permanente-Einkommens-Hypothese).}` },
          { text: `Temporäre Senkung: Wirkung auf Lebenseinkommen?`, eq: String.raw`\text{Sehr gering (1 Jahr von vielen).}` },
          { text: `Permanente Senkung: Wirkung auf Lebenseinkommen?`, eq: String.raw`\text{Deutlich (alle zukünftigen Perioden betroffen).}` }
        ],
        result: String.raw`Temporäre Senkung verschiebt IS kaum; permanente Senkung verschiebt IS deutlich nach rechts.`
      }
    ]
  }
};
