"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const covers: Record<string, string> = {
  resonance: "/covers/resonance.jpg",
  "mind-the-gap": "/covers/mind-the-gap.jpg",
  "job-buddy": "/covers/job-buddy.jpg",
  fitsapp: "/covers/fitsapp.jpg",
  "keyboard-research": "/covers/keyboard-research.jpg",
};
const meta: Record<string, string> = {
  resonance: "iOS app",
  fitsapp: "UX / UI",
  "job-buddy": "Device + app",
  "keyboard-research": "UX research",
  "mind-the-gap": "Interactive prototype",
};
const name = (slug: string, title: string) => (slug === "keyboard-research" ? "Typing Research" : title);
const N = projects.length;
const STEP = 360 / N;
const wrap = (d: number) => ((((d + 180) % 360) + 360) % 360) - 180;

export default function WorksRing() {
  const [theta, setTheta] = useState(0);
  const th = useRef(0);
  const target = useRef<number | null>(null);
  const raf = useRef(0);
  const drag = useRef<{ x: number; t: number; v: number; moved: boolean } | null>(null);
  const idle = useRef<ReturnType<typeof setTimeout>>();
  const stage = useRef<HTMLDivElement>(null);

  const apply = useCallback((v: number) => { th.current = v; setTheta(v); }, []);
  const run = useCallback(() => {
    cancelAnimationFrame(raf.current);
    const step = () => {
      const t = target.current;
      if (t === null) return;
      const d = t - th.current;
      if (Math.abs(d) < 0.02) { apply(t); target.current = null; return; }
      apply(th.current + d * 0.12);
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, [apply]);
  const snap = useCallback((from: number) => { target.current = Math.round(from / STEP) * STEP; run(); }, [run]);
  const goTo = useCallback((i: number) => {
    const cur = th.current;
    target.current = cur + wrap(i * STEP - cur);
    run();
  }, [run]);

  useEffect(() => () => { cancelAnimationFrame(raf.current); clearTimeout(idle.current); }, []);

  useEffect(() => {
    const el = stage.current; if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      target.current = null;
      apply(th.current + e.deltaX * 0.22);
      clearTimeout(idle.current);
      idle.current = setTimeout(() => snap(th.current), 150);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [apply, snap]);

  const down = (e: React.PointerEvent) => { drag.current = { x: e.clientX, t: performance.now(), v: 0, moved: false }; target.current = null; };
  const move = (e: React.PointerEvent) => {
    const d = drag.current; if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) d.moved = true;
    if (!d.moved) return;
    const now = performance.now();
    const dtt = Math.max(1, now - d.t);
    d.v = (-dx * 0.3) / dtt;
    d.x = e.clientX; d.t = now;
    apply(th.current - dx * 0.3);
  };
  const up = () => { const d = drag.current; drag.current = null; if (d?.moved) snap(th.current + d.v * 180); };
  const key = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(Math.round(th.current / STEP) + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(Math.round(th.current / STEP) - 1); }
  };

  const cur = ((Math.round(theta / STEP) % N) + N) % N;
  const active = projects[cur];

  return <section className="wr" id="work" aria-label="Selected works">
    <div className="wr-stage" ref={stage} data-lenis-prevent tabIndex={0} aria-roledescription="carousel" aria-label="Projects. Drag, swipe or use the arrow keys to rotate."
      onKeyDown={key} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={up}>
      <div className="wr-ring" style={{ transform: `translateZ(calc(var(--R) * -1)) rotateY(${-theta}deg)` }}>
        {projects.map((p, i) => {
          const f = Math.abs(wrap(i * STEP - theta));
          const front = f < STEP / 2;
          return <Link key={p.slug} href={p.href === "#" ? "/" : p.href} aria-label={`${name(p.slug, p.title)}, ${p.year}`} tabIndex={-1} draggable={false}
            className={`wr-panel${front ? " is-front" : ""}`}
            style={{ transform: `rotateY(${i * STEP}deg) translateZ(var(--R))`, filter: `brightness(${f < 4 ? 1 : Math.max(0.5, 1 - f / 190)})` }}
            onClick={e => { if (drag.current?.moved) { e.preventDefault(); return; } if (!front) { e.preventDefault(); goTo(i); } else if (p.href === "#") e.preventDefault(); }}>
            <Image src={covers[p.slug]} alt="" fill sizes="(max-width:700px) 60vw, 340px" draggable={false} priority={i < 2} />
          </Link>;
        })}
      </div>
    </div>
    <div className="wr-caption" aria-live="polite">
      <span>{String(cur + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}</span>
      <h2>{name(active.slug, active.title)}</h2>
      <p>{meta[active.slug]} · {active.year}</p>
      <Link href={active.href} className="wr-open">OPEN PROJECT ↗</Link>
    </div>
    <div className="wr-dots" role="group" aria-label="Choose project">{projects.map((p, i) => <button key={p.slug} type="button" aria-label={name(p.slug, p.title)} aria-current={i === cur} onClick={() => goTo(i)} />)}</div>
    <p className="wr-hint">Drag to rotate</p>
  </section>;
}
