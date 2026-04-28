"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products = [
    {
      name: "AquiBruce",
      desc: "Cardápio digital inteligente para restaurantes aumentarem vendas.",
      link: "https://aquibruce.com.br/",
      features: [
      "Cardápio digital interativo",
      "Cardápio com fotos, categorias e busca instantânea",
      "Carrinho e checkout simples e intuitivo",
      "Pedidos via QR Code",
      "Acompanhamento de pedidos no próprio celular"]
    },
    {
      name: "EiBilly",
      desc: "Sistema de agendamento para profissionais e empresas.",
      link: "",
      features: []
    },
    {
      name: "EiWhats",
      desc: "Centralize atendimentos do WhatsApp, Instagram e Facebook.",
      link: "",
      features: []
    },
  ];

  const services = [
    {
      title: "Desenvolvimento de Sites",
      desc: "Sites institucionais e landing pages rápidas, modernas e otimizadas.",
    },
    {
      title: "Tráfego Pago & Social Media",
      desc: "Gestão de redes sociais e campanhas para gerar leads e vendas.",
    },
    {
      title: "Sistemas Sob Medida",
      desc: "Desenvolvimento de plataformas personalizadas para seu negócio.",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
  <main className="scroll-smooth bg-gradient-to-br from-[#020617] via-[#081428] to-[#162E6E] text-white min-h-screen selection:bg-green-400 selection:text-black">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="flex items-center gap-2 text-blue-600 font-bold text-2xl md:text-3xl">
            <img
              src="/logo.png"
              alt="Nexium Code"
              className="w-11 h-11 object-contain"/>
            Nexium Code
          </h1>

          <nav className="hidden md:flex gap-6 text-sm">
            {[
              { label: "Produtos", href: "produtos" },
              { label: "Serviços", href: "servicos" },
              { label: "Como trabalhamos", href: "processo" },
              { label: "Colaboradores", href: "colaboradores" },
              { label: "Contato", href: "contato" },
              { label: "Planos", href: "planos" },
            ].map((item) => {
              const isPlanos = item.href === "planos";
              const isActive = activeSection === item.href;

              if (isPlanos) {
                return (
                  <Link
                    key={item.href}
                    href="/planos"
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className={`relative transition-all duration-300
                  ${isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}
                  
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:h-[2px] after:bg-green-400 after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}>

                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* HERO */}
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


          <a href="#servicos">
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
                
              <span className="relative z-10">Ver serviços</span>
            </button>
          </a>
        </div>
      </section>

      {/* PRODUTOS */}
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

                    ${isOpen 
                      ? "scale-105 border-green-400/50 shadow-lg shadow-green-500/10 p-10" 
                      : "hover:scale-105 hover:border-green-400/40 p-8"}
                  `}
                >

                  {/* TOPO */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-green-400">
                      {product.name}
                    </h3>

                    {/* SETA */}
                    <span
                      className={`
                        text-green-400 text-2xl
                        animate-bounce
                        transition-transform duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}>
                      ↓
                    </span>
                  </div>

                  {/* DESCRIÇÃO */}
                  <p className="text-gray-400 mb-3">
                    {product.desc}
                  </p>

                  {/* HINT */}
                  <p className="text-xs text-gray-500 mb-2 group-hover:text-green-400 transition">
                    {isOpen ? "Clique para fechar" : "Clique para ver mais"}
                  </p>

                  {/* EXPANSÃO */}
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

                  {/* BOTÃO LINK */}
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
                      active:scale-95">
                    Saiba mais

                    <span
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1">
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

      {/* SERVIÇOS */}
      <section id="servicos" className="px-6 py-32 ">
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

              <div className="mt-8">
                <span className="text-green-400 text-sm font-medium">
                  Saiba mais →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="px-6 py-32 relative">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-400">
          Como trabalhamos
        </h2>

        <div className="w-16 h-[2px] bg-blue-400 mx-auto mb-20"></div>

        <div className="relative max-w-6xl mx-auto">

          {/* LINHA CENTRAL */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>

          <div className="grid md:grid-cols-4 gap-12 relative z-10">

            {[
              {
                title: "Descoberta",
                desc: "Entendemos seu negócio, dores e oportunidades reais.",
              },
              {
                title: "Planejamento",
                desc: "Criamos uma estratégia clara e escalável.",
              },
              {
                title: "Execução",
                desc: "Desenvolvemos com foco em performance e qualidade.",
              },
              {
                title: "Evolução",
                desc: "Monitoramos e melhoramos continuamente.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center">

                {/* CÍRCULO */}
                <div className="
                  w-16 h-16 flex items-center justify-center
                  rounded-full border border-green-400/40
                  bg-black/40 backdrop-blur
                  text-green-400 text-xl font-bold
                  mb-6
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-green-400
                  group-hover:text-black
                  group-hover:shadow-[0_0_20px_rgba(74,222,128,0.6)]">
                  {i + 1}
                </div>

                {/* CARD */}
                <div className="
                  bg-white/5 border border-white/10
                  rounded-2xl p-6
                  backdrop-blur
                  transition-all duration-300
                  group-hover:border-green-400/40
                  group-hover:shadow-lg group-hover:shadow-green-500/10
                  group-hover:-translate-y-2">

                  <h3 className="text-lg font-semibold text-green-400 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLABORADORES */}
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
          {[
            {
              name: "Maik Braga",
              role: "teste",
              img: "/maik.png",
              linkedin: "https://www.linkedin.com/in/maikmb/",
              instagram: "https://www.instagram.com/maikmb/",
            },
            {
              name: "Djair Silva",
              role: "teste",
              img: "/djair.png",
              linkedin: "https://www.linkedin.com/in/djair-silva/",
              instagram: "https://www.instagram.com/dja_sil/",
            },
            {
              name: "Diego Monteiro",
              role: "teste",
              img: "/diego.png",
              linkedin: "https://www.linkedin.com/in/diego-monteiro-sousa-8a579b5a/",
              instagram: "https://www.instagram.com/dmz_4.5/",
            },

          ].map((person, i) => (
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

              {/* FOTO */}
              <div className="mb-6 flex justify-center">
                <img
                  src={person.img}
                  alt={person.name}
                  className="
                  w-28 h-28 object-cover rounded-full 
                  border-2 border-green-400
                  transition-transform duration-300
                  group-hover:scale-110"/>
              </div>

              {/* NOME */}
              <h3 className="text-lg font-semibold text-green-400">
                {person.name}
              </h3>

              {/* CARGO */}
              <p className="text-gray-400 text-sm mb-6">
                {person.role}
              </p>

              {/* ICONES */}
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

                {/* INSTAGRAM */}
                <a
                  href={person.instagram}
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

                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="relative px-6 py-36 text-center overflow-hidden">
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
            hover:shadow-[0_0_25px_rgba(74,222,128,0.6)]">
            <span className="relative z-10">
              Entrar em contato
            </span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 bg-black text-gray-400 text-sm border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* ESQUERDA */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Alta <span className="text-green-400">tecnologia</span>
            </h3>

            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Soluções digitais modernas para empresas que querem crescer de verdade com tecnologia e performance.
            </p>

          </div>

          {/* DIREITA */}
          <div className="flex flex-col md:items-end justify-center gap-2 text-gray-400">
            <h4 className="text-white font-semibold mb-2">Navegação</h4>

            <a href="#produtos" className="hover:text-green-400 transition">Produtos</a>
            <a href="#servicos" className="hover:text-green-400 transition">Serviços</a>
            <a href="#processo" className="hover:text-green-400 transition">Processo</a>
            <a href="#contato" className="hover:text-green-400 transition">Contato</a>
          </div>

        </div>

        {/* copy right */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
          <p>
            © <span className="text-green-400">Nexium Code</span> — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}