import BrowserPrototype from "@/components/BrowserPrototype";
import Link from "next/link";
import "@/components/process-case.css";
import "./mtg.css";

export const metadata = {
  title: "Mind the Gap — Hedy Tan",
  description: "A vending machine for feelings: write a note, receive a card, and see how a station feels.",
};

const choices = [
  ["A machine, not a form", "A vending machine is already a familiar way to get something small at a station. Picking a number, paying, waiting for the drop and collecting from a tray turns “write down how you feel” into something you do with your hands.", "The cost: more steps than a text box. The review below shows how a machine metaphor can also leave the first action unclear."],
  ["Nine named feelings, not a slider", "Angry, Overwhelmed, Anxious, Sad, Lonely, Tired, Meh, Hopeful, Happy. Each has a number, a face and a label. The same nine colours return on the station wall, so a choice made at the machine can be found again on the wall.", "The cost: nine boxes cannot hold every feeling, and “Meh” is doing a lot of work."],
  ["Anonymous by default", "The composer says it plainly: “No ID required. Your note will appear anonymously on the station wall.” Nothing asks who you are before you write.", "The cost: with no identity there is no way to follow up, and what is shown to others depends on moderation that this prototype does not demonstrate."],
  ["A card back, not an answer", "What comes out is a card (“The Rest”: “Rest is part of the journey. You are allowed to put something down.”), not advice or a diagnosis. The aim is to acknowledge a feeling, not fix it.", "The cost: a small, fixed set of cards will repeat, and a card cannot respond to what someone actually wrote."],
];

const review = [
  ["Which action starts it?", "INSERT, VEND and the card grid competed for the first tap.", "The machine now numbers nine labelled feelings and a keypad prompt: “Find the number below your chosen packet.”"],
  ["What happens to my note?", "The composer did not say who would see it.", "It now states that the note appears anonymously on the station wall."],
  ["Which feeling is which?", "Five unlabelled faces; the wall used a different set of six.", "Nine faces carry text labels and the same nine colours appear on the wall legend."],
  ["Can I back out?", "Share was the only visible action in the composer.", "Each dialog has a close control; the wall has “Back to machine”."],
  ["What do I do with the card?", "No cue for revealing or keeping it.", "“Swipe to turn”, “Tap the packet to tear it open”, then Keep card."],
];

const open = [
  "Submission and moderation status is still not shown. Nothing tells a user if a note was checked, held back or rejected, or how to fix it.",
  "The wall does not say how many notes a view is based on or over what period, so a small sample could read as “how everyone feels”.",
  "Shake-to-crumple needs a motion-permission prompt and has no obvious alternative for people who cannot shake a phone.",
  "The wall’s time-based views (live, mix, history) were flagged as overlapping and are not part of this recording.",
];

