import { Logo } from "./Logo";
import { products, navLinks, whatsappLink, CONTACT_EMAIL } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ocean-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-navy/55">
              Criação de sistemas, sites e automações sob medida e consultoria
              em tecnologia para impulsionar o seu negócio.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="font-bold text-navy">Navegação</p>
              <ul className="mt-3 space-y-2 text-navy/60">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-ocean-600">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-navy">Produtos</p>
              <ul className="mt-3 space-y-2 text-navy/60">
                {products.map((product) => (
                  <li key={product.name}>
                    <a href="#produtos" className="hover:text-ocean-600">
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-navy">Contato</p>
              <ul className="mt-3 space-y-2 text-navy/60">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ocean-600"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ocean-600">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-ocean-100 pt-6 text-center text-sm text-navy/45">
          © {new Date().getFullYear()} NexiumCode. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
