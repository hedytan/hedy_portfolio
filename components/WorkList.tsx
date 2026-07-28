import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function WorkList() {
  return (
    <section id="work" className="max-w-content mx-auto px-6 md:px-10 mt-10">
      <div className="card-stack flex flex-col gap-6 pb-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
