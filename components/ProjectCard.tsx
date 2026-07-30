import Link from "next/link";
import type { Project } from "@/lib/projects";

// Sticky stacking card — the Nitro "floating cards" effect.
// Each card sticks near the top as you scroll, so they pile up.
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div
      className="sticky"
      style={{ top: `${96 + index * 22}px` }}
    >
      <Link
        href={project.href}
        className="block rounded-[26px] overflow-hidden no-underline group bg-[#151515] border border-white/[0.06]"
      >
        {/* card header */}
        <div className="px-7 md:px-10 pt-8 flex justify-between items-center">
          <span className="font-mono text-[13px] tracking-wide text-soft">
            {num}
            <span className="mx-2.5 text-faint">|</span>
            {project.tag.toUpperCase()}
          </span>
          <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-lg text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </div>

        {/* image (left) + title & blurb (right) */}
        <div className="mt-8 px-7 md:px-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full max-w-[280px] mx-auto md:mx-0 aspect-[9/16] rounded-2xl bg-black/85 border border-white/10 flex items-center justify-center">
            <span className="font-mono text-[12px] text-white/40 text-center leading-[1.8] whitespace-pre-line px-4">
              {project.imgPlaceholder}
            </span>
          </div>

          <div>
            <h3
              className="font-semibold tracking-tight leading-none text-ink"
              style={{ fontSize: "clamp(32px,4.2vw,56px)" }}
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
