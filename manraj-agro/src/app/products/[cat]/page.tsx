import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductsByCategory,
  getCategoryBySlug,
  getTractorsBySeries,
  TractorSeries,
} from "@/lib/catalog";
import { ProductCard } from "@/components/products/ProductCard";

const TRACTOR_SERIES: {
  id: TractorSeries;
  label: string;
  range: string;
  desc: string;
  badge: string;
}[] = [
  {
    id: "D Series",
    label: "D Series",
    range: "36 – 50 HP",
    desc: "Reliable and fuel-efficient. Built for everyday farm work on small to large farms.",
    badge: "10 Models",
  },
  {
    id: "E Series",
    label: "E Series",
    range: "50 – 74 HP",
    desc: "Premium PowerTech™ engines with TSS & PowerReverser options for heavy-duty use.",
    badge: "4 Models",
  },
  {
    id: "5M Series",
    label: "5M Series",
    range: "130 HP",
    desc: "India's most powerful production tractor. JDLink™ telematics & Powr8 transmission.",
    badge: "1 Model",
  },
  {
    id: "Speciality",
    label: "Speciality",
    range: "28 – 35 HP",
    desc: "Compact 4WD tractors for orchards, row crops and narrow-field applications.",
    badge: "3 Models",
  },
];

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  const category = getCategoryBySlug(cat);
  const items = getProductsByCategory(cat);

  if (!category) notFound();

  const isTractors = cat === "tractors";

  return (
    <div className="container-shell py-10">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {category.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-600">{category.subtitle}</p>
        </div>
        <Link
          href="/contact"
          className="hidden rounded-2xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-deep)] sm:inline-block"
        >
          Get Quote
        </Link>
      </div>

      {/* ── Tractors: series sub-categories + grouped listing ── */}
      {isTractors ? (
        <>
          {/* Series Cards */}
          <div className="mt-8">
            <h2 className="text-base font-bold tracking-tight text-zinc-900">
              Browse by Series
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TRACTOR_SERIES.map((s) => (
                <a
                  key={s.id}
                  href={`#series-${s.id.replace(" ", "-").toLowerCase()}`}
                  className="group flex flex-col rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-5 shadow-[0_10px_26px_rgba(23,32,20,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-soft)]/45"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-bold text-[color:var(--color-brand-ink)]">
                      John Deere {s.label}
                    </span>
                    <span className="shrink-0 rounded-full border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] px-2 py-0.5 text-[10px] font-semibold text-[color:var(--color-brand-deep)]">
                      {s.badge}
                    </span>
                  </div>
                  <span className="mt-1 text-xs font-semibold text-[color:var(--color-brand-deep)]">
                    {s.range}
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                    {s.desc}
                  </p>
                  <span className="mt-4 text-xs font-semibold text-[color:var(--color-brand-deep)] group-hover:underline">
                    View models ↓
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Tractors grouped by series */}
          {TRACTOR_SERIES.map((s) => {
            const seriesProducts = getTractorsBySeries(s.id);
            if (!seriesProducts.length) return null;
            return (
              <section
                key={s.id}
                id={`series-${s.id.replace(" ", "-").toLowerCase()}`}
                className="mt-14 scroll-mt-24"
              >
                <div className="flex items-end justify-between gap-4 border-b border-[color:var(--color-brand-line)] pb-3">
                  <div>
                    <h2 className="text-lg font-extrabold tracking-tight text-zinc-900">
                      John Deere {s.label}
                    </h2>
                    <p className="mt-0.5 text-sm text-zinc-500">
                      {s.range} · {seriesProducts.length} model
                      {seriesProducts.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {seriesProducts.map((p) => (
                    <ProductCard key={p.slug} p={p} />
                  ))}
                </div>
              </section>
            );
          })}
        </>
      ) : (
        /* All other categories — flat grid */
        <>
          {items.length === 0 ? (
            <p className="mt-10 text-sm text-zinc-500">
              No products listed yet — call us for current stock.
            </p>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
