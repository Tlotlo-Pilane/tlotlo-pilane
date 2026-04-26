import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ResumeModal from "./ResumeModal";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gray-100 px-4 py-16 transition-colors duration-500 dark:bg-black sm:px-6 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/about-img.jpg"
            alt="Tlotlo Pilane working and planning software projects"
            loading="lazy"
            width="900"
            height="600"
            decoding="async"
            className="h-auto w-full rounded-3xl border border-gray-200 object-cover shadow-lg dark:border-gray-800"
          />
        </motion.div>

        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-[#060606]"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
            I am a builder who enjoys solving real problems through design and
            code. My approach combines product thinking, clean implementation,
            and attention to detail so every release is useful, reliable, and
            easy to maintain.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
            Whether I am crafting a polished UI or refining system behavior, I
            focus on outcomes: fast performance, clear user flows, and software
            that teams can confidently scale.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                if (window.innerWidth < 768) {
                  window.open("/TLOTLO_PILANE - CV.pdf", "_blank", "noopener,noreferrer");
                  return;
                }
                setShowModal(true);
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#4ca771] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3c8d5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771]"
            >
              View CV
            </button>
            <a
              href="/TLOTLO_PILANE - CV.pdf"
              download
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-400 px-6 py-3 text-sm font-semibold text-black transition hover:border-[#4ca771] hover:text-[#4ca771] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771] dark:border-gray-600 dark:text-white"
            >
              Download CV
            </a>
          </div>
        </motion.article>
      </div>

      {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default About;
