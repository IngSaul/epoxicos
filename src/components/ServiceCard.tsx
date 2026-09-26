import { useLang } from '../lib/i18n'
import type { Service } from '../lib/data'
import { ArrowRight } from './ui'

export function ServiceCard({ service, onOpen }: { service: Service; onOpen: () => void }) {
  const { lang, t } = useLang()
  return (
    <article className="group relative cursor-pointer flex flex-col bg-white border transition-colors duration-300 hover:border-[var(--gold)]"
      style={{ borderColor: 'var(--border-gray)', borderRadius: 4 }}
    >
      <div className="overflow-hidden" style={{ borderRadius: '4px 4px 0 0' }}>
        <img
          src={service.image}
          alt={service.title[lang]}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ background: 'var(--border-gray)' }}
        />
      </div>
      <div className="flex flex-col gap-3 p-6 flex-1">
        <span className="eyebrow text-[var(--gold-dark)]">{service.sector[lang]}</span>
        <h3 className="h3 text-[var(--charcoal)]">{service.title[lang]}</h3>
        <p className="text-[var(--concrete)] text-[0.95rem] leading-relaxed flex-1">{service.benefit[lang]}</p>
        <button
          type="button"
          onClick={onOpen}
          className="mt-2 inline-flex items-center gap-2 font-head font-semibold uppercase tracking-wide text-[var(--gold-dark)] group-hover:gap-3 transition-all w-fit after:absolute after:inset-0 after:content-['']"
        >
          {t.solutions.detail} <ArrowRight size={16} />
        </button>
      </div>
    </article>
  )
}
