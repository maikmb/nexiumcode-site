"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#produtos", label: "Produtos" },
  { href: "#processo", label: "Como trabalhamos" },
  { href: "#sobre", label: "Sobre" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(22,51,107,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <Link href="/" aria-label="Nexium Code — página inicial" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-ocean-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-ocean-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ocean-600/25 transition-all hover:bg-ocean-700 hover:shadow-ocean-600/40"
          >
            Fale com a gente
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-ocean-100 bg-white/95 px-5 pb-6 pt-3 backdrop-blur-xl md:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-navy/80 hover:bg-ocean-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contato"
                className="block rounded-full bg-ocean-600 px-5 py-3 text-center text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Fale com a gente
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
