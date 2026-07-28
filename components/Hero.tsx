import { site } from "@/lib/projects";

export default function Hero() {
  return (
    <header id="top" className="max-w-content mx-auto px-6 md:px-10 pt-28">
      <div className="border-t border-faint pt-6">
        {/* top row */}
        <div className="flex justify-between items-start font-mono text-[13px] text-soft">
          <span>{site.greeting}</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8FA97E]" />
            {site.status}
          </span>
        </div>

        {/* giant ghost name */}
        <div className="relative flex items-center justify-center min-h-[62vh]">
          <h1
            className="font-semibold text-center leading-none tracking-tight select-none"
            style={{
              fontSize: "clamp(72px, 17vw, 300px)",
              color: "#FFFFFF",
            }}
          >
            {site.bigName}
          </h1>
          <p className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-full text-center font-semibold text-[clamp(20px,3.4vw,40px)] px-4">
            {site.tagline}
          </p>
          {/* little line + circle accent, bottom-left */}
          <div className="absolute left-0 bottom-[20%] hidden md:flex items-center">
            <span className="w-16 h-px bg-faint" />
            <span className="w-6 h-6 rounded-full border border-faint" />
          </div>
        </div>
      </div>
    </header>
  );
}
