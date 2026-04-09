const WEBR_MODULE_URL = 'https://webr.r-wasm.org/latest/webr.mjs';
const STORAGE_PREFIX = 'portal_r_practice_v1';

let webRPromise = null;
const practiceRegistry = new Map();

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeCode(code) {
  return String(code ?? '').replace(/\r\n/g, '\n').trim();
}

function extractCodeSnippets(value) {
  return Array.from(String(value ?? '').matchAll(/`([^`]+)`/g))
    .map((match) => match[1].trim())
    .filter(Boolean);
}

function joinNatural(parts) {
  const filtered = parts.filter(Boolean);
  if (!filtered.length) return '';
  if (filtered.length === 1) return filtered[0];
  if (filtered.length === 2) return `${filtered[0]} und ${filtered[1]}`;
  return `${filtered.slice(0, -1).join(', ')} und ${filtered.at(-1)}`;
}

function inferTaskMode(block) {
  if (block.taskMode) return block.taskMode;
  const prompt = String(block.taskPrompt || block.question || block.miniTask || '').trim();
  if (!prompt) return 'edit';
  if (/^(erkläre|formuliere|nenne|beschreibe|prüfe,?\s*welches|lies|deute|begründe)/i.test(prompt)) {
    return 'interpret';
  }
  return 'edit';
}

function inferFirstStep(block, taskMode) {
  if (block.firstStep) return block.firstStep;
  const snippets = extractCodeSnippets(block.taskPrompt || block.question || block.miniTask || '');
  if (taskMode === 'interpret') {
    return 'Lies zuerst den vorhandenen Output und markiere die Stelle, auf die sich die Frage fachlich bezieht.';
  }
  if (snippets.length) {
    return `Suche im Startcode zuerst ${joinNatural(snippets.map((snippet) => `\`${snippet}\``))} und ändere nur diese Stelle.`;
  }
  return 'Suche zuerst die eine Zeile oder den einen Parameter, den der Mini-Task verändert, und passe nur diese Stelle an.';
}

function inferChangeFocus(block, taskMode) {
  if (block.changeFocus) return block.changeFocus;
  const prompt = String(block.taskPrompt || block.question || block.miniTask || '').trim();
  const snippets = extractCodeSnippets(prompt);

  if (taskMode === 'interpret') {
    return 'Keine feste Codeänderung: Hier trainierst du das Lesen, Zuordnen und Deuten des vorhandenen Outputs.';
  }
  if (snippets.length) {
    return `Arbeite nur an ${joinNatural(snippets.map((snippet) => `\`${snippet}\``))}; der restliche Startcode bleibt unverändert.`;
  }
  if (/^ersetze/i.test(prompt)) {
    return 'Ersetze genau den genannten Ausdruck oder das genannte Objekt und prüfe danach den neuen Output.';
  }
  if (/^ergänze/i.test(prompt)) {
    return 'Ergänze nur die eine geforderte Befehlszeile oder Ausgabezeile; den vorhandenen Workflow lässt du stehen.';
  }
  if (/^ändere/i.test(prompt)) {
    return 'Ändere gezielt den genannten Parameter oder die benannte Zeile und lies danach neu, wie sich der Output verschiebt.';
  }
  return 'Passe nur die Stelle an, die direkt zur Frage gehört, und vergleiche danach den Output mit deiner Erwartung.';
}

function inferKeepHint(block, taskMode) {
  if (block.keepHint) return block.keepHint;
  if (taskMode === 'interpret') {
    return 'Lass den gesamten Startcode unverändert; die Lernleistung liegt hier im Output-Lesen und in der fachlichen Deutung.';
  }

  const code = String(block.starterCode || block.code || '');
  const anchors = [];
  if (/set\.seed/.test(code)) anchors.push('set.seed(...)');
  if (/<-/.test(code)) anchors.push('den Daten- und Objektaufbau');
  if (/\b(plot|curve|hist|abline|points|lines|legend)\s*\(/.test(code)) anchors.push('den Plot-Aufbau');
  if (/\b(matrix|data\.frame|cbind|lm|t\.test|optimize|optim|integrate)\s*\(/.test(code)) anchors.push('die restliche Methodenstruktur');

  if (!anchors.length) {
    return 'Lass alle übrigen Zeilen stehen, solange der Mini-Task sie nicht ausdrücklich verändert.';
  }
  return `Lass ${joinNatural(anchors)} stehen, solange der Mini-Task sie nicht ausdrücklich verändert.`;
}

function buildDefaultSolutionChanges(taskMode, changeFocus) {
  if (taskMode === 'interpret') {
    return ['Keine Codeänderung nötig: Nutze den vorhandenen Output als Beleg und übersetze ihn sauber in Sprache.'];
  }
  return changeFocus ? [changeFocus] : [];
}

function escapeRString(value) {
  return String(value ?? '')
    .replaceAll('\\', '\\\\')
    .replaceAll('"', '\\"')
    .replaceAll('\n', '\\n');
}

function detectRuntimeMode(block) {
  if (block.runtimeMode) return block.runtimeMode;
  return /library\s*\(/.test(block.starterCode || block.code || '') ? 'guided' : 'live';
}

function buildEconometricsPrelude() {
  return String.raw`set.seed(123)
x  <- c(2, 3, 5, 7, 11, 13, 17, 19)
x1 <- c(1.0, 1.4, 1.8, 2.1, 2.5, 2.9, 3.3, 3.7)
x2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46, -3.49, -3.52, -3.55)
x3 <- c(0.2, 0.4, 0.7, 0.9, 1.1, 1.3, 1.6, 1.9)
u  <- c(-0.3, 0.2, -0.1, 0.4, -0.2, 0.1, -0.15, 0.05)
y  <- 1.5 + 0.8 * x1 - 0.6 * x2 + 0.4 * x3 + u
wage <- c(11.8, 12.4, 13.1, 13.5, 14.2, 14.8, 15.4, 16.1)
educ <- c(10, 11, 11, 12, 12, 13, 14, 15)
exper <- c(1, 2, 3, 4, 5, 6, 7, 8)
female <- c(0, 1, 0, 1, 0, 1, 0, 1)
ability <- c(0.1, 0.3, 0.2, 0.5, 0.4, 0.7, 0.6, 0.8)
classsize <- c(18, 20, 22, 24, 26, 28, 30, 32)
testscore <- c(78, 77, 75, 73, 71, 70, 68, 66)
df <- data.frame(y, x, x1, x2, x3, wage, educ, exper, female, ability, classsize, testscore)
school_df <- data.frame(testscore, classsize)
new_obs <- data.frame(x1 = 2.6, x2 = -3.48)
ts <- arima.sim(model = list(ar = 0.5), n = 120)`;
}

function buildStatisticsPrelude() {
  return String.raw`set.seed(7)
