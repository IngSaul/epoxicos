import { useLang } from '../lib/i18n'
import { CLIENTS } from '../lib/data'

function LogoPill({ name }: { name: string }) {
  return (
    <span
      className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-head font-semibold uppercase tracking-wide text-[1.15rem] whitespace-nowrap"
      style={{ color: 'var(--epoxy-white)' }}
    >
      {name}
    </span>
  )
}

export function ClientStrip() {
  const { t } = useLang()
  return (
    <section aria-label={t.home.clients} style={{ background: 'var(--strip)' }}>
      <div className="shell py-8 flex flex-col lg:flex-row lg:items-center gap-6">
        <span className="eyebrow shrink-0 text-[var(--concrete)]">{t.home.clients}</span>

        {/* Desktop: static row */}
        <div className="hidden md:flex flex-wrap items-center gap-x-10 gap-y-4 lg:justify-between lg:flex-1">
          {CLIENTS.map((c) => (
            <LogoPill key={c} name={c} />
          ))}
        </div>

        {/* Mobile: marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="marquee-track gap-10 pr-10">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <LogoPill key={`${c}-${i}`} name={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
