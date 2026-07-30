"use client";

import Image from "next/image";
import { useState } from "react";

type Rounded = "card" | "section" | "b3xl" | "none";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  rounded?: Rounded;
  hoverZoom?: boolean;
  bordered?: boolean;
};

const roundedClassMap: Record<Rounded, string> = {
  card: "rounded-card",
  section: "rounded-section",
  b3xl: "rounded-b-3xl",
  none: ""
};

export default function ProjectImage({
  src,
  alt,
  className,
  priority,
  rounded = "card",
  hoverZoom = false,
  bordered = true
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const roundedClass = roundedClassMap[rounded];
  const borderClass = bordered ? "border border-white/10" : "";

  if (!src) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-surface2 text-sm text-muted ${borderClass} ${roundedClass} ${className ?? ""}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-white/[0.02]" />
        <span className="relative z-10">No image available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${borderClass} ${roundedClass} ${className ?? ""}`}>
      <div
        className={`absolute inset-0 animate-pulse bg-gradient-to-r from-surface2 via-surface3 to-surface2 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-500 ease-premium ${
          loaded ? "opacity-100" : "opacity-0"
        } ${hoverZoom ? "group-hover:scale-105" : ""}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
    </div>
  );
}
