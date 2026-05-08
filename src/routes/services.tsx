import { createFileRoute } from "@tanstack/react-router";
import { Shield, Wrench, Sparkles, Award, Truck, FileCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prestige Motors" },
      { name: "description", content: "Bespoke services for the most discerning collectors — from sourcing to armouring." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { Icon: Sparkles, t: "Bespoke Sourcing", d: "Locate the rarest specifications and limited editions worldwide through our private network." },
  { Icon: Shield, t: "Armouring", d: "Certified ballistic conversions to B6/B7 standards without sacrificing aesthetics or comfort." },
  { Icon: Wrench, t: "Service & Maintenance", d: "Factory-trained technicians and OEM parts for every marque in our portfolio." },
  { Icon: Award, t: "Authentication", d: "Full provenance verification, documentation review, and pre-purchase inspections." },
  { Icon: Truck, t: "Global Logistics", d: "Discreet, fully-insured worldwide delivery in enclosed transport." },
  { Icon: FileCheck, t: "Trade-In & Consignment", d: "Confidential valuations and managed sales for private collections." },
];

function ServicesPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow="Services" title="Beyond the Sale" description="Ownership at this level deserves more than a transaction. We offer a complete suite of services designed to serve you for the lifetime of your collection." center />
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map(({ Icon, t, d }) => (
          <div key={t} className="group bg-background p-10 transition hover:bg-card">
            <div className="flex h-14 w-14 items-center justify-center bg-gradient-gold text-primary-foreground mb-6 transition group-hover:scale-110">
              <Icon size={22} />
            </div>
            <h3 className="font-display text-2xl">{t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
