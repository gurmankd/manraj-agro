"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { makeWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const href = makeWhatsAppLink(
    siteConfig.whatsapp.number,
    "Hi Manraj Agro Industries, I want to enquire about tractors / implements."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-lg transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
