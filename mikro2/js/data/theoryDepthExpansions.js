// platform-added-explanation for Mikro II supplementals (externa_*, thin VL blocks) — see MARKET_FAILURE_SOURCE_BOUNDARY in chapters.js

const block = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (t, b) => `<div class="warn-box"><strong>${t}:</strong> ${b}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  externa_pigou: {
    html:
      block('Klausurpfad Pigou', `
      <p><em>platform-added-explanation:</em> Markt $Q_m > Q^*$ bei negativer Externalität → Pigou-Steuer $t = MEC(Q^*)$ internalisiert.</p>
      ${math('$$MSC = MPC + MEC$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Immer Markt- vs. Sozialoptimum zeichnen; Steuerhöhe am Grenzschaden im Optimum, nicht am aktuellen Marktoutput.</p>
      ${warn('Instrument', 'Pigou-Steuer (Preis) vs. Cap-and-Trade (Menge) unter Unsicherheit unterschiedlich.')}
    `)
  },
  externa_institutionen: {
    html:
      block('Coase & Handel', `
      <p><em>platform-added-explanation:</em> Bei klaren Eigentumsrechten und niedrigen Transaktionskosten private Verhandlung effizient; bei vielen Betroffenen scheitert Coase.</p>
    `) +
      block('Emissionshandel', `
      <p>Cap setzt Menge; Lizenzpreis internalisiert Grenzkosten. Effizienz: heterogene Kosten → günstigste Vermeider kaufen weniger Lizenzen.</p>
    `)
  },
  public_goods: {
    html:
      block('Non-Rivalität & Non-Excludability', `
      <p><em>platform-added-explanation:</em> Öffentliches Gut: $MC_{extra}=0$; freiwillige Finanzierung führt zum Trittbrettfahren → Unterprovision.</p>
    `) +
      block('Lindahl & Nash', `
      <p>Lindahl-Preise individualisiert; Nash-Lösung bei freiwilliger Beitragswahl typischerweise unter dem effizienten Niveau.</p>
    `)
  },
  oligopol_stackelberg: {
    html:
      block('Stackelberg-Folger', `
      <p>Folger wählt $q_2$ gegeben $q_1$ (Reaktionsfunktion). Leader internalisiert Folgerreaktion → höhere $q_1$ als Cournot bei symmetrischen Kosten.</p>
      ${math('$$q_2 = RR_2(q_1),\\quad \\max_{q_1} \\pi_1(q_1, RR_2(q_1))$$')}
    `) +
      block('In der Klausur: Stackelberg', `
      <p>Reihenfolge: (1) RR des Folgers aus FOC. (2) Leader maximiert mit eingesetzter RR. (3) $q_1^*, q_2^*$; Leader-Menge typisch > Cournot-Menge des Leaders. First-mover advantage bei steigenden Grenzkosten des Folgers.</p>
      ${warn('Commitment', 'Stackelberg setzt voraus, dass Leader-Menge bindend ist — sonst Cournot oder Bertrand je nach Modell.')}
    `) +
      block('Numerisches Beispiel', `
      <p>Symmetrisches linearer Fall: $P=a-bQ$, $MC=c$. RR Folger $q_2=(a-c-bq_1)/(2b)$. Leader: $q_1^*=(a-c)/(2b)$ — strikt über Cournot-$q$ bei gleichen Parametern.</p>
    `)
  },
  unsicherheit_versicherung: {
    html:
      block('Erwartungsnutzen & Versicherung', `
      <p>Risikoaverse zahlen Prämie $>$ erwarteter Schaden für Aktuar-Fairness nicht zwingend — Risikoprämie. Vollversicherung bei NM-Utility und fairer Prämie.</p>
      ${math('$$EU = \\sum_s \\pi_s u(w_s),\\quad u\'\'<0 \\Rightarrow \\text{risk averse}$$')}
    `) +
      block('In der Klausur: Unsicherheit', `
      <p>State-contingent claims: Budget $p_1 x_1 + p_2 x_2 = W$. Fair odds: $p_s = \\pi_s$. Optimal: $u'(c_s)$ proportional zu $\\pi_s$ bei NM. Versicherung: Transfer zwischen Zuständen gegen Prämie.</p>
      ${warn('NM vs. andere Utility', 'Vollversicherung bei fairer Prämie nur bei NM-Utility — bei DARA typischerweise unterversichert.')}
    `) +
      block('Moral Hazard / Adverse Selection', `
      <p>Ex-ante: Hidden characteristics → Adverse Selection. Ex-post: Hidden action → Moral Hazard; Vollversicherung dann typischerweise suboptimal.</p>
    `)
  },
  preisdiskriminierung: {
    html:
      block('Arten der Preisdiskriminierung', `
      <p>1. Grad: MR = MC je Markt. 2. Grad: Versionen/Self-Selection. 3. Grad: individuelles Pricing. Voraussetzung: Marktmacht + Arbitrage verhindern.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Wohlfahrtsvergleich Monopol einfach vs. perfekte Diskriminierung: DWL-Eliminierung bei 1. Grad; Konsumentenrente-Verteilung benennen.</p>
    `)
  },
  monopol_preissetzung: {
    html:
      block('In der Klausur: Monopol', `
      <p>Standardpfad: Nachfrage $P(Q)$ → $TR=PQ$ → $MR = P + Q\\,P'(Q)$ → $MR=MC$ → $Q_m$, $P_m$. Markup: Lerner-Index $(P-MC)/P = -1/\\eta$. DWL = Dreieck zwischen $Q_m$ und $Q_c$ bei $P>MC$.</p>
      ${math('$$MR = MC \\quad\\Rightarrow\\quad P\\left(1+\\frac{1}{\\eta}\\right) = MC$$')}
    `) +
      block('Mechanismus und VL-Verknüpfung', `
      <p>Monopolist internalisiert Preiseffekt auf Gesamtabsatz — deshalb $MR < P$. Bei linearer Nachfrage ist $MR$ doppelt so steil. Wohlfahrt: PS des Monopolisten kann steigen, CS sinkt; Gesamt-DWL positiv wenn $P>MC$.</p>
      ${warn('MR vs. Nachfrage', 'MR-Kurve liegt unter Nachfrage — Schnitt mit MC bestimmt $Q_m$, Preis aus Nachfrage ablesen, nicht aus MR.')}
    `)
  },
  spieltheorie_dynamisch: {
    html:
      block('In der Klausur: Dynamische Spiele', `
      <p>Extensive Form: Entscheidungsknoten, Informationsmenge, Auszahlungen. Rückwärtsinduktion bei vollständiger Information: letzter Spieler optimal → Vorwärts auflösen. Subgame Perfect Nash (SPNE): Nash in jedem Teilspiel.</p>
    `) +
      block('Folk-Theorem und Kollusion', `
      <p>Unendlich wiederholtes Spiel: Abweichung heute vs. Bestrafung in Zukunft. Trigger-Strategien können kooperative Outcomes stützen, wenn Diskontierungsfaktor $\\delta$ hoch genug. Endliche Horizonte: Rückwärtsinduktion bricht Kollusion (Chain-Store Paradox didaktisch).</p>
      ${warn('Zeit vs. Strategieraum', 'Dynamik = Reihenfolge und Information; nicht jede Wiederholung ist automatisch „dynamisches Spiel" ohne Entscheidungsbaum.')}
    `)
  },
  oligopol_cournot_bertrand: {
    html:
      block('In der Klausur: Cournot vs. Bertrand', `
      <p>Cournot: Mengenwettbewerb, RR $q_i^*(q_j)$, Schnitt = Nash in Mengen. Homogene Güter + Bertrand: Preiswettbewerb → $P=MC$, wie Wettbewerb (Bertrand-Paradox). Differenzierung rettet $P>MC$.</p>
      ${math('$$q_i^*:\\ \\frac{\\partial \\pi_i}{\\partial q_i} = 0 \\quad\\text{(Cournot)}\\qquad P_1=P_2=MC\\ \\text{(Bertrand, homogen)}$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Immer Wettbewerbsvariable nennen (Menge vs. Preis). Bei Cournot: RR zeichnen, symmetrisches Duopol $q_1^*=q_2^*$. Bei Bertrand: Kapazitätsbindung oder Produktdifferenzierung als Realismus-Check erwähnen.</p>
      ${warn('Paradox nicht vergessen', 'Bertrand mit homogenem Gut und $MC$ konstant → Preis = MC; Cournot bei gleichen Kosten → $P>MC$. Modellwahl entscheidet Marktergebnis.')}
    `)
  },
  intertemporaler_konsum: {
    html:
      block('In der Klausur: Intertemporale Wahl', `
      <p>Zwei-Perioden-Budget: $c_1 + c_2/(1+r) = y_1 + y_2/(1+r)$. Euler-Gleichung bei CRRA/Log: $u'(c_1) = (1+r)\\beta u'(c_2)$. Zinssenkung: Substitution (mehr heute) vs. Einkommens-Effekt (mehr beide Perioden bei Sparer).</p>
      ${math('$$c_1 + \\frac{c_2}{1+r} = y_1 + \\frac{y_2}{1+r}$$')}
    `) +
      block('Mechanismus', `
      <p>Präferenz über $(c_1,c_2)$; $r$ ist Opportunitätskosten des heutigen Konsums. Bei $\\beta<1$ und $r=0$ tendiert Konsum zur Glättung. Liquidity constraint: $c_1$ kann $y_1$ nicht überschreiten — Euler bindet nicht.</p>
      ${warn('Realzins', 'In Klausuren $r$ als realer Zins interpretieren, wenn Inflation nicht modelliert wird.')}
    `)
  },
  gleichgewicht_produktion: {
    html:
      block('In der Klausur: GE Produktion', `
      <p>Edgeworth-Box Produktion: $F^1 + F^2 = \\bar F$. Pareto-Effizienz: $MRTS^1 = MRTS^2$. Mit Preisen: $w/r = MRTS$ in jedem Sektor; Walras-Gleichgewicht = Preise + Allokation, die Märkte räumen.</p>
    `) +
      block('Wohlfahrtssätze', `
      <p>1. HS: Jede WE ist Pareto-effizient (bei vollständigen Märkten). 2. HS: Jede Pareto-effiziente Allokation ist WE bei passender Anfangsausstattung. Klausur: Diagramm + Intuition, nicht nur Sätze zitieren.</p>
      ${warn('Annahmen', 'WE-Existenz braucht Konvexität, vollständige Märkte — bei Externalitäten scheitert 1. HS.')}
    `)
  },
  wohlfahrt_messung: {
    html:
      block('In der Klausur: Wohlfahrtsmessung', `
      <p>Kompensierende/äquivalente Variation vs. CS-Änderung bei Nachfrageverschiebung. Harberger-Dreieck für DWL bei $P\\neq MC$. Aggregationsproblem: utilitaristisch vs. Rawls vs. Pareto-Kriterium.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Policy-Bewertung: Gewinner/Verlierer benennen; Kompensation hypothetisch (Kaldor-Hicks). Steuer-DWL: $\\frac{1}{2}|\\eta|\\,t^2\\,P_0 Q_0$ Näherung bei kleinem $t$.</p>
      ${warn('CS vs. CV/EV', 'Konsumentenrente ist Näherung bei kleinen Preisänderungen — bei großen Schocks CV/EV präziser.')}
    `)
  },
  information_adverse: {
    html:
      block('In der Klausur: Adverse Selection', `
      <p>Hidden characteristics vor Vertrag: Akerlof-Markt für Zitronen — Durchschnittspreis → gute Anbieter scheiden aus → Death Spiral. Signaling (Spence): Bildung als Signal bei $c_s \\neq c_t$. Screening (Rothschild-Stiglitz): Vertragspartner bietet Menü.</p>
    `) +
      block('Mechanismus', `
      <p>Separating vs. pooling Equilibrium: Typen trennen sich durch Wahl oder nicht. Ineffizienz: zu wenig Handel oder Überinvestition in Signal. Prüfungsfrage: Wer bewegt sich entlang welcher Kurve (Indifferenz vs. Zero-Profit)?</p>
      ${warn('Ex-ante vs. ex-post', 'Adverse Selection = vor Vertrag (Typ unbekannt). Moral Hazard = nach Vertrag (Aktion unbeobachtbar) — nicht verwechseln.')}
    `) +
      block('Numerisches Beispiel', `
      <p>Markt mit zwei Qualitäten: WTP hoch $=100$, niedrig $=60$; Angebot kostet $40$ bzw. $70$. Bei Durchschnittspreis $80$ bleiben nur niedrige Qualität — Markt bricht teilweise zusammen.</p>
    `)
  },
  information_moralhazard: {
    html:
      block('In der Klausur: Moral Hazard', `
      <p>Hidden action: Agent wählt Aufwand $a$ nach Vertrag. Erwartungsprinzipal maximiert $E[\\pi|a]$ minus Risikoaufschlag. Ergebnis: Teilversicherung optimal bei risikoaversem Agent — Vollversicherung zerstört Anreize.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Trade-off Versicherung vs. Anreize zeichnen. Monitoring/Performance Pay als institutionelle Antwort. Bei Banken: Bailout erzeugt Ex-post-Moral Hazard (Risikoübernahme).</p>
      ${warn('Partizipation vs. Anreiz', 'Beide Nebenbedingungen (IR + IC) prüfen — nur IC reicht nicht für Gleichgewicht.')}
    `)
  }
};
