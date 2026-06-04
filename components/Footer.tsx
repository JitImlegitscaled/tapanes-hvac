'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { tr, lang, setLang } = useLanguage()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const serviceLinks = [
    { id: 'services', label: tr.services.repair.name },
    { id: 'services', label: tr.services.install.name },
    { id: 'services', label: tr.services.maintenance.name },
  ]

  const navLinks = [
    { id: 'hero', label: tr.nav.home },
    { id: 'about', label: tr.nav.about },
    { id: 'service-areas', label: tr.nav.serviceAreas },
  ]

  return (
    <footer
      className="text-white/80 pt-16 pb-8"
      style={{
        background: '#0a1f44',
        borderTop: '3px solid #38bdf8',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand — left */}
          <div className="lg:col-span-1">
            <div className="font-display font-800 text-white text-2xl tracking-tight mb-1">
              Tapanes Enterprise LLC
            </div>
            <div className="font-display text-sky-brand text-base font-600 mb-3">
              The Family HVAC ❄️🔥
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-4">
                {tr.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 bg-flame/20 border border-flame/30 text-flame-light px-3 py-1.5 rounded-full text-sm font-body font-600">
              {tr.footer.spanishBadge}
            </div>
          </div>

          {/* Services — center-left */}
          <div>
            <h3 className="font-display font-700 text-white text-lg mb-4 uppercase tracking-wide">
              {tr.footer.services}
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    aria-label={`Go to ${link.label} section`}
                    className="text-white/60 hover:text-sky-brand text-sm focus-visible:outline-none focus-visible:underline"
                  >
                    ❄️ {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation — center-right */}
          <div>
            <h3 className="font-display font-700 text-white text-lg mb-4 uppercase tracking-wide">
              Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id + link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    aria-label={`Go to ${link.label}`}
                    className="text-white/60 hover:text-sky-brand text-sm focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  aria-label="Go to contact page"
                  className="text-white/60 hover:text-sky-brand text-sm"
                >
                  {tr.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact — right */}
          <div>
            <h3 className="font-display font-700 text-white text-lg mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:8135781529"
                aria-label="Call Tapanes Enterprise at 813-578-1529"
                className="flex items-center gap-2 text-sky-brand font-display font-700 text-xl hover:text-sky-light"
              >
                📞 {tr.footer.phone}
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                📍 {tr.footer.location}
              </div>
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                aria-label={lang === 'es' ? 'Switch to English' : 'Switch to Spanish'}
                className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-brand/30 text-sky-brand text-xs font-600 hover:bg-sky-brand hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
              >
                {lang === 'es' ? '🇺🇸 Switch to English' : '🇨🇺 Cambiar a Español'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>{tr.footer.rights}</span>
          <span className="flex items-center gap-2">
            <span className="text-sky-brand" aria-hidden="true">❄️</span>
            Tampa, FL
            <span className="text-flame" aria-hidden="true">🔥</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
