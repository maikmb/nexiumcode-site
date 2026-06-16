import type { ReactNode } from "react";

/* =============================================================================
 *  NEXIUMCODE — DADOS DO SITE (fonte única de conteúdo)
 *  -----------------------------------------------------------------------------
 *  Edite SOMENTE este arquivo para alterar produtos, serviços, fundadores,
 *  contatos e o número de WhatsApp. Os componentes leem tudo daqui e o layout
 *  se adapta automaticamente à quantidade de itens (grids responsivos).
 * ============================================================================= */

/* -----------------------------------------------------------------------------
 *  CONTATO / WHATSAPP
 *  TODO: trocar pelo número real (formato internacional, só dígitos: DDI+DDD+nº)
 * --------------------------------------------------------------------------- */
export const WHATSAPP_NUMBER = "5511999999999"; // TODO: trocar pelo número real
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da NexiumCode e gostaria de falar sobre um projeto.";
export const CONTACT_EMAIL = "contato@nexiumcode.com.br";

/** Monta um link wa.me com mensagem pré-preenchida (encode automático). */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* -----------------------------------------------------------------------------
 *  SERVIÇOS (Solutions.tsx)
 *  Para adicionar/remover um serviço, edite a lista abaixo. O ícone é um
 *  fragmento de SVG (paths/shapes) renderizado dentro de um <svg> 24x24.
 * --------------------------------------------------------------------------- */
export type Service = {
  title: string;
  description: string;
  /** Conteúdo interno de um <svg viewBox="0 0 24 24"> (paths, rects, circles). */
  icon: ReactNode;
};

