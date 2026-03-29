import { createRenderer } from '../../../assets/js/portal-core/ui/renderer.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { CHAPTERS, CONTENT } from '../data/chapters.js';
import { INTUITION } from '../data/intuition.js';
import { CONCEPT_LINKS } from '../data/conceptLinks.js';
import { renderGraphPanel, GRAPH_CONCEPTS } from './graphPanel.js';
import { renderMastery } from '../features/mastery.js';
import { renderMath } from '../utils/mathjax.js';
import { loadProgress, loadLastId } from '../state/storage.js';
import { getDueCards } from '../features/srs.js';
import { renderDashboard } from '../features/dashboard.js';

const baseRenderer = createRenderer({
  courseLabel: COURSE_CONFIG.courseLabel,
  courseTitle: COURSE_CONFIG.courseTitle,
  homeIntro: COURSE_CONFIG.homeIntro,
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  conceptLinks: CONCEPT_LINKS,
  renderGraphPanel,
  graphConcepts: GRAPH_CONCEPTS,
  renderMastery,
  renderMath,
  loadProgress,
  loadLastId,
  getDueCards,
  renderDashboard
});

const {
  renderContent,
  toggleSolution,
  toggleExamDrill,
  copyFormula,
  showDashboard,
  setRendererState,
  renderPracticePanel
} = baseRenderer;

function renderHome() {
  const content = document.getElementById('content');
  const breadcrumb = document.getElementById('breadcrumb');
  const tabRow = document.getElementById('tabRow');
  if (!content) return;

  if (tabRow) tabRow.classList.remove('visible');
  if (breadcrumb) {
    breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">${COURSE_CONFIG.courseLabel}</button> / Startseite`;
  }

  const categories = {};
  CHAPTERS.forEach((chapter, index) => {
    if (!categories[chapter.cat]) categories[chapter.cat] = [];
    categories[chapter.cat].push({ ...chapter, idx: index + 1 });
  });

  const progress = loadProgress();
  const seenCount = Object.keys(progress).filter((id) => CHAPTERS.some((chapter) => chapter.id === id)).length;
  const due = getDueCards();
  const totalMistakeTraps = Object.values(CONTENT).reduce((sum, entry) => {
    const matches = String(entry?.theorie || '').match(/class="warn-box"/g);
    return sum + (matches?.length || 0);
  }, 0);
  const lastId = loadLastId();
  const lastChapter = lastId && CHAPTERS.find((chapter) => chapter.id === lastId);

  let html = `<div class="hero">
<div class="hero-kicker">VWL B.Sc. · Georg-August-Universitaet Goettingen</div>
<h1>${COURSE_CONFIG.courseTitle}</h1>
<p>${COURSE_CONFIG.homeIntro}</p>
<div class="stat-row">
<div class="stat-item"><div class="s-val">${CHAPTERS.length}</div><div class="s-lab">Konzepte</div></div>
<div class="stat-item"><div class="s-val">${Object.keys(categories).length}</div><div class="s-lab">Themenfelder</div></div>
<div class="stat-item"><div class="s-val">${due.length}</div><div class="s-lab">Heute faellig</div></div>
<div class="stat-item"><div class="s-val">${totalMistakeTraps}</div><div class="s-lab">Fehlerfallen</div></div>
</div>
</div>`;

  if (lastChapter) {
    html += `<div class="home-continue-card" onclick="window.__navigate('${lastChapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${lastChapter.id}')">
<span class="hcc-label">Weitermachen</span>
<span class="hcc-title">${lastChapter.title}</span>
<span class="hcc-cat">${lastChapter.cat}</span>
</div>`;
  } else if (CHAPTERS[0]) {
    html += `<div class="home-continue-card" onclick="window.__navigate('${CHAPTERS[0].id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${CHAPTERS[0].id}')">
<span class="hcc-label">Jetzt starten</span>
<span class="hcc-title">${CHAPTERS[0].title}</span>
<span class="hcc-cat">${CHAPTERS[0].cat}</span>
</div>`;
  }

  html += `<div class="home-action-row">
<div class="home-action-card" onclick="window.__showDashboard()" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__showDashboard()">
<div class="hac-title">Lernstand</div>
<div class="hac-desc">Schwache Stellen, Wiederholungsdruck und Fortschritt in einem Blick.</div>
</div>
<div class="home-action-card" onclick="window.__startExam()" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__startExam()">
<div class="hac-title">Schnelltest</div>
<div class="hac-desc">Pruefe deinen Zugriff auf Definitionen, Mechaniken und Rechenwege unter Zeitdruck.</div>
</div>
<div class="home-action-card" onclick="window.__showSRSReview()" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__showSRSReview()">
<div class="hac-title">Wiederholen</div>
<div class="hac-desc">Hole heute faellige Konzepte zurueck, bevor Luecken in den spaeteren Kapiteln entstehen.</div>
</div>
</div>`;

  const recent = Object.entries(progress)
    .filter(([, entry]) => entry && entry.lastSeen)
    .sort(([, a], [, b]) => (b.lastSeen || 0) - (a.lastSeen || 0))
    .slice(0, 3)
    .map(([id]) => CHAPTERS.find((chapter) => chapter.id === id))
    .filter(Boolean);

  if (recent.length) {
    html += `<div class="home-recent-strip">
<div class="section-sep">Zuletzt geoeffnet</div>
<div class="home-mini-grid">
${recent.map((chapter) => `<div class="home-mini-card" onclick="window.__navigate('${chapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')">
<div class="hc-num">${chapter.cat}</div>
<div class="hc-title">${chapter.title}</div>
</div>`).join('')}
</div>
</div>`;
  }

  Object.entries(categories).forEach(([category, items]) => {
    html += `<div class="section-sep">${category}</div><div class="home-grid">`;
    items.forEach((item) => {
      const viewed = progress[item.id];
      html += `<div class="home-card" onclick="window.__navigate('${item.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${item.id}')">
<div class="hc-num">${viewed ? 'Zuletzt gelernt' : `Konzept ${item.idx}`}</div>
<div class="hc-title">${item.title}</div>
<div class="hc-cat">${viewed ? 'Direkt wieder einsteigen' : item.cat}</div>
</div>`;
    });
    html += '</div>';
  });

  content.innerHTML = html;
  renderMath(content);
}

export {
  renderContent,
  renderHome,
  toggleSolution,
  toggleExamDrill,
  copyFormula,
  showDashboard,
  setRendererState,
  renderPracticePanel
};
