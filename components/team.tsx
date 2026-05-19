"use client";

type Person = {
    name: string;
    role: string;
    img: string;
    linkedin: string;
    instagram: string;
    github: string;
    };

    export default function Team({ people }: { people: Person[] }) {
    return (
        <section id="colaboradores" className="px-6 py-28 relative overflow-hidden">
        
        {/* background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-green-400/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10">
            
            {/* title */}
            <div className="text-center mb-20">
            <span
                className="
                px-4 py-1.5 rounded-full
                border border-green-400/20
                bg-green-400/10
                text-green-400 text-sm font-medium
                backdrop-blur-sm"
            >
                ✦ Nosso Time
            </span>

            <h2 className="text-5xl font-bold mt-6 text-white">
                Colaboradores
            </h2>

            <div className="w-24 h-1 bg-linear-to-br from-green-400 to-blue-500 mx-auto rounded-full mt-6"></div>

            <p className="text-gray-400 text-center max-w-3xl mx-auto mt-8 leading-relaxed text-lg">
                Conheça nosso time que está em crescimento constante, sempre buscando 
                entregar o melhor para nossos clientes e parceiros. Cada membro traz uma 
                paixão única por tecnologia e inovação, tornando a Nexium Code um lugar 
                onde grandes ideias se tornam realidade.
            </p>
            </div>

            {/* cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {people.map((person, i) => (
                <div
                key={i}
                className="
                group relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all duration-500
                hover:-translate-y-3
                hover:border-green-400/40
                hover:shadow-[0_0_40px_rgba(74,222,128,0.15)]
                "
                >
                
                {/* glow */}
                <div
                    className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition duration-500
                    bg-linear-to-br
                    from-green-400/10
                    via-transparent
                    to-blue-500/10"
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* image */}
                    <div className="relative mb-6">
                    
                    <div
                        className="
                        absolute inset-0 rounded-full
                        bg-green-400/20 blur-2xl
                        scale-110 opacity-0
                        group-hover:opacity-100
                        transition duration-500"
                    ></div>

                    <img
                        src={person.img}
                        alt={person.name}
                        className="
                        relative
                        w-32 h-32 object-cover rounded-full
                        border-2 border-green-400/40
                        transition-all duration-500
                        group-hover:scale-105
                        group-hover:border-green-400
                        "
                    />
                    </div>

                    {/* name */}
                    <h3 className="text-2xl font-bold text-white mb-2 transition group-hover:text-green-400">
                    {person.name}
                    </h3>

                    {/* role */}
                    <div
                    className="
                    px-4 py-1 rounded-full
                    bg-green-400/10
                    border border-green-400/20
                    text-green-400 text-sm mb-8"
                    >
                    {person.role}
                    </div>

                    {/* socials */}
                    <div className="flex justify-center gap-4">
                    
                    {/* linkedin */}
                    <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-11 h-11 rounded-2xl
                        flex items-center justify-center
                        border border-white/10
                        bg-white/5
                        text-gray-300
                        transition-all duration-300
                        hover:text-green-400
                        hover:border-green-400/40
                        hover:bg-green-400/10
                        hover:-translate-y-1"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        >
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.5c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4V24h-4V8z"/>
                        </svg>
                    </a>

                    {/* github */}
                    <a
                        href={person.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-11 h-11 rounded-2xl
                        flex items-center justify-center
                        border border-white/10
                        bg-white/5
                        text-gray-300
                        transition-all duration-300
                        hover:text-green-400
                        hover:border-green-400/40
                        hover:bg-green-400/10
                        hover:-translate-y-1"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 2 .13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.64.23 2.86.11 3.16.75.8 1.2 1.82 1.2 3.08 0 4.43-2.68 5.4-5.24 5.68.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.67.79.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                        </svg>
                    </a>

                    {/* instagram */}
                    <a
                        href={person.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-11 h-11 rounded-2xl
                        flex items-center justify-center
                        border border-white/10
                        bg-white/5
                        text-gray-300
                        transition-all duration-300
                        hover:text-green-400
                        hover:border-green-400/40
                        hover:bg-green-400/10
                        hover:-translate-y-1"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        >
                        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}