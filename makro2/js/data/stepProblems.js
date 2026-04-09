// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v12.1: Adversarial Hardening
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'Wechselkurs-Anpassung (Validation)',
      context: 'Inflation pi = 5%, pi* = 2%. Nominalkurs E sinkt um 1%.',
      steps: [
        { 
          q: '[1. Decision] Liegt nominal eine Auf- oder Abwertung vor? (Symbol erlaubt)', 
          answer: ['abwertung', '↓'], 
          options: { problemId: 'm2_wk_strict', stepId: 'nom_dir', isDecision: true, targetVar: 'VAR_E' },
          hint: 'E sinkt in Mengennotierung.', 
          explain: 'E ↓ ⟹ Abwertung.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die Änderung des realen Wechselkurses epsilon.', 
          answer: ['2', '2%', '0.02'], 
          options: { problemId: 'm2_wk_strict', stepId: 'real_calc', dependsOn: 'nom_dir' },
          hint: '%delta epsilon ≈ %delta E + pi - pi*.', 
          explain: '-1% + 5% - 2% = +2%.' 
        },
        { 
          q: '[3. Validation] Entspricht ein Anstieg von epsilon einer Verbesserung der Wettbewerbsfähigkeit?', 
          answer: ['nein', 'no', 'verschlechterung'], 
          options: { problemId: 'm2_wk_strict', role: 'VALIDATION' },
          hint: 'epsilon ↑ ⟹ Inlandsgüter werden relativ teurer.', 
          explain: 'Wettbewerbsfähigkeit sinkt.' 
        }
      ]
    }
    ,
    {
      title: 'Mengennotierung-Vorzeichenfalle',
      context: 'E steigt, Preisniveaus bleiben kurzfristig konstant.',
      steps: [
        {
          q: '[1. Decision] Bedeutet E↑ in Mengennotierung Auf- oder Abwertung?',
          answer: ['aufwertung', 'wertet auf'],
          options: { problemId: 'm2_wk_sign_trap', stepId: 'dir', isDecision: true },
          hint: 'E gibt Fremdwährung pro Inlandswährung an.',
          explain: 'E↑ heißt nominale Aufwertung des Inlands.'
        },
        {
          q: '[2. Execution] Bei konstantem P und P*: steigt oder fällt epsilon?',
          answer: ['steigt', 'höher', 'plus'],
          options: { problemId: 'm2_wk_sign_trap', stepId: 'eps_dir', dependsOn: 'dir' },
          hint: 'epsilon = E*P/P*.',
          explain: 'Wenn nur E steigt, steigt epsilon ebenfalls.'
        },
        {
          q: '[3. Validation] Verbessert sich dadurch die preisliche Wettbewerbsfähigkeit?',
          answer: ['nein', 'verschlechtert', 'sinkt'],
          options: { problemId: 'm2_wk_sign_trap', role: 'VALIDATION' },
          hint: 'Reale Aufwertung macht Inland relativ teurer.',
          explain: 'Nein, die Wettbewerbsfähigkeit verschlechtert sich.'
        }
      ]
    }
  ],
  kaufkraftparitaet: [
    {
      title: 'Relative PPP sauber lesen',
      context: 'Inflation Inland 6%, Ausland 2%. Gesucht ist die nominale Kursbewegung in Mengennotierung.',
      steps: [
        {
          q: '[1. Decision] Welche Beziehung ist die richtige erste Formel?',
          answer: ['relative ppp', 'ppp', 'inflationsdifferenz'],
          options: { problemId: 'm2_ppp_strict', stepId: 'ppp_formula', isDecision: true },
          hint: 'Es geht um Änderungsraten, nicht um Niveaus.',
          explain: 'Bei Inflationsdifferenzen startet man mit der relativen PPP.'
        },
        {
          q: '[2. Execution] Berechne die approximative Wechselkursänderung.',
          answer: ['-4', '-4%', '-0.04'],
          options: { problemId: 'm2_ppp_strict', stepId: 'ppp_change', dependsOn: 'ppp_formula' },
          hint: 'Nutze pi* - pi.',
          explain: '2% - 6% = -4%.'
        },
        {
          q: '[3. Validation] Bedeutet das in Mengennotierung Auf- oder Abwertung?',
          answer: ['abwertung', 'abwertet', 'sinkt'],
          options: { problemId: 'm2_ppp_strict', role: 'VALIDATION' },
          hint: 'Ein negatives Vorzeichen drückt E nach unten.',
          explain: 'E sinkt; das Inland wertet nominal ab.'
        }
      ]
    }
  ],
  offene_is: [
    {
      title: 'Offener Multiplikator',
      context: 'c1 = 0.6, b1 = 0.1, q1 = 0.2, Delta G = 50.',
      steps: [
        {
          q: '[1. Decision] Welche Größe macht den offenen Multiplikator kleiner als den geschlossenen?',
          answer: ['importquote', 'q1', 'importe'],
          options: { problemId: 'm2_is_open', stepId: 'leak_id', isDecision: true },
          hint: 'Suche das Nachfrageleck.',
          explain: 'Die marginale Importquote q1 dämpft den Multiplikator.'
        },
        {
          q: '[2. Execution] Berechne den Multiplikator.',
          answer: ['3.33', '3,33', '10/3'],
          options: { problemId: 'm2_is_open', stepId: 'mult_calc', dependsOn: 'leak_id' },
          hint: '1 / (1 - c1 - b1 + q1)',
          explain: '1 / (1 - 0.6 - 0.1 + 0.2) = 1 / 0.3 = 3.33.'
        },
        {
          q: '[3. Validation] Wie groß ist Delta Y?',
          answer: ['166.7', '166,7', '500/3'],
          options: { problemId: 'm2_is_open', role: 'VALIDATION' },
          hint: 'Multipliziere mit Delta G.',
          explain: '3.33 mal 50 ergibt etwa 166.7.'
        }
      ]
    }
  ],
  mundell_fleming: [
    {
      title: 'Fiskalpolitik bei flexiblem WK',
      context: 'Kleine offene VW, perfekter Kapitalverkehr, flexibler Wechselkurs.',
      steps: [
        {
          q: '[1. Decision] Welches Instrument ist bei flexiblem WK im Mundell-Fleming-Modell typischerweise wirksamer?',
          answer: ['geldpolitik', 'monetary'],
          options: { problemId: 'm2_mf_flex', stepId: 'tool_choice', isDecision: true },
          hint: 'Denke an den Wechselkurskanal.',
          explain: 'Geldpolitik wirkt über Zins, Wechselkurs und Nettoexporte besonders stark.'
        },
        {
          q: '[2. Execution] Was passiert mit dem Wechselkurs nach expansiver Fiskalpolitik?',
          answer: ['aufwertung', 'wertet auf'],
          options: { problemId: 'm2_mf_flex', stepId: 'e_dir', dependsOn: 'tool_choice' },
          hint: 'IS nach rechts, Kapitalzufluss, ...',
          explain: 'Die Währung wertet auf.'
        },
        {
          q: '[3. Validation] Wirkt diese Aufwertung auf NX positiv oder negativ?',
          answer: ['negativ', 'nx sinken', 'verschlechtert'],
          options: { problemId: 'm2_mf_flex', role: 'VALIDATION' },
          hint: 'Aufwertung verteuert das Inland relativ.',
          explain: 'NX sinken; ein Teil des Fiskalimpulses wird neutralisiert.'
        }
      ]
    }
    ,
    {
      title: 'Regimevergleich Fiskalimpuls',
      context: 'Gleiches Delta G unter flexiblem vs. festem Wechselkurs, hohe Kapitalmobilität.',
      steps: [
        {
          q: '[1. Decision] Unter welchem Regime wirkt Fiskalpolitik typischerweise stärker auf Y?',
          answer: ['fester wechselkurs', 'fixer wechselkurs', 'fixkurs'],
          options: { problemId: 'm2_mf_regime', stepId: 'regime', isDecision: true },
          hint: 'Frage nach Aufwertungsneutralisierung.',
          explain: 'Unter fixem Kurs fällt die aufwertungsbedingte Gegenwirkung geringer aus.'
        },
        {
          q: '[2. Execution] Welcher Kanal dämpft Fiskalpolitik bei flexiblem Kurs?',
          answer: ['aufwertung', 'nx sinken', 'wechselkurskanal'],
          options: { problemId: 'm2_mf_regime', stepId: 'channel', dependsOn: 'regime' },
          hint: 'IS-Shift erzeugt Kapitalzuflussdruck.',
          explain: 'Aufwertung reduziert NX und neutralisiert Teile des Impulses.'
        },
        {
          q: '[3. Validation] Ist "Fiskalpolitik wirkt im Modell immer gleich stark" korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_mf_regime', role: 'VALIDATION' },
          hint: 'Regime ist die Hauptweiche.',
          explain: 'Nein, die Wirkung hängt im Mundell-Fleming-Modell stark vom Regime ab.'
        }
      ]
    }
    ,
    {
      title: 'Mundell-Fleming Schockpfad',
      context: 'Expansive Fiskalpolitik bei flexiblem WK und hoher Kapitalmobilität.',
      steps: [
        {
          q: '[1. Decision] Was ist der erste Diagrammschritt?',
          answer: ['is nach rechts', 'is verschiebt sich nach rechts'],
          options: { problemId: 'm2_graph_mf_path', stepId: 'first', isDecision: true },
          hint: 'Beginne im Gütermarkt.',
          explain: 'Der Fiskalimpuls setzt als IS-Rechtsverschiebung an.'
        },
        {
          q: '[2. Execution] Welcher Gegenkanal folgt im flexiblen Regime typischerweise?',
          answer: ['aufwertung', 'wechselkurs steigt', 'nx sinken'],
          options: { problemId: 'm2_graph_mf_path', stepId: 'counter', dependsOn: 'first' },
          hint: 'Finanzmarkt -> Kurs -> Außenbeitrag.',
          explain: 'Aufwertungsdruck dämpft Nettoexporte.'
        },
        {
          q: '[3. Validation] Ist "nur IS-Shift reicht als Erklärung" korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_graph_mf_path', role: 'VALIDATION' },
          hint: 'M-F verlangt Schock plus Gegenkanal.',
          explain: 'Nein, ohne Wechselkurskanal fehlt der zentrale M-F-Mechanismus.'
        }
      ]
    }
  ],
  zp_kurve: [
    {
      title: 'ZP-Lage im (Y,i)-Raum',
      context: 'Einkommen steigt, der Zins bleibt zunächst unverändert.',
      steps: [
        {
          q: '[1. Decision] Welche Teilbilanz gerät durch höheres Y zuerst unter Druck?',
          answer: ['leistungsbilanz', 'lb', 'current account'],
          options: { problemId: 'm2_zp_curve_1', stepId: 'lb', isDecision: true },
          hint: 'Mehr Einkommen zieht Importe hoch.',
          explain: 'Die Leistungsbilanz verschlechtert sich typischerweise zuerst.'
        },
        {
          q: '[2. Execution] Welche Zinsrichtung ist nötig, um auf der ZP-Kurve zu bleiben?',
          answer: ['zins steigt', 'höherer zins', 'i hoch'],
          options: { problemId: 'm2_zp_curve_1', stepId: 'rate', dependsOn: 'lb' },
          hint: 'Kapitalzuflüsse müssen den LB-Effekt ausgleichen.',
          explain: 'Der Inlandszins muss steigen, um die Kapitalbilanz zu verbessern.'
        },
        {
          q: '[3. Validation] Spricht das für positive oder negative ZP-Steigung?',
          answer: ['positiv', 'positive steigung'],
          options: { problemId: 'm2_zp_curve_1', role: 'VALIDATION' },
          hint: 'Mehr Y braucht mehr i.',
          explain: 'Die ZP-Kurve ist im Standardfall positiv geneigt.'
        }
      ]
    }
  ],
  wirtschaftspolitik_offen: [
    {
      title: 'Regime zuerst',
      context: 'Expansive Fiskalpolitik bei hoher Kapitalmobilität.',
      steps: [
        {
          q: '[1. Decision] Welche Information muss vor jeder Ergebnisbehauptung genannt werden?',
          answer: ['wechselkursregime', 'regime', 'flexibel oder fix'],
          options: { problemId: 'm2_open_policy_1', stepId: 'regime', isDecision: true },
          hint: 'Ohne Regime bleibt die Antwort unvollständig.',
          explain: 'Die erste Klausurweiche ist das Wechselkursregime.'
        },
        {
          q: '[2. Execution] Welcher Gegenkanal dämpft Fiskalpolitik bei flexiblem Wechselkurs typischerweise?',
          answer: ['aufwertung', 'wechselkurskanal', 'nx sinken'],
          options: { problemId: 'm2_open_policy_1', stepId: 'counter', dependsOn: 'regime' },
          hint: 'IS-Impuls ist nicht das Ende der Geschichte.',
          explain: 'Aufwertung verschlechtert NX und nimmt dem Fiskalimpuls Kraft.'
        },
        {
          q: '[3. Validation] Ist „IS nach rechts“ als alleinige Antwort ausreichend?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_open_policy_1', role: 'VALIDATION' },
          hint: 'Offene Makro verlangt immer den Wechselkurs-/Außenkanal.',
          explain: 'Nein. Erst der Gegenkanal macht die Politikantwort vollständig.'
        }
      ]
    }
  ],
  opt_waehrungsraum: [
    {
      title: 'OWR-Kriterium lesen',
      context: 'Eine Währungsunion diskutiert asymmetrische Schocks und geringe Arbeitsmobilität.',
      steps: [
        {
          q: '[1. Decision] Welches klassische OWR-Problem liegt hier direkt nahe?',
          answer: ['fehlende anpassung ohne wechselkurs', 'asymmetrische schocks', 'owr problem'],
          options: { problemId: 'm2_owr_1', stepId: 'problem', isDecision: true },
          hint: 'Eigenen WK gibt es in der Union nicht mehr.',
          explain: 'Asymmetrische Schocks werden ohne eigenen Wechselkurs schwerer absorbierbar.'
        },
        {
          q: '[2. Execution] Welche Ersatzmechanismen müssten nun stärker sein?',
          answer: ['arbeitsmobilität', 'lohnflexibilität', 'fiskaltransfers'],
          options: { problemId: 'm2_owr_1', stepId: 'mechanisms', dependsOn: 'problem' },
          hint: 'Frage nach Kompensation des verlorenen WK.',
          explain: 'Mobilität, Flexibilität oder Transfers müssen den Anpassungsjob übernehmen.'
        },
        {
          q: '[3. Validation] Ist OWR damit ein reines Pro-/Contra-Urteil?',
          answer: ['nein', 'abwägung', 'falsch'],
          options: { problemId: 'm2_owr_1', role: 'VALIDATION' },
          hint: 'Kosten und Nutzen gemeinsam bewerten.',
          explain: 'Nein. OWR ist eine Abwägung zwischen Integrationsgewinn und Anpassungskosten.'
        }
      ]
    }
  ],
  zinsparitaet: [
    {
      title: 'UIP-Vorzeichenfalle',
      context: 'Inlandszins liegt 2 Prozentpunkte unter Auslandszins.',
      steps: [
        {
          q: '[1. Decision] Welche Differenz muss zuerst bestimmt werden?',
          answer: ['zinsdifferenz', 'i-i*', 'i minus i*'],
          options: { problemId: 'm2_uip_sign', stepId: 'diff', isDecision: true },
          hint: 'Starte bei i-i*.',
          explain: 'Die Zinsdifferenz steuert die UIP-Richtung.'
        },
        {
          q: '[2. Execution] Bei i-i* < 0: Ist (E^e-E)/E positiv oder negativ?',
          answer: ['positiv', 'plus', '>0'],
          options: { problemId: 'm2_uip_sign', stepId: 'exp', dependsOn: 'diff' },
          hint: 'UIP hat ein Minus vor der Erwartungsänderung.',
          explain: 'Negativer Zinsabstand impliziert positive erwartete Kursänderung.'
        },
        {
          q: '[3. Validation] Bedeutet E^e > E in Mengennotierung erwartete Auf- oder Abwertung?',
          answer: ['aufwertung', 'wertet auf'],
          options: { problemId: 'm2_uip_sign', role: 'VALIDATION' },
          hint: 'Mehr Fremdwährung pro Inlandswährung.',
          explain: 'Es entspricht einer erwarteten Aufwertung des Inlands.'
        }
      ]
    }
  ],
  marshall_lerner: [
    {
      title: 'J-Kurve gegen Kurzschluss',
      context: 'Nach Abwertung verschlechtert sich NX zunächst, verbessert sich später.',
      steps: [
        {
          q: '[1. Decision] Ist die anfängliche Verschlechterung eher kurz- oder langfristig?',
          answer: ['kurzfristig', 'kurzfrist'],
          options: { problemId: 'm2_ml_jcurve', stepId: 'horizon', isDecision: true },
          hint: 'Mengen sind anfangs träge.',
          explain: 'Die anfängliche Verschlechterung ist ein kurzfristiger J-Kurveneffekt.'
        },
        {
          q: '[2. Execution] Welche Bedingung muss langfristig erfüllt sein?',
          answer: ['marshall lerner', '|eta_x| + |eta_m| > 1', 'elastizitäten > 1'],
          options: { problemId: 'm2_ml_jcurve', stepId: 'cond', dependsOn: 'horizon' },
          hint: 'Summe absoluter Elastizitäten.',
          explain: 'Langfristige Verbesserung braucht die Marshall-Lerner-Bedingung.'
        },
        {
          q: '[3. Validation] Ist "Abwertung verbessert NX sofort" korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_ml_jcurve', role: 'VALIDATION' },
          hint: 'Zeitstruktur der Anpassung.',
          explain: 'Nein, kurzfristig kann NX erst fallen.'
        }
      ]
    }
    ,
    {
      title: 'J-Kurve als Zeitpfad',
      context: 'Abwertung heute; Mengen reagieren träge, dann zunehmend elastisch.',
      steps: [
        {
          q: '[1. Decision] Kurzfristig: dominiert Preis- oder Mengeneffekt?',
          answer: ['preiseffekt', 'preis'],
          options: { problemId: 'm2_graph_jcurve_path', stepId: 'short', isDecision: true },
          hint: 'Verträge und Mengen sind kurzfristig träge.',
          explain: 'Kurzfristig dominiert der Preiseffekt.'
        },
        {
          q: '[2. Execution] Langfristig: welche Bedingung entscheidet über NX-Verbesserung?',
          answer: ['marshall lerner', '|eta_x| + |eta_m| > 1', 'elastizitäten > 1'],
          options: { problemId: 'm2_graph_jcurve_path', stepId: 'long', dependsOn: 'short' },
          hint: 'Elastizitätssumme prüfen.',
          explain: 'Langfristig ist die Marshall-Lerner-Bedingung entscheidend.'
        },
        {
          q: '[3. Validation] Muss die Handelsbilanz sofort steigen?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_graph_jcurve_path', role: 'VALIDATION' },
          hint: 'Denke an J-Form.',
          explain: 'Nein, sie kann zunächst fallen und erst später steigen.'
        }
      ]
    }
  ],
  phillipskurve: [
    {
      title: 'Inflation aus der Phillipskurve',
      context: 'pi^e = 2, u_n = 5, alpha = 0.8, u = 4.',
      steps: [
        {
          q: '[1. Decision] Liegt die Arbeitslosigkeit über oder unter dem natürlichen Niveau?',
          answer: ['unter', 'below'],
          options: { problemId: 'm2_pk_strict', stepId: 'u_gap', isDecision: true },
          hint: '4 im Vergleich zu 5.',
          explain: 'u liegt unter u_n.'
        },
        {
          q: '[2. Execution] Berechne die Inflation.',
          answer: ['2.8', '2,8'],
          options: { problemId: 'm2_pk_strict', stepId: 'pi_calc', dependsOn: 'u_gap' },
          hint: 'pi = pi^e - alpha(u-u_n).',
          explain: '2 - 0.8(4 - 5) = 2.8.'
        },
        {
          q: '[3. Validation] Liegt die Inflation über oder unter den Erwartungen?',
          answer: ['über', 'higher'],
          options: { problemId: 'm2_pk_strict', role: 'VALIDATION' },
          hint: 'Vergleiche 2.8 mit 2.',
          explain: 'Sie liegt über den Erwartungen.'
        }
      ]
    }
  ],
  geldmengen: [
    {
      title: 'Inflationsziel vs. Geldmengen-Signal',
      context: 'Inflation nahe Ziel, M3-Wachstum kurzfristig hoch, Geldnachfrage zugleich erhöht.',
      steps: [
        {
          q: '[1. Decision] Welcher Anker ist im Inflation-Targeting-Regime primär für den Zinsentscheid?',
          answer: ['inflationsziel', 'inflationsabweichung', 'pi-pi*'],
          options: { problemId: 'm2_money_target_1', stepId: 'anchor', isDecision: true },
          hint: 'Frage nach Zielgröße der Reaktionsfunktion.',
          explain: 'Primär zählt die Abweichung der Inflation vom Ziel.'
        },
        {
          q: '[2. Execution] Reicht isoliertes Geldmengenwachstum als sicherer Inflationsbeweis, wenn Geldnachfrage stark schwankt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_money_target_1', stepId: 'signal', dependsOn: 'anchor' },
          hint: 'Denke an Umlaufgeschwindigkeit und Kassenhaltung.',
          explain: 'Nein. Bei instabiler Geldnachfrage ist das Signal allein nicht hinreichend.'
        },
        {
          q: '[3. Validation] Welche Rolle behalten Monetäraggregate trotzdem?',
          answer: ['zusatzindikator', 'ergänzende information', 'risikosignal'],
          options: { problemId: 'm2_money_target_1', role: 'VALIDATION' },
          hint: 'Nicht wegwerfen, aber nicht mechanisch steuern.',
          explain: 'Sie dienen als ergänzende Indikatoren für Liquiditäts-, Kredit- und Risikodynamik.'
        }
      ]
    }
  ],
  taylor_regel: [
    {
      title: 'Taylor-Regel anwenden',
      context: 'r* = 1, pi = 3, pi* = 2, a = 0.8, outputluecke = 1, b = 0.5.',
      steps: [
        {
          q: '[1. Decision] Reagiert die Zentralbank auf zwei oder nur auf eine Abweichung?',
          answer: ['zwei', '2', 'inflation und output'],
          options: { problemId: 'm2_taylor_strict', stepId: 'inputs', isDecision: true },
          hint: 'Schau auf Inflation und Lücke.',
          explain: 'Die Regel reagiert hier auf Inflationsabweichung und Outputlücke.'
        },
        {
          q: '[2. Execution] Berechne den Leitzins.',
          answer: ['4.3', '4,3'],
          options: { problemId: 'm2_taylor_strict', stepId: 'i_calc', dependsOn: 'inputs' },
          hint: 'Setze alles in die Regel ein.',
          explain: '1 + 3 + 0.8(1) + 0.5(1) = 4.3.'
        },
        {
          q: '[3. Validation] Erfüllt die Regel das Taylor-Prinzip?',
          answer: ['ja', 'yes'],
          options: { problemId: 'm2_taylor_strict', role: 'VALIDATION' },
          hint: 'Reaktion auf Inflation ist 1 + a.',
          explain: 'Ja, 1 + a = 1.8 und damit mehr als eins zu eins.'
        }
      ]
    },
    {
      title: 'ELB Realzins-Spielraum',
      context: 'Zwei Länder: A mit π=4%, B mit π=0%; beide können bei Schock nur auf i=0 senken.',
      steps: [
        {
          q: '[1. Decision] Welche Formel verbindet Nominalzins und Realzins im Mini-Case?',
          answer: ['r=i-pi', 'fisher', 'realzinsgleichung'],
          options: { problemId: 'm2_taylor_elb_1', stepId: 'fisher', isDecision: true },
          hint: 'Nutze die Näherung für den Realzins.',
          explain: 'Relevant ist r ≈ i − π.'
        },
        {
          q: '[2. Execution] Welches Land kann an der ELB den Realzins stärker ins Negative drücken?',
          answer: ['land a', 'a', 'das mit höherer inflation'],
          options: { problemId: 'm2_taylor_elb_1', stepId: 'space', dependsOn: 'fisher' },
          hint: 'Vergleiche i=0 bei unterschiedlichen π.',
          explain: 'Land A mit höherer Inflation hat mehr Realzins-Spielraum.'
        },
        {
          q: '[3. Validation] Ist "0%-Inflation erhöht den ELB-Stabilisierungsspielraum" korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_taylor_elb_1', role: 'VALIDATION' },
          hint: 'Bei i=0 bestimmt π die Untergrenze von r.',
          explain: 'Nein. Niedrigere Inflation verringert den möglichen negativen Realzinsraum.'
        }
      ]
    }
  ],
  inflation_targeting: [
    {
      title: 'Zielanker statt Geldmengenautomat',
      context: 'Inflation nahe Ziel; M3 wächst kräftig, Geldnachfrage schwankt stark.',
      steps: [
        {
          q: '[1. Decision] Welche Größe ist der primäre Steueranker?',
          answer: ['inflationsziel', 'inflationsabweichung', 'pi-pi*'],
          options: { problemId: 'm2_it_1', stepId: 'anchor', isDecision: true },
          hint: 'Regimelogik statt Einzelsignal.',
          explain: 'Primär zählt die Abweichung der Inflation vom Ziel.'
        },
        {
          q: '[2. Execution] Sind Monetäraggregate in diesem Fall nutzlos oder ergänzend?',
          answer: ['ergänzend', 'zusatzindikator', 'indikator'],
          options: { problemId: 'm2_it_1', stepId: 'money', dependsOn: 'anchor' },
          hint: 'Nicht wegwerfen, aber nicht mechanisch steuern.',
          explain: 'Sie liefern Zusatzinformation, ersetzen den Zielanker aber nicht.'
        },
        {
          q: '[3. Validation] Ist „hohes M3-Wachstum = automatisch Zins rauf“ korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_it_1', role: 'VALIDATION' },
          hint: 'Signal erst kontextualisieren.',
          explain: 'Nein. Geldmengenwachstum muss gegen Geldnachfrage und Finanzlage interpretiert werden.'
        }
      ]
    }
  ],
  inflation_kosten: [
    {
      title: 'Disinflationskosten lesen',
      context: 'Inflation soll rasch gesenkt werden; Phillips-Steigung ist gegeben.',
      steps: [
        {
          q: '[1. Decision] Welche zweite Größe muss neben dem Inflationsziel sofort mitgedacht werden?',
          answer: ['outputkosten', 'arbeitslosigkeit', 'opferquote'],
          options: { problemId: 'm2_inf_cost_1', stepId: 'costs', isDecision: true },
          hint: 'Disinflation ist kein kostenloser Zielwechsel.',
          explain: 'Arbeitsmarkt- und Outputkosten gehören sofort zur Antwort.'
        },
        {
          q: '[2. Execution] Senkt hohe Glaubwürdigkeit die Opferquote oder erhöht sie typischerweise?',
          answer: ['senkt', 'geringer', 'reduziert'],
          options: { problemId: 'm2_inf_cost_1', stepId: 'cred', dependsOn: 'costs' },
          hint: 'Erwartungen reagieren schneller.',
          explain: 'Hohe Glaubwürdigkeit reduziert typischerweise die reale Bezahlstrecke.'
        },
        {
          q: '[3. Validation] Ist „niedrigere Inflation ist immer gratis besser“ korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_inf_cost_1', role: 'VALIDATION' },
          hint: 'Übergangskosten benennen.',
          explain: 'Nein. Der Zielwert allein sagt noch nichts über die realen Übergangskosten.'
        }
      ]
    }
  ],
  wachstum_fakten: [
    {
      title: 'Konvergenz nicht automatisch',
      context: 'Ein armes Land wächst langsamer als ein reiches Land.',
      steps: [
        {
          q: '[1. Decision] Widerspricht das zwingend dem Solow-Modell?',
          answer: ['nein', 'nicht zwingend'],
          options: { problemId: 'm2_growthfacts_1', stepId: 'solow', isDecision: true },
          hint: 'Bedingte statt unbedingte Konvergenz.',
          explain: 'Nein. Solow sagt nur bedingte Konvergenz voraus.'
        },
        {
          q: '[2. Execution] Welche Hintergrundgrößen könnten das erklären?',
          answer: ['institutionen', 'sparquote', 'technologie', 'demografie'],
          options: { problemId: 'm2_growthfacts_1', stepId: 'drivers', dependsOn: 'solow' },
          hint: 'Strukturparameter vergleichen.',
          explain: 'Unterschiedliche Sparquoten, Institutionen, Technologie oder Demografie können Konvergenz verhindern.'
        },
        {
          q: '[3. Validation] Reicht „arm = wächst schneller“ als Klausuraussage?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_growthfacts_1', role: 'VALIDATION' },
          hint: 'Konditionalitätsfalle.',
          explain: 'Nein. Ohne ähnliche Fundamentaldaten ist diese Aussage zu grob.'
        }
      ]
    }
  ],
  solow_basis: [
    {
      title: 'Solow: Das Goldene-Regel-Limit',
      context: 'Steady State bei k > k_GR. Die Sparquote s sinkt.',
      steps: [
        { 
          q: '[1. Interpretation] Welcher Zustand der Kapitalakkumulation liegt hier vor?', 
          answer: ['überakkumulation', 'over-accumulation'], 
          options: { problemId: 'm2_solow_strict', stepId: 'state_id', isDecision: true, modelId: 'OVERACCUM' },
          hint: 'k > k_GR.', 
          explain: 'Die Wirtschaft hat zu viel Kapital.' 
        },
        { 
          q: '[2. Decision] Führt s↓ langfristig zu steigendem oder sinkendem Konsum c?', 
          answer: ['steigend', '↑', 'höher'], 
          options: { 
            problemId: 'm2_solow_strict', 
            stepId: 'cons_dir', 
            dependsOn: 'state_id',
            premise: 'OVERACCUM',
            targetVar: 'VAR_C'
          },
          hint: 'Überlegen Sie, ob das Land "zu viel" spart.', 
          explain: 'In der Überakkumulation erhöht weniger Sparen den Konsum.' 
        },
        { 
          q: '[3. Validation] Erklären Sie die J-Kurve bei der s-Senkung (Ambiguity erlaubt).', 
          answer: ['ambig', 'c↑ sofort'], 
          options: { problemId: 'm2_solow_strict', role: 'VALIDATION', ambiguityAllowed: true },
          hint: 'Hängt vom Zeithorizont ab.', 
          explain: 'Kurzfristig steigt der Konsum sofort (c=(1-s)y), langfristig konvergiert er gegen das höhere Steady-State-Niveau.' 
        }
      ]
    }
  ],
  tech_fortschritt: [
    {
      title: 'Solow mit technischem Fortschritt',
      context: 'Arbeitsvermehrender Fortschritt g_A = 1%.',
      steps: [
        {
          q: '[1. Decision] Wächst Y/N im Steady State dauerhaft mit der Sparquote oder mit g_A?',
          answer: ['g_a', 'technischer fortschritt', '1%'],
          options: { problemId: 'm2_tf_strict', stepId: 'growth_source', isDecision: true },
          hint: 'Mehr Sparen hebt Niveau, nicht Dauerwachstum.',
          explain: 'Dauerhaftes Pro-Kopf-Wachstum stammt aus g_A.'
        },
        {
          q: '[2. Execution] Wie hoch ist dann die langfristige Wachstumsrate von Y/N?',
          answer: ['1', '1%', '0.01'],
          options: { problemId: 'm2_tf_strict', stepId: 'growth_rate', dependsOn: 'growth_source' },
          hint: 'Sie entspricht g_A.',
          explain: 'Im Steady State wächst Y/N mit 1%.'
        },
        {
          q: '[3. Validation] Maximiert die Goldene Regel Output oder Konsum?',
          answer: ['konsum', 'consumption'],
          options: { problemId: 'm2_tf_strict', role: 'VALIDATION' },
          hint: 'Nicht das höchste y zählt.',
          explain: 'Die Goldene Regel maximiert den langfristigen Konsum.'
        }
      ]
    }
  ],
  steady_state: [
    {
      title: 'Steady-State-Lesart',
      context: 's steigt, technischer Fortschritt bleibt unverändert.',
      steps: [
        {
          q: '[1. Decision] Ändert sich zuerst das Niveau oder die dauerhafte Pro-Kopf-Wachstumsrate?',
          answer: ['niveau', 'level'],
          options: { problemId: 'm2_ss_1', stepId: 'level', isDecision: true },
          hint: 'Ohne neues g_A kein neues Dauerwachstum.',
          explain: 'Zuerst ändert sich das langfristige Niveau von k* und y*.'
        },
        {
          q: '[2. Execution] Welche Kurve verschiebt sich im Solow-Diagramm nach oben?',
          answer: ['sf(k)', 'investitionskurve', 's f(k)'],
          options: { problemId: 'm2_ss_1', stepId: 'curve', dependsOn: 'level' },
          hint: 'Mehr Sparen = mehr Investition bei jedem k.',
          explain: 'Die Investitionskurve sf(k) verschiebt sich nach oben.'
        },
        {
          q: '[3. Validation] Ist „mehr Sparen = dauerhaft schnelleres Pro-Kopf-Wachstum“ korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_ss_1', role: 'VALIDATION' },
          hint: 'Niveau und Wachstumsrate trennen.',
          explain: 'Nein. Ohne technischen Fortschritt entsteht nur ein Niveaueffekt.'
        }
      ]
    }
  ],
  goldene_sparquote: [
    {
      title: 'Outputmaximum ist nicht Konsummaximum',
      context: 'Die Wirtschaft spart sehr viel und liegt rechts vom goldenen Kapitalstock.',
      steps: [
        {
          q: '[1. Decision] Liegt Über- oder Unterakkumulation vor?',
          answer: ['überakkumulation', 'zu viel kapital'],
          options: { problemId: 'm2_golden_1', stepId: 'state', isDecision: true },
          hint: 'Rechts von k_gold.',
          explain: 'Es liegt Überakkumulation vor.'
        },
        {
          q: '[2. Execution] Erhöht weniger Sparen hier langfristig den Konsum oder senkt es ihn?',
          answer: ['erhöht', 'steigert', 'konsum steigt'],
          options: { problemId: 'm2_golden_1', stepId: 'cons', dependsOn: 'state' },
          hint: 'Break-even-Belastung mitdenken.',
          explain: 'Weniger Sparen erhöht in diesem Fall den langfristigen Konsum.'
        },
        {
          q: '[3. Validation] Ist die Goldene Regel auf maximalen Output gerichtet?',
          answer: ['nein', 'falsch', 'konsum'],
          options: { problemId: 'm2_golden_1', role: 'VALIDATION' },
          hint: 'Normatives Ziel benennen.',
          explain: 'Nein. Die Goldene Regel maximiert den langfristigen Konsum.'
        }
      ]
    }
  ],
  budgetrestriktion: [
    {
      title: 'Primärsaldo sauber lesen',
      context: 'Gesamtdefizit ist hoch, aber ein Teil stammt aus Zinszahlungen auf Altschulden.',
      steps: [
        {
          q: '[1. Decision] Welche Größe trennt aktuelle Fiskalpolitik von Altlasten?',
          answer: ['primärsaldo', 'primärdefizit'],
          options: { problemId: 'm2_budget_1', stepId: 'primary', isDecision: true },
          hint: 'Zinszahlungen herausrechnen.',
          explain: 'Der Primärsaldo isoliert die laufende Fiskalpolitik.'
        },
        {
          q: '[2. Execution] Gehören Zinszahlungen zum Primärsaldo?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_budget_1', stepId: 'interest', dependsOn: 'primary' },
          hint: 'Primär = ohne Zinslasten.',
          explain: 'Nein. Zinszahlungen sind gerade ausgeklammert.'
        },
        {
          q: '[3. Validation] Reicht die periodische Budgetgleichung allein, um Tragfähigkeit zu beweisen?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_budget_1', role: 'VALIDATION' },
          hint: 'Intertemporale Lesart fehlt noch.',
          explain: 'Nein. Tragfähigkeit verlangt den Blick auf den künftigen Primärpfad.'
        }
      ]
    }
  ],
  ricardianisch: [
    {
      title: 'Defizit heißt nicht Vermögensgewinn',
      context: 'Der Staat senkt heute Steuern und kündigt spätere Gegenfinanzierung an.',
      steps: [
        {
          q: '[1. Decision] Was bleibt unter den Ricardo-Annahmen für das Lebenseinkommen des Haushalts unverändert?',
          answer: ['barwert', 'lebenseinkommen', 'present value'],
          options: { problemId: 'm2_ricardo_1', stepId: 'pv', isDecision: true },
          hint: 'Steuerzeitpunkt verschiebt sich, nicht der Barwert.',
          explain: 'Der Barwert des verfügbaren Einkommens bleibt unverändert.'
        },
        {
          q: '[2. Execution] Reagiert der heutige Konsum unter voller Äquivalenz stark positiv oder eher kaum?',
          answer: ['kaum', 'nicht', 'null'],
          options: { problemId: 'm2_ricardo_1', stepId: 'cons', dependsOn: 'pv' },
          hint: 'Heute sparen, um morgen zu zahlen.',
          explain: 'Der heutige Konsum steigt nicht systematisch; die Steuersenkung wird gespart.'
        },
        {
          q: '[3. Validation] Ist Ricardianische Äquivalenz ein realistischer Universalbefund?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_ricardo_1', role: 'VALIDATION' },
          hint: 'Voraussetzungen prüfen.',
          explain: 'Nein. Liquiditätsbeschränkungen und endliche Horizonte brechen die Äquivalenz oft auf.'
        }
      ]
    }
  ],
  schuldenquote_dynamik: [
    {
      title: 'Schuldenquote stabilisieren',
      context: 'b = 90%, r = 4%, g = 1%.',
      steps: [
        {
          q: '[1. Decision] Wirkt die Zins-Wachstums-Differenz hier stabilisierend oder destabilisierend?',
          answer: ['destabilisierend', 'r>g', 'schneeball'],
          options: { problemId: 'm2_debt_strict', stepId: 'rg_compare', isDecision: true },
          hint: 'Vergleiche 4% und 1%.',
          explain: 'r > g; der Schneeballeffekt arbeitet gegen den Staat.'
        },
        {
          q: '[2. Execution] Berechne den stabilisierenden Primärsaldo in % des BIP.',
          answer: ['2.7', '2,7', '0.027'],
          options: { problemId: 'm2_debt_strict', stepId: 'ps_calc', dependsOn: 'rg_compare' },
          hint: '(r-g)b',
          explain: '(0.04 - 0.01) mal 0.90 = 0.027.'
        },
        {
          q: '[3. Validation] Ist ein Primärüberschuss oder ein Primärdefizit nötig?',
          answer: ['primärüberschuss', 'überschuss'],
          options: { problemId: 'm2_debt_strict', role: 'VALIDATION' },
          hint: 'Das Vorzeichen der Stabilisierung zählt.',
          explain: 'Es braucht einen Primärüberschuss von etwa 2.7% des BIP.'
        }
      ]
    }
    ,
    {
      title: 'Schuldenquote-Nennerfalle',
      context: 'Nominaler Schuldenstand steigt, BIP wächst ebenfalls stark.',
      steps: [
        {
          q: '[1. Decision] Welche Kennzahl ist für Tragfähigkeit zentral?',
          answer: ['schuldenquote', 'debt-to-gdp', 'b'],
          options: { problemId: 'm2_debt_ratio_trap', stepId: 'anchor', isDecision: true },
          hint: 'Relativgröße statt Niveau.',
          explain: 'Tragfähigkeit wird über die Schuldenquote bewertet.'
        },
        {
          q: '[2. Execution] Kann die Schuldenquote trotz höherem Schuldenstand fallen?',
          answer: ['ja', 'yes'],
          options: { problemId: 'm2_debt_ratio_trap', stepId: 'ratio', dependsOn: 'anchor' },
          hint: 'Nenne den Nenner.',
          explain: 'Ja, wenn das BIP schneller wächst als der Schuldenstand.'
        },
        {
          q: '[3. Validation] Ist "mehr Schuldenstand = immer höhere Quote" korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_debt_ratio_trap', role: 'VALIDATION' },
          hint: 'Quote ist ein Verhältnis.',
          explain: 'Nein. Ohne BIP-Entwicklung ist die Quotenaussage unvollständig.'
        }
      ]
    },
    {
      title: 'Tilgungszeitpunkt und Zinseszins',
      context: 'Gleicher Anfangsschock, aber Tilgung einmal früh und einmal deutlich später.',
      steps: [
        {
          q: '[1. Decision] Welcher Mechanismus macht spätere Einmaltilgung teurer?',
          answer: ['zinseszins', 'schuld wächst mit 1+r', 'aufzinsung'],
          options: { problemId: 'm2_debt_timing_1', stepId: 'compounding', isDecision: true },
          hint: 'Betrachte B_t bei ausgeglichenem Primärsaldo.',
          explain: 'Die Restschuld wächst periodisch mit dem Zinsfaktor.'
        },
        {
          q: '[2. Execution] Steigt der notwendige Tilgungsbetrag bei späterem Termin relativ zum frühen Termin?',
          answer: ['ja', 'yes'],
          options: { problemId: 'm2_debt_timing_1', stepId: 'amount', dependsOn: 'compounding' },
          hint: 'Mehr Perioden mit (1+r).',
          explain: 'Ja. Mehr Aufzinsungsperioden erhöhen den Endbetrag.'
        },
        {
          q: '[3. Validation] Ist "Tilgung verschieben ist neutral, wenn der Primärsaldo dazwischen null ist" korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_debt_timing_1', role: 'VALIDATION' },
          hint: 'Null-Primärsaldo stoppt nicht die Zinsdynamik.',
          explain: 'Falsch. Ohne Primärüberschuss wächst die Schuld mit dem Zins weiter.'
        }
      ]
    },
    {
      title: 'Monetarisierung vs. Kreditfinanzierung',
      context: 'Zusätzliche Staatsausgaben werden alternativ über Kredit oder Geldschöpfung finanziert.',
      steps: [
        {
          q: '[1. Decision] Welche Variante bringt zusätzlich zur Fiskalwirkung einen unmittelbaren Geldmengenimpuls?',
          answer: ['monetarisierung', 'geldschöpfung', 'variante b'],
          options: { problemId: 'm2_debt_monetize_1', stepId: 'mode', isDecision: true },
          hint: 'Denke an IS-LM-PC-Logik.',
          explain: 'Monetarisierung erzeugt zusätzlich einen monetären Impuls.'
        },
        {
          q: '[2. Execution] Welche mittelfristige Zusatzgefahr steigt dadurch typischerweise?',
          answer: ['inflationsdruck', 'höhere inflation', 'preisniveaudruck'],
          options: { problemId: 'm2_debt_monetize_1', stepId: 'risk', dependsOn: 'mode' },
          hint: 'Zusatznachfrage und Preisniveau.',
          explain: 'Die Inflationsrisiken steigen gegenüber reiner Kreditfinanzierung.'
        },
        {
          q: '[3. Validation] Ist Monetarisierung ein kostenloser Weg aus der Budgetrestriktion?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_debt_monetize_1', role: 'VALIDATION' },
          hint: 'Trade-off statt Gratislösung.',
          explain: 'Nein. Der Finanzierungsvorteil wird mit potenziellen Preisstabilitätskosten erkauft.'
        }
      ]
    }
  ]
  ,
  wk_regime: [
    {
      title: 'Regime-Pfadvergleich',
      context: 'Gleicher negativer externer Schock unter flexiblem vs. fixem Wechselkurs.',
      steps: [
        {
          q: '[1. Decision] Welches Regime nutzt den Wechselkurs als primären Stoßdämpfer?',
          answer: ['flexibler wechselkurs', 'flexibel'],
          options: { problemId: 'm2_graph_regime_path', stepId: 'absorber', isDecision: true },
          hint: 'Darf E reagieren?',
          explain: 'Im flexiblen Regime übernimmt der Kurs einen größeren Teil der Anpassung.'
        },
        {
          q: '[2. Execution] Bei fixem Kurs: welche Anpassungsdimension trägt mehr Last?',
          answer: ['binnenwirtschaft', 'zins und output', 'inlandsnachfrage'],
          options: { problemId: 'm2_graph_regime_path', stepId: 'burden', dependsOn: 'absorber' },
          hint: 'Wenn E gebunden bleibt, muss etwas anderes reagieren.',
          explain: 'Die Last liegt stärker auf Binnenvariablen wie Zins, Nachfrage und Output.'
        },
        {
          q: '[3. Validation] Ist "gleicher Schock = gleicher Anpassungspfad" korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'm2_graph_regime_path', role: 'VALIDATION' },
          hint: 'Regimewahl ist modellentscheidend.',
          explain: 'Nein, das Regime bestimmt den Anpassungskanal und damit den Pfad.'
        }
      ]
    },
    {
      title: 'Paritätsverteidigung unter Abwertungserwartung',
      context: 'Fixkursregime; Märkte erwarten mit hoher Wahrscheinlichkeit eine Abwertung.',
      steps: [
        {
          q: '[1. Decision] Welche Größe steigt bei höherer Abwertungserwartung unter UIP unmittelbar an?',
          answer: ['erforderlicher zinsaufschlag', 'i-i*', 'zinsdifferenz'],
          options: { problemId: 'm2_fx_defense_1', stepId: 'spread', isDecision: true },
          hint: 'i-i* ≈ erwartete ΔE/E.',
          explain: 'Der notwendige inländische Zinsaufschlag gegenüber dem Ausland steigt.'
        },
        {
          q: '[2. Execution] Welche Sofortmaßnahme muss die Zentralbank typischerweise ergreifen, wenn Reserven begrenzt sind?',
          answer: ['zins anheben', 'zins hoch', 'straffen'],
          options: { problemId: 'm2_fx_defense_1', stepId: 'policy', dependsOn: 'spread' },
          hint: 'Parität über Renditedifferenz verteidigen.',
          explain: 'Sie muss den Inlandszins anheben, um den Abwertungsdruck zu kompensieren.'
        },
        {
          q: '[3. Validation] Welche binnenwirtschaftliche Kostenrichtung ist dann typisch?',
          answer: ['nachfrage sinkt', 'output fällt', 'rezessiver druck'],
          options: { problemId: 'm2_fx_defense_1', role: 'VALIDATION' },
          hint: 'Höhere Zinsen bremsen den Gütermarkt.',
          explain: 'Die inländische Nachfrage wird gedämpft; Output- und Beschäftigungsrisiken steigen.'
        }
      ]
    }
  ]
};

BASE_STEP_PROBLEMS.schuldenfinanzierung_monetarisierung = BASE_STEP_PROBLEMS.schuldenquote_dynamik;

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});
