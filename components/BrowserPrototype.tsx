"use client";

export default function BrowserPrototype({ src, label }: { src: string; label: string; poster?: string }) {
  return <video className="mtg-recording" src={src} aria-label={label} autoPlay muted loop playsInline preload="auto" onCanPlay={event => { event.currentTarget.muted = true; void event.currentTarget.play().catch(() => {}); }}/>;
}
