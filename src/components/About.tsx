import { motion } from 'framer-motion'
import { en as t } from '../translations/en'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: '#FAF6F0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[#0F6B65] font-semibold text-xs tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#241F1B] mb-3">{t.about.title}</h2>
            <p className="text-[#6E6355] text-lg">{t.about.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-14 items-start">
            <motion.div variants={fadeUp} className="md:col-span-3 space-y-5">
              <p className="text-[#3d372e] text-base leading-relaxed">{t.about.p1}</p>
              <p className="text-[#3d372e] text-base leading-relaxed">{t.about.p2}</p>

              <div className="pt-2">
                <p className="text-[#241F1B] font-semibold text-sm mb-3">{t.about.languages_title}</p>
                <div className="flex flex-wrap gap-2">
                  {t.about.languages.map(({ lang, level }) => (
                    <span
                      key={lang}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E4D9C6] rounded-full text-sm"
                    >
                      <span className="text-[#241F1B] font-medium">{lang}</span>
                      <span className="text-[#c9bda3]">·</span>
                      <span className="text-[#0F6B65] text-xs">{level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2 grid grid-cols-2 gap-4">
              {t.about.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white border border-[#E4D9C6] rounded-2xl p-6 hover:border-[#0F6B65]/40 transition-colors duration-300 group"
                >
                  <p className="font-serif text-4xl font-semibold text-[#0F6B65] mb-1 group-hover:scale-105 transition-transform duration-200 inline-block">
                    {value}
                  </p>
                  <p className="text-[#6E6355] text-xs leading-snug">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
