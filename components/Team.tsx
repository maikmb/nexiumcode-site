"use client";

import { Reveal } from "./Motion";
import type { FounderDTO } from "@/lib/content";

/**
 * Seção "Quem comanda a NexiumCode" (fundadores) — dados do banco via props.
 * - `photoUrl` mostra a foto enviada via upload; sem foto, avatar gradiente com iniciais.
 * - `direction` ("left" | "right" | "up") controla a direção da animação de entrada.
 */

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function Avatar({ founder }: { founder: FounderDTO }) {
  if (founder.photoUrl) {
    return (
      <div className="glow-sm relative h-28 w-28 overflow-hidden rounded-2xl ring-2 ring-ocean-400/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={founder.photoUrl}
          alt={`Foto de ${founder.name}`}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="glow-sm flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-500 via-ocean-600 to-ocean-800 text-3xl font-extrabold text-white ring-2 ring-ocean-400/50"
      aria-hidden="true"
    >
      {initials(founder.name)}
    </div>
  );
}

export default function Team({ founders }: { founders: FounderDTO[] }) {
  return (
    <section id="fundadores" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-ocean-400">
            <span className="text-ocean-500/60">03</span> / Quem comanda
          </span>
          <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Os fundadores por trás de cada projeto
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Tecnologia é feita por pessoas. Conheça quem lidera a NexiumCode e
            acompanha de perto cada entrega.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {founders.map((founder) => (
            <Reveal
              as="li"
              key={founder.id}
              from={founder.direction}
              className="group glass glow-hover flex flex-col items-center rounded-3xl p-8 text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <Avatar founder={founder} />
              <h3 className="font-display mt-6 text-xl font-bold tracking-tight text-foreground">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ocean-400">
                {founder.role}
              </p>
              <p className="mt-4 leading-relaxed text-foreground/55">{founder.bio}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
