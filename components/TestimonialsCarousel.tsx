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
    <section className="section" id="casos" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>Casos de Éxito de MYPES en Perú</h2>
          <p>Testimonios reales de empresarios locales que impulsaron su negocio.</p>
        </div>

        <div className="carousel-wrapper reveal-on-scroll">
          <div className="horizontal-carousel-track" ref={trackRef}>
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div key={idx} className="carousel-card-item">
                <div
                  className="testimonial-card tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="star-rating">
                    {[...Array(t.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.avatarInitials}</div>
                    <div>
                      <strong className="author-name">{t.authorName}</strong>
                      <div className="author-role">{t.authorRole}</div>
                    </div>
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
