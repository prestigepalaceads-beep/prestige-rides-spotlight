import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/data/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Editorial — Prestige Motors" },
      { name: "description", content: "Stories and insights from the world of exceptional automobiles." },
      { property: "og:title", content: "Editorial — Prestige Motors" },
      { property: "og:description", content: "Stories and insights from the world of exceptional automobiles." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow="Editorial" title="The Journal" description="Reflections, dispatches, and deep dives from inside the world of exceptional automobiles." center />
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((b) => (
          <Link
            key={b.slug}
            to="/blogs/$slug"
            params={{ slug: b.slug }}
            className="group block"
          >
            <article>
              <div className="relative aspect-[4/3] overflow-hidden mb-5 border border-border rounded-2xl">
                <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-onyx/80 backdrop-blur text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
