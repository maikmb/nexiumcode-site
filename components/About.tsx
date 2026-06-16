import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { whatsappLink } from "@/data/site";

const highlights = [
  { stat: "100%", label: "Sob medida — nada de soluções engessadas" },
  { stat: "3", label: "Produtos próprios criados e mantidos" },
  { stat: "24/7", label: "Sistemas monitorados e sempre no ar" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={-0.1} className="absolute -left-32 bottom-0 h-[360px] w-[360px]">
          <div className="h-full w-full rounded-full bg-gradient-to-tr from-ocean-200/50 to-transparent blur-3xl" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 px-6 py-14 text-white shadow-2xl shadow-ocean-900/30 md:px-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal from="left">
              <span className="text-sm font-bold uppercase tracking-widest text-ocean-300">
                Sobre a NexiumCode
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
                Uma empresa de tecnologia com energia de quem quer mudar o jogo
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ocean-100/80">
                Criamos sistemas e fazemos consultoria tecnológica para provar
                que software de qualidade não precisa ser complicado, lento ou
                caro. Somos um time apaixonado por tecnologia que constrói
                soluções sob medida e produtos próprios — sempre com design
                moderno, código bem feito e foco total no resultado do cliente.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ocean-800 transition-transform hover:-translate-y-0.5"
              >
                Conversar com a gente
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((item, i) => (
                <Reveal
                  from="right"
                  key={item.label}
                  delay={i * 120}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <p className="bg-gradient-to-r from-ocean-200 to-ocean-400 bg-clip-text text-3xl font-extrabold text-transparent">
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
