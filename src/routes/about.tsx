import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, Gem, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Prestige Motors" },
      { name: "description", content: "The story, philosophy, and people behind Prestige Motors — curators of the world's most exceptional automobiles." },
      { property: "og:title", content: "About Us — Prestige Motors" },
      { property: "og:description", content: "Curators of the world's most exceptional automobiles. Discover our story." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Gem, t: "Uncompromising Curation", d: "Every automobile in our portfolio is hand-selected for provenance, condition, and rarity." },
  { Icon: Award, t: "Heritage of Excellence", d: "Three decades of trusted relationships with collectors, marques, and master craftsmen." },
  { Icon: Globe2, t: "Global Reach", d: "A discreet international network that sources and delivers anywhere in the world." },
  { Icon: HeartHandshake, t: "Lifelong Partnership", d: "We serve our clients far beyond the sale — for the lifetime of their collection." },
];

function AboutPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="About Us"
            title="A Legacy in Motion"
            description="Prestige Motors was founded on a singular conviction: that the finest automobiles deserve to be treated as works of art. We connect discerning collectors with vehicles that transcend transportation — machines defined by craftsmanship, history, and soul."
            center
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display text-4xl text-foreground">Our Story</h2>
          <p>
            What began as a private passion among a small circle of enthusiasts has grown into one of the most trusted names in collectible and luxury automobiles. From our atelier, we curate, authenticate, and deliver vehicles to clients across every continent.
          </p>
          <p>
            Our team — engineers, historians, and lifelong drivers — shares a single obsession: the pursuit of automotive excellence. Every car we offer carries a story, and every story is verified.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="font-display text-5xl text-primary">30+</div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Years</div>
          </div>
          <div>
            <div className="font-display text-5xl text-primary">1.2k</div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Vehicles Placed</div>
          </div>
          <div>
            <div className="font-display text-5xl text-primary">42</div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Countries</div>
          </div>
        </div>
      </section>

      <section className="mt-24 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading eyebrow="Our Values" title="What Drives Us" center />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {values.map(({ Icon, t, d }) => (
            <div key={t} className="group bg-background p-10 transition hover:bg-card">
              <div className="flex h-14 w-14 items-center justify-center bg-gradient-gold text-primary-foreground mb-6 transition group-hover:scale-110">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
