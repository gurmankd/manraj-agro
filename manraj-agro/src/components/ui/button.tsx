import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-[color:var(--color-brand-deep)] focus-visible:ring-brand ring-offset-white",
  secondary:
    "bg-white text-[color:var(--color-brand-ink)] border border-[color:var(--color-brand-line)] hover:bg-[color:var(--color-brand-soft)] focus-visible:ring-brand ring-offset-white",
  ghost:
    "bg-transparent text-[color:var(--color-brand-ink)] hover:bg-[color:var(--color-brand-soft)] focus-visible:ring-brand ring-offset-white",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
