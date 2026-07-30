import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resonance — Case Study · Hedy Tan",
  description: "An emotion-first music app, designed and built end-to-end in SwiftUI.",
};

/* ── content ─────────────────────────────────────────────── */

const meta = [
  { k: "Timeline", v: ["12 weeks", "5 iterations · 1 pivot"] },
  { k: "Disciplines", v: ["UX Design", "UI Design", "iOS Development"] },
  { k: "Responsibilities", v: ["UX Research", "Interaction Design", "SwiftUI Dev", "Prototyping"] },
  { k: "Tools", v: ["Figma", "SwiftUI", "PencilKit", "Deezer API"] },
];

const process = [
  { n: "1", t: "Research", items: ["Guiding Questions", "Group Interview", "Secondary Research", "Key Findings"] },
  { n: "2", t: "Synthesis", items: ["User Personas", "The Gap"] },
  { n: "3", t: "Ideation", items: ["Board Concept", "The Pivot", "Value Variation"] },
  { n: "4", t: "Final Designs", items: ["Six Screens", "Data Model"] },
  { n: "5", t: "Reflection", items: ["What Worked", "What's Next"] },
];

const findings = [
  { n: "01", t: "Music is mood-driven first.", p: "Every participant described listening by emotional state — not artist loyalty, not genre. Mood was the primary organising principle for every person we spoke to.", arrow: "Mood shapes replace profile photos." },
  { n: "02", t: "Connection is to the feeling, not the person.", p: "Several listen to music in languages they don't understand — and still feel connected. What an artist shares resonates more reliably as emotional signal than as information.", arrow: "The feeling appears before the words." },
  { n: "03", t: "Honest sharing has no home.", p: "Social platforms reward performance over honesty. Artists chase snippets that go viral rather than building the sustained presence that creates genuine bonds.", arrow: "No followers, likes, or rankings. Anywhere." },
  { n: "04", t: "Music discovery is social, not algorithmic.", p: "The most trusted path to new music is still a person — a friend, a room, a recommendation. Algorithmic discovery was treated with ambivalence across the board.", arrow: "A feed of feelings, not an algorithm." },
];

const personas = [
  {
    role: "Artist",
    name: "Mia, 23",
    bio: "Independent musician — writes, records, self-releases.",
    goal: "Share the creative process: the moods, references, and half-finished ideas that existed before the finished track.",
    pain: "Instagram is too polished. Notion is too private. Nowhere to share honestly.",
  },
  {
    role: "Fan",
    name: "Leo, 20",
    bio: "Music enthusiast — streams across genres, follows indie artists.",
    goal: "Go beyond the music — discover the references and emotional context. Feel like an insider, not a passive consumer.",
    pain: "Artist content is scattered. A tweet here, a Story there. Nothing curated or lasting.",
  },
];

const decisions = [
  { t: "Mood shapes replace profile photos.", p: "The feed leads with the artist's mood — an organic, imperfect shape — instead of a face. Feelings aren't clean, and the shapes reflect that." },
  { t: "Every metric is gone.", p: "No followers, no likes, no rankings. A card no longer says how popular an artist is. It says what they're feeling right now." },
  { t: "The Connection screen has no tab bar.", p: "I built it both ways. With the tab bar it read as information; without it, an arrival. That difference decided the design." },
  { t: "Some feelings can't be named — so you draw them.", p: "When no preset fits, artists draw their mood on a freeform canvas and name it after — once the shape exists, naming becomes easier." },
];

const features = [
  { n: "01", t: "Welcome", img: "/resonance/welcome.png", p: "The word 'resonance' breathes on a 4-second loop, five phrases orbiting it. Every other platform opens with a feed. This one asks you to stop first." },
  { n: "02", t: "Feed", img: "/resonance/feed.png", p: "What you see is not a face — it is a feeling. Mood shapes, names, quotes. No followers, no likes. The only figure on a card is a resonance count." },
  { n: "03", t: "Moment", img: "/resonance/moment.png", p: "The mood shape breathes at the top with a radial glow; the quote, song, and resonance list follow. Most platforms bury the feeling. This one leads with it." },
  { n: "04", t: "Connection", img: "/resonance/connection.png", p: "Two shapes joined by a gradient line, a dot travelling between them. Adaptive copy names it — 'His Joy unlocked your Wonder. That's a real connection.'" },
  { n: "05", t: "Express", img: "/resonance/express.png", p: "A four-step sequence, not a form: choose a feeling, find the words, add an image, link the song. Publish stays inactive until mood and quote are both filled." },
  { n: "06", t: "Draw Mood", img: "/resonance/draw-mood.png", p: "When no preset fits, artists draw their mood on a PencilKit canvas and name it after. Once the shape exists outside your head, naming becomes easier." },
];

