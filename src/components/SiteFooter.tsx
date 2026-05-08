import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="relative border-t border-border bg-onyx">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-2xl tracking-widest text-foreground">{t("brand.name")}</div>
            <div className="text-[10px] tracking-[0.4em] text-muted-foreground mb-6">{t("brand.sub")}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("brand.tagline")}</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">{t("footer.explore")}</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li><Link to="/cars" className="hover:text-primary transition">{t("footer.allVehicles")}</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">{t("nav.services")}</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition">{t("footer.editorial")}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">{t("footer.categories")}</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li>{t("footer.cat.featured")}</li>
              <li>{t("footer.cat.armoured")}</li>
              <li>{t("footer.cat.limited")}</li>
              <li>{t("footer.cat.preowned")}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4 text-sm text-foreground/75">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-primary shrink-0" /><span>{t("footer.address")}</span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-primary shrink-0" /><span dir="ltr">+971 4 000 0000</span></li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-primary shrink-0" /><span dir="ltr">info@prestigemotors.ae</span></li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-12 opacity-30" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} {t("brand.name")} {t("brand.sub")}. {t("footer.rights")}</p>
          <p className="tracking-[0.3em] uppercase">{t("footer.crafted")}</p>
        </div>
      </div>
    </footer>
  );
}
