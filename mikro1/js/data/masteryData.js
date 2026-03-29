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
      'CD-Nachfrage x_i* = α_i·m/p_i herleiten',
      'Konstante Budgetanteile nachweisen',
      'Preis- und Einkommenselastizitäten berechnen',
      'Indirekte Nutzenfunktion ableiten'
    ];
  }
  if (conceptId === 'hausopt') {
    return [
      'Tangentialbedingung GRS=p₁/p₂ und Budget gemeinsam lösen',
      'Optimum grafisch und algebraisch bestimmen',
      'MU_i/p_i = λ interpretieren',
      'Randlösungen erkennen'
    ];
  }
  if (conceptId === 'hicks') {
    return [
      'Hicks- von Marshallscher Nachfrage unterscheiden',
      'h_i via Ausgabenminimierung herleiten',
      '∂h_i/∂p_i ≤ 0 begründen',
      'Identität h_i(p,ū) = x_i(p,m) im Optimum verstehen'
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
      'Kostenminimierungsbedingung GRTS=w/r aufstellen',
      'Bedingte Faktornachfrage herleiten',
      'Kostenfunktion C(w,r,y) bestimmen',
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
      'CV = e(p⁰,u⁰)−e(p¹,u⁰) berechnen',
      'EV = e(p⁰,u¹)−e(p¹,u¹) berechnen',
      'Rangordnung CV<ΔKR<EV bei normalem Gut erklären',
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
      'Positiv-monotone Transformation formal definieren (f\' > 0)',
      'GRS-Invarianz unter monotoner Transformation per Kettenregel beweisen',
      'Grenznutzen MUᵢ von GRS = MU₁/MU₂ trennen (nur GRS ist invariant)',
      'Ordinalität von Kardinalität präzise abgrenzen'
    ],
    psubst: [
      'Nutzenfunktion u = ax₁ + bx₂ aufschreiben und GRS = a/b berechnen',
      'Randlösung bei perfekten Substituten identifizieren (Eckoptimum)',
      'Fall p₁/p₂ = a/b (Indifferenz auf ganzer Budgetgerade) erkennen',
      'Preiselastizität der Nachfrage bei perfekten Substituten ableiten'
    ],
    pkomp: [
      'Leontief-Nutzenfunktion u = min(x₁/a, x₂/b) interpretieren',
      'Optimale Kombination x₁/a = x₂/b herleiten und einsetzen',
      'Warum GRS an der Ecke nicht definiert ist, erklären',
      'Komplementäre Nachfrage x₁* = a·m/(ap₁+bp₂) herleiten'
    ],
    homothet: [
      'Definition homothetischer Präferenzen (GRS hängt nur von x₂/x₁ ab) erklären',
      'Beweisen, dass Engel-Kurven Ursprungsgeraden sind (Einkommenselastizität = 1)',
      'Cobb-Douglas als Beispiel für Homothethie identifizieren',
      'Homothetie von allgemeiner Homogenität abgrenzen'
    ],
    marshall: [
      'Marshallsche Nachfrage xᵢ*(p,m) als Lösung des Nutzenmaximierungsproblems definieren',
      'Homogenität Grad 0 formal nachweisen: xᵢ(λp,λm) = xᵢ(p,m)',
      'Preis-Konsum-Kurve und Einkommens-Konsum-Kurve skizzieren und interpretieren',
      'Marshallsche von Hicksscher Nachfrage unterscheiden (m konstant vs. ū konstant)'
    ],
    elast: [
      'Preiselastizität εₓ,ₚ = (∂x/∂p)·(p/x) berechnen und interpretieren',
      'Einkommenselastizität εₓ,ₘ für normale, inferiore und Luxusgüter klassifizieren',
      'Kreuzpreiselastizität εₓ₁,ₚ₂ berechnen und Substitut/Komplement bestimmen',
      'Zusammenhang Elastizität und Budgetanteil bei CD ableiten (ε = −1)'
    ],
    normal: [
      'Normales Gut: ∂xᵢ/∂m > 0 definieren und grafisch zeigen',
      'Inferiores Gut: ∂xᵢ/∂m < 0 identifizieren und Beispiel nennen',
      'Einkommens-Konsum-Kurve für normales vs. inferiores Gut skizzieren',
      'Giffen-Güter als extremen Spezialfall inferiorer Güter einordnen'
    ],
    shephard: [
      'Shephards Lemma formal aufschreiben: ∂e/∂pᵢ = hᵢ(p,ū)',
      'Herleitung via Umhüllendensatz (Envelope Theorem) skizzieren',
      'Anwendung: Hickssche Nachfrage aus gegebener Ausgabenfunktion ableiten',
      'Symmetrie der Slutsky-Matrix als Folge von Shephards Lemma erklären'
    ],
    indnutzen: [
      'Indirekte Nutzenfunktion v(p,m) = max u(x) s.t. px=m definieren',
      'Roys Identität: xᵢ* = −(∂v/∂pᵢ)/(∂v/∂m) aufschreiben und anwenden',
      'v als fallend in pᵢ und steigend in m begründen',
      'Zusammenhang zwischen v(p,m) und e(p,ū) via Dualität erklären'
    ],
    lambda: [
      'Lagrange-Multiplikator λ = ∂v/∂m als Grenznutzen des Einkommens interpretieren',
      'Aus BEO: MUᵢ = λpᵢ für alle i herleiten und als Gleichgewichtsbedingung lesen',
      'λ unter positiv-monotoner Transformation: invariant? (Nein — λ ändert sich)',
      'Beziehung λ = ∂e/∂ū (Grenzausgaben für Nutzeneinheit) erklären'
    ],
    anfang: [
      'Anfangsausstattungsmodell: Haushalt besitzt Bündel ω = (ω₁,ω₂) statt Einkommen',
      'Effektives Einkommen m = p₁ω₁ + p₂ω₂ bei gegebenen Preisen berechnen',
      'Slutsky-Gleichung mit Anfangsausstattung: zusätzlicher Term (ωᵢ − xᵢ)·∂x/∂m',
      'Bei Preiserhöhung des eigenen Gutes: Verkäufer profitieren, Käufer leiden'
    ],
    arbeit: [
      'Freizeit als Gut modellieren: Nutzen u(C, l), Budget p·C = w·(T−l) + V',
      'Lohnerhöhung: SE (Freizeit teurer → mehr Arbeit) vs. EE (reicher → mehr Freizeit)',
      'Rückwärts gebogene Arbeitsangebotskurve erklären (EE dominiert SE bei hohem w)',
      'Reservationslohn aus Indifferenz zwischen Arbeit und Nichtarbeit bestimmen'
    ],
    grts: [
      'GRTS = MP_L/MP_K als Steigung der Isoquante definieren',
      'Abnehmende GRTS mit konvexen Isoquanten verknüpfen',
      'GRTS für f = L^a·K^b berechnen: GRTS = (a/b)·(K/L)',
      'GRTS im Optimum: GRTS = w/r (Kostenminimierungsbedingung)'
    ],
    skalener: [
      'Prüfung auf Skalenerträge: f(λL,λK) = λ^r·f(L,K) — r>1, r=1, r<1 klassifizieren',
      'Bei CD f=L^a·K^b gilt r = a+b — Exponentensumme bestimmt Skalenverhalten',
      'Steigende Skalenerträge und Subadditivität der Kostenfunktion verknüpfen',
      'CES-Funktion als Beispiel für beliebige Skalenerträge verwenden'
    ],
    gk_dk: [
      'Grenzkosten GK = dC/dy und Durchschnittskosten DK = C/y berechnen',
      'GK-Kurve schneidet DK-Kurve im Minimum der DK — geometrisch begründen',
      'Kurzfristige vs. langfristige Kostenkurven unterscheiden (Fixkosten)',
      'Aus Kostenfunktion C(y) = ay² + by + c: GK, DK, AVC, AFC bestimmen'
    ],
    ces_u: [
      'CES-Nutzenfunktion u = (ax₁ᵖ + bx₂ᵖ)^(1/p) aufschreiben und Parameter benennen',
      'Substitutionselastizität σ = 1/(1−ρ) herleiten und interpretieren',
      'Grenzfälle: ρ→1 (perfekte Substitute), ρ→−∞ (Leontief), ρ→0 (Cobb-Douglas)',
      'CES-Nachfrage x₁*/x₂* = (a/b)^σ·(p₂/p₁)^σ berechnen'
    ],
    ausgaben: [
      'Ausgabenfunktion e(p,ū) = min{px : u(x)≥ū} formal definieren',
      'e als steigend in p und steigend in ū begründen',
      'Shephards Lemma anwenden: ∂e/∂pᵢ = hᵢ(p,ū)',
      'Dualität: e(p, v(p,m)) = m und v(p, e(p,ū)) = ū nachvollziehen'
    ],
    produktion: [
      'Produktionsfunktion f(L,K) definieren und Isoquante zeichnen',
      'Grenzprodukt MPₗ = ∂f/∂L und MPₖ = ∂f/∂K berechnen',
      'Abnehmende Grenzerträge von sinkenden Skalenerträgen unterscheiden',
      'Kostenfunktion C(w,r,y) durch Kostenminimierung ableiten'
    ],
    gewinn: [
      'Gewinnfunktion π(y) = p·y − C(y) aufstellen und maximieren',
      'Optimalbedingung p = GK herleiten und begründen (Preisnehmer)',
      'Gewinne und Verluste im Diagramm (Rechteck zwischen p und DK) ablesen',
      'Nullgewinnbedingung p = DK_min im langfristigen Wettbewerbsgleichgewicht ableiten'
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
