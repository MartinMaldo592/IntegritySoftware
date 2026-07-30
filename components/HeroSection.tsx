"use client";

import { useState, useEffect, useRef } from "react";
import { HERO_PHRASES, HERO_SLIDES } from "@/data/hero";

interface TypewriterState {
  phraseIndex: number;
  charIndex: number;
  isDeleting: boolean;
}

export default function HeroSection() {
  const [currentText, setCurrentText] = useState<string>(HERO_PHRASES[0]);
  const typewriterState = useRef<TypewriterState>({
    phraseIndex: 0,
    charIndex: HERO_PHRASES[0].length,
    isDeleting: true
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    function typeLoop() {
      const state = typewriterState.current;
      const currentPhrase = HERO_PHRASES[state.phraseIndex];
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
        state.phraseIndex = (state.phraseIndex + 1) % HERO_PHRASES.length;
        typingSpeed = 350;
      }

      timeoutId = setTimeout(typeLoop, typingSpeed);
    }

    timeoutId = setTimeout(typeLoop, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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

  return (
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

        {/* Hero Slider */}
        <div
          className="hero-image-wrap reveal-on-scroll"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <div className="hero-slider-track">
            {HERO_SLIDES.map((item, idx) => (
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
              <i className={HERO_SLIDES[currentSlide].icon}></i>
            </div>
            <div className="overlay-text">
              <h4 style={{ marginBottom: 0 }}>{HERO_SLIDES[currentSlide].title}</h4>
            </div>
          </div>
          <div className="hero-slider-dots">
            {HERO_SLIDES.map((_, idx) => (
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
  );
}
