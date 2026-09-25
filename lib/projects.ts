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
    paragraphs: [
      "hi, i'm hedy - a UX/UI designer based in Sydney. welcome to my little corner of the internet <3",
      "i have a habit of noticing small things: an interaction that feels awkward, a detail that makes me smile, or a feeling that refuses to fit into a sentence. sometimes those observations become sketches. sometimes they become apps. sometimes they become a very specific conversation about whether that button really needs to be there.",
      "my background is in digital media and interaction design, and i'm now exploring how research, visuals, and a little code can come together to make something people want to spend time with.",
      "this website is a little like my sketchbook: personal, playful, and probably never quite finished. i hope you find something here that makes you curious. stay a while, open a folder, or say hello - i'd love to know what you're making, too.",
    ],
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
