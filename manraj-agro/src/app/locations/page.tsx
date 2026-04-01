import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { qLocations } from "@/lib/sanity/queries";
import { siteConfig } from "@/lib/site";

export const revalidate = 3600;

type LocationItem = {
  _id: string;
  name: string;
  address: string;
  phone?: string;
  whatsapp?: string;
  mapLink?: string;
  businessHours?: string;
};

const fallbackLocations: LocationItem[] = [
  {
    _id: "gadarpur",
    name: "Manraj Agro Industries",
    address:
      "Main Road, Dongpuri, Gadarpur, Udham Singh Nagar, Uttarakhand - 263152, India",
    phone: siteConfig.phones[0],
    whatsapp: siteConfig.whatsapp.number,
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Main+Road%2C+Dongpuri%2C+Gadarpur%2C+Udham+Singh+Nagar%2C+Uttarakhand+263152",
    businessHours: "8 a.m. - 7 p.m.",
  },
  {
    _id: "rampur",
    name: "Manraj Agro Industries",
    address: "Rampur, Uttar Pradesh",
    phone: siteConfig.phones[1],
    whatsapp: siteConfig.whatsapp.number,
  },
];

export default async function LocationsPage() {
  const sanityLocations = await sanityClient.fetch<LocationItem[]>(qLocations);
  const locations =
    sanityLocations.length > 0
      ? [
          ...sanityLocations,
          ...fallbackLocations.filter(
            (fallback) =>
              !sanityLocations.some(
                (loc) =>
                  loc.name.toLowerCase() === fallback.name.toLowerCase() ||
                  loc.address.toLowerCase() === fallback.address.toLowerCase()
              )
          ),
        ]
      : fallbackLocations;

  return (
    <div className="container-shell py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="inline-flex rounded-full border border-[color:var(--color-brand-line)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--color-brand-deep)]">
            Our Branches
          </div>
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[color:var(--color-brand-ink)] sm:text-3xl">
            Our Locations
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Visit or contact your nearest Manraj Agro dealership.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <div
            key={loc._id}
            className="rounded-3xl border border-[color:var(--color-brand-line)] bg-white p-5 shadow-[0_12px_30px_rgba(23,32,20,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-soft)]/35"
          >
            <div className="text-sm font-semibold text-[color:var(--color-brand-ink)]">
              {loc.name}
            </div>

            <p className="mt-2 text-sm text-zinc-600 whitespace-pre-line">
              {loc.address}
            </p>

            {loc.businessHours && (
              <p className="mt-2 text-xs font-medium text-[color:var(--color-brand-deep)]">
                🕒 {loc.businessHours}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {loc.phone && (
                <a
                  href={`tel:${loc.phone}`}
                  className="rounded-xl border border-[color:var(--color-brand-line)] bg-white px-3 py-2 font-semibold text-[color:var(--color-brand-ink)] hover:bg-[color:var(--color-brand-soft)]"
                >
                  Call
                </a>
              )}

              {loc.whatsapp && (
                <a
                  href={`https://wa.me/${loc.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-brand px-3 py-2 font-semibold text-white shadow-sm hover:bg-[color:var(--color-brand-deep)]"
                >
                  WhatsApp
                </a>
              )}

              {loc.mapLink && (
                <Link
                  href={loc.mapLink}
                  target="_blank"
                  className="rounded-xl border border-[color:var(--color-brand-line)] bg-white px-3 py-2 font-semibold text-[color:var(--color-brand-ink)] hover:bg-[color:var(--color-brand-soft)]"
                >
                  Map
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
