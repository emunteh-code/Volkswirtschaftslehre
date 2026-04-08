// ============================================================
// MASTERY DATA — Makroökonomik II
// Learning objective checklists — one block per CHAPTERS id (plus createMasteryItems fallback)
// ============================================================

import { CHAPTERS } from './chapters.js';

export const MASTERY = {};

function createMasteryItems(conceptId, title) {
  const base = [
    `Die zentrale Definition von "${title}" erklären können`,
    `Formeln korrekt anwenden können`,
    `Typische Klausuraufgaben zu "${title}" lösen`,
    `Den Zusammenhang mit anderen Konzepten verstehen`
  ];

  const specific = {
    wechselkurs: [
      'Nominalen und realen Wechselkurs definieren und unterscheiden',
      'Realen WK ε = EP/P* berechnen und interpretieren',
      'Absolute und relative KKP formal aufschreiben',
      'Aufwertung vs. Abwertung: Richtung und ökonomische Konsequenzen ableiten'
    ],
    zinsparitaet: [
      'Ungedeckte Zinsparität (exakt und Approximation) aufschreiben',
      'Gleichgewichtigen WK aus UZP-Formel berechnen',
      'Wirkung einer Zinserhöhung auf E über ZP erklären',
      'Unterschied gedeckte vs. ungedeckte ZP erläutern'
    ],
    zahlungsbilanz: [
      'Drei Konten der ZB benennen und Buchungsprinzip erklären',
      'ZB-Identität CA + KA + ΔR = 0 anwenden',
      'NX = S − I herleiten und interpretieren',
      'Leistungsbilanzdefizit mit Kapitalzufluss verknüpfen'
    ],
    marshall_lerner: [
      'Marshall-Lerner-Bedingung |η_X| + |η_M| > 1 erklären',
      'Prüfen, ob ML-Bedingung erfüllt ist (Zahlenbeispiel)',
      'J-Kurve zeichnen und kurzfristige Verschlechterung erklären',
      'Wert- vs. Mengeneffekt einer Abwertung unterscheiden'
    ],
    offene_is: [
      'IS-Gleichung der offenen VW vollständig aufschreiben',
      'Multiplikator der offenen VW berechnen und mit geschlossener VW vergleichen',
      'IS-Verschiebungen bei Y*, ε und G identifizieren',
      'Importleck-Effekt auf Multiplikator erklären'
    ],
    nettoexporte: [
      'NX-Funktion mit allen drei Argumenten (Y, Y*, ε) aufschreiben',
      'Transmissionskette i → E → ε → NX erklären',
      'NX bei gegebenen Werten berechnen',
      'Einkommenseffekt auf Importe bei Fiskalpolitik bestimmen'
    ],
    mundell_fleming: [
      'Die drei Gleichungen des MF-Modells (IS, LM, ZP) aufschreiben',
      'Fiskalpolitik bei flexiblem WK: Mechanismus und Ergebnis (ΔY = 0) erklären',
      'Geldpolitik bei flexiblem WK: Doppelter Wirkungskanal erläutern',
      'Fiskalpolitik bei festem WK: Volles Multiplikatoreffekt begründen',
      'ZP-Kurve: ZB-Gleichgewicht im (Y,i)-Raum, positive Steigung und Lage relativ zur ZP begründen',
      'Mundell-Fleming-Theorem und Trilemma der offenen VW knapp formulieren (Regime zuerst)'
    ],
    wk_regime: [
      'Spektrum der WK-Regime von free float bis Currency Board benennen',
      'Vor- und Nachteile fixer und flexibler WK aufzählen',
      'Anpassung bei negativem Schock je nach Regime vergleichen',
      'Trilemma-Konsequenz eines Currency Board ableiten',
      'Mundell-OWR-Kriterien und typische Bewertungsfragen zur Währungsunion (aus dem Kursstoff)'
    ],
    wk_krisen: [
      'Erste Generation: fundamentale Ursache und Mechanismus (Reservenerschöpfung) erklären',
      'Zweite Generation: selbsterfüllende Erwartungen und multiple Gleichgewichte erläutern',
      'EWS-Krise 1992 in Grundzügen beschreiben',
      'Unterschied zwischen den Krisentypen für Klausur formulieren'
    ],
    zeitinkonsistenz: [
      'Zeitinkonsistenzproblem im zweistufigen Spiel erklären',
      'Erwartungsaugmentierte Phillipskurve aufschreiben',
      'Inflationsbias im Nash-GG ableiten',
      'Drei Lösungsansätze (Regel, unabh. ZB, Reputation) benennen'
    ],
    barro_gordon: [
      'ZB-Verlustfunktion L = ½χπ² + ½λ(u−u*)² aufschreiben',
      'Inflationsbias πD = αλ(u_n − u*)/χ berechnen',
      'Regelgebundene Lösung mit diskretionärer Lösung vergleichen',
      'Rogoffs konservativer ZB-Chef: Wirkung von ↑χ auf Inflationsbias'
    ],
    schuldenquote_dynamik: [
      'Dynamik der Schuldenquote Δb ≈ (r−g)b − ps ableiten',
      'Stabilitätsbedingung ps* = (r−g)b berechnen',
      'Schneeball-Effekt bei r > g erklären',
      '"Herauswachsen" bei r < g beschreiben',
      'Periodenbudgetrestriktion und Primär- vs. Gesamtdefizit trennen',
      'Maastricht-Referenzwerte (3%/60%) als Stabilisierungslogik erläutern',
      'Ricardianische Äquivalenz: Kernidee und wichtigste Voraussetzungen nennen'
    ],
    schuldenfinanzierung_monetarisierung: [
      'Kreditfinanzierung und Monetarisierung makroökonomisch unterscheiden',
      'Monetarisierung im IS-LM-PC-Zusammenhang als eigenen Übertragungskanal erklären',
      'Finanzierungsmodi als Trade-off zwischen Schulden- und Inflationspfad bewerten',
      'Uebungsblatt-6-typische Vergleichsfragen argumentativ sauber lösen'
    ],
    taylor_regel: [
      'Taylor-Regel vollständig aufschreiben (mit r*, π*, a, b)',
      'Taylor-Prinzip: a > 0 → realer Zins steigt bei Inflation',
      'Leitzins für gegebene π und Outputlücke berechnen',
      'Konsequenz von a ≤ 0 (Instabilität) erklären',
      'Inflation Targeting: Zinsreaktion an Zielinflation; unkonventionelle Kanäle an der ZLB grob zuordnen'
    ],
    aggregierte_pf: [
      'Aggregierte PF Y = A·F(K,N) mit Eigenschaften aufschreiben',
      'CRS, abnehmende Grenzerträge, Inada-Bedingungen nennen',
      'Cobb-Douglas Y = AK^α N^(1-α): CRS beweisen',
      'Pro-Kopf-Form y = Af(k) herleiten',
      'Stilisierte Wachstumsfakten und Wachstumszerlegung grob zuordnen (Kursbezug)'
    ],
    solow_basis: [
      'Kapitalakkumulationsgleichung k̇ = sf(k) − δk erklären',
      'ṅk bei gegebenen Werten berechnen und interpretieren',
      'Grafisch: Schnittpunkt sf(k) und δk als Steady State identifizieren',
      'Warum ohne TF kein dauerhaftes Pro-Kopf-Wachstum: begründen',
      'Steady State: sf(k*) = δk*; Goldene Regel und Konsummaximum gegenüber Outputmaximum abgrenzen'
    ],
    tech_fortschritt: [
      'Arbeitsvermehrenden TF Y = F(K, AN) definieren',
      'Variable k̃ = K/(AN) einführen und Akkumulationsgleichung aufschreiben',
      'SS-Bedingung sf(k̃*) = (n + g_A + δ)k̃* lösen',
      'Wachstumsraten im SS: g_{Y/N} = g_A ableiten',
      'Solow-Residuum / TFP: Restgröße der Zerlegung und Interpretationsgrenzen nennen',
      'Institutionen als langfristiger Wachstumskanal (Anreize, Eigentumsrechte) skizzieren'
    ],
    phillipskurve: [
      'Erwartungsaugmentierte Phillipskurve π_t = π^e − α(u − u_n) aufschreiben',
      'Langfristig senkrechte Phillipskurve bei u = u_n begründen',
      'Okun-Gesetz Δu = −β(g − ḡ) anwenden',
      'NKPC: Rolle zukünftiger Inflationserwartungen erklären',
      'Inflationskosten und Disinflation: Trade-off / Opferquote grob einordnen'
    ],
    kaufkraftparitaet: [
      'Absolute KKP P = E·P* herleiten und interpretieren',
      'Relative KKP: Ê = π − π* anwenden',
      'Warum KKP kurzfristig nicht gilt: Argumente nennen',
      'Balassa-Samuelson-Effekt als systematische Abweichung erläutern'
    ],
    geldmengen: [
      'Geldnachfragefunktion M^d = P·Y·L(i) aufschreiben',
      'LM-Gleichung M/P = Y·L(i): positive Steigung begründen',
      'LM-Verschiebungen bei M↑ und P↑ analysieren',
      'Liquiditätsfalle: horizontale LM bei i = 0 und Implikation für GP'
    ],
  };

  if (specific[conceptId]) return specific[conceptId];
  return base;
}

CHAPTERS.forEach(ch => {
  if (!MASTERY[ch.id]) {
    MASTERY[ch.id] = createMasteryItems(ch.id, ch.title);
  }
});
