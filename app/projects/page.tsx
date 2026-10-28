import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import WorksRing from "@/components/WorksRing";
import "@/components/portfolio-v2.css";

export const metadata: Metadata = { title: "Projects — Hedy Tan" };

export default function ProjectsPage() {
  return <main className="hp hp-projects" id="top">
    <SiteNav />
    <WorksRing />
    <footer className="hp-foot"><span>© {new Date().getFullYear()} Hedy Tan</span><span>Made with curiosity.</span></footer>
  </main>;
}
