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
    <header className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="#" className="brand-logo">
          <div className="logo-symbol">IS</div>
          <div className="brand-title">
            Integrity <span className="living-software">Software</span>
          </div>
        </a>

        {/* Desktop Nav Menu */}
        <ul className="nav-menu">
          <li><a href="#inicio" className="nav-link">Inicio</a></li>
          <li><a href="#servicios" className="nav-link">Servicios MYPE</a></li>
          <li><a href="#casos" className="nav-link">Casos de Éxito</a></li>
          <li><a href="#detalles" className="nav-link">Entregables</a></li>
          <li><a href="#contacto" className="nav-link">Cotizar por WhatsApp</a></li>
        </ul>

        <div className="nav-actions">
          <a
            href="https://wa.me/51900000000?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20servicio%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp header-wa-btn"
          >
            <i className="fab fa-whatsapp"></i> <span>Consulta por WhatsApp</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Abrir menú de navegación"
          >
            <i className={`fas ${isMobileOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div className={`mobile-menu-drawer ${isMobileOpen ? "is-open" : ""}`}>
        <ul className="mobile-nav-list">
          <li><a href="#inicio" className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>Servicios MYPE</a></li>
          <li><a href="#casos" className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>Casos de Éxito</a></li>
          <li><a href="#detalles" className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>Entregables</a></li>
          <li><a href="#contacto" className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>Cotizar por WhatsApp</a></li>
        </ul>
        <div style={{ marginTop: "20px", padding: "0 16px" }}>
          <a
            href="https://wa.me/51900000000?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20servicio%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: "100%" }}
          >
            <i className="fab fa-whatsapp"></i> Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
