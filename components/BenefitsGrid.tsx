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
    <section className="section" style={{ background: "#ffffff", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div className="benefits-grid">
          {BENEFITS_DATA.map((benefit, idx) => (
            <div
              key={idx}
              className="benefit-card reveal-on-scroll tilt-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <i className={`${benefit.icon} benefit-icon`}></i>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
