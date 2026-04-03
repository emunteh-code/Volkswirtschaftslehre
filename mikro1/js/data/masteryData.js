// ============================================================
// MASTERY DATA — Mikroökonomik I
// Learning objective checklists for all 33 concepts
// ============================================================

import { CHAPTERS } from './chapters.js';

export const MASTERY = {};

// Helper: create generic items for a concept
function createMasteryItems(conceptId, title, category) {
  const base = [
    `Die zentrale Definition von "${title}" erklären können`,
    `Formeln korrekt anwenden können`,
    `Typische Klausuraufgaben zu "${title}" lösen`,
    `Den Zusammenhang mit anderen Konzepten verstehen`
  ];
  // Add concept-specific refinements
  if (conceptId === 'budget') {
    return [
      'Budgetgerade explizit nach x₂ auflösen',
      'Steigung −p₁/p₂ bestimmen und interpretieren',
      'Wirkung von Preisänderung (Drehung) vs. Einkommensänderung (Verschiebung) unterscheiden',
      'Budgetmenge von KMM abgrenzen'
    ];
  }
  if (conceptId === 'grs') {
    return [
      'GRS via totales Differential herleiten',
      'GRS als MU₁/MU₂ berechnen',
      'GRS mit Preisverhältnis vergleichen und Reaktion ableiten',
      'Abnehmende GRS und konvexe IK verknüpfen'
    ];
  }
  if (conceptId === 'lagrange') {
    return [
      'Lagrange-Funktion korrekt aufstellen',
      'Alle 3 BEO ableiten und lösen',
      'λ als Grenznutzen des Einkommens interpretieren',
      'Optimum algebraisch berechnen'
    ];
  }
  if (conceptId === 'slutsky') {
    return [
      'Slutsky-Gleichung korrekt aufschreiben',
      'SE immer ≤ 0 begründen',
      'EE-Vorzeichen für normale und inferiore Güter ableiten',
      'Giffen-Bedingung formulieren'
    ];
  }
  if (conceptId === 'cobbd') {
    return [
      String.raw`CD-Nachfrage $x_i^* = \alpha_i \cdot m/p_i$ herleiten`,
      'Konstante Budgetanteile nachweisen',
      'Preis- und Einkommenselastizitäten berechnen',
      'Indirekte Nutzenfunktion ableiten'
    ];
  }
  if (conceptId === 'hausopt') {
    return [
      String.raw`Tangentialbedingung $GRS=p_1/p_2$ und Budget gemeinsam lösen`,
      'Optimum grafisch und algebraisch bestimmen',
      String.raw`$MU_i/p_i = \lambda$ interpretieren`,
      'Randlösungen erkennen'
    ];
  }
  if (conceptId === 'hicks') {
    return [
      'Hicks- von Marshallscher Nachfrage unterscheiden',
      'h_i via Ausgabenminimierung herleiten',
      String.raw`$\partial h_i/\partial p_i \le 0$ begründen`,
      String.raw`Identität $h_i(p,\bar{u}) = x_i(p,m)$ im Optimum verstehen`
    ];
  }
  if (conceptId === 'monopol') {
    return [
      'MR bei linearer Nachfrage ableiten',
      'Cournotschen Punkt (MR=MC) berechnen',
      'p_m von Nachfragekurve ablesen (nicht vom MR=MC-Punkt!)',
      'DWL als Harberger-Dreieck berechnen'
    ];
  }
  if (conceptId === 'kosten') {
    return [
      String.raw`Kostenminimierungsbedingung $GRTS=w/r$ aufstellen`,
      'Bedingte Faktornachfrage herleiten',
      String.raw`Kostenfunktion $C(w,r,y)$ bestimmen`,
      'Shephards Lemma für Produktion anwenden'
    ];
  }
  if (conceptId === 'markt') {
    return [
      'GG-Preis und -Menge berechnen',
      'KR, PR und W als Flächen berechnen',
      'DWL einer Steuer berechnen',
      'Effizienzbedingung MZB=p=MC begründen'
    ];
  }
  if (conceptId === 'cv_ev') {
    return [
      String.raw`$CV = e(p^0,u^0)-e(p^1,u^0)$ berechnen`,
      String.raw`$EV = e(p^0,u^1)-e(p^1,u^1)$ berechnen`,
      String.raw`Rangordnung $CV<\Delta KR<EV$ bei normalem Gut erklären`,
      'Unterschied CV/EV: altes vs. neues Nutzenniveau'
    ];
  }
  // Special cases for other concepts – add more if needed
  if (conceptId === 'kmm') {
    return [
      'KMM formal definieren können',
      'Konvexität der KMM beweisen',
      'KMM von Budgetmenge abgrenzen',
      'Nichtnegativität als zentrale Annahme erklären'
    ];
  }
  if (conceptId === 'praeferenz') {
    return [
      'Vollständigkeit und Transitivität definieren',
      'Strikte Präferenz aus schwacher herleiten',
      'Money-Pump-Argument erklären',
      'Indifferenzrelation formal ableiten'
    ];
  }
  if (conceptId === 'indiff') {
    return [
      'Indifferenzkurve als Niveaumenge definieren',
      'Eigenschaften (negativ geneigt, konvex, nicht schneidend) begründen',
      'Steigung = GRS interpretieren',
      'Leontief‑IK zeichnen können'
    ];
  }
  // For all other concepts, use specific items where available, else generic
  const specificItems = {
    ordinal: [
      String.raw`Positiv-monotone Transformation formal definieren ($f' > 0$)`,
      'GRS-Invarianz unter monotoner Transformation per Kettenregel beweisen',
      String.raw`Grenznutzen $MU_i$ von $GRS = MU_1/MU_2$ trennen (nur GRS ist invariant)`,
      'Ordinalität von Kardinalität präzise abgrenzen'
    ],
    psubst: [
      String.raw`Nutzenfunktion $u = a x_1 + b x_2$ aufschreiben und $GRS = a/b$ berechnen`,
      'Randlösung bei perfekten Substituten identifizieren (Eckoptimum)',
      String.raw`Fall $p_1/p_2 = a/b$ (Indifferenz auf ganzer Budgetgerade) erkennen`,
      'Preiselastizität der Nachfrage bei perfekten Substituten ableiten'
    ],
    pkomp: [
      String.raw`Leontief-Nutzenfunktion $u = \min(x_1/a, x_2/b)$ interpretieren`,
      String.raw`Optimale Kombination $x_1/a = x_2/b$ herleiten und einsetzen`,
      'Warum GRS an der Ecke nicht definiert ist, erklären',
      String.raw`Komplementäre Nachfrage $x_1^* = a \cdot m/(a p_1+b p_2)$ herleiten`
    ],
    homothet: [
      String.raw`Definition homothetischer Präferenzen ($GRS$ hängt nur von $x_2/x_1$ ab) erklären`,
      String.raw`Beweisen, dass Engel-Kurven Ursprungsgeraden sind ($\varepsilon_{x,m} = 1$)`,
      'Cobb-Douglas als Beispiel für Homothethie identifizieren',
      'Homothetie von allgemeiner Homogenität abgrenzen'
    ],
    marshall: [
      String.raw`Marshallsche Nachfrage $x_i^*(p,m)$ als Lösung des Nutzenmaximierungsproblems definieren`,
      String.raw`Homogenität Grad 0 formal nachweisen: $x_i(\lambda p,\lambda m) = x_i(p,m)$`,
      'Preis-Konsum-Kurve und Einkommens-Konsum-Kurve skizzieren und interpretieren',
      'Marshallsche von Hicksscher Nachfrage unterscheiden (m konstant vs. ū konstant)'
    ],
    elast: [
      String.raw`Preiselastizität $\varepsilon_{x,p} = (\partial x/\partial p)\cdot (p/x)$ berechnen und interpretieren`,
      String.raw`Einkommenselastizität $\varepsilon_{x,m}$ für normale, inferiore und Luxusgüter klassifizieren`,
      String.raw`Kreuzpreiselastizität $\varepsilon_{x_1,p_2}$ berechnen und Substitut/Komplement bestimmen`,
      String.raw`Zusammenhang Elastizität und Budgetanteil bei CD ableiten ($\varepsilon = -1$)`
    ],
    normal: [
      String.raw`Normales Gut: $\partial x_i/\partial m > 0$ definieren und grafisch zeigen`,
      String.raw`Inferiores Gut: $\partial x_i/\partial m < 0$ identifizieren und Beispiel nennen`,
      'Einkommens-Konsum-Kurve für normales vs. inferiores Gut skizzieren',
      'Giffen-Güter als extremen Spezialfall inferiorer Güter einordnen'
    ],
    shephard: [
      String.raw`Shephards Lemma formal aufschreiben: $\partial e/\partial p_i = h_i(p,\bar{u})$`,
      'Herleitung via Umhüllendensatz (Envelope Theorem) skizzieren',
      'Anwendung: Hickssche Nachfrage aus gegebener Ausgabenfunktion ableiten',
      'Symmetrie der Slutsky-Matrix als Folge von Shephards Lemma erklären'
    ],
    indnutzen: [
      String.raw`Indirekte Nutzenfunktion $v(p,m) = \max u(x)$ s.t. $px=m$ definieren`,
      String.raw`Roys Identität: $x_i^* = -(\partial v/\partial p_i)/(\partial v/\partial m)$ aufschreiben und anwenden`,
      String.raw`$v$ als fallend in $p_i$ und steigend in $m$ begründen`,
      String.raw`Zusammenhang zwischen $v(p,m)$ und $e(p,\bar{u})$ via Dualität erklären`
    ],
    lambda: [
      String.raw`Lagrange-Multiplikator $\lambda = \partial v/\partial m$ als Grenznutzen des Einkommens interpretieren`,
      String.raw`Aus BEO: $MU_i = \lambda p_i$ für alle $i$ herleiten und als Gleichgewichtsbedingung lesen`,
      String.raw`$\lambda$ unter positiv-monotoner Transformation: invariant? (Nein — $\lambda$ ändert sich)`,
      String.raw`Beziehung $\lambda = \partial e/\partial \bar{u}$ (Grenzausgaben für Nutzeneinheit) erklären`
    ],
    anfang: [
      String.raw`Anfangsausstattungsmodell: Haushalt besitzt Bündel $\omega = (\omega_1,\omega_2)$ statt Einkommen`,
      String.raw`Effektives Einkommen $m = p_1\omega_1 + p_2\omega_2$ bei gegebenen Preisen berechnen`,
      String.raw`Slutsky-Gleichung mit Anfangsausstattung: zusätzlicher Term $(\omega_i - x_i)\cdot \partial x/\partial m$`,
      'Bei Preiserhöhung des eigenen Gutes: Verkäufer profitieren, Käufer leiden'
    ],
    arbeit: [
      String.raw`Freizeit als Gut modellieren: Nutzen $u(C, l)$, Budget $p\cdot C = w\cdot (T-l) + V$`,
      'Lohnerhöhung: SE (Freizeit teurer → mehr Arbeit) vs. EE (reicher → mehr Freizeit)',
      'Rückwärts gebogene Arbeitsangebotskurve erklären (EE dominiert SE bei hohem w)',
      'Reservationslohn aus Indifferenz zwischen Arbeit und Nichtarbeit bestimmen'
    ],
    grts: [
      String.raw`$GRTS = MP_L/MP_K$ als Steigung der Isoquante definieren`,
      'Abnehmende GRTS mit konvexen Isoquanten verknüpfen',
      String.raw`$GRTS$ für $f = L^a \cdot K^b$ berechnen: $GRTS = (a/b)\cdot (K/L)$`,
      String.raw`$GRTS$ im Optimum: $GRTS = w/r$ (Kostenminimierungsbedingung)`
    ],
    skalener: [
      String.raw`Prüfung auf Skalenerträge: $f(\lambda L,\lambda K) = \lambda^r \cdot f(L,K)$ — $r>1$, $r=1$, $r<1$ klassifizieren`,
      String.raw`Bei CD $f=L^a \cdot K^b$ gilt $r = a+b$ — Exponentensumme bestimmt Skalenverhalten`,
      'Steigende Skalenerträge und Subadditivität der Kostenfunktion verknüpfen',
      'CES-Funktion als Beispiel für beliebige Skalenerträge verwenden'
    ],
    gk_dk: [
      String.raw`Grenzkosten $GK = dC/dy$ und Durchschnittskosten $DK = C/y$ berechnen`,
      'GK-Kurve schneidet DK-Kurve im Minimum der DK — geometrisch begründen',
      'Kurzfristige vs. langfristige Kostenkurven unterscheiden (Fixkosten)',
      String.raw`Aus Kostenfunktion $C(y) = ay^2 + by + c$: $GK$, $DK$, $AVC$, $AFC$ bestimmen`
    ],
    ces_u: [
      String.raw`CES-Nutzenfunktion $u = (a x_1^\rho + b x_2^\rho)^{1/\rho}$ aufschreiben und Parameter benennen`,
      String.raw`Substitutionselastizität $\sigma = 1/(1-\rho)$ herleiten und interpretieren`,
      String.raw`Grenzfälle: $\rho \to 1$ (perfekte Substitute), $\rho \to -\infty$ (Leontief), $\rho \to 0$ (Cobb-Douglas)`,
      String.raw`CES-Nachfrage $x_1^*/x_2^* = (a/b)^\sigma \cdot (p_2/p_1)^\sigma$ berechnen`
    ],
    ausgaben: [
      String.raw`Ausgabenfunktion $e(p,\bar{u}) = \min\{px : u(x)\ge \bar{u}\}$ formal definieren`,
      String.raw`$e$ als steigend in $p$ und steigend in $\bar{u}$ begründen`,
      String.raw`Shephards Lemma anwenden: $\partial e/\partial p_i = h_i(p,\bar{u})$`,
      String.raw`Dualität: $e(p, v(p,m)) = m$ und $v(p, e(p,\bar{u})) = \bar{u}$ nachvollziehen`
    ],
    produktion: [
      String.raw`Produktionsfunktion $f(L,K)$ definieren und Isoquante zeichnen`,
      String.raw`Grenzprodukt $MP_L = \partial f/\partial L$ und $MP_K = \partial f/\partial K$ berechnen`,
      'Abnehmende Grenzerträge von sinkenden Skalenerträgen unterscheiden',
      String.raw`Kostenfunktion $C(w,r,y)$ durch Kostenminimierung ableiten`
    ],
    gewinn: [
      String.raw`Gewinnfunktion $\pi(y) = p\cdot y - C(y)$ aufstellen und maximieren`,
      String.raw`Optimalbedingung $p = GK$ herleiten und begründen (Preisnehmer)`,
      String.raw`Gewinne und Verluste im Diagramm (Rechteck zwischen $p$ und $DK$) ablesen`,
      String.raw`Nullgewinnbedingung $p = DK_{\min}$ im langfristigen Wettbewerbsgleichgewicht ableiten`
    ]
  };
  if (specificItems[conceptId]) return specificItems[conceptId];
  return base;
}

// Populate MASTERY for all CHAPTERS
CHAPTERS.forEach(ch => {
  if (!MASTERY[ch.id]) {
    MASTERY[ch.id] = createMasteryItems(ch.id, ch.title, ch.cat);
  }
});
