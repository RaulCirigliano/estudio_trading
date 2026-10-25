// Lógica de Interfaz y Navegación del Trading Hub
document.addEventListener("DOMContentLoaded", () => {
  let activeCatId = "cat_01";
  let activeSecId = "sec_01_01";
  let activeCalcTab = "position";

  const categories = window.TRADING_CATEGORIES || [];
  const calculators = window.TradingCalculators;

  // DOM Elements
  const navCategoriesEl = document.getElementById("nav-categories");
  const contentStageEl = document.getElementById("content-stage");
  const breadcrumbsEl = document.getElementById("breadcrumbs");
  const searchInputEl = document.getElementById("search-input");
  const btnOpenCalcEl = document.getElementById("btn-open-calc");
  const btnOpenGemEl = document.getElementById("btn-open-gem");
  const modalCalcEl = document.getElementById("modal-calc");
  const modalGemEl = document.getElementById("modal-gem");
  const btnCloseCalcEl = document.getElementById("btn-close-calc");
  const btnCloseGemEl = document.getElementById("btn-close-gem");
  const btnCopyPromptEl = document.getElementById("btn-copy-prompt");
  const gemCheckboxesEl = document.getElementById("gem-checkboxes");
  const promptPreviewEl = document.getElementById("prompt-preview");

  // Format simple Markdown to rich HTML
  function renderMarkdown(md) {
    if (!md) return "";
    let html = md.trim();

    // Tables
    html = html.replace(/\n\|(.+)\|\n\|[-:| ]+\|\n((?:\|.*\|\n?)*)/g, (match, header, rows) => {
      const ths = header.split("|").filter(c => c.trim().length > 0).map(c => `<th>${c.trim()}</th>`).join("");
      const trs = rows.trim().split("\n").map(r => {
        const tds = r.split("|").filter(c => c.trim().length > 0).map(c => `<td>${c.trim()}</td>`).join("");
        return `<tr>${tds}</tr>`;
      }).join("");
      return `<div class="table-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
    });

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>');

    // Code blocks
    html = html.replace(/```([a-z]*)\n([\s\S]*?)```/gm, '<pre><code>$2</code></pre>');

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Bold & Italic
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Math LaTeX blocks $$ ... $$
    html = html.replace(/\$\$([\s\S]*?)\$\$/gm, '<div class="math-block" style="background:#090d14; border:1px solid #1e293b; padding:0.75rem 1rem; border-radius:6px; margin:0.85rem 0; font-family:var(--font-mono); color:#38bdf8;">$$ $1 $$</div>');

    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    // Paragraphs
    html = html.split('\n\n').map(p => {
      if (p.startsWith('<h') || p.startsWith('<pre') || p.startsWith('<div') || p.startsWith('<ul>') || p.startsWith('<table')) {
        return p;
      }
      return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');

    return html;
  }

  // Render Sidebar Categories
  function renderSidebar() {
    navCategoriesEl.innerHTML = "";
    categories.forEach((cat) => {
      const isCatActive = cat.id === activeCatId;
      const catDiv = document.createElement("div");
      catDiv.className = "nav-category";

      const btn = document.createElement("button");
      btn.className = `category-btn ${isCatActive ? "active" : ""}`;
      btn.innerHTML = `
        <div class="cat-left">
          <span>${cat.icon}</span>
          <span>${cat.num}. ${cat.title}</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span class="cat-badge">${cat.sections.length}</span>
          <span class="cat-chevron ${isCatActive ? "open" : ""}">▶</span>
        </div>
      `;

      btn.addEventListener("click", () => {
        if (activeCatId === cat.id) {
          // toggle open
          const list = catDiv.querySelector(".section-list");
          list.classList.toggle("open");
          btn.querySelector(".cat-chevron").classList.toggle("open");
        } else {
          activeCatId = cat.id;
          activeSecId = cat.sections[0].id;
          renderSidebar();
          renderContent();
        }
      });

      const ul = document.createElement("ul");
      ul.className = `section-list ${isCatActive ? "open" : ""}`;

      cat.sections.forEach((sec) => {
        const isSecActive = sec.id === activeSecId && isCatActive;
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = `section-item ${isSecActive ? "active" : ""}`;
        a.textContent = sec.title;
        a.href = `#${sec.id}`;
        a.addEventListener("click", (e) => {
          e.preventDefault();
          activeCatId = cat.id;
          activeSecId = sec.id;
          renderSidebar();
          renderContent();
        });
        li.appendChild(a);
        ul.appendChild(li);
      });

      catDiv.appendChild(btn);
      catDiv.appendChild(ul);
      navCategoriesEl.appendChild(catDiv);
    });
  }

  // Render Current Content View
  function renderContent() {
    const curCat = categories.find(c => c.id === activeCatId) || categories[0];
    const curSec = curCat.sections.find(s => s.id === activeSecId) || curCat.sections[0];

    // Breadcrumbs
    breadcrumbsEl.innerHTML = `
      <span>Trading Hub</span>
      <span>/</span>
      <span>${curCat.icon} ${curCat.title}</span>
      <span>/</span>
      <span class="breadcrumb-active">${curSec.title}</span>
    `;

    // Content Canvas
    contentStageEl.innerHTML = `
      <section class="hero-overview">
        <h1 class="hero-title">
          <span>${curCat.icon}</span>
          <span>${curCat.num}. ${curCat.title}</span>
        </h1>
        <p class="hero-desc">${curCat.summary}</p>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-label">Fuentes Auditadas</div>
            <div class="stat-value cyan">${curCat.sourcesCount} Documentos</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Secciones / Capítulos</div>
            <div class="stat-value green">${curCat.sections.length} Módulos</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Estado de Auditoría</div>
            <div class="stat-value amber">100% Verificado</div>
          </div>
        </div>
      </section>

      <article class="article-container" id="${curSec.id}">
        <div class="article-header">
          <h2 class="article-title">${curSec.title}</h2>
          <span class="cat-badge" style="font-size:0.8rem; padding:4px 8px;">Módulo ${curSec.id}</span>
        </div>
        <div class="markdown-body">
          ${renderMarkdown(curSec.content)}
        </div>
      </article>

      <div style="display:flex; justify-content:space-between; margin-top:2rem;">
        <button id="btn-next-sec" class="btn-action" style="margin-left:auto;">
          Siguiente Módulo ▶
        </button>
      </div>
    `;

    // Next Section Button logic
    const nextBtn = document.getElementById("btn-next-sec");
    if (nextBtn) {
      const curIndex = curCat.sections.findIndex(s => s.id === curSec.id);
      if (curIndex < curCat.sections.length - 1) {
        nextBtn.textContent = `Siguiente: ${curCat.sections[curIndex + 1].title} ▶`;
        nextBtn.onclick = () => {
          activeSecId = curCat.sections[curIndex + 1].id;
          renderSidebar();
          renderContent();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
      } else {
        const catIndex = categories.findIndex(c => c.id === curCat.id);
        if (catIndex < categories.length - 1) {
          nextBtn.textContent = `Pasar a: ${categories[catIndex + 1].title} ▶`;
          nextBtn.onclick = () => {
            activeCatId = categories[catIndex + 1].id;
            activeSecId = categories[catIndex + 1].sections[0].id;
            renderSidebar();
            renderContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          };
        } else {
          nextBtn.style.display = "none";
        }
      }
    }
  }

  // Global Search
  searchInputEl.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) return;

    for (const cat of categories) {
      for (const sec of cat.sections) {
        if (sec.title.toLowerCase().includes(query) || sec.content.toLowerCase().includes(query)) {
          activeCatId = cat.id;
          activeSecId = sec.id;
          renderSidebar();
          renderContent();
          return;
        }
      }
    }
  });

  // Modal Controls
  btnOpenCalcEl.addEventListener("click", () => modalCalcEl.classList.add("open"));
  btnCloseCalcEl.addEventListener("click", () => modalCalcEl.classList.remove("open"));

  btnOpenGemEl.addEventListener("click", () => {
    renderGemExportOptions();
    modalGemEl.classList.add("open");
  });
  btnCloseGemEl.addEventListener("click", () => modalGemEl.classList.remove("open"));

  // Close modal on background click
  [modalCalcEl, modalGemEl].forEach(m => {
    m.addEventListener("click", (e) => {
      if (e.target === m) m.classList.remove("open");
    });
  });

  // Calculators Logic
  window.updateCalculator = function() {
    if (activeCalcTab === "position") {
      const cap = parseFloat(document.getElementById("calc-cap").value) || 1000;
      const risk = parseFloat(document.getElementById("calc-risk").value) || 1;
      const entry = parseFloat(document.getElementById("calc-entry").value) || 100;
      const sl = parseFloat(document.getElementById("calc-sl").value) || 98;

      const res = calculators.calculatePositionSize(cap, risk, entry, sl);
      if (res) {
        document.getElementById("res-risk-amt").textContent = `$${res.riskAmount} USD`;
        document.getElementById("res-sl-dist").textContent = `${res.slDist} pts (${res.slPct}%)`;
        document.getElementById("res-lot-size").textContent = `$${res.notionalSize} (${res.units} unid.)`;
        const levEl = document.getElementById("res-leverage");
        levEl.textContent = `${res.effectiveLeverage}x`;
        levEl.className = `status-pill-result status-${res.leverageStatus}`;
        document.getElementById("res-status-text").textContent = res.statusText;
      }
    } else if (activeCalcTab === "breakeven") {
      const entry = parseFloat(document.getElementById("calc-be-entry").value) || 100;
      const fee = parseFloat(document.getElementById("calc-be-fee").value) || 0.06;
      const slip = parseFloat(document.getElementById("calc-be-slip").value) || 0.04;

      const res = calculators.calculateBreakeven(entry, fee, slip);
      if (res) {
        document.getElementById("res-be-long").textContent = `$${res.longBreakeven}`;
        document.getElementById("res-be-short").textContent = `$${res.shortBreakeven}`;
        document.getElementById("res-be-cushion").textContent = `+$${res.cushionCostLong} (${res.totalCushionPct}%)`;
      }
    } else if (activeCalcTab === "expectancy") {
      const wr = parseFloat(document.getElementById("calc-exp-wr").value) || 40;
      const rr = parseFloat(document.getElementById("calc-exp-rr").value) || 2.0;
      const risk = parseFloat(document.getElementById("calc-exp-risk").value) || 100;

      const res = calculators.calculateExpectancy(wr, rr, risk);
      if (res) {
        const expEl = document.getElementById("res-exp-val");
        expEl.textContent = `${res.isPositive ? "+" : ""}$${res.expectancy} USD / trade`;
        expEl.style.color = res.isPositive ? "var(--emerald)" : "var(--rose)";
        document.getElementById("res-exp-50").textContent = `${res.isPositive ? "+" : ""}$${res.projection50} USD`;
        document.getElementById("res-exp-100").textContent = `${res.isPositive ? "+" : ""}$${res.projection100} USD`;
      }
    }
  };

  window.switchCalcTab = function(tab) {
    activeCalcTab = tab;
    document.querySelectorAll(".calc-tab-btn").forEach(b => b.classList.remove("active"));
    document.getElementById(`tab-btn-${tab}`).classList.add("active");

    document.querySelectorAll(".calc-tab-pane").forEach(p => p.style.display = "none");
    document.getElementById(`pane-${tab}`).style.display = "block";
    window.updateCalculator();
  };

  // Gem Prompt Export Logic
  function renderGemExportOptions() {
    gemCheckboxesEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <span style="font-size:0.8rem; font-weight:600; color:var(--text-dim); text-transform:uppercase;">Seleccionar Categorías para el Prompt:</span>
        <button id="btn-toggle-all-gem" class="btn-action" style="padding:2px 8px; font-size:0.75rem;">Marcar Todas</button>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
        ${categories.map(c => `
          <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; color:#fff; cursor:pointer;">
            <input type="checkbox" class="gem-cat-cb" value="${c.id}" checked>
            <span>${c.icon} ${c.num}. ${c.title}</span>
          </label>
        `).join("")}
      </div>
    `;

    document.getElementById("btn-toggle-all-gem").onclick = () => {
      const cbs = document.querySelectorAll(".gem-cat-cb");
      const allChecked = Array.from(cbs).every(cb => cb.checked);
      cbs.forEach(cb => cb.checked = !allChecked);
      updateGemPromptPreview();
    };

    document.querySelectorAll(".gem-cat-cb").forEach(cb => {
      cb.addEventListener("change", updateGemPromptPreview);
    });

    updateGemPromptPreview();
  }

  function updateGemPromptPreview() {
    const selectedIds = Array.from(document.querySelectorAll(".gem-cat-cb:checked")).map(cb => cb.value);
    const selectedCats = categories.filter(c => selectedIds.includes(c.id));

    let prompt = `# SYSTEM DIRECTIVE: MENTOR & AUDITOR CUANTITATIVO DE TRADING\n\n`;
    prompt += `Eres el Mentor y Auditor de Riesgo Institucional. Te riges por las reglas y axiomas extraídos de las 41 fuentes del cuaderno de trading:\n\n`;

    prompt += `## 1. AXIOMAS CARDINALES DE RIESGO\n`;
    prompt += `- Regla Inviolable de Asimetría: R:R >= 1:2.0 en toda orden.\n`;
    prompt += `- Position Sizing: Lote = (Capital * Riesgo%) / |Entry - SL|.\n`;
    prompt += `- Circuit Breakers: Parada obligatoria tras 3 pérdidas seguidas o -2% diario.\n\n`;

    prompt += `## 2. MÓDULOS DE CONOCIMIENTO INCLUIDOS (${selectedCats.length} CATEGORÍAS)\n`;
    selectedCats.forEach(c => {
      prompt += `### ${c.icon} Categoría ${c.num}: ${c.title}\n`;
      prompt += `- Resumen: ${c.summary}\n`;
      c.sections.forEach(s => {
        prompt += `  • ${s.title}\n`;
      });
      prompt += `\n`;
    });

    prompt += `## 3. COMPORTAMIENTO ESPERADO\n`;
    prompt += `- Audita todo setup presentado contrastando sesgo macro (SPX/QQQ), VWAP +-2 sigma, volumen RVOL > 1.8 y ratios R:R.\n`;
    prompt += `- Si viola alguna regla de gestión o confluencia, declara un "VETO DE EJECUCIÓN".\n`;

    promptPreviewEl.value = prompt;
  }

  btnCopyPromptEl.addEventListener("click", () => {
    promptPreviewEl.select();
    navigator.clipboard.writeText(promptPreviewEl.value).then(() => {
      const origText = btnCopyPromptEl.innerHTML;
      btnCopyPromptEl.innerHTML = `✓ ¡Copiado al Portapapeles!`;
      btnCopyPromptEl.style.background = "var(--emerald)";
      btnCopyPromptEl.style.color = "#000";
      setTimeout(() => {
        btnCopyPromptEl.innerHTML = origText;
        btnCopyPromptEl.style.background = "";
        btnCopyPromptEl.style.color = "";
      }, 2500);
    });
  });

  // Keyboard shortcut Ctrl+K to search
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchInputEl.focus();
    }
  });

  // Initialize
  renderSidebar();
  renderContent();
  window.updateCalculator();
});
