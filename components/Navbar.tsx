"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

  // Prevent background body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const navLinks = [
    { href: "/", label: "Inicio", icon: "fas fa-home" },
    { href: "/servicios", label: "Servicios MYPE", icon: "fas fa-cubes" },
    { href: "/nosotros", label: "Nosotros", icon: "fas fa-shield-alt" },
    { href: "/portafolio", label: "Portafolio", icon: "fas fa-chart-line" },
    { href: "/#faq", label: "Preguntas Frecuentes", icon: "fas fa-question-circle" },
    { href: "/#contacto", label: "Cotizar Proyecto", icon: "fas fa-paper-plane" }
  ];

  return (
    <header className={`sticky top-0 left-0 w-full z-[1050] bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? "shadow-md border-b border-slate-200" : "border-b border-slate-100"}`}>
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
            IS
          </div>
          <div className="text-xl font-bold text-slate-900 tracking-tight font-heading">
            Integrity <span className="logo-gradient-text font-extrabold">Software</span>
          </div>
        </Link>

        {/* Desktop Nav Menu */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          <li><Link href="/" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Inicio</Link></li>
          <li><Link href="/servicios" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Servicios MYPE</Link></li>
          <li><Link href="/nosotros" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Nosotros</Link></li>
          <li><Link href="/portafolio" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Portafolio</Link></li>
          <li><Link href="/#faq" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">FAQ</Link></li>
          <li><Link href="/#contacto" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Cotizar</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/51982432561?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20servicio%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
          >
            <i className="fab fa-whatsapp text-lg"></i> <span>Consulta por WhatsApp</span>
          </a>

          {/* Hamburger Trigger Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-lg cursor-pointer border-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Abrir menú de navegación"
          >
            <i className={`fas ${isMobileOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu: Slides down from header occupying full screen height without jitter */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100vh - 73px)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden w-full bg-white border-t border-slate-200 overflow-hidden z-[1050]"
          >
            <div className="h-full flex flex-col justify-between p-5 sm:p-6 overflow-y-auto">
              {/* Navigation Links with Staggered Entrance */}
              <ul className="flex flex-col gap-1 list-none p-0 text-left pt-2 pb-4">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + idx * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-slate-800 hover:text-blue-600 active:bg-blue-50/70 font-bold text-lg sm:text-xl py-3 px-3 rounded-xl transition-all flex items-center justify-between group"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <i className={`${link.icon} text-slate-400 group-hover:text-blue-600 text-base transition-colors`}></i>
                        <span>{link.label}</span>
                      </div>
                      <i className="fas fa-chevron-right text-xs text-slate-300 group-hover:text-blue-600 transition-colors"></i>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom WhatsApp CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.22 }}
                className="pt-4 border-t border-slate-100 pb-10 sm:pb-6"
              >
                <a
                  href="https://wa.me/51982432561?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20servicio%20para%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-base py-3.5 px-5 rounded-2xl shadow-md w-full transition-all text-center"
                >
                  <i className="fab fa-whatsapp text-2xl"></i> Cotizar por WhatsApp Directo
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
