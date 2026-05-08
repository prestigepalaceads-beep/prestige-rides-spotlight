import { createFileRoute } from "@tanstack/react-router";
import { CarSlider, type Car } from "@/components/CarSlider";
import { SectionHeading } from "@/components/SectionHeading";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import a1 from "@/assets/armoured-1.jpg";
import a2 from "@/assets/armoured-2.jpg";
import a3 from "@/assets/armoured-3.jpg";
import a4 from "@/assets/armoured-4.jpg";

export const Route = createFileRoute("/cars")({
  head: () => ({
    meta: [
      { title: "Cars — Prestige Motors" },
      { name: "description", content: "Browse our curated collection of luxury, performance, and armoured automobiles." },
    ],
  }),
  component: CarsPage,
});

const all: Car[] = [
  { img: car1, brand: "Rolls-Royce", model: "Cullinan Black Badge", year: "2024", price: "AED 1,890,000", spec: "V12 Twin-Turbo · 600 HP" },
  { img: car2, brand: "Lamborghini", model: "Urus Performante", year: "2024", price: "AED 1,420,000", spec: "V8 Twin-Turbo · 657 HP" },
  { img: car3, brand: "Ferrari", model: "812 Superfast", year: "2023", price: "AED 1,750,000", spec: "V12 NA · 789 HP" },
  { img: car4, brand: "Bentley", model: "Continental GT Speed", year: "2024", price: "AED 1,180,000", spec: "W12 Twin-Turbo · 650 HP" },
  { img: a1, brand: "Mercedes-Benz", model: "G 63 AMG Armoured B6", year: "2024", price: "AED 2,100,000", spec: "Ballistic B6 · V8" },
  { img: a2, brand: "Range Rover", model: "Sentinel Autobiography", year: "2024", price: "AED 2,450,000", spec: "VR8 Certified · V8" },
  { img: a3, brand: "Cadillac", model: "Escalade ESV Armoured", year: "2024", price: "AED 1,650,000", spec: "B6 Protection · V8" },
  { img: a4, brand: "Toyota", model: "Land Cruiser 300 B6", year: "2024", price: "AED 980,000", spec: "Ballistic B6 · V6 TT" },
];

function CarsPage() {
  return (
    <div className="pt-32">
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow="The Collection" title="Every Vehicle, Curated" description="A complete view of our active inventory — performance icons, luxury flagships, and armoured masterpieces." center />
        </div>
      </section>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
        {all.map((c) => (
          <article key={c.model} className="group bg-card border border-border overflow-hidden hover:border-primary/60 transition">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={c.img} alt={c.model} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="p-6">
              <p className="text-xs tracking-[0.3em] uppercase text-primary">{c.brand}</p>
              <h3 className="font-display text-2xl mt-2">{c.model}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.spec}</p>
              <p className="mt-4 font-display text-lg text-gradient-gold">{c.price}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
