import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ResonanceStory from "@/components/ResonanceStory";
import "../case-study.css";

export const metadata: Metadata = {
  title: "Resonance — A feeling. Not a performance. · Hedy Tan",
  description: "The problem, trade-offs, build and open questions behind a solo SwiftUI music app where artists share the feeling behind a song.",
};

const screens = [
  { slug: "welcome", label: "01 / Welcome", text: "Opens on the word itself, nothing else, for about four seconds before the feed loads." },
  { slug: "feed", label: "02 / Feed", text: "Each card shows a mood shape and a quote. No profile photo, no follower count." },
  { slug: "moment", label: "03 / Moment", text: "Opens a single post full-screen — the mood shape, the quote, the song, and who else it resonated with." },
  { slug: "connection", label: "04 / Connection", text: "A dot travels between two mood shapes when a post and your reaction share the same emotional ground." },
  { slug: "express", label: "05 / Express", text: "Posting is four steps: pick a feeling, write a line, add an image, link a song. Publish stays off until a mood and a quote both exist." },
  { slug: "draw-mood", label: "06 / Draw Mood", text: "If none of the seven presets fit, draw the shape by hand on a PencilKit canvas and name it after." },
];

const processStrip = [
  { n: "1", t: "Research", items: ["Guiding questions", "Group interview", "Secondary research", "Key findings"] },
  { n: "2", t: "Synthesis", items: ["User personas", "The gap"] },
  { n: "3", t: "Ideation", items: ["Board concept", "The pivot", "Value variation"] },
  { n: "4", t: "Final designs", items: ["Six screens", "Data model"] },
  { n: "5", t: "Reflection", items: ["What worked", "What's next"] },
];

const findings = [
  { t: "Music is mood-driven first.", p: "Every participant described listening by emotional state — not artist loyalty, not genre." },
  { t: "Connection is to the feeling, not the person.", p: "Several listen to music in languages they don't understand and still feel connected." },
  { t: "Honest sharing doesn't have a home.", p: "Social platforms reward performance — artists chase clips that travel, not a sustained honest presence." },
  { t: "Discovery is social, not algorithmic.", p: "The most trusted path to new music was still a person — a friend, a room, a recommendation." },
];

const personas = [
  { role: "Artist", name: "Mia, 23", bio: "Independent musician — writes, records, self-releases.", goal: "Share the moods and half-finished ideas behind a track, not just the finished version.", pain: "Instagram feels too polished for that. Notion feels too private." },
  { role: "Fan", name: "Leo, 20", bio: "Streams across genres, follows a handful of indie artists.", goal: "Get past the song to the reference points and context behind it.", pain: "That context is scattered — a tweet here, a story there, nothing that lasts." },
];

const decisions = [
  { t: "Mood shapes replace profile photos.", p: "The feed leads with the artist's mood — an organic, imperfect shape — instead of a face." },
  { t: "Every metric is gone.", p: "No followers, no likes, no rankings. A card says what someone's feeling, not how popular they are." },
  { t: "The Connection screen has no tab bar.", p: "Built both ways. Without the tab bar it read as somewhere you'd arrived, not information to scroll past." },
  { t: "Some feelings get drawn, not picked.", p: "When no preset mood fits, artists draw it on a freeform canvas and name it after." },
];

const moods = [
  { t: "Joy", c: "#C9922E" }, { t: "Melancholy", c: "#2E3A5C" }, { t: "Wonder", c: "#3C7A85" },
  { t: "Tender", c: "#6E3A48" }, { t: "Urgency", c: "#B5432E" }, { t: "Awe", c: "#3A5B9E" }, { t: "Custom", c: "#8A8A85" },
];

const takeaways = [
  "A value proposition only changes anything once it changes the screens — removing the content board is what made “emotional connection first” real.",
  "Building both versions of the Connection screen settled the tab-bar question faster than arguing about it would have.",
  "Removing every metric forced each card to say what someone feels, not how popular they are.",
  "Defining MoodType before writing any screen code made the rest of the build predictable.",
];

