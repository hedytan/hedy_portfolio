"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav({ variant = "default" }: { variant?: "default" | "cover" }) {
  const [active, setActive] = useState("top");

  useEffect(() => {
    if (variant !== "cover") return;
    const update = () => {
      let current = "top";
      for (const id of ["top", "work", "about", "contact"]) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.45) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [variant]);

  if (variant === "cover") {
    return (
      <nav className="cover-nav" aria-label="Main navigation">
        {[{ id: "top", label: "Home" }, { id: "work", label: "Projects" }, { id: "about", label: "About" }, { id: "contact", label: "Contact" }].map(({ id, label }) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={active === id ? "is-active" : ""}>{label}</a>
        ))}
      </nav>
    );
  }
  return (
    <nav className="glass-nav fixed top-0 inset-x-0 z-40 border-b border-ink/10">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="text-lg font-semibold tracking-tight no-underline">
          .HEDY
        </Link>
        <ul className="flex items-center gap-8 list-none font-mono text-sm">
          <li><Link href="/#work" className="text-ink hover:text-blue transition-colors no-underline">projects</Link></li>
          <li><Link href="/#about" className="text-ink hover:text-blue transition-colors no-underline">about</Link></li>
          <li><Link href="/#contact" className="text-ink hover:text-blue transition-colors no-underline">contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
