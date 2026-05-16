import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import b1 from "@/assets/banner-1.jpg";
import b2 from "@/assets/banner-2.jpg";
import b3 from "@/assets/banner-3.jpg";

const slides = [
  {
    img: b1,
    eyebrow: "The Collection",
    title: "Where Legends Are Curated",
    sub: "An assembly of the world's most coveted automobiles, chosen with uncompromising precision.",
    cta: "Browse Vehicles",
    to: "/cars",
  },
  {
    img: b2,
    eyebrow: "Armoured Series",
    title: "Luxury Beyond Protection",
    sub: "Tactical sophistication engineered for those who never compromise on safety or style.",
    cta: "Discover Armoured",
    to: "/cars",
  },
  {
    img: b3,
    eyebrow: "Performance",
    title: "The Art of Acceleration",
    sub: "Hand-selected supercars built for the road less traveled — and the moments worth remembering.",
    cta: "Explore Performance",
    to: "/cars",
  },
] as const;

export function HeroSlider() {
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  useEffect(() => {
    const read = () => {
      const d = document.documentElement.dir || document.documentElement.getAttribute("lang");
      setDirection(d === "rtl" || d === "ar" ? "rtl" : "ltr");
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["dir", "lang"] });
    return () => obs.disconnect();
  }, []);
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, direction }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  useEffect(() => {
    embla?.reInit({ loop: true, direction });
  }, [embla, direction]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-onyx">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-onyx/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs tracking-[0.5em] uppercase text-primary">{slides[index].eyebrow}</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.02] text-foreground">
                {slides[index].title}
              </h1>
              <p className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
                {slides[index].sub}
              </p>
              <div className="mt-10 flex gap-4 items-center">
                <Link to={slides[index].to} className="pointer-events-auto group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-all">
                  {slides[index].cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            className="h-px w-12 bg-foreground/30 relative overflow-hidden"
            aria-label={`Slide ${i + 1}`}
          >
            <span className={`absolute inset-y-0 left-0 bg-primary transition-all duration-[6000ms] ${i === index ? "w-full" : "w-0"}`} />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-3 text-xs tracking-[0.3em] text-foreground/60">
        <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-foreground/30" />
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
