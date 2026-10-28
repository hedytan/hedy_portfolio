import ProjectPager from "@/components/ProjectPager";
import Link from "next/link";
import "@/components/process-case.css";
import "./jb.css";

export const metadata = {
  title: "Job Buddy — Hedy Tan",
  description: "A device that starts the conversation at career events, and an app that keeps the connection going.",
};

const parts: [string, string][] = [
  ["Tabby", "A device. Tap two, get a prompt, start talking."],
  ["Event Circles", "A members-only space for each event, so you can reconnect."],
  ["The Commons", "Casual peer advice. No leaderboard."],
];

const changes: [string, string][] = [
  ["Focus", "From job seekers to job explorers: growing through people, not only self-improvement."],
  ["Added", "Follow-up prompts after the event, as skippable suggestions."],
  ["Dropped", "CV and interview practice, to stay on connection."],
];

export default function JobBuddy() {
  return <main className="pc jb">
    <nav className="pc-top"><Link href="/" aria-label="Hedy Tan home">Ht</Link><Link href="/#work">← ALL PROJECTS</Link><a href="/#contact">CONTACT</a></nav>
    <header className="pc-header"><div><p className="pc-label">HYBRID PRODUCT · TEAM PROJECT</p><h1>Job<br/>Buddy</h1></div><dl>{[["Year","2026"],["Type","Wearable device + app"],["Context","UTS · Interaction Design Studio"],["Team","PG10 · Shuffle Mode"]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></header>

    <section className="pc-section" id="overview"><p className="pc-label">01 — OVERVIEW</p><div className="pc-copy"><p className="pc-intro">A device that starts the conversation at career events, and an app that keeps the connection going.</p></div><div className="jb-hero"><figure><video src="/job-buddy/full.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="The Tabby prototype in use: pair a device with the app, choose a card, then two devices meet, show a prompt and save the connection" /></figure></div></section>

    <section className="pc-section" id="problem"><p className="pc-label">02 — PROBLEM</p><div className="pc-copy"><h2>Events start a connection. Then it fades.</h2></div><div className="jb-stats"><div><strong>43%</strong><p>of young Australians feel lonely.</p></div><div><strong>70%</strong><p>of people got hired through networks, but find it hard to stay in touch.</p></div></div></section>

    <section className="pc-section" id="solution"><p className="pc-label">03 — SOLUTION</p><div className="pc-copy"><h2>Three parts for before, during and after an event.</h2></div><ul className="jb-list">{parts.map(([t,d])=><li key={t}><b>{t}</b><span>{d}</span></li>)}</ul></section>

    <section className="pc-section" id="tabby"><p className="pc-label">04 — THE PROTOTYPE</p><div className="pc-copy"><h2>Pair it. Tap it. Save them.</h2></div><div className="jb-clip"><figure><video src="/job-buddy/scan.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Pairing a device with the app" /><figcaption>Pair with the app.</figcaption></figure></div><div className="jb-clip"><figure><video src="/job-buddy/tap.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Two devices meet, show a prompt and save the connection" /><figcaption>Tap, get a prompt, save.</figcaption></figure></div></section>

    <section className="pc-section" id="feedback"><p className="pc-label">05 — WHAT CHANGED</p><div className="pc-copy"><h2>Shaped by expert and class feedback.</h2></div><ul className="jb-list">{changes.map(([t,d])=><li key={t}><b>{t}</b><span>{d}</span></li>)}</ul></section>

    <section className="pc-section" id="outcome"><p className="pc-label">06 — NEXT</p><div className="pc-copy"><h2>Do follow-up prompts help people reconnect?</h2><p className="pc-note">Not yet tested with attendees.</p></div></section>
    <ProjectPager slug="job-buddy" />
  </main>;
}
