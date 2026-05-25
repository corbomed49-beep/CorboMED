import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCardFlip from "@/components/ui/ServiceCardFlip";

const services = [
  {
    title: "Nexo Causal",
    description: "Estabelecemos a relação técnica entre o dano e o evento causador.",
    image: "/images/blogs/nexocausal.png",
    items: [
      "Análise do histórico clínico completo",
      "Correlação entre evento e lesão",
      "Laudo fundamentado em evidências",
      "Indicação para processos cíveis e trabalhistas",
    ],
    whatsappMessage: "Olá! Preciso de uma perícia para Nexo Causal. Poderia me informar sobre o procedimento?",
  },
  {
    title: "Dano Corporal e Estético",
    description: "Avaliação precisa de lesões físicas e sequelas visíveis.",
    image: "/images/blogs/danoCorporal.png",
    items: [
      "Quantificação das sequelas",
      "Avaliação do dano estético",
      "Classificação conforme tabelas periciais",
      "Laudos para seguradoras e tribunais",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Dano Corporal/Estético. Pode me ajudar?",
  },
  {
    title: "Incapacidade Laboral",
    description: "Determinamos o grau e duração da incapacidade para o trabalho.",
    image: "/images/blogs/IncapacidadeLaboral.png",
    items: [
      "Avaliação da capacidade funcional",
      "Perícias para INSS e seguradoras",
      "Incapacidade parcial e total",
      "Incapacidade temporária e permanente",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Incapacidade Laboral. Como funciona?",
  },
];

export default function Services() {
  return (
    <Section background="gray" id="servicos">
      <SectionTitle
        label="Áreas de Atuação"
        title="Serviços Periciais Especializados"
        subtitle="Principais linhas de atuação pericial. Passe o mouse sobre cada card para saber mais."
      />
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <ServiceCardFlip key={service.title} {...service} index={index} />
        ))}
      </div>
    </Section>
  );
}
