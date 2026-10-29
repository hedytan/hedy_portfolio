"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";


// What each folder says, in plain words, plus the one picture that explains the project.
const folders: Record<string, { label: string; lines: string[]; img: string; w: number; h: number; bg: string }> = {
  resonance: { label: "Resonance", lines: ["iOS app · 2026", "Emotion-first music app", "Share the feeling behind a song"], img: "/folders/resonance.jpg", w: 900, h: 900, bg: "#050505" },
  "mind-the-gap": { label: "Mind the Gap", lines: ["Interactive prototype · 2026", "Vending machine for feelings", "See how a station feels"], img: "/folders/mind-the-gap.jpg", w: 640, h: 1077, bg: "#0f1622" },
  "job-buddy": { label: "Job Buddy", lines: ["Device + app · 2026", "Turn a first meeting into a connection", "Icebreaker to start talking"], img: "/folders/job-buddy.jpg", w: 770, h: 660, bg: "#e9e6e0" },
  fitsapp: { label: "FitsApp", lines: ["UX / UI design · 2025", "Every walk grows a tree", "Motivation from delight, not data"], img: "/folders/fitsapp.jpg", w: 240, h: 328, bg: "#c8c3e6" },
  "keyboard-research": { label: "Typing Research", lines: ["UX research · 2025", "Keyboard typing experiences", "Losing and regaining flow"], img: "/folders/keyboard-research.jpg", w: 547, h: 390, bg: "#fbf3e2" },
};

export default function WorksRing() {
  const stage = useRef<HTMLUListElement>(null);
  const animations = useRef<Animation[]>([]);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const stop = useCallback(() => {
    animations.current.forEach(a => a.cancel());
    animations.current = [];
    setPlaying(false);
  }, []);
  const play = useCallback(() => {
    stop();
    const list = stage.current;
    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = Array.from(list.children) as HTMLElement[];
    setPlaying(true);
    const batch = cards.map((card, i) => {
      const inward = [0, 100, -100, 75, -75][i];
      return card.animate([
        { transform: `translate(${inward}px,-160px) scale(.92)`, opacity: 0 },
        { transform: "translate(0,0) scale(1)", opacity: 1 }
      ], { duration: 1300, delay: i * 90, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" });
    });
    animations.current = batch;
    Promise.all(batch.map(a => a.finished)).then(() => {
      if (animations.current === batch) stop();
    }).catch(() => { /* Cancelled by navigation, resize, skip or a new replay. */ });
  }, [stop]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const preference = () => { setReduced(media.matches); if (media.matches) stop(); };
    preference();
    media.addEventListener("change", preference);
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { observer.disconnect(); if (!document.querySelector(".portfolio-intro")) play(); }
    }, { threshold: .12 });
    if (stage.current) observer.observe(stage.current);
    window.addEventListener("resize", stop);
    return () => { observer.disconnect(); media.removeEventListener("change", preference); window.removeEventListener("resize", stop); animations.current.forEach(a => a.cancel()); };
  }, [play, stop]);

  return <section className="wl wl-page constellation-work" id="work" aria-label="Portfolios">
    <div className="orbit-heading"><h2 className="wl-label">PORTFOLIOS</h2>
      {!reduced && <button className="orbit-replay" onClick={playing ? stop : play}>{playing ? "Skip motion ↗" : "Replay motion ↻"}</button>}
    </div>
    <div className="constellation-layout">
    <div className="constellation-title"><span>SELECTED WORK</span><h2>UX/UI<br />Portfolio</h2><p>Five projects. Different ways<br />to make everyday life feel better.</p></div>
    <ul ref={stage} className="orbit-stage" onFocusCapture={stop}>
      {projects.map((p, i) => {
        const f = folders[p.slug];
        if (!f) return null;
        return <li key={p.slug} className="orbit-item">
          <Link href={p.href} className="orbit-folder" aria-label={`${f.label} — ${f.lines[1]}. Open case study.`}>

            <span className="orbit-paper">
              <span className="orbit-image" style={{ background: f.bg }}><Image src={f.img} alt="" width={f.w} height={f.h} sizes="(max-width:600px) 42vw, 300px" /></span>
              <span className="orbit-meta">{f.lines[0]}</span>
              <span className="project-name">{f.label} <span aria-hidden="true">↗</span></span>
              <strong>{f.lines[1]}</strong>
              <span className="orbit-open">View project <span aria-hidden="true">↗</span></span>
            </span>
          </Link>
        </li>;
      })}
    </ul>
    </div>
  </section>;
}
