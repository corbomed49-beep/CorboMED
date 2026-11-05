"use client";

import { useEffect } from "react";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com", "web.whatsapp.com"];

export default function WhatsAppClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      let url: URL;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }
      if (!WHATSAPP_HOSTS.includes(url.hostname)) return;

      const w = window as DataLayerWindow;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "whatsapp_click",
        whatsapp_link_url: link.href,
        whatsapp_link_text: (link.getAttribute("aria-label") || link.textContent || "").trim(),
        whatsapp_page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
