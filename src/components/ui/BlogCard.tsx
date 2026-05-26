"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  index?: number;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  image,
  date,
  readTime,
  category,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute top-4 left-4 rounded-full bg-primary-700 px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <FiCalendar size={12} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <FiClock size={12} />
              {readTime}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-bold text-primary-900 leading-snug group-hover:text-primary-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 leading-relaxed line-clamp-3">{excerpt}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:gap-2 transition-all">
            Ler mais <FiArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
