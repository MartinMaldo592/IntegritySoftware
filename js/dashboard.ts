/* ==========================================================================
   Integrity Software - Executive Corporate Systems Dashboard (TypeScript)
   ========================================================================== */

interface SystemStateItem {
  name: string;
  status: string;
  metric: string;
}

type SystemStates = Record<string, SystemStateItem[]>;

document.addEventListener('DOMContentLoaded', () => {
  const panelTabs = document.querySelectorAll<HTMLElement>('.panel-tab-btn');
  const panelTitle = document.getElementById('panel-active-title');

  const systemStates: SystemStates = {
    enterprise: [
      { name: "Core ERP & Cloud Microservices", status: "Operativo", metric: "99.99% Uptime" },
      { name: "API Gateway & SSO Enterprise", status: "Latencia < 18ms", metric: "1.2M Req/día" },
      { name: "Base de Datos Distribuida (PostgreSQL)", status: "Sincronizado", metric: "Replicación Activa" }
    ],
    ai: [
      { name: "Motor RAG & LLM Privado (Datos Protegidos)", status: "Cifrado AES-256", metric: "Respuesta 420ms" },
      { name: "Agente Autónomo de Atención WhatsApp/Web", status: "Activo 24/7", metric: "99.4% Precisión" },
      { name: "Extracción Automática de PDF & SUNAT", status: "Procesando", metric: "Zero Error Rate" }
    ],
    automation: [
      { name: "Conector ERP (SAP / Odoo / Oracle)", status: "Conectado", metric: "Auto-Sync 5 min" },
      { name: "Flujos de Trabajo Contables & Planillas", status: "Ejecutando", metric: "240 hrs/mes libre" },
      { name: "Seguridad & Auditaría (Ley 29733 Perú)", status: "Conforme", metric: "100% Auditado" }
    ]
  };

  function updatePanel(category: string): void {
    const list = systemStates[category] || systemStates.enterprise;
    const container = document.getElementById('panel-cards-container');
    if (!container) return;

    container.innerHTML = '';
    list.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'sys-card';
      card.innerHTML = `
        <div class="sys-info">
          <h4>${item.name}</h4>
          <p><span class="status-dot"></span> ${item.status}</p>
        </div>
        <div class="sys-stat">${item.metric}</div>
      `;
      container.appendChild(card);
    });
  }

  // Initial load
  updatePanel('enterprise');

  panelTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      panelTabs.forEach((b) => {
        b.style.background = 'transparent';
        b.style.borderColor = 'rgba(255,255,255,0.1)';
      });
      btn.style.background = 'rgba(37, 99, 235, 0.15)';
      btn.style.borderColor = 'var(--accent-blue)';

      const cat = btn.getAttribute('data-category') || 'enterprise';
      if (panelTitle) {
        panelTitle.textContent = btn.textContent?.trim() || '';
      }
      updatePanel(cat);
    });
  });
});
