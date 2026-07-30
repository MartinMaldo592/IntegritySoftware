"use client";

import { useRef } from "react";
import { SERVICES_DATA } from "@/data/services";

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "prev" | "next") => {
    if (!trackRef.current) return;
    const cardItem = trackRef.current.querySelector<HTMLDivElement>(".carousel-card-item");
    const cardWidth = cardItem?.offsetWidth || 300;
    const scrollAmount = (cardWidth + 28) * (direction === "next" ? 1.2 : -1.2);
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

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

  return (
    <section className="py-16 md:py-24 bg-slate-50/80 border-b border-slate-200" id="servicios">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
            Soluciones Adaptadas a la Realidad MYPE Peruana
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Servicios enfocados en acelerar tus ventas y automatizar tu negocio.
          </p>
        </div>

        <div className="relative reveal-on-scroll">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none scroll-smooth" ref={trackRef}>
            {SERVICES_DATA.map((service, idx) => (
              <div key={idx} className="flex-none w-[290px] sm:w-[350px] snap-start carousel-card-item">
                <div
                  className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-5 shadow-md shadow-blue-500/20">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading leading-snug">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-0">
                      <strong className="text-slate-800 font-semibold">¿Qué le resuelve al negocio?:</strong> {service.problemSolved}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-blue-600 font-bold text-xs sm:text-sm inline-flex items-center gap-1">
                      <i className="fas fa-check-circle text-xs"></i> {service.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm flex items-center justify-center transition-all cursor-pointer text-sm"
              onClick={() => scroll("prev")}
              aria-label="Anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm flex items-center justify-center transition-all cursor-pointer text-sm"
              onClick={() => scroll("next")}
              aria-label="Siguiente"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
