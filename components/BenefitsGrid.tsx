"use client";

import { BENEFITS_DATA } from "@/data/benefits";

export default function BenefitsGrid() {
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
    <section className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS_DATA.map((benefit, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-300 cursor-pointer text-center md:text-left reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center text-2xl mb-5 mx-auto md:mx-0 shadow-sm">
                <i className={benefit.icon}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-heading">{benefit.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed m-0">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
