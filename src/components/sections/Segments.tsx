"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiActivity, FiBriefcase, FiUser, FiUsers } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const segments = [
  {
    icon: <FiUsers size={32} />,
    title: "Advogados e Escritórios",
    summary:
      "Apoio técnico para sustentar teses, qualificar quesitos, interpretar laudos e identificar pontos médicos relevantes para a estratégia processual.",
    features: [
      "Assistência técnica em perícias judiciais",
      "Laudos para ações cíveis, trabalhistas e previdenciárias",
      "Revisão crítica de laudos adversários",
      "Consultoria técnica especializada",
      "Atendimento prioritário para escritórios parceiros",
    ],
    highlight: true,
  },
  {
    icon: <FiBriefcase size={32} />,
    title: "Seguradoras e Empresas",
    summary:
      "Análise técnica em demandas relacionadas a afastamentos, doenças ocupacionais, acidentes de trabalho, capacidade laboral, nexo causal e repercussões funcionais.",
    features: [
      "Avaliação de invalidez para seguros de vida",
      "Perícias em ações trabalhistas",
      "Laudos para sinistros e indenizações",
      "Suporte em acidentes de trabalho",
      "Contratos corporativos com tarifas especiais",
    ],
    highlight: false,
  },
  {
    icon: <FiActivity size={32} />,
    title: "Clínicas e Parceiros",
    summary:
      "Parceria técnica com clínicas, hospitais e profissionais de saúde que precisam de suporte pericial especializado para casos complexos.",
    features: [
      "Laudos de segunda opinião",
      "Consultoria em casos médico-legais",
      "Parcerias formalizadas com clínicas",
      "Suporte em responsabilidade médica",
      "Análise de prontuários e documentação",
    ],
    highlight: false,
  },
  {
    icon: <FiUser size={32} />,
    title: "Pacientes e Pessoas Físicas",
    summary:
      "Orientação médico-pericial para quem precisa compreender melhor seu caso em situações de perícia do INSS, incapacidade, acidente, sequelas, erro médico ou negativa de benefício.",
    features: [
      "Orientação clara sobre todo o processo",
      "Laudos para INSS e seguradoras",
      "Apoio em processos por acidente",
      "Avaliação de invalidez e incapacidade",
    ],
    highlight: false,
  },
];

function SegmentCard({
  seg,
  index,
  coarsePointer,
}: {
  seg: (typeof segments)[number];
  index: number;
  coarsePointer: boolean;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const detailsVisible = coarsePointer ? showDetails : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative flex min-h-[280px] flex-col rounded-3xl p-6 ${
        seg.highlight
          ? "bg-primary-900 text-white shadow-2xl shadow-primary-900/30 ring-2 ring-teal-500/30"
          : "bg-gray-50 text-primary-900 shadow-md transition-shadow hover:shadow-lg"
      } ${coarsePointer ? "cursor-pointer" : ""}`}
      onClick={() => coarsePointer && setShowDetails((v) => !v)}
      onKeyDown={(e) => {
        if (!coarsePointer) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setShowDetails((v) => !v);
        }
      }}
      tabIndex={coarsePointer ? 0 : undefined}
      role={coarsePointer ? "button" : undefined}
      aria-expanded={coarsePointer ? showDetails : undefined}
      aria-label={`${seg.title}. ${coarsePointer ? "Toque para ver detalhes" : "Passe o mouse para ver detalhes"}`}
    >
      {seg.highlight && (
        <span className="absolute -top-3 left-1/2 max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-full bg-teal-500 px-3 py-1 text-center text-[10px] font-bold leading-tight text-white sm:px-4 sm:text-xs">
          Mais Procurado
        </span>
      )}

      <div
        className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
          seg.highlight ? "bg-teal-500/20 text-teal-400" : "bg-primary-100 text-primary-700"
        }`}
      >
        {seg.icon}
      </div>

      <h3
        className={`mb-3 shrink-0 font-display text-lg font-bold ${
          seg.highlight ? "text-white" : "text-primary-900"
        }`}
      >
        {seg.title}
      </h3>

      <div className="relative min-h-[140px] flex-1">
        {/* Resumo — visível por padrão; some no hover (desktop) ou ao tocar (mobile) */}
        <p
          className={`text-sm leading-relaxed transition-opacity duration-300 ${
            seg.highlight ? "text-primary-300" : "text-gray-600"
          } ${detailsVisible === true ? "opacity-0" : "opacity-100"} ${
            !coarsePointer ? "group-hover:opacity-0" : ""
          }`}
        >
          {seg.summary}
        </p>

        {/* Tópicos — aparecem no hover ou ao tocar */}
        <ul
          className={`absolute inset-0 space-y-1.5 text-xs transition-opacity duration-300 ${
            seg.highlight ? "text-primary-300" : "text-gray-700"
          } ${detailsVisible === true ? "opacity-100" : "opacity-0"} ${
            !coarsePointer ? "group-hover:opacity-100" : ""
          }`}
        >
          {seg.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2">
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                  seg.highlight ? "bg-teal-400" : "bg-teal-500"
                }`}
              />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {coarsePointer ? (
        <p className="mt-3 shrink-0 text-[10px] font-medium uppercase tracking-wide text-teal-500">
          {showDetails ? "Toque para resumir" : "Toque para ver detalhes"}
        </p>
      ) : (
        <p
          className={`mt-3 shrink-0 text-[10px] font-medium uppercase tracking-wide transition-opacity duration-300 ${
            seg.highlight ? "text-teal-400/90" : "text-teal-600"
          } opacity-100 group-hover:opacity-0`}
        >
          Passe o mouse para ver detalhes
        </p>
      )}
    </motion.div>
  );
}

export default function Segments() {
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setCoarsePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <Section background="white" id="clientes">
      <SectionTitle
        label="Atendimento para quem precisa de clareza médica em decisões jurídicas"
        title="Soluções para Cada Perfil"
        subtitle="Atendimento especializado e personalizado para advogados, seguradoras, clínicas e pacientes em todo o Brasil."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {segments.map((seg, index) => (
          <SegmentCard key={seg.title} seg={seg} index={index} coarsePointer={coarsePointer} />
        ))}
      </div>
    </Section>
  );
}
