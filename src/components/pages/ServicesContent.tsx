"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import MiniCTA from "@/components/sections/MiniCTA";

const WHATSAPP_NUMBER = "5571999999999";

const services = [
  {
    id: "nexo-causal",
    title: "Nexo Causal",
    description:
      "O nexo causal é a prova fundamental que liga o dano sofrido ao evento que o causou. Nossa perícia estabelece essa relação com embasamento técnico-científico sólido, sendo decisiva em ações cíveis, trabalhistas e de seguros.",
    items: [
      "Análise completa do histórico clínico e documental",
      "Correlação técnica entre evento e lesão/doença",
      "Laudo fundamentado em literatura médica atualizada",
      "Aplicável a acidentes de trabalho, trânsito e responsabilidade civil",
    ],
    whatsappMessage: "Olá! Preciso de uma perícia para Nexo Causal. Poderia me informar sobre o procedimento e valores?",
  },
  {
    id: "dano-corporal",
    title: "Dano Corporal e Estético",
    description:
      "Avaliamos com precisão as lesões físicas, suas sequelas e os impactos estéticos causados por acidentes ou eventos traumáticos. Nossos laudos quantificam o dano de forma técnica e aceita por seguradoras e tribunais.",
    items: [
      "Quantificação percentual das sequelas funcionais",
      "Avaliação e graduação do dano estético",
      "Classificação conforme tabelas periciais (SUSEP, DPVAT, CNSP)",
      "Laudos para seguros de vida, acidentes pessoais e ações judiciais",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Dano Corporal/Estético. Como posso proceder?",
  },
  {
    id: "incapacidade-laboral",
    title: "Incapacidade Laboral",
    description:
      "Determinamos com rigor técnico o grau e a duração da incapacidade para o trabalho, fundamentais para concessão de benefícios previdenciários, indenizações trabalhistas e seguros.",
    items: [
      "Avaliação da capacidade funcional para atividades habituais",
      "Incapacidade parcial e total – temporária e permanente",
      "Perícias para INSS, seguradoras e ações trabalhistas",
      "Documentação técnica completa e bem fundamentada",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Incapacidade Laboral. Como funciona?",
  },
  {
    id: "invalidez",
    title: "Invalidez Permanente",
    description:
      "A avaliação de invalidez permanente é essencial para cobranças de seguros, ações previdenciárias e processos judiciais. Determinamos o percentual de invalidez com base nas tabelas reconhecidas pelo mercado.",
    items: [
      "Avaliação de invalidez total e parcial permanente",
      "Cálculo percentual conforme tabelas SUSEP e mercado segurador",
      "Laudos para seguros de vida com cobertura de invalidez",
      "Suporte em ações de aposentadoria por invalidez",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Invalidez Permanente. Quais são os próximos passos?",
  },
  {
    id: "doencas-ocupacionais",
    title: "Doenças Ocupacionais",
    description:
      "Identificamos e documentamos doenças adquiridas ou agravadas pelas condições de trabalho, fundamentais para garantir direitos trabalhistas e previdenciários dos trabalhadores.",
    items: [
      "LER, DORT e distúrbios osteomusculares relacionados ao trabalho",
      "Perda auditiva induzida por ruído (PAIR)",
      "Doenças respiratórias e dermatológicas ocupacionais",
      "Síndrome de burnout e transtornos mentais relacionados ao trabalho",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Doença Ocupacional. Como funciona o processo?",
  },
  {
    id: "erro-medico",
    title: "Responsabilidade Médica / Erro Médico",
    description:
      "Realizamos análise técnica e imparcial de casos de responsabilidade médica, identificando ou afastando a ocorrência de erro médico com base em evidências científicas e normas do CFM.",
    items: [
      "Análise detalhada de prontuários e procedimentos realizados",
      "Identificação de falhas técnicas ou omissões",
      "Nexo causal entre conduta médica e dano ao paciente",
      "Laudos tanto para defesa de profissionais quanto para pacientes",
    ],
    whatsappMessage: "Olá! Preciso de perícia para um caso de Responsabilidade Médica. Como posso proceder?",
  },
  {
    id: "saude-mental",
    title: "Saúde Mental e Dano Psíquico",
    description:
      "A avaliação de danos psicológicos e psiquiátricos é cada vez mais solicitada em processos judiciais. Documentamos sequelas mentais com metodologia científica reconhecida.",
    items: [
      "Avaliação de TEPT (transtorno de estresse pós-traumático)",
      "Dano psíquico em acidentes e eventos traumáticos",
      "Sequelas de assédio moral, sexual e violência",
      "Laudo pericial psiquiátrico para fins judiciais",
    ],
    whatsappMessage: "Olá! Preciso de perícia para Dano Psíquico/Saúde Mental. Pode me ajudar?",
  },
  {
    id: "acidentes-transito",
    title: "Acidentes de Trânsito",
    description:
      "Perícias especializadas para documentar lesões, sequelas e incapacidades decorrentes de acidentes de trânsito, para acionamento de seguros e ações indenizatórias.",
    items: [
      "Avaliação de lesões corporais e sequelas pós-acidente",
      "Nexo causal com o acidente de trânsito",
      "Cálculo do dano permanente para seguros (DPVAT/SUSEP)",
      "Laudos para ações de indenização por danos materiais e morais",
    ],
    whatsappMessage: "Olá! Preciso de perícia relacionada a acidente de trânsito. Como funciona?",
  },
  {
    id: "previdencia",
    title: "Previdência Social (INSS)",
    description:
      "Oferecemos suporte técnico pericial completo para casos previdenciários, desde análise da situação até laudo para revisão de benefícios negados.",
    items: [
      "Revisão técnica de benefícios negados pelo INSS",
      "Aposentadoria por invalidez – documentação e laudo",
      "Auxílio-doença e benefício por acidente de trabalho",
      "BPC/LOAS para pessoas com deficiência",
    ],
    whatsappMessage: "Olá! Preciso de suporte pericial para caso do INSS. Pode me orientar?",
  },
];

export default function ServicesContent() {
  return (
    <>
      <div className="space-y-0">
        {services.map((service, index) => (
          <Section
            key={service.id}
            id={service.id}
            background={index % 2 === 0 ? "white" : "gray"}
          >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? "lg:order-2" : ""}
              >
                <span className="mb-3 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-700">
                  Serviço {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mb-4 text-2xl font-bold text-primary-900 md:text-3xl">
                  {service.title}
                </h2>
                <p className="mb-5 text-sm md:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-primary-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp size={16} />
                  Solicitar esta Perícia
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex items-center justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <div className="w-full max-w-sm rounded-3xl bg-primary-900 p-8 text-center">
                  <div className="mb-4 text-6xl font-bold text-gold-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-primary-300">
                    Laudo técnico emitido com embasamento científico e aceito em todas as instâncias judiciais do Brasil.
                  </p>
                </div>
              </motion.div>
            </div>
          </Section>
        ))}
      </div>
      <MiniCTA message="Olá! Estive vendo a página de serviços da CorboMED e gostaria de solicitar uma perícia." />
    </>
  );
}
