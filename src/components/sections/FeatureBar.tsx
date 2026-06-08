"use client";

import type { ReactNode } from "react";
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

function FeatureItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex min-w-full shrink-0 items-center justify-center gap-3 px-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
        {icon}
      </span>
      <p className="whitespace-nowrap text-[clamp(0.625rem,2.6vw,0.875rem)] font-bold uppercase tracking-wide text-white">
        {label}
      </p>
    </div>
  );
}

export default function FeatureBar() {
  const tickerItems = [...items, ...items];

  return (
    <section className="border-y border-primary-800 bg-primary-950 py-6 md:py-8" aria-label="Diferenciais">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Mobile: ticker horizontal em loop */}
        <div
          className="relative overflow-hidden md:hidden"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-primary-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-primary-950 to-transparent" />
          <div className="feature-bar-ticker flex">
            {tickerItems.map((item, index) => (
              <FeatureItem key={`${item.label}-${index}`} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>

        {/* Desktop: grid estático */}
        <div className="hidden grid-cols-3 gap-6 md:grid">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-start gap-3 text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                {item.icon}
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
