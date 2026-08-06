"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const name = (target.elements.namedItem("c-fullname") as HTMLInputElement).value;
    const comp = (target.elements.namedItem("c-comp") as HTMLInputElement).value;
    const tel = (target.elements.namedItem("c-tel") as HTMLInputElement).value;
    const interestSelect = target.elements.namedItem("c-interest") as HTMLSelectElement;
    const serviceText = interestSelect.options[interestSelect.selectedIndex]?.text || "Servicio General";
    const userMsg = (target.elements.namedItem("c-msg") as HTMLTextAreaElement).value;

    const waMsg = encodeURIComponent(
      `Hola Integrity Software (RUC 20609874125).\n` +
      `📌 *Solicitud de Cotización*\n` +
      `- *Nombre/Negocio:* ${name}\n` +
      `- *Rubro:* ${comp}\n` +
      `- *Teléfono:* ${tel}\n` +
      `- *Servicio:* ${serviceText}\n` +
      (userMsg ? `- *Detalles:* ${userMsg}` : "")
    );
    const waUrl = `https://wa.me/51982432561?text=${waMsg}`;

    setFormStatus(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200" id="contacto">
      <div className="w-[95%] max-w-5xl mx-auto px-4 md:px-6 reveal-on-scroll">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Solicita tu Cotización sin Compromiso
            </h2>
            <p className="text-slate-600 text-base">
              Selecciona la solución que necesita tu negocio. Responderemos en menos de 1 hora por WhatsApp o correo.
            </p>
          </div>

          {formStatus && (
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-300 p-4 rounded-xl mb-8 font-semibold text-sm flex items-center gap-2 shadow-sm">
              <i className="fas fa-check-circle text-emerald-600 text-lg"></i> ¡Solicitud generada con éxito! Redirigiendo a atención directa por WhatsApp...
            </div>
          )}

          <form id="contact-form" className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="c-fullname" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                Tu Nombre o Negocio *
              </label>
              <input
                type="text"
                id="c-fullname"
                name="c-fullname"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                placeholder="Ej. Juan Pérez (Dental San Martín)"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="c-comp" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                Rubro de tu Empresa *
              </label>
              <input
                type="text"
                id="c-comp"
                name="c-comp"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                placeholder="Ej. Restaurante / Odontología / Comercio"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="c-mail" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                Correo de Contacto *
              </label>
              <input
                type="email"
                id="c-mail"
                name="c-mail"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                placeholder="juan@minegocio.pe"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="c-tel" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                id="c-tel"
                name="c-tel"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                placeholder="+51 987 654 321"
                required
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="c-interest" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                Servicio Requerido *
              </label>
              <select
                id="c-interest"
                name="c-interest"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all cursor-pointer"
              >
                <option value="s1">1. Landing Page + Bot de WhatsApp</option>
                <option value="s2">2. Catálogo Digital / Tienda Virtual con Yape y Culqi</option>
                <option value="s3">3. Sistema de Gestión a Medida - ERP/CRM</option>
                <option value="s4">4. Automatización de Procesos &amp; APIs Web</option>
                <option value="s5">5. Mantenimiento &amp; Soporte Técnico Mensual</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="c-msg" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                ¿Qué necesita tu negocio?
              </label>
              <textarea
                id="c-msg"
                name="c-msg"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all min-h-[110px] resize-y"
                placeholder="Cuéntanos brevemente qué te gustaría mejorar o automatizar en tu empresa..."
              ></textarea>
            </div>

            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <i className="fas fa-paper-plane"></i> Solicitar Cotización
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
