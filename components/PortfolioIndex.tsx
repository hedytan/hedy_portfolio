import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/projects";
import WorksRing from "./WorksRing";
import "./portfolio-v2.css";

const education = [
  ["2025–2026", "Master of Interaction Design", "University of Technology Sydney"],
  ["2023–2025", "Bachelor of Digital Media", "Queensland University of Technology (QUT)"],
];

export default function PortfolioIndex() {
  return <main className="hp" id="top">
    <nav className="hp-nav" aria-label="Main navigation">
      <a href="#top" className="hp-nav-name">HEDY TAN<span> · UX/UI DESIGNER</span></a>
      <a href="#work">WORKS</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </nav>

    <WorksRing />

    <section className="ab" id="about" aria-labelledby="about-title">
      <div className="ab-copy">
        <h2 id="about-title">About me</h2>
        {site.about.paragraphs.map(p => <p key={p}>{p}</p>)}
        <p><a href="#contact">Feel free to get in touch.</a></p>
      </div>
      <div className="ab-photos">{[["/hedy-sydney-portrait.jpg", "Hedy in Sydney"], ["/hedy-beach.jpg", "Hedy at the beach"], ["/hedy-izakaya.jpg", "Hedy at an izakaya in Japan"]].map(([src, alt]) => <Image key={src} src={src} alt={alt} width={600} height={750} sizes="(max-width: 800px) 40vw, 200px" />)}</div>
    </section>

    <section className="dt" aria-label="Details">
      <div className="dt-col">
        <h3>education</h3>
        {education.map(([when, what, where]) => <div className="dt-item" key={what}>
          <p className="dt-strong">{what}</p><p>{where}</p><p>{when}</p>
        </div>)}
      </div>
      <div className="dt-col">
        <h3>skills &amp; tools</h3>
        <ul>{site.about.chips.map(skill => <li key={skill}>{skill}</li>)}</ul>
      </div>
      <div className="dt-col" id="contact">
        <h3>contact</h3>
        <ul>
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a href={site.links.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/hedy-tan</a></li>
          <li>Sydney, NSW</li>
        </ul>
      </div>
    </section>

    <footer className="hp-foot"><span>© {new Date().getFullYear()} Hedy Tan</span><span>Made with curiosity.</span></footer>
  </main>;
}
