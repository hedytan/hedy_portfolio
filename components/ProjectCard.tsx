import Link from "next/link";
import type { Project } from "@/lib/projects";
import CardPreview from "./CardPreview";

// Sticky stacking card. On desktop the screenshot rises from the left and
// its lower edge is clipped by the card; the title + blurb sit on the right.
// On mobile it stacks: title/blurb first, full screenshot below.
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div>
      <Link
        href={project.href}
        className="relative grid grid-cols-1 md:grid-cols-2 overflow-hidden no-underline group rounded-[26px] bg-[#151515] border border-white/[0.06] min-h-[440px] md:min-h-0 md:h-[540px]"
      >
        {/* header */}
        <div className="absolute top-0 inset-x-0 z-20 px-7 md:px-10 pt-8 flex justify-between items-center">
          <span className="font-mono text-[13px] tracking-wide text-soft">
            {num}
            <span className="mx-2.5 text-faint">|</span>
            {project.tag.toUpperCase()}
          </span>
          <span className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-[15px] text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </div>

        {/* left preview */}
        <div className="relative z-10 flex justify-center md:justify-start md:pl-12 pt-4 md:pt-[92px] pb-9 md:pb-0 order-2 md:order-1 self-end md:self-start">
          <div className="w-[190px] md:w-[262px] aspect-[9/19.5] rounded-t-[22px] overflow-hidden border border-b-0 border-white/10 shadow-[0_-8px_50px_rgba(0,0,0,0.55)]">
            <CardPreview
              img={project.img}
              frames={project.frames}
              placeholder={project.imgPlaceholder}
              title={project.title}
            />
          </div>
        </div>

        {/* right text */}
        <div className="relative z-10 flex items-start md:items-center order-1 md:order-2 px-7 md:px-0 md:pr-14 pt-24 md:pt-0">
          <div>
            <h3
              className="font-semibold tracking-tight leading-none text-ink"
              style={{ fontSize: "clamp(30px,4.2vw,54px)" }}
            >
              {project.title}
            </h3>
            <p className="mt-5 text-soft text-base md:text-lg leading-relaxed max-w-[42ch]">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
