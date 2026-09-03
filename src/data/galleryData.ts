export type GalleryCategory =
  | "All"
  | "Food Distribution"
  | "Blanket Distribution"
  | "Tree Plantation"
  | "Community Service"

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  description: string
  categories: GalleryCategory[]
  spotlight?: boolean
}

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Food Distribution",
  "Blanket Distribution",
  "Tree Plantation",
  "Community Service",
]

export const galleryImages: GalleryImage[] = [
  {
    id: "img-1",
    src: "/images/food_distribution/food_distribution_1.jpeg",
    alt: "Parivartan Welfare Society volunteers distributing hot meals to people",
    title: "Khana Seva Drive",
    description: "Our volunteers serving hot, fresh, and wholesome meals directly to daily wage earners and local families in need.",
    categories: ["All", "Food Distribution", "Community Service"],
    spotlight: true,
  },
  {
    id: "img-2",
    src: "/images/food_distribution/food_distribution_2.jpeg",
    alt: "Volunteers handing out fresh meal packets",
    title: "Fresh Meal Distribution",
    description: "Preparing and handing out warm food packets with care and respect for every individual waiting at our drive.",
    categories: ["All", "Food Distribution"],
  },
  {
    id: "img-3",
    src: "/images/food_distribution/food_distribution_3.jpeg",
    alt: "Nutritious meal distribution drive by volunteers",
    title: "Nourishing Needy Families",
    description: "Ensuring nobody goes to bed on an empty stomach through daily community kitchen and street food drives.",
    categories: ["All", "Food Distribution", "Community Service"],
    spotlight: true,
  },
  {
    id: "img-4",
    src: "/images/food_distribution/food_distribution_4.jpeg",
    alt: "Street food distribution by Parivartan Welfare Society",
    title: "Street Meal Seva",
    description: "Reaching out to homeless individuals and hardworking labourers to provide a hot meal when they need it most.",
    categories: ["All", "Food Distribution"],
  },
  {
    id: "img-5",
    src: "/images/food_distribution/food_distribution_5.jpeg",
    alt: "Volunteers interacting and distributing food",
    title: "Serving with Kindness",
    description: "Bringing warmth, respect, and nutritious food to underserved local communities.",
    categories: ["All", "Food Distribution", "Community Service"],
    spotlight: true,
  },
  {
    id: "img-6",
    src: "/images/blanket_distribution/blanket_distribution_1.jpeg",
    alt: "Distributing warm blankets to elderly and needy families",
    title: "Winter Blanket Drive",
    description: "Providing thick, warm blankets to families and elders sleeping outdoors during freezing winter nights.",
    categories: ["All", "Blanket Distribution", "Community Service"],
    spotlight: true,
  },
  {
    id: "img-7",
    src: "/images/blanket_distribution/blanket_distribution_2.jpeg",
    alt: "Handing warm blanket to a senior citizen",
    title: "Warmth for the Elderly",
    description: "Protecting vulnerable senior citizens from harsh cold weather with thick, protective winter blankets.",
    categories: ["All", "Blanket Distribution"],
  },
  {
    id: "img-8",
    src: "/images/blanket_distribution/blanket_distribution_3.jpeg",
    alt: "Night blanket distribution by NGO team",
    title: "Night Cold Relief",
    description: "Our volunteers walking through streets late at night to cover people sleeping in the severe cold.",
    categories: ["All", "Blanket Distribution", "Community Service"],
  },
  {
    id: "img-9",
    src: "/images/blanket_distribution/blanket_distribution_4.jpeg",
    alt: "Providing blankets to mothers and young children",
    title: "Winter Care for Children",
    description: "Distributing warm blankets to mothers and young children living in makeshift roadside shelters.",
    categories: ["All", "Blanket Distribution"],
    spotlight: true,
  },
  {
    id: "img-10",
    src: "/images/blanket_distribution/blanket_distribution_5.jpeg",
    alt: "Direct handover of blanket to beneficiary",
    title: "Direct Winter Support",
    description: "Volunteers ensuring every blanket reaches genuine families in need of immediate winter warmth.",
    categories: ["All", "Blanket Distribution", "Community Service"],
  },
  {
    id: "img-11",
    src: "/images/blanket_distribution/blanket_distribution_6.jpeg",
    alt: "Blanket distribution to rickshaw pullers and daily workers",
    title: "Supporting Daily Workers",
    description: "Reaching out to hard-working rickshaw pullers and street vendors working late in chilly weather.",
    categories: ["All", "Blanket Distribution"],
  },
  {
    id: "img-12",
    src: "/images/blanket_distribution/blanket_distribution_7.jpeg",
    alt: "Community winter relief distribution camp",
    title: "Winter Relief Camp",
    description: "Organizing local neighbourhood camps to distribute warm clothes and blankets to families.",
    categories: ["All", "Blanket Distribution", "Community Service"],
    spotlight: true,
  },
  {
    id: "img-13",
    src: "/images/blanket_distribution/blanket_distribution_8.jpeg",
    alt: "Comforting vulnerable community members",
    title: "Dignity & Warmth",
    description: "Bringing relief and dignity to families struggling to stay warm during peak winter weeks.",
    categories: ["All", "Blanket Distribution"],
  },
  {
    id: "img-14",
    src: "/images/blanket_distribution/blanket_distribution_9.jpeg",
    alt: "Seasonal blanket distribution drive",
    title: "Seasonal Blanket Distribution",
    description: "Our ongoing winter effort to shield vulnerable citizens from extreme low temperatures.",
    categories: ["All", "Blanket Distribution"],
  },
  {
    id: "img-15",
    src: "/images/blanket_distribution/blanket_distribution_10.jpeg",
    alt: "Volunteers helping elderly community members with blankets",
    title: "Helping Hands in Cold",
    description: "Heartfelt personal interactions while giving out warm winter essentials.",
    categories: ["All", "Blanket Distribution", "Community Service"],
  },
  {
    id: "img-16",
    src: "/images/blanket_distribution/blanket_distribution_11.jpeg",
    alt: "Blanket relief drive in underserved area",
    title: "Relief for Needy Families",
    description: "Ground team visiting slum clusters to hand deliver warm blankets before cold nights set in.",
    categories: ["All", "Blanket Distribution"],
  },
  {
    id: "img-17",
    src: "/images/blanket_distribution/blanket_distribution_12.jpeg",
    alt: "Providing heavy winter blankets outdoors",
    title: "Cold Weather Action",
    description: "Providing high-quality heavy blankets to protect vulnerable individuals facing harsh weather.",
    categories: ["All", "Blanket Distribution", "Community Service"],
  },
  {
    id: "img-18",
    src: "/images/blanket_distribution/blanket_distribution_13.jpeg",
    alt: "PWS team distributing winter supplies",
    title: "Winter Comfort Initiative",
    description: "Bringing warmth, care, and practical support to families across the region.",
    categories: ["All", "Blanket Distribution"],
  },
  {
    id: "img-19",
    src: "/images/plantation/plantation_image_1.jpeg",
    alt: "Volunteers planting saplings during tree plantation drive",
    title: "Tree Plantation Drive",
    description: "Volunteers planting green saplings in community grounds to build a healthier, greener environment.",
    categories: ["All", "Tree Plantation", "Community Service"],
  },
  {
    id: "img-20",
    src: "/images/plantation/plantation_image_2.jpeg",
    alt: "Planting saplings with local community members",
    title: "Planting Hope for Greenery",
    description: "Bringing locals and volunteers together to plant shade-giving and oxygen-generating trees.",
    categories: ["All", "Tree Plantation"],
  },
  {
    id: "img-21",
    src: "/images/plantation/plantation_image_3.jpeg",
    alt: "Carefully placing saplings in soil",
    title: "Green Earth Seva",
    description: "Planting trees and taking responsibility to water and nourish young plants as they grow.",
    categories: ["All", "Tree Plantation", "Community Service"],
  },
  {
    id: "img-22",
    src: "/images/plantation/plantation_image_4.jpeg",
    alt: "Mass plantation activity with volunteers",
    title: "Community Plantation Drive",
    description: "Organizing group tree planting activities to increase green cover and improve local air quality.",
    categories: ["All", "Tree Plantation"],
  },
  {
    id: "img-23",
    src: "/images/plantation/plantation_image_5.jpeg",
    alt: "Watering and protecting young trees",
    title: "Nurturing Our Environment",
    description: "Protecting saplings with proper fencing and watering to ensure sustainable ecological impact.",
    categories: ["All", "Tree Plantation", "Community Service"],
  },
]

