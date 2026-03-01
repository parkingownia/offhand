"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function PageBackdrop() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1800], [0, 36]);

  return (
    <motion.div
      aria-hidden="true"
      className="ambient-backdrop"
      style={reducedMotion ? undefined : { y }}
    />
  );
}
