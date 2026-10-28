import Link from "next/link";
export function ProjectBrief({ name, intro, facts, children }: { name: string; intro: string; facts: [string,string][]; children: React.ReactNode }) {
  return <main className="brief"><nav className="brief-top"><Link href="/projects">← Selected work</Link><a href="#outcome">View outcome ↓</a></nav><div className="brief-layout"><header className="brief-header"><p className="brief-kicker">Product design / {name}</p><h1>{name}</h1><p className="brief-intro">{intro}</p><dl className="brief-facts">{facts.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></header><article className="brief-article">{children}</article></div></main>;
}
export function BriefSection({ title, children, id }: { title:string; children:React.ReactNode; id?:string }) { return <section className="brief-section" id={id}><h2>{title}</h2>{children}</section>; }
