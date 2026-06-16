"use client";

import { ExternalLink } from "lucide-react";
import Parallax from "./Parallax";
import Tilt from "./Tilt";
import { Reveal } from "./Motion";
import type { HostedSiteDTO } from "@/lib/content";

function faviconUrl(url: string): string {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return "";
  }
}

function domainLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function SiteCard({ site, delay }: { site: HostedSiteDTO; delay: number }) {
  const favicon = faviconUrl(site.url);
  const domain = domainLabel(site.url);

  return (
    <Reveal delay={delay}>
      <Tilt className="group glass glow-hover relative h-full overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5">
        <div className="h-1 bg-gradient-to-r from-ocean-500 to-ocean-400 shadow-[0_0_14px_rgba(95,184,250,0.5)]" />
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 focus:outline-none"
          aria-label={`Visitar ${site.name}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {favicon && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={favicon}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              )}
              <div>
                <h3 className="font-display font-bold text-foreground group-hover:text-ocean-200 transition-colors">
                  {site.name}
                </h3>
                <p className="font-mono text-[11px] text-ocean-400/80">{domain}</p>
              </div>
            </div>
            <ExternalLink
              size={15}
              className="mt-1 shrink-0 text-ocean-400/40 transition-all group-hover:text-ocean-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>

          {site.description && (
            <p className="mt-3 text-sm leading-relaxed text-foreground/55">{site.description}</p>
          )}

          {site.category && (
            <span className="mt-3 inline-block rounded-full border border-ocean-400/20 bg-ocean-500/10 px-2.5 py-0.5 font-mono text-[11px] text-ocean-300">
              {site.category}
            </span>
          )}
        </a>
      </Tilt>
    </Reveal>
  );
}

export default function HostedSites({ sites }: { sites: HostedSiteDTO[] }) {
  if (sites.length === 0) return null;

  return (
    <section id="clientes" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={0.1} className="absolute -left-20 top-20 h-[300px] w-[300px]">
          <div className="animate-blob h-full w-full rounded-full bg-gradient-to-br from-ocean-600/20 to-transparent blur-3xl" />
        </Parallax>
        <Parallax speed={-0.08} className="absolute -right-20 bottom-10 h-[250px] w-[250px]">
          <div className="animate-blob h-full w-full rounded-full bg-gradient-to-tl from-ocean-500/15 to-transparent blur-3xl" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-ocean-400">
            <span className="text-ocean-500/60">03</span> / Sites hospedados
          </span>
          <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Infraestrutura que mantemos no ar
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            {sites.length} {sites.length === 1 ? "site hospedado" : "sites hospedados"} com
            monitoramento 24/7, SSL e backups automáticos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site, i) => (
            <SiteCard key={site.id} site={site} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
