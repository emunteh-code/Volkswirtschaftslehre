const WEBR_MODULE_URL = "https://webr.r-wasm.org/latest/webr.mjs";
const STORAGE_PREFIX = "lernportal_r_lab_progress_v1";

let webRPromise = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeRString(value) {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll("\n", "\\n");
}

function normalizeCode(code) {
  return code.replace(/\r\n/g, "\n").trim();
}

function loadProgress(moduleSlug) {
  try {
    return JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}:${moduleSlug}`) || "{}");
  } catch {
    return {};
  }
}

function saveProgress(moduleSlug, progress) {
  localStorage.setItem(`${STORAGE_PREFIX}:${moduleSlug}`, JSON.stringify(progress));
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

function runStaticChecks(lesson, code, output) {
  const checks = lesson.checks || [];
  if (!checks.length) {
    return {
      passed: true,
      details: [{ status: "info", label: "Keine formalen Checks definiert." }]
    };
  }

  const details = checks.map((check) => {
    const haystack = check.mode === "output" ? output : code;
    if (check.type === "includes") {
      const ok = haystack.includes(check.value);
      return { status: ok ? "ok" : "fail", label: `Enthaelt ${check.mode === "output" ? "Ausgabe" : "Code"}: ${check.value}` };
    }

    if (check.type === "regex") {
      const ok = new RegExp(check.value, "m").test(haystack);
      return { status: ok ? "ok" : "fail", label: `Passt auf Muster: ${check.value}` };
    }

    return { status: "fail", label: `Unbekannter Check-Typ: ${check.type}` };
  });

  return {
    passed: details.every((detail) => detail.status !== "fail"),
    details
  };
}

async function runRuntimeChecks(lesson, code) {
  const runtimeChecks = lesson.runtimeChecks || [];
  if (!runtimeChecks.length) {
    return {
      available: false,
      passed: true,
      details: []
    };
  }

  const webR = await ensureWebR();
  const wrapped = `
    .portal_run_check <- function(expr_text, label_text) {
      ok <- tryCatch(isTRUE(eval(parse(text = expr_text))), error = function(e) FALSE)
      paste(if (ok) "OK" else "FAIL", label_text, sep = "::")
    }
    {
${code}
    }
    c(
${runtimeChecks.map((check) => `      .portal_run_check("${escapeRString(check.expression)}", "${escapeRString(check.label)}")`).join(",\n")}
    )
  `;

  const result = await webR.evalR(wrapped);
  const jsValue = typeof result.toJs === "function" ? await result.toJs() : String(result);
  const lines = Array.isArray(jsValue) ? jsValue : [String(jsValue)];
  const details = lines.map((line) => {
    const [status, ...rest] = String(line).split("::");
    return {
      status: status === "OK" ? "ok" : "fail",
      label: `Runtime: ${rest.join("::") || "Pruefung"}`.trim()
    };
  });

  return {
    available: true,
    passed: details.every((detail) => detail.status !== "fail"),
    details
  };
}

async function runChecks(lesson, code, output) {
  const staticResult = runStaticChecks(lesson, code, output);
  const hasRuntimeChecks = Boolean(lesson.runtimeChecks?.length);

  if (!hasRuntimeChecks) {
    return {
      passed: staticResult.passed,
      details: staticResult.details,
      verification: "formal"
    };
  }

  try {
    const runtimeResult = await runRuntimeChecks(lesson, code);
    return {
      passed: staticResult.passed && runtimeResult.passed,
      details: [...staticResult.details, ...runtimeResult.details],
      verification: "voll"
    };
  } catch (error) {
    return {
      passed: staticResult.passed,
      details: [
        ...staticResult.details,
        {
          status: "info",
          label: `Runtime-Pruefung nicht verfuegbar: ${error instanceof Error ? error.message : String(error)}`
        }
      ],
      verification: "formal"
    };
  }
}

async function executeR(code) {
  const webR = await ensureWebR();
  const wrapped = `
    output <- capture.output({
${code}
    }, type = "output")
    if (length(output) == 0) {
      output <- c("[Kein konsolenpflichtiger Output erzeugt]")
    }
    output
  `;

  const result = await webR.evalR(wrapped);
  const jsValue = typeof result.toJs === "function" ? await result.toJs() : String(result);

  if (Array.isArray(jsValue)) {
    return jsValue.join("\n");
  }

  return String(jsValue);
}

function lessonCardMarkup(lesson, completed, activeId) {
  return `
    <button class="lab-card ${lesson.id === activeId ? "is-active" : ""}" type="button" data-lesson-id="${lesson.id}">
      <div class="status-pill">${completed ? "Abgehakt" : "Offen"}</div>
      <h3>${lesson.title}</h3>
      <p>${lesson.prompt}</p>
    </button>
  `;
}

function renderCheckOutput(checkResult) {
  return checkResult.details
    .map((detail) => `${detail.status === "ok" ? "OK" : detail.status === "info" ? "INFO" : "FEHLT"}  ${detail.label}`)
    .join("\n");
}

export function mountRLabs(container, moduleDef) {
  if (!container || !moduleDef?.rLab?.lessons?.length) return;

  const progress = loadProgress(moduleDef.slug);
  const lessons = moduleDef.rLab.lessons;
  let activeLessonId = lessons[0].id;
  let hintIndex = 0;
  let latestOutput = "";

  const render = () => {
    const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId) || lessons[0];
    const activeCode = progress[activeLesson.id]?.code || activeLesson.starterCode;
    const completedCount = Object.values(progress).filter((entry) => entry?.completed).length;
    const activeHints = activeLesson.hints || [];
    const hintText = activeHints.length
      ? activeHints[Math.min(hintIndex, activeHints.length - 1)]
      : "Nutze Prompt, Check und Musterloesung, um den naechsten Schritt selbst abzuleiten.";

    container.innerHTML = `
      <div class="lab-sidebar">
        <div class="content-panel">
          <p class="eyebrow">R-Lab</p>
          <h2>Code direkt im Portal ueben</h2>
          <p>${moduleDef.rLab.intro}</p>
          <div class="fact-grid">
            <div class="fact-card">
              <span class="fact-label">Aufgaben</span>
              <strong class="fact-value">${lessons.length}</strong>
            </div>
            <div class="fact-card">
              <span class="fact-label">Abgehakt</span>
              <strong class="fact-value">${completedCount}</strong>
            </div>
          </div>
        </div>
        ${lessons.map((lesson) => lessonCardMarkup(lesson, Boolean(progress[lesson.id]?.completed), activeLessonId)).join("")}
      </div>
      <div class="lab-workspace">
        <div class="content-panel">
          <div class="lab-toolbar">
            <div class="lab-meta">
              <strong>${activeLesson.title}</strong>
            </div>
            <span class="lab-status" id="labRuntimeStatus">Runtime: bereit</span>
          </div>
          <p>${activeLesson.prompt}</p>
          <div class="lab-controls">
            <button class="lab-button is-primary" type="button" data-action="run">Run</button>
            <button class="lab-button" type="button" data-action="check">Check</button>
            <button class="lab-button" type="button" data-action="reset">Reset</button>
            <button class="lab-button" type="button" data-action="hint">Hint</button>
            <button class="lab-button" type="button" data-action="solution">Loesung</button>
          </div>
          <textarea class="lab-editor" id="labEditor" spellcheck="false">${escapeHtml(activeCode)}</textarea>
          <div class="hint-row">
            <span class="hint-badge">Hinweis</span>
            <span id="labHintText">${hintText}</span>
          </div>
        </div>
        <div class="content-panel">
          <p class="eyebrow">Output</p>
          <pre class="lab-output" id="labOutput">${escapeHtml(progress[activeLesson.id]?.lastOutput || "[Output erscheint hier nach Run oder Check.]")}</pre>
        </div>
      </div>
    `;

    const editor = container.querySelector("#labEditor");
    const output = container.querySelector("#labOutput");
    const runtimeStatus = container.querySelector("#labRuntimeStatus");

    container.querySelectorAll("[data-lesson-id]").forEach((button) => {
      button.addEventListener("click", () => {
        activeLessonId = button.dataset.lessonId;
        hintIndex = 0;
        latestOutput = progress[activeLessonId]?.lastOutput || "";
        render();
      });
    });

    editor.addEventListener("input", () => {
      progress[activeLesson.id] = {
        ...(progress[activeLesson.id] || {}),
        code: editor.value,
        lastOutput: progress[activeLesson.id]?.lastOutput || latestOutput || "[Output erscheint hier nach Run oder Check.]"
      };
      saveProgress(moduleDef.slug, progress);
    });

    container.querySelector('[data-action="reset"]').addEventListener("click", () => {
      hintIndex = 0;
      editor.value = activeLesson.starterCode;
      output.textContent = "[Editor auf Startcode zurueckgesetzt]";
      progress[activeLesson.id] = {
        ...(progress[activeLesson.id] || {}),
        code: activeLesson.starterCode,
        lastOutput: output.textContent,
        completed: false
      };
      saveProgress(moduleDef.slug, progress);
      render();
    });

    container.querySelector('[data-action="hint"]').addEventListener("click", () => {
      hintIndex = Math.min(hintIndex + 1, Math.max(0, activeHints.length - 1));
      const hintNode = container.querySelector("#labHintText");
      if (hintNode) {
        hintNode.textContent = activeHints.length
          ? activeHints[Math.min(hintIndex, activeHints.length - 1)]
          : "Nutze Prompt, Check und Musterloesung, um den naechsten Schritt selbst abzuleiten.";
      }
    });

    container.querySelector('[data-action="solution"]').addEventListener("click", () => {
      editor.value = activeLesson.solution;
      progress[activeLesson.id] = {
        ...(progress[activeLesson.id] || {}),
        code: activeLesson.solution,
        lastOutput: progress[activeLesson.id]?.lastOutput || latestOutput || "[Loesung eingefuegt]"
      };
      saveProgress(moduleDef.slug, progress);
    });

    container.querySelector('[data-action="check"]').addEventListener("click", async () => {
      const code = normalizeCode(editor.value);
      runtimeStatus.textContent = activeLesson.runtimeChecks?.length ? "Runtime: prueft semantisch..." : "Runtime: formale Pruefung";
      const result = await runChecks(activeLesson, code, latestOutput);
      output.textContent = `${result.passed ? "Alle Checks bestanden." : "Noch nicht alles passt."}\n${result.verification === "voll" ? "Verifikation: Code + Runtime." : "Verifikation: formale Checks, semantische Runtime optional."}\n\n${renderCheckOutput(result)}`;
      runtimeStatus.textContent = result.verification === "voll" ? "Runtime: WebR verifiziert" : "Runtime: formaler Fallback";
      progress[activeLesson.id] = {
        ...(progress[activeLesson.id] || {}),
        code,
        lastOutput: output.textContent,
        completed: result.passed
      };
      saveProgress(moduleDef.slug, progress);
      render();
    });

    container.querySelector('[data-action="run"]').addEventListener("click", async () => {
      const code = normalizeCode(editor.value);
      runtimeStatus.textContent = "Runtime: laedt WebR...";
      output.textContent = "Code wird ausgefuehrt...";

      try {
        const result = await executeR(code);
        latestOutput = result;
        output.textContent = result;
        runtimeStatus.textContent = "Runtime: WebR aktiv";
        progress[activeLesson.id] = {
          ...(progress[activeLesson.id] || {}),
          code,
          lastOutput: result
        };
        saveProgress(moduleDef.slug, progress);
      } catch (error) {
        latestOutput = `[Runtime nicht verfuegbar]\n${error instanceof Error ? error.message : String(error)}\n\nDu kannst trotzdem mit Check, Hints und der Musterloesung arbeiten.`;
        output.textContent = latestOutput;
        runtimeStatus.textContent = "Runtime: Fallback-Modus";
        progress[activeLesson.id] = {
          ...(progress[activeLesson.id] || {}),
          code,
          lastOutput: latestOutput
        };
        saveProgress(moduleDef.slug, progress);
      }
    });
  };

  render();
}
