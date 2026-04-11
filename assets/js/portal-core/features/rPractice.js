const WEBR_MODULE_URL = 'https://webr.r-wasm.org/latest/webr.mjs';
const STORAGE_PREFIX = 'portal_r_practice_v1';

let webRPromise = null;
const practiceRegistry = new Map();
const blockRunRegistry = new WeakMap();

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

function sanitizeCodeLine(value) {
  return String(value ?? '').replace(/^Kernzeile heute:\s*/i, '').replace(/`/g, '').trim();
}

function extractCodeSnippetsFromList(values = []) {
  return values.flatMap((value) => extractCodeSnippets(value));
}

function getCodeLines(code) {
  return String(code || '')
    .split('\n')
    .map((line, index) => ({ line: line.trim(), lineNo: index + 1 }))
    .filter(({ line }) => Boolean(line));
}

function buildCodeChangeAnalysis(block) {
  const prompt = String(block.taskPrompt || block.question || block.miniTask || '');
  const starterCode = String(block.starterCode || block.code || '');
  const solutionCode = String(block.solutionCode || '');
  const codeLines = getCodeLines(starterCode);
  const solutionLines = getCodeLines(solutionCode);
  const changedLines = [];
  const maxLen = Math.max(codeLines.length, solutionLines.length);

  for (let index = 0; index < maxLen; index += 1) {
    const before = codeLines[index]?.line || '';
    const after = solutionLines[index]?.line || '';
    if (after && before !== after) {
      changedLines.push({ lineNo: solutionLines[index]?.lineNo || index + 1, before, after });
    }
  }

  return {
    prompt,
    starterCode,
    solutionCode,
    codeLines,
    solutionLines,
    changedLines,
    promptSnippets: extractCodeSnippets(prompt),
    solutionSnippets: extractCodeSnippetsFromList(block.solutionChanges || [])
  };
}

function lineMatchesSnippet(line, snippets = []) {
  const normalizedLine = sanitizeCodeLine(line);
  return snippets.some((snippet) => {
    const normalizedSnippet = sanitizeCodeLine(snippet);
    return normalizedSnippet && (normalizedLine.includes(normalizedSnippet) || normalizedSnippet.includes(normalizedLine));
  });
}

function findLine(codeLines, matcher) {
  return codeLines.find(({ line }) => matcher(line));
}

function selectChangedLine(analysis, predicate = null) {
  const candidates = predicate
    ? analysis.changedLines.filter((entry) => predicate(entry.after || entry.before || ''))
    : analysis.changedLines;
  return candidates[0] || null;
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

function inferFirstStep(block, taskMode, coreTarget = null) {
  if (block.firstStep) return block.firstStep;
  const snippets = extractCodeSnippets(block.taskPrompt || block.question || block.miniTask || '');
  if (taskMode === 'interpret') {
    return 'Lies zuerst den vorhandenen Output und markiere die Stelle, auf die sich die Frage fachlich bezieht.';
  }
  if (coreTarget?.lineNo && coreTarget?.cue) {
    return `Gehe direkt zu Zeile ${coreTarget.lineNo}: ${coreTarget.cue}`;
  }
  if (snippets.length) {
    return `Suche im Startcode zuerst ${joinNatural(snippets.map((snippet) => `\`${snippet}\``))} und ändere nur diese Stelle.`;
  }
  return 'Suche zuerst die eine Zeile oder den einen Parameter, den der Mini-Task verändert, und passe nur diese Stelle an.';
}

function inferChangeFocus(block, taskMode, coreTarget = null) {
  if (block.changeFocus) return block.changeFocus;
  const prompt = String(block.taskPrompt || block.question || block.miniTask || '').trim();
  const snippets = extractCodeSnippets(prompt);

  if (taskMode === 'interpret') {
    return 'Keine feste Codeänderung: Hier trainierst du das Lesen, Zuordnen und Deuten des vorhandenen Outputs.';
  }
  if (coreTarget?.cue) {
    return coreTarget.cue;
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

function inferCoreTarget(block) {
  const analysis = buildCodeChangeAnalysis(block);
  const text = `${analysis.prompt}\n${analysis.starterCode}\n${analysis.solutionCode}\n${(block.solutionChanges || []).join('\n')}`;

  if (block.coreLine) {
    const explicit = findLine(analysis.codeLines, (line) => line === block.coreLine || line.includes(block.coreLine));
    return {
      lineNo: explicit?.lineNo ?? null,
      expression: explicit?.line || block.coreLine,
      cue: block.coreCue || 'Arbeite nur an dieser einen Stelle.',
      analysis
    };
  }

  if (/leitkoeffizient|oeffnung|öffnung|vorzeichenbereich/i.test(text) && /curve\(/.test(text)) {
    const line = selectChangedLine(analysis, (entry) => /<- function/.test(entry))
      || findLine(analysis.solutionLines, (entry) => /<- function/.test(entry.line))
      || findLine(analysis.codeLines, (entry) => /<- function/.test(entry.line));
    return {
      lineNo: line?.lineNo ?? null,
      expression: line?.after || line?.line || '',
      cue: 'Ändere hier nur den Leitkoeffizienten vor dem Produkt.',
      analysis
    };
  }

  if (/\bx3\b/i.test(text) && /cbind\(/.test(text)) {
    const line = selectChangedLine(analysis, (entry) => /cbind\(/.test(entry))
      || findLine(analysis.solutionLines, (entry) => /cbind\(/.test(entry.line))
      || findLine(analysis.codeLines, (entry) => /cbind\(/.test(entry.line));
    return {
      lineNo: line?.lineNo ?? null,
      expression: line?.after || line?.line || '',
      cue: 'Ergänze hier die zusätzliche Regressorspalte in X.',
      analysis
    };
  }

  if (/predict\(/.test(text) && /prediction|confidence/i.test(text)) {
    const line = selectChangedLine(analysis, (entry) => /predict\(/.test(entry))
      || findLine(analysis.solutionLines, (entry) => /predict\(/.test(entry.line))
      || findLine(analysis.codeLines, (entry) => /predict\(/.test(entry.line));
    return {
      lineNo: line?.lineNo ?? null,
      expression: line?.after || line?.line || '',
      cue: 'Ändere hier nur den Parameter `interval = ...`.',
      analysis
    };
  }

  if (/coef\(model\)/.test(text) && /lm\(/.test(text)) {
    const line = selectChangedLine(analysis, (entry) => /coef\(model\)/.test(entry))
      || findLine(analysis.solutionLines, (entry) => /coef\(model\)/.test(entry.line))
      || findLine(analysis.codeLines, (entry) => /summary\(model\)\$coefficients/.test(entry.line));
    return {
      lineNo: line?.lineNo ?? null,
      expression: line?.after || line?.line || '',
      cue: 'Ergänze hier nur die zusätzliche Koeffizienten-Ausgabe.',
      analysis
    };
  }

  if (/t\.test/.test(text) && /conf\.level/i.test(text)) {
    const line = selectChangedLine(analysis, (entry) => /t\.test/.test(entry))
      || findLine(analysis.solutionLines, (entry) => /t\.test/.test(entry.line))
      || findLine(analysis.codeLines, (entry) => /t\.test/.test(entry.line));
    return {
      lineNo: line?.lineNo ?? null,
      expression: line?.after || line?.line || '',
      cue: 'Ändere hier nur das Konfidenzniveau im Testaufruf.',
      analysis
    };
  }

  if (/t\.test/.test(text) && /\bmu\s*=|Nullhypothese|H_0/i.test(text)) {
    const line = selectChangedLine(analysis, (entry) => /t\.test/.test(entry))
      || findLine(analysis.solutionLines, (entry) => /t\.test/.test(entry.line))
      || findLine(analysis.codeLines, (entry) => /t\.test/.test(entry.line));
    return {
      lineNo: line?.lineNo ?? null,
      expression: line?.after || line?.line || '',
      cue: 'Arbeite hier nur am Hypothesenwert `mu = ...`.',
      analysis
    };
  }

  const snippetLine = analysis.solutionLines.find(({ line }) => lineMatchesSnippet(line, [...analysis.promptSnippets, ...analysis.solutionSnippets]))
    || analysis.codeLines.find(({ line }) => lineMatchesSnippet(line, [...analysis.promptSnippets, ...analysis.solutionSnippets]));
  if (snippetLine) {
    return {
      lineNo: snippetLine.lineNo,
      expression: snippetLine.line,
      cue: `Arbeite hier nur an ${joinNatural([...analysis.promptSnippets, ...analysis.solutionSnippets].slice(0, 2).map((snippet) => `\`${sanitizeCodeLine(snippet)}\``))}.`,
      analysis
    };
  }

  const changedLine = selectChangedLine(analysis);
  if (changedLine) {
    return {
      lineNo: changedLine.lineNo,
      expression: changedLine.after,
      cue: 'Arbeite nur an dieser geänderten Zeile.',
      analysis
    };
  }

  const fallbackLine = findLine(analysis.codeLines, (line) => /(?:lm|t\.test|predict|cor|cov|mean|sd|var|hist|plot|anova|aov|cbind|optimize|optim|integrate|curve)\s*\(/.test(line));
  if (fallbackLine) {
    return {
      lineNo: fallbackLine.lineNo,
      expression: fallbackLine.line,
      cue: 'Diese Zeile ist der fachliche Hebel des Blocks.',
      analysis
    };
  }

  return {
    lineNo: null,
    expression: '',
    cue: 'Arbeite nur an der einen Stelle, die den Mini-Task verändert.',
    analysis
  };
}

function inferCoreLine(block) {
  if (block.coreLine) return block.coreLine;
  const taskText = String(block.taskPrompt || block.question || block.miniTask || '');
  const snippet = extractCodeSnippets(taskText)[0];
  if (snippet) return sanitizeCodeLine(snippet);
  const lines = String(block.starterCode || block.code || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const candidate = lines.find((line) => /(?:lm|t\.test|cor|cov|predict|mean|sd|var|hist|plot|anova)\s*\(/.test(line));
  if (candidate) return sanitizeCodeLine(candidate);
  return 'Die eine Zeile, die den Mini-Task fachlich verändert.';
}

function inferCoreLineAnchor(block, coreLine) {
  const codeLines = String(block.starterCode || block.code || '')
    .split('\n')
    .map((line, index) => ({ line: line.trim(), lineNo: index + 1 }))
    .filter(({ line }) => Boolean(line));
  const normalizedCore = sanitizeCodeLine(coreLine);
  if (!normalizedCore) return { lineNo: null, expression: '' };

  const direct = codeLines.find(({ line }) => line === normalizedCore);
  if (direct) return { lineNo: direct.lineNo, expression: direct.line };

  const partial = codeLines.find(({ line }) => line.includes(normalizedCore) || normalizedCore.includes(line));
  if (partial) return { lineNo: partial.lineNo, expression: partial.line };

  return { lineNo: null, expression: normalizedCore };
}

function inferMathFromSnippet(snippet) {
  const s = String(snippet || '').trim();
  const mu = /\bmu\s*=/.test(s);
  const conf = /conf\.level\s*=/.test(s);
  const alpha = /\balpha\b/i.test(s);
  const beta = /\bbeta\b/i.test(s);
  const rho = /\bcor\(|\bcov\(/.test(s);
  const mean = /\bmean\(/.test(s);
  const sd = /\bsd\(/.test(s);
  const variance = /\bvar\(/.test(s);
  if (mu) return '$\\mu_0$ (Hypothesenwert)';
  if (conf || alpha) return '$1-\\alpha$ (Konfidenzniveau)';
  if (rho) return '$\\rho$ / $\\mathrm{Cov}(X,Y)$';
  if (beta || /\blm\(/.test(s)) return '$\\beta$-Parameter im Regressionsmodell';
  if (mean || sd || variance) return '$\\bar{x}$, $s$, $\\mathrm{Var}(X)$';
  const lhs = s.split(/<-|=/)[0]?.trim();
  if (/^[A-Za-z][A-Za-z0-9_.]*$/.test(lhs || '')) return `$${lhs}$ (Modellobjekt)`;
  return 'Mathematische Zielgroesse';
}

function inferSpecificMathCodeMap(block, coreTarget) {
  const text = `${block.taskPrompt || block.miniTask || ''}\n${block.code || block.starterCode || ''}\n${block.solutionCode || ''}\n${(block.solutionChanges || []).join('\n')}`;

  if (/leitkoeffizient|oeffnung|öffnung|vorzeichenbereich/i.test(text) && /curve\(/.test(text)) {
    return [
      {
        math: '$a$ (Leitkoeffizient der Parabel)',
        code: coreTarget.expression || 'f <- function(x) a * (...)',
        meaning: 'Das Vorzeichen von $a$ steuert die Öffnung; die Nullstellenfaktoren bleiben gleich.'
      },
      {
        math: 'Nullstellen als feste Kontrollpunkte',
        code: 'points(c(-1, 3), c(0, 0), ...)',
        meaning: 'Diese Markierungen bleiben stehen und helfen dir zu prüfen, dass sich nur Öffnung und Vorzeichen kippen.'
      }
    ];
  }

  if (/\bx3\b/i.test(text) && /cbind\(/.test(text)) {
    return [
      {
        math: '$X \\in \\mathbb{R}^{n\\times k}$ mit zusätzlicher Spalte $x_3$',
        code: coreTarget.expression || 'X <- cbind(1, x2, x3)',
        meaning: 'Jede zusätzliche Regressorspalte erhöht die Parameterzahl $k$ um eins.'
      },
      {
        math: '$X\'X \\in \\mathbb{R}^{k\\times k}$',
        code: 't(X) %*% X',
        meaning: 'Mit drei Spalten in $X$ wird das Kreuzprodukt 3 × 3.'
      }
    ];
  }

  if (/predict\(/.test(text) && /prediction|confidence/i.test(text)) {
    return [
      {
        math: '$\\hat y(x)=E[Y\\mid X=x]$ für die neuen Werte in pred_df',
        code: 'predict(model, newdata = pred_df, ...)',
        meaning: 'Diese Zeile berechnet die Vorhersage für genau die neuen x-Werte, die du prüfen willst.'
      },
      {
        math: 'Erwartungswert- vs. Einzelprognoseintervall',
        code: 'interval = "confidence" / "prediction"',
        meaning: '`confidence` betrifft den mittleren Erwartungswert, `prediction` zusätzlich die Reststreuung einer neuen Beobachtung.'
      }
    ];
  }

  if (/coef\(model\)/.test(text) && /lm\(/.test(text)) {
    return [
      {
        math: '$\\hat\\beta_0, \\hat\\beta_1$',
        code: 'coef(model)',
        meaning: 'Diese Ausgabe liefert direkt Achsenabschnitt und Steigung des geschätzten Modells.'
      },
      {
        math: '$y = \\hat\\beta_0 + \\hat\\beta_1 x$',
        code: 'lm(y ~ x, data = df)',
        meaning: 'Das Regressionsmodell bestimmt, welche ceteris-paribus-Steigung du später sprachlich deutest.'
      }
    ];
  }

  if (/t\.test/.test(text) && /conf\.level/i.test(text)) {
    return [
      {
        math: '$1-\\alpha$ (Konfidenzniveau)',
        code: 'conf.level = 0.95 / 0.99',
        meaning: 'Höheres Niveau bedeutet mehr Sicherheit und deshalb ein breiteres Intervall.'
      },
      {
        math: 'plausible Populationsmittelwerte',
        code: 't.test(df$z, ...)',
        meaning: 'Der Testoutput zeigt, welche Mittelwerte mit der Stichprobe noch vereinbar bleiben.'
      }
    ];
  }

  if (/t\.test/.test(text) && /\bmu\s*=|Nullhypothese|H_0/i.test(text)) {
    return [
      {
        math: '$H_0: \\mu = \\mu_0$',
        code: 'mu = ...',
        meaning: 'Dieser Parameter setzt den Prüfwert der Nullhypothese.'
      },
      {
        math: 'Testentscheidung aus p-Wert und Intervall',
        code: 't.test(df$z, ...)',
        meaning: 'Der Befehl liefert die Evidenz, ob die Daten gegen $H_0$ sprechen.'
      }
    ];
  }

  if (/cor\(|cov\(/.test(text)) {
    return [
      {
        math: '$\\rho_{XY}$ bzw. $\\operatorname{Cov}(X,Y)$',
        code: 'cor(x, y, ...), cov(x, y)',
        meaning: 'Hier liest du Richtung und Stärke des Zusammenhangs ab, aber keine Kausalität.'
      }
    ];
  }

  if (/mean\(|sd\(|var\(/.test(text)) {
    return [
      {
        math: '$\\bar{x}$, $s$, $\\operatorname{Var}(X)$',
        code: 'mean(...), sd(...), var(...)',
        meaning: 'Diese Kennzahlen beschreiben Lage und Streuung derselben Variable im Datensatz.'
      }
    ];
  }

  return null;
}

function inferLearningGoal(block) {
  if (block.learningGoal) return block.learningGoal;
  const purpose = String(block.purpose || '').trim();
  if (purpose) return purpose;
  const miniTask = String(block.miniTask || '').trim();
  if (miniTask) return `Lernziel: ${miniTask}`;
  return 'Lernziel: Übersetze die Fachidee sauber in einen belastbaren R-Arbeitsschritt.';
}

function inferGoalBullets(block) {
  if (Array.isArray(block.goalBullets) && block.goalBullets.length) return block.goalBullets;

  const text = `${block.taskPrompt || block.miniTask || ''}\n${block.starterCode || block.code || ''}\n${block.solutionCode || ''}`;

  if (/sum\(\(1:4\)\^2\)|sum\(\(1:4\)\^3\)|prod\(1:4\)/.test(text)) {
    return [
      'Lies `sum((1:4)^2)` als mathematische Summe über die Folge 1, 2, 3, 4.',
      'Erkenne: `^2` bzw. `^3` verändert jeden Summanden, nicht nur das Endergebnis.',
      'Nutze den Output als Zahlenbeleg und benenne die Formel selbst in Worten oder Symbolen.'
    ];
  }

  if (/leitkoeffizient|oeffnung|öffnung|vorzeichenbereich/i.test(text) && /curve\(/.test(text)) {
    return [
      'Markiere zuerst die Funktionszeile, die den Leitkoeffizienten trägt.',
      'Halte Nullstellen und Plotaufbau fest und beobachte nur die qualitative Änderung.',
      'Lies den Plot als Beleg für deine algebraische Lesart, nicht als Ersatz dafür.'
    ];
  }

  if (/\bx3\b/i.test(text) && /cbind\(/.test(text)) {
    return [
      'Trenne erst das mathematische Objekt X von seiner R-Schreibweise.',
      'Ändere nur die Spaltenstruktur von X und prüfe danach die neue Dimension.',
      'Lies `X\'X` als Folge der Designmatrix und nicht als isolierten Codebefehl.'
    ];
  }

  if (/predict\(/.test(text) && /prediction|confidence/i.test(text)) {
    return [
      'Lies zuerst, ob du den Erwartungswert oder eine neue Einzelbeobachtung vorhersagst.',
      'Ändere nur den Intervalltyp im `predict(...)`-Aufruf.',
      'Vergleiche die Breite der Intervalle und begründe den Unterschied fachlich.'
    ];
  }

  return [];
}