const moods = [
  { t: "Joy", c: "#C9922E", s: "asymmetric blob" },
  { t: "Melancholy", c: "#2E3A5C", s: "weighted teardrop" },
  { t: "Wonder", c: "#3C7A85", s: "radiant star" },
  { t: "Tender", c: "#6E3A48", s: "soft circle" },
  { t: "Urgency", c: "#B5432E", s: "hard diamond" },
  { t: "Awe", c: "#3A5B9E", s: "concentric rings" },
  { t: "Custom", c: "#8A8A85", s: "you draw it" },
];

const takeaways = [
  "A value proposition only matters once it changes the screens. “Emotional Connection First” was an empty phrase until it removed the board.",
  "Building both versions beats arguing about one — the tab-bar / no-tab-bar test is what decided the Connection screen.",
  "Constraints clarify. Removing every metric forced each card to say what someone feels, not how popular they are.",
  "Defining the data model first made the AI-assisted build reliable — a clear MoodType enum gave every prompt a complete spec.",
];

const nextSteps = [
  "An Emotional Map — how an artist’s palette shifts across a year.",
  "Full Spotify integration — stream the whole track, not a 30-second preview.",
  "A second round of testing with real independent artists.",
  "Discovery that stays as honest as the moment itself.",
];

/* ── page ────────────────────────────────────────────────── */

