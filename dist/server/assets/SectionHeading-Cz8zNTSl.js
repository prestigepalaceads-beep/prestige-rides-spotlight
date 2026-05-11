import { V as jsxRuntimeExports } from "./server-IVdf4eAA.js";
import { m as motion } from "./proxy-XnNF4QEk.js";
function SectionHeading({ eyebrow, title, description, center }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.7 },
      className: `max-w-2xl ${center ? "mx-auto text-center" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-4 mb-4 ${center ? "justify-center" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.5em] uppercase text-primary", children: eyebrow }),
          center && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl font-medium leading-[1.05]", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/70 leading-relaxed", children: description })
      ]
    }
  );
}
export {
  SectionHeading as S
};
