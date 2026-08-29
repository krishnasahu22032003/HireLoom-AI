import Button from "../ui/Button";

const metrics = [
  { label: "Communication", value: 95 },
  { label: "Problem solving", value: 88 },
  { label: "Technical depth", value: 90 },
];

const logos = [
  {
    name: "Northwind",
    color: "text-blue-600 dark:text-blue-400",
    icon: <path d="M12 2L4 21l8-4 8 4L12 2Z" fill="currentColor" />,
  },
  {
    name: "Fluxlane",
    color: "text-violet-600 dark:text-violet-400",
    icon: <rect x="3" y="3" width="18" height="18" rx="6" fill="currentColor" />,
  },
  {
    name: "Corebase",
    color: "text-teal-600 dark:text-teal-400",
    icon: (
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2Z" fill="currentColor" />
    ),
  },
  {
    name: "Vantage",
    color: "text-amber-600 dark:text-amber-400",
    icon: <path d="M12 3l9 18H3L12 3Z" fill="currentColor" />,
  },
  {
    name: "Loopwork",
    color: "text-pink-600 dark:text-pink-400",
    icon: (
      <>
        <circle cx="8" cy="12" r="5" fill="currentColor" />
        <circle cx="16" cy="12" r="5" fill="currentColor" opacity="0.55" />
      </>
    ),
  },
  {
    name: "Anchorly",
    color: "text-indigo-600 dark:text-indigo-400",
    icon: <rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" />,
  },
  {
    name: "Driftbase",
    color: "text-emerald-600 dark:text-emerald-400",
    icon: <circle cx="12" cy="12" r="9" fill="currentColor" />,
  },
];

const Hero = () => {
  const logoTrack = [...logos, ...logos];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-10 text-center lg:px-8 lg:pt-18">
        <a
          href="#features"
          className="group inline-flex items-center gap-2 rounded-full border border-gray-200/70 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md transition-colors hover:border-gray-300 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
        >
          <span className="h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
          New: AI scores every interview in real time
          <svg
            className="h-3 w-3 flex-none text-gray-400 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </a>

        <h1 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Let AI run the interview.
          <br />
          You just meet{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            the best.
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Automated screening calls, live AI scoring, and instant shortlists —
          so your team only ever talks to candidates worth talking to.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" className="w-full px-5 py-2.5 text-sm sm:w-auto cursor-pointer ">
            Get Started
          </Button>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            See how it works
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <p className="mt-5 text-xs text-gray-400 dark:text-gray-500">
          Free for your first 10 interviews. No credit card required.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-12 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
          Trusted by fast-growing hiring teams
        </p>

        <div
          className="hl-marquee relative mt-6 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="hl-marquee-track flex w-max items-center gap-14 whitespace-nowrap">
            {logoTrack.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex flex-none cursor-pointer items-center gap-2 opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`h-5 w-5 flex-none ${logo.color}`}
                  aria-hidden="true"
                >
                  {logo.icon}
                </svg>
                <span className="text-lg font-semibold tracking-tight text-gray-700 dark:text-gray-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-gray-200/70 bg-white/90 shadow-xl shadow-blue-950/5 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/80 dark:shadow-black/40">
          <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5 dark:border-white/10">
            <span className="h-2 w-2 flex-none rounded-full bg-red-300" />
            <span className="h-2 w-2 flex-none rounded-full bg-amber-300" />
            <span className="h-2 w-2 flex-none rounded-full bg-green-300" />
            <span className="ml-3 truncate text-xs font-medium text-gray-400">
              Live interview — Sarah Chen · Senior Frontend Engineer
            </span>
            <span className="ml-auto flex flex-none items-center gap-1.5 text-[11px] font-medium text-red-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              </span>
              Recording
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-3 border-b border-gray-100 p-5 text-left lg:border-b-0 lg:border-r dark:border-white/10">
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-indigo-600 text-[11px] font-semibold text-white">
                  AI
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2 text-[13px] text-gray-700 dark:bg-white/10 dark:text-gray-300">
                  Can you walk me through how you would optimize a slow-loading React dashboard?
                </div>
              </div>
              <div className="flex justify-end gap-2.5">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-indigo-600 px-3.5 py-2 text-[13px] text-white">
                  Sure — I would start by profiling with React DevTools to find unnecessary re-renders, then look at code-splitting and memoization.
                </div>
                <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gray-200 text-[11px] font-semibold text-gray-600 dark:bg-white/10 dark:text-gray-300">
                  SC
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-indigo-600 text-[11px] font-semibold text-white">
                  AI
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2.5 dark:bg-white/10">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-4 p-5 text-left">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  Match score
                </p>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-white">92</span>
                  <span className="text-xs text-gray-400">/ 100</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-1 flex items-center justify-between text-[11px] font-medium text-gray-600 dark:text-gray-400">
                      <span>{metric.label}</span>
                      <span>{metric.value}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-green-50 px-3 py-1.5 text-[11px] font-medium text-green-700 dark:bg-green-500/10 dark:text-green-400">
                Recommended for next round
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hl-marquee-track {
          animation: hl-scroll 32s linear infinite;
        }
        .hl-marquee:hover .hl-marquee-track {
          animation-play-state: paused;
        }
        @keyframes hl-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hl-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;