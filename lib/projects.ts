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
      "hi, i'm hedy, a UX/UI designer based in sydney. welcome to my little corner of the internet <3",
      "i have a habit of noticing small things: an interaction that feels awkward, a detail that makes me smile. sometimes those observations become sketches, sometimes apps. my background is in digital media and interaction design, and i'm exploring how research, visuals and a little code can come together to make something people want to spend time with.",
    ],
    chips: ["Figma", "Adobe Creative Suite", "Video editing", "Photography", "Front-end coding", "SwiftUI", "User research", "Prototyping", "Interaction design", "Visual storytelling"],
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
    slug: "mind-the-gap",
    year: "2026",
    tag: "Interactive prototype",
    title: "Mind the Gap",
    href: "/projects/mind-the-gap",
    description: "A vending machine for feelings: write what's on your mind, receive a card, and see how a station feels.",
    imgPlaceholder: "Mind the Gap — vending machine\n▸ drop your screenshot here",
  },
  {
    slug: "job-buddy",
    year: "2026",
    tag: "Interaction prototype",
    title: "Job Buddy",
    href: "/projects/job-buddy",
    description: "A handheld device and companion app that turns a first meeting at an event into a saved connection, with an icebreaker to start the conversation.",
    imgPlaceholder: "Job Buddy — Tappy + app\n▸ drop your screenshot here",
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
    slug: "keyboard-research",
    year: "2025",
    tag: "Human Research",
    title: "Typing Research",
    href: "/projects/keyboard-research",
    description: "A walkthrough of my human research study on keyboard typing experiences.",
    imgPlaceholder: "Keyboard Research — study\n▸ drop your screenshot here",
  },
];
