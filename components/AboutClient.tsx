'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function AboutClient() {
  const { tr } = useLanguage()

  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 grain"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #122857 0%, #060f22 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-flame/10 border border-flame/30 text-flame-light px-4 py-1.5 rounded-full text-sm font-body font-600 mb-5">
            👨‍👩‍👧 Tampa, FL
          </div>
          <h1 className="font-display font-900 text-white text-5xl sm:text-6xl mb-4"
            style={{ letterSpacing: '-0.03em' }}>
            {tr.about.title}
          </h1>
          <p className="font-body text-white/60 text-lg leading-relaxed">{tr.about.sub}</p>
        </div>
      </section>

      <div className="bg-navy-dark -mb-1">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C360 40 1080 0 1440 20V40H0V20Z" fill="white" />
        </svg>
      </div>

      {/* Story section */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Team photo placeholder */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 16px 60px rgba(10,31,68,0.15), 0 4px 16px rgba(10,31,68,0.08)' }}>
            <Image
              src="https://placehold.co/600x500/0a1f44/38bdf8?text=Tapanes+Family+Team"
              alt={tr.about.teamLabel}
              width={600}
              height={500}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-display font-700 text-white text-xl">{tr.about.teamLabel}</div>
              <div className="font-body text-white/60 text-sm">Tampa, FL ❄️🔥</div>
            </div>
          </div>

          {/* Story text */}
          <div>
            <h2 className="font-display font-800 text-navy text-4xl sm:text-5xl mb-6"
              style={{ letterSpacing: '-0.02em' }}>
              {tr.about.title}
            </h2>
            <p className="font-body text-navy/70 text-lg leading-relaxed mb-5">
              {tr.about.story}
            </p>
            <p className="font-body text-navy/70 text-lg leading-relaxed mb-8">
              {tr.about.story2}
            </p>
            <div className="flex gap-3">
              <a
                href="tel:8135781529"
                className="flex items-center gap-2 bg-flame text-white px-6 py-3 rounded-xl font-display font-700 text-lg hover:bg-flame-dark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                style={{ boxShadow: '0 4px 20px rgba(232,76,27,0.4)' }}
              >
                📞 813-578-1529
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 border-2 border-navy/20 text-navy px-6 py-3 rounded-xl font-display font-700 text-lg hover:border-sky-brand hover:text-sky-dark active:scale-95"
              >
                {tr.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="section-pad grain"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #122857 0%, #0a1f44 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-800 text-white text-4xl sm:text-5xl text-center mb-12"
            style={{ letterSpacing: '-0.02em' }}>
            {tr.about.whyTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tr.about.reasons.map((reason) => (
              <div
                key={reason}
                className="bg-white/8 border border-white/10 rounded-xl px-6 py-4 font-body text-white/80 text-base leading-relaxed hover:bg-white/12 hover:border-sky-brand/30"
                style={{ transition: 'background 0.2s ease, border-color 0.2s ease' }}
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spanish badge band */}
      <section className="bg-flame py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="font-display font-900 text-white text-4xl sm:text-5xl mb-3">
            🇨🇺 {tr.footer.spanishBadge}
          </div>
        </div>
      </section>
    </>
  )
}