x <- c(12, 15, 18, 19, 21, 23, 25, 28)
y <- c(14, 16, 19, 22, 23, 25, 29, 31)
group <- rep(c("A", "B"), each = 4)
z <- c(110, 112, 109, 114, 118, 121, 123, 125)
df <- data.frame(x, y, group, z)
pred_df <- data.frame(x = c(20, 24))
anova_group <- factor(rep(c("Nord", "Mitte", "Sued"), each = 4))
score <- c(72, 75, 74, 76, 68, 70, 69, 71, 81, 83, 82, 84)
anova_df <- data.frame(group = anova_group, score)`;
}

function getRuntimePrelude(moduleSlug) {
  if (moduleSlug === 'oekonometrie') return buildEconometricsPrelude();
  if (moduleSlug === 'statistik') return buildStatisticsPrelude();
  return '';
}

async function ensureWebR() {
  if (!webRPromise) {
    webRPromise = (async () => {
      const { WebR } = await import(WEBR_MODULE_URL);
      const webR = new WebR();
      await webR.init();
      return webR;
    })().catch((error) => {
      webRPromise = null;
      throw error;
    });
  }

  return webRPromise;
}

async function executeR(moduleSlug, code) {
  const webR = await ensureWebR();
  const prelude = getRuntimePrelude(moduleSlug);
  const wrapped = `
    ${prelude}
    output <- capture.output({
${code}
    }, type = "output")
    if (length(output) == 0) {
      output <- c("[Kein konsolenpflichtiger Output erzeugt]")
    }
    output
  `;

  const result = await webR.evalR(wrapped);
  if (typeof result.toArray === 'function') {
    const arrayValue = await result.toArray();
    if (Array.isArray(arrayValue)) {
      return arrayValue.map((entry) => String(entry)).join('\n');
    }
  }
  const jsValue = typeof result.toJs === 'function' ? await result.toJs() : String(result);

  if (Array.isArray(jsValue)) {
    return jsValue.join('\n');
  }

  if (jsValue && typeof jsValue === 'object') {
    if (Array.isArray(jsValue.values)) {
      return jsValue.values.map((entry) => String(entry)).join('\n');
    }
    const compact = Object.values(jsValue)
      .filter((entry) => typeof entry === 'string' || typeof entry === 'number')
      .map((entry) => String(entry));
    if (compact.length) {
      return compact.join('\n');
    }
    return JSON.stringify(jsValue, null, 2);
  }

  return String(jsValue);
}

function buildRuntimeExpectation(mode, runtimeNote) {
  if (runtimeNote) return runtimeNote;
  if (mode === 'guided') {
    return 'Geführter Modus: Dieser Block nutzt Kurscode, der zusätzliche Pakete oder vorbereitete Übungsobjekte voraussetzt. Die Aufgabe bleibt editierbar, aber die Laufzeit wird bewusst durch Soll-Output und Interpretation gestützt.';
  }
  return 'Live-Modus: Der Code läuft direkt im Browser über WebR (WebAssembly). Falls WebR in deinem Browser oder Netzwerk nicht startet, bleibt die Aufgabe im ehrlichen Fallback und verweist auf den Soll-Output.';
}

function buildConfig(block, options = {}) {
  const moduleSlug = options.moduleSlug || block.moduleSlug || 'module';
  const blockId = options.blockId || block.id || `rblock_${Math.random().toString(36).slice(2, 8)}`;
  const runtimeMode = detectRuntimeMode(block);
  const taskPrompt = block.taskPrompt || block.question || block.miniTask || '';
  const taskMode = inferTaskMode(block);
  const changeFocus = inferChangeFocus(block, taskMode);
  const keepHint = inferKeepHint(block, taskMode);

  let purpose = block.purpose || '';
  if (moduleSlug === 'statistik') {
    const oekHint = 'Gleiche Arbeitsreihenfolge wie im Ökonometrie-Modul: Output lesen → Mini-Task → Code zuordnen.';
    if (purpose && !/\bÖkonometrie\b/i.test(purpose)) {
      purpose = `${oekHint} ${purpose}`;
    } else if (!purpose) {
      purpose = oekHint;
    }
  }

  return {
    moduleSlug,
    blockId,
    runtimeMode,
    title: block.title || 'Vom Modell zur Auswertung',
    purpose,
    script: block.script || '',
    conceptId: options.conceptId || block.conceptId || '',
    starterCode: normalizeCode(block.starterCode || block.code || ''),
    interpretation: block.interpretation || block.output || '',
    miniTask: block.miniTask || '',
    taskPrompt,
    taskMode,
    firstStep: inferFirstStep(block, taskMode),
    changeFocus,
    keepHint,
    solution: block.solution || '',
    solutionCode: normalizeCode(block.solutionCode || ''),
    solutionChanges: Array.isArray(block.solutionChanges)
      ? block.solutionChanges
      : buildDefaultSolutionChanges(taskMode, changeFocus),
    pitfalls: Array.isArray(block.pitfalls) ? block.pitfalls : [],
    runtimeNote: buildRuntimeExpectation(runtimeMode, block.runtimeNote || ''),
    outputPlaceholder: block.outputPlaceholder || (runtimeMode === 'guided'
      ? '[Geführter Modus]\nNutze den Editor, die Interpretationskarte und die Musterlösung, um den Ablauf kursnah nachzuvollziehen.'
      : '[Output erscheint hier nach "Code ausführen".]')
  };
}

function renderPitfalls(pitfalls) {
  if (!pitfalls.length) return '';
  return `<div class="r-practice-pitfalls">
