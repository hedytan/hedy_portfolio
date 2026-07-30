import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resonance — Case Study · Hedy Tan",
  description: "An emotion-first music app, designed and built end-to-end in SwiftUI.",
};

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
  { n: "01", t: "Welcome", img: "/resonance/welcome.png", p: "The word 'resonance' breathes — scaling on a 4-second easeInOut loop. Five phrases orbit it at low opacity. A single button appears after two seconds. Every other platform opens with a feed. This one asks you to stop first." },
  { n: "02", t: "Feed", img: "/resonance/feed.png", p: "What you see is not a face — it is a feeling. Each card shows the artist's mood shape, their name, their quote. No follower counts, no likes, no engagement numbers. The only figure on a card is a resonance count." },
  { n: "03", t: "Moment", img: "/resonance/moment.png", p: "The mood shape sits at the top with a breathing animation and a radial glow. Below it: the mood label, the quote in large Lora italic, the song title. The resonance list comes last. Most platforms bury the emotional context. This one leads with it." },
  { n: "04", t: "Connection", img: "/resonance/connection.png", p: "Two shapes sit on opposite sides of the screen, joined by a gradient line with a dot travelling along it. Adaptive copy names what just happened — same mood: 'You're not alone.' Different moods: 'His Joy unlocked your Wonder. That's a real connection.'" },
  { n: "05", t: "Express", img: "/resonance/express.png", p: "A four-step sequence rather than a single form — choosing a feeling, finding the words, optionally adding an image, linking the song. The publish button stays inactive until both mood and quote are filled. A feeling without words is incomplete." },
  { n: "06", t: "Draw Mood", img: "/resonance/draw-mood.png", p: "When no preset fits, artists draw their mood on a PencilKit canvas. Eight colour swatches update the inking tool on selection. A name field lets the artist name the mood after drawing it — once the shape exists outside your head, naming becomes easier." },
];

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
        <Reveal delay={3}>
          <div className="mt-12 flex flex-wrap justify-center gap-x-11 gap-y-3.5 text-left">
            {[["Role", "Solo designer & developer"], ["Tools", "Figma · SwiftUI · PencilKit · Deezer API"], ["Timeline", "12 weeks · 5 iterations · 1 pivot"]].map(([k, v]) => (
              <div key={k}>
                <span className="block text-[11px] font-medium tracking-[.22em] uppercase text-soft mb-1.5">{k}</span>
                <span className="text-sm">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </header>

      {/* overview */}
      <Section eyebrow="Overview">
        <H2>Most platforms give artists more ways to publish. None give them a way to be honest.</H2>
        <Body>Resonance strips the artist–fan relationship down to a single emotional transaction: an artist shares a mood, a thought, and a song. A fan responds with how it resonated. The app names the connection between them.</Body>
        <Body>It began as a Pinterest-style content board — and became something else entirely after one question from my tutor I couldn't answer. This case study is about that pivot, and the working SwiftUI app that came out the other side.</Body>
      </Section>

      {/* problem */}
      <div className="py-24 px-8 max-w-[720px] mx-auto text-center">
        <Reveal>
          <p className="font-serif italic text-[clamp(21px,3vw,29px)] leading-[1.55]">
            &ldquo;A friend wrote a caption about what she was going through when she made a track. She deleted it before posting. Too honest. Wrong platform.&rdquo;
          </p>
          <p className="mt-6 text-[11.5px] font-medium tracking-[.22em] uppercase text-soft">the gap resonance was built for</p>
        </Reveal>
      </div>

      {/* research */}
      <Section eyebrow="Research">
        <H2>Four findings shaped everything.</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
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

      {/* personas */}
      <Section eyebrow="Users">
        <H2>Two people the whole design had to answer to.</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
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
          <p className="mt-8 text-soft text-[15px] max-w-[62ch]">Every navigation decision, every screen layout, and every interaction was evaluated against one question: does this make Mia feel safe enough to share honestly, and does it make Leo feel genuinely connected to what she&apos;s sharing?</p>
        </Reveal>
      </Section>

      {/* pivot */}
      <div className="py-8 px-8 max-w-content mx-auto">
        <Reveal>
          <div className="bg-panel border border-faint rounded-[22px] px-8 md:px-12 py-16 text-center">
            <p className="text-[11.5px] font-medium tracking-[.22em] uppercase text-soft">the pivot — week 10</p>
            <p className="font-serif italic text-[clamp(22px,3vw,30px)] leading-[1.5] max-w-[32ch] mx-auto mt-7">
              &ldquo;What does Emotional Connection First look like as actual screens?&rdquo;
            </p>
            <p className="mt-8 text-soft max-w-[56ch] mx-auto text-base">
              My tutor&apos;s question — and I couldn&apos;t answer it. I had the phrase; I didn&apos;t have the product. That silence was clarifying: I had been building a content management tool labelled with an emotional value. So iteration 4 started from a blank page — if I remove the board, what replaces it? The answer was the moment: one mood, one thought, one song.
            </p>
          </div>
        </Reveal>
      </div>

      {/* decisions */}
      <Section eyebrow="The Solution">
        <H2>Four decisions that carry the whole design.</H2>
        <div className="mt-6">
          {decisions.map((d, i) => (
            <Reveal key={i}>
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 py-12 border-t border-faint last:border-b">
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

      {/* features */}
      <Section eyebrow="The App">
        <H2>Six screens. Each one a decision.</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
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
      <Section eyebrow="Reflection">
        <H2>What worked. What&apos;s next.</H2>
        <Body>Emotional Connection First genuinely shaped every decision — not just as a phrase in a brief, but as a constraint that eliminated options. Removing follower counts, inverting the content hierarchy, building the Connection screen without a tab bar — each came from asking whether a decision served emotional connection or contradicted it.</Body>
        <Body>What I&apos;d push further is the artist side. The current app works well for a fan encountering a moment. It works less well for an artist building a body of emotional posts over time — there&apos;s no profile, no archive, no way to see how your emotional palette has shifted across a year. An Emotional Map view would be the next thing to build.</Body>
        <Body>On the technical side: Deezer previews cut off at 30 seconds. Full Spotify API integration — streaming the full track from the user&apos;s library — is the right next step, and the one I ran out of time to complete.</Body>
      </Section>

      {/* closing */}
      <div className="py-36 px-8 text-center">
        <Reveal>
          <p className="font-serif italic text-[clamp(22px,3.4vw,32px)] leading-[1.55] max-w-[26ch] mx-auto">
            The app succeeds when two people realise they felt the same thing — even if they&apos;ve never met.
          </p>
          <p className="mt-6 text-[11.5px] font-medium tracking-[.22em] uppercase text-soft">that&apos;s still the measure</p>
        </Reveal>
      </div>

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

function Section({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-8">
        <Reveal as="p" className="text-[11.5px] font-medium tracking-[.22em] uppercase text-soft mb-7">{eyebrow}</Reveal>
        {children}
      </div>
    </section>
  );
}
function H2({ children }: { children: React.ReactNode }) {
  return <Reveal as="h2" className="font-serif text-[clamp(26px,3.6vw,36px)] leading-tight tracking-tight mb-7 max-w-[24ch]">{children}</Reveal>;
}
function Body({ children }: { children: React.ReactNode }) {
  return <Reveal as="p" className="text-soft max-w-[64ch] text-[16.5px] mt-5 first:mt-0">{children}</Reveal>;
}
