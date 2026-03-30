// ============================================================
// EXAM GRAPH PLACEHOLDERS — Makrooekonomik II
// Makro II exam content should only use subject-correct canvases.
// If a legacy canvas is ever referenced, render an explicit notice
// instead of a copied Mikro-I graph.
// ============================================================

function drawExamPlaceholder(canvasId, title) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const dpr = window.devicePixelRatio || 1;
  const displayWidth = canvas.clientWidth || canvas.offsetWidth || 480;
  const displayHeight = canvas.clientHeight || canvas.offsetHeight || 320;

  if (canvas.width !== Math.round(displayWidth * dpr) || canvas.height !== Math.round(displayHeight * dpr)) {
    canvas.width = Math.round(displayWidth * dpr);
    canvas.height = Math.round(displayHeight * dpr);
  }

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const style = getComputedStyle(document.body);
  const cv = (name, fallback) => style.getPropertyValue(name).trim() || fallback;

  ctx.clearRect(0, 0, displayWidth, displayHeight);
  ctx.fillStyle = cv("--bg", "#f8f6fb");
  ctx.fillRect(0, 0, displayWidth, displayHeight);

  ctx.strokeStyle = cv("--border", "#d8d1e6");
  ctx.lineWidth = 1;
  ctx.strokeRect(18, 18, displayWidth - 36, displayHeight - 36);

  ctx.fillStyle = cv("--text", "#1f1b2d");
  ctx.textAlign = "center";
  ctx.font = `700 19px ${cv("--font-heading", "system-ui, sans-serif")}`;
  ctx.fillText(title, displayWidth / 2, displayHeight / 2 - 14);

  ctx.fillStyle = cv("--muted", "#6f6783");
  ctx.font = `13px ${cv("--font-mono", "monospace")}`;
  ctx.fillText("Diese Aufgabe wird hier ohne Zusatzgrafik bearbeitet.", displayWidth / 2, displayHeight / 2 + 14);
  ctx.fillText("Nutze Theorie, Formeln und Aufgabenpfad fuer die Loesung.", displayWidth / 2, displayHeight / 2 + 34);
}

function drawHicksGraph() {
  drawExamPlaceholder("canvas_hicks", "Makro-II-Canvas");
}

function drawDemandGraph() {
  drawExamPlaceholder("canvas_demand", "Makro-II-Canvas");
}

function drawIsoquantGraph() {
  drawExamPlaceholder("canvas_isoquant", "Makro-II-Canvas");
}

export { drawHicksGraph, drawDemandGraph, drawIsoquantGraph };
