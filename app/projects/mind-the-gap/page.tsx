import ProjectPager from "@/components/ProjectPager";
import BrowserPrototype from "@/components/BrowserPrototype";
import Link from "next/link";
import "@/components/process-case.css";
import "./mtg.css";

export const metadata = {
  title: "Mind the Gap — Hedy Tan",
  description: "A vending machine for feelings: write a note, receive a card, and see how a station feels.",
};

const choices = [
  ["A machine, not a form", "Pick, pay, collect: writing a feeling becomes something you do with your hands.", "Cost: more steps than a text box."],
  ["Nine named feelings", "Each has a face, label and colour, reused on the wall.", "Cost: nine boxes can’t hold every feeling."],
  ["Anonymous by default", "Nothing asks who you are before you write.", "Cost: relies on moderation, not shown here."],
  ["A card, not advice", "It acknowledges a feeling instead of trying to fix it.", "Cost: a fixed set of cards will repeat."],
];

const review = [
  ["First action", "Insert, vend and the grid competed for the first tap.", "Numbered feelings and a keypad prompt."],
  ["Who sees my note?", "Not stated.", "“Appears anonymously on the station wall.”"],
  ["Which feeling is which?", "Unlabelled faces; wall used a different set.", "Nine labelled faces, same colours on the wall."],
  ["Can I back out?", "Share was the only action.", "Close controls and “Back to machine”."],
  ["What about the card?", "No cue to reveal or keep it.", "“Swipe to turn”, then Keep card."],
];

const open = [
  "No moderation status shown to the user.",
  "The wall doesn’t say how many notes it’s based on.",
  "Shake-to-crumple has no alternative for people who can’t shake.",
];

export default function MindTheGap() {
  return <main className="pc mtg">
    <nav className="pc-top"><Link href="/" aria-label="Hedy Tan home">Ht</Link><Link href="/#work">← ALL PROJECTS</Link><a href="/#contact">CONTACT</a></nav>
    <header className="pc-header"><div><h1>Mind the<br/>Gap</h1></div><dl>{[["Year","2026"],["Type","Web prototype · Station kiosk concept"],["Setting","Sydney train stations"],["Focus","Expression & collective mood"]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></header>

    <section className="pc-section" id="overview"><p className="pc-label">01 — OVERVIEW</p><div className="pc-pair"><div><p className="pc-intro">A vending machine for feelings: pick one, write a note, and a card drops out.</p></div><figure><BrowserPrototype src="/mind-the-gap/clips/express-english.mp4" label="Choose a feeling and write an anonymous note" poster="/mind-the-gap/note.jpg"/><figcaption>Choose a feeling → write a note</figcaption></figure></div></section>

    <section className="pc-section" id="why"><p className="pc-label">02 — WHY THIS</p><div className="pc-copy"><h2>Stations are built for moving, not feeling. People carry something with nowhere to put it down.</h2><p className="pc-note">A design premise, not a participant study.</p></div></section>

    <section className="pc-section" id="choices"><p className="pc-label">03 — WHAT I CHOSE & WHY</p><h2>Four choices, and what each costs.</h2><div className="mtg-trade">{choices.map(([t,a,b])=><div key={t}><h3>{t}</h3><div><p>{a}</p><p className="pc-note">{b}</p></div></div>)}</div></section>

    <section className="pc-section" id="flow"><p className="pc-label">04 — FROM EXPRESSION TO A KEEPSAKE</p><div className="pc-pair"><div><h2>A small ritual with something to keep.</h2><p>Write, collect a packet, reveal a card.</p></div><figure><BrowserPrototype src="/mind-the-gap/clips/collect-original.mp4" label="Collect a packet and reveal a card" poster="/mind-the-gap/card.jpg"/><figcaption>Collect → reveal → keep</figcaption></figure></div></section>

    <section className="pc-section" id="wall"><p className="pc-label">05 — THE STATION WALL</p><div className="pc-pair"><div><h2>One note is personal. The wall is shared.</h2><p>Filter anonymous notes by feeling and read what others left.</p></div><figure><BrowserPrototype src="/mind-the-gap/clips/wall-original.mp4" label="Filter the station wall and open an anonymous note" poster="/mind-the-gap/filter.jpg"/><figcaption>Filter feelings → read a note</figcaption></figure></div></section>

    <section className="pc-section" id="review"><p className="pc-label">06 — WHAT AN EXPERT REVIEW FOUND</p><div className="pc-copy"><h2>Heuristic evaluation: 11 issues (5 high), 2 positives.</h2><p className="pc-note">Nielsen’s 10 heuristics on an earlier, screenshot-based build. Comparison of screens, not measured improvement.</p></div><table className="mtg-review"><thead><tr><th>Question</th><th>Review found</th><th>Now</th></tr></thead><tbody>{review.map(([q,a,b])=><tr key={q}><td>{q}</td><td>{a}</td><td>{b}</td></tr>)}</tbody></table></section>

    <section className="pc-section" id="outcome"><p className="pc-label">07 — STILL OPEN</p><div className="pc-copy"><h2>Works end to end. Not yet tested by anyone but me.</h2><ul>{open.map(o=><li key={o}>{o}</li>)}</ul><p>Next: a short task test — choose, write, reveal, find the wall.</p></div></section>
    <section className="pc-section" id="try"><p className="pc-label">08 — TRY IT</p><div className="pc-pair"><div><h2>Somewhere between stops, put something down.</h2><p>Try it on your commute.</p></div><figure><iframe className="mtg-live" src="https://vent-machine.vercel.app/" title="Mind the Gap vending machine prototype" loading="lazy" allow="accelerometer; gyroscope"/><figcaption>Live prototype — tap to try</figcaption></figure></div></section>
    <ProjectPager slug="mind-the-gap" />
  </main>;
}
