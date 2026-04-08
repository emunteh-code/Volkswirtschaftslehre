export function createRenderer({
  courseLabel,
  courseTitle,
  homeIntro,
  chapters,
  contentById,
  intuitionById,
  conceptLinks,
  renderGraphPanel,
  graphConcepts,
  renderMastery,
  renderMath,
  loadProgress,
  loadLastId,
  getDueCards,
  renderDashboard,
  getPracticeTasks = (conceptId, contentEntry) => contentEntry?.aufgaben || [],
  hasRBlock = () => false,
  renderRAnwendungPanel = null,
  /** Raw HTML inserted inside the home action row (optional; e.g. Konzept-Check card) */
  extraHomeActionCardsHtml = '',
  /** Optional one-line note under the Lern-Dashboard home card (pilot modules only) */
  homeLernDashboardPilotNote = ''
}) {
  let current = null;
  let currentTab = "theorie";
  const chapterMap = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter]));

  function stripHtml(html) {
    return String(html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function shortenText(text, maxLength = 220) {
    const normalized = stripHtml(text);
    if (normalized.length <= maxLength) return normalized;
    return `${normalized.slice(0, maxLength - 1).trim()}…`;
  }

  function hasMeaningfulText(value) {
    const normalized = stripHtml(value);
    if (!normalized) return false;
    const lowered = normalized.toLowerCase();
    return ![
      "undefined",
      "null",
      "formeln folgen.",
      "intuitions-karte folgt in kuerze.",
      "intuitions-karte folgt in kürze."
    ].includes(lowered);
  }

  function normalizeIntuitionData(data) {
    if (!data) return null;

    const mentalModel = Array.isArray(data.mentalModel)
      ? data.mentalModel.filter((entry) => hasMeaningfulText(entry?.body))
      : [];

    const core = hasMeaningfulText(data.core)
      ? data.core
      : mentalModel[0]?.body || "";

    const analogy = hasMeaningfulText(data.analogy)
      ? data.analogy
      : mentalModel[1]?.body || "";

    const bridge = hasMeaningfulText(data.bridge) ? data.bridge : "";
    const exam = Array.isArray(data.exam)
      ? data.exam.filter((entry) => hasMeaningfulText(entry?.if) && hasMeaningfulText(entry?.then))
      : [];

    return {
      core,
      analogy,
      bridge,
      exam
    };
  }

  function hasMeaningfulIntuition(data) {
    const normalized = normalizeIntuitionData(data);
    if (!normalized) return false;
    return Boolean(
      hasMeaningfulText(normalized.core)
      || hasMeaningfulText(normalized.analogy)
      || hasMeaningfulText(normalized.bridge)
      || normalized.exam.length
    );
  }

  function hasFormulas(entry) {
    return Array.isArray(entry?.formeln) && entry.formeln.some((formula) => hasMeaningfulText(formula?.eq));
  }

  function summarizeVariables(variables) {
    if (!variables || !Object.keys(variables).length) return "";
    return Object.entries(variables)
      .map(([key, value]) => `$${key}$: ${value}`)
      .join(" | ");
  }

  function createPracticeTask(text, steps, result) {
    return {
      text,
      steps: steps
        .filter((step) => hasMeaningfulText(step?.text) || hasMeaningfulText(step?.eq))
        .map((step) => ({
          text: step.text || "",
          eq: step.eq || null
        })),
      result
    };
  }

  function buildSupplementalPracticeTasks(chapter, entry, intuition) {
    const supplements = [];
    const { sections, warnings } = extractTheorySignals(entry);
    const normalizedIntuition = normalizeIntuitionData(intuition);
    const links = conceptLinks[chapter.id] || { uses: [], usedBy: [] };

    const pushTask = (task) => {
      if (!task?.text || !task?.steps?.length || !task?.result) return;
      const key = `${stripHtml(task.text)}|${stripHtml(task.result)}`.toLowerCase();
      if (!key.trim()) return;
      if (supplements.some((existing) => `${stripHtml(existing.text)}|${stripHtml(existing.result)}`.toLowerCase() === key)) {
        return;
      }
      supplements.push(task);
    };

    (entry?.formeln || []).forEach((formula, index) => {
      const warning = warnings[index % Math.max(1, warnings.length)];
      pushTask(createPracticeTask(
        `Arbeite "${formula.label}" bei "${chapter.title}" so auf, dass du die Beziehung in einer Klausur sicher einsetzen und deuten kannst.`,
        [
          { text: "Starte mit der zentralen Beziehung und halte die formale Struktur sauber fest.", eq: formula.eq },
          { text: formula.desc || `Beschreibe, welche ökonomische oder logische Beziehung diese Formel im Kapitel ${chapter.title} ausdrückt.` },
          { text: summarizeVariables(formula.variables) || "Ordne alle Variablen sauber zu und markiere, welche Größen geändert werden dürfen und welche als gegeben behandelt werden." },
          { text: warning ? `Fehlerkontrolle: ${warning.label}. ${warning.body}` : (normalizedIntuition?.bridge || `Leite aus der Beziehung eine typische Klausurfolge für ${chapter.title} ab.`) }
        ],
        `${formula.label}: Formel, Notation und Einsatzlogik sind für ${chapter.title} abrufbar.`
      ));
    });

    sections.forEach((section, index) => {
      const warning = warnings[index % Math.max(1, warnings.length)];
      const formula = entry?.formeln?.[index % Math.max(1, entry?.formeln?.length || 1)];
      pushTask(createPracticeTask(
        `Baue aus dem Theorieblock "${section.heading}" eine klausurfeste Argumentation für "${chapter.title}" auf.`,
        [
          { text: `Definiere zuerst den Kern des Abschnitts in einem sauberen Satz: ${section.paragraph}` },
          { text: entry?.motivation ? `Ordne den Abschnitt in das Kapitelziel ein: ${entry.motivation}` : `Ordne den Abschnitt in die Gesamtlogik von ${chapter.title} ein.` },
          formula?.eq
            ? { text: "Verbinde die Theorie mit dem passenden formalen Anker.", eq: formula.eq }
            : { text: normalizedIntuition?.bridge || "Leite daraus die wichtigste Mechanik oder Richtungsaussage für die Klausur ab." },
          { text: warning ? `Typischer Fehler: ${warning.label}. ${warning.body}` : "Schließe mit einer Kontrollfrage ab: Welche Konsequenz folgt aus dem Theorieblock für Anwendung, Interpretation oder Vorzeichen?" }
        ],
        `"${section.heading}" sitzt als Definition, Mechanismus und Konsequenz.`
      ));
    });

    warnings.forEach((warning, index) => {
      const section = sections[index % Math.max(1, sections.length)];
      const formula = entry?.formeln?.[index % Math.max(1, entry?.formeln?.length || 1)];
      pushTask(createPracticeTask(
        `Entschärfe den typischen Fehler "${warning.label}" bei "${chapter.title}" anhand eines sauberen Gegenbeispiels.`,
        [
          { text: `Formuliere die Fehlvorstellung offen: ${warning.body}` },
          { text: section ? `Stelle die korrekte Kapitel-Logik daneben: ${section.paragraph}` : `Stelle die korrekte Kapitel-Logik daneben und benenne den richtigen Zugriff auf ${chapter.title}.` },
          formula?.eq
            ? { text: "Verankere die Korrektur in der formalen Beziehung des Kapitels.", eq: formula.eq }
            : { text: "Verankere die Korrektur in der zentralen Definition oder dem korrekten Begriffsgebrauch." },
          { text: "Formuliere eine kurze Selbstkontrolle, mit der du diesen Fehler in der Klausur aktiv vermeidest." }
        ],
        `Fehler "${warning.label}" ist für ${chapter.title} aktiv abgesichert.`
      ));
    });

    if (normalizedIntuition && hasMeaningfulIntuition(normalizedIntuition)) {
      pushTask(createPracticeTask(
        `Nutze die Intuition von "${chapter.title}", um ein belastbares Klausurerkennungsmuster aufzubauen.`,
        [
          { text: normalizedIntuition.core || `Halte die Kernidee von ${chapter.title} in einem anschaulichen Satz fest.` },
          { text: normalizedIntuition.analogy || "Lege ein Bild oder eine Analogie fest, an der du die Richtung des Konzepts wiedererkennst." },
          { text: normalizedIntuition.bridge || "Verbinde die anschauliche Ebene mit der formalen oder argumentativen Lösung." },
          { text: normalizedIntuition.exam?.[0] ? `Klausurmuster: Wenn ${normalizedIntuition.exam[0].if}, dann ${normalizedIntuition.exam[0].then}.` : "Formuliere zum Schluss einen Satz, der den Sprung von Intuition zu Prüfungslösung ausdrückt." }
        ],
        `${chapter.title}: Intuition, formaler Zugriff und Klausurmuster greifen ineinander.`
      ));
    }

    if ((links.uses && links.uses.length) || (links.usedBy && links.usedBy.length)) {
      const previousTitle = links.uses?.[0] ? chapterMap[links.uses[0]]?.title : "";
      const nextTitle = links.usedBy?.[0] ? chapterMap[links.usedBy[0]]?.title : "";
      pushTask(createPracticeTask(
        `Ordne "${chapter.title}" sauber in den Konzeptfluss des Portals ein.`,
        [
          { text: previousTitle ? `Benenne zuerst, was aus "${previousTitle}" für ${chapter.title} vorausgesetzt wird.` : `Benenne zuerst, welche Vorkenntnisse du für ${chapter.title} aktivierst.` },
          { text: entry?.motivation || `${chapter.title} ist ein eigenständiger Baustein, der in die Kurslogik eingeordnet werden muss.` },
          { text: nextTitle ? `Leite daraus ab, warum "${nextTitle}" auf diesem Kapitel aufbaut.` : "Leite daraus ab, welche Anschlussfrage im weiteren Stoff als nächstes folgt." },
          { text: "Schließe mit einer Kontrollformel, Leitdefinition oder Kernaussage ab, damit der Übergang im Klausurkopf verankert ist." }
        ],
        `${chapter.title} ist als Vorkenntnis-Folge-Logik im Stofffluss verankert.`
      ));
    }

    for (let index = 0; supplements.length < 10 && index < 12; index += 1) {
      const anchor = supplements[supplements.length - 1];
      const formula = entry?.formeln?.[0];
      const focusLabel = ["Definition", "Mechanik", "Vorzeichen", "Transfer"][index % 4];
      pushTask(createPracticeTask(
        `Verdichte "${chapter.title}" zu einer klausurfesten Kontrollaufgabe mit Fokus auf ${focusLabel}.`,
        [
          { text: entry?.motivation || `${chapter.title} ist ein Kernbaustein des Themengebiets ${chapter.cat}.` },
          formula?.eq
            ? { text: "Nutze den formalen Hauptanker des Kapitels als Startpunkt.", eq: formula.eq }
            : { text: "Nutze die zentrale Definition oder den Kernmechanismus des Kapitels als Startpunkt." },
          { text: anchor?.result ? `Kontrolliere, ob deine Argumentation mit folgendem Leitresultat konsistent ist: ${anchor.result}` : "Kontrolliere, ob deine Argumentation von Definition über Mechanik bis Ergebnis geschlossen ist." },
          { text: `Formuliere abschließend den einen Satz, den du in einer Prüfung unter Zeitdruck sicher hinschreiben könntest, diesmal mit Schwerpunkt auf ${focusLabel}.` }
        ],
        `${chapter.title}: ${focusLabel} ist in einem kompakten Kontrollschema verfügbar.`
      ));
    }

    return supplements;
  }

  function buildPracticeTasks(chapter, entry, intuition) {
    const baseTasks = getPracticeTasks(chapter.id, entry).map((task) => ({
      ...task,
      steps: Array.isArray(task?.steps) ? task.steps : [],
      result: task?.result || "Arbeite den Lösungsweg sauber aus und sichere das Ergebnis formal."
    }));

    if (baseTasks.length >= 10) return baseTasks;

    const supplementalTasks = buildSupplementalPracticeTasks(chapter, entry, intuition);
    const seen = new Set(baseTasks.map((task) => stripHtml(task.text).toLowerCase()));

    supplementalTasks.forEach((task) => {
      const key = stripHtml(task.text).toLowerCase();
      if (!key || seen.has(key) || baseTasks.length >= 10) return;
      seen.add(key);
      baseTasks.push(task);
    });

    return baseTasks.slice(0, 10);
  }

  function updateTabButtons(activeTab, availability) {
    document.querySelectorAll("#tabRow button[data-tab]").forEach((button) => {
      const { tab } = button.dataset;
      // r-anwendung is opt-in: must be explicitly true to show
      const visible = tab === "theorie"
        || tab === "aufgaben"
        || (tab === "r-anwendung" ? availability[tab] === true : availability[tab] !== false);
      button.style.display = visible ? "" : "none";
      const isActive = visible && tab === activeTab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
      if (tab === "r-anwendung" && visible) {
        button.textContent = "R-Übung";
        button.title =
          "R-Code aus der Vorlesung: zuerst Output lesen, dann Mini-Task — wie im Ökonometrie-Portal; hier ausführen, falls WebR aktiv ist.";
      }
    });
  }

  function extractTheorySignals(entry) {
    if (!entry?.theorie || typeof DOMParser === "undefined") {
      return { sections: [], warnings: [] };
    }

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${entry.theorie}</div>`, "text/html");

      const sections = Array.from(doc.querySelectorAll(".section-block"))
        .map((section) => {
          const heading = section.querySelector("h3")?.textContent?.trim();
          const paragraph = section.querySelector("p")?.textContent?.trim();
          if (!heading || !paragraph) return null;
          return { heading, paragraph };
        })
        .filter(Boolean);

      const warnings = Array.from(doc.querySelectorAll(".warn-box"))
        .map((warning) => {
          const strong = warning.querySelector("strong");
          const label = strong?.textContent?.trim() || "Typischer Fehler";
          if (strong) strong.remove();
          const body = warning.textContent?.trim();
          if (!body) return null;
          return { label, body };
        })
        .filter(Boolean);

      return { sections, warnings };
    } catch {
      return { sections: [], warnings: [] };
    }
  }

  /** Intuition tab can show theory-derived Fehleranalyse / Vertiefung even when INTUITION data is thin. */
  function hasPortalIntuitionSurface(conceptId) {
    const entry = contentById[conceptId];
    const { sections, warnings } = extractTheorySignals(entry);
    return (warnings && warnings.length > 0) || (sections && sections.length > 1);
  }

  function buildExamDrills(chapter, entry, intuition) {
    const drills = [];
    const { sections, warnings } = extractTheorySignals(entry);

    drills.push({
      tag: "Kernidee",
      question: `Worum geht es beim Konzept "${chapter.title}" in einem klausurtauglichen Kernsatz?`,
      answer: entry?.motivation || `${chapter.title} ist ein Grundbaustein aus ${chapter.cat}.`
    });

    (entry?.formeln || []).forEach((formula) => {
      drills.push({
        tag: formula.label,
        question: `Welche Formel bzw. Beziehung musst du für "${formula.label}" bei "${chapter.title}" sicher beherrschen?`,
        answer: `${formula.eq}${formula.desc ? `<div class="exam-drill-note">${formula.desc}</div>` : ""}`
      });

      if (formula.variables && Object.keys(formula.variables).length) {
        drills.push({
          tag: "Notation",
          question: `Wie interpretierst du die Variablen in "${formula.label}"?`,
          answer: `<ul class="exam-drill-list">${Object.entries(formula.variables).map(([key, value]) => `<li><strong>$${key}$</strong>: ${value}</li>`).join("")}</ul>`
        });
      }
    });

    (intuition?.exam || []).forEach((pattern, index) => {
      drills.push({
        tag: `Klausurmuster ${index + 1}`,
        question: `Wenn in der Klausur ${pattern.if} auftaucht, woran musst du denken?`,
        answer: pattern.then
      });
    });

    (entry?.aufgaben || []).forEach((task, index) => {
      drills.push({
        tag: `Exam-Aufgabe ${index + 1}`,
        question: `Wie würdest du die folgende examensnahe Aufgabe zu "${chapter.title}" lösen? ${shortenText(task.text, 180)}`,
        answer: task.result || "Arbeite mit den im Portal gezeigten Rechenschritten und prüfe das Ergebnis formal."
      });
    });

    sections.slice(0, 4).forEach((section, index) => {
      drills.push({
        tag: `Theorie ${index + 1}`,
        question: `Erkläre den Theorieblock "${section.heading}" in klausurgeeigneter Kurzform.`,
        answer: section.paragraph
      });
    });

    warnings.slice(0, 4).forEach((warning, index) => {
      drills.push({
        tag: `Fehler ${index + 1}`,
        question: `Welcher typische Fehler lauert bei "${chapter.title}" unter dem Stichwort "${warning.label}"?`,
        answer: warning.body
      });
    });

    if (intuition?.bridge) {
      drills.push({
        tag: "Verständnis",
        question: `Wie verknüpfst du die formale Seite von "${chapter.title}" mit ihrer ökonomischen Intuition?`,
        answer: intuition.bridge
      });
    }

    const seenQuestions = new Set();
    const uniqueDrills = drills.filter((drill) => {
      const key = drill.question.trim();
      if (seenQuestions.has(key)) return false;
      seenQuestions.add(key);
      return true;
    });

    while (uniqueDrills.length < 10) {
      uniqueDrills.push({
        tag: "Prüfungsanker",
        question: `Welchen ersten formalen oder argumentativen Zugriff solltest du bei einer Prüfungsfrage zu "${chapter.title}" wählen?`,
        answer: entry?.formeln?.[0]?.eq
          ? `${entry.formeln[0].eq}${entry.formeln[0].desc ? `<div class="exam-drill-note">${entry.formeln[0].desc}</div>` : ""}`
          : (entry?.motivation || `${chapter.title} gehört zu ${chapter.cat}. Starte mit der zentralen Definition und der ökonomischen Intuition.`)
      });
    }

    return uniqueDrills.slice(0, 10);
  }

  function renderExamDrillDeck(chapter, entry, intuition) {
    const drills = buildExamDrills(chapter, entry, intuition);
    return `<div class="exam-drill-panel">
<div class="practice-section-header">Prüfungstransfer</div>
<p style="font-size:13px;color:var(--muted);margin-bottom:16px">Diese Kurzfragen verdichten Theorie, Formeln, typische Fehler und vorhandene Aufgaben zu einer kompakten klausurnahen Wiederholung.</p>
<div class="exam-drill-grid">
${drills.map((drill, index) => {
  const drillId = `${chapter.id.replace(/[^a-zA-Z0-9_]/g, "_")}_${index}`;
  return renderQuestionCard({
    label: `Prüfungsfrage ${index + 1}`,
    question: drill.question,
    buttonId: `examDrillBtn_${drillId}`,
    buttonText: "Lösung anzeigen",
    openButtonText: "Lösung verbergen",
    toggleCall: `window.__toggleExamDrill('${drillId}')`,
    answerId: `examDrill_${drillId}`,
    cardClass: "exam-drill-card",
    answerClass: "exam-drill-answer",
    answerMarkup: `<h4>Musterlösung</h4>
${drill.tag ? `<div class="exam-drill-meta">${drill.tag}</div>` : ""}
<div class="exam-drill-solution">${drill.answer}</div>`
  });
}).join("")}
</div>
</div>`;
  }

  function renderQuestionCard({
    label,
    question,
    buttonId,
    buttonText = "Lösung anzeigen",
    openButtonText = "Lösung verbergen",
    toggleCall,
    answerId,
    cardClass = "",
    answerClass = "",
    answerMarkup = ""
  }) {
    const classes = ["problem-card", cardClass].filter(Boolean).join(" ");
    const answerClasses = ["solution-block", answerClass].filter(Boolean).join(" ");

    return `<div class="${classes}">
<div class="prob-num">${label}</div>
<div class="prob-text">${question}</div>
<div class="prob-actions">
<button class="btn" id="${buttonId}" data-closed-label="${buttonText}" data-open-label="${openButtonText}" onclick="${toggleCall}">${buttonText}</button>
</div>
<div class="${answerClasses}" id="${answerId}" aria-expanded="false">
${answerMarkup}
</div>
</div>`;
  }

  function setRendererState(nextCurrent, nextTab) {
    current = nextCurrent;
    currentTab = nextTab;
  }

  function renderConceptLinks(id) {
    const links = conceptLinks[id];
    if (!links) return "";
    let html = '<div class="concept-links">';
    if (links.uses && links.uses.length) {
      html += '<div class="cl-section"><span class="cl-label">Setzt voraus</span>';
      links.uses.forEach((usedId) => {
        const chapter = chapterMap[usedId];
        if (chapter) html += `<button class="cl-tag" onclick="window.__navigate('${usedId}')">${chapter.title}</button>`;
      });
      html += "</div>";
    }
    if (links.usedBy && links.usedBy.length) {
      html += '<div class="cl-section"><span class="cl-label">Wird gebraucht für</span>';
      links.usedBy.forEach((usedId) => {
        const chapter = chapterMap[usedId];
        if (chapter) html += `<button class="cl-tag secondary" onclick="window.__navigate('${usedId}')">${chapter.title}</button>`;
      });
      html += "</div>";
    }
    html += "</div>";
    return html;
  }

  function renderPracticePanel(entry, conceptId) {
    const chapter = chapters.find((item) => item.id === conceptId);
    const intuition = intuitionById[conceptId];
    const tasks = chapter ? buildPracticeTasks(chapter, entry, intuition) : getPracticeTasks(conceptId, entry);
    if (!tasks.length) {
      if (chapter) {
        return `<div class="panel active mikro1-practice"><div class="section-block"><h3>Aufgaben</h3><p>Für dieses Konzept stehen Prüfungsfragen bereit. Sie verdichten Definition, Rechenweg, typische Fehler und Transferfragen in einer kompakten Übungsform.</p></div>${renderExamDrillDeck(chapter, entry, intuition)}</div>`;
      }
      return '<div class="panel active mikro1-practice"><div class="section-block"><h3>Aufgaben</h3><p>Arbeite hier mit Theorie, Verbindungen und Wiederholung weiter, bis neue Aufgabenbausteine geladen sind.</p></div></div>';
    }
    let html = `<div class="panel active mikro1-practice">
<div class="section-block" style="margin-bottom:24px">
<h3>Arbeitsmodus</h3>
<p>Bearbeite zuerst die <strong>Geführten Aufgaben</strong> — sie führen Schritt für Schritt durch den Rechenweg und sichern das Grundverständnis. Danach prüfen die <strong>Prüfungstransfer-Fragen</strong>, ob du Theorie, Formeln und typische Fehler unter Klausurbedingungen abrufen kannst.</p>
</div>
<div class="practice-section-header">Geführte Aufgaben</div>`;
    tasks.forEach((task, taskIndex) => {
      html += renderQuestionCard({
        label: `Aufgabe ${taskIndex + 1}`,
        question: task.text,
        buttonId: `solBtn_${taskIndex}`,
        buttonText: "Lösung anzeigen",
        openButtonText: "Lösung verbergen",
        toggleCall: `window.__toggleSolution(${taskIndex})`,
        answerId: `sol_${taskIndex}`,
        answerMarkup: `<h4>Musterlösung</h4>
${task.steps.map((step, stepIndex) => `
<div class="step">
<div class="step-num" aria-hidden="true">${stepIndex + 1}</div>
<div class="step-body">
<div class="step-text">${step.text}</div>
${step.eq ? `<div class="math-block">${step.eq}</div>` : ""}
</div>
</div>`).join("")}
<div class="result-badge">Ergebnis: ${task.result}</div>`
      });
    });
    if (chapter) {
      html += renderExamDrillDeck(chapter, entry, intuition);
    }
    html += "</div>";
    return html;
  }

  function toggleReveal(solutionId, buttonId) {
    const solution = document.getElementById(solutionId);
    const button = document.getElementById(buttonId);
    if (!solution) return;
    const isVisible = solution.classList.toggle("show");
    solution.setAttribute("aria-expanded", isVisible ? "true" : "false");
    if (button) {
      const openLabel = button.dataset.openLabel || "Lösung verbergen";
      const closedLabel = button.dataset.closedLabel || "Lösung anzeigen";
      button.textContent = isVisible ? openLabel : closedLabel;
    }
    if (isVisible) renderMath(solution);
  }

  function toggleSolution(idx) {
    toggleReveal(`sol_${idx}`, `solBtn_${idx}`);
  }

  function toggleExamDrill(drillId) {
    toggleReveal(`examDrill_${drillId}`, `examDrillBtn_${drillId}`);
  }

  function renderFormulaPanel(entry) {
    if (!hasFormulas(entry)) {
      return '<div class="panel active"></div>';
    }
    let html = '<div class="panel active"><div class="formula-grid">';
    entry.formeln.forEach((formula, formulaIndex) => {
      const varsHtml = formula.variables
        ? `<ul class="f-variables">${Object.entries(formula.variables).map(([key, value]) =>
            `<li><span class="f-var-key">$${key}$</span><span class="f-var-sep">-</span><span class="f-var-def">${value}</span></li>`
          ).join("")}</ul>`
        : "";
      const varsHintMuted =
        'font-size:12px;color:var(--muted);margin-top:10px;line-height:1.55;max-width:52rem';
      const varsHint =
        varsHtml ||
        (formula.desc
          ? `<p class="f-var-hint" style="${varsHintMuted}">Variablen und Einheiten: in der Beschreibung unter der Gleichung; fehlt eine Größe explizit, ergänze sie aus dem Theorie-Tab oder der Vorlesungsnotation.</p>`
          : `<p class="f-var-hint" style="${varsHintMuted}">Keine Variablenliste hinterlegt: benenne jedes Symbol im Term (Buchstabe, Index, Operator) und ordne es dem Theorie-Tab zu — in Klausuren zählt die saubere Legende.</p>`);
      html += `<div class="formula-card">
<button class="f-copy-btn" aria-label="Formel kopieren" onclick="window.__copyFormula(${formulaIndex}, event)">Kopieren</button>
<div class="f-label">${formula.label}</div>
<div class="f-eq">${formula.eq}</div>
${formula.desc ? `<div class="f-desc">${formula.desc}</div>` : ""}
${varsHint}
</div>`;
    });
    html += "</div></div>";
    return html;
  }

  function copyFormula(formulaIndex, event) {
    const card = event.target.closest(".formula-card");
    if (!card) return;
    const eq = card.querySelector(".f-eq");
    if (!eq) return;
    navigator.clipboard.writeText(eq.textContent).then(() => {
      const btn = event.target;
      const original = btn.textContent;
      btn.textContent = "Kopiert";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("copied");
      }, 1500);
    }).catch(() => {});
  }

  function renderIntuitionPanel(id) {
    const data = normalizeIntuitionData(intuitionById[id]);
    if (!hasMeaningfulIntuition(data) && !hasPortalIntuitionSurface(id)) {
      return '<div class="panel active"></div>';
    }

    const chapter = chapters.find((entry) => entry.id === id);

    let html = '<div class="panel active">';
    if (hasMeaningfulText(data.core) || hasMeaningfulText(data.analogy)) {
      html += `
<div class="intuition-block">
<h3>Kernidee</h3>
${hasMeaningfulText(data.core) ? `<div class="intuition-row"><div class="intuition-text">${data.core}</div></div>` : ""}
${hasMeaningfulText(data.analogy) ? `<div class="intuition-row" style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.06)">
<div class="intuition-text" style="color:var(--muted)"><strong>Denkbild:</strong> ${data.analogy}</div>
</div>` : ""}
</div>`;
    }
    if (data.exam && data.exam.length) {
      html += "<div class=\"exam-pattern\"><h4>Klausurmuster – Wenn du siehst, dann denk:</h4>";
      data.exam.forEach((entry) => {
        html += `<div class="exam-trigger">
<span class="trigger-if">Wenn:</span>
<span class="trigger-then">&nbsp;${entry.if}&nbsp;</span>
<span class="trigger-arrow" aria-hidden="true">→</span>
<span class="trigger-then">&nbsp;${entry.then}</span>
</div>`;
      });
      html += "</div>";
    }

    const entry = contentById[id];
    const { sections: theorySections, warnings: theoryWarnings } = extractTheorySignals(entry);
    const primaryWarning = theoryWarnings[0];
    const deepSection = theorySections[1];

    if (primaryWarning) {
      html += `<div class="section-block intuition-fehler-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>${primaryWarning.label}:</strong> ${primaryWarning.body}</div>
</div>`;
    }

    const showTransferpfad =
      hasMeaningfulText(data.bridge) ||
      Boolean(deepSection) ||
      (data.exam && data.exam.length > 0);

    if (showTransferpfad) {
      const bridgeCopy = hasMeaningfulText(data.bridge)
        ? data.bridge
        : (chapter
          ? `Verknüpfe „${chapter.title}“ mit Definition und Formalismus aus dem Theorie-Tab; die Klausurmuster oben helfen beim schnellen Erkennen typischer Trigger.`
          : "Verknüpfe dieses Konzept mit Definition und Formalismus aus dem Theorie-Tab; die Klausurmuster oben helfen beim schnellen Erkennen typischer Trigger.");
      html += `<div class="section-block intuition-bridge">`;
      html += `<div class="intuition-bridge-head">
<span class="intuition-bridge-kicker">Transferpfad</span>
<h3 class="intuition-bridge-title">Vom Bild zur Theorie</h3>
<p class="intuition-bridge-copy">${bridgeCopy}</p>
</div>`;
      if (deepSection) {
        html += `<div class="intuition-detail-list"><div class="intuition-detail">
<span class="intuition-detail-label">Theoretische Vertiefung</span>
<div class="intuition-detail-copy"><strong>${deepSection.heading}:</strong> ${deepSection.paragraph}</div>
</div></div>`;
      }
      html += `</div>`;
    }
    return `${html}</div>`;
  }

  function renderContent(conceptId, tab, initGraphFn) {
    current = conceptId;
    currentTab = tab;
    window.__lastRenderError = "";

    const content = document.getElementById("content");
    const breadcrumb = document.getElementById("breadcrumb");
    if (!content) return;

    if (!conceptId) {
      renderHome();
      return;
    }

    const tabRow = document.getElementById("tabRow");
    if (tabRow) tabRow.classList.add("visible");

    const chapter = chapters.find((entry) => entry.id === conceptId);
    const entry = contentById[conceptId];
    const idx = chapters.findIndex((item) => item.id === conceptId) + 1;

    const tabAvailability = {
      graph: graphConcepts.has(conceptId),
      formeln: hasFormulas(entry),
      intuition:
        hasMeaningfulIntuition(intuitionById[conceptId]) || hasPortalIntuitionSurface(conceptId),
      "r-anwendung": Boolean(renderRAnwendungPanel) && hasRBlock(conceptId)
    };

    const activeTab = (tab === "graph" && !tabAvailability.graph)
      || (tab === "formeln" && !tabAvailability.formeln)
      || (tab === "intuition" && !tabAvailability.intuition)
      || (tab === "r-anwendung" && !tabAvailability["r-anwendung"])
      ? "theorie"
      : tab;

    currentTab = activeTab;
    updateTabButtons(activeTab, tabAvailability);

    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / ${chapter.cat} / ${chapter.title}`;
    }

    if (!entry) {
      content.innerHTML = `<div class="concept-header">
<div class="concept-tag">${chapter.cat} · ${idx}</div>
<h1 class="concept-title">${chapter.title}</h1>
</div>
<div class="section-block"><h3>Inhalt</h3><p>Nutze für dieses Thema die Kapitelverbindungen, den Schnelltest und die Wiederholung, um die Kernlogik im Kurszusammenhang zu sichern.</p></div>`;
      return;
    }

    const headerHTML = `<div class="concept-header">
<div class="concept-tag">${chapter.cat} · Konzept ${idx}</div>
<h1 class="concept-title">${chapter.title}</h1>
<div class="concept-motivation" role="note">${entry.motivation}</div>
</div>`;

    content.scrollTo({ top: 0, behavior: "smooth" });

    try {
      if (activeTab === "theorie") {
        content.innerHTML = headerHTML + `<div class="panel active">${entry.theorie}</div>` + renderConceptLinks(conceptId);
      } else if (activeTab === "graph") {
        content.innerHTML = headerHTML + renderGraphPanel(conceptId);
        if (initGraphFn) initGraphFn(conceptId);
      } else if (activeTab === "aufgaben") {
        const masteryHtml = renderMastery(conceptId);
        const linksHtml = renderConceptLinks(conceptId);
        content.innerHTML = headerHTML + renderPracticePanel(entry, conceptId) + masteryHtml + linksHtml;
      } else if (activeTab === "formeln") {
        content.innerHTML = headerHTML + renderFormulaPanel(entry);
      } else if (activeTab === "intuition") {
        content.innerHTML = headerHTML + renderIntuitionPanel(conceptId);
      } else if (activeTab === "r-anwendung" && renderRAnwendungPanel) {
        content.innerHTML = headerHTML + renderRAnwendungPanel(conceptId);
      }
    } catch (err) {
      console.error("Render error:", err);
      window.__lastRenderError = String(err?.stack || err);
      content.innerHTML = `<div class="empty-state">
<p class="empty-state-error">Fehler beim Laden</p>
<p>Bitte Seite neu laden.</p>
<div class="empty-state-actions">
<button class="btn" onclick="location.reload()">Neu laden</button>
</div>
</div>`;
    }

    renderMath(content);
  }

  function renderHome() {
    const content = document.getElementById("content");
    const breadcrumb = document.getElementById("breadcrumb");
    const tabRow = document.getElementById("tabRow");
    if (!content) return;
    if (tabRow) tabRow.classList.remove("visible");
    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button>`;
    }

    const categories = {};
    chapters.forEach((chapter, index) => {
      if (!categories[chapter.cat]) categories[chapter.cat] = [];
      categories[chapter.cat].push({ ...chapter, idx: index + 1 });
    });

    const progress = loadProgress();
    const seenCount = Object.keys(progress).filter((id) => chapters.find((chapter) => chapter.id === id)).length;
    const totalTasks = chapters.reduce((sum, chapter) => sum + buildPracticeTasks(chapter, contentById[chapter.id], intuitionById[chapter.id]).length, 0);
    const due = getDueCards();

    let html = `<div class="hero">
<h1>${courseTitle}<br><span>Interaktives Lernportal</span></h1>
<p>${homeIntro}</p>
<div class="stat-row">
<div class="stat-item"><div class="s-val">${chapters.length}</div><div class="s-lab">Konzepte</div></div>
<div class="stat-item"><div class="s-val">${Object.keys(categories).length}</div><div class="s-lab">Themengebiete</div></div>
<div class="stat-item"><div class="s-val">${totalTasks}</div><div class="s-lab">Übungsaufgaben</div></div>
<div class="stat-item"><div class="s-val">${seenCount}</div><div class="s-lab">Angesehen</div></div>
</div>
</div>`;

    const pilotDashNote = homeLernDashboardPilotNote
      ? String(homeLernDashboardPilotNote)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
      : "";

    html += `<div class="home-action-row">
<div class="home-action-card" onclick="window.__showDashboard()" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__showDashboard()">
<div class="hac-title">Lern-Dashboard</div>
<div class="hac-desc">Fortschritt, schwache Bereiche, Wiederholungen</div>
${pilotDashNote ? `<p class="hac-pilot-note">${pilotDashNote}</p>` : ""}
</div>
<div class="home-action-card" onclick="window.__startExam()" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__startExam()">
<div class="hac-title">Schnelltest</div>
<div class="hac-desc">20 Minuten, zufällige Aufgaben</div>
</div>
${extraHomeActionCardsHtml}
<div class="home-action-card" onclick="window.__showSRSReview()" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__showSRSReview()">
<div class="hac-title">Wiederholung${due.length > 0 ? ` (${due.length})` : ""}</div>
<div class="hac-desc">Spaced Repetition für heute</div>
</div>
${typeof window !== "undefined" && typeof window.__showFullExamSelect === "function" ? `
<div class="home-action-card" onclick="window.__showFullExamSelect()" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__showFullExamSelect()">
<div class="hac-title">Probeklausuren</div>
<div class="hac-desc">Vollständige Klausursets mit Lösungen</div>
</div>
` : ""}
</div>`;

    const lastId = loadLastId();
    const lastChapter = lastId && chapters.find((chapter) => chapter.id === lastId);
    if (lastChapter) {
      html += `<div class="home-continue-card" onclick="window.__navigate('${lastChapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${lastChapter.id}')">
<span class="hcc-label">Weitermachen</span>
<span class="hcc-title">${lastChapter.title}</span>
<span class="hcc-cat">${lastChapter.cat}</span>
</div>`;
    }

    const recent = Object.entries(progress)
      .filter(([, entry]) => entry && entry.lastSeen)
      .sort(([, a], [, b]) => (b.lastSeen || 0) - (a.lastSeen || 0))
      .slice(0, 3)
      .map(([id]) => chapters.find((chapter) => chapter.id === id))
      .filter(Boolean);

    if (recent.length) {
      html += `<div class="home-recent-strip">
<div class="section-sep">Zuletzt geöffnet</div>
<div class="home-mini-grid">
${recent.map((chapter) => `<div class="home-mini-card" onclick="window.__navigate('${chapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')">
<div class="hc-num">${chapter.cat}</div>
<div class="hc-title">${chapter.title}</div>
</div>`).join("")}
</div>
</div>`;
    }

    Object.entries(categories).forEach(([category, items]) => {
      html += `<div class="section-sep">${category}</div><div class="home-grid">`;
      items.forEach((item) => {
        html += `<div class="home-card" onclick="window.__navigate('${item.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${item.id}')">
<div class="hc-num">Konzept ${item.idx}</div>
<div class="hc-title">${item.title}</div>
<div class="hc-cat">${item.cat}</div>
</div>`;
      });
      html += "</div>";
    });

    content.innerHTML = html;
    renderMath(content);
  }

  function showDashboard() {
    const content = document.getElementById("content");
    const tabRow = document.getElementById("tabRow");
    const breadcrumb = document.getElementById("breadcrumb");
    if (!content) return;
    if (tabRow) tabRow.classList.remove("visible");
    if (breadcrumb) breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / Dashboard`;
    content.innerHTML = renderDashboard();
    renderMath(content);
  }

  return {
    renderContent,
    renderHome,
    toggleSolution,
    toggleExamDrill,
    copyFormula,
    showDashboard,
    setRendererState,
    renderPracticePanel
  };
}
