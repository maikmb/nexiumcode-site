"use client";

import { motion, useReducedMotion } from "framer-motion";
import Parallax from "./Parallax";

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({
  badge,
  title,
  subtitle,
  whatsappUrl,
}: {
  badge: string;
  title: string;
  subtitle: string;
  whatsappUrl: string;
}) {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  // Reveal cinético: stagger por palavra, destacando "impulsionam" em neon.
  const words = title.split(/\s+/);

  return (
    <section className="relative overflow-hidden pb-24 pt-36 md:pb-36 md:pt-52">
      {/* Fundo: grade técnica + orbs locais (o mesh global vem do layout) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-lines" />
        <Parallax speed={-0.15} className="absolute -top-32 right-[-10%] h-[480px] w-[480px]">
          <div className="animate-blob h-full w-full rounded-full bg-gradient-to-br from-ocean-500/25 to-ocean-700/10 blur-3xl" />
        </Parallax>
        <Parallax speed={0.12} className="absolute -left-40 top-52 h-[420px] w-[420px]">
          <div
            className="animate-blob h-full w-full rounded-full bg-gradient-to-tr from-ocean-600/25 to-ocean-400/10 blur-3xl"
            style={{ animationDelay: "-6s" }}
          />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            {...fadeUp(0)}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-ocean-200"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-ocean-400" />
            {badge}
          </motion.span>

          <h1 className="font-display mt-7 text-balance text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {words.map((word, i) => {
              const highlight = /impulsionam/i.test(word);
              return (
                <motion.span
                  key={`${word}-${i}`}
                  initial={reduce ? false : { opacity: 0, y: "0.4em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.12 + i * 0.07, ease }}
                  className={`mr-[0.28em] inline-block ${
                    highlight
                      ? "text-gradient text-gradient-animated bg-gradient-to-r from-ocean-300 via-ocean-400 to-ocean-600 neon-text"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            {...fadeUp(0.1 + words.length * 0.07)}
            className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/65 md:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            {...fadeUp(0.2 + words.length * 0.07)}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-on-hover glow-sm group relative inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-ocean-400/40 bg-gradient-to-r from-ocean-600 to-ocean-500 px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_rgba(95,184,250,0.8)] sm:w-auto"
            >
              <WhatsAppGlyph />
              Falar no WhatsApp
            </a>
            <a
              href="#produtos"
              className="glass w-full rounded-full px-8 py-4 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-ocean-400/40 hover:text-ocean-200 sm:w-auto"
            >
              Ver produtos
            </a>
          </motion.div>
        </div>

        {/* Terminal / HUD de vidro neon */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 + words.length * 0.07, ease }}
          className="mt-16 md:mt-24"
        >
          <Parallax speed={-0.06}>
            <div className="glass border-gradient glow mx-auto max-w-3xl overflow-hidden rounded-2xl p-2">
              <div className="overflow-x-auto rounded-xl bg-[#070b16]/90 dark:bg-[#070b16]/80 p-4 font-mono text-xs leading-7 text-ocean-100 sm:text-sm md:p-8">
                <div className="mb-4 flex items-center gap-2" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs tracking-widest text-ocean-300/60">
                    ~/nexiumcode — build.ts
                  </span>
                </div>
                <p>
                  <span className="text-ocean-400">const</span>{" "}
                  <span className="text-foreground">seuNegocio</span> ={" "}
                  <span className="text-ocean-400">await</span>{" "}
                  <span className="scan-text font-semibold">nexiumcode</span>.
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
                <p className="mt-2 text-ocean-400/60">{"// "}pronto para escalar 🚀</p>
              </div>
            </div>
          </Parallax>
        </motion.div>
      </div>
    </section>
  );
}
