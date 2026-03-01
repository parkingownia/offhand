"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_THEME,
  isThemeName,
  THEME_STORAGE_KEY,
  type ThemeName,
} from "@/src/theme/themes";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (nextTheme: ThemeName) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeAttribute(theme: ThemeName) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("data-theme", theme);
}

function readThemeFromStorage(): ThemeName {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeName(storedTheme) ? storedTheme : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof document === "undefined") {
      return DEFAULT_THEME;
    }

    const htmlTheme = document.documentElement.getAttribute("data-theme");
    return isThemeName(htmlTheme) ? htmlTheme : readThemeFromStorage();
  });

  useEffect(() => {
    applyThemeAttribute(theme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore write failures in private mode.
    }
  }, [theme]);

  const setTheme = useCallback((nextTheme: ThemeName) => {
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "classic" ? "geo" : "classic");
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }

  return context;
}
