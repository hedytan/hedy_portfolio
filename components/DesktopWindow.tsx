"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = { id: string; title: string; index: number; active: boolean; minimized: boolean; onActivate: () => void; onClose: () => void; onMinimize: () => void; children: ReactNode };

export default function DesktopWindow({ id, title, index, active, minimized, onActivate, onClose, onMinimize, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const drag = useRef<{id:number;x:number;y:number;left:number;top:number} | null>(null);
  const [position, setPosition] = useState<{left:number;top:number} | null>(null);
  const [maximized, setMaximized] = useState(false);
  const initialOffset = useRef(index * 26);
  useEffect(() => {
    if (active && !minimized) ref.current?.focus({preventScroll:true});
  }, [active, minimized]);
  useEffect(() => {
    const resize = () => setPosition(null);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  return <section ref={ref} role="dialog" aria-modal="false" aria-labelledby={`window-${id}`} tabIndex={-1}
    hidden={minimized} className={`os-window desktop-window${maximized ? ' is-maximized' : ''}${active ? ' is-active' : ''}`}
    style={{zIndex:60 + index, ...(!maximized && position ? position : {}), ...(!maximized && !position ? {translate:`${initialOffset.current}px ${initialOffset.current}px`} : {})}}
    onPointerDownCapture={onActivate} onFocusCapture={() => {if (!active) onActivate();}}
    onKeyDown={event => {if (event.key === 'Escape' && active) {event.stopPropagation(); onClose();}}}>
    <div className="os-window-bar desktop-window-bar"
      onDoubleClick={event => {if (!(event.target as HTMLElement).closest('button')) setMaximized(value => !value);}}
      onPointerDown={event => {
        if (event.button !== 0 || maximized || (event.target as HTMLElement).closest('button')) return;
        const rect = ref.current!.getBoundingClientRect();
        drag.current = {id:event.pointerId,x:event.clientX,y:event.clientY,left:rect.left,top:rect.top};
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={event => {
        const start = drag.current;
        if (start?.id !== event.pointerId) return;
        const width = ref.current!.getBoundingClientRect().width;
        setPosition({left:Math.max(0,Math.min(innerWidth-width,start.left+event.clientX-start.x)),top:Math.max(44,Math.min(innerHeight-100,start.top+event.clientY-start.y))});
      }}
      onPointerUp={event => {if (drag.current?.id === event.pointerId) {drag.current=null;event.currentTarget.releasePointerCapture(event.pointerId);}}}
      onLostPointerCapture={() => {drag.current=null;}} onPointerCancel={() => {drag.current=null;}}>
      <div className="window-traffic-lights">
        <button className="window-control control-close" aria-label={`Close ${title}`} title="Close" onClick={onClose}><span>×</span></button>
        <button className="window-control control-inactive" aria-label="Minimize unavailable" disabled><span /></button>
        <button className="window-control control-maximize" aria-label={`${maximized ? 'Restore' : 'Maximize'} ${title}`} title={maximized ? 'Restore size' : 'Maximize'} onClick={() => setMaximized(value => !value)}><span>{maximized ? '↙' : '↗'}</span></button>
      </div>
      <h2 id={`window-${id}`}>{title}</h2><span className="window-bar-spacer" aria-hidden="true" />
    </div>
    <div className="os-window-content" data-lenis-prevent>{children}</div>
    <div className="os-window-status">hedy.t<span>Drag title bar to move · Esc to close</span></div>
  </section>;
}
