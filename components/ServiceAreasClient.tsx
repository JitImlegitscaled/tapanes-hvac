'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function ServiceAreasClient() {
  const { tr } = useLanguage()

  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 grain"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #122857 0%, #060f22 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-brand/10 border border-sky-brand/30 text-sky-brand px-4 py-1.5 rounded-full text-sm font-body font-600 mb-5">
            📍 Tampa Bay Area
          </div>
          <h1 className="font-display font-900 text-white text-5xl sm:text-6xl mb-4"
            style={{ letterSpacing: '-0.03em' }}>
            {tr.areas.title}
          </h1>
          <p className="font-body text-white/60 text-lg leading-relaxed">{tr.areas.sub}</p>
        </div>
      </section>

      <div className="bg-navy-dark -mb-1">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C360 40 1080 0 1440 20V40H0V20Z" fill="white" />
        </svg>
      </div>

      {/* Cities grid */}
      <section className="bg-white section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
            {tr.areas.cities.map((city, idx) => (
              <div
                key={city}
                className="group flex items-center gap-3 bg-white border border-navy/10 rounded-xl px-4 py-4 hover:border-sky-brand hover:bg-sky-brand/5 hover:-translate-y-0.5"
                style={{
                  boxShadow: '0 2px 12px rgba(10,31,68,0.06)',
                  transition: 'transform 0.18s ease, border-color 0.18s ease, background 0.18s ease',
                  animationDelay: `${idx * 30}ms`,
                }}
              >
                <span className="text-sky-brand text-lg flex-shrink-0">
                  {idx === 0 ? '⭐' : '📍'}
                </span>
                <span className="font-body font-600 text-navy text-sm group-hover:text-sky-dark">
                  {city}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="text-center bg-navy rounded-2xl px-8 py-12"
            style={{ boxShadow: '0 8px 40px rgba(10,31,68,0.2)' }}
          >
            <div className="text-4xl mb-4">📞</div>
            <h2 className="font-display font-800 text-white text-3xl sm:text-4xl mb-3"
              style={{ letterSpacing: '-0.02em' }}>
              {tr.areas.cta}
            </h2>
            <p className="font-body text-white/60 text-lg mb-8">
              {tr.footer.spanishBadge} · {tr.hero.english}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8135781529"
                className="flex items-center justify-center gap-2 bg-flame text-white px-8 py-4 rounded-xl font-display font-700 text-xl hover:bg-flame-dark active:scale-95"
                style={{ boxShadow: '0 4px 20px rgba(232,76,27,0.45)' }}
              >
                📞 813-578-1529
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-sky-brand/40 text-sky-brand px-8 py-4 rounded-xl font-display font-700 text-lg hover:bg-sky-brand hover:text-navy active:scale-95"
              >
                {tr.nav.contact} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section
        className="section-pad grain"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #122857 0%, #0a1f44 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-800 text-white text-3xl sm:text-4xl mb-10"
            style={{ letterSpacing: '-0.02em' }}>
            📍 Tampa Bay, FL
          </h2>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 16px 60px rgba(10,31,68,0.4)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/1000x400/122857/38bdf8?text=Tampa+Bay+Service+Area+Map"
              alt="Tapanes Enterprise LLC service area map — Tampa Bay, FL"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
          </div>
        </div>
      </section>
    </>
  )
}
