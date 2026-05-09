import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import a1 from "@/assets/armoured-1.jpg";
import a2 from "@/assets/armoured-2.jpg";
import a3 from "@/assets/armoured-3.jpg";
import a4 from "@/assets/armoured-4.jpg";

export type CarStatus = "New" | "Used";
export type CarCategory = "Normal" | "Armoured";
export type DistanceUnit = "Km" | "Mile";

export interface CarDetail {
  slug: string;
  img: string;
  gallery?: string[];
  title: string;
  description: string;
  brand: string;
  status: CarStatus;
  category: CarCategory;
  priceAED: number;
  priceLabel: string;
  doors: number;
  seats: number;
  horsepower: number;
  cylinders: number;
  distance: number;
  distanceUnit: DistanceUnit;
  year: number;
  videoLink: string;
  color: string;
  interior: string;
  body: string;
  fuel: string;
  spec: string;
}

export const cars: CarDetail[] = [
  {
    slug: "rolls-royce-cullinan-black-badge-2024",
    img: car1,
    title: "Rolls-Royce Cullinan Black Badge",
    description:
      "The darker, more assertive side of Rolls-Royce. The Cullinan Black Badge merges presence with performance — sculpted from carbon-fibre composites, finished in obsidian black, and tuned for the discerning driver who refuses convention.",
    brand: "Rolls-Royce",
    status: "New",
    category: "Normal",
    priceAED: 1890000,
    priceLabel: "AED 1,890,000",
    doors: 4,
    seats: 5,
    horsepower: 600,
    cylinders: 12,
    distance: 50,
    distanceUnit: "Km",
    year: 2024,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "Obsidian Black",
    interior: "Black Leather / Forest Green Stitch",
    body: "SUV",
    fuel: "Petrol",
    spec: "V12 Twin-Turbo · 600 HP",
  },
  {
    slug: "lamborghini-urus-performante-2024",
    img: car2,
    title: "Lamborghini Urus Performante",
    description:
      "Track-bred SUV silhouette, race-honed dynamics. The Urus Performante channels Lamborghini's motorsport DNA into the most aggressive Super-SUV ever produced — lighter, louder, and unapologetically Italian.",
    brand: "Lamborghini",
    status: "New",
    category: "Normal",
    priceAED: 1420000,
    priceLabel: "AED 1,420,000",
    doors: 4,
    seats: 5,
    horsepower: 657,
    cylinders: 8,
    distance: 1200,
    distanceUnit: "Km",
    year: 2024,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "Giallo Auge",
    interior: "Alcantara Black / Yellow Stitching",
    body: "SUV Coupe",
    fuel: "Petrol",
    spec: "V8 Twin-Turbo · 657 HP",
  },
  {
    slug: "ferrari-812-superfast-2023",
    img: car3,
    title: "Ferrari 812 Superfast",
    description:
      "The pinnacle of front-engined Ferrari engineering. A naturally aspirated V12 in its purest, most savage expression — 789 horsepower of unfiltered Maranello.",
    brand: "Ferrari",
    status: "Used",
    category: "Normal",
    priceAED: 1750000,
    priceLabel: "AED 1,750,000",
    doors: 2,
    seats: 2,
    horsepower: 789,
    cylinders: 12,
    distance: 8500,
    distanceUnit: "Km",
    year: 2023,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "Rosso Corsa",
    interior: "Nero Leather",
    body: "Coupe",
    fuel: "Petrol",
    spec: "V12 NA · 789 HP",
  },
  {
    slug: "bentley-continental-gt-speed-2024",
    img: car4,
    title: "Bentley Continental GT Speed",
    description:
      "British grand touring perfected. The Continental GT Speed is a sculpted alliance of artisan luxury and effortless 650-horsepower W12 power.",
    brand: "Bentley",
    status: "New",
    category: "Normal",
    priceAED: 1180000,
    priceLabel: "AED 1,180,000",
    doors: 2,
    seats: 4,
    horsepower: 650,
    cylinders: 12,
    distance: 80,
    distanceUnit: "Km",
    year: 2024,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "Glacier White",
    interior: "Beluga / Linen Hide",
    body: "GT Coupe",
    fuel: "Petrol",
    spec: "W12 Twin-Turbo · 650 HP",
  },
  {
    slug: "mercedes-g63-amg-armoured-b6-2024",
    img: a1,
    title: "Mercedes-Benz G 63 AMG Armoured B6",
    description:
      "Military-grade ballistic protection wrapped in AMG's most iconic silhouette. Certified B6 — discreet, indestructible, and effortlessly luxurious.",
    brand: "Mercedes-Benz",
    status: "New",
    category: "Armoured",
    priceAED: 2100000,
    priceLabel: "AED 2,100,000",
    doors: 4,
    seats: 5,
    horsepower: 585,
    cylinders: 8,
    distance: 100,
    distanceUnit: "Km",
    year: 2024,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "Obsidian Black",
    interior: "Designo Black Nappa",
    body: "SUV",
    fuel: "Petrol",
    spec: "Ballistic B6 · V8 Biturbo",
  },
  {
    slug: "range-rover-sentinel-autobiography-2024",
    img: a2,
    title: "Range Rover Sentinel Autobiography",
    description:
      "Hand-built by Land Rover Special Vehicle Operations. VR8-certified armouring engineered to be invisible — preserving the Range Rover's signature elegance.",
    brand: "Range Rover",
    status: "New",
    category: "Armoured",
    priceAED: 2450000,
    priceLabel: "AED 2,450,000",
    doors: 4,
    seats: 5,
    horsepower: 523,
    cylinders: 8,
    distance: 60,
    distanceUnit: "Km",
    year: 2024,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "Santorini Black",
    interior: "Ebony Windsor Leather",
    body: "SUV",
    fuel: "Petrol",
    spec: "VR8 Certified · V8",
  },
  {
    slug: "cadillac-escalade-esv-armoured-2024",
    img: a3,
    title: "Cadillac Escalade ESV Armoured",
    description:
      "American executive presence with B6 certified ballistic protection. The Escalade ESV redefines the executive transport with discreet armouring and signature comfort.",
    brand: "Cadillac",
    status: "New",
    category: "Armoured",
    priceAED: 1650000,
    priceLabel: "AED 1,650,000",
    doors: 4,
    seats: 7,
    horsepower: 420,
    cylinders: 8,
    distance: 200,
    distanceUnit: "Mile",
    year: 2024,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "Stellar Black Metallic",
    interior: "Jet Black Leather",
    body: "Full-size SUV",
    fuel: "Petrol",
    spec: "B6 Protection · V8",
  },
  {
    slug: "toyota-land-cruiser-300-b6-2024",
    img: a4,
    title: "Toyota Land Cruiser 300 B6",
    description:
      "Legendary Land Cruiser dependability fortified with B6 ballistic armouring. The first choice of diplomats, executives, and adventurers operating where reliability is non-negotiable.",
    brand: "Toyota",
    status: "Used",
    category: "Armoured",
    priceAED: 980000,
    priceLabel: "AED 980,000",
    doors: 4,
    seats: 7,
    horsepower: 409,
    cylinders: 6,
    distance: 4500,
    distanceUnit: "Km",
    year: 2024,
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "Pearl White",
    interior: "Saddle Tan Leather",
    body: "SUV",
    fuel: "Petrol",
    spec: "Ballistic B6 · V6 TT",
  },
];

export const getCarBySlug = (slug: string) => cars.find((c) => c.slug === slug);
export const brands = Array.from(new Set(cars.map((c) => c.brand))).sort();
