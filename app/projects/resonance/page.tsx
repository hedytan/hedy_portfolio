import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resonance — Case Study · Hedy Tan",
  description: "An emotion-first music app, designed and built end-to-end in SwiftUI.",
};

const findings = [
  { n: "01", t: "Music is mood-driven first.", p: "Every participant described listening by emotional state — not artist loyalty, not genre.", arrow: "Mood shapes replace profile photos." },
  { n: "02", t: "Connection is to the feeling, not the person.", p: "Several listen to music in languages they don't understand — and still feel it.", arrow: "The feeling appears before the words." },
  { n: "03", t: "Honest sharing has no home.", p: "Social platforms reward performance over honesty. Instagram is too polished; Notion too private.", arrow: "No followers, likes, or rankings. Anywhere." },
];

const decisions = [
  { t: "Mood shapes replace profile photos.", p: "The feed leads with the artist's mood — an organic, imperfect shape — instead of a face. Feelings aren't clean, and the shapes reflect that." },
  { t: "Every metric is gone.", p: "No followers, no likes, no rankings. A card no longer says how popular an artist is. It says what they're feeling right now." },
  { t: "The Connection screen has no tab bar.", p: "I built it both ways. With the tab bar it read as information; without it, an arrival. That difference decided the design." },
  { t: "Some feelings can't be named — so you draw them.", p: "When no preset fits, artists draw their mood on a freeform canvas and name it after — once the shape exists, naming becomes easier." },
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
        <H2>Three findings shaped everything.</H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
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
