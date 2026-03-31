// ============================================================
// INTUITION DATA — Mathematik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const INTUITION = {
  funktionen: {
    core: 'Funktionen sind Modelle der Realität. Sie zeigen, wie ein Input (z.B. Werbebudget) einen Output (z.B. Absatz) bestimmt.',
    analogy: 'Eine Fernbedienung: Man drückt auf einen Knopf (x) und am Fernseher passiert etwas Bestimmtes (y).',
    exam: [
      { if: 'Lineare Funktion', then: 'Konstante Steigung. a gibt die Änderung pro Einheit an.' },
      { if: 'Log-Skala', then: 'Misst relative (prozentuale) Änderungen.' }
    ],
    bridge: 'Ohne Funktionen gäbe es keine ökonomische Vorhersage.'
  },
  ableitung: {
    core: 'Die Ableitung ist die Lupe der Mathematik. Sie zeigt uns, was "im Kleinen" (marginal) passiert.',
    analogy: 'Der Tacho im Auto: Er zeigt nicht an, wie weit man gefahren ist, sondern wie schnell man sich in diesem Moment bewegt.',
    exam: [
      { if: 'Grenznutzen MU', then: 'Ableitung der Nutzenfunktion nach der Menge.' },
      { if: 'Kettenregel nötig', then: 'Funktion in einer Funktion (z.B. Wurzel aus einem Term).' }
    ],
    bridge: 'Ableitungen machen marginale Entscheidungen berechenbar.'
  },
  optimierung: {
    core: 'Optimieren heißt, den besten Kompromiss finden. Am Gipfel (Maximum) ist die Steigung immer Null.',
    analogy: 'Bergsteigen: Wenn man ganz oben steht, geht es in jede Richtung erst einmal nur bergab.',
    exam: [
      { if: 'Maximum gesucht', then: 'BEO: f\'(x)=0 und BZO: f\'\'(x)<0.' },
      { if: 'Minimum gesucht', then: 'BEO: f\'(x)=0 und BZO: f\'\'(x)>0.' }
    ],
    bridge: 'Nullstellen der Ableitung sind die Kandidaten für das Optimum.'
  }
};
