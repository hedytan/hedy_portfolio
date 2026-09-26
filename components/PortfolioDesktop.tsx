"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Hero from "./Hero";
import Polaroid from "./Polaroid";
import DesktopWindow from "./DesktopWindow";
import DesktopSticker from "./DesktopSticker";
import DesktopFile from "./DesktopFile";
import DesktopClock from "./DesktopClock";
import WorkFolderPreview from "./WorkFolderPreview";
import { projects, site } from "@/lib/projects";

const files = [
  { id: "about", name: "About me", extension: "Introduction · .md", type: "document" },
  { id: "work", name: "Selected work", extension: "Projects · folder", type: "folder" },
  { id: "toolbox", name: "My toolbox", extension: "Skills & tools · .txt", type: "folder" },
  { id: "contact", name: "Say hello", extension: "Contact · .mail", type: "mail" },
];

function FileIcon({ type }: { type: string }) {
  return <svg viewBox="0 0 80 72" fill="none" aria-hidden="true">
    {type === "folder" ? <><path d="M5 17a6 6 0 0 1 6-6h20l8 8h30a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6Z" fill="#e5b75e" stroke="#b1853c"/><path d="M5 29a5 5 0 0 1 5-5h60a5 5 0 0 1 5 5v29a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6Z" fill="#f7d586"/><path d="M9 28h62" stroke="#fff0bd" strokeWidth="2"/></> : type === "mail" ? <><rect x="5" y="17" width="70" height="46" rx="6" fill="#fffaf0" stroke="#b9bdc9"/><path d="m7 20 33 25 33-25M7 60l24-22m42 22L49 38" stroke="#7697ba" strokeWidth="2"/></> : <><path d="M20 5h28l15 15v43a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z" fill="#fffaf0" stroke="#c1c7d0"/><path d="M48 5v15h15" fill="#dfe9f5"/><path d="M26 33h27M26 41h27M26 49h18" stroke="#83a0c1" strokeWidth="3" strokeLinecap="round"/></>}
  </svg>;
}

