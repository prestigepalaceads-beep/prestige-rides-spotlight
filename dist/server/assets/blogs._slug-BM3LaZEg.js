import { O as useRouter, V as jsxRuntimeExports } from "./server-IVdf4eAA.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitErrorComponent = ({
  error,
  reset
}) => {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
      router.invalidate();
      reset();
    }, className: "mt-6 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary", children: "Retry" })
  ] }) });
};
export {
  SplitErrorComponent as errorComponent
};
