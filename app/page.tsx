import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import Team from "@/components/Team";
import Values from "@/components/Values";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  getSettings,
  getServices,
  getProducts,
  getFounders,
  getValues,
  whatsappLink,
} from "@/lib/content";

// Conteúdo vem do banco em runtime — nunca pré-renderizar estaticamente.
export const dynamic = "force-dynamic";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#fundadores", label: "Fundadores" },
  { href: "#contato", label: "Contato" },
];

export default async function Home() {
  const [settings, services, products, founders, values] = await Promise.all([
    getSettings(),
    getServices(),
    getProducts(),
    getFounders(),
    getValues(),
  ]);

  const wa = whatsappLink(settings.whatsappNumber, settings.whatsappMessage);

  return (
    <>
      <Header navLinks={NAV_LINKS} whatsappUrl={wa} />
      <main className="flex-1">
        <Hero
          badge={settings.heroBadge}
          title={settings.heroTitle}
          subtitle={settings.heroSubtitle}
          whatsappUrl={wa}
        />
        <Solutions services={services} />
        <Products products={products} />
        <Team founders={founders} />
        <Values mission={settings.mission} vision={settings.vision} values={values} />
        <Process />
        <About aboutText={settings.aboutText} whatsappUrl={wa} productCount={products.length} />
        <CTA whatsappUrl={wa} contactEmail={settings.contactEmail} />
      </main>
      <Footer
        navLinks={NAV_LINKS}
        products={products}
        whatsappUrl={wa}
        contactEmail={settings.contactEmail}
      />
      <WhatsAppButton whatsappUrl={wa} />
    </>
  );
}
