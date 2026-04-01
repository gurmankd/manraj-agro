"use client";

import { siteConfig } from "@/lib/site";
import { makeWhatsAppLink } from "@/lib/whatsapp";

export function QuoteForm() {
  return (
    <div className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-6 shadow-[0_18px_40px_rgba(23,32,20,0.06)]">
      <div className="text-lg font-bold text-[color:var(--color-brand-ink)]">
        Request a Quote
      </div>
      <p className="mt-2 text-sm text-slate-600">
        This form opens WhatsApp with your message (no backend needed).
      </p>

      <form
        className="mt-6 grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);

          const name = (data.get("name") as string) || "";
          const phone = (data.get("phone") as string) || "";
          const location = (data.get("location") as string) || "";
          const product = (data.get("product") as string) || "";
          const message = (data.get("message") as string) || "";

          const composed = [
            `Hello ${siteConfig.name}, I want a quote.`,
            name ? `Name: ${name}` : null,
            phone ? `Phone: ${phone}` : null,
            location ? `Location: ${location}` : null,
            product ? `Product/Model: ${product}` : null,
            message ? `Requirement: ${message}` : null,
          ]
            .filter(Boolean)
            .join("\n");

          const url = makeWhatsAppLink(siteConfig.whatsapp.number, composed);
          window.open(url, "_blank", "noopener,noreferrer");
        }}
      >
        <div className="grid gap-2">
          <label className="text-sm font-semibold">Your Name</label>
          <input
            name="name"
            className="rounded-xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)]/45 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/30"
            placeholder="e.g., Gurpreet Singh"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold">Phone Number</label>
          <input
            name="phone"
            className="rounded-xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)]/45 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/30"
            placeholder="e.g., 98XXXXXXXX"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold">Location</label>
          <input
            name="location"
            className="rounded-xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)]/45 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/30"
            placeholder="e.g., Rampur / Gadarpur / nearby"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold">Product / Model</label>
          <input
            name="product"
            className="rounded-xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)]/45 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/30"
            placeholder="e.g., John Deere 5050D / Super Seeder"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold">Requirement</label>
          <textarea
            name="message"
            rows={4}
            className="rounded-xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)]/45 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/30"
            placeholder="Tell us HP range, crop type, acres, implement needs, finance/subsidy, delivery timeline..."
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--color-brand-deep)]"
        >
          Send on WhatsApp
        </button>

        <p className="text-xs text-slate-500">
          Tip: WhatsApp gets the fastest response.
        </p>
      </form>
    </div>
  );
}
