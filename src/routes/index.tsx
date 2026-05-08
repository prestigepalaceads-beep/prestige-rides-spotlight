import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Wrench, Sparkles, Award } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { CarSlider, type Car } from "@/components/CarSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { cars as allCars } from "@/data/cars";
import { blogPosts } from "@/data/blogs";
import about from "@/assets/about.jpg";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/")({
  component: Index,
});

const toCard = (c: typeof allCars[number]): Car => ({
  slug: c.slug,
  img: c.img,
  brand: c.brand,
  model: c.title.replace(`${c.brand} `, ""),
  year: c.year,
  price: c.priceLabel,
  spec: c.spec,
});

const featured: Car[] = allCars.filter((c) => c.category === "Normal").map(toCard);
const armoured: Car[] = allCars.filter((c) => c.category === "Armoured").map(toCard);
const blogs = blogPosts.slice(0, 3);

function Index() {
  const { t } = useLanguage();
  return (
    <>
      <HeroSlider />

      {/* Featured Motors */}
      <CarSlider
        eyebrow={t("home.featured.eyebrow")}
        title={t("home.featured.title")}
        description={t("home.featured.desc")}
        cars={featured}
      />

      {/* About Us */}
      <section className="relative py-24 md:py-32 bg-onyx overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-radial-gold opacity-50 blur-3xl" />
            <div className="relative aspect-[5/4] overflow-hidden border border-primary/30">
              <img src={about} alt="Our showroom" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card border border-primary/40 px-8 py-6 shadow-elegant">
              <p className="font-display text-5xl text-gradient-gold">14+</p>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-1">{t("home.about.years")}</p>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow={t("home.about.eyebrow")}
              title={t("home.about.title")}
              description={t("home.about.desc")}
            />
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { Icon: Award, t: t("home.about.authenticity"), d: t("home.about.authenticityDesc") },
                { Icon: Shield, t: t("home.about.discretion"), d: t("home.about.discretionDesc") },
                { Icon: Sparkles, t: t("home.about.curation"), d: t("home.about.curationDesc") },
                { Icon: Wrench, t: t("home.about.aftercare"), d: t("home.about.aftercareDesc") },
              ].map(({ Icon, t: title, d }) => (
                <div key={title} className="border-l border-primary/40 pl-4">
                  <Icon size={20} className="text-primary mb-3" />
                  <h4 className="font-display text-xl">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{d}</p>
                </div>
              ))}
            </div>
            <Link to="/services" className="mt-10 inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-primary hover:gap-5 transition-all">
              {t("home.about.cta")} <ArrowRight size={16} className="rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* Armoured */}
      <CarSlider
        eyebrow={t("home.armoured.eyebrow")}
        title={t("home.armoured.title")}
        description={t("home.armoured.desc")}
        cars={armoured}
      />

      {/* Blogs */}
      <section className="py-24 md:py-32 bg-onyx">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow={t("home.editorial.eyebrow")}
              title={t("home.editorial.title")}
              description={t("home.editorial.desc")}
            />
            <Link to="/blogs" className="inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-primary hover:gap-5 transition-all">
              {t("home.editorial.cta")} <ArrowRight size={16} className="rtl:-scale-x-100" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <motion.div
                key={b.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to="/blogs/$slug" params={{ slug: b.slug }} className="group block">
                  <article>
                    <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-border rounded-2xl">
                      <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-onyx/80 backdrop-blur text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
                        {b.cat}
                      </div>
                    </div>
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{b.date}</p>
                    <h3 className="font-display text-2xl leading-tight group-hover:text-primary transition-colors">{b.title}</h3>
                    <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{b.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
                      {t("home.editorial.read")} <ArrowRight size={14} className="rtl:-scale-x-100" />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-radial-gold opacity-40" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionHeading
              eyebrow={t("home.contact.eyebrow")}
              title={t("home.contact.title")}
              description={t("home.contact.desc")}
            />
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder={t("form.name")} className="w-full bg-transparent border-b border-border py-3 px-1 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition" />
                <input type="email" placeholder={t("form.email")} className="w-full bg-transparent border-b border-border py-3 px-1 focus:border-primary focus:outline-none transition" />
              </div>
              <input type="text" placeholder={t("form.vehicle")} className="w-full bg-transparent border-b border-border py-3 px-1 focus:border-primary focus:outline-none transition" />
              <textarea rows={4} placeholder={t("form.message")} className="w-full bg-transparent border-b border-border py-3 px-1 focus:border-primary focus:outline-none transition resize-none" />
              <button type="submit" className="mt-4 inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-all">
                {t("form.submit")} <ArrowRight size={16} className="rtl:-scale-x-100" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
