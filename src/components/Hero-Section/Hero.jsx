import { Suspense, lazy } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ParticlesBackground = lazy(() => import("./ParticlesBackground"));

const Hero = ({ showParticles, theme }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-gray-100 px-4 pb-20 pt-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:px-6 lg:px-20"
    >
      {showParticles && !reduceMotion && (
        <Suspense fallback={null}>
          <ParticlesBackground id="hero-shared-particles" theme={theme} />
        </Suspense>
      )}

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-7"
        >
          <p className="inline-flex rounded-full border border-[#4ca771]/40 bg-[#4ca771]/10 px-4 py-1 text-sm font-semibold tracking-wide text-[#4ca771]">
            Web Developer | UI/UX Designer | App Builder
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tlotlo Pilane
            <span className="mt-2 block text-2xl font-semibold text-gray-700 dark:text-gray-300 sm:text-3xl">
              Building thoughtful digital products for real people.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
            I design and develop modern, responsive web experiences with a strong
            focus on performance, usability, and business outcomes. I enjoy
            turning ideas into production-ready products that teams are proud to
            ship.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#4ca771] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3c8d5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771]"
            >
              View Featured Projects
            </a>
            <a
              href="/TLOTLO_PILANE - CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-400 px-6 py-3 text-sm font-semibold text-black transition hover:border-[#4ca771] hover:text-[#4ca771] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771] dark:border-gray-600 dark:text-white"
            >
              View CV
            </a>
          </div>

          <dl className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-200/70 bg-white/70 px-4 py-3 backdrop-blur-sm dark:border-gray-800 dark:bg-[#0b0b0b]/70">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Focus
              </dt>
              <dd className="mt-1 text-sm font-semibold">Frontend & Full Stack</dd>
            </div>
            <div className="rounded-lg border border-gray-200/70 bg-white/70 px-4 py-3 backdrop-blur-sm dark:border-gray-800 dark:bg-[#0b0b0b]/70">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Stack
              </dt>
              <dd className="mt-1 text-sm font-semibold">React, Tailwind, JS</dd>
            </div>
            <div className="rounded-lg border border-gray-200/70 bg-white/70 px-4 py-3 backdrop-blur-sm dark:border-gray-800 dark:bg-[#0b0b0b]/70">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Location
              </dt>
              <dd className="mt-1 text-sm font-semibold">Gaborone, Botswana</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 p-6 shadow-xl dark:border-gray-800 dark:from-[#111] dark:to-[#060606]">
            <img
              src="/hero-img.jpeg"
              alt="Portrait of Tlotlo Pilane"
              width="500"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full rounded-2xl border-2 border-[#4ca771] object-cover"
            />
            <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300">
              Available for freelance, product collaboration, and software roles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