const nextSteps = [
  "A small group of real independent artists using it for a few weeks, not a single interview.",
  "Full-length Spotify playback instead of a 30-second preview.",
  "An emotional map — how an artist's palette shifts over months.",
  "Whatever the artist testing round says needs to change.",
];

export default function Resonance() {
  return <main className="fits-case reson-case font-mono">
    <nav className="fits-case-nav" aria-label="Project navigation"><Link href="/#work">← All projects</Link><span>01 / Resonance</span></nav>
    <header className="fits-case-header"><p className="fits-story-kicker">RESONANCE · SOLO IOS PROJECT</p><h1>A feeling.<br /><em>Not a performance.</em></h1><p>Turning the story behind a song into something an artist can share honestly, and a fan can actually feel — built solo in SwiftUI over 12 weeks.</p><div className="fits-case-meta"><span>Research</span><span>Interaction design</span><span>SwiftUI</span></div></header>
    <ResonanceStory />
    <section className="case-screens" aria-label="All six screens">
      <p className="fits-story-kicker">05 / ALL SIX SCREENS</p>
      <h2>Every screen, start to finish.</h2>
      <div className="case-screens-grid">
        {screens.map((s) => (
          <figure className="case-screen" key={s.slug}>
            <div className="case-screen-frame">
              <Image src={`/resonance/${s.slug}.png`} alt={`Resonance — ${s.slug} screen`} width={1206} height={2622} />
            </div>
            <figcaption>
              <span className="case-screen-label">{s.label}</span>
              <p>{s.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>

    <div className="case-divider"><span>the fuller story, for anyone still reading</span></div>

    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">06 / BACKGROUND</p><h2>The gap this was built for</h2></div>
      <p className="case-lead">Most people can name a song that changed something for them. Almost none of them know why it was made. That gap — between what an artist feels while making something and what a listener actually receives — is what Resonance is about.</p>
      <p className="case-lead">It isn&apos;t really a technical gap. The tools to share already exist — Instagram, Notion, a voice memo. What&apos;s missing is a place where sharing something that honest doesn&apos;t feel too exposed.</p>
      <div className="case-quote">
        <p>&ldquo;A friend wrote a caption about what she was going through when she made a track. She deleted it before posting. Too honest. Wrong platform.&rdquo;</p>
        <span>the moment that started it</span>
      </div>
      <figure className="case-figure"><Image src="/resonance/process/challenge-mindmap.png" alt="Challenge mind-map" width={1762} height={780} /><figcaption>Mapping the question outward from &ldquo;how can importance be placed on music?&rdquo;</figcaption></figure>
    </section>

    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">07 / OVERVIEW</p><h2>Five stages, twelve weeks</h2></div>
      <div className="case-process-strip">
        {processStrip.map((s) => (
          <div key={s.n}><h4>{s.n} / {s.t}</h4><ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul></div>
        ))}
      </div>
    </section>

    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">08 / RESEARCH</p><h2>What four findings pointed at</h2></div>
      <p className="case-lead">Questions came first, across eight angles — what, who, where, when, why, how, should, what-if. A group interview and a findings wall narrowed that down.</p>
      <figure className="case-figure"><Image src="/resonance/process/guiding-questions.png" alt="Guiding questions board" width={1462} height={1464} /><figcaption>Eight lenses, opened up before any design started.</figcaption></figure>
      <figure className="case-figure"><Image src="/resonance/process/findings-wall.png" alt="Findings wall" width={1742} height={1414} /><figcaption>Streaming payouts, fake streams and AI-generated music all came up — eroding trust in what people hear.</figcaption></figure>
      <div className="case-card-grid">
        {findings.map((f) => (
          <div className="case-card" key={f.t}><h3>{f.t}</h3><p>{f.p}</p></div>
        ))}
      </div>
    </section>

    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">09 / SYNTHESIS</p><h2>Two people the design answered to</h2></div>
      <div className="case-card-grid">
        {personas.map((p) => (
          <div className="case-card" key={p.role}>
            <span className="case-tag">{p.role}</span>
            <h3>{p.name}</h3>
            <p>{p.bio}</p>
            <p><b>Goal:</b> {p.goal}</p>
            <p><b>Pain:</b> {p.pain}</p>
          </div>
        ))}
      </div>
      <figure className="case-figure"><Image src="/resonance/process/domain-personae.png" alt="Domain personae wall" width={1724} height={1302} /><figcaption>The proto-persona wall Mia and Leo were distilled from.</figcaption></figure>
      <figure className="case-figure"><Image src="/resonance/process/problem-statement.png" alt="Problem statement" width={1734} height={1510} /><figcaption>Musicians want to build fan connections but are restricted by what platforms reward.</figcaption></figure>
    </section>

    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">10 / IDEATION</p><h2>A pivot in week 10</h2></div>
      <p className="case-lead">Early ideas went up on a wall — live-listening parties, fan badges, memory tokens — then got filtered on a creativity × challenge-alignment matrix.</p>
      <figure className="case-figure"><Image src="/resonance/process/brainstorm.jpg" alt="Brainstorm wall" width={5712} height={4284} /><figcaption>Anchored on &ldquo;musicians want to maintain lasting fan connections.&rdquo;</figcaption></figure>
      <figure className="case-figure"><Image src="/resonance/process/alignment-matrix.png" alt="Alignment matrix" width={1934} height={1434} /><figcaption>Sorting every idea by creativity and alignment to the challenge.</figcaption></figure>
      <p className="case-lead">The first version was a Pinterest-style board for artists to post to. Partway through, it was clear &ldquo;emotional connection first&rdquo; was still just a phrase — it hadn&apos;t actually changed a single screen. I&apos;d built a content tool with an emotional label on it. Week 10 started over: one mood, one thought, one song.</p>
      <figure className="case-figure"><Image src="/resonance/process/sketches.png" alt="Lo-fi wireframes" width={2088} height={830} /><figcaption>Lo-fi wireframes of the moment-based redesign.</figcaption></figure>
    </section>

    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">11 / DESIGN DECISIONS</p><h2>Four decisions that carry the design</h2></div>
      {decisions.map((d, i) => (
        <div className="case-decision" key={d.t}><span>{`0${i + 1}`}</span><div><h3>{d.t}</h3><p>{d.p}</p></div></div>
      ))}
    </section>

    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">12 / DESIGN SYSTEM</p><h2>One enum, seven moods</h2></div>
      <p className="case-lead">MoodType is a seven-case Swift enum — each case carries its own colour and hand-tuned shape. Because the compiler forces every view to handle all seven, the feed, a moment and the mood picker can&apos;t drift out of sync.</p>
      <div className="case-mood-grid">
        {moods.map((m) => (
          <div key={m.t}><span className="case-mood-swatch" style={{ background: m.c }} /><b>{m.t}</b></div>
        ))}
      </div>
      <div className="case-two-col">
        <div><h3>One vocabulary</h3><p>Names in mono, quotes in a softer serif, moods in that seven-case enum — the vocabulary can&apos;t drift between the feed, a moment and the mood selector.</p></div>
        <div><h3>Two lifecycles, kept apart</h3><p>PostStore holds what was felt and shared; MusicManager handles what&apos;s playing. A view that shows posts never needs to know how playback works.</p></div>
      </div>
    </section>

    <section className="case-section">
      <div className="case-section-head"><p className="fits-story-kicker">13 / REFLECTION</p><h2>What I&apos;d carry forward</h2></div>
      <div className="case-two-col">
        <div>
          <h3>Takeaways</h3>
          <ul className="case-list">{takeaways.map((t, i) => <li key={i}><span>{`0${i + 1}`}</span>{t}</li>)}</ul>
        </div>
        <div>
          <h3>Next steps</h3>
          <ul className="case-list">{nextSteps.map((t, i) => <li key={i}><span>{`0${i + 1}`}</span>{t}</li>)}</ul>
        </div>
      </div>
    </section>

    <footer className="fits-case-nav"><Link href="/#work">← All projects</Link><Link href="/projects/fitsapp">FitsApp →</Link></footer>
  </main>;
}
