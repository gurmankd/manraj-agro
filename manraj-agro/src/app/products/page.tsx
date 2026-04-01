import Link from "next/link";
import { categories, products } from "@/lib/catalog";

export default function ProductsIndexPage() {
  const stats = [
    { label: "Categories", value: String(categories.length) },
    { label: "Listed Products", value: String(products.length) },
    {
      label: "Core Focus",
      value: "John Deere + Implements",
    },
  ];

  return (
    <div className="container-shell py-10">
      <section className="rounded-[2rem] border border-[color:var(--color-brand-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,245,232,0.9))] p-8 shadow-[0_20px_50px_rgba(23,32,20,0.06)]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-full border border-[color:var(--color-brand-line)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--color-brand-deep)]">
              Product Catalog
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-4xl">
              Browse tractors, harvesters, implements, and parts
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
              Explore the full range of machinery categories available through
              Manraj Agro Industries. Start with the product type you need, then
              drill down into the specific models and machines that fit your work.
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

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white/90 p-5"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand-deep)]/70">
                  {item.label}
                </div>
                <div className="mt-3 text-lg font-extrabold text-[color:var(--color-brand-ink)] sm:text-2xl">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-2xl">
              Product Categories
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Choose a category to view models, specifications, and enquiry options.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, index) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-5 shadow-[0_12px_30px_rgba(23,32,20,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-soft)]/45"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex rounded-full bg-[color:var(--color-brand-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand-deep)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-xs font-semibold text-[color:var(--color-brand-deep)]">
                  Explore →
                </div>
              </div>

              <div className="mt-5 text-lg font-bold text-[color:var(--color-brand-ink)]">
                {c.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{c.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
