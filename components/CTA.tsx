import Reveal from "./Reveal";
import { whatsappLink, CONTACT_EMAIL } from "@/data/site";

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

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
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] sm:w-auto"
            >
              <WhatsAppGlyph />
              Falar no WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Quero%20come%C3%A7ar%20um%20projeto`}
              className="w-full rounded-full border border-ocean-200 bg-white px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-ocean-300 sm:w-auto"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
