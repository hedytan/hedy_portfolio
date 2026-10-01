import Link from "next/link";
import type { Metadata } from "next";
import FitsAppStory from "@/components/FitsAppStory";
import "../case-study.css";

export const metadata: Metadata = {
  title: "FitsApp — Small steps. A reason to return. · Hedy Tan",
  description: "The problem, trade-offs, proposed build and next tests behind a playful step-tracking concept.",
};

export default function FitsApp() {
  return <main className="fits-case font-mono">
    <nav className="fits-case-nav" aria-label="Project navigation"><Link href="/#work">← All projects</Link><span>02 / FitsApp</span></nav>
    <header className="fits-case-header"><p className="fits-story-kicker">FITSAPP · TEAM DESIGN PROJECT</p><h1>Small steps.<br /><em>A reason to return.</em></h1><p>Turning everyday steps into a growing tree. A story about making small efforts visible, personal and worth returning to.</p><div className="fits-case-meta"><span>Research</span><span>Interaction design</span><span>Prototyping</span></div></header>
    <FitsAppStory />
    <footer className="fits-case-nav"><Link href="/#work">← All projects</Link><Link href="/projects/resonance">Resonance →</Link></footer>
  </main>;
}
