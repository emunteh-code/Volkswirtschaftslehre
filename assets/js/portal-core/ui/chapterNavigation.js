/**
 * Shared sidebar navigation (category-local numbering avoids global "Konzept" gaps).
 */
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
      sec.innerHTML = `<div class="nav-section-title">${cat}</div>`;
      items.forEach((item, localIdx) => {
        const displayNum = localIdx + 1;
        const el = document.createElement("div");
        el.className = "nav-item";
        el.id = "nav-" + item.id;
        el.dataset.id = item.id;
        el.setAttribute("role", "button");
        el.setAttribute("tabindex", "0");
        el.setAttribute(
          "aria-label",
          `${item.title} (${cat}, Stelle ${displayNum} von ${items.length})`
        );
        el.innerHTML = `<span class="num" aria-hidden="true" title="Reihenfolge in ${cat}">${displayNum}</span><span>${item.title}</span>`;
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
      let badge = el.querySelector(".mastery");
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "mastery";
        el.appendChild(badge);
      }
      const oldDot = el.querySelector(".nav-due-dot");
      if (oldDot) oldDot.remove();
      const entry = p[id];
      if (entry) {
        const total = (entry.correct || 0) + (entry.wrong || 0);
        const acc = total > 0 ? Math.round(((entry.correct || 0) / total) * 100) : null;
        if (acc !== null && acc >= 80) {
          badge.textContent = acc + "%";
          badge.className = "mastery done";
        } else if (acc !== null) {
          badge.textContent = acc + "%";
          badge.className = "mastery partial";
        } else if (entry.views >= 1) {
          badge.textContent = "·";
          badge.className = "mastery partial";
        } else {
          badge.textContent = "";
          badge.className = "mastery";
        }
      } else {
        badge.textContent = "";
        badge.className = "mastery";
      }
      const srsCard = srs[id];
      if (srsCard && srsCard.due <= now) {
        const dot = document.createElement("span");
        dot.className = "nav-due-dot";
        dot.title = "Wiederholung fällig";
        dot.setAttribute("aria-label", "Wiederholung fällig");
        el.appendChild(dot);
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
