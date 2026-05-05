"use client";

export default function Contact() {
return (
    <section
        id="contato"
        className="relative px-6 py-36 text-center overflow-hidden"
        >
        {/* FUNDO */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F4A] via-[#081428] to-[#0a7a5d]"></div>

        {/* GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Vamos construir seu próximo{" "}
            <span className="text-green-400">software?</span>
            </h2>

            <p className="text-white/70 mb-10 text-lg">
            Fale com a Nexium Code e transforme sua ideia em um produto digital real,
            escalável e pronto para crescer.
            </p>

            <button
            className="
            relative px-10 py-5 rounded-2xl font-semibold text-green-400
            border border-green-400/40 overflow-hidden
            animate-[glowPulse_2s_infinite]
            transition-all duration-300
            hover:scale-105 active:scale-95

            before:absolute before:inset-0 
            before:bg-green-400 before:opacity-0 
            before:transition-opacity before:duration-300
            hover:before:opacity-100

            hover:text-black
            hover:shadow-[0_0_25px_rgba(74,222,128,0.6)]"
            >
            <span className="relative z-10">
                Entrar em contato
            </span>
            </button>
        </div>
        </section>
    );
}