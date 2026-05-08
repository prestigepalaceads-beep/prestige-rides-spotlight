import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts, getBlogBySlug } from "@/data/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getBlogBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article — Prestige Motors" }] };
    return {
      meta: [
        { title: `${post.title} — Prestige Motors` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.img },
        { property: "twitter:image", content: post.img },
      ],
    };
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-sm text-muted-foreground">{error.message}</p>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary"
          >
            Retry
          </button>
        </div>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">404</p>
        <h1 className="font-display text-4xl">Article not found</h1>
        <Link to="/blogs" className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
          <ArrowLeft size={14} /> Back to Journal
        </Link>
      </div>
    </div>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="pt-28">
      {/* Hero */}
      <header className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <img src={post.img} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="mx-auto max-w-[900px] px-6 lg:px-10 -mt-40 relative">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={14} /> The Journal
          </Link>
          <span className="inline-block px-3 py-1.5 bg-onyx/80 backdrop-blur border border-primary/30 text-[10px] tracking-[0.3em] uppercase text-primary rounded-full">
            {post.cat}
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mt-6">{post.title}</h1>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">{post.excerpt}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs tracking-[0.25em] uppercase text-muted-foreground">
            <span className="inline-flex items-center gap-2"><User size={14} className="text-primary" />{post.author}</span>
            <span className="inline-flex items-center gap-2"><Calendar size={14} className="text-primary" />{post.date}</span>
            <span className="inline-flex items-center gap-2"><Clock size={14} className="text-primary" />{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-[760px] px-6 lg:px-10 py-20 md:py-28">
        <div className="space-y-7 text-base md:text-lg leading-[1.85] text-foreground/85">
          {post.body.map((paragraph: string, i: number) => (
            <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-primary" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="gold-line my-16 opacity-30" />

        <div className="flex items-center justify-between gap-4">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
            <ArrowLeft size={14} /> All Stories
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-all rounded-full">
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="bg-onyx py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs tracking-[0.5em] uppercase text-primary">More from the Journal</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((b) => (
              <Link
                key={b.slug}
                to="/blogs/$slug"
                params={{ slug: b.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5 border border-border rounded-2xl">
                  <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{b.date}</p>
                <h3 className="font-display text-xl mt-2 group-hover:text-primary transition">{b.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
