import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/catalog";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/p/${p.slug}`}
      className="group overflow-hidden rounded-3xl border border-[color:var(--color-brand-line)] bg-white shadow-[0_12px_30px_rgba(23,32,20,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-soft)]/40 hover:shadow-[0_18px_38px_rgba(23,32,20,0.08)]"
    >
      {/* Image */}
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(237,245,232,0.9),rgba(255,255,255,0.95))]">
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-brand-gold),var(--color-brand),var(--color-brand-gold))]" />
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
          <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-brand-deep)]/65">
            {p.series}
          </div>
        )}
        <div className="text-sm font-semibold text-[color:var(--color-brand-ink)]">{p.title}</div>
        <div className="mt-1 text-xs text-zinc-600">{p.brand ?? "Machinery"}</div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-semibold text-[color:var(--color-brand-ink)]">
            {p.price ?? "Get latest price"}
          </div>
          <span className="text-xs font-semibold text-[color:var(--color-brand-deep)]">View →</span>
        </div>
      </div>
    </Link>
  );
}
