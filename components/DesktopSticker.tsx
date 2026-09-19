"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DesktopSticker() {
  const sticker = useRef<HTMLButtonElement>(null);
  const drag = useRef<{ id: number; x: number; y: number; left: number; top: number } | null>(null);
  const moved = useRef(false);
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  const move = (left: number, top: number) => {
    const element = sticker.current;
    const parent = element?.offsetParent as HTMLElement | null;
    if (!element || !parent) return;
    setPosition({
      left: Math.max(8, Math.min(left, parent.clientWidth - element.offsetWidth - 8)),
      top: Math.max(54, Math.min(top, parent.clientHeight - element.offsetHeight - 110)),
    });
  };

  useEffect(() => {
    const resize = () => {
      const element = sticker.current;
      if (element) move(element.offsetLeft, element.offsetTop);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <button
    ref={sticker}
    type="button"
    className={`desktop-sticker${dragging ? " is-dragging" : ""}`}
    style={position ? { left: position.left, top: position.top, right: "auto", bottom: "auto" } : undefined}
    aria-label="Get to know me — open About me. Drag to move, or use arrow keys. Press Home to reset."
    aria-haspopup="dialog"
    onClick={event => {
      if (event.detail === 0 || !moved.current) window.location.hash = "about";
      moved.current = false;
    }}
    onPointerDown={event => {
      if (event.button !== 0 || drag.current) return;
      moved.current = false;
      const element = event.currentTarget;
      drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, left: element.offsetLeft, top: element.offsetTop };
      element.setPointerCapture(event.pointerId);

    }}
    onPointerMove={event => {
      const start = drag.current;
      if (start?.id !== event.pointerId) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (!moved.current && Math.hypot(dx, dy) < 6) return;
      moved.current = true;
      setDragging(true);
      move(start.left + dx, start.top + dy);
    }}
    onPointerUp={event => {
      if (drag.current?.id !== event.pointerId) return;
      drag.current = null;
      setDragging(false);
      event.currentTarget.releasePointerCapture(event.pointerId);
    }}
    onLostPointerCapture={() => { drag.current = null; setDragging(false); }}
    onPointerCancel={() => { drag.current = null; setDragging(false); }}
    onKeyDown={event => {
      const directions: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
      if (event.key === "Home") { event.preventDefault(); setPosition(null); return; }
      const direction = directions[event.key];
      if (!direction) return;
      event.preventDefault();
      const step = event.shiftKey ? 30 : 10;
      move(event.currentTarget.offsetLeft + direction[0] * step, event.currentTarget.offsetTop + direction[1] * step);
    }}
  >
    <span className="sticker-bubble" aria-hidden="true">Get to know me <span>↗</span></span>
    <Image src="/hedy-desktop-sticker.png" alt="" width={1948} height={2048} sizes="(max-width: 650px) 120px, (max-width: 1000px) 180px, 240px" draggable={false} />
    <span className="sticker-caption" aria-hidden="true">or drag me around</span>
  </button>;
}
