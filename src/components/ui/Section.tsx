import { ReactNode, JSX } from "react";

type Background = "white" | "gray" | "gradient" | "primary" | "dark" | "teal-light";

interface SectionProps {
  children: ReactNode;
  background?: Background;
  className?: string;
  id?: string;
}

const backgroundStyles: Record<Background, string> = {
  white: "bg-white",
  gray: "bg-gray-50",
  gradient: "gradient-primary text-white",
  primary: "bg-primary-900 text-white",
  dark: "bg-primary-950 text-white",
  "teal-light": "bg-teal-50",
};

const decorations: Record<Background, JSX.Element | null> = {
  white: (
    <>
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-400/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-primary-400/4 blur-3xl" />
    </>
  ),
  gray: null,
  gradient: null,
  primary: null,
  dark: (
    <>
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-teal-600/6 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-teal-500/40" />
    </>
  ),
  "teal-light": (
    <>
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-primary-300/10 blur-3xl" />
    </>
  ),
};

export default function Section({
  children,
  background = "white",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      {decorations[background]}
      <div className="relative mx-auto max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
