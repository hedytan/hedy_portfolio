"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Eye-socket centers, as % of the photo's own box (measured against
// /hedy-sydney.jpg specifically) — percentages keep them lined up at
// any render size.
const EYES = [
  { left: "73%", top: "28.4%" }, // her right eye
  { left: "90%", top: "26.5%" }, // her left eye
];
const MAX_SHIFT = 2.5; // px the dot can drift from center — kept small so it reads as a glint, not a floating blob

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
    <div className="relative w-[220px] md:w-[280px] rounded-[18px] overflow-hidden border-[6px] border-bg shadow-[0_20px_50px_rgba(23,21,18,0.35)] rotate-[3deg] select-none">
      <Image
        src="/hedy-sydney.jpg"
        alt="Hedy in Sydney"
        width={1100}
        height={1572}
        priority
        className="w-full h-auto block"
      />
      {EYES.map((pos, i) => (
        <span
          key={i}
          className="absolute w-[9px] h-[9px] md:w-[11px] md:h-[11px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: pos.left, top: pos.top }}
        >
          <span
            ref={(el) => { pupilRefs.current[i] = el; }}
            className="block w-full h-full rounded-full bg-[#2A1810]/70 transition-transform duration-100 ease-out"
          />
        </span>
      ))}
    </div>
  );
}
