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

  // Parallax with strict bounds and desktop-only restriction
  const [parallaxY, setParallaxY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 992) {
        const scrolled = window.scrollY;
        if (scrolled < 700) {
          setParallaxY(Math.min(scrolled * 0.03, 15));
        }
      } else {
        setParallaxY(0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden" id="inicio">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="reveal-on-scroll">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 text-center lg:text-left font-heading">
            Software &amp; Automatización Accesible para{" "}
            <span className="text-blue-600 font-extrabold">
              {currentText}
              <span className="text-blue-600 animate-pulse font-bold ml-0.5">|</span>
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            Ayudamos a micro y pequeñas empresas peruanas a vender más y ahorrar tiempo: Landing pages con Bot de WhatsApp, Tiendas virtuales con Yape/Plin, Sistemas ERP/CRM a medida y Automatizaciones SUNAT con garantía de soporte y desarrollo personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
              <i className="fas fa-paper-plane"></i> Cotizar mi Proyecto Rápido
            </a>
            <a href="#servicios" className="inline-flex items-center justify-center gap-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200">
              Ver Servicios Especializados
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200 text-center lg:text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading">24/7</div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Automatización &amp; Respuestas</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading">100%</div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Código a Medida &amp; Garantía</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-blue-600 font-heading">
                RUC 20609874125
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Empresa Formal S.A.C.</div>
            </div>
          </div>
        </div>

        {/* Hero Slider with strictly bounded transform */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200 h-[300px] sm:h-[380px] lg:h-[450px] reveal-on-scroll my-4 lg:my-0"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <div className="relative w-full h-full">
            {HERO_SLIDES.map((item, idx) => (
              <img
                key={idx}
                src={item.img}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                alt={item.title}
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-900/85 backdrop-blur-md text-white p-4 rounded-xl flex items-center gap-3 border border-white/10 shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400 text-lg">
              <i className={HERO_SLIDES[currentSlide].icon}></i>
            </div>
            <div>
              <h4 className="m-0 font-bold text-sm sm:text-base text-white">{HERO_SLIDES[currentSlide].title}</h4>
            </div>
          </div>
          <div className="absolute top-4 right-4 z-20 flex gap-2 bg-slate-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all border-none p-0 cursor-pointer ${idx === currentSlide ? "bg-blue-500 w-6" : "bg-white/40 hover:bg-white/70"}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ver slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
