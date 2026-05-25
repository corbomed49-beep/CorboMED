"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiBriefcase, FiUser, FiUsers } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const segments = [
  {
    icon: <FiUsers size={28} />,
    title: "Para advogados",
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
    icon: <FiUser size={28} />,
    title: "Para pessoas físicas",
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
  {
    icon: <FiBriefcase size={28} />,
    title: "Para empresas",
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
    icon: <FiUsers size={28} />,
    title: "Para escritórios jurídicos",
    summary:
      "Suporte médico especializado para demandas previdenciárias, trabalhistas, cíveis, securitárias e indenizatórias que exigem leitura técnica clara e fundamentada.",
    features: [
      "Assistência técnica em perícias judiciais",
      "Laudos para ações cíveis, trabalhistas e previdenciárias",
      "Revisão crítica de laudos adversários",
      "Consultoria técnica especializada",
      "Suporte em demandas securitárias e indenizatórias",
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
  const [expanded, setExpanded] = useState(false);
  const showFeatures = coarsePointer && expanded;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`group relative flex min-h-[240px] flex-col rounded-3xl p-6 transition-shadow duration-300 ${
        seg.highlight
          ? "bg-primary-900 text-white shadow-xl ring-2 ring-teal-500/30"
          : "bg-gray-50 text-primary-900 shadow-md hover:shadow-lg"
      } ${coarsePointer ? "cursor-pointer" : ""}`}
      onClick={() => coarsePointer && setExpanded((v) => !v)}
      onKeyDown={(e) => {
        if (!coarsePointer) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded((v) => !v);
        }
      }}
      tabIndex={coarsePointer ? 0 : undefined}
      role={coarsePointer ? "button" : undefined}
      aria-expanded={coarsePointer ? expanded : undefined}
    >
      <motion.div
        whileHover={coarsePointer ? undefined : { y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${
          seg.highlight ? "bg-teal-500/20 text-teal-400" : "bg-primary-100 text-primary-700"
        }`}
      >
        {seg.icon}
      </motion.div>

      <h3
        className={`mb-2 font-display text-lg font-bold ${
          seg.highlight ? "text-white" : "text-primary-900"
        }`}
      >
        {seg.title}
      </h3>

      <div className="relative flex-1">
        <p
          className={`text-sm leading-relaxed transition-opacity duration-300 ${
            seg.highlight ? "text-primary-300" : "text-gray-600"
          } ${showFeatures ? "opacity-0" : "opacity-100"} ${
            !coarsePointer ? "group-hover:opacity-0" : ""
          }`}
        >
          {seg.summary}
        </p>

        <ul
          className={`absolute inset-0 space-y-1.5 text-xs transition-opacity duration-300 ${
            seg.highlight ? "text-primary-300" : "text-gray-700"
          } ${showFeatures ? "opacity-100" : "opacity-0"} ${
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

      {coarsePointer && (
        <p className="mt-4 text-[10px] font-medium uppercase tracking-wide text-teal-500">
          {expanded ? "Toque para resumir" : "Toque para ver detalhes"}
        </p>
      )}
      {!coarsePointer && (
        <p className="mt-4 text-[10px] font-medium uppercase tracking-wide text-teal-500 opacity-0 transition-opacity group-hover:opacity-100">
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
        subtitle="Atendimento especializado para advogados, empresas, escritórios jurídicos e pessoas físicas em todo o Brasil."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {segments.map((seg, index) => (
          <SegmentCard key={seg.title} seg={seg} index={index} coarsePointer={coarsePointer} />
        ))}
      </div>
    </Section>
  );
}
