"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    // Disable browser default scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Initialize Lenis 60 FPS Inertial Smooth Scroll Engine
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Silky smooth exponential decay
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2.0,
      infinite: false
    });

    lenis.scrollTo(0, { immediate: true });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Smooth scroll for anchor navigation links (#inicio, #servicios, brand-logo, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (!href || href === "#" || href === "#inicio") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.5 });
        return;
      }
      if (href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, { offset: -10, duration: 1.5 });
        }
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], .brand-logo');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      cancelAnimationFrame(animationFrameId);
      links.forEach((link) => link.removeEventListener("click", handleAnchorClick));
      window.removeEventListener("beforeunload", handleBeforeUnload);
      lenis.destroy();
    };
  }, []);

  return null;
}
