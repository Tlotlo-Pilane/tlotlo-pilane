import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-pressed={theme === "dark"}
      className={`group relative flex h-7 w-14 items-center rounded-full px-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black ${
        theme === "dark"
          ? "justify-end bg-gray-700"
          : "justify-start bg-gray-300"
      }`}
      aria-label="Toggle Theme"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-3 h-3 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-3 h-3 text-slate-600" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
