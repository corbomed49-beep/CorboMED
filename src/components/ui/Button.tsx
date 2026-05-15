"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary-800 text-white shadow-lg shadow-primary-950/30 hover:bg-primary-700 border border-primary-700",
  secondary:
    "bg-teal-500 text-white shadow-lg shadow-teal-700/30 hover:bg-teal-600 border border-teal-400",
  outline:
    "bg-transparent text-primary-800 border-2 border-primary-800 hover:bg-primary-50",
  ghost:
    "bg-transparent text-white border-2 border-white/60 hover:bg-white/10",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const base = `relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors duration-200 overflow-hidden cursor-pointer font-display tracking-wide ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`;

  const shimmerOverlay = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"
    />
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03, y: -2 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me");
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${base}`}
          {...motionProps}
        >
          {shimmerOverlay}
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={`group ${base}`}>
          {shimmerOverlay}
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${base}`}
      {...motionProps}
    >
      {shimmerOverlay}
      {children}
    </motion.button>
  );
}
