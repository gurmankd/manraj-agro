import Link from "next/link";
import { getFeaturedProducts, testimonials } from "@/lib/catalog";
import { ProductCard } from "@/components/products/ProductCard";
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel";

// Map catalog shape → carousel shape
const carouselTestimonials = testimonials.map((t) => ({
  _id: t.id,
  name: t.name,
  place: t.location,
  quote: t.body,
  rating: t.rating,
}));

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="container-shell py-12">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tractors, Harvesters &amp; Farm Implements
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600">
            Browse products and request the latest price on WhatsApp. Fast quotes,
            availability, and delivery timelines.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border border-zinc-200 px-5 py-3 text-sm font-semibold hover:bg-zinc-50"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container-shell pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Popular machines and implements.
            </p>
          </div>

          <Link
            href="/products"
            className="text-sm font-semibold text-zinc-900 hover:underline"
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

      <TestimonialsCarousel items={carouselTestimonials} />
    </div>
  );
}