<h4>Häufige Fehler</h4>
<ul>${pitfalls.map((pitfall) => `<li>${escapeHtml(pitfall)}</li>`).join('')}</ul>
</div>`;
}

function renderTaskBriefs(config) {
  return `<div class="r-orient-grid">
  <div class="r-orient-panel">
    <div class="r-orient-panel-kicker">Arbeitsauftrag</div>
    <p>${escapeHtml(config.taskPrompt || config.miniTask || 'Lies den Code, prüfe den Output und arbeite den Mini-Task ab.')}</p>
  </div>
  <div class="r-orient-panel">
    <div class="r-orient-panel-kicker">${config.taskMode === 'interpret' ? 'Codefokus' : 'Was du änderst'}</div>
    <p>${escapeHtml(config.changeFocus)}</p>
  </div>
  <div class="r-orient-panel">
    <div class="r-orient-panel-kicker">Was stehen bleibt</div>
    <p>${escapeHtml(config.keepHint)}</p>
  </div>
</div>`;
}

function renderSolutionDetails(config) {
  const changeList = config.solutionChanges.length
    ? `<div class="r-solution-section">
  <div class="r-solution-subhead">So ändert sich dein Zugriff</div>
  <ul class="r-solution-list">
    ${config.solutionChanges.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
  </ul>
</div>`
    : '';

  const codeBlock = config.solutionCode
    ? `<div class="r-solution-section">
  <div class="r-solution-subhead">Zielcode</div>
  <pre class="r-solution-code"><code>${renderHighlightedR(config.solutionCode)}</code></pre>
</div>`
    : `<div class="r-solution-note">${escapeHtml(
      config.taskMode === 'interpret'
        ? 'Keine Codeänderung nötig: Diese R-Übung prüft vor allem Output-Lesen und fachliche Deutung.'
        : 'Die Musterlösung erklärt den Lösungsweg. Wenn du den Code änderst, halte dich an den beschriebenen Zielschritt.'
    )}</div>`;

  return `<div class="r-solution-body">
  <div class="r-solution-label">Musterlösung</div>
  <p>${escapeHtml(config.solution)}</p>
  ${changeList}
  ${codeBlock}
</div>`;
}

export function renderRPracticeMarkup(block, options = {}) {
  const config = buildConfig(block, options);
  practiceRegistry.set(`${config.moduleSlug}:${config.blockId}`, config);

  return `<div class="section-block r-application-block r-practice-block" data-r-practice-root data-module-slug="${escapeHtml(config.moduleSlug)}" data-block-id="${escapeHtml(config.blockId)}" data-runtime-mode="${escapeHtml(config.runtimeMode)}">
<div class="r-practice-head">
  <div class="r-practice-headline">
    <span class="r-application-kicker">R-Übung</span>
    <h3>${escapeHtml(config.title)}</h3>
  </div>
  <p class="r-practice-bridge">${escapeHtml(config.purpose)}</p>
  <div class="r-practice-meta-row">
    ${config.script ? `<div class="r-script-ref">${escapeHtml(config.script)}</div>` : ''}
    <div class="r-runtime-note">${escapeHtml(config.runtimeNote)}</div>
  </div>
  ${renderTaskBriefs(config)}
  <div class="r-orient-first-action">
    <span class="r-orient-action-label">Dein erster Schritt:</span> ${escapeHtml(config.firstStep)}
  </div>
</div>
<div class="r-practice-workspace">
  <div class="r-practice-editor-card">
    <div class="r-practice-toolbar">
      <div>
        <div class="r-practice-toolbar-kicker">Codebereich</div>
        <div class="r-practice-toolbar-title">Ändern, ausführen, interpretieren</div>
      </div>
      <span class="r-runtime-pill" data-r-runtime-status>${config.runtimeMode === 'guided' ? 'Modus: geführt' : 'Runtime: bereit'}</span>
    </div>
    <textarea class="r-practice-editor" data-r-editor spellcheck="false">${escapeHtml(config.starterCode)}</textarea>
    <div class="r-practice-actions">
      <button type="button" class="btn" data-r-action="run"${config.runtimeMode === 'guided' ? ' disabled' : ''}>${config.runtimeMode === 'guided' ? 'Live-Run nicht nötig' : 'Code ausführen'}</button>
      <button type="button" class="btn secondary" data-r-action="reset">Startcode</button>
      <button type="button" class="btn secondary" data-r-action="toggle-solution">Musterlösung</button>
    </div>
    <div class="r-practice-help">
      <span class="r-practice-help-label">So arbeitest du (Reihenfolge)</span>
      <ol class="r-practice-help-steps">
        <li><strong>Zuerst:</strong> Lies den Block <em>Arbeitsauftrag</em> — dort steht die konkrete Frage.</li>
        <li><strong>Dann:</strong> Vergleiche den Code mit <em>Output lesen</em> (was soll rauskommen?).</li>
        <li><strong>Bearbeiten:</strong> ${escapeHtml(config.changeFocus)}</li>
        <li><strong>Nicht ändern:</strong> ${escapeHtml(config.keepHint)}</li>
        <li><strong>Ausführen:</strong> ${config.runtimeMode === 'guided' ? 'Live-Run ist absichtlich aus — nutze Musterlösung und Interpretation wie in der Vorlesungsübung.' : '„Code ausführen“ — vergleiche die Konsole mit „Output lesen“.'}</li>
        <li><strong>Interpretation:</strong> Formuliere in eigenen Worten, was das Ergebnis für die Modulfrage bedeutet.</li>
      </ol>
      <p class="r-practice-help-foot">${config.runtimeMode === 'guided'
    ? 'Geführter Modus: Fokus auf Lesen und Zuordnen; WebR-Live ist hier nicht der Hauptweg.'
    : 'Live-Modus: WebR läuft im Browser; bei Fehlern zuerst Tippfehler prüfen, dann Musterlösung.'}</p>
    </div>
  </div>
  <div class="r-practice-output-card">
    <div class="r-practice-output-head">
      <div>
        <div class="r-practice-toolbar-kicker">Output</div>
        <div class="r-practice-toolbar-title">Konsole und Rückmeldung</div>
      </div>
    </div>
    <pre class="r-practice-output" data-r-output>${escapeHtml(config.outputPlaceholder)}</pre>
  </div>
</div>
<div class="r-practice-grid">
  <div class="r-practice-card">
    <h4>Output lesen</h4>
    <p>${escapeHtml(config.interpretation)}</p>
  </div>
  <div class="r-practice-card">
    <h4>Mini-Task</h4>
    <p>${escapeHtml(config.miniTask)}</p>
    <button type="button" class="r-inline-toggle" data-r-action="toggle-solution">Musterlösung anzeigen</button>
    <div class="r-practice-solution" data-r-solution hidden>
      ${renderSolutionDetails(config)}
    </div>
  </div>
</div>
${renderPitfalls(config.pitfalls)}
</div>`;
}

// ─── Syntax Highlighting ────────────────────────────────────────────────────

const R_HIGHLIGHT_PATTERNS = [
  { type: 'comment',  re: /^#[^\n]*/ },
  { type: 'string',   re: /^"(?:[^"\\]|\\.)*"|^'(?:[^'\\]|\\.)*'/ },
  { type: 'number',   re: /^\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/ },
  {
    type: 'keyword',
    re: /^\b(?:if|else|for|while|repeat|break|next|return|function|TRUE|FALSE|NULL|NA|Inf|NaN)\b/
  },
  {
    type: 'builtin',
    re: /^\b(?:c|list|data\.frame|matrix|cbind|rbind|print|cat|paste|paste0|sprintf|str|summary|head|tail|dim|nrow|ncol|length|names|colnames|rownames|which|subset|merge|apply|sapply|lapply|tapply|do\.call|tryCatch|stop|warning|message|library|require|source|mean|sd|var|median|sum|min|max|range|cor|cov|lm|glm|t\.test|chisq\.test|anova|aov|predict|residuals|fitted|coef|confint|plot|hist|boxplot|barplot|abline|points|lines|legend|par|set\.seed|arima\.sim|capture\.output|as\.numeric|as\.character|as\.factor|factor|is\.na|complete\.cases|table|prop\.table|cumsum|diff|log|exp|sqrt|abs|round|floor|ceiling|sign|seq|seq_len|seq_along|rep|rev|sort|order|rank|unique|duplicated|nchar|substr|toupper|tolower|trimws|gsub|grepl|strsplit|format|setwd|getwd|read\.csv|write\.csv)\b/
  },
  { type: 'operator', re: /^(?:<-|->|<<-|->>|%%|%\*%|%in%|%o%|::|:=|[+\-*\/^&|!<>=]+)/ },
  { type: 'ws',       re: /^\s+/ },
  { type: 'id',       re: /^[A-Za-z_.][A-Za-z0-9_.]*/ },
];

function tokenizeR(code) {
  const tokens = [];
  let remaining = String(code ?? '');
  while (remaining.length > 0) {
    let hit = false;
    for (const { type, re } of R_HIGHLIGHT_PATTERNS) {
      const m = re.exec(remaining);
      if (m) {
        tokens.push({ type, value: m[0] });
        remaining = remaining.slice(m[0].length);
        hit = true;
        break;
      }
    }
    if (!hit) {
      tokens.push({ type: 'other', value: remaining[0] });
      remaining = remaining.slice(1);
    }
  }
  return tokens;
}

function renderHighlightedR(code) {
  return tokenizeR(code).map(({ type, value }) => {
    const esc = escapeHtml(value);
    if (type === 'ws' || type === 'other') return esc;
    return `<span class="r-t-${type}">${esc}</span>`;
  }).join('');
}

function mountHighlighter(blockEl) {
  const editor = blockEl.querySelector('[data-r-editor]');
  const display = blockEl.querySelector('[data-r-highlight]');
  if (!editor || !display) return;

  function update() {
    // Append a trailing space so last-line height stays accurate
    display.innerHTML = renderHighlightedR(editor.value) + '\u200b';
    display.scrollTop = editor.scrollTop;
    display.scrollLeft = editor.scrollLeft;
  }

  update();
  editor.addEventListener('input', update);
  editor.addEventListener('scroll', () => {
    display.scrollTop = editor.scrollTop;
    display.scrollLeft = editor.scrollLeft;
  });
}

// ─── Dedicated R-Anwendung Tab Renderer ────────────────────────────────────

function renderFlowSteps(config) {
  const steps = config.taskMode === 'interpret'
    ? ['Aufgabe lesen', config.runtimeMode === 'guided' ? 'Output lesen' : 'Code ausführen', 'Output deuten', 'Musterlösung']
    : config.runtimeMode === 'guided'
      ? ['Aufgabe lesen', 'Code lesen', 'Mini-Task', 'Musterlösung']
      : ['Aufgabe lesen', 'Code ändern', 'Ausführen', 'Output deuten'];
  return `<div class="r-flow-steps" aria-hidden="true">
${steps.map((label, i) => `<div class="r-flow-step"><span class="r-step-num">${i + 1}</span><span class="r-step-label">${label}</span></div>${i < steps.length - 1 ? '<div class="r-flow-sep">→</div>' : ''}`).join('')}
</div>`;
}

function renderTabOrientationCard(config, index, total) {
  const isMulti = total > 1;
  const indexLabel = isMulti ? ` · Block ${index + 1} von ${total}` : '';
  const firstAction = config.runtimeMode === 'guided'
    ? 'Lies den Code sorgfältig durch. Nutze die Interpretation und den Mini-Task — ein Live-Run ist hier nicht erforderlich.'
    : 'Lies den Code einmal durch, dann klicke „Code ausführen". Danach: Output lesen → Interpretation → Mini-Task.';

  return `<div class="r-orient-card">
  <div class="r-orient-top">
    <div class="r-orient-head">
      <div class="r-orient-kicker">R-Übung${indexLabel}</div>
      <h3 class="r-orient-title">${escapeHtml(config.title)}</h3>
    </div>
    <span class="r-runtime-pill r-orient-pill" data-r-runtime-status data-status="${escapeHtml(config.runtimeMode === 'guided' ? 'guided' : '')}">${config.runtimeMode === 'guided' ? 'Modus: geführt' : 'Runtime: bereit'}</span>
  </div>
  <p class="r-orient-purpose">${escapeHtml(config.purpose)}</p>
  ${renderTaskBriefs(config)}
  <div class="r-orient-first-action">
    <span class="r-orient-action-label">Dein erster Schritt:</span> ${escapeHtml(config.firstStep || firstAction)}
  </div>
  ${renderFlowSteps(config)}
  ${config.script ? `<div class="r-orient-script">${escapeHtml(config.script)}</div>` : ''}
</div>`;
}

function renderHighlightEditor(config) {
  const editHint = config.runtimeMode === 'guided'
    ? 'Alle Zeilen lesbar. Kein Live-Run erforderlich.'
    : 'Ändere gezielt die Zeilen, die der Mini-Task nennt. Alle anderen Zeilen bleiben wie sie sind.';

  const actionLabel = config.runtimeMode === 'guided' ? 'Live-Run nicht nötig' : 'Code ausführen';
  const runDisabled = config.runtimeMode === 'guided' ? ' disabled' : '';

  return `<div class="r-practice-editor-card">
  <div class="r-practice-toolbar">
    <div>
      <div class="r-practice-toolbar-kicker">Codebereich</div>
      <div class="r-practice-toolbar-title">Bearbeite gezielt — nicht alles auf einmal</div>
    </div>
  </div>
  <div class="r-highlight-wrap">
    <div class="r-highlight-display" data-r-highlight aria-hidden="true"></div>
    <textarea class="r-practice-editor r-hl-editor" data-r-editor spellcheck="false">${escapeHtml(config.starterCode)}</textarea>
  </div>
  <div class="r-practice-actions">
    <button type="button" class="btn" data-r-action="run"${runDisabled}>${escapeHtml(actionLabel)}</button>
    <button type="button" class="btn secondary" data-r-action="reset">Startcode</button>
    <button type="button" class="btn secondary" data-r-action="toggle-solution">Musterlösung</button>
  </div>
  <div class="r-practice-help">
    <span class="r-practice-help-label">Bearbeitungshinweis</span>
    <span>${escapeHtml(editHint)}</span>
    <span class="r-practice-help-subtle">${escapeHtml(config.keepHint)}</span>
  </div>
</div>`;
}

function renderTabOutputCard(config) {
  const outputTitle = config.runtimeMode === 'guided'
    ? 'Erwarteter Output · Geführt'
    : 'Konsolenausgabe · Live WebR';

  return `<div class="r-practice-output-card r-tab-output-card">
  <div class="r-practice-output-head">
    <div>
      <div class="r-practice-toolbar-kicker">Output</div>
      <div class="r-practice-toolbar-title">${outputTitle}</div>
    </div>
  </div>
  <pre class="r-practice-output" data-r-output>${escapeHtml(config.outputPlaceholder)}</pre>
  <div class="r-output-interp">
    <div class="r-output-interp-kicker">So liest du den Output</div>
    <p>${escapeHtml(config.interpretation)}</p>
  </div>
</div>`;
}

function renderTabBottomRow(config) {
  const pitfallsHtml = config.pitfalls.length
    ? `<div class="r-practice-pitfalls r-tab-pitfalls">
<h4>Häufige Fehler</h4>
<ul>${config.pitfalls.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
</div>` : '';

  return `<div class="r-tab-bottom">
  <div class="r-practice-card r-tab-task-card">
    <h4>Mini-Task</h4>
    <p>${escapeHtml(config.miniTask)}</p>
    <button type="button" class="r-inline-toggle" data-r-action="toggle-solution">Musterlösung anzeigen</button>
    <div class="r-practice-solution" data-r-solution hidden>
      ${renderSolutionDetails(config)}
    </div>
  </div>
  ${pitfallsHtml}
</div>`;
}

function renderRLabSection(block, moduleSlug, index, total, options = {}) {
  const conceptKey = options.conceptId || options.conceptKey || '';
  const blockId = options.blockId || (conceptKey
    ? `rtab_${moduleSlug}_${conceptKey}_${index}`
    : `rtab_${moduleSlug}_${index}`);
  const config = buildConfig(block, { moduleSlug, blockId });
  practiceRegistry.set(`${config.moduleSlug}:${config.blockId}`, config);

  const runtimeNote = config.runtimeNote;

  return `<div class="r-lab-section r-practice-block" data-r-practice-root data-module-slug="${escapeHtml(config.moduleSlug)}" data-block-id="${escapeHtml(config.blockId)}" data-runtime-mode="${escapeHtml(config.runtimeMode)}">
${renderTabOrientationCard(config, index, total)}
<div class="r-runtime-note r-tab-runtime-note">${escapeHtml(runtimeNote)}</div>
<div class="r-practice-workspace">
  ${renderHighlightEditor(config)}
  ${renderTabOutputCard(config)}
</div>
${renderTabBottomRow(config)}
</div>`;
}

export function renderRAnwendungTab(blocks, moduleSlug, options = {}) {
  if (!blocks || !blocks.length) return '';
  const total = blocks.length;

  const sectionsHtml = blocks.map((block, index) => {
    const blockId = options.conceptId
      ? `rtab_${moduleSlug}_${options.conceptId}_${index + 1}`
      : `rtab_${moduleSlug}_${index + 1}`;
    return renderRLabSection(block, moduleSlug, index, total, { blockId, conceptId: options.conceptId });
  }).join('\n<div class="r-lab-divider" aria-hidden="true"></div>\n');

  return `<div class="r-tab-panel">${sectionsHtml}</div>`;
}

// ─── State & Mount Logic ────────────────────────────────────────────────────

function loadState(moduleSlug, blockId) {
  try {
    return JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}:${moduleSlug}:${blockId}`) || '{}');
  } catch {
    return {};
  }
}

