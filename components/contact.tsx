"use client";

export default function Contact() {
    return (
        <section
        id="contato"
        className="relative px-6 py-24 overflow-hidden"
        >

        {/* FUNDO */}
        <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#081428] to-[#0F2D63]" />

        {/* GLOW */}
        <div className="absolute top-37.5 left-25 w-100 h-100 bg-green-400/10 blur-3xl rounded-full" />

        <div className="absolute bottom-37.5 right-25 w-100 h-100 bg-blue-500/10 blur-3xl rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[60px_60px]" />

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-4xl mx-auto">
            <div
            className="
            relative overflow-hidden
            rounded-[28px]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            px-8 py-14 md:px-14
            shadow-[0_0_50px_rgba(0,0,0,0.3)]"
            >

            {/* brilho */}
            <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

            {/* badge */}
            <div className="flex justify-center mb-6">
                <span
                className="
                px-4 py-1.5 rounded-full
                border border-green-400/20
                bg-green-400/10
                text-green-400
                text-xs font-medium"
                >
                ✦ Nexium Code
                </span>
            </div>

            {/* título */}
            <h2
                className="
                text-3xl md:text-5xl
                font-black
                text-center
                leading-tight
                text-white
                mb-6"
            >
                Vamos transformar sua{" "}
                <span className="text-green-400">
                ideia
                </span>{" "}
                em software.
            </h2>

            {/* texto */}
            <p
                className="
                text-center
                text-gray-400
                text-base
                leading-relaxed
                max-w-2xl
                mx-auto
                mb-10"
            >
                Criamos soluções digitais modernas, escaláveis e prontas para crescer com seu negócio.
            </p>

            {/* botões */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                {/* botão principal */}
                <a
                href="mailto:relacionamento@nexiumcode.com.br"
                className="
                group relative overflow-hidden
                px-7 py-3.5 rounded-2xl
                bg-green-400
                text-black font-semibold text-sm
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(74,222,128,0.45)]
                active:scale-95"
                >
                <span className="relative z-10">
                    Entrar em contato →
                </span>

                {/* reflexo */}
                <div
                    className="
                    absolute inset-0
                    bg-white/20
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform duration-700
                    skew-x-12"
                />
                </a>

                {/* botão secundário */}
                <a
                href="https://www.linkedin.com/company/nexiumcode/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                group relative overflow-hidden
                px-7 py-3.5 rounded-2xl
                border border-white/10
                bg-white/5
                text-white text-sm font-medium
                backdrop-blur
                transition-all duration-300
                hover:border-green-400/40
                hover:bg-white/10
                hover:scale-105
                active:scale-95"
                >
                <span className="relative z-10">
                    Conhecer a Nexium
                </span>

                {/* reflexo */}
                <div
                    className="
                    absolute inset-0
                    bg-white/10
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform duration-700
                    skew-x-12"
                />
                </a>
            </div>
            </div>
        </div>
        </section>
    );
}