"use client";

import { useState } from "react";
import Image from "next/image";
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

        <div className="flex flex-wrap justify-center gap-2.5 pb-4 mb-10 reveal-on-scroll">
          {DELIVERABLES_DATA.map((tab) => (
            <button
              key={tab.id}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-105"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.navLabel}
            </button>
          ))}
        </div>

        {activeDeliverable && (
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
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
          </div>
        )}
      </div>
    </section>
  );
}
