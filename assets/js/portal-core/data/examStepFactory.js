function stripHtml(html) {
  return String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSections(html) {
  const source = String(html || "");
  const sections = [];
  const pattern = /<div class="section-block">[\s\S]*?<h3>(.*?)<\/h3>[\s\S]*?<p>(.*?)<\/p>/g;
  let match = pattern.exec(source);
  while (match) {
    sections.push({
      heading: stripHtml(match[1]),
      body: stripHtml(match[2])
    });
    match = pattern.exec(source);
  }
  return sections;
}

function extractWarnings(html) {
  const source = String(html || "");
  const warnings = [];
  const pattern = /<div class="warn-box"><strong>(.*?)<\/strong>\s*([\s\S]*?)<\/div>/g;
  let match = pattern.exec(source);
  while (match) {
    warnings.push({
      label: stripHtml(match[1]) || "Typischer Fehler",
      body: stripHtml(match[2])
    });
    match = pattern.exec(source);
  }
  return warnings;
}

function keywordAnswers(value, fallback = "konzept") {
  const base = stripHtml(value);
  const words = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .slice(0, 4);

  const answers = new Set();
  if (base) answers.add(base);
  words.forEach((word) => answers.add(word));
  if (!answers.size) answers.add(fallback);
  return Array.from(answers);
}

function buildPrompts(chapter, entry, intuition) {
  const prompts = [];
  const sections = extractSections(entry?.theorie);
  const warnings = extractWarnings(entry?.theorie);

  prompts.push({
    q: `Welcher Stoffblock steht hinter "${chapter.title}"?`,
    answer: keywordAnswers(chapter.title, "stoffblock"),
    explain: entry?.motivation || `${chapter.title} gehört zum Stoffblock ${chapter.cat}.`,
    traps: []
  });

  prompts.push({
    q: `Zu welcher Kategorie gehört "${chapter.title}" im Portal?`,
    answer: keywordAnswers(chapter.cat, "kategorie"),
    explain: `${chapter.title} ist im Portal der Kategorie "${chapter.cat}" zugeordnet.`,
    traps: []
  });

  if (entry?.motivation) {
    prompts.push({
      q: `Was ist die zentrale ökonomische Idee von "${chapter.title}"?`,
      answer: keywordAnswers(entry.motivation, "idee"),
      explain: entry.motivation,
      traps: []
    });
  }

  (entry?.formeln || []).forEach((formula) => {
    prompts.push({
      q: `Welche Kernbeziehung musst du bei "${chapter.title}" unter "${formula.label}" sicher beherrschen?`,
      answer: keywordAnswers(formula.label, "formel"),
      explain: formula.desc || formula.eq,
      traps: []
    });
  });

  sections.slice(0, 3).forEach((section) => {
    prompts.push({
      q: `Worum geht es im Theorieblock "${section.heading}"?`,
      answer: keywordAnswers(section.heading, "theorie"),
      explain: section.body,
      traps: []
    });
  });

  warnings.slice(0, 3).forEach((warning) => {
    prompts.push({
      q: `Welcher Fehlerhinweis gehört bei "${chapter.title}" zum Punkt "${warning.label}"?`,
      answer: keywordAnswers(warning.label, "fehler"),
      explain: warning.body,
      traps: []
    });
  });

  (intuition?.exam || []).slice(0, 3).forEach((pattern) => {
    prompts.push({
      q: `Wenn in der Klausur ${pattern.if} auftaucht, woran solltest du zuerst denken?`,
      answer: keywordAnswers(pattern.then, "klausur"),
      explain: pattern.then,
      traps: []
    });
  });

  (entry?.aufgaben || []).slice(0, 3).forEach((task, index) => {
    prompts.push({
      q: `Welche Stoßrichtung hat die Übungsaufgabe ${index + 1} zu "${chapter.title}"?`,
      answer: keywordAnswers(task.result || task.text, "aufgabe"),
      explain: task.result || stripHtml(task.text),
      traps: []
    });
  });

  if (intuition?.bridge) {
    prompts.push({
      q: `Wie verbindest du bei "${chapter.title}" formale Struktur und ökonomische Intuition?`,
      answer: keywordAnswers(intuition.bridge, "intuition"),
      explain: intuition.bridge,
      traps: []
    });
  }

  const unique = [];
  const seen = new Set();
  prompts.forEach((prompt) => {
    const key = prompt.q.trim();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(prompt);
    }
  });

  while (unique.length < 12) {
    unique.push({
      q: `Welcher erste Prüfungsanker hilft dir bei "${chapter.title}"?`,
      answer: keywordAnswers(entry?.motivation || chapter.title, "anker"),
      explain: entry?.motivation || `${chapter.title} zuerst definieren, dann den zentralen Zusammenhang sauber begründen.`,
      traps: []
    });
  }

  return unique;
}

export function ensureMinimumStepProblems({ chapters, contentById, intuitionById, baseStepProblems }) {
  const enriched = { ...baseStepProblems };

  chapters.forEach((chapter) => {
    const existing = enriched[chapter.id] ? [...enriched[chapter.id]] : [];
    const currentSteps = existing.reduce((sum, problem) => sum + (problem.steps?.length || 0), 0);
    if (currentSteps >= 10) return;

    const prompts = buildPrompts(chapter, contentById[chapter.id], intuitionById[chapter.id]);
    const needed = 10 - currentSteps;

    existing.push({
      title: `Exam-Drill ${chapter.title}`,
      context: chapter.cat,
      steps: prompts.slice(0, needed)
    });

    enriched[chapter.id] = existing;
  });

  return enriched;
}
