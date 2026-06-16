import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { products, type Product } from "@/data/site";

/**
 * Seção de Produtos. O conteúdo vem de `data/site.ts` (export `products`).
 * - Para destacar o carro-chefe, marque `featured: true` no produto.
 * - Para a LOGO: coloque a imagem em `public/products/<arquivo>` e defina
 *   `logo: "/products/<arquivo>"`. Sem logo, mostramos um badge gradiente
 *   com a inicial automaticamente.
 */

function ProductBadge({ product, size }: { product: Product; size: "md" | "lg" }) {
  const dimension = size === "lg" ? "h-20 w-20 text-4xl" : "h-14 w-14 text-2xl";

  if (product.logo) {
    return (
      <div
        className={`relative ${dimension} overflow-hidden rounded-2xl bg-white shadow-lg shadow-ocean-600/20`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.logo}
          alt={`Logo ${product.name}`}
          className="h-full w-full object-contain p-1.5"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${dimension} items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} font-extrabold text-white shadow-lg shadow-ocean-600/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
      aria-hidden="true"
    >
      {product.name.charAt(0)}
    </div>
  );
}

function FeaturedCard({ product, delay }: { product: Product; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-3xl border border-ocean-200/70 bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 text-white shadow-2xl shadow-ocean-900/30 transition-all duration-300 hover:-translate-y-1.5 sm:col-span-2"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ocean-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative grid gap-6 p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-10">
        <ProductBadge product={product} size="lg" />
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ocean-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-ocean-300" />
            {product.tagline}
          </span>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight">{product.name}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-ocean-100/80">
            {product.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function StandardCard({ product, delay }: { product: Product; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-3xl border border-ocean-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ocean-500/15"
    >
      <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />
      <div className="p-8">
        <ProductBadge product={product} size="md" />
        <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-navy">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ocean-600">
          {product.tagline}
        </p>
        <p className="mt-4 leading-relaxed text-navy/60">{product.description}</p>
      </div>
    </Reveal>
  );
}

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
            Plataformas criadas e mantidas pela NexiumCode
          </h2>
          <p className="mt-4 text-lg text-navy/65">
            Não construímos só para os outros — também criamos e evoluímos
            nossos próprios produtos digitais.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {products.map((product, i) =>
            product.featured ? (
              <FeaturedCard key={product.name} product={product} delay={i * 120} />
            ) : (
              <StandardCard key={product.name} product={product} delay={i * 120} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
