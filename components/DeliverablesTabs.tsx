"use client";

import { useState, useRef, useEffect } from "react";
import { DELIVERABLES_DATA } from "@/data/deliverables";

export default function DeliverablesTabs() {
  const [activeTab, setActiveTab] = useState<string>("tab-landing");
  const tabNavRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!tabNavRef.current) return;
    const activeBtn = tabNavRef.current.querySelector<HTMLButtonElement>(`.tab-btn[data-tab="${activeTab}"]`);
    if (activeBtn) {
      setIndicatorStyle({
        left: activeBtn.offsetLeft + "px",
        width: activeBtn.offsetWidth + "px"
      });
    }
  }, [activeTab]);

  const activeDeliverable = DELIVERABLES_DATA.find((d) => d.id === activeTab) || DELIVERABLES_DATA[0];

  return (
    <section className="section" id="detalles">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>¿Qué Incluye Cada Servicio MYPE?</h2>
          <p>Transparencia total en los componentes que recibe tu empresa al contratar con Integrity Software.</p>
        </div>

        <div className="solutions-tabs-nav reveal-on-scroll" ref={tabNavRef} style={{ position: "relative" }}>
          <div className="morphing-tab-pill" style={indicatorStyle}></div>
          {DELIVERABLES_DATA.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.navLabel}
            </button>
          ))}
        </div>

        {activeDeliverable && (
          <div className="tab-pane active" id={activeDeliverable.id}>
            <div className="tab-content-card">
              <h3>{activeDeliverable.title}</h3>
              <p>{activeDeliverable.description}</p>
              <ul className="feature-list">
                {activeDeliverable.features.map((feature, idx) => {
                  const parts = feature.split(":");
                  return (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>{" "}
                      {parts.length > 1 ? (
                        <>
                          <strong>{parts[0]}:</strong>{parts.slice(1).join(":")}
                        </>
                      ) : (
                        feature
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="deliverable-tag">
                <strong style={{ color: "var(--accent-blue)" }}>Modalidad:</strong> {activeDeliverable.tag}
              </div>
            </div>
            <div className="tab-image-card">
              <img src={activeDeliverable.img} alt={activeDeliverable.title} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
