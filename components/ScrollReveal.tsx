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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px 0px 0px 0px" }
    );

    revealElements.forEach((el) => {
      // Immediately reveal if element is already in viewport or top of page
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("revealed");
      }
      observer.observe(el);
    });

    // Fallback timer: guarantee all elements reveal within 300ms
    const fallbackTimer = setTimeout(() => {
      revealElements.forEach((el) => el.classList.add("revealed"));
    }, 300);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return null;
}
