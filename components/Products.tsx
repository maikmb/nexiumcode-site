"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Parallax from "./Parallax";
import Tilt from "./Tilt";
import { Reveal } from "./Motion";
import type { ProductDTO } from "@/lib/content";

/** Envolve o card num link (nova aba) quando o produto tem URL. */
function CardShell({ href, children }: { href?: string | null; children: ReactNode }) {
  if (!href) return <>{children}</>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir produto em nova aba"
      className="block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
    >
      {children}
    </a>
  );
}

/** Selo "Abrir ↗" que aparece no hover quando o card é clicável. */
function LinkCue() {
  return (
    <span className="absolute right-5 top-5 z-10 inline-flex items-center gap-1 rounded-full border border-ocean-400/30 bg-ocean-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ocean-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      Abrir <ArrowUpRight size={13} />
    </span>
  );
}

/**
 * Seção de Produtos — recebe os produtos do banco via props.
 * - `featured: true` ganha destaque (card grande, glowing).
 * - `logoUrl` mostra a logo enviada via upload; sem logo, badge gradiente com a inicial.
 * - O grid se adapta a N produtos.
 */

function ProductBadge({ product, size }: { product: ProductDTO; size: "md" | "lg" }) {
  const dimension = size === "lg" ? "h-20 w-20 text-4xl" : "h-14 w-14 text-2xl";

  if (product.logoUrl) {
    return (
      <div className={`glow-sm relative ${dimension} overflow-hidden rounded-2xl bg-white`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.logoUrl}
          alt={`Logo ${product.name}`}
          className="h-full w-full object-contain p-1.5"
        />
      </div>
    );
  }

  return (
    <div
      className={`glow-sm flex ${dimension} items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} font-extrabold text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
      aria-hidden="true"
    >
      {product.name.charAt(0)}
    </div>
  );
}

function FeaturedCard({ product, delay }: { product: ProductDTO; delay: number }) {
  return (
    <Reveal delay={delay} className="sm:col-span-2">
      <CardShell href={product.url}>
      <Tilt className="shine-on-hover group glass-strong border-gradient glow relative overflow-hidden rounded-3xl text-white transition-transform duration-300 hover:-translate-y-1.5">
        {product.url && <LinkCue />}
        <div
          className="animate-blob pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ocean-400/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-6 p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-10">
          <ProductBadge product={product} size="lg" />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ocean-400/30 bg-ocean-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ocean-200">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ocean-300" />
              {product.tagline}
            </span>
            <h3 className="font-display mt-4 text-3xl font-bold tracking-tight neon-text md:text-4xl">
              {product.name}
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-foreground/70">{product.description}</p>
          </div>
        </div>
      </Tilt>
      </CardShell>
    </Reveal>
  );
}

function StandardCard({ product, delay }: { product: ProductDTO; delay: number }) {
  return (
    <Reveal delay={delay}>
      <CardShell href={product.url}>
      <Tilt className="group glass glow-hover relative h-full overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1.5">
        {product.url && <LinkCue />}
        <div className={`h-1.5 bg-gradient-to-r ${product.gradient} shadow-[0_0_18px_rgba(95,184,250,0.5)]`} />
        <div className="p-8">
          <ProductBadge product={product} size="md" />
          <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-foreground">{product.name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ocean-400">
            {product.tagline}
          </p>
          <p className="mt-4 leading-relaxed text-foreground/55">{product.description}</p>
        </div>
      </Tilt>
      </CardShell>
    </Reveal>
  );
}

export default function Products({ products }: { products: ProductDTO[] }) {
  return (
    <section id="produtos" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={0.12} className="absolute -right-32 top-10 h-[380px] w-[380px]">
          <div className="animate-blob h-full w-full rounded-full bg-gradient-to-bl from-ocean-600/25 to-transparent blur-3xl" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-ocean-400">
            <span className="text-ocean-500/60">02</span> / Nossos produtos
          </span>
          <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Plataformas criadas e mantidas pela NexiumCode
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Não construímos só para os outros — também criamos e evoluímos
            nossos próprios produtos digitais.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {products.map((product, i) =>
            product.featured ? (
              <FeaturedCard key={product.id} product={product} delay={i * 0.12} />
            ) : (
              <StandardCard key={product.id} product={product} delay={i * 0.12} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
