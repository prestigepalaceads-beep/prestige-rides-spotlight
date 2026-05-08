import { useLanguage } from "@/hooks/use-language";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, t } = useLanguage();
  const next = lang === "en" ? "ar" : "en";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("a11y.lang")}
      title={next === "ar" ? "التبديل إلى العربية" : "Switch to English"}
      className={`relative inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-border px-3 text-[11px] tracking-[0.25em] uppercase text-foreground/80 transition hover:text-primary hover:border-primary ${className}`}
    >
      {lang === "en" ? "ع" : "EN"}
    </button>
  );
}
