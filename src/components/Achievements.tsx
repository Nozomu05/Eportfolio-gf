import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import certificate from '../assets/boo-certificate.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Achievements() {
  const { t } = useLanguage()
  const { item } = t.achievements

  return (
    <section id="achievements" className="py-28" style={{ background: '#F1E8DA' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[#0F6B65] font-semibold text-xs tracking-widest uppercase mb-3">Achievements</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#241F1B] mb-3">{t.achievements.title}</h2>
            <p className="text-[#6E6355] text-lg">{t.achievements.subtitle}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white border border-[#ddd0b5] rounded-2xl p-6 sm:p-8 grid md:grid-cols-5 gap-8 items-center"
          >
            <div className="md:col-span-2">
              <img
                src={certificate}
                alt={item.image_alt}
                className="w-full h-auto rounded-lg border border-[#E4D9C6] shadow-sm"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-3">
              <span className="inline-block text-xs font-semibold text-[#a97a1f] bg-[#C9973A]/10 border border-[#C9973A]/40 px-2.5 py-1 rounded-full mb-3">
                {item.date}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#241F1B] mb-2">{item.title}</h3>
              <p className="text-[#0F6B65] font-medium text-sm mb-4">{item.issuer}</p>
              <p className="text-[#4a4238] text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
