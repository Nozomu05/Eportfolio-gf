import { en as t } from '../translations/en'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E4D9C6] py-8" style={{ background: '#FAF6F0' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#a89e8b] text-sm">
          © {year} Shayana Kali Eno Struzik — {t.footer.rights}
        </p>
        <p className="text-[#c9bda3] text-xs">
          {t.footer.built_with}
        </p>
      </div>
    </footer>
  )
}
