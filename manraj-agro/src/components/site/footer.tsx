import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-brand-line)] bg-[linear-gradient(180deg,#f8faf6,#eef3e8)]">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="inline-flex rounded-full border border-[color:var(--color-brand-line)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--color-brand-deep)]">
              Manraj Agro Industries
            </div>
            <div className="mt-4 max-w-sm text-2xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)]">
              Agricultural machinery dealership with a practical local approach
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              Dealership and supplier of tractors, harvesters, farm implements,
              and parts for customers across Uttarakhand and nearby Uttar Pradesh.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              GST: <span className="font-medium">{siteConfig.gst}</span>
            </p>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand-deep)]/75">
              Quick Links
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-[color:var(--color-brand-ink)] transition hover:text-[color:var(--color-brand-deep)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand-deep)]/75">
              Locations
            </div>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl border border-[color:var(--color-brand-line)] bg-white/80 p-4">
                <div className="font-semibold text-[color:var(--color-brand-ink)]">
                  Gadarpur
                </div>
                <div className="mt-1 leading-6">
                  Udham Singh Nagar
                  <br />
                  Uttarakhand
                </div>
              </div>
              <div className="rounded-2xl border border-[color:var(--color-brand-line)] bg-white/80 p-4">
                <div className="font-semibold text-[color:var(--color-brand-ink)]">
                  Rampur
                </div>
                <div className="mt-1 leading-6">Uttar Pradesh</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand-deep)]/75">
              Contact
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="block rounded-2xl border border-[color:var(--color-brand-line)] bg-white/80 px-4 py-3 font-medium text-[color:var(--color-brand-ink)] transition hover:bg-[color:var(--color-brand-soft)]"
                >
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                className="block rounded-2xl border border-[color:var(--color-brand-line)] bg-white/80 px-4 py-3 font-medium text-[color:var(--color-brand-ink)] transition hover:bg-[color:var(--color-brand-soft)]"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[color:var(--color-brand-line)] py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Manraj Agro Industries. All rights reserved.
          </div>
          <div>Serving Gadarpur, Rampur, and nearby agricultural markets.</div>
        </div>
      </Container>
    </footer>
  );
}
