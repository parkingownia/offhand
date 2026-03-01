"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/src/theme/ThemeProvider";
import { lineThemeConfig } from "@/src/theme/themes";

type GeoLine = {
  id: string;
  d: string;
  width: number;
  opacity: number;
  duration: number;
  delay: number;
  copper: boolean;
  prism: boolean;
};

const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 560;
const MOBILE_BREAKPOINT = 840;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function createGeoLines(isMobile: boolean): GeoLine[] {
  const config = lineThemeConfig.geo;
  const lineCount = isMobile ? config.mobileCount : config.desktopCount;

  return Array.from({ length: lineCount }, (_, index) => {
    const angleDeg = config.angles[index % config.angles.length] * (index % 2 === 0 ? 1 : -1);
    const rad = (angleDeg * Math.PI) / 180;

    const centerX = VIEWBOX_WIDTH / 2 + ((index * 97) % 420) - 210;
    const centerY = VIEWBOX_HEIGHT / 2 + ((index * 53) % 260) - 130;

    const length = 1680 + (index % 4) * 120;
    const x1 = centerX - Math.cos(rad) * (length / 2);
    const y1 = centerY - Math.sin(rad) * (length / 2);
    const x2 = centerX + Math.cos(rad) * (length / 2);
    const y2 = centerY + Math.sin(rad) * (length / 2);

    const isPrism = index < config.prismLineCount;
    const useCurve = !isPrism && index % 4 === 0;

    const curveOffset = 110 + (index % 5) * 16;
    const c1x = centerX - Math.sin(rad) * curveOffset;
    const c1y = centerY + Math.cos(rad) * curveOffset;
    const c2x = centerX + Math.sin(rad) * curveOffset;
    const c2y = centerY - Math.cos(rad) * curveOffset;

    const path = useCurve
      ? `M ${x1.toFixed(2)} ${y1.toFixed(2)} C ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`
      : `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}`;

    const opacityProgress = lineCount > 1 ? index / (lineCount - 1) : 0;
    const opacity = clamp(
      config.opacityRange[0] + opacityProgress * (config.opacityRange[1] - config.opacityRange[0]),
      config.opacityRange[0],
      config.opacityRange[1],
    );

    const speedProgress = lineCount > 1 ? index / (lineCount - 1) : 0;
    const speed =
      config.speedRange[0] + speedProgress * (config.speedRange[1] - config.speedRange[0]);

    const width = isPrism || index % 7 === 0 ? 2 : 1;
    const copperStep = Math.max(1, Math.round(1 / config.copperRatio));
    const copper = !isPrism && index % copperStep === 0;

    return {
      id: `geo-line-${index}`,
      d: path,
      width,
      opacity,
      duration: 30 + speed * 12,
      delay: -((index * 1.4) % 7),
      copper,
      prism: isPrism,
    };
  });
}

export default function AnimatedLine() {
  const reducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const geoLines = useMemo(() => createGeoLines(isMobile), [isMobile]);

  if (theme === "classic") {
    const staticTransition = { duration: 0 };

    return (
      <svg
        className="hero-line hero-line--classic"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
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

  return (
    <svg
      className="hero-line hero-line--geo"
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="prism-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(143,191,217,0.55)" />
          <stop offset="50%" stopColor="rgba(184,115,51,0.42)" />
          <stop offset="100%" stopColor="rgba(184,168,216,0.52)" />
        </linearGradient>
      </defs>
      <motion.g
        animate={
          reducedMotion
            ? { x: 0, y: 0 }
            : {
                x: [0, 5, -4, 0],
                y: [0, 7, -6, 0],
              }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : {
                duration: 44,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
        }
      >
        {geoLines.map((line) => (
          <motion.path
            key={line.id}
            d={line.d}
            className={`hero-line__path hero-line__path--geo ${line.copper ? "is-copper" : ""} ${line.prism ? "is-prism" : ""}`.trim()}
            style={{
              strokeWidth: line.width,
              strokeOpacity: line.opacity,
              strokeDasharray: line.prism ? "0" : line.width === 2 ? "20 14" : "14 18",
            }}
            animate={
              reducedMotion
                ? { strokeDashoffset: 0, opacity: line.opacity }
                : {
                    strokeDashoffset: [0, -320],
                    opacity: [line.opacity * 0.85, line.opacity, line.opacity * 0.9],
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
  );
}
