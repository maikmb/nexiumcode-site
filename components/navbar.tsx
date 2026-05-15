"use client";

import Image from "next/image";

export default function Navbar({ activeSection }: { activeSection: string }) {
return (
    <>
      {/* 🔝 TOPBAR FIXA COM LETREIRO */}
        <div className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10 text-gray-300 text-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
            
            {/* LETREIRO */}
            <div className="overflow-hidden whitespace-nowrap w-[400px]">
            <div className="animate-marquee inline-block text-green-400 drop-shadow-[0_0_6px_#4ade80]">                Note : Sua necessidade desenhada em cada linha de código.
                </div>
            </div>

            {/* REDES */}
            <div className="flex items-center gap-3">

            <div className="flex items-center gap-3">

            {/* INSTAGRAM */}
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full 
                border border-white/20 text-white 
                hover:border-green-400 hover:text-green-400 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
            </a>

            {/* GITHUB */}
            <a
                href="https://github.com/maikmb/nexiumcode-site"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full 
                border border-white/20 text-white 
                hover:border-green-400 hover:text-green-400 transition">

                    
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04A9.3 9.3 0 0112 6.8c.85.004 1.7.12 2.5.35 1.9-1.31 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.61 1.03 2.72 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.59.69.48A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
            </a>

            {/* LINKEDIN */}
            <a
                href="https://www.linkedin.com/company/nexiumcode/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full 
                border border-white/20 text-white 
                hover:border-green-400 hover:text-green-400 transition">

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.5c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4V24h-4V8z"/>
                </svg>
            </a>

            </div>

            </div>
            </div>
        </div>

        {/* 🔽 NAVBAR */}
        <header className="fixed top-[40px] w-full z-40 backdrop-blur bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            
            <h1 className="flex items-center gap-2 text-white font-bold text-2xl md:text-3xl">
                <Image src="/logo.png" alt="Nexium Code" width={44} height={44} />
                <span>
                Nexium<span className="text-blue-400">Code</span>
                </span>
            </h1>

            <nav className="hidden md:flex gap-6 text-sm">
                {[
                { label: "Home", href: "home" },
                { label: "Sobre nós", href: "sobre" },
                { label: "Serviços", href: "servicos" },
                { label: "Produtos", href: "produtos" },
                { label: "Contato", href: "contato" },
                ].map((item) => {
                const isActive = activeSection === item.href;

                return (
                    <a
                    key={item.href}
                    href={`#${item.href}`}
                    className={`relative transition
                    ${
                        isActive
                        ? "text-green-400 after:w-full"
                        : "text-gray-300 hover:text-green-400 hover:after:w-full"
                    }
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-green-400
                    after:transition-all`}
                    >
                    {item.label}
                    </a>
                );
                })}
            </nav>
            </div>
        </header>
        </>
    );
}