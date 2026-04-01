import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { qTestimonials } from "@/lib/sanity/queries";
import { testimonials as fallbackTestimonials } from "@/lib/catalog";

export const revalidate = 3600;

function Stars({ n }: { n?: number }) {
  const rating = Math.max(0, Math.min(5, Number(n ?? 0)));
  return (
    <div className="text-xs text-[color:var(--color-brand-deep)]">
      {"★".repeat(rating)}
      <span className="text-[color:var(--color-brand-line)]">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

type TestimonialItem = {
  _id: string;
  name: string;
  place?: string;
  quote?: string;
  rating?: number;
  product?: {
    title: string;
    slug: string;
  };
};

export default async function TestimonialsPage() {
  const sanityItems = await sanityClient.fetch<TestimonialItem[]>(qTestimonials);
  const items =
    sanityItems.length > 0
      ? sanityItems
      : fallbackTestimonials.map((t) => ({
          _id: t.id,
          name: t.name,
          place: t.location,
          quote: t.body,
          rating: t.rating,
        }));

  return (
    <div className="container-shell py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="inline-flex rounded-full border border-[color:var(--color-brand-line)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--color-brand-deep)]">
            Customer Feedback
          </div>
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-3xl">
            Testimonials
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            What customers say about Manraj Agro Industries.
          </p>
        </div>

        <Link
          href="/products"
          className="hidden rounded-2xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--color-brand-deep)] sm:inline-block"
        >
          Browse Products
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <div
            key={t._id}
            className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-5 shadow-[0_12px_30px_rgba(23,32,20,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-soft)]/35"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-[color:var(--color-brand-ink)]">
                  {t.name}
                </div>
                {t.place ? (
                  <div className="mt-1 text-xs text-zinc-600">{t.place}</div>
                ) : null}
              </div>
              {t.rating ? <Stars n={t.rating} /> : null}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-700">“{t.quote}”</p>

            {t.product?.title ? (
              <Link
                href={`/p/${t.product.slug}`}
                className="mt-4 inline-block text-xs font-semibold text-[color:var(--color-brand-deep)] underline"
              >
                Related: {t.product.title}
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
