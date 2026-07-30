/* ==========================================================================
   Integrity Software - AI Agent Simulator Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const agentCards = document.querySelectorAll('.agent-card');
  const terminalBox = document.getElementById('terminal-box');

  const agentSimulations = {
    whatsapp: [
      { text: "[SISTEMA] Agente WhatsApp 'IntegrityBot' activo.", delay: 300 },
      { text: "[CLIENTE PERÚ] 'Hola, necesito factura por S/ 4,500 de mi pedido #8920'", delay: 900 },
      { text: "[IA REASONING] Consultando API SUNAT y ERP empresarial...", delay: 1600 },
      { text: "[RESULTADO] Factura emitida exitosamente & PDF enviado por WhatsApp.", delay: 2400 }
    ],
    erp: [
      { text: "[SISTEMA] Agente ERP Sync procesando datos bancarios BCP/Interbank...", delay: 300 },
      { text: "[INTEGRACIÓN] Conciliación de 145 pagos automatizada.", delay: 1000 },
      { text: "[AUTOMATIZACIÓN] Estado de cuenta actualizado en Odoo/SAP.", delay: 1800 },
      { text: "[EXITO] 0 errores. Tiempo ahorrado: 4.5 horas de equipo contable.", delay: 2500 }
    ],
    leads: [
      { text: "[SISTEMA] Agente SDR Analizando prospectos B2B en LinkedIn/Web...", delay: 300 },
      { text: "[AI ENRICHMENT] Calificando lead: Gerente de TI - Minería Perú (Scoring: 94/100)", delay: 1100 },
      { text: "[ACCION] Asignando reunión en Hubspot y redactando correo personalizado...", delay: 1900 },
      { text: "[READY] Correo enviado & alerta en Slack al Director Comercial.", delay: 2700 }
    ]
  };

  let activeInterval = null;

  function runAgentDemo(agentKey) {
    if (!terminalBox) return;
    terminalBox.innerHTML = '';
    const logs = agentSimulations[agentKey] || agentSimulations.whatsapp;

    logs.forEach(log => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = `<span class="terminal-prompt">></span> <span>${log.text}</span>`;
        terminalBox.appendChild(line);
        terminalBox.scrollTop = terminalBox.scrollHeight;
      }, log.delay);
    });
  }

  // Initial Run
  runAgentDemo('whatsapp');

  agentCards.forEach(card => {
    card.addEventListener('click', () => {
      agentCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const agentType = card.getAttribute('data-agent');
      runAgentDemo(agentType);
    });
  });
});
