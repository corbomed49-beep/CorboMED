import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCardFlip from "@/components/ui/ServiceCardFlip";

const services = [
  {
    title: "Nexo Causal",
    description: "Estabelecemos a relação técnica entre o dano e o evento causador.",
    image: "/images/especialidades/nexo-causal.webp",
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
    image: "/images/especialidades/dano-corporal.webp",
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
    image: "/images/especialidades/incapacidade-laboral.webp",
    items: [
      "Avaliação da capacidade funcional",
      "Perícias para INSS e seguradoras",
      "Incapacidade parcial e total",
      "Incapacidade temporária e permanente",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Incapacidade Laboral. Como funciona?",
  },
  {
    title: "Invalidez Permanente",
    description: "Análise técnica da extensão e permanência da invalidez.",
    image: "/images/especialidades/invalidez.webp",
    items: [
      "Avaliação de invalidez total e parcial",
      "Percentual de invalidez para seguros",
      "Laudos para ações previdenciárias",
      "Documentação técnica completa",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Invalidez Permanente. Quais são os próximos passos?",
  },
  {
    title: "Doenças Ocupacionais",
    description: "Perícias para doenças adquiridas ou agravadas pelo trabalho.",
    image: "/images/especialidades/doencas-ocupacionais.webp",
    items: [
      "Identificação de doenças profissionais",
      "LER/DORT e distúrbios osteomusculares",
      "Perda auditiva induzida por ruído",
      "Doenças respiratórias ocupacionais",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Doença Ocupacional. Pode me orientar?",
  },
  {
    title: "Erro Médico",
    description: "Avaliação técnica imparcial para casos de responsabilidade médica.",
    image: "/images/especialidades/erro-medico.webp",
    items: [
      "Análise de prontuários e procedimentos",
      "Identificação de falhas técnicas",
      "Causalidade entre conduta e dano",
      "Laudos para defesa e acusação",
    ],
    whatsappMessage: "Olá! Preciso de perícia para um caso de Erro Médico. Como posso proceder?",
  },
  {
    title: "Saúde Mental / Dano Psíquico",
    description: "Avaliação de danos psicológicos e sequelas mentais documentáveis.",
    image: "/images/especialidades/saude-mental.webp",
    items: [
      "Transtorno de estresse pós-traumático",
      "Dano psíquico em acidentes",
      "Sequelas de assédio e violência",
      "Laudo pericial psiquiátrico",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Dano Psíquico/Saúde Mental. Pode me ajudar?",
  },
  {
    title: "Acidentes de Trânsito",
    description: "Perícias especializadas em lesões decorrentes de acidentes de trânsito.",
    image: "/images/especialidades/acidentes-transito.webp",
    items: [
      "Avaliação de lesões corporais",
      "Nexo causal com o acidente",
      "Cálculo do dano permanente",
      "Laudos para seguros DPVAT/SUSEP",
    ],
    whatsappMessage: "Olá! Preciso de perícia para acidente de trânsito. Como funciona?",
  },
  {
    title: "Previdência Social (INSS)",
    description: "Suporte técnico pericial para casos previdenciários.",
    image: "/images/especialidades/previdencia.webp",
    items: [
      "Revisão de benefícios negados",
      "Aposentadoria por invalidez",
      "Auxílio-doença e acidente",
      "BPC/LOAS para pessoas com deficiência",
    ],
    whatsappMessage: "Olá! Preciso de perícia para caso do INSS. Pode me orientar?",
  },
];

export default function Services() {
  return (
    <Section background="gray" id="servicos">
      <SectionTitle
        label="Áreas de Atuação"
        title="Serviços Periciais Especializados"
        subtitle="Cobertura completa das principais especialidades periciais médicas. Passe o mouse sobre cada card para saber mais."
      />
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <ServiceCardFlip key={service.title} {...service} index={index} />
        ))}
      </div>
    </Section>
  );
}
