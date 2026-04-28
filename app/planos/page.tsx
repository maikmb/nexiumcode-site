"use client";

import Link from "next/link";

export default function Planos() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#081428] to-[#162E6E] text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-4">
        Construa mais. <span className="text-green-400">Pague menos.</span>
      </h1>

      <p className="text-center text-gray-400 mb-16">
        Escolha o plano ideal para o seu negócio evoluir sem dor de cabeça.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* BÁSICO */}
        <div className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur
          hover:scale-105 transition duration-300 flex flex-col min-h-[550px]">

          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Básico
            </h2>

            <p className="text-gray-400 mb-6">
              Ideal para começar.
            </p>

            <p className="text-4xl font-bold mb-8">
              R$0<span className="text-base text-gray-400">/mês</span>
            </p>
          </div>

          {/* BENEFÍCIOS */}
          <ul className="space-y-3 text-gray-300 text-sm mb-10 flex-1">
            <li>✔ 1 projeto ativo</li>
            <li>✔ Suporte básico</li>
            <li>✔ Acesso limitado ao sistema</li>
            <li>✔ Atualizações mensais</li>
            <li className="text-gray-500">✖ Integrações avançadas</li>
            <li className="text-gray-500">✖ Suporte prioritário</li>
          </ul>

          {/* BOTÃO */}
          <div>
            <button className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
              Começar grátis
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Sem cartão de crédito
            </p>
          </div>
        </div>

        {/* PRO */}
        <div className="relative bg-white border border-green-400 p-10 rounded-2xl
          text-black scale-105 shadow-[0_0_30px_rgba(74,222,128,0.25)]
          hover:scale-110 transition duration-300 flex flex-col min-h-[600px]">

          <div className="absolute -top-3 right-4 bg-green-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
            MAIS VENDIDO
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Pro
            </h2>

            <p className="text-gray-600 mb-6">
              Para empresas em crescimento.
            </p>

            <p className="text-4xl font-bold mb-8">
              R$0<span className="text-base text-gray-500">/mês</span>
            </p>
          </div>

          {/* BENEFÍCIOS */}
          <ul className="space-y-3 text-gray-700 text-sm mb-10 flex-1">
            <li>✔ Projetos ilimitados</li>
            <li>✔ Integrações com APIs</li>
            <li>✔ Painel completo</li>
            <li>✔ Atualizações semanais</li>
            <li>✔ Suporte prioritário</li>
            <li className="text-gray-400">✖ Suporte dedicado 24/7</li>
          </ul>

          {/* BOTÃO */}
          <div>
            <button className="w-full py-3 rounded-xl bg-green-400 text-black font-semibold
              hover:bg-green-300 transition shadow-lg">
              Começar agora
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Melhor custo-benefício
            </p>
          </div>
        </div>

        {/* PREMIUM */}
        <div className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur
          hover:scale-105 transition duration-300 flex flex-col min-h-[550px]">

          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Premium
            </h2>

            <p className="text-gray-400 mb-6">
              Para escala máxima.
            </p>

            <p className="text-4xl font-bold mb-8">
              R$0<span className="text-base text-gray-400">/mês</span>
            </p>
          </div>

          {/* BENEFÍCIOS */}
          <ul className="space-y-3 text-gray-300 text-sm mb-10 flex-1">
            <li>✔ Tudo do plano Pro</li>
            <li>✔ Suporte dedicado 24/7</li>
            <li>✔ Consultoria estratégica</li>
            <li>✔ Performance otimizada</li>
            <li>✔ Customizações avançadas</li>
            <li>✔ SLA garantido</li>
          </ul>

          {/* BOTÃO */}
          <div>
            <button className="w-full py-3 rounded-xl border border-green-400 text-green-400 font-semibold
              hover:bg-green-400 hover:text-black transition">
              Falar com time
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Suporte premium
            </p>
          </div>
        </div>

      </div>

      <div className="flex justify-center mt-20">
        <Link
          href="/"
          className="
            group relative px-6 py-3 rounded-xl
            border border-green-400/40 text-green-400 font-medium
            overflow-hidden
            transition-all duration-300
            hover:scale-105 active:scale-95

            before:absolute before:inset-0 
            before:bg-green-400 before:opacity-0
            before:transition-opacity before:duration-300

            hover:before:opacity-100
            hover:text-black
            hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]">
              
          <span className="relative z-10 flex items-center gap-2">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Voltar para home
          </span>
        </Link>
      </div>

    </main>
  );
}