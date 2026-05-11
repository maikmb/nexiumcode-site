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
        <section id="colaboradores" className="px-6 py-32">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-400">
            Colaboradores
        </h2>

        <div className="w-16 h-[2px] bg-blue-400 mx-auto mb-10"></div>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20">
            Conheça nosso time que está em crescimento constante, sempre buscando 
            entregar o melhor para nossos clientes e parceiros. Cada membro traz uma 
            paixão única por tecnologia e inovação, tornando a Nexium Code um lugar 
            onde grandes ideias se tornam realidade.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {people.map((person, i) => (
            <div
                key={i}
                className="
                group
                bg-black/40 border border-white/10 
                rounded-2xl p-8 
                text-center
                transition-all duration-300
                hover:scale-105
                hover:border-green-400
                hover:shadow-[0_0_25px_rgba(72,187,120,0.25)]">
                    
                {/* foto */}
                <div className="mb-6 flex justify-center">
                <img
                    src={person.img}
                    alt={person.name}
                    className="
                    w-28 h-28 object-cover rounded-full 
                    border-2 border-green-400
                    transition-transform duration-300
                    group-hover:scale-110"
                />
                </div>

                {/* nome */}
                <h3 className="text-lg font-semibold text-green-400">
                {person.name}
                </h3>

                {/* cargo */}
                <p className="text-gray-400 text-sm mb-6">
                {person.role}
                </p>

                {/* icons */}
                <div className="flex justify-center gap-4">
                {/* LINKEDIN */}
                <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                    border border-white/20 text-white 
                    hover:border-green-400 hover:text-green-400 transition">

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5">

                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.5c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4V24h-4V8z"/>
                    </svg>
                </a>

                {/* GITHUB */}
                <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                    border border-white/20 text-white 
                    hover:border-green-400 hover:text-green-400 transition">

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 2 .13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.64.23 2.86.11 3.16.75.8 1.2 1.82 1.2 3.08 0 4.43-2.68 5.4-5.24 5.68.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.67.79.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                    </svg>
                </a>

                {/* INSTAGRAM */}
                <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                    border border-white/20 text-white 
                    hover:border-green-400 hover:text-green-400 transition"
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
            ))}
        </div>
        </section>
    );
}