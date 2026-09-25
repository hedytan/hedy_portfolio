"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "./Hero";
import DesktopSticker from "./DesktopSticker";
import DesktopFile from "./DesktopFile";
import DesktopClock from "./DesktopClock";
import WorkFolderPreview from "./WorkFolderPreview";
import { projects, site } from "@/lib/projects";

const files = [
  { id: "about", name: "About me", extension: "自我介绍 · .md", type: "document" },
  { id: "work", name: "Selected work", extension: "作品集 · folder", type: "folder" },
  { id: "toolbox", name: "My toolbox", extension: "技能工具 · .txt", type: "folder" },
  { id: "contact", name: "Say hello", extension: "联系我 · .mail", type: "mail" },
];

function FileIcon({ type }: { type: string }) {
  return <svg viewBox="0 0 80 72" fill="none" aria-hidden="true">
    {type === "folder" ? <><path d="M5 17a6 6 0 0 1 6-6h20l8 8h30a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6Z" fill="#e5b75e" stroke="#b1853c"/><path d="M5 29a5 5 0 0 1 5-5h60a5 5 0 0 1 5 5v29a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6Z" fill="#f7d586"/><path d="M9 28h62" stroke="#fff0bd" strokeWidth="2"/></> : type === "mail" ? <><rect x="5" y="17" width="70" height="46" rx="6" fill="#fffaf0" stroke="#b9bdc9"/><path d="m7 20 33 25 33-25M7 60l24-22m42 22L49 38" stroke="#7697ba" strokeWidth="2"/></> : <><path d="M20 5h28l15 15v43a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z" fill="#fffaf0" stroke="#c1c7d0"/><path d="M48 5v15h15" fill="#dfe9f5"/><path d="M26 33h27M26 41h27M26 49h18" stroke="#83a0c1" strokeWidth="3" strokeLinecap="round"/></>}
  </svg>;
}

export default function PortfolioDesktop() {
  const [route, setRoute] = useState("top");
  const dialog = useRef<HTMLDialogElement>(null);
  const desktopHeading = useRef<HTMLHeadingElement>(null);
  const launched = route !== "top";
  const activeFile = files.find(file => file.id === route);

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      setRoute(["desktop", ...files.map(file => file.id)].includes(hash) ? hash : "top");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (activeFile && dialog.current && !dialog.current.open) dialog.current.showModal();
    if (!activeFile && dialog.current?.open) dialog.current.close();
    if (route === "desktop") desktopHeading.current?.focus();
  }, [route, activeFile]);

  const closeFile = () => { window.location.hash = "desktop"; };

  return <main className="portfolio-os">
    {!launched ? <Hero /> : <section className="os-desktop" aria-label="Hedy desktop">
      <header className="os-menubar"><a href="#desktop" className="os-brand">hedy.t</a><span>Personal space / Portfolio</span><a href="#top" className="os-shutdown">Back to cover ↗</a><DesktopClock /></header>
      <div className="os-wallpaper-caption"><p>A curious mind. A world of possibilities.</p><h1 ref={desktopHeading} tabIndex={-1}>Welcome to<br /><em>my world.</em></h1><p>I&apos;m Hedy, a UX/UI designer in Sydney. I turn everyday observations into mobile experiences — listening to people, shaping interactions, and bringing ideas to life in SwiftUI.</p></div>
      <div className="os-files" aria-label="Desktop files">{files.filter(file => file.id !== "about").map(file => <DesktopFile key={file.id} id={file.id} name={file.name}>{file.id === "work" ? <WorkFolderPreview /> : <FileIcon type={file.type}/>}<strong>{file.name}</strong><span>{file.extension}</span></DesktopFile>)}</div>
      <DesktopSticker />
      <div className="os-desktop-note"><span className="os-status-dot" />{site.status}<span className="os-note-location">Sydney, Australia</span></div>
      <p className="os-hint">Click to explore. Drag to make it yours.</p>
    </section>}

    <nav className="cover-nav" aria-label="Main navigation">{[{id: launched ? "desktop" : "top", label: launched ? "Desktop" : "Home"}, {id:"work",label:"Projects"},{id:"about",label:"About"},{id:"contact",label:"Contact"}].map(item => <a key={item.id} href={`#${item.id}`} className={route === item.id ? "is-active" : ""} aria-current={route === item.id ? "page" : undefined}>{item.label}</a>)}</nav>

    <dialog ref={dialog} className="os-window" aria-labelledby="os-window-title" onCancel={event => {event.preventDefault(); closeFile();}} onClick={event => {if (event.target === event.currentTarget) closeFile();}}>
      <div className="os-window-bar"><button className="os-window-close" onClick={closeFile} aria-label="Close window">×</button><h2 id="os-window-title">{activeFile?.name}</h2><span>{activeFile?.extension.split(" · ")[1]}</span></div>
      <div className="os-window-content" data-lenis-prevent key={route}>
        {route === "about" && <article className="os-about"><div className="os-eyebrow">01 / A LITTLE ABOUT ME</div><Image src="/hedy-cutout.png" alt="Hedy Tan" width={160} height={180} className="os-portrait"/><h3>Hey, I&apos;m {site.name}.</h3><p className="os-lead">{site.tagline}.<br/>Master of Interaction Design at UTS.</p><p>{site.about.lead}</p>{site.about.paragraphs.map(p => <p key={p}>{p}</p>)}<a className="os-text-link" href="#work">Explore my work ↗</a></article>}
        {route === "work" && <><div className="os-eyebrow">02 / SELECTED WORK</div><h3>Made with curiosity.</h3><p className="os-lead">A collection of research, interfaces, and experiments.</p><div className="os-projects">{projects.map((project, i) => <article key={project.slug} className="os-project"><div className="os-project-number">{String(i+1).padStart(2,"0")}</div><div><span className="os-eyebrow">{project.tag} · {project.year}</span><h4>{project.title}</h4><p>{project.description}</p>{project.href !== "#" ? <Link className="os-text-link" href={project.href}>Open case study ↗</Link> : <span className="os-coming-soon">Case study coming soon</span>}</div></article>)}</div></>}
        {route === "toolbox" && <><div className="os-eyebrow">03 / MY TOOLBOX</div><h3>From a question<br/>to something real.</h3><p className="os-lead">The tools and methods I use to explore, design, and build.</p><div className="os-skills">{site.about.chips.map((chip,i) => <div key={chip}><span>{String(i+1).padStart(2,"0")}</span>{chip}</div>)}</div></>}
        {route === "contact" && <><div className="os-eyebrow">04 / LET'S CONNECT</div><h3>Good things start<br/>with a hello.</h3><p className="os-lead">Open for opportunities, collaborations, and conversations about design.</p><a className="os-contact-link" href={`mailto:${site.email}`}>{site.email} ↗</a><a className="os-text-link" href={site.links.linkedin} target="_blank" rel="noreferrer">Find me on LinkedIn ↗</a><p className="os-contact-note">Based in Sydney, Australia.</p></>}
      </div>
      <div className="os-window-status">hedy.t<span>Esc to close · Click a file to explore</span></div>
    </dialog>
  </main>;
}
