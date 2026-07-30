"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const revealElement = (el: Element) => {
      el.classList.add("revealed");
      el.classList.add("is-revealed");
    };

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach(revealElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "50px 0px 0px 0px"
      }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        revealElement(el);
      } else {
        observer.observe(el);
      }
    });

    // Instant safety fallback: guarantee all elements reveal within 250ms
    const fallbackTimer = setTimeout(() => {
      revealElements.forEach(revealElement);
    }, 250);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return null;
}
