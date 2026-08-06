"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA } from "@/data/services";
import { ServiceItem } from "@/types";
import { buildServiceQuoteUrl } from "@/lib/whatsapp/quote";

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<{ item: ServiceItem; idx: number } | null>(null);

  const updateActiveIndex = () => {
    if (!trackRef.current) return;
    const cardItem = trackRef.current.querySelector<HTMLDivElement>(".carousel-card-item");
    if (!cardItem) return;
    const cardWidth = cardItem.offsetWidth + 24; // width + gap
    const index = Math.round(trackRef.current.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), SERVICES_DATA.length - 1));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => track.removeEventListener("scroll", updateActiveIndex);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const cardItem = trackRef.current.querySelector<HTMLDivElement>(".carousel-card-item");
    if (!cardItem) return;
    const cardWidth = cardItem.offsetWidth + 24;
    trackRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  const scroll = (direction: "prev" | "next") => {
    const targetIndex = direction === "next"
      ? Math.min(activeIndex + 1, SERVICES_DATA.length - 1)
      : Math.max(activeIndex - 1, 0);
    scrollToIndex(targetIndex);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50/80 border-b border-slate-200" id="servicios">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
            Soluciones Adaptadas a la Realidad MYPE Peruana
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explora nuestros paquetes de desarrollo a medida diseñados para impulsar el crecimiento de tu empresa.
          </p>
        </div>

        <div className="relative reveal-on-scroll">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none scroll-smooth" ref={trackRef}>
            {SERVICES_DATA.map((service, idx) => (
              <div key={idx} className="flex-none w-[290px] sm:w-[350px] snap-start carousel-card-item">
                <motion.div
                  layoutId={`service-card-${idx}`}
                  onClick={() => setSelectedService({ item: service, idx })}
                  className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div>
                    <motion.div
                      layoutId={`service-icon-${idx}`}
                      className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-5 shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors"
                    >
                      <i className={service.icon}></i>
                    </motion.div>
                    <motion.h3
                      layoutId={`service-title-${idx}`}
                      className="text-xl font-bold text-slate-900 mb-3 font-heading leading-snug"
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-0">
                      <strong className="text-slate-800 font-semibold">¿Qué le resuelve al negocio?:</strong> {service.problemSolved}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-blue-600 font-bold text-xs sm:text-sm inline-flex items-center gap-1">
                      <i className="fas fa-check-circle text-xs"></i> {service.badge}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold group-hover:text-blue-600 transition-colors flex items-center gap-1">
                      Ver más <i className="fas fa-arrow-right text-[10px]"></i>
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Controls: Arrows + Dots Indicators */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm flex items-center justify-center transition-all cursor-pointer text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={() => scroll("prev")}
              disabled={activeIndex === 0}
              aria-label="Servicio Anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="flex items-center gap-2 px-2 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
              {SERVICES_DATA.map((_, idx) => (
                <button
                  key={idx}
                  className={`transition-all duration-300 rounded-full cursor-pointer border-none p-0 ${
                    activeIndex === idx
                      ? "w-7 h-2.5 bg-blue-600 shadow-sm"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Ir al servicio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm flex items-center justify-center transition-all cursor-pointer text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={() => scroll("next")}
              disabled={activeIndex === SERVICES_DATA.length - 1}
              aria-label="Siguiente Servicio"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Framer Motion Layout Morphing Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md cursor-pointer"
            />

            {/* Morphed Expanded Card Container */}
            <motion.div
              layoutId={`service-card-${selectedService.idx}`}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative z-10 w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 overflow-hidden my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none shadow-sm z-20"
                aria-label="Cerrar modal"
              >
                <i className="fas fa-times text-lg"></i>
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6 pr-10">
                <motion.div
                  layoutId={`service-icon-${selectedService.idx}`}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-blue-500/25 flex-none"
                >
                  <i className={selectedService.item.icon}></i>
                </motion.div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 border border-blue-200 px-3 py-1 rounded-full inline-block mb-1 shadow-sm">
                    {selectedService.item.badge}
                  </span>
                  <motion.h3
                    layoutId={`service-title-${selectedService.idx}`}
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight"
                  >
                    {selectedService.item.title}
                  </motion.h3>
                </div>
              </div>

              {/* Staggered Content Animated inside the expanded card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.12, duration: 0.25 }}
                className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8"
              >
                <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                  <strong className="text-slate-900 font-bold block mb-1.5 text-sm sm:text-base flex items-center gap-2">
                    <i className="fas fa-lightbulb text-amber-500"></i> ¿Qué le resuelve a tu empresa?
                  </strong>
                  <p className="m-0 text-slate-600 text-sm leading-relaxed">{selectedService.item.problemSolved}</p>
                </div>

                <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-50/80 to-sky-50/80 border border-blue-200 rounded-2xl shadow-sm">
                  <strong className="text-slate-900 font-bold block mb-3 text-sm sm:text-base flex items-center gap-2">
                    <i className="fas fa-shield-check text-blue-600"></i> Garantía &amp; Especificaciones Formales:
                  </strong>
                  <ul className="space-y-2.5 m-0 p-0 list-none text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <i className="fas fa-check text-blue-600 text-xs"></i>
                      <span><strong>Desarrollo 100% a medida:</strong> Código nativo sin plantillas pesadas.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <i className="fas fa-check text-blue-600 text-xs"></i>
                      <span><strong>Facturación Electrónica:</strong> Emitido por Integrity Software S.A.C. (RUC 20609874125).</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <i className="fas fa-check text-blue-600 text-xs"></i>
                      <span><strong>Soporte Técnico Directo:</strong> Capacitación y 30 días de garantía post-entrega.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.18, duration: 0.25 }}
                className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100"
              >
                <a
                  href={buildServiceQuoteUrl(selectedService.item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2.5"
                >
                  <i className="fab fa-whatsapp text-xl"></i> Cotizar Este Servicio por WhatsApp
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm py-4 px-6 rounded-xl transition-all cursor-pointer border-none"
                >
                  Cerrar
                </button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
