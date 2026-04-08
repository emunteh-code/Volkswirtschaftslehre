// ============================================================
// GRAPH PANEL RENDERER — Mikroökonomik II
// ============================================================

export const GRAPH_CONCEPTS = new Set([
  'spieltheorie_statisch',
  'spieltheorie_dynamisch',
  'oligopol_cournot_bertrand',
  'oligopol_stackelberg',
  'gleichgewicht_tausch',
  'gleichgewicht_walras',
  'externa_pigou',
  'externa_institutionen'
]);

const GRAPH_READING = {
  spieltheorie_statisch:
    'Lies die Matrix zeilenweise als Entscheidungen der Spieler. Nash bedeutet: Keine einseitige Abweichung verbessert — vergleiche mit Mikro-I-Grafikdisziplin (Achsen, Gleichgewicht klar benennen).',
  spieltheorie_dynamisch:
    'Mischstrategien entstehen aus Indifferenz der Gegenspieler — notiere, welche Auszahlungen die Mischung gerade ausgleicht (wie „Kurven schneiden“ bei Mikro-I-Grafiken).',
  oligopol_cournot_bertrand:
    'Reaktionsfunktionen sind Beste-Antwort-Kurven — der Schnitt ist das Cournot-Nash-Gleichgewicht; sag explizit, welche Variable auf welcher Achse liegt.',
  oligopol_stackelberg:
    'Der Führer setzt die Menge zuerst; der Folger reagiert optimal — beschreibe die zeitliche Logik wie bei einer verschobenen Angebotskurve im Mikro-I-Marktmodell.',
  gleichgewicht_tausch:
    'In der Edgeworth-Box: jede Ecke gehört einem Haushalt; Kontraktkurve sammelt tangential-effiziente Allokationen — benenne, was „Pareto-besser“ hier geometrisch heißt.',
  gleichgewicht_walras:
    'Preisanpassung räumt Märkte; Überschussnachfrage null im Gleichgewicht — formuliere in einem Satz, welche Größe sich auf dem Diagramm einpegelt.',
  externa_pigou:
    'Vergleich privates vs. soziales Optimum: Wo liegt die Wohlfahrtslücke, und welche Steuer/Internalisierung verschiebt die marginale Entscheidung?',
  externa_institutionen:
    'Coase braucht verhandelbare Rechte und geringe Transaktionskosten; Cap-and-Trade verteuert Emissionen — ordne jedes Instrument der Fehlerquelle zu.'
};

function graphFooter(id) {
  const reading = GRAPH_READING[id];
  if (!reading) return '';
  return `
<div id="graph_info" class="graph-info" aria-live="polite"></div>
<div class="graph-reading-hint"><p><strong>Interpretation:</strong> ${reading}</p></div>`;
}

export function renderGraphPanel(id) {
  const graphConfigs = {
    spieltheorie_statisch: `
<div class="graph-container">
<h3 class="graph-panel-title">Auszahlungsmatrix & Nash-Gleichgewicht</h3>
<p style="font-size:12px;color:var(--muted)">Visualisierung strategischer Interaktion.</p>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Auszahlungsmatrix und Nash-Gleichgewicht"></canvas>
${graphFooter('spieltheorie_statisch')}
</div>`,
    spieltheorie_dynamisch: `
<div class="graph-container">
<h3 class="graph-panel-title">Gemischte Strategien (2x2)</h3>
<p style="font-size:12px;color:var(--muted)">Indifferenzlogik fuer Mischwahrscheinlichkeiten.</p>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Gemischte Strategien"></canvas>
${graphFooter('spieltheorie_dynamisch')}
</div>`,
    oligopol_cournot_bertrand: `
<div class="graph-container">
<h3 class="graph-panel-title">Cournot-Reaktionsfunktionen</h3>
<p style="font-size:12px;color:var(--muted)">Schnittpunkt der Reaktionskurven bestimmt das Gleichgewicht.</p>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Cournot-Reaktionsfunktionen"></canvas>
${graphFooter('oligopol_cournot_bertrand')}
</div>`,
    oligopol_stackelberg: `
<div class="graph-container">
<h3 class="graph-panel-title">Stackelberg-Fuehrer/Folger</h3>
<p style="font-size:12px;color:var(--muted)">Sequenzielle Mengenwahl mit Rueckwaertsinduktion.</p>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Stackelberg"></canvas>
${graphFooter('oligopol_stackelberg')}
</div>`,
    gleichgewicht_tausch: `
<div class="graph-container">
<h3 class="graph-panel-title">Edgeworth-Box</h3>
<p style="font-size:12px;color:var(--muted)">Tauschkurve und Kontraktkurve.</p>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Edgeworth-Box"></canvas>
${graphFooter('gleichgewicht_tausch')}
</div>`,
    gleichgewicht_walras: `
<div class="graph-container">
<h3 class="graph-panel-title">Walrasianische Markt-Raeumung</h3>
<p style="font-size:12px;color:var(--muted)">Preisvektor und Ueberschussnachfrage im Gesamtgleichgewicht.</p>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Walras-Gleichgewicht"></canvas>
${graphFooter('gleichgewicht_walras')}
</div>`,
    externa_pigou: `
<div class="graph-container">
<h3 class="graph-panel-title">Internalisierung externer Effekte</h3>
<p style="font-size:12px;color:var(--muted)">Vergleich zwischen Marktgleichgewicht und sozialem Optimum.</p>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Externalitäten und Pigou"></canvas>
${graphFooter('externa_pigou')}
</div>`,
    externa_institutionen: `
<div class="graph-container">
<h3 class="graph-panel-title">Institutionelle Loesungen externer Effekte</h3>
<p style="font-size:12px;color:var(--muted)">Coase-Verhandlung und Cap-and-Trade im Vergleich.</p>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Institutionen bei Externalitäten"></canvas>
${graphFooter('externa_institutionen')}
</div>`
  };

  return `<div class="panel active">${graphConfigs[id] || ''}</div>`;
}
