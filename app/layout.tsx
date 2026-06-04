import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tapanes Enterprise LLC — The Family HVAC | Tampa, FL',
  description: 'Professional AC repair, installation & maintenance in Tampa Bay. Family-owned, bilingual (Spanish/English), licensed & insured. Call 813-578-1529.',
  openGraph: {
    title: 'Tapanes Enterprise LLC — The Family HVAC',
    description: 'Trusted AC services in Tampa Bay. Spanish-speaking, family-owned. Call 813-578-1529.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCallButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
