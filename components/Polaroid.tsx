"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";

type PolaroidProps = {
  src?: string;
  alt?: string;
  caption: string;
  rotate?: number;
  width?: number;
  className?: string;
  style?: CSSProperties;
};

// A physical-feeling photo you can grab and drag around — snaps back to
// its rotation, not its spot, so a nudge stays put like a real polaroid.
export default function Polaroid({ src, alt, caption, rotate = 0, width = 180, className = "", style }: PolaroidProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef({ x: 0, y: 0, px: 0, py: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setPos({
      x: start.current.px + (e.clientX - start.current.x),
      y: start.current.py + (e.clientY - start.current.y),
    });
  };
  const endDrag = () => setDragging(false);

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={`select-none bg-[#FAF6EC] rounded-[2px] shadow-[0_14px_30px_rgba(23,21,18,0.22)] p-2.5 pb-8 cursor-grab active:cursor-grabbing active:shadow-[0_24px_46px_rgba(23,21,18,0.3)] touch-none ${className}`}
      style={{
        ...style,
        width,
        transform: `${style?.transform ?? ""} translate(${pos.x}px, ${pos.y}px) rotate(${rotate}deg)`,
        transition: dragging ? "none" : "transform 0.35s cubic-bezier(.22,1,.36,1)",
        zIndex: dragging ? 50 : style?.zIndex,
      }}
    >
      <div className="relative w-full aspect-[4/5] bg-panel overflow-hidden">
        {src ? (
          <Image src={src} alt={alt ?? caption} fill sizes="220px" draggable={false} className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-center text-[11px] font-mono text-soft/60 px-3 leading-snug">
            add a photo here
          </div>
        )}
      </div>
      <p className="mt-2 text-center font-hand text-lg text-ink/80">{caption}</p>
    </div>
  );
}
