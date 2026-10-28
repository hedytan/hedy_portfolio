import Link from "next/link";
import Image from "next/image";

export function CaseNav({ name }: { name: string }) { return <nav className="ec-nav"><Link href="/projects">Hedy Tan / Selected work</Link><span>{name}</span><a href="#outcome">Outcome ↓</a></nav>; }
export function CaseSection({ number, label, title, children }: { number: string; label: string; title: string; children: React.ReactNode }) { return <section className="ec-section"><div className="ec-label">{number} / {label}</div><div className="ec-content"><h2>{title}</h2>{children}</div></section>; }
export function Screen({ src, caption, width = 1206, height = 2622 }: { src: string; caption: string; width?: number; height?: number }) { return <figure className="ec-screen"><Image src={src} alt={caption} width={width} height={height} sizes="(max-width: 650px) 80vw, 300px" /><figcaption>{caption}</figcaption></figure>; }
export function CaseEnd({ href, name }: { href: string; name: string }) { return <footer className="ec-end"><span>Keep exploring</span><Link href={href}>{name} ↗</Link><Link href="/projects">Back to all projects</Link></footer>; }
