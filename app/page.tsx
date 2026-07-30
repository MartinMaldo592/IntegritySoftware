"use client";

import { useState, useEffect, useRef } from "react";

interface SliderItem {
  img: string;
  title: string;
  icon: string;
}

interface TypewriterState {
  phraseIndex: number;
  charIndex: number;
  isDeleting: boolean;
}

export default function HomePage() {
  // 1. Mobile Menu Drawer Toggle State
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  // 2. Typewriter Loop State with Executive Impact Phrases
  const phrases: string[] = [
    "Tu Empresa MYPE",
    "Escalar tus Ventas",
    "Ventas en WhatsApp",
    "Optimizar tus Procesos",
    "Digitalizar tu Negocio",
    "Automatizar Operaciones"
  ];
  const [currentText, setCurrentText] = useState<string>(phrases[0]);
  const typewriterState = useRef<TypewriterState>({
    phraseIndex: 0,
    charIndex: phrases[0].length,
    isDeleting: true
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    function typeLoop() {
      const state = typewriterState.current;
      const currentPhrase = phrases[state.phraseIndex];
      let typingSpeed = 90;

      if (state.isDeleting) {
        state.charIndex--;
        typingSpeed = 45;
      } else {
        state.charIndex++;
        typingSpeed = 90;
      }

      setCurrentText(currentPhrase.substring(0, state.charIndex));

      if (!state.isDeleting && state.charIndex >= currentPhrase.length) {
        typingSpeed = 2200;
        state.isDeleting = true;
      } else if (state.isDeleting && state.charIndex <= 0) {
        state.isDeleting = false;
        state.phraseIndex = (state.phraseIndex + 1) % phrases.length;
        typingSpeed = 350;
      }

      timeoutId = setTimeout(typeLoop, typingSpeed);
    }

    timeoutId = setTimeout(typeLoop, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  // 3. Hero Automated Software & Systems Slider State
  const sliderData: SliderItem[] = [
    {
      img: "/img/hero_enterprise_tech_1785388460733.jpg",
      title: "Arquitectura & Software Empresarial",
      icon: "fas fa-laptop-code"
    },
    {
      img: "/img/hero_software_code_dash.jpg",
      title: "Desarrollo de Código TypeScript & Dashboards",
      icon: "fas fa-code"
    },
    {
      img: "/img/dashboard_mockup.jpg",
      title: "Sistemas ERP, CRM & Ventas MYPE",
      icon: "fas fa-chart-line"
    }
  ];
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  // 4. Solutions Tab Switcher State & Morphing Indicator Position
  const [activeTab, setActiveTab] = useState<string>("tab-landing");
  const tabNavRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!tabNavRef.current) return;
    const activeBtn = tabNavRef.current.querySelector<HTMLButtonElement>(`.tab-btn[data-tab="${activeTab}"]`);
    if (activeBtn) {
      setIndicatorStyle({
        left: activeBtn.offsetLeft + "px",
        width: activeBtn.offsetWidth + "px"
      });
    }
  }, [activeTab]);

  // 5. Scroll Reveal Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 6. Hero Parallax Effect
  const [parallaxY, setParallaxY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < 900) {
        setParallaxY(scrolled * 0.12);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 7. 3D Mouse Tilt Effect Handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 14;
    const rotateY = (centerX - x) / 14;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  // 8. Horizontal Carousel Scroll Refs
  const servicesTrackRef = useRef<HTMLDivElement | null>(null);
  const testimonialsTrackRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (trackRef: React.RefObject<HTMLDivElement | null>, direction: "prev" | "next") => {
    if (!trackRef.current) return;
    const cardItem = trackRef.current.querySelector<HTMLDivElement>(".carousel-card-item");
    const cardWidth = cardItem?.offsetWidth || 300;
    const scrollAmount = (cardWidth + 28) * (direction === "next" ? 1.2 : -1.2);
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // 9. Contact Form Submit Handler
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
    <>
      {/* Top Trust Notice Banner */}
      <div className="top-notice-bar">
        <div className="container notice-container">
          <div>
            <i className="fas fa-building" style={{ color: "#38bdf8", marginRight: "6px" }}></i>{" "}
            <strong>INTEGRITY SOFTWARE S.A.C.</strong> | RUC: <strong>20609874125</strong>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="navbar">
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

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-text reveal-on-scroll">
            <h1 className="hero-title">
              Software &amp; Automatización Accesible para{" "}
              <span className="typewriter-container">
                <span className="text-accent">{currentText}</span>
                <span className="typewriter-cursor">|</span>
              </span>
            </h1>
            <p className="hero-description">
              Ayudamos a micro y pequeñas empresas peruanas a vender más y ahorrar tiempo: Landing pages con Bot de WhatsApp, Tiendas virtuales con Yape/Plin, Sistemas ERP/CRM a medida y Automatizaciones SUNAT con garantía de soporte y desarrollo personalizado.
            </p>

            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Cotizar mi Proyecto Rápido
              </a>
              <a href="#servicios" className="btn btn-secondary">
                Ver Servicios Especializados
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="stat-val">24/7</div>
                <div className="stat-label">Automatización &amp; Respuestas</div>
              </div>
              <div>
                <div className="stat-val">100%</div>
                <div className="stat-label">Código a Medida &amp; Garantía</div>
              </div>
              <div>
                <div className="stat-val" style={{ fontSize: "clamp(1.4rem, 2vw, 2.2rem)" }}>
                  RUC 20609874125
                </div>
                <div className="stat-label">Empresa Formal S.A.C.</div>
              </div>
            </div>
          </div>

          {/* Hero Executive Software & Systems Automated Carousel with Parallax */}
          <div
            className="hero-image-wrap reveal-on-scroll"
            style={{ transform: `translateY(${parallaxY}px)` }}
          >
            <div className="hero-slider-track">
              {sliderData.map((item, idx) => (
                <img
                  key={idx}
                  src={item.img}
                  className={`slider-img ${idx === currentSlide ? "active" : ""}`}
                  alt={item.title}
                />
              ))}
            </div>
            <div className="hero-badge-overlay">
              <div className="overlay-icon">
                <i className={sliderData[currentSlide].icon}></i>
              </div>
              <div className="overlay-text">
                <h4 style={{ marginBottom: 0 }}>{sliderData[currentSlide].title}</h4>
              </div>
            </div>
            <div className="hero-slider-dots">
              {sliderData.map((_, idx) => (
                <span
                  key={idx}
                  className={`slider-dot ${idx === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key MYPE Benefits Section */}
      <section className="section" style={{ background: "#ffffff", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div className="benefits-grid">
            <div
              className="benefit-card reveal-on-scroll tilt-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fas fa-clock benefit-icon"></i>
              <h4>Ahorra hasta 20 Horas a la Semana</h4>
              <p>Automatiza el envío de comprobantes, pedidos y agendas sin tareas manuales repetitivas.</p>
            </div>
            <div
              className="benefit-card reveal-on-scroll tilt-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fas fa-comments-dollar benefit-icon"></i>
              <h4>Responde & Vende 24/7 por WhatsApp</h4>
              <p>Tus prospectos reciben respuesta inmediata a cualquier hora del día, cerrando más ventas.</p>
            </div>
            <div
              className="benefit-card reveal-on-scroll tilt-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fas fa-receipt benefit-icon"></i>
              <h4>Facturación SUNAT Sin Errores</h4>
              <p>Emisión directa de boletas y facturas electrónicas para evitar sanciones tributarias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <h2>Soluciones Adaptadas a la Realidad MYPE Peruana</h2>
            <p>Servicios enfocados en acelerar tus ventas y automatizar tu negocio.</p>
          </div>

          <div className="carousel-wrapper reveal-on-scroll">
            <div className="horizontal-carousel-track" ref={servicesTrackRef}>
              <div className="carousel-card-item">
                <div
                  className="service-card-light tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="service-icon-box"><i className="fab fa-whatsapp"></i></div>
                  <h3>1. Landing Page + Bot de WhatsApp</h3>
                  <p><strong>¿Qué le resuelve al negocio?:</strong> Negocios locales (dentistas, restaurantes, consultoras) que quieren captar clientes y responder automáticamente 24/7 sin perder ventas.</p>
                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
                    <small style={{ color: "var(--accent-blue)", fontWeight: 700, fontSize: "0.95rem" }}>⚡ Solución Lista para Vender</small>
                  </div>
                </div>
              </div>

              <div className="carousel-card-item">
                <div
                  className="service-card-light tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="service-icon-box"><i className="fas fa-shopping-cart"></i></div>
                  <h3>2. Catálogo Digital / Tienda Virtual</h3>
                  <p><strong>¿Qué le resuelve al negocio?:</strong> MYPES que venden por redes sociales y necesitan carrito de compras, integración de pagos (Yape, Plin, Culqi) y control de stock.</p>
                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
                    <small style={{ color: "var(--accent-blue)", fontWeight: 700, fontSize: "0.95rem" }}>⚡ Pasarelas Locales Integradas</small>
                  </div>
                </div>
              </div>

              <div className="carousel-card-item">
                <div
                  className="service-card-light tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="service-icon-box"><i className="fas fa-database"></i></div>
                  <h3>3. Sistema de Gestión ERP / CRM</h3>
                  <p><strong>¿Qué le resuelve al negocio?:</strong> Negocios que manejan todo en Excel y pierden información (control de inventario, ventas, clientes, caja o citas).</p>
                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
                    <small style={{ color: "var(--accent-blue)", fontWeight: 700, fontSize: "0.95rem" }}>⚡ Sistema Web Personalizado</small>
                  </div>
                </div>
              </div>

              <div className="carousel-card-item">
                <div
                  className="service-card-light tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="service-icon-box"><i className="fas fa-file-invoice-dollar"></i></div>
                  <h3>4. Conexión SUNAT & APIs</h3>
                  <p><strong>¿Qué le resuelve al negocio?:</strong> Sincronizar sus ventas con facturación electrónica (SUNAT/OSE) o enviar reportes automáticos de caja por WhatsApp.</p>
                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
                    <small style={{ color: "var(--accent-blue)", fontWeight: 700, fontSize: "0.95rem" }}>⚡ Conexión Automática SUNAT</small>
                  </div>
                </div>
              </div>

              <div className="carousel-card-item">
                <div
                  className="service-card-light tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="service-icon-box"><i className="fas fa-wrench"></i></div>
                  <h3>5. Mantenimiento & Soporte Mensual</h3>
                  <p><strong>¿Qué le resuelve al negocio?:</strong> Administración de servidores, respaldos de base de datos, ajustes menores de código y actualización periódica.</p>
                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
                    <small style={{ color: "var(--accent-blue)", fontWeight: 700, fontSize: "0.95rem" }}>⚡ Servicio Recurrente Mensual</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-controls-bar">
              <button className="carousel-nav-btn" onClick={() => scrollCarousel(servicesTrackRef, "prev")} aria-label="Anterior">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="carousel-nav-btn" onClick={() => scrollCarousel(servicesTrackRef, "next")} aria-label="Siguiente">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="section" id="casos" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <h2>Casos de Éxito de MYPES en Perú</h2>
            <p>Testimonios reales de empresarios locales que impulsaron su negocio.</p>
          </div>

          <div className="carousel-wrapper reveal-on-scroll">
            <div className="horizontal-carousel-track" ref={testimonialsTrackRef}>
              <div className="carousel-card-item">
                <div
                  className="testimonial-card tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="star-rating">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-quote">
                    "Antes perdíamos pacientes por no responder a tiempo en WhatsApp. El equipo de Integrity Software nos entregó la página con el bot integrado de manera impecable y ahora agendamos citas en automático."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">DR</div>
                    <div>
                      <strong className="author-name">Dr. Fernando Ramírez</strong>
                      <div className="author-role">Clínica Dental OdontoSalud (Miraflores, Lima)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-card-item">
                <div
                  className="testimonial-card tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="star-rating">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-quote">
                    "Teníamos todo el inventario en hojas de Excel desordenadas. Nos desarrollaron un sistema web simple e intuitivo y ahora cobramos con Yape y emitimos boletas SUNAT sin complicaciones."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">CP</div>
                    <div>
                      <strong className="author-name">Sr. Carlos Palacios</strong>
                      <div className="author-role">Importadora & Distribuidora InkaTools (Arequipa)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-card-item">
                <div
                  className="testimonial-card tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="star-rating">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-quote">
                    "Nuestra tienda virtual vende ropa por Instagram. Nos integraron el catálogo con Culqi y Mercado Pago sin complicaciones. La atención directa por WhatsApp del equipo fue excelente."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">MV</div>
                    <div>
                      <strong className="author-name">Sra. María Elena Vega</strong>
                      <div className="author-role">Boutique Moda & Estilo (Trujillo)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-controls-bar">
              <button className="carousel-nav-btn" onClick={() => scrollCarousel(testimonialsTrackRef, "prev")} aria-label="Anterior">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="carousel-nav-btn" onClick={() => scrollCarousel(testimonialsTrackRef, "next")} aria-label="Siguiente">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Tabbed Section with Morphing Indicator */}
      <section className="section" id="detalles">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <h2>¿Qué Incluye Cada Servicio MYPE?</h2>
            <p>Transparencia total en los componentes que recibe tu empresa al contratar con Integrity Software.</p>
          </div>

          <div className="solutions-tabs-nav reveal-on-scroll" ref={tabNavRef} style={{ position: "relative" }}>
            <div className="morphing-tab-pill" style={indicatorStyle}></div>
            {[
              { id: "tab-landing", label: "1. Landing + Bot" },
              { id: "tab-tienda", label: "2. Tienda Virtual" },
              { id: "tab-erp", label: "3. ERP / CRM MYPE" },
              { id: "tab-sunat", label: "4. SUNAT & APIs" },
              { id: "tab-soporte", label: "5. Soporte Mensual" }
            ].map((tab) => (
              <button
                key={tab.id}
                data-tab={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "tab-landing" && (
            <div className="tab-pane active" id="tab-landing">
              <div className="tab-content-card">
                <h3>Landing Page + Bot de WhatsApp</h3>
                <p>Solución para captar clientes y agendar citas automáticamente desde WhatsApp y la Web.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle"></i> <strong>Diseño Web:</strong> Landing page optimizada para celulares y alta conversión.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Bot de WhatsApp:</strong> Respuestas automáticas 24/7, toma de datos y agendas.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Dominio & Hosting:</strong> Configuración lista para anunciar en Facebook / Google Ads.</li>
                </ul>
                <div className="deliverable-tag">
                  <strong style={{ color: "var(--accent-blue)" }}>Modalidad:</strong> Desarrollo Personalizado
                </div>
              </div>
              <div className="tab-image-card">
                <img src="/img/dashboard_mockup.jpg" alt="Landing Page con Bot de WhatsApp" />
              </div>
            </div>
          )}

          {activeTab === "tab-tienda" && (
            <div className="tab-pane active" id="tab-tienda">
              <div className="tab-content-card">
                <h3>Catálogo Digital / Tienda Virtual Básica</h3>
                <p>Para MYPES que venden por redes sociales y necesitan automatizar su catálogo con Yape, Plin y tarjetas.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle"></i> <strong>Pasarelas Perú:</strong> Pago con Yape, Plin, Culqi, Mercado Pago o tarjeta de crédito.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Control de Stock:</strong> Gestión sencilla de productos, categorías y precios.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Pedidos Directos:</strong> Confirmación automática de compra directo a tu WhatsApp.</li>
                </ul>
                <div className="deliverable-tag">
                  <strong style={{ color: "var(--accent-blue)" }}>Modalidad:</strong> Desarrollo Personalizado
                </div>
              </div>
              <div className="tab-image-card">
                <img src="/img/hero_enterprise_tech_1785388460733.jpg" alt="Tienda Virtual con Yape y Culqi" />
              </div>
            </div>
          )}

          {activeTab === "tab-erp" && (
            <div className="tab-pane active" id="tab-erp">
              <div className="tab-content-card">
                <h3>Sistema de Gestión a Medida (ERP / CRM simple)</h3>
                <p>Centraliza todo el control de tu empresa en un sistema web accesible desde tu celular o computadora.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle"></i> <strong>Módulos:</strong> Inventario, ventas, registro de clientes e historial de caja.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Dashboard:</strong> Cuadro de mando visual con gráficos sencillos e intuitivos.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Multiusuario:</strong> Accesos con permisos para administradores y vendedores.</li>
                </ul>
                <div className="deliverable-tag">
                  <strong style={{ color: "var(--accent-blue)" }}>Modalidad:</strong> Desarrollo Personalizado
                </div>
              </div>
              <div className="tab-image-card">
                <img src="/img/dashboard_mockup.jpg" alt="Sistema ERP CRM MYPE" />
              </div>
            </div>
          )}

          {activeTab === "tab-sunat" && (
            <div className="tab-pane active" id="tab-sunat">
              <div className="tab-content-card">
                <h3>Automatización & Conexión de Sistemas (SUNAT/APIs)</h3>
                <p>Conecta tus ventas diarias con la emisión automática de boletas y facturas en SUNAT sin digitar nada manualmente.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle"></i> <strong>SUNAT / OSE:</strong> Emisión automática de comprobantes electrónicos (Boletas / Facturas).</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Reportes Automáticos:</strong> Envío diario de resumen de ventas por correo o WhatsApp.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Sincronización:</strong> Conexión de hojas de Google Sheets / Excel con tu sistema.</li>
                </ul>
                <div className="deliverable-tag">
                  <strong style={{ color: "var(--accent-blue)" }}>Modalidad:</strong> Integración Directa
                </div>
              </div>
              <div className="tab-image-card">
                <img src="/img/dashboard_mockup.jpg" alt="Integración SUNAT y Automatizaciones" />
              </div>
            </div>
          )}

          {activeTab === "tab-soporte" && (
            <div className="tab-pane active" id="tab-soporte">
              <div className="tab-content-card">
                <h3>Mantenimiento & Soporte Técnico Mensual</h3>
                <p>Mantén tu web o sistema siempre activo, rápido y seguro sin preocuparte por fallas técnicas.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check-circle"></i> <strong>Monitoreo 24/7:</strong> Control de servidores, velocidad y copias de seguridad.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Actualizaciones:</strong> Cambios menores de texto, precios o imágenes a solicitud.</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Soporte Directo:</strong> Atención prioritaria por WhatsApp para resolver cualquier incidencia.</li>
                </ul>
                <div className="deliverable-tag">
                  <strong style={{ color: "var(--accent-blue)" }}>Modalidad:</strong> Plan de Soporte Mensual Recurrente
                </div>
              </div>
              <div className="tab-image-card">
                <img src="/img/hero_enterprise_tech_1785388460733.jpg" alt="Soporte Técnico Mensual MYPE" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Peru Local Trust Banner */}
      <div className="container reveal-on-scroll">
        <div className="peru-trust-bar">
          <div className="flag-peru"></div>
          <div>
            <strong style={{ color: "var(--text-primary)" }}>
              INTEGRITY SOFTWARE S.A.C. (RUC: 20609874125). Medios de Pago Locales (Yape, Plin, Transferencia BCP/BBVA/Interbank).
            </strong>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              Factura o boleta de venta electrónica, soporte técnico garantizado y atención directa por WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
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

      {/* Footer */}
      <footer className="footer-light">
        <div className="container">
          <div className="footer-grid-light">
            <div className="footer-brand">
              <a href="#" className="brand-logo" style={{ textDecoration: "none" }}>
                <div className="logo-symbol">IS</div>
                <div className="brand-title" style={{ color: "#ffffff" }}>
                  Integrity <span className="living-software">Software</span>
                </div>
              </a>
              <p>
                INTEGRITY SOFTWARE S.A.C. (RUC 20609874125). Soluciones de software, automatización y bots accesibles para micro y pequeñas empresas en el Perú.
              </p>
            </div>

            <div className="footer-col">
              <h4>Servicios MYPE</h4>
              <ul>
                <li><a href="#servicios">1. Landing + Bot de WhatsApp</a></li>
                <li><a href="#servicios">2. Tienda Virtual & Yape/Culqi</a></li>
                <li><a href="#servicios">3. ERP/CRM MYPE a Medida</a></li>
                <li><a href="#servicios">4. Conexión SUNAT & APIs</a></li>
                <li><a href="#servicios">5. Soporte Técnico Mensual</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Navegación</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#casos">Casos de Éxito</a></li>
                <li><a href="#detalles">Entregables</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contacto Rápido</h4>
              <ul>
                <li>INTEGRITY SOFTWARE S.A.C.</li>
                <li>RUC: 20609874125</li>
                <li>Lima, Perú</li>
                <li>contacto@integritysoftware.pe</li>
                <li>WhatsApp: +51 900 000 000</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 INTEGRITY SOFTWARE S.A.C. (RUC 20609874125). Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating Animated WhatsApp Button */}
      <a
        href="https://wa.me/51900000000?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20servicio%20para%20mi%20empresa"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-float-pulse"></span>
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-float-tooltip">
          <span className="online-dot"></span> <strong>En línea 24/7</strong> — Consulta por WhatsApp
        </span>
      </a>
    </>
  );
}
