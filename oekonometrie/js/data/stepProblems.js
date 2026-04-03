import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { CURRICULUM } from './curriculum.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

function stripHtml(value) {
  return String(value ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\$+/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function keywordAnswers(value) {
  const base = stripHtml(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  const words = base
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .slice(0, 5);

  return Array.from(new Set([base, ...words].filter(Boolean)));
}

const curriculumById = Object.fromEntries(CURRICULUM.map((entry) => [entry.id, entry]));

const BASE_STEP_PROBLEMS = Object.fromEntries(
  CURRICULUM.map((entry) => {
    const tasks = (entry.aufgaben || []).map((task, taskIndex) => ({
      title: `${entry.title} — Leitaufgabe ${taskIndex + 1}`,
      context: entry.cat,
      steps: (task.steps || []).map((taskStep, stepIndex) => ({
        q: `[${stepIndex + 1}. Schritt] ${stripHtml(taskStep.text)}`,
        answer: keywordAnswers(taskStep.eq || taskStep.text || task.result || entry.motivation),
        explain: stripHtml(taskStep.eq || taskStep.text || ''),
        hint: stripHtml(task.result || entry.motivation || ''),
        options: { problemId: `${entry.id}_${taskIndex}`, stepId: `${entry.id}_${taskIndex}_${stepIndex}` }
      }))
    }));

    if (!tasks.length) {
      const fallback = curriculumById[entry.id];
      return [entry.id, [{
        title: `${entry.title} — Kernlogik`,
        context: entry.cat,
        steps: [{
          q: `[1. Zugriff] Was ist die zentrale Idee von ${entry.title}?`,
          answer: keywordAnswers(fallback?.motivation || entry.title),
          explain: stripHtml(fallback?.motivation || ''),
          hint: stripHtml(fallback?.intuition?.bridge || fallback?.motivation || ''),
          options: { problemId: `${entry.id}_fallback`, stepId: `${entry.id}_fallback_0`, isDecision: true }
        }]
      }]];
    }

    return [entry.id, tasks];
  })
);

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});

