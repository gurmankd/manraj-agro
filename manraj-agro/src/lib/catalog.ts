export type CategorySlug =
  | "tractors"
  | "combine-harvesters"
  | "seed-drills"
  | "rotavators"
  | "straw-reapers"
  | "laser-land-levelers"
  | "threshers"
  | "parts";

export type TractorSeries = "D Series" | "E Series" | "5M Series" | "Speciality";

export type Category = {
  slug: CategorySlug;
  title: string;
  subtitle: string;
};

export type Spec = { k: string; v: string };

export type Product = {
  slug: string;
  title: string;
  category: CategorySlug;
  brand?: string;
  price?: string;
  featured?: boolean;
  image?: string;
  series?: TractorSeries;
  highlights: string[];
  specs?: Spec[];
  description?: string;
  deereUrl?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  body: string;
  rating: number;
};

// ─── Categories ────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  { slug: "tractors", title: "Tractors", subtitle: "John Deere D, E, 5M & Speciality series" },
  { slug: "combine-harvesters", title: "Combine Harvesters", subtitle: "Self-propelled & mini harvesters" },
  { slug: "seed-drills", title: "Seed Drills", subtitle: "Super Seeder & Zero Till drills" },
  { slug: "rotavators", title: "Rotavators", subtitle: "Rotary tillers for soil prep" },
  { slug: "straw-reapers", title: "Straw Reapers", subtitle: "Stubble management solutions" },
  { slug: "laser-land-levelers", title: "Laser Land Levelers", subtitle: "Precision land levelling" },
  { slug: "threshers", title: "Threshers", subtitle: "Crop & groundnut threshers" },
  { slug: "parts", title: "Parts & Industrial", subtitle: "Bearings, chains & cutting machines" },
];

// ─── Tractors (from John Deere India — deere.co.in) ───────────────────────────

