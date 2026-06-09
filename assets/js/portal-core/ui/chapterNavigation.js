/**
 * Shared sidebar navigation (category-local numbering avoids global "Konzept" gaps).
 */
export function resolveLessonNavStatus(entry) {
  if (!entry || typeof entry !== "object") return "not-started";
  const total = (entry.correct || 0) + (entry.wrong || 0);
  if (total > 0) {
    const accuracy = Math.round(((entry.correct || 0) / total) * 100);
    if (accuracy >= 80) return "completed";
    return "in-progress";
  }
  if ((entry.views || 0) >= 1 || (entry.solved || 0) >= 1) return "in-progress";
  return "not-started";
}

const STATUS_ARIA = Object.freeze({
  "not-started": "Noch nicht begonnen",
  "in-progress": "In Bearbeitung",
  completed: "Abgeschlossen"
});

export function createChapterNavigation({ chapters, loadProgress, loadSRS }) {
  function buildNav(onNavigate) {
    const cats = {};
    chapters.forEach((chapter) => {
      if (!cats[chapter.cat]) cats[chapter.cat] = [];
      cats[chapter.cat].push({ ...chapter });
    });
    const navList = document.getElementById("navList");
    if (!navList) return;
    navList.innerHTML = "";
    Object.entries(cats).forEach(([cat, items]) => {
      const sec = document.createElement("div");
      sec.className = "nav-section";
      sec.innerHTML = `<div class="nav-section-title">
<span class="nav-section-title__text">${cat}</span>
<span class="nav-section-title__count" aria-label="${items.length} Lektionen">${items.length}</span>
</div>`;
      items.forEach((item, localIdx) => {
        const displayNum = localIdx + 1;
        const el = document.createElement("div");
        el.className = "nav-item";
        el.id = "nav-" + item.id;
        el.dataset.id = item.id;
        el.dataset.status = "not-started";
        el.setAttribute("role", "button");
        el.setAttribute("tabindex", "0");
        el.setAttribute(
          "aria-label",
          `${item.title} (${cat}, Lektion ${displayNum}/${items.length}, ${STATUS_ARIA["not-started"]})`
        );
        el.innerHTML = `<span class="nav-item__main"><span class="num" aria-hidden="true" title="Reihenfolge in ${cat}">${displayNum}</span><span class="nav-item__title">${item.title}</span></span><span class="nav-item__aside"></span>`;
        el.onclick = () => onNavigate(item.id);
        el.onkeydown = (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onNavigate(item.id);
          }
        };
        sec.appendChild(el);
      });
      navList.appendChild(sec);
    });
  }

  function filterNav(q) {
    q = q.toLowerCase().trim();
    document.querySelectorAll(".nav-item").forEach((el) => {
      const txt = el.textContent.toLowerCase();
      el.classList.toggle("hidden", q.length > 0 && !txt.includes(q));
    });
  }

  function setActiveNav(id) {
    document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
    const navEl = document.getElementById("nav-" + id);
    if (navEl) {
      navEl.classList.add("active");
      navEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  function updateNavBadges() {
    const p = loadProgress();
    const srs = loadSRS();
    const now = Date.now();
    document.querySelectorAll(".nav-item[data-id]").forEach((el) => {
      const id = el.dataset.id;
      el.querySelector(".mastery")?.remove();

      const entry = p[id];
      const status = resolveLessonNavStatus(entry);
      el.dataset.status = status;

      const titleEl = el.querySelector(".nav-item__title");
      const catSection = el.closest(".nav-section");
      const catLabel = catSection?.querySelector(".nav-section-title__text")?.textContent?.trim() || "";
      const numLabel = el.querySelector(".num")?.textContent?.trim() || "";
      const sectionCount = catSection?.querySelectorAll(".nav-item").length || "";
      const title = titleEl?.textContent?.trim() || "";
      const statusLabel = STATUS_ARIA[status] || STATUS_ARIA["not-started"];
      el.setAttribute(
        "aria-label",
        sectionCount && numLabel
          ? `${title} (${catLabel}, Lektion ${numLabel}/${sectionCount}, ${statusLabel})`
          : `${title} (${statusLabel})`
      );

      const aside = el.querySelector(".nav-item__aside");
      if (aside) {
        aside.innerHTML = "";
        if (status === "completed") {
          const doneBadge = document.createElement("span");
          doneBadge.className = "nav-item__done";
          doneBadge.textContent = "✓";
          doneBadge.title = "Abgeschlossen";
          doneBadge.setAttribute("aria-label", "Abgeschlossen");
          aside.appendChild(doneBadge);
        }
        const srsCard = srs[id];
        if (srsCard && srsCard.due <= now) {
          const srsBadge = document.createElement("span");
          srsBadge.className = "nav-item__srs badge badge--meta";
          srsBadge.textContent = "Wdh.";
          srsBadge.title = "Wiederholung fällig";
          srsBadge.setAttribute("aria-label", "Wiederholung fällig");
          aside.appendChild(srsBadge);
        }
      }
    });
  }

  function updateProgressUI(progress) {
    const total = chapters.length;
    const seen = Object.keys(progress).filter((id) => chapters.find((c) => c.id === id)).length;
    const pct = Math.round((seen / total) * 100);
    const fill = document.getElementById("progressFill");
    const txt = document.getElementById("progressText");
    if (fill) fill.style.width = pct + "%";
    if (txt) txt.textContent = seen + " / " + total;
  }

  return { buildNav, filterNav, setActiveNav, updateNavBadges, updateProgressUI };
}
