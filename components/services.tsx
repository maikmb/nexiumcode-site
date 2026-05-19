"use client";

type Service = {
    title: string;
    desc: string;
    };

    export default function Services({
    services,
    }: {
    services: Service[];
    }) {
    return (
        <section
        id="servicos"
        className="relative px-6 py-32 overflow-hidden"
        >
        {/* BG EFFECT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

        {/* TITLE */}
        <div className="text-center mb-20 relative z-10">
            <span
            className="
                inline-flex items-center gap-2
                px-4 py-1.5 rounded-full
                bg-green-400/10 border border-green-400/20
                text-green-400 text-sm font-medium
                backdrop-blur-sm
            "
            >
            ✦ Soluções Digitais
            </span>


            <h2
            className="
            text-5xl md:text-6xl
            font-black
            text-white
            leading-tight"
            >
            Serviços que fazem
            <br />
            sua marca crescer
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Criamos experiências digitais modernas, rápidas e escaláveis
            para empresas que querem presença forte no mercado.
            </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
            {services.map((item, i) => (
            <div
                key={i}
                className="
                group
                relative
                overflow-hidden
                rounded-4xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-10
                transition-all duration-500
                hover:-translate-y-3
                hover:border-blue-400/40
                hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]"
            >
                {/* GLOW */}
                <div
                className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                bg-linear-to-br
                from-blue-500/10
                via-transparent
                to-green-400/10"
                />

                {/* NUMBER */}
                <span
                className="
                text-6xl
                font-black
                text-white/5
                absolute
                top-6
                right-6"
                >
                0{i + 1}
                </span>

                {/* CONTENT */}
                <div className="relative z-10">
                <div
                    className="
                    w-16 h-16
                    rounded-2xl
                    bg-linear-to-br
                    from-green-500
                    to-cyan-400
                    flex items-center justify-center
                    mb-8
                    shadow-lg shadow-blue-500/20"
                >
                    <div className="w-6 h-6 rounded-full bg-white " />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 transition group-hover:text-green-400">
                    {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                    {item.desc}
                </p>

                <div className="space-y-3">
                    {[
                    "Alta performance",
                    "Design moderno",
                    "Escalável para crescimento",
                    ].map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-300"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-400" />

                        <span>{feature}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}