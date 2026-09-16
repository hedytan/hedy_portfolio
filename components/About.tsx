import Image from "next/image";
import { site } from "@/lib/projects";
import Reveal from "./Reveal";

// A handful of process sketches, scattered like a scrapbook page and
// loosely circled by a hand-drawn loop.
const scraps = [
  { src: "/resonance/process/sketches.png", left: "0%", top: 26, w: 150, h: 62, rot: -6 },
  { src: "/resonance/process/findings-wall.png", left: "32%", top: 0, w: 92, h: 76, rot: 4 },
  { src: "/resonance/process/guiding-questions.png", left: "52%", top: 42, w: 82, h: 82, rot: -5 },
  { src: "/resonance/process/challenge-mindmap.png", left: "68%", top: 8, w: 132, h: 60, rot: 6 },
];

function Scrapbook() {
  return (
    <div className="relative w-full max-w-[430px] h-[190px] select-none">
      <svg viewBox="0 0 430 190" className="absolute inset-0 w-full h-full text-soft/40" fill="none">
        <path
          d="M20,95 C8,45 62,12 132,9 C222,5 322,-3 384,32 C412,52 418,112 382,144 C330,180 238,182 158,176 C78,171 14,152 9,112 C7,102 13,97 20,95"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
      {scraps.map((s) => (
        <div
          key={s.src}
          className="absolute rounded-lg overflow-hidden bg-panel shadow-[0_10px_24px_rgba(23,21,18,0.16)] ring-1 ring-ink/5"
          style={{ left: s.left, top: s.top, width: s.w, height: s.h, transform: `rotate(${s.rot}deg)` }}
        >
          <Image src={s.src} alt="" width={264} height={264} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 md:px-10 py-32">
      <p className="font-hand text-2xl text-ink/80 -rotate-1 mb-8">notes from my sketchbook</p>
      <Reveal>
        <p className="font-semibold text-[clamp(24px,3.4vw,40px)] leading-[1.35] tracking-tight max-w-[24ch]">
          {site.about.lead}
        </p>
      </Reveal>
      <div className="mt-12 max-w-[60ch]">
        {site.about.paragraphs.map((p, i) => (
          <p key={i} className="text-soft text-base leading-relaxed">{p}</p>
        ))}
        <ul className="mt-8 flex flex-wrap gap-2.5 list-none">
          {site.about.chips.map((c) => (
            <li key={c} className="font-mono text-[12.5px] px-3.5 py-1.5 border border-faint rounded-full text-soft">
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 hidden md:flex justify-end">
        <Scrapbook />
      </div>
    </section>
  );
}
