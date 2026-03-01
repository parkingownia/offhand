export type ThemeName = "classic" | "geo";

export const THEME_STORAGE_KEY = "ltg-theme";
export const DEFAULT_THEME: ThemeName = "classic";

export const themeLabels: Record<ThemeName, string> = {
  classic: "Classic",
  geo: "Geo",
};

export const themeNames: ThemeName[] = ["classic", "geo"];

export function isThemeName(value: string | null | undefined): value is ThemeName {
  return value === "classic" || value === "geo";
}

export function sanitizeTheme(value: string | null | undefined): ThemeName {
  return isThemeName(value) ? value : DEFAULT_THEME;
}

export function getThemeInitScript(): string {
  return `(() => {
    try {
      const key = "${THEME_STORAGE_KEY}";
      const saved = localStorage.getItem(key);
      const theme = saved === "geo" ? "geo" : "classic";
      document.documentElement.setAttribute("data-theme", theme);
    } catch (error) {
      document.documentElement.setAttribute("data-theme", "classic");
    }
  })();`;
}

export type LineThemeConfig = {
  desktopCount: number;
  mobileCount: number;
  speedRange: [number, number];
  angles: number[];
  opacityRange: [number, number];
  copperRatio: number;
  prismLineCount: number;
};

export const lineThemeConfig: Record<ThemeName, LineThemeConfig> = {
  classic: {
    desktopCount: 2,
    mobileCount: 2,
    speedRange: [0.2, 0.4],
    angles: [30, 45],
    opacityRange: [0.1, 0.3],
    copperRatio: 0,
    prismLineCount: 0,
  },
  geo: {
    desktopCount: 16,
    mobileCount: 10,
    speedRange: [0.2, 0.8],
    angles: [15, 25, 35, 45, 60, 75],
    opacityRange: [0.06, 0.16],
    copperRatio: 0.2,
    prismLineCount: 2,
  },
};
