import Parallax from "./Parallax";
import Reveal from "./Reveal";

const products = [
  {
    name: "Aikrus",
    tagline: "Plataforma inteligente",
    description:
      "Nossa plataforma que usa tecnologia de ponta para simplificar operações e gerar resultados reais para quem usa.",
    gradient: "from-ocean-500 to-ocean-700",
    initial: "A",
  },
  {
    name: "Ebilly",
    tagline: "Gestão & cobranças",
    description:
      "Plataforma que descomplica o dia a dia financeiro: organize, acompanhe e receba sem dor de cabeça.",
    gradient: "from-ocean-400 to-ocean-600",
    initial: "E",
  },
  {
    name: "Awatts",
    tagline: "Energia em dados",
    description:
      "Plataforma que transforma dados em decisões, com painéis claros e automações que economizam tempo e dinheiro.",
    gradient: "from-ocean-600 to-ocean-900",
    initial: "W",
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      {/* Parallax backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={0.12} className="absolute -right-32 top-10 h-[380px] w-[380px]">
          <div className="h-full w-full rounded-full bg-gradient-to-bl from-ocean-200/60 to-transparent blur-3xl" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-ocean-600">
            Nossos produtos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Plataformas criadas e mantidas pela Nexium Code
          </h2>
          <p className="mt-4 text-lg text-navy/65">
            Não só construímos para os outros — também criamos e evoluímos
            nossos próprios produtos digitais.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <Reveal
              key={product.name}
              delay={i * 120}
              className="group relative overflow-hidden rounded-3xl border border-ocean-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ocean-500/15"
            >
              <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />
              <div className="p-8">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-2xl font-extrabold text-white shadow-lg shadow-ocean-600/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                  aria-hidden="true"
                >
                  {product.initial}
                </div>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-navy">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ocean-600">
                  {product.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-navy/60">{product.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
