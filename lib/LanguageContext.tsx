'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { t, Lang, Translations } from './translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  tr: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  tr: t.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('tapanes-lang') as Lang | null
    if (stored === 'en' || stored === 'es') {
      setLangState(stored)
    }
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('tapanes-lang', newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
