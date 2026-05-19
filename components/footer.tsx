"use client";

export default function Footer() {
    return (
        <footer className="relative mt-16 overflow-hidden border-t border-white/10 bg-black">

        {/* glow */}
        <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-green-400/5 blur-3xl rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-blue-500/5 blur-3xl rounded-full" />

        {/* conteúdo */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

            <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* esquerda */}
            <div>
                <h3 className="text-2xl font-black text-white mb-3">
                    Nexium <span className="text-blue-400">Code</span>
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-md text-sm">
                    Soluções digitais modernas para empresas que querem crescer de verdade com tecnologia e performance.
                </p>
            </div>

            {/* direita */}
            <div className="flex flex-col md:items-end gap-3">

                <h4 className="text-green-400 text-xs font-semibold tracking-widest uppercase">
                Contatos
                </h4>

                {/* linkedin */}
                <a
                href="https://www.linkedin.com/company/nexiumcode/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                group flex items-center gap-3
                text-gray-300 text-sm
                transition-all duration-300
                hover:text-green-400
                "
                >
                <div
                    className="
                    w-9 h-9 rounded-lg
                    border border-white/10
                    bg-white/5
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:border-green-400/40
                    group-hover:bg-green-400/10
                    "
                >
                    in
                </div>

                <span>
                    LinkedIn: Nexium Code
                </span>
                </a>

                {/* email */}
                <a
                href="mailto:relacionamento@nexiumcode.com.br"
                className="
                group flex items-center gap-3
                text-gray-300 text-sm
                transition-all duration-300
                hover:text-green-400
                "
                >
                <div
                    className="
                    w-9 h-9 rounded-lg
                    border border-white/10
                    bg-white/5
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:border-green-400/40
                    group-hover:bg-green-400/10
                    "
                >
                    @
                </div>

                <span>
                    relacionamento@nexiumcode.com.br
                </span>
                </a>
            </div>
            </div>

            {/* linha */}
            <div className="w-full h-px bg-white/10 my-6" />

            {/* copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs">

            <p className="text-gray-500 text-center md:text-left">
                © 2026{" "}
                <span className="text-green-400 font-medium">
                Nexium Code
                </span>{" "}
                — Todos os direitos reservados.
            </p>

            <span className="text-gray-600 tracking-wide">
                Built with Next.js
            </span>
            </div>
        </div>
        </footer>
    );
}