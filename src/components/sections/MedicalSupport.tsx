"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { WHATSAPP_NUMBER } from "@/lib/site";

const ANALYSIS_MSG = encodeURIComponent(
  "Olá, Dr. Lucas! Gostaria de solicitar uma análise inicial pericial. Poderia me orientar?"
);

const questions = [
  "Recebeu um laudo desfavorável?",
  "Tem dúvidas sobre afastamento ou incapacidade?",
  "Precisa contestar uma perícia?",
  "Vai passar por perícia judicial ou do INSS?",
  "Ficou com sequelas após um acidente?",
  "Há dúvida sobre possível erro médico?",
  "Precisa avaliar nexo causal?",
  "Quer saber se há base médica para o processo?",
];

export default function MedicalSupport() {
  return (
    <Section background="gray">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary-700/40 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 p-6 text-white shadow-xl sm:p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl" />
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-400">
            Suporte médico-pericial
          </p>
          <h2 className="mb-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
            Quando a questão médica gera dúvida, uma análise técnica pode trazer mais clareza
            ao caso.
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-sm leading-relaxed text-primary-200 md:text-base"
          >
            <p>
              Laudos, exames, prontuários e diagnósticos nem sempre são simples de interpretar.
              Em processos judiciais, previdenciários ou trabalhistas, entender corretamente essas
              informações faz diferença na condução do caso.
            </p>
            <p>
              Com uma avaliação médico-pericial, é possível esclarecer pontos importantes,
              identificar fragilidades e compreender melhor o que os documentos mostram sobre a
              situação clínica.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${ANALYSIS_MSG}`}
              variant="secondary"
              size="lg"
            >
              Solicitar análise inicial
              <FiArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {questions.map((question, index) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <FiCheckCircle size={16} />
              </span>
              <p className="text-sm font-medium leading-snug text-gray-800">{question}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
