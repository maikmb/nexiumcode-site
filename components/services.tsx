"use client";

type Service = {
    title: string;
    desc: string;
    };

    export default function Services({ services }: { services: Service[] }) {
    return (
        <section id="servicos" className="px-6 py-32">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-400">
            Serviços
        </h2>

        <div className="w-16 h-[2px] bg-blue-400 mx-auto mb-15"></div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {services.map((item, i) => (
            <div
                key={i}
                className="bg-black/40 border border-white/10 p-10 rounded-3xl 
                hover:scale-105 hover:border-green-400/40 
                hover:shadow-lg hover:shadow-green-500/10
                transition-all duration-300 flex flex-col justify-between min-h-[320px]">
                    
                <div>
                <h3 className="text-2xl font-semibold mb-4 text-green-400">
                    {item.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.desc}
                </p>

                <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Alta performance</li>
                    <li>• Design moderno</li>
                    <li>• Escalável para crescimento</li>
                </ul>
                </div>

                <div className="mt-8"></div>
            </div>
            ))}
        </div>
        </section>
    );
}