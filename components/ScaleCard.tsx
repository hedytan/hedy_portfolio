"use client";

import { useEffect, useRef } from "react";

// Scroll-linked scaling: a card is full-size when centred in the viewport
// and scales (and fades) down as it moves toward either edge — so the
// outgoing card shrinks while the incoming one grows. Symmetric both ways.
export default function ScaleCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = r.top + r.height / 2;
      // 0 when the card is centred, ~0.5+ as it reaches an edge
      const dist = Math.min(1, Math.abs(center - vh / 2) / vh);
      const scale = Math.max(0.86, 1 - dist * 0.3);
      const opacity = Math.max(0.6, 1 - dist * 0.7);
      el.style.transform = `scale(${scale.toFixed(4)})`;
      el.style.opacity = opacity.toFixed(3);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} style={{ transformOrigin: "center", willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}
