"use client";

type Product = {
  name: string;
  desc: string;
  link: string;
  features: string[];
  image: string;
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
      {/* TITLE */}
        <div className="text-center mb-20 relative z-10">
            <span
            className="
                inline-flex items-center gap-2
                px-4 py-1.5 rounded-full
                bg-green-400/10 border border-green-400/20
                text-green-400 text-sm font-medium
                backdrop-blur-sm"
            >
            ✦ Tecnologia & Performance
            </span>


        <h2
          className="
            mt-6 text-5xl md:text-6xl font-black
            bg-linear-to-r from-white via-blue-100 to-green-300
            bg-clip-text text-transparent"
        >
          Nossos Produtos
        </h2>

        <div className="w-24 h-1 rounded-full bg-linear-to-r from-blue-400 to-green-400 mx-auto mt-6"></div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
          Soluções digitais criadas para transformar processos em resultados.
          Porque sofrer com planilha em 2026 já deveria ser crime tecnológico.
        </p>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* ESQUERDA */}
        <div className="lg:w-1/2 flex justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                activeProduct === null ? 0 : (activeProduct + 1) * 100
              }%)`,
            }}
          >

            {/* CARD PADRÃO */}
            <div className="min-w-full flex justify-center">
              <div className="relative group w-80 h-80">

                {/* glow */}
                <div
                  className="
                    absolute -inset-2
                    bg-linear-to-r from-blue-400/20 to-green-400/20
                    blur-2xl opacity-0
                    group-hover:opacity-100
                    transition duration-500"
                ></div>

                {/* card */}
                <div
                  className="
                    relative w-full h-full rounded-3xl overflow-hidden
                    border border-white/10
                    bg-white/5 backdrop-blur-xl
                    transition-all duration-500
                    group-hover:scale-105
                    group-hover:-translate-y-2
                    group-hover:border-green-400/40"
                >
                  <img
                    src="/polaroid.png"
                    alt="Nexium Code"
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* badge */}
                  <div
                    className="
                      absolute top-4 left-4
                      px-3 py-1 rounded-full
                      bg-green-400/20 border border-green-400/30
                      text-green-300 text-xs font-semibold
                      backdrop-blur-md"
                  >
                    Destaque
                  </div>

                  {/* texto */}
                  <div className="absolute bottom-5 left-5">
                    <p className="text-white font-bold text-lg">
                      Nexium Code
                    </p>

                    <span className="text-green-400 text-sm">
                      Soluções digitais
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUTOS */}
            {products.map((product, i) => (
              <div key={i} className="min-w-full flex justify-center">
                <div className="relative group w-80 h-80">

                  {/* glow */}
                  <div
                    className="
                      absolute -inset-2
                      bg-linear-to-r from-blue-400/20 to-green-400/20
                      blur-2xl opacity-0
                      group-hover:opacity-100
                      transition duration-500"
                  ></div>

                  {/* card */}
                  <div
                    className="
                      relative w-full h-full rounded-3xl overflow-hidden
                      border border-white/10
                      bg-white/5 backdrop-blur-xl
                      transition-all duration-500
                      group-hover:scale-105
                      group-hover:-translate-y-2
                      group-hover:border-green-400/40"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* badge */}
                    <div
                      className="
                        absolute top-4 left-4
                        px-3 py-1 rounded-full
                        bg-blue-400/20 border border-blue-400/30
                        text-blue-300 text-xs font-semibold
                        backdrop-blur-md"
                    >
                      Produto
                    </div>

                    {/* texto */}
                    <div className="absolute bottom-5 left-5">
                      <p className="text-white font-bold text-lg">
                        {product.name}
                      </p>

                      <span className="text-green-400 text-sm">
                        Tecnologia & Performance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIREITA */}
        <div className="lg:w-1/2 flex flex-col gap-5">
          {products.map((product, i) => {
            const isOpen = activeProduct === i;

            return (
              <div
                key={i}
                onClick={() => setActiveProduct(isOpen ? null : i)}
                className={`
                  relative overflow-hidden cursor-pointer
                  rounded-3xl border backdrop-blur-xl
                  transition-all duration-500

                  ${
                    isOpen
                      ? `
                        bg-linear-to-br from-white/10 to-white/5
                        border-green-400/40
                        shadow-[0_0_30px_rgba(74,222,128,0.12)]
                        p-6 scale-[1.02]`
                      : `
                        bg-white/5 border-white/10
                        hover:border-green-400/30
                        hover:bg-white/[0.07]
                        hover:-translate-y-1
                        p-5`
                  }
                `}
              >

                {/* brilho */}
                <div
                  className="
                    absolute inset-0 opacity-0 hover:opacity-100
                    transition duration-700
                    bg-linear-to-r from-blue-400/5 via-transparent to-green-400/5"
                ></div>

                {/* header */}
                <div className="relative flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {product.name}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {product.desc}
                    </p>
                  </div>

                  <div
                    className={`
                      w-9 h-9 rounded-full
                      flex items-center justify-center
                      bg-white/5 border border-white/10
                      text-green-400 text-lg
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    ↓
                  </div>
                </div>

                {/* conteúdo */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500
                    ${
                      isOpen
                        ? "max-h-96 opacity-100 mt-5"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="border-t border-white/10 pt-5">
                    <ul className="space-y-2 text-sm text-gray-300 mb-6">
                      {product.features?.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2"
                        >
                          <span className="text-green-400">✦</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={product.link}
                      target={
                        product.link?.startsWith("http")
                          ? "_blank"
                          : "_self"
                      }
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        inline-flex items-center gap-2
                        px-5 py-2.5 rounded-2xl
                        bg-linear-to-r from-green-400 to-emerald-300
                        text-black font-bold text-sm
                        transition-all duration-300
                        hover:scale-105
                        hover:shadow-[0_0_25px_rgba(74,222,128,0.35)]
                        active:scale-95"
                    >
                      Saiba mais →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* CARD FINAL */}
          <div
            className="
              rounded-3xl border border-dashed border-white/15
              bg-white/3
              p-6 text-center
              text-gray-500
              hover:border-green-400/30
              hover:text-green-400
              transition-all duration-300"
          >
            Novo produto em breve...
          </div>
        </div>
      </div>
    </section>
  );
}