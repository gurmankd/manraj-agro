import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/catalog";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/p/${p.slug}`}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
    >
      {/* Image */}
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-zinc-100">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <span className="text-5xl select-none">🚜</span>
        )}
      </div>

      <div className="p-5">
        {p.series && (
          <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            {p.series}
          </div>
        )}
        <div className="text-sm font-semibold">{p.title}</div>
        <div className="mt-1 text-xs text-zinc-600">{p.brand ?? "Machinery"}</div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-semibold text-zinc-900">
            {p.price ?? "Get latest price"}
          </div>
          <span className="text-xs font-semibold text-zinc-700">View →</span>
        </div>
      </div>
    </Link>
  );
}
