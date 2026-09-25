"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/projects";

export default function Hero() {
  const launchRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
      if (document.activeElement !== document.body) return;
      const hero = document.getElementById("top");
      if (!hero || hero.getBoundingClientRect().bottom < window.innerHeight / 2) return;
      event.preventDefault();
      launchRef.current?.click();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header id="top" className="terminal-hero" aria-label="Welcome to Hedy's portfolio">
      <div className="hero-stage">
        <div className="hero-laptop">
          <div className="laptop-lid">
            <div className="laptop-camera" aria-hidden="true" />
            <a href="#desktop" className="terminal-screen terminal-screen-link" aria-label="Enter Hedy’s desktop">
              <div className="terminal-titlebar">
                <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
                <span>hedy@sydney ~ zsh</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-block" style={{ animationDelay: "100ms" }}>
                  <p className="terminal-command"><span>$</span> whoami</p>
                  <h1 className="terminal-output">&gt; {site.name}</h1>
                </div>
                <div className="terminal-block" style={{ animationDelay: "400ms" }}>
                  <p className="terminal-command"><span>$</span> cat about.md</p>
                  <p className="terminal-output">&gt; {site.tagline}</p>
                  <p className="terminal-output terminal-indent">Master of Interaction Design @ UTS</p>
                  <p className="terminal-output terminal-indent">Research, empathy & a little curiosity.</p>
                </div>
                <div className="terminal-block" style={{ animationDelay: "700ms" }}>
                  <p className="terminal-command"><span>$</span> echo "designed for people"</p>
                  <p><mark className="terminal-highlight">&gt; designed for people.</mark></p>
                </div>
                <div className="terminal-block terminal-last" style={{ animationDelay: "1000ms" }}>
                  <p className="terminal-command"><span>$</span> open hedy-portfolio.app<span className="terminal-cursor" aria-hidden="true" /></p>
                </div>
              </div>
            </a>
          </div>
          <div className="laptop-base" aria-hidden="true"><span /></div>
          <div className="laptop-shadow" aria-hidden="true" />
        </div>
        <a ref={launchRef} href="#desktop" className="hero-launch">
          <span>Click the screen or press Enter</span>
        </a>
      </div>
    </header>
  );
}
