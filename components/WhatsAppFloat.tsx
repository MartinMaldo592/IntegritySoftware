"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51900000000?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20servicio%20para%20mi%20empresa"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Contactar por WhatsApp"
    >
      <span className="whatsapp-float-pulse"></span>
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-float-tooltip">
        <span className="online-dot"></span> <strong>En línea 24/7</strong> — Consulta por WhatsApp
      </span>
    </a>
  );
}
