"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const projectsActive = pathname === "/" || pathname.startsWith("/projects");

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav-enter sticky top-0 z-50 border-b border-white/[0.06] bg-black/50 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-white md:text-lg"
        >
          <span className="logo-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold text-stone-950 shadow-accent-glow">
            M
          </span>
          Mohamad Aamara
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#projects" className="premium-link" data-active={projectsActive}>
            Projects
          </Link>
          <a
            href="https://github.com/mohamadamara"
            target="_blank"
            rel="noreferrer"
            className="premium-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohamad-amara-78b147377/"
            target="_blank"
            rel="noreferrer"
            className="premium-link"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 ease-premium hover:border-white/20 md:hidden"
        >
          <span className="text-base">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile overlay + slide-in panel */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-premium ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-xs border-l border-white/10 bg-surface2 p-6 shadow-2xl transition-transform duration-300 ease-premium ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mt-20 flex flex-col gap-2">
            <Link
              href="/#projects"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-white transition-colors duration-300 hover:bg-white/5"
            >
              Projects
            </Link>
            <a
              href="https://github.com/mohamadamara"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-white transition-colors duration-300 hover:bg-white/5"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamad-amara-78b147377/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-white transition-colors duration-300 hover:bg-white/5"
            >
              LinkedIn
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
