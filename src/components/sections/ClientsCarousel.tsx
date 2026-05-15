"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const clients = [
  "Advogados e Escritórios Jurídicos",
  "Seguradoras e Empresas",
  "Clínicas e Parceiros",
  "Pacientes em todo o Brasil",
  "Perícias para INSS",
  "Responsabilidade Médica",
  "Acidentes de Trânsito",
  "Doenças Ocupacionais",
];

export default function ClientsCarousel() {
  return (
    <Section background="gray" id="clientes">
      <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-primary-400">
        Atendemos em todas as áreas periciais para
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-4 whitespace-nowrap"
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex h-12 items-center justify-center rounded-xl border border-teal-200/60 bg-white px-5 text-sm font-semibold text-primary-700 shadow-sm"
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
