import { useEffect, useState } from "react";

const RTL_LANG_PREFIXES = ["ar", "he", "fa", "ur"] as const;
const ARABIC_SCRIPT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
const AUTO_DIR_ATTR = "data-auto-dir";

function readDocumentDirection(): "ltr" | "rtl" {
  if (typeof document === "undefined") return "ltr";

  const html = document.documentElement;
  const body = document.body;
  const isAutoManaged = html.getAttribute(AUTO_DIR_ATTR) === "true";
  const htmlComputedDirection = isAutoManaged ? "" : getComputedStyle(html).direction;
  const bodyComputedDirection = isAutoManaged || !body ? "" : getComputedStyle(body).direction;
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
  const hasArabicScript = ARABIC_SCRIPT_REGEX.test(body?.innerText.slice(0, 2000) || "");

  const isRtlDirection = [
    isAutoManaged ? "" : html.dir,
    isAutoManaged ? "" : html.getAttribute("dir") || "",
    isAutoManaged ? "" : body?.dir || "",
    isAutoManaged ? "" : body?.getAttribute("dir") || "",
    htmlComputedDirection,
    bodyComputedDirection,
  ].includes("rtl");

  return isRtlDirection || isRtlLanguage || hasArabicScript ? "rtl" : "ltr";
}

export function useDocumentDirection() {
  const [direction, setDirection] = useState<"ltr" | "rtl">(() => readDocumentDirection());

  useEffect(() => {
    if (typeof document === "undefined") return;

    const syncDirection = () => {
      const next = readDocumentDirection();
      document.documentElement.setAttribute("dir", next);
      document.documentElement.setAttribute(AUTO_DIR_ATTR, "true");
      if (document.body) {
        document.body.setAttribute("dir", next);
        document.body.setAttribute(AUTO_DIR_ATTR, "true");
      }

      setDirection((current) => {
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

      observer.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true,
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