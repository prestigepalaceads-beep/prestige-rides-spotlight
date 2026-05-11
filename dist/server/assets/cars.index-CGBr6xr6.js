import { r as reactExports, V as jsxRuntimeExports } from "./server-IVdf4eAA.js";
import { c as createLucideIcon, b as cars, e as brands, X, L as Link } from "./router-0048HsZH.js";
import { S as SectionHeading } from "./SectionHeading-Cz8zNTSl.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./proxy-XnNF4QEk.js";
const __iconNode = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const PRICE_MIN = 0;
const PRICE_MAX = 3e6;
function CarsPage() {
  const [brand, setBrand] = reactExports.useState("All");
  const [status, setStatus] = reactExports.useState("All");
  const [category, setCategory] = reactExports.useState("All");
  const [maxPrice, setMaxPrice] = reactExports.useState(PRICE_MAX);
  const [minPrice, setMinPrice] = reactExports.useState(PRICE_MIN);
  const [openMobile, setOpenMobile] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => cars.filter((c) => (brand === "All" || c.brand === brand) && (status === "All" || c.status === status) && (category === "All" || c.category === category) && c.priceAED >= minPrice && c.priceAED <= maxPrice), [brand, status, category, minPrice, maxPrice]);
  const reset = () => {
    setBrand("All");
    setStatus("All");
    setCategory("All");
    setMinPrice(PRICE_MIN);
    setMaxPrice(PRICE_MAX);
  };
  const Filters = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-primary mb-4", children: "Brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: brand, onChange: (e) => setBrand(e.target.value), className: "w-full bg-transparent border border-border py-2.5 px-3 text-sm focus:border-primary outline-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Brands" }),
        brands.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b, children: b }, b))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-primary mb-4", children: "Condition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["All", "New", "Used"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus(s), className: `py-2 text-[11px] tracking-[0.25em] uppercase border transition ${status === s ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground/70 hover:border-primary/50"}`, children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-primary mb-4", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["All", "Normal", "Armoured"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCategory(s), className: `py-2 text-[11px] tracking-[0.25em] uppercase border transition ${category === s ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground/70 hover:border-primary/50"}`, children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-primary mb-4", children: "Price Range (AED)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-[0.3em] uppercase text-muted-foreground", children: [
            "Min: ",
            minPrice.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: PRICE_MIN, max: PRICE_MAX, step: 5e4, value: minPrice, onChange: (e) => setMinPrice(Math.min(Number(e.target.value), maxPrice)), className: "w-full accent-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-[0.3em] uppercase text-muted-foreground", children: [
            "Max: ",
            maxPrice.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: PRICE_MIN, max: PRICE_MAX, step: 5e4, value: maxPrice, onChange: (e) => setMaxPrice(Math.max(Number(e.target.value), minPrice)), className: "w-full accent-primary" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "w-full py-3 border border-border text-xs tracking-[0.3em] uppercase text-foreground/70 hover:border-primary hover:text-primary transition", children: "Reset Filters" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "The Collection", title: "Every Vehicle, Curated", description: "A complete view of our active inventory — performance icons, luxury flagships, and armoured masterpieces.", center: true }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-10 pb-32 grid lg:grid-cols-[280px_1fr] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          filtered.length,
          " results"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenMobile(true), className: "inline-flex items-center gap-2 px-4 py-2 border border-border text-xs tracking-[0.3em] uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 14 }),
          " Filters"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:block sticky top-28 self-start border border-border p-6 bg-card/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-6", children: "Filters" }),
        Filters
      ] }),
      openMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-onyx/80", onClick: () => setOpenMobile(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background border-l border-border p-6 overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: "Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpenMobile(false), "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) })
          ] }),
          Filters
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center justify-between mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Showing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: filtered.length }),
          " of ",
          cars.length
        ] }) }),
        filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border p-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl mb-2", children: "No vehicles match your criteria" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Try adjusting or resetting your filters." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 xl:grid-cols-3 gap-6", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cars/$slug", params: {
          slug: c.slug
        }, className: "group bg-card border border-border overflow-hidden rounded-2xl hover:border-primary/60 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 bg-onyx/80 backdrop-blur text-[9px] tracking-[0.3em] uppercase text-primary border border-primary/30", children: c.status }),
              c.category === "Armoured" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 bg-onyx/80 backdrop-blur text-[9px] tracking-[0.3em] uppercase text-primary border border-primary/30", children: "Armoured" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: c.brand }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mt-2 leading-tight", children: c.title.replace(`${c.brand} `, "") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: c.spec }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-lg text-gradient-gold", children: c.priceLabel })
          ] })
        ] }, c.slug)) })
      ] })
    ] })
  ] });
}
export {
  CarsPage as component
};