export default function PortfolioDesktop() {
  const [route, setRoute] = useState("top");
  const [windows, setWindows] = useState<{id:string; minimized:boolean}[]>([]);
  const openWindow = (id: string) => setWindows(current => [...current.filter(window => window.id !== id), {id, minimized:false}]);
  const desktopHeading = useRef<HTMLHeadingElement>(null);
  const launched = route !== "top";
  const activeWindow = [...windows].reverse().find(window => !window.minimized)?.id;

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      setRoute(["desktop", ...files.map(file => file.id)].includes(hash) ? hash : "top");
      if (files.some(file => file.id === hash)) openWindow(hash);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const returnToDesktop = () => {
    window.history.replaceState(null, "", "#desktop");
    setRoute("desktop");
    desktopHeading.current?.focus({preventScroll:true});
  };
  const closeWindow = (id: string) => {
    setWindows(current => current.filter(window => window.id !== id));
    returnToDesktop();
  };
  const minimizeWindow = (id: string) => {
    setWindows(current => current.map(window => window.id === id ? {...window, minimized:true} : window));
    returnToDesktop();
  };

  return <main className="portfolio-os" onClick={event => {
    if (event.defaultPrevented) return;
    const link = (event.target as HTMLElement).closest('a');
    const id = link?.getAttribute('href')?.slice(1);
    if (!link?.getAttribute('href')?.startsWith('#') || !files.some(file => file.id === id)) return;
    event.preventDefault();
    openWindow(id!);
    setRoute(id!);
    window.history.replaceState(null, "", `#${id}`);
  }}>
    {!launched ? <Hero /> : <section className="os-desktop" aria-label="Hedy desktop">
      <header className="os-menubar"><a href="#desktop" className="os-brand">hedy.t</a><a href="#top" className="os-shutdown">Back to cover ↗</a><DesktopClock /></header>
      <div className="os-wallpaper-caption"><h1 ref={desktopHeading} tabIndex={-1}>Welcome to<br /><em>my world.</em></h1><p>I&apos;m Hedy, a UX/UI designer in Sydney. I turn everyday observations into mobile experiences — listening to people, shaping interactions, and bringing ideas to life in SwiftUI.</p></div>
      <div className="os-files" aria-label="Desktop files">{files.filter(file => file.id !== "about").map(file => <DesktopFile key={file.id} id={file.id} name={file.name}>{file.id === "work" ? <WorkFolderPreview /> : <FileIcon type={file.type}/>}<strong>{file.name}</strong><span>{file.extension}</span></DesktopFile>)}</div>
      <DesktopSticker />
      <div className="os-desktop-note"><span className="os-status-dot" />{site.status}<span className="os-note-location">Sydney, Australia</span></div>
      <p className="os-hint">Click to explore. Drag to make it yours.</p>
    </section>}

    <nav className="cover-nav" aria-label="Main navigation">{[{id: launched ? "desktop" : "top", label: launched ? "Desktop" : "Home"}, {id:"work",label:"Projects"},{id:"about",label:"About"},{id:"contact",label:"Contact"}].map(item => <a key={item.id} href={`#${item.id}`} className={route === item.id ? "is-active" : ""} aria-current={route === item.id ? "page" : undefined}>{item.label}</a>)}</nav>

    {launched && windows.map((window, index) => {
      const route = window.id;
      const file = files.find(file => file.id === route)!;
      return <DesktopWindow key={route} id={route} title={file.name} index={index} active={activeWindow === route} minimized={window.minimized}
        onActivate={() => {if (activeWindow !== route) openWindow(route);}} onClose={() => closeWindow(route)} onMinimize={() => minimizeWindow(route)}>
        {route === "about" && <article className="os-about">
          <div className="os-eyebrow">01 / A LITTLE ABOUT ME</div>
          <div className="relative">
            {site.about.paragraphs.map(p => <p key={p}>{p}</p>)}

            <div className="hidden md:block">
              <Polaroid src="/hedy-sydney-portrait.jpg" alt="Hedy in front of the Sydney Opera House" caption="hedy in Sydney" rotate={-6} width={140}
                className="absolute" style={{ right: "-4%", top: "-18px", zIndex: 20 }} />
              <Polaroid src="/hedy-beach.jpg" alt="Hedy at the beach" caption="a fav moment" rotate={7} width={130}
                className="absolute" style={{ right: "8%", top: "220px", zIndex: 15 }} />
              <Polaroid src="/hedy-izakaya.jpg" alt="Hedy at an izakaya in Japan" caption="last trip" rotate={-4} width={135}
                className="absolute" style={{ right: "-5%", top: "410px", zIndex: 16 }} />
            </div>
          </div>

          <div className="md:hidden flex gap-4 overflow-x-auto pb-2 -mx-1 px-1" style={{scrollbarWidth:"none"}}>
            <Polaroid src="/hedy-sydney-portrait.jpg" alt="Hedy in front of the Sydney Opera House" caption="hedy in Sydney" rotate={-4} width={120} className="shrink-0" />
            <Polaroid src="/hedy-beach.jpg" alt="Hedy at the beach" caption="a fav moment" rotate={5} width={120} className="shrink-0" />
            <Polaroid src="/hedy-izakaya.jpg" alt="Hedy at an izakaya in Japan" caption="last trip" rotate={-3} width={120} className="shrink-0" />
          </div>

          <a className="os-text-link" href="#work">Explore my work ↗</a>
        </article>}
        {route === "work" && <><div className="os-eyebrow">02 / SELECTED WORK</div><h3>Made with curiosity.</h3><p className="os-lead">A collection of research, interfaces, and experiments.</p><div className="os-projects">{projects.map((project, i) => <article key={project.slug} className="os-project"><div className="os-project-number">{String(i+1).padStart(2,"0")}</div><div><span className="os-eyebrow">{project.tag} · {project.year}</span><h4>{project.title}</h4><p>{project.description}</p>{project.href !== "#" ? <Link className="os-text-link" href={project.href}>Open case study ↗</Link> : <span className="os-coming-soon">Case study coming soon</span>}</div></article>)}</div></>}
        {route === "toolbox" && <><div className="os-eyebrow">03 / MY TOOLBOX</div><h3>From a question<br/>to something real.</h3><p className="os-lead">The tools and methods I use to explore, design, and build.</p><div className="os-skills">{site.about.chips.map((chip,i) => <div key={chip}><span>{String(i+1).padStart(2,"0")}</span>{chip}</div>)}</div></>}
        {route === "contact" && <><div className="os-eyebrow">04 / LET'S CONNECT</div><h3>Good things start<br/>with a hello.</h3><p className="os-lead">Open for opportunities, collaborations, and conversations about design.</p><a className="os-contact-link" href={`mailto:${site.email}`}>{site.email} ↗</a><a className="os-text-link" href={site.links.linkedin} target="_blank" rel="noreferrer">Find me on LinkedIn ↗</a><p className="os-contact-note">Based in Sydney, Australia.</p></>}
      </DesktopWindow>;
    })}
    {launched && windows.some(window => window.minimized) && <nav className="minimized-windows" aria-label="Minimized windows">{windows.filter(window => window.minimized).map(window => <button key={window.id} onClick={() => openWindow(window.id)} aria-label={`Restore ${files.find(file => file.id === window.id)!.name}`}>{files.find(file => file.id === window.id)!.name}<span aria-hidden="true"> ↗</span></button>)}</nav>}
  </main>;
}
