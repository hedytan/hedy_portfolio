# Hedy Tan — Portfolio

A personal portfolio built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**,
with Lenis smooth-scroll and scroll-reveal animations. Deploys to Vercel with
automatic builds on every `git push`.

---

## 🚀 Run it locally

You need **Node.js 18.17+** installed (get it from https://nodejs.org).

```bash
npm install       # install dependencies (first time only)
npm run dev       # start the dev server
```

Open **http://localhost:3000** in your browser. Edits save and refresh live.

---

## ✏️ How to edit content

**Almost everything lives in one file: `lib/projects.ts`.**

- Your name, role, email, and social links → the `site` object at the top
- Hero headline & subtitle → `site.hero`
- About text & skill chips → `site.about`
- The three projects → the `projects` array

Tip: wrap a word in `*asterisks*` to make it **amber italic**
(e.g. `"a *different* lens"`).

**Other things to fill in:**
- Social links: replace the `#` placeholders in `lib/projects.ts` → `site.links`
- Project images: currently placeholder boxes. See "Adding images" below.
- Resonance case study copy → `app/projects/resonance/page.tsx`

---

## 🖼️ Adding project images

1. Put image files in the `public/` folder (create it if it doesn't exist),
   e.g. `public/resonance-feed.png`.
2. In `components/ProjectRow.tsx`, replace the placeholder `<span>` inside the
   thumbnail `<div>` with:
   ```tsx
   import Image from "next/image";
   // ...
   <Image src="/resonance-feed.png" alt="Resonance feed screen"
          width={800} height={500} className="w-full h-full object-cover" />
   ```
3. Files in `public/` are served from the root, so `public/x.png` → `/x.png`.

---

## 🎨 Colors & fonts

- Colors are defined in `tailwind.config.ts` under `theme.extend.colors`
  (bg, ink, soft, amber, etc.). Change them there and they update everywhere.
- Fonts (Instrument Serif + Inter) load via `next/font` in `app/layout.tsx`.

---

## ☁️ Deploy to Vercel (auto-deploy on every push)

### One-time setup

**Step 1 — Put the code on GitHub**
1. Create a free account at https://github.com and a new **empty** repository
   (e.g. `hedy-portfolio`). Don't add a README — you already have one.
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/hedy-portfolio.git
   git push -u origin main
   ```

**Step 2 — Connect Vercel**
1. Sign up at https://vercel.com with your GitHub account (free "Hobby" plan).
2. Click **Add New… → Project**, and **Import** your `hedy-portfolio` repo.
3. Vercel auto-detects Next.js — just click **Deploy**. No settings to change.
4. ~40 seconds later you get a live URL like `hedy-portfolio.vercel.app`.

### After that — it's automatic

Every time you push code, Vercel rebuilds and redeploys:
```bash
git add .
git commit -m "Update hero text"
git push
```
Within a minute your live site updates. That's the whole workflow.

### Custom domain (optional)
In the Vercel project → **Settings → Domains**, add a domain you own
(e.g. `hedytan.design`). Vercel gives you the DNS records to point it there.

---

## 📁 Project structure

```
app/
  layout.tsx              global layout, fonts, metadata
  page.tsx                homepage (hero + work + about + contact)
  globals.css             Tailwind + reveal/Lenis styles
  projects/resonance/     Resonance case study page
components/
  Nav.tsx                 nav bar + live Sydney clock
  Hero.tsx  WorkList.tsx  ProjectRow.tsx  About.tsx  Footer.tsx
  Reveal.tsx              scroll fade-in wrapper (reusable)
  SmoothScroll.tsx        Lenis smooth-scroll provider
lib/
  projects.ts             ← ALL your content lives here
  text.tsx                amber-italic text helper
tailwind.config.ts        colors + font tokens
```

---

Built by Hedy Tan · 2026
