import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectImage from "./ProjectImage";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

type Props = {
  project: Project;
  delay?: number;
};

export default function ProjectCard({ project, delay = 0 }: Props) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard className="h-full">
        <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-white/[0.06] bg-surface2 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-luxe">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent-bright/70 to-transparent opacity-0 transition-opacity duration-300 ease-premium group-hover:opacity-100"
        />
        <Link href={`/projects/${project.slug}`} className="block" aria-label={`View ${project.title}`}>
          <div className="relative aspect-video w-full overflow-hidden">
            <ProjectImage
              src={project.imagePath}
              alt={`${project.title} cover`}
              className="h-full w-full"
              rounded="none"
              bordered={false}
              hoverZoom
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-300 ease-premium group-hover:opacity-60" />
            <div className="pointer-events-none absolute bottom-4 left-4">
              <span className="eyebrow text-white/80">Case Study</span>
            </div>
          </div>
        </Link>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{project.shortDesc}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.06] bg-surface3 px-3 py-1 text-xs font-medium text-gray-300 transition-colors duration-300 ease-premium group-hover:border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-accent px-6 py-2 text-sm font-semibold text-stone-950 shadow-accent-glow transition-all duration-300 ease-premium hover:bg-accent-bright hover:shadow-accent-soft"
          >
            View Details
            <span aria-hidden className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </article>
      </TiltCard>
    </Reveal>
  );
}
