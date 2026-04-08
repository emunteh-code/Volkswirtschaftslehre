// ============================================================
// INTUITION DATA — Mathematik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const INTUITION = {
  funktionen_grundlagen: {
    core: 'Funktionen sind Modelle der Realität. Sie zeigen, wie ein Input (z.B. Werbebudget) einen Output (z.B. Absatz) bestimmt.',
    analogy: 'Eine Fernbedienung: Man drückt auf einen Knopf (x) und am Fernseher passiert etwas Bestimmtes (y).',
    exam: [
      { if: 'Lineare Funktion', then: 'Konstante Steigung. a gibt die Änderung pro Einheit an.' },
      { if: 'Potenz / Cobb-Douglas', then: 'Exponenten bestimmen Elastizitäten und Skalenerträge.' },
    ],
    bridge: 'Ohne Funktionen gäbe es keine ökonomische Vorhersage.',
  },
  logarithmus_umkehr: {
    core: 'Logarithmen machen aus Produkten Summen; Umkehrfunktionen tauschen die Rolle von abhängiger und unabhängiger Variable.',
    analogy: 'Ein Thermometer mit zwei Skalen: dieselbe Temperatur, aber unterschiedliche Zahlen — je nachdem, welche Skala du liest.',
    exam: [
      { if: 'Log-Skala', then: 'Misst relative (prozentuale) Änderungen.' },
      { if: 'Inverse Nachfrage P(Q)', then: 'Achsen und Steigung nicht mit Q(P) verwechseln.' },
    ],
    bridge: 'Log und Umkehr verbinden Wachstumsraten mit linearen Modellen und korrekten Grafikablesungen.',
  },
  ableitung: {
    core: 'Die Ableitung ist die Lupe der Mathematik. Sie zeigt uns, was "im Kleinen" (marginal) passiert.',
    analogy: 'Der Tacho im Auto: Er zeigt nicht an, wie weit man gefahren ist, sondern wie schnell man sich in diesem Moment bewegt.',
    exam: [
      { if: 'Grenznutzen MU', then: 'Ableitung der Nutzenfunktion nach der Menge.' },
      { if: 'Kettenregel nötig', then: 'Funktion in einer Funktion (z.B. Wurzel aus einem Term).' },
    ],
    bridge: 'Ableitungen machen marginale Entscheidungen berechenbar.',
  },
  optimierung: {
    core: 'Optimieren heißt, den besten Kompromiss finden. Am Gipfel (Maximum) ist die Steigung immer Null.',
    analogy: 'Bergsteigen: Wenn man ganz oben steht, geht es in jede Richtung erst einmal nur bergab.',
    exam: [
      { if: 'Maximum gesucht', then: 'BEO: f\'(x)=0 und BZO: f\'\'(x)<0.' },
      { if: 'Minimum gesucht', then: 'BEO: f\'(x)=0 und BZO: f\'\'(x)>0.' },
    ],
    bridge: 'Nullstellen der Ableitung sind die Kandidaten für das Optimum.',
  },
  lagrange: {
    core: 'Lagrange fasst Zielfunktion und Nebenbedingung in einem System — der Multiplikator misst den Wert einer marginalen Lockerung der NB.',
    analogy: 'Ein Budget: Du willst Nutzen maximieren, darfst aber nicht über dein Einkommen hinaus — λ sagt, was ein Euro mehr wert wäre.',
    exam: [
      { if: 'Dritte BEO vergessen', then: 'Ohne g(x,y)=c liegt die Lösung nicht auf der Restriktion.' },
      { if: 'Tangentialbedingung', then: 'GRS = Preisverhältnis aus den partiellen Ableitungen.' },
    ],
    bridge: 'Lagrange verbindet multivariate Ableitungen mit ökonomischen Schattenpreisen.',
  },
  linalg_matrizen: {
    core: 'Matrizen fassen viele lineare Beziehungen gleichzeitig; die Reihenfolge bei Produkten ist entscheidend.',
    analogy: 'Ein Tabellenkalkulationsblatt: Zeilen und Spalten müssen zusammenpassen, sonst gibt es #WERT!.',
    exam: [
      { if: 'AB vs. BA', then: 'Im Allgemeinen nicht vertauschbar; (AB)^T = B^T A^T.' },
    ],
    bridge: 'Matrixalgebra ist die Notation hinter LGS und Regressionsdesign.',
  },
  linalg_det_inverse_lgs: {
    core: 'Determinante und Rang entscheiden, ob ein System eindeutig lösbar ist; die Inverse löst Ax=b wie „durch A teilen“.',
    analogy: 'Ein Schloss: Nur wenn der Schlüssel passt (det ≠ 0), gibt es genau eine passende Lösung.',
    exam: [
      { if: 'det(A)=0', then: 'Keine Inverse — entweder keine oder unendlich viele Lösungen.' },
      { if: 'OLS in Matrixform', then: '(X\'X)^{-1} setzt invertierbare X\'X voraus.' },
    ],
    bridge: 'Dieselbe Logik verbindet Kleinsysteme in der Übung mit großen Datenmatrizen.',
  },
  integral: {
    core: 'Integration summiert infinitesimal kleine Stücke; der Hauptsatz verbindet Fläche und Stammfunktion.',
    analogy: 'Kilometerzähler vs. Tacho: Der eine akkumuliert, der andere gibt die momentane Änderung — Ableitung und Integral sind Gegenstücke.',
    exam: [
      { if: 'Konsumentenrente', then: 'Fläche unter P(Q) minus Rechteck p*Q*.' },
      { if: '∫(1/x)', then: 'Stammfunktion ln|x|, Definitionsbereich beachten.' },
    ],
    bridge: 'Integrale machen Renten und kumulierte Ströme aus Kurvenverläufen.',
  },
};
