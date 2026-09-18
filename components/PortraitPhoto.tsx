"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Eye-socket centers, as % of the photo's own box (measured against
// /hedy-cutout.png specifically) — percentages keep them lined up at
// any render size.
const EYES = [
  { left: "47.8%", top: "27.3%" }, // her right eye
  { left: "53.1%", top: "26.6%" }, // her left eye
];
const MAX_SHIFT = 2; // px the dot can drift from center — kept small so it reads as a glint, not a floating blob

// A few small icon badges representing her actual toolkit, floating
// above the cutout like things spilling out of frame — echoes a
// reference portfolio's "torn open, stuff popping out" hero treatment.
function IconBadge({ className, rotate, children }: { className: string; rotate: number; children: React.ReactNode }) {
  return (
    <div
      className={`absolute w-9 h-9 md:w-11 md:h-11 rounded-xl bg-panel border border-faint shadow-[0_8px_18px_rgba(23,21,18,0.25)] flex items-center justify-center ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

export default function PortraitPhoto() {
  const pupilRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      pupilRefs.current.forEach((pupil) => {
        if (!pupil) return;
        const socket = pupil.parentElement;
        if (!socket) return;
        const rect = socket.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.min(1, Math.hypot(dx, dy) / 400);
        const angle = Math.atan2(dy, dx);
        const shiftX = Math.cos(angle) * MAX_SHIFT * dist;
        const shiftY = Math.sin(angle) * MAX_SHIFT * dist;
        pupil.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative w-[260px] md:w-[340px] select-none">
      {/* floating tool icons, tucked behind/above the head */}
      <IconBadge className="left-[6%] -top-5 md:-top-7 z-0" rotate={-12}>
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-amber" fill="none">
          <rect x="4" y="4" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.85" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.55" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.55" />
          <circle cx="16.5" cy="16.5" r="3.5" fill="currentColor" opacity="0.85" />
        </svg>
      </IconBadge>
      <IconBadge className="left-[38%] -top-9 md:-top-12 z-0" rotate={7}>
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 8 4 12 9 16" />
          <polyline points="15 8 20 12 15 16" />
        </svg>
      </IconBadge>
      <IconBadge className="right-[8%] -top-6 md:-top-8 z-0" rotate={13}>
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-blue" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c3 2 5 5 5 8.5a5 5 0 0 1-10 0C7 8 9 5 12 3Z" />
        </svg>
      </IconBadge>

      <div
        className="relative z-10"
        style={{
          filter:
            "drop-shadow(0 0 2.5px #F0DEBD) drop-shadow(0 0 2.5px #F0DEBD) drop-shadow(0 0 2.5px #F0DEBD) drop-shadow(0 0 2.5px #F0DEBD) drop-shadow(0 0 2.5px #F0DEBD) drop-shadow(0 0 2.5px #F0DEBD) drop-shadow(0 20px 30px rgba(23,21,18,0.35))",
        }}
      >
        <Image
          src="/hedy-cutout.png"
          alt="Hedy in Sydney"
          width={1200}
          height={771}
          priority
          className="w-full h-auto block"
        />
        {EYES.map((pos, i) => (
          <span
            key={i}
            className="absolute w-[7px] h-[7px] md:w-[9px] md:h-[9px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ left: pos.left, top: pos.top }}
          >
            <span
              ref={(el) => { pupilRefs.current[i] = el; }}
              className="block w-full h-full rounded-full bg-[#2A1810]/70 transition-transform duration-100 ease-out"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
