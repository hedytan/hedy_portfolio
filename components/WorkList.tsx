import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import ScaleCard from "./ScaleCard";

export default function WorkList() {
  return (
    <section id="work" className="max-w-content mx-auto px-6 md:px-10 mt-10">
      <div className="flex flex-col gap-8 md:gap-14 py-16">
        {projects.map((p, i) => (
          <ScaleCard key={p.slug}>
            <ProjectCard project={p} index={i} />
          </ScaleCard>
        ))}
      </div>
    </section>
  );
}
