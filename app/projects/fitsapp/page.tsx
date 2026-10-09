import Link from "next/link";
import Image from "next/image";
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
    <header className="fits-case-header"><p className="fits-story-kicker">FITSAPP · TEAM DESIGN PROJECT</p><h1>Small steps.<br /><em>A reason to return.</em></h1><p>FitsApp is a team-designed activity concept for busy young professionals aged 25–35. The design goal: make everyday walking feel worth returning to by turning small efforts into visible tree growth.</p><div className="fits-case-meta"><span>Research</span><span>Interaction design</span><span>Prototyping</span></div></header>
    <FitsAppStory />

    <div className="case-divider"><span>the decisions worth a closer look</span></div>
    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">THE RESPONSE</p><h2>The tree makes effort visible; the number keeps it understandable.</h2></div>
      <p className="case-lead">The interview summary pointed to delayed results and a desire to see progress sooner. This informed a design hypothesis: a visible response to everyday walking could make a small effort feel more worthwhile. It does not establish that tree growth will change activity over time.</p>
      <figure className="case-figure"><Image src="/fitsapp-case/progress.png" alt="FitsApp tree growth and step count interface" width={309} height={500} style={{ maxWidth:260, margin:"0 auto" }} /><figcaption style={{textAlign:"center"}}>The visual metaphor sits alongside a concrete count. Both need to tell the same story.</figcaption></figure>
    </section>
    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">THE UNRESOLVED CHOICE</p><h2>A shrinking tree could undermine the reason to return.</h2></div>
      <p className="case-lead">An early prototype explored negative growth after missed activity. That creates a tension with the target scenario: someone who is already tired, busy and struggling to maintain a routine. The next iteration should compare regression with paused growth and a forgiving restart.</p>
      <div className="case-card-grid case-card-grid--3">
        <div className="case-card"><h3>What was explored</h3><p>A visual loss intended to encourage a return after missed activity.</p></div>
        <div className="case-card"><h3>What it could cost</h3><p>Accumulated effort may feel erased, or a busy day may feel like a failure.</p></div>
        <div className="case-card"><h3>What needs testing</h3><p>Whether preserving growth makes restarting feel more achievable. This comparison is proposed, not a completed study.</p></div>
      </div>
    </section>
    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">CLOSING THE LOOP</p><h2>Success means small walks feel worthwhile—and people actually return.</h2></div>
      <p className="case-lead">The project produced a focused concept and interface prototypes. The next step is to test the promise made at the start, rather than treating finished screens as evidence of improved motivation.</p>
      <div className="case-card-grid case-card-grid--3">
        <div className="case-card"><h3>Can they understand progress?</h3><p>Ask participants to set a goal and explain the tree’s state. Observe task completion, errors and assistance needed.</p></div>
        <div className="case-card"><h3>Can they recover from a missed day?</h3><p>Compare feedback variants in the same scenario. Record interpretations and emotional responses; stated intention alone does not prove a return.</p></div>
        <div className="case-card"><h3>Do they return over time?</h3><p>A longer study would examine repeat use and walking relative to each participant’s baseline, including returns after inactivity. These are planned observations, not reported results.</p></div>
      </div>
      <p className="case-note">Evidence boundary: interview summaries informed the direction; the persona describes a design scenario. AI-assisted exploration generated hypotheses rather than testing them. Individual contribution, implementation status and measured outcomes should be documented separately before making stronger claims.</p>
    </section>

    <footer className="fits-case-nav"><Link href="/#work">← All projects</Link><Link href="/projects/resonance">Resonance →</Link></footer>
  </main>;
}
