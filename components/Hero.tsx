import Image from "next/image";
import Link from "next/link";
import { site, projects } from "@/lib/projects";

// A quick-glance strip of project thumbnails, sitting just below the
// fold so scrolling down a little reveals the work right away.
function ProjectThumbs() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {projects.map((p) => (
        <Link
          key={p.slug}
          href={p.href}
          className="group relative block aspect-[4/3] rounded-xl overflow-hidden border border-faint bg-panel no-underline"
        >
          {p.img ? (
            <Image
              src={p.img}
              alt={p.title}
              fill
              sizes="220px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-3 text-center">
              <span className="font-hand text-xl text-ink/70 -rotate-1">{p.title}</span>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      {/* soft grain-texture background, faded out at the bottom */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/4a519435eb4c6337ee9be0024580dab0.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(to bottom, transparent 40%, #F0DEBD 100%)" }}
        />
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 pt-28">
        <div className="border-t border-faint pt-6">
          {/* top row */}
          <div className="flex justify-between items-start font-mono text-[13px] text-soft">
            <span>{site.greeting}</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8FA97E]" />
              {site.status}
            </span>
          </div>

          {/* giant name */}
          <div className="relative flex flex-col items-center justify-center min-h-[50vh] gap-10 md:gap-16">
            <h1
              className="font-semibold text-center leading-none tracking-tight select-none"
              style={{
                fontSize: "clamp(52px, 10vw, 160px)",
                color: "#FFFFFF",
              }}
            >
              {site.bigName}
            </h1>
            <p className="w-full text-center font-semibold text-[clamp(20px,3.4vw,40px)] px-4 text-soft">
              {site.tagline}
            </p>
            {/* hand-drawn squiggle-into-loop accent, bottom-left */}
            <svg
              viewBox="0 0 140 40"
              className="absolute left-0 bottom-[10%] hidden md:block w-32 lg:w-36 h-auto text-soft/60"
              fill="none"
            >
              <path
                d="M4,20 Q20,2 36,20 T68,20 T98,20 C110,4 134,6 136,20 C138,34 116,38 104,28 C94,20 98,8 108,6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="pb-16 md:pb-24">
            <ProjectThumbs />
          </div>
        </div>
      </div>
    </header>
  );
}
