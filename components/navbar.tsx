"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar({ activeSection }: { activeSection: string }) {
return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            
            <h1 className="flex items-center gap-2 text-blue-600 font-bold text-2xl md:text-3xl">
            <Image src="/logo.png" alt="Nexium Code" width={44} height={44} />
            Nexium Code
            </h1>

            <nav className="hidden md:flex gap-6 text-sm">
            {[
                { label: "Produtos", href: "produtos" },
                { label: "Serviços", href: "servicos" },
                { label: "Como trabalhamos", href: "processo" },
                { label: "Colaboradores", href: "colaboradores" },
                { label: "Contato", href: "contato" },
                { label: "Planos", href: "planos" },
            ].map((item) => {
                const isActive = activeSection === item.href;

                if (item.href === "planos") {
                return (
                    <Link
                    key={item.href}
                    href="/planos"
                    className="text-gray-400 hover:text-green-400 transition"
                    >
                    {item.label}
                    </Link>
                );
                }

                return (
                <a
                    key={item.href}
                    href={`#${item.href}`}
                    className={`transition ${
                    isActive
                        ? "text-green-400"
                        : "text-gray-400 hover:text-green-400"
                    }`}
                >
                    {item.label}
                </a>
                );
            })}
            </nav>
        </div>
        </header>
    );
    }