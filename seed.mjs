/* =============================================================================
 *  SEED — NexiumCode (idempotente, roda no start do container)
 *  -----------------------------------------------------------------------------
 *  - Upsert do usuário admin (ADMIN_EMAIL / ADMIN_PASSWORD com bcrypt).
 *  - Popula conteúdo (products/founders/services/values/settings) SOMENTE se as
 *    tabelas estiverem vazias. Rodar 2x não duplica nada.
 * ============================================================================= */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "contato@nexiumcode.com.br")
  .toLowerCase()
  .trim();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme";

/* -------------------- conteúdo inicial (espelha data/site.tsx) ----------- */
const SETTINGS = {
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

const PRODUCTS = [
  {
    name: "Aquibruce",
    tagline: "Carro-chefe",
    description:
      "Nossa plataforma principal: tecnologia de ponta para simplificar a operação do seu negócio e gerar resultados reais, do primeiro acesso ao crescimento.",
    gradient: "from-ocean-500 via-ocean-600 to-ocean-800",
    featured: true,
    order: 0,
  },
  {
    name: "EiWhats",
    tagline: "CRM de WhatsApp + Chatbot",
    description:
      "Centralize todas as conversas de WhatsApp da sua empresa, atenda em equipe e automatize respostas com um chatbot inteligente. Mais vendas, menos caos.",
    gradient: "from-ocean-400 to-ocean-600",
    featured: false,
    order: 1,
  },
  {
    name: "Eibilly",
    tagline: "Gestão para cabeleireiros",
    description:
      "Sistema feito para salões e cabeleireiros: agenda, clientes, comandas e financeiro num só lugar, simples de usar no dia a dia.",
    gradient: "from-ocean-600 to-ocean-900",
    featured: false,
    order: 2,
  },
];

const FOUNDERS = [
  {
    name: "Djair Silva",
    role: "Co-fundador & CEO",
    bio: "Lidera a visão de produto e a estratégia tecnológica da NexiumCode, traduzindo necessidades de negócio em soluções de software sólidas e escaláveis.",
    direction: "left",
    order: 0,
  },
  {
    name: "Maik Moura",
    role: "Co-fundador & CTO",
    bio: "Responsável pela engenharia e pela arquitetura dos sistemas, garante qualidade de código, performance e segurança em cada entrega.",
    direction: "right",
    order: 1,
  },
];

const SERVICES = [
  {
    title: "Criação de sites",
    description:
      "Sites institucionais, landing pages e portais rápidos, responsivos e otimizados para SEO — com design moderno e foco em conversão.",
    iconKey: "globe",
    order: 0,
  },
  {
    title: "Hospedagem",
    description:
      "Infraestrutura confiável e monitorada para seu site ou sistema ficar sempre no ar, com backups, SSL e performance garantida.",
    iconKey: "server",
    order: 1,
  },
  {
    title: "Criação de e-mail",
    description:
      "E-mails profissionais no seu próprio domínio (@suaempresa.com), com configuração completa e suporte para toda a equipe.",
    iconKey: "mail",
    order: 2,
  },
  {
    title: "Automações",
    description:
      "Eliminamos tarefas repetitivas conectando seus sistemas: integrações, robôs, fluxos de mensagens e processos que rodam sozinhos.",
    iconKey: "automation",
    order: 3,
  },
  {
    title: "Migração de sistemas",
    description:
      "Levamos seus dados e operações para uma stack moderna com segurança e zero perda — sem interromper o seu negócio.",
    iconKey: "migration",
    order: 4,
  },
  {
    title: "Criação de sistemas",
    description:
      "Plataformas e sistemas web sob medida, construídos do zero para resolver o problema real do seu negócio — sem amarras de licenças.",
    iconKey: "code",
    order: 5,
  },
  {
    title: "Consultoria em tecnologia",
    description:
      "Ajudamos a escolher a tecnologia certa, planejar arquitetura e tomar decisões técnicas que economizam tempo e dinheiro.",
    iconKey: "consulting",
    order: 6,
  },
];

const VALUES = [
  {
    title: "Qualidade sem atalhos",
    description:
      "Código limpo, testado e pronto para escalar desde o primeiro dia. Não entregamos remendo.",
    order: 0,
  },
  {
    title: "Parceria de longo prazo",
    description:
      "Não entregamos e sumimos: acompanhamos, evoluímos e crescemos junto com o seu negócio.",
    order: 1,
  },
  {
    title: "Transparência",
    description:
      "Você sempre sabe em que pé está o projeto, quanto custa e o que vem a seguir. Sem juridiquês.",
    order: 2,
  },
  {
    title: "Tecnologia com propósito",
    description:
      "Cada decisão técnica existe para resolver um problema real e gerar valor mensurável.",
    order: 3,
  },
];

async function main() {
  // 1) Admin (sempre upsert — mantém a senha sincronizada com a env)
  const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
  const user = await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: { password: hashed },
    create: {
      email: ADMIN_EMAIL,
      name: "Administrador NexiumCode",
      password: hashed,
      role: "ADMIN",
    },
  });
  console.log("Admin pronto:", user.email);

  // 2) Settings (upsert por chave — idempotente, não sobrescreve edições? -> só cria se faltar)
  const existingSettings = await prisma.siteSetting.count();
  if (existingSettings === 0) {
    await prisma.$transaction(
      Object.entries(SETTINGS).map(([key, value]) =>
        prisma.siteSetting.create({ data: { key, value } })
      )
    );
    console.log("SiteSettings populados:", Object.keys(SETTINGS).length);
  } else {
    console.log("SiteSettings já existem — pulando.");
  }

  // 3) Products
  if ((await prisma.product.count()) === 0) {
    await prisma.product.createMany({ data: PRODUCTS });
    console.log("Products populados:", PRODUCTS.length);
  } else {
    console.log("Products já existem — pulando.");
  }

  // 4) Founders
  if ((await prisma.founder.count()) === 0) {
    await prisma.founder.createMany({ data: FOUNDERS });
    console.log("Founders populados:", FOUNDERS.length);
  } else {
    console.log("Founders já existem — pulando.");
  }

  // 5) Services
  if ((await prisma.service.count()) === 0) {
    await prisma.service.createMany({ data: SERVICES });
    console.log("Services populados:", SERVICES.length);
  } else {
    console.log("Services já existem — pulando.");
  }

  // 6) Values
  if ((await prisma.value.count()) === 0) {
    await prisma.value.createMany({ data: VALUES });
    console.log("Values populados:", VALUES.length);
  } else {
    console.log("Values já existem — pulando.");
  }

  console.log("Seed concluído.");
}

main()
  .catch((e) => {
    console.error("Seed erro:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
