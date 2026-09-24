"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function DesktopFile({ id, name, children }: { id: string; name: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const drag = useRef<{ id: number; x: number; y: number; left: number; top: number } | null>(null);
  const moved = useRef(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const move = (x: number, y: number) => {
    const el = ref.current;
    const desktop = el?.closest('.os-desktop');
    if (!el || !desktop) return;
    const rect = el.getBoundingClientRect();
    const bounds = desktop.getBoundingClientRect();
    setOffset(current => ({
      x: Math.max(bounds.left + 8 - rect.left + current.x, Math.min(x, bounds.right - 8 - rect.right + current.x)),
      y: Math.max(bounds.top + 54 - rect.top + current.y, Math.min(y, bounds.bottom - 110 - rect.bottom + current.y)),
    }));
  };

  useEffect(() => {
    const reset = () => setOffset({ x: 0, y: 0 });
    window.addEventListener('resize', reset);
    return () => window.removeEventListener('resize', reset);
  }, []);

  return <a ref={ref} className={`os-file os-draggable-file${dragging ? ' is-dragging' : ''}`} href={`#${id}`} aria-haspopup="dialog"
    aria-label={`${name}. Click to open, drag to move. Arrow keys move; Home resets.`}
    style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }} draggable={false}
    onClick={event => { if (moved.current && event.detail !== 0) event.preventDefault(); moved.current = false; }}
    onPointerDown={event => {
      if (event.button !== 0 || drag.current) return;
      moved.current = false;
      drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, left: offset.x, top: offset.y };
      event.currentTarget.setPointerCapture(event.pointerId);
    }}
    onPointerMove={event => {
      const start = drag.current;
      if (start?.id !== event.pointerId) return;
      const dx = event.clientX - start.x, dy = event.clientY - start.y;
      if (!moved.current && Math.hypot(dx, dy) < 6) return;
      moved.current = true; setDragging(true);
      move(start.left + dx, start.top + dy);
    }}
    onPointerUp={event => {
      if (drag.current?.id !== event.pointerId) return;
      drag.current = null; setDragging(false);
      event.currentTarget.releasePointerCapture(event.pointerId);
    }}
    onLostPointerCapture={() => { drag.current = null; setDragging(false); }}
    onPointerCancel={() => { drag.current = null; setDragging(false); }}
    onKeyDown={event => {
      if (event.key === 'Home') { event.preventDefault(); setOffset({x:0,y:0}); return; }
      const directions: Record<string, [number, number]> = { ArrowLeft: [-1,0], ArrowRight: [1,0], ArrowUp: [0,-1], ArrowDown: [0,1] };
      const direction = directions[event.key];
      if (!direction) return;
      event.preventDefault();
      const step = event.shiftKey ? 30 : 10;
      move(offset.x + direction[0] * step, offset.y + direction[1] * step);
    }}
  >{children}</a>;
}
