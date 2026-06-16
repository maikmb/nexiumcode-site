import Reveal from "./Reveal";
import { services } from "@/data/site";

/**
 * Seção de Serviços. O conteúdo vem de `data/site.ts` (export `services`).
 * Para adicionar/editar um serviço, altere lá — o grid se adapta a N itens.
 */
export default function Solutions() {
  return (
    <section id="servicos" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-ocean-600">
            Serviços
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Tudo o que seu negócio precisa para ir mais longe
          </h2>
          <p className="mt-4 text-lg text-navy/65">
            Da criação à manutenção, cuidamos de cada etapa da sua presença
            digital com o mesmo capricho.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
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
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-navy/60">{service.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
