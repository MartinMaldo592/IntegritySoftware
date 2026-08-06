"use client";

import { buildGeneralInquiryUrl } from "@/lib/whatsapp/quote";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildGeneralInquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none"></span>
      <i className="fab fa-whatsapp relative z-10"></i>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-slate-800 hidden sm:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <strong className="font-semibold">En línea 24/7</strong> — Consulta por WhatsApp
      </span>
    </a>
  );
}
