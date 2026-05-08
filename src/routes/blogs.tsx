import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Editorial — Prestige Motors" },
      { name: "description", content: "Stories and insights from the world of exceptional automobiles." },
    ],
  }),
  component: BlogsPage,
});

const posts = [
  { img: blog1, cat: "Detailing", title: "The Art of the Showroom Finish", date: "May 02, 2026", excerpt: "How master detailers transform metal into mirrors — a study in obsession." },
  { img: blog2, cat: "Ownership", title: "Beyond the Key: A Buyer's Ritual", date: "Apr 21, 2026", excerpt: "Acquiring a flagship is never transactional. It's an inheritance of craft." },
  { img: blog3, cat: "Service", title: "Mechanical Poetry", date: "Apr 09, 2026", excerpt: "Inside the workshop where every torque setting is whispered, never barked." },
  { img: blog1, cat: "Insight", title: "Why Provenance Matters", date: "Mar 28, 2026", excerpt: "The story behind a chassis number can multiply its value — or void it." },
  { img: blog2, cat: "Lifestyle", title: "The Garage as a Gallery", date: "Mar 14, 2026", excerpt: "Designing spaces worthy of the machines they hold." },
  { img: blog3, cat: "Service", title: "Engine Whisperers", date: "Feb 28, 2026", excerpt: "Meet the technicians who tune by ear, not just by code." },
];

function BlogsPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow="Editorial" title="The Journal" description="Reflections, dispatches, and deep dives from inside the world of exceptional automobiles." center />
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((b) => (
          <article key={b.title} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-5 border border-border">
              <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-onyx/80 backdrop-blur text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30">
                {b.cat}
              </div>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{b.date}</p>
            <h3 className="font-display text-2xl mt-2 group-hover:text-primary transition">{b.title}</h3>
            <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{b.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
              Read <ArrowRight size={14} />
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
