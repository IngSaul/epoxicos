import { useLang, waLink } from '../lib/i18n'
import { WhatsAppIcon } from './ui'

export function WhatsAppFloat() {
  const { t } = useLang()
  return (
    <a
      href={waLink(t.wa.generic)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.wa.float}
      className="group fixed bottom-5 right-5 z-40 flex items-center"
    >
      {/* tooltip (desktop hover) */}
      <span className="hidden md:block mr-3 px-3 py-2 rounded-[4px] text-sm font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
        style={{ background: 'var(--charcoal)', color: 'var(--epoxy-white)', border: '1px solid rgba(201,162,74,0.3)' }}
      >
        {t.wa.float}
      </span>
      <span
        className="grid place-items-center w-14 h-14 rounded-full text-white shadow-lg"
        style={{ background: '#25D366', animation: 'wa-pulse 4s ease-in-out infinite' }}
      >
        <WhatsAppIcon size={30} color="#fff" />
      </span>
    </a>
  )
}
