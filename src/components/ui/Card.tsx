"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  index?: number;
}

export default function Card({
  children,
  className = "",
  hover = true,
  index = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={hover ? { y: -6, boxShadow: "0 20px 40px rgba(12,35,64,0.15)" } : {}}
      className={`rounded-2xl bg-white p-6 shadow-md transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}
