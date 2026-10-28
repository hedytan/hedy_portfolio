"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Shared top nav. Hides while scrolling down, comes back when scrolling up,
// and tucks away after a nav link is used so the section it jumps to is clear.
export default function SiteNav({ home = false }: { home?: boolean }) {
  const hash = (id: string) => (home ? `#${id}` : `/#${id}`);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);
  const quietUntil = useRef(0);

  useEffect(() => {
    last.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - last.current;
      last.current = y;
      if (performance.now() < quietUntil.current) return;
      if (y < 80) setHidden(false);
      else if (dy > 4) setHidden(true);
      else if (dy < -4) setHidden(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After a jump, stay hidden until the smooth scroll has finished.
  const jumped = () => { setHidden(true); quietUntil.current = performance.now() + 1400; };

  return <nav className={`hp-nav${hidden ? " is-hidden" : ""}`} aria-label="Main navigation"><div className="hp-nav-in">
    <Link href="/" className="hp-nav-name" onClick={() => { quietUntil.current = performance.now() + 1400; }}>HEDY TAN<span> · UX/UI DESIGNER</span></Link>
    <div className="hp-nav-links">
      <a href={hash("work")} onClick={jumped}>PORTFOLIOS</a>
      <a href={hash("about")} onClick={jumped}>ABOUT</a>
      <a href={hash("contact")} onClick={jumped}>CONTACT</a>
    </div>
  </div></nav>;
}
