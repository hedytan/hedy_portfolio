import Link from "next/link";
import { projects } from "@/lib/projects";

const label = (slug: string, title: string) => (slug === "keyboard-research" ? "Typing Research" : title);

// Previous / next follow the order of the projects on the home page.
export default function ProjectPager({ slug }: { slug: string }) {
  const i = projects.findIndex(p => p.slug === slug);
  const prev = projects[i - 1], next = projects[i + 1];
  return <footer className="pc-footer pc-pager">
    {prev ? <Link href={prev.href}>← Previous / {label(prev.slug, prev.title)}</Link> : <Link href="/#work">← All works</Link>}
    {next ? <Link href={next.href}>Next / {label(next.slug, next.title)} →</Link> : <Link href="/#work">All works →</Link>}
  </footer>;
}
