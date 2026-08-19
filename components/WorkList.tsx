import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

// Sticky "floating cards" stack: each card pins near the top of the
// viewport as you scroll, and the next card slides up over it, leaving
// a sliver of the previous card peeking out above.
const STACK_TOP = 96; // clears the fixed nav (h-20 = 80px) + a gap
const STACK_STEP = 22; // px of previous card left peeking per card

export default function WorkList() {
  return (
    <section id="work" className="max-w-content mx-auto px-6 md:px-10 mt-10">
      <div className="py-16">
        {projects.map((p, i) => (
          <div
            key={p.slug}
            className="sticky pb-8 md:pb-14"
            style={{ top: STACK_TOP + i * STACK_STEP, zIndex: i + 1 }}
          >
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
