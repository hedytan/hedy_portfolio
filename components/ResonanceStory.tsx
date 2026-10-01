"use client";

import { useState } from "react";

type Card = { label: string; title: string; text: string; detail?: string; image?: string; tone: "paper" | "green" | "purple" | "dark" };
const chapters: { title: string; subtitle: string; cards: Card[] }[] = [
  { title: "Why this problem?", subtitle: "From a broad question about music to a specific, narrow one.", cards: [
    { label: "01 / Starting point", title: "Started with a deleted caption.", text: "A friend wrote about what she was going through when she made a track, then deleted it before posting — too honest for the platform. That moment became the starting question: why is there nowhere to share that honestly?", detail: "It started broader than that: how can importance be placed on music again.", tone: "paper" },
    { label: "02 / Research method", title: "Guiding questions, then a group interview.", text: "Research started with questions across eight angles — what, who, where, when, why, how, should, what-if — then a group interview and a secondary-research findings wall narrowed the direction.", detail: "The findings wall covered streaming payouts, fake streams and AI-generated music — all eroding trust in what people hear.", tone: "green" },
    { label: "03 / What the interviews showed", title: "People connect to a feeling, not a profile.", text: "Every participant described listening by mood, not artist loyalty or genre. Several listen to music in languages they don't understand and still feel connected — the feeling reads before the words do.", image: "feed", tone: "purple" },
    { label: "04 / Evidence boundary", title: "A group interview, not a market study.", text: "This is a group interview and secondary research during a solo 12-week project, not a validated study. The findings pointed at a direction; they don't prove artists or fans will behave this way at scale.", detail: "Treat the findings as a design hypothesis, not a conclusion.", tone: "dark" },
  ] },
  { title: "What did we trade off?", subtitle: "The choices behind the design, and what each one cost.", cards: [
    { label: "01 / The pivot", title: "From a content board to one moment.", text: "The first version was a Pinterest-style board for artists to post to. Partway through, it was clear “emotional connection first” was still just a phrase — it hadn't actually changed a single screen. I'd built a content tool with an emotional label on it.", detail: "The cost: a whole iteration's worth of board, tagging and layout work was set aside in week 10.", tone: "green" },
    { label: "02 / Feedback", title: "Every metric is gone.", text: "No followers, no likes, no rankings. A card doesn't say how popular an artist is — it says what they're feeling right now.", detail: "The cost: no built-in virality loop. Discovery has to come from somewhere else, and that isn't solved yet.", tone: "paper" },
    { label: "03 / Navigation", title: "The Connection screen has no tab bar.", text: "I built the screen both ways. With the tab bar it read as information to scroll past; without it, it read as somewhere you'd arrived. That difference decided it.", image: "connection", detail: "The cost: it breaks the app's own navigation pattern, on purpose, for one screen.", tone: "purple" },
    { label: "04 / Unresolved tension", title: "Drawing a feeling takes more effort than tapping one.", text: "When no preset mood fits, artists draw it freehand on a canvas and name it after. It's slower than picking from a list, and I don't know yet whether that friction is honest or just annoying.", detail: "Next test: whether people actually use draw-mood, or always default to a preset.", tone: "dark" },
  ] },
  { title: "How would we build it?", subtitle: "The core flow, the data model, and what's deliberately not in v1.", cards: [
    { label: "01 / Core flow", title: "Welcome. Feed. Moment. Share back.", text: "An artist posts a mood, a thought and a song. A fan opens it as a Moment, responds with how it resonated, and that response becomes a Connection between the two of them.", image: "moment", tone: "purple" },
    { label: "02 / Data model", title: "One enum carries the whole app.", text: "MoodType is a seven-case Swift enum — each case has its own colour and hand-tuned shape. Because the compiler forces every view to handle all seven, the feed, a moment and the mood picker can't drift out of sync.", detail: "PostStore (what was felt) and MusicManager (what's playing) are kept separate on purpose — a view showing posts never needs to know how playback works.", tone: "paper" },
    { label: "03 / What's in, what's not", title: "A 30-second preview, not the full track.", text: "Song links run through the Deezer API for a short preview — enough to carry a moment, not a full listening experience. Mood drawing uses PencilKit directly on-device.", image: "draw-mood", detail: "Not built yet: full-length streaming, a browsing or discovery feed, and any backend — everything currently lives in local session state.", tone: "green" },
    { label: "04 / Why build it myself", title: "A prototype couldn't show the feel of it.", text: "The Connection screen is a dot travelling between two mood shapes along a gradient line — timing and motion are the point. A static Figma frame couldn't tell me if it worked; only running SwiftUI code could.", detail: "That's also why this was built solo rather than scoped as a team hand-off.", tone: "dark" },
  ] },
  { title: "How would we know it works?", subtitle: "What's been tested, what hasn't, and what's next.", cards: [
    { label: "01 / Current outcome", title: "A working app, not a validated one.", text: "Six screens run end-to-end in SwiftUI, built from a real interview round and a documented pivot. What it hasn't had yet is anyone outside the project actually using it.", detail: "No usability testing with real artists or fans has happened yet — that's the honest gap.", tone: "paper" },
    { label: "02 / The one test I did run", title: "Built the Connection screen twice to compare.", text: "Rather than debate tab bar or no tab bar, I shipped both and looked at each one. That's a test of one, by one person — useful for a decision, not evidence of how anyone else would react.", detail: "Everything else in the design is a judgement call, not a measured result.", tone: "green" },
    { label: "03 / Open question", title: "Does removing metrics make sharing more honest, or just quieter?", text: "The bet is that no followers or likes makes people share more truthfully. It could just as easily mean fewer people bother posting at all — there's no data yet either way.", detail: "This needs real artists posting for real weeks, not an interview room.", tone: "purple" },
    { label: "04 / Next steps", title: "Test it with real independent artists.", text: "The next round is a small group of actual musicians using Resonance for a few weeks, not a single interview session. Full-length Spotify playback and a longer-term emotional map of an artist's moods come after that, not before.", detail: "Evidence first, features second.", tone: "dark" },
  ] },
];

