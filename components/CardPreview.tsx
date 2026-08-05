"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Phone screen that plays a screen-by-screen walkthrough while `playing`
// is true, crossfading between frames, and rests on `img` otherwise.
export default function CardPreview({
  img,
  frames,
  placeholder,
  title,
  playing = false,
}: {
  img?: string;
  frames?: string[];
  placeholder: string;
  title: string;
  playing?: boolean;
}) {
  const seq = frames && frames.length ? frames : img ? [img] : [];
  const restIndex = img && seq.includes(img) ? seq.indexOf(img) : 0;
  const [active, setActive] = useState(restIndex);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const stop = () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!playing || seq.length < 2 || reduce) {
      stop();
      setActive(restIndex);
      return;
    }
    let i = 0;
    setActive(0);
    timer.current = setInterval(() => {
      i = (i + 1) % seq.length;
      setActive(i);
    }, 850);
    return stop;
  }, [playing, seq.length, restIndex]);

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
    <div className="relative w-full h-full">
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
