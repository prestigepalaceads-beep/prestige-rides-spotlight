import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export type Car = {
  img: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  spec: string;
};

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  cars: Car[];
}

export function CarSlider({ eyebrow, title, description, cars }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    breakpoints: { "(min-width: 1024px)": { slidesToScroll: 2 } },
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial-gold opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.5em] uppercase text-primary">{eyebrow}</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05]">
              {title}
            </h2>
            <p className="mt-6 text-foreground/70 max-w-lg leading-relaxed">{description}</p>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={() => embla?.scrollPrev()}
              disabled={!canPrev}
              className="flex h-12 w-12 items-center justify-center border border-border text-foreground/80 transition hover:border-primary hover:text-primary disabled:opacity-30"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              disabled={!canNext}
              className="flex h-12 w-12 items-center justify-center border border-border text-foreground/80 transition hover:border-primary hover:text-primary disabled:opacity-30"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-3" ref={emblaRef}>
          <div className="flex">
            {cars.map((car, i) => (
              <div key={i} className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_42%] xl:flex-[0_0_38%] px-3">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CarCard({ car }: { car: Car }) {
  return (
    <article className="group relative bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-onyx">
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
        <div className="absolute top-5 left-5 px-3 py-1.5 bg-onyx/70 backdrop-blur-md border border-primary/30">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary">{car.year}</span>
        </div>
      </div>

      <div className="p-7">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">{car.brand}</p>
        <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">{car.model}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{car.spec}</p>

        <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Price</p>
            <p className="font-display text-xl text-gradient-gold">{car.price}</p>
          </div>
          <button className="text-xs tracking-[0.3em] uppercase text-foreground/80 hover:text-primary transition flex items-center gap-2">
            Inquire <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
