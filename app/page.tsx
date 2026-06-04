import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'
import Script from 'next/script'

const PRODUCTION_URL = 'https://tapanesenterprises.com'

export const metadata: Metadata = {
  title: 'Tapanes Enterprise LLC | HVAC Repair, Installation & Maintenance in Tampa, FL',
  description: 'Family-owned HVAC company serving Tampa, FL and surrounding areas. Expert AC repair, installation, and maintenance. Call 813-578-1529 for a free quote.',
  metadataBase: new URL(PRODUCTION_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tapanes Enterprise LLC | HVAC Repair, Installation & Maintenance in Tampa, FL',
    description: 'Family-owned HVAC company serving Tampa, FL and surrounding areas. Expert AC repair, installation, and maintenance. Call 813-578-1529 for a free quote.',
    type: 'website',
    url: PRODUCTION_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tapanes Enterprise LLC | HVAC Repair, Installation & Maintenance in Tampa, FL',
    description: 'Family-owned HVAC company serving Tampa, FL and surrounding areas. Expert AC repair, installation, and maintenance. Call 813-578-1529 for a free quote.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Tapanes Enterprise LLC',
  alternateName: 'The Family HVAC',
  description: 'Professional AC repair, installation & maintenance in Tampa Bay, FL. Family-owned, bilingual (Spanish/English).',
  telephone: '813-578-1529',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: [
    'Tampa', 'Brandon', 'Riverview', 'Clearwater', 'St. Petersburg',
    'Lakeland', 'Valrico', 'Gibsonton', 'Seffner', 'Plant City',
    'Sun City Center', 'Ruskin', 'Apollo Beach', 'Wesley Chapel',
    'Lutz', 'Land O Lakes', 'New Tampa', 'Ybor City',
  ],
  priceRange: '$$',
  openingHours: 'Mo-Su 08:00-18:00',
  knowsLanguage: ['es', 'en'],
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Maintenance' } },
    ],
  },
  slogan: 'We offer trusted solutions.',
}

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  )
}
