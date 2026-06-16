"use client";

import Parallax from "./Parallax";
import { Reveal } from "./Motion";

export default function About({
  aboutText,
  whatsappUrl,
  productCount,
  hostedSiteCount,
}: {
  aboutText: string;
  whatsappUrl: string;
  productCount: number;
  hostedSiteCount: number;
}) {
  const highlights = [
    { stat: "100%", label: "Sob medida — nada de soluções engessadas" },
    { stat: String(productCount), label: "Produtos próprios criados e mantidos" },
    ...(hostedSiteCount > 0
      ? [{ stat: String(hostedSiteCount) + "+", label: "Sites hospedados e monitorados" }]
      : []),
    { stat: "24/7", label: "Sistemas monitorados e sempre no ar" },
  ];

  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={-0.1} className="absolute -left-32 bottom-0 h-[360px] w-[360px]">
          <div className="animate-blob h-full w-full rounded-full bg-gradient-to-tr from-ocean-600/20 to-transparent blur-3xl" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="border-gradient glow relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#070b16] via-ocean-950 to-ocean-900/80 px-6 py-14 text-white md:px-16 md:py-20">
          <div className="dot-grid" aria-hidden="true" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <Reveal from="left">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-ocean-300">
                Sobre a NexiumCode
              </span>
              <h2 className="font-display mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Uma empresa de tecnologia com energia de quem quer mudar o jogo
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ocean-100/80">{aboutText}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-sm mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ocean-500 to-ocean-600 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_-4px_rgba(95,184,250,0.8)]"
              >
                Conversar com a gente
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item, i) => (
                <Reveal
                  from="right"
                  key={item.label}
                  delay={i * 0.12}
                  className="rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-sm p-6 transition-colors hover:border-ocean-400/40"
                >
                  <p className="font-display bg-gradient-to-r from-ocean-200 to-ocean-400 bg-clip-text text-3xl font-bold text-transparent neon-text">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-ocean-100/70">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
