const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.parivartanwelfare.org"

/** Canonical NGO entity for schema + AI citation consistency */
export const orgEntity = {
  "@type": "NGO" as const,
  "@id": `${SITE_URL}/#organization`,
  name: "Parivartan Welfare Society",
  alternateName: ["PWS", "Parivartan Welfare Society NGO"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject" as const,
    url: `${SITE_URL}/images/logo.png`,
  },
  image: `${SITE_URL}/og-image.jpg`,
  email: "parivartanwelfaresociety31@gmail.com",
  telephone: "+91-93158-14894",
  foundingDate: "2015",
  description:
    "Parivartan Welfare Society is dedicated to human wellbeing, community progress, and environmental responsibility. We focus on protecting dignity, caring for systems that sustain us, and creating lasting change together.",
  slogan: "When people and nature grow together, change becomes lasting.",
  knowsAbout: [
    "Food distribution NGO Delhi NCR",
    "Free meal seva Uttar Pradesh",
    "Cow donation and Gau Seva",
    "Gaushala and cow rescue",
    "Education support for underprivileged children",
    "Free medical camps NGO",
    "80G tax exempt donations India",
  ],
  areaServed: [
    { "@type": "AdministrativeArea" as const, name: "Delhi NCR" },
    { "@type": "State" as const, name: "Uttar Pradesh" },
    { "@type": "City" as const, name: "Jewar" },
    { "@type": "City" as const, name: "Gautam Buddha Nagar" },
  ],
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: "House Number - 242, Govindgarh",
    addressLocality: "Gautam Buddha Nagar, Jewar",
    addressRegion: "Uttar Pradesh",
    postalCode: "203135",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint" as const,
      telephone: "+91-93158-14894",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint" as const,
      telephone: "+91-93158-14894",
      contactType: "donations",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: ["https://wa.me/918299461699"],
}

export const orgPlainSummary = {
  name: "Parivartan Welfare Society",
  founded: "2015",
  location: "House Number - 242, New Shivpuri Colony, Gorakhpur, Jewar, Uttar Pradesh 203135, India",
  phone: "+91 82994 61699",
  email: "parivartanwelfaresociety31@gmail.com",
  what: "A registered Indian NGO working on human wellbeing, community progress, and environmental responsibility.",
  howToHelp:
    "Donate online at /donate, support Gau Seva at /cow-donation, transfer via UPI or bank on /account-details, or volunteer via /contact.",
  taxNote: "Eligible donations may qualify for deduction under Section 80G of the Income Tax Act, as applicable.",
}

export const programEntities = [
  {
    name: "Free Food Distribution",
    description:
      "Hot meals and community food drives for underserved families across Delhi NCR and Uttar Pradesh.",
    url: `${SITE_URL}/programs`,
  },
  {
    name: "Education Support",
    description:
      "School kits, stationery and learning support for children who cannot afford basic supplies.",
    url: `${SITE_URL}/programs`,
  },
  {
    name: "Cow Donation / Gau Seva",
    description:
      "Rescue, treatment, fodder and shelter for abandoned and injured cows through gaushala care.",
    url: `${SITE_URL}/cow-donation`,
  },
  {
    name: "Medical Outreach",
    description:
      "Free medical camps and medicine support for communities with limited access to healthcare.",
    url: `${SITE_URL}/programs`,
  },
]

export { SITE_URL }
