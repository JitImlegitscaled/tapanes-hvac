'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function FloatingCallButton() {
  const { tr } = useLanguage()

  return (
    <a
      href="tel:8135781529"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-2 bg-flame text-white px-6 py-3.5 rounded-full font-display font-700 text-base tracking-wide shadow-flame hover:bg-flame-dark active:scale-95"
      aria-label="Call Tapanes Enterprise LLC"
      style={{ boxShadow: '0 4px 20px rgba(232,76,27,0.5), 0 2px 6px rgba(232,76,27,0.3)' }}
    >
      <span className="text-lg">📞</span>
      {tr.floatingCall} · 813-578-1529
    </a>
  )
}
