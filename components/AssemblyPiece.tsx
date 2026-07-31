"use client";

import { motion, Variants } from "framer-motion";

export const itemAssemblyVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 20
    }
  }
};

export default function AssemblyPiece({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={itemAssemblyVariants} className={className}>
      {children}
    </motion.div>
  );
}
