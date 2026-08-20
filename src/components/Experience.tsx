import { motion } from 'framer-motion'
import { en as t } from '../translations/en'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 scroll-mt-24" style={{ background: '#FAF6F0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[#0F6B65] font-semibold text-xs tracking-widest uppercase mb-3">Experience</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#241F1B] mb-3">{t.experience.title}</h2>
            <p className="text-[#6E6355] text-lg">{t.experience.subtitle}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[#E4D9C6]" />

            <div className="space-y-10">
              {t.experience.items.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative pl-12 md:pl-16"
                >
                  <div
                    className={`absolute left-2.5 md:left-4 top-6 w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? 'bg-[#0F6B65] border-[#0F6B65] shadow-lg shadow-[#0F6B65]/40'
                        : 'bg-white border-[#d8cbb0]'
                    }`}
                  />

                  <div className="bg-white/70 border border-[#E4D9C6] rounded-2xl p-7 hover:border-[#d8cbb0] transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-[#241F1B] font-bold text-lg">{exp.role}</h3>
                          {exp.badge && (
                            <span className="text-xs font-semibold text-[#0F6B65] bg-[#0F6B65]/10 border border-[#0F6B65]/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[#0F6B65] font-medium text-sm">{exp.company}</p>
                        <p className="text-[#8a8071] text-xs mt-0.5">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-medium text-[#6E6355] bg-[#F1E8DA] px-3 py-1.5 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-xs font-semibold text-[#0F6B65] bg-[#0F6B65]/10 border border-[#0F6B65]/30 px-2.5 py-1 rounded-full">
                            {t.experience.present}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-[#4a4238]">
                          <span className="text-[#0F6B65] mt-1 shrink-0">▸</span>
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-[#6E6355] leading-relaxed italic border-t border-[#E4D9C6] pt-4">
                      {exp.reflection}
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
