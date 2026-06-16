"use client";

import Parallax from "./Parallax";
import { Reveal } from "./Motion";
import type { ValueDTO } from "@/lib/content";

/**
 * Seção de Missão, Visão e Valores — conteúdo do banco via props.
 */
export default function Values({
  mission,
  vision,
  values,
}: {
  mission: string;
  vision: string;
  values: ValueDTO[];
}) {
  return (
    <section id="valores" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={0.1} className="absolute -right-40 top-0 h-[420px] w-[420px]">
          <div className="animate-blob h-full w-full rounded-full bg-gradient-to-bl from-ocean-600/20 to-transparent blur-3xl" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-ocean-400">
            <span className="text-ocean-500/60">04</span> / Missão, visão e valores
          </span>
          <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            O que nos move
          </h2>
        </Reveal>

        {/* Missão + Visão */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal
            from="left"
            className="border-gradient glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-700 to-ocean-900 p-8 text-white md:p-10"
          >
            <div
              className="animate-blob pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ocean-300/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="0.6" fill="currentColor" />
              </svg>
            </div>
            <h3 className="font-display relative mt-5 text-xl font-bold tracking-tight">Missão</h3>
            <p className="relative mt-3 leading-relaxed text-ocean-50/90">{mission}</p>
          </Reveal>

          <Reveal
            from="right"
            className="glass glow-hover relative overflow-hidden rounded-3xl p-8 md:p-10"
          >
            <div className="glow-sm flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="font-display mt-5 text-xl font-bold tracking-tight text-foreground">Visão</h3>
            <p className="mt-3 leading-relaxed text-foreground/60">{vision}</p>
          </Reveal>
        </div>

        {/* Valores */}
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal
              as="li"
              key={value.id}
              from="up"
              delay={(i % 4) * 0.09}
              className="group glass glow-hover rounded-2xl p-6"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ocean-500/10 font-mono text-sm font-extrabold dark:text-ocean-300 text-ocean-700 ring-1 ring-ocean-400/30 transition-colors group-hover:bg-ocean-500/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-bold text-foreground">{value.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/55">{value.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
