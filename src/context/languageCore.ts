import { createContext } from 'react'
import { en } from '../translations/en'
import { fr } from '../translations/fr'

export const translations = { en, fr }

export type Language = keyof typeof translations

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: typeof en
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
