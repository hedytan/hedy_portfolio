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
          <div
            className="relative w-[196px] md:w-[228px] rounded-[2.7rem] p-[3px] shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
            style={{ backgroundImage: "linear-gradient(150deg,#63636a 0%,#232326 24%,#3d3d43 50%,#1d1d20 76%,#5c5c63 100%)" }}
          >
            {/* metallic side buttons */}
            <span className="absolute -left-[3px] top-[20%] w-[3px] h-[5%] rounded-l-[2px]" style={{ backgroundImage: "linear-gradient(to right,#6a6a72,#2b2b2f)" }} /> {/* action / mute */}
            <span className="absolute -left-[3px] top-[29%] w-[3px] h-[9%] rounded-l-[2px]" style={{ backgroundImage: "linear-gradient(to right,#6a6a72,#2b2b2f)" }} /> {/* volume up */}
            <span className="absolute -left-[3px] top-[40%] w-[3px] h-[9%] rounded-l-[2px]" style={{ backgroundImage: "linear-gradient(to right,#6a6a72,#2b2b2f)" }} /> {/* volume down */}
            <span className="absolute -right-[3px] top-[30%] w-[3px] h-[13%] rounded-r-[2px]" style={{ backgroundImage: "linear-gradient(to left,#6a6a72,#2b2b2f)" }} /> {/* side / power */}

            {/* inner black bezel */}
            <div className="rounded-[2.5rem] bg-black p-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              {/* screen */}
              <div className="relative aspect-[9/19.5] rounded-[2.1rem] overflow-hidden bg-black">
                <CardPreview
                  img={project.img}
                  frames={project.frames}
                  placeholder={project.imgPlaceholder}
                  title={project.title}
                />
                {/* dynamic island + camera */}
                <span className="absolute top-[9px] left-1/2 -translate-x-1/2 h-[21px] w-[68px] bg-black rounded-full z-20 flex items-center justify-end pr-[7px]">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#0b0b16]" style={{ boxShadow: "inset 0 0 2px 1px rgba(90,100,150,0.45)" }} />
                </span>
              </div>
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
