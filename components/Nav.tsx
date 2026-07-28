"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-40 bg-bg/80 backdrop-blur-md">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20 border-b border-faint">
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
