"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY || 0;
      const offset = Math.min(scrollY * 0.08, 140);
      const rotation = Math.min(scrollY * 0.008, 1.8);
      const scale = 1.08 + Math.min(scrollY * 0.00008, 0.04);

      if (layerRef.current) {
        layerRef.current.style.transform =
          "translate3d(0, " +
          offset.toFixed(2) +
          "px, 0) scale(" +
          scale.toFixed(3) +
          ") rotateX(" +
          rotation.toFixed(2) +
          "deg)";
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="portal-bg" aria-hidden="true">
      <div ref={layerRef} className="portal-bg-layer" />
      <div className="portal-bg-tint" />
    </div>
  );
}
