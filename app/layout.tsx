import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import SiteBackground from "@/components/SiteBackground";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Fonte DISPLAY techy para títulos / hero (tipografia gigante, tracking tight)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://www.nexiumcode.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NexiumCode | Criação de Sistemas e Consultoria em Tecnologia",
    template: "%s | NexiumCode",
  },
  description:
    "A NexiumCode cria sites, sistemas e automações sob medida e oferece consultoria em tecnologia. Conheça nossos serviços e produtos digitais: Aquibruce, EiWhats e Eibilly.",
  keywords: [
    "criação de sistemas",
    "criação de sites",
    "consultoria em tecnologia",
    "automações",
    "migração de sistemas",
    "hospedagem",
    "software sob medida",
    "produtos digitais",
    "NexiumCode",
  ],
  authors: [{ name: "NexiumCode" }],
  creator: "NexiumCode",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "NexiumCode",
    title: "NexiumCode | Criação de Sistemas e Consultoria em Tecnologia",
    description:
      "Criação de sites, sistemas e automações sob medida e consultoria em tecnologia para o seu negócio.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexium Code — Desenvolvimento de Software Sob Medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexiumCode | Criação de Sistemas e Consultoria em Tecnologia",
    description:
      "Criação de sites, sistemas e automações sob medida e consultoria em tecnologia para o seu negócio.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexiumCode",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Empresa de criação de sistemas, sites e automações sob medida e consultoria em tecnologia.",
  email: "contato@nexiumcode.com.br",
  founders: [
    { "@type": "Person", name: "Djair Silva" },
    { "@type": "Person", name: "Maik Moura" },
  ],
  sameAs: [],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Criação de sistemas e consultoria em tecnologia",
        description:
          "Sites, sistemas, automações, hospedagem, migrações e consultoria construídos sob medida para o seu negócio.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
