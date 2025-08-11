import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { siteConfig } from "@/lib/config"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords.join(", "),
  authors: [{ name: siteConfig.seo.author }],
  creator: siteConfig.seo.author,
  publisher: siteConfig.seo.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: siteConfig.seo.openGraph.type,
    locale: siteConfig.seo.openGraph.locale,
    url: siteConfig.seo.openGraph.url,
    siteName: siteConfig.seo.openGraph.siteName,
    title: siteConfig.seo.openGraph.title,
    description: siteConfig.seo.openGraph.description,
    images: siteConfig.seo.openGraph.images,
  },
  twitter: {
    card: siteConfig.seo.twitter.card,
    site: siteConfig.seo.twitter.site,
    creator: siteConfig.seo.twitter.creator,
    title: siteConfig.seo.twitter.title,
    description: siteConfig.seo.twitter.description,
    images: siteConfig.seo.twitter.images,
  },
  alternates: {
    canonical: siteConfig.seo.canonical,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon-1.png', sizes: '16x16 32x32', type: 'image/x-icon' },
      { url: '/favicon-1.png', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon-1.png', sizes: '180x180', type: 'image/png' }
    ]
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.seo.description,
  url: siteConfig.seo.canonical,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.location,
  },
  sameAs: siteConfig.social.map((social) => social.url),
  knowsAbout: [
    "Backend Development",
    "Mechatronics Engineering",
    "Node.js",
    "Python",
    "API Development",
    "Database Design",
    "Embedded Systems",
    "Robotics",
    "Industrial Automation",
    "IoT Solutions",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Backend Developer & Mechatronics Engineer",
    occupationLocation: {
      "@type": "City",
      name: siteConfig.contact.location,
    },
    skills: [
      "Node.js Development",
      "Python Programming",
      "API Architecture",
      "Database Optimization",
      "Embedded Systems Design",
      "Robotics Programming",
      "Industrial Automation",
      "IoT Integration",
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={orbitron.variable} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href={siteConfig.seo.canonical} />
        <link rel="icon" type="image/x-icon" href="/favicon-1.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon-1.png" />
        <link rel="apple-touch-icon" href="/favicon-1.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}