export const products: Product[] = [

  // ── D Series ──────────────────────────────────────────────────────────────

  {
    slug: "john-deere-5036d",
    title: "John Deere 5036D",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/tractors/d-series-tractors/5036d-tractor/5036_D_large_8789d23e32f5d3e658485c7ee0d5731cf18306af.png",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5036d-tractor/",
    highlights: ["36 HP (26.8 kW)", "2WD", "8F+4R Collarshift", "Single Clutch", "5 Year / 5000 Hr Warranty"],
    description:
      "The John Deere 5036D is an entry-level 36 HP 2WD tractor that combines rugged durability with low running costs. Ideal for light to medium field operations on smaller farms.",
    specs: [
      { k: "Power", v: "36 HP (26.8 kW)" },
      { k: "Drive", v: "2WD" },
      { k: "Transmission", v: "8F+4R Collarshift" },
      { k: "Clutch", v: "Single" },
      { k: "PTO", v: "Standard" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5105",
    title: "John Deere 5105",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: true,
    image: "https://www.deere.co.in/assets/images/images/5105D_Tractor_large_b73afd492c4042b91c5ec0bf958323285eb077b4.png",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5105-tractor/",
    highlights: ["40 HP (29.4 kW)", "2WD & 4WD", "8F+4R Collarshift", "1600 kg Lifting Capacity", "Single/Dual Clutch"],
    description:
      "The John Deere 5105 delivers 40 HP and is available in both 2WD and 4WD configurations. Its 1600 kg lifting capacity and Collarshift transmission make it a versatile workhorse for medium-scale farming.",
    specs: [
      { k: "Power", v: "40 HP (29.4 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "8F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual" },
      { k: "Lifting Capacity", v: "1600 kgf" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5105-gearpro",
    title: "John Deere 5105 GearPro™",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/images/5105D_Tractor_large_b73afd492c4042b91c5ec0bf958323285eb077b4.png",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5105-gearpro/",
    highlights: ["40 HP (29.4 kW)", "2WD & 4WD", "12F+4R Collarshift", "Reverse PTO", "Single/Dual Clutch"],
    description:
      "The 5105 GearPro™ adds a 12-speed gearbox to the 40 HP platform, giving operators more flexibility across a wider range of field conditions and implements.",
    specs: [
      { k: "Power", v: "40 HP (29.4 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "12F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5039d-powerpro",
    title: "John Deere 5039D PowerPro™",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/images/5039D_PowerPro_Tractor_large_5f95ac026d443a0bac9755a1e6374f9aea1bb9f8.png",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5039d-tractor/",
    highlights: ["41 HP (30.8 kW)", "2WD", "8F+4R Collarshift", "PowerPro™ Engine", "Dual/Reverse PTO"],
    description:
      "The 5039D PowerPro™ packs 41 HP into a compact 2WD chassis. The PowerPro™ engine technology delivers extra torque exactly when heavy loads demand it.",
    specs: [
      { k: "Power", v: "41 HP (30.8 kW)" },
      { k: "Drive", v: "2WD" },
      { k: "Transmission", v: "8F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5042d-powerpro",
    title: "John Deere 5042D PowerPro™",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: true,
    image: "https://www.deere.co.in/assets/images/images/5042D_PowerPro__Tractor_large_cb7429120cc9a1ea5c962a238471cf617084328c.png",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5042d-tractor/",
    highlights: ["44 HP (32.3 kW)", "2WD", "8F+4R Collarshift", "PowerPro™ Engine", "Fuel Efficient"],
    description:
      "A popular 44 HP model for farms that need reliable mid-range power. The PowerPro™ engine keeps fuel costs low while delivering consistent pulling performance.",
    specs: [
      { k: "Power", v: "44 HP (32.3 kW)" },
      { k: "Drive", v: "2WD" },
      { k: "Transmission", v: "8F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5042d-gearpro-powerpro",
    title: "John Deere 5042D GearPro™ PowerPro™",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/images/5042D_PowerPro__Tractor_large_cb7429120cc9a1ea5c962a238471cf617084328c.png",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5042d-gearpro-powerpro/",
    highlights: ["44 HP (32.3 kW)", "2WD", "12F+4R Collarshift", "GearPro™ + PowerPro™", "More Speed Options"],
    description:
      "Combining GearPro™ 12-speed versatility and the PowerPro™ high-torque engine, this 44 HP model gives operators maximum control across all farming tasks.",
    specs: [
      { k: "Power", v: "44 HP (32.3 kW)" },
      { k: "Drive", v: "2WD" },
      { k: "Transmission", v: "12F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5045d-powerpro",
    title: "John Deere 5045D PowerPro™",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/images/5045D_Powerpro_Tractor_large_e1f0566e5407b9978ba52a06f713d4d642fd47b1.png",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5045d-tractor/",
    highlights: ["46 HP (34.1 kW)", "2WD & 4WD", "8F+4R Collarshift", "PowerPro™ High-Torque Engine"],
    description:
      "The 5045D PowerPro™ delivers 46 HP in 2WD and 4WD options — ideal for medium-heavy field work including deep ploughing, haulage, and implement operation.",
    specs: [
      { k: "Power", v: "46 HP (34.1 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "8F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5045d-gearpro",
    title: "John Deere 5045D GearPro™",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/region-1/products/tractors/d-series-tractors/5045d-gearpro-45hp/5045d_gearpro_45hp_large_ec0d46f3640860fdfe234d30a13c7d220879ad1b.jpg",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5045d-gearpro/",
    highlights: ["46 HP (34.1 kW)", "2WD & 4WD", "12F+4R Collarshift", "GearPro™ 12-Speed Gearbox"],
    description:
      "The GearPro™ variant of the popular 5045D gives farmers 12 forward gears for more precise speed control across all types of terrain and implements.",
    specs: [
      { k: "Power", v: "46 HP (34.1 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "12F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5050d",
    title: "John Deere 5050D",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: true,
    image: "https://www.deere.co.in/assets/images/images/5050d_tractor_large_1d4d9d02bdedcff9452193a7843884aa9058dc44.png",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5050d-tractor/",
    highlights: ["50 HP (36.9 kW)", "2WD & 4WD", "8F+4R Collarshift", "Heavy-Duty Applications", "Dual PTO"],
    description:
      "The John Deere 5050D is a versatile 50 HP tractor available in 2WD and 4WD. Designed for heavy-duty applications like deep ploughing, it's a trusted workhorse for large farms across north India.",
    specs: [
      { k: "Power", v: "50 HP (36.9 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "8F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5050d-gearpro",
    title: "John Deere 5050D GearPro™",
    category: "tractors",
    brand: "John Deere",
    series: "D Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/region-1/products/tractors/d-series-tractors/5050d_gearproo_large_a383269a24b7d7c0b8347df37dcd8c08514ddc30.jpg",
    deereUrl: "https://www.deere.co.in/en/tractors/d-series-tractors/5050d-gearpro/",
    highlights: ["50 HP (36.9 kW)", "2WD & 4WD", "12F+4R Collarshift", "GearPro™ 12 Speeds"],
    description:
      "Same 50 HP power as the standard 5050D but with a 12-speed GearPro™ gearbox for finer control when operating a wider range of implements or in variable terrain.",
    specs: [
      { k: "Power", v: "50 HP (36.9 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "12F+4R Collarshift" },
      { k: "Clutch", v: "Single / Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  // ── E Series ──────────────────────────────────────────────────────────────

  {
    slug: "john-deere-5210-gearpro",
    title: "John Deere 5210 GearPro™",
    category: "tractors",
    brand: "John Deere",
    series: "E Series",
    price: "Get Quote",
    featured: true,
    image: "https://www.deere.co.in/assets/images/tractors/e-series-tractors/5210GearPro-tractor/John_Deere_India_Tractors_5210_Gear_Pro_large_0f8a86c79862106b322a2cbee2f41369222a70a4.jpg",
    deereUrl: "https://www.deere.co.in/en/tractors/e-series-tractors/5210-gearpro-tractor/",
    highlights: ["50 HP (36.5 kW)", "2WD & 4WD", "12F+4R Collar Shift / TSS", "Dual Clutch", "PowerTech™ Engine"],
    description:
      "The 5210 GearPro™ is the entry point to the premium E Series, offering 50 HP with the modern TSS transmission option alongside the standard Collar Shift, delivering smooth Power delivery for a full range of farm tasks.",
    specs: [
      { k: "Power", v: "50 HP (36.5 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "12F+4R Collar Shift / TSS" },
      { k: "Clutch", v: "Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5310-powertech",
    title: "John Deere 5310 PowerTech™",
    category: "tractors",
    brand: "John Deere",
    series: "E Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/tractors/e-series-tractors/5310e-tractor/john_deere_india_trem4_5310_right_angle_large_1a5dd6f40ebd3c6aac80321ed0a29f52e44dbe57.png",
    deereUrl: "https://www.deere.co.in/en/tractors/e-series-tractors/5310e-tractor/",
    highlights: ["57 HP (42.7 kW)", "2WD & 4WD", "12F+4R or PowerReverser", "Dual Clutch", "Creeper Speeds"],
    description:
      "The 5310 PowerTech™ steps up to 57 HP with the option of a PowerReverser (PR) transmission — perfect for loader work and any operation requiring frequent direction changes.",
    specs: [
      { k: "Power", v: "57 HP (42.7 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "12F+4R Collar Shift / TSS / 12F+12R PR" },
      { k: "Clutch", v: "Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Extra Speeds", v: "9F+3R Creeper available" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5405-powertech",
    title: "John Deere 5405 PowerTech™",
    category: "tractors",
    brand: "John Deere",
    series: "E Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/tractors/e-series-tractors/5405-tractor/5405_ac_cab_right_low_large_2345c81c932e22a9a36425d7b6b85b9f2325c03c.jpg",
    deereUrl: "https://www.deere.co.in/en/tractors/e-series-tractors/5405-tractor/",
    highlights: ["63 HP (47 kW)", "2WD & 4WD", "PR Transmission Option", "AC Cab Available", "High Lifting Capacity"],
    description:
      "At 63 HP, the 5405 PowerTech™ is built for heavy farm operations. Available with an AC cab, PowerReverser transmission, and creeper speeds — the ideal choice for large-area farming.",
    specs: [
      { k: "Power", v: "63 HP (47 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "12F+4R / 12F+12R PR Collar Shift" },
      { k: "Clutch", v: "Dual" },
      { k: "PTO", v: "Standard / Dual / Reverse" },
      { k: "Extra Speeds", v: "9F+3R Creeper available" },
      { k: "Cabin", v: "AC Cab option available" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-5075e-powertech",
    title: "John Deere 5075E PowerTech™",
    category: "tractors",
    brand: "John Deere",
    series: "E Series",
    price: "Get Quote",
    featured: true,
    image: "https://www.deere.co.in/assets/images/tractors/e-series-tractors/5075e-tractor/5075E_Front_Right_Studio_Graphic_4k_large_0d6f490e3a6e1a799a32ba828c1f9bffe32e2cf6.jpg",
    deereUrl: "https://www.deere.co.in/en/tractors/e-series-tractors/5075e-tractor/",
    highlights: ["74 HP (55 kW)", "2WD & 4WD", "PR Transmission", "Dual Clutch", "Premium E Series"],
    description:
      "The John Deere 5075E PowerTech™ is the flagship E Series tractor at 74 HP. Its PowerReverser transmission and superior lifting capacity make it ideal for the most demanding farm operations.",
    specs: [
      { k: "Power", v: "74 HP (55 kW)" },
      { k: "Drive", v: "2WD & 4WD" },
      { k: "Transmission", v: "12F+4R / 12F+12R PR Transmission" },
      { k: "Clutch", v: "Dual" },
      { k: "PTO", v: "Standard / Dual" },
      { k: "Extra Speeds", v: "9F+3R Creeper available" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  // ── 5M Series ─────────────────────────────────────────────────────────────

  {
    slug: "john-deere-5130m",
    title: "John Deere 5130M",
    category: "tractors",
    brand: "John Deere",
    series: "5M Series",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/region-1/products/tractors/5130_5m_left_large_cc7f7be57b2fe750f112b1978ac3e493270af48e.jpg",
    deereUrl: "https://www.deere.co.in/en/tractors/5m-series-tractors/5130m-tractor/",
    highlights: ["130 HP", "India's Largest Production Tractor", "Powr8 Transmission (32F+16R)", "JDLink™ Telematics", "AC Cab with Premium Comfort"],
    description:
      "The John Deere 5130M is India's most powerful production tractor at 130 HP. Equipped with the Powr8 transmission (32F+16R), JDLink™ telematics, and a premium AC cab — built for large-scale commercial farming and contractor use.",
    specs: [
      { k: "Power", v: "130 HP" },
      { k: "Drive", v: "4WD" },
      { k: "Transmission", v: "Powr8 (32F+16R)" },
      { k: "Telematics", v: "JDLink™" },
      { k: "Cabin", v: "Premium AC Cab" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  // ── Speciality Tractors ───────────────────────────────────────────────────

  {
    slug: "john-deere-3028en",
    title: "John Deere 3028EN",
    category: "tractors",
    brand: "John Deere",
    series: "Speciality",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/tractors/speciality-tractors/3028en-tractor/3028EN_Front_Right_Studio_Graphic_4K_large_0a333930a6373da75d4c1607c130a041c167d088.jpg",
    deereUrl: "https://www.deere.co.in/en/tractors/speciality-tractors/3028en-tractor/",
    highlights: ["28 HP", "4WD", "8F+8R Transmission", "Dual PTO (540/540E)", "Narrow Design for Orchards"],
    description:
      "The 3028EN is a compact 28 HP speciality tractor built for orchards, vineyards, and narrow-row crops. Its 4WD drive and narrow profile give excellent manoeuvrability in tight spaces.",
    specs: [
      { k: "Power", v: "28 HP" },
      { k: "Drive", v: "4WD" },
      { k: "Transmission", v: "8F+8R" },
      { k: "Clutch", v: "Single" },
      { k: "PTO", v: "Dual (540 / 540E)" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-3036en",
    title: "John Deere 3036EN",
    category: "tractors",
    brand: "John Deere",
    series: "Speciality",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/region-1/products/tractors/3036-narrow-width%20-right.png",
    deereUrl: "https://www.deere.co.in/en/tractors/speciality-tractors/3036en-tractor/",
    highlights: ["35 HP", "4WD", "8F+8R / FNR Sync Reverser", "Dual PTO", "Narrow Body for Row Crops"],
    description:
      "The 3036EN is a 35 HP speciality tractor available in narrow-width configuration. The optional FNR Sync Reverser transmission improves efficiency in loader and tight-field applications.",
    specs: [
      { k: "Power", v: "35 HP" },
      { k: "Drive", v: "4WD" },
      { k: "Transmission", v: "8F+8R / 8F+8R FNR Sync Reverser" },
      { k: "Clutch", v: "Single" },
      { k: "PTO", v: "Dual (540 / 540E)" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  {
    slug: "john-deere-3036e",
    title: "John Deere 3036E",
    category: "tractors",
    brand: "John Deere",
    series: "Speciality",
    price: "Get Quote",
    featured: false,
    image: "https://www.deere.co.in/assets/images/tractors/speciality-tractors/3036e-tractor/3036E_Front_Right_Studio_Graphic_4K_large_a4245f3265900e60a62c1a91993764156b9435f7.jpg",
    deereUrl: "https://www.deere.co.in/en/tractors/speciality-tractors/3036e-tractor/",
    highlights: ["35 HP", "4WD", "8F+8R Transmission", "Dual PTO", "Standard Width Speciality"],
    description:
      "The 3036E offers the same 35 HP speciality platform as the 3036EN but in standard width, suited to open field vegetable and cash crop farming needing a compact, manoeuvrable 4WD tractor.",
    specs: [
      { k: "Power", v: "35 HP" },
      { k: "Drive", v: "4WD" },
      { k: "Transmission", v: "8F+8R" },
      { k: "Clutch", v: "Single" },
      { k: "PTO", v: "Dual (540 / 540E)" },
      { k: "Warranty", v: "5 Years or 5000 Hours" },
    ],
  },

  // ── Combine Harvesters ────────────────────────────────────────────────────

  {
    slug: "ks-9300-self-propelled-combine",
    title: "KS 9300 Self Propelled Combine Harvester",
    category: "combine-harvesters",
    brand: "KS",
    price: "Get Quote",
    featured: true,
    image: "https://ksagrotech.org/wp-content/uploads/2021/09/1000x1000_01.jpg",
    highlights: ["Multi-crop (Wheat & Paddy)", "Self-propelled", "High threshing efficiency", "Large grain tank"],
    description: "The KS 9300 is a high-performance self-propelled combine harvester built for wheat and paddy harvesting.",
    specs: [
      { k: "Engine Power", v: "130 HP" },
      { k: "Header Width", v: "14 ft" },
      { k: "Grain Tank", v: "2000 litres" },
      { k: "Fuel Tank", v: "220 litres" },
    ],
  },
  {
    slug: "mini-combine-harvester",
    title: "Mini Combine Harvester",
    category: "combine-harvesters",
    brand: "KS",
    price: "Get Quote",
    image: "https://ksagrotech.org/wp-content/uploads/2021/12/Greengold-220-Wheel.jpg",
    highlights: ["Compact design", "Small & medium farms", "Easy maneuverability"],
    description: "Ideal for small and medium-sized farms, this mini combine harvester provides reliable crop cutting and threshing.",
    specs: [
      { k: "Engine Power", v: "45 HP" },
      { k: "Header Width", v: "8 ft" },
      { k: "Grain Tank", v: "800 litres" },
    ],
  },

  // ── Seed Drills ───────────────────────────────────────────────────────────

  {
    slug: "ks-super-seeder-11-tine",
    title: "KS Super Seeder (11 Tine)",
    category: "seed-drills",
    brand: "KS",
    price: "Get Quote",
    featured: true,
    image: "https://ksagrotech.org/wp-content/uploads/2021/10/BEW-super-seeder.jpg",
    highlights: ["Direct seeding into crop residue", "Residue management", "Works with ~50 HP", "Eco-friendly — no stubble burning"],
    description: "The KS Super Seeder enables direct seeding without burning stubble.",
    specs: [
      { k: "No. of Tines", v: "11" },
      { k: "Working Width", v: "7 ft" },
      { k: "Tractor Required", v: "45–55 HP" },
    ],
  },
  {
    slug: "zero-till-seed-drill-7ft",
    title: "Zero Till Seed Drill (7 ft)",
    category: "seed-drills",
    brand: "KS",
    price: "Get Quote",
    image: "https://ksagrotech.org/wp-content/uploads/2022/01/Zero-Seed-Drill.jpg",
    highlights: ["Conservation tillage", "Efficient sowing", "Reduces input cost"],
    description: "The Zero Till Seed Drill allows direct seeding without primary tillage.",
    specs: [
      { k: "Working Width", v: "7 ft" },
      { k: "Rows", v: "9 rows" },
      { k: "Tractor Required", v: "35–50 HP" },
    ],
  },

  // ── Rotavators ────────────────────────────────────────────────────────────

  {
    slug: "rotavator-6ft",
    title: "Rotavator (6 ft)",
    category: "rotavators",
    brand: "KS",
    price: "Get Quote",
    featured: true,
    image: "https://ksagrotech.org/wp-content/uploads/2021/10/Rotavator-3.jpg",
    highlights: ["6 ft working width", "Fine soil preparation", "Side gear drive", "45+ HP tractor"],
    description: "A robust 6 ft rotavator that breaks up and mixes the soil in a single pass.",
    specs: [
      { k: "Working Width", v: "6 ft (1800 mm)" },
      { k: "No. of Blades", v: "42" },
      { k: "Tractor Required", v: "45–65 HP" },
    ],
  },
  {
    slug: "rotavator-7ft",
    title: "Rotavator (7 ft)",
    category: "rotavators",
    brand: "KS",
    price: "Get Quote",
    image: "https://ksagrotech.org/wp-content/uploads/2021/10/Rotavator-3.jpg",
    highlights: ["7 ft working width", "High field coverage", "Heavy-duty blades"],
    description: "The 7 ft rotavator offers wider soil preparation coverage per pass.",
    specs: [
      { k: "Working Width", v: "7 ft (2100 mm)" },
      { k: "No. of Blades", v: "48" },
      { k: "Tractor Required", v: "55–75 HP" },
    ],
  },

  // ── Straw Reapers ─────────────────────────────────────────────────────────

  {
    slug: "straw-reaper-7ft",
    title: "Straw Reaper (7 ft)",
    category: "straw-reapers",
    brand: "KS",
    price: "Get Quote",
    featured: true,
    image: "https://ksagrotech.org/wp-content/uploads/2021/10/1000x1000_12.jpg",
    highlights: ["7 ft working width", "Makes bhusa (fodder straw)", "No stubble burning needed"],
    description: "The KS Straw Reaper efficiently manages crop residue post-harvest by converting stubble into bhusa.",
    specs: [
      { k: "Working Width", v: "7 ft" },
      { k: "Tractor Required", v: "45–60 HP" },
      { k: "PTO Speed", v: "540 rpm" },
    ],
  },

  // ── Laser Land Levelers ───────────────────────────────────────────────────

  {
    slug: "laser-land-leveler",
    title: "Laser Land Leveler",
    category: "laser-land-levelers",
    brand: "KS",
    price: "Get Quote",
    image: "https://ksagrotech.org/wp-content/uploads/2021/10/Untitled-design-25.jpg",
    highlights: ["Precision levelling ±2 mm", "Saves 20–30% water", "GPS-assist compatible"],
    description: "Precision laser land levelling cuts water usage and improves irrigation efficiency.",
    specs: [
      { k: "Accuracy", v: "±2 mm" },
      { k: "Scraper Width", v: "10–12 ft" },
      { k: "Tractor Required", v: "60–90 HP" },
    ],
  },

  // ── Threshers ─────────────────────────────────────────────────────────────

  {
    slug: "wheat-thresher",
    title: "Wheat Thresher (Multi-Crop)",
    category: "threshers",
    brand: "KS",
    price: "Get Quote",
    image: "https://ksagrotech.org/wp-content/uploads/2021/10/1000x1000_15.jpg",
    highlights: ["Wheat, paddy & maize", "High output", "Auto straw discharge"],
    description: "A heavy-duty multi-crop thresher for wheat, paddy, and maize.",
    specs: [
      { k: "Capacity", v: "800–1200 kg/hour" },
      { k: "Crops", v: "Wheat, Paddy, Maize, Soybean" },
    ],
  },
  {
    slug: "groundnut-thresher",
    title: "Groundnut Thresher",
    category: "threshers",
    brand: "KS",
    price: "Get Quote",
    image: "https://ksagrotech.org/wp-content/uploads/2021/10/1000x1000_15.jpg",
    highlights: ["Groundnut shelling", "Low damage rate", "Portable design"],
    description: "Specially designed for groundnut shelling with minimum pod damage.",
    specs: [
      { k: "Capacity", v: "400–600 kg/hour" },
      { k: "Shelling Efficiency", v: ">97%" },
    ],
  },

  // ── Parts ─────────────────────────────────────────────────────────────────

  {
    slug: "agri-bearings-set",
    title: "Agricultural Bearings (Set)",
    category: "parts",
    brand: "SKF / FAG",
    price: "Get Quote",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Outer_race_of_bearing.jpg",
    highlights: ["OEM quality", "All tractor models", "Bulk available"],
    description: "High-quality agricultural bearings compatible with all major tractor and implement brands.",
  },
  {
    slug: "drive-chains",
    title: "Drive Chains (Roller Chain Sets)",
    category: "parts",
    brand: "Renold / Local",
    price: "Get Quote",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chain%20Drive%20%288084269479%29.jpg",
    highlights: ["All pitch sizes", "Rust-resistant", "Long service life"],
    description: "Heavy-duty roller drive chains for combines, seed drills, and other farm implements.",
  },
];

// ─── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Harpreet Singh",
    location: "Gadarpur, Uttarakhand",
    body: "Bought a John Deere 5050D from Manraj Agro and it's been excellent. Delivery was fast and the staff explained everything clearly. Highly recommend.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rajinder Kumar",
    location: "Rampur, Uttar Pradesh",
    body: "The KS Super Seeder has saved us a lot on diesel and we no longer burn stubble. Great product, great service. Will buy again.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sukhdev Bawa",
    location: "Kichha, Uttarakhand",
    body: "Got the rotavator serviced here after buying elsewhere. Fast turnaround, fair pricing. Now I come here for all my spare parts too.",
    rating: 4,
  },
  {
    id: "t4",
    name: "Amarjit Dhaliwal",
    location: "Gadarpur, Uttarakhand",
    body: "They quoted the best price on a combine harvester compared to three other dealers. WhatsApp quote was instant. Very professional team.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Gurpreet Kaur",
    location: "Bazpur, Uttarakhand",
    body: "My husband bought the straw reaper last season and it paid for itself in one harvest by saving on labour. Very happy with the quality.",
    rating: 5,
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(cat: string): Product[] {
  return products.filter((p) => p.category === cat);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getTractorsBySeries(series: TractorSeries): Product[] {
  return products.filter((p) => p.category === "tractors" && p.series === series);
}
