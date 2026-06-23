export const revalidate = 60;

import Hero from "@/components/sections/Hero";
import FeatureBar from "@/components/sections/FeatureBar";
import StrategicAnalysis from "@/components/sections/StrategicAnalysis";
import Segments from "@/components/sections/Segments";
import MedicalSupport from "@/components/sections/MedicalSupport";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Blog from "@/components/sections/Blog";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import FAQSchema from "@/components/seo/FAQSchema";

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Hero />
      <FeatureBar />
      <MedicalSupport />
      <StrategicAnalysis />
      <Segments />
      <About />
      <Services />
      <Differentials />
      <Blog />
      <ContactSection />
      <FAQ />
      <CTA />
    </>
  );
}
