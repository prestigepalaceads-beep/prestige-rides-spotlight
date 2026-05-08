import { useEffect, useState, useCallback } from "react";

export type Theme = "dark" | "light";
const KEY = "prestige-theme";

let currentTheme: Theme = "dark";
const listeners = new Set<(t: Theme) => void>();

function applyTheme(t: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("light", t === "light");
  root.classList.toggle("dark", t === "dark");
}

function setGlobalTheme(t: Theme) {
  currentTheme = t;
  applyTheme(t);
  try { localStorage.setItem(KEY, t); } catch {}
  listeners.forEach((l) => l(t));
}

if (typeof window !== "undefined") {
  try {
    const stored = localStorage.getItem(KEY) as Theme | null;
    currentTheme = stored ?? "dark";
  } catch {}
  applyTheme(currentTheme);
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(currentTheme);

  useEffect(() => {
    setThemeState(currentTheme);
    const listener = (t: Theme) => setThemeState(t);
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  }, []);

  const setTheme = useCallback((t: Theme) => setGlobalTheme(t), []);
  const toggle = useCallback(() => {
    setGlobalTheme(currentTheme === "dark" ? "light" : "dark");
  }, []);

  return { theme, setTheme, toggle };
}
