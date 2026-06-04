'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const inputClass = `w-full bg-white border border-navy/20 rounded-xl px-4 py-3 font-body text-navy text-base
  placeholder:text-navy/40
  focus:outline-none focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20
  hover:border-navy/40`

type ServiceKey = 'repair' | 'install' | 'maintenance'

const SERVICE_ICONS: Record<ServiceKey, string> = {
  repair: '🔧',
  install: '❄️',
  maintenance: '🔩',
}

function StyledImagePlaceholder({ text, aspectClass = 'aspect-[6/5]' }: { text: string; aspectClass?: string }) {
  return (
    <div
      className={`relative w-full ${aspectClass} flex items-center justify-center rounded-2xl overflow-hidden`}
      style={{ background: 'linear-gradient(135deg, #0a1f44 0%, #1a3a6e 100%)' }}
      role="img"
      aria-label={text}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(56,189,248,0.12) 0%, transparent 70%)',
        }}
      />
      <p className="relative z-10 text-white/60 text-lg italic font-body text-center px-6 leading-relaxed">
        {text}
      </p>
    </div>
  )
}

export default function HomeClient() {
  const { lang, tr } = useLanguage()
  const [openCard, setOpenCard] = useState<ServiceKey | null>(null)
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)
  const [aboutVisible, setAboutVisible] = useState(false)

  useEffect(() => {
    const el = aboutRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAboutVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const toggle = (key: ServiceKey) => setOpenCard(prev => prev === key ? null : key)

  const services: { key: ServiceKey; data: typeof tr.services.repair }[] = [
    { key: 'repair', data: tr.services.repair },
    { key: 'install', data: tr.services.install },
    { key: 'maintenance', data: tr.services.maintenance },
  ]

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden grain pt-20"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 40%, #122857 0%, #0a1f44 50%, #060f22 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 80% 60%, rgba(56,189,248,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 10% 30%, rgba(232,76,27,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-brand/10 border border-sky-brand/30 text-sky-brand px-4 py-1.5 rounded-full text-sm font-body font-600 mb-6">
              ❄️ {tr.hero.badge}
            </div>

            <h1
              className="font-display font-900 text-white text-5xl sm:text-6xl lg:text-7xl mb-6 whitespace-pre-line"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.0 }}
            >
              HVAC Tampa —{'\n'}{tr.hero.headline}
            </h1>

            <p className="font-body text-white/70 text-lg sm:text-xl mb-8 max-w-lg leading-relaxed">
              {tr.hero.sub}
            </p>

            <div className="flex gap-3 mb-8">
              <span className="bg-white/10 border border-white/20 text-white/80 px-3 py-1 rounded-full text-sm font-body">
                {tr.hero.spanish}
              </span>
              <span className="bg-white/10 border border-white/20 text-white/80 px-3 py-1 rounded-full text-sm font-body">
                {tr.hero.english}
              </span>
            </div>

            {/* Trust badge — visible above fold on desktop */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 mb-8">
              <div className="font-display font-900 text-flame text-3xl leading-none">100%</div>
              <div className="font-body text-white text-sm font-600">
                {lang === 'en' ? 'Satisfaction Guaranteed' : 'Satisfacción Garantizada'}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8135781529"
                aria-label="Call Tapanes Enterprise at 813-578-1529"
                className="flex items-center justify-center gap-2 bg-flame text-white px-8 py-4 rounded-xl font-display font-700 text-lg tracking-wide hover:bg-flame-dark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                style={{ boxShadow: '0 4px 20px rgba(232,76,27,0.45), 0 2px 8px rgba(232,76,27,0.25)' }}
              >
                📞 {tr.hero.cta1}
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Get a free HVAC quote"
                className="flex items-center justify-center gap-2 bg-white/10 border border-sky-brand/40 text-sky-brand px-8 py-4 rounded-xl font-display font-700 text-lg tracking-wide hover:bg-sky-brand hover:text-navy active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
              >
                {tr.hero.cta2} →
              </button>
            </div>
          </div>

          {/* Right: styled hero image placeholder */}
          <div className="relative hidden lg:block">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 24px 64px rgba(10,31,68,0.6), 0 4px 16px rgba(10,31,68,0.3)' }}
            >
              <StyledImagePlaceholder text="Hero Image Coming Soon" aspectClass="aspect-[6/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent mix-blend-multiply pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 30C360 60 1080 0 1440 30V60H0V30Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BADGES ─────────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2
            className="font-display font-800 text-navy text-4xl sm:text-5xl text-center mb-12"
            style={{ letterSpacing: '-0.02em' }}
          >
            {tr.trust.title}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {tr.trust.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-navy/8 hover:border-sky-brand/40 hover:-translate-y-1"
                style={{
                  boxShadow: '0 2px 16px rgba(10,31,68,0.08), 0 1px 4px rgba(10,31,68,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                <div className="font-display font-700 text-navy text-xl mb-1">{item.label}</div>
                <div className="font-body text-navy/60 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES (ACCORDION) ──────────────────────────────── */}
      <section
        id="services"
        className="section-pad grain"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 30% 50%, #122857 0%, #0a1f44 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="font-display font-800 text-white text-4xl sm:text-5xl mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              {tr.servicesSummary.title}
            </h2>
            <p className="font-body text-white/60 text-lg">{tr.servicesSummary.sub}</p>
          </div>

          <div className="flex flex-col gap-4">
            {services.map(({ key, data }) => {
              const isOpen = openCard === key
              return (
                <div
                  key={key}
                  className="rounded-2xl overflow-hidden group"
                  style={{
                    border: isOpen
                      ? '2px solid #0a1f44'
                      : '2px solid rgba(255,255,255,0.1)',
                    boxShadow: isOpen
                      ? '0 8px 32px rgba(10,31,68,0.5), 0 2px 8px rgba(10,31,68,0.3)'
                      : '0 2px 8px rgba(10,31,68,0.2)',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease',
                    background: isOpen ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.06)',
                    transform: 'translateY(0)',
                  }}
                  onMouseEnter={e => {
                    if (!isOpen) (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                    if (!isOpen) (e.currentTarget as HTMLDivElement).style.borderColor = '#38bdf8'
                    if (!isOpen) (e.currentTarget as HTMLDivElement).style.borderLeftWidth = '4px'
                  }}
                  onMouseLeave={e => {
                    if (!isOpen) {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.transform = 'translateY(0)'
                      el.style.borderColor = 'rgba(255,255,255,0.1)'
                      el.style.borderLeftWidth = '2px'
                    }
                  }}
                >
                  {/* Card header */}
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center gap-5 px-7 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand rounded-2xl"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${data.name} service details`}
                    style={{ transition: 'background 0.2s ease' }}
                  >
                    <span
                      className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl"
                      aria-hidden="true"
                      style={{
                        background: isOpen ? 'rgba(10,31,68,0.08)' : 'rgba(255,255,255,0.1)',
                      }}
                    >
                      {SERVICE_ICONS[key]}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div
                        className="font-display font-700 text-xl"
                        style={{ color: isOpen ? '#0a1f44' : '#ffffff' }}
                      >
                        {data.name}
                      </div>
                      <div
                        className="font-body text-sm mt-0.5 truncate"
                        style={{ color: isOpen ? 'rgba(10,31,68,0.6)' : 'rgba(255,255,255,0.55)' }}
                      >
                        {tr.servicesSummary[key].desc}
                      </div>
                    </div>

                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-700 text-xl leading-none"
                      aria-hidden="true"
                      style={{
                        background: isOpen ? '#0a1f44' : 'rgba(255,255,255,0.12)',
                        color: isOpen ? '#38bdf8' : '#ffffff',
                        transition: 'background 0.2s ease, color 0.2s ease',
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Expandable content — smooth max-height transition */}
                  <div
                    style={{
                      maxHeight: isOpen ? '520px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    <div className="px-7 pb-7 pt-0">
                      <div
                        className="border-t pt-5 mb-5"
                        style={{ borderColor: 'rgba(10,31,68,0.12)' }}
                      >
                        <p className="font-body text-navy/70 text-base leading-relaxed mb-5">
                          {data.desc}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {data.points.map((point) => (
                            <li key={point} className="flex items-start gap-3 font-body text-navy/80 text-sm">
                              <span className="text-sky-dark mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact"
                          aria-label={`Get a free quote for ${data.name}`}
                          className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-md font-display font-700 text-base hover:bg-[#061530] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                          style={{ boxShadow: '0 4px 16px rgba(10,31,68,0.4)' }}
                        >
                          {tr.hero.cta2} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section
        id="about"
        ref={aboutRef}
        className="section-pad grain"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #122857 0%, #0a1f44 100%)',
          opacity: aboutVisible ? 1 : 0,
          transform: aboutVisible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Team photo placeholder */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 16px 60px rgba(10,31,68,0.5), 0 4px 16px rgba(10,31,68,0.3)' }}
          >
            <StyledImagePlaceholder
              text={lang === 'en' ? 'Team Photo Coming Soon' : 'Foto del Equipo Próximamente'}
              aspectClass="aspect-[6/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-display font-700 text-white text-xl">{tr.about.teamLabel}</div>
              <div className="font-body text-white/60 text-sm">Tampa, FL ❄️🔥</div>
            </div>
          </div>

          {/* Story text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-flame/10 border border-flame/30 text-flame-light px-4 py-1.5 rounded-full text-sm font-body font-600 mb-5">
              👨‍👩‍👧 Tampa, FL
            </div>
            <h2
              className="font-display font-800 text-white text-4xl sm:text-5xl mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              {tr.about.title}
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-5">
              {tr.about.story}
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
              {tr.about.story2}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {tr.about.reasons.map((reason) => (
                <div
                  key={reason}
                  className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 font-body text-white/80 text-sm leading-relaxed hover:bg-white/12 hover:border-sky-brand/30"
                  style={{ transition: 'background 0.2s ease, border-color 0.2s ease' }}
                >
                  {reason}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="tel:8135781529"
                aria-label="Call Tapanes Enterprise at 813-578-1529"
                className="flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-md font-display font-700 text-lg hover:bg-[#061530] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                style={{ boxShadow: '0 4px 20px rgba(10,31,68,0.4)' }}
              >
                📞 813-578-1529
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Get a free HVAC quote"
                className="flex items-center gap-2 border-2 border-white/20 text-white px-6 py-3 rounded-md font-display font-700 text-lg hover:border-sky-brand hover:text-sky-brand active:scale-95"
              >
                {tr.nav.contact}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ─────────────────────────────────────── */}
      <section id="service-areas" className="bg-white section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky-brand/10 border border-sky-brand/30 text-sky-dark px-4 py-1.5 rounded-full text-sm font-body font-600 mb-5">
              📍 Tampa Bay Area
            </div>
            <h2
              className="font-display font-800 text-navy text-4xl sm:text-5xl mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              {tr.areas.title}
            </h2>
            <p className="font-body text-navy/60 text-lg">{tr.areas.sub}</p>
          </div>

          {/* Google Maps iframe */}
          <div
            className="relative rounded-2xl overflow-hidden mb-12 w-full"
            style={{ boxShadow: '0 16px 60px rgba(10,31,68,0.15)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224522.6382498538!2d-82.56910645!3d27.9944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f9c5d8a7d0e1b!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tapanes Enterprise LLC service area map — Tampa, FL"
            />
          </div>

          {/* City grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tr.areas.cities.map((city, idx) => (
              <div
                key={city}
                className="group flex items-center gap-3 bg-white border border-navy/10 rounded-xl px-4 py-4 hover:border-sky-brand hover:bg-sky-brand/5 hover:-translate-y-0.5"
                style={{
                  boxShadow: '0 2px 12px rgba(10,31,68,0.06)',
                  transition: 'transform 0.18s ease, border-color 0.18s ease, background 0.18s ease',
                }}
              >
                <span className="text-sky-brand text-lg flex-shrink-0" aria-hidden="true">{idx === 0 ? '⭐' : '📍'}</span>
                <span className="font-body font-600 text-navy text-sm group-hover:text-sky-dark">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET A QUOTE ──────────────────────────────────────── */}
      <section id="contact" className="bg-white section-pad">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky-brand/10 border border-sky-brand/30 text-sky-dark px-4 py-1.5 rounded-full text-sm font-body font-600 mb-5">
              📋 Free Quote
            </div>
            <h2
              className="font-display font-800 text-navy text-4xl sm:text-5xl mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              {tr.contact.title}
            </h2>
            <p className="font-body text-navy/60 text-lg leading-relaxed">{tr.contact.sub}</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-2" aria-label="Contact information">
              <div
                className="bg-navy rounded-2xl p-8 sticky top-24"
                style={{ boxShadow: '0 8px 40px rgba(10,31,68,0.2)' }}
              >
                <div className="font-display font-800 text-white text-2xl mb-2">
                  Tapanes Enterprise LLC
                </div>
                <div className="font-display text-sky-brand font-600 text-lg mb-6">
                  The Family HVAC ❄️🔥
                </div>

                <div className="space-y-5 mb-8">
                  <div>
                    <div className="font-body text-white/50 text-xs uppercase tracking-wider mb-1">{tr.contact.callCta}</div>
                    <a
                      href="tel:8135781529"
                      aria-label="Call Tapanes Enterprise at 813-578-1529"
                      className="font-display font-700 text-sky-brand text-2xl hover:text-sky-light"
                    >
                      📞 813-578-1529
                    </a>
                  </div>
                  <div>
                    <div className="font-body text-white/50 text-xs uppercase tracking-wider mb-1">Location</div>
                    <div className="font-body text-white/80 text-base">📍 Tampa, FL</div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-3">
                  {tr.trust.items.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-lg" aria-hidden="true">{item.icon}</span>
                      <span className="font-body text-white/70 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 bg-flame/20 border border-flame/30 text-flame-light px-3 py-1.5 rounded-full text-sm font-body font-600">
                  {tr.footer.spanishBadge}
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border border-sky-brand/20"
                  style={{ boxShadow: '0 4px 24px rgba(56,189,248,0.1)' }}
                >
                  <div className="text-6xl mb-6" aria-hidden="true">✅</div>
                  <h3 className="font-display font-800 text-navy text-4xl mb-3"
                    style={{ letterSpacing: '-0.02em' }}>
                    {tr.contact.successTitle}
                  </h3>
                  <p className="font-body text-navy/60 text-lg leading-relaxed max-w-md mb-8">
                    {tr.contact.successMsg}
                  </p>
                  <a
                    href="tel:8135781529"
                    aria-label="Call Tapanes Enterprise at 813-578-1529"
                    className="flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-md font-display font-700 text-xl hover:bg-[#061530] active:scale-95"
                    style={{ boxShadow: '0 4px 20px rgba(10,31,68,0.4)' }}
                  >
                    📞 813-578-1529
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="home-name" className="block font-body font-600 text-navy text-sm mb-1.5">
                        {tr.contact.name} <span className="text-flame" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="home-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="María González"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-phone" className="block font-body font-600 text-navy text-sm mb-1.5">
                        {tr.contact.phone} <span className="text-flame" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="home-phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(813) 000-0000"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="home-email" className="block font-body font-600 text-navy text-sm mb-1.5">
                      {tr.contact.email}
                    </label>
                    <input
                      id="home-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="maria@email.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="home-service" className="block font-body font-600 text-navy text-sm mb-1.5">
                      {tr.contact.service} <span className="text-flame" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="home-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                      aria-required="true"
                    >
                      {tr.contact.serviceOptions.map((opt, i) => (
                        <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="home-message" className="block font-body font-600 text-navy text-sm mb-1.5">
                      {tr.contact.message}
                    </label>
                    <textarea
                      id="home-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="My AC stopped cooling..."
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    aria-label="Submit free quote request"
                    className="w-full flex items-center justify-center gap-3 bg-navy text-white px-8 py-4 rounded-md font-display font-700 text-xl hover:bg-[#061530] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ boxShadow: '0 4px 20px rgba(10,31,68,0.4), 0 2px 6px rgba(10,31,68,0.2)', transition: 'background-color 0.18s ease, transform 0.1s ease, opacity 0.18s ease' }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {lang === 'en' ? 'Sending...' : 'Enviando...'}
                      </>
                    ) : (
                      tr.contact.submit
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA BAND ─────────────────────────────────── */}
      <section
        id="contact-cta"
        className="py-16 grain"
        style={{
          background: 'linear-gradient(135deg, #e84c1b 0%, #c43d13 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="font-display font-900 text-white text-4xl sm:text-5xl mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            {lang === 'en' ? 'We Speak Spanish 🇺🇸🇨🇺' : 'Se habla Español 🇨🇺'}
          </div>
          <p className="font-body text-white/80 text-lg mb-8">{tr.hero.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8135781529"
              aria-label="Call Tapanes Enterprise at 813-578-1529"
              className="flex items-center justify-center gap-2 bg-white text-flame px-8 py-4 rounded-md font-display font-700 text-xl hover:bg-white/90 active:scale-95 shadow-navy"
            >
              📞 813-578-1529
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Get a free HVAC quote"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-md font-display font-700 text-lg hover:bg-white hover:text-flame active:scale-95"
            >
              {tr.hero.cta2}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
