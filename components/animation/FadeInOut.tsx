"use client";

import { motion } from "motion/react";

export default function FadeInOut({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "0px" }}
    >
      {children}
    </motion.div>
  );
}
