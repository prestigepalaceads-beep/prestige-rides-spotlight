import { V as jsxRuntimeExports } from "./server-IVdf4eAA.js";
import { S as SectionHeading } from "./SectionHeading-Cz8zNTSl.js";
import { M as MapPin, P as Phone, a as Mail } from "./router-0048HsZH.js";
import { C as Clock } from "./clock-Bz6LCMI6.js";
import { A as ArrowRight } from "./arrow-right-PW39bq01.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./proxy-XnNF4QEk.js";
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Contact Us", title: "At Your Service", description: "Visit our flagship showroom, or arrange a private viewing — wherever you are.", center: true }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: [{
        Icon: MapPin,
        t: "Showroom",
        d: "Sheikh Zayed Road, Dubai\nUnited Arab Emirates"
      }, {
        Icon: Phone,
        t: "Phone",
        d: "+971 4 000 0000\n+971 50 000 0000"
      }, {
        Icon: Mail,
        t: "Email",
        d: "info@prestigemotors.ae\nsales@prestigemotors.ae"
      }, {
        Icon: Clock,
        t: "Hours",
        d: "Mon — Sat: 09:00 — 21:00\nSunday: By appointment"
      }].map(({
        Icon,
        t,
        d
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 border-l border-primary/40 pl-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-primary shrink-0 mt-1", size: 22 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs tracking-[0.3em] uppercase text-primary mb-2", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl whitespace-pre-line leading-tight", children: d })
        ] })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6 bg-card p-8 md:p-12 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: "mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", className: "mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground", children: "Vehicle of Interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "mt-2 w-full bg-transparent border-b border-border py-2 focus:border-primary focus:outline-none transition resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-all", children: [
          "Send Inquiry ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
