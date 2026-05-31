/**
 * Per-concept Quellen tab panel — shared fleet surface for official source mapping.
 */

import {
  buildSourceInspectionHtml,
  getProvenanceBreakdownRows,
  getProvenanceInspectionRows,
  getProvenanceSummaryText,
  hasProvenanceLayers,
  pathToHumanLabel
} from './sourceProvenanceUi.js';
import {
  getSourceMaterialsAvailability,
  renderOfficialMaterialsIliasLinkHtml,
  renderOfficialMaterialsNoticeHtml,
  sourcePdfOpenDisabledByDefault
} from '../utils/deployEnvironment.js';
import { renderMathTitle } from './formatMathInTitle.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function rankDocumentLabel(label) {
  if (label.startsWith('Vorlesung ')) {
    return [0, parseInt(/\d+/.exec(label)?.[0] || '0', 10)];
  }
  if (label.startsWith('Kapitel ')) {
    const tail = label.slice('Kapitel '.length);
    const head = tail.split(/[–-]/)[0] || '';
    const parts = head.match(/\d+/g) || ['0'];
    return [1, parseInt(parts[0], 10), parseInt(parts[1] || '0', 10)];
  }
  if (label.startsWith('Übung ')) {
    return [2, parseInt(/\d+/.exec(label)?.[0] || '0', 10)];
  }
  if (label.startsWith('Tutorium ')) {
    return [3, parseInt(/\d+/.exec(label)?.[0] || '0', 10)];
  }
  return [9, label];
}

function sortDocumentLabels(a, b) {
  const ra = rankDocumentLabel(a);
  const rb = rankDocumentLabel(b);
  for (let i = 0; i < Math.max(ra.length, rb.length); i += 1) {
    const da = ra[i] ?? 0;
    const db = rb[i] ?? 0;
    if (da !== db) {
      return typeof da === 'number' && typeof db === 'number'
        ? da - db
        : String(da).localeCompare(String(db), 'de');
    }
  }
  return 0;
}

function documentLabelForRow(row) {
  return pathToHumanLabel(row.sourcePath) || row.sourcePath.split('/').pop() || 'Quelle';
}

function groupInspectionRowsByDocument(rows) {
  const groups = new Map();
  for (const row of rows) {
    const docLabel = documentLabelForRow(row);
    if (!groups.has(docLabel)) groups.set(docLabel, []);
    groups.get(docLabel).push(row);
  }
  return [...groups.entries()].sort(([a], [b]) => sortDocumentLabels(a, b));
}

function renderLayerBreakdown(rows) {
  if (!rows.length) return '';
  return `<section class="quellen-panel-section quellen-panel-layers" aria-label="Quellen nach Portalbereich">
<h3>Nach Portalbereich</h3>
<div class="quellen-panel-layer-grid">
${rows.map((row) => `<div class="quellen-panel-layer-row">
<span class="quellen-panel-layer-k">${renderMathTitle(row.title)}</span>
<span class="quellen-panel-layer-v">${escapeHtml(row.line)}</span>
</div>`).join('')}
</div>
</section>`;
}

function renderAnchorGroups(groupedRows) {
  if (!groupedRows.length) {
    return `<section class="quellen-panel-section quellen-panel-anchors quellen-panel-anchors--empty" aria-label="Seitenanker">
<h3>Seitenanker & Quellenreferenzen</h3>
<p>Für dieses Konzept sind noch keine geprüften Seitenanker registriert. Die Zuordnung bleibt auf Datei- oder Manifestebene sichtbar.</p>
</section>`;
  }

  return `<section class="quellen-panel-section quellen-panel-anchors" aria-label="Seitenanker nach Vorlesungsblock">
<h3>Seitenanker & Quellenreferenzen</h3>
<div class="quellen-panel-anchor-groups">
${groupedRows.map(([docLabel, rows]) => `<article class="quellen-panel-anchor-group">
<div class="quellen-panel-anchor-group-head">
<span class="quellen-panel-anchor-group-label">${escapeHtml(docLabel)}</span>
<em>${rows.length} Stelle${rows.length === 1 ? '' : 'n'}</em>
</div>
${buildSourceInspectionHtml(rows)}
</article>`).join('')}
</div>
</section>`;
}

function renderPdfStatusNotice() {
  if (sourcePdfOpenDisabledByDefault()) {
    return renderOfficialMaterialsNoticeHtml().replace(
      'class="official-materials-notice"',
      'class="official-materials-notice quellen-panel-pdf-status quellen-panel-pdf-status--unavailable" data-quellen-pdf-status'
    );
  }
  return `<aside class="quellen-panel-pdf-status" data-quellen-pdf-status role="note">
<strong>PDF-Verfügbarkeit wird geprüft…</strong>
</aside>`;
}

