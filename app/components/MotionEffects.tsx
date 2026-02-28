"use client";

import { useEffect } from "react";

const MAX_PARALLAX_OFFSET = 12;

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    const linePaths = Array.from(
      document.querySelectorAll<SVGPathElement>(".hero__line-path[data-line]"),
    );

    for (const path of linePaths) {
      const length = path.getTotalLength();
      const serialized = `${Math.ceil(length)}`;
      path.style.setProperty("--line-length", serialized);
      path.style.strokeDasharray = serialized;
      path.style.strokeDashoffset = serialized;
    }

    const setProgress = () => {
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      root.style.setProperty("--scroll-progress", progress.toFixed(4));

      const bgOffset = Math.min(window.scrollY * 0.045, 36);
      root.style.setProperty("--bg-parallax-y", `${bgOffset.toFixed(2)}px`);
    };

    if (prefersReducedMotion.matches) {
      for (const path of linePaths) {
        path.style.animation = "none";
        path.style.strokeDashoffset = "0";
      }
      setProgress();
      return;
    }

    root.classList.add("js-motion");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    for (const element of revealElements) {
      observer.observe(element);
    }

    let frame = 0;

    const updateParallax = () => {
      for (const element of parallaxElements) {
        const speed = Number(element.dataset.speed ?? "0.08");
        const max = Number(element.dataset.max ?? `${MAX_PARALLAX_OFFSET}`);
        const rect = element.getBoundingClientRect();
        const centerDelta = rect.top + rect.height / 2 - window.innerHeight / 2;
        const offset = Math.max(
          Math.min(centerDelta * -speed, max),
          -max,
        );

        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      }

      setProgress();
      frame = 0;
    };

    const queueUpdate = () => {
      if (frame !== 0) {
        return;
      }
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
      root.classList.remove("js-motion");
    };
  }, []);

  return null;
}
