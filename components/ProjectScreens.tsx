"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProjectScreens({ screens }: { screens: { src: string; label: string }[] }) {
  const [active, setActive] = useState(0);
  return <figure className="brief-demo"><Image className="brief-app-media" src={screens[active].src} alt={screens[active].label} width={1206} height={2622} sizes="300px" priority /><div className="brief-tabs" aria-label="App screens">{screens.map((screen, i) => <button key={screen.src} onClick={() => setActive(i)} aria-pressed={i === active} aria-label={screen.label}>{i + 1}</button>)}</div><figcaption>{screens[active].label}</figcaption></figure>;
}
