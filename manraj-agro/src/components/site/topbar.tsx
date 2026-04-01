import { Container } from "@/components/ui/container";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function TopBar() {
  return (
    <div className="border-b border-[color:var(--color-brand-deep)] bg-[linear-gradient(90deg,var(--color-brand-deep),#173617)] text-white">
      <Container className="flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/80">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[color:var(--color-brand-gold)]" />
            Gadarpur (UK) • Rampur (UP)
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/90">
          <a
            className="inline-flex items-center gap-1.5 transition hover:text-[color:var(--color-brand-gold)]"
            href={`tel:${siteConfig.phones[0]}`}
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phones[0]}
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition hover:text-[color:var(--color-brand-gold)]"
            href={`mailto:${siteConfig.email}`}
          >
            <Mail className="h-3.5 w-3.5" />
            {siteConfig.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
