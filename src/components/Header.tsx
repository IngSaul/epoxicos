import { useEffect, useState } from 'react'
import { useLang, waLink } from '../lib/i18n'
import { useScrolled } from '../lib/hooks'
import { Logo, WhatsAppIcon } from './ui'
import { LanguageSwitch } from './LanguageSwitch'
import { Button } from './Button'
import type { Route } from '../App'

const ITEMS: { route: Route; key: 'inicio' | 'soluciones' | 'especificaciones' | 'proyectos' | 'contacto' }[] = [
  { route: 'inicio', key: 'inicio' },
  { route: 'soluciones', key: 'soluciones' },
  { route: 'especificaciones', key: 'especificaciones' },
  { route: 'proyectos', key: 'proyectos' },
  { route: 'contacto', key: 'contacto' },
]

export function Header({ route, navigate }: { route: Route; navigate: (r: Route) => void }) {
  const { t } = useLang()
  const scrolled = useScrolled(80)
  const [open, setOpen] = useState(false)
  const solid = scrolled || route !== 'inicio' || open

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (r: Route) => {
    navigate(r)
    setOpen(false)
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
      style={{
        background: solid ? 'var(--charcoal)' : 'transparent',
        borderBottom: solid ? '1px solid rgba(201,162,74,0.25)' : '1px solid transparent',
      }}
    >
      <div className="shell flex items-center justify-between h-[76px]">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            go('inicio')
          }}
        >
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {ITEMS.map((it) => (
            <a
              key={it.route}
              href={`#${it.route}`}
              onClick={(e) => {
                e.preventDefault()
                go(it.route)
              }}
              data-active={route === it.route}
              className="navlink font-head font-medium uppercase tracking-wide text-[1rem] text-[var(--epoxy-white)]"
            >
              {t.nav[it.key]}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitch />
          <Button variant="primary" href={waLink(t.wa.generic)} external>
            {t.nav.cotizar}
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="lg:hidden grid place-items-center w-11 h-11 text-[var(--epoxy-white)]"
          aria-label={open ? t.projects.lightboxClose : 'Menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-[6px] w-6">
            <span className="h-0.5 bg-current transition-transform" style={open ? { transform: 'translateY(8px) rotate(45deg)' } : {}} />
            <span className="h-0.5 bg-current transition-opacity" style={open ? { opacity: 0 } : {}} />
            <span className="h-0.5 bg-current transition-transform" style={open ? { transform: 'translateY(-8px) rotate(-45deg)' } : {}} />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[76px] hex-bg" style={{ background: 'var(--charcoal)' }}>
          <div className="shell flex flex-col gap-6 pt-10 h-full">
            <nav className="flex flex-col gap-5" aria-label="Móvil">
              {ITEMS.map((it) => (
                <a
                  key={it.route}
                  href={`#${it.route}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(it.route)
                  }}
                  data-active={route === it.route}
                  className="navlink font-head font-semibold uppercase tracking-wide text-[2.2rem] leading-none text-[var(--epoxy-white)] w-fit"
                >
                  {t.nav[it.key]}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-5">
              <LanguageSwitch size="lg" />
              <Button variant="primary" href={waLink(t.wa.generic)} external className="w-full">
                <WhatsAppIcon size={20} /> {t.nav.cotizar}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
