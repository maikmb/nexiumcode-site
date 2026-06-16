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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <Products />
        <Team />
        <Values />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
