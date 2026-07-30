"use client";

export default function TrustBanner() {
  return (
    <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6 my-12 reveal-on-scroll">
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center gap-6 border border-slate-800">
        <div className="w-12 h-8 rounded bg-gradient-to-r from-red-600 via-white to-red-600 shadow-md flex-none border border-slate-700"></div>
        <div>
          <strong className="text-white text-base sm:text-lg font-bold block mb-1 font-heading">
            INTEGRITY SOFTWARE S.A.C. (RUC: 20609874125). Medios de Pago Locales (Yape, Plin, Transferencia BCP/BBVA/Interbank).
          </strong>
          <p className="text-slate-300 text-xs sm:text-sm m-0 leading-relaxed">
            Factura o boleta de venta electrónica, soporte técnico garantizado y atención directa por WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
