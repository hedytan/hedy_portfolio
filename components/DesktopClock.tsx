"use client";

import { useEffect, useState } from "react";

export default function DesktopClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 1000);
    document.addEventListener('visibilitychange', update);
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', update); };
  }, []);
  return <time className="os-clock" dateTime={now?.toISOString()} title="Your local time">
    <span className="os-clock-date">{now ? now.toLocaleDateString('en-AU', {weekday:'short', month:'short', day:'numeric'}) : '—'}</span>
    <span>{now ? now.toLocaleTimeString('en-GB', {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}) : '--:--:--'}</span>
  </time>;
}
