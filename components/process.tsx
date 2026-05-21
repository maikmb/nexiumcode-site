"use client";

export default function Process() {
    return (
        <section id="processo" className="px-6 py-28 relative overflow-hidden">

        {/* background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-green-400/5 blur-[140px] rounded-full"></div>

        {/* título */}
        <div className="text-center mb-20 relative z-10">
            <span
            className="
                inline-flex items-center gap-2
                px-4 py-1.5 rounded-full
                bg-green-400/10 border border-green-400/20
                text-green-400 text-sm font-medium
                backdrop-blur-sm"
            >
            ✦ Nosso Processo
            </span>

            <h2
            className="
                mt-6 text-5xl md:text-6xl font-black"
            >
            Como trabalhamos
            </h2>

            <div className="w-24 h-1 rounded-full bg-linear-to-r from-blue-400 to-green-400 mx-auto mt-6"></div>

            <p className="text-gray-400 text-center max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            Um fluxo simples, estratégico e eficiente. Porque projeto sem processo
            vira só um grupo de pessoas sofrendo no WhatsApp às 2h da manhã.
            </p>
        </div>

        {/* timeline */}
        <div className="relative max-w-7xl mx-auto">

            {/* linha */}
            <div
            className="
                hidden lg:block
                absolute top-24 left-0 w-full h-0.5
                bg-linear-to-r
                from-transparent via-green-400/30 to-transparent"
            ></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

            {[
                {
                number: "01",
                title: "Descoberta",
                desc: "Entendemos seu negócio, dores, objetivos e oportunidades reais.",
                icon: "🔍",
                },
                {
                number: "02",
                title: "Planejamento",
                desc: "Criamos uma estratégia clara, moderna e preparada para crescer.",
                icon: "📐",
                },
                {
                number: "03",
                title: "Execução",
                desc: "Desenvolvemos tudo com foco em qualidade, design e performance.",
                icon: "⚡",
                },
                {
                number: "04",
                title: "Evolução",
                desc: "Monitoramos resultados e refinamos continuamente a solução.",
                icon: "🚀",
                },
            ].map((step, i) => (
                <div
                key={i}
                className="
                    group relative
                    rounded-3xl overflow-hidden
                    border border-white/10
                    bg-white/4
                    backdrop-blur-xl
                    p-8
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:border-green-400/30
                    hover:bg-white/6
                    hover:shadow-[0_0_35px_rgba(74,222,128,0.12)]"
                >

                {/* brilho */}
                <div
                    className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition duration-700
                    bg-linear-to-br
                    from-green-400/5 via-transparent to-blue-400/5"
                ></div>

                {/* número */}
                <div
                    className="
                    absolute top-5 right-5
                    text-5xl font-black
                    text-white/5
                    transition-all duration-500
                    group-hover:text-green-400/10"
                >
                    {step.number}
                </div>

                {/* ícone */}
                <div
                    className="
                    relative z-10
                    w-16 h-16 rounded-2xl
                    flex items-center justify-center
                    text-3xl
                    bg-linear-to-br from-green-400/20 to-blue-400/20
                    border border-white/10
                    mb-8
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                    group-hover:shadow-[0_0_25px_rgba(74,222,128,0.2)]"
                >
                    {step.icon}
                </div>

                {/* título */}
                <h3
                    className="
                    relative z-10
                    text-2xl font-bold
                    text-white mb-4
                    transition
                    group-hover:text-green-400"
                >
                    {step.title}
                </h3>

                {/* descrição */}
                <p
                    className="
                    relative z-10
                    text-gray-400 leading-relaxed text-sm"
                >
                    {step.desc}
                </p>

                {/* barrinha */}
                <div
                    className="
                    relative z-10
                    mt-8 h-1 w-16 rounded-full
                    bg-linear-to-r from-green-400 to-blue-400
                    transition-all duration-500
                    group-hover:w-28"
                ></div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}