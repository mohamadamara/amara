import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectImage from "@/components/ProjectImage";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.shortDesc
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  return (
    <div className="page-fade min-h-screen bg-bg text-white">
      <Navbar />

      <main className="pb-24">
        {/* Full-bleed hero image */}
        <section className="relative w-full">
          <div className="relative h-[260px] w-full overflow-hidden rounded-b-3xl sm:h-[360px] md:h-[500px]">
            <ProjectImage
              src={project.imagePath || undefined}
              alt={`${project.title} hero`}
              className="h-full w-full"
              rounded="b3xl"
              bordered={false}
              priority
            />
            {/* Gradient overlay fading into the page background */}
            <div className="pointer-events-none absolute inset-0 rounded-b-3xl bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          </div>

          {/* Back button floating over the hero */}
          <div className="container absolute left-0 right-0 top-6">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-white/20"
            >
              <span aria-hidden>←</span>
              Back to All Projects
            </Link>
          </div>
        </section>

        <section className="container -mt-10 md:-mt-16">
          <div className="mx-auto max-w-3xl space-y-12">
            <Reveal>
              <header className="space-y-6">
                <p className="eyebrow">Case Study</p>
                <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight">
                  {project.title}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted">{project.shortDesc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.06] bg-surface3 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-stone-950 shadow-accent-glow transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-accent-bright hover:shadow-accent-soft sm:flex-none"
                  >
                    <span aria-hidden>↗</span>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-white/20 sm:flex-none"
                  >
                    <span aria-hidden>⌥</span>
                    GitHub Repo
                  </a>
                </div>
              </header>
            </Reveal>

            <Reveal delay={120}>
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
                <div className="space-y-4 text-base leading-relaxed text-gray-400">
                  {project.fullExplanation.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={180}>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-card border border-white/[0.06] bg-surface2 p-4 text-base leading-relaxed text-gray-300"
                    >
                      <span
                        aria-hidden
                        className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-[11px] text-accent-bright"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal delay={220}>
              <div className="border-t border-white/10 pt-8">
                <Link
                  href="/#projects"
                  className="premium-link text-base"
                >
                  ← Back to all projects
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
