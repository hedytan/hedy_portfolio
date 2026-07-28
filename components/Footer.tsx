import { site } from "@/lib/projects";

export default function Footer() {
  return (
    <footer id="contact" className="max-w-content mx-auto px-6 md:px-10 py-24 border-t border-faint">
      <p className="font-mono text-[13px] text-soft mb-8">.say hello</p>
      <h2 className="font-semibold text-[clamp(28px,5vw,60px)] leading-[1.15] tracking-tight max-w-[20ch]">
        open for opportunities — feel free to reach out and let&apos;s talk.
      </h2>
      <a
        href={`mailto:${site.email}`}
        className="inline-block mt-10 font-mono text-sm px-7 py-3.5 rounded-full bg-ink text-bg no-underline hover:bg-blue hover:text-white transition-colors"
      >
        contact me ↗
      </a>

      <div className="mt-20 flex flex-wrap justify-between items-center gap-6 font-mono text-[13px] text-soft">
        <span>© 2026 {site.name}</span>
        <div className="flex gap-6">
          <a href={site.links.linkedin} className="hover:text-ink no-underline transition-colors">linkedin</a>
          <a href={site.links.github} className="hover:text-ink no-underline transition-colors">github</a>
          <a href={site.links.resume} className="hover:text-ink no-underline transition-colors">resume</a>
        </div>
      </div>
    </footer>
  );
}
