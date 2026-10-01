"use client";

import { useState } from "react";

type Card = { label: string; title: string; text: string; detail?: string; image?: string; tone: "paper" | "green" | "purple" | "dark" };
const chapters: { title: string; subtitle: string; cards: Card[] }[] = [
  { title: "Why this problem?", subtitle: "From a broad wellbeing challenge to a small, everyday opportunity.", cards: [
    { label: "01 / Starting point", title: "Wellbeing was too broad.", text: "Our team explored exercise, sleep, diet and social connection. We narrowed the challenge to physical activity, then to the motivation to keep going.", detail: "The focus: busy young professionals who want to return to a more active routine.", tone: "paper" },
    { label: "02 / Research signal", title: "Effort is immediate. Results aren’t.", text: "The interview synthesis highlighted delayed results and a desire to see progress sooner. Our persona also captured the fatigue and competing demands of a working day.", detail: "These signals suggested making small efforts visible, rather than asking people to commit to another demanding routine.", tone: "green" },
    { label: "03 / Design hypothesis", title: "Make a small walk feel worthwhile.", text: "FitsApp translates everyday steps into a growing tree. Numerical progress stays visible, while growth and customisation give it a personal meaning.", image: "overview", tone: "purple" },
    { label: "04 / Evidence boundary", title: "A promising direction, not proof.", text: "The process boards include interview summaries, desk research and AI-assisted exploration. AI-generated ideas are hypotheses, not participant evidence.", detail: "The available material does not establish participant counts or demonstrate a lasting increase in physical activity.", tone: "dark" },
  ] },
  { title: "What did we trade off?", subtitle: "The choices in the concept—and the costs that come with them.", cards: [
    { label: "01 / Scope", title: "Steps as the starting point.", text: "The concept focuses on walking instead of tracking every kind of workout. One input makes the relationship between movement and growth easier to explain.", detail: "The cost: steps do not represent all activities or all mobility needs. The current concept has a limited audience.", tone: "green" },
    { label: "02 / Feedback", title: "A tree and a number.", text: "The tree makes progress visual; the step count keeps it concrete. We kept both in the interface.", detail: "The cost: users still need to understand exactly how steps relate to tree growth.", image: "progress", tone: "paper" },
    { label: "03 / Ownership", title: "Make progress personal.", text: "Goals, a tree name and tree choices explore a sense of ownership. The prototypes also show locked options as future rewards.", detail: "The cost: unlocks add rules and complexity. A first release should keep the selection small.", image: "customisation", tone: "purple" },
    { label: "04 / Unresolved tension", title: "A nudge—or a reason to feel guilty?", text: "An early prototype explored shrinking the tree after missed activity. That could conflict with supporting people who already struggle with busy schedules.", detail: "Next comparison: regression versus paused growth and a forgiving restart. This is a proposed test, not a completed decision.", tone: "dark" },
  ] },
  { title: "How would we build it?", subtitle: "A proposed first release: one complete loop before more features.", cards: [
    { label: "01 / Core flow", title: "Choose. Walk. See. Return.", text: "Set a goal and name a tree. Connect activity data. Walk, then see the step total and corresponding growth. Return to continue towards the goal.", detail: "MVP: the phone experience, one clear growth rule and a small set of tree choices.", tone: "purple" },
    { label: "02 / Data & logic", title: "Keep the feedback trustworthy.", text: "Proposed iOS approach: read authorised step totals through HealthKit, map goal progress to defined tree stages, and save goals and earned unlocks.", detail: "Refresh totals instead of adding the same steps twice. Keep real activity separate from visual rewards and show the latest update time.", tone: "paper" },
    { label: "03 / Boundaries", title: "Not everything belongs in v1.", text: "Watch feedback and widgets were explored in the presentation. They can follow once the phone’s core loop works reliably.", detail: "Handle permission denied and delayed data separately from an inactive day. Missing data must not trigger a penalty.", image: "watch", tone: "green" },
    { label: "04 / Why not AI?", title: "The core loop doesn’t need it.", text: "Step totals, chosen goals and explicit growth rules can deliver predictable feedback. AI is not necessary for that job.", detail: "This is a build proposal. Live synchronisation, persistence and cross-device behaviour have not been verified by the presentation alone.", tone: "dark" },
  ] },
  { title: "How would we know it works?", subtitle: "Separate what the project shows from what still needs evidence.", cards: [
    { label: "01 / Current outcome", title: "A focused concept to test.", text: "The documented outcome includes a research framing, paper sketches and interface concepts for progress, goals, customisation and companion surfaces.", detail: "There are no verified usability or behaviour-change results in the supplied material. The following studies are proposed next steps.", tone: "paper" },
    { label: "02 / Comprehension test", title: "Can people explain the growth?", text: "Ask participants to set a goal, inspect their tree and explain what would make it grow. Observe hesitation, mistaken expectations and whether they need help.", detail: "Use these observations to refine the relationship between steps, goals and rewards before expanding the feature set.", tone: "purple" },
    { label: "03 / Recovery test", title: "What happens after a missed day?", text: "Compare shrinking-tree and paused-growth prototypes in a missed-day scenario. Ask what each communicates and what users would do next.", detail: "Look for understanding and emotional response. A stated intention to return is not evidence that someone actually will.", tone: "green" },
    { label: "04 / Longer-term question", title: "Does it last beyond novelty?", text: "A longer study would examine repeat use, returns after inactive periods and changes relative to participants’ own activity baselines.", detail: "The hypothesis: visible, personal progress supports sustained movement. More app opens alone would not establish that outcome.", tone: "dark" },
  ] },
];

export default function FitsAppStory() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];
  return <section className="fits-story" aria-label="FitsApp case study chapters">
    <nav className="fits-story-tabs" aria-label="Choose a chapter">{chapters.map((item, i) => <button key={item.title} type="button" aria-pressed={i === active} onClick={() => setActive(i)}><span>0{i + 1}</span>{item.title}</button>)}</nav>
    <div className="fits-story-heading" aria-live="polite" aria-atomic="true"><p className="fits-story-kicker">CHAPTER 0{active + 1} / 04</p><h2>{chapter.title}</h2><p>{chapter.subtitle}</p></div>
    <div className="fits-story-grid" id="fits-story-panel">{chapter.cards.map(card => <article className={`fits-story-card fits-story-card--${card.tone}`} key={card.title}>
      <p className="fits-story-kicker">{card.label}</p><h3>{card.title}</h3>
      {card.image && <a className="fits-story-image" href={`/fitsapp-case/${card.image}.png`} target="_blank" rel="noreferrer" aria-label={`Enlarge FitsApp ${card.image} presentation image (opens in a new tab)`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/fitsapp-case/${card.image}.png`} alt={`FitsApp presentation showing ${card.image}`} />
      </a>}
      <p>{card.text}</p>{card.detail && <p className="fits-story-detail">{card.detail}</p>}
    </article>)}</div>
    <div className="fits-story-controls"><button type="button" disabled={active === 0} onClick={() => setActive(active - 1)} aria-label="Previous chapter" aria-controls="fits-story-panel">‹</button><div className="fits-story-dots" aria-label="Chapter pagination">{chapters.map((item, i) => <button type="button" key={item.title} aria-label={`Chapter ${i + 1}: ${item.title}`} aria-current={i === active ? "step" : undefined} onClick={() => setActive(i)}><span /></button>)}</div><button type="button" disabled={active === 3} onClick={() => setActive(active + 1)} aria-label="Next chapter" aria-controls="fits-story-panel">›</button></div>
  </section>;
}
