/* =============================================================================
 *  CAMADA DE CONTEÚDO (server-side)
 *  -----------------------------------------------------------------------------
 *  Lê o conteúdo do banco (SQLite via Prisma) com FALLBACKS sensatos caso o
 *  banco esteja vazio/inacessível — assim o build e o runtime nunca quebram.
 *  Os componentes do site público recebem esses dados via props.
 * ============================================================================= */

import { prisma } from "./prisma";

/* ---------------------------------------------------------------------------
 *  Tipos expostos aos componentes
 * ------------------------------------------------------------------------- */
export type FounderDTO = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string | null;
  direction: "left" | "right" | "up";
  order: number;
};

export type ProductDTO = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoUrl: string | null;
  url?: string | null;
  gradient: string;
  featured: boolean;
  order: number;
};

export type ServiceDTO = {
  id: string;
  title: string;
  description: string;
  iconKey: string;
  order: number;
};

export type ValueDTO = {
  id: string;
  title: string;
  description: string;
  order: number;
};

export type HostedSiteDTO = {
  id: string;
  name: string;
  url: string;
  description: string | null;
  category: string | null;
  order: number;
};

export type SettingsDTO = {
  whatsappNumber: string;
  whatsappMessage: string;
  contactEmail: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  mission: string;
  vision: string;
};

/* ---------------------------------------------------------------------------
 *  FALLBACKS — espelham o conteúdo original de data/site.tsx.
 *  São usados quando o banco está vazio ou indisponível (ex.: build sem DB).
 * ------------------------------------------------------------------------- */
export const DEFAULT_SETTINGS: SettingsDTO = {
  whatsappNumber: "5511999999999",
  whatsappMessage:
    "Olá! Vim pelo site da NexiumCode e gostaria de falar sobre um projeto.",
  contactEmail: "contato@nexiumcode.com.br",
  heroBadge: "Sistemas sob medida & consultoria em tecnologia",
  heroTitle: "Criamos sistemas que impulsionam o seu negócio",
  heroSubtitle:
    "A NexiumCode desenvolve sites, sistemas e automações sob medida e oferece consultoria em tecnologia — do conceito ao lançamento — para empresas que querem crescer com soluções digitais bem feitas.",
  aboutText:
    "Criamos sistemas e fazemos consultoria tecnológica para provar que software de qualidade não precisa ser complicado, lento ou caro. Somos um time apaixonado por tecnologia que constrói soluções sob medida e produtos próprios — sempre com design moderno, código bem feito e foco total no resultado do cliente.",
  mission:
    "Impulsionar negócios com tecnologia sob medida, transformando ideias em sistemas confiáveis que geram resultado de verdade.",
  vision:
    "Ser a parceira de tecnologia de referência para empresas que querem crescer com software bem feito, do primeiro projeto à escala.",
};

export const DEFAULT_SERVICES: ServiceDTO[] = [
  {
    id: "s1",
    title: "Criação de sites",
    description:
      "Sites institucionais, landing pages e portais rápidos, responsivos e otimizados para SEO — com design moderno e foco em conversão.",
    iconKey: "globe",
    order: 0,
  },
  {
    id: "s2",
    title: "Hospedagem",
    description:
      "Infraestrutura confiável e monitorada para seu site ou sistema ficar sempre no ar, com backups, SSL e performance garantida.",
    iconKey: "server",
    order: 1,
  },
  {
    id: "s3",
    title: "Criação de e-mail",
    description:
      "E-mails profissionais no seu próprio domínio (@suaempresa.com), com configuração completa e suporte para toda a equipe.",
    iconKey: "mail",
    order: 2,
  },
  {
    id: "s4",
    title: "Automações",
    description:
      "Eliminamos tarefas repetitivas conectando seus sistemas: integrações, robôs, fluxos de mensagens e processos que rodam sozinhos.",
    iconKey: "automation",
    order: 3,
  },
  {
    id: "s5",
    title: "Migração de sistemas",
    description:
      "Levamos seus dados e operações para uma stack moderna com segurança e zero perda — sem interromper o seu negócio.",
    iconKey: "migration",
    order: 4,
  },
  {
    id: "s6",
    title: "Criação de sistemas",
    description:
      "Plataformas e sistemas web sob medida, construídos do zero para resolver o problema real do seu negócio — sem amarras de licenças.",
    iconKey: "code",
    order: 5,
  },
  {
    id: "s7",
    title: "Consultoria em tecnologia",
    description:
      "Ajudamos a escolher a tecnologia certa, planejar arquitetura e tomar decisões técnicas que economizam tempo e dinheiro.",
    iconKey: "consulting",
    order: 6,
  },
];

export const DEFAULT_PRODUCTS: ProductDTO[] = [
  {
    id: "p1",
    name: "Aquibruce",
    tagline: "Carro-chefe",
    description:
      "Nossa plataforma principal: tecnologia de ponta para simplificar a operação do seu negócio e gerar resultados reais, do primeiro acesso ao crescimento.",
    logoUrl: null,
    gradient: "from-ocean-500 via-ocean-600 to-ocean-800",
    featured: true,
    order: 0,
  },
  {
    id: "p2",
    name: "EiWhats",
    tagline: "CRM de WhatsApp + Chatbot",
    description:
      "Centralize todas as conversas de WhatsApp da sua empresa, atenda em equipe e automatize respostas com um chatbot inteligente. Mais vendas, menos caos.",
    logoUrl: null,
    gradient: "from-ocean-400 to-ocean-600",
    featured: false,
    order: 1,
  },
  {
    id: "p3",
    name: "Eibilly",
    tagline: "Gestão para cabeleireiros",
    description:
      "Sistema feito para salões e cabeleireiros: agenda, clientes, comandas e financeiro num só lugar, simples de usar no dia a dia.",
    logoUrl: null,
    gradient: "from-ocean-600 to-ocean-900",
    featured: false,
    order: 2,
  },
];

