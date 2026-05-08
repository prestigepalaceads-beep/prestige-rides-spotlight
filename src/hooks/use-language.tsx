import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "@/lib/i18n";

const KEY = "prestige-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: TranslationKey) => string;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<Ctx | null>(null);

function applyLang(l: Lang) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.lang = l;
  html.dir = l === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof localStorage !== "undefined" && localStorage.getItem(KEY)) as Lang | null;
    const initial: Lang = stored === "ar" || stored === "en" ? stored : "en";
    setLangState(initial);
    applyLang(initial);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    applyLang(l);
    try { localStorage.setItem(KEY, l); } catch {}
  }, []);

  const toggle = useCallback(() => setLang(lang === "en" ? "ar" : "en"), [lang, setLang]);

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key] ?? translations.en[key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
