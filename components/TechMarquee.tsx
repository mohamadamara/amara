const techs = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "WebSockets",
  "OpenAI API",
  "Stripe",
  "Auth.js",
  "MDX",
  "Mapbox GL",
  "Chart.js",
  "Recharts",
  "Replicate API"
];

export default function TechMarquee() {
  const items = [...techs, ...techs];

  return (
    <div
      aria-hidden
      className="marquee relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="marquee-track flex w-max items-center">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-10 pr-10 text-sm font-medium tracking-wide text-white/40"
          >
            {tech}
            <span className="h-1 w-1 rounded-full bg-accent-bright/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
