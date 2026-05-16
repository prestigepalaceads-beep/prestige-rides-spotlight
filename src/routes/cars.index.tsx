import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { cars, brands, type CarStatus, type CarCategory } from "@/data/cars";
import { SlidersHorizontal, X } from "lucide-react";

export const Route = createFileRoute("/cars/")({
  head: () => ({
    meta: [
      { title: "Cars — Prestige Motors" },
      {
        name: "description",
        content: "Browse our curated collection of luxury, performance, and armoured automobiles.",
      },
    ],
  }),
  component: CarsPage,
});

const PRICE_MIN = 0;
const PRICE_MAX = 3000000;

function CarsPage() {
  const [brand, setBrand] = useState<string>("All");
  const [status, setStatus] = useState<CarStatus | "All">("All");
  const [category, setCategory] = useState<CarCategory | "All">("All");
  const [maxPrice, setMaxPrice] = useState<number>(PRICE_MAX);
  const [minPrice, setMinPrice] = useState<number>(PRICE_MIN);
  const [openMobile, setOpenMobile] = useState(false);

  const filtered = useMemo(
    () =>
      cars.filter(
        (c) =>
          (brand === "All" || c.brand === brand) &&
          (status === "All" || c.status === status) &&
          (category === "All" || c.category === category) &&
          c.priceAED >= minPrice &&
          c.priceAED <= maxPrice,
      ),
    [brand, status, category, minPrice, maxPrice],
  );

  const reset = () => {
    setBrand("All");
    setStatus("All");
    setCategory("All");
    setMinPrice(PRICE_MIN);
    setMaxPrice(PRICE_MAX);
  };

  const Filters = (
    <div className="space-y-8">
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Brand</p>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full bg-background text-foreground border border-border py-2.5 px-3 text-sm focus:border-primary outline-none"
        >
          <option value="All">All Brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Condition</p>
        <div className="grid grid-cols-3 gap-2">
          {(["All", "New", "Used"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`py-2 text-[11px] tracking-[0.25em] uppercase border transition ${
                status === s
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground/70 hover:border-primary/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Category</p>
        <div className="grid grid-cols-3 gap-2">
          {(["All", "Normal", "Armoured"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setCategory(s)}
              className={`py-2 text-[11px] tracking-[0.25em] uppercase border transition ${
                category === s
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground/70 hover:border-primary/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Price Range (AED)</p>
        <div className="space-y-3">
          <label className="block">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Min: {minPrice.toLocaleString()}
            </span>
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={50000}
              value={minPrice}
              onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice))}
              className="w-full accent-primary"
            />
          </label>
          <label className="block">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Max: {maxPrice.toLocaleString()}
            </span>
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={50000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice))}
              className="w-full accent-primary"
            />
          </label>
        </div>
      </div>

      <button
        onClick={reset}
        className="w-full py-3 border border-border text-xs tracking-[0.3em] uppercase text-foreground/70 hover:border-primary hover:text-primary transition"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <div className="pt-32">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Collection"
            title="Every Vehicle, Curated"
            description="A complete view of our active inventory — performance icons, luxury flagships, and armoured masterpieces."
            center
          />
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 pb-32 grid lg:grid-cols-[280px_1fr] gap-10">
        {/* Mobile filter button */}
        <div className="lg:hidden flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{filtered.length} results</p>
          <button
            onClick={() => setOpenMobile(true)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-xs tracking-[0.3em] uppercase"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block sticky top-28 self-start border border-border p-6 bg-card/40">
          <h3 className="font-display text-xl mb-6">Filters</h3>
          {Filters}
        </aside>

        {/* Mobile drawer */}
        {openMobile && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-onyx/80" onClick={() => setOpenMobile(false)} />
            <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background border-l border-border p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-xl">Filters</h3>
                <button onClick={() => setOpenMobile(false)} aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              {Filters}
            </div>
          </div>
        )}

        {/* Results */}
        <div>
          <div className="hidden lg:flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-foreground">{filtered.length}</span> of {cars.length}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="border border-border p-16 text-center">
              <p className="font-display text-2xl mb-2">No vehicles match your criteria</p>
              <p className="text-muted-foreground text-sm">Try adjusting or resetting your filters.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((c) => (
                <Link
                  key={c.slug}
                  to="/cars/$slug"
                  params={{ slug: c.slug }}
                  className="group bg-card border border-border overflow-hidden rounded-2xl hover:border-primary/60 transition"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-onyx/80 backdrop-blur text-[9px] tracking-[0.3em] uppercase text-primary border border-primary/30">
                        {c.status}
                      </span>
                      {c.category === "Armoured" && (
                        <span className="px-2.5 py-1 bg-onyx/80 backdrop-blur text-[9px] tracking-[0.3em] uppercase text-primary border border-primary/30">
                          Armoured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary">{c.brand}</p>
                    <h3 className="font-display text-2xl mt-2 leading-tight">
                      {c.title.replace(`${c.brand} `, "")}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.spec}</p>
                    <p className="mt-4 font-display text-lg text-gradient-gold">{c.priceLabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
