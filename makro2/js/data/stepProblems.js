// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD: PRECISION UNDER UNCERTAINTY
// Interpretation -> Decision -> Execution -> Validation
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'Realwechselkurs-Dynamik',
      context: 'Inland hat Inflation pi = 5%, Ausland pi* = 2%. Nominalkurs E (Mengennotierung) sinkt um 1%.',
      steps: [
        { 
          q: 'Interpretation: Liegt nominal eine Auf- oder Abwertung vor? (Symbol erlaubt)', 
          answer: ['abwertung', '↓', 'e ↓', 'nominal depreciation'], 
          hint: 'Ein Sinken von E in Mengennotierung bedeutet...', 
          explain: 'E sinkt ⟹ Abwertung der heimischen Währung.', 
          traps: [] 
        },
        { 
          q: 'Decision: Wird die reale Aufwertung größer oder kleiner als die nominale Änderung sein? (Wirkung der Inflationsdifferenz)', 
          answer: ['größer', 'verstärkt', 'higher'], 
          hint: 'epsilon = EP/P*. pi > pi* wirkt wie eine...', 
          explain: 'Die höhere Inlandsinflation verteuert Inlandsgüter zusätzlich. pi - pi* = +3%.', 
          traps: [] 
        },
        { 
          q: 'Execution: Berechne die prozentuale Änderung von epsilon.', 
          answer: ['2', '2%', '0.02', '0,02'], 
          hint: '%delta epsilon ≈ %delta E + pi - pi*.', 
          explain: '-1% + 5% - 2% = +2%.', 
          traps: [] 
        },
        { 
          q: 'Validation: Entspricht ein Anstieg von epsilon um 2% einer Verbesserung oder Verschlechterung der Wettbewerbsfähigkeit?', 
          answer: ['verschlechterung', 'worse'], 
          hint: 'epsilon ↑ ⟹ Inlandsgüter werden relativ teurer.', 
          explain: 'Eine reale Aufwertung verschlechtert die Wettbewerbsfähigkeit.', 
          traps: [] 
        }
      ]
    }
  ],
  zinsparitaet: [
    {
      title: 'UIP-Verteidigung',
      context: 'Weltzins i* = 2%. Erwarteter Kurs E^e = 0.97. Aktueller Kurs E = 1.0 (Mengennotierung).',
      steps: [
        { 
          q: 'Interpretation: Liegt auf dem Devisenmarkt Auf- oder Abwertungsdruck vor?', 
          answer: ['abwertungsdruck', 'abwertung', 'depreciation pressure', 'druck nach unten'], 
          hint: 'E^e (0.97) < E (1.0).', 
          explain: 'Der Markt erwartet einen Wertverlust der Währung.', 
          traps: [] 
        },
        { 
          q: 'Decision: Um den Kurs bei E=1.0 zu fixieren, muss die ZB den Zins i im Vergleich zu i* erhöhen oder senken?', 
          answer: ['erhöhen', 'i ↑', '↑', 'increase'], 
          hint: 'UIP: i = i* - (E^e - E)/E.', 
          explain: 'Um den Abwertungsdruck zu kompensieren, muss die heimische Anlage attraktiver werden (i > i*).', 
          traps: [{ pattern: 'senken', msg: 'Falsch. Niedrigere Zinsen würden den Kapitalabfluss beschleunigen.' }] 
        },
        { 
          q: 'Execution: Berechne den notwendigen Zins i.', 
          answer: ['5', '5%', '0.05', '0,05'], 
          hint: 'i = 0.02 - (0.97 - 1.0)/1.0.', 
          explain: 'i = 0.02 + 0.03 = 0.05 = 5%.', 
          traps: [] 
        }
      ]
    }
  ],
  mundell_fleming: [
    {
      title: 'Fiskalpolitik (Flexibel)',
      context: 'Flexible Wechselkurse, UIP gilt. Staatsausgaben G steigen.',
      steps: [
        { 
          q: 'Interpretation: Welches Markt-Signal wird durch G↑ unmittelbar ausgelöst? (Zins-Effekt)', 
          answer: ['zins steigt', 'i ↑', '↑'], 
          hint: 'G↑ ⟹ Y↑ ⟹ Geldnachfrage↑ ⟹ ...', 
          explain: 'Expansionäre Fiskalpolitik erhöht den inländischen Zins.', 
          traps: [] 
        },
        { 
          q: 'Decision: Führt der Zinsanstieg bei flexiblen Kursen zu Kapitalimport oder -export?', 
          answer: ['kapitalimport', 'zufluss', 'inflow'], 
          hint: 'Heimische Anlagen werden attraktiver.', 
          explain: 'Höhere Zinsen locken ausländisches Kapital an.', 
          traps: [] 
        },
        { 
          q: 'Execution: Welche Auswirkung hat dies auf den Wechselkurs E?', 
          answer: ['aufwertung', 'e ↑', '↑', 'appreciation'], 
          hint: 'Nachfrage nach heimischer Währung steigt.', 
          explain: 'Der Kapitalzufluss führt zu einer sofortigen Aufwertung (E↑).', 
          traps: [] 
        },
        { 
          q: 'Validation: Wie reagiert Y langfristig im Mundell-Fleming-Modell (LM* vertikal)?', 
          answer: ['unverändert', 'gar nicht', 'konstant', '0'], 
          hint: 'Betrachte das Crowding-out über den Wechselkurs.', 
          explain: 'Die Aufwertung senkt NX exakt so weit, dass der G-Effekt auf Y neutralisiert wird.', 
          traps: [] 
        }
      ]
    }
  ],
  solow_basis: [
    {
      title: 'Solow-Grenzwerte',
      context: 'Produktion y = k^0.5. Sparquote s steigt dauerhaft.',
      steps: [
        { 
          q: 'Interpretation: Wie verändert sich der Kapitalstock k unmittelbar im Zeitpunkt t0?', 
          answer: ['gar nicht', 'konstant', 'unverändert', '0'], 
          hint: 'Ist Kapital eine Bestandsgröße oder eine Stromgröße?', 
          explain: 'Kapital kann sich nicht instantan ändern. Akkumulation braucht Zeit.', 
          traps: [] 
        },
        { 
          q: 'Decision: Führt s↑ bei konstantem y(t0) zu steigendem oder sinkendem Konsum c(t0)?', 
          answer: ['sinkend', 'c ↓', '↓', 'abnahme'], 
          hint: 'c = (1-s)y.', 
          explain: 'Da y fix ist, verdrängt die höhere Sparquote den Konsum sofort.', 
          traps: [] 
        },
        { 
          q: 'Execution: Falls k bereits jenseits der Goldenen Regel liegt (k > k_GR), wie entwickelt sich c langfristig?', 
          answer: ['sinkt', 'fällt', 'c ↓'], 
          hint: 'Überakkumulation.', 
          explain: 'In der Überakkumulation senkt jedes weitere Kapital den Steady-State Konsum.', 
          traps: [{ pattern: 'steigt', msg: 'CONTRADICTION: Bei Überakkumulation ist mehr Sparen wohlfahrtssenkend!' }] 
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
