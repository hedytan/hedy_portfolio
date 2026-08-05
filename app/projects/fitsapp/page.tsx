import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FitsApp — Case Study · Hedy Tan",
  description: "A team fitness app that boosts motivation to stay physically active — Apple Foundation Program.",
};

/* ── content ─────────────────────────────────────────────── */

const meta = [
  { k: "Timeline", v: ["4 weeks", "Apple Foundation Program"] },
  { k: "Team", v: ["Kiwi Kuties", "5 members"] },
  { k: "My Role", v: ["UX Research", "UI Design", "Team Lead"] },
  { k: "Tools", v: ["Figma", "Miro", "SwiftUI"] },
];

const team = ["Xinyi (Cindy) Hu", "Hedy Tan Wei Qian", "Callum Rice", "Stanley Diomampo", "Angelo Sayas"];

const process = [
  { n: "1", t: "Engage", items: ["Big Idea", "Essential Question", "Challenge"] },
  { n: "2", t: "Research", items: ["Guiding Questions", "Interviews", "Findings Wall"] },
  { n: "3", t: "Synthesis", items: ["Summarise", "Persona", "Problem Statement"] },
  { n: "4", t: "Refine", items: ["Refined Challenge", "Ideation"] },
  { n: "5", t: "Design", items: ["Prototype", "Reflection"] },
];

const findings = [
  { n: "01", t: "Starting is the hardest part.", p: "Laziness, busy schedules, delayed results, and overwhelming workouts all stop people before they begin — or make them quit soon after.", arrow: "Lower the barrier to the first move." },
  { n: "02", t: "Motivation is intrinsic — but fragile.", p: "Stress relief, health, and pride in small wins drive people. But after a long day, that motivation is the first thing to disappear.", arrow: "Protect motivation, don't demand it." },
  { n: "03", t: "Data makes progress feel real.", p: "Closing rings, GitHub-style streaks, and smartwatch data turn effort into visible, shareable dopamine hits.", arrow: "Visualise progress; reward small wins." },
  { n: "04", t: "Routine beats intensity.", p: "Short, repeatable, enjoyable activity sustains far better than extreme workouts. Consistency is the real goal.", arrow: "Build a habit, not a bootcamp." },
];

const synthesis = [
  "Numbers and data motivate users by quickly communicating their progress.",
  "Users feel motivated through rewards — competition and/or results.",
  "Establishing a routine and building on basic exercises is most effective for maintaining exercise.",
  "Personal goals incite physical activity — for tracking and for the future as one gets older.",
  "A visual, gamified representation of health data can motivate physical activity.",
];

const takeaways = [
  "Leading a five-person team meant turning scattered ideas into one shared challenge — alignment mattered more than any single feature.",
  "Triangulating Gen-AI personas, real interviews, and desk research surfaced patterns none of the three showed alone.",
  "The strongest insight was emotional, not technical: people don't lack tools, they lack sustained motivation.",
  "Refining the challenge from “encourage engagement” to “boost motivation to stay active” sharpened every later decision.",
];

const nextSteps = [
  "Translate the problem statement into lo-fi wireframes and a testable prototype.",
  "Prototype the gamified data visualisation — the streaks and rings that make progress feel real.",
  "A second round of interviews with busy young professionals like our persona, Mia.",
  "Explore an Apple Watch companion and widget for glanceable, low-friction nudges.",
];

/* ── page ────────────────────────────────────────────────── */

