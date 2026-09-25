// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here — edit THIS file only.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Hedy Tan",
  email: "weiqian09@gmail.com",
  greeting: "Hey, I'm Hedy",
  status: "available for new projects",
  bigName: "Hedy Tan",
  tagline: "UX/UI designer based in Sydney",
  links: {
    linkedin: "https://www.linkedin.com/in/hedy-tan-83b81423b/",
    github: "#",
    resume: "#",
  },
  about: {
    lead: "hi, i'm hedy.",
    paragraphs: [
      "i built this site to give my work an actual home — and honestly, to get a little better at putting my own voice next to it instead of just case studies.",
      "most at home somewhere between sketching an idea on paper and tuning its curves in Figma. my background runs from digital media into interaction design, and i care more about whether something actually works for the person using it than whether it photographs well — function over form, always.",
      "in practice that's meant running user interviews, wiring up ESP32 boards, and shipping SwiftUI prototypes — for people ranging from independent musicians to elderly music lovers. that range is probably my favourite part of this work: good design rarely looks the same twice.",
    ],
    personalNote: "tell me a hobby, a fun fact, or something totally unrelated to design — i'll drop it in right here.",
    closing: "always up for talking through a new idea, a book recommendation, or a project worth building — say hi.",
    chips: ["Figma", "SwiftUI", "User research", "Prototyping", "Accessibility", "ESP32", "AI-assisted workflows"],
  },
};

export type Project = {
  slug: string;
  year: string;
  tag: string;
  title: string;
  href: string;
  description: string;
  highlight?: string;  // one-line, factual scope signal — timeline, team size, role (optional)
  img?: string;        // real screenshot preview (optional)
  frames?: string[];   // hover walkthrough sequence (optional)
  imgPlaceholder: string;
};

export const projects: Project[] = [
  {
    slug: "resonance",
    year: "2026",
    tag: "iOS · SwiftUI",
    title: "Resonance",
    href: "/projects/resonance",
    description: "An emotion-first music app, designed and built end-to-end in SwiftUI. Artists share the feeling behind a song; fans respond with how it resonated.",
    highlight: "12 weeks · solo · 6 screens shipped in SwiftUI",
    img: "/resonance/welcome.png",
    frames: [
      "/resonance/welcome.png",
      "/resonance/feed.png",
      "/resonance/moment.png",
      "/resonance/connection.png",
      "/resonance/express.png",
      "/resonance/draw-mood.png",
    ],
    imgPlaceholder: "Resonance — feed screen\n▸ drop your app screenshot here",
  },
  {
    slug: "fitsapp",
    year: "2025",
    tag: "UX Research · Team",
    title: "FitsApp",
    href: "/projects/fitsapp",
    description: "A step-tracker where every walk grows a tree — motivation from delight, not just data. My UX research and design work in the Apple Foundation Program.",
    highlight: "4 weeks · team of 5 · Apple Foundation Program",
    imgPlaceholder: "FitsApp — coming soon\n▸ drop your screenshot here",
  },
  {
    slug: "spotify-ease",
    year: "2026",
    tag: "UI/UX · Accessibility",
    title: "Spotify Ease",
    href: "#",
    description: "A walkthrough of my accessibility-focused redesign of the Spotify app.",
    imgPlaceholder: "Spotify Ease — redesign\n▸ drop your screenshot here",
  },
  {
    slug: "keyboard-research",
    year: "2025",
    tag: "Human Research",
    title: "Keyboard Research",
    href: "#",
    description: "A walkthrough of my human research study on keyboard typing experiences.",
    imgPlaceholder: "Keyboard Research — study\n▸ drop your screenshot here",
  },
  {
    slug: "sync-brew",
    year: "2025",
    tag: "Physical product & App",
    title: "Sync Brew",
    href: "#",
    description: "A walkthrough of my physical product and companion app design for Sync Brew.",
    imgPlaceholder: "Sync Brew — product + app\n▸ drop your screenshot here",
  },
];
