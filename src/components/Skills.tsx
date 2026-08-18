import { motion } from 'framer-motion'
import { en as t } from '../translations/en'
import type { Translations } from '../translations/en'

type CategoryKey = keyof Translations['skills']['categories']

const categoryStyle: Record<CategoryKey, { chip: string; header: string }> = {
  people: { chip: 'text-[#0F6B65] border-[#0F6B65]/30 bg-[#0F6B65]/5', header: 'text-[#0F6B65]' },
  marketing: { chip: 'text-[#a97a1f] border-[#C9973A]/40 bg-[#C9973A]/10', header: 'text-[#a97a1f]' },
  business: { chip: 'text-[#a34a26] border-[#B2552F]/30 bg-[#B2552F]/5', header: 'text-[#a34a26]' },
  tools: { chip: 'text-[#6B3F69] border-[#6B3F69]/30 bg-[#6B3F69]/5', header: 'text-[#6B3F69]' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  const categories = Object.entries(t.skills.categories) as [CategoryKey, { label: string; items: string[] }][]

  return (
    <section id="skills" className="py-28" style={{ background: '#F1E8DA' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[#0F6B65] font-semibold text-xs tracking-widest uppercase mb-3">Skills</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#241F1B] mb-3">{t.skills.title}</h2>
            <p className="text-[#6E6355] text-lg">{t.skills.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map(([key, cat]) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="bg-white/70 border border-[#E4D9C6] rounded-2xl p-7 hover:border-[#d8cbb0] transition-colors duration-300"
              >
                <p className={`text-xs tracking-widest uppercase mb-4 font-semibold ${categoryStyle[key].header}`}>
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default ${categoryStyle[key].chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
