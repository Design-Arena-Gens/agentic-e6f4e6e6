const operations = [
  {
    title: "Fall of Reach",
    year: "2552",
    summary:
      "Secure the last surviving Spartans and recover core intelligence before Covenant forces overwhelm the planet.",
    status: "Critical",
  },
  {
    title: "Halo Installation 04",
    year: "2552",
    summary:
      "Disable the ringworld's firing sequence and eliminate the Flood to prevent galactic catastrophe.",
    status: "Complete",
  },
  {
    title: "New Mombasa",
    year: "2552",
    summary:
      "Pursue the Covenant Prophet of Regret through slipspace rupture and extract the Luminary artifact.",
    status: "On-going",
  },
  {
    title: "Zeta Halo",
    year: "2560",
    summary:
      "Reclaim the substructural controls before the Banished harness the ring's repair cycle for mass deployment.",
    status: "Recon",
  },
];

const strikes = [
  {
    codename: "Silent Cartographer",
    description:
      "Map the entire ringworld network by breaching coastal defenses with a mixed aerial/orbital drop.",
  },
  {
    codename: "Operation: WARM BLANKET",
    description:
      "Deploy a rapid-response fireteam to escort evacuation carriers and shield civilian transports.",
  },
  {
    codename: "Scarlet Lance",
    description:
      "Board a CCS-class battlecruiser and commandeer its navigation core for ONI Section III analysis.",
  },
];

const arsenal = [
  {
    label: "M6H2 Magnum",
    detail: "Precision sidearm with smart-linked optics calibrated for Spartan-II reflex indexes.",
  },
  {
    label: "MA40 AR",
    detail: "Suppressed kinetic rifle with adaptive recoil dampening for combined-arms assaults.",
  },
  {
    label: "Mjolnir GEN3",
    detail: "Modular armor platform featuring energy shielding, thruster suite, and integrated AI uplink.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden brightness-125"
      >
        <div className="absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.35),_transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
      </div>

      <header className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-24 sm:pt-28 md:gap-16">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-sm font-semibold uppercase tracking-widest">
              ONI
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">
                Strategic Briefing
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Halo Command Lattice
              </h1>
            </div>
          </div>
          <div className="hidden items-center gap-3 rounded-full border border-cyan-500/30 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80 sm:flex">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Live Feed
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-200/80 sm:text-xl">
              An orbital command interface for Spartan operations across the Halo array. Monitor
              live-field deployments, decode ancient Forerunner signals, and synchronize with
              UNSC battle groups in real time.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200/80">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Slipspace Link Stable
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                AI Override: Cortana
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                Ring Status: Contained
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-500/20 bg-black/40 p-6 shadow-[0_0_60px_-20px_rgba(56,189,248,0.4)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-cyan-200/70">
              <span>Telemetry</span>
              <span>HoloNet v7</span>
            </div>
            <div className="mt-6 flex flex-col gap-4 text-sm text-slate-100/90">
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <span className="text-slate-200/80">Orbital Longswords</span>
                <span className="font-semibold text-cyan-300">12 Active</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <span className="text-slate-200/80">Pelican Drop Bays</span>
                <span className="font-semibold text-cyan-300">7 Ready</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <span className="text-slate-200/80">Mjolnir Diagnostics</span>
                <span className="font-semibold text-emerald-300">Nominal</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24">
        <section className="space-y-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Operations Theatre
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200/70 sm:text-base">
                Prioritized field operations across the Halo network. Each dossier is updated every
                12.8 seconds via slipspace relay.
              </p>
            </div>
            <button className="hidden rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-400 hover:bg-cyan-400/20 sm:inline-flex">
              Export Logs
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {operations.map((operation) => (
              <div
                key={operation.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.28),_transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-200/60">
                  <span>{operation.year}</span>
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold text-cyan-200/80">
                    {operation.status}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{operation.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                  {operation.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  View Mission Feed
                  <span aria-hidden className="inline-block h-px w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-12 sm:px-10 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Strike Packages
              </h2>
              <p className="text-sm leading-relaxed text-slate-200/70 sm:text-base">
                Coordinate precision strikes with Spartan fireteams. Mission directives are
                auto-synced to MJOLNIR HUD overlays with adaptive threat models.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {strikes.map((strike) => (
                  <div key={strike.codename} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                      {strike.codename}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                      {strike.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-black/50 p-6 shadow-[0_30px_80px_-40px_rgba(14,165,233,0.45)]">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                Arsenal Telemetry
              </p>
              <ul className="space-y-4 text-sm text-slate-200/80">
                {arsenal.map((item) => (
                  <li key={item.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200/75">{item.detail}</p>
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-400 hover:bg-cyan-400/20">
                Synchronize Loadouts
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.4fr,1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Halo Intelligence</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Forerunner Signal Uplinks
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-200/70 sm:text-base">
              Real-time signal breakdown of Forerunner transmission lattice recovered from Halo
              installations. Leverage the lattice to triangulate hidden armories and dormant AI
              entanglements.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {["Sanghelios Relay", "Installation 07 Core", "Ark Terminal"].map((node) => (
                <div
                  key={node}
                  className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-sm text-slate-200/80"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{node}</p>
                  <p className="mt-3 text-emerald-300/80">Signal Integrity: 97.2%</p>
                  <p className="mt-1 text-slate-400/70">Latency: 2.7 μs</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-cyan-500/20 bg-black/40 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                UNSC Priority Channel
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">Secure Transmission Queue</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/70">
                Queue encrypted battle reports for high-command review. Slipspace compression ensures
                zero packet loss over interstellar distances.
              </p>
            </div>
            <form className="space-y-4 text-sm text-slate-200/80">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                  Callsign
                </label>
                <input
                  type="text"
                  placeholder="Sierra-117"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                  Priority Tag
                </label>
                <input
                  type="text"
                  placeholder="ONI-SEVEN"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                  Transmission Payload
                </label>
                <textarea
                  placeholder="Insert encrypted field report..."
                  className="h-32 w-full resize-none rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-400 hover:bg-cyan-400/20"
              >
                Queue Transmission
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-xs uppercase tracking-[0.3em] text-slate-400/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2560 UNSC HIGHCOM. All channels monitored.</span>
          <span className="inline-flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Slipspace Uplink Stable
          </span>
        </div>
      </footer>
    </div>
  );
}
