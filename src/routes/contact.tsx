import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteMap } from "@/components/SiteMap";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prestige Motors" },
      { name: "description", content: "Visit our flagship showroom or schedule a private consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow="Contact Us" title="At Your Service" description="Visit our flagship showroom, or arrange a private viewing — wherever you are." center />
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          {[
            { Icon: MapPin, t: "Showroom", d: "Sheikh Zayed Road, Dubai\nUnited Arab Emirates" },
            { Icon: Phone, t: "Phone", d: "+971 4 000 0000\n+971 50 000 0000" },
            { Icon: Mail, t: "Email", d: "info@prestigemotors.ae\nsales@prestigemotors.ae" },
            { Icon: Clock, t: "Hours", d: "Mon — Sat: 09:00 — 21:00\nSunday: By appointment" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex gap-5 border-l border-primary/40 pl-6">
              <Icon className="text-primary shrink-0 mt-1" size={22} />
              <div>
                <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-2">{t}</h4>
                <p className="font-display text-xl whitespace-pre-line leading-tight">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="space-y-6 bg-card p-8 md:p-12 border border-border">
          <div>
            <label className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Full Name</label>
            <input type="text" className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Email</label>
              <input type="email" className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition" />
            </div>
            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Phone</label>
              <input type="tel" className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition" />
            </div>
          </div>
          <div>
            <label className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Vehicle of Interest</label>
            <input type="text" className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition" />
          </div>
          <div>
            <label className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Message</label>
            <textarea rows={5} className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition resize-none" />
          </div>
          <button type="submit" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-all">
            Send Inquiry <ArrowRight size={16} />
          </button>
        </form>
      </div>

      <section className="mt-24 mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeading eyebrow="Find Us" title="Our Location" center />
        <div className="mt-10">
          <SiteMap className="h-[420px] md:h-[520px]" />
        </div>
      </section>
    </div>
  );
}