export const DEFAULT_FOUNDERS: FounderDTO[] = [
  {
    id: "f1",
    name: "Djair Silva",
    role: "Co-fundador & CEO",
    bio: "Lidera a visão de produto e a estratégia tecnológica da NexiumCode, traduzindo necessidades de negócio em soluções de software sólidas e escaláveis.",
    photoUrl: null,
    direction: "left",
    order: 0,
  },
  {
    id: "f2",
    name: "Maik Moura",
    role: "Co-fundador & CTO",
    bio: "Responsável pela engenharia e pela arquitetura dos sistemas, garante qualidade de código, performance e segurança em cada entrega.",
    photoUrl: null,
    direction: "right",
    order: 1,
  },
];

export const DEFAULT_VALUES: ValueDTO[] = [
  {
    id: "v1",
    title: "Qualidade sem atalhos",
    description:
      "Código limpo, testado e pronto para escalar desde o primeiro dia. Não entregamos remendo.",
    order: 0,
  },
  {
    id: "v2",
    title: "Parceria de longo prazo",
    description:
      "Não entregamos e sumimos: acompanhamos, evoluímos e crescemos junto com o seu negócio.",
    order: 1,
  },
  {
    id: "v3",
    title: "Transparência",
    description:
      "Você sempre sabe em que pé está o projeto, quanto custa e o que vem a seguir. Sem juridiquês.",
    order: 2,
  },
  {
    id: "v4",
    title: "Tecnologia com propósito",
    description:
      "Cada decisão técnica existe para resolver um problema real e gerar valor mensurável.",
    order: 3,
  },
];

/* ---------------------------------------------------------------------------
 *  Leitura do banco com fallback
 * ------------------------------------------------------------------------- */
export async function getSettings(): Promise<SettingsDTO> {
  try {
    const rows = await prisma.siteSetting.findMany();
    if (rows.length === 0) return DEFAULT_SETTINGS;
    const map: Record<string, string> = {};
    for (const r of rows) map[r.key] = r.value;
    return {
      whatsappNumber: map.whatsappNumber ?? DEFAULT_SETTINGS.whatsappNumber,
      whatsappMessage: map.whatsappMessage ?? DEFAULT_SETTINGS.whatsappMessage,
      contactEmail: map.contactEmail ?? DEFAULT_SETTINGS.contactEmail,
      heroBadge: map.heroBadge ?? DEFAULT_SETTINGS.heroBadge,
      heroTitle: map.heroTitle ?? DEFAULT_SETTINGS.heroTitle,
      heroSubtitle: map.heroSubtitle ?? DEFAULT_SETTINGS.heroSubtitle,
      aboutText: map.aboutText ?? DEFAULT_SETTINGS.aboutText,
      mission: map.mission ?? DEFAULT_SETTINGS.mission,
      vision: map.vision ?? DEFAULT_SETTINGS.vision,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function getFounders(): Promise<FounderDTO[]> {
  try {
    const rows = await prisma.founder.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
    if (rows.length === 0) return DEFAULT_FOUNDERS;
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      role: r.role,
      bio: r.bio,
      photoUrl: r.photoUrl,
      direction: (r.direction as FounderDTO["direction"]) ?? "up",
      order: r.order,
    }));
  } catch {
    return DEFAULT_FOUNDERS;
  }
}

export async function getProducts(): Promise<ProductDTO[]> {
  try {
    const rows = await prisma.product.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
    if (rows.length === 0) return DEFAULT_PRODUCTS;
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      tagline: r.tagline,
      description: r.description,
      logoUrl: r.logoUrl,
      url: r.url,
      gradient: r.gradient,
      featured: r.featured,
      order: r.order,
    }));
  } catch {
    return DEFAULT_PRODUCTS;
  }
}

export async function getServices(): Promise<ServiceDTO[]> {
  try {
    const rows = await prisma.service.findMany({
      orderBy: [{ order: "asc" }],
    });
    if (rows.length === 0) return DEFAULT_SERVICES;
    return rows.map((r) => ({
      id: r.id,
      title: r.title,
      description: r.description,
      iconKey: r.iconKey,
      order: r.order,
    }));
  } catch {
    return DEFAULT_SERVICES;
  }
}

export async function getValues(): Promise<ValueDTO[]> {
  try {
    const rows = await prisma.value.findMany({ orderBy: [{ order: "asc" }] });
    if (rows.length === 0) return DEFAULT_VALUES;
    return rows.map((r) => ({
      id: r.id,
      title: r.title,
      description: r.description,
      order: r.order,
    }));
  } catch {
    return DEFAULT_VALUES;
  }
}

export async function getHostedSites(): Promise<HostedSiteDTO[]> {
  try {
    const rows = await prisma.hostedSite.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      url: r.url,
      description: r.description,
      category: r.category,
      order: r.order,
    }));
  } catch {
    return [];
  }
}

/* ---------------------------------------------------------------------------
 *  Helper de link do WhatsApp (usado em client components também).
 * ------------------------------------------------------------------------- */
export function whatsappLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
