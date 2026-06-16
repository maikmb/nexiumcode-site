"use client";

import { Reveal, StaggerGroup, StaggerItem } from "./Motion";
import { serviceIcon } from "@/lib/serviceIcons";
import type { ServiceDTO } from "@/lib/content";

/**
 * Seção de Serviços — recebe os serviços do banco via props (passados pelo
 * Server Component em app/page.tsx). O grid se adapta a N itens.
 */
export default function Solutions({ services }: { services: ServiceDTO[] }) {
  return (
    <section id="servicos" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-ocean-400">
            <span className="text-ocean-500/60">01</span> / Serviços
          </span>
          <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Tudo o que seu negócio precisa para ir mais longe
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Da criação à manutenção, cuidamos de cada etapa da sua presença
            digital com o mesmo capricho.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem
              as="li"
              key={service.id}
              className="glass glow-hover group rounded-2xl p-7"
            >
              <div className="glow-sm flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  {serviceIcon(service.iconKey)}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-foreground/55">{service.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
