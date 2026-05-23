export default function Home() {
  type NavItem = { label: string; href: string };

  type Faction = {
    name: string;
    description: string;
    accent: "crimson" | "cyan" | "violet";
    tags: string[];
  };

  const nav: NavItem[] = [
    { label: "Arc", href: "#arc" },
    { label: "Factions", href: "#factions" },
    { label: "Highlights", href: "#highlights" },
    { label: "Disclaimer", href: "#disclaimer" },
  ];

  const factions: Faction[] = [
    {
      name: "Soul Society",
      description:
        "Steel discipline, old names, and an authority that looks calm until it isn’t.",
      accent: "cyan",
      tags: ["Shinigami", "Zanpakutō", "Bankai"],
    },
    {
      name: "Wandenreich",
      description:
        "A cold doctrine and a sharper kind of power — quiet, precise, absolute.",
      accent: "crimson",
      tags: ["Quincy", "Schrift", "Schatten Bereich"],
    },
    {
      name: "Hollows / Arrancar",
      description:
        "Instinct, hunger, and the lingering echo of a world that never stopped collapsing.",
      accent: "violet",
      tags: ["Hueco Mundo", "Resurrección", "Cero"],
    },
  ];

  const accentStyles: Record<Faction["accent"], { glow: string; ring: string }> =
    {
      crimson: {
        glow: "bg-red-500/15",
        ring: "ring-red-400/20",
      },
      cyan: {
        glow: "bg-cyan-500/15",
        ring: "ring-cyan-300/20",
      },
      violet: {
        glow: "bg-violet-500/15",
        ring: "ring-violet-300/20",
      },
    };

  return (
    <div className="relative flex-1">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute top-48 -left-48 h-[26rem] w-[26rem] rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -bottom-56 right-[-9rem] h-[32rem] w-[32rem] rounded-full bg-violet-500/12 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
      </div>

      <header className="sticky top-0 z-10 border-b border-zinc-50/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-zinc-50/90 hover:text-zinc-50"
          >
            BLEACH / TYBW
          </a>

          <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-zinc-200/70 transition hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/20"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl px-6">
        <section className="relative py-16 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-[1.25fr_0.75fr] sm:items-end">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-zinc-50/10 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200/70">
                  Fan-made • spoiler-light
                </span>
                <span className="text-xs text-zinc-200/50">•</span>
                <span className="text-xs text-zinc-200/50 font-mono">
                  pressure // aura // ink
                </span>
              </div>

              <h1 className="text-pretty text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 bg-clip-text text-transparent">
                  Thousand-Year Blood War
                </span>
              </h1>

              <p className="max-w-2xl text-pretty text-base leading-7 text-zinc-200/70 sm:text-lg">
                A minimalist fanpage with an original “ink + aura” design language:
                hard contrast, cold highlights, and crimson pressure.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#factions"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-50 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/30"
                >
                  Enter the battlefield
                </a>
                <a
                  href="#arc"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-50/15 bg-zinc-950/40 px-5 text-sm font-semibold text-zinc-50/90 transition hover:bg-zinc-50/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/20"
                >
                  Arc overview
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-50/10 bg-zinc-950/40 p-6 ring-1 ring-zinc-50/5 backdrop-blur">
              <div className="space-y-4">
                <p className="text-sm font-semibold tracking-tight text-zinc-50">
                  Style notes
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-50/15 to-transparent" />

                <ul className="space-y-3 text-sm leading-7 text-zinc-200/70">
                  <li>
                    <span className="font-mono text-zinc-200/60">01</span> high
                    contrast • quiet UI
                  </li>
                  <li>
                    <span className="font-mono text-zinc-200/60">02</span> red
                    pressure • cyan edge
                  </li>
                  <li>
                    <span className="font-mono text-zinc-200/60">03</span> glass
                    panels • sharp typography
                  </li>
                </ul>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-50/15 to-transparent" />

                <p className="text-xs text-zinc-200/50">
                  No official art/assets used — purely abstract styling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="arc" className="py-16">
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-50">
                Arc
              </h2>
              <p className="text-sm leading-7 text-zinc-200/70">
                The Thousand-Year Blood War arc turns the dial to maximum:
                overwhelming threats, fast reveals, and a visual language built on
                negative space and impact.
              </p>
              <p className="text-sm leading-7 text-zinc-200/70">
                This page is a vibe-first tribute — clean layout, aura-heavy
                lighting, and sharp sections you can scroll in one breath.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-50/10 bg-zinc-950/40 p-6 ring-1 ring-zinc-50/5 backdrop-blur">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-50">
                What hits different
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-200/70">
                <li>
                  <span className="text-zinc-50">Silence</span> before violence
                  — the frame stays calm, then breaks.
                </li>
                <li>
                  <span className="text-zinc-50">Power</span> shown as pressure
                  — the world bends around it.
                </li>
                <li>
                  <span className="text-zinc-50">Color</span> used sparingly —
                  crimson as threat, cyan as edge.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="factions" className="py-16">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-50">
                Factions
              </h2>
              <p className="text-sm text-zinc-200/70">
                Three lenses to read the war through.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {factions.map((faction) => {
              const accent = accentStyles[faction.accent];

              return (
                <div
                  key={faction.name}
                  className={`relative overflow-hidden rounded-3xl border border-zinc-50/10 bg-zinc-950/40 p-6 ring-1 ${accent.ring} backdrop-blur`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -top-24 right-[-5rem] h-56 w-56 rounded-full blur-3xl ${accent.glow}`}
                  />
                  <h3 className="text-base font-semibold tracking-tight text-zinc-50">
                    {faction.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-200/70">
                    {faction.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {faction.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-zinc-50/10 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section id="highlights" className="py-16">
          <div className="rounded-3xl border border-zinc-50/10 bg-zinc-950/40 p-8 ring-1 ring-zinc-50/5 backdrop-blur sm:p-10">
            <div className="grid gap-10 sm:grid-cols-[1fr_1fr]">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-50">
                  Highlights
                </h2>
                <p className="text-sm leading-7 text-zinc-200/70">
                  Scroll-friendly notes you can keep spoiler-light.
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-50/15 to-transparent" />
                <ul className="space-y-3 text-sm leading-7 text-zinc-200/70">
                  <li>
                    <span className="text-zinc-50">Typography</span>: bold
                    headers, mono labels, quiet captions.
                  </li>
                  <li>
                    <span className="text-zinc-50">Panels</span>: glassy layers
                    with thin borders and ring light.
                  </li>
                  <li>
                    <span className="text-zinc-50">Aura</span>: abstract glows
                    and gradients — no character imagery.
                  </li>
                </ul>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-50/15 to-transparent" />

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#disclaimer"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-50 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/30"
                  >
                    Read disclaimer
                  </a>
                  <a
                    href="#top"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-50/15 bg-zinc-950/40 px-5 text-sm font-semibold text-zinc-50/90 transition hover:bg-zinc-50/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/20"
                  >
                    Back to top
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="disclaimer" className="border-t border-zinc-50/10">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-sm font-semibold text-zinc-50">Disclaimer</p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-200/60">
            This is an unofficial, fan-made page. “BLEACH” and any related names
            are trademarks of their respective owners. No official art, logos, or
            proprietary assets are included.
          </p>
          <p className="mt-6 text-xs text-zinc-200/40">
            © {new Date().getFullYear()} — fan project.
          </p>
        </div>
      </footer>
    </div>
  );
}
