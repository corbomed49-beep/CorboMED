import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ServicesContent from "@/components/pages/ServicesContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça todos os serviços periciais da CorboMED: Nexo Causal, Dano Corporal, Incapacidade Laboral, Invalidez, Doenças Ocupacionais, Erro Médico e muito mais.",
  openGraph: {
    title: "Serviços Periciais | CorboMED Perícias Médicas",
    description:
      "Perícias médicas especializadas em Nexo Causal, Dano Corporal, Incapacidade Laboral, Invalidez Permanente, Doenças Ocupacionais e Responsabilidade Médica.",
    url: "https://www.corbomed.com.br/servicos",
  },
  alternates: { canonical: "https://www.corbomed.com.br/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", item: "https://www.corbomed.com.br" },
          { name: "Serviços", item: "https://www.corbomed.com.br/servicos" },
        ]}
      />
      <div className="gradient-primary pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Serviços" }]} />
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Serviços Periciais
          </h1>
          <p className="mt-3 max-w-xl text-base text-primary-200 md:text-lg">
            Cobertura completa das principais especialidades periciais médicas. Laudos técnicos aceitos em todo o Brasil.
          </p>
        </div>
      </div>
      <ServicesContent />
    </>
  );
}
