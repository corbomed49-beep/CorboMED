"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const WHATSAPP_NUMBER = "5511940735069";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, Dr. Lucas! Gostaria de solicitar uma perícia médica com a CORBO MED. Poderia me ajudar?"
);

export default function CTA() {
  return (
    <Section background="gradient" id="cta">
      <div className="relative overflow-hidden rounded-2xl border border-primary-700/30 bg-primary-800/40 px-4 py-10 text-center backdrop-blur-sm sm:rounded-3xl sm:px-6 sm:py-12 md:px-12 md:py-14">
        {/* Decorativos */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-teal-600/10 blur-3xl" />
        {/* Linha teal */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-24 bg-teal-500/60" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-400"
        >
          Dr. Lucas Gabriel Corbo — Perito Médico
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Pronto para Fortalecer Sua Ação?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-8 max-w-xl text-base md:text-lg text-primary-200"
        >
          Solicite agora sua perícia médica. Rigor técnico, linguagem clara e segurança profissional em cada laudo emitido.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            variant="secondary"
            size="lg"
          >
            <FaWhatsapp size={22} />
            Falar com Dr. Corbo
          </Button>
          <Button href="/contato" variant="ghost" size="lg">
            Enviar mensagem <FiArrowRight size={18} />
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 break-words px-1 text-xs text-primary-400"
        >
          Advogados · Seguradoras · Clínicas · Pacientes · Atendimento em todo o Brasil
        </motion.p>
      </div>
    </Section>
  );
}
