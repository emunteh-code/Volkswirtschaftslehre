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
    zp_kurve: [
      'ZP-Kurve als Zahlungsbilanzgleichgewicht im (Y,i)-Raum definieren',
      'Positive Steigung der ZP-Kurve aus LB- und KB-Logik begründen',
      'Perfekte Kapitalmobilität als horizontalen Grenzfall erklären',
      'Punkte ober- und unterhalb der ZP-Kurve als Überschuss- bzw. Defizitlage interpretieren'
    ],
    wirtschaftspolitik_offen: [
      'Regimevergleich im Mundell-Fleming-Modell systematisch aufbauen',
      'Fiskal- und Geldpolitik unter flexiblem vs. festem WK kontrastieren',
      'Wechselkurskanal und Nettoexport-Gegenwirkung explizit in Antworten einbauen',
      'Politikresultate immer an Regime und Kapitalmobilität knüpfen'
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
    opt_waehrungsraum: [
      'Klassische OWR-Kriterien benennen und ökonomisch deuten',
      'Vorteile einer Währungsunion gegen Verlust des eigenen WK abwägen',
      'Asymmetrische Schocks als zentrales OWR-Risiko erklären',
      'Eurozonen-Fragen als Anpassungsmechanismus- und nicht als Ja/Nein-Urteil lesen'
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
    inflation_targeting: [
      'Inflation Targeting als Regime mit Ziel, Unabhängigkeit und Kommunikation erklären',
      'EZB-Strategie und Rolle monetärer Aggregate korrekt einordnen',
      'Zielgröße, Instrument und Informationsindikatoren sauber trennen',
      'ELB/Realzins-Spielraum als Grenze niedriger Trendinflation erläutern'
    ],
    inflation_kosten: [
      'Wichtige Inflationskosten benennen und von Disinflationskosten unterscheiden',
      'Opferquote / Sacrifice Ratio konzeptionell erklären',
      'Disinflation über Phillipslogik und Glaubwürdigkeit einordnen',
      'Schnelle vs. glaubwürdige Disinflation klausurstabil vergleichen'
    ],
    wachstum_fakten: [
      'Stilisierte Wachstumsfakten / Kaldor-Fakten benennen',
      'Bedingte Konvergenz von automatischer Konvergenz unterscheiden',
      'Wachstumszerlegung auf Faktor- und Produktivitätsbeiträge anwenden',
      'Solow-Residuum vorsichtig interpretieren'
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
    steady_state: [
      'Steady-State-Bedingung mit und ohne Bevölkerungswachstum aufschreiben',
      'Komparative Statik von s, δ und n auf k* und y* ableiten',
      'Konvergenz links und rechts des Steady State graphisch erklären',
      'Niveaueffekt und Wachstumsrate sauber trennen'
    ],
    goldene_sparquote: [
      'Goldene Regel als Konsummaximum formulieren',
      'Goldenen Kapitalstock über f\'(k)=δ+n identifizieren',
      'Bei Cobb-Douglas s_gold = α nutzen und interpretieren',
      'Über- vs. Unterakkumulation klausurstabil erkennen'
    ],
    tech_fortschritt: [
      'Arbeitsvermehrenden TF Y = F(K, AN) definieren',
      'Variable k̃ = K/(AN) einführen und Akkumulationsgleichung aufschreiben',
      'SS-Bedingung sf(k̃*) = (n + g_A + δ)k̃* lösen',
      'Wachstumsraten im SS: g_{Y/N} = g_A ableiten',
      'Solow-Residuum / TFP: Restgröße der Zerlegung und Interpretationsgrenzen nennen',
      'Institutionen als langfristiger Wachstumskanal (Anreize, Eigentumsrechte) skizzieren'
    ],
    budgetrestriktion: [
      'Periodische Budgetrestriktion des Staates aufschreiben',
      'Primärsaldo und Gesamtsaldo trennen',
      'Intertemporale Budgetrestriktion als Barwertbedingung erläutern',
      'Seigniorage als separaten Finanzierungskanal einordnen'
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
    ricardianisch: [
      'Ricardianische Äquivalenz in Worten und im Barwertgedanken erklären',
      'Steuersenkung heute vs. Steuererhöhung morgen als intertemporalen Tausch lesen',
      'Wichtige Voraussetzungen der Äquivalenz benennen',
      'Gründe für empirisches Scheitern / Abschwächung nennen'
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
