"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glassmorphism?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverable = true,
  glassmorphism = false,
}: CardProps) {
  const baseStyles = glassmorphism
    ? "backdrop-blur-lg bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/50"
    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700";

  return (
    <motion.div
      className={`rounded-xl p-6 shadow-lg ${baseStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hoverable ? { y: -5, transition: { duration: 0.2 } } : {}}
    >
      {children}
    </motion.div>
  );
}
