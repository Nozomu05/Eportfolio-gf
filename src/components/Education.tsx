import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-28" style={{ background: '#F1E8DA' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[#0F6B65] font-semibold text-xs tracking-widest uppercase mb-3">Education</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#241F1B] mb-3">{t.education.title}</h2>
            <p className="text-[#6E6355] text-lg">{t.education.subtitle}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[#ddd0b5]" />

            <div className="space-y-8">
              {t.education.items.map((edu, i) => (
                <motion.div key={i} variants={fadeUp} className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-4 top-6 w-3 h-3 rounded-full bg-white border-2 border-[#C9973A]" />

                  <div className="bg-white/70 border border-[#ddd0b5] rounded-2xl p-7 hover:border-[#c9bda3] transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-[#241F1B] font-bold text-lg leading-snug">{edu.degree}</h3>
                        <p className="text-[#a97a1f] font-medium text-sm mt-0.5">{edu.school}</p>
                        <p className="text-[#8a8071] text-xs mt-0.5">{edu.location}</p>
                      </div>
                      <span className="text-xs font-medium text-[#6E6355] bg-[#FAF6F0] px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-[#6E6355] text-sm mt-3 flex items-start gap-2">
                      <span className="text-[#C9973A] shrink-0">▸</span>
                      {edu.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
