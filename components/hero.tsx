"use client";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 overflow-hidden">

        {/* glow leve */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full"></div>

        {/* conteúdo */}
        <div className="relative z-10">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight text-white">
            Onde sua ideia se{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                transforma em solução
            </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed mx-auto">
            Desenvolvemos softwares, produtos próprios e estratégias digitais
            para empresas que querem crescer de verdade.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* botão principal */}
            <a href="#contato">
                <button
                className="
                group relative overflow-hidden
                px-8 py-4 rounded-2xl font-semibold
                bg-green-400 text-black
                transition-all duration-300
                hover:scale-105 active:scale-95
                hover:shadow-[0_0_20px_rgba(74,222,128,0.45)]"
                >
                <span className="relative z-10">
                    Fale Conosco →
                </span>

                {/* reflexo */}
                <div
                    className="
                    absolute inset-0
                    bg-white/20
                    translate-x-[-100%]
                    group-hover:translate-x-[100%]
                    transition-transform duration-700
                    skew-x-12"
                />
                </button>
            </a>

            {/* botão secundário */}
            <a href="#produtos">
                <button
                className="
                group relative overflow-hidden
                px-8 py-4 rounded-2xl font-semibold
                border border-white/10
                bg-white/5 text-white
                backdrop-blur
                transition-all duration-300
                hover:scale-105
                hover:border-green-400/40
                hover:bg-white/10
                active:scale-95"
                >
                <span className="relative z-10">
                    Ver produtos
                </span>

                {/* reflexo */}
                <div
                    className="
                    absolute inset-0
                    bg-white/10
                    translate-x-[-100%]
                    group-hover:translate-x-[100%]
                    transition-transform duration-700
                    skew-x-12"
                />
                </button>
            </a>
            </div>
        </div>
        </section>
    );
}