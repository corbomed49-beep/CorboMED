"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 break-words px-0 md:mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-block rounded-full bg-teal-500/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-teal-500 uppercase"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display break-words text-3xl font-bold md:text-4xl lg:text-5xl ${light ? "text-white" : "text-primary-900"}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mx-auto mt-4 max-w-2xl break-words px-1 text-base leading-relaxed md:text-lg ${light ? "text-primary-200" : "text-gray-600"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
