import { Logo } from "./Logo";
import type { ProductDTO } from "@/lib/content";

type NavLink = { href: string; label: string };

export default function Footer({
  navLinks,
  products,
  whatsappUrl,
  contactEmail,
}: {
  navLinks: NavLink[];
  products: ProductDTO[];
  whatsappUrl: string;
  contactEmail: string;
}) {
  return (
    <footer className="relative border-t border-white/10 bg-[#04060d]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ocean-400/60 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-foreground/50">
              Criação de sistemas, sites e automações sob medida e consultoria
              em tecnologia para impulsionar o seu negócio.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="font-display font-bold text-foreground">Navegação</p>
              <ul className="mt-3 space-y-2 text-foreground/55">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-ocean-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display font-bold text-foreground">Produtos</p>
              <ul className="mt-3 space-y-2 text-foreground/55">
                {products.map((product) => (
                  <li key={product.id}>
                    <a href="#produtos" className="transition-colors hover:text-ocean-300">
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display font-bold text-foreground">Contato</p>
              <ul className="mt-3 space-y-2 text-foreground/55">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-ocean-300"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-ocean-300">
                    {contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-foreground/40">
          © {new Date().getFullYear()} NexiumCode. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
