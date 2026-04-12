/**
 * Two-level concept provenance for `#content` (shared across modules via `createRenderer`).
 * Level 1: one muted line, human labels only (e.g. "Basis: Vorlesung 3 · Übung 2").
 * Level 2: optional compact per-area mapping — no raw paths, no internal pipeline wording.
 */

const BASIS_PREFIX = 'Basis: ';
/** Long primary-ref lists (e.g. R-Begleitpraxis) stay honest in the expandable breakdown; summary stays one scannable line. */
const MAX_SUMMARY_LABELS = 7;

const LAYER_ORDER = [
  ['motivation', 'Kurzüberblick'],
  ['theory', 'Theorie'],
  ['formulas', 'Formeln'],
  ['graph', 'Grafik'],
  ['tasks', 'Aufgaben'],
  ['stepProblems', 'Prüfungstransfer'],
  ['intuition', 'Intuition']
];

function escapeAttr(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {string} path
 * @returns {string|null}
 */
export function pathToHumanLabel(path) {
  const p = String(path || '').replace(/\\/g, '/');
  const base = p.split('/').pop() || p;

  let m = base.match(/^V(\d+)_StudIP\.pdf$/i);
  if (m) return `Vorlesung ${parseInt(m[1], 10)}`;

  m = p.match(/Mikro_1_VL_(\d+)/i) || base.match(/Mikro_1_VL_(\d+)/i);
  if (m) return `Vorlesung ${parseInt(m[1], 10)}`;

  m = p.match(/[/\\]VL_(\d+)/i) || base.match(/^VL_(\d+)/i);
  if (m) return `Vorlesung ${parseInt(m[1], 10)}`;

  m = p.match(/Uebungsblatt_(\d+)|Übungsblatt_(\d+)/i);
  if (m) return `Übung ${parseInt(m[1] || m[2], 10)}`;

  if (/(?:^|\/)Übungen\/|(?:^|\/)Uebungen\//i.test(p) && /blatt/i.test(base)) {
    const n = base.match(/(\d+)/);
    if (n) return `Übung ${parseInt(n[1], 10)}`;
  }

  m =
    p.match(/Tutorium_(\d+)/i) ||
    p.match(/Tutorien\/Tutorium(\d+)/i) ||
    base.match(/Tutorienblatt_(\d+)/i) ||
    base.match(/^Tutorium\s*(\d+)/i);
  if (m) return `Tutorium ${parseInt(m[1], 10)}`;

  m = base.match(/^Übung\s*(\d+)\.pdf$/i) || base.match(/^Uebung\s*(\d+)\.pdf$/i);
  if (m) return `Übung ${parseInt(m[1], 10)}`;

  m = base.match(/\bVL\s*(\d+)\b/i);
  if (m && /\.pdf$/i.test(base)) return `Vorlesung ${parseInt(m[1], 10)}`;

  m = base.match(/slides_(\d+)\.pdf/i);
  if (m) return `Vorlesung ${parseInt(m[1], 10)}`;

  m = base.match(/^IntWB(\d+)\.pdf$/i);
  if (m) return `Vorlesung ${parseInt(m[1], 10)}`;

  m = base.match(/^(\d+)Mathe_((?:E|LA|AN|OP)\d+)/i);
  if (m) return `Mathematik ${m[2].toUpperCase()}`;

  const ku = p.match(/Kleinübung\/([^/]+)/iu);
  if (ku) {
    const folder = ku[1];
    let     km = folder.match(/^(E)_(\d+)_-/iu);
    if (km) return `Kleinübung E${km[2]}`;
    km = folder.match(/^(LA)_(\d+)_-/iu);
    if (km) return `Kleinübung LA${km[2]}`;
    km = folder.match(/^(AN)_(\d+)_-/iu);
    if (km) return `Kleinübung AN${km[2]}`;
    km = folder.match(/^(OP)_(\d+)_-/iu);
    if (km) return `Kleinübung OP${km[2]}`;
    return "Kleinübung";
  }

  if (/handout/i.test(p)) return 'Kursmaterial (Handout)';
  if (/R-Vorkurs/i.test(base)) return 'R-Vorkurs';
  if (/Folien\//i.test(p) && /\.pdf$/i.test(base)) return 'Vorlesungsfolien';

  // Recht: §_N_…-K.pdf (unit number is the authoritative lecture index)
  m = base.match(/^§_(\d+)_/);
  if (m) return `Vorlesung ${parseInt(m[1], 10)}`;

  // Jahresabschluss: Kapitel6.1-6.5.pdf, Kapitel2.pdf
  m = base.match(/^Kapitel\s*((\d+(?:\.\d+)?)(?:-(\d+(?:\.\d+)?))?)\s*\.pdf$/i);
  if (m) {
    if (m[3]) return `Kapitel ${m[2]}–${m[3]}`;
    return `Kapitel ${m[2]}`;
  }

  m = base.match(/(?:^|\+)Kapitel\s*(\d+)/i);
  if (m && /\.pdf$/i.test(base)) return `Kapitel ${parseInt(m[1], 10)}`;

  m = base.match(/Tutorium(?:[_\s-]*Kapitel)?\s*(\d+)/i);
  if (m && /\.pdf$/i.test(base)) return `Tutorium ${parseInt(m[1], 10)}`;

  // Recht Übungen: …Einheit_3…
  if (/(?:^|\/)Übungen\/|(?:^|\/)Uebungen\//i.test(p)) {
    m = base.match(/Einheit\s*[_\s]*(\d+)/i);
    if (m) return `Übung ${parseInt(m[1], 10)}`;
  }

  // Ökonometrie: lecture PDFs + R exercises (paths from contentManifest)
  if (/Lecture_Einführung_in_die_Ökonometrie/i.test(p) && /\.pdf$/i.test(base)) {
    if (/^Einf_WiSe/i.test(base)) return 'Vorlesung (Folienskript)';
    if (/Formelsammlung/i.test(base)) return 'Formelsammlung';
    if (/Statistical_Tables/i.test(base)) return 'Statistische Tabellen';
  }

  if (/\.r$/i.test(base)) {
    m = base.match(/^(\d{2})_/);
    if (m) return `Übung ${parseInt(m[1], 10)}`;
    m = base.match(/Tutorium\s*_?\s*(\d+)/i);
    if (m) return `Tutorium ${parseInt(m[1], 10)}`;
    if (/Wiederholung_Lineare_Algebra/i.test(base)) return 'Wiederholung Lineare Algebra';
    if (/Wiederholung_Statistik/i.test(base)) return 'Wiederholung Statistik';
    if (/Exercises_Einführung/i.test(p) || /Tutorial_Einführung/i.test(p)) return 'R-Übungsdatei';
  }

  if (/(?:Vorlesungsfolien|Vorlesungen)\//i.test(p)) return 'Vorlesungsmaterial';

  if (/(?:^|\/)Übungen\/|(?:^|\/)Uebungen\//i.test(p) && /\.pdf$/i.test(base)) return 'Übungsmaterial';

  return null;
}

/**
 * Infer Übung index from filename/path when no explicit sheet number was mapped.
 * @param {string} path
 * @returns {number}
 */
function inferÜbungNumberFromPath(path) {
  const p = String(path || '').replace(/\\/g, '/');
  const base = p.split('/').pop() || p;
  let m = base.match(/Einheit\s*[_\s.-]*(\d+)/i);
  if (m) return parseInt(m[1], 10);
  m = base.match(/_(\d+)\s*\.\s*_?\s*Einheit/i);
  if (m) return parseInt(m[1], 10);
  const nums = base.match(/\d+/g);
  if (nums && nums.length) {
    const small = nums.map((x) => parseInt(x, 10)).filter((n) => n >= 1 && n <= 50);
    if (small.length) return small[small.length - 1];
  }
  return 1
}

/**
 * First Vorlesung unit number hinted by path/filename (Recht §_N_, StudIP VN_, etc.).
 * @param {string} path
 * @returns {number}
 */
function firstVorlesungNumberFromPath(path) {
  const p = String(path || '').replace(/\\/g, '/');
  const base = p.split('/').pop() || p;
  const m =
    p.match(/§_(\d+)_/) ||
    base.match(/^§_(\d+)_/) ||
    p.match(/[/\\]VL_(\d+)/i) ||
    base.match(/^VL_(\d+)/i) ||
    base.match(/^V(\d+)_StudIP\.pdf$/i);
  if (m) return parseInt(m[1], 10);
  return 1
}

/**
 * Maps internal path labels to the **student-facing** vocabulary only:
 * Vorlesung X · Übung X · Tutorium X · Kapitel X (Jahresabschluss).
 * @param {string|null} raw from {@link pathToHumanLabel}
 * @param {string} path original ref path (for inference)
 * @returns {string|null}
 */
export function toPublicProvenanceLabel(raw, path) {
  if (!raw) return null
  const p = String(path || '').replace(/\\/g, '/')

  if (/^Vorlesung \d+$/.test(raw)) return raw
  if (/^Übung \d+$/.test(raw)) return raw
  if (/^Tutorium \d+$/.test(raw)) return raw
  if (/^Kapitel /i.test(raw)) return raw

  if (raw === 'Vorlesung (Folienskript)') return 'Vorlesung 1'
  if (raw === 'Formelsammlung' || raw === 'Statistische Tabellen') return 'Vorlesung 1'
  if (raw === 'Übungsmaterial') return `Übung ${inferÜbungNumberFromPath(p)}`
  if (raw === 'R-Übungsdatei') return 'Übung 1'
  if (raw === 'Wiederholung Lineare Algebra' || raw === 'Wiederholung Statistik') return 'Übung 1'
  if (raw === 'Vorlesungsmaterial' || raw === 'Vorlesungsfolien') {
    return `Vorlesung ${firstVorlesungNumberFromPath(p)}`
  }
  if (raw === 'Kursmaterial (Handout)' || raw === 'R-Vorkurs') return 'Vorlesung 1'
  if (raw.startsWith('Kleinübung')) {
    const tail = raw.slice('Kleinübung'.length).trim()
    const m = tail.match(/(\d+)/)
    if (m) return `Übung ${parseInt(m[1], 10)}`
    return 'Übung 1'
  }
  if (raw.startsWith('Mathematik ')) {
    const m = raw.match(/(\d+)/)
    return m ? `Übung ${parseInt(m[1], 10)}` : 'Übung 1'
  }

  return raw
}

function labelsFromRefs(refs) {
  const out = [];
  for (const ref of refs || []) {
    const path = ref?.path ?? ref;
    const raw = pathToHumanLabel(path);
    const pub = toPublicProvenanceLabel(raw, path);
    if (pub && !out.includes(pub)) out.push(pub);
  }
  return out;
}

function rankLabel(label) {
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

function sortLabelsUnique(labels) {
  const uniq = [...new Set(labels)].filter(Boolean);
  uniq.sort((a, b) => {
    const ra = rankLabel(a);
    const rb = rankLabel(b);
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
  });
  return uniq;
}

function collectAllRefLabels(layers) {
  if (!layers || typeof layers !== 'object') return [];
  const acc = [];
  for (const layer of Object.values(layers)) {
    acc.push(...labelsFromRefs(layer?.source_refs));
  }
  return sortLabelsUnique(acc);
}

/** Human line from refs only — never internal `source_status` wording. */
function formatLayerLine(layer) {
  if (!layer) return '';
  const fromRefs = labelsFromRefs(layer.source_refs);
  if (!fromRefs.length) return '';
  return fromRefs.join(' · ');
}

function buildSummary(layers) {
  const labels = collectAllRefLabels(layers);
  if (!labels.length) return '';
  if (labels.length > MAX_SUMMARY_LABELS) {
    return `${BASIS_PREFIX}${labels.slice(0, MAX_SUMMARY_LABELS).join(' · ')} · …`;
  }
  return `${BASIS_PREFIX}${labels.join(' · ')}`;
}

function buildBreakdownRows(layers) {
  const rows = [];
  if (!layers || typeof layers !== 'object') return rows;
  for (const [key, title] of LAYER_ORDER) {
    const layer = layers[key];
    if (!layer) continue;
    const line = formatLayerLine(layer);
    if (!line) continue;
    rows.push({ key, title, line });
  }
  const motI = rows.findIndex((r) => r.key === 'motivation');
  const thI = rows.findIndex((r) => r.key === 'theory');
  if (motI >= 0 && thI >= 0 && rows[motI].line === rows[thI].line) {
    rows.splice(motI, 1);
  }
  return rows;
}

/**
 * @param {object} opts
 * @param {string} opts.conceptId
 * @param {string} opts.activeTab
 * @param {Record<string, { source_status?: string, source_refs?: object[] }>|null|undefined} opts.layers
 * @returns {string} HTML fragment (may be empty)
 */
export function buildConceptProvenanceStripHtml({ conceptId, activeTab, layers }) {
  if (!conceptId) return '';
  const summary = buildSummary(layers);
  if (!summary) return '';

  const rows = buildBreakdownRows(layers);
  const withLine = rows.filter((r) => r.line);
  const uniqueLines = new Set(withLine.map((r) => r.line));
  const expandable = uniqueLines.size > 1;

  const safeTab = String(activeTab || 'tab').replace(/[^a-z0-9-]/gi, '');
  const detailId = `spd-${escapeAttr(conceptId)}-${escapeAttr(safeTab)}`.replace(/\s+/g, '');
  const lineId = `spl-${escapeAttr(conceptId)}-${escapeAttr(safeTab)}`.replace(/\s+/g, '');
  const confAttr = layers?.theory?.source_status || '';

  const markHtml = '<span class="source-provenance-mark" aria-hidden="true">ⓘ</span>';
  const lineHtml = `<p class="source-provenance-line" id="${escapeAttr(lineId)}">${escapeHtml(summary)}</p>`;

  if (!expandable) {
    return `<footer class="source-provenance source-provenance--static" role="note" data-source-confidence="${escapeAttr(confAttr)}">
<div class="source-provenance-inner">${markHtml}${lineHtml}</div>
</footer>`;
  }

  const detailRows = withLine
    .map(
      (r) =>
        `<div class="source-provenance-detail-row"><span class="source-provenance-detail-k">${escapeHtml(r.title)}</span><span class="source-provenance-detail-v">${escapeHtml(r.line)}</span></div>`
    )
    .join('');

  return `<footer class="source-provenance source-provenance--expandable" role="note" data-source-confidence="${escapeAttr(confAttr)}">
<div class="source-provenance-inner">
${markHtml}
${lineHtml}
<button type="button" class="source-provenance-expand" aria-expanded="false" aria-controls="${escapeAttr(detailId)}" aria-describedby="${escapeAttr(lineId)}" aria-label="Basis nach Bereichen" title="Basis nach Bereichen"><span class="source-provenance-expand-glyph" aria-hidden="true">▾</span></button>
</div>
<div class="source-provenance-detail" id="${escapeAttr(detailId)}" hidden>
<div class="source-provenance-detail-rows">${detailRows}</div>
</div>
</footer>`;
}

/**
 * @param {HTMLElement|null|undefined} root
 */
export function initConceptProvenanceInteractions(root) {
  if (!root?.querySelectorAll) return;
  root.querySelectorAll('.source-provenance-expand').forEach((btn) => {
    const wrap = btn.closest('.source-provenance');
    const panel = wrap?.querySelector('.source-provenance-detail');
    if (!wrap || !panel) return;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel.hidden = open;
    });
  });
}
