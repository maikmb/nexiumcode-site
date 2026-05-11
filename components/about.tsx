"use client";

import Image from "next/image";

export default function About() {
return (
    <section id="sobre" className="px-6 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGEM */}
            <div className="relative group">
            <div className="absolute -inset-2 bg-green-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div
                className="
                relative z-10
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/5 backdrop-blur
                shadow-xl
                transition-all duration-500
                group-hover:scale-[1.02]
                group-hover:border-green-400/40"
            >
                <Image
                src="/blog-1.png"
                alt="Blog Nexium"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            </div>

            {/* CONTEÚDO */}
            <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Crie, venda e escale seu </span>
                <span className="text-blue-400">negócio digital</span>
            </h2>

            <p className="text-gray-400 mb-8 text-lg">
                De sites institucionais a sistemas completos, desenvolvemos soluções
                que realmente geram resultado.
            </p>

            <ul className="space-y-3 mb-10">
                {[
                "Sistemas personalizados",
                "Landing pages de alta conversão",
                "Automação de processos",
                "Produtos digitais escaláveis",
                ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400">✔</span>
                    {item}
                </li>
                ))}
            </ul>

            <div className="grid grid-cols-3 gap-6">
                <div>
                <p className="text-2xl font-bold text-green-400">+50</p>
                <span className="text-sm text-gray-400">Projetos</span>
                </div>

                <div>
                <p className="text-2xl font-bold text-green-400">+20</p>
                <span className="text-sm text-gray-400">Clientes ativos</span>
                </div>

                <div>
                <p className="text-2xl font-bold text-green-400">100%</p>
                <span className="text-sm text-gray-400">Foco em resultado</span>
                </div>
            </div>
            </div>

        </div>
        </section>
    );
}