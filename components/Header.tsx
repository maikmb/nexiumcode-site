"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

type NavLink = { href: string; label: string };

export default function Header({
  navLinks,
  whatsappUrl,
}: {
  navLinks: NavLink[];
  whatsappUrl: string;
}) {
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
          ? "glass-strong border-b border-white/10 shadow-[0_8px_40px_-16px_rgba(36,124,235,0.4)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <Link href="/" aria-label="NexiumCode — página inicial" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-ocean-400 to-ocean-600 shadow-[0_0_8px_rgba(95,184,250,0.8)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-sm rounded-full border border-ocean-400/40 bg-ocean-600/90 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-ocean-300 hover:bg-ocean-500 hover:shadow-[0_0_28px_-4px_rgba(95,184,250,0.7)]"
          >
            Fale com a gente
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
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
          className="glass-strong border-t border-white/10 px-5 pb-6 pt-3 md:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-white/5 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-sm block rounded-full border border-ocean-400/40 bg-ocean-600 px-5 py-3 text-center text-base font-semibold text-white"
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