export default function MindTheGap() {
  return <main className="pc mtg">
    <nav className="pc-top"><Link href="/" aria-label="Hedy Tan home">Ht</Link><Link href="/#work">← ALL WORKS</Link><a href="/#contact">CONTACT</a></nav>
    <header className="pc-header"><div><p className="pc-label">INTERACTIVE PROTOTYPE</p><h1>Mind the<br/>Gap</h1></div><dl>{[["Year","2026"],["Type","Web prototype · Station kiosk concept"],["Setting","Sydney train stations"],["Focus","Expression & collective mood"]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></header>

    <section className="pc-section" id="overview"><p className="pc-label">01 — OVERVIEW</p><div className="pc-pair"><div><p className="pc-intro">A vending machine for feelings. Pick one, write what’s behind it, and a card drops out. Each station also keeps a wall showing how the people passing through it feel.</p><p>The idea starts from a small, ordinary moment: waiting at a station. It borrows the look and the logic of the machines already there to make room for something people rarely get to say out loud.</p><p className="pc-note">This case study describes a working prototype and an expert review of it. It does not report a deployment or measured results.</p></div><figure><BrowserPrototype src="/mind-the-gap/clips/express-english.mp4" label="Choose a feeling and write an anonymous note" poster="/mind-the-gap/note.jpg"/><figcaption>Choose a feeling → write a note</figcaption></figure></div></section>

    <section className="pc-section" id="why"><p className="pc-label">02 — WHY THIS</p><div className="pc-copy"><h2>Stations are full of people carrying something, and nowhere to put it down.</h2><p>People pass through a station in the middle of their day, usually alone, usually in a hurry, often with something on their mind. The place is built for moving, not for feeling.</p><p>The project asks whether the machines already at a station, like the Opal top-up kiosk, could also take a small emotional transaction: say it, get something back, and leave a little lighter.</p><p className="pc-note">This is the design premise. It is not drawn from a participant study.</p></div></section>

    <section className="pc-section" id="choices"><p className="pc-label">03 — WHAT I CHOSE & WHY</p><h2>Four choices that shape the machine, and what each one costs.</h2><div className="mtg-trade">{choices.map(([t,a,b])=><div key={t}><h3>{t}</h3><div><p>{a}</p><p className="pc-note">{b}</p></div></div>)}</div></section>

    <section className="pc-section" id="flow"><p className="pc-label">04 — FROM EXPRESSION TO A KEEPSAKE</p><div className="pc-pair"><div><h2>A small ritual, with something to take away.</h2><p>After writing a note, the user collects a packet, opens it and reveals a card. The vending-machine sequence makes the response tangible: something to receive and keep.</p><p className="pc-note">Why this matters: the interaction acknowledges a feeling without claiming to solve it. The trade-off is a longer journey than a simple text form.</p></div><figure><BrowserPrototype src="/mind-the-gap/clips/collect-original.mp4" label="Collect a packet and reveal a card" poster="/mind-the-gap/card.jpg"/><figcaption>Collect → reveal → keep</figcaption></figure></div></section>

    <section className="pc-section" id="wall"><p className="pc-label">05 — THE STATION WALL</p><div className="pc-pair"><div><h2>One note is personal. The wall is shared.</h2><p>Coloured tiles bring anonymous notes together. Users filter by named feelings, then open a tile to read what someone else shared. The station map offers another place to explore.</p><p className="pc-note">The same feeling labels and colours connect the machine to the wall. This is a prototype view of shared expression, not a representative measure of a station’s mood.</p></div><figure><BrowserPrototype src="/mind-the-gap/clips/wall-original.mp4" label="Filter the station wall and open an anonymous note" poster="/mind-the-gap/filter.jpg"/><figcaption>Filter feelings → read a note</figcaption></figure></div></section>

    <section className="pc-section" id="review"><p className="pc-label">06 — WHAT AN EXPERT REVIEW FOUND</p><div className="pc-copy"><h2>Thirteen findings on an earlier version, and what the current build shows.</h2><p>In September 2026 the machine and wall screens went through a heuristic evaluation against Nielsen’s ten heuristics: eleven usability issues, five rated high, and two positives (the vending metaphor and the labelled mood overview).</p><p className="pc-note">The review was screenshot-based, so interactions were untested. The right-hand column compares the current build, as recorded, with what the review described. It is a comparison of screens, not a measured improvement.</p></div><table className="mtg-review"><thead><tr><th>Question</th><th>The review found</th><th>The current build shows</th></tr></thead><tbody>{review.map(([q,a,b])=><tr key={q}><td>{q}</td><td>{a}</td><td>{b}</td></tr>)}</tbody></table></section>

    <section className="pc-section" id="outcome"><p className="pc-label">07 — STILL OPEN</p><div className="pc-copy"><h2>It works end to end. It has not yet been tested by anyone who isn’t its author.</h2><ul>{open.map(o=><li key={o}>{o}</li>)}</ul><p>The next step is a short task test: choose a feeling, write a note, reveal a card and find the wall. For each person I would record whether they finished alone, where they hesitated, and whether they understood that the note would be public.</p></div></section>
    <footer className="pc-footer"><span>Hedy Tan</span><Link href="/projects/resonance">Next / Resonance →</Link></footer>
  </main>;
}
