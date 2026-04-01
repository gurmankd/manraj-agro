import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { makeWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Manraj Agro Industries, our dealership focus, service areas, and how we help farmers choose tractors, harvesters, and farm implements.",
};

const strengths = [
  "John Deere tractors and a broad range of farm implements",
  "Fast quote support on WhatsApp, phone, and in person",
  "Coverage for farmers in Uttarakhand and nearby Uttar Pradesh markets",
  "Practical guidance on matching machine size, HP, and use case",
];

const offerings = [
  "Tractors across multiple HP ranges and field applications",
  "Combine harvesters and harvesting support equipment",
  "Seed drills, rotavators, straw reapers, threshers, and levelers",
  "Agricultural parts and industrial supply items",
];

const reasons = [
  "Straightforward product guidance based on your crop, acreage, and budget",
  "Quick answers on availability, delivery timelines, and pricing",
  "A local business presence with nearby support points",
  "A practical, no-nonsense buying process for farmers and contractors",
];

export default function AboutPage() {
  const waLink = makeWhatsAppLink(
    siteConfig.whatsapp.number,
    "Hello Manraj Agro Industries, I want to know more about your dealership and products."
  );

  return (
    <div className="container-shell py-10">
      <section className="rounded-3xl border border-[color:var(--color-brand-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,245,232,0.92))] p-8 shadow-[0_20px_50px_rgba(23,32,20,0.06)] sm:p-10">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-[color:var(--color-brand-line)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--color-brand-deep)]">
            About Us
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-4xl">
            Built around practical farm machinery needs
          </h1>
          <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">
            {siteConfig.name} is a dealership and supply business serving farmers,
            contractors, and equipment buyers looking for dependable tractors,
            harvesters, implements, and parts. We focus on helping customers move
            from enquiry to the right machine quickly, with clear guidance on fit,
            availability, and next steps.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--color-brand-deep)]"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/products"
              className="rounded-2xl border border-[color:var(--color-brand-line)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-brand-ink)] hover:bg-[color:var(--color-brand-soft)]"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {strengths.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-5 shadow-[0_12px_30px_rgba(23,32,20,0.04)]"
          >
            <div className="text-sm font-semibold text-[color:var(--color-brand-ink)]">
              {item}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-6 shadow-[0_12px_30px_rgba(23,32,20,0.04)] sm:p-8">
          <h2 className="text-xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-2xl">
            What We Do
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            We help customers compare options across tractors and implements,
            understand which machine suits their workload, and get a quick quote
            without a long back-and-forth. The goal is simple: make it easier to
            choose the right equipment for the field conditions you actually work in.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {offerings.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] px-4 py-4 text-sm font-medium text-zinc-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-6 shadow-[0_12px_30px_rgba(23,32,20,0.04)] sm:p-8">
          <h2 className="text-xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)]">
            Business Info
          </h2>

          <div className="mt-5 space-y-4 text-sm text-zinc-600">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-brand-deep)]/60">
                Name
              </div>
              <div className="mt-1 font-semibold text-[color:var(--color-brand-ink)]">
                {siteConfig.name}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-brand-deep)]/60">
                GST
              </div>
              <div className="mt-1 font-medium text-[color:var(--color-brand-ink)]">
                {siteConfig.gst}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-brand-deep)]/60">
                Service Areas
              </div>
              <div className="mt-1 space-y-1">
                {siteConfig.locations.map((location) => (
                  <div key={location}>{location}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-brand-deep)]/60">
                Contact
              </div>
              <div className="mt-1 space-y-1">
                {siteConfig.phones.map((phone) => (
                  <div key={phone}>{phone}</div>
                ))}
                <div>{siteConfig.email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-[color:var(--color-brand-line)] bg-[linear-gradient(180deg,var(--color-brand-deep),#173617)] p-6 text-white sm:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-brand-gold)]">
            Why Customers Reach Out
          </div>
          <div className="mt-4 space-y-3">
            {reasons.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-6 shadow-[0_12px_30px_rgba(23,32,20,0.04)] sm:p-8">
          <h2 className="text-xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-2xl">
            Start with a quick enquiry
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
            If you already know the model you need, we can help with price and
            availability. If you are still comparing options, share your crop,
            acreage, and the kind of work you need the machine to handle, and we
            can guide you toward a better fit.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--color-brand-deep)]"
            >
              Get Quote
            </Link>
            <Link
              href="/locations"
              className="rounded-2xl border border-[color:var(--color-brand-line)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-brand-ink)] hover:bg-[color:var(--color-brand-soft)]"
            >
              View Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
