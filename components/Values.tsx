import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { mission, vision, values } from "@/data/site";

/**
 * Seção de Missão, Visão e Valores. Conteúdo em `data/site.ts`
 * (exports `mission`, `vision`, `values`).
 */
export default function Values() {
  return (
    <section
      id="valores"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={0.1} className="absolute -right-40 top-0 h-[420px] w-[420px]">
          <div className="h-full w-full rounded-full bg-gradient-to-bl from-ocean-200/50 to-transparent blur-3xl" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-ocean-600">
            Missão, visão e valores
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            O que nos move
          </h2>
        </Reveal>

        {/* Missão + Visão */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal
            from="left"
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-600 to-ocean-800 p-8 text-white shadow-xl shadow-ocean-600/25 md:p-10"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="0.6" fill="currentColor" />
              </svg>
            </div>
            <h3 className="relative mt-5 text-xl font-extrabold tracking-tight">Missão</h3>
            <p className="relative mt-3 leading-relaxed text-ocean-50/90">{mission}</p>
          </Reveal>

          <Reveal
            from="right"
            className="relative overflow-hidden rounded-3xl border border-ocean-100 bg-white p-8 shadow-sm md:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 text-white shadow-lg shadow-ocean-600/25">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy">Visão</h3>
            <p className="mt-3 leading-relaxed text-navy/65">{vision}</p>
          </Reveal>
        </div>

        {/* Valores */}
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal
              as="li"
              key={value.title}
              from="up"
              delay={(i % 4) * 90}
              className="group rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ocean-200 hover:shadow-xl hover:shadow-ocean-500/10"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ocean-50 text-sm font-extrabold text-ocean-600 transition-colors group-hover:bg-ocean-100">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-bold text-navy">{value.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{value.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
