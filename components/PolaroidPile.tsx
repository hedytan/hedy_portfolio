"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Shot = { src: string; alt: string; caption: string; x: number; y: number; r: number; focus?: string };

// Drag the polaroids around; whichever you pick up comes to the top.
export default function PolaroidPile({ shots }: { shots: Shot[] }) {
  const pile = useRef<HTMLDivElement>(null);
  const active = useRef<number | null>(null);
  const [pos, setPos] = useState(() => shots.map(s => ({ x: s.x, y: s.y })));
  const [z, setZ] = useState(() => shots.map((_, i) => i + 1));
  const [held, setHeld] = useState<number | null>(null);
  const grab = useRef({ px: 0, py: 0, x: 0, y: 0 });
  const top = useRef(shots.length + 1);

  const constrain = (i: number, x: number, y: number) => {
    const parent = pile.current;
    const card = parent?.children[i] as HTMLElement | undefined;
    return { x: Math.max(8, Math.min(x, (parent?.clientWidth ?? 340) - (card?.offsetWidth ?? 155) - 8)),
      y: Math.max(8, Math.min(y, (parent?.clientHeight ?? 470) - (card?.offsetHeight ?? 220) - 8)) };
  };
  useEffect(() => {
    const observer = new ResizeObserver(() => setPos(ps => ps.map((p, i) => constrain(i, p.x, p.y))));
    if (pile.current) observer.observe(pile.current);
    return () => observer.disconnect();
  }, []);
  const down = (i: number) => (e: React.PointerEvent) => {
    if (!e.isPrimary || e.button !== 0) return;
    active.current = i;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* synthetic or lost pointer */ }
    grab.current = { px: e.clientX, py: e.clientY, x: pos[i].x, y: pos[i].y };
    setHeld(i);
    setZ(zs => zs.map((v, k) => (k === i ? top.current++ : v)));
  };
  const move = (i: number) => (e: React.PointerEvent) => {
    if (active.current !== i) return;
    const g = grab.current;
    setPos(ps => ps.map((p, k) => (k === i ? constrain(i, g.x + e.clientX - g.px, g.y + e.clientY - g.py) : p)));
  };
  const up = () => { active.current = null; setHeld(null); };

  return <div ref={pile} className="pp" aria-label="Photos of Hedy. Drag them around.">
    {shots.map((s, i) => <figure key={s.src} className={`pp-card${held === i ? " is-held" : ""}`}
      style={{ transform: `translate(${pos[i].x}px, ${pos[i].y}px) rotate(${held === i ? s.r * 0.4 : s.r}deg)${held === i ? " scale(1.04)" : ""}`, zIndex: z[i] }}
      tabIndex={0} aria-label={`${s.caption}. Drag or use arrow keys to move; Home to reset.`}
      onKeyDown={e => {
        const moves: Record<string, [number, number]> = { ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, -12], ArrowDown: [0, 12] };
        if (e.key !== "Home" && !moves[e.key]) return;
        e.preventDefault();
        const delta = moves[e.key];
        setPos(ps => ps.map((p, k) => k !== i ? p : e.key === "Home" ? constrain(i, s.x, s.y) : constrain(i, p.x + delta[0], p.y + delta[1])));
        setZ(zs => zs.map((v, k) => k === i ? top.current++ : v));
      }} onLostPointerCapture={up} onPointerDown={down(i)} onPointerMove={move(i)} onPointerUp={up} onPointerCancel={up}>
      <div className="pp-img"><Image src={s.src} alt={s.alt} fill sizes="220px" draggable={false} unoptimized style={{ objectPosition: s.focus ?? "50% 50%" }} /></div>
      <figcaption>{s.caption}</figcaption>
    </figure>)}
  </div>;
}
