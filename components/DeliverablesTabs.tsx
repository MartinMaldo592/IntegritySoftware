"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DELIVERABLES_DATA } from "@/data/deliverables";

export default function DeliverablesTabs() {
  const [activeTab, setActiveTab] = useState<string>("tab-landing");

  const activeDeliverable = DELIVERABLES_DATA.find((d) => d.id === activeTab) || DELIVERABLES_DATA[0];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200" id="detalles">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
            ¿Qué Incluye Cada Servicio MYPE?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Transparencia total en los componentes que recibe tu empresa al contratar con Integrity Software.
          </p>
        </div>

        {/* Tab Buttons Container with Sliding Active Pill */}
        <div className="flex flex-wrap justify-center gap-2.5 pb-4 mb-10 reveal-on-scroll">
          {DELIVERABLES_DATA.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer border ${
                  isActive
                    ? "text-white border-blue-600"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDeliverableTabPill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-md shadow-blue-500/20 -z-10"
                  />
                )}
                <span className="relative z-10">{tab.navLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Sliding Content Container */}
        <div className="min-h-[440px]">
          <AnimatePresence mode="wait">
            {activeDeliverable && (
              <motion.div
                key={activeDeliverable.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-2 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">{activeDeliverable.title}</h3>
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">{activeDeliverable.description}</p>
                  <ul className="space-y-3 m-0 p-0 list-none mb-8">
                    {activeDeliverable.features.map((feature, idx) => {
                      const parts = feature.split(":");
                      return (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                          <i className="fas fa-check-circle text-blue-600 text-base mt-1"></i>{" "}
                          <span>
                            {parts.length > 1 ? (
                              <>
                                <strong className="text-slate-900 font-semibold">{parts[0]}:</strong>{parts.slice(1).join(":")}
                              </>
                            ) : (
                              feature
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl text-xs sm:text-sm text-slate-700">
                    <strong className="text-blue-600 font-bold">Modalidad:</strong> {activeDeliverable.tag}
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white h-[300px] sm:h-[400px] w-full">
                  <Image
                    src={activeDeliverable.img}
                    alt={activeDeliverable.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
