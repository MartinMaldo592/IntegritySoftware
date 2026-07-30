"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Disable browser default scroll restoration so refreshing always starts at top (top: 0)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force instant scroll to top on page load / refresh
    window.scrollTo(0, 0);

    // Initialize Lenis 60 FPS Inertial Smooth Scroll Engine
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
      infinite: false
    });

    // Reset lenis scroll position to 0 immediately on mount
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
        lenis.scrollTo(0);
        return;
      }
      if (href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, { offset: -10 });
        }
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], .brand-logo');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));

    // Reset scroll to top before page unload / refresh
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
