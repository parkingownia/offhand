"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedLine() {
  const reducedMotion = useReducedMotion();
  const staticTransition = { duration: 0 };

  return (
    <svg
      className="hero-line"
      viewBox="0 0 1200 560"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M-40,420 C160,370 250,280 410,310 C560,338 680,280 820,220 C960,160 1070,195 1260,138"
        className="hero-line__path hero-line__path--a"
        initial={{ strokeDashoffset: 1600, opacity: 0.2 }}
        animate={
          reducedMotion
            ? { strokeDashoffset: 0, opacity: 0.34 }
            : { strokeDashoffset: [1600, 0], opacity: [0.14, 0.54] }
        }
        transition={
          reducedMotion
            ? staticTransition
            : {
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }
        }
      />

      <motion.path
        d="M-60,470 C120,420 280,348 420,372 C570,398 690,356 840,302 C990,248 1100,266 1290,210"
        className="hero-line__path hero-line__path--b"
        initial={{ strokeDashoffset: 1650, opacity: 0.12 }}
        animate={
          reducedMotion
            ? { strokeDashoffset: 0, opacity: 0.24 }
            : { strokeDashoffset: [1650, 0], opacity: [0.1, 0.32] }
        }
        transition={
          reducedMotion
            ? staticTransition
            : {
                duration: 14,
                delay: 0.7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }
        }
      />
    </svg>
  );
}
