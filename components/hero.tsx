export default function Hero() {
return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
            Soluções digitais que{" "}
            <span className="text-blue-400">fazem seu negócio evoluir</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
            Desenvolvemos softwares, produtos próprios e estratégias digitais
            para empresas que querem crescer de verdade.
        </p>

        <div className="flex gap-4">
            <button 
            className="relative px-8 py-4 rounded-2xl font-semibold 
            border border-green-400/40 text-green-400
            animate-[glowPulse_2s_infinite]
            overflow-hidden
            transition-all duration-300
            hover:scale-105 active:scale-95

            before:absolute before:inset-0 
            before:bg-green-400 before:opacity-0 
            before:transition-opacity before:duration-300
            hover:before:opacity-100

            hover:text-black
            hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]">
        
            <span className="relative z-10">Fale Conosco</span>
            </button>

            <a href="#produtos">
            <button 
                className="relative px-8 py-4 rounded-2xl font-semibold 
                border border-green-400/40 text-green-400
                overflow-hidden
                transition-all duration-300
                hover:scale-105 active:scale-95

                before:absolute before:inset-0 
                before:bg-green-400 before:opacity-0 
                before:transition-opacity before:duration-300
                hover:before:opacity-100

                hover:text-black
                hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                
                <span className="relative z-10">Ver produtos</span>
            </button>
            </a>
        </div>
        </section>
    );
    }