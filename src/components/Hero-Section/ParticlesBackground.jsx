import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ id = "hero-particles", theme = "light" }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyPreferences = () => {
      setIsMobile(mobileQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
    };

    applyPreferences();
    mobileQuery.addEventListener("change", applyPreferences);
    motionQuery.addEventListener("change", applyPreferences);

    return () => {
      mobileQuery.removeEventListener("change", applyPreferences);
      motionQuery.removeEventListener("change", applyPreferences);
    };
  }, []);

  const options = useMemo(() => {
    const particleColor = theme === "dark" ? "#4a4a4a" : "#0f5132";
    const particleCount = isMobile ? 20 : 34;

    return {
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: isMobile ? 36 : 50,
      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: "repulse" },
          resize: true,
        },
        modes: {
          repulse: { distance: 70, duration: 0.25 },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: particleColor,
          distance: isMobile ? 120 : 135,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          speed: isMobile ? 0.4 : 0.7,
        },
        number: {
          density: { enable: true, area: 820 },
          value: particleCount,
        },
        opacity: { value: 0.35 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: isMobile ? 3 : 4 } },
      },
      detectRetina: true,
    };
  }, [isMobile, theme]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <Particles
      id={id}
      init={particlesInit}
      className="pointer-events-none absolute inset-0 -z-10"
      options={options}
    />
  );
};

export default ParticlesBackground;
