'use client'

import { useState, FormEvent } from 'react'
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

export default function ContactClient() {
  const { tr } = useLanguage()
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 grain"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #122857 0%, #060f22 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-brand/10 border border-sky-brand/30 text-sky-brand px-4 py-1.5 rounded-full text-sm font-body font-600 mb-5">
            📋 Free Quote
          </div>
          <h1 className="font-display font-900 text-white text-5xl sm:text-6xl mb-4"
            style={{ letterSpacing: '-0.03em' }}>
            {tr.contact.title}
          </h1>
          <p className="font-body text-white/60 text-lg leading-relaxed">{tr.contact.sub}</p>
        </div>
      </section>

      <div className="bg-navy-dark -mb-1">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C360 40 1080 0 1440 20V40H0V20Z" fill="white" />
        </svg>
      </div>

      <section className="bg-white section-pad">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-2">
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
                  <a href="tel:8135781529" className="font-display font-700 text-sky-brand text-2xl hover:text-sky-light">
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
                    <span className="text-lg">{item.icon}</span>
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
                <div className="text-6xl mb-6">✅</div>
                <h2 className="font-display font-800 text-navy text-4xl mb-3"
                  style={{ letterSpacing: '-0.02em' }}>
                  {tr.contact.successTitle}
                </h2>
                <p className="font-body text-navy/60 text-lg leading-relaxed max-w-md mb-8">
                  {tr.contact.successMsg}
                </p>
                <a
                  href="tel:8135781529"
                  className="flex items-center gap-2 bg-flame text-white px-8 py-4 rounded-xl font-display font-700 text-xl hover:bg-flame-dark active:scale-95"
                  style={{ boxShadow: '0 4px 20px rgba(232,76,27,0.4)' }}
                >
                  📞 813-578-1529
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-body font-600 text-navy text-sm mb-1.5">
                      {tr.contact.name} <span className="text-flame">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="María González"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-body font-600 text-navy text-sm mb-1.5">
                      {tr.contact.phone} <span className="text-flame">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(813) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-600 text-navy text-sm mb-1.5">
                    {tr.contact.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="maria@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-body font-600 text-navy text-sm mb-1.5">
                    {tr.contact.service} <span className="text-flame">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {tr.contact.serviceOptions.map((opt, i) => (
                      <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-600 text-navy text-sm mb-1.5">
                    {tr.contact.message}
                  </label>
                  <textarea
                    id="message"
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
                  className="w-full flex items-center justify-center gap-3 bg-flame text-white px-8 py-4 rounded-xl font-display font-700 text-xl hover:bg-flame-dark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ boxShadow: '0 4px 20px rgba(232,76,27,0.4), 0 2px 6px rgba(232,76,27,0.2)', transition: 'background-color 0.18s ease, transform 0.1s ease, opacity 0.18s ease' }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    tr.contact.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
