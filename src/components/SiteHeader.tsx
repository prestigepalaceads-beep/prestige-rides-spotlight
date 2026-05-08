import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoLight from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const { t } = useLanguage();
  const logo = theme === "dark" ? logoDark : logoLight;

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/cars", label: t("nav.cars") },
    { to: "/services", label: t("nav.services") },
    { to: "/blogs", label: t("nav.blogs") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-onyx/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Prestige Motors" className="h-11 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-xl tracking-widest text-foreground">{t("brand.name")}</div>
            <div className="text-[10px] tracking-[0.4em] text-muted-foreground">{t("brand.sub")}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm tracking-[0.2em] uppercase text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Link to="/contact" className="px-5 py-2.5 text-xs uppercase tracking-[0.25em] bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-all">
            {t("nav.visitShowroom")}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-foreground" aria-label="Menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-onyx/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-[0.2em] uppercase text-foreground/85 border-b border-border/40"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
