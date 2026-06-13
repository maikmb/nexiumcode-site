import Parallax from "./Parallax";
import Reveal from "./Reveal";

const values = [
  {
    title: "Tecnologia com propósito",
    description: "Cada linha de código existe para gerar resultado de verdade.",
  },
  {
    title: "Parceria de longo prazo",
    description: "Não entregamos e sumimos — crescemos junto com você.",
  },
  {
    title: "Qualidade sem atalhos",
    description: "Código limpo, testado e pronto para escalar desde o dia um.",
  },
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
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-widest text-ocean-300">
                Sobre a Nexium Code
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
                Uma empresa nova, com energia de quem quer mudar o jogo
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ocean-100/80">
                Nascemos para provar que software de qualidade não precisa ser
                complicado, lento ou caro. Somos um time apaixonado por
                tecnologia que constrói soluções sob medida e produtos próprios
                — sempre com design moderno, código bem feito e foco total no
                resultado do cliente.
              </p>
            </Reveal>

            <div className="space-y-4">
              {values.map((value, i) => (
                <Reveal
                  key={value.title}
                  delay={i * 120}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <h3 className="font-bold text-ocean-200">{value.title}</h3>
                  <p className="mt-1 text-ocean-100/70">{value.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
