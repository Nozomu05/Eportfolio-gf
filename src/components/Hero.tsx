import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" style={{ background: '#FAF6F0' }}>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#e2d5bd 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
      />
      <div className="absolute top-1/4 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-25" style={{ background: 'radial-gradient(circle, #0F6B65, transparent)' }} />
      <div className="absolute bottom-1/4 right-0 w-[420px] h-[420px] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #C9973A, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 py-16">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={item} className="text-[#0F6B65] font-semibold text-sm mb-4 tracking-widest uppercase">
            {t.hero.greeting}
          </motion.p>

          <motion.h1 variants={item} className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-[#241F1B] mb-4 leading-[1.05] tracking-tight">
            Shayana
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #0F6B65 0%, #C9973A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Struzik
            </span>
          </motion.h1>

          <motion.h2 variants={item} className="text-xl md:text-2xl font-semibold text-[#4a4238] mb-6">
            {t.hero.title}
          </motion.h2>

          <motion.p variants={item} className="text-[#6E6355] text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 bg-[#0F6B65] text-white font-semibold rounded-lg hover:bg-[#0c554f] transition-all duration-200 hover:shadow-lg hover:shadow-[#0F6B65]/20"
            >
              {t.hero.cta_projects}
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 border border-[#d8cbb0] text-[#4a4238] font-semibold rounded-lg hover:border-[#0F6B65] hover:text-[#0F6B65] transition-all duration-200"
            >
              {t.hero.cta_contact}
            </button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/shayana-kali-eno-struzik-79137429a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8071] hover:text-[#0F6B65] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:shayana25struzik@icloud.com"
              className="text-[#8a8071] hover:text-[#0F6B65] transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a89e8b]"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #0F6B65, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
