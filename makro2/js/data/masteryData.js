// ============================================================
// MASTERY DATA — Makroökonomik II
// Learning objective checklists for all 34 concepts
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
      'Fiskalpolitik bei festem WK: Volles Multiplikatoreffekt begründen'
    ],
    zp_kurve: [
      'ZP-Kurve definieren und positive Steigung begründen',
      'Position ober-/unterhalb der ZP-Kurve (ZB-Surplus/Defizit) bestimmen',
      'ZP-Kurve bei perfekter Kapitalmobilität (horizontal) zeichnen',
      'Verschiebungen der ZP-Kurve bei Y* und ε analysieren'
    ],
    wirtschaftspolitik_offen: [
      'Mundell-Fleming-Theorem formulieren (welches Instrument wann)',
      'Fiskalpolitik: Vergleich flex. vs. fester WK',
      'Geldpolitik: Vergleich flex. vs. fester WK',
      'Trilemma der offenen VW erklären und mit Länderbeispielen illustrieren'
    ],
    wk_regime: [
      'Spektrum der WK-Regime von free float bis Currency Board benennen',
      'Vor- und Nachteile fixer und flexibler WK aufzählen',
      'Anpassung bei negativem Schock je nach Regime vergleichen',
      'Trilemma-Konsequenz eines Currency Board ableiten'
    ],
    wk_krisen: [
      'Erste Generation: fundamentale Ursache und Mechanismus (Reservenerschöpfung) erklären',
      'Zweite Generation: selbsterfüllende Erwartungen und multiple Gleichgewichte erläutern',
      'EWS-Krise 1992 in Grundzügen beschreiben',
      'Unterschied zwischen den Krisentypen für Klausur formulieren'
    ],
    opt_waehrungsraum: [
      'Mundells vier OWR-Kriterien nennen und erläutern',
      'Kosten einer Währungsunion (Verlust WK als Instrument) erklären',
      'Nutzen einer Währungsunion (Handelsgewinne, Glaubwürdigkeit) benennen',
      'Eurozone anhand der OWR-Kriterien bewerten'
    ],
    eurozone: [
      'Maastricht-Kriterien (Defizit ≤ 3%, Schulden ≤ 60%) nennen und herleiten',
      'EZB-Mandat und Zwei-Säulen-Strategie erklären',
      'Eurokrise 2010–2015: Ursachen und Mechanismus beschreiben',
      'OMT/"Whatever it takes": Wirkungsweise ohne tatsächliche Aktivierung erläutern'
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
    schuldenregeln: [
      'Rationale für Defizitneigung (Zeitinkonsistenz, Common Pool) erklären',
      'Maastricht 3%/60% aus Schuldenquotenstabilisierung herleiten (d = g·b)',
      'Prozyklizitätsproblem von Schuldenregeln beschreiben',
      'Grenzen der Regeldurchsetzung im SGP benennen'
    ],
    budgetrestriktion: [
      'Periodenbudgetrestriktion B_t = (1+r)B_{t-1} + G_t − T_t aufschreiben',
      'Primärdefizit von Gesamtdefizit unterscheiden',
      'Intertemporale BR: B_0 = Barwert zukünftiger Überschüsse',
      'Tragfähigkeitsbedingung prüfen'
    ],
    schuldenquote: [
      'Dynamik der Schuldenquote Δb ≈ (r−g)b − ps ableiten',
      'Stabilitätsbedingung ps* = (r−g)b berechnen',
      'Schneeball-Effekt bei r > g erklären',
      '"Herauswachsen" bei r < g beschreiben'
    ],
    ricardianisch: [
      'Ricardianisches Äquivalenztheorem im 2-Perioden-Modell herleiten',
      'Voraussetzungen für vollständige Äquivalenz nennen',
      'Private Ersparnis steigt um genau das Staatsdefizit: ΔS_priv = −ΔS_staat',
      'Empirische Einschränkungen (Liquiditätsbeschränkungen) benennen'
    ],
    taylor_regel: [
      'Taylor-Regel vollständig aufschreiben (mit r*, π*, a, b)',
      'Taylor-Prinzip: a > 0 → realer Zins steigt bei Inflation',
      'Leitzins für gegebene π und Outputlücke berechnen',
      'Konsequenz von a ≤ 0 (Instabilität) erklären'
    ],
    inflation_targeting: [
      'Vier Kernelement des IT nennen',
      'EZB-Mandat und Inflationsziel nennen',
      'IT löst Zeitinkonsistenz: Mechanismus über Transparenz',
      'Kritik an IT (ZLB, Vermögenspreise) formulieren'
    ],
    inflation_kosten: [
      'Vier Kosten der Inflation (Schuhsohlen, Menü, Inflationssteuer, Verzerrung) erläutern',
      'Phillipskurven-Tradeoff Δu = −Δπ/α für Disinflation berechnen',
      'Opferquotient (Sacrifice Ratio) definieren',
      'Glaubwürdige vs. graduelle Disinflation vergleichen'
    ],
    unkonv_geldpolitik: [
      'Nullzinsgrenze und Liquiditätsfalle erklären',
      'QE: drei Wirkungskanäle (Portfolio Balance, Signaling, WK) beschreiben',
      'Forward Guidance: Wirkungsweise über Zinserwartungen',
      'EZB-Programme (APP, PEPP, OMT) in Grundzügen benennen'
    ],
    wachstum_fakten: [
      'Kaldors sechs stilisierte Fakten benennen',
      'Bedingte vs. unbedingte Konvergenz unterscheiden',
      'Wachstumszerlegung g_Y = g_A + α_K g_K + α_N g_N anwenden',
      'Solow-Residuum als Maß für TFP-Wachstum interpretieren'
    ],
    aggregierte_pf: [
      'Aggregierte PF Y = A·F(K,N) mit Eigenschaften aufschreiben',
      'CRS, abnehmende Grenzerträge, Inada-Bedingungen nennen',
      'Cobb-Douglas Y = AK^α N^(1-α): CRS beweisen',
      'Pro-Kopf-Form y = Af(k) herleiten'
    ],
    solow_basis: [
      'Kapitalakkumulationsgleichung k̇ = sf(k) − δk erklären',
      'ṅk bei gegebenen Werten berechnen und interpretieren',
      'Grafisch: Schnittpunkt sf(k) und δk als Steady State identifizieren',
      'Warum ohne TF kein dauerhaftes Pro-Kopf-Wachstum: begründen'
    ],
    steady_state: [
      'SS-Bedingung sf(k*) = δk* aufschreiben',
      'k* bei Cobb-Douglas berechnen: k* = (s/δ)^{1/(1-α)}',
      'Komparative Statik: Wirkung von ↑s und ↑δ auf k*',
      'Globale Stabilität des SS erklären (Konvergenz)'
    ],
    goldene_sparquote: [
      'Goldene Regel f\'(k*gold) = δ ableiten',
      'Goldene Sparquote s_gold = α (Cobb-Douglas) herleiten',
      'k_gold berechnen und Konsum maximieren',
      'Dynamische Effizienz vs. Ineffizienz anhand r ≷ g einordnen'
    ],
    tech_fortschritt: [
      'Arbeitsvermehrenden TF Y = F(K, AN) definieren',
      'Variable k̃ = K/(AN) einführen und Akkumulationsgleichung aufschreiben',
      'SS-Bedingung sf(k̃*) = (n + g_A + δ)k̃* lösen',
      'Wachstumsraten im SS: g_{Y/N} = g_A ableiten'
    ],
    solow_residuum: [
      'Wachstumszerlegung g_Y = g_A + α_K g_K + α_N g_N herleiten',
      'Solow-Residuum als Restgröße berechnen',
      'Empirische Bedeutung: TFP erklärt Großteil des Wachstums',
      'Einschränkungen des Residuums (Messfehler, Humankapital) nennen'
    ],
    institutionen: [
      'Proximate vs. fundamentale Wachstumsursachen unterscheiden',
      'Kanal: schlechte Institutionen → niedrigeres s und A → niedrigeres y*',
      'Acemoglu/Johnson/Robinson: Kolonialismus als Naturexperiment erklären',
      'Ressourcenfluch und Balassa-Samuelson-Effekt in Grundzügen beschreiben'
    ],
    phillipskurve: [
      'Erwartungsaugmentierte Phillipskurve π_t = π^e − α(u − u_n) aufschreiben',
      'Langfristig senkrechte Phillipskurve bei u = u_n begründen',
      'Okun-Gesetz Δu = −β(g − ḡ) anwenden',
      'NKPC: Rolle zukünftiger Inflationserwartungen erklären'
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
