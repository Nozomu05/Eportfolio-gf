import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'

const NAV_IDS = ['about', 'skills', 'experience', 'education', 'projects', 'achievements', 'contact'] as const
type NavId = typeof NAV_IDS[number]

export default function Header() {
  const { t, language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    if (mobileOpen) {
      setMobileOpen(false)
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 250)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLabels: Record<NavId, string> = {
    about: t.nav.about,
    skills: t.nav.skills,
    experience: t.nav.experience,
    education: t.nav.education,
    projects: t.nav.projects,
    achievements: t.nav.achievements,
    contact: t.nav.contact,
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E4D9C6]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-base sm:text-lg md:text-xl font-semibold text-[#241F1B] hover:text-[#0F6B65] transition-colors whitespace-nowrap"
        >
          Shayana Kali Eno <span className="text-[#0F6B65]">Struzik</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-[#6E6355] hover:text-[#241F1B] transition-colors font-medium"
            >
              {navLabels[id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-[#d8cbb0] p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-colors duration-200 ${
                language === 'en' ? 'bg-[#0F6B65] text-white' : 'text-[#6E6355] hover:text-[#241F1B]'
              }`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 rounded-full transition-colors duration-200 ${
                language === 'fr' ? 'bg-[#0F6B65] text-white' : 'text-[#6E6355] hover:text-[#241F1B]'
              }`}
              aria-pressed={language === 'fr'}
            >
              FR
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#241F1B] transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#241F1B] transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#241F1B] transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E4D9C6]"
          >
            <nav className="flex flex-col px-6 py-5 gap-5">
              {NAV_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-[#6E6355] hover:text-[#241F1B] transition-colors font-medium"
                >
                  {navLabels[id]}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
