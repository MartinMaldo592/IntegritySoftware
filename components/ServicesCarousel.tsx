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
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>Soluciones Adaptadas a la Realidad MYPE Peruana</h2>
          <p>Servicios enfocados en acelerar tus ventas y automatizar tu negocio.</p>
        </div>

        <div className="carousel-wrapper reveal-on-scroll">
          <div className="horizontal-carousel-track" ref={trackRef}>
            {SERVICES_DATA.map((service, idx) => (
              <div key={idx} className="carousel-card-item">
                <div
                  className="service-card-light tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="service-icon-box">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>
                    <strong>¿Qué le resuelve al negocio?:</strong> {service.problemSolved}
                  </p>
                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
                    <small style={{ color: "var(--accent-blue)", fontWeight: 700, fontSize: "0.95rem" }}>
                      {service.badge}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls-bar">
            <button className="carousel-nav-btn" onClick={() => scroll("prev")} aria-label="Anterior">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-nav-btn" onClick={() => scroll("next")} aria-label="Siguiente">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
