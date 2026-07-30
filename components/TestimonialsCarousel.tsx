"use client";

import { useRef } from "react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export default function TestimonialsCarousel() {
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
    <section className="py-16 md:py-24 bg-slate-100/70 border-t border-b border-slate-200" id="casos">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
            Casos de Éxito de MYPES en Perú
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Testimonios reales de empresarios locales que impulsaron su negocio.
          </p>
        </div>

        <div className="relative reveal-on-scroll">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none scroll-smooth" ref={trackRef}>
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div key={idx} className="flex-none w-[290px] sm:w-[350px] snap-start carousel-card-item">
                <div
                  className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <div className="flex gap-1 text-amber-400 text-sm mb-4">
                      {[...Array(t.stars)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed mb-6">"{t.quote}"</p>
                  </div>
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      {t.avatarInitials}
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-sm font-bold leading-snug">{t.authorName}</strong>
                      <div className="text-xs text-slate-500 font-medium">{t.authorRole}</div>
                    </div>
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
