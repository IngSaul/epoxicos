import { useEffect } from 'react'
import { useLang, waLink } from '../lib/i18n'
import type { Service } from '../lib/data'
import { Button } from './Button'
import { WhatsAppIcon, Eyebrow } from './ui'

export function ServiceModal({ service, onClose }: { service: Service | null; onClose: () => void }) {
  useEffect(() => {
    if (!service) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [service, onClose])

  const { lang, t } = useLang()
  if (!service) return null

  const msg =
    lang === 'es'
      ? `Hola, me interesa cotizar el sistema "${service.title.es}".`
      : `Hello, I would like a quote for the "${service.title.en}" system.`

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: 'rgba(20,20,20,0.75)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={service.title[lang]}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white"
        style={{ borderRadius: 4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.projects.lightboxClose}
          className="absolute top-4 right-4 z-10 grid place-items-center w-10 h-10 bg-[var(--charcoal)] text-white rounded-[4px] hover:bg-[var(--gold)] hover:text-[var(--charcoal)] transition-colors"
        >
          ✕
        </button>

        <img
          src={service.image}
          alt={service.title[lang]}
          className="w-full aspect-[16/9] object-cover"
          style={{ background: 'var(--border-gray)' }}
        />

        <div className="p-7 sm:p-9 flex flex-col gap-5">
          <Eyebrow>{service.sector[lang]}</Eyebrow>
          <h2 className="h2 text-[var(--charcoal)]">{service.title[lang]}</h2>
          <p className="text-[var(--charcoal)]/80 leading-relaxed">{service.description[lang]}</p>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-[var(--gold-dark)]">{t.solutions.gallery}</span>
            <div className="grid grid-cols-3 gap-2">
              {service.gallery.map((g, i) => (
                <img
                  key={i}
                  src={g}
                  alt={`${service.title[lang]} — ${i + 1}`}
                  loading="lazy"
                  className="w-full aspect-square object-cover rounded-[4px]"
                  style={{ background: 'var(--border-gray)' }}
                />
              ))}
            </div>
          </div>

          <Button variant="primary" href={waLink(msg)} external className="w-full sm:w-fit mt-2">
            <WhatsAppIcon size={20} /> {t.solutions.quoteThis}
          </Button>
        </div>
      </div>
    </div>
  )
}
