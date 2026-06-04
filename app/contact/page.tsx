import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Free Quote — AC Repair & Installation | Tapanes Enterprise LLC',
  description: 'Request a free HVAC quote in Tampa Bay. AC repair, installation, and maintenance. Bilingual Spanish/English team responds fast. Call 813-578-1529.',
  openGraph: {
    title: 'Get a Free HVAC Quote | Tapanes Enterprise LLC — Tampa FL',
    description: 'Request your free AC service quote. Fast response, honest pricing. 813-578-1529.',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
