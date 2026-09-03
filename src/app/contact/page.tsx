import type { Metadata } from "next"
import { ContactPageClient } from "./ContactPageClient"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nabinchandra-foundation.org"

export const metadata: Metadata = {
  title: "Contact Us — Reach Parivartan Welfare Society",
  description: "Get in touch with Parivartan Welfare Society. Find our address, phone number, WhatsApp, email, and working hours. Send us a message or fill out a volunteer interest form.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Parivartan Welfare Society",
    description: "We'd love to hear from you. Reach us by phone, WhatsApp, email or visit us in person.",
    url: `${SITE_URL}/contact`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact PWS",
            "url": `${SITE_URL}/contact`,
            "mainEntity": {
              "@type": "NGO",
              "name": "Parivartan Welfare Society",
              "telephone": "+91-93158-14894",
              "email": "parivartanwelfaresociety31@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "House Number - 242, Govindgarh",
                "addressLocality": "Gautam Buddha Nagar, Jewar",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "203135",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />
      <ContactPageClient />
    </>
  )
}
