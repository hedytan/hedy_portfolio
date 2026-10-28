"use client";

import { useEffect } from "react";

// Text marked .px eases from ink to blue as the pointer gets close to it.
export default function Proximity() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".px"));
    const cur = new Map<HTMLElement, number>();
    let mx = -9999, my = -9999, raf = 0;
    const R = 120;
    const loop = () => {
      let moving = false;
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        const dx = Math.max(r.left - mx, 0, mx - r.right);
        const dy = Math.max(r.top - my, 0, my - r.bottom);
        const t = Math.max(0, 1 - Math.hypot(dx, dy) / R);
        const c = cur.get(el) ?? 0;
        const n = c + (t - c) * 0.16;
        if (Math.abs(t - n) > 0.004) moving = true;
        cur.set(el, n);
        el.style.setProperty("--near", n.toFixed(3));
      });
      raf = moving ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(loop); };
    window.addEventListener("mousemove", onMove, { passive: true });
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(loop); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return null;
}
