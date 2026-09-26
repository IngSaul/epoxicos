import { useLang, type Lang } from '../lib/i18n'

export function LanguageSwitch({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const { lang, setLang } = useLang()
  const opts: Lang[] = ['es', 'en']
  const pad = size === 'lg' ? 'px-4 py-2 text-base' : 'px-3 py-1 text-sm'
  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-[4px] border p-0.5"
      style={{ borderColor: 'rgba(201,162,74,0.4)' }}
      role="group"
      aria-label="Language / Idioma"
    >
      {opts.map((o) => {
        const active = lang === o
        return (
          <button
            key={o}
            type="button"
            onClick={() => setLang(o)}
            aria-pressed={active}
            className={`font-mono uppercase tracking-widest rounded-[3px] transition-colors duration-200 ${pad}`}
            style={{
              background: active ? 'var(--gold)' : 'transparent',
              color: active ? 'var(--charcoal)' : 'var(--concrete)',
              fontWeight: active ? 600 : 400,
            }}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}
