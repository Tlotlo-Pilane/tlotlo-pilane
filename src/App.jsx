/*
 * (c) 2026 Tlotlo Pilane. All rights reserved.
 */

import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import { useLoading } from "./hooks/useLoading";
import { usePreferredTheme } from "./hooks/usePreferredTheme";
import { useShowParticles } from "./hooks/useShowParticles";

import Loader from "./Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero-Section/Hero";
import Projects from "./components/Project-Section/Projects";
import Skills from "./components/Skills-Section/Skills";
import Experience from "./components/Experience-Section/Experience";
import Services from "./components/Services-Section/Services";
import About from "./components/About-Section/About";
import Contact from "./components/Contact-Section/Contact";

function App() {
  const [theme, setTheme] = usePreferredTheme();
  const loading = useLoading(1200);
  const showParticles = useShowParticles("home", !loading);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="relative overflow-x-hidden bg-gray-100 text-black transition-colors duration-500 dark:bg-black dark:text-white">
          <Navbar theme={theme} setTheme={setTheme} />

          <main>
            <Hero showParticles={showParticles} theme={theme} />
            <Services />
            <Projects />
            <Skills />
            <Experience />
            <About />
            <Contact />
          </main>

          <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              (c) {new Date().getFullYear()} Tlotlo Pilane. All rights reserved.
            </p>
          </footer>

          <Analytics />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
