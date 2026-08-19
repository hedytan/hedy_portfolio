"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import CardPreview from "./CardPreview";

// A realistic iPhone device frame.
function Phone({ project, playing, width }: { project: Project; playing: boolean; width: string }) {
  return (
    <div
      className={`relative ${width} rounded-[2.7rem] p-[3px] shadow-[0_30px_80px_rgba(0,0,0,0.7)]`}
      style={{ backgroundImage: "linear-gradient(150deg,#63636a 0%,#232326 24%,#3d3d43 50%,#1d1d20 76%,#5c5c63 100%)" }}
    >
      {/* metallic side buttons */}
      <span className="absolute -left-[3px] top-[20%] w-[3px] h-[5%] rounded-l-[2px]" style={{ backgroundImage: "linear-gradient(to right,#6a6a72,#2b2b2f)" }} />
      <span className="absolute -left-[3px] top-[29%] w-[3px] h-[9%] rounded-l-[2px]" style={{ backgroundImage: "linear-gradient(to right,#6a6a72,#2b2b2f)" }} />
      <span className="absolute -left-[3px] top-[40%] w-[3px] h-[9%] rounded-l-[2px]" style={{ backgroundImage: "linear-gradient(to right,#6a6a72,#2b2b2f)" }} />
      <span className="absolute -right-[3px] top-[30%] w-[3px] h-[13%] rounded-r-[2px]" style={{ backgroundImage: "linear-gradient(to left,#6a6a72,#2b2b2f)" }} />

      <div className="rounded-[2.5rem] bg-black p-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <div className="relative aspect-[9/19.5] rounded-[2.1rem] overflow-hidden bg-black">
          <CardPreview
            img={project.img}
            frames={project.frames}
            placeholder={project.imgPlaceholder}
            title={project.title}
            playing={playing}
          />
          {/* dynamic island + camera */}
          <span className="absolute top-[9px] left-1/2 -translate-x-1/2 h-[21px] w-[68px] bg-black rounded-full z-20 flex items-center justify-end pr-[7px]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#0b0b16]" style={{ boxShadow: "inset 0 0 2px 1px rgba(90,100,150,0.45)" }} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div>
      <Link
        href={project.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative block overflow-hidden no-underline rounded-[26px] bg-[#151515] border border-white/[0.06] h-[520px] md:h-[540px] shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
      >
        {/* header (always visible) */}
        <div className="absolute top-0 inset-x-0 z-30 px-7 md:px-10 pt-8 flex justify-between items-center">
          <span className="font-mono text-[13px] tracking-wide text-soft">
            {num}
            <span className="mx-2.5 text-faint">|</span>
            {project.tag.toUpperCase()}
          </span>
          <span className={`w-9 h-9 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-[15px] text-ink transition-transform duration-300 ${hovered ? "translate-x-1 -translate-y-1" : ""}`}>
            ↗
          </span>
        </div>

        {/* REST — title + first page peeking */}
        <div className={`absolute inset-0 z-10 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}>
          {/* desktop: clipped phone left, title right */}
          <div className="hidden md:block h-full">
            <div className="absolute left-16 -bottom-16">
              <Phone project={project} playing={false} width="w-[224px]" />
            </div>
            <div className="absolute inset-y-0 right-0 w-[52%] flex items-center pr-14">
              <div>
                <h3 className="font-semibold tracking-tight leading-none text-ink" style={{ fontSize: "clamp(30px,4.2vw,54px)" }}>
                  {project.title}
                </h3>
                <p className="mt-5 text-soft text-lg leading-relaxed max-w-[42ch]">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          {/* mobile: title on top, phone peeking below */}
          <div className="md:hidden flex flex-col h-full pt-24 px-7">
            <div>
              <h3 className="font-semibold tracking-tight leading-none text-ink text-[34px]">
                {project.title}
              </h3>
              <p className="mt-4 text-soft text-base leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="mt-8 mx-auto -mb-24">
              <Phone project={project} playing={false} width="w-[170px]" />
            </div>
          </div>
        </div>

        {/* HOVER — complete phone, centred, walkthrough playing */}
        <div className={`absolute inset-0 z-20 hidden md:flex items-center justify-center transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Phone project={project} playing={hovered} width="w-[212px]" />
        </div>
      </Link>
    </div>
  );
}
