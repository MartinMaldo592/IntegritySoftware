"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? "py-3 shadow-md border-b border-slate-200" : "py-4 border-b border-slate-100"}`}>
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
            IS
          </div>
          <div className="text-xl font-bold text-slate-900 tracking-tight font-heading">
            Integrity <span className="text-blue-600 font-extrabold">Software</span>
          </div>
        </a>

        {/* Desktop Nav Menu */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          <li><a href="#inicio" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Inicio</a></li>
          <li><a href="#servicios" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Servicios MYPE</a></li>
          <li><a href="#casos" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Casos de Éxito</a></li>
          <li><a href="#detalles" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Entregables</a></li>
          <li><a href="#contacto" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Cotizar por WhatsApp</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/51900000000?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20servicio%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
          >
            <i className="fab fa-whatsapp text-lg"></i> <span>Consulta por WhatsApp</span>
          </a>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-lg"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Abrir menú de navegación"
          >
            <i className={`fas ${isMobileOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white border-b border-slate-200 ${isMobileOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col gap-3 list-none px-6 py-2 m-0">
          <li><a href="#inicio" className="text-slate-700 hover:text-blue-600 font-semibold block py-2" onClick={() => setIsMobileOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" className="text-slate-700 hover:text-blue-600 font-semibold block py-2" onClick={() => setIsMobileOpen(false)}>Servicios MYPE</a></li>
          <li><a href="#casos" className="text-slate-700 hover:text-blue-600 font-semibold block py-2" onClick={() => setIsMobileOpen(false)}>Casos de Éxito</a></li>
          <li><a href="#detalles" className="text-slate-700 hover:text-blue-600 font-semibold block py-2" onClick={() => setIsMobileOpen(false)}>Entregables</a></li>
          <li><a href="#contacto" className="text-slate-700 hover:text-blue-600 font-semibold block py-2" onClick={() => setIsMobileOpen(false)}>Cotizar por WhatsApp</a></li>
        </ul>
        <div className="mt-4 px-6">
          <a
            href="https://wa.me/51900000000?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20servicio%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-sm w-full transition-all"
          >
            <i className="fab fa-whatsapp text-lg"></i> Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
