// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// Step-by-step solver problems upgraded to True Exam Difficulty
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'Realwechselkurs-Dynamik',
      context: 'Inland (A) hat eine Inflation von 5%, Ausland (B) von 2%. Der nominale Wechselkurs E (Mengennotierung: B/A) sinkt um 1%.',
      steps: [
        { 
          q: 'Berechne die prozentuale Änderung des Realwechselkurses epsilon = EP/P*.', 
          answer: ['2', '2%', '0.02', '0,02'], 
          hint: 'Nutze die Wachstumsraten-Approximation: %delta epsilon ≈ %delta E + pi_inland - pi_ausland.', 
          explain: '-1% (E sinkt) + 5% (P steigt) - 2% (P* steigt) = 2%. In Mengennotierung bedeutet ein Anstieg von epsilon eine reale Aufwertung.', 
          traps: [{ pattern: '4', msg: 'Haben Sie die Vorzeichen von E und den Inflationsraten korrekt beachtet?' }] 
        },
        { 
          q: 'Hat sich die preisliche Wettbewerbsfähigkeit des Inlands verbessert oder verschlechtert?', 
          answer: ['verschlechtert'], 
          hint: 'Eine reale Aufwertung (epsilon steigt) macht inländische Güter relativ teurer für das Ausland.', 
          explain: 'Da epsilon um 2% gestiegen ist (reale Aufwertung), sind inländische Güter im Vergleich zu ausländischen Gütern teurer geworden. Die Wettbewerbsfähigkeit sinkt.', 
          traps: [{ pattern: 'verbessert', msg: 'In Mengennotierung bedeutet ein steigender Kurs (Aufwertung), dass unsere Güter teurer werden.' }] 
        }
      ]
    }
  ],
  kaufkraftparitaet: [
    {
      title: 'Relative Kaufkraftparität',
      context: 'Der Big Mac kostet in der Eurozone 5,00 € und in den USA 6,00 $. Der aktuelle Wechselkurs liegt bei 1,10 $/€.',
      steps: [
        { 
          q: 'Berechne den impliziten PPP-Wechselkurs (Mengennotierung $/€).', 
          answer: ['1.2', '1,2'], 
          hint: 'PPP-Kurs = P* / P (Auslandspreis in $ durch Inlandspreis in €).', 
          explain: '6.00 $ / 5.00 € = 1.20 $/€.', 
          traps: [{ pattern: '0.83', msg: 'Reziprokfehler (P/P* gerechnet statt P*/P).' }] 
        },
        { 
          q: 'Ist der Euro gegenüber dem Dollar laut PPP über- oder unterbewertet?', 
          answer: ['unterbewertet'], 
          hint: 'Vergleiche den Marktkurs (1.10) mit dem PPP-Kurs (1.20).', 
          explain: 'Da 1.10 < 1.20, bekommt man am Markt weniger Dollar für einen Euro als laut Kaufkraft gerechtfertigt wäre. Der Euro ist unterbewertet.', 
          traps: [{ pattern: 'überbewertet', msg: 'Falsch. Ein Marktkurs unter dem PPP-Kurs bedeutet Unterbewertung der inländischen Währung.' }] 
        }
      ]
    }
  ],
  zinsparitaet: [
    {
      title: 'UIP mit Risikoprämie (High Difficulty)',
      context: 'Weltzins i* = 2%. Erwarteter Wechselkurs in einem Jahr E^e = 1.05. Aktueller Kurs E = 1.10 (Mengennotierung $/€). Risikoprämie x = 4%.',
      steps: [
        { 
          q: 'Wie hoch ist die erwartete Abwertungsrate des Euro (in %)?', 
          answer: ['4.5', '4,5'], 
          hint: '(E - E^e) / E. Ein Sinken von E bedeutet Abwertung.', 
          explain: '(1.10 - 1.05) / 1.10 ≈ 0.0454, also ca. 4.5% Abwertungserwartung.', 
          traps: [{ pattern: '-4.5', msg: 'In Mengennotierung ist eine Verringerung von E eine Abwertung (positiver Wert der Abwertungsrate).' }] 
        },
        { 
          q: 'Welchen Inlandszins i muss die Zentralbank setzen, um die UIP (i ≈ i* + Abwertungserw. + x) zu erfüllen?', 
          answer: ['10.5', '10,5'], 
          hint: 'Addiere Weltzins, erwartete Abwertung und Risikoprämie.', 
          explain: 'i = 2% (i*) + 4.5% (Abwertung) + 4% (Risiko) = 10.5%.', 
          traps: [{ pattern: '1.5', msg: 'Haben Sie die Abwertungserwartung und das Risiko subtrahiert statt addiert?' }] 
        }
      ]
    }
  ],
  zahlungsbilanz: [
    {
      title: 'Leistungsbilanz und Nettoauslandsvermögen',
      context: 'Ein Land weist ein dauerhaftes Leistungsbilanzdefizit von 5% des BIP auf.',
      steps: [
        { 
          q: 'Was muss spiegelbildlich in der Kapitalbilanz (Netto-Finanzierungsrechnung) vorliegen?', 
          answer: ['Kapitalimport', 'Überschuss'], 
          hint: 'LB + KB = 0 (vereinfacht).', 
          explain: 'Ein Defizit in der Leistungsbilanz muss zwingend durch Kapitalimporte (Netto-Verschuldung gegenüber dem Ausland) finanziert werden.', 
          traps: [{ pattern: 'Defizit', msg: 'Zwei Defizite würden die Zahlungsbilanz nicht ausgleichen.' }] 
        },
        { 
          q: 'Wie verändert sich die Netto-Auslandsvermögensposition (NFA) über die Zeit?', 
          answer: ['sinkt', 'verschlechtert'], 
          hint: 'NFA = Forderungen - Verbindlichkeiten.', 
          explain: 'Ständige Kapitalimporte bedeuten steigende Verbindlichkeiten gegenüber dem Ausland, wodurch das Netto-Auslandsvermögen sinkt (negativer wird).', 
          traps: [{ pattern: 'steigt', msg: 'Das Land häuft Schulden an, kein Vermögen.' }] 
        }
      ]
    }
  ],
  offene_is: [
    {
      title: 'Multiplikator mit Importleck und Steuern',
      context: 'C = c0 + c1(Y-T), T = t1Y, IM = q1Y. G und X sind exogen.',
      steps: [
        { 
          q: 'Wie lautet der Staatsausgabenmultiplikator dY/dG?', 
          answer: ['1/(1-c1(1-t1)+q1)', '1 / (1 - c1 * (1 - t1) + q1)'], 
          hint: 'Stelle das Gleichgewicht Y = C + I + G + X - IM auf und isoliere Y.', 
          explain: 'Y(1 - c1(1-t1) + q1) = Autonome Ausgaben. Der Multiplikator ist der Kehrwert der Klammer.', 
          traps: [{ pattern: '1/(1-c1+q1)', msg: 'Die Einkommensteuer t1 reduziert das verfügbare Einkommen und damit den Multiplikatoreffekt.' }] 
        },
        { 
          q: 'Ist der Multiplikator in der offenen VW mit Steuern größer oder kleiner als 1?', 
          answer: ['kleiner', '<'], 
          hint: 'Betrachte typische Werte: c1=0.8, t1=0.25, q1=0.3.', 
          explain: 'In der offenen VW sind die Sickerverluste (Sparen, Steuern, Importe) oft so groß, dass der Nenner > 1 wird, womit der Multiplikator < 1 fällt.', 
          traps: [{ pattern: 'größer', msg: 'Nur in sehr simplen Modellen ohne Importe und Steuern ist er deutlich über 1.' }] 
        }
      ]
    }
  ],
  marshall_lerner: [
    {
      title: 'J-Kurve-Dynamik (High Difficulty)',
      context: 'Nach einer Abwertung (E sinkt) sind Export- und Importmengen kurzfristig nahezu unveränderlich.',
      steps: [
        { 
          q: 'Welcher Effekt dominiert unmittelbar nach der Abwertung die Handelsbilanz NX = X - IM/epsilon?', 
          answer: ['Preiseffekt', 'Preis'], 
          hint: 'epsilon = EP/P*. Wenn E sinkt, was passiert mit dem Wert der Importe in inländischen Gütern?', 
          explain: 'Die Importe werden in inländischer Währung teurer (IM/epsilon steigt). Da die Mengen X und IM noch nicht reagieren, verschlechtert sich NX sofort.', 
          traps: [{ pattern: 'Mengeneffekt', msg: 'Mengen reagieren erst zeitverzögert auf Preisänderungen.' }] 
        },
        { 
          q: 'Wie nennt man die Bedingung, dass die Summe der Elastizitäten > 1 sein muss, damit NX langfristig steigt?', 
          answer: ['Marshall-Lerner', 'Marshall Lerner'], 
          hint: 'Benannt nach zwei Ökonomen.', 
          explain: 'Die Marshall-Lerner-Bedingung garantiert, dass der positive Mengeneffekt den negativen Preiseffekt übersteigt.', 
          traps: [{ pattern: 'Okun', msg: 'Okun bezieht sich auf Arbeitslosigkeit.' }] 
        }
      ]
    }
  ],
  mundell_fleming: [
    {
      title: 'Mundell-Fleming: Fiskalexpansion',
      context: 'Flexible Wechselkurse, perfekte Kapitalmobilität (UIP). G steigt.',
      steps: [
        { 
          q: 'Schritt 1 (Interpretation): Welches Instrument der ZB ist in diesem Regime autonom? (Zins oder Wechselkurs?)', 
          answer: ['Zins', 'Zinsautonomie', 'i'], 
          hint: 'Bei flexiblen Kursen kann die ZB den Zins frei setzen.', 
          explain: 'Flexible Wechselkurse erlauben eine autonome Geldpolitik. Die ZB steuert i, der Markt bestimmt E.', 
          traps: [{ pattern: 'Wechselkurs', msg: 'Falsch. Der Wechselkurs ist bei flexiblen Regimen das Ergebnis der Marktanpassung.' }] 
        },
        { 
          q: 'Schritt 2 (Decision): Welche Auswirkung hat der resultierende Zinsanstieg auf den Wechselkurs E (Mengennotierung)? (Symbol erlaubt)', 
          answer: ['Aufwertung', 'E ↑', '↑', 'steigt'], 
          hint: 'Höhere Zinsen locken Kapital an.', 
          explain: 'Das höhere i führt zu Kapitalzuflüssen und einer sofortigen Aufwertung der heimischen Währung (E steigt).', 
          traps: [{ pattern: 'Abwertung', msg: 'Falsch. Höhere Zinsen machen die Währung attraktiver.' }] 
        },
        { 
          q: 'Schritt 3 (Execution): Was passiert im neuen Gleichgewicht mit den Nettoexporten NX?', 
          answer: ['sinken', 'fällt', 'Verschlechterung', 'NX ↓', '↓'], 
          hint: 'Kombiniere den Einkommenseffekt (Y steigt) und den Wechselkurseffekt (E steigt).', 
          explain: 'Die Aufwertung (E steigt) macht Exporte teurer und Importe billiger. Zudem erhöht das gestiegene Y die Importe zusätzlich. NX sinkt massiv (Crowding-out).', 
          traps: [{ pattern: 'steigen', msg: 'Die Fiskalpolitik verdrängt in der offenen VW die Nettoexporte.' }] 
        }
      ]
    }
  ],
  wk_regime: [
    {
      title: 'Festkurssystem und Geldpolitik',
      context: 'Ein Land fixiert seinen Kurs E dauerhaft. Es gilt vollkommene Kapitalmobilität.',
      steps: [
        { 
          q: 'Verfügt das Land noch über eine autonome Geldpolitik (Steuerung von i)?', 
          answer: ['nein', 'no'], 
          hint: 'UIP: i = i* + Abwertungserw. Bei festem Kurs ist letzteres 0.', 
          explain: 'Da i = i* gelten muss, kann die Zentralbank den Zins nicht mehr unabhängig vom Ankerland setzen.', 
          traps: [{ pattern: 'ja', msg: 'Dies wäre nur bei Kapitalverkehrskontrollen möglich (Unmögliches Dreieck).' }] 
        }
      ]
    }
  ],
  zeitinkonsistenz: [
    {
      title: 'Barro-Gordon Nash-Gleichgewicht (High Difficulty)',
      context: 'Verlustfunktion L = pi^2 + (u - 0.03)^2. Phillipskurve u = 0.05 - (pi - pi_e). Ziel: u* = 0.03, u_n = 0.05.',
      steps: [
        { 
          q: 'Berechne die Inflationsrate pi im Nash-Gleichgewicht (Diskretion), wenn pi_e = pi.', 
          answer: ['0.02', '2%', '0,02'], 
          hint: 'Setze u in L ein, leite nach pi ab, setze dL/dpi = 0 und danach pi_e = pi.', 
          explain: 'L = pi^2 + (0.05 - pi + pi_e - 0.03)^2. Ableitung nach pi: 2pi + 2(0.02 - pi + pi_e)*(-1) = 0. Mit pi = pi_e folgt: 2pi - 0.04 + 2pi - 2pi = 0 => 2pi = 0.04 => pi = 0.02.', 
          traps: [{ pattern: '0', msg: 'Nullinflation wäre nur bei Commitment möglich.' }] 
        },
        { 
          q: 'Wie hoch ist die Arbeitslosigkeit u im Nash-Gleichgewicht?', 
          answer: ['0.05', '5%', '0,05'], 
          hint: 'Nutze die Phillipskurve mit pi = pi_e.', 
          explain: 'Da die Erwartungen rational sind (pi = pi_e), bleibt u auf dem natürlichen Niveau u_n = 0.05. Die Inflation ist nutzlos ("Inflation Bias").', 
          traps: [{ pattern: '0.03', msg: 'Das Ziel u* wird nicht erreicht, da private Akteure die Täuschung antizipieren.' }] 
        }
      ]
    }
  ],
  budgetrestriktion: [
    {
      title: 'Ricardianische Äquivalenz (High Difficulty)',
      context: 'Lebenseinkommen-Barwert = 200. Zinssatz r = 10%. Die Regierung senkt heute die Steuern um 10 € und finanziert dies durch Schulden.',
      steps: [
        { 
          q: 'Um wie viel müssen die Steuern in der nächsten Periode steigen, um die Schulden inkl. Zinsen zu tilgen?', 
          answer: ['11', '11.0'], 
          hint: 'Delta T2 = Delta T1 * (1 + r).', 
          explain: '10 € Ersparnis heute führen zu 10 * 1.1 = 11 € Mehrbelastung morgen.', 
          traps: [{ pattern: '10', msg: 'Zinsen müssen mitberücksichtigt werden.' }] 
        },
        { 
          q: 'Wie ändert sich der private Konsum heute, wenn die Konsumenten vorausschauend handeln?', 
          answer: ['0', 'unverändert', 'gar nicht'], 
          hint: 'Berechne die Änderung des Barwerts der lebenslangen Steuerlast.', 
          explain: 'Barwert-Änderung: -10 + 11/1.1 = 0. Da das Lebensvermögen gleich bleibt, ändert sich der Konsum nicht.', 
          traps: [{ pattern: '10', msg: 'Nur kurzsichtige Konsumenten würden die Steuersenkung sofort verkonsumieren.' }] 
        }
      ]
    }
  ],
  taylor_regel: [
    {
      title: 'Taylor-Prinzip',
      context: 'i = r_n + pi + a*(pi - pi*).',
      steps: [
        { 
          q: 'Welche Bedingung muss für den Koeffizienten a gelten, damit die Geldpolitik stabilisierend wirkt?', 
          answer: ['>0', 'positiv', 'a > 0'], 
          hint: 'Der Realzins r = i - pi muss steigen, wenn die Inflation steigt.', 
          explain: 'Wenn a > 0, führt ein Anstieg von pi um 1% zu einem Anstieg von i um mehr als 1%. Dadurch steigt der Realzins r.', 
          traps: [{ pattern: '<0', msg: 'Dann würde der Realzins bei Inflation sinken, was die Nachfrage weiter anheizt (Instabilität).' }] 
        }
      ]
    }
  ],
  geldmengen: [
    {
      title: 'Seigniorage-Laffer-Kurve',
      context: 'Realer Seigniorage-Ertrag S = g_M * (M/P). g_M ist das Geldmengenwachstum.',
      steps: [
        { 
          q: 'Warum sinkt S ab einer sehr hohen Inflationsrate wieder?', 
          answer: ['Geldnachfrage sinkt', 'reale Geldmenge sinkt'], 
          hint: 'Was machen Menschen mit ihrem Geld bei Hyperinflation?', 
          explain: 'Die Flucht aus der Währung reduziert die reale Geldmenge (Bemessungsgrundlage) schneller als der "Steuersatz" g_M steigt.', 
          traps: [{ pattern: 'Preise sinken', msg: 'Falsch, die Preise explodieren.' }] 
        }
      ]
    }
  ],
  aggregierte_pf: [
    {
      title: 'Produktionsfunktion und Kapitalintensität',
      context: 'Y = K^0.3 * N^0.7.',
      steps: [
        { 
          q: 'Wie lautet die intensive Form der Produktionsfunktion y = f(k)?', 
          answer: ['k^0.3', 'k^0,3'], 
          hint: 'Teile die gesamte Funktion durch N.', 
          explain: 'Y/N = K^0.3 * N^0.7 / N = K^0.3 / N^0.3 = (K/N)^0.3.', 
          traps: [{ pattern: 'k^0.7', msg: 'Der Exponent von K bestimmt die Krümmung der intensiven Form.' }] 
        }
      ]
    }
  ],
  solow_basis: [
    {
      title: 'Solow: Wachstum vs. Niveau',
      context: 'Im Steady State steigt die Sparquote s dauerhaft an.',
      steps: [
        { 
          q: 'Schritt 1 (Interpretation): Ändert dies die langfristige Wachstumsrate von y? (ja/nein)', 
          answer: ['nein', 'no', '0', 'null'], 
          hint: 'Denke an den Steady State ohne technischen Fortschritt.', 
          explain: 'Langfristig kehrt das System in einen neuen Steady State zurück, in dem y konstant ist (Wachstumsrate = 0).', 
          traps: [{ pattern: 'ja', msg: 'Nur das Niveau ändert sich langfristig, nicht die Wachstumsrate.' }] 
        },
        { 
          q: 'Schritt 2 (Decision): Was passiert mit dem Konsum c unmittelbar im Moment der Umstellung (t0)? (Symbol erlaubt)', 
          answer: ['sinkt', 'fällt', 'c ↓', '↓', 'negativ'], 
          hint: 'c = (1-s)y. Y ist in t0 noch fix.', 
          explain: 'Da y im Moment t0 durch den alten Kapitalstock fixiert ist, führt s↑ zwingend zu einem Rückgang von c = (1-s)y.', 
          traps: [{ pattern: 'steigt', msg: 'Der Konsum kann erst langfristig steigen, wenn y durch Akkumulation stark genug gewachsen ist.' }] 
        }
      ]
    }
  ],
  tech_fortschritt: [
    {
      title: 'Solow mit technischem Fortschritt (Numerical)',
      context: 'Y = K^0.5 * (AN)^0.5. s = 0.4, delta = 0.05, g_A = 0.03, g_N = 0.02.',
      steps: [
        { 
          q: 'Berechne die notwendigen Investitionen pro effektiver Arbeitseinheit (Rate).', 
          answer: ['0.1', '10%', '0,1'], 
          hint: 'Summe aus Abschreibung, techn. Fortschritt und Bevölkerungswachstum.', 
          explain: '0.05 + 0.03 + 0.02 = 0.10.', 
          traps: [{ pattern: '0.05', msg: 'Haben Sie g_A und g_N vergessen?' }] 
        },
        { 
          q: 'Berechne den Steady-State Kapitalstock pro effektiver Arbeitseinheit k**.', 
          answer: ['16', '16.0'], 
          hint: 's * sqrt(k) = (delta + g_A + g_N) * k.', 
          explain: '0.4 * sqrt(k) = 0.1 * k  => 4 = sqrt(k) => k = 16.', 
          traps: [{ pattern: '4', msg: 'Haben Sie vergessen, das Ergebnis zu quadrieren?' }] 
        }
      ]
    }
  ]
};

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});
