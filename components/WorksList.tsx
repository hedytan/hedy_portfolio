"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import "./works-list.css";

const categories: Record<string, string[]> = {
  resonance: ["UI", "UX"],
  fitsapp: ["UI", "UX", "Research"],
  "spotify-ease": ["UI", "UX"],
  "keyboard-research": ["Research"],
  "mind-the-gap": ["UI", "UX"],
};
const descriptions: Record<string, string> = {
  resonance: "An emotion-first music app connecting artists and listeners through personal moments.",
  fitsapp: "A playful step tracker that turns everyday walks into a growing, personalised tree.",
  "spotify-ease": "An accessibility-focused exploration of a more inclusive music listening experience.",
  "keyboard-research": "A probe kit exploring how everyday typing connects with comfort, mood and context.",
  "mind-the-gap": "A vending machine for feelings: write a note, receive a card, and see how a station feels.",
};

export default function WorksList() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(p => filter === "All" || categories[p.slug].includes(filter));
  return <section className="works-list" id="work" aria-labelledby="works-title">
    <h2 id="works-title">Works</h2>
    <div className="works-filters" role="group" aria-label="Filter projects">
      {["All", "UI", "UX", "Research"].map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>
        {category} <span>{projects.filter(p => category === "All" || categories[p.slug].includes(category)).length}</span>
      </button>)}
    </div>
    <p className="sr-only" role="status">{visible.length} projects shown{filter !== "All" ? ` in ${filter}` : ""}.</p>
    <div className="works-rows">{visible.map(project => {
      const title = project.slug === "keyboard-research" ? "Typing Research" : project.title;
      const content = <><div className="works-row-heading"><h3>{title} {project.href !== "#" && <span aria-hidden="true">↗</span>}</h3><p>{categories[project.slug].join(" · ")} <span>{project.year}</span></p></div><p className="works-summary">{descriptions[project.slug]}</p>{project.href === "#" && <span className="works-soon">Case study coming soon</span>}</>;
      return project.href === "#" ? <article className="works-row" id={`project-${project.slug}`} key={project.slug}>{content}</article> : <Link className="works-row works-row-link" id={`project-${project.slug}`} href={project.href} key={project.slug}>{content}</Link>;
    })}</div>
  </section>;
}
