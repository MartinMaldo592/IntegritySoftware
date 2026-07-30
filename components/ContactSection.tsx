"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const name = (target.elements.namedItem("c-fullname") as HTMLInputElement).value;
    const tel = (target.elements.namedItem("c-tel") as HTMLInputElement).value;

    const waMsg = encodeURIComponent(
      `Hola Integrity Software (RUC 20609874125), mi nombre es ${name}. Quisiera cotizar el servicio seleccionado. Mi número es: ${tel}`
    );
    const waUrl = `https://wa.me/51900000000?text=${waMsg}`;

    setFormStatus(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1000);
  };

  return (
    <section className="section contact-section-light" id="contacto">
      <div className="container reveal-on-scroll">
        <div className="contact-card-light">
          <div className="section-header" style={{ marginBottom: "36px" }}>
            <h2>Solicita tu Cotización sin Compromiso</h2>
            <p>Selecciona la solución que necesita tu negocio. Responderemos en menos de 1 hora por WhatsApp o correo.</p>
          </div>

          {formStatus && (
            <div style={{ background: "#dcfce7", color: "#15803d", border: "1px solid #86efac", padding: "16px", borderRadius: "8px", marginBottom: "24px", fontWeight: 600 }}>
              <i className="fas fa-check-circle"></i> ¡Solicitud generada con éxito! Redirigiendo a atención directa por WhatsApp...
            </div>
          )}

          <form id="contact-form" className="contact-form-grid" onSubmit={handleSubmit}>
            <div className="form-group-light">
              <label htmlFor="c-fullname">Tu Nombre o Negocio *</label>
              <input type="text" id="c-fullname" name="c-fullname" className="form-control-light" placeholder="Ej. Juan Pérez (Dental San Martín)" required />
            </div>

            <div className="form-group-light">
              <label htmlFor="c-comp">Rubro de tu Empresa *</label>
              <input type="text" id="c-comp" name="c-comp" className="form-control-light" placeholder="Ej. Restaurante / Odontología / Comercio" required />
            </div>

            <div className="form-group-light">
              <label htmlFor="c-mail">Correo de Contacto *</label>
              <input type="email" id="c-mail" name="c-mail" className="form-control-light" placeholder="juan@minegocio.pe" required />
            </div>

            <div className="form-group-light">
              <label htmlFor="c-tel">Teléfono / WhatsApp *</label>
              <input type="tel" id="c-tel" name="c-tel" className="form-control-light" placeholder="+51 987 654 321" required />
            </div>

            <div className="form-group-light form-full-width">
              <label htmlFor="c-interest">Servicio Requerido *</label>
              <select id="c-interest" name="c-interest" className="form-control-light">
                <option value="s1">1. Landing Page + Bot de WhatsApp</option>
                <option value="s2">2. Catálogo Digital / Tienda Virtual con Yape y Culqi</option>
                <option value="s3">3. Sistema de Gestión a Medida - ERP/CRM</option>
                <option value="s4">4. Automatización & Conexión SUNAT</option>
                <option value="s5">5. Mantenimiento & Soporte Técnico Mensual</option>
              </select>
            </div>

            <div className="form-group-light form-full-width">
              <label htmlFor="c-msg">¿Qué necesita tu negocio?</label>
              <textarea id="c-msg" name="c-msg" className="form-control-light" style={{ minHeight: "110px", resize: "vertical" }} placeholder="Cuéntanos brevemente qué te gustaría mejorar o automatizar en tu empresa..."></textarea>
            </div>

            <div className="form-full-width" style={{ marginTop: "10px" }}>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "16px" }}>
                <i className="fas fa-paper-plane"></i> Solicitar Cotización Rápida
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
