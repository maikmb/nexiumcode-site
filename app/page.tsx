"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Products from "../components/Products";
import Services from "../components/services";
import Process from "../components/process";
import Team from "../components/team";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Intro from "../components/intro";

type Person = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  instagram: string;
  github: string;
};

export default function Page() {
  const [activeSection, setActiveSection] = useState("");
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  const products = [
    {
      name: "AquiBruce",
      desc: "Cardápio digital inteligente para restaurantes aumentarem vendas.",
      link: "https://aquibruce.com.br/",
      image: "/aquibruce.png",
      features: [
        "Cardápio digital interativo",
        "Cardápio com fotos, categorias e busca instantânea",
        "Carrinho e checkout simples",
        "Pedidos via QR Code",
        "Acompanhamento no celular",
      ],
    },
    {
      name: "EiBilly",
      desc: "Sistema de agendamento para profissionais.",
      link: "",
      image: "/eibilly.png",
      features: [],
    },
    {
      name: "EiWhats",
      desc: "Centralize atendimentos de WhatsApp, Instagram e Facebook.",
      link: "",
      image: "/eiwhats.png",
      features: [],
    },
  ];

  const services = [
    {
      title: "Desenvolvimento de Sites",
      desc: "Sites modernos e otimizados.",
    },
    {
      title: "Tráfego Pago & Social Media",
      desc: "Gestão de redes e campanhas.",
    },
    {
      title: "Sistemas Sob Medida",
      desc: "Plataformas personalizadas.",
    },
  ];

  const people: Person[] = [
    {
      name: "Maik Braga",
      role: "Dev",
      img: "/maik.png",
      linkedin: "https://www.linkedin.com/in/maikmb/",
      instagram: "https://www.instagram.com/maikmb/",
      github: "https://github.com/maikmb",
    },
    {
      name: "Djair Silva",
      role: "Dev",
      img: "/djair.png",
      linkedin: "https://www.linkedin.com/in/djair-silva/",
      instagram: "https://www.instagram.com/dja_sil/",
      github: "https://github.com/sniperpsp",
    },
    {
      name: "Diego Monteiro",
      role: "Dev",
      img: "/diego.png",
      linkedin:
        "https://www.linkedin.com/in/diego-monteiro-sousa-8a579b5a/",
      instagram: "https://www.instagram.com/dmz_4.5/",
      github: "https://github.com/diegomonteirosousa",
    },
  ];

  useEffect(() => {

    setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="pt-25 scroll-smooth bg-linear-to-br from-[#020617] via-[#081428] to-[#162E6E] text-white min-h-screen">

      <Intro show={showIntro} />

      <Navbar activeSection={activeSection} />

      <Hero />

      <About />

      <Products
        products={products}
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
      />

      <Services services={services} />

      <Process />

      <Team people={people} />

      <Contact />

      <Footer />

    </main>
  );
}