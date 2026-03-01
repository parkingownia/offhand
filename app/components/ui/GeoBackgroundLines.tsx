"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/src/theme/ThemeProvider";

type GeneratedLine = {
  id: string;
  d: string;
  kind: "base" | "copper" | "prism";
  width: number;
  opacity: number;
  dashed: boolean;
  dashArray: string;
  duration: number;
  delay: number;
};

const VIEWBOX_WIDTH = 1600;
const VIEWBOX_HEIGHT = 1000;
const MOBILE_BREAKPOINT = 840;

const ANGLE_SET = [15, 25, 35, 45, 60, 75];
const LINE_COUNT_DESKTOP = 20;
const LINE_COUNT_MOBILE = 12;
const CENTRAL_INTERSECTION_RATIO = 0.38;

const OPACITY_MIN = 0.12;
const OPACITY_MAX = 0.26;
const COPPER_OPACITY_MIN = 0.1;
const COPPER_OPACITY_MAX = 0.18;
const COPPER_LINE_RATIO = 0.2;

function seeded(index: number, factor: number) {
  const value = Math.sin(index * factor) * 10000;
  return value - Math.floor(value);
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function createLines(isMobile: boolean): GeneratedLine[] {
  const count = isMobile ? LINE_COUNT_MOBILE : LINE_COUNT_DESKTOP;
  const copperStep = Math.max(1, Math.round(1 / COPPER_LINE_RATIO));
  const centralCount = Math.round(count * CENTRAL_INTERSECTION_RATIO);

  return Array.from({ length: count }, (_, index) => {
    const centralBand = index < centralCount;
    const angle = ANGLE_SET[index % ANGLE_SET.length] * (index % 2 === 0 ? 1 : -1);
    const angleRad = (angle * Math.PI) / 180;

    const centerX = centralBand
      ? VIEWBOX_WIDTH * (0.42 + seeded(index + 1, 1.91) * 0.16)
      : VIEWBOX_WIDTH * (0.08 + seeded(index + 1, 1.91) * 0.84);
    const centerY = centralBand
      ? VIEWBOX_HEIGHT * (0.34 + seeded(index + 1, 2.37) * 0.32)
      : VIEWBOX_HEIGHT * (0.08 + seeded(index + 1, 2.37) * 0.84);
    const lineLength = VIEWBOX_WIDTH * (centralBand ? 1.95 : 1.35 + seeded(index + 1, 3.17) * 0.45);

    const half = lineLength / 2;
    const x1 = centerX - Math.cos(angleRad) * half;
    const y1 = centerY - Math.sin(angleRad) * half;
    const x2 = centerX + Math.cos(angleRad) * half;
    const y2 = centerY + Math.sin(angleRad) * half;

    const isCurve = index % 10 < 3;
    const isPrism = index === 1 || index === Math.floor(count * 0.72);
    const isCopper = !isPrism && index % copperStep === 0;
    const isDashed = !isPrism && index % 5 === 0;

    const curveOffset = 100 + seeded(index + 1, 4.71) * 130;
    const cx1 = centerX - Math.sin(angleRad) * curveOffset;
    const cy1 = centerY + Math.cos(angleRad) * curveOffset;
    const cx2 = centerX + Math.sin(angleRad) * curveOffset;
    const cy2 = centerY - Math.cos(angleRad) * curveOffset;

    const d = isCurve
      ? `M ${x1.toFixed(2)} ${y1.toFixed(2)} C ${cx1.toFixed(2)} ${cy1.toFixed(2)} ${cx2.toFixed(2)} ${cy2.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`
      : `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}`;

    const progress = count > 1 ? index / (count - 1) : 0;
    const opacity = isCopper
      ? clamp(
          COPPER_OPACITY_MIN + progress * (COPPER_OPACITY_MAX - COPPER_OPACITY_MIN),
          COPPER_OPACITY_MIN,
          COPPER_OPACITY_MAX,
        )
      : clamp(
          OPACITY_MIN + progress * (OPACITY_MAX - OPACITY_MIN),
          OPACITY_MIN,
          OPACITY_MAX,
        );

    return {
      id: `geo-bg-line-${index}`,
      d,
      kind: isPrism ? "prism" : isCopper ? "copper" : "base",
      width: isPrism || index % 7 === 0 ? 2 : 1,
      opacity,
      dashed: isDashed,
      dashArray: isDashed ? (index % 2 === 0 ? "26 16" : "18 20") : "0",
      duration: isDashed ? 25 + seeded(index + 1, 5.03) * 20 : 40 + seeded(index + 1, 5.03) * 30,
      delay: -(seeded(index + 1, 6.19) * 8),
    };
  });
}

export default function GeoBackgroundLines() {
  const reducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const lines = useMemo(() => createLines(isMobile), [isMobile]);

  if (theme !== "geo") {
    return null;
  }

  return (
    <div aria-hidden="true" className="geo-bg-lines">
      <svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="geo-prism-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(143,191,217,0.56)" />
            <stop offset="50%" stopColor="rgba(184,115,51,0.34)" />
            <stop offset="100%" stopColor="rgba(184,168,216,0.5)" />
          </linearGradient>
        </defs>

        <motion.g
          animate={
            reducedMotion
              ? { x: 0, y: 0 }
              : {
                  x: [0, 14, -10, 0],
                  y: [0, -12, 10, 0],
                }
          }
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  duration: 52,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }
          }
        >
          {lines.map((line) => (
            <motion.path
              key={line.id}
              d={line.d}
              className={`geo-bg-lines__path geo-bg-lines__path--${line.kind}`}
              style={{
                strokeWidth: line.width,
                strokeOpacity: line.opacity,
                strokeDasharray: line.dashArray,
              }}
              animate={
                reducedMotion
                  ? { strokeDashoffset: 0, opacity: line.opacity }
                  : {
                      strokeDashoffset: line.dashed ? [0, -280] : 0,
                      opacity: [line.opacity * 0.9, line.opacity, line.opacity * 0.92],
                    }
              }
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : {
                      duration: line.duration,
                      delay: line.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }
              }
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