function renderSourceSummaryBadge(summary) {
  if (!summary?.label) return '';
  return `<span class="quellen-panel-badge quellen-panel-badge--${escapeHtml(summary.status || 'unknown')}" title="${escapeHtml(summary.title || summary.label)}">${escapeHtml(summary.label)}</span>`;
}

/**
 * @param {object} opts
 * @param {string} opts.conceptId
 * @param {Record<string, object>|null|undefined} opts.layers
 * @param {string} [opts.sourceMaterialBaseUrl]
 * @param {() => { label?: string, status?: string, title?: string }|null} [opts.getConceptSourceSummary]
 */
export function buildQuellenPanelHtml({
  conceptId,
  layers,
  sourceMaterialBaseUrl = '',
  getConceptSourceSummary = () => null
}) {
  if (!conceptId || !hasProvenanceLayers(layers)) {
    return '<div class="panel active quellen-panel quellen-panel--empty"><p>Keine Quellenzuordnung für dieses Konzept.</p></div>';
  }

  const summaryLine = getProvenanceSummaryText(layers);
  const breakdownRows = getProvenanceBreakdownRows(layers);
  const inspectionRows = getProvenanceInspectionRows(layers, sourceMaterialBaseUrl);
  const groupedRows = groupInspectionRowsByDocument(inspectionRows);
  const sourceSummary = getConceptSourceSummary(conceptId);

  return `<div class="panel active quellen-panel">
<header class="quellen-panel-header">
<div class="quellen-panel-header-copy">
<span class="quellen-panel-kicker">Offizielle Zuordnung</span>
<h2>Quellen &amp; Vorlesungsmaterial</h2>
<p>Hier siehst du, welche VL-Materialien und Portalbereiche zu diesem Konzept gehören — inklusive geprüfter Seitenanker, wo vorhanden.</p>
</div>
${renderSourceSummaryBadge(sourceSummary)}
</header>
${renderPdfStatusNotice()}
<section class="quellen-panel-section quellen-panel-summary" aria-label="Provenienz-Zusammenfassung">
<h3>Zusammenfassung</h3>
<p class="quellen-panel-summary-line">${escapeHtml(summaryLine)}</p>
</section>
${renderLayerBreakdown(breakdownRows)}
${renderAnchorGroups(groupedRows)}
<footer class="quellen-panel-footer">
<button type="button" class="btn secondary quellen-panel-browser-btn" data-quellen-open-browser>Modul-Quellenbrowser</button>
${renderOfficialMaterialsIliasLinkHtml()}
<p class="quellen-panel-footer-note">Der Modul-Quellenbrowser zeigt alle offiziellen Dokumente, Abdeckungsmatrix und offene Mapping-Lücken im Gesamtkontext.</p>
</footer>
</div>`;
}

export function hasConceptQuellenContent(layers) {
  return hasProvenanceLayers(layers);
}

/**
 * @param {HTMLElement|null|undefined} root
 */
export async function initQuellenPanelInteractions(root) {
  if (!root?.querySelectorAll) return;

  const pdfAvailable = await getSourceMaterialsAvailability();
  root.querySelectorAll('[data-quellen-pdf-status]').forEach((node) => {
    if (pdfAvailable) {
      node.innerHTML =
        '<strong>Kurs-PDFs lokal erreichbar</strong><span>Du kannst offizielle Dateien direkt öffnen, wenn der Ordner <code>source-materials/</code> in dieser Umgebung vorhanden ist.</span>';
      node.classList.add('quellen-panel-pdf-status--available');
      node.classList.remove('quellen-panel-pdf-status--unavailable');
    } else if (!node.classList.contains('quellen-panel-pdf-status--unavailable')) {
      node.outerHTML = renderOfficialMaterialsNoticeHtml().replace(
        'class="official-materials-notice"',
        'class="official-materials-notice quellen-panel-pdf-status quellen-panel-pdf-status--unavailable" data-quellen-pdf-status'
      );
    }
  });

  root.querySelectorAll('[data-quellen-open-browser]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (typeof window.__showSourceCompanion === 'function') {
        window.__showSourceCompanion();
      }
    });
  });

  const { initConceptProvenanceInteractions } = await import('./sourceProvenanceUi.js');
  await initConceptProvenanceInteractions(root);
}
