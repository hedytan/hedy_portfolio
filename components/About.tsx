import { site } from "@/lib/projects";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 md:px-10 py-32">
      <p className="font-mono text-[13px] text-soft mb-10">.about</p>
      <Reveal>
        <p className="font-semibold text-[clamp(24px,3.4vw,40px)] leading-[1.35] tracking-tight max-w-[24ch]">
          {site.about.lead}
        </p>
      </Reveal>
      <div className="mt-12 max-w-[60ch]">
        {site.about.paragraphs.map((p, i) => (
          <p key={i} className="text-soft text-base leading-relaxed">{p}</p>
        ))}
        <ul className="mt-8 flex flex-wrap gap-2.5 list-none">
          {site.about.chips.map((c) => (
            <li key={c} className="font-mono text-[12.5px] px-3.5 py-1.5 border border-faint rounded-full text-soft">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
