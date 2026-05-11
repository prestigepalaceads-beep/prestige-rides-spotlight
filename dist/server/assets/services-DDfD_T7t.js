import { V as jsxRuntimeExports } from "./server-IVdf4eAA.js";
import { S as SectionHeading } from "./SectionHeading-Cz8zNTSl.js";
import { S as Sparkles, a as Shield, W as Wrench } from "./wrench-FxZwSiND.js";
import { A as Award } from "./award-Cz78y1tM.js";
import { c as createLucideIcon } from "./router-0048HsZH.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./proxy-XnNF4QEk.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
const FileCheck = createLucideIcon("file-check", __iconNode$1);
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
const services = [{
  Icon: Sparkles,
  t: "Bespoke Sourcing",
  d: "Locate the rarest specifications and limited editions worldwide through our private network."
}, {
  Icon: Shield,
  t: "Armouring",
  d: "Certified ballistic conversions to B6/B7 standards without sacrificing aesthetics or comfort."
}, {
  Icon: Wrench,
  t: "Service & Maintenance",
  d: "Factory-trained technicians and OEM parts for every marque in our portfolio."
}, {
  Icon: Award,
  t: "Authentication",
  d: "Full provenance verification, documentation review, and pre-purchase inspections."
}, {
  Icon: Truck,
  t: "Global Logistics",
  d: "Discreet, fully-insured worldwide delivery in enclosed transport."
}, {
  Icon: FileCheck,
  t: "Trade-In & Consignment",
  d: "Confidential valuations and managed sales for private collections."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Services", title: "Beyond the Sale", description: "Ownership at this level deserves more than a transaction. We offer a complete suite of services designed to serve you for the lifetime of your collection.", center: true }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border", children: services.map(({
      Icon,
      t,
      d
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-background p-10 transition hover:bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center bg-gradient-gold text-primary-foreground mb-6 transition group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: d })
    ] }, t)) })
  ] });
}
export {
  ServicesPage as component
};
