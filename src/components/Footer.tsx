import { useLang, waLink } from '../lib/i18n'
import { Logo, FacebookIcon } from './ui'
import { LanguageSwitch } from './LanguageSwitch'
import type { Route } from '../App'

export function Footer({ route, navigate }: { route: Route; navigate: (r: Route) => void }) {
  const { t } = useLang()
  const items: { route: Route; key: 'inicio' | 'soluciones' | 'especificaciones' | 'proyectos' | 'contacto' }[] = [
    { route: 'inicio', key: 'inicio' },
    { route: 'soluciones', key: 'soluciones' },
    { route: 'especificaciones', key: 'especificaciones' },
    { route: 'proyectos', key: 'proyectos' },
    { route: 'contacto', key: 'contacto' },
  ]

  return (
    <footer
      className="hex-bg"
      style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(201,162,74,0.25)' }}
    >
      <div className="shell py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Identity */}
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="text-[var(--concrete)] text-sm max-w-xs leading-relaxed">{t.footer.identityText}</p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-4">
          <h4 className="eyebrow text-[var(--gold)]">{t.footer.nav}</h4>
          <ul className="flex flex-col gap-3">
            {items.map((it) => (
              <li key={it.route}>
                <a
                  href={`#${it.route}`}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(it.route)
                  }}
                  data-active={route === it.route}
                  className="navlink font-head uppercase tracking-wide text-[var(--epoxy-white)] w-fit"
                >
                  {t.nav[it.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h4 className="eyebrow text-[var(--gold)]">{t.footer.info}</h4>
          <ul className="flex flex-col gap-3 text-sm text-[var(--concrete)]">
            <li>
              <a href={waLink(t.wa.generic)} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--sand)] transition-colors font-mono">
                WhatsApp · 712 178 5347
              </a>
            </li>
            <li>
              <a href="mailto:epoxicoslai@gmail.com" className="hover:text-[var(--sand)] transition-colors">
                epoxicoslai@gmail.com
              </a>
            </li>
            <li>{t.contact.coverage}: {t.contact.coverageVal}</li>
          </ul>
        </div>

        {/* Follow */}
        <div className="flex flex-col gap-4">
          <h4 className="eyebrow text-[var(--gold)]">{t.footer.follow}</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook · Epoxicos LAI"
              className="grid place-items-center w-11 h-11 border rounded-[4px] text-[var(--concrete)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              style={{ borderColor: 'rgba(226,222,214,0.15)' }}
            >
              <FacebookIcon />
            </a>
            <span
              aria-hidden="true"
              className="grid place-items-center w-11 h-11 border rounded-[4px] text-[var(--concrete)] font-mono text-xs"
              style={{ borderColor: 'rgba(226,222,214,0.15)', opacity: 0.4 }}
            >
              IG
            </span>
            <span
              aria-hidden="true"
              className="grid place-items-center w-11 h-11 border rounded-[4px] text-[var(--concrete)] font-mono text-xs"
              style={{ borderColor: 'rgba(226,222,214,0.15)', opacity: 0.4 }}
            >
              in
            </span>
          </div>
          <p className="text-[var(--concrete)] text-sm">Epoxicos LAI</p>
        </div>
      </div>

      <div className="shell py-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(226,222,214,0.08)' }}>
        <p className="text-[var(--concrete)] text-xs font-mono">{t.footer.rights}</p>
        <LanguageSwitch />
      </div>
    </footer>
  )
}