function inferSuccessSignal(block, taskMode) {
  if (block.successSignal) return block.successSignal;
  if (taskMode === 'interpret') {
    return 'Erfolg: Du nennst Output-Stelle, Testlogik und inhaltliche Aussage in sauberer Reihenfolge.';
  }
  return 'Erfolg: Deine gezielte Änderung erzeugt einen Output, den du fachlich begründen kannst.';
}

function inferMathCodeMap(block) {
  if (Array.isArray(block.mathCodeMap) && block.mathCodeMap.length) return block.mathCodeMap;
  const coreTarget = inferCoreTarget(block);
  const explicitMap = inferSpecificMathCodeMap(block, coreTarget);
  if (explicitMap?.length) return explicitMap;
  const code = String(block.starterCode || block.code || '');
  const prompt = String(block.taskPrompt || block.miniTask || '');
  const analysis = buildCodeChangeAnalysis(block);
  const map = [];
  [...analysis.promptSnippets, ...analysis.solutionSnippets].slice(0, 2).forEach((snippet) => {
    map.push({
      math: inferMathFromSnippet(snippet),
      code: sanitizeCodeLine(snippet),
      meaning: 'Direkte Uebersetzung: diese Expression bestimmt die fachliche Aussage.'
    });
  });
  if (/conf\.level|Konfidenz|Intervall/i.test(`${prompt}\n${code}`)) {
    map.unshift({
      math: '$1-\\alpha$ (Konfidenzniveau)',
      code: 'conf.level = ...',
      meaning: 'Steuert die Intervallbreite: höheres Niveau -> breiteres Intervall.'
    });
  }
  if (/\bmu\b|H_0|Nullhypothese/i.test(`${prompt}\n${code}`)) {
    map.unshift({
      math: '$\\mu_0$ (Hypothesenwert)',
      code: 'mu = ...',
      meaning: 'Legt die zu prüfende Nullhypothese fest.'
    });
  }
  if (/cor\(|cov\(/.test(code)) {
    map.unshift({
      math: '$\\rho_{XY}$ bzw. $\\mathrm{Cov}(X,Y)$',
      code: 'cor(x, y, ...), cov(x, y)',
      meaning: 'Misst Richtung/Stärke des Zusammenhangs; nicht automatisch Kausalität.'
    });
  }
  if (/mean\(|sd\(|var\(/.test(code)) {
    map.unshift({
      math: '$\\bar{x}$, $s$, $\\mathrm{Var}(X)$',
      code: 'mean(...), sd(...), var(...)',
      meaning: 'Beschreibt Lage und Streuung der Variable im Datensatz.'
    });
  }
  if (/lm\(/.test(code)) {
    map.unshift({
      math: '$y = \\beta_0 + \\beta_1 x + u$',
      code: 'lm(y ~ x, data = ...)',
      meaning: 'Schätzt Regressionsparameter aus dem spezifizierten Modell.'
    });
  }
  if (!map.length && /\bmu\b|\bH_0\b|Konfidenz|Intervall|p-?Wert/i.test(prompt)) {
    map.push({
      math: 'Hypothesen- oder Intervallparameter',
      code: 'mu = ... / conf.level = ...',
      meaning: 'Diese Parameter setzen das mathematische Prüfziel im R-Aufruf.'
    });
  }
  if (!map.length) {
    const lines = code.split('\n').map((line) => line.trim()).filter(Boolean);
    const candidate = lines.find((line) => /(lm|t\.test|cor|cov|mean|sd|var|conf\.level|mu\s*=)\s*\(|\bmu\s*=|conf\.level\s*=/.test(line));
    if (candidate) {
      map.push({
        math: inferMathFromSnippet(candidate),
        code: sanitizeCodeLine(candidate),
        meaning: 'Diese Zeile ist die naechste sichere Mathe->R-Zuordnung im Startcode.'
      });
    }
  }
  if (!map.length) {
    map.push({
      math: '$\\theta$ (Zielparameter)',
      code: 'parameter = ...',
      meaning: 'Setze den Zielparameter explizit in der Kernzeile und pruefe die Output-Folge.'
    });
  }
  return map.slice(0, 3);
}

function inferCoreLineEffects(block, taskMode) {
  if (block.coreEffect && block.invariantHint) {
    return { effect: block.coreEffect, invariant: block.invariantHint };
  }
  const prompt = String(block.taskPrompt || block.miniTask || '');
  const code = String(block.starterCode || block.code || '');
  if (taskMode === 'interpret') {
    return {
      effect: 'Du änderst den Code nicht; die Lernleistung ist das fachliche Lesen des vorhandenen Outputs.',
      invariant: 'Code, Datengrundlage und Modellstruktur bleiben vollständig unverändert.'
    };
  }
  if (/leitkoeffizient|oeffnung|öffnung|vorzeichenbereich/i.test(prompt) && /curve\(/.test(code)) {
    return {
      effect: 'Das Vorzeichen des Leitkoeffizienten kippt Öffnung und Vorzeichenbereiche der Parabel.',
      invariant: 'Nullstellenmarkierung, Plotbereich und übriger Graph-Aufbau bleiben gleich.'
    };
  }
  if (/\bx3\b/i.test(prompt) && /cbind\(/.test(code)) {
    return {
      effect: 'X bekommt eine zusätzliche Spalte; damit steigen Parameterzahl und Dimension von X\'X.',
      invariant: 'Die Dimensionsbefehle und die Grundlogik des Kreuzprodukts bleiben gleich.'
    };
  }
  if (/predict\(/.test(code) && /prediction|confidence/i.test(prompt)) {
    return {
      effect: 'Du wechselst den Intervalltyp: Erwartungswertintervall statt Einzelprognoseintervall.',
      invariant: 'Datensatz, Regressionsmodell und die neuen x-Werte in `pred_df` bleiben gleich.'
    };
  }
  if (/conf\.level|Konfidenz|Intervall/i.test(prompt)) {
    return {
      effect: 'Das Sicherheitsniveau ändert sich; dadurch verschiebt sich die Intervallbreite.',
      invariant: 'Datensatz, Schätzmethode und Grundmodell bleiben gleich.'
    };
  }
  if (/mu\s*=|Nullhypothese|H_0/i.test(prompt)) {
    return {
      effect: 'Der Prüfwert der Nullhypothese ändert sich; p-Wert/Entscheidung können kippen.',
      invariant: 'Testverfahren und Daten bleiben gleich.'
    };
  }
  if (/x\b.*\bz\b|\bz\b.*\bx\b|ersetze.*x.*z/i.test(prompt)) {
    return {
      effect: 'Du wechselst die betrachtete Variable; Lage/Streuung/Zusammenhang werden neu bewertet.',
      invariant: 'Auswertelogik und Befehlsstruktur bleiben gleich.'
    };
  }
  return {
    effect: 'Die Kernzeile verändert die fachliche Aussage des Ergebnisses.',
    invariant: 'Die übrige Pipeline bleibt unverändert und dient als Kontrollgerüst.'
  };
}

function inferTransferPrompt(block) {
  if (block.transferPrompt) return block.transferPrompt;
  const prompt = String(block.taskPrompt || block.miniTask || '').trim();
  const code = String(block.starterCode || block.code || '');
  if (/predict\(/.test(code) && /prediction|confidence/i.test(prompt)) {
    return 'Prüfungsregel: Woran erkennst du im Output sofort, ob du ein Erwartungswert- oder ein Einzelprognoseintervall liest?';
  }
  if (/konfidenz|intervall/i.test(prompt)) {
    return 'Prüfungsregel: Wenn das Intervall breiter wird, was ändert sich fachlich an Sicherheit und Präzision?';
  }
  if (/p-?wert|hypothese|test/i.test(prompt)) {
    return 'Prüfungsregel: Formuliere dieselbe Testentscheidung in zwei Sätzen: formal und inhaltlich.';
  }
  if (/korrelation|cov|zusammenhang/i.test(prompt)) {
    return 'Prüfungsregel: Woran erkennst du, dass ein Zusammenhang stark ist, auch wenn das Vorzeichen wechselt?';
  }
  return 'Prüfungsregel: Welche eine Regel nimmst du aus dieser R-Übung direkt in die Klausur mit?';
}

function inferTaskSteps(block, config) {
  if (Array.isArray(block.taskSteps) && block.taskSteps.length) return block.taskSteps;

  if (config.taskMode === 'interpret') {
    return [
      config.firstStep,
      `Nimm genau diese Output-Evidenz: ${config.outputEvidenceHint}`,
      `Halte als Transferregel fest: ${config.transferRule}`
    ];
  }

  return [
    config.firstStep,
    `Führe danach aus und prüfe genau diese Output-Evidenz: ${config.outputEvidenceHint}`,
    `Behalte als Transferregel: ${config.transferRule}`
  ];
}

function inferOutputChecklist(block, config) {
  if (Array.isArray(block.outputChecklist) && block.outputChecklist.length) return block.outputChecklist;

  const text = `${block.taskPrompt || block.miniTask || ''}\n${block.starterCode || block.code || ''}`;

  if (/sum\(\(1:4\)\^2\)|sum\(\(1:4\)\^3\)|prod\(1:4\)/.test(text)) {
    return [
      'Im Output erscheint nur der Zahlenwert der geänderten Summe, nicht die Formel selbst.',
      'Übersetze diesen Zahlenwert zurück als `sum((1:4)^3)` bzw. als Σ-Schreibweise.',
      '`prod(1:4)` ist hier nur Vergleichsfolie und nicht die Zielzeile der Änderung.'
    ];
  }

  if (/leitkoeffizient|oeffnung|öffnung|vorzeichenbereich/i.test(text) && /curve\(/.test(text)) {
    return [
      'Im Konsolenfeld erscheint hier kein tiefer Plotbeweis; die fachliche Evidenz steckt im geänderten Graphen.',
      'Prüfe deshalb Öffnung, Vorzeichenbereiche und feste Nullstellen gemeinsam.',
      'Der Output ersetzt nicht die algebraische Lesart der Funktion.'
    ];
  }

  if (/\bx3\b/i.test(text) && /cbind\(/.test(text)) {
    return [
      'Prüfe zuerst die neue Dimension von X und dann die von X\'X.',
      'Die entscheidende Evidenz ist die zusätzliche Spalte in X, nicht bloß irgendein neuer Zahlenwert.',
      'Formuliere die Dimensionsänderung immer auch mathematisch.'
    ];
  }

  if (/predict\(/.test(text) && /prediction|confidence/i.test(text)) {
    return [
      'Vergleiche dieselben Vorhersagezeilen vor und nach der Änderung.',
      '`prediction` ist breiter, weil die Reststreuung einer neuen Beobachtung mitgeht.',
      '`confidence` beschreibt nur den geschätzten Mittelwert.'
    ];
  }

  return [
    'Nutze genau die Zeile, die deine Hypothese bestätigt oder falsifiziert.',
    'Halte fest, was der Output zeigt und was du zusätzlich fachlich selbst deuten musst.'
  ];
}

function inferOutputEvidenceHint(block) {
  if (block.outputEvidenceHint) return block.outputEvidenceHint;
  const prompt = String(block.taskPrompt || block.miniTask || '');
  const code = String(block.starterCode || block.code || '');
  if (/predict\(/.test(code) && /prediction|confidence/i.test(prompt)) {
    return 'Beweis im Output: Vergleiche dieselben Vorhersagezeilen vor und nach der Änderung. `prediction` ist breiter, weil es die Reststreuung einer neuen Einzelbeobachtung enthält; `confidence` betrifft nur den mittleren Erwartungswert.';
  }
  if (/p-?wert|test|hypothese/i.test(prompt)) {
    return 'Beweis im Output: Identifiziere Teststatistik + p-Wert + Konfidenzintervall. Erst dann die Entscheidung formulieren. Der Output liefert keine inhaltliche Kausalbegründung.';
  }
  if (/konfidenz|intervall/i.test(prompt)) {
    return 'Beweis im Output: Vergleiche die Intervallgrenzen vor/nach der Änderung. Der Output zeigt die Schätzunsicherheit, aber nicht automatisch ökonomische Relevanz.';
  }
  if (/cor|cov|zusammenhang/i.test(prompt)) {
    return 'Beweis im Output: Lies Vorzeichen und Größenordnung des Zusammenhangs. Der Output zeigt Assoziation, aber keine kausale Richtung.';
  }
  return 'Beweis im Output: Nutze genau die Zeile, die deine Hypothese bestätigt oder falsifiziert. Der Output ersetzt nicht die fachliche Interpretation.';
}

function inferTransferRule(block) {
  if (block.transferRule) return block.transferRule;
  const prompt = String(block.taskPrompt || block.miniTask || '');
  const code = String(block.starterCode || block.code || '');
  if (/predict\(/.test(code) && /prediction|confidence/i.test(prompt)) {
    return 'Prüfungsregel: `confidence` beschreibt den geschätzten Mittelwert, `prediction` die neue Einzelbeobachtung inklusive Reststreuung.';
  }
  if (/p-?wert|hypothese|test/i.test(prompt)) {
    return 'Prüfungsregel: Immer erst $H_0$, dann p-Wert-Vergleich, dann inhaltliche Aussage.';
  }
  if (/konfidenz|intervall/i.test(prompt)) {
    return 'Prüfungsregel: Höhere Sicherheit kostet Präzision (breiteres Intervall).';
  }
  if (/cor|cov|zusammenhang/i.test(prompt)) {
    return 'Prüfungsregel: Zusammenhang ≠ Kausalität; Vorzeichen und Maßstab getrennt deuten.';
  }
  return 'Prüfungsregel: Benenne zuerst den mathematischen Mechanismus, dann den R-Schritt, dann den Output-Beleg.';
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

function getBlockRunState(blockEl) {
  const existing = blockRunRegistry.get(blockEl);
  if (existing) return existing;
  const created = { running: false, stopRequested: false, runToken: 0 };
  blockRunRegistry.set(blockEl, created);
  return created;
}

function setRunButtonState(blockEl, mode = 'idle') {
  const runButton = blockEl.querySelector('[data-r-action="run"]');
  blockEl.querySelectorAll('[data-r-action="reset"], [data-r-action="insert-solution"]').forEach((button) => {
    button.disabled = mode === 'running' || mode === 'stopping';
  });
  if (!runButton) return;
  if (mode === 'running') {
    runButton.textContent = 'Stoppen';
    runButton.dataset.mode = 'running';
    return;
  }
  if (mode === 'stopping') {
    runButton.textContent = 'Anhalten…';
    runButton.dataset.mode = 'stopping';
    return;
  }
  runButton.textContent = 'Ausführen';
  runButton.dataset.mode = 'idle';
}

function buildRuntimeExpectation(mode, runtimeNote) {
  if (runtimeNote) return runtimeNote;
  if (mode === 'guided') {
    return 'Geführter Modus: Dieser Block stützt sich auf vorbereiteten Kurscode oder Zusatzpakete. Arbeite deshalb bewusst über Code-Lesen, Soll-Output und fachliche Deutung; wenn kein Live-Run vorgesehen ist, ist das hier Absicht und kein Defekt.';
  }
  return 'Du arbeitest direkt im Browser mit R. Wenn der Live-Run in deinem Browser oder Netzwerk nicht startet, bleibt der Block ehrlich beim Soll-Output und der fachlichen Interpretation, damit du die Lernlogik trotzdem sauber üben kannst.';
}

function inferOutputPlaceholder(block, runtimeMode) {
  if (block.outputPlaceholder) return block.outputPlaceholder;

  if (runtimeMode === 'guided') {
    return '[Geführter Modus]\nNutze Code, Soll-Output und Musterlösung als gemeinsames Belegpaket. Entscheidend ist hier die fachliche Deutung, nicht der Live-Run.]';
  }

  const text = `${block.taskPrompt || block.miniTask || ''}\n${block.starterCode || block.code || ''}`;

  if (/sum\(\(1:4\)\^2\)|sum\(\(1:4\)\^3\)|prod\(1:4\)/.test(text)) {
    return '[Nach "Code ausführen" erscheint hier nur der Zahlenwert der geänderten Summe.\nÜbersetze ihn selbst zurück in R- und Sigma-Schreibweise.]';
  }

  if (/\b(curve|plot|hist|boxplot|barplot)\s*\(/.test(text)) {
    return '[Dieser Block liefert den wichtigsten Beleg meist im Plot.\nWenn hier nur wenig Konsole erscheint, lies Plot-Code, Plotbild und Interpretation gemeinsam.]';
  }

  if (/predict\(/.test(text) && /prediction|confidence/i.test(text)) {
    return '[Hier erscheinen Vorhersagewert und Intervallgrenzen.\nVergleiche dieselben x-Werte vor und nach der Änderung.]';
  }

  return '[Nach „Code ausführen“ erscheint hier der Output.\nSuche darin die eine Zeile oder Zahl, die deine fachliche Aussage wirklich belegt.]';
}

function buildConfig(block, options = {}) {
  const moduleSlug = options.moduleSlug || block.moduleSlug || 'module';
  const blockId = options.blockId || block.id || `rblock_${Math.random().toString(36).slice(2, 8)}`;
  const runtimeMode = detectRuntimeMode(block);
  const taskPrompt = block.taskPrompt || block.question || block.miniTask || '';
  const taskMode = inferTaskMode(block);
  const coreTarget = inferCoreTarget(block);
  const changeFocus = inferChangeFocus(block, taskMode, coreTarget);
  const keepHint = inferKeepHint(block, taskMode);

  let purpose = block.purpose || '';

  const coreLine = coreTarget.expression || inferCoreLine(block);
  const coreAnchor = coreTarget.expression
    ? { lineNo: coreTarget.lineNo ?? null, expression: coreTarget.expression }
    : inferCoreLineAnchor(block, coreLine);

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
    learningGoal: inferLearningGoal(block),
    goalBullets: inferGoalBullets(block),
    successSignal: inferSuccessSignal(block, taskMode),
    coreLine,
    coreCue: coreTarget.cue,
    coreLineAnchor: coreAnchor,
    coreLineEffects: inferCoreLineEffects(block, taskMode),
    mathCodeMap: inferMathCodeMap(block),
    transferPrompt: inferTransferPrompt(block),
    transferRule: inferTransferRule(block),
    outputEvidenceHint: inferOutputEvidenceHint(block),
    outputChecklist: inferOutputChecklist(block, {
      taskMode,
      outputEvidenceHint: inferOutputEvidenceHint(block),
      transferRule: inferTransferRule(block),
      firstStep: inferFirstStep(block, taskMode, coreTarget)
    }),
    firstStep: inferFirstStep(block, taskMode, coreTarget),
    changeFocus,
    keepHint,
    taskSteps: inferTaskSteps(block, {
      taskMode,
      outputEvidenceHint: inferOutputEvidenceHint(block),
      transferRule: inferTransferRule(block),
      firstStep: inferFirstStep(block, taskMode, coreTarget)
    }),
    solution: block.solution || '',
    solutionCode: normalizeCode(block.solutionCode || ''),
    solutionChanges: Array.isArray(block.solutionChanges)
      ? block.solutionChanges
      : buildDefaultSolutionChanges(taskMode, changeFocus),
    pitfalls: Array.isArray(block.pitfalls) ? block.pitfalls : [],
    runtimeNote: buildRuntimeExpectation(runtimeMode, block.runtimeNote || ''),
    outputPlaceholder: inferOutputPlaceholder(block, runtimeMode)
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
  const mathMap = (config.mathCodeMap || []).map((entry) => `
  <div class="r-map-row">
    <div class="r-map-math"><span class="r-map-cell-label">Matheobjekt</span>${escapeHtml(entry.math || '')}</div>
    <div class="r-map-code"><span class="r-map-cell-label">Code-Stelle</span><code>${escapeHtml(entry.code || '')}</code></div>
    <div class="r-map-meaning">${escapeHtml(entry.meaning || '')}</div>
  </div>`).join('');

  const taskFlow = Array.isArray(config.taskSteps) && config.taskSteps.length
    ? config.taskSteps
    : [
      config.firstStep,
      config.taskMode === 'interpret'
        ? `Lies danach genau diese Output-Evidenz: ${config.outputEvidenceHint}`
        : `Führe danach aus und prüfe genau diese Output-Evidenz: ${config.outputEvidenceHint}`,
      `Behalte als Transferregel: ${config.transferRule}`
    ];

  return `<div class="r-lesson-flow">
  <div class="r-lesson-intro">
    <div class="r-orient-panel-kicker">Idee</div>
    <p>${escapeHtml(config.learningGoal)}</p>
    ${config.goalBullets?.length ? `<ul class="r-goal-list">${config.goalBullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
    <p class="r-goal-success"><strong>Ziel:</strong> ${escapeHtml(config.successSignal)}</p>
  </div>
  <div class="r-translation-block">
    <div class="r-orient-panel-kicker">Mathe ↔ R</div>
    <div class="r-map-grid">${mathMap || '<div class="r-map-fallback">Parameter → R-Ausdruck → Bedeutung</div>'}</div>
  </div>
  <div class="r-core-line">
    <span class="r-core-line-kicker">Kernzeile</span>
    <div class="r-core-line-meta">
      ${config.coreLineAnchor?.lineNo ? `<span class="r-core-line-line">Zeile ${config.coreLineAnchor.lineNo}</span>` : '<span class="r-core-line-line">Zielzeile</span>'}
      <span class="r-core-line-fragment">${escapeHtml(config.coreCue || 'Nur diese Expression ändern.')}</span>
    </div>
    <pre class="r-core-line-code"><code>${escapeHtml(config.coreLineAnchor?.expression || config.coreLine)}</code></pre>
    <div class="r-core-line-effects">
      <p><strong>Änderung →</strong> ${escapeHtml(config.coreLineEffects.effect)}</p>
      <p><strong>Invariant:</strong> ${escapeHtml(config.coreLineEffects.invariant)}</p>
    </div>
  </div>
  <div class="r-task-flow">
    <div class="r-orient-panel-kicker">Auftrag</div>
    <p class="r-task-prompt">${escapeHtml(config.taskPrompt || config.miniTask || 'Code lesen, Output prüfen, Aufgabe lösen.')}</p>
    <ol class="r-task-steps">
      ${taskFlow.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}
    </ol>
    <p class="r-task-guard"><strong>Nicht ändern:</strong> ${escapeHtml(config.keepHint)}</p>
  </div>
  </div>`;
}

function renderSolutionDetails(config) {
  const changeList = config.solutionChanges.length
    ? `<div class="r-solution-section">
  <div class="r-solution-subhead">Was sich ändert</div>
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
        ? 'Keine Codeänderung nötig — hier zählt Output-Lesen und fachliche Deutung.'
        : 'Ändere nur die eine entscheidende Stelle.'
    )}</div>`;

  return `<div class="r-solution-body">
  <div class="r-solution-label">Lösung</div>
  <p>${escapeHtml(config.solution)}</p>
  <div class="r-solution-loop">
    <strong>Argumentationskette:</strong> Fachliche Begründung → Codeänderung → entscheidende Output-Zeile.
  </div>
  <div class="r-solution-transfer"><strong>Prüfungsregel:</strong> ${escapeHtml(config.transferRule)}</div>
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
  ${renderTaskBriefs(config)}
  <div class="r-orient-first-action">
    <span class="r-orient-action-label">Erster Schritt:</span> ${escapeHtml(config.firstStep)}
  </div>
</div>
<div class="r-practice-workspace">
  <div class="r-practice-editor-card">
    <div class="r-practice-toolbar">
      <div>
        <div class="r-practice-toolbar-title">Nur die Kernzeile ändern</div>
      </div>
      <span class="r-runtime-pill" data-r-runtime-status>${config.runtimeMode === 'guided' ? 'Geführt' : 'Interaktiv'}</span>
    </div>
    <textarea class="r-practice-editor" data-r-editor spellcheck="false">${escapeHtml(config.starterCode)}</textarea>
    <div class="r-practice-actions">
      <button type="button" class="btn" data-r-action="run"${config.runtimeMode === 'guided' ? ' disabled' : ''}>${config.runtimeMode === 'guided' ? 'Nicht nötig' : 'Ausführen'}</button>
      <button type="button" class="btn secondary" data-r-action="reset">Zurücksetzen</button>
      <button type="button" class="btn secondary" data-r-action="insert-solution">Lösung einfügen</button>
    </div>
<div class="r-practice-help">
      <p><strong>Ändern:</strong> ${escapeHtml(config.changeFocus)}</p>
      <p><strong>Nicht ändern:</strong> ${escapeHtml(config.keepHint)}</p>
    </div>
  </div>
  <div class="r-practice-output-card">
    <div class="r-practice-output-head">
      <div>
        <div class="r-practice-toolbar-title">Was zählt im Output</div>
      </div>
    </div>
    <pre class="r-practice-output" data-r-output>${escapeHtml(config.outputPlaceholder)}</pre>
  </div>
</div>
<div class="r-practice-grid">
  <div class="r-practice-card">
    <h4>Output-Beweis</h4>
    <p>${escapeHtml(config.interpretation)}</p>
    <p class="r-output-proof">${escapeHtml(config.outputEvidenceHint)}</p>
  </div>
  <div class="r-practice-card">
    <h4>Aufgabe</h4>
    <p>${escapeHtml(config.miniTask)}</p>
    <p class="r-transfer-prompt">${escapeHtml(config.transferPrompt)}</p>
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
  const indexLabel = isMulti ? ` · ${index + 1} / ${total}` : '';
  const firstAction = config.runtimeMode === 'guided'
    ? 'Lies den Code durch. Nutze Interpretation und Aufgabe — ein Live-Run ist hier nicht nötig.'
    : 'Lies den Code einmal durch, dann „Code ausführen". Danach: Output → Interpretation → Aufgabe.';

  return `<div class="r-orient-card">
  <div class="r-orient-top">
    <div class="r-orient-head">
      <div class="r-orient-kicker">R-Übung${indexLabel}</div>
      <h3 class="r-orient-title">${escapeHtml(config.title)}</h3>
    </div>
    <span class="r-runtime-pill r-orient-pill" data-r-runtime-status data-status="${escapeHtml(config.runtimeMode === 'guided' ? 'guided' : '')}">${config.runtimeMode === 'guided' ? 'Geführt' : 'Interaktiv'}</span>
  </div>
  <p class="r-orient-purpose">${escapeHtml(config.purpose)}</p>
  ${renderTaskBriefs(config)}
  <div class="r-orient-first-action">
    <span class="r-orient-action-label">Erster Schritt:</span> ${escapeHtml(config.firstStep || firstAction)}
  </div>
  ${config.script ? `<div class="r-orient-script">${escapeHtml(config.script)}</div>` : ''}
</div>`;
}

function renderHighlightEditor(config) {
  const editHint = config.runtimeMode === 'guided'
    ? 'Lies Code und Output als gemeinsames Belegpaket.'
    : `Ändern: ${config.changeFocus}`;

  const actionLabel = config.runtimeMode === 'guided' ? 'Nicht nötig' : 'Ausführen';
  const runDisabled = config.runtimeMode === 'guided' ? ' disabled' : '';

  return `<div class="r-practice-editor-card">
  <div class="r-practice-toolbar">
      <div>
        <div class="r-practice-toolbar-title">Nur die Kernzeile ändern</div>
      </div>
  </div>
  <div class="r-highlight-wrap">
    <div class="r-highlight-display" data-r-highlight aria-hidden="true"></div>
    <textarea class="r-practice-editor r-hl-editor" data-r-editor spellcheck="false">${escapeHtml(config.starterCode)}</textarea>
  </div>
  <div class="r-practice-actions">
    <button type="button" class="btn" data-r-action="run"${runDisabled}>${escapeHtml(actionLabel)}</button>
    <button type="button" class="btn secondary" data-r-action="reset">Zurücksetzen</button>
    <button type="button" class="btn secondary" data-r-action="insert-solution">Lösung einfügen</button>
  </div>
  <div class="r-practice-help">
    <p>${escapeHtml(editHint)}</p>
    <p class="r-practice-help-subtle"><strong>Nicht ändern:</strong> ${escapeHtml(config.keepHint)}</p>
  </div>
</div>`;
}

function renderTabOutputCard(config) {
  return `<div class="r-practice-output-card r-tab-output-card">
  <div class="r-practice-output-head">
    <div>
      <div class="r-practice-toolbar-title">Was zählt im Output</div>
    </div>
  </div>
  <div class="r-output-focus">
    <div class="r-output-interp-kicker">Darauf achten</div>
    <ul class="r-output-focus-list">
      ${(config.outputChecklist || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
    </ul>
  </div>
  <pre class="r-practice-output" data-r-output>${escapeHtml(config.outputPlaceholder)}</pre>
  <div class="r-output-interp">
    <div class="r-output-interp-kicker">Was der Output belegt</div>
    <p>${escapeHtml(config.interpretation)}</p>
    <p class="r-output-proof">${escapeHtml(config.outputEvidenceHint)}</p>
  </div>
</div>`;
}

function renderTabBottomRow(config) {
  const pitfallsHtml = config.pitfalls.length
    ? `<div class="r-practice-pitfalls r-tab-pitfalls">
<h4>Typische Fehler</h4>
<ul>${config.pitfalls.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
</div>` : '';

  return `<div class="r-tab-bottom">
  <div class="r-practice-card r-tab-task-card">
    <h4>Aufgabe</h4>
    <p>${escapeHtml(config.miniTask)}</p>
    <p class="r-transfer-prompt">${escapeHtml(config.transferPrompt)}</p>
    <p class="r-transfer-rule"><strong>Prüfungsregel:</strong> ${escapeHtml(config.transferRule)}</p>
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

  return `<div class="r-lab-section r-practice-block" data-r-practice-root data-module-slug="${escapeHtml(config.moduleSlug)}" data-block-id="${escapeHtml(config.blockId)}" data-runtime-mode="${escapeHtml(config.runtimeMode)}">
${renderTabOrientationCard(config, index, total)}
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

function insertSolutionCode(blockEl, config) {
  const editor = blockEl.querySelector('[data-r-editor]');
  if (!editor) return;
  const replacement = config.solutionCode || config.starterCode;
  editor.value = replacement;
  editor.dispatchEvent(new Event('input'));

  const solution = blockEl.querySelector('[data-r-solution]');
  if (solution?.hidden) {
    toggleSolution(blockEl);
  }
}

async function requestRunStop(blockEl) {
  const state = getBlockRunState(blockEl);
  if (!state.running || state.stopRequested) return;
  state.stopRequested = true;
  setRunButtonState(blockEl, 'stopping');

  const status = blockEl.querySelector('[data-r-runtime-status]');
  const output = blockEl.querySelector('[data-r-output]');
  setRuntimeStatus(status, 'Ausführung wird angehalten…', 'loading');
  if (output && !/\[Ausführung wird angehalten/u.test(output.textContent || '')) {
    output.textContent = `${output.textContent || ''}\n\n[Ausführung wird angehalten…]`.trim();
  }

  try {
    const webR = await ensureWebR();
    if (typeof webR.interrupt === 'function') {
      await webR.interrupt();
    } else if (typeof webR.close === 'function') {
      await webR.close();
      webRPromise = null;
    }
  } catch {
    // Best effort only: the run handler will still fall back cleanly.
  }
}

async function handleRun(blockEl, config) {
  const editor = blockEl.querySelector('[data-r-editor]');
  const output = blockEl.querySelector('[data-r-output]');
  const status = blockEl.querySelector('[data-r-runtime-status]');
  if (!editor || !output) return;

  const state = getBlockRunState(blockEl);
  if (state.running) {
    await requestRunStop(blockEl);
    return;
  }

  const code = normalizeCode(editor.value);
  state.running = true;
  state.stopRequested = false;
  state.runToken += 1;
  const runToken = state.runToken;
  setRunButtonState(blockEl, 'running');
  output.textContent = 'Code wird ausgeführt…';
  setRuntimeStatus(status, 'R wird gestartet…', 'loading');

  try {
    const result = await executeR(config.moduleSlug, code);
    if (state.runToken !== runToken) return;
    if (state.stopRequested) {
      const stoppedMessage = '[Ausführung angehalten]\nDu kannst den Code jetzt anpassen oder erneut ausführen.';
      output.textContent = stoppedMessage;
      setRuntimeStatus(status, 'Ausführung angehalten', '');
      saveState(config.moduleSlug, config.blockId, {
        code,
        lastOutput: stoppedMessage,
        solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
      });
      return;
    }
    output.textContent = result;
    setRuntimeStatus(status, 'Interaktiv aktiv', 'success');
    saveState(config.moduleSlug, config.blockId, {
      code,
      lastOutput: result,
      solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
    });
  } catch (error) {
    if (state.runToken !== runToken) return;
    const message = error instanceof Error ? error.message : String(error);
    if (state.stopRequested || /interrupt|interrupted|abort|aborted|cancel/i.test(message)) {
      const stoppedMessage = '[Ausführung angehalten]\nDu kannst den Code jetzt anpassen oder erneut ausführen.';
      output.textContent = stoppedMessage;
      setRuntimeStatus(status, 'Ausführung angehalten', '');
      saveState(config.moduleSlug, config.blockId, {
        code,
        lastOutput: stoppedMessage,
        solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
      });
      return;
    }
    output.textContent = `[Interaktive Laufzeit nicht verfügbar]\n${message}\n\nNutze jetzt Soll-Output, Interpretationsblock und Musterlösung als ehrlichen Lern-Fallback.`;
    setRuntimeStatus(status, 'Didaktischer Fallback', 'fallback');
    saveState(config.moduleSlug, config.blockId, {
      code,
      lastOutput: output.textContent,
      solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
    });
  } finally {
    if (state.runToken === runToken) {
      state.running = false;
      state.stopRequested = false;
      setRunButtonState(blockEl, 'idle');
    }
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
    setRuntimeStatus(status, 'Geführt', 'guided');
  } else {
    setRunButtonState(blockEl, 'idle');
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
      setRuntimeStatus(status, 'Geführt', 'guided');
    } else {
      setRuntimeStatus(status, 'Interaktiv im Browser', '');
    }
    saveState(config.moduleSlug, config.blockId, {
      code: config.starterCode,
      lastOutput: config.outputPlaceholder,
      solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
    });
  });

  blockEl.querySelector('[data-r-action="run"]')?.addEventListener('click', () => {
    if (config.runtimeMode !== 'guided') {
      void handleRun(blockEl, config);
    }
  });

  blockEl.querySelector('[data-r-action="insert-solution"]')?.addEventListener('click', () => {
    insertSolutionCode(blockEl, config);
    saveState(config.moduleSlug, config.blockId, {
      ...loadState(config.moduleSlug, config.blockId),
      code: blockEl.querySelector('[data-r-editor]')?.value || config.solutionCode || config.starterCode,
      lastOutput: blockEl.querySelector('[data-r-output]')?.textContent || config.outputPlaceholder,
      solutionOpen: !blockEl.querySelector('[data-r-solution]')?.hidden
    });
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
