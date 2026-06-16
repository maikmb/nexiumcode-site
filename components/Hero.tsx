import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { whatsappLink } from "@/data/site";

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 md:pb-36 md:pt-48">
      {/* Decorative parallax background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={-0.15} className="absolute -top-32 right-[-10%] h-[480px] w-[480px]">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-ocean-300/40 to-ocean-500/20 blur-3xl" />
        </Parallax>
        <Parallax speed={0.1} className="absolute -left-40 top-40 h-[420px] w-[420px]">
          <div className="h-full w-full rounded-full bg-gradient-to-tr from-ocean-200/50 to-ocean-400/20 blur-3xl" />
        </Parallax>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(30,81,175,0.07)_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ocean-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-ocean-700 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ocean-500" />
              Sistemas sob medida & consultoria em tecnologia
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl">
              Criamos sistemas que{" "}
              <span className="bg-gradient-to-r from-ocean-600 via-ocean-500 to-ocean-400 bg-clip-text text-transparent">
                impulsionam
              </span>{" "}
              o seu negócio
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy/65 md:text-xl">
              A NexiumCode desenvolve sites, sistemas e automações sob medida e
              oferece consultoria em tecnologia — do conceito ao lançamento — para
              empresas que querem crescer com soluções digitais bem feitas.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ocean-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-ocean-600/30 transition-all hover:-translate-y-0.5 hover:bg-ocean-700 hover:shadow-2xl hover:shadow-ocean-600/40 sm:w-auto"
              >
                <WhatsAppGlyph />
                Falar no WhatsApp
              </a>
              <a
                href="#servicos"
                className="w-full rounded-full border border-ocean-200 bg-white/80 px-8 py-4 text-base font-semibold text-navy backdrop-blur transition-all hover:-translate-y-0.5 hover:border-ocean-300 hover:bg-white sm:w-auto"
              >
                Nossos serviços
              </a>
            </div>
          </Reveal>
        </div>

        {/* Floating code-card mock */}
        <Reveal delay={450} className="mt-16 md:mt-24">
          <Parallax speed={-0.06}>
            <div className="mx-auto max-w-3xl rounded-2xl border border-ocean-100 bg-white/80 p-2 shadow-2xl shadow-ocean-900/10 backdrop-blur">
              <div className="rounded-xl bg-gradient-to-br from-ocean-950 to-ocean-900 p-5 font-mono text-sm leading-7 text-ocean-100 md:p-8">
                <div className="mb-4 flex gap-2" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <p>
                  <span className="text-ocean-400">const</span>{" "}
                  <span className="text-ocean-200">seuNegocio</span> ={" "}
                  <span className="text-ocean-400">await</span> nexiumcode.
                  <span className="text-ocean-300">build</span>({"{"}
                </p>
                <p className="pl-6">
                  ideia: <span className="text-emerald-300">&quot;a sua&quot;</span>,
                </p>
                <p className="pl-6">
                  prazo: <span className="text-emerald-300">&quot;o combinado&quot;</span>,
                </p>
                <p className="pl-6">
                  qualidade: <span className="text-emerald-300">&quot;sempre&quot;</span>,
                </p>
                <p>{"}"});</p>
                <p className="mt-2 text-ocean-400/70">
                  {"// "}pronto para escalar 🚀
                </p>
              </div>
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
