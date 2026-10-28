// A small binder clip drawn in SVG, used to pin photos onto the project folders.
export default function BinderClip({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 64 84" aria-hidden="true">
    <defs>
      <linearGradient id="bc-wire" x1="0" x2="1"><stop offset="0" stopColor="#8b8e93" /><stop offset=".45" stopColor="#f4f5f6" /><stop offset="1" stopColor="#9a9da2" /></linearGradient>
      <linearGradient id="bc-body" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#3a3a3c" /><stop offset=".35" stopColor="#141415" /><stop offset="1" stopColor="#050505" /></linearGradient>
    </defs>
    <path d="M21 50 L16 22 Q14 6 32 6 Q50 6 48 22 L43 50" fill="none" stroke="url(#bc-wire)" strokeWidth="3.4" strokeLinecap="round" />
    <path d="M9 46 H55 L60 78 Q60 80 58 80 H6 Q4 80 4 78 Z" fill="url(#bc-body)" />
    <path d="M10 49 H54" stroke="rgba(255,255,255,.28)" strokeWidth="1.5" />
    <path d="M21 50 L19 62 M43 50 L45 62" stroke="url(#bc-wire)" strokeWidth="3.4" strokeLinecap="round" />
  </svg>;
}
