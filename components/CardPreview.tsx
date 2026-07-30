"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Phone preview that plays a screen-by-screen walkthrough on hover.
// At rest it shows `img`; on hover it cycles through `frames` and
// crossfades between them, then returns to rest on mouse leave.
export default function CardPreview({
  img,
  frames,
  placeholder,
  title,
}: {
  img?: string;
  frames?: string[];
  placeholder: string;
  title: string;
}) {
  const seq = frames && frames.length ? frames : img ? [img] : [];
  const restIndex = img && seq.includes(img) ? seq.indexOf(img) : 0;
  const [active, setActive] = useState(restIndex);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const start = () => {
    if (seq.length < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stop();
    let i = 0;
    setActive(0);
    timer.current = setInterval(() => {
      i = (i + 1) % seq.length;
      setActive(i);
    }, 850);
  };

  const reset = () => {
    stop();
    setActive(restIndex);
  };

  useEffect(() => () => stop(), []);

  if (seq.length === 0) {
    return (
      <div className="w-full h-full bg-black/85 flex items-center justify-center">
        <span className="font-mono text-[12px] text-white/40 text-center leading-[1.8] whitespace-pre-line px-5">
          {placeholder}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full" onMouseEnter={start} onMouseLeave={reset}>
      {seq.map((src, i) => (
        <Image
          key={src + i}
          src={src}
          alt={title}
          width={1206}
          height={2622}
          priority={i === restIndex}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-[600ms] ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
