"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const previews = [
  ["resonance", "Resonance"],
  ["mind-the-gap", "Mind the Gap"],
  ["job-buddy", "Job Buddy"],
  ["fitsapp", "FitsApp"],
  ["keyboard-research", "Typing Research"],
];

export default function PortfolioIntro() {
  const cancel = useRef(() => {});
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = 0;
    const finish = () => {
      clearTimeout(timer);
      setVisible(false);
    };
    cancel.current = finish;
    if (preference.matches || window.location.hash || window.scrollY > 80) { finish(); return; }
    // Only the artwork moves. The visitor keeps control of page scrolling.
    timer = window.setTimeout(() => { finish(); window.dispatchEvent(new Event("portfolio-intro-complete")); }, 6200);
    const key = (e: KeyboardEvent) => { if (e.key === "Escape" || e.key === "Tab") finish(); };
    window.addEventListener("keydown", key);
    window.addEventListener("wheel", finish, { passive: true, once: true });
    window.addEventListener("touchmove", finish, { passive: true, once: true });
    preference.addEventListener("change", finish);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", key);
      window.removeEventListener("wheel", finish);
      window.removeEventListener("touchmove", finish);
      preference.removeEventListener("change", finish);
    };
  }, []);
  if (!visible) return null;
  return <div className="portfolio-intro" aria-label="UX/UI designer portfolio introduction">

    <div className="intro-role"><span>UX/UI</span><span>Designer</span></div>
    <div className="intro-projects" aria-hidden="true">
      {previews.map(([slug, label], i) => <div className={`intro-shot intro-shot-${i}`} key={slug}>
        <div className="intro-shot-image"><Image src={`/folders/${slug}.jpg`} alt="" fill sizes="(max-width:600px) 130px, 210px" priority /></div>
        <span>{label}</span>
      </div>)}
    </div>
    <button className="intro-skip" onClick={() => cancel.current()}>Skip intro ↗</button>
  </div>;
}
