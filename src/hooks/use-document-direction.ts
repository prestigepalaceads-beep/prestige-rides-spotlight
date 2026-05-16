import { useEffect, useState } from "react";

const RTL_LANG_PREFIXES = ["ar", "he", "fa", "ur"] as const;

function readDocumentDirection(): "ltr" | "rtl" {
  if (typeof document === "undefined") return "ltr";

  const html = document.documentElement;
  const body = document.body;
  const htmlComputedDirection = getComputedStyle(html).direction;
  const bodyComputedDirection = body ? getComputedStyle(body).direction : "";
  const languageCandidates = [
    html.lang,
    html.getAttribute("lang") || "",
    body?.lang || "",
    body?.getAttribute("lang") || "",
    typeof navigator !== "undefined" ? navigator.language : "",
  ].map((value) => value.toLowerCase());

  const isRtlLanguage = languageCandidates.some((value) =>
    RTL_LANG_PREFIXES.some((prefix) => value.startsWith(prefix)),
  );

  const isRtlDirection = [
    html.dir,
    html.getAttribute("dir") || "",
    body?.dir || "",
    body?.getAttribute("dir") || "",
    htmlComputedDirection,
    bodyComputedDirection,
  ].includes("rtl");

  return isRtlDirection || isRtlLanguage ? "rtl" : "ltr";
}

export function useDocumentDirection() {
  const [direction, setDirection] = useState<"ltr" | "rtl">(() => readDocumentDirection());

  useEffect(() => {
    if (typeof document === "undefined") return;

    const syncDirection = () => {
      setDirection((current) => {
        const next = readDocumentDirection();
        return current === next ? current : next;
      });
    };

    syncDirection();

    const observer = new MutationObserver(syncDirection);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir", "lang", "class", "style"],
    });

    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["dir", "lang", "class", "style"],
      });
    }

    const settleWindow = window.setInterval(syncDirection, 250);
    const stopSettling = window.setTimeout(() => window.clearInterval(settleWindow), 4000);

    window.addEventListener("languagechange", syncDirection);
    document.addEventListener("visibilitychange", syncDirection);

    return () => {
      observer.disconnect();
      window.clearInterval(settleWindow);
      window.clearTimeout(stopSettling);
      window.removeEventListener("languagechange", syncDirection);
      document.removeEventListener("visibilitychange", syncDirection);
    };
  }, []);

  return direction;
}