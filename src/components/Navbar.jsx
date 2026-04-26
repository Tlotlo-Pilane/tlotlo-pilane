import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", to: "home" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Services", to: "services" },
  { label: "Contact", to: "contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200/80 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-black/90"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-lg font-extrabold tracking-tight text-black transition hover:text-[#4ca771] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771] dark:text-white"
        >
          Tlotlo <span className="text-[#4ca771]">Pilane</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              offset={-90}
              duration={500}
              className="cursor-pointer text-sm font-medium text-gray-700 transition hover:text-[#4ca771] focus-visible:outline-none dark:text-gray-200"
              activeClass="text-[#4ca771]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-black transition hover:border-[#4ca771] hover:text-[#4ca771] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771] md:hidden dark:border-gray-700 dark:text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 bg-white/95 px-4 pb-4 pt-3 backdrop-blur-md md:hidden dark:border-gray-800 dark:bg-black/95"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  spy
                  offset={-90}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-100 hover:text-[#4ca771] dark:text-gray-200 dark:hover:bg-gray-900"
                  activeClass="text-[#4ca771]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
