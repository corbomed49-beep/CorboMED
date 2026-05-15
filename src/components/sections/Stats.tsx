"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const stats = [
  { value: "500+", label: "Laudos Emitidos" },
  { value: "15+", label: "Anos de Experiência" },
  { value: "98%", label: "Aprovação Judicial" },
  { value: "Brasil", label: "Atendimento Nacional" },
];

export default function Stats() {
  return (
    <Section background="gradient" id="numeros">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-bold text-teal-400 md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-primary-200 md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
