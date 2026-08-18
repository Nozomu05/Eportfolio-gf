import { motion } from 'framer-motion'
import { en as t } from '../translations/en'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-28" style={{ background: '#FAF6F0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[#0F6B65] font-semibold text-xs tracking-widest uppercase mb-3">Projects</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#241F1B] mb-3">{t.projects.title}</h2>
            <p className="text-[#6E6355] text-lg">{t.projects.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.projects.items.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`group relative bg-white/70 border border-[#E4D9C6] rounded-2xl p-7 hover:border-[#0F6B65]/40 transition-all duration-300 flex flex-col ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl font-semibold text-[#241F1B] group-hover:text-[#0F6B65] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#0F6B65] bg-[#0F6B65]/10 border border-[#0F6B65]/30 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 ml-3">
                    {project.badge}
                  </span>
                </div>

                <p className="text-[#4a4238] text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                <div>
                  <p className="text-[#8a8071] text-xs font-semibold tracking-wide uppercase mb-2">{t.projects.skills_label}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#F1E8DA] text-[#4a4238] border border-[#E4D9C6]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
