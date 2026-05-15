import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500">
      <Link href="/" className="flex items-center gap-1 hover:text-primary-700 transition-colors">
        <FiHome size={14} />
        <span>Início</span>
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <FiChevronRight size={14} className="text-gray-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primary-700 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-primary-700 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
