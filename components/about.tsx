"use client";

import Image from "next/image";

export default function About() {
return (
    <section id="sobre" className="relative px-6 py-32 overflow-hidden">

        {/* glow fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-500/5 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGEM */}
            <div className="relative group">
                
            {/* glow */}
            <div className="absolute -inset-3 bg-linear-to-r from-green-400/10 to-blue-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div
                className="
                relative z-10
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/5 backdrop-blur
                shadow-[0_0_40px_rgba(0,0,0,0.25)]
                transition-all duration-500
                group-hover:scale-[1.02]
                group-hover:border-green-400/30"
            >
                <Image
                src="/blog-1.png"
                alt="Blog Nexium"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-black/50 via-transparent to-transparent"></div>

                {/* badge */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/40 backdrop-blur border border-white/10 text-sm text-green-400">
                    ✦ Nexium Code
                </div>
            </div>
            </div>

            {/* CONTEÚDO */}
            <div>
                
            {/* mini title */}
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase">
                ✦ Sobre nós
            </span>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight mt-3">
                <span className="text-white">
                    Crie, venda e escale seu{" "}
                </span>

                <span className="bg-linear-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    negócio digital
                </span>
            </h2>

            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                De sites institucionais a sistemas completos, desenvolvemos soluções
                modernas que realmente geram resultado e ajudam empresas a crescer
                com tecnologia de verdade.
            </p>

            {/* lista */}
            <ul className="space-y-4 mb-10">
                {[
                "Sistemas personalizados",
                "Landing pages de alta conversão",
                "Automação de processos",
                "Produtos digitais escaláveis",
                ].map((item, i) => (
                <li
                    key={i}
                    className="
                    flex items-center gap-4
                    text-gray-300
                    bg-white/5
                    border border-white/5
                    rounded-2xl
                    px-4 py-3
                    backdrop-blur
                    transition-all duration-300
                    hover:border-green-400/20
                    hover:bg-white/10"
                >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400/10 text-green-400 text-sm">
                    ✔
                    </span>

                    {item}
                </li>
                ))}
            </ul>

            {/* métricas */}
            <div className="grid grid-cols-3 gap-4">
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur">
                <p className="text-3xl font-black text-green-400 mb-1">
                    +50
                </p>

                <span className="text-sm text-gray-400">
                    Projetos
                </span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur">
                <p className="text-3xl font-black text-green-400 mb-1">
                    +20
                </p>

                <span className="text-sm text-gray-400">
                    Clientes ativos
                </span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur">
                <p className="text-3xl font-black text-green-400 mb-1">
                    100%
                </p>

                <span className="text-sm text-gray-400">
                    Foco em resultado
                </span>
                </div>
            </div>
            </div>

        </div>
    </section>
);
}