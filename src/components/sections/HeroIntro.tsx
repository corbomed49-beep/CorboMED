"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { WHATSAPP_MSG, WHATSAPP_NUMBER } from "@/lib/site";

const bullets = [
  "Análise de incapacidade, sequelas e nexo causal",
  "Laudos e pareceres médicos bem fundamentados",
  "Suporte técnico para decisões mais seguras",
];

export default function HeroIntro() {
  return (
    <Section background="white" id="laudos" className="!pt-12 md:!pt-16">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-display text-2xl font-bold leading-snug text-primary-900 sm:text-3xl md:text-4xl"
        >
          Precisão médico-pericial para transformar informações clínicas complexas em
          elementos técnicos claros, objetivos e juridicamente úteis.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base"
        >
          <p>
            O Dr. Lucas Gabriel Corbo atua na elaboração de laudos, pareceres médicos e
            assistência pericial em demandas previdenciárias, trabalhistas, cíveis e
            securitárias, com foco em incapacidade, nexo causal, sequelas, dano corporal e
            responsabilidade médica.
          </p>
          <p>
            Com rigor científico, análise documental aprofundada e linguagem acessível ao
            contexto jurídico, oferece suporte para processos que exigem segurança técnica e
            fundamentação consistente.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 mt-6 space-y-2.5"
        >
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 md:text-base">
              <FiCheckCircle size={17} className="mt-0.5 shrink-0 text-teal-500" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            variant="secondary"
            size="lg"
          >
            Solicite agora
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
