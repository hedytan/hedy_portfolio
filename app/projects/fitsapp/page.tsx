import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitsApp — Small steps. Something growing. · Hedy Tan",
  description: "Exploring how visible progress and playful tree growth could help busy young professionals return to everyday movement.",
};

const insights = [
  { title: "Progress can feel far away.", source: "Interview synthesis", text: "The interview summary highlighted delayed results and a desire to see progress sooner.", implication: "Give everyday effort an immediate visual response." },
  { title: "Movement has to fit real life.", source: "Problem framing & persona", text: "Busy schedules and fatigue shaped our focus on young professionals who want to become active again.", implication: "Start with walking that can fit around existing routines." },
  { title: "How we show data matters.", source: "Interview synthesis", text: "Our summary connected engagement with the way results and progression are presented.", implication: "Pair a readable step count with something people can watch grow." },
];
const decisions = [
  { title: "One everyday input: steps", choice: "We narrowed the concept to step data, giving the experience a simple input and a clear visual response.", tradeoff: "Steps do not represent every kind of activity or every person's mobility. This focus limits who the concept currently serves." },
  { title: "A tree, with the numbers still there", choice: "Tree growth gives progress a visual form. Keeping the step count alongside it preserves a concrete reference.", tradeoff: "The relationship between steps, growth and rewards needs to be understandable. A delightful animation alone cannot explain the system." },
  { title: "Encouragement versus pressure", choice: "An early prototype explored negative visual change after missed activity as an incentive to return.", tradeoff: "This sits in tension with our aim to avoid guilt. A next iteration should compare regression with paused growth and more forgiving recovery." },
];

