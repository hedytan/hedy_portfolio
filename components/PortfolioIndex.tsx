import Image from "next/image";
import WorksList from "./WorksList";
import Link from "next/link";
import { projects, site } from "@/lib/projects";
import "./portfolio-index.css";
export default function PortfolioIndex(){return <main className="pi" id="top"><aside className="pi-sidebar" aria-label="Portfolio navigation"><a className="pi-sidebar-brand" href="#top" aria-label="Hedy Tan home"><span aria-hidden="true">Ht</span><strong>HEDY TAN</strong></a><p className="pi-sidebar-role">UX/UI<br/>Designer</p><nav aria-label="Main navigation"><a className="pi-sidebar-info" href="#about">ABOUT ME</a><div className="pi-sidebar-work"><a className="pi-sidebar-heading" href="#work">SELECTED<br/>WORKS</a>{projects.map(p=><Link key={p.slug} href={p.href==="#"?`#project-${p.slug}`:p.href}>{p.slug==="keyboard-research"?"Typing Research":p.title}</Link>)}</div><div className="pi-sidebar-social"><a href={site.links.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href={`mailto:${site.email}`}>EMAIL ↗</a></div></nav><p className="pi-sidebar-footer">© {new Date().getFullYear()}<br/>Hedy Tan</p></aside><header className="pi-hero"><h1>I’M HEDY<br />UX/UI DESIGNER</h1><p>LIVING AND WORKING IN SYDNEY, NSW</p></header><WorksList /><section className="pi-about" id="about" aria-labelledby="about-title">
  <header className="pi-about-header"><h2 id="about-title">ABOUT ME</h2><nav aria-label="About section navigation"><a href="#work">WORKS</a><a href="#contact">CONTACT</a></nav></header>
  <div className="pi-about-layout">
    <div className="pi-about-copy">
      <p>I’m Hedy, a UX/UI designer based in Sydney and a Master of Interaction Design student at UTS. With a background in digital media, I bring research, visuals and a little code together to make thoughtful digital experiences.</p>
      <p>I notice the small things: an awkward interaction, a detail that makes me smile, or a feeling that’s hard to put into words. Those observations become sketches, prototypes and sometimes apps. Curious by nature, I’m always learning.</p>
      <section className="pi-about-detail" aria-labelledby="education-title"><h3 id="education-title">EDUCATION</h3><div className="pi-about-education"><div><span>2025–2026</span><h4>MASTER OF INTERACTION DESIGN</h4><p>University of Technology Sydney</p></div><div><span>2023–2025</span><h4>BACHELOR OF DIGITAL MEDIA</h4><p>Queensland University of Technology (QUT)</p></div></div></section>
      <section className="pi-about-detail" aria-labelledby="skills-title"><h3 id="skills-title">SKILLS & TOOLS</h3><ul className="pi-about-skills">{site.about.chips.slice(0,6).map(skill=><li key={skill}>{skill}</li>)}</ul></section>
    </div>
    <figure className="pi-about-portrait"><Image src="/hedy-sydney-portrait.jpg" alt="Hedy in Sydney" width={800} height={900} sizes="(max-width: 700px) 90vw, 38vw"/><figcaption>A little corner of my world, in Sydney.</figcaption></figure>
  </div>
</section><footer id="contact" className="pi-contact"><h2>Good things start with a hello.</h2><a href={`mailto:${site.email}`}>{site.email} ↗</a><a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><p>Hedy Tan / Made with curiosity.</p></footer></main>}