function saveState(moduleSlug, blockId, state) {
  localStorage.setItem(`${STORAGE_PREFIX}:${moduleSlug}:${blockId}`, JSON.stringify(state));
}

function setRuntimeStatus(node, text, status = '') {
  if (!node) return;
  node.textContent = text;
  node.dataset.status = status;
}

function readConfig(blockEl) {
  const moduleSlug = blockEl.dataset.moduleSlug || '';
  const blockId = blockEl.dataset.blockId || '';
  return practiceRegistry.get(`${moduleSlug}:${blockId}`) || null;
}

function hydrateOutput(blockEl, config, state) {
  const output = blockEl.querySelector('[data-r-output]');
  if (!output) return;
  output.textContent = state.lastOutput || config.outputPlaceholder;
}

function toggleSolution(blockEl) {
  const solution = blockEl.querySelector('[data-r-solution]');
  if (!solution) return;
  solution.hidden = !solution.hidden;
  blockEl.querySelectorAll('[data-r-action="toggle-solution"]').forEach((button) => {
    button.textContent = solution.hidden ? 'Musterlösung anzeigen' : 'Musterlösung ausblenden';
  });
  if (!solution.hidden && window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([solution]).catch(() => {});
  }
}

async function handleRun(blockEl, config) {
  const editor = blockEl.querySelector('[data-r-editor]');
  const output = blockEl.querySelector('[data-r-output]');
  const status = blockEl.querySelector('[data-r-runtime-status]');
  if (!editor || !output) return;

  const code = normalizeCode(editor.value);
  output.textContent = 'Code wird ausgeführt…';
  setRuntimeStatus(status, 'Runtime: lädt WebR…', 'loading');

  try {
    const result = await executeR(config.moduleSlug, code);
    output.textContent = result;
    setRuntimeStatus(status, 'Runtime: WebR aktiv', 'success');
    saveState(config.moduleSlug, config.blockId, {
      code,
      lastOutput: result,
      solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    output.textContent = `[Live-Runtime nicht verfügbar]\n${message}\n\nNutze den Interpretationsblock und die Musterlösung als didaktischen Fallback.`;
    setRuntimeStatus(status, 'Runtime: Fallback', 'fallback');
    saveState(config.moduleSlug, config.blockId, {
      code,
      lastOutput: output.textContent,
      solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
    });
  }
}

function mountBlock(blockEl) {
  if (!blockEl || blockEl.dataset.rPracticeMounted === 'true') return;
  blockEl.dataset.rPracticeMounted = 'true';

  const config = readConfig(blockEl);
  if (!config) return;
  const state = loadState(config.moduleSlug, config.blockId);
  const editor = blockEl.querySelector('[data-r-editor]');
  const status = blockEl.querySelector('[data-r-runtime-status]');

  if (editor && state.code) {
    editor.value = state.code;
  }

  hydrateOutput(blockEl, config, state);

  if (state.solutionOpen) {
    const solution = blockEl.querySelector('[data-r-solution]');
    if (solution) {
      solution.hidden = false;
      blockEl.querySelectorAll('[data-r-action="toggle-solution"]').forEach((button) => {
        button.textContent = 'Musterlösung ausblenden';
      });
    }
  }

  if (config.runtimeMode === 'guided') {
    setRuntimeStatus(status, 'Modus: geführt', 'guided');
  }

  // Mount syntax highlighting for tab-style editor (has overlay)
  mountHighlighter(blockEl);

  editor?.addEventListener('input', () => {
    saveState(config.moduleSlug, config.blockId, {
      ...loadState(config.moduleSlug, config.blockId),
      code: editor.value,
      solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
    });
  });

  blockEl.querySelector('[data-r-action="reset"]')?.addEventListener('click', () => {
    if (editor) {
      editor.value = config.starterCode;
      // Update the highlight display via synthetic input event
      editor.dispatchEvent(new Event('input'));
    }
    hydrateOutput(blockEl, config, {});
    if (config.runtimeMode === 'guided') {
      setRuntimeStatus(status, 'Modus: geführt', 'guided');
    } else {
      setRuntimeStatus(status, 'Runtime: bereit', '');
    }
    saveState(config.moduleSlug, config.blockId, {
      code: config.starterCode,
      lastOutput: config.outputPlaceholder,
      solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
    });
  });

  blockEl.querySelector('[data-r-action="run"]')?.addEventListener('click', () => {
    if (config.runtimeMode !== 'guided') {
      handleRun(blockEl, config);
    }
  });

  blockEl.querySelectorAll('[data-r-action="toggle-solution"]').forEach((button) => {
    button.addEventListener('click', () => {
      toggleSolution(blockEl);
      saveState(config.moduleSlug, config.blockId, {
        ...loadState(config.moduleSlug, config.blockId),
        code: blockEl.querySelector('[data-r-editor]')?.value || config.starterCode,
        lastOutput: blockEl.querySelector('[data-r-output]')?.textContent || config.outputPlaceholder,
        solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
      });
    });
  });
}

export function mountRPracticeBlocks(root) {
  if (!root) return;
  root.querySelectorAll('[data-r-practice-root]').forEach((blockEl) => {
    mountBlock(blockEl);
  });
}

export function describeRRuntimeMode(root) {
  if (!root) return { live: 0, guided: 0 };
  const result = { live: 0, guided: 0 };
  root.querySelectorAll('[data-r-practice-root]').forEach((blockEl) => {
    const config = readConfig(blockEl);
    if (config?.runtimeMode === 'guided') result.guided += 1;
    else result.live += 1;
  });
  return result;
}
