"use client";

import { useTheme } from "@/src/theme/ThemeProvider";
import { themeLabels, themeNames, type ThemeName } from "@/src/theme/themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle" role="group" aria-label="Tryb wizualny portalu">
      {themeNames.map((themeName: ThemeName) => {
        const isActive = themeName === theme;

        return (
          <button
            key={themeName}
            type="button"
            className={`theme-toggle__btn ${isActive ? "is-active" : ""}`.trim()}
            onClick={() => setTheme(themeName)}
            aria-pressed={isActive}
          >
            {themeLabels[themeName]}
          </button>
        );
      })}
    </div>
  );
}
