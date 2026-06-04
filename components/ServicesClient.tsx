'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

const services = [
  {
    key: 'repair' as const,
    id: 'repair',
    icon: '🔧',
    img: 'https://placehold.co/600x400/0a1f44/38bdf8?text=AC+Repair',
    imgAlt: 'HVAC technician repairing air conditioning unit in Tampa Bay home',
    accent: '#38bdf8',
  },
  {
    key: 'install' as const,
    id: 'install',
    icon: '❄️',
    img: 'https://placehold.co/600x400/0a1f44/e84c1b?text=AC+Installation',
    imgAlt: 'New AC unit installation by Tapanes Enterprise in Tampa FL',
    accent: '#e84c1b',
  },
  {
    key: 'maintenance' as const,
    id: 'maintenance',
    icon: '🔩',
    img: 'https://placehold.co/600x400/0a1f44/38bdf8?text=AC+Maintenance',
    imgAlt: 'AC maintenance tune-up service in Tampa Bay area',
    accent: '#38bdf8',
  },
]

export default function ServicesClient() {
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
            ❄️ Tampa Bay HVAC
          </div>
          <h1 className="font-display font-900 text-white text-5xl sm:text-6xl mb-4"
            style={{ letterSpacing: '-0.03em' }}>
            {tr.services.title}
          </h1>
          <p className="font-body text-white/60 text-lg leading-relaxed">{tr.services.sub}</p>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-navy-dark -mb-1">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C360 40 1080 0 1440 20V40H0V20Z" fill="white" />
        </svg>
      </div>

      {/* Service cards */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
          {services.map((svc, idx) => {
            const data = tr.services[svc.key]
            const isEven = idx % 2 === 0

            return (
              <article
                key={svc.id}
                id={svc.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}
                  style={{ boxShadow: `0 12px 48px rgba(10,31,68,0.15), 0 4px 16px rgba(10,31,68,0.08)` }}>
                  <Image
                    src={svc.img}
                    alt={svc.imgAlt}
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="text-5xl mb-4">{svc.icon}</div>
                  <h2 className="font-display font-800 text-navy text-4xl sm:text-5xl mb-4"
                    style={{ letterSpacing: '-0.02em' }}>
                    {data.name}
                  </h2>
                  <p className="font-body text-navy/60 text-lg leading-relaxed mb-6">
                    {data.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {data.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 font-body text-navy/80 text-base">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-700 text-white"
                          style={{ background: svc.accent }}
                        >✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:8135781529"
                      className="flex items-center justify-center gap-2 bg-flame text-white px-6 py-3 rounded-xl font-display font-700 text-lg hover:bg-flame-dark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                      style={{ boxShadow: '0 4px 20px rgba(232,76,27,0.4)' }}
                    >
                      📞 813-578-1529
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 border-2 border-navy/20 text-navy px-6 py-3 rounded-xl font-display font-700 text-lg hover:border-sky-brand hover:text-sky-dark active:scale-95"
                    >
                      {tr.services.cta} →
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 grain"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #122857 0%, #0a1f44 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="font-display font-900 text-white text-4xl sm:text-5xl mb-4">
            ❄️ {tr.footer.spanishBadge} 🔥
          </div>
          <p className="font-body text-white/60 text-lg mb-8">813-578-1529 · Tampa, FL</p>
          <a
            href="tel:8135781529"
            className="inline-flex items-center gap-3 bg-flame text-white px-10 py-4 rounded-xl font-display font-700 text-xl hover:bg-flame-dark active:scale-95"
            style={{ boxShadow: '0 4px 20px rgba(232,76,27,0.45)' }}
          >
            📞 {tr.hero.cta1}
          </a>
        </div>
      </section>
    </>
  )
}
