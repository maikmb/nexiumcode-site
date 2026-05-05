"use client";

export default function Process() {
return (
    <section id="processo" className="px-6 py-32 relative">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-400">
            Como trabalhamos
        </h2>

        <div className="w-16 h-[2px] bg-blue-400 mx-auto mb-20"></div>

        <div className="relative max-w-6xl mx-auto">
            {/* LINHA CENTRAL */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>

            <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {[
                {
                title: "Descoberta",
                desc: "Entendemos seu negócio, dores e oportunidades reais.",
                },
                {
                title: "Planejamento",
                desc: "Criamos uma estratégia clara e escalável.",
                },
                {
                title: "Execução",
                desc: "Desenvolvemos com foco em performance e qualidade.",
                },
                {
                title: "Evolução",
                desc: "Monitoramos e melhoramos continuamente.",
                },
            ].map((step, i) => (
                <div
                key={i}
                className="group relative flex flex-col items-center text-center"
                >
                {/* CÍRCULO */}
                <div
                    className="
                    w-16 h-16 flex items-center justify-center
                    rounded-full border border-green-400/40
                    bg-black/40 backdrop-blur
                    text-green-400 text-xl font-bold
                    mb-6
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:bg-green-400
                    group-hover:text-black
                    group-hover:shadow-[0_0_20px_rgba(74,222,128,0.6)]"
                >
                    {i + 1}
                </div>

                {/* CARD */}
                <div
                    className="
                    bg-white/5 border border-white/10
                    rounded-2xl p-6
                    backdrop-blur
                    transition-all duration-300
                    group-hover:border-green-400/40
                    group-hover:shadow-lg group-hover:shadow-green-500/10
                    group-hover:-translate-y-2"
                >
                    <h3 className="text-lg font-semibold text-green-400 mb-3">
                    {step.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}