"use client";

import { buildBrochureRequestUrl } from "@/lib/whatsapp/quote";

export default function TrustBanner() {
  return (
    <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6 my-12 reveal-on-scroll">
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl flex-none">
            <i className="fas fa-shield-check"></i>
          </div>
          <div>
            <strong className="text-white text-base sm:text-lg font-bold block mb-1 font-heading">
              INTEGRITY SOFTWARE S.A.C. (RUC: 20609874125) — Garantía &amp; Facilidades MYPE
            </strong>
            <p className="text-slate-300 text-xs sm:text-sm m-0 leading-relaxed">
               Modalidad transparente: <strong>50% al inicio y 50% contra entrega probada</strong>. Incluye <strong>30 días de garantía post-entrega</strong> y capacitación sin costo adicional.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-none">
          <a
            href={buildBrochureRequestUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-sm"
          >
            <i className="fas fa-file-pdf"></i> Solicitar Brochure PDF
          </a>
        </div>
      </div>
    </div>
  );
}