export const services: Service[] = [
  {
    title: "Criação de sites",
    description:
      "Sites institucionais, landing pages e portais rápidos, responsivos e otimizados para SEO — com design moderno e foco em conversão.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 21h10" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Hospedagem",
    description:
      "Infraestrutura confiável e monitorada para seu site ou sistema ficar sempre no ar, com backups, SSL e performance garantida.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Criação de e-mail",
    description:
      "E-mails profissionais no seu próprio domínio (@suaempresa.com), com configuração completa e suporte para toda a equipe.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Automações",
    description:
      "Eliminamos tarefas repetitivas conectando seus sistemas: integrações, robôs, fluxos de mensagens e processos que rodam sozinhos.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Migração de sistemas",
    description:
      "Levamos seus dados e operações para uma stack moderna com segurança e zero perda — sem interromper o seu negócio.",
    icon: (
      <path
        d="M4 12h12m0 0l-4-4m4 4l-4 4M20 5v14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Criação de sistemas",
    description:
      "Plataformas e sistemas web sob medida, construídos do zero para resolver o problema real do seu negócio — sem amarras de licenças.",
    icon: (
      <path
        d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Consultoria em tecnologia",
    description:
      "Ajudamos a escolher a tecnologia certa, planejar arquitetura e tomar decisões técnicas que economizam tempo e dinheiro.",
    icon: (
      <>
        <path d="M9.5 16h5M10 19h4" strokeLinecap="round" />
        <path
          d="M12 3a6 6 0 00-3.6 10.8c.6.45.9 1.1.9 1.7h5.4c0-.6.3-1.25.9-1.7A6 6 0 0012 3z"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

/* -----------------------------------------------------------------------------
 *  PRODUTOS (Products.tsx)
 *  Carro-chefe primeiro. Para destacar um produto, marque featured: true.
 *  LOGO: coloque a imagem em `public/products/<arquivo>` e aponte em `logo`
 *  (ex: logo: "/products/aquibruce.png"). Sem logo, usamos um badge gradiente
 *  com a inicial automaticamente.
 * --------------------------------------------------------------------------- */
export type Product = {
  name: string;
  tagline: string;
  description: string;
  /** Tailwind gradient para o badge/destaque (ex: "from-ocean-500 to-ocean-700"). */
  gradient: string;
  /** Caminho da logo em /public/products/... (opcional). Ex: "/products/eiwhats.png" */
  logo?: string;
  /** Carro-chefe — ganha destaque visual e ocupa mais espaço no grid. */
  featured?: boolean;
};

export const products: Product[] = [
  {
    name: "Aquibruce",
    tagline: "Carro-chefe",
    description:
      "Nossa plataforma principal: tecnologia de ponta para simplificar a operação do seu negócio e gerar resultados reais, do primeiro acesso ao crescimento.",
    gradient: "from-ocean-500 via-ocean-600 to-ocean-800",
    featured: true,
    // logo: "/products/aquibruce.png", // <- coloque a logo aqui quando tiver
  },
  {
    name: "EiWhats",
    tagline: "CRM de WhatsApp + Chatbot",
    description:
      "Centralize todas as conversas de WhatsApp da sua empresa, atenda em equipe e automatize respostas com um chatbot inteligente. Mais vendas, menos caos.",
    gradient: "from-ocean-400 to-ocean-600",
    // logo: "/products/eiwhats.png",
  },
  {
    name: "Eibilly",
    tagline: "Gestão para cabeleireiros",
    description:
      "Sistema feito para salões e cabeleireiros: agenda, clientes, comandas e financeiro num só lugar, simples de usar no dia a dia.",
    gradient: "from-ocean-600 to-ocean-900",
    // logo: "/products/eibilly.png",
  },
];

/* -----------------------------------------------------------------------------
 *  FUNDADORES / ADMINISTRAÇÃO (Team.tsx)
 *  FOTO: coloque a imagem em `public/team/<arquivo>` e aponte em `photo`
 *  (ex: photo: "/team/djair.jpg"). Sem foto, usamos um avatar gradiente com as
 *  iniciais automaticamente. `from` controla a direção da animação de entrada.
 * --------------------------------------------------------------------------- */
export type Founder = {
  name: string;
  role: string;
  bio: string;
  /** Caminho da foto em /public/team/... (opcional). Ex: "/team/djair.jpg" */
  photo?: string;
  /** Direção da animação ao rolar a página. */
  from: "left" | "right" | "up";
};

export const founders: Founder[] = [
  {
    name: "Djair Silva",
    role: "Co-fundador & CEO",
    bio: "Lidera a visão de produto e a estratégia tecnológica da NexiumCode, traduzindo necessidades de negócio em soluções de software sólidas e escaláveis.",
    from: "left",
    // photo: "/team/djair.jpg", // <- coloque a foto aqui quando tiver
  },
  {
    name: "Maik Moura",
    role: "Co-fundador & CTO",
    bio: "Responsável pela engenharia e pela arquitetura dos sistemas, garante qualidade de código, performance e segurança em cada entrega.",
    from: "right",
    // photo: "/team/maik.jpg",
  },
];

/* -----------------------------------------------------------------------------
 *  MISSÃO, VISÃO E VALORES (Values.tsx)
 * --------------------------------------------------------------------------- */
export const mission =
  "Impulsionar negócios com tecnologia sob medida, transformando ideias em sistemas confiáveis que geram resultado de verdade.";

export const vision =
  "Ser a parceira de tecnologia de referência para empresas que querem crescer com software bem feito, do primeiro projeto à escala.";

export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: "Qualidade sem atalhos",
    description:
      "Código limpo, testado e pronto para escalar desde o primeiro dia. Não entregamos remendo.",
  },
  {
    title: "Parceria de longo prazo",
    description:
      "Não entregamos e sumimos: acompanhamos, evoluímos e crescemos junto com o seu negócio.",
  },
  {
    title: "Transparência",
    description:
      "Você sempre sabe em que pé está o projeto, quanto custa e o que vem a seguir. Sem juridiquês.",
  },
  {
    title: "Tecnologia com propósito",
    description:
      "Cada decisão técnica existe para resolver um problema real e gerar valor mensurável.",
  },
];

/* -----------------------------------------------------------------------------
 *  NAVEGAÇÃO (Header.tsx / Footer.tsx)
 * --------------------------------------------------------------------------- */
export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#fundadores", label: "Fundadores" },
  { href: "#contato", label: "Contato" },
];
