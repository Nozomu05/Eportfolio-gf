import { useState } from 'react'
import { motion } from 'framer-motion'
import { en as t } from '../translations/en'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

interface ContactItem {
  label: string
  value: string
  href?: string
  icon: React.ReactNode
  copyable?: boolean
}

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const contacts: ContactItem[] = [
    {
      label: t.contact.email_label,
      value: 'shayana25struzik@icloud.com',
      href: 'mailto:shayana25struzik@icloud.com',
      copyable: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: t.contact.linkedin_label,
      value: 'shayana-kali-eno-struzik',
      href: 'https://www.linkedin.com/in/shayana-kali-eno-struzik-79137429a/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: t.contact.location_label,
      value: 'Ho Chi Minh City, VN · Paris, FR',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ]

  const phoneNumbers = [
    { region: 'VN', value: '+84 90 278 22 97', href: 'tel:+84902782297' },
    { region: 'FR', value: '+33 6 65 66 51 71', href: 'tel:+33665665171' },
  ]

  const phoneIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a2.25 2.25 0 00-2.331.94l-.398.598a.75.75 0 01-.822.318 12.784 12.784 0 01-6.406-6.406.75.75 0 01.318-.822l.599-.398a2.25 2.25 0 00.94-2.33L6.964 3.354a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.75v2z" />
    </svg>
  )

  return (
    <section id="contact" className="py-28" style={{ background: '#FAF6F0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[#0F6B65] font-semibold text-xs tracking-widest uppercase mb-3">Contact</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#241F1B] mb-3">{t.contact.title}</h2>
            <p className="text-[#6E6355] text-lg">{t.contact.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((c) => {
              const content = (
                <>
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-[#F1E8DA] rounded-xl text-[#0F6B65] group-hover:bg-[#0F6B65]/10 transition-colors duration-200">
                      {c.icon}
                    </div>
                    {c.copyable && (
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          copy(c.value, c.label)
                        }}
                        className="text-xs text-[#a89e8b] hover:text-[#4a4238] transition-colors p-1.5 rounded-lg hover:bg-[#F1E8DA]"
                        aria-label={`Copy ${c.label}`}
                      >
                        {copied === c.label ? (
                          <svg className="w-4 h-4 text-[#0F6B65]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    )}
                  </div>
                  <div>
                    <p className="text-[#8a8071] text-xs mb-1">{c.label}</p>
                    <p className="text-[#241F1B] text-sm font-medium break-words leading-snug group-hover:text-[#0F6B65] transition-colors duration-200">
                      {copied === c.label ? t.contact.copy_success : c.value}
                    </p>
                  </div>
                </>
              )

              return (
                <motion.div key={c.label} variants={fadeUp}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex flex-col gap-3 bg-white/70 border border-[#E4D9C6] rounded-2xl p-6 hover:border-[#0F6B65]/40 transition-all duration-300 h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex flex-col gap-3 bg-white/70 border border-[#E4D9C6] rounded-2xl p-6 h-full">
                      {content}
                    </div>
                  )}
                </motion.div>
              )
            })}

            <motion.div variants={fadeUp}>
              <div className="flex flex-col gap-3 bg-white/70 border border-[#E4D9C6] rounded-2xl p-6 h-full">
                <div className="p-2.5 bg-[#F1E8DA] rounded-xl text-[#0F6B65] w-fit">{phoneIcon}</div>
                <div>
                  <p className="text-[#8a8071] text-xs mb-1">{t.contact.phone_label}</p>
                  <div className="flex flex-col gap-0.5">
                    {phoneNumbers.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="text-[#241F1B] text-sm font-medium leading-snug hover:text-[#0F6B65] transition-colors duration-200"
                      >
                        {p.value} <span className="text-[#a89e8b] text-xs">({p.region})</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
