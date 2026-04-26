import { useEffect, useState } from "react";

export const useShowParticles = (sectionId = "home", enabled = true) => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setShowParticles(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setShowParticles(false);
      return;
    }

    let observer = null;
    let animationFrameId = null;
    let mounted = true;
    let attempts = 0;

    const bindObserver = () => {
      if (!mounted) return;

      const section = document.getElementById(sectionId);

      if (!section) {
        if (attempts < 120) {
          attempts += 1;
          animationFrameId = window.requestAnimationFrame(bindObserver);
        }
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => setShowParticles(entry.isIntersecting),
        { threshold: 0.2 }
      );

      observer.observe(section);
    };

    bindObserver();

    return () => {
      mounted = false;
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      observer?.disconnect();
    };
  }, [sectionId, enabled]);

  return showParticles;
};
