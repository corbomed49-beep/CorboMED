import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a CorboMED. Atendemos por WhatsApp, e-mail e formulário. Resposta em até 24h úteis.",
  openGraph: {
    title: "Contato | CorboMED Perícias Médicas",
    description: "Fale com nossos especialistas em perícias médicas. WhatsApp, e-mail ou formulário.",
    url: "https://corbomed.com.br/contato",
  },
  alternates: { canonical: "https://corbomed.com.br/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <div className="gradient-primary pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contato" }]} />
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Entre em Contato
          </h1>
          <p className="mt-3 max-w-xl text-base text-primary-200 md:text-lg">
            Fale com nossos especialistas. Resposta garantida em até 24h úteis.
          </p>
        </div>
      </div>
      <ContactContent />
    </>
  );
}
