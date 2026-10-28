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

// Projects as a stack of paper folders: each tab peeks out.
export default function WorksRing() {
  return <section className="wl wl-page" id="work" aria-label="Portfolios">
    <h2 className="wl-label">PORTFOLIOS</h2>
    <ul className="fd-stack">
      {projects.map((p, i) => <li key={p.slug} className={`fd fd-${i % 5} ${i % 2 ? "fd-right" : ""}`} style={{ zIndex: i + 1 }}>
        <Link href={p.href === "#" ? "/" : p.href} className="fd-link">
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
