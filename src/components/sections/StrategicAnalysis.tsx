"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { WHATSAPP_MSG, WHATSAPP_NUMBER } from "@/lib/site";

const EVAL_MSG = encodeURIComponent(
  "Olá, Dr. Lucas! Gostaria de solicitar uma avaliação técnica pericial. Poderia me orientar?"
);

export default function StrategicAnalysis() {
  return (
    <Section background="white">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 inline-block rounded-full bg-teal-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-600"
      >
        Análise médico-pericial estratégica
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
      >
        <h2 className="font-display text-2xl font-bold leading-snug text-primary-900 sm:text-3xl md:text-4xl">
          Quando a informação médica é complexa, a decisão jurídica precisa de clareza
          técnica.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base"
        >
          <p>
            Muitos processos e demandas de saúde dependem da correta interpretação de
            documentos médicos: laudos, exames, prontuários, diagnósticos, afastamentos,
            sequelas, incapacidade laboral, dano corporal e nexo causal.
          </p>
          <p>
            <strong className="font-semibold text-primary-900">
              Sem uma análise médico-pericial qualificada, advogados, empresas, seguradoras e
              partes envolvidas podem enfrentar dificuldades para identificar inconsistências
              técnicas
            </strong>
            , compreender a real extensão do quadro clínico ou sustentar uma tese com
            segurança.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-gray-700 md:mt-10 md:text-base"
      >
        Buscamos transformar informações clínicas complexas em uma análise objetiva,
        fundamentada e juridicamente útil, contribuindo para processos mais claros,
        estratégias mais bem estruturadas e decisões mais seguras.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.28 }}
        className="mt-8 flex justify-center md:mt-10"
      >
        <Button
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${EVAL_MSG}`}
          variant="primary"
          size="lg"
        >
          Solicitar avaliação técnica
        </Button>
      </motion.div>
    </Section>
  );
}
