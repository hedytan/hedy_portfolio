import Link from "next/link";
import type { Project } from "@/lib/projects";

// Sticky stacking card — the Nitro "floating cards" effect.
// Each card sticks near the top as you scroll, so they pile up.
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="sticky"
      style={{ top: `${96 + index * 22}px` }}
    >
      <Link
        href={project.href}
        className="block rounded-[26px] overflow-hidden no-underline group"
        style={{ backgroundColor: project.cardBg }}
      >
        {/* card header */}
        <div className="px-7 md:px-10 pt-8">
          <div className="flex justify-between items-center font-mono text-[13px]" style={{ color: project.titleColor, opacity: 0.75 }}>
            <span>{project.year}</span>
            <span>{project.tag}</span>
          </div>
          <div className="h-px w-full my-5" style={{ backgroundColor: project.titleColor, opacity: 0.25 }} />
          <div className="flex justify-between items-center">
            <h3
              className="font-semibold tracking-tight leading-none"
              style={{ fontSize: "clamp(44px,7vw,96px)", color: project.titleColor }}
            >
              {project.title}
            </h3>
            <span
              className="text-3xl md:text-5xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: project.titleColor }}
            >
              ↗
            </span>
          </div>
        </div>

        {/* big image area */}
        <div className="mt-8 mx-4 md:mx-6 mb-6 rounded-2xl aspect-[16/9] bg-black/85 flex items-center justify-center">
          <span className="font-mono text-[13px] text-white/45 text-center leading-[1.9] whitespace-pre-line px-6">
            {project.imgPlaceholder}
          </span>
        </div>
      </Link>
    </div>
  );
}
