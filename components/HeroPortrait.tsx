"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroPortrait() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
      style={{ perspective: 1400 }}
    >
      {/* Warm gold ambient light pooling under the laptop */}
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute inset-x-0 top-1/4 -bottom-10 -z-10 rounded-full bg-gradient-to-tr from-amber-800/30 via-amber-500/[0.14] to-transparent blur-3xl"
      />

      {/* Lid — opens like a real MacBook on page load */}
      <motion.div
        initial={reduceMotion ? false : { rotateX: -70, opacity: 0.35 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        style={{ transformOrigin: "bottom center", transformPerspective: 1400 }}
        className="group relative"
      >
        {/* Aluminum bezel */}
        <div className="relative rounded-t-[20px] border border-white/10 bg-gradient-to-b from-[#1b1b1e] to-[#0c0c0e] p-[10px] pb-[8px] shadow-card-luxe">
          {/* Notch */}
          <div className="absolute left-1/2 top-[10px] z-10 h-[13px] w-[120px] -translate-x-1/2 rounded-b-[8px] bg-[#0c0c0e]" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[12px] bg-black">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/profile.jpg"
                alt="Mohamad Aamara"
                fill
                priority
                sizes="(max-width: 1024px) 512px, 600px"
                className="object-cover"
                style={{ objectPosition: "50% 18%" }}
              />

              {/* macOS menu bar */}
              <div className="absolute inset-x-0 top-0 z-10 flex h-[22px] items-center justify-between border-b border-white/[0.06] bg-black/35 px-3 text-white/85 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <svg
                    aria-hidden
                    width="10"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
                  </svg>
                  <span className="text-[9px] font-semibold tracking-wide">
                    Portfolio
                  </span>
                  <span className="hidden text-[9px] text-white/50 sm:inline">
                    File&ensp;Edit&ensp;View&ensp;Window&ensp;Help
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {/* Wi-Fi */}
                  <svg
                    aria-hidden
                    width="13"
                    height="10"
                    viewBox="0 0 14 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  >
                    <path d="M1 3.5C4.5 0.6 9.5 0.6 13 3.5" />
                    <path d="M3.2 6C5.6 4.1 8.4 4.1 10.8 6" />
                    <path d="M5.4 8.3C6.4 7.6 7.6 7.6 8.6 8.3" />
                    <circle cx="7" cy="10" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                  {/* Battery */}
                  <span className="flex items-center gap-1">
                    <span className="text-[8px] text-white/60">100%</span>
                    <svg aria-hidden width="19" height="9" viewBox="0 0 20 10">
                      <rect
                        x="0.5"
                        y="0.5"
                        width="16"
                        height="9"
                        rx="2.5"
                        fill="none"
                        stroke="currentColor"
                        opacity="0.45"
                      />
                      <rect x="2" y="2" width="13" height="6" rx="1.5" fill="#fbbf24" />
                      <path d="M18.3 3.2v3.6c1.1-.3 1.1-3.3 0-3.6z" fill="currentColor" opacity="0.45" />
                    </svg>
                  </span>
                  {/* Clock */}
                  <span className="text-[9px] font-medium tabular-nums">9:41</span>
                </div>
              </div>

              {/* Screen glass: soft glare that sweeps on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-1000 ease-premium group-hover:translate-x-full"
              />
              {/* Bottom vignette so the glass bar reads clearly */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
              />

              {/* macOS-style glass name bar */}
              <div className="absolute inset-x-5 bottom-3 sm:inset-x-8">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/50 px-4 py-3 shadow-[0_8px_28px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                  <span className="logo-gradient flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-stone-950 shadow-accent-glow">
                    M
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="truncate text-xs font-semibold text-white sm:text-sm">
                        Mohamad Aamara
                      </p>
                      <svg
                        aria-label="Verified"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="#fbbf24"
                        className="shrink-0"
                      >
                        <path d="M12 1.5l2.4 2.2 3.2-.5 1 3.1 3 1.3-.7 3.2 2 2.6-2 2.6.7 3.2-3 1.3-1 3.1-3.2-.5L12 25.4l-2.4-2.2-3.2.5-1-3.1-3-1.3.7-3.2-2-2.6 2-2.6-.7-3.2 3-1.3 1-3.1 3.2.5z" transform="scale(0.92) translate(1,-1.2)" />
                        <path d="M8.5 12.2l2.3 2.3 4.7-4.9" fill="none" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="mt-0.5 truncate text-[9px] font-medium uppercase tracking-[0.14em] text-amber-200/70 sm:text-[10px]">
                      Software Engineer · AI &amp; Full Stack
                    </p>
                  </div>
                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] font-medium text-emerald-300">
                      Available
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Deck / base */}
      <div className="relative -mx-[5%]">
        <div className="relative h-[15px] rounded-b-[14px] rounded-t-[2px] border-x border-b border-white/10 bg-gradient-to-b from-[#2c2c30] via-[#19191c] to-[#101012]">
          {/* Edge highlight where the lid meets the deck */}
          <div
            aria-hidden
            className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
          {/* Thumb notch */}
          <div className="absolute left-1/2 top-0 h-[6px] w-[90px] -translate-x-1/2 rounded-b-[7px] bg-black/70" />
        </div>
        {/* Soft floor shadow */}
        <div
          aria-hidden
          className="mx-auto mt-1 h-4 w-[82%] rounded-[100%] bg-black/60 blur-md"
        />
      </div>
    </motion.div>
  );
}
