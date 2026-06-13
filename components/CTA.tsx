import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contato" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-ocean-100 bg-white p-10 text-center shadow-xl shadow-ocean-500/10 md:p-16">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-b from-ocean-100/80 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <h2 className="relative text-balance text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Pronto para tirar sua ideia do papel?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-navy/65">
            Conte para a gente o que você quer construir. Respondemos rápido,
            sem compromisso e sem juridiquês.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:contato@nexiumcode.com?subject=Quero%20come%C3%A7ar%20um%20projeto"
              className="w-full rounded-full bg-ocean-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-ocean-600/30 transition-all hover:-translate-y-0.5 hover:bg-ocean-700 sm:w-auto"
            >
              contato@nexiumcode.com
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-ocean-200 bg-white px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-ocean-300 sm:w-auto"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
