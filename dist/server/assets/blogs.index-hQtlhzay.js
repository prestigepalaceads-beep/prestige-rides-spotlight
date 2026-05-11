import { V as jsxRuntimeExports } from "./server-IVdf4eAA.js";
import { d as blogPosts, L as Link } from "./router-0048HsZH.js";
import { S as SectionHeading } from "./SectionHeading-Cz8zNTSl.js";
import { A as ArrowRight } from "./arrow-right-PW39bq01.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./proxy-XnNF4QEk.js";
function BlogsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Editorial", title: "The Journal", description: "Reflections, dispatches, and deep dives from inside the world of exceptional automobiles.", center: true }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogPosts.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blogs/$slug", params: {
      slug: b.slug
    }, className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden mb-5 border border-border rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.img, alt: b.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 px-3 py-1.5 bg-onyx/80 backdrop-blur text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full", children: b.cat })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground", children: b.date }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mt-2 group-hover:text-primary transition", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/65 leading-relaxed", children: b.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary", children: [
        "Read ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] })
    ] }) }, b.slug)) })
  ] });
}
export {
  BlogsPage as component
};
