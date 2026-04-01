"use client";

import { Container } from "@/components/ui/container";
import { QuoteForm } from "@/components/site/quote-form";
import { siteConfig } from "@/lib/site";
import { makeWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  const waLink = makeWhatsAppLink(
    siteConfig.whatsapp.number,
    siteConfig.whatsapp.defaultMessage
  );

  return (
    <div className="py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full border border-[color:var(--color-brand-line)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--color-brand-deep)]">
              Contact Us
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)]">
              Contact & Get Quote
            </h1>
            <p className="mt-3 max-w-xl text-slate-600">
              Tell us what you need (model / HP / implement / location). We’ll
              reply with availability, pricing, and delivery timeline.
            </p>

            <div className="mt-6 space-y-3 rounded-3xl border border-[color:var(--color-brand-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,245,232,0.88))] p-6 shadow-[0_18px_40px_rgba(23,32,20,0.06)]">
              <div className="text-sm font-semibold text-[color:var(--color-brand-deep)]">
                Business
              </div>
              <div className="text-lg font-bold text-[color:var(--color-brand-ink)]">
                {siteConfig.name}
              </div>
              <div className="text-sm text-slate-600">
                GST: <span className="font-medium">{siteConfig.gst}</span>
              </div>

              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="rounded-xl bg-brand px-4 py-3 font-semibold text-white shadow-sm hover:bg-[color:var(--color-brand-deep)]"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us (Fastest)
                </a>

                <a
                  className="rounded-xl border border-[color:var(--color-brand-line)] bg-white px-4 py-3 font-semibold text-[color:var(--color-brand-ink)] hover:bg-[color:var(--color-brand-soft)]"
                  href={`tel:${siteConfig.phone}`}
                >
                  Call: {siteConfig.phone}
                </a>

                <a
                  className="rounded-xl border border-[color:var(--color-brand-line)] bg-white px-4 py-3 font-semibold text-[color:var(--color-brand-ink)] hover:bg-[color:var(--color-brand-soft)]"
                  href={`mailto:${siteConfig.email}`}
                >
                  Email: {siteConfig.email}
                </a>
              </div>

              <div className="mt-4 text-sm font-semibold text-[color:var(--color-brand-ink)]">
                Locations
              </div>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {siteConfig.locations.map((loc) => (
                  <li key={loc}>• {loc}</li>
                ))}
              </ul>
            </div>
          </div>

          <QuoteForm />
        </div>
      </Container>
    </div>
  );
}
