import Reveal from "./Reveal";
import { founders, type Founder } from "@/data/site";

/**
 * Seção "Quem comanda a NexiumCode" (fundadores / administração).
 * O conteúdo vem de `data/site.ts` (export `founders`).
 * - FOTO: coloque a imagem em `public/team/<arquivo>` e defina
 *   `photo: "/team/<arquivo>"`. Sem foto, geramos um avatar gradiente com
 *   as iniciais automaticamente.
 * - `from` ("left" | "right" | "up") controla a direção da animação de entrada.
 */

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function Avatar({ founder }: { founder: Founder }) {
  if (founder.photo) {
    return (
      <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow-lg shadow-ocean-900/15 ring-4 ring-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={founder.photo}
          alt={`Foto de ${founder.name}`}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-500 via-ocean-600 to-ocean-800 text-3xl font-extrabold text-white shadow-lg shadow-ocean-900/20 ring-4 ring-white"
      aria-hidden="true"
    >
      {initials(founder.name)}
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="fundadores"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-ocean-600">
            Quem comanda a NexiumCode
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Os fundadores por trás de cada projeto
          </h2>
          <p className="mt-4 text-lg text-navy/65">
            Tecnologia é feita por pessoas. Conheça quem lidera a NexiumCode e
            acompanha de perto cada entrega.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {founders.map((founder) => (
            <Reveal
              as="li"
              key={founder.name}
              from={founder.from}
              className="group flex flex-col items-center rounded-3xl border border-ocean-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-ocean-200 hover:shadow-2xl hover:shadow-ocean-500/15"
            >
              <Avatar founder={founder} />
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-navy">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ocean-600">
                {founder.role}
              </p>
              <p className="mt-4 leading-relaxed text-navy/60">{founder.bio}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
