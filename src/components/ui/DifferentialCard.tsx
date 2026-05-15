"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DifferentialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function DifferentialCard({
  icon,
  title,
  description,
  index = 0,
}: DifferentialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col items-center rounded-2xl border border-primary-100 bg-white p-6 text-center shadow-sm hover:border-teal-400/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700 text-xl group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="mb-2 font-display text-sm font-bold text-primary-900">{title}</h3>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
