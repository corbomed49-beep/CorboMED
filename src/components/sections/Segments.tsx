"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiBriefcase, FiUser, FiUsers, FiActivity } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const WHATSAPP_NUMBER = "5571999999999";

const segments = [
  {
    icon: <FiUsers size={32} />,
    title: "Advogados e Escritórios",
    description:
      "Laudos periciais de alta qualidade para embasar suas teses jurídicas. Atuamos como assistente técnico ou perito, com rigor científico e prazos cumpridos.",
    features: [
      "Assistência técnica em perícias judiciais",
      "Laudos para ações cíveis, trabalhistas e previdenciárias",
      "Revisão crítica de laudos adversários",
      "Consultoria técnica especializada",
      "Atendimento prioritário para escritórios parceiros",
    ],
    whatsappMessage:
      "Olá, Dr. Lucas! Sou advogado(a) e preciso de suporte pericial para um caso. Poderia me ajudar?",
    highlight: true,
  },
  {
    icon: <FiBriefcase size={32} />,
    title: "Seguradoras e Empresas",
    description:
      "Suporte pericial especializado para seguradoras, departamentos jurídicos e de RH em questões trabalhistas, previdenciárias e de saúde ocupacional.",
    features: [
      "Avaliação de invalidez para seguros de vida",
      "Perícias em ações trabalhistas",
      "Laudos para sinistros e indenizações",
      "Suporte em acidentes de trabalho",
      "Contratos corporativos com tarifas especiais",
    ],
    whatsappMessage:
      "Olá, Dr. Lucas! Represento uma seguradora/empresa e precisamos de suporte pericial. Poderia nos orientar?",
    highlight: false,
  },
  {
    icon: <FiActivity size={32} />,
    title: "Clínicas e Parceiros",
    description:
      "Parceria técnica com clínicas, hospitais e profissionais de saúde que precisam de suporte pericial especializado para casos complexos.",
    features: [
      "Laudos de segunda opinião",
      "Consultoria em casos médico-legais",
      "Parcerias formalizadas com clínicas",
      "Suporte em responsabilidade médica",
      "Análise de prontuários e documentação",
    ],
    whatsappMessage:
      "Olá, Dr. Lucas! Somos uma clínica/hospital e gostaríamos de discutir uma parceria pericial. Poderia nos contatar?",
    highlight: false,
  },
  {
    icon: <FiUser size={32} />,
    title: "Pacientes e Pessoas Físicas",
    description:
      "Atendimento humanizado para quem precisa de laudo pericial para processos judiciais, seguros ou benefícios previdenciários.",
    features: [
      "Orientação clara sobre todo o processo",
      "Laudos para INSS e seguradoras",
      "Apoio em processos por acidente",
      "Avaliação de invalidez e incapacidade",
      "Atendimento presencial e teleconsulta",
    ],
    whatsappMessage:
      "Olá, Dr. Lucas! Sou paciente e preciso de um laudo pericial. Como funciona o atendimento?",
    highlight: false,
  },
];

export default function Segments() {
  return (
    <Section background="white" id="segmentos">
      <SectionTitle
        label="Quem Atendemos"
        title="Soluções para Cada Perfil"
        subtitle="Atendimento especializado e personalizado para advogados, seguradoras, clínicas e pacientes em todo o Brasil."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {segments.map((seg, index) => (
          <motion.div
            key={seg.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className={`relative flex flex-col rounded-3xl p-6 ${
              seg.highlight
                ? "bg-primary-900 text-white shadow-2xl shadow-primary-900/30 ring-2 ring-teal-500/30"
                : "bg-gray-50 text-primary-900 shadow-md hover:shadow-lg transition-shadow"
            }`}
          >
            {seg.highlight && (
              <span className="absolute -top-3 left-1/2 max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-full bg-teal-500 px-3 py-1 text-center text-[10px] font-bold leading-tight text-white sm:px-4 sm:text-xs">
                Mais Procurado
              </span>
            )}

            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${
                seg.highlight ? "bg-teal-500/20 text-teal-400" : "bg-primary-100 text-primary-700"
              }`}
            >
              {seg.icon}
            </div>

            <h3
              className={`mb-2 font-display text-lg font-bold ${
                seg.highlight ? "text-white" : "text-primary-900"
              }`}
            >
              {seg.title}
            </h3>
            <p
              className={`mb-4 text-sm leading-relaxed ${
                seg.highlight ? "text-primary-300" : "text-gray-600"
              }`}
            >
              {seg.description}
            </p>

            <ul className="mb-5 space-y-1.5 flex-1">
              {seg.features.map((feat, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-xs ${
                    seg.highlight ? "text-primary-300" : "text-gray-700"
                  }`}
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                      seg.highlight ? "bg-teal-400" : "bg-teal-500"
                    }`}
                  />
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(seg.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                seg.highlight
                  ? "bg-teal-500 text-white hover:bg-teal-600"
                  : "bg-primary-800 text-white hover:bg-primary-900"
              }`}
            >
              <FaWhatsapp size={15} />
              Falar com Dr. Corbo
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