export default function FitsApp() {
  return (
    <main className="bg-bg text-ink">
      <nav aria-label="Project navigation" className="flex items-center justify-between gap-4 max-w-content mx-auto px-6 md:px-8 py-6 border-b border-faint">
        <Link href="/#work" className="py-3 text-sm text-soft hover:text-ink">← All projects</Link>
        <span className="font-mono text-xs text-soft">02 / FitsApp</span>
      </nav>
      <header className="max-w-content mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-12">
        <p className="text-xs uppercase tracking-[.2em] text-soft mb-5">FitsApp · A team design project</p>
        <h1 className="font-serif text-[clamp(42px,7vw,88px)] leading-[1.07] tracking-tight max-w-[15ch]">Small steps.<br /><em>Something growing.</em></h1>
        <p className="text-lg md:text-xl text-soft leading-relaxed max-w-[58ch] mt-7">A playful activity app for busy young professionals, turning everyday steps into a growing tree. Designed to make progress visible and give people a reason to take the next small step.</p>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-7 border-t border-faint">
          {[["Context", "Apple Foundation Program"], ["Timeline", "4 weeks"], ["Team", "Kiwi Kuties · 5 members"], ["Focus", "Research · Interaction · Prototyping"]].map(([label, value]) => <div key={label}><dt className="text-xs uppercase tracking-widest text-soft mb-2">{label}</dt><dd className="text-sm leading-relaxed">{value}</dd></div>)}
        </dl>
        <Figure name="overview" caption="FitsApp presentation: tree growth, weekly goals and tree selection." priority />
        <nav aria-label="Case study sections" className="flex flex-wrap gap-x-7 gap-y-2 mt-7 text-sm text-soft">
          {[["problem", "The problem"], ["research", "What we learned"], ["decisions", "Design decisions"], ["reflection", "Reflection"]].map(([id, label]) => <a key={id} href={`#${id}`} className="py-3 underline underline-offset-4 hover:text-ink">{label}</a>)}
        </nav>
      </header>

      <Section id="problem" number="01" title="Finding a smaller, more useful question.">
        <Lead>We began with a broad exploration of wellbeing: exercise, sleep, diet and social connection. Collaborative mapping brought us towards physical activity, then towards the motivation to keep going.</Lead>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-9">
          {["Wellbeing", "Physical activity", "Sustaining motivation", "Visible everyday progress"].map((step, i) => <li key={step} className="border-t border-faint pt-4"><span className="block font-mono text-xs text-soft mb-3">0{i + 1}</span><span className="text-lg font-serif">{step}</span></li>)}
        </ol>
        <Lead>The team refined its challenge from encouraging participation to <strong>boosting motivation to stay physically active</strong>. Our opportunity was to make small actions feel worthwhile for people whose work and daily responsibilities make restarting difficult.</Lead>
        <aside className="mt-9 rounded-2xl bg-panel border border-faint p-6 md:p-8">
          <p className="text-xs uppercase tracking-widest text-soft">Design persona · Mia, 28</p>
          <p className="font-serif text-2xl leading-snug mt-3">After a full day at work, a complete workout can feel out of reach.</p>
          <p className="text-soft leading-relaxed mt-4 max-w-[65ch]">Mia represents a busy young professional who wants to feel more active, enjoys exercising with friends, and struggles to maintain a routine around deadlines and fatigue. This persona frames a design scenario; it is not a participant quote.</p>
        </aside>
      </Section>

      <Section id="research" number="02" title="Three signals that shaped the concept.">
        <Lead>We organised the research around motivation, engagement and activity. These signals helped us move from a broad exercise challenge to a focused visualisation concept.</Lead>
        <div className="grid md:grid-cols-3 gap-5 mt-9">{insights.map(item => <article key={item.title} className="rounded-2xl border border-faint p-6 bg-panel"><p className="text-xs text-soft mb-4">{item.source}</p><h3 className="font-serif text-2xl leading-tight">{item.title}</h3><p className="text-soft leading-relaxed mt-4">{item.text}</p><p className="border-t border-faint mt-5 pt-5 leading-relaxed">{item.implication}</p></article>)}</div>
        <details className="mt-8 border-y border-faint py-5"><summary className="cursor-pointer py-2 font-medium">A note on the research evidence</summary><p className="text-soft leading-relaxed mt-4 max-w-[75ch]">The process boards distinguish interviews, desk research and generative-AI exploration. Interview summaries informed our interpretation; desk research provided context; AI-generated material helped explore hypotheses and is not treated as participant evidence. The material presented here does not establish participant counts or measured behaviour change.</p></details>
      </Section>

      <Section id="concept" number="03" title="What if progress felt like something you were growing?">
        <Lead>A tree gave us a visual metaphor for accumulated effort. Steps become growth; growth gives users something to return to. The concept keeps numerical feedback visible while adding a more personal reason to check in.</Lead>
        <div className="grid sm:grid-cols-3 gap-6 mt-9">{[["Move", "Everyday walking provides the input."], ["See", "A step count and tree show progress together."], ["Make it yours", "Goals, a tree name and visual choices add ownership."]].map(([title, text]) => <div key={title} className="border-l-2 border-faint pl-5"><h3 className="font-serif text-2xl">{title}</h3><p className="text-soft mt-3 leading-relaxed">{text}</p></div>)}</div>
        <Figure name="progress" caption="The concept pairs visible growth with step counts and personal goal settings." />
      </Section>

      <Section id="decisions" number="04" title="The choices behind the tree.">
        <Lead>Each choice makes the experience more focused, but also leaves something unresolved. These are the trade-offs visible in the design and the questions they raise.</Lead>
        <div className="mt-9">{decisions.map((item, i) => <article key={item.title} className="grid md:grid-cols-[1fr_2fr] gap-5 md:gap-12 py-8 border-t border-faint"><h3 className="font-serif text-2xl"><span className="block font-mono text-xs text-soft mb-3">0{i + 1}</span>{item.title}</h3><div><p className="leading-relaxed">{item.choice}</p><p className="text-soft leading-relaxed mt-4"><strong className="text-ink font-medium">The trade-off: </strong>{item.tradeoff}</p></div></article>)}</div>
      </Section>

      <Section id="evolution" number="05" title="From a growing tree to a personal world.">
        <Lead>Paper sketches explored a close-up tree, a zoomed-out view, goal setting and a shop beneath the roots. Later interface explorations brought these ideas into a consistent visual world of clouds, soil and tree shapes.</Lead>
        <div className="grid md:grid-cols-3 gap-6 mt-8">{[["Make growth readable", "The tree remains the focal point, with the step count and scale giving it context."], ["Make goals tangible", "Activity-level choices reveal step targets, helping connect an intention with a number."], ["Make progress personal", "Tree selection and locked options explore how accumulated steps could unlock visual variety."]].map(([title, text]) => <article key={title}><h3 className="font-serif text-xl">{title}</h3><p className="text-soft leading-relaxed mt-3">{text}</p></article>)}</div>
        <Figure name="customisation" caption="Tree selection and visual variations in the project presentation. These screens show the design direction, not a measured improvement in motivation." />
      </Section>

      <Section id="delivery" number="06" title="A glance on your wrist. A reason to return.">
        <Lead>The watch and widget concepts extend the same tree beyond the phone. They explore brief feedback during movement and a summary afterwards, keeping the visual language familiar across surfaces.</Lead>
        <Figure name="watch" caption="Watch companion exploration from the FitsApp presentation." />
        <p className="mt-7 text-soft leading-relaxed max-w-[70ch]">The work shown here documents the research framing, sketches and interface concepts. Live step synchronisation, reward persistence and cross-device behaviour require separate implementation verification; the screens alone do not establish that these are complete.</p>
      </Section>

      <Section id="reflection" number="07" title="Designing a reason to return, without a reason to feel guilty.">
        <Lead>The strongest unresolved question is the role of pressure. A shrinking tree might encourage a return, but it might also make an already busy person feel worse. The next iteration should test that tension directly.</Lead>
        <div className="grid md:grid-cols-3 gap-6 mt-9">{[["Understanding", "Can people explain how steps translate into growth and rewards after using the prototype?"], ["Recovery", "How do users respond to regression compared with paused growth and a forgiving restart?"], ["Staying power", "Does the experience remain meaningful after its novelty fades? A longer study would be needed to assess this."]].map(([title, text]) => <article key={title} className="bg-panel border border-faint rounded-2xl p-6"><h3 className="font-serif text-2xl">{title}</h3><p className="mt-4 leading-relaxed text-soft">{text}</p></article>)}</div>
        <p className="mt-9 text-soft leading-relaxed max-w-[70ch]">FitsApp gave our team a focused concept to investigate: make everyday movement visible, personal and rewarding. Its effect on sustained activity remains a hypothesis to test.</p>
      </Section>
      <footer className="max-w-content mx-auto px-6 md:px-8 py-12 border-t border-faint flex justify-between gap-5 text-sm"><Link href="/#work" className="py-3 hover:underline">← All projects</Link><Link href="/projects/resonance" className="py-3 hover:underline">Resonance →</Link></footer>
    </main>
  );
}
function Section({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="max-w-content mx-auto px-6 md:px-8 py-12 md:py-16 scroll-mt-8"><p className="text-xs font-mono text-soft mb-4">{number} / FITSAPP</p><h2 className="font-serif text-[clamp(30px,4vw,46px)] leading-tight max-w-[28ch]">{title}</h2><div className="mt-8">{children}</div></section>;
}
function Lead({ children }: { children: React.ReactNode }) { return <p className="text-lg md:text-xl leading-relaxed text-soft max-w-[70ch] [&_strong]:text-ink [&_strong]:font-medium">{children}</p>; }
function Figure({ name, caption, priority = false }: { name: string; caption: string; priority?: boolean }) {
  return <figure className="mt-9"><a href={`/fitsapp-case/${name}.png`} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${caption}`} className="block rounded-2xl overflow-hidden border border-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={`/fitsapp-case/${name}.png`} alt={caption} width={1100} height={619} loading={priority ? "eager" : "lazy"} className="w-full h-auto" /></a><figcaption className="text-sm text-soft leading-relaxed mt-3">{caption} <span className="underline underline-offset-2">Select image to enlarge.</span></figcaption></figure>;
}
