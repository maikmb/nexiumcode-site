import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-ocean-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-navy/55">
              Desenvolvimento de software sob medida e produtos digitais que
              impulsionam negócios.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex gap-12 text-sm">
            <div>
              <p className="font-bold text-navy">Empresa</p>
              <ul className="mt-3 space-y-2 text-navy/60">
                <li>
                  <a href="#sobre" className="hover:text-ocean-600">Sobre</a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-ocean-600">Soluções</a>
                </li>
                <li>
                  <a href="#processo" className="hover:text-ocean-600">Como trabalhamos</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-navy">Produtos</p>
              <ul className="mt-3 space-y-2 text-navy/60">
                <li>
                  <a href="#produtos" className="hover:text-ocean-600">Aikrus</a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-ocean-600">Ebilly</a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-ocean-600">Awatts</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-ocean-100 pt-6 text-center text-sm text-navy/45">
          © {new Date().getFullYear()} Nexium Code. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
