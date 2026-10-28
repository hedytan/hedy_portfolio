"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Shot = { src: string; alt: string; caption: string; x: number; y: number; r: number; focus?: string };

// Drag the polaroids around; whichever you pick up comes to the top.
export default function PolaroidPile({ shots }: { shots: Shot[] }) {
  const [pos, setPos] = useState(() => shots.map(s => ({ x: s.x, y: s.y })));
  const [z, setZ] = useState(() => shots.map((_, i) => i + 1));
  const [held, setHeld] = useState<number | null>(null);
  const grab = useRef({ px: 0, py: 0, x: 0, y: 0 });
  const top = useRef(shots.length + 1);

  const down = (i: number) => (e: React.PointerEvent) => {
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* synthetic or lost pointer */ }
    grab.current = { px: e.clientX, py: e.clientY, x: pos[i].x, y: pos[i].y };
    setHeld(i);
    setZ(zs => zs.map((v, k) => (k === i ? top.current++ : v)));
  };
  const move = (i: number) => (e: React.PointerEvent) => {
    if (held !== i) return;
    const g = grab.current;
    setPos(ps => ps.map((p, k) => (k === i ? { x: g.x + e.clientX - g.px, y: g.y + e.clientY - g.py } : p)));
  };
  const up = () => setHeld(null);

  return <div className="pp" aria-label="Photos of Hedy. Drag them around.">
    {shots.map((s, i) => <figure key={s.src} className={`pp-card${held === i ? " is-held" : ""}`}
      style={{ transform: `translate(${pos[i].x}px, ${pos[i].y}px) rotate(${held === i ? s.r * 0.4 : s.r}deg)${held === i ? " scale(1.04)" : ""}`, zIndex: z[i] }}
      onPointerDown={down(i)} onPointerMove={move(i)} onPointerUp={up} onPointerCancel={up}>
      <div className="pp-img"><Image src={s.src} alt={s.alt} fill sizes="220px" draggable={false} unoptimized style={{ objectPosition: s.focus ?? "50% 50%" }} /></div>
      <figcaption>{s.caption}</figcaption>
    </figure>)}
  </div>;
}
