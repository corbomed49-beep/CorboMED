import { ReactNode } from "react";

type Background = "white" | "gray" | "gradient" | "primary";

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
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
