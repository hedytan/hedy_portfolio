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
// each project gets the object that suits it: a phone, a device photo, or a paper form
const shape: Record<string, { kind: "phone" | "photo" | "paper"; w: number; h: number }> = {
  resonance: { kind: "phone", w: 1, h: 2.044 },
  "mind-the-gap": { kind: "phone", w: 1, h: 2.044 },
  fitsapp: { kind: "phone", w: 1, h: 2.044 },
  "job-buddy": { kind: "photo", w: 2.2, h: 1.375 },
  "keyboard-research": { kind: "paper", w: 1.4, h: 1.995 },
};
const N = projects.length;
const STEP = 1;
const wrap = (d: number) => ((((d + N / 2) % N) + N) % N) - N / 2;
const PX = 280;

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
      if (Math.abs(d) < 0.001) { apply(t); target.current = null; return; }
      apply(th.current + d * 0.12);
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, [apply]);
  const snap = useCallback((from: number) => { target.current = Math.round(from / STEP) * STEP; run(); }, [run]);
  const goTo = useCallback((i: number) => {
    const cur = th.current;
    target.current = cur + wrap(i - cur);
    run();
  }, [run]);

  useEffect(() => () => { cancelAnimationFrame(raf.current); clearTimeout(idle.current); }, []);

  useEffect(() => {
    const el = stage.current; if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      target.current = null;
      apply(th.current + e.deltaX / PX);
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
    d.v = (-dx / PX) / dtt;
    d.x = e.clientX; d.t = now;
    apply(th.current - dx / PX);
  };
  const up = () => { const d = drag.current; drag.current = null; if (d?.moved) snap(th.current + d.v * 180); };
  const key = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(Math.round(th.current) + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(Math.round(th.current) - 1); }
  };

  const cur = ((Math.round(theta) % N) + N) % N;
  const active = projects[cur];

  return <section className="wr" id="work" aria-label="Selected works">
    <header className="wr-intro"><h1>I’m Hedy<br />UX/UI Designer</h1><p>Hedy Tan — Sydney, NSW</p></header>
    <div className="wr-stage" ref={stage} data-lenis-prevent tabIndex={0} aria-roledescription="carousel" aria-label="Projects. Drag, swipe or use the arrow keys to browse."
      onKeyDown={key} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={up}>
      <div className="wr-ring">
        {projects.map((p, i) => {
          const d = wrap(i * STEP - theta);
          const a = Math.abs(d), sg = Math.sign(d);
          const front = a < 0.5;
          const me = shape[p.slug];
          const fr = shape[projects[((Math.round(theta) % N) + N) % N].slug];
          const K = (me.w + fr.w) * 0.5 * 0.92 + 0.12;
          const x = sg * (a <= 1 ? a * K : K + (a - 1) * me.w * 0.5);
          const ry = -sg * Math.min(a, 1) * 56;
          const z = -Math.min(a, 2) * 130;
          return <Link key={p.slug} href={p.href === "#" ? "/" : p.href} aria-label={`${name(p.slug, p.title)}, ${p.year}`} tabIndex={-1} draggable={false}
            className={`wr-panel wr-${me.kind}${front ? " is-front" : ""}`}
            style={{ "--w": me.w, "--h": me.h, transform: `translateX(calc(var(--pw) * ${x})) translateZ(${z}px) rotateY(${ry}deg)`, zIndex: 10 - Math.round(a * 2), opacity: a > 2.1 ? 0 : 1, filter: `brightness(${Math.max(0.62, 1 - a * 0.14)})` } as React.CSSProperties}
            onClick={e => { if (drag.current?.moved) { e.preventDefault(); return; } if (!front) { e.preventDefault(); goTo(Math.round(th.current) + Math.round(d)); } else if (p.href === "#") e.preventDefault(); }}>
            <span className="wr-screen"><Image src={covers[p.slug]} alt="" fill sizes="(max-width:700px) 60vw, 420px" draggable={false} unoptimized /></span>
            {me.kind === "phone" && <Image className="wr-frame" src="/iphone-17-frame.png" alt="" width={450} height={920} sizes="220px" draggable={false} aria-hidden="true" />}
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
    <p className="wr-hint">Drag to browse</p>
  </section>;
}
