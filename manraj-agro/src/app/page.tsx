import Link from "next/link";
import { categories, getFeaturedProducts } from "@/lib/catalog";
import { ProductCard } from "@/components/products/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const featuredCategories = categories.slice(0, 4);

  return (
    <div>
      <section className="container-shell py-12">
        <div className="grid gap-8 rounded-[2rem] border border-[color:var(--color-brand-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,245,232,0.92))] p-8 shadow-[0_20px_50px_rgba(23,32,20,0.06)] lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="inline-flex rounded-full border border-[color:var(--color-brand-line)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--color-brand-deep)]">
              John Deere Inspired Dealership
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-5xl">
              Tractors, Harvesters &amp; Farm Implements for real field work
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
              Explore John Deere tractors, harvesters, seed drills, rotavators,
              threshers, and more. We help farmers and contractors get clear
              quotes, practical guidance, and fast responses.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-[color:var(--color-brand-deep)]">
              <span className="rounded-full bg-[color:var(--color-brand-soft)] px-3 py-1">
                Trusted machinery guidance
              </span>
              <span className="rounded-full bg-[color:var(--color-brand-soft)] px-3 py-1">
                Quick quotes
              </span>
              <span className="rounded-full bg-[color:var(--color-brand-soft)] px-3 py-1">
                Uttarakhand &amp; UP support
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--color-brand-deep)]"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-[color:var(--color-brand-line)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-brand-ink)] hover:bg-[color:var(--color-brand-soft)]"
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { label: "Featured Machines", value: String(featured.length) },
              { label: "Product Categories", value: String(categories.length) },
              { label: "Service Regions", value: "2" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white/90 p-5"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand-deep)]/70">
                  {item.label}
                </div>
                <div className="mt-3 text-3xl font-extrabold text-[color:var(--color-brand-ink)]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-2xl">
              Browse by Category
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Start with the kind of machine you need, then narrow down models.
            </p>
          </div>

          <Link
            href="/products"
            className="text-sm font-semibold text-[color:var(--color-brand-deep)] hover:underline"
          >
            Full catalog →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-5 shadow-[0_12px_30px_rgba(23,32,20,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-soft)]/35"
            >
              <div className="inline-flex rounded-full bg-[color:var(--color-brand-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand-deep)]">
                Category
              </div>
              <div className="mt-4 text-base font-bold text-[color:var(--color-brand-ink)]">
                {category.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {category.subtitle}
              </p>
              <div className="mt-4 text-xs font-semibold text-[color:var(--color-brand-deep)]">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-shell pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-2xl">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Popular machines and implements.
            </p>
          </div>

          <Link
            href="/products"
            className="text-sm font-semibold text-[color:var(--color-brand-deep)] hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
