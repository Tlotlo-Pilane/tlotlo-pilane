import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "theme";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const usePreferredTheme = () => {
  const [hasUserTheme, setHasUserTheme] = useState(() =>
    Boolean(localStorage.getItem(THEME_STORAGE_KEY))
  );
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme || getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (hasUserTheme) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } else {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }
  }, [theme, hasUserTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      if (!hasUserTheme) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [hasUserTheme]);

  const setPreferredTheme = (nextTheme) => {
    setHasUserTheme(true);
    setTheme(nextTheme);
  };

  return [theme, setPreferredTheme];
};
