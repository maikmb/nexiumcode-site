"use client";

export default function Footer() {
return (
    <footer className="px-6 py-10 bg-black text-gray-400 text-sm border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

            {/* ESQUERDA */}
            <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">
                Nexium <span className="text-blue-400">Code</span>
            </h3>

            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                Soluções digitais modernas para empresas que querem crescer de verdade com tecnologia e performance.
            </p>
            </div>

            {/* DIREITA */}
            <div className="flex flex-col md:items-end justify-center gap-3 text-gray-400">
            <h4 className="text-blue-400 font-semibold mb-2">Contatos</h4>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/company/nexiumcode/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
            >
                LinkedIn: Nexium Code
            </a>

            {/* Email */}
            <a
                href="mailto:relacionamento@nexiumcode.com.br"
                className="hover:text-green-400 transition"
            >
                relacionamento@nexiumcode.com.br
            </a>
            </div>
        </div>

        {/* copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
            <p>
            © <span className="text-green-400">Nexium Code</span> — Todos os direitos reservados.
            </p>
        </div>
        </footer>
    );
}