export default function Resonance() {
  return (
    <main className="bg-bg text-ink">
      {/* nav */}
      <nav className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-8 py-5 bg-gradient-to-b from-bg/95 to-transparent backdrop-blur-sm">
        <Link href="/" className="text-[15px] text-soft hover:text-ink no-underline transition-colors">← back home</Link>
        <span className="text-[11px] font-medium tracking-[.22em] uppercase text-soft">Case Study 01 — Resonance</span>
      </nav>

      {/* hero */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16">
        <Reveal as="p" className="text-[11.5px] font-medium tracking-[.22em] uppercase text-amber mb-6">iOS · SwiftUI · 2026</Reveal>
        <Reveal as="h1" delay={1} className="font-serif text-[clamp(48px,9vw,110px)] leading-none tracking-tight">Resonance</Reveal>
        <Reveal as="p" delay={2} className="mt-6 max-w-[44ch] text-lg italic font-serif text-soft">
          An emotion-first music app — artists share the feeling behind a song, fans respond with how it resonated.
        </Reveal>
      </header>

      {/* process highlights */}
      <Section eyebrow="Process Highlights" title="Design challenge and responsibilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 mt-2">
          <ChallengeBlock label="Challenge">
            Create a lasting connection between musicians and their listeners — not just another way to publish content.
          </ChallengeBlock>
          <ChallengeBlock label="Opportunity">
            Build the first space where an artist can share the feeling behind a song honestly, and a fan can respond with how it resonated.
          </ChallengeBlock>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-9 mt-16 pt-12 border-t border-faint">
          {meta.map((m) => (
            <Reveal key={m.k}>
              <span className="block text-[11px] font-medium tracking-[.2em] uppercase text-ink mb-3">{m.k}</span>
              <ul className="space-y-1.5">
                {m.v.map((v) => (
                  <li key={v} className="text-[14.5px] text-soft">{v}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* background / the gap */}
      <Section eyebrow="Background" title="The gap Resonance was built for">
        <Lead>
          Most people can name a song that changed something for them — but almost no one knows the story behind why it was made. <b>The gap between what an artist feels when they create, and what a listener receives when they hear</b>, is a real and underexplored design problem.
        </Lead>
        <Lead>
          The research pointed toward a gap that was <b>not primarily technical</b>. The tools to share already exist. The barrier is social: <b>no platform makes honest sharing feel normal, expected, or safe.</b> Resonance is a response to that gap.
        </Lead>
        <div className="mt-14 max-w-[640px]">
          <Reveal>
            <p className="font-serif italic text-[clamp(20px,2.6vw,27px)] leading-[1.55]">
              &ldquo;A friend wrote a caption about what she was going through when she made a track. She deleted it before posting. Too honest. Wrong platform.&rdquo;
            </p>
            <p className="mt-5 text-[11.5px] font-medium tracking-[.22em] uppercase text-soft">the moment that started it</p>
          </Reveal>
        </div>
      </Section>

      {/* the process */}
      <Section eyebrow="Overview" title="The process">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 mt-4">
          {process.map((s) => (
            <Reveal key={s.n}>
              <div className="flex flex-col items-center text-center">
                <span className="w-11 h-11 rounded-full bg-amber/15 border border-amber/30 text-amber font-serif text-lg flex items-center justify-center mb-4">{s.n}</span>
                <h3 className="font-semibold text-ink mb-3">{s.t}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="text-[13px] text-soft leading-snug">{it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* research */}
      <Section eyebrow="Research" title="Four findings shaped everything">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {findings.map((f) => (
            <Reveal key={f.n}>
              <div className="bg-panel border border-faint rounded-2xl p-8 h-full">
                <span className="block text-[11px] font-medium tracking-[.22em] uppercase text-amber mb-4">Finding {f.n}</span>
                <h3 className="font-serif italic text-[17.5px] leading-[1.5] mb-3">{f.t}</h3>
                <p className="text-[14.5px] text-soft">{f.p}</p>
                <span className="block mt-4 pt-3.5 border-t border-faint text-[13.5px]">→ {f.arrow}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* synthesis — personas */}
      <Section eyebrow="Synthesis" title="Two people the design answered to">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {personas.map((p) => (
            <Reveal key={p.role}>
              <div className="bg-panel border border-faint rounded-2xl p-8 h-full">
                <span className="block text-[11px] font-medium tracking-[.22em] uppercase text-amber mb-3">{p.role}</span>
                <h3 className="font-serif text-[22px] mb-1">{p.name}</h3>
                <p className="text-[13.5px] text-soft mb-6">{p.bio}</p>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10.5px] font-medium tracking-[.18em] uppercase text-soft mb-1.5">Goal</span>
                    <p className="text-[14px]">{p.goal}</p>
                  </div>
                  <div>
                    <span className="block text-[10.5px] font-medium tracking-[.18em] uppercase text-soft mb-1.5">Pain</span>
                    <p className="text-[14px] italic font-serif">{p.pain}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-soft text-[15px] max-w-[62ch]">Every navigation decision was evaluated against one question: does this make Mia feel safe enough to share honestly, and does it make Leo feel genuinely connected to what she&apos;s sharing?</p>
        </Reveal>
      </Section>

      {/* ideation — pivot */}
      <Section eyebrow="Ideation" title="The pivot — week 10">
        <Lead>
          It began as a Pinterest-style content board. Then my tutor asked a question I couldn&apos;t answer: <b>what does &lsquo;Emotional Connection First&rsquo; look like as actual screens?</b> I had the phrase; I didn&apos;t have the product.
        </Lead>
        <Lead>
          That silence was clarifying. I had been building <b>a content management tool labelled with an emotional value</b>. So iteration 4 started from a blank page — if I remove the board, what replaces it? The answer was <b>the moment: one mood, one thought, one song.</b>
        </Lead>
      </Section>

      {/* the solution — decisions */}
      <Section eyebrow="Design Decisions" title="Four decisions that carry the design">
        <div className="mt-2">
          {decisions.map((d, i) => (
            <Reveal key={i}>
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 py-11 border-t border-faint last:border-b">
                <span className="font-serif italic text-[22px] text-amber">{`0${i + 1}`}</span>
                <div>
                  <h3 className="font-serif italic text-[21px] mb-3">{d.t}</h3>
                  <p className="text-soft text-[15.5px] max-w-[60ch]">{d.p}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* design system */}
      <Section eyebrow="Design System" title="One vocabulary the whole app is built on">
        <Lead>
          Resonance is built around one question: <b>what is the smallest unit of emotional data?</b> The answer — a mood, a thought, a song — shaped every struct and every screen. At the centre is <b>MoodType</b>, a seven-case Swift enum. Each case carries its own colour and its own hand-tuned shape, so a change in one place propagates to every card, feed, and glow.
        </Lead>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-12">
          {moods.map((m) => (
            <Reveal key={m.t}>
              <div className="flex flex-col items-center text-center">
                <span className="w-14 h-14 rounded-full mb-3 border border-white/10" style={{ backgroundColor: m.c }} />
                <span className="text-[13.5px] text-ink">{m.t}</span>
                <span className="text-[11.5px] text-soft mt-0.5">{m.s}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8 mt-16 pt-12 border-t border-faint">
          <Reveal>
            <h3 className="text-[17px] font-semibold text-ink mb-3">One vocabulary</h3>
            <p className="text-[15.5px] text-soft leading-relaxed max-w-[46ch]">Names in DM Mono, quotes in Lora italic, moods in that seven-case enum. Because the compiler forces every view to handle all seven cases, the emotional vocabulary can never drift between the feed, a moment, and the mood selector.</p>
          </Reveal>
          <Reveal>
            <h3 className="text-[17px] font-semibold text-ink mb-3">Two lifecycles, kept apart</h3>
            <p className="text-[15.5px] text-soft leading-relaxed max-w-[46ch]"><b className="font-normal text-ink">PostStore</b> holds what was felt and shared; <b className="font-normal text-ink">MusicManager</b> handles what is heard. Post data persists for the session while audio is transient — separating them means a view that shows posts never needs to know how playback works.</p>
          </Reveal>
        </div>
      </Section>

      {/* final designs — the app */}
      <Section eyebrow="Final Designs" title="Six screens. Each one a decision.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {features.map((f) => (
            <Reveal key={f.n}>
              <div className="bg-panel border border-faint rounded-2xl p-7 h-full flex flex-col items-center text-center">
                <div className="w-[150px] rounded-[20px] overflow-hidden bg-black border border-white/10 mb-6 aspect-[9/19.5] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                  <Image
                    src={f.img}
                    alt={`Resonance — ${f.t} screen`}
                    width={1206}
                    height={2622}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="block text-[11px] font-medium tracking-[.22em] uppercase text-amber mb-2">{f.n} — {f.t}</span>
                <p className="text-[14px] text-soft leading-relaxed max-w-[34ch]">{f.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* reflection */}
      <Section eyebrow="Reflections" title="Post-design outcome">
        <Lead>
          Emotional Connection First genuinely shaped every decision — not as a phrase in a brief, but as <b>a constraint that eliminated options.</b> Removing follower counts, inverting the hierarchy, building the Connection screen without a tab bar — each came from asking whether it served emotional connection or contradicted it.
        </Lead>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 mt-16">
          <div>
            <Reveal as="h3" className="text-[20px] font-semibold text-ink mb-6">My key takeaways</Reveal>
            <ol className="space-y-5">
              {takeaways.map((t, i) => (
                <Reveal key={i} as="li" className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-serif italic text-amber text-[17px] leading-tight">{`0${i + 1}`}</span>
                  <span className="text-[15.5px] text-soft leading-relaxed">{t}</span>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <Reveal as="h3" className="text-[20px] font-semibold text-ink mb-6">Next steps</Reveal>
            <ol className="space-y-5">
              {nextSteps.map((t, i) => (
                <Reveal key={i} as="li" className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-serif italic text-amber text-[17px] leading-tight">{`0${i + 1}`}</span>
                  <span className="text-[15.5px] text-soft leading-relaxed">{t}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-20">
          <Reveal>
            <p className="font-serif italic text-[clamp(22px,3.2vw,30px)] leading-[1.5] max-w-[24ch]">
              The app succeeds when two people realise they felt the same thing — even if they&apos;ve never met.
            </p>
            <p className="mt-5 text-[11.5px] font-medium tracking-[.22em] uppercase text-soft">that&apos;s still the measure</p>
          </Reveal>
        </div>
      </Section>

      {/* foot nav */}
      <div className="flex justify-between items-center gap-5 max-w-content mx-auto px-8 py-14 border-t border-faint">
        <Link href="/" className="no-underline group">
          <span className="block text-[11px] font-medium tracking-[.22em] uppercase text-soft mb-1.5">Back</span>
          <span className="text-[17px] italic font-serif group-hover:text-amber transition-colors">← home</span>
        </Link>
      </div>
    </main>
  );
}

/* ── building blocks ─────────────────────────────────────── */

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-content mx-auto px-8">
        <Reveal as="p" className="text-[11.5px] font-medium tracking-[.22em] uppercase text-soft mb-4">{eyebrow}</Reveal>
        <Reveal as="h2" delay={1} className="font-serif text-[clamp(26px,3.6vw,40px)] leading-tight tracking-tight max-w-[22ch]">{title}</Reveal>
        <div className="h-px w-full bg-faint mt-9 mb-12" />
        {children}
      </div>
    </section>
  );
}

// Dimmed body paragraph; wrap key phrases in <b> to surface them bright.
function Lead({ children }: { children: React.ReactNode }) {
  return (
    <Reveal as="p" className="text-[clamp(17px,1.9vw,21px)] leading-[1.6] text-soft max-w-[68ch] mt-6 first:mt-0 [&_b]:font-normal [&_b]:text-ink">
      {children}
    </Reveal>
  );
}

function ChallengeBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <h3 className="text-[19px] font-semibold text-ink mb-3">{label}</h3>
      <p className="text-[16px] leading-relaxed text-soft max-w-[46ch]">{children}</p>
    </Reveal>
  );
}
