import type { Metadata } from "next"
import { ProgramsPageClient } from "./ProgramsPageClient"
import { orgEntity, programEntities, SITE_URL } from "@/data/orgEntity"

export const metadata: Metadata = {
  title: "Our Programs — Food, Medical, Education & More",
  description:
    "Parivartan Welfare Society programmes: free food distribution, education support, cow welfare / Gau Seva, medical camps, clothing drives and emergency relief across Delhi NCR and Uttar Pradesh.",
  alternates: { canonical: `${SITE_URL}/programs` },
  openGraph: {
    title: "PWS Programs — Food, Education, Cow Welfare & Medical Outreach",
    description:
      "Active programmes serving families, children and rescued cows across Delhi NCR and Uttar Pradesh.",
    url: `${SITE_URL}/programs`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const programFaqs = [
  {
    q: "What programmes does Parivartan Welfare Society run?",
    a: "PWS runs free food distribution, education support with school kits, cow rescue and gaushala care (Gau Seva), free medical outreach, clothing drives, and emergency relief across Delhi NCR and Uttar Pradesh.",
  },
  {
    q: "How can I support a specific programme?",
    a: "Donate online at the Donate page, choose Gau Seva on the Cow Donation page, or transfer via UPI/bank on Account Details. Mention the programme when you share your transaction ID.",
  },
  {
    q: "Where does PWS operate?",
    a: "Primary operations are based in Jewar, Gautam Buddha Nagar, Uttar Pradesh, with food, education, medical and cow-welfare work across Delhi NCR and nearby communities in Uttar Pradesh.",
  },
]

export default function ProgramsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/programs#webpage`,
        name: "Parivartan Welfare Society Programs",
        url: `${SITE_URL}/programs`,
        description:
          "Food distribution, education support, cow welfare, medical outreach and emergency relief programmes.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": orgEntity["@id"] },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Programs", item: `${SITE_URL}/programs` },
          ],
        },
      },
      {
        "@type": "ItemList",
        name: "PWS Active Programmes",
        itemListElement: programEntities.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          description: p.description,
          url: p.url,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: programFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      orgEntity,
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProgramsPageClient />
    </>
  )
}
