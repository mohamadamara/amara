# Mohamad Aamara — Portfolio

A dark, luxury-themed portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It showcases 12 projects with a premium **black & gold** design system, cinematic motion, and obsessive attention to detail.

## ✨ Design & Motion Highlights

- **Luxury dark theme** — bronze/gold/champagne palette on near-black, ambient glow orbs, faded architectural grid backdrop
- **MacBook hero mockup** — the portrait is displayed on a CSS-built MacBook screen (bezel, notch, aluminum deck) whose lid opens on page load, with a hover glare sweep, warm gold under-glow, and a macOS-style glass name bar
- **Color-cycling logo** — the "M" mark shifts through bronze → gold → champagne → orange on a slow loop
- **Scroll progress bar** — thin gradient bar at the top of the viewport, spring-smoothed with Framer Motion
- **Shimmering gradient headline** — the hero and section titles animate a slow gradient sweep
- **Animated count-up stats** — hero stats (8+ Projects, 15+ Technologies, …) count up when scrolled into view
- **Infinite tech marquee** — full-bleed scrolling strip of the tech stack, pauses on hover, edge-faded
- **3D tilt project cards** — cards tilt toward the cursor with spring physics, plus a glowing gradient top edge and violet shadow on hover
- **Shine-sweep buttons** — gradient capsule CTAs with a light sweep on hover
- **Navbar entrance** — slides down with a fade on page load
- **Scroll reveals** — every section fades and rises into view via IntersectionObserver
- **Accessible motion** — every animation is disabled under `prefers-reduced-motion`

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint the codebase |

## 📁 Project Structure

```
app/
  page.tsx                 → Home page (hero, stats, marquee, projects, CTA)
  projects/[slug]/page.tsx → Project detail pages
  layout.tsx               → Root layout, fonts, metadata
  globals.css              → Theme utilities, keyframes, reveal styles
components/
  HeroPortrait.tsx         → MacBook mockup with the photo on its screen (Framer Motion)
  Navbar.tsx               → Sticky nav with color-cycling logo mark + mobile menu
  ProjectCard.tsx          → Project card (tilt + hover glow)
  ProjectImage.tsx         → Cover image wrapper
  Reveal.tsx               → Scroll-into-view fade/rise animation
  ScrollProgress.tsx       → Top-of-page scroll progress bar (Framer Motion)
  StatCounter.tsx          → Count-up number animation (Framer Motion)
  TechMarquee.tsx          → Infinite scrolling tech strip
  TiltCard.tsx             → Spring-based 3D tilt wrapper (Framer Motion)
data/
  projects.ts              → ✏️ All project content lives here
public/images/             → Generated SVG cover images
scripts/gen-images.js      → Regenerates the SVG covers
```

## ✏️ Customization

- **Projects** — edit [`data/projects.ts`](data/projects.ts). Each entry drives a card on the home page and a detail page at `/projects/<slug>`.
- **Theme** — accent colors and shadows live in [`tailwind.config.ts`](tailwind.config.ts) (`accent`, `accent-bright`, `accent2`). Project cover images follow the same palette — regenerate them with `node scripts/gen-images.js` after changing hues.
- **Marquee items** — edit the `techs` array in [`components/TechMarquee.tsx`](components/TechMarquee.tsx).
- **Stats** — edit the `stats` array at the top of [`app/page.tsx`](app/page.tsx).
- **Links** — profile links in the navbar, hero, CTA, and footer point to the real GitHub/LinkedIn profiles. Per-project `githubUrl` values in `data/projects.ts` still use `yourname` placeholders — point them at real repos (or remove them) as each project gets published.

## 🧱 Tech Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion 12

## 📄 Related Files
and this is working link : https://amara-sigma.vercel.app/

- [`PROFILE_README.md`](PROFILE_README.md) — the GitHub **profile** README (for a repo named after your GitHub username), designed in the same purple luxury theme as this site.
