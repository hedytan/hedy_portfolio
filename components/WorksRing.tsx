import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import BinderClip from "./BinderClip";

// What each folder says, in plain words, plus the one picture that explains the project.
const folders: Record<string, { label: string; lines: string[]; img: string; w: number; h: number; bg: string }> = {
  resonance: { label: "Resonance", lines: ["iOS app · 2026", "Emotion-first music app", "Share the feeling behind a song"], img: "/folders/resonance.jpg", w: 900, h: 900, bg: "#050505" },
  "mind-the-gap": { label: "Mind the Gap", lines: ["Interactive prototype · 2026", "Vending machine for feelings", "See how a station feels"], img: "/folders/mind-the-gap.jpg", w: 640, h: 1077, bg: "#0f1622" },
  "job-buddy": { label: "Job Buddy", lines: ["Device + app · 2026", "Turn a first meeting into a connection", "Icebreaker to start talking"], img: "/folders/job-buddy.jpg", w: 770, h: 660, bg: "#e9e6e0" },
  fitsapp: { label: "FitsApp", lines: ["UX / UI design · 2025", "Every walk grows a tree", "Motivation from delight, not data"], img: "/folders/fitsapp.jpg", w: 240, h: 328, bg: "#c8c3e6" },
  "keyboard-research": { label: "Typing Research", lines: ["UX research · 2025", "Keyboard typing experiences", "Losing and regaining flow"], img: "/folders/keyboard-research.jpg", w: 547, h: 390, bg: "#fbf3e2" },
};

export default function WorksRing() {
  return <section className="wl wl-page" id="work" aria-label="Portfolios">
    <h2 className="wl-label">PORTFOLIOS</h2>
    <ul className="fd-stack">
      {projects.map((p, i) => {
        const f = folders[p.slug];
        if (!f) return null;
        return <li key={p.slug} className={`fd fd-c${i % 4} fd-t${i % 3} ${i % 2 ? "fd-flip" : ""}`} style={{ zIndex: i + 1 }}>
          <Link href={p.href === "#" ? "/" : p.href} className="fd-link" aria-label={`${f.label} — ${f.lines.join(", ")}`}>
            <span className="fd-tab"><span className="fd-label">{f.label}</span></span>
            <span className="fd-front">
              <span className="fd-list">
                {f.lines.map(l => <span key={l} className="fd-line">{l}</span>)}
                <span className="fd-open">Open case study →</span>
              </span>
              <span className="fd-print">
                <BinderClip className="fd-clip" />
                <span className="fd-pic" style={{ background: f.bg }}><Image src={f.img} alt="" width={f.w} height={f.h} sizes="(max-width:700px) 70vw, 380px" /></span>
              </span>
            </span>
          </Link>
        </li>;
      })}
    </ul>
  </section>;
}
