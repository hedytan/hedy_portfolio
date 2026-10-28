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

export default function WorksRing() {
  return <section className="wl wl-page" id="work" aria-label="Selected projects">
    <h2 className="wl-label">MY PROJECTS</h2>
    <ul className="wl-list">
      {projects.map(p => <li key={p.slug} className="wl-item">
        <Link href={p.href === "#" ? "/" : p.href}>
          <strong>{name(p.slug, p.title)}</strong>
          <span className="wl-meta">{meta[p.slug]} — {p.year}</span>
        </Link>
      </li>)}
    </ul>
  </section>;
}
