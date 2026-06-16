"use client";

import { Reveal } from "./Motion";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "Entendemos seu negócio, seus objetivos e o problema real a resolver. Sem pressa, sem achismo.",
  },
  {
    number: "02",
    title: "Desenho da solução",
    description:
      "Definimos juntos o escopo, a arquitetura e o design. Você sabe exatamente o que vai receber e quando.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Entregas curtas e frequentes. Você acompanha o progresso de perto e dá feedback a cada etapa.",
  },
  {
    number: "04",
    title: "Lançamento & evolução",
    description:
      "Colocamos no ar com segurança e seguimos juntos: monitoramento, melhorias e novas funcionalidades.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-ocean-400">
              <span className="text-ocean-500/60">05</span> / Como trabalhamos
            </span>
            <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Um processo claro, do início ao fim
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/60">
              Software bom nasce de comunicação boa. Nosso processo é
              transparente: você sempre sabe em que pé está o projeto, quanto
              custa e o que vem a seguir.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-ocean-300 transition-colors hover:text-ocean-200"
            >
              Vamos conversar sobre o seu projeto
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M3 9h12m0 0l-5-5m5 5l-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Reveal>

          <ol className="relative space-y-5">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.number}
                delay={i * 0.1}
                className="glass glow-hover relative flex gap-6 rounded-2xl p-7"
              >
                <span
                  className="font-display bg-gradient-to-br from-ocean-300 to-ocean-600 bg-clip-text font-mono text-3xl font-bold text-transparent neon-text"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-foreground/55">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
