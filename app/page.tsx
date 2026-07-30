import HeroPortrait from "@/components/HeroPortrait";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import StatCounter from "@/components/StatCounter";
import TechMarquee from "@/components/TechMarquee";
import { projects } from "@/data/projects";

const stats = [
  { value: "6+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Type-Safe Code" },
  { value: "∞", label: "Attention to Detail" }
];

export default function HomePage() {
  return (
    <div className="page-fade min-h-screen overflow-x-clip bg-bg text-white">
      <ScrollProgress />
      <Navbar />

      <main className="container">
        {/* Hero */}
        <section className="relative section-gap">
          {/* Faded grid backdrop */}
          <div
            aria-hidden
            className="hero-grid pointer-events-none absolute inset-x-[-10vw] -top-24 -z-10 h-[640px]"
          />
          {/* Ambient gold / bronze glows */}
          <div
            aria-hidden
            className="glow-orb pointer-events-none absolute -top-32 left-1/2 -z-10 h-[540px] w-[840px] max-w-[120vw] -translate-x-1/2 rounded-full bg-accent/[0.13] blur-[130px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 -z-10 h-[340px] w-[340px] rounded-full bg-accent2/[0.14] blur-[110px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-40 -left-24 -z-10 h-[280px] w-[280px] rounded-full bg-orange-500/[0.07] blur-[100px]"
          />

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.08] px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium tracking-wide text-white/85">
                  Available for new projects
                </span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.06] tracking-tight">
                Digital products with{" "}
                <span className="text-gradient">premium execution</span> and
                measurable impact.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                I help startups and teams design and ship polished web experiences
                with strong visual systems, clean architecture, and obsessive detail.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 px-8 py-3 text-sm font-semibold text-stone-950 shadow-accent-glow transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-accent-soft"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-full"
                  />
                  View Projects
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-premium group-hover:translate-y-0.5"
                  >
                    ↓
                  </span>
                </a>
                <a
                  href="https://github.com/mohamadamara"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.08]"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <HeroPortrait />
          </div>

          <Reveal delay={240}>
            <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm md:grid-cols-4 md:divide-x md:divide-white/[0.06]">
                {stats.map((stat) => (
                  <div key={stat.label} className="px-4 py-6 text-center md:py-8">
                    <p className="text-3xl font-semibold md:text-4xl">
                      <StatCounter value={stat.value} className="text-gradient" />
                    </p>
                    <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
        </section>
      </main>

      {/* Tech marquee — full-bleed strip */}
      <Reveal>
        <TechMarquee />
      </Reveal>

      <main className="container">
        {/* Projects */}
        <section id="projects" className="scroll-mt-24 space-y-10 pb-4 pt-16 md:pt-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-3">
                <p className="eyebrow">Case Studies</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">
                  Selected <span className="text-gradient">Projects</span>
                </h2>
                <div className="h-px w-24 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
              </div>
              <span className="eyebrow hidden md:inline">{projects.length} projects</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 100} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-gap">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] px-6 py-16 text-center md:py-24">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/[0.08] via-transparent to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[600px] max-w-full -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[100px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
              />

              <p className="eyebrow">Get in Touch</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
                Let&apos;s build something{" "}
                <span className="text-gradient">exceptional</span> together.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
                Have a project in mind? I&apos;m currently open to new opportunities
                and collaborations.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:mohamadaamara545@gmail.com"
                  className="group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 px-8 py-3 text-sm font-semibold text-stone-950 shadow-accent-glow transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-accent-soft"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-full"
                  />
                  Start a Conversation
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamad-amara-78b147377/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.08]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="container flex flex-col items-start justify-between gap-4 text-sm text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Mohamad Aamara. Crafted with Next.js.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noreferrer"
              className="premium-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noreferrer"
              className="premium-link"
            >
              LinkedIn
            </a>
            <a href="mailto:mohamadaamara545@gmail.com" className="premium-link">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
