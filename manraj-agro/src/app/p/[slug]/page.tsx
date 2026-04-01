import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getCategoryBySlug, getTractorsBySeries } from "@/lib/catalog";
import { QuoteCTA } from "@/components/quote/QuoteCTA";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  const category = getCategoryBySlug(p.category);

  // Related: other products in the same series (tractors) or same category
  const related = p.series
    ? getTractorsBySeries(p.series).filter((r) => r.slug !== p.slug).slice(0, 3)
    : [];

  return (
    <div className="container-shell py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs text-zinc-500">
        <Link href="/products" className="hover:underline">Products</Link>
        <span>/</span>
        <Link href={`/products/${p.category}`} className="hover:underline">
          {category?.title ?? p.category}
        </Link>
        {p.series && (
          <>
            <span>/</span>
            <Link
              href={`/products/${p.category}#series-${p.series.replace(" ", "-").toLowerCase()}`}
              className="hover:underline"
            >
              {p.series}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-zinc-800 font-medium">{p.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left — image */}
        <div>
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl border border-[color:var(--color-brand-line)] bg-[linear-gradient(180deg,rgba(237,245,232,0.8),rgba(255,255,255,0.96))]">
            {p.image ? (
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                priority
              />
            ) : (
              <span className="text-8xl select-none">🚜</span>
            )}
          </div>

          {/* Source link for tractors */}
          {p.deereUrl && (
            <p className="mt-3 text-center text-xs text-zinc-400">
              Official model info:{" "}
              <a
                href={p.deereUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-700"
              >
                deere.co.in
              </a>
            </p>
          )}
        </div>

        {/* Right — details */}
        <div>
          {/* Series badge */}
          {p.series && (
            <span className="inline-block rounded-full border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-brand-deep)]">
              John Deere {p.series}
            </span>
          )}

          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {p.title}
          </h1>

          {p.brand && (
            <p className="mt-1 text-sm text-zinc-500">
              Brand: <span className="font-medium text-zinc-800">{p.brand}</span>
            </p>
          )}

          {p.description && (
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              {p.description}
            </p>
          )}

          {/* Highlights */}
          {p.highlights?.length ? (
            <div className="mt-6">
              <h2 className="text-sm font-bold text-zinc-900">Key Highlights</h2>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {p.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 rounded-2xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] px-3 py-2 text-xs text-zinc-700"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Quote / CTA box */}
          <div className="mt-6 rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-5 shadow-[0_12px_30px_rgba(23,32,20,0.04)]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="text-base font-bold text-zinc-900">
                  {p.price ?? "Get latest price"}
                </div>
                <p className="mt-0.5 text-xs text-zinc-500">
                  Price may vary by variant &amp; location. Request a callback for exact quote.
                </p>
              </div>
              <span className="rounded-full border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-brand-deep)]">
                In Stock
              </span>
            </div>
            <div className="mt-4">
              <QuoteCTA productTitle={p.title} />
            </div>
          </div>

          {/* Specs table */}
          {p.specs?.length ? (
            <div className="mt-8">
              <h2 className="text-sm font-bold text-zinc-900">Specifications</h2>
              <div className="mt-3 overflow-hidden rounded-3xl border border-[color:var(--color-brand-line)]">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {p.specs.map((s, idx) => (
                      <tr
                        key={idx}
                        className={
                          idx % 2 === 0 ? "bg-white" : "bg-[color:var(--color-brand-soft)]/65"
                        }
                      >
                        <td className="w-2/5 px-4 py-3 font-medium text-zinc-700">
                          {s.k}
                        </td>
                        <td className="px-4 py-3 text-zinc-900 font-semibold">
                          {s.v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Related models */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-lg font-extrabold tracking-tight text-zinc-900">
            Other {p.series} Models
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/p/${r.slug}`}
                className="group flex items-center gap-4 rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-4 transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-soft)]/45"
              >
                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl bg-[color:var(--color-brand-soft)]">
                  {r.image ? (
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-contain p-1"
                      unoptimized
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center text-2xl">🚜</span>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-zinc-900 leading-tight">{r.title}</div>
                  <div className="mt-0.5 text-xs text-zinc-500">{r.highlights[0]}</div>
                </div>
                <span className="ml-auto text-xs text-zinc-400 group-hover:text-zinc-700">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
