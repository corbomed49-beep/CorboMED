import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import DifferentialCard from "@/components/ui/DifferentialCard";
import {
  FiAward,
  FiClock,
  FiFileText,
  FiGlobe,
  FiLock,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const differentials = [
  {
    icon: <FiAward />,
    title: "Expertise Comprovada",
    description: "Perícias médicas com rigor técnico, embasamento científico e aprovação judicial consistente.",
  },
  {
    icon: <FiFileText />,
    title: "Laudos de Alta Qualidade",
    description: "Documentos técnicos completos, bem fundamentados e aceitos em todas as instâncias judiciais.",
  },
  {
    icon: <FiZap />,
    title: "Agilidade no Atendimento",
    description: "Prazos cumpridos e respostas rápidas para não comprometer o andamento do seu processo.",
  },
  {
    icon: <FiGlobe />,
    title: "Atuação Nacional",
    description: "Atendemos em todos os estados do Brasil, com deslocamento quando necessário.",
  },
  {
    icon: <FiLock />,
    title: "Sigilo Absoluto",
    description: "Total confidencialidade das informações clínicas e processuais de cada caso atendido.",
  },
  {
    icon: <FiUsers />,
    title: "Atendimento Personalizado",
    description: "Cada caso recebe atenção individual, com comunicação clara e direta durante todo o processo.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Embasamento Científico",
    description: "Análises baseadas nas mais recentes evidências médicas e normas técnicas periciais.",
  },
  {
    icon: <FiClock />,
    title: "Disponibilidade 24h",
    description: "Suporte pelo WhatsApp para dúvidas urgentes e acompanhamento do seu caso a qualquer hora.",
  },
];

export default function Differentials() {
  return (
    <Section background="dark" id="diferenciais">
      <SectionTitle
        label="Nossos Diferenciais"
        title="Por Que Escolher a CorboMED?"
        subtitle="Compromisso com a excelência técnica e a satisfação de quem confia em nosso trabalho."
        light={true}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {differentials.map((diff, index) => (
          <DifferentialCard key={diff.title} {...diff} index={index} />
        ))}
      </div>
    </Section>
  );
}
