import type { Metadata, Viewport } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteFooter, MainWrapper } from "@/components/shared/SiteChrome";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { PageTracker } from "@/components/analytics/PageTracker";
import { orgEntity } from "@/data/orgEntity";

const fontRaleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const fontLato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.parivartanwelfare.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Parivartan Welfare Society | People, Progress, Planet",
    template: "%s | Parivartan Welfare Society",
  },
  description: "Parivartan Welfare Society is dedicated to enabling positive, lasting change by advancing human wellbeing and environmental responsibility together.",
  keywords: ["NGO India", "Parivartan Welfare Society", "Human Wellbeing", "Community Progress", "Environmental Responsibility"],
  authors: [{ name: "Parivartan Welfare Society" }],
  creator: "Parivartan Welfare Society",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Parivartan Welfare Society | People, Progress, Planet",
    description: "To enable positive, lasting change by advancing human wellbeing and environmental responsibility together.",
    siteName: "Parivartan Welfare Society",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Parivartan Welfare Society",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parivartan Welfare Society | People, Progress, Planet",
    description: "To enable positive, lasting change by advancing human wellbeing and environmental responsibility together.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
      "BtNOwiB7ty0P0sG67VQaY4F0-aCjCrGoQHO8RBQQyZs",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-clip" suppressHydrationWarning>
      <body className={`${fontRaleway.variable} ${fontLato.variable} antialiased overflow-x-clip w-full max-w-full`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...orgEntity,
            }),
          }}
        />
        {/* SiteHeader: Header, ScrollProgress etc. */}
        <SiteHeader />
        {/* MainWrapper: adjusts <main> padding — no padding on admin */}
        <MainWrapper>{children}</MainWrapper>
        {/* SiteFooter: Footer, BottomNav etc. */}
        <SiteFooter />
        <MetaPixel />
        <GoogleAnalytics />
        <PageTracker />
      </body>
    </html>
  );
}
