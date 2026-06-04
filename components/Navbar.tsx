'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import Image from 'next/image'

export default function Navbar() {
  const { tr, lang, setLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { id: 'hero', label: tr.nav.home },
    { id: 'services', label: tr.nav.services },
    { id: 'about', label: tr.nav.about },
    { id: 'service-areas', label: tr.nav.serviceAreas },
    { id: 'contact', label: tr.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'bg-navy shadow-navy' : 'bg-navy/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand rounded-lg"
          aria-label="Tapanes Enterprise LLC - Back to top"
        >
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image src="/logo-nobg.png" alt="Tapanes Enterprise LLC Logo" fill className="object-contain" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-800 text-white text-lg tracking-tight leading-none">
              Tapanes Enterprise LLC
            </div>
            <div className="font-display text-sky-brand text-sm font-600 tracking-wide">
              The Family HVAC ❄️🔥
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-2 rounded-md font-body font-500 text-sm text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sky-brand/40 text-sky-brand text-xs font-body font-600 hover:bg-sky-brand hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
            aria-label={lang === 'es' ? 'Switch to English' : 'Switch to Spanish'}
          >
            {lang === 'es' ? '🇺🇸 EN' : '🇨🇺 ES'}
          </button>

          {/* Call CTA */}
          <a
            href="tel:8135781529"
            className="hidden md:flex items-center gap-2 bg-flame text-white px-4 py-2 rounded-lg font-display font-700 text-sm tracking-wide hover:bg-flame-dark active:scale-95 shadow-flame"
            aria-label="Call Tapanes Enterprise"
          >
            📞 813-578-1529
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10 px-4 pb-4 pt-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-4 py-3 rounded-lg font-body text-base mb-1 text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setMenuOpen(false) }}
              aria-label={lang === 'es' ? 'Switch to English' : 'Switch to Spanish'}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-sky-brand/40 text-sky-brand text-sm font-body font-600 hover:bg-sky-brand hover:text-navy"
            >
              {lang === 'es' ? '🇺🇸 English' : '🇨🇺 Español'}
            </button>
            <a
              href="tel:8135781529"
              className="flex-1 flex items-center justify-center gap-2 bg-flame text-white px-3 py-2.5 rounded-lg font-display font-700 text-sm hover:bg-flame-dark"
            >
              📞 813-578-1529
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
