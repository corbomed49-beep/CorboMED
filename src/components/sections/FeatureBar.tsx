"use client";

import { motion } from "framer-motion";
import { FiActivity, FiGlobe, FiShield } from "react-icons/fi";

const items = [
  {
    icon: <FiGlobe size={22} />,
    label: "Atuação em todo o Brasil",
  },
  {
    icon: <FiActivity size={22} />,
    label: "Expertise em todas as esferas médicas",
  },
  {
    icon: <FiShield size={22} />,
    label: "Prazos processuais rigorosos",
  },
];

export default function FeatureBar() {
  return (
    <section className="border-y border-primary-800 bg-primary-950 py-6 md:py-8" aria-label="Diferenciais">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-3 md:gap-6 lg:px-8"
      >
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-3 text-center md:justify-start md:text-left"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
              {item.icon}
            </span>
            <p className="text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
