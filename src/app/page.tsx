import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Segments from "@/components/sections/Segments";
import Stats from "@/components/sections/Stats";
import Differentials from "@/components/sections/Differentials";
import Testimonials from "@/components/sections/Testimonials";
import ClientsCarousel from "@/components/sections/ClientsCarousel";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import FAQSchema from "@/components/seo/FAQSchema";

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Hero />
      <About />
      <Services />
      <Segments />
      <Stats />
      <Differentials />
      <ClientsCarousel />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
    </>
  );
}
