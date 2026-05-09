import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  DoorOpen,
  Users,
  Gauge,
  Zap,
  Cog,
  Calendar,
  Palette,
  Armchair,
  Car as CarIcon,
  Fuel,
  Play,
} from "lucide-react";
import { getCarBySlug, cars } from "@/data/cars";

export const Route = createFileRoute("/cars/$slug")({
  head: ({ params }) => {
    const car = getCarBySlug(params.slug);
    return {
      meta: [
        { title: car ? `${car.title} — Prestige Motors` : "Vehicle — Prestige Motors" },
        { name: "description", content: car?.description ?? "Vehicle details" },
        { property: "og:title", content: car?.title ?? "Vehicle" },
        { property: "og:description", content: car?.description ?? "" },
        ...(car ? [{ property: "og:image", content: car.img }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const car = getCarBySlug(params.slug);
    if (!car) throw notFound();
    return car;
  },
  component: CarDetailPage,
  notFoundComponent: () => (
    <div className="pt-40 pb-32 text-center">
      <h1 className="font-display text-4xl mb-4">Vehicle not found</h1>
      <Link to="/cars" className="text-primary tracking-[0.3em] uppercase text-xs">
        Back to collection
      </Link>
    </div>
  ),
});

function getYouTubeEmbed(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function CarDetailPage() {
  const car = Route.useLoaderData();
  const embed = getYouTubeEmbed(car.videoLink);

  const photos = Array.from(new Set([car.img, ...(car.gallery ?? [])]));
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, next, prev]);

  const specs = [
    { Icon: CarIcon, label: "Brand", value: car.brand },
    { Icon: Calendar, label: "Year", value: String(car.year) },
    { Icon: Zap, label: "Horsepower", value: `${car.horsepower} HP` },
    { Icon: Cog, label: "Cylinders", value: String(car.cylinders) },
    { Icon: DoorOpen, label: "Doors", value: String(car.doors) },
    { Icon: Users, label: "Seats", value: String(car.seats) },
    { Icon: Gauge, label: "Mileage", value: `${car.distance.toLocaleString()} ${car.distanceUnit}` },
    { Icon: Fuel, label: "Fuel", value: car.fuel },
    { Icon: Palette, label: "Color", value: car.color },
    { Icon: Armchair, label: "Interior", value: car.interior },
    { Icon: CarIcon, label: "Body", value: car.body },
  ];

  const related = cars.filter((c) => c.slug !== car.slug && c.category === car.category).slice(0, 3);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative bg-onyx overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 pt-12 pb-16 relative">
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-foreground/60 hover:text-primary transition mb-10"
          >
            <ArrowLeft size={14} /> Back to Collection
          </Link>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] overflow-hidden border border-primary/30 rounded-2xl cursor-zoom-in"
                onClick={() => setLightbox(0)}
              >
                <img src={car.img} alt={car.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="px-3 py-1.5 bg-onyx/80 backdrop-blur-md border border-primary/40 text-[10px] tracking-[0.3em] uppercase text-primary rounded-full">
                    {car.status}
                  </span>
                  <span className="px-3 py-1.5 bg-onyx/80 backdrop-blur-md border border-primary/40 text-[10px] tracking-[0.3em] uppercase text-primary rounded-full">
                    {car.category}
                  </span>
                </div>
              </motion.div>

              {photos.length > 1 && (
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {photos.slice(0, 5).map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox(i)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border hover:border-primary/60 transition"
                      aria-label={`Open photo ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${car.title} thumbnail ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4">{car.brand}</p>
              <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.05]">
                {car.title}
              </h1>
              <p className="mt-6 text-foreground/70 leading-relaxed">{car.description}</p>

              <div className="mt-10 border-t border-b border-border py-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Price</p>
                <p className="font-display text-4xl md:text-5xl text-gradient-gold mt-2">
                  {car.priceLabel}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-all"
                >
                  Inquire <ArrowRight size={16} />
                </Link>
                <a
                  href={car.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-primary/50 text-primary text-xs tracking-[0.3em] uppercase font-medium hover:bg-primary/10 transition-all rounded-full"
                >
                  <Play size={14} /> Watch Video
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs tracking-[0.5em] uppercase text-primary">Specifications</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {specs.map(({ Icon, label, value }) => (
              <div key={label} className="bg-background p-6">
                <Icon size={20} className="text-primary mb-4" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</p>
                <p className="font-display text-xl mt-2">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-onyx/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 h-12 w-12 flex items-center justify-center border border-primary/40 text-primary hover:bg-primary/10 rounded-full transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 h-12 w-12 flex items-center justify-center border border-primary/40 text-primary hover:bg-primary/10 rounded-full transition"
              aria-label="Previous photo"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 h-12 w-12 flex items-center justify-center border border-primary/40 text-primary hover:bg-primary/10 rounded-full transition"
              aria-label="Next photo"
            >
              <ArrowRight size={20} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={photos[lightbox]}
              alt={`${car.title} photo ${lightbox + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-xl border border-primary/30"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-onyx/70 border border-primary/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-primary">
              {lightbox + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video */}
      {embed && (
        <section className="pb-20 md:pb-28 bg-background">
          <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.5em] uppercase text-primary">Walkaround</span>
            </div>
            <div className="relative h-[300px] overflow-hidden border border-border rounded-2xl">
              <iframe
                src={embed}
                title={`${car.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 md:py-28 bg-onyx">
          <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.5em] uppercase text-primary">You May Also Like</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  to="/cars/$slug"
                  params={{ slug: c.slug }}
                  className="group bg-card border border-border overflow-hidden rounded-2xl hover:border-primary/60 transition"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary">{c.brand}</p>
                    <h3 className="font-display text-2xl mt-2">{c.title.replace(`${c.brand} `, "")}</h3>
                    <p className="mt-4 font-display text-lg text-gradient-gold">{c.priceLabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
