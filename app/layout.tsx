import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.nexiumcode.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexium Code | Desenvolvimento de Software Sob Medida",
    template: "%s | Nexium Code",
  },
  description:
    "A Nexium Code cria software sob medida, aplicativos e plataformas digitais que aceleram o crescimento do seu negócio. Conheça nossas soluções e produtos digitais.",
  keywords: [
    "desenvolvimento de software",
    "software sob medida",
    "fábrica de software",
    "desenvolvimento web",
    "desenvolvimento de aplicativos",
    "produtos digitais",
    "Nexium Code",
  ],
  authors: [{ name: "Nexium Code" }],
  creator: "Nexium Code",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Nexium Code",
    title: "Nexium Code | Desenvolvimento de Software Sob Medida",
    description:
      "Software sob medida e produtos digitais que aceleram o crescimento do seu negócio.",
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
    title: "Nexium Code | Desenvolvimento de Software Sob Medida",
    description:
      "Software sob medida e produtos digitais que aceleram o crescimento do seu negócio.",
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
  name: "Nexium Code",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Empresa de desenvolvimento de software sob medida e criação de produtos digitais.",
  email: "contato@nexiumcode.com",
  sameAs: [],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Desenvolvimento de software sob medida",
        description:
          "Sistemas web, aplicativos e integrações construídos sob medida para o seu negócio.",
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
    <html lang="pt-BR" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
