"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Wraps the app in Lenis smooth-scroll (the Framer-like inertia feel).
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    // Preserve scroll position across refreshes (Lenis breaks native restore).
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const key = `scroll:${window.location.pathname}`;
    const saved = sessionStorage.getItem(key);
    if (saved && !window.location.hash) {
      const y = parseFloat(saved);
      if (y > 0) requestAnimationFrame(() => lenis.scrollTo(y, { immediate: true }));
    }
    const saveScroll = () => sessionStorage.setItem(key, String(window.scrollY));
    window.addEventListener("scroll", saveScroll, { passive: true });
    window.addEventListener("beforeunload", saveScroll);

    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // smooth anchor links
    const onClick = (e: Event) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target as HTMLElement, { offset: -20 });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", saveScroll);
      window.removeEventListener("beforeunload", saveScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
