import Link from "next/link";
import { categories } from "@/lib/catalog";

export default function ProductsIndexPage() {
  return (
    <div className="container-shell py-10">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        Products
      </h1>
      <p className="mt-2 text-sm text-zinc-600">
        Browse categories — tractors, harvesters, implements and more.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/products/${c.slug}`}
            className="rounded-3xl border border-zinc-200 p-5 hover:bg-zinc-50"
          >
            <div className="text-sm font-semibold">{c.title}</div>
            <p className="mt-2 text-sm text-zinc-600">{c.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
