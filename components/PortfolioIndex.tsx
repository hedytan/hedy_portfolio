import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/projects";
import PolaroidPile from "./PolaroidPile";
import Badge from "./Badge";
import SiteNav from "./SiteNav";
import "./portfolio-v2.css";

const education = [
  ["2025–2026", "Master of Interaction Design", "University of Technology Sydney (UTS)"],
  ["2023–2025", "Bachelor of Digital Media", "Queensland University of Technology (QUT)"],
];

export default function PortfolioIndex() {
  return <main className="hp" id="top">
    <SiteNav home />

    <section className="hp-badge" aria-label="Hedy Tan name badge"><Badge /></section>


    <section className="ab" id="about" aria-labelledby="about-title">
      <div className="ab-copy">
        <h2 id="about-title">About me</h2>
        {site.about.paragraphs.map(p => <p key={p}>{p}</p>)}
        <p><a href="#contact">Feel free to get in touch.</a></p>
      </div>
      <PolaroidPile shots={[
        { src: "/about/onigiri.jpg", alt: "Hedy with an onigiri", caption: "foodie", x: 0, y: 0, r: -4, focus: "50% 35%" },
        { src: "/about/breakfast.jpg", alt: "Hedy holding a strawberry cake, with a matcha drink beside her", caption: "strawberry cake lover", x: 175, y: 25, r: 5, focus: "50% 50%" },
        { src: "/about/matcha.jpg", alt: "Two matcha drinks on a wooden table", caption: "matcha holic", x: 0, y: 215, r: 3 },
        { src: "/about/baby.jpg", alt: "Hedy as a baby", caption: "happy kid, always", x: 175, y: 250, r: 2, focus: "50% 30%" },
      ]} />
    </section>

    <section className="dt" aria-label="Details">
      <div className="dt-col">
        <h3>EDUCATION</h3>
        {education.map(([when, what, where]) => <div className="dt-item" key={what}>
          <p className="dt-strong">{what}</p><p>{where}</p><p>{when}</p>
        </div>)}
      </div>
      <div className="dt-col">
        <h3>SKILLS &amp; TOOLS</h3>
        <ul>{site.about.chips.map(skill => <li key={skill}>{skill}</li>)}</ul>
      </div>
      <div className="dt-col" id="contact">
        <h3>CONTACT</h3>
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
