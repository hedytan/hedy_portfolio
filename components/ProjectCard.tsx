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

        {/* left preview — full iPhone */}
        <div className="relative z-10 flex items-center justify-center md:justify-start md:pl-12 pt-24 md:pt-0 pb-10 md:pb-0 order-2 md:order-1">
          <div className="relative w-[196px] md:w-[224px] rounded-[2.5rem] bg-[#0c0c0c] p-[9px] border border-white/[0.14] shadow-[0_24px_70px_rgba(0,0,0,0.65)]">
            {/* side buttons */}
            <span className="absolute -left-[2px] top-[21%] w-[3px] h-[5%] rounded-l-[2px] bg-[#080808]" />       {/* action / mute */}
            <span className="absolute -left-[2px] top-[30%] w-[3px] h-[9%] rounded-l-[2px] bg-[#080808]" />       {/* volume up */}
            <span className="absolute -left-[2px] top-[41%] w-[3px] h-[9%] rounded-l-[2px] bg-[#080808]" />       {/* volume down */}
            <span className="absolute -right-[2px] top-[31%] w-[3px] h-[13%] rounded-r-[2px] bg-[#080808]" />     {/* side / power */}

            <div className="relative aspect-[9/19.5] rounded-[2rem] overflow-hidden bg-black">
              <CardPreview
                img={project.img}
                frames={project.frames}
                placeholder={project.imgPlaceholder}
                title={project.title}
              />
              {/* dynamic island */}
              <span className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[30%] h-[15px] bg-black rounded-full z-20" />
            </div>
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
