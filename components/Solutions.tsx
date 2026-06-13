import Reveal from "./Reveal";

const solutions = [
  {
    title: "Software sob medida",
    description:
      "Sistemas web e plataformas construídos do zero para resolver o problema do seu negócio — sem adaptações forçadas, sem licenças engessadas.",
    icon: (
      <path d="M8 9l-4 4 4 4M16 9l4 4-4 4M14 5l-4 14" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Aplicativos mobile",
    description:
      "Apps iOS e Android com experiência nativa, performance e design que seus clientes vão amar usar todos os dias.",
    icon: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Integrações & APIs",
    description:
      "Conectamos seus sistemas, automatizamos processos e eliminamos trabalho manual com integrações robustas e seguras.",
    icon: (
      <path
        d="M9 7H6a4 4 0 000 8h3M15 7h3a4 4 0 010 8h-3M8 11h8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Produtos digitais",
    description:
      "Do MVP ao produto maduro: ajudamos você a validar, lançar e evoluir produtos digitais com estratégia e velocidade.",
    icon: (
      <path
        d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infraestrutura escalável na nuvem, deploys automatizados e monitoramento para seu produto crescer sem sustos.",
    icon: (
      <path
        d="M7 17a4.5 4.5 0 01-.5-8.97 6 6 0 0111.4 1.74A4 4 0 0117 17H7z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "UX & Design de produto",
    description:
      "Interfaces claras, modernas e centradas no usuário — porque tecnologia boa é aquela que as pessoas entendem.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15 15 0 010 18M3.5 9h17M3.5 15h17" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-ocean-600">
            Soluções
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Tudo o que seu negócio precisa para ir mais longe
          </h2>
          <p className="mt-4 text-lg text-navy/65">
            Da ideia ao produto em produção, cuidamos de cada etapa com o mesmo
            capricho.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal
              as="li"
              key={solution.title}
              delay={(i % 3) * 100}
              className="group rounded-2xl border border-ocean-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ocean-200 hover:shadow-xl hover:shadow-ocean-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 text-white shadow-lg shadow-ocean-600/25 transition-transform duration-300 group-hover:scale-110">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  {solution.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{solution.title}</h3>
              <p className="mt-2 leading-relaxed text-navy/60">{solution.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