export default function FitsApp() {
  return (
    <main className="bg-bg text-ink">
      {/* nav */}
      <nav className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-8 py-5 bg-gradient-to-b from-bg/95 to-transparent backdrop-blur-sm">
        <Link href="/" className="text-[15px] text-soft hover:text-ink no-underline transition-colors">← back home</Link>
        <span className="text-[11px] font-medium tracking-[.22em] uppercase text-soft">Case Study 02 — FitsApp</span>
      </nav>

      {/* hero */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16">
        <Reveal as="p" className="text-[11.5px] font-medium tracking-[.22em] uppercase text-amber mb-6">UX Research · Team · 2025</Reveal>
        <Reveal as="h1" delay={1} className="font-serif text-[clamp(48px,9vw,110px)] leading-none tracking-tight">FitsApp</Reveal>
        <Reveal as="p" delay={2} className="mt-6 max-w-[46ch] text-lg italic font-serif text-soft">
          A fitness app that boosts motivation to stay physically active — built with team Kiwi Kuties in the Apple Foundation Program.
        </Reveal>
      </header>

      {/* process highlights */}
      <Section eyebrow="Process Highlights" title="Challenge and responsibilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 mt-2">
          <ChallengeBlock label="Challenge">
            Boost motivation to stay physically active — for people who want to be more active but can&apos;t sustain it on their own.
          </ChallengeBlock>
          <ChallengeBlock label="Opportunity">
            Use technology — data, rewards, and gentle prompts — to spark the intrinsic motivation that keeps people moving.
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

      {/* the team */}
      <Section eyebrow="The Team" title="Kiwi Kuties">
        <Reveal>
          <p className="font-serif italic text-[clamp(20px,2.6vw,27px)] leading-[1.5] max-w-[30ch]">
            &ldquo;We don&apos;t crash — we hatch.&rdquo;
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-3 mt-8">
          {team.map((name) => (
            <Reveal key={name}>
              <span className={`inline-block px-4 py-2 rounded-full border border-faint text-[14px] ${name.startsWith("Hedy") ? "bg-amber/15 border-amber/40 text-ink" : "bg-panel text-soft"}`}>
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* background / big idea */}
      <Section eyebrow="Background" title="From a big idea to an essential question">
        <Lead>
          Our team&apos;s big idea was <b>exercise</b> — physical health, movement, and the habits around it. Collaborative mapping kept circling one tension: people know exercise matters, but <b>knowing isn&apos;t moving.</b> That became our essential question:
        </Lead>
        <div className="mt-8 mb-4">
          <Reveal>
            <p className="font-serif italic text-[clamp(22px,3.2vw,32px)] leading-[1.4] max-w-[24ch]">
              How can technology improve physical activity?
            </p>
            <p className="mt-4 text-[11.5px] font-medium tracking-[.22em] uppercase text-soft">motivations · target · engagement</p>
          </Reveal>
        </div>
        <Figure src="/fitsapp/process/challenge-mindmap.png" caption="Challenge mind-mapping — generating challenge statements around the essential question." />
        <Lead>
          Those statements converged on one team challenge: <b>encourage engagement with physical activities</b>, driven by intrinsic motivation and technology.
        </Lead>
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
      <Section eyebrow="Research" title="Guiding questions, interviews, and a findings wall">
        <Lead>
          We opened the problem space with <b>guiding questions across eight lenses</b> — What, Who, Where, When, Why, How, Should/Would, and What if — then grouped and prioritised them into themes: tech, habits, target group, and physical activities.
        </Lead>
        <Figure src="/fitsapp/process/guiding-questions.png" caption="Guiding questions board — generating and grouping questions across eight lenses." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
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

        <Figure src="/fitsapp/process/findings-wall.png" caption="The findings wall — combining interviews, desk research, and Gen-AI personas into one map." />
        <Figure src="/fitsapp/process/summary.png" caption="Summarising sources across motive, engagement, and activity — Gen AI, interviews, and desk research." />
      </Section>

      {/* synthesis */}
      <Section eyebrow="Synthesis" title="What the research told us">
        <div className="mt-2">
          {synthesis.map((s, i) => (
            <Reveal key={i}>
              <div className="grid grid-cols-[auto_1fr] gap-5 py-6 border-t border-faint last:border-b">
                <span className="font-serif italic text-[18px] text-amber">{`0${i + 1}`}</span>
                <p className="text-soft text-[16px] leading-relaxed max-w-[62ch]">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* persona */}
      <Section eyebrow="Synthesis" title="The person we designed for">
        <Reveal>
          <div className="bg-panel border border-faint rounded-2xl p-8 max-w-[760px]">
            <h3 className="font-serif text-[24px] mb-1">Mia Thompson, 28</h3>
            <p className="text-[13.5px] text-soft mb-6">Junior Graphic Designer · suburban Australia · works a 9–5 desk job, socialises on weekends.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <span className="block text-[10.5px] font-medium tracking-[.18em] uppercase text-soft mb-2">Goals</span>
                <p className="text-[14px]">Stay fit, exercise with friends, and feel less tired — without it eating her limited time.</p>
              </div>
              <div>
                <span className="block text-[10.5px] font-medium tracking-[.18em] uppercase text-soft mb-2">Pains</span>
                <p className="text-[14px]">Can&apos;t stick to it without a routine; feels guilty after missing a day; motivation drops after work.</p>
              </div>
              <div>
                <span className="block text-[10.5px] font-medium tracking-[.18em] uppercase text-soft mb-2">Triggers</span>
                <p className="text-[14px]">Deadlines, gym anxiety, exhaustion, and weather all pull her away from moving.</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Figure src="/fitsapp/process/persona.png" caption="Domain persona — Mia Thompson, crafted from research and a Gen-AI proto-persona." />
        <Figure src="/fitsapp/process/problem-statement.png" caption="Problem / opportunity statement — who they are, what they need, and why." />
        <Lead>
          The statement that anchored the design: <b>people who aren&apos;t currently motivated to exercise but want to become more active need to ignite motivation within themselves to move now</b> — because they find it hard to start as life gets busier.
        </Lead>
      </Section>

      {/* refined challenge */}
      <Section eyebrow="The Pivot" title="Refining the challenge">
        <Lead>
          The research shifted the challenge from a broad <b>&ldquo;encourage engagement with physical activities&rdquo;</b> to something sharper and more human:
        </Lead>
        <div className="mt-8">
          <Reveal>
            <p className="font-serif italic text-[clamp(24px,3.6vw,38px)] leading-[1.35] max-w-[20ch]">
              Boost motivation to stay physically active.
            </p>
            <p className="mt-5 text-[11.5px] font-medium tracking-[.22em] uppercase text-soft">for personal satisfaction</p>
          </Reveal>
        </div>
      </Section>

      {/* final designs — placeholder */}
      <Section eyebrow="Final Designs" title="Design & prototype">
        <Reveal>
          <div className="bg-panel border border-faint border-dashed rounded-2xl p-12 text-center">
            <p className="text-soft text-[15.5px] max-w-[52ch] mx-auto">The ideation, wireframes, and high-fidelity FitsApp screens are next — this case study will grow as the design phase lands.</p>
          </div>
        </Reveal>
      </Section>

      {/* reflection */}
      <Section eyebrow="Reflections" title="What we learned. What's next.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 mt-4">
          <div>
            <Reveal as="h3" className="text-[20px] font-semibold text-ink mb-6">Key takeaways</Reveal>
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
      </Section>

      {/* foot nav */}
      <div className="flex justify-between items-center gap-5 max-w-content mx-auto px-8 py-14 border-t border-faint">
        <Link href="/" className="no-underline group">
          <span className="block text-[11px] font-medium tracking-[.22em] uppercase text-soft mb-1.5">Back</span>
          <span className="text-[17px] italic font-serif group-hover:text-amber transition-colors">← home</span>
        </Link>
        <Link href="/projects/resonance" className="no-underline group text-right">
          <span className="block text-[11px] font-medium tracking-[.22em] uppercase text-soft mb-1.5">Next</span>
          <span className="text-[17px] italic font-serif group-hover:text-amber transition-colors">Resonance →</span>
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

function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <Reveal>
      <figure className="mt-10">
        <div className="rounded-2xl overflow-hidden border border-faint bg-white/[0.02]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={caption} loading="lazy" className="w-full h-auto block" />
        </div>
        <figcaption className="mt-3 text-[12.5px] text-soft">{caption}</figcaption>
      </figure>
    </Reveal>
  );
}
