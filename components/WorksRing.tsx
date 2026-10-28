import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const meta: Record<string, string> = {
  resonance: "iOS App",
  "mind-the-gap": "Interactive Prototype",
  "job-buddy": "Device + App",
  fitsapp: "UX / UI Design",
  "keyboard-research": "UX Research",
};
const name = (slug: string, title: string) => (slug === "keyboard-research" ? "Typing Research" : title);

// Projects as a stack of paper folders: each tab peeks out, a photo is tucked inside.
export default function WorksRing() {
  return <section className="wl wl-page" id="work" aria-label="Selected projects">
    <h2 className="wl-label">MY PROJECTS</h2>
    <ul className="fd-stack">
      {projects.map((p, i) => <li key={p.slug} className={`fd fd-${i % 5} ${i % 2 ? "fd-right" : ""}`} style={{ zIndex: i + 1 }}>
        <Link href={p.href === "#" ? "/" : p.href} className="fd-link">
          <span className="fd-photo" aria-hidden="true"><Image src={`/covers/${p.slug}.jpg`} alt="" fill sizes="160px" /></span>
          <span className="fd-tab"><span className="fd-no">{String(i + 1).padStart(2, "0")}</span>{name(p.slug, p.title)}</span>
          <span className="fd-body">
            <span className="fd-meta">{meta[p.slug]} — {p.year}<span className="fd-arrow" aria-hidden="true">↗</span></span>
            <span className="fd-desc">{p.description}</span>
          </span>
        </Link>
      </li>)}
    </ul>
  </section>;
}
