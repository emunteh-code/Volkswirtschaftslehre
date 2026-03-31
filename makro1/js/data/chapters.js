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
  }
};
