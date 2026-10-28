import Link from "next/link";

// Shared top nav. On the home page, About/Contact scroll in place; elsewhere they link back home.
export default function SiteNav({ home = false }: { home?: boolean }) {
  const hash = (id: string) => (home ? `#${id}` : `/#${id}`);
  return <nav className="hp-nav" aria-label="Main navigation"><div className="hp-nav-in">
    <Link href="/" className="hp-nav-name">HEDY TAN<span> · UX/UI DESIGNER</span></Link>
    <div className="hp-nav-links">
      <Link href="/projects">PROJECTS</Link>
      <a href={hash("about")}>ABOUT</a>
      <a href={hash("contact")}>CONTACT</a>
    </div>
  </div></nav>;
}