export default function ResonanceStory() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];
  return <section className="fits-story" aria-label="Resonance case study chapters">
    <nav className="fits-story-tabs" aria-label="Choose a chapter">{chapters.map((item, i) => <button key={item.title} type="button" aria-pressed={i === active} onClick={() => setActive(i)}><span>0{i + 1}</span>{item.title}</button>)}</nav>
    <div className="fits-story-heading" aria-live="polite" aria-atomic="true"><p className="fits-story-kicker">CHAPTER 0{active + 1} / 04</p><h2>{chapter.title}</h2><p>{chapter.subtitle}</p></div>
    <div className="fits-story-grid" id="reson-story-panel">{chapter.cards.map(card => <article className={`fits-story-card fits-story-card--${card.tone}`} key={card.title}>
      <p className="fits-story-kicker">{card.label}</p><h3>{card.title}</h3>
      {card.image && <a className="fits-story-image" href={`/resonance/${card.image}.png`} target="_blank" rel="noreferrer" aria-label={`Enlarge Resonance ${card.image} screen (opens in a new tab)`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/resonance/${card.image}.png`} alt={`Resonance app screenshot — ${card.image}`} />
      </a>}
      <p>{card.text}</p>{card.detail && <p className="fits-story-detail">{card.detail}</p>}
    </article>)}</div>
    <div className="fits-story-controls"><button type="button" disabled={active === 0} onClick={() => setActive(active - 1)} aria-label="Previous chapter" aria-controls="reson-story-panel">‹</button><div className="fits-story-dots" aria-label="Chapter pagination">{chapters.map((item, i) => <button type="button" key={item.title} aria-label={`Chapter ${i + 1}: ${item.title}`} aria-current={i === active ? "step" : undefined} onClick={() => setActive(i)}><span /></button>)}</div><button type="button" disabled={active === 3} onClick={() => setActive(active + 1)} aria-label="Next chapter" aria-controls="reson-story-panel">›</button></div>
  </section>;
}
