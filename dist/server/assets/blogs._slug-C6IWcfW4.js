import { V as jsxRuntimeExports } from "./server-IVdf4eAA.js";
import { c as createLucideIcon, f as Route, d as blogPosts, L as Link } from "./router-0048HsZH.js";
import { A as ArrowLeft } from "./arrow-left-C5a_ZthT.js";
import { C as Calendar } from "./calendar-DsXTtnlt.js";
import { C as Clock } from "./clock-Bz6LCMI6.js";
import { A as ArrowRight } from "./arrow-right-PW39bq01.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function BlogDetail() {
  const {
    post
  } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60vh] min-h-[420px] w-full overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.img, alt: post.title, className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[900px] px-6 lg:px-10 -mt-40 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blogs", className: "inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary mb-6 hover:gap-3 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
          " The Journal"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1.5 bg-onyx/80 backdrop-blur border border-primary/30 text-[10px] tracking-[0.3em] uppercase text-primary rounded-full", children: post.cat }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl leading-[1.05] mt-6", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-foreground/75 leading-relaxed", children: post.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-6 text-xs tracking-[0.25em] uppercase text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14, className: "text-primary" }),
            post.author
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14, className: "text-primary" }),
            post.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-primary" }),
            post.readTime
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[760px] px-6 lg:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-7 text-base md:text-lg leading-[1.85] text-foreground/85", children: post.body.map((paragraph, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-primary" : "", children: paragraph }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-line my-16 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blogs", className: "inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
          " All Stories"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-3 px-6 py-3 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-all rounded-full", children: [
          "Contact Us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-onyx py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.5em] uppercase text-primary", children: "More from the Journal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: related.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blogs/$slug", params: {
        slug: b.slug
      }, className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden mb-5 border border-border rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.img, alt: b.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground", children: b.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-2 group-hover:text-primary transition", children: b.title })
      ] }, b.slug)) })
    ] }) })
  ] });
}
export {
  BlogDetail as component
};
