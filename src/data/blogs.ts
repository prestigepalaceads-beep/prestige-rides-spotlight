import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export interface BlogPost {
  slug: string;
  img: string;
  cat: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "art-of-the-showroom-finish",
    img: blog1,
    cat: "Detailing",
    title: "The Art of the Showroom Finish",
    date: "May 02, 2026",
    author: "Lena Marchetti",
    readTime: "6 min read",
    excerpt: "How master detailers transform metal into mirrors — a study in obsession.",
    body: [
      "There is a particular silence inside a detailing bay at five in the morning. The lights are warm, the air smells faintly of carnauba and isopropyl, and the cars wait like sleeping giants. It is in this silence that the work begins.",
      "A showroom finish is not the result of a single product or a single hand. It is the cumulative effort of decontamination, paint correction, refinement, and protection — each stage measured in microns, not minutes. The detailers who reach this level treat paint as a living surface: it breathes, it scars, it remembers every careless wipe.",
      "We spent three days inside one of Dubai's most discreet studios to understand the discipline. What emerged was not a tutorial, but a philosophy — that the most luxurious thing a car can wear is the patience of the person who prepared it.",
      "By the final pass, the clear coat reflects the overhead lights as a single, unbroken plane. There are no swirls, no halos, no fingerprints. Only depth. And in that depth, the car finally looks like itself.",
    ],
  },
  {
    slug: "beyond-the-key-a-buyers-ritual",
    img: blog2,
    cat: "Ownership",
    title: "Beyond the Key: A Buyer's Ritual",
    date: "Apr 21, 2026",
    author: "Idris Khoury",
    readTime: "8 min read",
    excerpt: "Acquiring a flagship is never transactional. It's an inheritance of craft.",
    body: [
      "The handover of a flagship automobile rarely happens on a forecourt. It happens in a quiet room, often without a desk, where two people sit and speak about provenance, intention, and care.",
      "Our clients arrive with questions we welcome: who built this car, who owned it before, what was changed, what was kept. The honest answers are sometimes ordinary, sometimes extraordinary — but they are always the truth.",
      "What follows is a ritual rather than a transaction. The keys are placed on a leather tray. The service file is opened to the first page. The car is started, listened to, then quieted. Only then does the new owner take their seat.",
      "It is a small ceremony, but it matters. It reminds everyone in the room that an automobile of this caliber is not bought — it is inherited from one careful steward to the next.",
    ],
  },
  {
    slug: "mechanical-poetry",
    img: blog3,
    cat: "Service",
    title: "Mechanical Poetry",
    date: "Apr 09, 2026",
    author: "Sven Hartmann",
    readTime: "5 min read",
    excerpt: "Inside the workshop where every torque setting is whispered, never barked.",
    body: [
      "The workshop is quieter than you would expect. No raised voices, no impact guns. Tools rest on felt, not steel. A torque wrench clicks, then is set down with the care of a violinist returning a bow to its case.",
      "Here, mechanics speak of engines the way poets speak of meter — in cadence, in restraint, in the spaces between the notes. A misfire is a stutter in a stanza. A perfect idle is a sustained note.",
      "It takes years to learn to listen at this level. It takes longer still to know when to do nothing — when an old car is telling you, in its own dialect, that it is exactly as it should be.",
    ],
  },
  {
    slug: "why-provenance-matters",
    img: blog1,
    cat: "Insight",
    title: "Why Provenance Matters",
    date: "Mar 28, 2026",
    author: "Cécile Aubry",
    readTime: "7 min read",
    excerpt: "The story behind a chassis number can multiply its value — or void it.",
    body: [
      "Provenance is the unbroken thread that connects a car to its history. Lose the thread, and the car becomes anonymous — a fine machine, perhaps, but no longer a document.",
      "We trace chassis numbers through factory build sheets, dealer ledgers, period photography, and — when we are fortunate — the memories of the people who drove them first. Each layer of evidence adds weight to the story.",
      "The market understands this. Two identical cars can sit side by side and command vastly different prices, separated only by paperwork. But the difference is not paperwork. It is certainty.",
    ],
  },
  {
    slug: "the-garage-as-a-gallery",
    img: blog2,
    cat: "Lifestyle",
    title: "The Garage as a Gallery",
    date: "Mar 14, 2026",
    author: "Marco Velasco",
    readTime: "6 min read",
    excerpt: "Designing spaces worthy of the machines they hold.",
    body: [
      "A serious collector's garage is no longer a utility room. It is a curated space — climate-controlled, dust-managed, lit with the same care as a private gallery.",
      "The architecture follows the cars. Polished concrete reflects without competing. Indirect lighting reveals form without flattering it. Acoustic panels absorb the small sounds of cooling metal so the space can be enjoyed in stillness.",
      "Done well, the garage becomes the most personal room in the house — the one that says, without ornament, exactly who its owner is.",
    ],
  },
  {
    slug: "engine-whisperers",
    img: blog3,
    cat: "Service",
    title: "Engine Whisperers",
    date: "Feb 28, 2026",
    author: "Hiroshi Tanabe",
    readTime: "5 min read",
    excerpt: "Meet the technicians who tune by ear, not just by code.",
    body: [
      "Diagnostic software is precise. The human ear, trained over decades, is something else — it hears what the sensors haven't yet learned to flag.",
      "We followed three master technicians through a week of routine inspections. None of them dismissed the scan tools. But all of them, at some point, set the laptop aside, leaned in close to a running engine, and listened.",
      "The findings, in every case, were ahead of the data. A bearing beginning to complain. A coil drifting out of phase. A small leak singing in the upper register of the exhaust. Code will catch up eventually. The whisperers get there first.",
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
