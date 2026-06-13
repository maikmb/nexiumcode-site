import Parallax from "./Parallax";
import Reveal from "./Reveal";

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
              Software sob medida & produtos digitais
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl">
              Tecnologia que{" "}
              <span className="bg-gradient-to-r from-ocean-600 via-ocean-500 to-ocean-400 bg-clip-text text-transparent">
                impulsiona
              </span>{" "}
              o seu negócio
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy/65 md:text-xl">
              A Nexium Code transforma ideias em software. Criamos sistemas,
              aplicativos e plataformas sob medida — do conceito ao lançamento —
              para empresas que querem crescer com tecnologia.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contato"
                className="w-full rounded-full bg-ocean-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-ocean-600/30 transition-all hover:-translate-y-0.5 hover:bg-ocean-700 hover:shadow-2xl hover:shadow-ocean-600/40 sm:w-auto"
              >
                Começar um projeto
              </a>
              <a
                href="#produtos"
                className="w-full rounded-full border border-ocean-200 bg-white/80 px-8 py-4 text-base font-semibold text-navy backdrop-blur transition-all hover:-translate-y-0.5 hover:border-ocean-300 hover:bg-white sm:w-auto"
              >
                Conhecer produtos
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
