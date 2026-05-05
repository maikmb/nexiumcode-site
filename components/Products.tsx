"use client";

type Product = {
    name: string;
    desc: string;
    link: string;
    features: string[];
    };

type Props = {
    products: Product[];
    activeProduct: number | null;
    setActiveProduct: (index: number | null) => void;
    };

    export default function Products({
    products,
    activeProduct,
    setActiveProduct,
    }: Props) {
    return (
        <section id="produtos" className="px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-400">
            Nossos Produtos
        </h2>

        <div className="w-16 h-[2px] bg-blue-400 mx-auto mb-15"></div>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20">
            Nossos produtos que fazem a diferença: transformando grandes ideias em ferramentas de alto impacto.
        </p>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">

            {/* ESQUERDA */}
            <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-4 pb-10 shadow-xl rotate-[-2deg] rounded-2xl">
                <div className="w-[320px] h-[320px] rounded-xl overflow-hidden">
                <img
                    src="/polaroid.png"
                    alt="Nexium Code"
                    className="w-full h-full object-cover"
                />
                </div>

                <p className="text-center mt-4 text-gray-700 text-sm">
                Nexium Code
                </p>
            </div>
            </div>

            {/* DIREITA */}
            <div className="md:w-1/2 flex flex-col gap-8">
            {products.map((product, i) => {
                const isOpen = activeProduct === i;

                return (
                <div
                    key={i}
                    onClick={() => setActiveProduct(isOpen ? null : i)}
                    className={`
                    group cursor-pointer
                    bg-white/5 border border-white/10
                    rounded-2xl backdrop-blur
                    transition-all duration-500
                    overflow-hidden

                    ${
                        isOpen
                        ? "scale-105 border-green-400/50 shadow-lg shadow-green-500/10 p-10"
                        : "hover:scale-105 hover:border-green-400/40 p-8"
                    }
                    `}
                >
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-green-400">
                        {product.name}
                    </h3>

                    <span
                        className={`
                        text-green-400 text-2xl
                        animate-bounce
                        transition-transform duration-300
                        ${isOpen ? "rotate-180" : ""}
                        `}
                    >
                        ↓
                    </span>
                    </div>

                    <p className="text-gray-400 mb-3">{product.desc}</p>

                    <p className="text-xs text-gray-500 mb-2 group-hover:text-green-400 transition">
                    {isOpen ? "Clique para fechar" : "Clique para ver mais"}
                    </p>

                    <div
                    className={`
                        transition-all duration-500 overflow-hidden
                        ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}
                    `}
                    >
                    <ul className="text-sm text-gray-400 space-y-2 mb-4">
                        {product.features?.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                        ))}
                    </ul>

                    <a
                        href={product.link}
                        target={product.link?.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                        group inline-flex items-center gap-2
                        px-5 py-2.5 rounded-xl
                        bg-green-400 text-black text-sm font-semibold
                        shadow-md shadow-green-400/20
                        transition-all duration-300
                        hover:scale-105
                        hover:shadow-lg hover:shadow-green-400/30
                        active:scale-95"
                    >
                        Saiba mais
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                        </span>
                    </a>
                    </div>
                </div>
                );
            })}

            <div className="border border-dashed border-white/20 p-8 rounded-2xl flex items-center justify-center text-gray-500">
                Novo produto em breve...
            </div>
            </div>
        </div>
        </section>
    );
}