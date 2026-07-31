"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-3 no-underline mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                IS
              </div>
              <div className="text-xl font-bold text-white tracking-tight font-heading">
                Integrity <span className="text-blue-500 font-extrabold">Software</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              INTEGRITY SOFTWARE S.A.C. (RUC 20609874125). Soluciones de software, automatización y bots accesibles para micro y pequeñas empresas en el Perú.
            </p>
          </div>

          <div>
            <h4 className="text-white text-base font-bold mb-4 font-heading border-b border-slate-800 pb-2">Servicios MYPE</h4>
            <ul className="space-y-2.5 text-sm list-none p-0 m-0">
              <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">1. Landing + Bot de WhatsApp</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">2. Tienda Virtual &amp; Yape/Culqi</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">3. ERP/CRM MYPE a Medida</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">4. Conexión SUNAT &amp; APIs</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">5. Soporte Técnico Mensual</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base font-bold mb-4 font-heading border-b border-slate-800 pb-2">Navegación</h4>
            <ul className="space-y-2.5 text-sm list-none p-0 m-0">
              <li><a href="#inicio" className="text-slate-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#casos" className="text-slate-400 hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#detalles" className="text-slate-400 hover:text-white transition-colors">Entregables</a></li>
              <li><a href="#contacto" className="text-slate-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base font-bold mb-4 font-heading border-b border-slate-800 pb-2">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 list-none p-0 m-0">
              <li className="font-semibold text-white">INTEGRITY SOFTWARE S.A.C.</li>
              <li>RUC: 20609874125</li>
              <li>Lima, Perú</li>
              <li>contacto@integritysoftware.pe</li>
              <li className="text-emerald-400 font-semibold">WhatsApp: +51 982 432 561</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; 2026 INTEGRITY SOFTWARE S.A.C. (RUC 20609874125). Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
