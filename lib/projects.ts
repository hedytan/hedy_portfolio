// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here — edit THIS file only.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Hedy Tan",
  email: "weiqian09@gmail.com",
  greeting: "Hey, I'm Hedy",
  status: "available for new projects",
  bigName: "Hedy Tan",
  tagline: "I'm a UX/UI designer & student based in Sydney",
  links: {
    linkedin: "https://www.linkedin.com/in/hedy-tan-83b81423b/",
    github: "#",
    resume: "#",
  },
  about: {
    lead: "my craft is building experiences that bring value to people — I care about function over form, honest research, and interfaces that actually feel right.",
    paragraphs: [
      "My background runs from digital media through interaction design. In practice that means I'll sketch a shape on paper, tune its Bézier curves in code, and care equally about both. I've run user interviews, wired ESP32 boards, shipped SwiftUI prototypes, and designed for people from independent musicians to elderly music lovers.",
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
  // card look
  cardBg: string;    // big color block behind the card
  titleColor: string;
  imgPlaceholder: string;
};

export const projects: Project[] = [
  {
    slug: "resonance",
    year: "2026",
    tag: "iOS · SwiftUI",
    title: "Resonance",
    href: "/projects/resonance",
    cardBg: "#AEB98A",       // olive
    titleColor: "#1B1B1B",
    imgPlaceholder: "Resonance — feed screen\n▸ drop your app screenshot here",
  },
  {
    slug: "fitsapp",
    year: "2025",
    tag: "UI/UX · Team Lead",
    title: "FitsApp",
    href: "#",
    cardBg: "#E4DCC8",       // sand
    titleColor: "#2C3AE0",
    imgPlaceholder: "FitsApp — app + widget\n▸ drop your screenshot here",
  },
  {
    slug: "spotify-ease",
    year: "2026",
    tag: "UI/UX · Accessibility",
    title: "Spotify Ease",
    href: "#",
    cardBg: "#9FB0A3",       // muted sage
    titleColor: "#2C3AE0",
    imgPlaceholder: "Spotify Ease — redesign\n▸ drop your screenshot here",
  },
  {
    slug: "keyboard-research",
    year: "2025",
    tag: "Human Research",
    title: "Keyboard Research",
    href: "#",
    cardBg: "#B8C0C7",       // cool grey-blue
    titleColor: "#1B1B1B",
    imgPlaceholder: "Keyboard Research — study\n▸ drop your screenshot here",
  },
  {
    slug: "sync-brew",
    year: "2025",
    tag: "Physical product & App",
    title: "Sync Brew",
    href: "#",
    cardBg: "#C9A876",       // warm coffee tan
    titleColor: "#1B1B1B",
    imgPlaceholder: "Sync Brew — product + app\n▸ drop your screenshot here",
  },
];
