"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// A hanging lanyard badge: swings like a pendulum, can be dragged and thrown, click to flip.
const W0 = 34; // g/L: swing speed
const DAMP = 0.9;

export default function Badge() {
  const rig = useRef<HTMLDivElement>(null);
  const st = useRef({ a: 0.32, w: 0, drag: false, moved: false, lastA: 0, lastT: 0 });
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const el = rig.current; if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) st.current.a = 0;
    let raf = 0, prev = performance.now();
    const tick = (now: number) => {
      const s = st.current;
      const dt = Math.min(0.033, (now - prev) / 1000); prev = now;
      if (!s.drag) {
        s.w += (-W0 * Math.sin(s.a) - DAMP * s.w) * dt;
        s.a += s.w * dt;
        if (Math.abs(s.a) < 0.0004 && Math.abs(s.w) < 0.002) { s.a = 0; s.w = 0; }
      }
      el.style.transform = `rotate(${s.a}rad)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const angleAt = (e: React.PointerEvent) => {
    const r = rig.current!.parentElement!.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2), dy = Math.max(40, e.clientY - r.top);
    return Math.max(-1.2, Math.min(1.2, Math.atan2(-dx, dy) * -1));
  };
  const down = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    const s = st.current; s.drag = true; s.moved = false; s.w = 0; s.lastA = s.a; s.lastT = performance.now();
  };
  const move = (e: React.PointerEvent) => {
    const s = st.current; if (!s.drag) return;
    const a = angleAt(e), now = performance.now();
    if (Math.abs(a - s.a) > 0.02) s.moved = true;
    const dt = Math.max(1, now - s.lastT) / 1000;
    s.w = (a - s.lastA) / dt * 0.6 + s.w * 0.4;
    s.lastA = a; s.lastT = now; s.a = a;
  };
  const up = () => {
    const s = st.current; if (!s.drag) return;
    s.drag = false;
    s.w = Math.max(-9, Math.min(9, s.w));
    if (!s.moved) { setFlip(f => !f); s.w += 2.4; }
  };

  return <div className="bd" aria-label="Hedy's name badge. Drag to swing it, click to flip.">
    <div className="bd-rig" ref={rig}>
      <div className="bd-strap" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      <div className="bd-clip" aria-hidden="true" />
      <div className={`bd-card${flip ? " is-flip" : ""}`} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} role="button" tabIndex={0}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlip(f => !f); st.current.w += 2.4; } }}>
        <div className="bd-face bd-front">
          <span className="bd-hole" aria-hidden="true" />
          <p className="bd-name">Hedy Tan</p>
          <div className="bd-photo"><Image src="/badge-hedy.jpg" alt="Hedy in Sydney" fill sizes="220px" draggable={false} unoptimized /></div>
          <p className="bd-role">UX/UI<br />Designer</p>
          <p className="bd-small">Sydney, NSW</p>
        </div>
        <div className="bd-face bd-back">
          <span className="bd-hole" aria-hidden="true" />
          <p className="bd-back-text">Research,<br />Interaction<br />&amp; Prototyping</p>
          <p className="bd-small">Hedy Tan · Sydney, NSW</p>
        </div>
      </div>
    </div>
  </div>;
}
