"use client";

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "Facturación & Contratos",
    question: "¿Entregan factura o boleta de venta electrónica formal en Perú?",
    answer: "Sí. Somos Integrity Software S.A.C. (RUC: 20609874125), una empresa formalmente registrada en SUNAT. Todos nuestros desarrollos y servicios incluyen emisión de comprobante de pago electrónico (Factura o Boleta) según los requerimientos de tu empresa."
  },
  {
    id: "faq-2",
    category: "Pagos",
    question: "¿Cuáles son las modalidades y medios de pago aceptados?",
    answer: "Aceptamos pagos directos a cuentas corporativas BCP, BBVA e Interbank, así como transferencias inmediatas por Yape y Plin. Generalmente trabajamos con una modalidad de 50% de adelanto al iniciar el proyecto y 50% contra entrega e instalación final."
  },
  {
    id: "faq-3",
    category: "Tiempos de Entrega",
    question: "¿Cuánto tiempo toma el desarrollo de una solución para mi MYPE?",
    answer: "Una Landing Page con Bot de WhatsApp toma entre 3 a 5 días hábiles. Tiendas virtuales con pasarela Yape/Culqi y Sistemas ERP/CRM a medida toman entre 7 a 15 días hábiles, incluyendo pruebas completas y capacitación."
  },
  {
    id: "faq-4",
    category: "Propiedad & Código",
    question: "¿El código fuente y la web pasan a ser 100% de mi propiedad?",
    answer: "Absolutamente. Al finalizar el desarrollo y realizar la entrega oficial, recibes la propiedad total del código fuente, accesos de administración de hosting, dominio y paneles de gestión sin cargos ocultos ni sorpresas."
  },
  {
    id: "faq-5",
    category: "Soporte",
    question: "¿Qué garantía y soporte técnico incluyen los servicios?",
    answer: "Todos nuestros planes incluyen mínimo 30 días de soporte técnico post-lanzamiento garantizado. Además, ofrecemos planes mensuales opcionales de mantenimiento, copias de seguridad y actualización de contenidos."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200" id="faq">
      <div className="w-[95%] max-w-4xl mx-auto px-4 md:px-6 reveal-on-scroll">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-3.5 py-1.5 rounded-full text-blue-700 font-bold text-xs uppercase tracking-wider mb-4">
            <i className="fas fa-question-circle"></i> Resuelve tus dudas
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
            Preguntas Frecuentes (FAQ)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Todo lo que necesitas saber sobre procesos de contratación, facturación y desarrollo con Integrity Software.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden shadow-sm ${
                  isOpen ? "border-blue-600 ring-2 ring-blue-600/10 shadow-md" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none bg-transparent"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg font-heading">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-none ${
                      isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1">
                    <p className="m-0 text-slate-600">{item.answer}</p>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-blue-600 font-semibold">
                      <i className="fas fa-shield-alt"></i> Categoría: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
