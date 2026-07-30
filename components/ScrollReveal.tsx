"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Instantly reveal elements visible in initial viewport
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        el.classList.add("revealed");
      } else {
        observer.observe(el);
      }
    });

    // Safety fallback: reveal any remaining hidden elements after 5 seconds
    const fallbackTimer = setTimeout(() => {
      revealElements.forEach((el) => el.classList.add("revealed"));
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return null;
}
